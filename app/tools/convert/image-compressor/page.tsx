"use client"

import { useState, useCallback } from "react"
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
import { compressImage } from "@/lib/tools/converters/image"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("image-compressor")!

export default function ImageCompressorPage() {
  const [file, setFile] = useState<File | null>(null)
  const [quality, setQuality] = useState(80)
  const [maxWidth, setMaxWidth] = useState<number | undefined>(undefined)
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

  const handleCompress = async () => {
    if (!file) return

    setIsProcessing(true)
    setError(null)

    try {
      const blob = await compressImage(file, {
        quality: quality / 100,
        maxWidth,
      })
      setResult(blob)
      setPreview(URL.createObjectURL(blob))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Compression failed")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setFile(null)
    setResult(null)
    setPreview(null)
    setError(null)
  }

  const qualityPresets = [
    { label: "Low (60%)", value: 60 },
    { label: "Medium (75%)", value: 75 },
    { label: "High (85%)", value: 85 },
    { label: "Best (95%)", value: 95 },
  ]

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
                      <CardTitle>Compression Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Quality Presets</Label>
                        <div className="flex flex-wrap gap-2">
                          {qualityPresets.map((preset) => (
                            <Button
                              key={preset.value}
                              variant={quality === preset.value ? "default" : "outline"}
                              size="sm"
                              onClick={() => setQuality(preset.value)}
                            >
                              {preset.label}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quality">Quality: {quality}%</Label>
                        <input
                          type="range"
                          id="quality"
                          min="10"
                          max="100"
                          value={quality}
                          onChange={(e) => setQuality(Number(e.target.value))}
                          className="w-full"
                        />
                        <p className="text-xs text-muted-foreground">
                          Lower quality = smaller file size. Recommended: 70-85% for photos.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label>Max Width (optional)</Label>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant={!maxWidth ? "default" : "outline"}
                            size="sm"
                            onClick={() => setMaxWidth(undefined)}
                          >
                            Original
                          </Button>
                          {[1920, 1280, 800, 640].map((w) => (
                            <Button
                              key={w}
                              variant={maxWidth === w ? "default" : "outline"}
                              size="sm"
                              onClick={() => setMaxWidth(w)}
                            >
                              {w}px
                            </Button>
                          ))}
                        </div>
                      </div>

                      <Button
                        onClick={handleCompress}
                        disabled={isProcessing}
                        className="w-full"
                      >
                        {isProcessing ? "Compressing..." : "Compress Image"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                <ConversionResult
                  title="Compressed Image"
                  downloadData={result || undefined}
                  downloadFilename={file ? `${file.name.split(".")[0]}-compressed.jpg` : undefined}
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
