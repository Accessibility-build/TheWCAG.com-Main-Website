import Fuse from 'fuse.js'
import { successCriteria } from './wcag-data'
import type { SuccessCriterion } from './wcag-data'
import { getAllLawsuits } from './lawsuits-data'
import type { Lawsuit } from './lawsuits-data'
import { examples as examplesIndex } from './examples-data'

export type SearchResultType = 'criterion' | 'page' | 'lawsuit' | 'example' | 'principle' | 'tool'

export interface BaseSearchResult {
  type: SearchResultType
  title: string
  url: string
  description: string
  score: number
  matchedFields: string[]
}

export interface CriterionSearchResult extends BaseSearchResult {
  type: 'criterion'
  criterion: SuccessCriterion
}

export interface PageSearchResult extends BaseSearchResult {
  type: 'page'
  category?: string
}

export interface LawsuitSearchResult extends BaseSearchResult {
  type: 'lawsuit'
  lawsuit: Lawsuit
}

export interface ExampleSearchResult extends BaseSearchResult {
  type: 'example'
  category?: string
}

export interface PrincipleSearchResult extends BaseSearchResult {
  type: 'principle'
  principleName: string
}

export interface ToolSearchResult extends BaseSearchResult {
  type: 'tool'
  toolName: string
}

export type SearchResult = 
  | CriterionSearchResult 
  | PageSearchResult 
  | LawsuitSearchResult 
  | ExampleSearchResult 
  | PrincipleSearchResult 
  | ToolSearchResult

