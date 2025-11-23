"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { searchCriteria } from "@/lib/search"
import { SearchResults } from "@/components/search-results"
import { useRouter } from "next/navigation"

export function HeroSearch() {
  const [query, setQuery] = React.useState("")
  const [searchResults, setSearchResults] = React.useState<ReturnType<typeof searchCriteria>>([])
  const [showResults, setShowResults] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Handle search query changes
  React.useEffect(() => {
    if (query.trim().length > 0) {
      const results = searchCriteria(query)
      setSearchResults(results)
      setShowResults(true)
    } else {
      setSearchResults([])
      setShowResults(false)
    }
  }, [query])

  // Close search results when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    if (showResults) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showResults])

  const handleClear = () => {
    setQuery("")
    setShowResults(false)
    inputRef.current?.focus()
  }

  const handleBadgeClick = (term: string) => {
    setQuery(term)
    inputRef.current?.focus()
  }

  return (
    <div ref={containerRef} className="w-full max-w-full relative">
      <div className="flex items-center justify-between mb-3">
        <Label htmlFor="hero-search" className="text-sm sm:text-base font-semibold flex items-center gap-2">
          <Search className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
          <span className="whitespace-nowrap">Quick Find</span>
        </Label>
      </div>
      <div className="relative group w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors z-10" aria-hidden="true" />
        <Input
          id="hero-search"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (query.trim().length > 0) {
              setShowResults(true)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setShowResults(false)
              setQuery("")
            } else if (e.key === "Enter" && searchResults.length > 0) {
              e.preventDefault()
              const firstResult = searchResults[0]
              router.push(`/criteria/${firstResult.criterion.id}`)
              setShowResults(false)
              setQuery("")
            }
          }}
          placeholder="Search criteria (e.g. 1.4.3)..."
          className="w-full pl-10 pr-10 sm:pr-12 h-11 sm:h-12 text-sm sm:text-base bg-background border-input shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-primary/20"
          aria-label="Search WCAG criteria"
          aria-expanded={showResults}
          aria-haspopup="listbox"
          aria-autocomplete="list"
        />
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-9 sm:w-9 text-muted-foreground hover:text-foreground shrink-0"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 max-h-[400px] overflow-hidden">
          <SearchResults
            results={searchResults}
            query={query}
            onSelect={() => {
              setShowResults(false)
              setQuery("")
            }}
          />
        </div>
      )}
      <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
        <Badge 
          variant="outline" 
          className="cursor-pointer hover:bg-muted hover:border-primary/50 transition-colors text-xs sm:text-sm"
          onClick={() => handleBadgeClick("contrast")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              handleBadgeClick("contrast")
            }
          }}
        >
          Contrast
        </Badge>
        <Badge 
          variant="outline" 
          className="cursor-pointer hover:bg-muted hover:border-primary/50 transition-colors text-xs sm:text-sm"
          onClick={() => handleBadgeClick("focus")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              handleBadgeClick("focus")
            }
          }}
        >
          Focus
        </Badge>
        <Badge 
          variant="outline" 
          className="cursor-pointer hover:bg-muted hover:border-primary/50 transition-colors text-xs sm:text-sm"
          onClick={() => handleBadgeClick("forms")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              handleBadgeClick("forms")
            }
          }}
        >
          Forms
        </Badge>
      </div>
    </div>
  )
}
