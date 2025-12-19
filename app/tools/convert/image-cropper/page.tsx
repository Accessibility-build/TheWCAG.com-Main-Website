"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { FileUpload } from "@/components/tools/file-upload"
import { ConversionResult } from "@/components/tools/conversion-result"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { getToolBySlug } from "@/lib/tools/constants"
import { cropImage, getImageDimensions } from "@/lib/tools/converters/image"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("image-cropper")!

const aspectRatios = [
  { label: "Free", value: null },
  { label: "1:1", value: 1 },
  { label: "16:9", value: 16/9 },
  { label: "4:3", value: 4/3 },
  { label: "3:2", value: 3/2 },
  { label: "9:16", value: 9/16 },
]

export default function ImageCropperPage() {
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null)
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 100, height: 100 })
  const [selectedRatio, setSelectedRatio] = useState<number | null>(null)
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
      
      const url = URL.createObjectURL(selectedFile)
      setImageUrl(url)
      
      try {
        const dims = await getImageDimensions(selectedFile)
        setDimensions(dims)
        setCropArea({ x: 0, y: 0, width: dims.width, height: dims.height })
      } catch (e) {
        setError("Failed to read image")
      }
    }
  }, [])

  const handleRatioChange = (ratio: number | null) => {
    setSelectedRatio(ratio)
    if (ratio && dimensions) {
      const maxWidth = dimensions.width
      const maxHeight = dimensions.height
      
      let newWidth = maxWidth
      let newHeight = Math.round(maxWidth / ratio)
      
      if (newHeight > maxHeight) {
        newHeight = maxHeight
        newWidth = Math.round(maxHeight * ratio)
      }
      
      setCropArea({
        x: Math.round((dimensions.width - newWidth) / 2),
        y: Math.round((dimensions.height - newHeight) / 2),
        width: newWidth,
        height: newHeight,
      })
    }
  }

  const handleCrop = async () => {
    if (!file) return

    setIsProcessing(true)
    setError(null)

    try {
      const blob = await cropImage(file, cropArea)
      setResult(blob)
      setPreview(URL.createObjectURL(blob))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Crop failed")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setFile(null)
    setImageUrl(null)
    setDimensions(null)
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
                    <CardTitle>Upload Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FileUpload
                      accept="image/*"
                      allowedExtensions={["jpg", "jpeg", "png", "gif", "webp"]}
                      maxSizeMB={50}
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Upload Image"
                      description="Drag and drop an image, or click to browse"
                    />
                  </CardContent>
                </Card>

                {file && dimensions && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Crop Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Aspect Ratio</Label>
                        <div className="flex flex-wrap gap-2">
                          {aspectRatios.map((ratio) => (
                            <Button
                              key={ratio.label}
                              variant={selectedRatio === ratio.value ? "default" : "outline"}
                              size="sm"
                              onClick={() => handleRatioChange(ratio.value)}
                            >
                              {ratio.label}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="x">X Position</Label>
                          <Input
                            id="x"
                            type="number"
                            value={cropArea.x}
                            onChange={(e) => setCropArea({ ...cropArea, x: Number(e.target.value) })}
                            min={0}
                            max={dimensions.width - cropArea.width}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="y">Y Position</Label>
                          <Input
                            id="y"
                            type="number"
                            value={cropArea.y}
                            onChange={(e) => setCropArea({ ...cropArea, y: Number(e.target.value) })}
                            min={0}
                            max={dimensions.height - cropArea.height}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cropWidth">Width</Label>
                          <Input
                            id="cropWidth"
                            type="number"
                            value={cropArea.width}
                            onChange={(e) => setCropArea({ ...cropArea, width: Number(e.target.value) })}
                            min={1}
                            max={dimensions.width - cropArea.x}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cropHeight">Height</Label>
                          <Input
                            id="cropHeight"
                            type="number"
                            value={cropArea.height}
                            onChange={(e) => setCropArea({ ...cropArea, height: Number(e.target.value) })}
                            min={1}
                            max={dimensions.height - cropArea.y}
                          />
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-muted/50 text-sm">
                        Original: {dimensions.width} × {dimensions.height} px<br />
                        Crop area: {cropArea.width} × {cropArea.height} px
                      </div>

                      <Button
                        onClick={handleCrop}
                        disabled={isProcessing}
                        className="w-full"
                      >
                        {isProcessing ? "Cropping..." : "Crop Image"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="space-y-4">
                {imageUrl && !result && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Preview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative overflow-hidden rounded-lg border">
                        <img
                          src={imageUrl}
                          alt="Image to crop"
                          className="max-w-full h-auto"
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}

                <ConversionResult
                  title="Cropped Image"
                  downloadData={result || undefined}
                  downloadFilename={file ? `${file.name.split(".")[0]}-cropped.png` : undefined}
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
