import { NextRequest, NextResponse } from 'next/server'
import puppeteerCore from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
import { logger } from '@/lib/logger'

/**
 * Accessibility Testing API Route
 * 
 * This route uses puppeteer-core with @sparticuz/chromium for Vercel serverless compatibility.
 * 
 * For local development:
 * - Set PUPPETEER_EXECUTABLE_PATH environment variable to your Chrome/Chromium path
 * - Or install puppeteer (not puppeteer-core) which includes Chromium
 * 
 * For Vercel deployment:
 * - Uses @sparticuz/chromium which is optimized for serverless environments
 * - Configured in vercel.json with maxDuration: 60s and memory: 3008MB
 */

// Maximum timeout for page load and test execution (50 seconds for Vercel)
// Vercel serverless functions have a max timeout of 60s, so we use 50s to be safe
const MAX_TIMEOUT = 50000

// Maximum number of screenshots to capture (to prevent timeout)
const MAX_SCREENSHOTS = 10

// Maximum screenshot dimensions
const MAX_SCREENSHOT_WIDTH = 400
const MAX_SCREENSHOT_HEIGHT = 300

// Configure Chromium for serverless (use setter syntax, not method call)
// graphicsMode = false disables WebGL to reduce memory usage
chromium.setGraphicsMode = false

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

interface ScreenshotResult {
  data: string
  width: number
  height: number
}

