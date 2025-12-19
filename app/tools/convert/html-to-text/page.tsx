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
import { Copy, Check, Download, RefreshCw } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { htmlToText } from "@/lib/tools/converters/text"
import { copyToClipboard, downloadFile } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("html-to-text")!

const sampleHtml = `<!DOCTYPE html>
<html>
<head><title>Sample Page</title></head>
<body>
  <h1>Welcome to Our Website</h1>
  <p>This is a <strong>sample</strong> paragraph with <em>formatted</em> text.</p>
  <ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
  <a href="https://example.com">Click here</a> to learn more.
</body>
</html>`

export default function HtmlToTextPage() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleConvert = () => {
    if (!input.trim()) {
      setError("Please enter some HTML to convert")
      return
    }

    setError(null)
    try {
      const result = htmlToText(input)
      setOutput(result)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed")
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
    downloadFile(output, "converted.txt", "text/plain")
  }

  const handleReset = () => {
    setInput("")
    setOutput("")
    setError(null)
  }

  const handleLoadSample = () => {
    setInput(sampleHtml)
    setOutput("")
    setError(null)
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
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <ToolHeader tool={tool} />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">HTML Input</CardTitle>
                      <Button variant="outline" size="sm" onClick={handleLoadSample}>
                        Load Sample
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="html-input">Enter HTML</Label>
                      <Textarea
                        id="html-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Paste your HTML here..."
                        className="min-h-[250px] sm:min-h-[300px] font-mono text-sm"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleConvert} className="flex-1">
                        Extract Text
                      </Button>
                      {input && (
                        <Button variant="outline" onClick={handleReset}>
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Plain Text Output</CardTitle>
                      {output && (
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={handleCopy}>
                            {copied ? (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" />
                                Copy
                              </>
                            )}
                          </Button>
                          <Button variant="outline" size="sm" onClick={handleDownload}>
                            <Download className="h-4 w-4 mr-1" />
                            .txt
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {error ? (
                      <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
                        {error}
                      </div>
                    ) : output ? (
                      <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm min-h-[250px] sm:min-h-[300px] whitespace-pre-wrap">
                        {output}
                      </pre>
                    ) : (
                      <div className="p-4 rounded-lg bg-muted/50 text-muted-foreground text-sm min-h-[250px] sm:min-h-[300px] flex items-center justify-center">
                        Plain text output will appear here
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            <ToolFooter tool={tool} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
