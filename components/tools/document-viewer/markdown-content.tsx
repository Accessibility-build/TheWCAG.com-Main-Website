"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import type { CSSProperties } from "react"
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"

// Type for syntax highlighter style
type SyntaxStyle = { [key: string]: CSSProperties }
import { useTheme } from "next-themes"
import { Document, isInternalDocumentLink, extractAnchorFromLink } from "@/lib/tools/document-viewer"
import { FileText, Copy, Check, Clock, Hash, ExternalLink, Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"

interface MarkdownContentProps {
  document: Document | null
  className?: string
  isFullscreen?: boolean
  onNavigateToDocument?: (href: string, anchor?: string | null) => boolean // Returns true if navigation was handled
}

export function MarkdownContent({ document, className, isFullscreen = false, onNavigateToDocument }: MarkdownContentProps) {
  const { resolvedTheme } = useTheme()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const copyCode = useCallback(async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch {
      console.error("Failed to copy code")
    }
  }, [])

  // Handle link clicks - intercept internal document links
  const handleLinkClick = useCallback((href: string, e: React.MouseEvent) => {
    if (isInternalDocumentLink(href) && onNavigateToDocument) {
      e.preventDefault()
      const anchor = extractAnchorFromLink(href)
      const handled = onNavigateToDocument(href, anchor)
      
      // If the document was found and we have an anchor, scroll to it after a brief delay
      if (handled && anchor) {
        setTimeout(() => {
          const element = window.document.getElementById(anchor)
          element?.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    }
  }, [onNavigateToDocument])

  if (!document) {
    return (
      <div className={cn("flex flex-col items-center justify-center h-full text-muted-foreground", className)}>
        <FileText className="h-16 w-16 mb-4 opacity-30" />
        <p className="text-lg font-medium">No document selected</p>
        <p className="text-sm mt-1">Select a document from the sidebar to view it</p>
      </div>
    )
  }

  const syntaxStyle = (mounted && resolvedTheme === "dark" ? oneDark : oneLight) as SyntaxStyle

  // Calculate reading time (avg 200 words per minute)
  const readingTime = Math.max(1, Math.ceil(document.wordCount / 200))

  return (
    <div className={cn(
      "overflow-auto",
      isFullscreen ? "p-8 md:p-12 lg:p-16" : "p-6 sm:p-8",
      className
    )}>
      {/* Document Header */}
      <header className={cn(
        "mb-8 pb-6 border-b",
        isFullscreen && "mb-12 pb-8"
      )}>
        <h1 className={cn(
          "font-bold text-foreground leading-tight mb-4",
          isFullscreen ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
        )}>
          {document.name.replace(/\.(md|markdown|txt)$/i, "")}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Hash className="h-4 w-4" />
            {document.wordCount.toLocaleString()} words
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {readingTime} min read
          </span>
        </div>
      </header>

      {/* Document Content */}
      <article className={cn(
        "markdown-content",
        isFullscreen && "markdown-content-fullscreen"
      )}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Custom heading components with IDs for anchor links
            h1: ({ children, ...props }) => {
              const id = String(children)
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-")
              return (
                <h1 id={id} className="group relative" {...props}>
                  <a 
                    href={`#${id}`} 
                    className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
                    aria-label={`Link to ${children}`}
                  >
                    <Hash className="h-5 w-5" />
                  </a>
                  {children}
                </h1>
              )
            },
            h2: ({ children, ...props }) => {
              const id = String(children)
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-")
              return (
                <h2 id={id} className="group relative" {...props}>
                  <a 
                    href={`#${id}`} 
                    className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
                    aria-label={`Link to ${children}`}
                  >
                    <Hash className="h-5 w-5" />
                  </a>
                  {children}
                </h2>
              )
            },
            h3: ({ children, ...props }) => {
              const id = String(children)
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-")
              return (
                <h3 id={id} className="group relative" {...props}>
                  <a 
                    href={`#${id}`} 
                    className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
                    aria-label={`Link to ${children}`}
                  >
                    <Hash className="h-4 w-4" />
                  </a>
                  {children}
                </h3>
              )
            },
            h4: ({ children, ...props }) => {
              const id = String(children)
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-")
              return <h4 id={id} {...props}>{children}</h4>
            },
            h5: ({ children, ...props }) => {
              const id = String(children)
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-")
              return <h5 id={id} {...props}>{children}</h5>
            },
            h6: ({ children, ...props }) => {
              const id = String(children)
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-")
              return <h6 id={id} {...props}>{children}</h6>
            },
            // Custom code block with syntax highlighting
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "")
              const codeString = String(children).replace(/\n$/, "")
              const isInline = !match && !className

              if (isInline) {
                return (
                  <code 
                    className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary" 
                    {...props}
                  >
                    {children}
                  </code>
                )
              }

              return (
                <div className="relative group not-prose my-6 rounded-lg overflow-hidden border bg-muted/30">
                  {/* Code header */}
                  <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                      {match ? match[1] : "code"}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-xs opacity-70 hover:opacity-100"
                      onClick={() => copyCode(codeString)}
                      aria-label="Copy code"
                    >
                      {copiedCode === codeString ? (
                        <>
                          <Check className="h-3.5 w-3.5 mr-1 text-green-500" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 mr-1" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <SyntaxHighlighter
                    style={syntaxStyle}
                    language={match ? match[1] : "text"}
                    PreTag="div"
                    className="!m-0 !rounded-none !bg-transparent"
                    customStyle={{
                      margin: 0,
                      padding: "1rem",
                      fontSize: isFullscreen ? "0.9375rem" : "0.875rem",
                      lineHeight: 1.6,
                      background: "transparent",
                    }}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              )
            },
            // Custom link component with internal document navigation
            a: ({ href, children, ...props }) => {
              const isExternal = href?.startsWith("http") || href?.startsWith("mailto:")
              const isInternal = href ? isInternalDocumentLink(href) : false
              const hasHandler = isInternal && onNavigateToDocument
              
              return (
                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  onClick={hasHandler ? (e) => handleLinkClick(href!, e) : undefined}
                  className={cn(
                    hasHandler && "cursor-pointer inline-flex items-center gap-1"
                  )}
                  {...props}
                >
                  {children}
                  {isInternal && hasHandler && (
                    <Link2 className="inline h-3 w-3 opacity-60" />
                  )}
                  {isExternal && (
                    <ExternalLink className="inline h-3 w-3 opacity-60" />
                  )}
                </a>
              )
            },
            // Custom table with professional styling
            table: ({ children, ...props }) => (
              <div className="overflow-x-auto my-6 rounded-lg border shadow-sm">
                <table className="min-w-full divide-y divide-border" {...props}>
                  {children}
                </table>
              </div>
            ),
            thead: ({ children, ...props }) => (
              <thead className="bg-muted/70" {...props}>
                {children}
              </thead>
            ),
            tbody: ({ children, ...props }) => (
              <tbody className="divide-y divide-border bg-background" {...props}>
                {children}
              </tbody>
            ),
            tr: ({ children, ...props }) => (
              <tr className="hover:bg-muted/30 transition-colors" {...props}>
                {children}
              </tr>
            ),
            th: ({ children, ...props }) => (
              <th 
                className="px-4 py-3 text-left text-sm font-semibold text-foreground uppercase tracking-wider border-b-2 border-border"
                {...props}
              >
                {children}
              </th>
            ),
            td: ({ children, ...props }) => (
              <td 
                className="px-4 py-3 text-sm text-foreground whitespace-normal"
                {...props}
              >
                {children}
              </td>
            ),
            // Custom blockquote
            blockquote: ({ children, ...props }) => (
              <blockquote {...props}>
                {children}
              </blockquote>
            ),
            // Custom checkbox for task lists
            input: ({ type, checked, ...props }) => {
              if (type === "checkbox") {
                return (
                  <input
                    type="checkbox"
                    checked={checked}
                    readOnly
                    className="mr-2 h-4 w-4 rounded border-2 border-muted-foreground/50 accent-primary"
                    {...props}
                  />
                )
              }
              return <input type={type} {...props} />
            },
            // Custom list items with better spacing
            li: ({ children, ...props }) => (
              <li className="pl-1" {...props}>
                {children}
              </li>
            ),
            // Custom image with loading state
            img: ({ src, alt, ...props }) => (
              <figure className="my-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt || ""}
                  loading="lazy"
                  className="rounded-lg max-w-full h-auto shadow-md"
                  {...props}
                />
                {alt && (
                  <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                    {alt}
                  </figcaption>
                )}
              </figure>
            ),
            // Custom horizontal rule
            hr: () => (
              <hr className="my-10 border-t-2 border-border/50" />
            ),
          }}
        >
          {document.content}
        </ReactMarkdown>
      </article>
    </div>
  )
}