interface ViolationNode {
  html: string
  target: string[]
  failureSummary?: string
  screenshot?: ScreenshotResult
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url, captureScreenshots = true } = body

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

    // Determine if we're in a serverless environment (Vercel)
    const isServerless = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME

    // Get executable path for serverless
    let executablePath: string | undefined
    if (isServerless) {
      try {
        executablePath = await chromium.executablePath()
      } catch (error) {
        logger.error('Failed to get Chromium executable path', error)
        throw new Error('Failed to initialize browser in serverless environment')
      }
    } else {
      // For local development, use provided path
      // Set PUPPETEER_EXECUTABLE_PATH environment variable to your Chrome/Chromium path
      executablePath = process.env.PUPPETEER_EXECUTABLE_PATH
      if (!executablePath) {
        throw new Error(
          'PUPPETEER_EXECUTABLE_PATH not set. For local development, set this environment variable to your Chrome/Chromium executable path, or install puppeteer (not puppeteer-core) which includes Chromium.'
        )
      }
    }

    // Launch Puppeteer browser with serverless-compatible configuration
    const browser = await puppeteerCore.launch({
      args: isServerless
        ? [
            ...chromium.args,
            '--hide-scrollbars',
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
          ]
        : [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--disable-gpu',
          ],
      defaultViewport: isServerless ? chromium.defaultViewport : { width: 1280, height: 720 },
      executablePath,
      headless: isServerless ? chromium.headless : true,
    })

    try {
      const page = await browser.newPage()

      // Set viewport
      await page.setViewport({ width: 1280, height: 720 })

      // Set timeout
      page.setDefaultTimeout(MAX_TIMEOUT)
      page.setDefaultNavigationTimeout(MAX_TIMEOUT)

      // Navigate to URL
      await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: MAX_TIMEOUT,
      })

      // Extract page metadata
      const pageMetadata = await page.evaluate(() => {
        const getMetaContent = (name: string): string | undefined => {
          const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`) as HTMLMetaElement
          return meta?.content || undefined
        }

        return {
          title: document.title || undefined,
          description: getMetaContent('description') || getMetaContent('og:description'),
          language: document.documentElement.lang || undefined,
        }
      })

      // Inject axe-core script from CDN (more reliable in serverless)
      // In serverless, we can't reliably read from node_modules due to file system limitations
      const axeResponse = await fetch('https://unpkg.com/axe-core@4.10.0/axe.min.js')
      if (!axeResponse.ok) {
        throw new Error('Failed to load axe-core from CDN')
      }
      const axeScript = await axeResponse.text()
      await page.addScriptTag({ content: axeScript })

      // Run axe-core test
      const results = await page.evaluate(() => {
        return new Promise((resolve, reject) => {
          // @ts-expect-error - axe is injected dynamically
          if (typeof window.axe === 'undefined') {
            reject(new Error('axe-core failed to load'))
            return
          }

          // @ts-expect-error - axe is injected dynamically
          window.axe
            .run(document, {
              tags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'],
              rules: {
                // Enable all rules
              },
            })
            .then((results: unknown) => {
              resolve(results)
            })
            .catch((error: Error) => {
              reject(error)
            })
        })
      })

      // Type assertion for results
      const typedResults = results as {
        violations: ProcessedViolation[]
        passes: unknown[]
        incomplete: unknown[]
      }

      // Capture screenshots for violations if enabled
      if (captureScreenshots && typedResults.violations.length > 0) {
        logger.log(`Capturing screenshots for ${Math.min(typedResults.violations.length, MAX_SCREENSHOTS)} violations`)
        
        let screenshotCount = 0
        
        for (const violation of typedResults.violations) {
          if (screenshotCount >= MAX_SCREENSHOTS) break
          
          for (const node of violation.nodes) {
            if (screenshotCount >= MAX_SCREENSHOTS) break
            
            try {
              const selector = node.target[0]
              if (!selector) continue
              
              // Try to find and screenshot the element
              const screenshot = await captureElementScreenshot(page, selector)
              if (screenshot) {
                node.screenshot = screenshot
                screenshotCount++
              }
            } catch (error) {
              // Log but don't fail - screenshots are optional
              logger.log(`Failed to capture screenshot for selector: ${node.target[0]}`)
            }
          }
        }
        
        logger.log(`Captured ${screenshotCount} screenshots`)
      }

      await browser.close()

      // Process and return results
      const processedResults = {
        url,
        timestamp: new Date().toISOString(),
        pageMetadata,
        violations: typedResults.violations || [],
        passes: typedResults.passes || [],
        incomplete: typedResults.incomplete || [],
        summary: {
          violations: typedResults.violations?.length || 0,
          passes: typedResults.passes?.length || 0,
          incomplete: typedResults.incomplete?.length || 0,
        },
      }

      logger.log(
        `Accessibility test completed for ${url}: ${processedResults.summary.violations} violations found`
      )

      return NextResponse.json(processedResults, { status: 200 })
    } catch (error) {
      await browser.close()
      throw error
    }
  } catch (error) {
    logger.error('Accessibility test failed', error)

    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('Navigation timeout')) {
        return NextResponse.json(
          {
            error: 'Page load timeout',
            message: 'The page took too long to load. Please try again or check if the URL is accessible.',
          },
          { status: 408 }
        )
      }

      if (error.message.includes('net::ERR')) {
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
            message: 'Unable to access the URL due to CORS or security restrictions.',
          },
          { status: 403 }
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

/**
 * Capture a screenshot of an element
 */
async function captureElementScreenshot(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  page: any,
  selector: string
): Promise<ScreenshotResult | null> {
  try {
    // Get element bounding box
    const boundingBox = await page.evaluate((sel: string) => {
      const element = document.querySelector(sel)
      if (!element) return null
      
      const rect = element.getBoundingClientRect()
      
      // Check if element is visible
      const style = window.getComputedStyle(element)
      if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
        return null
      }
      
      // Check if element has dimensions
      if (rect.width === 0 || rect.height === 0) {
        return null
      }
      
      return {
        x: rect.x + window.scrollX,
        y: rect.y + window.scrollY,
        width: Math.min(rect.width, 800), // Cap width
        height: Math.min(rect.height, 600), // Cap height
      }
    }, selector)

    if (!boundingBox) {
      return null
    }

    // Add padding around the element
    const padding = 10
    const clip = {
      x: Math.max(0, boundingBox.x - padding),
      y: Math.max(0, boundingBox.y - padding),
      width: Math.min(boundingBox.width + padding * 2, MAX_SCREENSHOT_WIDTH),
      height: Math.min(boundingBox.height + padding * 2, MAX_SCREENSHOT_HEIGHT),
    }

    // Capture screenshot
    const screenshotBuffer = await page.screenshot({
      clip,
      encoding: 'base64',
      type: 'jpeg',
      quality: 70, // Lower quality for smaller file size
    })

    return {
      data: `data:image/jpeg;base64,${screenshotBuffer}`,
      width: clip.width,
      height: clip.height,
    }
  } catch (error) {
    logger.log(`Screenshot capture error: ${error}`)
    return null
  }
}
