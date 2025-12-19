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
import { convertImageFormat, ImageFormat } from "@/lib/tools/converters/image"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("image-format-converter")!

const formats: { value: ImageFormat; label: string }[] = [
  { value: "jpeg", label: "JPEG" },
  { value: "png", label: "PNG" },
  { value: "webp", label: "WebP" },
  { value: "gif", label: "GIF" },
  { value: "bmp", label: "BMP" },
]

export default function ImageFormatConverterPage() {
  const [file, setFile] = useState<File | null>(null)
  const [targetFormat, setTargetFormat] = useState<ImageFormat>("png")
  const [quality, setQuality] = useState(92)
  const [isConverting, setIsConverting] = useState(false)
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

  const handleConvert = async () => {
    if (!file) return

    setIsConverting(true)
    setError(null)

    try {
      const blob = await convertImageFormat(file, {
        format: targetFormat,
        quality: quality / 100,
      })
      setResult(blob)
      setPreview(URL.createObjectURL(blob))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed")
    } finally {
      setIsConverting(false)
    }
  }

  const handleReset = () => {
    setFile(null)
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
              {/* Input Section */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upload Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FileUpload
                      accept="image/*"
                      allowedExtensions={["jpg", "jpeg", "png", "gif", "webp", "bmp"]}
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
                      <CardTitle>Conversion Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="format">Output Format</Label>
                        <div className="flex flex-wrap gap-2">
                          {formats.map((format) => (
                            <Button
                              key={format.value}
                              variant={targetFormat === format.value ? "default" : "outline"}
                              size="sm"
                              onClick={() => setTargetFormat(format.value)}
                            >
                              {format.label}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {targetFormat !== "png" && targetFormat !== "gif" && (
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
                            Lower quality = smaller file size
                          </p>
                        </div>
                      )}

                      <Button
                        onClick={handleConvert}
                        disabled={isConverting}
                        className="w-full"
                      >
                        {isConverting ? "Converting..." : `Convert to ${targetFormat.toUpperCase()}`}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Output Section */}
              <div>
                <ConversionResult
                  title="Converted Image"
                  downloadData={result || undefined}
                  downloadFilename={file ? `${file.name.split(".")[0]}.${targetFormat}` : undefined}
                  imagePreview={preview || undefined}
                  originalSize={file?.size}
                  resultSize={result?.size}
                  onReset={handleReset}
                  isLoading={isConverting}
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
