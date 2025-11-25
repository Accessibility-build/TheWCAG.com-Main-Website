"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { searchAll, type SearchResult } from "@/lib/search"
import { SearchResults } from "@/components/search-results"
import * as Dialog from "@radix-ui/react-dialog"
import { useRouter } from "next/navigation"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  trigger?: React.ReactNode
}

export function SearchDialog({ open, onOpenChange, trigger }: SearchDialogProps) {
  const [query, setQuery] = React.useState("")
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([])
  const inputRef = React.useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Handle search query changes
  React.useEffect(() => {
    if (query.trim().length > 0) {
      const results = searchAll(query, 20)
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [query])

  // Focus input when dialog opens
  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    } else {
      setQuery("")
      setSearchResults([])
    }
  }, [open])

  const handleClear = React.useCallback(() => {
    setQuery("")
    inputRef.current?.focus()
  }, [])

  const handleResultSelect = React.useCallback(() => {
    onOpenChange(false)
    setQuery("")
    setSearchResults([])
  }, [onOpenChange])

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      onOpenChange(false)
    } else if (e.key === "Enter" && searchResults.length > 0) {
      e.preventDefault()
      router.push(searchResults[0].url)
      handleResultSelect()
    }
  }, [searchResults, router, onOpenChange, handleResultSelect])

  // Memoize trigger to prevent recreation
  const triggerElement = React.useMemo(() => {
    if (!trigger) return null
    return <Dialog.Trigger asChild key="search-dialog-trigger">{trigger}</Dialog.Trigger>
  }, [trigger])

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {triggerElement}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-h-[85vh] flex flex-col">
          {/* Dialog Header with Title and Close Button */}
          <div className="flex items-start justify-between gap-4 px-4 sm:px-6 pt-4 sm:pt-6 pb-2 border-b border-border">
            <div className="flex-1 min-w-0">
              <Dialog.Title className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                Search TheWCAG
              </Dialog.Title>
              <Dialog.Description id="search-dialog-description" className="text-sm sm:text-base text-muted-foreground">
                Search for WCAG criteria, guides, examples, lawsuits, and more
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg hover:bg-secondary/20 shrink-0 mt-0.5"
                aria-label="Close search dialog"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Dialog.Close>
          </div>
          
          {/* Search Input */}
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search anything (criteria, guides, examples, lawsuits)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-10 pr-10 h-12 sm:h-14 text-base sm:text-lg bg-background border-input focus-visible:ring-2 focus-visible:ring-primary/20"
                aria-label="Search TheWCAG site"
                aria-describedby="search-dialog-description"
              />
              {query && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleClear}
                  aria-label="Clear search"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:bg-secondary/20"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              )}
            </div>
          </div>

          {/* Search Results */}
          <div className="flex-1 overflow-hidden min-h-0">
            {query.trim().length > 0 ? (
              <div className="h-full overflow-y-auto">
                <SearchResults
                  results={searchResults}
                  query={query}
                  onSelect={handleResultSelect}
                />
              </div>
            ) : (
              <div className="p-8 sm:p-12 text-center">
                <Search className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
                <p className="text-base sm:text-lg font-medium text-foreground mb-2">
                  Start typing to search
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Search for WCAG criteria, guides, examples, lawsuits, and more
                </p>
                <div className="flex flex-wrap gap-2 justify-center text-xs sm:text-sm text-muted-foreground">
                  <span className="px-3 py-1.5 bg-muted rounded-md">Try: "1.4.3"</span>
                  <span className="px-3 py-1.5 bg-muted rounded-md">Try: "contrast"</span>
                  <span className="px-3 py-1.5 bg-muted rounded-md">Try: "forms"</span>
                  <span className="px-3 py-1.5 bg-muted rounded-md">Try: "lawsuits"</span>
                </div>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

