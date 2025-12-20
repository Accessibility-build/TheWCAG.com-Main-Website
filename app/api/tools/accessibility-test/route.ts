import { NextRequest, NextResponse } from 'next/server'
import { JSDOM } from 'jsdom'
import { logger } from '@/lib/logger'

/**
 * Accessibility Testing API Route (Lightweight Version)
 * 
 * This route uses fetch + JSDOM + axe-core for Vercel free tier compatibility.
 * 
 * Limitations:
 * - Only tests static HTML (JavaScript-rendered content is not executed)
 * - No screenshot capture
 * - Some dynamic accessibility issues may not be detected
 * 
 * For full JavaScript rendering, use the "Test Current Page" feature in the browser.
 */

// Maximum timeout for page fetch
const MAX_TIMEOUT = 25000

// Validate URL format and prevent SSRF attacks
function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString)
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(url.protocol)) {
      return false
    }
    // Block localhost and private IPs (basic SSRF protection)
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

interface AxeResults {
  violations: ProcessedViolation[]
  passes: unknown[]
  incomplete: unknown[]
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
      finalUrl = response.url // Handle redirects
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

    // Parse HTML with JSDOM
    const dom = new JSDOM(htmlContent, {
      url: finalUrl,
      runScripts: 'outside-only', // Don't run scripts for security
      resources: 'usable', // Allow loading external resources like CSS
      pretendToBeVisual: true,
    })

    const document = dom.window.document

    // Extract page metadata
    const pageMetadata = {
      title: document.title || undefined,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') ||
                   document.querySelector('meta[property="og:description"]')?.getAttribute('content') || undefined,
      language: document.documentElement.lang || undefined,
    }

    // Load axe-core
    const axeResponse = await fetch('https://unpkg.com/axe-core@4.10.0/axe.min.js')
    if (!axeResponse.ok) {
      throw new Error('Failed to load axe-core from CDN')
    }
    const axeScript = await axeResponse.text()

    // Inject axe-core into JSDOM
    const scriptElement = document.createElement('script')
    scriptElement.textContent = axeScript
    document.head.appendChild(scriptElement)

    // Evaluate the script in JSDOM context
    dom.window.eval(axeScript)

    // Run axe-core test
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const axe = (dom.window as any).axe

    if (!axe) {
      throw new Error('axe-core failed to initialize')
    }

    const results: AxeResults = await axe.run(document, {
      tags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'],
      rules: {
        // Enable all rules
      },
    })

    // Clean up JSDOM
    dom.window.close()

    // Process and return results
    const processedResults = {
      url: finalUrl,
      timestamp: new Date().toISOString(),
      pageMetadata,
      violations: results.violations || [],
      passes: results.passes || [],
      incomplete: results.incomplete || [],
      summary: {
        violations: results.violations?.length || 0,
        passes: results.passes?.length || 0,
        incomplete: results.incomplete?.length || 0,
      },
      // Flag that this is a static analysis (no JS execution)
      staticAnalysis: true,
      staticAnalysisNote: 'This test analyzed the static HTML of the page. JavaScript-rendered content was not executed. For complete testing including dynamic content, use the "Test Current Page" feature or browser extensions like axe DevTools.',
    }

    logger.log(
      `Accessibility test completed for ${finalUrl}: ${processedResults.summary.violations} violations found`
    )

    return NextResponse.json(processedResults, { status: 200 })
  } catch (error) {
    logger.error('Accessibility test failed', error)

    // Handle specific error types
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

      if (error.message.includes('CORS') || error.message.includes('blocked')) {
        return NextResponse.json(
          {
            error: 'Access blocked',
            message: 'Unable to access the URL due to security restrictions.',
          },
          { status: 403 }
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