// Static pages data
const staticPages: Array<{
  title: string
  url: string
  description: string
  category?: string
  keywords?: string[]
}> = [
  {
    title: 'Getting Started with WCAG',
    url: '/getting-started',
    description: 'Step-by-step guide for beginners to understand and implement WCAG 2.2 accessibility standards',
    category: 'Guide',
    keywords: ['beginner', 'tutorial', 'start', 'learn', 'introduction']
  },
  {
    title: 'WCAG Checklist',
    url: '/checklist',
    description: 'Interactive WCAG 2.2 compliance checklist covering all Level A, AA, and AAA success criteria',
    category: 'Tool',
    keywords: ['checklist', 'compliance', 'tracking', 'progress']
  },
  {
    title: 'How to Make a Website Accessible',
    url: '/how-to-make-website-accessible',
    description: 'Complete step-by-step guide to making your website accessible and WCAG 2.2 compliant',
    category: 'Guide',
    keywords: ['tutorial', 'guide', 'implementation', 'steps']
  },
  {
    title: 'Best Practices',
    url: '/best-practices',
    description: 'Web accessibility best practices with code examples and practical implementation guidance',
    category: 'Guide',
    keywords: ['best practices', 'patterns', 'code examples', 'implementation']
  },
  {
    title: 'Testing Guide',
    url: '/testing-guide',
    description: 'Comprehensive accessibility testing guide covering automated, manual, screen reader, and user testing',
    category: 'Guide',
    keywords: ['testing', 'audit', 'evaluation', 'tools']
  },
  {
    title: 'Accessibility Audit Guide',
    url: '/accessibility-audit-guide',
    description: 'Complete guide to conducting accessibility audits and evaluations',
    category: 'Guide',
    keywords: ['audit', 'evaluation', 'assessment', 'review']
  },
  {
    title: 'Mobile Accessibility',
    url: '/mobile-accessibility',
    description: 'Mobile-specific accessibility guidelines and best practices for iOS and Android',
    category: 'Guide',
    keywords: ['mobile', 'ios', 'android', 'responsive']
  },
  {
    title: 'Industry Guides',
    url: '/industry-guides',
    description: 'Industry-specific accessibility guides for e-commerce, education, healthcare, government, and finance',
    category: 'Guide',
    keywords: ['industry', 'sector', 'e-commerce', 'healthcare', 'education']
  },
  {
    title: 'Accessibility Statement Template',
    url: '/accessibility-statement-template',
    description: 'Free accessibility statement template and guide for creating your own statement',
    category: 'Resource',
    keywords: ['template', 'statement', 'policy']
  },
  {
    title: 'Compliance Laws',
    url: '/compliance',
    description: 'Comprehensive guide to accessibility laws including ADA, Section 508, EN 301 549, AODA, EAA, and CVAA',
    category: 'Guide',
    keywords: ['ada', 'section 508', 'laws', 'legal', 'compliance']
  },
  {
    title: 'WCAG Overview',
    url: '/overview',
    description: 'Complete overview of WCAG 2.2 accessibility guidelines and principles',
    category: 'Guide',
    keywords: ['overview', 'introduction', 'basics']
  },
  {
    title: 'WCAG 2.2',
    url: '/wcag-2-2',
    description: 'Complete guide to WCAG 2.2, the current version of the Web Content Accessibility Guidelines',
    category: 'Version',
    keywords: ['wcag 2.2', 'current', 'latest']
  },
  {
    title: 'WCAG 2.2 vs 2.1',
    url: '/wcag-2-2-vs-2-1',
    description: 'Detailed comparison of WCAG 2.2 vs 2.1 with migration guide and all 9 new criteria',
    category: 'Guide',
    keywords: ['comparison', 'migration', 'upgrade', 'differences']
  },
  {
    title: 'WCAG 2.1',
    url: '/wcag-2-1',
    description: 'Guide to WCAG 2.1 accessibility guidelines published in June 2018',
    category: 'Version',
    keywords: ['wcag 2.1', '2018']
  },
  {
    title: 'WCAG 2.0',
    url: '/wcag-2-0',
    description: 'Guide to WCAG 2.0 accessibility guidelines published in December 2008',
    category: 'Version',
    keywords: ['wcag 2.0', '2008']
  },
  {
    title: 'WCAG 1.0',
    url: '/wcag-1-0',
    description: 'Historical guide to WCAG 1.0 accessibility guidelines published in May 1999',
    category: 'Version',
    keywords: ['wcag 1.0', '1999', 'legacy']
  },
  {
    title: 'WCAG 3.0',
    url: '/wcag-3-0',
    description: 'Information about WCAG 3.0, the future version of accessibility guidelines currently in development',
    category: 'Version',
    keywords: ['wcag 3.0', 'future', 'upcoming']
  },
  {
    title: 'Accessibility Myths',
    url: '/myths',
    description: 'Common accessibility myths debunked with facts and explanations',
    category: 'Resource',
    keywords: ['myths', 'misconceptions', 'facts']
  },
  {
    title: 'FAQ',
    url: '/faq',
    description: 'Frequently asked questions about WCAG and web accessibility',
    category: 'Resource',
    keywords: ['faq', 'questions', 'answers', 'help']
  },
  {
    title: 'Glossary',
    url: '/glossary',
    description: 'Comprehensive glossary of accessibility terms and definitions',
    category: 'Resource',
    keywords: ['glossary', 'terms', 'definitions', 'vocabulary']
  },
  {
    title: 'Examples',
    url: '/examples',
    description: 'Real-world examples of accessible web components and patterns with code examples',
    category: 'Resource',
    keywords: ['examples', 'code', 'components', 'patterns']
  },
  {
    title: 'Lawsuits',
    url: '/lawsuits',
    description: 'Recent accessibility lawsuits and legal cases with detailed information',
    category: 'Resource',
    keywords: ['lawsuits', 'legal', 'cases', 'litigation']
  },
  {
    title: 'Principles',
    url: '/principles',
    description: 'The four POUR principles of WCAG: Perceivable, Operable, Understandable, and Robust',
    category: 'Guide',
    keywords: ['principles', 'pour', 'perceivable', 'operable', 'understandable', 'robust']
  },
  {
    title: 'Learn',
    url: '/learn',
    description: 'Learning paths and resources for mastering web accessibility',
    category: 'Resource',
    keywords: ['learn', 'learning', 'education', 'tutorials']
  },
  {
    title: 'Resources',
    url: '/resources',
    description: 'Additional resources and downloads for accessibility',
    category: 'Resource',
    keywords: ['resources', 'downloads', 'links']
  },
  {
    title: 'Tools',
    url: '/tools',
    description: 'Accessibility tools and utilities',
    category: 'Tool',
    keywords: ['tools', 'utilities', 'checkers']
  },
  {
    title: 'Compare',
    url: '/compare',
    description: 'Detailed comparison of accessibility tools, services, screen readers, and testing solutions',
    category: 'Resource',
    keywords: ['compare', 'comparison', 'tools', 'services']
  },
  {
    title: 'Services',
    url: '/services',
    description: 'Accessibility services including audits, remediation, and development',
    category: 'Service',
    keywords: ['services', 'audit', 'remediation', 'development']
  },
  {
    title: 'What\'s New in WCAG 2.2',
    url: '/whats-new',
    description: 'Overview of new features and changes in WCAG 2.2',
    category: 'Guide',
    keywords: ['whats new', 'new features', 'changes', 'updates']
  }
]

