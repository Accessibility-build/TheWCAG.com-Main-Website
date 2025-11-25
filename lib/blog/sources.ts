/**
 * RSS feed sources and API configurations for article extraction
 */

export interface RSSSource {
  name: string
  url: string
  enabled: boolean
}

export interface NewsAPIConfig {
  enabled: boolean
  apiKey?: string
  query: string
  language: string
  sortBy: string
}

// Default RSS feeds for accessibility content
export const DEFAULT_RSS_FEEDS: RSSSource[] = [
  {
    name: 'A11y Project',
    url: 'https://www.a11yproject.com/feed/',
    enabled: true,
  },
  {
    name: 'WebAIM Blog',
    url: 'https://webaim.org/blog/feed/',
    enabled: true,
  },
  {
    name: 'Deque Blog',
    url: 'https://www.deque.com/blog/feed/',
    enabled: true,
  },
  {
    name: 'Accessibility.com',
    url: 'https://www.accessibility.com/blog/feed',
    enabled: true,
  },
]

/**
 * Get RSS feeds from environment variable or use defaults
 */
export function getRSSFeeds(): RSSSource[] {
  const feedsEnv = process.env.RSS_FEEDS
  if (!feedsEnv) {
    return DEFAULT_RSS_FEEDS.filter((feed) => feed.enabled)
  }

  const feedUrls = feedsEnv.split(',').map((url) => url.trim())
  return feedUrls.map((url, index) => ({
    name: `Source ${index + 1}`,
    url,
    enabled: true,
  }))
}

/**
 * Accessibility-related keywords for filtering
 */
export const ACCESSIBILITY_KEYWORDS = [
  'accessibility',
  'web accessibility',
  'WCAG',
  'WCAG 2.1',
  'WCAG 2.2',
  'WCAG 3.0',
  'ADA',
  'ADA compliance',
  'Americans with Disabilities Act',
  'Section 508',
  'accessibility lawsuit',
  'ADA lawsuit',
  'digital accessibility',
  'a11y',
  'assistive technology',
  'screen reader',
  'keyboard navigation',
  'ARIA',
  'inclusive design',
  'accessible design',
  'accessibility compliance',
  'accessibility audit',
  'accessibility testing',
  'accessibility standards',
  'accessibility guidelines',
  'accessibility requirements',
  'accessible website',
  'accessible web',
  'web content accessibility',
]

/**
 * Check if text contains accessibility-related keywords
 */
export function isAccessibilityRelated(text: string): boolean {
  const lowerText = text.toLowerCase()
  return ACCESSIBILITY_KEYWORDS.some((keyword) => lowerText.includes(keyword.toLowerCase()))
}

/**
 * Get News API configuration
 */
export function getNewsAPIConfig(): NewsAPIConfig | null {
  const apiKey = process.env.NEWS_API_KEY
  if (!apiKey) {
    return null
  }

  // Comprehensive query covering all accessibility topics
  const query = [
    'web accessibility',
    'website accessibility',
    'WCAG',
    'WCAG 2.2',
    'WCAG guidelines',
    'WCAG compliance',
    'ADA compliance',
    'ADA website',
    'ADA lawsuit',
    'accessibility lawsuit',
    'digital accessibility',
    'Section 508',
    'accessible website',
    'accessible design',
    'screen reader',
    'keyboard navigation',
    'ARIA',
    'accessibility standards',
    'accessibility audit',
    'accessibility testing',
    'inclusive design',
    'a11y',
  ].join(' OR ')

  return {
    enabled: true,
    apiKey,
    query,
    language: 'en',
    sortBy: 'relevancy', // Sort by relevancy instead of date for better results
  }
}

