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
import { Input } from "@/components/ui/input"
import { getToolBySlug } from "@/lib/tools/constants"
import { editPDF, PDFEdit } from "@/lib/tools/converters/document"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("pdf-editor")!

export default function PDFEditorPage() {
  const [file, setFile] = useState<File | null>(null)
  const [text, setText] = useState("")
  const [x, setX] = useState(50)
  const [y, setY] = useState(50)
  const [page, setPage] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<Blob | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0])
      setResult(null)
      setError(null)
    }
  }, [])

  const handleAddText = async () => {
    if (!file || !text.trim()) {
      setError("Please enter text to add")
      return
    }

    setIsProcessing(true)
    setError(null)

    try {
      const edits: PDFEdit[] = [{
        type: "text",
        page,
        x,
        y,
        content: text,
        fontSize: 12,
      }]
      const blob = await editPDF(file, edits)
      setResult(blob)
    } catch (e) {
      setError(e instanceof Error ? e.message : "PDF editing failed")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setFile(null)
    setText("")
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
                      accept="application/pdf"
                      allowedExtensions={["pdf"]}
                      maxSizeMB={50}
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Upload PDF"
                      description="Drag and drop a PDF, or click to browse"
                    />
                  </CardContent>
                </Card>

                {file && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Add Text</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="text">Text to Add</Label>
                        <Input
                          id="text"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          placeholder="Enter text"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="page">Page</Label>
                          <Input
                            id="page"
                            type="number"
                            min="1"
                            value={page}
                            onChange={(e) => setPage(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="x">X Position</Label>
                          <Input
                            id="x"
                            type="number"
                            value={x}
                            onChange={(e) => setX(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="y">Y Position</Label>
                          <Input
                            id="y"
                            type="number"
                            value={y}
                            onChange={(e) => setY(Number(e.target.value))}
                          />
                        </div>
                      </div>
                      <Button
                        onClick={handleAddText}
                        disabled={isProcessing || !text.trim()}
                        className="w-full"
                      >
                        {isProcessing ? "Adding Text..." : "Add Text to PDF"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                <ConversionResult
                  title="Edited PDF"
                  downloadData={result || undefined}
                  downloadFilename={file ? `${file.name.split(".")[0]}-edited.pdf` : undefined}
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
