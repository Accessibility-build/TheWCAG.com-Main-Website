/**
 * Robots.txt Generator Utilities
 */

export interface RobotRule {
  userAgent: string
  allow: string[]
  disallow: string[]
  crawlDelay?: number
}

export interface RobotsOptions {
  rules: RobotRule[]
  sitemapUrls: string[]
  host?: string
}

/**
 * Common user agents
 */
export const COMMON_USER_AGENTS = [
  { value: "*", label: "All bots (*)" },
  { value: "Googlebot", label: "Googlebot" },
  { value: "Bingbot", label: "Bingbot" },
  { value: "Googlebot-Image", label: "Googlebot-Image" },
  { value: "Googlebot-News", label: "Googlebot-News" },
  { value: "Googlebot-Video", label: "Googlebot-Video" },
  { value: "Yandex", label: "Yandex" },
  { value: "DuckDuckBot", label: "DuckDuckBot" },
  { value: "Slurp", label: "Yahoo Slurp" },
  { value: "Baiduspider", label: "Baiduspider" },
  { value: "facebookexternalhit", label: "Facebook" },
  { value: "Twitterbot", label: "Twitterbot" },
  { value: "LinkedInBot", label: "LinkedInBot" },
  { value: "AdsBot-Google", label: "Google Ads" },
  { value: "GPTBot", label: "GPTBot (OpenAI)" },
  { value: "ChatGPT-User", label: "ChatGPT User" },
  { value: "CCBot", label: "CCBot (Common Crawl)" },
  { value: "anthropic-ai", label: "Anthropic AI" },
  { value: "ClaudeBot", label: "ClaudeBot" },
] as const

/**
 * Common paths to block/allow
 */
export const COMMON_PATHS = {
  disallow: [
    { value: "/admin/", label: "Admin area" },
    { value: "/api/", label: "API endpoints" },
    { value: "/private/", label: "Private files" },
    { value: "/tmp/", label: "Temporary files" },
    { value: "/cgi-bin/", label: "CGI scripts" },
    { value: "/*.pdf$", label: "PDF files" },
    { value: "/wp-admin/", label: "WordPress admin" },
    { value: "/wp-includes/", label: "WordPress includes" },
    { value: "/cart/", label: "Shopping cart" },
    { value: "/checkout/", label: "Checkout" },
    { value: "/search", label: "Search pages" },
    { value: "/*?", label: "Query parameters" },
  ],
  allow: [
    { value: "/", label: "All pages" },
    { value: "/public/", label: "Public files" },
    { value: "/images/", label: "Images" },
    { value: "/css/", label: "Stylesheets" },
    { value: "/js/", label: "JavaScript" },
    { value: "/*.js$", label: "JS files" },
    { value: "/*.css$", label: "CSS files" },
  ],
} as const

/**
 * Preset configurations
 */
export const PRESETS = {
  allowAll: {
    name: "Allow All",
    description: "Allow all bots to crawl everything",
    rules: [{ userAgent: "*", allow: ["/"], disallow: [] }],
    sitemapUrls: [],
  },
  disallowAll: {
    name: "Disallow All",
    description: "Block all bots from crawling",
    rules: [{ userAgent: "*", allow: [], disallow: ["/"] }],
    sitemapUrls: [],
  },
  standard: {
    name: "Standard",
    description: "Allow all except admin and private areas",
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/admin/", "/private/", "/api/", "/cgi-bin/"],
      },
    ],
    sitemapUrls: [],
  },
  wordpress: {
    name: "WordPress",
    description: "Standard WordPress configuration",
    rules: [
      {
        userAgent: "*",
        allow: ["/wp-content/uploads/"],
        disallow: ["/wp-admin/", "/wp-includes/", "/wp-content/plugins/", "/trackback/", "/xmlrpc.php"],
      },
    ],
    sitemapUrls: [],
  },
  blockAi: {
    name: "Block AI Bots",
    description: "Block AI crawlers while allowing search engines",
    rules: [
      { userAgent: "*", allow: ["/"], disallow: [] },
      { userAgent: "GPTBot", allow: [], disallow: ["/"] },
      { userAgent: "ChatGPT-User", allow: [], disallow: ["/"] },
      { userAgent: "CCBot", allow: [], disallow: ["/"] },
      { userAgent: "anthropic-ai", allow: [], disallow: ["/"] },
      { userAgent: "ClaudeBot", allow: [], disallow: ["/"] },
    ],
    sitemapUrls: [],
  },
} as const

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(options: RobotsOptions): string {
  const { rules, sitemapUrls, host } = options
  const lines: string[] = []

  // Add each rule block
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i]

    // Add blank line between rule blocks (but not before first)
    if (i > 0) {
      lines.push("")
    }

    lines.push(`User-agent: ${rule.userAgent}`)

    // Add allow directives
    for (const path of rule.allow) {
      if (path.trim()) {
        lines.push(`Allow: ${path}`)
      }
    }

    // Add disallow directives
    for (const path of rule.disallow) {
      if (path.trim()) {
        lines.push(`Disallow: ${path}`)
      }
    }

    // Add crawl delay if specified
    if (rule.crawlDelay && rule.crawlDelay > 0) {
      lines.push(`Crawl-delay: ${rule.crawlDelay}`)
    }
  }

  // Add blank line before sitemaps if we have rules
  if (rules.length > 0 && (sitemapUrls.length > 0 || host)) {
    lines.push("")
  }

  // Add host directive if specified
  if (host) {
    lines.push(`Host: ${host}`)
  }

  // Add sitemap URLs
  for (const sitemapUrl of sitemapUrls) {
    if (sitemapUrl.trim()) {
      lines.push(`Sitemap: ${sitemapUrl}`)
    }
  }

  return lines.join("\n")
}

/**
 * Parse robots.txt content into structured format
 */
export function parseRobotsTxt(content: string): RobotsOptions {
  const lines = content.split("\n").map((line) => line.trim())
  const rules: RobotRule[] = []
  const sitemapUrls: string[] = []
  let host: string | undefined
  let currentRule: RobotRule | null = null

  for (const line of lines) {
    // Skip empty lines and comments
    if (!line || line.startsWith("#")) continue

    const [directive, ...valueParts] = line.split(":")
    const value = valueParts.join(":").trim()

    switch (directive.toLowerCase()) {
      case "user-agent":
        // Start a new rule block
        if (currentRule) {
          rules.push(currentRule)
        }
        currentRule = {
          userAgent: value,
          allow: [],
          disallow: [],
        }
        break

      case "allow":
        if (currentRule) {
          currentRule.allow.push(value)
        }
        break

      case "disallow":
        if (currentRule) {
          currentRule.disallow.push(value)
        }
        break

      case "crawl-delay":
        if (currentRule) {
          currentRule.crawlDelay = parseInt(value, 10)
        }
        break

      case "sitemap":
        sitemapUrls.push(value)
        break

      case "host":
        host = value
        break
    }
  }

  // Don't forget the last rule
  if (currentRule) {
    rules.push(currentRule)
  }

  return { rules, sitemapUrls, host }
}

/**
 * Validate robots.txt path pattern
 */
export function validatePath(path: string): boolean {
  // Path should start with /
  return path.startsWith("/") || path === ""
}

