/**
 * Formatting utilities for accessibility test results
 * Provides human-readable formatting for technical accessibility data
 */

import type { WCAGCriterion, FixComplexity } from './processor'

// ============================================================================
// Impact Descriptions
// ============================================================================

export const IMPACT_DESCRIPTIONS: Record<string, { short: string; long: string; userImpact: string }> = {
  critical: {
    short: 'Critical',
    long: 'This issue makes content completely inaccessible',
    userImpact: 'Users with disabilities will be completely blocked from accessing this content',
  },
  serious: {
    short: 'Serious',
    long: 'This issue creates significant barriers',
    userImpact: 'Users with disabilities will have great difficulty accessing or understanding this content',
  },
  moderate: {
    short: 'Moderate',
    long: 'This issue causes some difficulty',
    userImpact: 'Users with disabilities may experience frustration or confusion',
  },
  minor: {
    short: 'Minor',
    long: 'This issue has a small impact',
    userImpact: 'Users with disabilities may experience slight inconvenience',
  },
}

// ============================================================================
// Fix Complexity Descriptions
// ============================================================================

export const FIX_COMPLEXITY_DESCRIPTIONS: Record<FixComplexity, { label: string; description: string; timeEstimate: string }> = {
  quick: {
    label: 'Quick Fix',
    description: 'Simple code change, usually adding an attribute or text',
    timeEstimate: '1-5 minutes per element',
  },
  moderate: {
    label: 'Moderate Effort',
    description: 'May require restructuring HTML or adding new elements',
    timeEstimate: '5-15 minutes per element',
  },
  complex: {
    label: 'Complex Fix',
    description: 'Requires significant code changes, possibly redesign',
    timeEstimate: '15-45 minutes or more',
  },
}

// ============================================================================
// WCAG Formatter
// ============================================================================

/**
 * Format WCAG criterion for display
 */
export function formatWCAGCriterion(criterion: WCAGCriterion): string {
  return `${criterion.number} ${criterion.name} (Level ${criterion.level})`
}

/**
 * Format WCAG criterion as a short reference
 */
export function formatWCAGShort(criterion: WCAGCriterion): string {
  return `SC ${criterion.number}`
}

/**
 * Get WCAG level badge color
 */
export function getWCAGLevelColor(level: 'A' | 'AA' | 'AAA'): string {
  switch (level) {
    case 'A':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'AA':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    case 'AAA':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  }
}

/**
 * Get WCAG version badge color
 */
export function getWCAGVersionColor(version: '2.0' | '2.1' | '2.2'): string {
  switch (version) {
    case '2.0':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
    case '2.1':
      return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
    case '2.2':
      return 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200'
  }
}

// ============================================================================
// Selector Formatter
// ============================================================================

interface ParsedSelector {
  tagName?: string
  id?: string
  classes: string[]
  attributes: Array<{ name: string; value?: string }>
  nthChild?: string
  pseudoElements: string[]
  rawSelector: string
}

/**
 * Parse a CSS selector into components
 */
export function parseSelector(selector: string): ParsedSelector {
  const result: ParsedSelector = {
    classes: [],
    attributes: [],
    pseudoElements: [],
    rawSelector: selector,
  }

  // Extract tag name
  const tagMatch = selector.match(/^([a-zA-Z][a-zA-Z0-9]*)/)
  if (tagMatch) {
    result.tagName = tagMatch[1].toUpperCase()
  }

  // Extract ID
  const idMatch = selector.match(/#([a-zA-Z0-9_-]+)/)
  if (idMatch) {
    result.id = idMatch[1]
  }

  // Extract classes
  const classMatches = selector.matchAll(/\.([a-zA-Z0-9_-]+)/g)
  for (const match of classMatches) {
    result.classes.push(match[1])
  }

  // Extract attributes
  const attrMatches = selector.matchAll(/\[([a-zA-Z0-9_-]+)(?:=["']?([^"'\]]+)["']?)?\]/g)
  for (const match of attrMatches) {
    result.attributes.push({ name: match[1], value: match[2] })
  }

  // Extract nth-child
  const nthMatch = selector.match(/:nth-child\(([^)]+)\)/)
  if (nthMatch) {
    result.nthChild = nthMatch[1]
  }

  // Extract pseudo-elements
  const pseudoMatches = selector.matchAll(/::([a-zA-Z-]+)/g)
  for (const match of pseudoMatches) {
    result.pseudoElements.push(match[1])
  }

  return result
}

/**
 * Format a selector in a human-readable way
 */
