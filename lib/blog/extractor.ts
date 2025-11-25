import Parser from 'rss-parser'
import type { ExtractedArticle } from './types'
import { getRSSFeeds, getNewsAPIConfig, isAccessibilityRelated } from './sources'
import { processArticleContent } from './processor'
import { logger } from '@/lib/logger'

const parser = new Parser()

/**
 * Check if a date is within the last 48 hours
 */
function isWithinLast48Hours(date: Date): boolean {
  const now = new Date()
  const hoursDiff = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
  return hoursDiff <= 48 && hoursDiff >= 0
}

/**
 * Parse date from various formats
 */
function parseDate(dateString: string | Date | undefined): Date | null {
  if (!dateString) return null

  if (dateString instanceof Date) {
    return dateString
  }

  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    return null
  }

  return date
}

/**
 * Fetch and extract content from a URL
 */
async function fetchArticleContent(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; TheWCAG Blog Generator/1.0; +https://thewcag.com)',
      },
      next: { revalidate: 0 }, // Don't cache during extraction
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    return await response.text()
  } catch (error) {
    logger.error(`Failed to fetch article content from ${url}`, error)
    return ''
  }
}

/**
 * Extract articles from RSS feed
 */
async function extractFromRSSFeed(feedUrl: string, sourceName: string): Promise<ExtractedArticle[]> {
  try {
    const feed = await parser.parseURL(feedUrl)
    const articles: ExtractedArticle[] = []

    for (const item of feed.items) {
      if (!item.link || !item.title) continue

      const publishedDate = parseDate(item.pubDate || item.isoDate)
      if (!publishedDate || !isWithinLast48Hours(publishedDate)) {
        continue
      }

      try {
        // Fetch full article content
        const htmlContent = await fetchArticleContent(item.link)
        if (!htmlContent) continue

        const { content, excerpt, tags } = processArticleContent(
          htmlContent,
          item.link,
          item.title
        )

        if (!content || content.length < 100) {
          // Skip articles with insufficient content
          continue
        }

        // RSS feeds are already accessibility-focused, so we can be less strict
        // Only filter if the content clearly indicates it's not accessibility-related
        const articleText = `${item.title} ${item.contentSnippet || ''} ${content}`.toLowerCase()
        // Check for common non-accessibility topics that might slip through
        const nonAccessibilityTerms = [
          'cybersecurity',
          'meat packaging',
          'food packaging',
          'stock market',
          'cryptocurrency',
          'bitcoin',
          'real estate',
          'automotive',
        ]
        const hasNonAccessibilityFocus = nonAccessibilityTerms.some((term) =>
          articleText.includes(term)
        )
        const hasAccessibilityFocus = isAccessibilityRelated(articleText)

        // For RSS feeds, trust the source but filter obvious non-accessibility content
        if (hasNonAccessibilityFocus && !hasAccessibilityFocus) {
          logger.log(`Skipping non-accessibility article from RSS: ${item.title}`)
          continue
        }

        articles.push({
          title: item.title,
          url: item.link,
          source: sourceName,
          publishedDate: publishedDate.toISOString(),
          content,
          excerpt: excerpt || item.contentSnippet || item.content?.substring(0, 200) || '',
        })
      } catch (error) {
        logger.error(`Failed to process article: ${item.link}`, error)
        // Continue with next article
        continue
      }
    }

    return articles
  } catch (error) {
    logger.error(`Failed to parse RSS feed: ${feedUrl}`, error)
    return []
  }
}

/**
 * Extract articles from News API
 */
