"use client"

import { useState, useCallback, useEffect } from "react"
import { X, ZoomIn, ZoomOut, Download, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface Screenshot {
  data: string
  width: number
  height: number
}

interface ScreenshotViewerProps {
  screenshot: Screenshot
  elementSelector?: string
  violationName?: string
}

export function ScreenshotViewer({ screenshot, elementSelector, violationName }: ScreenshotViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(1)

  const handleZoomIn = useCallback(() => {
    setZoom(prev => Math.min(prev + 0.25, 3))
  }, [])

  const handleZoomOut = useCallback(() => {
    setZoom(prev => Math.max(prev - 0.25, 0.5))
  }, [])

  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = screenshot.data
    link.download = `violation-screenshot-${Date.now()}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [screenshot.data])

  // Reset zoom when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setZoom(1)
    }
  }, [isOpen])

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case '+':
        case '=':
          e.preventDefault()
          handleZoomIn()
          break
        case '-':
          e.preventDefault()
          handleZoomOut()
          break
        case '0':
          e.preventDefault()
          setZoom(1)
          break
        case 's':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault()
            handleDownload()
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleZoomIn, handleZoomOut, handleDownload])

  return (
    <>
      {/* Thumbnail */}
      <button
        onClick={() => setIsOpen(true)}
        className="group relative block w-full overflow-hidden rounded-lg border border-border bg-muted hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label={`View screenshot of ${violationName || 'violation'} element`}
      >
        <div className="aspect-video relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screenshot.data}
            alt={`Screenshot of element: ${elementSelector || 'Unknown element'}`}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <Maximize2 className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
          {screenshot.width} × {screenshot.height}
        </div>
      </button>

      {/* Lightbox Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] flex flex-col p-0">
          <DialogHeader className="px-6 py-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-lg font-semibold">
                  {violationName || 'Element Screenshot'}
                </DialogTitle>
                {elementSelector && (
                  <DialogDescription className="text-sm text-muted-foreground font-mono truncate max-w-[400px]">
                    {elementSelector}
                  </DialogDescription>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  aria-label="Zoom out"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground w-14 text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleZoomIn}
                  disabled={zoom >= 3}
                  aria-label="Zoom in"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleDownload}
                  aria-label="Download screenshot"
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogHeader>

          {/* Image container with scroll */}
          <div className="flex-1 overflow-auto p-4 bg-muted/50 flex items-center justify-center">
            <div
              className="relative transition-transform duration-200"
              style={{ transform: `scale(${zoom})` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screenshot.data}
                alt={`Screenshot of element: ${elementSelector || 'Unknown element'}`}
                className="max-w-full max-h-[70vh] object-contain rounded shadow-lg"
              />
            </div>
          </div>

          {/* Footer with keyboard hints */}
          <div className="px-6 py-3 border-t bg-muted/30 text-xs text-muted-foreground">
            <span className="hidden sm:inline">
              Keyboard shortcuts: <kbd className="px-1.5 py-0.5 bg-muted rounded border text-xs">+</kbd> zoom in,{' '}
              <kbd className="px-1.5 py-0.5 bg-muted rounded border text-xs">-</kbd> zoom out,{' '}
              <kbd className="px-1.5 py-0.5 bg-muted rounded border text-xs">0</kbd> reset,{' '}
              <kbd className="px-1.5 py-0.5 bg-muted rounded border text-xs">Ctrl+S</kbd> download
            </span>
            <span className="sm:hidden">Pinch to zoom</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

// Simple thumbnail version without lightbox
interface ScreenshotThumbnailProps {
  screenshot: Screenshot
  elementSelector?: string
  onClick?: () => void
}

export function ScreenshotThumbnail({ screenshot, elementSelector, onClick }: ScreenshotThumbnailProps) {
  return (
    <button
      onClick={onClick}
      className="relative block w-20 h-16 overflow-hidden rounded border border-border bg-muted hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label={`View screenshot of element`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={screenshot.data}
        alt={`Screenshot of: ${elementSelector || 'element'}`}
        className="w-full h-full object-cover"
      />
    </button>
  )
}

// Placeholder for when screenshot is not available
export function ScreenshotPlaceholder() {
  return (
    <div className="w-full aspect-video rounded-lg border border-dashed border-border bg-muted/50 flex items-center justify-center">
      <div className="text-center text-muted-foreground text-sm">
        <Maximize2 className="h-6 w-6 mx-auto mb-2 opacity-50" />
        <p>No screenshot available</p>
      </div>
    </div>
  )
}

