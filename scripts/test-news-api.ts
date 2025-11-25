/**
 * Test script for News API article extraction
 * Checks if News API is finding accessibility-related articles
 * Run with: npm run test:news-api
 */

import { getNewsAPIConfig, isAccessibilityRelated } from '../lib/blog/sources'
import { logger } from '../lib/logger'

interface NewsAPIArticle {
  title: string
  description: string
  url: string
  publishedAt: string
  source: {
    name: string
  }
  content?: string
}

interface NewsAPIResponse {
  status: string
  totalResults: number
  articles: NewsAPIArticle[]
}

async function testNewsAPI() {
  console.log('🔍 Testing News API Article Extraction\n')
  console.log('=' .repeat(60) + '\n')

  // Check if News API is configured
  const config = getNewsAPIConfig()
  if (!config || !config.apiKey) {
    console.log('❌ News API is not configured')
    console.log('   Set NEWS_API_KEY in your environment variables\n')
    process.exit(1)
  }

  console.log('✅ News API is configured\n')
  console.log(`📋 Query: ${config.query}`)
  console.log(`🌐 Language: ${config.language}`)
  console.log(`📊 Sort By: ${config.sortBy}\n`)
  console.log('=' .repeat(60) + '\n')

  try {
    // Calculate date range (last 48 hours)
    const fromDate = new Date()
    fromDate.setHours(fromDate.getHours() - 48)

    console.log(`📅 Searching for articles from: ${fromDate.toISOString()}\n`)

    // Build News API URL
    const url = new URL('https://newsapi.org/v2/everything')
    url.searchParams.set('apiKey', config.apiKey)
    url.searchParams.set('q', config.query)
    url.searchParams.set('language', config.language)
    url.searchParams.set('sortBy', config.sortBy)
    url.searchParams.set('from', fromDate.toISOString())
    url.searchParams.set('pageSize', '20')

    console.log('🌐 Making request to News API...\n')
    const response = await fetch(url.toString(), {
      next: { revalidate: 0 },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`❌ News API Error: ${response.status}`)
      console.error(`   ${errorText}\n`)
      process.exit(1)
    }

    const data = (await response.json()) as NewsAPIResponse

    console.log('📊 API Response Statistics:')
    console.log(`   Status: ${data.status}`)
    console.log(`   Total Results: ${data.totalResults}`)
    console.log(`   Articles Returned: ${data.articles?.length || 0}\n`)

    if (data.status !== 'ok') {
      console.error(`❌ API returned error status: ${data.status}\n`)
      process.exit(1)
    }

    if (!data.articles || data.articles.length === 0) {
      console.log('⚠️  No articles returned from News API')
      console.log('   This could mean:')
      console.log('   - No articles match the query in the last 48 hours')
      console.log('   - API rate limit reached')
      console.log('   - Query needs adjustment\n')
      process.exit(0)
    }

    console.log('=' .repeat(60) + '\n')
    console.log('📰 Articles Found:\n')

    // Filter for accessibility-related articles
    const accessibilityArticles: NewsAPIArticle[] = []
    const nonAccessibilityArticles: NewsAPIArticle[] = []

    data.articles.forEach((article) => {
      const articleText = `${article.title} ${article.description || ''}`.toLowerCase()
      if (isAccessibilityRelated(articleText)) {
        accessibilityArticles.push(article)
      } else {
        nonAccessibilityArticles.push(article)
      }
    })

    console.log(`✅ Accessibility-Related Articles: ${accessibilityArticles.length}`)
    console.log(`❌ Non-Accessibility Articles: ${nonAccessibilityArticles.length}\n`)

    // Show accessibility articles
    if (accessibilityArticles.length > 0) {
      console.log('=' .repeat(60))
      console.log('✅ ACCESSIBILITY ARTICLES:\n')
      accessibilityArticles.forEach((article, index) => {
        console.log(`${index + 1}. ${article.title}`)
        console.log(`   Source: ${article.source?.name || 'Unknown'}`)
        console.log(`   Published: ${new Date(article.publishedAt).toLocaleString()}`)
        console.log(`   URL: ${article.url}`)
        if (article.description) {
          console.log(`   Description: ${article.description.substring(0, 150)}...`)
        }
        console.log('')
      })
    }

    // Show non-accessibility articles (for debugging)
    if (nonAccessibilityArticles.length > 0) {
      console.log('=' .repeat(60))
      console.log('❌ NON-ACCESSIBILITY ARTICLES (Filtered Out):\n')
      nonAccessibilityArticles.slice(0, 5).forEach((article, index) => {
        console.log(`${index + 1}. ${article.title}`)
        console.log(`   Source: ${article.source?.name || 'Unknown'}`)
        console.log(`   Why filtered: Doesn't contain accessibility keywords`)
        console.log('')
      })
      if (nonAccessibilityArticles.length > 5) {
        console.log(`   ... and ${nonAccessibilityArticles.length - 5} more\n`)
      }
    }

    // Summary
    console.log('=' .repeat(60))
    console.log('📈 SUMMARY:\n')
    console.log(`   Total Articles: ${data.articles.length}`)
    console.log(`   Accessibility Articles: ${accessibilityArticles.length} ✅`)
    console.log(`   Non-Accessibility Articles: ${nonAccessibilityArticles.length} ❌`)
    console.log(`   Filter Rate: ${((accessibilityArticles.length / data.articles.length) * 100).toFixed(1)}%`)

    if (accessibilityArticles.length === 0) {
      console.log('\n⚠️  WARNING: No accessibility articles found!')
      console.log('   Suggestions:')
      console.log('   - Check if query terms are correct')
      console.log('   - Verify articles exist in the last 48 hours')
      console.log('   - Consider adjusting the query in lib/blog/sources.ts')
    } else {
      console.log('\n✅ News API is working correctly!')
      console.log(`   Found ${accessibilityArticles.length} accessibility-related article(s)`)
    }

    console.log('')
  } catch (error) {
    console.error('❌ Error testing News API:', error)
    if (error instanceof Error) {
      console.error(`   Message: ${error.message}`)
      if (error.stack) {
        console.error(`   Stack: ${error.stack}`)
      }
    }
    process.exit(1)
  }
}

// Run the test
testNewsAPI().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})