// Examples data — sourced from lib/examples-data.ts and shaped for search.
const examples = examplesIndex.map((e) => ({
  title: e.title,
  url: `/examples/${e.slug}`,
  description: e.description,
  category: e.category,
  keywords: e.keywords,
}))

// Principles data
const principles: Array<{
  title: string
  url: string
  description: string
  principleName: string
  keywords?: string[]
}> = [
  {
    title: 'Perceivable',
    url: '/principles/perceivable',
    description: 'Information must be presentable in ways users can perceive',
    principleName: 'perceivable',
    keywords: ['perceivable', 'senses', 'perception']
  },
  {
    title: 'Operable',
    url: '/principles/operable',
    description: 'Users must be able to operate interface components',
    principleName: 'operable',
    keywords: ['operable', 'interaction', 'keyboard']
  },
  {
    title: 'Understandable',
    url: '/principles/understandable',
    description: 'Information and UI must be understandable',
    principleName: 'understandable',
    keywords: ['understandable', 'clear', 'comprehensible']
  },
  {
    title: 'Robust',
    url: '/principles/robust',
    description: 'Content must work with current and future tools',
    principleName: 'robust',
    keywords: ['robust', 'compatible', 'future-proof']
  }
]

// Tools data
const tools: Array<{
  title: string
  url: string
  description: string
  toolName: string
  keywords?: string[]
}> = [
  {
    title: 'Contrast Checker',
    url: '/tools/contrast-checker',
    description: 'Color contrast checker tool to verify WCAG contrast requirements',
    toolName: 'contrast-checker',
    keywords: ['contrast', 'color', 'checker', 'wcag']
  }
]

/**
 * Unified search function that searches across all content types
 */
