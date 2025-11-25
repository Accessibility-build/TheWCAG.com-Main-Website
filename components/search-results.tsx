"use client"

import * as React from "react"
import Link from "next/link"
import { SearchResult, type SearchResultType, type CriterionSearchResult, type LawsuitSearchResult, type ExampleSearchResult, type PageSearchResult } from "@/lib/search"
import { LevelBadge } from "@/components/level-badge"
import { Search, ArrowRight, FileText, Scale, Code2, Layers, Wrench, BookOpen, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface SearchResultsProps {
  results: SearchResult[]
  query: string
  onSelect?: () => void
  className?: string
}

// Icon mapping for different result types
const typeIcons: Record<SearchResultType, React.ComponentType<{ className?: string }>> = {
  criterion: FileText,
  page: BookOpen,
  lawsuit: Scale,
  example: Code2,
  principle: Layers,
  tool: Wrench,
}

// Type labels for display
const typeLabels: Record<SearchResultType, string> = {
  criterion: 'WCAG Criterion',
  page: 'Page',
  lawsuit: 'Lawsuit',
  example: 'Example',
  principle: 'Principle',
  tool: 'Tool',
}

export function SearchResults({ results, query, onSelect, className }: SearchResultsProps) {
  const resultsRef = React.useRef<HTMLDivElement>(null)
  const [focusedIndex, setFocusedIndex] = React.useState(-1)
  const resultsId = React.useId()

  React.useEffect(() => {
    setFocusedIndex(-1)
  }, [query])

  React.useEffect(() => {
    if (focusedIndex >= 0 && resultsRef.current) {
      const links = resultsRef.current.querySelectorAll('a[role="option"]')
      if (links[focusedIndex]) {
        (links[focusedIndex] as HTMLElement).focus()
      }
    }
  }, [focusedIndex])

  if (results.length === 0) {
    return (
      <div 
        className={cn("p-4 sm:p-5 text-center", className)}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <Search className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground mx-auto mb-2.5" aria-hidden="true" />
        <p className="text-sm sm:text-sm text-foreground font-medium mb-1">
          No results found
        </p>
        <p className="text-xs sm:text-xs text-muted-foreground mb-1.5">
          No results found for &quot;{query}&quot;
        </p>
        <p className="text-xs text-muted-foreground">
          Try searching by criterion number (e.g., 1.4.3), keyword, or topic
        </p>
      </div>
    )
  }

  // Group results by type for better organization
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.type]) {
      acc[result.type] = []
    }
    acc[result.type].push(result)
    return acc
  }, {} as Record<SearchResultType, SearchResult[]>)

  const typeOrder: SearchResultType[] = ['criterion', 'page', 'principle', 'example', 'lawsuit', 'tool']

  return (
    <div
      ref={resultsRef}
      className={cn("w-full", className)}
      role="listbox"
      id={resultsId}
      aria-label={`${results.length} search ${results.length === 1 ? 'result' : 'results'}`}
      aria-live="polite"
      aria-atomic="false"
    >
      {/* Results Count - Screen reader only but visible for context */}
      <div className="sr-only" role="status" aria-live="polite">
        {results.length} {results.length === 1 ? 'result' : 'results'} found for &quot;{query}&quot;
      </div>
      <div className="px-3 py-2 border-b border-border bg-muted/30">
        <p className="text-xs font-medium text-muted-foreground">
          {results.length} {results.length === 1 ? 'result' : 'results'} found
        </p>
      </div>
      <div 
        className="max-h-72 sm:max-h-80 overflow-y-auto overscroll-contain"
        style={{ 
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent'
        }}
      >
        <div className="p-1.5 sm:p-2 space-y-1.5 sm:space-y-2" role="group">
          {typeOrder
            .filter((type) => {
              const typeResults = groupedResults[type]
              return typeResults && typeResults.length > 0
            })
            .map((type) => {
              const typeResults = groupedResults[type]
              if (!typeResults || typeResults.length === 0) return null

              const TypeIcon = typeIcons[type]
              const typeLabel = typeLabels[type]

              return (
                <div key={type} className="space-y-1">
                {results.length > 5 && (
                  <div className="px-1.5 sm:px-2 py-1 text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-1.5">
                    <TypeIcon className="h-3 w-3" aria-hidden="true" />
                    <span>{typeLabel}s</span>
                    <span className="text-xs font-normal">({typeResults.length})</span>
                  </div>
                )}
                {typeResults.map((result, index) => {
                  const globalIndex = results.indexOf(result)
                  const isFocused = focusedIndex === globalIndex
                  
                  return (
                    <div key={`${result.type}-${result.url}`} role="none">
                      <Link
                        href={result.url}
                        onClick={onSelect}
                        role="option"
                        aria-selected={isFocused}
                        id={`${resultsId}-option-${globalIndex}`}
                        className={cn(
                          "block px-2.5 py-2 sm:px-3 sm:py-2.5 rounded-md border transition-colors duration-150 text-xs sm:text-sm",
                          "hover:border-primary hover:bg-muted",
                          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                          "active:bg-muted active:scale-[0.98]",
                          isFocused 
                            ? "bg-muted border-primary" 
                            : "border-border/40 bg-background"
                        )}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowDown") {
                            e.preventDefault()
                            setFocusedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0))
                          } else if (e.key === "ArrowUp") {
                            e.preventDefault()
                            setFocusedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1))
                          } else if (e.key === "Escape") {
                            e.preventDefault()
                            onSelect?.()
                          } else if (e.key === "Home") {
                            e.preventDefault()
                            setFocusedIndex(0)
                          } else if (e.key === "End") {
                            e.preventDefault()
                            setFocusedIndex(results.length - 1)
                          }
                        }}
                        aria-label={getAriaLabel(result)}
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          {/* Icon and Type Badge */}
                              <div className="flex-shrink-0 flex flex-col items-center gap-1.5 mt-0.5">
                            <div className={cn(
                              "p-1.5 rounded-md",
                              result.type === 'criterion' ? "bg-primary/10" :
                              result.type === 'lawsuit' ? "bg-red-500/10" :
                              result.type === 'example' ? "bg-blue-500/10" :
                              result.type === 'principle' ? "bg-purple-500/10" :
                              result.type === 'tool' ? "bg-green-500/10" :
                              "bg-muted"
                            )}>
                              <TypeIcon className={cn(
                                "h-3.5 w-3.5",
                                result.type === 'criterion' ? "text-primary" :
                                result.type === 'lawsuit' ? "text-red-500" :
                                result.type === 'example' ? "text-blue-500" :
                                result.type === 'principle' ? "text-purple-500" :
                                result.type === 'tool' ? "text-green-500" :
                                "text-muted-foreground"
                              )} aria-hidden="true" />
                            </div>
                            {result.type === 'criterion' && 'criterion' in result && (
                              <LevelBadge level={result.criterion.level} />
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-start gap-0.5 sm:gap-1.5 mb-1.5">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="text-xs sm:text-sm font-semibold text-foreground break-words">
                                  {result.title}
                                </span>
                                <Badge 
                                  variant="outline" 
                                  className="text-[10px] sm:text-xs shrink-0"
                                >
                                  {typeLabel}
                                </Badge>
                                {'category' in result && result.category && (
                                  <Badge 
                                    variant="secondary" 
                                    className="text-[10px] sm:text-xs shrink-0"
                                  >
                                    {result.category}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-[11px] sm:text-xs text-muted-foreground line-clamp-2 mb-1.5 leading-relaxed">
                              {result.description}
                            </p>
                            {result.type === 'criterion' && 'criterion' in result && (
                              <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                                <span className="capitalize">
                                  {result.criterion.principle}
                                </span>
                                <span aria-hidden="true">•</span>
                                <span>
                                  {result.criterion.guidelineNumber} {result.criterion.guideline}
                                </span>
                              </div>
                            )}
                            {result.type === 'lawsuit' && 'lawsuit' in result && (
                              <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground mt-0.5">
                                <span>{result.lawsuit.defendant}</span>
                                <span aria-hidden="true">•</span>
                                <span>{result.lawsuit.status}</span>
                                {result.lawsuit.dateFiled && (
                                  <>
                                    <span aria-hidden="true">•</span>
                                    <span>{new Date(result.lawsuit.dateFiled).getFullYear()}</span>
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                          <ArrowRight 
                            className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1" 
                            aria-hidden="true" 
                          />
                        </div>
                      </Link>
                    </div>
                  )
                })}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

function getAriaLabel(result: SearchResult): string {
  const baseTitle = result.title
  
  switch (result.type) {
    case 'criterion': {
      const criterionResult = result as CriterionSearchResult
      if (criterionResult.criterion) {
        return `${baseTitle}, ${criterionResult.criterion.level} level, ${criterionResult.criterion.principle} principle`
      }
      return baseTitle
    }
    case 'lawsuit': {
      const lawsuitResult = result as LawsuitSearchResult
      if (lawsuitResult.lawsuit) {
        return `${baseTitle}, ${lawsuitResult.lawsuit.status} lawsuit, ${lawsuitResult.lawsuit.defendant}`
      }
      return baseTitle
    }
    case 'example': {
      const exampleResult = result as ExampleSearchResult
      return `${baseTitle} example${exampleResult.category ? `, ${exampleResult.category} category` : ''}`
    }
    case 'principle':
      return `${baseTitle} principle`
    case 'tool':
      return `${baseTitle} tool`
    case 'page': {
      const pageResult = result as PageSearchResult
      return `${baseTitle}${pageResult.category ? `, ${pageResult.category}` : ''}`
    }
    default:
      return baseTitle
  }
}
