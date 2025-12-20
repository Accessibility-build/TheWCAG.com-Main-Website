/**
 * Open Graph Generator Utilities
 */

export interface OpenGraphOptions {
  // Required Open Graph
  title: string
  type: string
  url: string
  image: string

  // Optional Open Graph
  description?: string
  siteName?: string
  locale?: string
  imageWidth?: string
  imageHeight?: string
  imageAlt?: string

  // Article-specific (when type is article)
  articlePublishedTime?: string
  articleModifiedTime?: string
  articleAuthor?: string
  articleSection?: string
  articleTags?: string[]

  // Twitter Card
  twitterCard?: "summary" | "summary_large_image" | "app" | "player"
  twitterSite?: string
  twitterCreator?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
}

/**
 * Open Graph type options
 */
export const OG_TYPE_OPTIONS = [
  { value: "website", label: "Website", description: "Default type for most pages" },
  { value: "article", label: "Article", description: "Blog posts, news articles" },
  { value: "profile", label: "Profile", description: "Personal profile page" },
  { value: "book", label: "Book", description: "Book or publication" },
  { value: "music.song", label: "Song", description: "Music track" },
  { value: "music.album", label: "Album", description: "Music album" },
  { value: "music.playlist", label: "Playlist", description: "Music playlist" },
  { value: "video.movie", label: "Movie", description: "Full-length movie" },
  { value: "video.episode", label: "Episode", description: "TV episode" },
  { value: "video.tv_show", label: "TV Show", description: "TV series" },
  { value: "video.other", label: "Video", description: "Other video content" },
  { value: "product", label: "Product", description: "Product for sale" },
] as const

/**
 * Twitter Card type options
 */
export const TWITTER_CARD_OPTIONS = [
  {
    value: "summary",
    label: "Summary",
    description: "Default card with small square image",
  },
  {
    value: "summary_large_image",
    label: "Summary Large Image",
    description: "Card with large, prominent image",
  },
  {
    value: "app",
    label: "App",
    description: "Card for mobile app direct download",
  },
  {
    value: "player",
    label: "Player",
    description: "Card with embedded video/audio player",
  },
] as const

/**
 * Recommended image sizes
 */
export const IMAGE_RECOMMENDATIONS = {
  facebook: {
    width: 1200,
    height: 630,
    aspectRatio: "1.91:1",
    minWidth: 600,
    minHeight: 315,
  },
  twitter: {
    summary: { width: 120, height: 120, aspectRatio: "1:1" },
    summaryLargeImage: { width: 800, height: 418, aspectRatio: "1.91:1" },
  },
  linkedin: {
    width: 1200,
    height: 627,
    aspectRatio: "1.91:1",
  },
}

/**
 * Locale options
 */
