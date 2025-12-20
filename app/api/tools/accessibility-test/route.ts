import { NextRequest, NextResponse } from 'next/server'
import * as cheerio from 'cheerio'
import { logger } from '@/lib/logger'

/**
 * Accessibility Testing API Route (Lightweight Cheerio Version)
 * 
 * This route uses fetch + Cheerio for Vercel free tier compatibility.
 * It performs static HTML analysis to detect common accessibility issues.
 * 
 * Limitations:
 * - Only tests static HTML (JavaScript-rendered content is not executed)
 * - Checks for common issues but not comprehensive WCAG compliance
 * - No screenshot capture
 * 
 * For full JavaScript rendering and comprehensive testing, use the 
 * "Test Current Page" feature in the browser which runs axe-core client-side.
 */

// Maximum timeout for page fetch
const MAX_TIMEOUT = 25000

// Validate URL format and prevent SSRF attacks
function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString)
    if (!['http:', 'https:'].includes(url.protocol)) {
      return false
    }
    const hostname = url.hostname.toLowerCase()
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.startsWith('172.16.') ||
      hostname.startsWith('172.17.') ||
      hostname.startsWith('172.18.') ||
      hostname.startsWith('172.19.') ||
      hostname.startsWith('172.20.') ||
      hostname.startsWith('172.21.') ||
      hostname.startsWith('172.22.') ||
      hostname.startsWith('172.23.') ||
      hostname.startsWith('172.24.') ||
      hostname.startsWith('172.25.') ||
      hostname.startsWith('172.26.') ||
      hostname.startsWith('172.27.') ||
      hostname.startsWith('172.28.') ||
      hostname.startsWith('172.29.') ||
      hostname.startsWith('172.30.') ||
      hostname.startsWith('172.31.') ||
      hostname === '0.0.0.0'
    ) {
      return false
    }
    return true
  } catch {
    return false
  }
}

interface ViolationNode {
  html: string
  target: string[]
  failureSummary?: string
}

interface ProcessedViolation {
  id: string
  impact?: string
  description: string
  help: string
  helpUrl: string
  tags: string[]
  nodes: ViolationNode[]
}

interface PassedCheck {
  id: string
  description: string
  help: string
  helpUrl: string
  tags: string[]
  nodes: { html: string; target: string[] }[]
}

/**
 * Perform accessibility checks using Cheerio
 */
