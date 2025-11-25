#!/usr/bin/env python3
"""
Extract content from archive lawsuit URLs.
Processes the first 50 valid URLs chronologically.
"""

import json
import os
import time
import re
from pathlib import Path
from urllib.parse import urlparse
from datetime import datetime

import requests
from bs4 import BeautifulSoup
import html2text

# Configuration
BASE_DIR = Path(__file__).parent.parent
ARCHIVE_JSON = BASE_DIR / "archive-lawsuits.json"
OUTPUT_DIR = BASE_DIR / "extracted-content"
LOG_FILE = BASE_DIR / "extraction-log.json"

# Create output directory
OUTPUT_DIR.mkdir(exist_ok=True)

# Request settings
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}
TIMEOUT = 30
DELAY_BETWEEN_REQUESTS = 2  # seconds

# HTML to text converter
h = html2text.HTML2Text()
h.ignore_links = False
h.ignore_images = False
h.body_width = 0  # Don't wrap lines


def is_valid_url(citation):
    """Check if citation is a valid URL (not a case number)."""
    if not citation or not citation.strip():
        return False
    
    # Check if it's a case number pattern
    case_pattern = re.compile(r'^Case\s*(No\.?)?\s*\d+[:.]\d{2}-cv-\d+', re.IGNORECASE)
    if case_pattern.match(citation.strip()):
        return False
    
    # Try to parse as URL
    try:
        result = urlparse(citation)
        return result.scheme in ('http', 'https') and result.netloc
    except:
        return False


def is_deprecated_url(url):
    """Check if URL is in deprecated list."""
    # Add known deprecated URLs here
    deprecated = set([
        # Add URLs that are known to be broken
    ])
    return url in deprecated


def extract_main_content(html_content, url):
    """Extract main content from HTML, removing navigation and boilerplate."""
    soup = BeautifulSoup(html_content, 'lxml')
    
    # Remove script and style elements
    for script in soup(["script", "style", "nav", "header", "footer", "aside"]):
        script.decompose()
    
    # Try to find main content area
    # Common selectors for main content
    main_content = None
    content_selectors = [
        'main', 'article', '.content', '.post', '.entry-content',
        '#content', '#main', '.main-content', '.article-content'
    ]
    
    for selector in content_selectors:
        main_content = soup.select_one(selector)
        if main_content:
            break
    
    # If no main content found, use body
    if not main_content:
        main_content = soup.find('body') or soup
    
    # Convert to text
    text = h.handle(str(main_content))
    
    # Clean up text
    lines = text.split('\n')
    cleaned_lines = []
    for line in lines:
        line = line.strip()
        if line and len(line) > 3:  # Skip very short lines
            cleaned_lines.append(line)
    
    return '\n\n'.join(cleaned_lines)


def fetch_url_content(url):
    """Fetch content from URL with error handling."""
    try:
        response = requests.get(url, headers=HEADERS, timeout=TIMEOUT, allow_redirects=True)
        response.raise_for_status()
        
        # Check if it's a PDF
        content_type = response.headers.get('Content-Type', '').lower()
        if 'pdf' in content_type:
            return {
                'status': 'pdf',
                'content': f'[PDF file - content extraction not implemented] URL: {url}',
                'error': None
            }
        
        # Extract HTML content
        html_content = response.text
        text_content = extract_main_content(html_content, url)
        
        return {
            'status': 'success',
            'content': text_content,
            'error': None,
            'content_length': len(text_content)
        }
    
    except requests.exceptions.Timeout:
        return {
            'status': 'timeout',
            'content': None,
            'error': 'Request timed out'
        }
    except requests.exceptions.HTTPError as e:
        return {
            'status': f'http_error_{e.response.status_code}',
            'content': None,
            'error': f'HTTP {e.response.status_code}: {str(e)}'
        }
    except requests.exceptions.ConnectionError:
        return {
            'status': 'connection_error',
            'content': None,
            'error': 'Connection error'
        }
    except Exception as e:
        return {
            'status': 'error',
            'content': None,
            'error': str(e)
        }


