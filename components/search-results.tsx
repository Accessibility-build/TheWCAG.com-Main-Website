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
      <div className={cn("p-6 text-center", className)}>
        <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">
          No results found for &quot;{query}&quot;
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Try searching by criterion number (e.g., 1.4.3) or keyword
        </p>
      </div>
    )
  }

  return (
    <div
      ref={resultsRef}
      className={cn("max-h-[400px] overflow-y-auto", className)}
      role="listbox"
      aria-label="Search results"
    >
      <div className="p-2">
        <p className="text-xs text-muted-foreground px-2 py-1 mb-1">
          {results.length} {results.length === 1 ? 'result' : 'results'} found
        </p>
        {results.map((result, index) => {
          const criterion = result.criterion
          const href = `/criteria/${criterion.id}`
          
          return (
            <Link
              key={criterion.id}
              href={href}
              onClick={onSelect}
              role="option"
              aria-selected={focusedIndex === index}
              className={cn(
                "block p-3 rounded-lg border border-transparent hover:border-border hover:bg-accent/50 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                focusedIndex === index && "bg-accent border-border"
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
                }
              }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <LevelBadge level={criterion.level} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-foreground">
                      {criterion.number}
                    </span>
                    <span className="text-sm font-medium text-foreground truncate">
                      {criterion.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {criterion.summary}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-xs text-muted-foreground">
                      {criterion.principle.charAt(0).toUpperCase() + criterion.principle.slice(1)}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {criterion.guidelineNumber} {criterion.guideline}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" aria-hidden="true" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

