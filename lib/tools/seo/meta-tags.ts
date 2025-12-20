/**
 * Meta Tag Generator Utilities
 */

export interface MetaTagOptions {
  // Basic meta tags
  title?: string
  description?: string
  keywords?: string
  author?: string
  robots?: string
  viewport?: string
  charset?: string
  canonical?: string
  language?: string
  
  // Open Graph
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  ogType?: string
  ogSiteName?: string
  ogLocale?: string
  
  // Twitter Card
  twitterCard?: "summary" | "summary_large_image" | "app" | "player"
  twitterSite?: string
  twitterCreator?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  
  // Additional
  themeColor?: string
  applicationName?: string
  generator?: string
  rating?: string
  revisitAfter?: string
  copyright?: string
}

/**
 * Robots meta tag options
 */
export const ROBOTS_OPTIONS = [
  { value: "index, follow", label: "Index & Follow (default)" },
  { value: "noindex, follow", label: "No Index, Follow" },
  { value: "index, nofollow", label: "Index, No Follow" },
  { value: "noindex, nofollow", label: "No Index, No Follow" },
  { value: "noarchive", label: "No Archive" },
  { value: "nosnippet", label: "No Snippet" },
  { value: "noimageindex", label: "No Image Index" },
  { value: "notranslate", label: "No Translate" },
] as const

/**
 * Open Graph type options
 */
export const OG_TYPES = [
  { value: "website", label: "Website" },
  { value: "article", label: "Article" },
  { value: "blog", label: "Blog" },
  { value: "book", label: "Book" },
  { value: "profile", label: "Profile" },
  { value: "video.movie", label: "Movie" },
  { value: "video.episode", label: "Episode" },
  { value: "music.song", label: "Song" },
  { value: "music.album", label: "Album" },
  { value: "product", label: "Product" },
] as const

/**
 * Twitter Card type options
 */
export const TWITTER_CARD_TYPES = [
  { value: "summary", label: "Summary" },
  { value: "summary_large_image", label: "Summary Large Image" },
  { value: "app", label: "App" },
  { value: "player", label: "Player" },
] as const

/**
 * Common viewport options
 */
export const VIEWPORT_OPTIONS = [
  { value: "width=device-width, initial-scale=1", label: "Responsive (recommended)" },
  { value: "width=device-width, initial-scale=1, maximum-scale=1", label: "Responsive, no zoom" },
  { value: "width=device-width, initial-scale=1, user-scalable=no", label: "Responsive, no user scaling" },
  { value: "width=1024", label: "Fixed width (1024px)" },
] as const

/**
 * Escape HTML special characters
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

/**
 * Generate a single meta tag
 */
function generateMetaTag(
  type: "name" | "property" | "http-equiv",
  key: string,
  value: string
): string {
  const escapedValue = escapeHtml(value)
  return `<meta ${type}="${key}" content="${escapedValue}">`
}

/**
 * Generate all meta tags HTML
 */