export function searchAll(query: string, limit: number = 20): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return []
  }

  const searchTerm = query.trim().toLowerCase()
  const results: SearchResult[] = []

  // Search criteria
  for (const criterion of successCriteria) {
    const matchedFields: string[] = []
    let score = 0

    // Exact number match (highest priority)
    if (criterion.number.toLowerCase() === searchTerm) {
      score += 1000
      matchedFields.push('number')
    } else if (criterion.number.toLowerCase().includes(searchTerm)) {
      score += 500
      matchedFields.push('number')
    }

    // ID match (high priority)
    if (criterion.id.toLowerCase() === searchTerm.replace(/\./g, '-')) {
      score += 800
      matchedFields.push('id')
    }

    // Title match (high priority)
    const titleLower = criterion.title.toLowerCase()
    if (titleLower === searchTerm) {
      score += 400
      matchedFields.push('title')
    } else if (titleLower.includes(searchTerm)) {
      score += 200
      matchedFields.push('title')
    } else {
      const titleWords = titleLower.split(/\s+/)
      const searchWords = searchTerm.split(/\s+/)
      const matchingWords = searchWords.filter(word => 
        titleWords.some(titleWord => titleWord.includes(word))
      )
      if (matchingWords.length > 0) {
        score += 100 * (matchingWords.length / searchWords.length)
        matchedFields.push('title')
      }
    }

    // Summary match
    if (criterion.summary.toLowerCase().includes(searchTerm)) {
      score += 50
      matchedFields.push('summary')
    }

    // Detailed summary match
    if (criterion.detailedSummary?.toLowerCase().includes(searchTerm)) {
      score += 30
      matchedFields.push('detailedSummary')
    }

    // Why it matters match
    if (criterion.whyItMatters?.toLowerCase().includes(searchTerm)) {
      score += 20
      matchedFields.push('whyItMatters')
    }

    // Guideline match
    if (criterion.guideline.toLowerCase().includes(searchTerm)) {
      score += 40
      matchedFields.push('guideline')
    }

    // Level match
    if (criterion.level.toLowerCase() === searchTerm) {
      score += 100
      matchedFields.push('level')
    }

    // Principle match
    if (criterion.principle.toLowerCase().includes(searchTerm)) {
      score += 30
      matchedFields.push('principle')
    }

    // Key terms match
    if (criterion.keyTerms) {
      for (const term of criterion.keyTerms) {
        if (term.term.toLowerCase().includes(searchTerm) || 
            term.definition.toLowerCase().includes(searchTerm)) {
          score += 15
          matchedFields.push('keyTerms')
          break
        }
      }
    }

    if (score > 0) {
      results.push({
        type: 'criterion',
        title: `${criterion.number} ${criterion.title}`,
        // Route is statically generated using criterion.number (dot format, e.g. "1.4.3").
        // Using criterion.id (dash format) would 404 since dynamicParams = false.
        url: `/criteria/${criterion.number}`,
        description: criterion.summary,
        score,
        matchedFields,
        criterion
      } as CriterionSearchResult)
    }
  }

  // Search static pages
  for (const page of staticPages) {
    const matchedFields: string[] = []
    let score = 0

    const titleLower = page.title.toLowerCase()
    const descLower = page.description.toLowerCase()

    if (titleLower === searchTerm) {
      score += 300
      matchedFields.push('title')
    } else if (titleLower.includes(searchTerm)) {
      score += 150
      matchedFields.push('title')
    }

    if (descLower.includes(searchTerm)) {
      score += 50
      matchedFields.push('description')
    }

    if (page.keywords) {
      for (const keyword of page.keywords) {
        if (keyword.toLowerCase().includes(searchTerm)) {
          score += 30
          matchedFields.push('keywords')
          break
        }
      }
    }

    if (score > 0) {
      results.push({
        type: 'page',
        title: page.title,
        url: page.url,
        description: page.description,
        score,
        matchedFields,
        category: page.category
      } as PageSearchResult)
    }
  }

  // Search lawsuits
  const allLawsuits = getAllLawsuits()
  for (const lawsuit of allLawsuits) {
    const matchedFields: string[] = []
    let score = 0

    const titleLower = lawsuit.title.toLowerCase()
    const summaryLower = lawsuit.summary.toLowerCase()
    const defendantLower = lawsuit.defendant.toLowerCase()
    const plaintiffLower = lawsuit.plaintiff.toLowerCase()

    if (titleLower.includes(searchTerm)) {
      score += 200
      matchedFields.push('title')
    }

    if (summaryLower.includes(searchTerm)) {
      score += 50
      matchedFields.push('summary')
    }

    if (defendantLower.includes(searchTerm)) {
      score += 100
      matchedFields.push('defendant')
    }

    if (plaintiffLower.includes(searchTerm)) {
      score += 100
      matchedFields.push('plaintiff')
    }

    if (lawsuit.issues) {
      for (const issue of lawsuit.issues) {
        if (issue.toLowerCase().includes(searchTerm)) {
          score += 30
          matchedFields.push('issues')
          break
        }
      }
    }

    if (score > 0) {
      results.push({
        type: 'lawsuit',
        title: lawsuit.title,
        url: `/lawsuits/${lawsuit.slug}`,
        description: lawsuit.summary,
        score,
        matchedFields,
        lawsuit
      } as LawsuitSearchResult)
    }
  }

  // Search examples
  for (const example of examples) {
    const matchedFields: string[] = []
    let score = 0

    const titleLower = example.title.toLowerCase()
    const descLower = example.description.toLowerCase()

    if (titleLower.includes(searchTerm)) {
      score += 150
      matchedFields.push('title')
    }

    if (descLower.includes(searchTerm)) {
      score += 50
      matchedFields.push('description')
    }

    if (example.keywords) {
      for (const keyword of example.keywords) {
        if (keyword.toLowerCase().includes(searchTerm)) {
          score += 30
          matchedFields.push('keywords')
          break
        }
      }
    }

    if (score > 0) {
      results.push({
        type: 'example',
        title: example.title,
        url: example.url,
        description: example.description,
        score,
        matchedFields,
        category: example.category
      } as ExampleSearchResult)
    }
  }

  // Search principles
  for (const principle of principles) {
    const matchedFields: string[] = []
    let score = 0

    const titleLower = principle.title.toLowerCase()
    const descLower = principle.description.toLowerCase()

    if (titleLower.includes(searchTerm) || principle.principleName.toLowerCase().includes(searchTerm)) {
      score += 200
      matchedFields.push('title')
    }

    if (descLower.includes(searchTerm)) {
      score += 50
      matchedFields.push('description')
    }

    if (principle.keywords) {
      for (const keyword of principle.keywords) {
        if (keyword.toLowerCase().includes(searchTerm)) {
          score += 30
          matchedFields.push('keywords')
          break
        }
      }
    }

    if (score > 0) {
      results.push({
        type: 'principle',
        title: principle.title,
        url: principle.url,
        description: principle.description,
        score,
        matchedFields,
        principleName: principle.principleName
      } as PrincipleSearchResult)
    }
  }

  // Search tools
  for (const tool of tools) {
    const matchedFields: string[] = []
    let score = 0

    const titleLower = tool.title.toLowerCase()
    const descLower = tool.description.toLowerCase()

    if (titleLower.includes(searchTerm) || tool.toolName.toLowerCase().includes(searchTerm)) {
      score += 150
      matchedFields.push('title')
    }

    if (descLower.includes(searchTerm)) {
      score += 50
      matchedFields.push('description')
    }

    if (tool.keywords) {
      for (const keyword of tool.keywords) {
        if (keyword.toLowerCase().includes(searchTerm)) {
          score += 30
          matchedFields.push('keywords')
          break
        }
      }
    }

    if (score > 0) {
      results.push({
        type: 'tool',
        title: tool.title,
        url: tool.url,
        description: tool.description,
        score,
        matchedFields,
        toolName: tool.toolName
      } as ToolSearchResult)
    }
  }

  // Sort by score (highest first) and limit results
  const sorted = results.sort((a, b) => b.score - a.score)

  // If exact-match scoring returned little to nothing, fall back to fuzzy search
  // so a misspelled term ("contras", "1.4 .3") still yields useful results.
  if (sorted.length < 3 && query.trim().length >= 2) {
    const fuzzy = fuzzySearch(query, limit - sorted.length)
    const seen = new Set(sorted.map((r) => r.url))
    for (const f of fuzzy) {
      if (!seen.has(f.url)) {
        sorted.push(f)
        seen.add(f.url)
      }
    }
  }

  return sorted.slice(0, limit)
}

