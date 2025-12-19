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
import { Textarea } from "@/components/ui/textarea"
import { Download } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { generateQrCode, generateQrCodeSvg } from "@/lib/tools/converters/utility"
import { downloadFile, downloadFromURL } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("qr-code-generator")!

type ContentType = "text" | "url" | "email" | "wifi"

export default function QrCodeGeneratorPage() {
  const [contentType, setContentType] = useState<ContentType>("url")
  const [content, setContent] = useState("https://thewcag.com")
  const [size, setSize] = useState(256)
  const [errorLevel, setErrorLevel] = useState<"L" | "M" | "Q" | "H">("M")
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  // WiFi specific fields
  const [wifiSsid, setWifiSsid] = useState("")
  const [wifiPassword, setWifiPassword] = useState("")
  const [wifiType, setWifiType] = useState<"WPA" | "WEP" | "nopass">("WPA")

  // Email specific fields
  const [email, setEmail] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailBody, setEmailBody] = useState("")

  const generateContent = (): string => {
    switch (contentType) {
      case "wifi":
        return `WIFI:T:${wifiType};S:${wifiSsid};P:${wifiPassword};;`
      case "email":
        return `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      default:
        return content
    }
  }

  useEffect(() => {
    const generate = async () => {
      const qrContent = generateContent()
      if (!qrContent.trim()) {
        setQrDataUrl(null)
        return
      }

      setIsGenerating(true)
      try {
        const dataUrl = await generateQrCode(qrContent, {
          size,
          errorCorrectionLevel: errorLevel,
        })
        setQrDataUrl(dataUrl)
      } catch (e) {
        console.error("QR generation failed:", e)
      } finally {
        setIsGenerating(false)
      }
    }

    const debounce = setTimeout(generate, 300)
    return () => clearTimeout(debounce)
  }, [content, contentType, size, errorLevel, wifiSsid, wifiPassword, wifiType, email, emailSubject, emailBody])

  const handleDownloadPng = () => {
    if (qrDataUrl) {
      downloadFromURL(qrDataUrl, "qrcode.png")
    }
  }

  const handleDownloadSvg = async () => {
    const qrContent = generateContent()
    const svg = await generateQrCodeSvg(qrContent, {
      errorCorrectionLevel: errorLevel,
    })
    downloadFile(svg, "qrcode.svg", "image/svg+xml")
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
                    <CardTitle>Content Type</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {(["url", "text", "email", "wifi"] as ContentType[]).map((type) => (
                        <Button
                          key={type}
                          variant={contentType === type ? "default" : "outline"}
                          size="sm"
                          onClick={() => setContentType(type)}
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Button>
                      ))}
                    </div>

                    {(contentType === "url" || contentType === "text") && (
                      <div className="space-y-2">
                        <Label>{contentType === "url" ? "URL" : "Text"}</Label>
                        <Textarea
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          placeholder={contentType === "url" ? "https://example.com" : "Enter your text here..."}
                          className="min-h-[100px]"
                        />
                      </div>
                    )}

                    {contentType === "email" && (
                      <>
                        <div className="space-y-2">
                          <Label>Email Address</Label>
                          <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@email.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Subject</Label>
                          <Input
                            value={emailSubject}
                            onChange={(e) => setEmailSubject(e.target.value)}
                            placeholder="Email subject"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Body</Label>
                          <Textarea
                            value={emailBody}
                            onChange={(e) => setEmailBody(e.target.value)}
                            placeholder="Email body"
                          />
                        </div>
                      </>
                    )}

                    {contentType === "wifi" && (
                      <>
                        <div className="space-y-2">
                          <Label>Network Name (SSID)</Label>
                          <Input
                            value={wifiSsid}
                            onChange={(e) => setWifiSsid(e.target.value)}
                            placeholder="WiFi network name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Password</Label>
                          <Input
                            type="password"
                            value={wifiPassword}
                            onChange={(e) => setWifiPassword(e.target.value)}
                            placeholder="WiFi password"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Security Type</Label>
                          <div className="flex gap-2">
                            {(["WPA", "WEP", "nopass"] as const).map((type) => (
                              <Button
                                key={type}
                                variant={wifiType === type ? "default" : "outline"}
                                size="sm"
                                onClick={() => setWifiType(type)}
                              >
                                {type === "nopass" ? "None" : type}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Size: {size}px</Label>
                      <input
                        type="range"
                        min="128"
                        max="512"
                        step="32"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Error Correction</Label>
                      <div className="flex flex-wrap gap-2">
                        {(["L", "M", "Q", "H"] as const).map((level) => (
                          <Button
                            key={level}
                            variant={errorLevel === level ? "default" : "outline"}
                            size="sm"
                            onClick={() => setErrorLevel(level)}
                          >
                            {level} ({level === "L" ? "7%" : level === "M" ? "15%" : level === "Q" ? "25%" : "30%"})
                          </Button>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Higher = more resilient but larger QR code
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Generated QR Code</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center p-8 bg-white rounded-lg border">
                    {isGenerating ? (
                      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
                    ) : qrDataUrl ? (
                      <img src={qrDataUrl} alt="Generated QR Code" width={size} height={size} />
                    ) : (
                      <p className="text-muted-foreground">Enter content to generate QR code</p>
                    )}
                  </div>

                  {qrDataUrl && (
                    <div className="flex gap-2">
                      <Button onClick={handleDownloadPng} className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        PNG
                      </Button>
                      <Button onClick={handleDownloadSvg} variant="outline" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        SVG
                      </Button>
                    </div>
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
