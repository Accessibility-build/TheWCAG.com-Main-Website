#!/usr/bin/env tsx
/**
 * Helper script to create a new blog post
 * 
 * Usage:
 *   npm run create-blog-post
 *   or
 *   tsx scripts/create-blog-post.ts
 * 
 * This script will prompt you for blog post details and create the JSON file
 */

import fs from 'fs/promises'
import path from 'path'
import { generateSlug, saveBlogPost } from '../lib/blog/storage'
import type { BlogPost } from '../lib/blog/types'

async function createBlogPost() {
  console.log('📝 Create New Blog Post\n')

  // Get input from command line arguments or prompt
  const args = process.argv.slice(2)
  
  let title: string
  let content: string
  let excerpt: string
  let publishedAt: string
  let factCheckStatus: 'verified' | 'needs_review'
  let isPublished: boolean
  let tags: string[]

  if (args.length >= 2) {
    // Command line mode
    title = args[0]
    content = args[1]
    excerpt = args[2] || content.substring(0, 300).replace(/\n/g, ' ') + '...'
    publishedAt = args[3] || new Date().toISOString().split('T')[0]
    factCheckStatus = (args[4] as 'verified' | 'needs_review') || 'needs_review'
    isPublished = args[5] === 'true' || args[5] === undefined
    tags = args[6] ? args[6].split(',') : ['accessibility', 'WCAG']
  } else {
    // Interactive mode
    console.log('Enter blog post details (or use command line args):\n')
    
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    const question = (prompt: string): Promise<string> => {
      return new Promise((resolve) => {
        readline.question(prompt, resolve)
      })
    }

    title = await question('Title: ')
    console.log('\nEnter content (end with Ctrl+D or empty line + Enter):')
    content = await question('Content (Markdown): ')
    excerpt = await question(`Excerpt (or press Enter for auto-generated): `) || content.substring(0, 300).replace(/\n/g, ' ') + '...'
    publishedAt = await question(`Published date (YYYY-MM-DD, default: ${new Date().toISOString().split('T')[0]}): `) || new Date().toISOString().split('T')[0]
    const factCheckInput = await question('Fact check status (verified/needs_review, default: needs_review): ') || 'needs_review'
    factCheckStatus = factCheckInput === 'verified' ? 'verified' : 'needs_review'
    const publishedInput = await question('Publish now? (y/n, default: y): ') || 'y'
    isPublished = publishedInput.toLowerCase() === 'y'
    const tagsInput = await question('Tags (comma-separated, default: accessibility,WCAG): ') || 'accessibility,WCAG'
    tags = tagsInput.split(',').map(t => t.trim())

    readline.close()
  }

  // Generate slug from title
  const slug = generateSlug(title)

  // Create blog post object
  const blogPost: BlogPost = {
    slug,
    title,
    content,
    excerpt: excerpt || content.substring(0, 300).replace(/\n/g, ' ') + '...',
    publishedAt,
    generatedAt: new Date().toISOString(),
    sources: [],
    factCheckStatus,
    isPublished,
    tags,
  }

  // Save the blog post
  try {
    await saveBlogPost(blogPost)
    console.log(`\n✅ Blog post created successfully!`)
    console.log(`   Slug: ${slug}`)
    console.log(`   File: lib/blog-posts/${slug}.json`)
    console.log(`   URL: /blog/${slug}`)
    console.log(`   Status: ${isPublished ? 'Published' : 'Draft'}`)
  } catch (error) {
    console.error('\n❌ Error creating blog post:', error)
    process.exit(1)
  }
}

// Run the script
createBlogPost().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})







