/**
 * Test script for RSS feed article extraction
 * Checks if RSS feeds are finding accessibility-related articles
 * Run with: npm run test:rss
 */

import Parser from 'rss-parser'
import { getRSSFeeds, isAccessibilityRelated } from '../lib/blog/sources'
import { logger } from '../lib/logger'

const parser = new Parser()

interface RSSItem {
  title?: string
  link?: string
  pubDate?: string
  contentSnippet?: string
  content?: string
}

function isWithinLast48Hours(date: Date): boolean {
  const now = new Date()
  const hoursDiff = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
  return hoursDiff <= 48 && hoursDiff >= 0
}

function parseDate(dateString: string | undefined): Date | null {
  if (!dateString) return null
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return null
  return date
}

async function testRSSFeeds() {
  console.log('🔍 Testing RSS Feed Article Extraction\n')
  console.log('=' .repeat(60) + '\n')

  const feeds = getRSSFeeds()

  if (feeds.length === 0) {
    console.log('❌ No RSS feeds configured\n')
    process.exit(1)
  }

  console.log(`✅ Found ${feeds.length} RSS feed(s) configured\n`)

  const allArticles: Array<{
    title: string
    url: string
    source: string
    publishedDate: string
    isAccessibility: boolean
  }> = []

  for (const feed of feeds) {
    console.log(`📡 Testing: ${feed.name}`)
    console.log(`   URL: ${feed.url}\n`)

    try {
      const parsedFeed = await parser.parseURL(feed.url)
      console.log(`   ✅ Feed parsed successfully`)
      console.log(`   📰 Total items in feed: ${parsedFeed.items.length}\n`)

      let feedAccessibilityCount = 0
      let feedNonAccessibilityCount = 0
      let feedRecentCount = 0

      for (const item of parsedFeed.items) {
        if (!item.link || !item.title) continue

        const publishedDate = parseDate(item.pubDate || (item as any).isoDate)
        if (!publishedDate || !isWithinLast48Hours(publishedDate)) {
          continue
        }

        feedRecentCount++

        const articleText = `${item.title} ${item.contentSnippet || ''}`.toLowerCase()
        const isAccessibility = isAccessibilityRelated(articleText)

        allArticles.push({
          title: item.title,
          url: item.link,
          source: feed.name,
          publishedDate: publishedDate.toISOString(),
          isAccessibility,
        })

        if (isAccessibility) {
          feedAccessibilityCount++
        } else {
          feedNonAccessibilityCount++
        }
      }

      console.log(`   📊 Results for ${feed.name}:`)
      console.log(`      Recent articles (48h): ${feedRecentCount}`)
      console.log(`      ✅ Accessibility: ${feedAccessibilityCount}`)
      console.log(`      ❌ Non-accessibility: ${feedNonAccessibilityCount}\n`)
    } catch (error) {
      console.error(`   ❌ Error parsing feed: ${error instanceof Error ? error.message : error}\n`)
    }
  }

  console.log('=' .repeat(60) + '\n')
  console.log('📈 OVERALL SUMMARY:\n')

  const accessibilityArticles = allArticles.filter((a) => a.isAccessibility)
  const nonAccessibilityArticles = allArticles.filter((a) => !a.isAccessibility)

  console.log(`   Total Recent Articles: ${allArticles.length}`)
  console.log(`   ✅ Accessibility Articles: ${accessibilityArticles.length}`)
  console.log(`   ❌ Non-Accessibility Articles: ${nonAccessibilityArticles.length}`)

  if (allArticles.length > 0) {
    console.log(
      `   Filter Rate: ${((accessibilityArticles.length / allArticles.length) * 100).toFixed(1)}%`
    )
  }

  if (accessibilityArticles.length > 0) {
    console.log('\n✅ ACCESSIBILITY ARTICLES FOUND:\n')
    accessibilityArticles.slice(0, 10).forEach((article, index) => {
      console.log(`${index + 1}. ${article.title}`)
      console.log(`   Source: ${article.source}`)
      console.log(`   Published: ${new Date(article.publishedDate).toLocaleString()}`)
      console.log(`   URL: ${article.url}\n`)
    })
    if (accessibilityArticles.length > 10) {
      console.log(`   ... and ${accessibilityArticles.length - 10} more\n`)
    }
  } else {
    console.log('\n⚠️  No accessibility articles found in RSS feeds')
    console.log('   This is normal if:')
    console.log('   - No new articles were published in the last 48 hours')
    console.log('   - The feeds are not actively updated')
  }

  console.log('')
}

// Run the test
testRSSFeeds().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})