function performAccessibilityChecks($: cheerio.CheerioAPI): {
  violations: ProcessedViolation[]
  passes: PassedCheck[]
  incomplete: ProcessedViolation[]
} {
  const violations: ProcessedViolation[] = []
  const passes: PassedCheck[] = []
  const incomplete: ProcessedViolation[] = []

  // 1. Check for images without alt text
  const imagesWithoutAlt: ViolationNode[] = []
  const imagesWithAlt: { html: string; target: string[] }[] = []
  $('img').each((_, el) => {
    const $el = $(el)
    const alt = $el.attr('alt')
    const src = $el.attr('src') || ''
    const selector = `img[src="${src}"]`
    
    if (alt === undefined) {
      imagesWithoutAlt.push({
        html: $.html(el),
        target: [selector],
        failureSummary: 'Element does not have an alt attribute'
      })
    } else {
      imagesWithAlt.push({
        html: $.html(el),
        target: [selector]
      })
    }
  })

  if (imagesWithoutAlt.length > 0) {
    violations.push({
      id: 'image-alt',
      impact: 'critical',
      description: 'Ensures <img> elements have alternate text or a role of none or presentation',
      help: 'Images must have alternate text',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/image-alt',
      tags: ['wcag2a', 'wcag111', 'section508', 'ACT'],
      nodes: imagesWithoutAlt
    })
  }
  if (imagesWithAlt.length > 0) {
    passes.push({
      id: 'image-alt',
      description: 'Ensures <img> elements have alternate text or a role of none or presentation',
      help: 'Images must have alternate text',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/image-alt',
      tags: ['wcag2a', 'wcag111'],
      nodes: imagesWithAlt
    })
  }

  // 2. Check for form inputs without labels
  const inputsWithoutLabels: ViolationNode[] = []
  const inputsWithLabels: { html: string; target: string[] }[] = []
  $('input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"])').each((_, el) => {
    const $el = $(el)
    const id = $el.attr('id')
    const ariaLabel = $el.attr('aria-label')
    const ariaLabelledby = $el.attr('aria-labelledby')
    const title = $el.attr('title')
    const name = $el.attr('name') || $el.attr('type') || 'input'
    const selector = id ? `#${id}` : `input[name="${name}"]`

    const hasLabel = id && $(`label[for="${id}"]`).length > 0
    const hasAriaLabel = !!ariaLabel || !!ariaLabelledby
    const hasTitle = !!title
    const isWrappedInLabel = $el.closest('label').length > 0

    if (!hasLabel && !hasAriaLabel && !hasTitle && !isWrappedInLabel) {
      inputsWithoutLabels.push({
        html: $.html(el),
        target: [selector],
        failureSummary: 'Form element does not have an associated label'
      })
    } else {
      inputsWithLabels.push({
        html: $.html(el),
        target: [selector]
      })
    }
  })

  if (inputsWithoutLabels.length > 0) {
    violations.push({
      id: 'label',
      impact: 'critical',
      description: 'Ensures every form element has a label',
      help: 'Form elements must have labels',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/label',
      tags: ['wcag2a', 'wcag412', 'section508'],
      nodes: inputsWithoutLabels
    })
  }
  if (inputsWithLabels.length > 0) {
    passes.push({
      id: 'label',
      description: 'Ensures every form element has a label',
      help: 'Form elements must have labels',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/label',
      tags: ['wcag2a', 'wcag412'],
      nodes: inputsWithLabels
    })
  }

  // 3. Check for buttons without accessible names
  const buttonsWithoutNames: ViolationNode[] = []
  const buttonsWithNames: { html: string; target: string[] }[] = []
  $('button, [role="button"], input[type="submit"], input[type="button"]').each((_, el) => {
    const $el = $(el)
    const text = $el.text().trim()
    const ariaLabel = $el.attr('aria-label')
    const ariaLabelledby = $el.attr('aria-labelledby')
    const title = $el.attr('title')
    const value = $el.attr('value')
    const selector = $el.attr('id') ? `#${$el.attr('id')}` : 'button'

    const hasAccessibleName = text || ariaLabel || ariaLabelledby || title || value

    if (!hasAccessibleName) {
      buttonsWithoutNames.push({
        html: $.html(el),
        target: [selector],
        failureSummary: 'Element does not have an accessible name'
      })
    } else {
      buttonsWithNames.push({
        html: $.html(el),
        target: [selector]
      })
    }
  })

  if (buttonsWithoutNames.length > 0) {
    violations.push({
      id: 'button-name',
      impact: 'critical',
      description: 'Ensures buttons have discernible text',
      help: 'Buttons must have discernible text',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/button-name',
      tags: ['wcag2a', 'wcag412', 'section508'],
      nodes: buttonsWithoutNames
    })
  }
  if (buttonsWithNames.length > 0) {
    passes.push({
      id: 'button-name',
      description: 'Ensures buttons have discernible text',
      help: 'Buttons must have discernible text',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/button-name',
      tags: ['wcag2a', 'wcag412'],
      nodes: buttonsWithNames
    })
  }

  // 4. Check for links without accessible names
  const linksWithoutNames: ViolationNode[] = []
  const linksWithNames: { html: string; target: string[] }[] = []
  $('a[href]').each((_, el) => {
    const $el = $(el)
    const text = $el.text().trim()
    const ariaLabel = $el.attr('aria-label')
    const ariaLabelledby = $el.attr('aria-labelledby')
    const title = $el.attr('title')
    const hasImage = $el.find('img[alt]').length > 0
    const href = $el.attr('href') || ''
    const selector = `a[href="${href}"]`

    const hasAccessibleName = text || ariaLabel || ariaLabelledby || title || hasImage

    if (!hasAccessibleName) {
      linksWithoutNames.push({
        html: $.html(el),
        target: [selector],
        failureSummary: 'Element does not have an accessible name'
      })
    } else {
      linksWithNames.push({
        html: $.html(el),
        target: [selector]
      })
    }
  })

  if (linksWithoutNames.length > 0) {
    violations.push({
      id: 'link-name',
      impact: 'serious',
      description: 'Ensures links have discernible text',
      help: 'Links must have discernible text',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/link-name',
      tags: ['wcag2a', 'wcag244', 'wcag412', 'section508'],
      nodes: linksWithoutNames
    })
  }
  if (linksWithNames.length > 0) {
    passes.push({
      id: 'link-name',
      description: 'Ensures links have discernible text',
      help: 'Links must have discernible text',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/link-name',
      tags: ['wcag2a', 'wcag244'],
      nodes: linksWithNames
    })
  }

  // 5. Check for missing document language
  const htmlLang = $('html').attr('lang')
  if (!htmlLang) {
    violations.push({
      id: 'html-has-lang',
      impact: 'serious',
      description: 'Ensures every HTML document has a lang attribute',
      help: '<html> element must have a lang attribute',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/html-has-lang',
      tags: ['wcag2a', 'wcag311'],
      nodes: [{
        html: '<html>',
        target: ['html'],
        failureSummary: 'The <html> element does not have a lang attribute'
      }]
    })
  } else {
    passes.push({
      id: 'html-has-lang',
      description: 'Ensures every HTML document has a lang attribute',
      help: '<html> element must have a lang attribute',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/html-has-lang',
      tags: ['wcag2a', 'wcag311'],
      nodes: [{ html: `<html lang="${htmlLang}">`, target: ['html'] }]
    })
  }

  // 6. Check for missing page title
  const title = $('title').text().trim()
  if (!title) {
    violations.push({
      id: 'document-title',
      impact: 'serious',
      description: 'Ensures each HTML document contains a non-empty <title> element',
      help: 'Documents must have <title> element',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/document-title',
      tags: ['wcag2a', 'wcag242'],
      nodes: [{
        html: '<head>...</head>',
        target: ['head'],
        failureSummary: 'Document does not have a non-empty <title> element'
      }]
    })
  } else {
    passes.push({
      id: 'document-title',
      description: 'Ensures each HTML document contains a non-empty <title> element',
      help: 'Documents must have <title> element',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/document-title',
      tags: ['wcag2a', 'wcag242'],
      nodes: [{ html: `<title>${title}</title>`, target: ['title'] }]
    })
  }

  // 7. Check for proper heading hierarchy
  const headings = $('h1, h2, h3, h4, h5, h6')
  let previousLevel = 0
  let hasHeadingIssue = false
  const headingNodes: ViolationNode[] = []

  headings.each((_, el) => {
    const $el = $(el)
    const tagName = el.tagName.toLowerCase()
    const level = parseInt(tagName.charAt(1))
    
    if (previousLevel > 0 && level > previousLevel + 1) {
      hasHeadingIssue = true
      headingNodes.push({
        html: $.html(el),
        target: [tagName],
        failureSummary: `Heading levels should only increase by one. Expected h${previousLevel + 1} or lower, found ${tagName}`
      })
    }
    previousLevel = level
  })

  if (hasHeadingIssue) {
    violations.push({
      id: 'heading-order',
      impact: 'moderate',
      description: 'Ensures the order of headings is semantically correct',
      help: 'Heading levels should only increase by one',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/heading-order',
      tags: ['wcag2a', 'best-practice'],
      nodes: headingNodes
    })
  } else if (headings.length > 0) {
    passes.push({
      id: 'heading-order',
      description: 'Ensures the order of headings is semantically correct',
      help: 'Heading levels should only increase by one',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/heading-order',
      tags: ['wcag2a', 'best-practice'],
      nodes: [{ html: 'Headings are in correct order', target: ['h1, h2, h3, h4, h5, h6'] }]
    })
  }

  // 8. Check for empty links
  const emptyLinks: ViolationNode[] = []
  $('a[href]').each((_, el) => {
    const $el = $(el)
    const text = $el.text().trim()
    const hasContent = text || $el.find('img, svg, [aria-label]').length > 0 || $el.attr('aria-label')
    
    if (!hasContent && $el.children().length === 0) {
      emptyLinks.push({
        html: $.html(el),
        target: [`a[href="${$el.attr('href')}"]`],
        failureSummary: 'Link is empty and has no accessible name'
      })
    }
  })

  if (emptyLinks.length > 0) {
    violations.push({
      id: 'empty-links',
      impact: 'serious',
      description: 'Ensures links are not empty',
      help: 'Links must not be empty',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/link-name',
      tags: ['wcag2a', 'wcag244'],
      nodes: emptyLinks
    })
  }

  // 9. Check for missing landmark regions
  const hasMain = $('main, [role="main"]').length > 0
  const hasNav = $('nav, [role="navigation"]').length > 0
  
  if (!hasMain) {
    incomplete.push({
      id: 'landmark-main-is-top-level',
      impact: 'moderate',
      description: 'Ensures the main landmark is at top level',
      help: 'Page should contain a main landmark',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level',
      tags: ['wcag2a', 'best-practice'],
      nodes: [{
        html: '<body>',
        target: ['body'],
        failureSummary: 'Document does not have a main landmark'
      }]
    })
  }

  // 10. Check for tables without headers
  const tablesWithoutHeaders: ViolationNode[] = []
  $('table').each((_, el) => {
    const $el = $(el)
    const hasTh = $el.find('th').length > 0
    const hasScope = $el.find('[scope]').length > 0
    const hasHeaders = $el.find('[headers]').length > 0
    
    if (!hasTh && !hasScope && !hasHeaders) {
      tablesWithoutHeaders.push({
        html: $.html(el).substring(0, 200) + '...',
        target: ['table'],
        failureSummary: 'Data table does not have header cells'
      })
    }
  })

  if (tablesWithoutHeaders.length > 0) {
    violations.push({
      id: 'td-has-header',
      impact: 'critical',
      description: 'Ensures each cell in a data table is associated with a header',
      help: 'All data cells must have table headers',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/td-has-header',
      tags: ['wcag2a', 'wcag131', 'section508'],
      nodes: tablesWithoutHeaders
    })
  }

  return { violations, passes, incomplete }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url } = body

    // Validate input
    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'URL is required and must be a string' },
        { status: 400 }
      )
    }

    // Validate URL format and security
    if (!isValidUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid URL format or URL not allowed for security reasons' },
        { status: 400 }
      )
    }

    logger.log(`Starting accessibility test for URL: ${url}`)

    // Fetch the HTML content
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), MAX_TIMEOUT)

    let htmlContent: string
    let finalUrl: string = url

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; AccessibilityTester/1.0; +https://thewcag.com)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
        },
      })
      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      htmlContent = await response.text()
      finalUrl = response.url
    } catch (error) {
      clearTimeout(timeoutId)
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return NextResponse.json(
            {
              error: 'Timeout',
              message: 'The page took too long to respond. Please try again.',
            },
            { status: 408 }
          )
        }
      }
      throw error
    }

    // Parse HTML with Cheerio
    const $ = cheerio.load(htmlContent)

    // Extract page metadata
    const pageMetadata = {
      title: $('title').text().trim() || undefined,
      description: $('meta[name="description"]').attr('content') ||
                   $('meta[property="og:description"]').attr('content') || undefined,
      language: $('html').attr('lang') || undefined,
    }

    // Perform accessibility checks
    const { violations, passes, incomplete } = performAccessibilityChecks($)

    // Process and return results
    const processedResults = {
      url: finalUrl,
      timestamp: new Date().toISOString(),
      pageMetadata,
      violations,
      passes,
      incomplete,
      summary: {
        violations: violations.length,
        passes: passes.length,
        incomplete: incomplete.length,
      },
      staticAnalysis: true,
      staticAnalysisNote: 'This test analyzed the static HTML of the page using pattern-based checks. JavaScript-rendered content was not executed. For comprehensive WCAG testing including dynamic content, use the "Test Current Page" feature or browser extensions like axe DevTools.',
    }

    logger.log(
      `Accessibility test completed for ${finalUrl}: ${processedResults.summary.violations} violations found`
    )

    return NextResponse.json(processedResults, { status: 200 })
  } catch (error) {
    logger.error('Accessibility test failed', error)

    if (error instanceof Error) {
      if (error.message.includes('fetch failed') || error.message.includes('ENOTFOUND')) {
        return NextResponse.json(
          {
            error: 'Network error',
            message: 'Unable to access the URL. Please check if the URL is correct and accessible.',
          },
          { status: 400 }
        )
      }

      if (error.message.startsWith('HTTP ')) {
        return NextResponse.json(
          {
            error: 'Page not accessible',
            message: error.message,
          },
          { status: 400 }
        )
      }
    }

    return NextResponse.json(
      {
        error: 'Test failed',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    )
  }
}
