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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Download, RefreshCw } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { getPdfPageCount, extractPdfPages } from "@/lib/tools/converters/document"
import { downloadFile, formatFileSize } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("pdf-splitter")!

export default function PdfSplitterPage() {
  const [file, setFile] = useState<File | null>(null)
  const [pageCount, setPageCount] = useState<number>(0)
  const [pageRange, setPageRange] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<Blob | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback(async (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0]
      setFile(selectedFile)
      setResult(null)
      setError(null)
      setPageRange("")
      
      try {
        const count = await getPdfPageCount(selectedFile)
        setPageCount(count)
        setPageRange(`1-${count}`)
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to read PDF")
      }
    }
  }, [])

  const parsePageRange = (range: string): number[] => {
    const pages: number[] = []
    const parts = range.split(",").map((p) => p.trim())
    
    for (const part of parts) {
      if (part.includes("-")) {
        const [start, end] = part.split("-").map((n) => parseInt(n.trim()))
        if (!isNaN(start) && !isNaN(end)) {
          for (let i = start; i <= end; i++) {
            if (i >= 1 && i <= pageCount && !pages.includes(i)) {
              pages.push(i)
            }
          }
        }
      } else {
        const num = parseInt(part)
        if (!isNaN(num) && num >= 1 && num <= pageCount && !pages.includes(num)) {
          pages.push(num)
        }
      }
    }
    
    return pages.sort((a, b) => a - b)
  }

  const handleExtract = async () => {
    if (!file || !pageRange) return

    const pages = parsePageRange(pageRange)
    if (pages.length === 0) {
      setError("Please enter valid page numbers")
      return
    }

    setIsProcessing(true)
    setError(null)

    try {
      const pdf = await extractPdfPages(file, pages)
      setResult(pdf)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Extraction failed")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDownload = () => {
    if (result && file) {
      downloadFile(result, `${file.name.replace(".pdf", "")}-extracted.pdf`, "application/pdf")
    }
  }

  const handleReset = () => {
    setFile(null)
    setPageCount(0)
    setPageRange("")
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

                {file && pageCount > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Extract Pages</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{file.name}</Badge>
                        <Badge variant="secondary">{pageCount} pages</Badge>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="pageRange">Page Range</Label>
                        <Input
                          id="pageRange"
                          value={pageRange}
                          onChange={(e) => setPageRange(e.target.value)}
                          placeholder="e.g., 1-3, 5, 7-10"
                        />
                        <p className="text-xs text-muted-foreground">
                          Enter pages separated by commas. Use ranges like 1-5.
                          Available pages: 1-{pageCount}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setPageRange(`1-${pageCount}`)}
                        >
                          All Pages
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setPageRange("1")}
                        >
                          First Page
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setPageRange(pageCount.toString())}
                        >
                          Last Page
                        </Button>
                        {pageCount > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPageRange(`1-${Math.ceil(pageCount / 2)}`)}
                          >
                            First Half
                          </Button>
                        )}
                      </div>

                      <Button
                        onClick={handleExtract}
                        disabled={isProcessing || !pageRange}
                        className="w-full"
                      >
                        {isProcessing ? "Extracting..." : "Extract Pages"}
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
                        <p className="text-muted-foreground">Extracting pages...</p>
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

                {result && !isProcessing && !error && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Extracted PDF</CardTitle>
                          <CardDescription>
                            {formatFileSize(result.size)}
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleReset}>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Reset
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button onClick={handleDownload} className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
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
