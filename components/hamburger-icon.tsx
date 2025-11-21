"use client"

import { cn } from "@/lib/utils"

interface HamburgerIconProps {
  isOpen?: boolean
  className?: string
}

export function HamburgerIcon({ isOpen, className }: HamburgerIconProps) {
  return (
    <div className={cn("w-5 h-5 flex flex-col justify-center gap-1", className)}>
      <span
        className={cn(
          "block h-0.5 w-full bg-current transition-all duration-300 ease-in-out rounded-full",
          isOpen ? "rotate-45 translate-y-1.5" : "rotate-0",
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-full bg-current transition-all duration-300 ease-in-out rounded-full",
          isOpen ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-full bg-current transition-all duration-300 ease-in-out rounded-full",
          isOpen ? "-rotate-45 -translate-y-1.5" : "rotate-0",
        )}
      />
    </div>
  )
}
