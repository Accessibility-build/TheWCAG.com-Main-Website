"use client"

import { useEffect, useRef, useState } from "react"

export function SkipLink() {
  const skipLinkRef = useRef<HTMLAnchorElement>(null)
  const [isKeyboardFocus, setIsKeyboardFocus] = useState(false)
  const hasUsedKeyboardRef = useRef(false)

  useEffect(() => {
    // Ensure main content can receive focus
    const mainContent = document.getElementById("main-content")
    if (mainContent && !mainContent.hasAttribute("tabIndex")) {
      mainContent.setAttribute("tabIndex", "-1")
    }

    // Track keyboard usage
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        hasUsedKeyboardRef.current = true
      }
    }

    const handleMouseDown = () => {
      // If user clicks, they're not using keyboard
      hasUsedKeyboardRef.current = false
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleMouseDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleMouseDown)
    }
  }, [])

  const handleFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
    // Only show if focus came from keyboard (Tab key)
    if (hasUsedKeyboardRef.current) {
      setIsKeyboardFocus(true)
    } else {
      // If focus came programmatically, blur it immediately
      e.currentTarget.blur()
    }
  }

  const handleBlur = () => {
    setIsKeyboardFocus(false)
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.getElementById("main-content")
    if (target) {
      // Remove focus from skip link
      e.currentTarget.blur()
      setIsKeyboardFocus(false)
      
      // Focus main content
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
      ref={skipLinkRef}
      href="#main-content"
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`absolute z-[9999] bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-base shadow-lg transition-all duration-200 outline-none ring-2 ring-primary ring-offset-2 ${
        isKeyboardFocus ? "left-4 top-4" : "sr-only"
      }`}
    >
      Skip to main content
    </a>
  )
}
