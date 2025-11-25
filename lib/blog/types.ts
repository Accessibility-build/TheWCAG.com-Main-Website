export interface ExtractedArticle {
  title: string
  url: string
  source: string
  publishedDate: string
  content: string
  excerpt?: string
}

export interface BlogPost {
  slug: string
  title: string
  content: string
  excerpt: string
  publishedAt: string
  generatedAt: string
  sources: Array<{
    title: string
    url: string
    source: string
  }>
  factCheckStatus: 'verified' | 'needs_review'
  factCheckNotes?: string
  isPublished: boolean
  tags: string[]
}

export interface BlogPostMetadata {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  factCheckStatus: 'verified' | 'needs_review'
  isPublished: boolean
}

export interface FactCheckResult {
  verified: boolean
  notes: string
}

export interface OpenRouterResponse {
  id: string
  model: string
  choices: Array<{
    message: {
      role: string
      content: string
    }
    finish_reason: string
  }>
}

