"use client"

import { useState, useMemo, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Copy } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodeBlockProps {
  code: string
  id: string
  language?: string
}

// Detect language from code content or file extensions
function detectLanguage(code: string, defaultLang: string = "tsx"): string {
  // Check for language hints in comments
  if (code.includes("<!--") || code.includes("<!DOCTYPE")) return "html"
  if (code.includes("function") && code.includes("=>")) return "javascript"
  if (code.includes("import") && code.includes("from")) {
    if (code.includes(".tsx") || code.includes("React") || code.includes("use client")) return "tsx"
    if (code.includes(".vue")) return "vue"
    return "javascript"
  }
  if (code.includes("const") && code.includes("=") && code.includes("{")) return "javascript"
  if (code.includes("className") || code.includes("htmlFor")) return "jsx"
  if (code.includes("export default") && code.includes("function")) return "tsx"
  if (code.includes("export default") && code.includes("()")) return "jsx"
  if (code.includes("use client") || code.includes("use server")) return "tsx"
  if (code.includes("interface") || code.includes("type ")) return "typescript"
  if (code.includes("@media") || code.includes(":hover") || code.includes("class=")) return "css"
  if (code.includes("SELECT") || code.includes("FROM")) return "sql"
  
  return defaultLang
}

export function CodeBlock({ code, id, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Clean HTML entities from code for display and copying
  // Also normalize line breaks and preserve formatting
  const cleanCode = useMemo(() => {
    let cleaned = code
      .replace(/&amp;lt;/g, "<")
      .replace(/&amp;gt;/g, ">")
      .replace(/&amp;quot;/g, '"')
      .replace(/&amp;#39;/g, "'")
      .replace(/&amp;amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&")
      // Normalize line breaks - handle both \n and \r\n
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      // Remove trailing whitespace from each line but preserve structure
      .split("\n")
      .map(line => line.trimEnd())
      .join("\n")
      // Ensure code doesn't start or end with unnecessary newlines
      .trim()
    
    return cleaned
  }, [code])

  const detectedLanguage = useMemo(() => {
    return language || detectLanguage(cleanCode)
  }, [cleanCode, language])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cleanCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Determine if dark mode is active
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"))
  const syntaxTheme = isDark ? vscDarkPlus : oneLight

  return (
    <div className="relative group w-full">
      <div className="overflow-x-auto rounded-lg border border-border">
        <SyntaxHighlighter
          language={detectedLanguage}
          style={syntaxTheme}
          className="code-block"
          PreTag="pre"
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: "1.6",
            background: isDark ? "hsl(var(--background))" : "hsl(var(--muted))",
            borderRadius: "0.5rem",
            whiteSpace: "pre",
            overflowX: "auto",
            wordBreak: "normal",
            wordWrap: "normal",
            display: "block",
            width: "100%",
          }}
          codeTagProps={{
            className: "code-block-code",
            style: {
              fontFamily: "var(--font-mono), monospace",
              display: "block",
              whiteSpace: "pre",
              wordBreak: "normal",
              wordWrap: "normal",
            },
          }}
          showLineNumbers={cleanCode.split("\n").length > 5}
          lineNumberStyle={{
            minWidth: "3em",
            paddingRight: "1em",
            color: isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
            userSelect: "none",
          }}
          wrapLines={false}
          wrapLongLines={false}
        >
          {cleanCode}
        </SyntaxHighlighter>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm border border-border shadow-sm"
        onClick={copyToClipboard}
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <>
            <CheckCircle2 className="h-4 w-4 mr-2" aria-hidden="true" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 mr-2" aria-hidden="true" />
            Copy
          </>
        )}
      </Button>
    </div>
  )
}

