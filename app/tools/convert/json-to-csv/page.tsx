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
import { jsonToCsv } from "@/lib/tools/converters/text"
import { copyToClipboard, downloadFile } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("json-to-csv")!

const sampleJson = `[
  { "name": "John Doe", "email": "john@example.com", "age": 30, "city": "New York" },
  { "name": "Jane Smith", "email": "jane@example.com", "age": 25, "city": "Los Angeles" },
  { "name": "Bob Johnson", "email": "bob@example.com", "age": 35, "city": "Chicago" }
]`

export default function JsonToCsvPage() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [delimiter, setDelimiter] = useState(",")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleConvert = () => {
    if (!input.trim()) {
      setError("Please enter JSON to convert")
      return
    }

    setError(null)
    try {
      const result = jsonToCsv(input, { delimiter, header: true })
      setOutput(result)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed. Make sure your JSON is an array of objects.")
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
    downloadFile(output, "converted.csv", "text/csv")
  }

  const handleReset = () => {
    setInput("")
    setOutput("")
    setError(null)
  }

  const handleLoadSample = () => {
    setInput(sampleJson)
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
                      <CardTitle className="text-lg">JSON Input</CardTitle>
                      <Button variant="outline" size="sm" onClick={handleLoadSample}>
                        Load Sample
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="json-input">Enter JSON Array</Label>
                      <Textarea
                        id="json-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='[{"key": "value", ...}, ...]'
                        className="min-h-[200px] sm:min-h-[250px] font-mono text-sm"
                      />
                      <p className="text-xs text-muted-foreground">
                        JSON must be an array of objects
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>Delimiter</Label>
                      <div className="flex gap-2 flex-wrap">
                        {[
                          { label: "Comma (,)", value: "," },
                          { label: "Semicolon (;)", value: ";" },
                          { label: "Tab", value: "\t" },
                        ].map((opt) => (
                          <Button
                            key={opt.value}
                            variant={delimiter === opt.value ? "default" : "outline"}
                            size="sm"
                            onClick={() => setDelimiter(opt.value)}
                          >
                            {opt.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={handleConvert} className="flex-1">
                        Convert to CSV
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
                      <CardTitle className="text-lg">CSV Output</CardTitle>
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
                            .csv
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
                      <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm min-h-[200px] sm:min-h-[250px] whitespace-pre-wrap">
                        {output}
                      </pre>
                    ) : (
                      <div className="p-4 rounded-lg bg-muted/50 text-muted-foreground text-sm min-h-[200px] sm:min-h-[250px] flex items-center justify-center">
                        CSV output will appear here
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