export function generateMetaTags(options: MetaTagOptions): string {
  const tags: string[] = []
  
  // Charset (always first)
  if (options.charset) {
    tags.push(`<meta charset="${options.charset}">`)
  }
  
  // Viewport
  if (options.viewport) {
    tags.push(generateMetaTag("name", "viewport", options.viewport))
  }
  
  // Title tag (not a meta tag but essential)
  if (options.title) {
    tags.push(`<title>${escapeHtml(options.title)}</title>`)
  }
  
  // Basic meta tags
  if (options.description) {
    tags.push(generateMetaTag("name", "description", options.description))
  }
  if (options.keywords) {
    tags.push(generateMetaTag("name", "keywords", options.keywords))
  }
  if (options.author) {
    tags.push(generateMetaTag("name", "author", options.author))
  }
  if (options.robots) {
    tags.push(generateMetaTag("name", "robots", options.robots))
  }
  if (options.language) {
    tags.push(generateMetaTag("http-equiv", "content-language", options.language))
  }
  if (options.generator) {
    tags.push(generateMetaTag("name", "generator", options.generator))
  }
  if (options.rating) {
    tags.push(generateMetaTag("name", "rating", options.rating))
  }
  if (options.revisitAfter) {
    tags.push(generateMetaTag("name", "revisit-after", options.revisitAfter))
  }
  if (options.copyright) {
    tags.push(generateMetaTag("name", "copyright", options.copyright))
  }
  
  // Canonical URL
  if (options.canonical) {
    tags.push(`<link rel="canonical" href="${escapeHtml(options.canonical)}">`)
  }
  
  // Theme color
  if (options.themeColor) {
    tags.push(generateMetaTag("name", "theme-color", options.themeColor))
  }
  
  // Application name
  if (options.applicationName) {
    tags.push(generateMetaTag("name", "application-name", options.applicationName))
  }
  
  // Open Graph tags
  if (options.ogTitle || options.title) {
    tags.push(generateMetaTag("property", "og:title", options.ogTitle || options.title || ""))
  }
  if (options.ogDescription || options.description) {
    tags.push(generateMetaTag("property", "og:description", options.ogDescription || options.description || ""))
  }
  if (options.ogImage) {
    tags.push(generateMetaTag("property", "og:image", options.ogImage))
  }
  if (options.ogUrl || options.canonical) {
    tags.push(generateMetaTag("property", "og:url", options.ogUrl || options.canonical || ""))
  }
  if (options.ogType) {
    tags.push(generateMetaTag("property", "og:type", options.ogType))
  }
  if (options.ogSiteName) {
    tags.push(generateMetaTag("property", "og:site_name", options.ogSiteName))
  }
  if (options.ogLocale) {
    tags.push(generateMetaTag("property", "og:locale", options.ogLocale))
  }
  
  // Twitter Card tags
  if (options.twitterCard) {
    tags.push(generateMetaTag("name", "twitter:card", options.twitterCard))
  }
  if (options.twitterSite) {
    tags.push(generateMetaTag("name", "twitter:site", options.twitterSite))
  }
  if (options.twitterCreator) {
    tags.push(generateMetaTag("name", "twitter:creator", options.twitterCreator))
  }
  if (options.twitterTitle || options.ogTitle || options.title) {
    tags.push(generateMetaTag("name", "twitter:title", options.twitterTitle || options.ogTitle || options.title || ""))
  }
  if (options.twitterDescription || options.ogDescription || options.description) {
    tags.push(generateMetaTag("name", "twitter:description", options.twitterDescription || options.ogDescription || options.description || ""))
  }
  if (options.twitterImage || options.ogImage) {
    tags.push(generateMetaTag("name", "twitter:image", options.twitterImage || options.ogImage || ""))
  }
  
  return tags.join("\n")
}

/**
 * Get character count for meta description
 */
export function getDescriptionLength(description: string): {
  length: number
  status: "ok" | "warning" | "error"
  message: string
} {
  const length = description.length
  
  if (length === 0) {
    return { length, status: "error", message: "Description is empty" }
  }
  if (length < 50) {
    return { length, status: "warning", message: "Description is too short (recommended: 50-160 characters)" }
  }
  if (length > 160) {
    return { length, status: "warning", message: "Description may be truncated (recommended: 50-160 characters)" }
  }
  return { length, status: "ok", message: "Description length is optimal" }
}

/**
 * Get character count for title
 */
export function getTitleLength(title: string): {
  length: number
  status: "ok" | "warning" | "error"
  message: string
} {
  const length = title.length
  
  if (length === 0) {
    return { length, status: "error", message: "Title is empty" }
  }
  if (length < 30) {
    return { length, status: "warning", message: "Title is too short (recommended: 30-60 characters)" }
  }
  if (length > 60) {
    return { length, status: "warning", message: "Title may be truncated (recommended: 30-60 characters)" }
  }
  return { length, status: "ok", message: "Title length is optimal" }
}

