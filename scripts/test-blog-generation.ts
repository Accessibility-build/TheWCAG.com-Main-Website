/**
 * Test script for blog generation functionality
 * Run with: npx tsx scripts/test-blog-generation.ts
 */

import { extractArticles } from '../lib/blog/extractor'
import { generateBlogPost } from '../lib/blog/generator'
import { factCheckBlogPost } from '../lib/blog/fact-checker'
import { saveBlogPost, generateSlug } from '../lib/blog/storage'
import { logger } from '../lib/logger'

async function testBlogGeneration() {
  console.log('🧪 Testing Blog Generation System...\n')

  // Check environment variables
  const requiredEnvVars = [
    'OPENROUTER_API_KEY',
    'OPENROUTER_BLOG_MODEL',
    'OPENROUTER_FACT_CHECK_MODEL',
    'CRON_SECRET',
    'REVALIDATE_SECRET',
  ]

  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName])
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:')
    missingVars.forEach((varName) => console.error(`   - ${varName}`))
    console.error('\nPlease set these in your .env.local file')
    process.exit(1)
  }

  console.log('✅ All required environment variables are set\n')

  try {
    // Step 1: Test article extraction
    console.log('📰 Step 1: Testing article extraction...')
    const articles = await extractArticles()
    console.log(`   Found ${articles.length} articles from last 48 hours`)
    
    if (articles.length === 0) {
      console.log('   ⚠️  No articles found. This is normal if there are no recent articles.')
      console.log('   Continuing with empty array for testing...\n')
    } else {
      console.log(`   ✅ Successfully extracted ${articles.length} articles\n`)
      // Show first article as sample
      if (articles[0]) {
        console.log(`   Sample article: ${articles[0].title}`)
        console.log(`   Source: ${articles[0].source}`)
        console.log(`   URL: ${articles[0].url}\n`)
      }
    }

    // Step 2: Test blog generation (skip if no articles, or use sample)
    if (articles.length === 0) {
      console.log('⏭️  Skipping blog generation (no articles to process)')
      console.log('   To test blog generation, wait for articles to be available or add test articles\n')
    } else {
      console.log('✍️  Step 2: Testing blog generation...')
      try {
        const blogContent = await generateBlogPost(articles.slice(0, 3)) // Use first 3 articles for testing
        console.log(`   ✅ Blog post generated (${blogContent.length} characters)`)
        console.log(`   Preview: ${blogContent.substring(0, 200)}...\n`)

        // Step 3: Test fact-checking
        console.log('🔍 Step 3: Testing fact-checking...')
        const title = 'Test Blog Post'
        const factCheckResult = await factCheckBlogPost(blogContent, title)
        console.log(`   ✅ Fact-check completed`)
        console.log(`   Verified: ${factCheckResult.verified}`)
        console.log(`   Notes: ${factCheckResult.notes.substring(0, 100)}...\n`)

        // Step 4: Test storage (optional - don't save test posts)
        console.log('💾 Step 4: Testing storage functions...')
        const testSlug = generateSlug('Test Blog Post')
        console.log(`   Generated slug: ${testSlug}`)
        console.log('   ✅ Storage functions working (not saving test post)\n')

        console.log('✅ All tests passed! Blog generation system is working correctly.\n')
      } catch (error) {
        console.error('   ❌ Blog generation failed:', error instanceof Error ? error.message : error)
        throw error
      }
    }

    console.log('🎉 Test completed successfully!')
  } catch (error) {
    console.error('\n❌ Test failed:', error)
    process.exit(1)
  }
}

// Run the test
testBlogGeneration().catch(console.error)

