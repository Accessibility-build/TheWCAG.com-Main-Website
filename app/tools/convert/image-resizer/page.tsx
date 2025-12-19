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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Link2, Link2Off } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { resizeImage, getImageDimensions } from "@/lib/tools/converters/image"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("image-resizer")!

export default function ImageResizerPage() {
  const [file, setFile] = useState<File | null>(null)
  const [originalDimensions, setOriginalDimensions] = useState<{ width: number; height: number } | null>(null)
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true)
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<Blob | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback(async (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0]
      setFile(selectedFile)
      setResult(null)
      setPreview(null)
      setError(null)
      
      try {
        const dimensions = await getImageDimensions(selectedFile)
        setOriginalDimensions(dimensions)
        setWidth(dimensions.width)
        setHeight(dimensions.height)
      } catch (e) {
        setError("Failed to read image dimensions")
      }
    }
  }, [])

  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth)
    if (maintainAspectRatio && originalDimensions) {
      const ratio = originalDimensions.height / originalDimensions.width
      setHeight(Math.round(newWidth * ratio))
    }
  }

  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight)
    if (maintainAspectRatio && originalDimensions) {
      const ratio = originalDimensions.width / originalDimensions.height
      setWidth(Math.round(newHeight * ratio))
    }
  }

  const handleResize = async () => {
    if (!file) return

    setIsProcessing(true)
    setError(null)

    try {
      const blob = await resizeImage(file, {
        width,
        height,
        maintainAspectRatio,
      })
      setResult(blob)
      setPreview(URL.createObjectURL(blob))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Resize failed")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setFile(null)
    setOriginalDimensions(null)
    setWidth(0)
    setHeight(0)
    setResult(null)
    setPreview(null)
    setError(null)
  }

  const presetSizes = [
    { label: "50%", width: originalDimensions ? Math.round(originalDimensions.width * 0.5) : 0 },
    { label: "75%", width: originalDimensions ? Math.round(originalDimensions.width * 0.75) : 0 },
    { label: "HD (1280)", width: 1280 },
    { label: "Full HD (1920)", width: 1920 },
    { label: "4K (3840)", width: 3840 },
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
                      allowedExtensions={["jpg", "jpeg", "png", "gif", "webp", "bmp"]}
                      maxSizeMB={50}
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Upload Image"
                      description="Drag and drop an image, or click to browse"
                    />
                  </CardContent>
                </Card>

                {file && originalDimensions && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Resize Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-3 rounded-lg bg-muted/50 text-sm">
                        Original size: {originalDimensions.width} × {originalDimensions.height} px
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex-1 space-y-2">
                          <Label htmlFor="width">Width (px)</Label>
                          <Input
                            id="width"
                            type="number"
                            value={width}
                            onChange={(e) => handleWidthChange(Number(e.target.value))}
                            min={1}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="mt-6"
                          onClick={() => setMaintainAspectRatio(!maintainAspectRatio)}
                          aria-label={maintainAspectRatio ? "Unlock aspect ratio" : "Lock aspect ratio"}
                        >
                          {maintainAspectRatio ? <Link2 className="h-4 w-4" /> : <Link2Off className="h-4 w-4" />}
                        </Button>
                        <div className="flex-1 space-y-2">
                          <Label htmlFor="height">Height (px)</Label>
                          <Input
                            id="height"
                            type="number"
                            value={height}
                            onChange={(e) => handleHeightChange(Number(e.target.value))}
                            min={1}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Presets</Label>
                        <div className="flex flex-wrap gap-2">
                          {presetSizes.map((preset) => (
                            <Button
                              key={preset.label}
                              variant="outline"
                              size="sm"
                              onClick={() => handleWidthChange(preset.width)}
                              disabled={!preset.width}
                            >
                              {preset.label}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <Button
                        onClick={handleResize}
                        disabled={isProcessing || !width || !height}
                        className="w-full"
                      >
                        {isProcessing ? "Resizing..." : `Resize to ${width} × ${height}`}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                <ConversionResult
                  title="Resized Image"
                  downloadData={result || undefined}
                  downloadFilename={file ? `${file.name.split(".")[0]}-${width}x${height}.png` : undefined}
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
