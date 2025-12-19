"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Check } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { convertColor, ColorFormats } from "@/lib/tools/converters/code"
import { copyToClipboard } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("color-converter")!

export default function ColorConverterPage() {
  const [input, setInput] = useState("#3b82f6")
  const [colors, setColors] = useState<ColorFormats | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    const result = convertColor(input)
    setColors(result)
  }, [input])

  const handleCopy = async (text: string, id: string) => {
    const success = await copyToClipboard(text)
    if (success) {
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
    }
  }

  const structuredData = generateToolStructuredData(tool)
  const faqData = generateToolFAQStructuredData(tool)

  const formatStrings = colors ? {
    hex: colors.hex.toUpperCase(),
    rgb: `rgb(${colors.rgb.r}, ${colors.rgb.g}, ${colors.rgb.b})`,
    hsl: `hsl(${colors.hsl.h}, ${colors.hsl.s}%, ${colors.hsl.l}%)`,
    cmyk: `cmyk(${colors.cmyk.c}%, ${colors.cmyk.m}%, ${colors.cmyk.y}%, ${colors.cmyk.k}%)`,
  } : null

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
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <ToolHeader tool={tool} />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Enter Color</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="color">Color Value</Label>
                      <Input
                        id="color"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="#3b82f6 or rgb(59, 130, 246)"
                        className="font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="picker">Pick</Label>
                      <Input
                        id="picker"
                        type="color"
                        value={colors?.hex || "#000000"}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-16 h-10 p-1"
                      />
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Enter HEX (#ff0000), RGB (rgb(255, 0, 0)), or HSL (hsl(0, 100%, 50%))
                  </p>

                  {colors && (
                    <div
                      className="h-32 rounded-lg border"
                      style={{ backgroundColor: colors.hex }}
                    />
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Color Formats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {formatStrings ? (
                    <>
                      {Object.entries(formatStrings).map(([key, value]) => (
                        <div key={key} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label className="uppercase font-bold">{key}</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopy(value, key)}
                            >
                              {copied === key ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <div className="p-3 rounded-lg bg-muted font-mono text-sm">
                            {value}
                          </div>
                        </div>
                      ))}

                      {colors && (
                        <div className="space-y-2">
                          <Label className="font-bold">RGB Values</Label>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-2 rounded bg-red-100 dark:bg-red-950">
                              <span className="text-xs text-muted-foreground">R</span>
                              <p className="font-mono font-bold">{colors.rgb.r}</p>
                            </div>
                            <div className="p-2 rounded bg-green-100 dark:bg-green-950">
                              <span className="text-xs text-muted-foreground">G</span>
                              <p className="font-mono font-bold">{colors.rgb.g}</p>
                            </div>
                            <div className="p-2 rounded bg-blue-100 dark:bg-blue-950">
                              <span className="text-xs text-muted-foreground">B</span>
                              <p className="font-mono font-bold">{colors.rgb.b}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-center text-muted-foreground py-8">
                      Enter a valid color to see conversions
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
