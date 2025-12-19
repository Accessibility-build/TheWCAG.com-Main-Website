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
import { Copy, Check, RefreshCw } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { imageToBase64 } from "@/lib/tools/converters/image"
import { copyToClipboard, formatFileSize } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("image-to-base64")!

export default function ImageToBase64Page() {
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleFileSelect = useCallback(async (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0]
      setFile(selectedFile)
      setError(null)
      setIsProcessing(true)
      
      try {
        const base64 = await imageToBase64(selectedFile)
        setResult(base64)
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to convert")
      } finally {
        setIsProcessing(false)
      }
    }
  }, [])

  const handleCopy = async (text: string) => {
    const success = await copyToClipboard(text)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleReset = () => {
    setFile(null)
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
                    <CardTitle>Upload Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FileUpload
                      accept="image/*"
                      allowedExtensions={["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg"]}
                      maxSizeMB={10}
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Upload Image"
                      description="Drag and drop an image, or click to browse"
                    />
                  </CardContent>
                </Card>

                {file && result && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Image Preview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={result}
                        alt="Uploaded image preview"
                        className="max-w-full h-auto max-h-64 mx-auto rounded-lg border"
                      />
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline">
                          {file.name}
                        </Badge>
                        <Badge variant="outline">
                          {formatFileSize(file.size)}
                        </Badge>
                      </div>
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
                        <p className="text-muted-foreground">Converting...</p>
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
                          <CardTitle>Base64 Output</CardTitle>
                          <CardDescription>
                            {formatFileSize(result.length)} (Base64 string)
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleReset}>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Reset
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Data URI (for HTML/CSS)</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleCopy(result)}
                          >
                            {copied ? (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" />
                                Copy
                              </>
                            )}
                          </Button>
                        </div>
                        <pre className="p-3 rounded-lg bg-muted text-xs overflow-x-auto max-h-32">
                          <code className="break-all">{result.slice(0, 500)}...</code>
                        </pre>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">HTML img tag</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleCopy(`<img src="${result}" alt="Image" />`)}
                          >
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <pre className="p-3 rounded-lg bg-muted text-xs overflow-x-auto">
                          <code>{`<img src="${result.slice(0, 50)}..." alt="Image" />`}</code>
                        </pre>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">CSS background</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleCopy(`background-image: url('${result}');`)}
                          >
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <pre className="p-3 rounded-lg bg-muted text-xs overflow-x-auto">
                          <code>{`background-image: url('${result.slice(0, 40)}...');`}</code>
                        </pre>
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
