import { Readability } from '@mozilla/readability'
import { JSDOM } from 'jsdom'
import type { ExtractedArticle } from './types'
import { logger } from '@/lib/logger'

/**
 * Clean and extract main content from HTML
 */
export function extractMainContent(html: string, url: string): string {
  try {
    const dom = new JSDOM(html, { url })
    const reader = new Readability(dom.window.document)
    const article = reader.parse()

    if (article) {
      return article.textContent || article.content || ''
    }

    // Fallback: extract text from body
    const body = dom.window.document.body
    return body?.textContent || ''
  } catch (error) {
    logger.error('Failed to extract content with Readability', error)
    // Fallback: basic text extraction
    try {
      const dom = new JSDOM(html)
      return dom.window.document.body?.textContent || ''
    } catch {
      return ''
    }
  }
}

/**
 * Generate an excerpt from content
 */
export function generateExcerpt(content: string, maxLength: number = 200): string {
  if (!content) return ''

  // Remove extra whitespace and newlines
  const cleaned = content.replace(/\s+/g, ' ').trim()

  if (cleaned.length <= maxLength) {
    return cleaned
  }

  // Truncate at word boundary
  const truncated = cleaned.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')

  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...'
  }

  return truncated + '...'
}

/**
 * Clean HTML content and extract text
 */
export function cleanHTML(html: string): string {
  try {
    const dom = new JSDOM(html)
    const body = dom.window.document.body

    if (!body) return ''

    // Remove script and style elements
    const scripts = body.querySelectorAll('script, style, noscript')
    scripts.forEach((el: Element) => el.remove())

    // Get text content
    return body.textContent || ''
  } catch (error) {
    logger.error('Failed to clean HTML', error)
    return ''
  }
}

/**
 * Extract tags/keywords from content
 */
export function extractTags(content: string, title: string): string[] {
  const text = `${title} ${content}`.toLowerCase()
  const accessibilityKeywords = [
    'wcag',
    'accessibility',
    'a11y',
    'ada',
    'section 508',
    'screen reader',
    'keyboard navigation',
    'aria',
    'semantic html',
    'alt text',
    'contrast',
    'focus',
    'assistive technology',
    'inclusive design',
    'web accessibility',
    'digital accessibility',
  ]

  const foundTags: string[] = []
  accessibilityKeywords.forEach((keyword) => {
    if (text.includes(keyword)) {
      foundTags.push(keyword)
    }
  })

  return foundTags.slice(0, 10) // Limit to 10 tags
}

/**
 * Process and clean article content
 */
export function processArticleContent(
  html: string,
  url: string,
  title: string
): { content: string; excerpt: string; tags: string[] } {
  const content = extractMainContent(html, url) || cleanHTML(html)
  const excerpt = generateExcerpt(content)
  const tags = extractTags(content, title)

  return {
    content: content.trim(),
    excerpt: excerpt.trim(),
    tags,
  }
}

