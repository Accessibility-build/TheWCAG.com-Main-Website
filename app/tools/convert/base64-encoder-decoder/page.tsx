"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Copy, Check, ArrowRight } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { base64Encode, base64Decode } from "@/lib/tools/converters/text"
import { copyToClipboard } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("base64-encoder-decoder")!

export default function Base64EncoderDecoderPage() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [mode, setMode] = useState<"encode" | "decode">("encode")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleConvert = () => {
    setError(null)
    try {
      if (mode === "encode") {
        setOutput(base64Encode(input))
      } else {
        setOutput(base64Decode(input))
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed")
      setOutput("")
    }
  }

  const handleCopy = async () => {
    const success = await copyToClipboard(output)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSwap = () => {
    setInput(output)
    setOutput("")
    setMode(mode === "encode" ? "decode" : "encode")
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
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <ToolHeader tool={tool} />

            <div className="space-y-4">
              <div className="flex justify-center gap-2">
                <Button
                  variant={mode === "encode" ? "default" : "outline"}
                  onClick={() => setMode("encode")}
                >
                  Encode
                </Button>
                <Button
                  variant={mode === "decode" ? "default" : "outline"}
                  onClick={() => setMode("decode")}
                >
                  Decode
                </Button>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {mode === "encode" ? "Text Input" : "Base64 Input"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."}
                      className="min-h-[300px] font-mono"
                    />
                    <p className="text-xs text-muted-foreground">
                      {input.length} characters
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>
                      {mode === "encode" ? "Base64 Output" : "Text Output"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {error && (
                      <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                        {error}
                      </div>
                    )}
                    <Textarea
                      value={output}
                      readOnly
                      placeholder="Result will appear here..."
                      className="min-h-[300px] font-mono"
                    />
                    <p className="text-xs text-muted-foreground">
                      {output.length} characters
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center gap-2">
                <Button onClick={handleConvert} size="lg">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {mode === "encode" ? "Encode" : "Decode"}
                </Button>
                {output && (
                  <>
                    <Button onClick={handleSwap} variant="outline" size="lg">
                      Swap & {mode === "encode" ? "Decode" : "Encode"}
                    </Button>
                    <Button onClick={handleCopy} variant="outline" size="lg">
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </>
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