// --- Fuzzy fallback ---

interface FuzzyDoc {
  type: SearchResultType
  title: string
  url: string
  description: string
  // For criteria
  number?: string
  level?: string
  principle?: string
  // For lawsuits
  defendant?: string
  plaintiff?: string
  category?: string
  principleName?: string
  toolName?: string
  // back-references for hydration
  criterion?: SuccessCriterion
  lawsuit?: Lawsuit
}

let fuseInstance: Fuse<FuzzyDoc> | null = null

function buildFuzzyIndex(): Fuse<FuzzyDoc> {
  if (fuseInstance) return fuseInstance

  const docs: FuzzyDoc[] = []

  for (const c of successCriteria) {
    docs.push({
      type: 'criterion',
      title: `${c.number} ${c.title}`,
      url: `/criteria/${c.number}`,
      description: c.summary,
      number: c.number,
      level: c.level,
      principle: c.principle,
      criterion: c,
    })
  }

  for (const p of staticPages) {
    docs.push({
      type: 'page',
      title: p.title,
      url: p.url,
      description: p.description,
      category: p.category,
    })
  }

  for (const l of getAllLawsuits()) {
    docs.push({
      type: 'lawsuit',
      title: l.title,
      url: `/lawsuits/${l.slug}`,
      description: l.summary,
      defendant: l.defendant,
      plaintiff: l.plaintiff,
      lawsuit: l,
    })
  }

  for (const e of examples) {
    docs.push({
      type: 'example',
      title: e.title,
      url: e.url,
      description: e.description,
      category: e.category,
    })
  }

  for (const p of principles) {
    docs.push({
      type: 'principle',
      title: p.title,
      url: p.url,
      description: p.description,
      principleName: p.principleName,
    })
  }

  for (const t of tools) {
    docs.push({
      type: 'tool',
      title: t.title,
      url: t.url,
      description: t.description,
      toolName: t.toolName,
    })
  }

  fuseInstance = new Fuse<FuzzyDoc>(docs, {
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'description', weight: 0.2 },
      { name: 'number', weight: 0.4 },
      { name: 'defendant', weight: 0.25 },
      { name: 'plaintiff', weight: 0.15 },
      { name: 'category', weight: 0.1 },
      { name: 'principleName', weight: 0.1 },
      { name: 'toolName', weight: 0.1 },
    ],
    threshold: 0.4, // 0 = exact, 1 = match anything
    ignoreLocation: true,
    includeScore: true,
    minMatchCharLength: 2,
  })
  return fuseInstance
}

