"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, Download } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { markdownToHtml } from "@/lib/tools/converters/text"
import { copyToClipboard, downloadFile } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("markdown-to-html")!

const sampleMarkdown = `# Hello World

This is a **bold** text and this is *italic*.

## Features

- Item 1
- Item 2
- Item 3

### Code Example

\`\`\`javascript
console.log('Hello, World!');
\`\`\`

> This is a blockquote.

[Link to Google](https://google.com)
`

export default function MarkdownToHtmlPage() {
  const [markdown, setMarkdown] = useState(sampleMarkdown)
  const [html, setHtml] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    try {
      setHtml(markdownToHtml(markdown))
    } catch {
      setHtml("")
    }
  }, [markdown])

  const handleCopy = async () => {
    const success = await copyToClipboard(html)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    downloadFile(html, "converted.html", "text/html")
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
                  <CardTitle>Markdown Input</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    placeholder="Enter your Markdown here..."
                    className="min-h-[500px] font-mono text-sm"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Output</CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={handleCopy}>
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleDownload}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="preview">
                    <TabsList>
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="html">HTML Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview" className="min-h-[450px]">
                      <div 
                        className="prose dark:prose-invert max-w-none p-4 border rounded-lg min-h-[430px] overflow-auto"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    </TabsContent>
                    <TabsContent value="html" className="min-h-[450px]">
                      <pre className="p-4 border rounded-lg bg-muted text-sm overflow-auto min-h-[430px]">
                        <code>{html}</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
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
