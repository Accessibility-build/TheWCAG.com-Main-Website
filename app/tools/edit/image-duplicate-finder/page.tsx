"use client"

import { useState, useCallback, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { FileUpload } from "@/components/tools/file-upload"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { getToolBySlug } from "@/lib/tools/constants"
import { findDuplicates, DuplicateFindOptions } from "@/lib/tools/converters/image"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("image-duplicate-finder")!

export default function ImageDuplicateFinderPage() {
  const [files, setFiles] = useState<File[]>([])
  const [threshold, setThreshold] = useState(0.9)
  const [isProcessing, setIsProcessing] = useState(false)
  const [duplicates, setDuplicates] = useState<Array<{ file1: File; file2: File; similarity: number }>>([])
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback((selectedFiles: File[]) => {
    setFiles(selectedFiles)
    setDuplicates([])
    setError(null)
  }, [])

  const handleFindDuplicates = async () => {
    if (files.length < 2) {
      setError("Please upload at least 2 images")
      return
    }

    setIsProcessing(true)
    setError(null)

    try {
      const options: DuplicateFindOptions = { threshold }
      const results = await findDuplicates(files, options)
      setDuplicates(results)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Duplicate finding failed")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setFiles([])
    setDuplicates([])
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
                      allowedExtensions={["jpg", "jpeg", "png", "webp"]}
                      maxSizeMB={50}
                      multiple
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Upload Images"
                      description="Drag and drop multiple images, or click to browse"
                    />
                  </CardContent>
                </Card>

                {files.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Find Duplicates</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {files.length} image{files.length !== 1 ? "s" : ""} uploaded
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="threshold">Similarity Threshold: {Math.round(threshold * 100)}%</Label>
                        <input
                          type="range"
                          id="threshold"
                          min="0.5"
                          max="1"
                          step="0.05"
                          value={threshold}
                          onChange={(e) => setThreshold(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <Button
                        onClick={handleFindDuplicates}
                        disabled={isProcessing || files.length < 2}
                        className="w-full"
                      >
                        {isProcessing ? "Finding Duplicates..." : "Find Duplicates"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                {duplicates.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Found {duplicates.length} Duplicate Pair{duplicates.length !== 1 ? "s" : ""}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {duplicates.map((dup, idx) => (
                        <div key={idx} className="p-3 rounded-lg border">
                          <p className="text-sm font-medium">{dup.file1.name} ↔ {dup.file2.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Similarity: {Math.round(dup.similarity * 100)}%
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
                {error && (
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-sm text-destructive">{error}</p>
                    </CardContent>
                  </Card>
                )}
                {files.length > 0 && duplicates.length === 0 && !isProcessing && (
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground">
                        No duplicates found. Click "Find Duplicates" to analyze.
                      </p>
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
