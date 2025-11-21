"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  threshold?: number
}

export function ScrollAnimation({ children, className, threshold = 0.1, ...props }: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return (
    <div ref={ref} className={cn("reveal-on-scroll", isVisible && "is-visible", className)} {...props}>
      {children}
    </div>
  )
}
