import { NextRequest, NextResponse } from 'next/server'
import { extractArticles } from '@/lib/blog/extractor'
import { generateBlogPost } from '@/lib/blog/generator'
import { factCheckBlogPost } from '@/lib/blog/fact-checker'
import { logger } from '@/lib/logger'

/**
 * Test endpoint for blog generation (development only)
 * This endpoint allows testing without cron secret
 * Should be disabled or protected in production
 */
export async function GET(request: NextRequest) {
  // Only allow in development
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)
  const testOnly = searchParams.get('test-only') === 'true'

  try {
    const results: Record<string, unknown> = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    }

    // Check environment variables
    const requiredEnvVars = {
      OPENROUTER_API_KEY: !!process.env.OPENROUTER_API_KEY,
      OPENROUTER_BLOG_MODEL: !!process.env.OPENROUTER_BLOG_MODEL,
      OPENROUTER_FACT_CHECK_MODEL: !!process.env.OPENROUTER_FACT_CHECK_MODEL,
      CRON_SECRET: !!process.env.CRON_SECRET,
      REVALIDATE_SECRET: !!process.env.REVALIDATE_SECRET,
    }

    results.envCheck = requiredEnvVars

    const missingVars = Object.entries(requiredEnvVars)
      .filter(([, value]) => !value)
      .map(([key]) => key)

    if (missingVars.length > 0) {
      return NextResponse.json({
        ...results,
        error: 'Missing environment variables',
        missing: missingVars,
      })
    }

    // Step 1: Test article extraction
    logger.log('Testing article extraction...')
    const articles = await extractArticles()
    results.extraction = {
      success: true,
      articleCount: articles.length,
      articles: articles.slice(0, 3).map((a) => ({
        title: a.title,
        source: a.source,
        url: a.url,
        publishedDate: a.publishedDate,
      })),
    }

    if (testOnly) {
      return NextResponse.json({
        ...results,
        message: 'Test mode - extraction only',
      })
    }

    if (articles.length === 0) {
      return NextResponse.json({
        ...results,
        message: 'No articles found in last 48 hours',
        note: 'This is normal if there are no recent articles. Try again later or add test articles.',
      })
    }

    // Step 2: Test blog generation (use first 3 articles for speed)
    logger.log('Testing blog generation...')
    const testArticles = articles.slice(0, 3)
    const blogContent = await generateBlogPost(testArticles)
    results.generation = {
      success: true,
      contentLength: blogContent.length,
      preview: blogContent.substring(0, 300),
    }

    // Step 3: Test fact-checking
    logger.log('Testing fact-checking...')
    const title = 'Test Blog Post'
    const factCheckResult = await factCheckBlogPost(blogContent, title)
    results.factCheck = {
      success: true,
      verified: factCheckResult.verified,
      notes: factCheckResult.notes,
    }

    return NextResponse.json({
      ...results,
      success: true,
      message: 'All tests passed! Blog generation system is working correctly.',
    })
  } catch (error) {
    logger.error('Test failed', error)
    const errorResults: Record<string, unknown> = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? (error as Error).stack : undefined,
    }
    return NextResponse.json(errorResults, { status: 500 })
  }
}

