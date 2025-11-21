"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react"

function getLuminance(hex: string): number {
  // Remove # if present
  hex = hex.replace("#", "")

  // Convert to RGB
  const r = Number.parseInt(hex.substring(0, 2), 16) / 255
  const g = Number.parseInt(hex.substring(2, 4), 16) / 255
  const b = Number.parseInt(hex.substring(4, 6), 16) / 255

  // Apply gamma correction
  const rs = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)
  const gs = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)
  const bs = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)

  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)

  return (lighter + 0.05) / (darker + 0.05)
}

export default function ContrastCheckerPage() {
  const [foreground, setForeground] = useState("#000000")
  const [background, setBackground] = useState("#FFFFFF")
  const [contrastRatio, setContrastRatio] = useState(21)

  useEffect(() => {
    const ratio = getContrastRatio(foreground, background)
    setContrastRatio(ratio)
  }, [foreground, background])

  const normalTextAA = contrastRatio >= 4.5
  const normalTextAAA = contrastRatio >= 7
  const largeTextAA = contrastRatio >= 3
  const largeTextAAA = contrastRatio >= 4.5
  const uiComponentsAA = contrastRatio >= 3

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-5xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/tools" className="hover:text-foreground">
                    Tools
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground font-medium">Contrast Checker</li>
              </ol>
            </nav>

            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Color Contrast Checker</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Test color combinations to ensure they meet WCAG contrast requirements
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Input Controls */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Color Selection</CardTitle>
                    <CardDescription>Choose foreground and background colors to test</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="foreground">Foreground (Text) Color</Label>
                      <div className="flex gap-3">
                        <Input
                          id="foreground"
                          type="color"
                          value={foreground}
                          onChange={(e) => setForeground(e.target.value)}
                          className="w-20 h-12 p-1"
                        />
                        <Input
                          type="text"
                          value={foreground}
                          onChange={(e) => setForeground(e.target.value)}
                          className="flex-1 font-mono"
                          placeholder="#000000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="background">Background Color</Label>
                      <div className="flex gap-3">
                        <Input
                          id="background"
                          type="color"
                          value={background}
                          onChange={(e) => setBackground(e.target.value)}
                          className="w-20 h-12 p-1"
                        />
                        <Input
                          type="text"
                          value={background}
                          onChange={(e) => setBackground(e.target.value)}
                          className="flex-1 font-mono"
                          placeholder="#FFFFFF"
                        />
                      </div>
                    </div>

                    {/* Quick presets */}
                    <div className="space-y-2">
                      <Label>Quick Presets</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            setForeground("#000000")
                            setBackground("#FFFFFF")
                          }}
                          className="px-3 py-2 text-sm border rounded hover:bg-muted transition-colors"
                        >
                          Black on White
                        </button>
                        <button
                          onClick={() => {
                            setForeground("#FFFFFF")
                            setBackground("#000000")
                          }}
                          className="px-3 py-2 text-sm border rounded hover:bg-muted transition-colors"
                        >
                          White on Black
                        </button>
                        <button
                          onClick={() => {
                            setForeground("#D97706")
                            setBackground("#FFFDF9")
                          }}
                          className="px-3 py-2 text-sm border rounded hover:bg-muted transition-colors"
                        >
                          Orange on Cream
                        </button>
                        <button
                          onClick={() => {
                            setForeground("#6B5B4F")
                            setBackground("#F5F0E6")
                          }}
                          className="px-3 py-2 text-sm border rounded hover:bg-muted transition-colors"
                        >
                          Brown on Beige
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Contrast Ratio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <div className="text-6xl font-bold mb-2">{contrastRatio.toFixed(2)}:1</div>
                      <p className="text-muted-foreground">
                        {contrastRatio >= 7
                          ? "Excellent contrast"
                          : contrastRatio >= 4.5
                            ? "Good contrast"
                            : contrastRatio >= 3
                              ? "Acceptable for large text"
                              : "Poor contrast"}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>WCAG Compliance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <p className="font-medium">Normal Text (AA)</p>
                        <p className="text-sm text-muted-foreground">4.5:1 minimum</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {normalTextAA ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive" aria-hidden="true" />
                        )}
                        <Badge variant={normalTextAA ? "default" : "destructive"}>
                          {normalTextAA ? "Pass" : "Fail"}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <p className="font-medium">Normal Text (AAA)</p>
                        <p className="text-sm text-muted-foreground">7:1 minimum</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {normalTextAAA ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive" aria-hidden="true" />
                        )}
                        <Badge variant={normalTextAAA ? "default" : "destructive"}>
                          {normalTextAAA ? "Pass" : "Fail"}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <p className="font-medium">Large Text (AA)</p>
                        <p className="text-sm text-muted-foreground">3:1 minimum (18pt+)</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {largeTextAA ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive" aria-hidden="true" />
                        )}
                        <Badge variant={largeTextAA ? "default" : "destructive"}>{largeTextAA ? "Pass" : "Fail"}</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <p className="font-medium">UI Components (AA)</p>
                        <p className="text-sm text-muted-foreground">3:1 minimum</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {uiComponentsAA ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive" aria-hidden="true" />
                        )}
                        <Badge variant={uiComponentsAA ? "default" : "destructive"}>
                          {uiComponentsAA ? "Pass" : "Fail"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>See how your colors look in practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-8 rounded-lg" style={{ backgroundColor: background, color: foreground }}>
                  <h2 className="text-2xl font-bold mb-4">Normal Text Example</h2>
                  <p className="mb-4 leading-relaxed">
                    This is how normal body text will appear with your selected color combination. The quick brown fox
                    jumps over the lazy dog. 0123456789.
                  </p>
                  <p className="text-3xl font-bold mb-4">Large Text Example</p>
                  <button
                    className="px-4 py-2 border-2 rounded"
                    style={{ borderColor: foreground, color: foreground, backgroundColor: "transparent" }}
                  >
                    Button Example
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Related Criteria */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
              <div className="grid sm:grid-cols-3 gap-3">
                <Link
                  href="/criteria/1-4-3"
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted transition-colors"
                >
                  <div>
                    <p className="font-medium text-sm">1.4.3 Contrast (Minimum)</p>
                    <p className="text-xs text-muted-foreground mt-1">Level AA</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </Link>
                <Link
                  href="/criteria/1-4-6"
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted transition-colors"
                >
                  <div>
                    <p className="font-medium text-sm">1.4.6 Contrast (Enhanced)</p>
                    <p className="text-xs text-muted-foreground mt-1">Level AAA</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </Link>
                <Link
                  href="/criteria/1-4-11"
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted transition-colors"
                >
                  <div>
                    <p className="font-medium text-sm">1.4.11 Non-text Contrast</p>
                    <p className="text-xs text-muted-foreground mt-1">Level AA</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
