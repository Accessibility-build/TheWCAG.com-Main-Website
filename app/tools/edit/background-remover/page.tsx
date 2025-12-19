"use client"

import { useState, useCallback, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { FileUpload } from "@/components/tools/file-upload"
import { ConversionResult } from "@/components/tools/conversion-result"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getToolBySlug } from "@/lib/tools/constants"
import { removeBackground, BackgroundRemovalOptions } from "@/lib/tools/converters/image"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("background-remover")!

export default function BackgroundRemoverPage() {
  const [file, setFile] = useState<File | null>(null)
  const [method, setMethod] = useState<"ai" | "color" | "manual">("color")
  const [colorThreshold, setColorThreshold] = useState(30)
  const [replaceWith, setReplaceWith] = useState<"transparent" | "color" | "gradient">("transparent")
  const [replacementColor, setReplacementColor] = useState("#ffffff")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<Blob | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0])
      setResult(null)
      setPreview(null)
      setError(null)
    }
  }, [])

  const handleRemoveBackground = async () => {
    if (!file) return

    setIsProcessing(true)
    setError(null)

    try {
      const options: BackgroundRemovalOptions = {
        method,
        colorThreshold,
        replaceWith,
        replacementColor: replaceWith === "color" ? replacementColor : undefined,
      }
      const blob = await removeBackground(file, options)
      setResult(blob)
      setPreview(URL.createObjectURL(blob))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Background removal failed")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    // Cleanup object URL to prevent memory leaks
    if (preview) {
      URL.revokeObjectURL(preview)
    }
    setFile(null)
    setResult(null)
    setPreview(null)
    setError(null)
  }

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview)
      }
    }
  }, [preview])

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
                    <CardTitle>Upload Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FileUpload
                      accept="image/*"
                      allowedExtensions={["jpg", "jpeg", "png", "webp"]}
                      maxSizeMB={50}
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Upload Image"
                      description="Drag and drop an image, or click to browse"
                    />
                  </CardContent>
                </Card>

                {file && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Removal Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Removal Method</Label>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant={method === "color" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setMethod("color")}
                          >
                            Color-based
                          </Button>
                          <Button
                            variant={method === "ai" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setMethod("ai")}
                            disabled
                            title="AI method coming soon"
                          >
                            AI (Coming Soon)
                          </Button>
                        </div>
                      </div>

                      {method === "color" && (
                        <div className="space-y-2">
                          <Label htmlFor="threshold">Color Threshold: {colorThreshold}</Label>
                          <input
                            type="range"
                            id="threshold"
                            min="10"
                            max="100"
                            value={colorThreshold}
                            onChange={(e) => setColorThreshold(Number(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label>Replace Background With</Label>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant={replaceWith === "transparent" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setReplaceWith("transparent")}
                          >
                            Transparent
                          </Button>
                          <Button
                            variant={replaceWith === "color" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setReplaceWith("color")}
                          >
                            Solid Color
                          </Button>
                          <Button
                            variant={replaceWith === "gradient" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setReplaceWith("gradient")}
                            disabled
                            title="Gradient coming soon"
                          >
                            Gradient (Coming Soon)
                          </Button>
                        </div>
                      </div>

                      {replaceWith === "color" && (
                        <div className="space-y-2">
                          <Label htmlFor="bgColor">Background Color</Label>
                          <div className="flex gap-2">
                            <Input
                              id="bgColor"
                              type="color"
                              value={replacementColor}
                              onChange={(e) => setReplacementColor(e.target.value)}
                              className="w-20 h-10"
                            />
                            <Input
                              type="text"
                              value={replacementColor}
                              onChange={(e) => setReplacementColor(e.target.value)}
                              placeholder="#ffffff"
                              className="flex-1"
                            />
                          </div>
                        </div>
                      )}

                      <Button
                        onClick={handleRemoveBackground}
                        disabled={isProcessing}
                        className="w-full"
                      >
                        {isProcessing ? "Removing Background..." : "Remove Background"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                <ConversionResult
                  title="Processed Image"
                  downloadData={result || undefined}
                  downloadFilename={file ? `${file.name.split(".")[0]}-no-bg.png` : undefined}
                  imagePreview={preview || undefined}
                  originalSize={file?.size}
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
