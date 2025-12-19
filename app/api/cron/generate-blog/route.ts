import { NextRequest, NextResponse } from 'next/server'
import { extractArticles } from '@/lib/blog/extractor'
import { generateBlogPost } from '@/lib/blog/generator'
import { factCheckBlogPost } from '@/lib/blog/fact-checker'
import { saveBlogPost, generateSlug, blogPostExists } from '@/lib/blog/storage'
import type { BlogPost } from '@/lib/blog/types'
import { logger } from '@/lib/logger'

/**
 * Cron endpoint for automated blog generation
 * Runs every 48 hours via Vercel Cron
 */
export async function GET(request: NextRequest) {
  try {
    // Verify this is a Vercel cron request
    const userAgent = request.headers.get('user-agent')
    const isVercelCron = userAgent === 'vercel-cron/1.0'

    // Optional: Verify cron secret if configured
    const cronSecret = process.env.CRON_SECRET
    if (cronSecret) {
      const authHeader = request.headers.get('authorization')
      const vercelSecret = request.headers.get('x-vercel-cron-secret')

      // Check if secret matches (if provided)
      if (authHeader && authHeader !== `Bearer ${cronSecret}`) {
        if (!vercelSecret || vercelSecret !== cronSecret) {
          // Only enforce if not a Vercel cron request
          if (!isVercelCron) {
            logger.warn('Invalid cron secret')
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
          }
        }
      }
    }

    // Log if it's a Vercel cron request
    if (isVercelCron) {
      logger.log('Received Vercel cron job request')
    }

    logger.log('Starting blog generation process...')

    // Step 1: Extract articles from last 48 hours
    logger.log('Step 1: Extracting articles...')
    const articles = await extractArticles()

    if (articles.length === 0) {
      logger.log('No articles found in the last 48 hours')
      return NextResponse.json({
        success: true,
        message: 'No articles found',
        articlesCount: 0,
        blogPostCreated: false,
      })
    }

    logger.log(`Found ${articles.length} articles`)

    // Step 2: Generate blog post from articles
    logger.log('Step 2: Generating blog post...')
    let blogContent: string
    try {
      blogContent = await generateBlogPost(articles)
    } catch (error) {
      logger.error('Blog generation failed', error)
      return NextResponse.json(
        {
          success: false,
          error: 'Blog generation failed',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
        { status: 500 }
      )
    }

    // Extract title from content (first line or generate from date)
    const titleMatch = blogContent.match(/^#\s+(.+)$/m)
    const title = titleMatch
      ? titleMatch[1]
      : `Accessibility News Roundup - ${new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}`

    // Remove title from content if present
    if (titleMatch) {
      blogContent = blogContent.replace(/^#\s+.+$/m, '').trim()
    }

    // Generate slug
    let slug = generateSlug(title)
    let slugCounter = 1
    while (await blogPostExists(slug)) {
      slug = `${generateSlug(title)}-${slugCounter}`
      slugCounter++
    }

    // Step 3: Fact-check the blog post
    logger.log('Step 3: Fact-checking blog post...')
    const factCheckResult = await factCheckBlogPost(blogContent, title)

    // Step 4: Determine publishing status
    const autoPublish = process.env.BLOG_AUTO_PUBLISH === 'true'
    const isPublished = autoPublish && factCheckResult.verified

    // Step 5: Create blog post object
    const blogPost: BlogPost = {
      slug,
      title,
      content: blogContent,
      excerpt: blogContent.substring(0, 300).replace(/\n/g, ' ') + '...',
      publishedAt: new Date().toISOString(),
      generatedAt: new Date().toISOString(),
      sources: articles.map((article) => ({
        title: article.title,
        url: article.url,
        source: article.source,
      })),
      factCheckStatus: factCheckResult.verified ? 'verified' : 'needs_review',
      factCheckNotes: factCheckResult.notes,
      isPublished,
      tags: ['accessibility', 'wcag', 'news', 'roundup'],
    }

    // Step 6: Save blog post
    logger.log('Step 4: Saving blog post...')
    try {
      await saveBlogPost(blogPost)
    } catch (error) {
      logger.error('Failed to save blog post', error)
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to save blog post',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
        { status: 500 }
      )
    }

    // Step 7: Trigger revalidation
    logger.log('Step 5: Triggering revalidation...')
    const revalidateSecret = process.env.REVALIDATE_SECRET
    const baseUrl = process.env.NEXT_PUBLIC_URL || process.env.VERCEL_URL || 'https://thewcag.com'

    try {
      // Revalidate blog listing page
      await fetch(`${baseUrl}/api/revalidate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: '/blog',
          secret: revalidateSecret,
        }),
      })

      // Revalidate individual blog post
      await fetch(`${baseUrl}/api/revalidate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: `/blog/${slug}`,
          secret: revalidateSecret,
        }),
      })
    } catch (revalidateError) {
      logger.error('Revalidation failed (non-critical)', revalidateError)
      // Don't fail the entire process if revalidation fails
    }

    logger.log(`Blog post created successfully: ${slug}`)

    return NextResponse.json({
      success: true,
      message: 'Blog post generated successfully',
      blogPost: {
        slug,
        title,
        isPublished,
        factCheckStatus: blogPost.factCheckStatus,
      },
      articlesCount: articles.length,
      blogPostCreated: true,
    })
  } catch (error) {
    logger.error('Blog generation process failed', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Blog generation failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

