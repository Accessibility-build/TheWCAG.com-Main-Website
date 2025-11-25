import fs from 'fs/promises'
import path from 'path'
import type { BlogPost, BlogPostMetadata } from './types'
import { logger } from '@/lib/logger'

const BLOG_POSTS_DIR = path.join(process.cwd(), 'lib', 'blog-posts')
const INDEX_FILE = path.join(BLOG_POSTS_DIR, 'index.json')

/**
 * Generate a URL-friendly slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

/**
 * Get all blog posts metadata
 */
export async function getAllBlogPosts(): Promise<BlogPostMetadata[]> {
  try {
    const data = await fs.readFile(INDEX_FILE, 'utf-8')
    return JSON.parse(data) as BlogPostMetadata[]
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      // Index file doesn't exist yet, return empty array
      return []
    }
    logger.error('Failed to read blog posts index', error)
    return []
  }
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_POSTS_DIR, `${slug}.json`)
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data) as BlogPost
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return null
    }
    logger.error(`Failed to read blog post: ${slug}`, error)
    return null
  }
}

/**
 * Get published blog posts only
 */
export async function getPublishedBlogPosts(): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllBlogPosts()
  return allPosts.filter((post) => post.isPublished)
}

/**
 * Save a blog post to storage
 */
export async function saveBlogPost(post: BlogPost): Promise<void> {
  try {
    // Ensure directory exists
    await fs.mkdir(BLOG_POSTS_DIR, { recursive: true })

    // Save individual post file
    const postFilePath = path.join(BLOG_POSTS_DIR, `${post.slug}.json`)
    await fs.writeFile(postFilePath, JSON.stringify(post, null, 2), 'utf-8')

    // Update index
    const allPosts = await getAllBlogPosts()
    const existingIndex = allPosts.findIndex((p) => p.slug === post.slug)

    const metadata: BlogPostMetadata = {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      factCheckStatus: post.factCheckStatus,
      isPublished: post.isPublished,
    }

    if (existingIndex >= 0) {
      // Update existing post in index
      allPosts[existingIndex] = metadata
    } else {
      // Add new post to index (prepend to show newest first)
      allPosts.unshift(metadata)
    }

    // Save updated index
    await fs.writeFile(INDEX_FILE, JSON.stringify(allPosts, null, 2), 'utf-8')

    logger.log(`Blog post saved: ${post.slug}`)
  } catch (error) {
    logger.error(`Failed to save blog post: ${post.slug}`, error)
    throw error
  }
}

/**
 * Check if a blog post with the given slug already exists
 */
export async function blogPostExists(slug: string): Promise<boolean> {
  try {
    const filePath = path.join(BLOG_POSTS_DIR, `${slug}.json`)
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

