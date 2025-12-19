"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Copy, Check, Download } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { formatJson, minifyJson, validateJson } from "@/lib/tools/converters/text"
import { copyToClipboard, downloadFile } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("json-formatter")!

export default function JsonFormatterPage() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [indent, setIndent] = useState(2)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleFormat = () => {
    const validation = validateJson(input)
    if (!validation.valid) {
      setError(validation.error || "Invalid JSON")
      setOutput("")
      return
    }
    
    try {
      setOutput(formatJson(input, indent))
      setError(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Format failed")
    }
  }

  const handleMinify = () => {
    const validation = validateJson(input)
    if (!validation.valid) {
      setError(validation.error || "Invalid JSON")
      setOutput("")
      return
    }
    
    try {
      setOutput(minifyJson(input))
      setError(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Minify failed")
    }
  }

  const handleCopy = async () => {
    const success = await copyToClipboard(output)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    downloadFile(output, "formatted.json", "application/json")
  }

  const structuredData = generateToolStructuredData(tool)
  const faqData = generateToolFAQStructuredData(tool)
  const howToData = generateHowToStructuredData(tool, getDefaultToolSteps(tool))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
      />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <ToolHeader tool={tool} />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Input JSON</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='{"key": "value"}'
                    className="min-h-[400px] font-mono text-sm"
                  />
                  
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Label>Indent:</Label>
                      {[2, 4].map((i) => (
                        <Button
                          key={i}
                          variant={indent === i ? "default" : "outline"}
                          size="sm"
                          onClick={() => setIndent(i)}
                        >
                          {i} spaces
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleFormat} className="flex-1">
                      Format
                    </Button>
                    <Button onClick={handleMinify} variant="outline" className="flex-1">
                      Minify
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Output</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                      {error}
                    </div>
                  )}
                  
                  <Textarea
                    value={output}
                    readOnly
                    placeholder="Formatted JSON will appear here..."
                    className="min-h-[400px] font-mono text-sm"
                  />

                  {output && (
                    <div className="flex gap-2">
                      <Button onClick={handleCopy} variant="outline" className="flex-1">
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 mr-2" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                      <Button onClick={handleDownload} className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <ToolFooter tool={tool} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
