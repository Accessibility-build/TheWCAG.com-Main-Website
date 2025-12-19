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
import { ArrowUp, ArrowDown, X } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { mergePdfs } from "@/lib/tools/converters/document"
import { formatFileSize } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("pdf-merger")!

export default function PdfMergerPage() {
  const [files, setFiles] = useState<File[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<Blob | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback((selectedFiles: File[]) => {
    setFiles((prev) => [...prev, ...selectedFiles])
    setResult(null)
    setError(null)
  }, [])

  const moveFile = (index: number, direction: "up" | "down") => {
    const newFiles = [...files]
    const targetIndex = direction === "up" ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= files.length) return
    ;[newFiles[index], newFiles[targetIndex]] = [newFiles[targetIndex], newFiles[index]]
    setFiles(newFiles)
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleMerge = async () => {
    if (files.length < 2) return

    setIsProcessing(true)
    setError(null)

    try {
      const pdf = await mergePdfs(files)
      setResult(pdf)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Merge failed")
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
                    <CardTitle>Upload PDFs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FileUpload
                      accept=".pdf"
                      allowedExtensions={["pdf"]}
                      maxSizeMB={100}
                      multiple
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Add PDF Files"
                      description="Drag and drop PDF files, or click to browse"
                    />
                  </CardContent>
                </Card>

                {files.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>PDF Files ({files.length})</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Drag to reorder or use arrows. Files will be merged in this order.
                      </p>
                      
                      <ul className="space-y-2">
                        {files.map((file, index) => (
                          <li
                            key={`${file.name}-${index}`}
                            className="flex items-center gap-2 p-3 rounded-lg border bg-muted/30"
                          >
                            <span className="font-mono text-sm text-muted-foreground w-6">
                              {index + 1}.
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm truncate">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                            <div className="flex gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => moveFile(index, "up")}
                                disabled={index === 0}
                              >
                                <ArrowUp className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => moveFile(index, "down")}
                                disabled={index === files.length - 1}
                              >
                                <ArrowDown className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => removeFile(index)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="text-sm">Total size:</span>
                        <Badge variant="outline">{formatFileSize(totalSize)}</Badge>
                      </div>

                      <Button
                        onClick={handleMerge}
                        disabled={isProcessing || files.length < 2}
                        className="w-full"
                      >
                        {isProcessing ? "Merging..." : `Merge ${files.length} PDFs`}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                <ConversionResult
                  title="Merged PDF"
                  downloadData={result || undefined}
                  downloadFilename="merged.pdf"
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
