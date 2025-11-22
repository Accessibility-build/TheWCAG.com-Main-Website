"use client"

import Link from "next/link"
import { Search, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect, useRef } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LogoText } from "@/components/logo"
import { cn } from "@/lib/utils"
import { HamburgerIcon } from "@/components/hamburger-icon"

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/overview", label: "Overview" },
    { href: "/principles", label: "Principles" },
    { href: "/checklist", label: "Checklist" },
    { href: "/tools", label: "Tools" },
    { href: "/examples", label: "Examples" },
    { href: "/learn", label: "Learn" },
    { href: "/compliance", label: "Compliance" },
    { href: "/compare", label: "Compare" },
  ]

  const resourcesLinks = [
    { href: "/getting-started", label: "Getting Started" },
    { href: "/how-to-make-website-accessible", label: "How to Make Website Accessible" },
    { href: "/best-practices", label: "Best Practices" },
    { href: "/accessibility-audit-guide", label: "Audit Guide" },
    { href: "/mobile-accessibility", label: "Mobile Accessibility" },
    { href: "/faq", label: "FAQ" },
    { href: "/glossary", label: "Glossary" },
    { href: "/wcag-2-2-vs-2-1", label: "WCAG 2.2 vs 2.1" },
    { href: "/myths", label: "Accessibility Myths" },
    { href: "/testing-guide", label: "Testing Guide" },
    { href: "/industry-guides", label: "Industry Guides" },
    { href: "/accessibility-statement-template", label: "Statement Template" },
  ]

  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [focusedResourceIndex, setFocusedResourceIndex] = useState(-1)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const resourcesButtonRef = useRef<HTMLButtonElement>(null)
  const resourcesMenuRef = useRef<HTMLDivElement>(null)
  const resourceLinksRef = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false)
        setFocusedResourceIndex(-1)
      }
    }

    if (resourcesOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [resourcesOpen])

  useEffect(() => {
    if (resourcesOpen && focusedResourceIndex >= 0 && resourceLinksRef.current[focusedResourceIndex]) {
      resourceLinksRef.current[focusedResourceIndex]?.focus()
    }
  }, [resourcesOpen, focusedResourceIndex])

  const handleResourcesKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        setResourcesOpen(false)
        setFocusedResourceIndex(-1)
        resourcesButtonRef.current?.focus()
        break
      case "ArrowDown":
        e.preventDefault()
        if (!resourcesOpen) {
          setResourcesOpen(true)
          setFocusedResourceIndex(0)
        } else {
          setFocusedResourceIndex((prev) =>
            prev < resourcesLinks.length - 1 ? prev + 1 : 0
          )
        }
        break
      case "ArrowUp":
        e.preventDefault()
        if (resourcesOpen) {
          setFocusedResourceIndex((prev) =>
            prev > 0 ? prev - 1 : resourcesLinks.length - 1
          )
        }
        break
      case "Home":
        e.preventDefault()
        if (resourcesOpen) {
          setFocusedResourceIndex(0)
        }
        break
      case "End":
        e.preventDefault()
        if (resourcesOpen) {
          setFocusedResourceIndex(resourcesLinks.length - 1)
        }
        break
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-2" : "bg-transparent py-3 md:py-4",
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
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
          <div className="relative" ref={resourcesRef}>
            <button
              ref={resourcesButtonRef}
              type="button"
              onClick={() => setResourcesOpen(!resourcesOpen)}
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
                className="absolute top-full left-0 mt-2 min-w-[220px] bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
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
          <div
            className={cn(
              "flex items-center overflow-hidden transition-all duration-300 ease-in-out",
              searchOpen ? "w-48 sm:w-64 opacity-100 mr-2" : "w-0 opacity-0",
            )}
          >
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="h-9 w-full pl-9 text-sm rounded-full bg-secondary/10 border-transparent focus-visible:bg-background focus-visible:border-primary/20"
                autoFocus={searchOpen}
                onBlur={() => !searchOpen && setSearchOpen(false)}
              />
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
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
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search WCAG criteria..."
                      className="pl-10 h-12 text-base rounded-xl bg-secondary/10 border-transparent"
                    />
                  </div>
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
                        Resources
                      </div>
                    </li>
                    {resourcesLinks.map((link, i) => (
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
    </header>
  )
}
