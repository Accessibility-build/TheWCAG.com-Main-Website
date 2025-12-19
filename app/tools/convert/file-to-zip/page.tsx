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
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { createZip } from "@/lib/tools/converters/archive"
import { formatFileSize } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("file-to-zip")!

export default function FileToZipPage() {
  const [files, setFiles] = useState<File[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<Blob | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback((selectedFiles: File[]) => {
    setFiles((prev) => [...prev, ...selectedFiles])
    setResult(null)
    setError(null)
  }, [])

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleCreateZip = async () => {
    if (files.length === 0) return

    setIsProcessing(true)
    setError(null)

    try {
      const zip = await createZip(files)
      setResult(zip)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create ZIP")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setFiles([])
    setResult(null)
    setError(null)
  }

  const totalSize = files.reduce((sum, f) => sum + f.size, 0)

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
                    <CardTitle>Add Files</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FileUpload
                      maxSizeMB={100}
                      multiple
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Add Files to ZIP"
                      description="Drag and drop files, or click to browse"
                    />
                  </CardContent>
                </Card>

                {files.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Files to Compress ({files.length})</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 max-h-[300px] overflow-y-auto">
                        {files.map((file, index) => (
                          <li
                            key={`${file.name}-${index}`}
                            className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                          >
                            <div className="min-w-0">
                              <p className="text-sm truncate">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 shrink-0"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                        <span className="text-sm">Total size:</span>
                        <Badge variant="outline">{formatFileSize(totalSize)}</Badge>
                      </div>

                      <Button
                        onClick={handleCreateZip}
                        disabled={isProcessing}
                        className="w-full"
                      >
                        {isProcessing ? "Creating ZIP..." : "Create ZIP"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                <ConversionResult
                  title="ZIP Archive"
                  downloadData={result || undefined}
                  downloadFilename="archive.zip"
                  originalSize={totalSize}
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
