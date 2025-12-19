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
import { Download, Package, RefreshCw } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { generateFavicons } from "@/lib/tools/converters/image"
import { createZip } from "@/lib/tools/converters/archive"
import { downloadFile } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("favicon-generator")!

const faviconSizes = [16, 32, 48, 64, 128, 180, 192, 512]

export default function FaviconGeneratorPage() {
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [favicons, setFavicons] = useState<Map<number, Blob> | null>(null)
  const [faviconUrls, setFaviconUrls] = useState<Map<number, string>>(new Map())
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = useCallback(async (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0]
      setFile(selectedFile)
      setImageUrl(URL.createObjectURL(selectedFile))
      setFavicons(null)
      setFaviconUrls(new Map())
      setError(null)
      
      setIsProcessing(true)
      try {
        const generated = await generateFavicons(selectedFile)
        setFavicons(generated)
        
        const urls = new Map<number, string>()
        generated.forEach((blob, size) => {
          urls.set(size, URL.createObjectURL(blob))
        })
        setFaviconUrls(urls)
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to generate favicons")
      } finally {
        setIsProcessing(false)
      }
    }
  }, [])

  const handleDownloadSingle = (size: number) => {
    const blob = favicons?.get(size)
    if (blob) {
      downloadFile(blob, `favicon-${size}x${size}.png`, "image/png")
    }
  }

  const handleDownloadAll = async () => {
    if (!favicons) return
    
    setIsProcessing(true)
    try {
      const files: File[] = []
      
      favicons.forEach((blob, size) => {
        files.push(new File([blob], `favicon-${size}x${size}.png`, { type: "image/png" }))
      })
      
      // Create manifest
      const manifest = {
        name: "Your App",
        short_name: "App",
        icons: faviconSizes.map(size => ({
          src: `/favicon-${size}x${size}.png`,
          sizes: `${size}x${size}`,
          type: "image/png"
        })),
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone"
      }
      
      files.push(new File(
        [JSON.stringify(manifest, null, 2)],
        "site.webmanifest",
        { type: "application/json" }
      ))
      
      // Create HTML snippet
      const htmlSnippet = `<!-- Favicon HTML -->
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png">
<link rel="manifest" href="/site.webmanifest">
`
      files.push(new File([htmlSnippet], "favicon-html.txt", { type: "text/plain" }))
      
      const zip = await createZip(files)
      downloadFile(zip, "favicons.zip", "application/zip")
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create ZIP")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReset = () => {
    setFile(null)
    setImageUrl(null)
    setFavicons(null)
    faviconUrls.forEach(url => URL.revokeObjectURL(url))
    setFaviconUrls(new Map())
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
                    <CardDescription>
                      Upload a square image (at least 512x512 recommended) for best results.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FileUpload
                      accept="image/*"
                      allowedExtensions={["jpg", "jpeg", "png", "gif", "webp", "svg"]}
                      maxSizeMB={10}
                      onFileSelect={handleFileSelect}
                      onError={setError}
                      label="Upload Image"
                      description="Drag and drop an image, or click to browse"
                    />
                  </CardContent>
                </Card>

                {imageUrl && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Original Image</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={imageUrl}
                        alt="Source image"
                        className="max-w-[200px] h-auto mx-auto rounded-lg border"
                      />
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
                        <p className="text-muted-foreground">Generating favicons...</p>
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

                {favicons && favicons.size > 0 && !isProcessing && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Generated Favicons</CardTitle>
                          <CardDescription>
                            {favicons.size} sizes generated
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleReset}>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Reset
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button onClick={handleDownloadAll} className="w-full">
                        <Package className="h-4 w-4 mr-2" />
                        Download All (ZIP)
                      </Button>

                      <div className="grid grid-cols-4 gap-3">
                        {faviconSizes.map((size) => {
                          const url = faviconUrls.get(size)
                          if (!url) return null
                          return (
                            <div
                              key={size}
                              className="flex flex-col items-center gap-2 p-2 rounded-lg border bg-muted/30"
                            >
                              <div 
                                className="bg-[url('/images/checkerboard.png')] bg-repeat rounded"
                                style={{ width: Math.min(size, 64), height: Math.min(size, 64) }}
                              >
                                <img
                                  src={url}
                                  alt={`${size}x${size} favicon`}
                                  width={Math.min(size, 64)}
                                  height={Math.min(size, 64)}
                                  className="rounded"
                                />
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {size}×{size}
                              </Badge>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => handleDownloadSingle(size)}
                              >
                                <Download className="h-3 w-3" />
                              </Button>
                            </div>
                          )
                        })}
                      </div>

                      <div className="p-3 rounded-lg bg-muted text-sm">
                        <p className="font-medium mb-2">Included in ZIP:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>All favicon PNG files</li>
                          <li>site.webmanifest file</li>
                          <li>HTML snippet for &lt;head&gt;</li>
                        </ul>
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