export const LOCALE_OPTIONS = [
  { value: "en_US", label: "English (US)" },
  { value: "en_GB", label: "English (UK)" },
  { value: "es_ES", label: "Spanish (Spain)" },
  { value: "es_MX", label: "Spanish (Mexico)" },
  { value: "fr_FR", label: "French (France)" },
  { value: "de_DE", label: "German" },
  { value: "it_IT", label: "Italian" },
  { value: "pt_BR", label: "Portuguese (Brazil)" },
  { value: "ja_JP", label: "Japanese" },
  { value: "ko_KR", label: "Korean" },
  { value: "zh_CN", label: "Chinese (Simplified)" },
  { value: "zh_TW", label: "Chinese (Traditional)" },
  { value: "ru_RU", label: "Russian" },
  { value: "ar_AR", label: "Arabic" },
  { value: "hi_IN", label: "Hindi" },
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
function generateTag(property: string, content: string, type: "property" | "name" = "property"): string {
  return `<meta ${type}="${property}" content="${escapeHtml(content)}">`
}

/**
 * Generate all Open Graph and Twitter Card meta tags
 */
export function generateOpenGraphTags(options: OpenGraphOptions): string {
  const tags: string[] = []

  // Required Open Graph tags
  tags.push(generateTag("og:title", options.title))
  tags.push(generateTag("og:type", options.type))
  tags.push(generateTag("og:url", options.url))
  tags.push(generateTag("og:image", options.image))

  // Optional Open Graph tags
  if (options.description) {
    tags.push(generateTag("og:description", options.description))
  }
  if (options.siteName) {
    tags.push(generateTag("og:site_name", options.siteName))
  }
  if (options.locale) {
    tags.push(generateTag("og:locale", options.locale))
  }
  if (options.imageWidth) {
    tags.push(generateTag("og:image:width", options.imageWidth))
  }
  if (options.imageHeight) {
    tags.push(generateTag("og:image:height", options.imageHeight))
  }
  if (options.imageAlt) {
    tags.push(generateTag("og:image:alt", options.imageAlt))
  }

  // Article-specific tags
  if (options.type === "article") {
    if (options.articlePublishedTime) {
      tags.push(generateTag("article:published_time", options.articlePublishedTime))
    }
    if (options.articleModifiedTime) {
      tags.push(generateTag("article:modified_time", options.articleModifiedTime))
    }
    if (options.articleAuthor) {
      tags.push(generateTag("article:author", options.articleAuthor))
    }
    if (options.articleSection) {
      tags.push(generateTag("article:section", options.articleSection))
    }
    if (options.articleTags && options.articleTags.length > 0) {
      for (const tag of options.articleTags) {
        tags.push(generateTag("article:tag", tag))
      }
    }
  }

  // Twitter Card tags
  if (options.twitterCard) {
    tags.push(generateTag("twitter:card", options.twitterCard, "name"))
  }
  if (options.twitterSite) {
    tags.push(generateTag("twitter:site", options.twitterSite, "name"))
  }
  if (options.twitterCreator) {
    tags.push(generateTag("twitter:creator", options.twitterCreator, "name"))
  }
  // Twitter uses og tags as fallback, but we can add specific ones
  if (options.twitterTitle && options.twitterTitle !== options.title) {
    tags.push(generateTag("twitter:title", options.twitterTitle, "name"))
  }
  if (options.twitterDescription && options.twitterDescription !== options.description) {
    tags.push(generateTag("twitter:description", options.twitterDescription, "name"))
  }
  if (options.twitterImage && options.twitterImage !== options.image) {
    tags.push(generateTag("twitter:image", options.twitterImage, "name"))
  }

  return tags.join("\n")
}

/**
 * Validate title length
 */
export function validateTitle(title: string): {
  valid: boolean
  length: number
  message: string
  status: "ok" | "warning" | "error"
} {
  const length = title.length

  if (length === 0) {
    return { valid: false, length, message: "Title is required", status: "error" }
  }
  if (length > 95) {
    return {
      valid: true,
      length,
      message: "Title may be truncated on some platforms (recommended: under 95 characters)",
      status: "warning",
    }
  }
  if (length < 15) {
    return {
      valid: true,
      length,
      message: "Title seems short (recommended: 15-95 characters)",
      status: "warning",
    }
  }
  return { valid: true, length, message: "Title length is optimal", status: "ok" }
}

/**
 * Validate description length
 */
export function validateDescription(description: string): {
  valid: boolean
  length: number
  message: string
  status: "ok" | "warning" | "error"
} {
  const length = description.length

  if (length === 0) {
    return { valid: true, length, message: "Description is optional but recommended", status: "warning" }
  }
  if (length > 300) {
    return {
      valid: true,
      length,
      message: "Description may be truncated (recommended: under 300 characters)",
      status: "warning",
    }
  }
  if (length < 50) {
    return {
      valid: true,
      length,
      message: "Description seems short (recommended: 50-300 characters)",
      status: "warning",
    }
  }
  return { valid: true, length, message: "Description length is optimal", status: "ok" }
}

/**
 * Validate URL format
 */
export function validateOpenGraphUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Validate image URL and check if it's accessible
 */
export function validateImageUrl(url: string): {
  valid: boolean
  message: string
} {
  if (!url) {
    return { valid: false, message: "Image URL is required" }
  }

  if (!validateOpenGraphUrl(url)) {
    return { valid: false, message: "Invalid URL format" }
  }

  // Check if it's using HTTPS
  if (!url.startsWith("https://")) {
    return { valid: true, message: "Warning: HTTPS is recommended for images" }
  }

  return { valid: true, message: "Image URL is valid" }
}

/**
 * Generate social preview data
 */
export function generatePreviewData(options: OpenGraphOptions): {
  facebook: {
    title: string
    description: string
    image: string
    siteName: string
  }
  twitter: {
    title: string
    description: string
    image: string
    cardType: string
  }
  linkedin: {
    title: string
    description: string
    image: string
  }
} {
  return {
    facebook: {
      title: options.title,
      description: options.description || "",
      image: options.image,
      siteName: options.siteName || new URL(options.url).hostname,
    },
    twitter: {
      title: options.twitterTitle || options.title,
      description: options.twitterDescription || options.description || "",
      image: options.twitterImage || options.image,
      cardType: options.twitterCard || "summary_large_image",
    },
    linkedin: {
      title: options.title,
      description: options.description || "",
      image: options.image,
    },
  }
}