function fuzzySearch(query: string, limit: number): SearchResult[] {
  const fuse = buildFuzzyIndex()
  const hits = fuse.search(query.trim(), { limit: Math.max(limit, 5) })
  return hits.map((hit) => {
    const d = hit.item
    // Fuse score: 0 = perfect, 1 = no match. Map to our descending integer score.
    const fuseScore = hit.score ?? 1
    const baseScore = Math.round((1 - fuseScore) * 100)
    const common = {
      title: d.title,
      url: d.url,
      description: d.description,
      score: baseScore,
      matchedFields: ['fuzzy'],
    }
    switch (d.type) {
      case 'criterion':
        return { ...common, type: 'criterion', criterion: d.criterion! } as CriterionSearchResult
      case 'lawsuit':
        return { ...common, type: 'lawsuit', lawsuit: d.lawsuit! } as LawsuitSearchResult
      case 'example':
        return { ...common, type: 'example', category: d.category } as ExampleSearchResult
      case 'principle':
        return { ...common, type: 'principle', principleName: d.principleName ?? d.title } as PrincipleSearchResult
      case 'tool':
        return { ...common, type: 'tool', toolName: d.toolName ?? d.title } as ToolSearchResult
      case 'page':
      default:
        return { ...common, type: 'page', category: d.category } as PageSearchResult
    }
  })
}

/**
 * Search WCAG criteria by query string (legacy function for backward compatibility)
 * @deprecated Use searchAll instead
 */
export function searchCriteria(query: string): Array<{
  criterion: SuccessCriterion
  score: number
  matchedFields: string[]
}> {
  const results = searchAll(query, 50)
  return results
    .filter((r): r is CriterionSearchResult => r.type === 'criterion')
    .map(r => ({
      criterion: r.criterion,
      score: r.score,
      matchedFields: r.matchedFields
    }))
}

/**
 * Get search suggestions based on query
 */
export function getSearchSuggestions(query: string, limit: number = 5): SuccessCriterion[] {
  if (!query || query.trim().length === 0) {
    return []
  }

  const results = searchCriteria(query)
  return results.slice(0, limit).map(r => r.criterion)
}
