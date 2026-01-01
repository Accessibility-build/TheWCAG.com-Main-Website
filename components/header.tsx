"use client"

import Link from "next/link"
import { Search, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LogoText } from "@/components/logo"
import { cn } from "@/lib/utils"
import { HamburgerIcon } from "@/components/hamburger-icon"
import { SearchDialog } from "@/components/search-dialog"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchDialogOpen, setSearchDialogOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchDialogOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Main navigation links - only the most important ones
  const navLinks = [
    { href: "/overview", label: "Overview" },
    { href: "/principles", label: "Principles" },
    { href: "/checklist", label: "Checklist" },
    { href: "/tools", label: "Tools" },
    { href: "/quiz", label: "Quiz" },
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
    { href: "/ada-compliance-risks", label: "ADA Compliance Risks" },
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
          {/* Search Button with Dialog */}
          <SearchDialog
            open={searchDialogOpen}
            onOpenChange={setSearchDialogOpen}
            trigger={
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchDialogOpen(true)}
                aria-label="Open search dialog"
                className="rounded-full hover:bg-secondary/10 h-9 px-3 sm:h-10 sm:px-4 gap-2"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                <span className="hidden sm:inline text-sm font-medium">Search</span>
              </Button>
            }
          />

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
                  <Button
                    variant="outline"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setSearchDialogOpen(true)
                    }}
                    className="w-full h-12 justify-start gap-3 text-base"
                  >
                    <Search className="h-5 w-5" />
                    <span>Search</span>
                  </Button>
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

      {/* Search Dialog - Works on all screen sizes */}
      <SearchDialog
        open={searchDialogOpen}
        onOpenChange={setSearchDialogOpen}
      />
    </header>
  )
}
