"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { SearchDialog } from "@/components/search-dialog"

export function HeroSearch() {
  const [searchDialogOpen, setSearchDialogOpen] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleInputFocus = () => {
    setSearchDialogOpen(true)
  }

  const handleBadgeClick = (term: string) => {
    setSearchDialogOpen(true)
  }

  return (
    <div className="w-full max-w-full">
      <div className="flex items-center justify-between mb-3">
        <Label htmlFor="hero-search" className="text-sm sm:text-base font-semibold flex items-center gap-2">
          <Search className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
          <span className="whitespace-nowrap">Quick Find</span>
        </Label>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground z-10 pointer-events-none" aria-hidden="true" />
        <Input
          id="hero-search"
          ref={inputRef}
          type="search"
          placeholder="Search criteria, guides, examples..."
          onFocus={handleInputFocus}
          readOnly
          className="w-full pl-10 sm:pl-12 pr-4 h-11 sm:h-12 text-sm sm:text-base bg-background border-input shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-primary/20 cursor-pointer"
          aria-label="Search TheWCAG site - Click to open search dialog"
        />
      </div>
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
      <SearchDialog
        open={searchDialogOpen}
        onOpenChange={setSearchDialogOpen}
      />
    </div>
  )
}
