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
import { yamlToJson } from "@/lib/tools/converters/text"
import { copyToClipboard, downloadFile } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("yaml-to-json")!

const sampleYaml = `# Application Configuration
name: my-awesome-app
version: 1.0.0
environment: production

database:
  host: localhost
  port: 5432
  name: myapp_db
  
features:
  - authentication
  - caching
  - logging

settings:
  debug: false
  maxConnections: 100
  timeout: 30s`

export default function YamlToJsonPage() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleConvert = () => {
    if (!input.trim()) {
      setError("Please enter YAML to convert")
      return
    }

    setError(null)
    try {
      const result = yamlToJson(input)
      setOutput(JSON.stringify(result, null, 2))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed. Make sure your YAML is valid.")
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
    downloadFile(output, "converted.json", "application/json")
  }

  const handleReset = () => {
    setInput("")
    setOutput("")
    setError(null)
  }

  const handleLoadSample = () => {
    setInput(sampleYaml)
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
                      <CardTitle className="text-lg">YAML Input</CardTitle>
                      <Button variant="outline" size="sm" onClick={handleLoadSample}>
                        Load Sample
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="yaml-input">Enter YAML</Label>
                      <Textarea
                        id="yaml-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="key: value&#10;nested:&#10;  property: value"
                        className="min-h-[250px] sm:min-h-[300px] font-mono text-sm"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleConvert} className="flex-1">
                        Convert to JSON
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
                      <CardTitle className="text-lg">JSON Output</CardTitle>
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
                            .json
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
                        <code>{output}</code>
                      </pre>
                    ) : (
                      <div className="p-4 rounded-lg bg-muted/50 text-muted-foreground text-sm min-h-[250px] sm:min-h-[300px] flex items-center justify-center">
                        JSON output will appear here
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