export function formatSelectorReadable(selector: string): string {
  const parsed = parseSelector(selector)
  const parts: string[] = []

  if (parsed.tagName) {
    parts.push(`<${parsed.tagName.toLowerCase()}>`)
  }

  if (parsed.id) {
    parts.push(`with id "${parsed.id}"`)
  }

  if (parsed.classes.length > 0) {
    if (parsed.classes.length === 1) {
      parts.push(`with class "${parsed.classes[0]}"`)
    } else {
      parts.push(`with classes "${parsed.classes.slice(0, 3).join('", "')}"${parsed.classes.length > 3 ? '...' : ''}`)
    }
  }

  if (parsed.attributes.length > 0) {
    const attrs = parsed.attributes.map(a => a.value ? `${a.name}="${a.value}"` : a.name)
    parts.push(`[${attrs.join(', ')}]`)
  }

  if (parsed.nthChild) {
    parts.push(`(${parsed.nthChild}${getOrdinalSuffix(parseInt(parsed.nthChild))} child)`)
  }

  return parts.join(' ') || selector
}

/**
 * Get ordinal suffix for a number
 */
function getOrdinalSuffix(n: number): string {
  if (isNaN(n)) return ''
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return s[(v - 20) % 10] || s[v] || s[0]
}

/**
 * Simplify a complex selector path
 */
export function simplifySelectorPath(selectorPath: string[]): string {
  if (selectorPath.length <= 3) {
    return selectorPath.join(' > ')
  }

  // Show first, ellipsis, and last two
  return `${selectorPath[0]} > ... > ${selectorPath.slice(-2).join(' > ')}`
}

/**
 * Format selector for display with syntax highlighting hints
 */
export function formatSelectorWithHighlights(selector: string): Array<{ text: string; type: 'tag' | 'id' | 'class' | 'attr' | 'pseudo' | 'text' }> {
  const highlights: Array<{ text: string; type: 'tag' | 'id' | 'class' | 'attr' | 'pseudo' | 'text' }> = []
  
  // Simple tokenizer
  let remaining = selector
  
  while (remaining.length > 0) {
    // Check for tag
    const tagMatch = remaining.match(/^([a-zA-Z][a-zA-Z0-9]*)/)
    if (tagMatch) {
      highlights.push({ text: tagMatch[1], type: 'tag' })
      remaining = remaining.slice(tagMatch[1].length)
      continue
    }
    
    // Check for ID
    const idMatch = remaining.match(/^#([a-zA-Z0-9_-]+)/)
    if (idMatch) {
      highlights.push({ text: `#${idMatch[1]}`, type: 'id' })
      remaining = remaining.slice(idMatch[0].length)
      continue
    }
    
    // Check for class
    const classMatch = remaining.match(/^\.([a-zA-Z0-9_-]+)/)
    if (classMatch) {
      highlights.push({ text: `.${classMatch[1]}`, type: 'class' })
      remaining = remaining.slice(classMatch[0].length)
      continue
    }
    
    // Check for attribute
    const attrMatch = remaining.match(/^\[([^\]]+)\]/)
    if (attrMatch) {
      highlights.push({ text: `[${attrMatch[1]}]`, type: 'attr' })
      remaining = remaining.slice(attrMatch[0].length)
      continue
    }
    
    // Check for pseudo
    const pseudoMatch = remaining.match(/^(::?[a-zA-Z-]+(?:\([^)]+\))?)/)
    if (pseudoMatch) {
      highlights.push({ text: pseudoMatch[1], type: 'pseudo' })
      remaining = remaining.slice(pseudoMatch[0].length)
      continue
    }
    
    // Consume one character as text
    highlights.push({ text: remaining[0], type: 'text' })
    remaining = remaining.slice(1)
  }
  
  return highlights
}

// ============================================================================
// HTML Formatter
// ============================================================================

/**
 * Format HTML for display (truncate if too long)
 */
export function formatHtml(html: string, maxLength: number = 200): string {
  if (html.length <= maxLength) {
    return html
  }
  
  // Try to truncate at a tag boundary
  const truncated = html.slice(0, maxLength)
  const lastTagEnd = truncated.lastIndexOf('>')
  
  if (lastTagEnd > maxLength * 0.5) {
    return truncated.slice(0, lastTagEnd + 1) + '...'
  }
  
  return truncated + '...'
}

/**
 * Extract the main element from HTML (first tag only)
 */
export function extractMainElement(html: string): string {
  const match = html.match(/^<([a-zA-Z][a-zA-Z0-9]*)[^>]*>/)
  if (match) {
    return match[0]
  }
  return html.slice(0, 50) + (html.length > 50 ? '...' : '')
}

/**
 * Get element type description
 */
