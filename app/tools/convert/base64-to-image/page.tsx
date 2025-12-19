"use client"

import { useState, useCallback } from "react"
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
import { base64ToImage } from "@/lib/tools/converters/image"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("base64-to-image")!

export default function Base64ToImagePage() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<Blob | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleConvert = async () => {
    if (!input.trim()) return

    setIsProcessing(true)
    setError(null)

    try {
      const blob = await base64ToImage(input.trim())
      setResult(blob)
      setPreview(URL.createObjectURL(blob))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid Base64 string")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setInput("")
    setResult(null)
    setPreview(null)
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
                    <CardTitle>Enter Base64 String</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="base64">Base64 or Data URI</Label>
                      <Textarea
                        id="base64"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Paste your Base64 string or data URI here...&#10;&#10;Example: data:image/png;base64,iVBORw0KGgo..."
                        className="min-h-[200px] font-mono text-sm"
                      />
                      <p className="text-xs text-muted-foreground">
                        Accepts raw Base64 or full data URI format (data:image/...).
                      </p>
                    </div>

                    <Button
                      onClick={handleConvert}
                      disabled={isProcessing || !input.trim()}
                      className="w-full"
                    >
                      {isProcessing ? "Converting..." : "Convert to Image"}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div>
                <ConversionResult
                  title="Decoded Image"
                  downloadData={result || undefined}
                  downloadFilename="decoded-image.png"
                  imagePreview={preview || undefined}
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
