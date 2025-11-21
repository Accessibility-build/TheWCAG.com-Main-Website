"use client"

import { useEffect } from "react"

export function SkipLink() {
  useEffect(() => {
    // Ensure main content can receive focus
    const mainContent = document.getElementById("main-content")
    if (mainContent && !mainContent.hasAttribute("tabIndex")) {
      mainContent.setAttribute("tabIndex", "-1")
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.getElementById("main-content")
    if (target) {
      // Remove focus from skip link first
      const skipLink = e.currentTarget
      skipLink.blur()
      
      // Small delay to ensure skip link is hidden before focusing main
      setTimeout(() => {
        if (target) {
          target.focus()
          target.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:bg-primary focus:text-primary-foreground focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold focus:text-base focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      Skip to main content
    </a>
  )
}
