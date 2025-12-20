import blogPostsIndex from '@/lib/blog-posts/index.json'
import type { BlogPostMetadata } from './types'

/**
 * Check if a blog guide exists for a given tool slug (client-side)
 */
export function hasBlogGuide(toolSlug: string): boolean {
  const guideSlug = `${toolSlug}-guide`
  const posts = blogPostsIndex as BlogPostMetadata[]
  return posts.some(
    (post) =>
      post.slug === guideSlug &&
      post.isPublished === true &&
      post.isToolGuide === true
  )
}

/**
 * Get the blog guide slug for a tool (client-side)
 */
export function getBlogGuideSlug(toolSlug: string): string | null {
  if (hasBlogGuide(toolSlug)) {
    return `${toolSlug}-guide`
  }
  return null
}

