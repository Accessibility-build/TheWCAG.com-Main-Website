/**
 * Main blog utilities - exports commonly used functions
 */

export { getAllBlogPosts, getBlogPostBySlug, getPublishedBlogPosts, saveBlogPost, generateSlug, blogPostExists } from './storage'
export type { BlogPost, BlogPostMetadata, ExtractedArticle } from './types'
export { extractArticles } from './extractor'
export { generateBlogPost } from './generator'
export { factCheckBlogPost } from './fact-checker'

