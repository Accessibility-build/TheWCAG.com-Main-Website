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
import { blurFaces, FaceBlurOptions } from "@/lib/tools/converters/image"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("face-blur")!

export default function FaceBlurPage() {
  const [file, setFile] = useState<File | null>(null)
  const [blurType, setBlurType] = useState<"gaussian" | "pixelate" | "blackbar">("gaussian")
  const [intensity, setIntensity] = useState(10)
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

  const handleBlurFaces = async () => {
    if (!file) return

    setIsProcessing(true)
    setError(null)

    try {
      const img = await new Promise<HTMLImageElement>((resolve) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.src = URL.createObjectURL(file)
      })
      
      const options: FaceBlurOptions = {
        detections: [{
          x: Math.floor(img.width * 0.25),
          y: Math.floor(img.height * 0.25),
          width: Math.floor(img.width * 0.5),
          height: Math.floor(img.height * 0.5),
        }],
        blurType,
        intensity,
      }
      const blob = await blurFaces(file, options)
      setResult(blob)
      setPreview(URL.createObjectURL(blob))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Face blur failed")
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
                      <CardTitle>Blur Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Blur Type</Label>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant={blurType === "gaussian" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setBlurType("gaussian")}
                          >
                            Gaussian Blur
                          </Button>
                          <Button
                            variant={blurType === "pixelate" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setBlurType("pixelate")}
                          >
                            Pixelate
                          </Button>
                          <Button
                            variant={blurType === "blackbar" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setBlurType("blackbar")}
                          >
                            Black Bar
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="intensity">Intensity: {intensity}</Label>
                        <input
                          type="range"
                          id="intensity"
                          min="5"
                          max="50"
                          value={intensity}
                          onChange={(e) => setIntensity(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      <Button
                        onClick={handleBlurFaces}
                        disabled={isProcessing}
                        className="w-full"
                      >
                        {isProcessing ? "Blurring Faces..." : "Blur Faces"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                <ConversionResult
                  title="Processed Image"
                  downloadData={result || undefined}
                  downloadFilename={file ? `${file.name.split(".")[0]}-blurred.png` : undefined}
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
