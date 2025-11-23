"use client"

import * as React from "react"
import Link from "next/link"
import { SearchResult } from "@/lib/search"
import { LevelBadge } from "@/components/level-badge"
import { Search, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchResultsProps {
  results: SearchResult[]
  query: string
  onSelect?: () => void
  className?: string
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
      const links = resultsRef.current.querySelectorAll('a')
      if (links[focusedIndex]) {
        links[focusedIndex].focus()
      }
    }
  }, [focusedIndex])

  if (results.length === 0) {
    return (
      <div 
        className={cn("p-6 sm:p-8 text-center", className)}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <Search className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground mx-auto mb-3" aria-hidden="true" />
        <p className="text-sm sm:text-base text-foreground font-medium mb-1">
          No results found
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground mb-2">
          No results found for &quot;{query}&quot;
        </p>
        <p className="text-xs text-muted-foreground">
          Try searching by criterion number (e.g., 1.4.3) or keyword
        </p>
      </div>
    )
  }

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
      <div className="max-h-[400px] overflow-y-auto">
        <ul className="p-2 space-y-1" role="group">
          {results.map((result, index) => {
            const criterion = result.criterion
            const href = `/criteria/${criterion.id}`
            const isFocused = focusedIndex === index
            
            return (
              <li key={criterion.id} role="none">
                <Link
                  href={href}
                  onClick={onSelect}
                  role="option"
                  aria-selected={isFocused}
                  id={`${resultsId}-option-${index}`}
                  className={cn(
                    "block p-3 sm:p-4 rounded-lg border transition-all duration-200",
                    "hover:border-primary/50 hover:bg-accent/50 hover:shadow-sm",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                    "active:bg-accent active:scale-[0.98]",
                    isFocused 
                      ? "bg-accent border-primary/30 shadow-sm" 
                      : "border-border/50 bg-background"
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
                  aria-label={`${criterion.number} ${criterion.title}, ${criterion.level} level, ${criterion.principle} principle`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <LevelBadge level={criterion.level} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                        <span className="text-sm sm:text-base font-semibold text-foreground">
                          {criterion.number}
                        </span>
                        <span className="text-sm sm:text-base font-medium text-foreground break-words">
                          {criterion.title}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-2 leading-relaxed">
                        {criterion.summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                        <span className="capitalize">
                          {criterion.principle}
                        </span>
                        <span aria-hidden="true">•</span>
                        <span>
                          {criterion.guidelineNumber} {criterion.guideline}
                        </span>
                      </div>
                    </div>
                    <ArrowRight 
                      className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1" 
                      aria-hidden="true" 
                    />
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

