"use client"

import { useState } from "react"
import { Download, Copy, Check, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatFileSize, copyToClipboard, downloadFile } from "@/lib/tools/utils"

interface ConversionResultProps {
  title?: string
  description?: string
  // For file downloads
  downloadData?: Blob | string
  downloadFilename?: string
  downloadMimeType?: string
  // For text/code results
  textResult?: string
  // For image previews
  imagePreview?: string
  // File size info
  originalSize?: number
  resultSize?: number
  // Actions
  onReset?: () => void
  // Custom preview content
  children?: React.ReactNode
  // State
  isLoading?: boolean
  error?: string
  className?: string
}

export function ConversionResult({
  title = "Conversion Result",
  description,
  downloadData,
  downloadFilename,
  downloadMimeType,
  textResult,
  imagePreview,
  originalSize,
  resultSize,
  onReset,
  children,
  isLoading = false,
  error,
  className = "",
}: ConversionResultProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!textResult) return
    const success = await copyToClipboard(textResult)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    if (!downloadData || !downloadFilename) return
    downloadFile(downloadData, downloadFilename, downloadMimeType)
  }

  const compressionRatio =
    originalSize && resultSize ? Math.round((1 - resultSize / originalSize) * 100) : null

  if (error) {
    return (
      <Card className={`border-destructive/50 ${className}`}>
        <CardHeader>
          <CardTitle className="text-destructive">Error</CardTitle>
          <CardDescription>{error}</CardDescription>
        </CardHeader>
        {onReset && (
          <CardContent>
            <Button variant="outline" onClick={onReset}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </CardContent>
        )}
      </Card>
    )
  }

  if (isLoading) {
    return (
      <Card className={className}>
        <CardContent className="py-8 sm:py-12">
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-4 border-primary border-t-transparent" />
            <p className="text-sm sm:text-base text-muted-foreground">Processing...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const hasResult = downloadData || textResult || imagePreview || children

  if (!hasResult) {
    return null
  }

  return (
    <Card className={className}>
      <CardHeader className="px-4 sm:px-6">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
            {description && <CardDescription className="text-xs sm:text-sm">{description}</CardDescription>}
          </div>
          {onReset && (
            <Button variant="ghost" size="sm" onClick={onReset} className="shrink-0 h-8 px-2 sm:px-3">
              <RefreshCw className="h-4 w-4 sm:mr-2" aria-hidden="true" />
              <span className="hidden sm:inline">Reset</span>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
        {/* Size comparison */}
        {(originalSize || resultSize) && (
          <div className="flex flex-wrap gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/50">
            {originalSize && (
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Original</p>
                <p className="font-medium text-sm sm:text-base">{formatFileSize(originalSize)}</p>
              </div>
            )}
            {resultSize && (
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Result</p>
                <p className="font-medium text-sm sm:text-base">{formatFileSize(resultSize)}</p>
              </div>
            )}
            {compressionRatio !== null && compressionRatio > 0 && (
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Saved</p>
                <p className="font-medium text-sm sm:text-base text-green-600 dark:text-green-400">{compressionRatio}%</p>
              </div>
            )}
          </div>
        )}

        {/* Image preview - using CSS checkerboard pattern instead of image */}
        {imagePreview && (
          <div 
            className="relative border rounded-lg overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
                linear-gradient(-45deg, #f0f0f0 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
                linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
              `,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
            }}
          >
            <img
              src={imagePreview}
              alt="Conversion result preview"
              className="max-w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 mx-auto block"
            />
          </div>
        )}

        {/* Text result */}
        {textResult && (
          <div className="relative">
            <pre className="p-3 sm:p-4 rounded-lg bg-muted overflow-x-auto text-xs sm:text-sm max-h-64 sm:max-h-96">
              <code className="break-all sm:break-normal">{textResult}</code>
            </pre>
            <Button
              variant="outline"
              size="sm"
              className="absolute top-2 right-2 h-7 sm:h-8 px-2 text-xs sm:text-sm"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-1" aria-hidden="true" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1" aria-hidden="true" />
                  Copy
                </>
              )}
            </Button>
          </div>
        )}

        {/* Custom content */}
        {children}

        {/* Download button */}
        {downloadData && downloadFilename && (
          <div className="flex gap-2">
            <Button onClick={handleDownload} className="flex-1 min-h-[44px] text-sm sm:text-base">
              <Download className="h-4 w-4 mr-2" aria-hidden="true" />
              <span className="truncate">Download {downloadFilename}</span>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
