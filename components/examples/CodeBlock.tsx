"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  id: string
  language?: string
}

export function CodeBlock({ code, id, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
        <code>{code}</code>
      </pre>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2"
        onClick={copyToClipboard}
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
      </Button>
    </div>
  )
}

