"use client"

import Link from "next/link"
import { Search, ArrowRight, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect, useRef } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import * as Dialog from "@radix-ui/react-dialog"
import { LogoText } from "@/components/logo"
import { cn } from "@/lib/utils"
import { HamburgerIcon } from "@/components/hamburger-icon"
import { searchCriteria } from "@/lib/search"
import { SearchResults } from "@/components/search-results"

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchCriteria>>([])
  const [showResults, setShowResults] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle search query changes
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = searchCriteria(searchQuery)
      setSearchResults(results)
      setShowResults(true)
    } else {
      setSearchResults([])
      setShowResults(false)
    }
  }, [searchQuery])

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    if (showResults) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showResults])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen(true)
        setTimeout(() => searchInputRef.current?.focus(), 100)
      }
      // Escape to close search
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false)
        setSearchQuery("")
        setShowResults(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [searchOpen])

  // Main navigation links - only the most important ones
  const navLinks = [
    { href: "/overview", label: "Overview" },
    { href: "/principles", label: "Principles" },
    { href: "/checklist", label: "Checklist" },
    { href: "/tools", label: "Tools" },
  ]

  // Learn submenu
  const learnLinks = [
    { href: "/learn", label: "Learn" },
    { href: "/getting-started", label: "Getting Started" },
    { href: "/how-to-make-website-accessible", label: "How to Make Website Accessible" },
    { href: "/best-practices", label: "Best Practices" },
    { href: "/examples", label: "Examples" },
  ]

  // Compliance submenu
  const complianceLinks = [
    { href: "/compliance", label: "Compliance" },
    { href: "/compare", label: "Compare Tools" },
    { href: "/lawsuits", label: "Accessibility Lawsuits" },
    { href: "/wcag-2-2-vs-2-1", label: "WCAG 2.2 vs 2.1" },
  ]

  // Resources submenu
  const resourcesLinks = [
    { href: "/testing-guide", label: "Testing Guide" },
    { href: "/accessibility-audit-guide", label: "Audit Guide" },
    { href: "/mobile-accessibility", label: "Mobile Accessibility" },
    { href: "/industry-guides", label: "Industry Guides" },
    { href: "/faq", label: "FAQ" },
    { href: "/glossary", label: "Glossary" },
    { href: "/myths", label: "Accessibility Myths" },
    { href: "/accessibility-statement-template", label: "Statement Template" },
  ]

  const [learnOpen, setLearnOpen] = useState(false)
  const [complianceOpen, setComplianceOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  
  const [focusedLearnIndex, setFocusedLearnIndex] = useState(-1)
  const [focusedComplianceIndex, setFocusedComplianceIndex] = useState(-1)
  const [focusedResourceIndex, setFocusedResourceIndex] = useState(-1)
  
  const learnRef = useRef<HTMLDivElement>(null)
  const complianceRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  
  const learnButtonRef = useRef<HTMLButtonElement>(null)
  const complianceButtonRef = useRef<HTMLButtonElement>(null)
  const resourcesButtonRef = useRef<HTMLButtonElement>(null)
  
  const learnMenuRef = useRef<HTMLDivElement>(null)
  const complianceMenuRef = useRef<HTMLDivElement>(null)
  const resourcesMenuRef = useRef<HTMLDivElement>(null)
  
  const learnLinksRef = useRef<(HTMLAnchorElement | null)[]>([])
  const complianceLinksRef = useRef<(HTMLAnchorElement | null)[]>([])
  const resourceLinksRef = useRef<(HTMLAnchorElement | null)[]>([])

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (learnRef.current && !learnRef.current.contains(event.target as Node)) {
        setLearnOpen(false)
        setFocusedLearnIndex(-1)
      }
      if (complianceRef.current && !complianceRef.current.contains(event.target as Node)) {
        setComplianceOpen(false)
        setFocusedComplianceIndex(-1)
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false)
        setFocusedResourceIndex(-1)
      }
    }

    if (learnOpen || complianceOpen || resourcesOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [learnOpen, complianceOpen, resourcesOpen])

  // Close menus when focus moves outside (keyboard navigation)
  useEffect(() => {
    const handleFocusOut = (event: FocusEvent) => {
      // Use setTimeout to allow focus to settle on the new element
      setTimeout(() => {
        const activeElement = document.activeElement
        
        // Check Learn menu
        if (learnOpen && learnRef.current) {
          const isWithinLearn = learnRef.current.contains(activeElement)
          if (!isWithinLearn) {
            setLearnOpen(false)
            setFocusedLearnIndex(-1)
          }
        }
        
        // Check Compliance menu
        if (complianceOpen && complianceRef.current) {
          const isWithinCompliance = complianceRef.current.contains(activeElement)
          if (!isWithinCompliance) {
            setComplianceOpen(false)
            setFocusedComplianceIndex(-1)
          }
        }
        
        // Check Resources menu
        if (resourcesOpen && resourcesRef.current) {
          const isWithinResources = resourcesRef.current.contains(activeElement)
          if (!isWithinResources) {
            setResourcesOpen(false)
            setFocusedResourceIndex(-1)
          }
        }
      }, 0)
    }

    if (learnOpen || complianceOpen || resourcesOpen) {
      document.addEventListener("focusin", handleFocusOut)
      return () => document.removeEventListener("focusin", handleFocusOut)
    }
  }, [learnOpen, complianceOpen, resourcesOpen])

  useEffect(() => {
    if (learnOpen && focusedLearnIndex >= 0 && learnLinksRef.current[focusedLearnIndex]) {
      learnLinksRef.current[focusedLearnIndex]?.focus()
    }
    if (complianceOpen && focusedComplianceIndex >= 0 && complianceLinksRef.current[focusedComplianceIndex]) {
      complianceLinksRef.current[focusedComplianceIndex]?.focus()
    }
    if (resourcesOpen && focusedResourceIndex >= 0 && resourceLinksRef.current[focusedResourceIndex]) {
      resourceLinksRef.current[focusedResourceIndex]?.focus()
    }
  }, [learnOpen, complianceOpen, resourcesOpen, focusedLearnIndex, focusedComplianceIndex, focusedResourceIndex])

  const createMenuKeyHandler = (
    isOpen: boolean,
    setIsOpen: (open: boolean) => void,
    setFocusedIndex: React.Dispatch<React.SetStateAction<number>>,
    linksLength: number,
    buttonRef: React.RefObject<HTMLButtonElement | null>,
  ) => {
    return (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          setIsOpen(false)
          setFocusedIndex(-1)
          buttonRef.current?.focus()
          break
        case "ArrowDown":
          e.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
            setFocusedIndex(0)
          } else {
            setFocusedIndex((prev) => (prev < linksLength - 1 ? prev + 1 : 0))
          }
          break
        case "ArrowUp":
          e.preventDefault()
          if (isOpen) {
            setFocusedIndex((prev) => (prev > 0 ? prev - 1 : linksLength - 1))
          }
          break
        case "Home":
          e.preventDefault()
          if (isOpen) {
            setFocusedIndex(0)
          }
          break
        case "End":
          e.preventDefault()
          if (isOpen) {
            setFocusedIndex(linksLength - 1)
          }
          break
      }
    }
  }

  const handleLearnKeyDown = createMenuKeyHandler(
    learnOpen,
    setLearnOpen,
    setFocusedLearnIndex,
    learnLinks.length,
    learnButtonRef,
  )

  const handleComplianceKeyDown = createMenuKeyHandler(
    complianceOpen,
    setComplianceOpen,
    setFocusedComplianceIndex,
    complianceLinks.length,
    complianceButtonRef,
  )

  const handleResourcesKeyDown = createMenuKeyHandler(
    resourcesOpen,
    setResourcesOpen,
    setFocusedResourceIndex,
    resourcesLinks.length,
    resourcesButtonRef,
  )

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-2" : "bg-transparent py-3 md:py-4",
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group" aria-label="TheWCAG.com Home">
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <LogoText className="scale-90 sm:scale-100" />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 bg-secondary/5 p-1 rounded-full border border-border/40 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-background hover:shadow-sm hover:text-primary text-foreground/70"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Learn Dropdown */}
          <div className="relative" ref={learnRef}>
            <button
              ref={learnButtonRef}
              type="button"
              onClick={() => {
                setLearnOpen(!learnOpen)
                setComplianceOpen(false)
                setResourcesOpen(false)
              }}
              onKeyDown={handleLearnKeyDown}
              aria-expanded={learnOpen}
              aria-haspopup="true"
              aria-label="Learn menu"
              className="px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-background hover:shadow-sm hover:text-primary text-foreground/70 flex items-center gap-1"
            >
              Learn
              <ChevronDown
                className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  learnOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {learnOpen && (
              <div
                ref={learnMenuRef}
                role="menu"
                className="absolute top-full left-0 mt-2 min-w-[240px] bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
                onKeyDown={handleLearnKeyDown}
              >
                {learnLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    ref={(el) => {
                      learnLinksRef.current[index] = el
                    }}
                    role="menuitem"
                    tabIndex={focusedLearnIndex === index ? 0 : -1}
                    className="block px-4 py-2 text-sm text-foreground/90 hover:bg-primary/10 hover:text-foreground transition-colors focus:bg-primary/10 focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                    onClick={() => {
                      setLearnOpen(false)
                      setFocusedLearnIndex(-1)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setLearnOpen(false)
                        setFocusedLearnIndex(-1)
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Compliance Dropdown */}
          <div className="relative" ref={complianceRef}>
            <button
              ref={complianceButtonRef}
              type="button"
              onClick={() => {
                setComplianceOpen(!complianceOpen)
                setLearnOpen(false)
                setResourcesOpen(false)
              }}
              onKeyDown={handleComplianceKeyDown}
              aria-expanded={complianceOpen}
              aria-haspopup="true"
              aria-label="Compliance menu"
              className="px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-background hover:shadow-sm hover:text-primary text-foreground/70 flex items-center gap-1"
            >
              Compliance
              <ChevronDown
                className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  complianceOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {complianceOpen && (
              <div
                ref={complianceMenuRef}
                role="menu"
                className="absolute top-full left-0 mt-2 min-w-[240px] bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
                onKeyDown={handleComplianceKeyDown}
              >
                {complianceLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    ref={(el) => {
                      complianceLinksRef.current[index] = el
                    }}
                    role="menuitem"
                    tabIndex={focusedComplianceIndex === index ? 0 : -1}
                    className="block px-4 py-2 text-sm text-foreground/90 hover:bg-primary/10 hover:text-foreground transition-colors focus:bg-primary/10 focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                    onClick={() => {
                      setComplianceOpen(false)
                      setFocusedComplianceIndex(-1)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setComplianceOpen(false)
                        setFocusedComplianceIndex(-1)
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              ref={resourcesButtonRef}
              type="button"
              onClick={() => {
                setResourcesOpen(!resourcesOpen)
                setLearnOpen(false)
                setComplianceOpen(false)
              }}
              onKeyDown={handleResourcesKeyDown}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              aria-label="Resources menu"
              className="px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-background hover:shadow-sm hover:text-primary text-foreground/70 flex items-center gap-1"
            >
              Resources
              <ChevronDown
                className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  resourcesOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {resourcesOpen && (
              <div
                ref={resourcesMenuRef}
                role="menu"
                className="absolute top-full left-0 mt-2 min-w-[240px] bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
                onKeyDown={handleResourcesKeyDown}
              >
                {resourcesLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    ref={(el) => {
                      resourceLinksRef.current[index] = el
                    }}
                    role="menuitem"
                    tabIndex={focusedResourceIndex === index ? 0 : -1}
                    className="block px-4 py-2 text-sm text-foreground/90 hover:bg-primary/10 hover:text-foreground transition-colors focus:bg-primary/10 focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                    onClick={() => {
                      setResourcesOpen(false)
                      setFocusedResourceIndex(-1)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setResourcesOpen(false)
                        setFocusedResourceIndex(-1)
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Desktop Search - Inline expansion */}
          <div
            ref={searchContainerRef}
            className={cn(
              "hidden lg:block relative transition-all duration-300 ease-in-out",
              searchOpen ? "w-64 opacity-100 mr-2" : "w-0 opacity-0 overflow-hidden",
            )}
          >
            <div className="relative w-full" role="combobox" aria-expanded={showResults} aria-haspopup="listbox">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" aria-hidden="true" />
              <Input
                ref={searchInputRef}
                type="search"
                placeholder="Search criteria (e.g. 1.4.3)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (searchQuery.trim().length > 0) {
                    setShowResults(true)
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape" && showResults) {
                    setShowResults(false)
                    setSearchQuery("")
                  } else if (e.key === "ArrowDown" && showResults && searchResults.length > 0) {
                    e.preventDefault()
                    const firstResult = searchContainerRef.current?.querySelector('a[role="option"]') as HTMLElement
                    firstResult?.focus()
                  }
                }}
                className="h-9 w-full pl-9 pr-9 text-sm rounded-full bg-secondary/10 border-transparent focus-visible:bg-background focus-visible:border-primary/20 transition-all"
                autoFocus={searchOpen}
                aria-label="Search WCAG criteria"
                aria-expanded={showResults}
                aria-haspopup="listbox"
                aria-autocomplete="list"
                aria-controls={showResults ? "search-results-desktop" : undefined}
              />
              {searchQuery && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSearchQuery("")
                    setShowResults(false)
                    searchInputRef.current?.focus()
                  }}
                  aria-label="Clear search"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full hover:bg-secondary/20"
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
            {/* Search Results Dropdown */}
            {showResults && (
              <div 
                id="search-results-desktop"
                className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                role="presentation"
              >
                <SearchResults
                  results={searchResults}
                  query={searchQuery}
                  onSelect={() => {
                    setSearchOpen(false)
                    setShowResults(false)
                    setSearchQuery("")
                  }}
                />
              </div>
            )}
          </div>

          {/* Search Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setSearchOpen(!searchOpen)
              if (!searchOpen) {
                setTimeout(() => searchInputRef.current?.focus(), 100)
              } else {
                setSearchQuery("")
                setShowResults(false)
              }
            }}
            aria-label="Toggle search"
            aria-expanded={searchOpen}
            className="rounded-full hover:bg-secondary/10 h-9 w-9 sm:h-10 sm:w-10"
          >
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-foreground transition-colors" />
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="rounded-full h-9 w-9 sm:h-10 sm:w-10 hover:bg-secondary/10"
              >
                <HamburgerIcon isOpen={mobileMenuOpen} className="text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l-0">
              <div className="flex flex-col h-full bg-background">
                <div className="p-6 border-b">
                  <div className="mb-8">
                    <LogoText />
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" aria-hidden="true" />
                    <Input
                      type="search"
                      placeholder="Search WCAG criteria..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-10 h-12 text-base rounded-xl bg-secondary/10 border-transparent"
                      aria-label="Search WCAG criteria"
                    />
                    {searchQuery && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => setSearchQuery("")}
                        aria-label="Clear search"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full hover:bg-secondary/20"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  {/* Mobile Search Results */}
                  {searchQuery.trim().length > 0 && (
                    <div className="mt-4 max-h-[300px] overflow-y-auto">
                      <SearchResults
                        results={searchCriteria(searchQuery)}
                        query={searchQuery}
                        onSelect={() => {
                          setMobileMenuOpen(false)
                          setSearchQuery("")
                        }}
                      />
                    </div>
                  )}
                </div>
                <nav className="flex-1 overflow-y-auto p-6">
                  <ul className="flex flex-col gap-2">
                    {navLinks.map((link, i) => (
                      <li
                        key={link.href}
                        style={{ animationDelay: `${i * 50}ms` }}
                        className="animate-in slide-in-from-right-4 fade-in duration-500 fill-mode-backwards"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-4 text-xl font-medium rounded-xl hover:bg-secondary/10 transition-colors group"
                        >
                          {link.label}
                          <ArrowRight className="h-5 w-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                        </Link>
                      </li>
                    ))}
                    <li className="pt-4 mt-2 border-t border-border">
                      <div className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Learn
                      </div>
                    </li>
                    {learnLinks.map((link, i) => (
                      <li
                        key={link.href}
                        style={{ animationDelay: `${(navLinks.length + i) * 50}ms` }}
                        className="animate-in slide-in-from-right-4 fade-in duration-500 fill-mode-backwards"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-4 text-lg font-medium rounded-xl hover:bg-secondary/10 transition-colors group"
                        >
                          {link.label}
                          <ArrowRight className="h-5 w-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                        </Link>
                      </li>
                    ))}
                    <li className="pt-4 mt-2 border-t border-border">
                      <div className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Compliance
                      </div>
                    </li>
                    {complianceLinks.map((link, i) => (
                      <li
                        key={link.href}
                        style={{ animationDelay: `${(navLinks.length + learnLinks.length + i) * 50}ms` }}
                        className="animate-in slide-in-from-right-4 fade-in duration-500 fill-mode-backwards"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-4 text-lg font-medium rounded-xl hover:bg-secondary/10 transition-colors group"
                        >
                          {link.label}
                          <ArrowRight className="h-5 w-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                        </Link>
                      </li>
                    ))}
                    <li className="pt-4 mt-2 border-t border-border">
                      <div className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Resources
                      </div>
                    </li>
                    {resourcesLinks.map((link, i) => (
                      <li
                        key={link.href}
                        style={{ animationDelay: `${(navLinks.length + learnLinks.length + complianceLinks.length + i) * 50}ms` }}
                        className="animate-in slide-in-from-right-4 fade-in duration-500 fill-mode-backwards"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-4 text-lg font-medium rounded-xl hover:bg-secondary/10 transition-colors group"
                        >
                          {link.label}
                          <ArrowRight className="h-5 w-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-6 border-t bg-secondary/5">
                  <p className="text-sm text-muted-foreground text-center">Making the web accessible for everyone.</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Dialog */}
      <Dialog.Root open={searchOpen} onOpenChange={(open) => {
        setSearchOpen(open)
        if (!open) {
          setSearchQuery("")
          setShowResults(false)
        }
      }}>
        <Dialog.Portal>
          <Dialog.Overlay className="lg:hidden fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="lg:hidden fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-xl mx-4 max-h-[80vh] overflow-hidden flex flex-col">
            <Dialog.Title className="sr-only">Search WCAG Criteria</Dialog.Title>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" aria-hidden="true" />
              <Input
                type="search"
                placeholder="Search WCAG criteria..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 w-full pl-12 pr-12 text-base rounded-xl bg-secondary/10 border-border focus-visible:bg-background focus-visible:border-primary/20"
                autoFocus
                aria-label="Search WCAG criteria"
                aria-expanded={showResults}
                aria-haspopup="listbox"
                aria-autocomplete="list"
              />
              <Dialog.Close asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full hover:bg-secondary/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </Dialog.Close>
            </div>
            {/* Mobile Search Results */}
            {searchQuery.trim().length > 0 && (
              <div className="mt-4 flex-1 overflow-y-auto min-h-0">
                <SearchResults
                  results={searchCriteria(searchQuery)}
                  query={searchQuery}
                  onSelect={() => {
                    setSearchOpen(false)
                    setSearchQuery("")
                    setShowResults(false)
                  }}
                />
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  )
}