def generate_filename(year, index, plaintiff, defendant):
    """Generate a safe filename for extracted content."""
    # Create a safe filename
    safe_plaintiff = re.sub(r'[^\w\s-]', '', plaintiff)[:20]
    safe_defendant = re.sub(r'[^\w\s-]', '', defendant)[:20]
    safe_plaintiff = re.sub(r'[-\s]+', '-', safe_plaintiff)
    safe_defendant = re.sub(r'[-\s]+', '-', safe_defendant)
    
    filename = f"lawsuit-{year}-{index:03d}-{safe_plaintiff}-v-{safe_defendant}.txt"
    return filename


def main():
    """Main extraction function."""
    # Load archive lawsuits
    print(f"Loading archive lawsuits from {ARCHIVE_JSON}...")
    with open(ARCHIVE_JSON, 'r', encoding='utf-8') as f:
        all_lawsuits = json.load(f)
    
    # Filter for valid URLs and sort chronologically
    valid_lawsuits = []
    for lawsuit in all_lawsuits:
        if is_valid_url(lawsuit['citation']) and not is_deprecated_url(lawsuit['citation']):
            valid_lawsuits.append(lawsuit)
    
    # Sort by year (oldest first)
    valid_lawsuits.sort(key=lambda x: (int(x['year']), x['plaintiff']))
    
    # Take first 50
    lawsuits_to_process = valid_lawsuits[:50]
    
    print(f"Found {len(valid_lawsuits)} valid URLs")
    print(f"Processing first {len(lawsuits_to_process)} lawsuits chronologically...")
    print()
    
    # Load existing log if it exists
    log = []
    if LOG_FILE.exists():
        with open(LOG_FILE, 'r', encoding='utf-8') as f:
            log = json.load(f)
    
    # Track processed URLs to avoid duplicates
    processed_urls = {entry['url'] for entry in log if entry.get('status') == 'success'}
    
    # Process each lawsuit
    for index, lawsuit in enumerate(lawsuits_to_process, 1):
        url = lawsuit['citation']
        
        # Skip if already processed successfully
        if url in processed_urls:
            print(f"[{index}/50] SKIPPED (already processed): {lawsuit['year']} - {lawsuit['plaintiff']} v. {lawsuit['defendant']}")
            continue
        
        print(f"[{index}/50] Processing: {lawsuit['year']} - {lawsuit['plaintiff']} v. {lawsuit['defendant']}")
        print(f"  URL: {url}")
        
        # Fetch content
        result = fetch_url_content(url)
        
        # Generate filename
        filename = generate_filename(
            lawsuit['year'],
            index,
            lawsuit['plaintiff'],
            lawsuit['defendant']
        )
        filepath = OUTPUT_DIR / filename
        
        # Save content if successful
        if result['status'] == 'success' and result['content']:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(f"URL: {url}\n")
                f.write(f"Year: {lawsuit['year']}\n")
                f.write(f"Plaintiff: {lawsuit['plaintiff']}\n")
                f.write(f"Defendant: {lawsuit['defendant']}\n")
                f.write(f"Extracted: {datetime.now().isoformat()}\n")
                f.write("\n" + "="*80 + "\n\n")
                f.write(result['content'])
            
            print(f"  ✓ Saved to {filename} ({result['content_length']} chars)")
        else:
            print(f"  ✗ Failed: {result['status']} - {result.get('error', 'Unknown error')}")
        
        # Log result
        log_entry = {
            'index': index,
            'year': lawsuit['year'],
            'plaintiff': lawsuit['plaintiff'],
            'defendant': lawsuit['defendant'],
            'url': url,
            'status': result['status'],
            'filename': filename if result['status'] == 'success' else None,
            'error': result.get('error'),
            'extracted_at': datetime.now().isoformat(),
            'content_length': result.get('content_length', 0)
        }
        log.append(log_entry)
        
        # Save log after each request
        with open(LOG_FILE, 'w', encoding='utf-8') as f:
            json.dump(log, f, indent=2)
        
        # Delay between requests
        if index < len(lawsuits_to_process):
            time.sleep(DELAY_BETWEEN_REQUESTS)
        
        print()
    
    # Summary
    print("="*80)
    print("Extraction Summary:")
    print(f"  Total processed: {len(lawsuits_to_process)}")
    successful = sum(1 for entry in log[-len(lawsuits_to_process):] if entry['status'] == 'success')
    print(f"  Successful: {successful}")
    print(f"  Failed: {len(lawsuits_to_process) - successful}")
    print(f"  Log saved to: {LOG_FILE}")
    print(f"  Content saved to: {OUTPUT_DIR}")


if __name__ == '__main__':
    main()

