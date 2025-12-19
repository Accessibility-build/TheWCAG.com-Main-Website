"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Copy, Check, RefreshCw, Trash2 } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { generateUuid, generateMultipleUuids } from "@/lib/tools/converters/utility"
import { copyToClipboard } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("uuid-generator")!

export default function UuidGeneratorPage() {
  const [uuids, setUuids] = useState<string[]>([generateUuid()])
  const [count, setCount] = useState(1)
  const [copiedUuid, setCopiedUuid] = useState<string | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)

  const handleGenerate = () => {
    setUuids(generateMultipleUuids(count))
  }

  const handleGenerateOne = () => {
    setUuids([...uuids, generateUuid()])
  }

  const handleCopy = async (uuid: string) => {
    const success = await copyToClipboard(uuid)
    if (success) {
      setCopiedUuid(uuid)
      setTimeout(() => setCopiedUuid(null), 2000)
    }
  }

  const handleCopyAll = async () => {
    const success = await copyToClipboard(uuids.join("\n"))
    if (success) {
      setCopiedAll(true)
      setTimeout(() => setCopiedAll(false), 2000)
    }
  }

  const handleClear = () => {
    setUuids([])
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
              <Card>
                <CardHeader>
                  <CardTitle>Generate UUIDs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="count">Number of UUIDs</Label>
                    <div className="flex gap-2">
                      <Input
                        id="count"
                        type="number"
                        min="1"
                        max="100"
                        value={count}
                        onChange={(e) => setCount(Math.min(100, Math.max(1, Number(e.target.value))))}
                        className="w-24"
                      />
                      <Button onClick={handleGenerate} className="flex-1">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Generate {count > 1 ? `${count} UUIDs` : "UUID"}
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleGenerateOne} variant="outline" className="flex-1">
                      Add One More
                    </Button>
                    <Button onClick={handleClear} variant="outline">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="p-3 rounded-lg bg-muted/50 text-sm">
                    <p className="font-medium">UUID v4 (Random)</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Universally Unique Identifiers generated using cryptographically secure random numbers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Generated UUIDs ({uuids.length})</CardTitle>
                    {uuids.length > 0 && (
                      <Button variant="outline" size="sm" onClick={handleCopyAll}>
                        {copiedAll ? (
                          <>
                            <Check className="h-4 w-4 mr-1" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy All
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-[400px] overflow-y-auto">
                    {uuids.map((uuid, index) => (
                      <div
                        key={`${uuid}-${index}`}
                        className="flex items-center gap-2 p-2 rounded-lg bg-muted"
                      >
                        <code className="flex-1 text-sm font-mono truncate">{uuid}</code>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 shrink-0"
                          onClick={() => handleCopy(uuid)}
                        >
                          {copiedUuid === uuid ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    ))}
                    {uuids.length === 0 && (
                      <p className="text-center text-muted-foreground py-8">
                        Click Generate to create UUIDs
                      </p>
                    )}
                  </div>
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
