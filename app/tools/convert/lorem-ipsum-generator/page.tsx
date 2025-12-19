"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Copy, Check, RefreshCw } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { generateLoremIpsum } from "@/lib/tools/converters/utility"
import { copyToClipboard } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("lorem-ipsum-generator")!

type TextType = "words" | "sentences" | "paragraphs"

export default function LoremIpsumGeneratorPage() {
  const [textType, setTextType] = useState<TextType>("paragraphs")
  const [count, setCount] = useState(3)
  const [output, setOutput] = useState("")
  const [copied, setCopied] = useState(false)

  const generate = () => {
    const text = generateLoremIpsum(textType, count)
    setOutput(text)
  }

  useEffect(() => {
    generate()
  }, [])

  const handleCopy = async () => {
    const success = await copyToClipboard(output)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
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

            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Generate</Label>
                    <div className="flex flex-col gap-2">
                      {(["paragraphs", "sentences", "words"] as TextType[]).map((type) => (
                        <Button
                          key={type}
                          variant={textType === type ? "default" : "outline"}
                          size="sm"
                          onClick={() => setTextType(type)}
                          className="justify-start"
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="count">Count</Label>
                    <Input
                      id="count"
                      type="number"
                      min="1"
                      max="100"
                      value={count}
                      onChange={(e) => setCount(Math.min(100, Math.max(1, Number(e.target.value))))}
                    />
                  </div>

                  <Button onClick={generate} className="w-full">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Generated Text</CardTitle>
                    <Button variant="outline" size="sm" onClick={handleCopy}>
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
                </CardHeader>
                <CardContent>
                  <div className="p-4 rounded-lg bg-muted min-h-[300px] max-h-[500px] overflow-y-auto whitespace-pre-wrap">
                    {output}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {output.length} characters
                  </p>
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
