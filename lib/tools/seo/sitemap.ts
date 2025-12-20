/**
 * Sitemap Generator Utilities
 */

export interface SitemapUrl {
  loc: string
  lastmod?: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
}

export interface SitemapOptions {
  urls: SitemapUrl[]
  pretty?: boolean
}

/**
 * Validate URL format
 */
export function validateUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Parse URLs from text input (one per line or comma-separated)
 */
export function parseUrls(input: string): string[] {
  const lines = input
    .split(/[\n,]/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  return lines.filter((url) => validateUrl(url))
}

/**
 * Get invalid URLs from input
 */
export function getInvalidUrls(input: string): string[] {
  const lines = input
    .split(/[\n,]/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  return lines.filter((url) => !validateUrl(url))
}

/**
 * Generate XML sitemap string
 */
export function generateSitemap(options: SitemapOptions): string {
  const { urls, pretty = true } = options
  const indent = pretty ? "  " : ""
  const newline = pretty ? "\n" : ""

  let xml = '<?xml version="1.0" encoding="UTF-8"?>' + newline
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + newline

  for (const url of urls) {
    xml += indent + "<url>" + newline

    xml += indent + indent + `<loc>${escapeXml(url.loc)}</loc>` + newline

    if (url.lastmod) {
      xml += indent + indent + `<lastmod>${url.lastmod}</lastmod>` + newline
    }

    if (url.changefreq) {
      xml += indent + indent + `<changefreq>${url.changefreq}</changefreq>` + newline
    }

    if (url.priority !== undefined) {
      xml += indent + indent + `<priority>${url.priority.toFixed(1)}</priority>` + newline
    }

    xml += indent + "</url>" + newline
  }

  xml += "</urlset>"

  return xml
}

/**
 * Escape special XML characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

/**
 * Get today's date in YYYY-MM-DD format
 */
export function getTodayDate(): string {
  return new Date().toISOString().split("T")[0]
}

/**
 * Change frequency options
 */
export const CHANGE_FREQUENCIES = [
  { value: "always", label: "Always" },
  { value: "hourly", label: "Hourly" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
  { value: "never", label: "Never" },
] as const

/**
 * Priority presets
 */
export const PRIORITY_PRESETS = [
  { value: 1.0, label: "1.0 - Homepage" },
  { value: 0.8, label: "0.8 - Main sections" },
  { value: 0.6, label: "0.6 - Regular pages" },
  { value: 0.5, label: "0.5 - Default" },
  { value: 0.4, label: "0.4 - Less important" },
  { value: 0.2, label: "0.2 - Low priority" },
] as const