async function extractFromNewsAPI(config: NonNullable<ReturnType<typeof getNewsAPIConfig>>): Promise<ExtractedArticle[]> {
  if (!config.apiKey) {
    return []
  }

  try {
    const fromDate = new Date()
    fromDate.setHours(fromDate.getHours() - 48)

    const url = new URL('https://newsapi.org/v2/everything')
    url.searchParams.set('apiKey', config.apiKey)
    url.searchParams.set('q', config.query)
    url.searchParams.set('language', config.language)
    url.searchParams.set('sortBy', config.sortBy)
    url.searchParams.set('from', fromDate.toISOString())
    url.searchParams.set('pageSize', '20') // Reduced to get more relevant results

    const response = await fetch(url.toString(), {
      next: { revalidate: 0 },
    })

    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`)
    }

    const data = await response.json()
    const articles: ExtractedArticle[] = []

    for (const article of data.articles || []) {
      if (!article.url || !article.title) continue

      const publishedDate = parseDate(article.publishedAt)
      if (!publishedDate || !isWithinLast48Hours(publishedDate)) {
        continue
      }

      try {
        // First check if title/description is accessibility-related
        const articleText = `${article.title} ${article.description || ''}`.toLowerCase()
        if (!isAccessibilityRelated(articleText)) {
          logger.log(`Skipping non-accessibility article: ${article.title}`)
          continue
        }

        const htmlContent = await fetchArticleContent(article.url)
        if (!htmlContent) {
          // Fallback to description if available and accessibility-related
          if (article.description && isAccessibilityRelated(article.description)) {
            articles.push({
              title: article.title,
              url: article.url,
              source: article.source?.name || 'News API',
              publishedDate: publishedDate.toISOString(),
              content: article.description,
              excerpt: article.description.substring(0, 200),
            })
          }
          continue
        }

        const { content, excerpt } = processArticleContent(htmlContent, article.url, article.title)

        if (!content || content.length < 100) {
          continue
        }

        // Double-check content is accessibility-related
        if (!isAccessibilityRelated(content)) {
          logger.log(`Skipping article after content check: ${article.title}`)
          continue
        }

        articles.push({
          title: article.title,
          url: article.url,
          source: article.source?.name || 'News API',
          publishedDate: publishedDate.toISOString(),
          content,
          excerpt: excerpt || article.description?.substring(0, 200) || '',
        })
      } catch (error) {
        logger.error(`Failed to process News API article: ${article.url}`, error)
        continue
      }
    }

    return articles
  } catch (error) {
    logger.error('Failed to fetch from News API', error)
    return []
  }
}

/**
 * Deduplicate articles by URL
 */
function deduplicateArticles(articles: ExtractedArticle[]): ExtractedArticle[] {
  const seen = new Set<string>()
  return articles.filter((article) => {
    const normalizedUrl = article.url.toLowerCase().trim()
    if (seen.has(normalizedUrl)) {
      return false
    }
    seen.add(normalizedUrl)
    return true
  })
}

/**
 * Extract all articles from configured sources (last 48 hours)
 */
export async function extractArticles(): Promise<ExtractedArticle[]> {
  const allArticles: ExtractedArticle[] = []

  // Extract from RSS feeds
  const rssFeeds = getRSSFeeds()
  logger.log(`Extracting from ${rssFeeds.length} RSS feeds`)

  for (const feed of rssFeeds) {
    try {
      const articles = await extractFromRSSFeed(feed.url, feed.name)
      allArticles.push(...articles)
      logger.log(`Extracted ${articles.length} articles from ${feed.name}`)
    } catch (error) {
      logger.error(`Failed to extract from RSS feed: ${feed.name}`, error)
      // Continue with other feeds
    }
  }

  // Extract from News API if configured
  const newsConfig = getNewsAPIConfig()
  if (newsConfig?.enabled) {
    try {
      const articles = await extractFromNewsAPI(newsConfig)
      allArticles.push(...articles)
      logger.log(`Extracted ${articles.length} articles from News API`)
    } catch (error) {
      logger.error('Failed to extract from News API', error)
    }
  }

  // Deduplicate and return
  const uniqueArticles = deduplicateArticles(allArticles)
  logger.log(`Total unique accessibility articles extracted: ${uniqueArticles.length}`)

  // Sort by date (newest first) and limit to top 7
  const sortedArticles = uniqueArticles.sort((a, b) => {
    return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  })

  const topArticles = sortedArticles.slice(0, 7)
  logger.log(`Returning top ${topArticles.length} accessibility articles`)

  return topArticles
}

