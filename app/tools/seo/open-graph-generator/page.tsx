"use client"

import { useState, useCallback, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, RefreshCw, Image as ImageIcon, ExternalLink } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { copyToClipboard } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"
import {
  generateOpenGraphTags,
  validateTitle,
  validateDescription,
  validateOpenGraphUrl,
  generatePreviewData,
  OG_TYPE_OPTIONS,
  TWITTER_CARD_OPTIONS,
  LOCALE_OPTIONS,
  IMAGE_RECOMMENDATIONS,
  type OpenGraphOptions,
} from "@/lib/tools/seo/open-graph"

const tool = getToolBySlug("open-graph-generator")!

export default function OpenGraphGeneratorPage() {
  const [options, setOptions] = useState<OpenGraphOptions>({
    title: "",
    type: "website",
    url: "",
    image: "",
    description: "",
    siteName: "",
    locale: "en_US",
    imageWidth: "1200",
    imageHeight: "630",
    imageAlt: "",
    twitterCard: "summary_large_image",
    twitterSite: "",
    twitterCreator: "",
  })
  const [copied, setCopied] = useState(false)
  const [activePreview, setActivePreview] = useState<"facebook" | "twitter" | "linkedin">("facebook")

  const updateOption = useCallback(<K extends keyof OpenGraphOptions>(key: K, value: OpenGraphOptions[K]) => {
    setOptions((prev) => ({ ...prev, [key]: value }))
  }, [])

  const result = useMemo(() => {
    if (!options.title || !options.url || !options.image) return null
    return generateOpenGraphTags(options)
  }, [options])

  const titleStatus = useMemo(() => validateTitle(options.title), [options.title])
  const descriptionStatus = useMemo(() => validateDescription(options.description || ""), [options.description])

  const previewData = useMemo(() => {
    if (!options.title) return null
    return generatePreviewData(options)
  }, [options])

  const handleCopy = useCallback(async () => {
    if (result) {
      await copyToClipboard(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [result])

  const handleReset = useCallback(() => {
    setOptions({
      title: "",
      type: "website",
      url: "",
      image: "",
      description: "",
      siteName: "",
      locale: "en_US",
      imageWidth: "1200",
      imageHeight: "630",
      imageAlt: "",
      twitterCard: "summary_large_image",
      twitterSite: "",
      twitterCreator: "",
    })
  }, [])

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
                {/* Basic Open Graph */}
                <Card>
                  <CardHeader>
                    <CardTitle>Open Graph Tags</CardTitle>
                    <CardDescription>Required fields for social sharing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="ogTitle">Title *</Label>
                        <span className={`text-xs ${
                          titleStatus.status === "ok" ? "text-green-600" :
                          titleStatus.status === "warning" ? "text-yellow-600" : "text-red-600"
                        }`}>
                          {titleStatus.length}/95
                        </span>
                      </div>
                      <Input
                        id="ogTitle"
                        value={options.title}
                        onChange={(e) => updateOption("title", e.target.value)}
                        placeholder="Your page title"
                      />
                      {options.title && titleStatus.status !== "ok" && (
                        <p className={`text-xs ${
                          titleStatus.status === "warning" ? "text-yellow-600" : "text-red-600"
                        }`}>
                          {titleStatus.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="ogDescription">Description</Label>
                        <span className={`text-xs ${
                          descriptionStatus.status === "ok" ? "text-green-600" :
                          descriptionStatus.status === "warning" ? "text-yellow-600" : "text-muted-foreground"
                        }`}>
                          {descriptionStatus.length}/300
                        </span>
                      </div>
                      <Textarea
                        id="ogDescription"
                        value={options.description}
                        onChange={(e) => updateOption("description", e.target.value)}
                        placeholder="A compelling description for social sharing..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ogUrl">Page URL *</Label>
                      <Input
                        id="ogUrl"
                        value={options.url}
                        onChange={(e) => updateOption("url", e.target.value)}
                        placeholder="https://example.com/page"
                      />
                      {options.url && !validateOpenGraphUrl(options.url) && (
                        <p className="text-xs text-red-600">Invalid URL format</p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="ogType">Content Type</Label>
                        <select
                          id="ogType"
                          value={options.type}
                          onChange={(e) => updateOption("type", e.target.value)}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          {OG_TYPE_OPTIONS.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ogSiteName">Site Name</Label>
                        <Input
                          id="ogSiteName"
                          value={options.siteName}
                          onChange={(e) => updateOption("siteName", e.target.value)}
                          placeholder="Your Site Name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ogLocale">Locale</Label>
                      <select
                        id="ogLocale"
                        value={options.locale}
                        onChange={(e) => updateOption("locale", e.target.value)}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      >
                        {LOCALE_OPTIONS.map((locale) => (
                          <option key={locale.value} value={locale.value}>
                            {locale.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </CardContent>
                </Card>

                {/* Image Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Image Settings</CardTitle>
                    <CardDescription>
                      Recommended: {IMAGE_RECOMMENDATIONS.facebook.width}x{IMAGE_RECOMMENDATIONS.facebook.height}px
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ogImage">Image URL *</Label>
                      <Input
                        id="ogImage"
                        value={options.image}
                        onChange={(e) => updateOption("image", e.target.value)}
                        placeholder="https://example.com/image.jpg"
                      />
                      <p className="text-xs text-muted-foreground">
                        Use HTTPS for best compatibility. Minimum 600x315px.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="imageWidth">Width (px)</Label>
                        <Input
                          id="imageWidth"
                          value={options.imageWidth}
                          onChange={(e) => updateOption("imageWidth", e.target.value)}
                          placeholder="1200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="imageHeight">Height (px)</Label>
                        <Input
                          id="imageHeight"
                          value={options.imageHeight}
                          onChange={(e) => updateOption("imageHeight", e.target.value)}
                          placeholder="630"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="imageAlt">Image Alt Text</Label>
                      <Input
                        id="imageAlt"
                        value={options.imageAlt}
                        onChange={(e) => updateOption("imageAlt", e.target.value)}
                        placeholder="Descriptive alt text for the image"
                      />
                    </div>

                    {options.image && validateOpenGraphUrl(options.image) && (
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-xs text-muted-foreground mb-2">Preview:</p>
                        <div className="aspect-[1.91/1] bg-muted-foreground/10 rounded overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={options.image}
                            alt={options.imageAlt || "OG Image preview"}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none"
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Twitter Card Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Twitter Card Settings</CardTitle>
                    <CardDescription>Customize Twitter/X appearance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="twitterCard">Card Type</Label>
                      <select
                        id="twitterCard"
                        value={options.twitterCard}
                        onChange={(e) => updateOption("twitterCard", e.target.value as OpenGraphOptions["twitterCard"])}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      >
                        {TWITTER_CARD_OPTIONS.map((card) => (
                          <option key={card.value} value={card.value}>
                            {card.label} - {card.description}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="twitterSite">@site (publisher)</Label>
                        <Input
                          id="twitterSite"
                          value={options.twitterSite}
                          onChange={(e) => updateOption("twitterSite", e.target.value)}
                          placeholder="@yoursite"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="twitterCreator">@creator (author)</Label>
                        <Input
                          id="twitterCreator"
                          value={options.twitterCreator}
                          onChange={(e) => updateOption("twitterCreator", e.target.value)}
                          placeholder="@author"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="twitterTitle">Custom Title (optional)</Label>
                      <Input
                        id="twitterTitle"
                        value={options.twitterTitle || ""}
                        onChange={(e) => updateOption("twitterTitle", e.target.value)}
                        placeholder={options.title || "Uses OG title if empty"}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="twitterDescription">Custom Description (optional)</Label>
                      <Textarea
                        id="twitterDescription"
                        value={options.twitterDescription || ""}
                        onChange={(e) => updateOption("twitterDescription", e.target.value)}
                        placeholder={options.description || "Uses OG description if empty"}
                        rows={2}
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-2">
                  <Button variant="outline" onClick={handleReset} className="flex-1">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset All
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Social Preview */}
                {previewData && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Social Preview</CardTitle>
                      <CardDescription>How your link will appear when shared</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 mb-4">
                        <Button
                          variant={activePreview === "facebook" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setActivePreview("facebook")}
                        >
                          Facebook
                        </Button>
                        <Button
                          variant={activePreview === "twitter" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setActivePreview("twitter")}
                        >
                          Twitter/X
                        </Button>
                        <Button
                          variant={activePreview === "linkedin" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setActivePreview("linkedin")}
                        >
                          LinkedIn
                        </Button>
                      </div>

                      {/* Facebook Preview */}
                      {activePreview === "facebook" && (
                        <div className="border rounded-lg overflow-hidden bg-white dark:bg-zinc-900">
                          {options.image && (
                            <div className="aspect-[1.91/1] bg-muted">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={options.image}
                                alt=""
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-muted-foreground"><svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>`
                                }}
                              />
                            </div>
                          )}
                          <div className="p-3 border-t">
                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                              {previewData.facebook.siteName || (options.url && new URL(options.url).hostname)}
                            </p>
                            <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                              {previewData.facebook.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {previewData.facebook.description}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Twitter Preview */}
                      {activePreview === "twitter" && (
                        <div className="border rounded-2xl overflow-hidden bg-white dark:bg-zinc-900">
                          {options.image && options.twitterCard === "summary_large_image" && (
                            <div className="aspect-[2/1] bg-muted">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={options.image}
                                alt=""
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none"
                                }}
                              />
                            </div>
                          )}
                          <div className={`p-3 ${options.twitterCard === "summary" ? "flex gap-3" : ""}`}>
                            {options.image && options.twitterCard === "summary" && (
                              <div className="w-[120px] h-[120px] flex-shrink-0 bg-muted rounded overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={options.image}
                                  alt=""
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none"
                                  }}
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-muted-foreground mb-0.5">
                                {options.url && new URL(options.url).hostname}
                              </p>
                              <h3 className="font-semibold text-sm line-clamp-2">
                                {previewData.twitter.title}
                              </h3>
                              <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                                {previewData.twitter.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* LinkedIn Preview */}
                      {activePreview === "linkedin" && (
                        <div className="border rounded-lg overflow-hidden bg-white dark:bg-zinc-900">
                          {options.image && (
                            <div className="aspect-[1.91/1] bg-muted">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={options.image}
                                alt=""
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none"
                                }}
                              />
                            </div>
                          )}
                          <div className="p-3 border-t">
                            <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                              {previewData.linkedin.title}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {options.url && new URL(options.url).hostname}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Generated Code */}
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Generated Meta Tags</CardTitle>
                        <CardDescription>Copy and paste into your HTML &lt;head&gt;</CardDescription>
                      </div>
                      {result && (
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
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-xs font-mono max-h-[400px] overflow-y-auto whitespace-pre-wrap">
                      {result || "<!-- Fill in title, URL, and image to generate tags -->"}
                    </pre>
                  </CardContent>
                </Card>

                {/* Testing Tools */}
                <Card>
                  <CardHeader>
                    <CardTitle>Test Your Tags</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a
                      href="https://developers.facebook.com/tools/debug/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <span className="text-sm">Facebook Sharing Debugger</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                    <a
                      href="https://cards-dev.twitter.com/validator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <span className="text-sm">Twitter Card Validator</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                    <a
                      href="https://www.linkedin.com/post-inspector/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <span className="text-sm">LinkedIn Post Inspector</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                  </CardContent>
                </Card>
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

