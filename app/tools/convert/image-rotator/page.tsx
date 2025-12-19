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
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RotateCcw, RotateCw, FlipHorizontal, FlipVertical } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { rotateImage } from "@/lib/tools/converters/image"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("image-rotator")!

export default function ImageRotatorPage() {
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [angle, setAngle] = useState(0)
  const [flipH, setFlipH] = useState(false)
  const [flipV, setFlipV] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<Blob | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback((files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0]
      setFile(selectedFile)
      setImageUrl(URL.createObjectURL(selectedFile))
      setResult(null)
      setPreview(null)
      setError(null)
      setAngle(0)
      setFlipH(false)
      setFlipV(false)
    }
  }, [])

  const handleRotate = async () => {
    if (!file) return

    setIsProcessing(true)
    setError(null)

    try {
      const blob = await rotateImage(file, {
        angle,
        flipHorizontal: flipH,
        flipVertical: flipV,
      })
      setResult(blob)
      setPreview(URL.createObjectURL(blob))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Rotation failed")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setFile(null)
    setImageUrl(null)
    setResult(null)
    setPreview(null)
    setError(null)
    setAngle(0)
    setFlipH(false)
    setFlipV(false)
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

                {file && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Rotation Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Quick Rotate</Label>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setAngle((a) => (a - 90 + 360) % 360)}
                          >
                            <RotateCcw className="h-4 w-4 mr-1" />
                            -90°
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setAngle((a) => (a + 90) % 360)}
                          >
                            <RotateCw className="h-4 w-4 mr-1" />
                            +90°
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setAngle(180)}
                          >
                            180°
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setAngle(0)}
                          >
                            Reset
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="angle">Custom Angle: {angle}°</Label>
                        <Input
                          id="angle"
                          type="range"
                          min="0"
                          max="359"
                          value={angle}
                          onChange={(e) => setAngle(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Flip</Label>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant={flipH ? "default" : "outline"}
                            size="sm"
                            onClick={() => setFlipH(!flipH)}
                          >
                            <FlipHorizontal className="h-4 w-4 mr-1" />
                            Horizontal
                          </Button>
                          <Button
                            variant={flipV ? "default" : "outline"}
                            size="sm"
                            onClick={() => setFlipV(!flipV)}
                          >
                            <FlipVertical className="h-4 w-4 mr-1" />
                            Vertical
                          </Button>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-muted/50 text-sm">
                        Rotation: {angle}° | Flip H: {flipH ? "Yes" : "No"} | Flip V: {flipV ? "Yes" : "No"}
                      </div>

                      <Button
                        onClick={handleRotate}
                        disabled={isProcessing}
                        className="w-full"
                      >
                        {isProcessing ? "Processing..." : "Apply Rotation"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="space-y-4">
                {imageUrl && !result && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Original Image</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={imageUrl}
                        alt="Original image"
                        className="max-w-full h-auto max-h-64 mx-auto rounded-lg border"
                        style={{
                          transform: `rotate(${angle}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})`,
                          transition: "transform 0.3s ease",
                        }}
                      />
                      <p className="text-xs text-center text-muted-foreground mt-2">
                        Preview (actual output may differ slightly)
                      </p>
                    </CardContent>
                  </Card>
                )}

                <ConversionResult
                  title="Rotated Image"
                  downloadData={result || undefined}
                  downloadFilename={file ? `${file.name.split(".")[0]}-rotated.png` : undefined}
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