export function getElementTypeDescription(tagName: string): string {
  const descriptions: Record<string, string> = {
    A: 'Link',
    BUTTON: 'Button',
    INPUT: 'Input field',
    IMG: 'Image',
    DIV: 'Container',
    SPAN: 'Inline element',
    P: 'Paragraph',
    H1: 'Main heading',
    H2: 'Section heading',
    H3: 'Subsection heading',
    H4: 'Minor heading',
    H5: 'Minor heading',
    H6: 'Minor heading',
    NAV: 'Navigation',
    MAIN: 'Main content',
    HEADER: 'Header',
    FOOTER: 'Footer',
    ASIDE: 'Sidebar',
    SECTION: 'Section',
    ARTICLE: 'Article',
    FORM: 'Form',
    TABLE: 'Table',
    UL: 'Unordered list',
    OL: 'Ordered list',
    LI: 'List item',
    IFRAME: 'Embedded frame',
    VIDEO: 'Video',
    AUDIO: 'Audio',
    SELECT: 'Dropdown',
    TEXTAREA: 'Text area',
    LABEL: 'Form label',
  }
  
  return descriptions[tagName.toUpperCase()] || tagName.toLowerCase()
}

// ============================================================================
// Time Formatter
// ============================================================================

/**
 * Format time range for display
 */
export function formatTimeRange(min: number, max: number, unit: 'minutes' | 'hours'): string {
  if (min === max) {
    return `~${min} ${unit}`
  }
  return `${min}-${max} ${unit}`
}

/**
 * Format duration in a human-readable way
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`
  }
  
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  
  if (remainingMinutes === 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''}`
  }
  
  return `${hours} hour${hours !== 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`
}

// ============================================================================
// Score Formatter
// ============================================================================

/**
 * Get score grade label
 */
export function getScoreGrade(score: number): { grade: string; label: string; description: string } {
  if (score >= 90) {
    return {
      grade: 'A',
      label: 'Excellent',
      description: 'Your page has excellent accessibility',
    }
  }
  if (score >= 80) {
    return {
      grade: 'B',
      label: 'Good',
      description: 'Your page has good accessibility with minor issues',
    }
  }
  if (score >= 70) {
    return {
      grade: 'C',
      label: 'Fair',
      description: 'Your page has moderate accessibility issues',
    }
  }
  if (score >= 60) {
    return {
      grade: 'D',
      label: 'Needs Improvement',
      description: 'Your page has significant accessibility issues',
    }
  }
  return {
    grade: 'F',
    label: 'Poor',
    description: 'Your page has critical accessibility issues',
  }
}

/**
 * Format percentage for display
 */
export function formatPercentage(value: number, decimals: number = 0): string {
  return `${value.toFixed(decimals)}%`
}

// ============================================================================
// Count Formatter
// ============================================================================

/**
 * Format count with pluralization
 */
export function formatCount(count: number, singular: string, plural?: string): string {
  const pluralForm = plural || `${singular}s`
  return `${count} ${count === 1 ? singular : pluralForm}`
}

/**
 * Format element count for display
 */
export function formatElementCount(count: number): string {
  if (count === 0) return 'No elements'
  if (count === 1) return '1 element'
  return `${count} elements`
}

/**
 * Format issue count with severity context
 */
export function formatIssueCount(violations: number, incomplete: number): string {
  const parts: string[] = []
  
  if (violations > 0) {
    parts.push(formatCount(violations, 'violation'))
  }
  
  if (incomplete > 0) {
    parts.push(formatCount(incomplete, 'item needing review', 'items needing review'))
  }
  
  if (parts.length === 0) {
    return 'No issues found'
  }
  
  return parts.join(' and ')
}

// ============================================================================
// Export Report Formatters
// ============================================================================

/**
 * Format date for reports
 */
export function formatReportDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

/**
 * Format URL for display (truncate if too long)
 */
export function formatUrl(url: string, maxLength: number = 60): string {
  if (url.length <= maxLength) return url
  
  try {
    const parsed = new URL(url)
    const path = parsed.pathname
    const truncatedPath = path.length > maxLength - parsed.host.length - 10
      ? path.slice(0, 20) + '...' + path.slice(-15)
      : path
    return `${parsed.host}${truncatedPath}`
  } catch {
    return url.slice(0, maxLength - 3) + '...'
  }
}

/**
 * Generate a report filename
 */
export function generateReportFilename(url: string, format: string): string {
  const date = new Date().toISOString().split('T')[0]
  
  try {
    const parsed = new URL(url)
    const hostname = parsed.hostname.replace(/\./g, '-')
    return `accessibility-report-${hostname}-${date}.${format}`
  } catch {
    return `accessibility-report-${date}.${format}`
  }
}

// ============================================================================
// Markdown Formatter
// ============================================================================

/**
 * Escape markdown special characters
 */
export function escapeMarkdown(text: string): string {
  return text.replace(/[*_`~\[\]()#+-=|{}.!\\]/g, '\\$&')
}

/**
 * Format text as markdown code
 */
export function formatMarkdownCode(code: string, language?: string): string {
  if (language) {
    return `\`\`\`${language}\n${code}\n\`\`\``
  }
  return `\`${code}\``
}

/**
 * Format text as markdown link
 */
export function formatMarkdownLink(text: string, url: string): string {
  return `[${escapeMarkdown(text)}](${url})`
}

