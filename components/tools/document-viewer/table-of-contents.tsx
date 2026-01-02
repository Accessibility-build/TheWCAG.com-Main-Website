"use client"

import { useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { Heading } from "@/lib/tools/document-viewer"
import { List } from "lucide-react"

interface TableOfContentsProps {
  headings: Heading[]
  className?: string
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  // Set up intersection observer for scroll spy
  useEffect(() => {
    if (headings.length === 0) return

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the first heading that is visible
      const visibleEntries = entries.filter(entry => entry.isIntersecting)
      if (visibleEntries.length > 0) {
        // Sort by their position in the document and take the first one
        visibleEntries.sort((a, b) => {
          const aRect = a.boundingClientRect
          const bRect = b.boundingClientRect
          return aRect.top - bRect.top
        })
        setActiveId(visibleEntries[0].target.id)
      }
    }

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    })

    // Observe all heading elements
    headings.forEach(heading => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      })
    }
  }, [])

  if (headings.length === 0) {
    return (
      <div className={cn("p-4 text-center text-muted-foreground", className)}>
        <List className="h-8 w-8 mx-auto mb-2 opacity-30" />
        <p className="text-sm">No headings found</p>
      </div>
    )
  }

  // Find the minimum heading level to normalize indentation
  const minLevel = Math.min(...headings.map(h => h.level))

  return (
    <nav
      className={cn("p-4", className)}
      aria-label="Table of contents"
    >
      <h2 className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
        <List className="h-4 w-4" />
        On this page
      </h2>
      <ul className="space-y-1">
        {headings.map((heading) => {
          const indentLevel = heading.level - minLevel
          return (
            <li
              key={`${heading.id}-${heading.text}`}
              style={{ paddingLeft: `${indentLevel * 12}px` }}
            >
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={cn(
                  "text-left w-full text-sm py-1 px-2 rounded transition-colors truncate block",
                  "hover:bg-muted hover:text-foreground",
                  activeId === heading.id
                    ? "text-primary font-medium bg-primary/10"
                    : "text-muted-foreground"
                )}
                title={heading.text}
              >
                {heading.text}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

