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
import { getToolBySlug } from "@/lib/tools/constants"
import { imagesToPdf } from "@/lib/tools/converters/document"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("image-to-pdf")!

export default function ImageToPdfPage() {
  const [files, setFiles] = useState<File[]>([])
  const [pageSize, setPageSize] = useState<"a4" | "letter" | "legal" | "fit">("a4")
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<Blob | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback((selectedFiles: File[]) => {
    setFiles(selectedFiles)
    setResult(null)
    setError(null)
  }, [])

  const handleConvert = async () => {
    if (files.length === 0) return

    setIsProcessing(true)
    setError(null)

    try {
      const pdf = await imagesToPdf(files, { pageSize, orientation })
      setResult(pdf)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setFiles([])
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
                    <CardTitle>Upload Images</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FileUpload
                      accept="image/*"
                      allowedExtensions={["jpg", "jpeg", "png", "gif", "webp"]}
                      maxSizeMB={50}
                      multiple
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Upload Images"
                      description="Drag and drop images, or click to browse. Each image becomes a page."
                    />
                  </CardContent>
                </Card>

                {files.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>PDF Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Page Size</Label>
                        <div className="flex flex-wrap gap-2">
                          {(["a4", "letter", "legal", "fit"] as const).map((size) => (
                            <Button
                              key={size}
                              variant={pageSize === size ? "default" : "outline"}
                              size="sm"
                              onClick={() => setPageSize(size)}
                            >
                              {size === "fit" ? "Fit to Image" : size.toUpperCase()}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Orientation</Label>
                        <div className="flex flex-wrap gap-2">
                          {(["portrait", "landscape"] as const).map((o) => (
                            <Button
                              key={o}
                              variant={orientation === o ? "default" : "outline"}
                              size="sm"
                              onClick={() => setOrientation(o)}
                            >
                              {o.charAt(0).toUpperCase() + o.slice(1)}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-muted/50 text-sm">
                        {files.length} image{files.length > 1 ? "s" : ""} selected = {files.length} page{files.length > 1 ? "s" : ""}
                      </div>

                      <Button
                        onClick={handleConvert}
                        disabled={isProcessing}
                        className="w-full"
                      >
                        {isProcessing ? "Creating PDF..." : "Create PDF"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                <ConversionResult
                  title="Generated PDF"
                  downloadData={result || undefined}
                  downloadFilename="images.pdf"
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
