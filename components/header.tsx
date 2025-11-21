"use client"

import Link from "next/link"
import { Search, Sun, Moon, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LogoText } from "@/components/logo"
import { cn } from "@/lib/utils"
import { HamburgerIcon } from "@/components/hamburger-icon"

export function Header() {
  const { theme, setTheme } = useTheme()
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
  ]

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
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-foreground hover:text-primary transition-colors" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="rounded-full hover:bg-secondary/10 h-9 w-9 sm:h-10 sm:w-10"
          >
            <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 text-foreground rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
                          className="flex items-center justify-between p-4 text-xl font-medium rounded-xl hover:bg-secondary/10 transition-colors group"
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
