"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface TemplateDisplayProps {
  template: string
  className?: string
}

export function TemplateDisplay({ template, className }: TemplateDisplayProps) {
  const [copied, setCopied] = React.useState(false)
  const templateRef = React.useRef<HTMLDivElement>(null)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(template)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  // Format template with proper HTML structure
  const formatTemplate = (text: string) => {
    const lines = text.split("\n")
    const formatted: React.ReactNode[] = []
    let currentList: string[] = []
    let listType: "ul" | "ol" | null = null
    let keyCounter = 0

    const closeList = () => {
      if (currentList.length > 0 && listType) {
        if (listType === "ul") {
          formatted.push(
            <ul key={`list-${keyCounter++}`} className="list-disc list-inside space-y-2 ml-4 mb-4">
              {currentList.map((item, i) => (
                <li key={i} className="text-sm sm:text-base leading-relaxed">{item}</li>
              ))}
            </ul>
          )
        } else {
          formatted.push(
            <ol key={`list-${keyCounter++}`} className="list-decimal list-inside space-y-2 ml-4 mb-4">
              {currentList.map((item, i) => (
                <li key={i} className="text-sm sm:text-base leading-relaxed">{item}</li>
              ))}
            </ol>
          )
        }
        currentList = []
        listType = null
      }
    }

    lines.forEach((line, index) => {
      const trimmed = line.trim()

      // Handle headings
      if (trimmed.startsWith("## ")) {
        closeList()
        const heading = trimmed.replace("## ", "")
        formatted.push(
          <h3 key={`heading-${keyCounter++}`} className="text-lg sm:text-xl font-semibold mt-6 mb-4 text-foreground first:mt-0">
            {heading}
          </h3>
        )
      }
      // Handle numbered list items
      else if (/^\d+\.\s/.test(trimmed)) {
        if (listType !== "ol") {
          closeList()
          listType = "ol"
        }
        currentList.push(trimmed.replace(/^\d+\.\s/, ""))
      }
      // Handle bullet list items
      else if (trimmed.startsWith("- ")) {
        if (listType !== "ul") {
          closeList()
          listType = "ul"
        }
        currentList.push(trimmed.replace(/^-\s/, ""))
      }
      // Handle regular paragraphs
      else if (trimmed.length > 0) {
        closeList()
        formatted.push(
          <p key={`para-${keyCounter++}`} className="text-sm sm:text-base leading-relaxed mb-4 text-foreground">
            {trimmed}
          </p>
        )
      }
      // Handle empty lines - close lists but don't add spacing
      else {
        closeList()
      }
    })

    // Close any remaining list
    closeList()

    return formatted
  }

  return (
    <div className={cn("relative", className)}>
      <div className="absolute top-4 right-4 z-10">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleCopy}
          aria-label={copied ? "Copied to clipboard" : "Copy template to clipboard"}
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </Button>
      </div>
      <div
        ref={templateRef}
        className="bg-muted/50 border border-border rounded-lg p-6 sm:p-8 md:p-10 space-y-2 w-full"
      >
        <div className="max-w-none">
          {formatTemplate(template)}
        </div>
      </div>
      <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <p className="text-xs sm:text-sm text-muted-foreground">
          <strong className="text-foreground">Note:</strong> Replace all placeholders (text in square brackets) with your organization's specific information. Customize the content to accurately reflect your website's accessibility status.
        </p>
      </div>
    </div>
  )
}

