"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export function HeroSearch() {
  const [query, setQuery] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleClear = () => {
    setQuery("")
    inputRef.current?.focus()
  }

  return (
    <div className="w-full max-w-full">
      <div className="flex items-center justify-between mb-3">
        <Label htmlFor="hero-search" className="text-sm sm:text-base font-semibold flex items-center gap-2">
          <Search className="w-4 h-4 text-primary shrink-0" />
          <span className="whitespace-nowrap">Quick Find</span>
        </Label>
      </div>
      <div className="relative group w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors z-10" />
        <Input
          id="hero-search"
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search criteria (e.g. 1.4.3)..."
          className="w-full pl-10 pr-10 sm:pr-12 h-11 sm:h-12 text-sm sm:text-base bg-background border-input shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-primary/20"
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
      <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
        <Badge variant="outline" className="cursor-pointer hover:bg-muted hover:border-primary/50 transition-colors text-xs sm:text-sm">
          Contrast
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-muted hover:border-primary/50 transition-colors text-xs sm:text-sm">
          Focus
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-muted hover:border-primary/50 transition-colors text-xs sm:text-sm">
          Forms
        </Badge>
      </div>
    </div>
  )
}
