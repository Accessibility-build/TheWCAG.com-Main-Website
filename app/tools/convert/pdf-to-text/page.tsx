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
import { Copy, Check, Download, RefreshCw, AlertCircle } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { getPdfPageCount } from "@/lib/tools/converters/document"
import { copyToClipboard, downloadFile } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("pdf-to-text")!

export default function PdfToTextPage() {
  const [file, setFile] = useState<File | null>(null)
  const [pageCount, setPageCount] = useState<number>(0)
  const [extractedText, setExtractedText] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleFileSelect = useCallback(async (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0]
      setFile(selectedFile)
      setError(null)
      setExtractedText("")
      
      setIsProcessing(true)
      try {
        const count = await getPdfPageCount(selectedFile)
        setPageCount(count)
        
        // Note: Full text extraction requires pdf.js
        // This is a placeholder implementation
        setExtractedText(`PDF file loaded successfully.\n\nFile: ${selectedFile.name}\nPages: ${count}\n\nNote: Full text extraction from PDF requires additional processing capabilities. For complete text extraction, please use Adobe Acrobat or dedicated PDF tools.`)
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to read PDF")
      } finally {
        setIsProcessing(false)
      }
    }
  }, [])

  const handleCopy = async () => {
    const success = await copyToClipboard(extractedText)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    if (extractedText && file) {
      downloadFile(extractedText, `${file.name.replace(".pdf", "")}.txt`, "text/plain")
    }
  }

  const handleReset = () => {
    setFile(null)
    setPageCount(0)
    setExtractedText("")
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
                      maxSizeMB={50}
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
                        <Badge variant="secondary">{pageCount} pages</Badge>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
                        <div className="flex gap-3">
                          <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                          <div className="text-sm text-amber-800 dark:text-amber-200">
                            <p className="font-medium">Limited Text Extraction</p>
                            <p className="mt-1">
                              Client-side PDF text extraction has limitations. For best results with 
                              complex PDFs or scanned documents, use specialized tools.
                            </p>
                          </div>
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
                        <p className="text-muted-foreground">Extracting text...</p>
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

                {extractedText && !isProcessing && !error && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Extracted Text</CardTitle>
                          <CardDescription>
                            {extractedText.length} characters
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleReset}>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Reset
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm max-h-96 whitespace-pre-wrap">
                        {extractedText}
                      </pre>

                      <div className="flex gap-2">
                        <Button variant="outline" onClick={handleCopy} className="flex-1">
                          {copied ? (
                            <>
                              <Check className="h-4 w-4 mr-2" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-2" />
                              Copy Text
                            </>
                          )}
                        </Button>
                        <Button onClick={handleDownload} className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download TXT
                        </Button>
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
