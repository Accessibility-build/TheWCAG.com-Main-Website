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
import { Download, Folder, File, RefreshCw } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { extractZip, ZipEntry } from "@/lib/tools/converters/archive"
import { formatFileSize, downloadFile } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("zip-extractor")!

export default function ZipExtractorPage() {
  const [file, setFile] = useState<File | null>(null)
  const [entries, setEntries] = useState<ZipEntry[]>([])
  const [getFileContent, setGetFileContent] = useState<((path: string) => Promise<Blob>) | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback(async (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0]
      setFile(selectedFile)
      setError(null)
      
      setIsProcessing(true)
      try {
        const result = await extractZip(selectedFile)
        setEntries(result.entries)
        setGetFileContent(() => result.getFileContent)
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to read ZIP")
      } finally {
        setIsProcessing(false)
      }
    }
  }, [])

  const handleDownloadFile = async (entry: ZipEntry) => {
    if (!getFileContent) return
    try {
      const blob = await getFileContent(entry.path)
      downloadFile(blob, entry.name)
    } catch (e) {
      setError("Failed to extract file")
    }
  }

  const handleReset = () => {
    setFile(null)
    setEntries([])
    setGetFileContent(null)
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
                    <CardTitle>Upload ZIP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FileUpload
                      accept=".zip"
                      allowedExtensions={["zip"]}
                      maxSizeMB={100}
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Upload ZIP File"
                      description="Drag and drop a ZIP file, or click to browse"
                    />
                  </CardContent>
                </Card>

                {file && (
                  <Card>
                    <CardHeader>
                      <CardTitle>ZIP Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{file.name}</Badge>
                        <Badge variant="secondary">{formatFileSize(file.size)}</Badge>
                        <Badge variant="secondary">{entries.length} items</Badge>
                      </div>
                      <Button variant="outline" onClick={handleReset} className="w-full mt-4">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Upload Different File
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  {isProcessing && (
                    <div className="flex items-center justify-center py-12">
                      <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent" />
                    </div>
                  )}

                  {error && (
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                      {error}
                    </div>
                  )}

                  {!isProcessing && entries.length > 0 && (
                    <ul className="space-y-2 max-h-[500px] overflow-y-auto">
                      {entries.map((entry, index) => (
                        <li
                          key={`${entry.path}-${index}`}
                          className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            {entry.isDirectory ? (
                              <Folder className="h-4 w-4 text-yellow-500 shrink-0" />
                            ) : (
                              <File className="h-4 w-4 text-blue-500 shrink-0" />
                            )}
                            <span className="text-sm truncate">{entry.path}</span>
                          </div>
                          {!entry.isDirectory && (
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-xs text-muted-foreground">
                                {formatFileSize(entry.size)}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleDownloadFile(entry)}
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {!isProcessing && entries.length === 0 && !error && (
                    <p className="text-center text-muted-foreground py-12">
                      Upload a ZIP file to see its contents
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            <ToolFooter tool={tool} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
