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
import { getToolBySlug } from "@/lib/tools/constants"
import { removeWatermark, WatermarkRemovalOptions } from "@/lib/tools/converters/image"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("watermark-remover")!

export default function WatermarkRemoverPage() {
  const [file, setFile] = useState<File | null>(null)
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

  const handleRemoveWatermark = async () => {
    if (!file) return

    setIsProcessing(true)
    setError(null)

    try {
      // For demo, using center area - would be replaced with interactive selection
      const img = await new Promise<HTMLImageElement>((resolve) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.src = URL.createObjectURL(file)
      })
      
      const options: WatermarkRemovalOptions = {
        mask: [{
          x: Math.floor(img.width * 0.25),
          y: Math.floor(img.height * 0.25),
          width: Math.floor(img.width * 0.5),
          height: Math.floor(img.height * 0.5),
        }],
        algorithm: "inpainting",
      }
      const blob = await removeWatermark(file, options)
      setResult(blob)
      setPreview(URL.createObjectURL(blob))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Watermark removal failed")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    if (preview) URL.revokeObjectURL(preview)
    setFile(null)
    setResult(null)
    setPreview(null)
    setError(null)
  }

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
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
                      <CardTitle>Watermark Selection</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Select the watermark area. Interactive selection coming soon - for now, the tool processes the center area.
                      </p>
                      <Button
                        onClick={handleRemoveWatermark}
                        disabled={isProcessing}
                        className="w-full"
                      >
                        {isProcessing ? "Removing Watermark..." : "Remove Watermark"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                {file && !result && (
                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle>Preview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt="Image to process"
                          className="max-w-full h-auto rounded-lg border"
                          onLoad={(e) => {
                            const img = e.currentTarget
                            const rect = img.getBoundingClientRect()
                            // Simple click-to-select for demo (would be enhanced with proper canvas selection)
                            img.style.cursor = "crosshair"
                          }}
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Note: Full interactive selection coming soon. For now, the tool will process the center area.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
                <ConversionResult
                  title="Processed Image"
                  downloadData={result || undefined}
                  downloadFilename={file ? `${file.name.split(".")[0]}-no-watermark.png` : undefined}
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
