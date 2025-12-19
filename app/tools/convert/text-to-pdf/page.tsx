"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ConversionResult } from "@/components/tools/conversion-result"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { getToolBySlug } from "@/lib/tools/constants"
import { textToPdf } from "@/lib/tools/converters/document"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("text-to-pdf")!

export default function TextToPdfPage() {
  const [text, setText] = useState("")
  const [fontSize, setFontSize] = useState(12)
  const [pageSize, setPageSize] = useState<"a4" | "letter" | "legal">("a4")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<Blob | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleConvert = async () => {
    if (!text.trim()) return

    setIsProcessing(true)
    setError(null)

    try {
      const pdf = await textToPdf(text, { fontSize, pageSize })
      setResult(pdf)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setText("")
    setResult(null)
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
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Enter Text</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="text">Text Content</Label>
                      <Textarea
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter or paste your text here..."
                        className="min-h-[300px] font-mono"
                      />
                      <p className="text-xs text-muted-foreground">
                        {text.length} characters
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>PDF Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Page Size</Label>
                      <div className="flex flex-wrap gap-2">
                        {(["a4", "letter", "legal"] as const).map((size) => (
                          <Button
                            key={size}
                            variant={pageSize === size ? "default" : "outline"}
                            size="sm"
                            onClick={() => setPageSize(size)}
                          >
                            {size.toUpperCase()}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Font Size: {fontSize}pt</Label>
                      <input
                        type="range"
                        min="8"
                        max="24"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>

                    <Button
                      onClick={handleConvert}
                      disabled={isProcessing || !text.trim()}
                      className="w-full"
                    >
                      {isProcessing ? "Creating PDF..." : "Create PDF"}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div>
                <ConversionResult
                  title="Generated PDF"
                  downloadData={result || undefined}
                  downloadFilename="text-document.pdf"
                  resultSize={result?.size}
                  onReset={handleReset}
                  isLoading={isProcessing}
                  error={error || undefined}
                />
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
