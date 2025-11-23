import { successCriteria } from './wcag-data'
import type { SuccessCriterion } from './wcag-data'

export interface SearchResult {
  criterion: SuccessCriterion
  score: number
  matchedFields: string[]
}

/**
 * Search WCAG criteria by query string
 * Searches through number, title, summary, and other text fields
 */
export function searchCriteria(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return []
  }

  const searchTerm = query.trim().toLowerCase()
  const results: SearchResult[] = []

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
      // Check for word matches in title
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
      results.push({ criterion, score, matchedFields })
    }
  }

  // Sort by score (highest first)
  return results.sort((a, b) => b.score - a.score)
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

