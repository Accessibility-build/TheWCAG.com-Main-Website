"use client"

import { useState, useCallback } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { FileUpload } from "@/components/tools/file-upload"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Download, RefreshCw } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { getPdfPageCount } from "@/lib/tools/converters/document"
import { formatFileSize } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("pdf-compressor")!

export default function PdfCompressorPage() {
  const [file, setFile] = useState<File | null>(null)
  const [pageCount, setPageCount] = useState<number>(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback(async (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0]
      setFile(selectedFile)
      setError(null)
      
      setIsProcessing(true)
      try {
        const count = await getPdfPageCount(selectedFile)
        setPageCount(count)
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to read PDF")
      } finally {
        setIsProcessing(false)
      }
    }
  }, [])

  const handleReset = () => {
    setFile(null)
    setPageCount(0)
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
                    <CardTitle>Upload PDF</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FileUpload
                      accept=".pdf"
                      allowedExtensions={["pdf"]}
                      maxSizeMB={100}
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Upload PDF"
                      description="Drag and drop a PDF file, or click to browse"
                    />
                  </CardContent>
                </Card>

                {file && (
                  <Card>
                    <CardHeader>
                      <CardTitle>PDF Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{file.name}</Badge>
                        <Badge variant="secondary">{formatFileSize(file.size)}</Badge>
                        <Badge variant="secondary">{pageCount} pages</Badge>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
                        <div className="flex gap-3">
                          <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                          <div className="text-sm text-amber-800 dark:text-amber-200">
                            <p className="font-medium">Advanced Compression</p>
                            <p className="mt-1">
                              True PDF compression requires server-side processing to optimize images 
                              and content streams. For best results, use dedicated tools like:
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Recommended Tools</p>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <a href="https://www.ilovepdf.com/compress_pdf" target="_blank" rel="noopener noreferrer">
                              ILovePDF
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href="https://smallpdf.com/compress-pdf" target="_blank" rel="noopener noreferrer">
                              SmallPDF
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href="https://www.adobe.com/acrobat/online/compress-pdf.html" target="_blank" rel="noopener noreferrer">
                              Adobe
                            </a>
                          </Button>
                        </div>
                      </div>

                      <Button variant="outline" onClick={handleReset} className="w-full">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Upload Different PDF
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                {isProcessing && (
                  <Card>
                    <CardContent className="py-12">
                      <div className="flex flex-col items-center gap-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
                        <p className="text-muted-foreground">Reading PDF...</p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {error && (
                  <Card className="border-destructive/50">
                    <CardHeader>
                      <CardTitle className="text-destructive">Error</CardTitle>
                      <CardDescription>{error}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" onClick={handleReset}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Try Again
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {!file && !isProcessing && !error && (
                  <Card>
                    <CardContent className="py-12">
                      <div className="text-center text-muted-foreground">
                        <p>Upload a PDF to get started</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
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
