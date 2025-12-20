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
import { Copy, Check, RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { copyToClipboard } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"
import {
  generateMetaTags,
  getDescriptionLength,
  getTitleLength,
  ROBOTS_OPTIONS,
  OG_TYPES,
  TWITTER_CARD_TYPES,
  VIEWPORT_OPTIONS,
  type MetaTagOptions,
} from "@/lib/tools/seo/meta-tags"

const tool = getToolBySlug("meta-tag-generator")!

export default function MetaTagGeneratorPage() {
  const [options, setOptions] = useState<MetaTagOptions>({
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    title: "",
    description: "",
    keywords: "",
    author: "",
    robots: "index, follow",
    canonical: "",
    ogType: "website",
    twitterCard: "summary_large_image",
  })
  const [copied, setCopied] = useState(false)

  const updateOption = useCallback(<K extends keyof MetaTagOptions>(key: K, value: MetaTagOptions[K]) => {
    setOptions((prev) => ({ ...prev, [key]: value }))
  }, [])

  const result = useMemo(() => {
    return generateMetaTags(options)
  }, [options])

  const titleStatus = useMemo(() => getTitleLength(options.title || ""), [options.title])
  const descriptionStatus = useMemo(() => getDescriptionLength(options.description || ""), [options.description])

  const handleCopy = useCallback(async () => {
    await copyToClipboard(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result])

  const handleReset = useCallback(() => {
    setOptions({
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      title: "",
      description: "",
      keywords: "",
      author: "",
      robots: "index, follow",
      canonical: "",
      ogType: "website",
      twitterCard: "summary_large_image",
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
                {/* Basic Meta Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Meta Tags</CardTitle>
                    <CardDescription>Essential SEO meta tags</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="title">Title</Label>
                        <span className={`text-xs ${
                          titleStatus.status === "ok" ? "text-green-600" :
                          titleStatus.status === "warning" ? "text-yellow-600" : "text-red-600"
                        }`}>
                          {titleStatus.length}/60
                        </span>
                      </div>
                      <Input
                        id="title"
                        value={options.title}
                        onChange={(e) => updateOption("title", e.target.value)}
                        placeholder="Your Page Title"
                      />
                      {options.title && (
                        <p className={`text-xs ${
                          titleStatus.status === "ok" ? "text-green-600" :
                          titleStatus.status === "warning" ? "text-yellow-600" : "text-red-600"
                        }`}>
                          {titleStatus.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="description">Meta Description</Label>
                        <span className={`text-xs ${
                          descriptionStatus.status === "ok" ? "text-green-600" :
                          descriptionStatus.status === "warning" ? "text-yellow-600" : "text-red-600"
                        }`}>
                          {descriptionStatus.length}/160
                        </span>
                      </div>
                      <Textarea
                        id="description"
                        value={options.description}
                        onChange={(e) => updateOption("description", e.target.value)}
                        placeholder="A compelling description of your page..."
                        rows={3}
                      />
                      {options.description && (
                        <p className={`text-xs ${
                          descriptionStatus.status === "ok" ? "text-green-600" :
                          descriptionStatus.status === "warning" ? "text-yellow-600" : "text-red-600"
                        }`}>
                          {descriptionStatus.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                      <Input
                        id="keywords"
                        value={options.keywords}
                        onChange={(e) => updateOption("keywords", e.target.value)}
                        placeholder="keyword1, keyword2, keyword3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="author">Author</Label>
                      <Input
                        id="author"
                        value={options.author}
                        onChange={(e) => updateOption("author", e.target.value)}
                        placeholder="Author Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="canonical">Canonical URL</Label>
                      <Input
                        id="canonical"
                        value={options.canonical}
                        onChange={(e) => updateOption("canonical", e.target.value)}
                        placeholder="https://example.com/page"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="robots">Robots</Label>
                        <select
                          id="robots"
                          value={options.robots}
                          onChange={(e) => updateOption("robots", e.target.value)}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          {ROBOTS_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="viewport">Viewport</Label>
                        <select
                          id="viewport"
                          value={options.viewport}
                          onChange={(e) => updateOption("viewport", e.target.value)}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          {VIEWPORT_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Open Graph Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle>Open Graph Tags</CardTitle>
                    <CardDescription>For Facebook, LinkedIn, etc.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="ogType">OG Type</Label>
                        <select
                          id="ogType"
                          value={options.ogType}
                          onChange={(e) => updateOption("ogType", e.target.value)}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          {OG_TYPES.map((type) => (
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
                          value={options.ogSiteName || ""}
                          onChange={(e) => updateOption("ogSiteName", e.target.value)}
                          placeholder="Your Site Name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ogTitle">OG Title (leave blank to use main title)</Label>
                      <Input
                        id="ogTitle"
                        value={options.ogTitle || ""}
                        onChange={(e) => updateOption("ogTitle", e.target.value)}
                        placeholder={options.title || "Custom OG Title"}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ogDescription">OG Description (leave blank to use main description)</Label>
                      <Textarea
                        id="ogDescription"
                        value={options.ogDescription || ""}
                        onChange={(e) => updateOption("ogDescription", e.target.value)}
                        placeholder={options.description || "Custom OG Description"}
                        rows={2}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ogImage">OG Image URL</Label>
                      <Input
                        id="ogImage"
                        value={options.ogImage || ""}
                        onChange={(e) => updateOption("ogImage", e.target.value)}
                        placeholder="https://example.com/image.jpg"
                      />
                      <p className="text-xs text-muted-foreground">
                        Recommended size: 1200x630 pixels
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ogUrl">OG URL (leave blank to use canonical)</Label>
                      <Input
                        id="ogUrl"
                        value={options.ogUrl || ""}
                        onChange={(e) => updateOption("ogUrl", e.target.value)}
                        placeholder={options.canonical || "https://example.com/page"}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Twitter Card Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle>Twitter Card Tags</CardTitle>
                    <CardDescription>Control Twitter share appearance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="twitterCard">Card Type</Label>
                        <select
                          id="twitterCard"
                          value={options.twitterCard}
                          onChange={(e) => updateOption("twitterCard", e.target.value as MetaTagOptions["twitterCard"])}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          {TWITTER_CARD_TYPES.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="twitterSite">Twitter @site</Label>
                        <Input
                          id="twitterSite"
                          value={options.twitterSite || ""}
                          onChange={(e) => updateOption("twitterSite", e.target.value)}
                          placeholder="@yourusername"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="twitterCreator">Twitter @creator</Label>
                      <Input
                        id="twitterCreator"
                        value={options.twitterCreator || ""}
                        onChange={(e) => updateOption("twitterCreator", e.target.value)}
                        placeholder="@authorusername"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Tags</CardTitle>
                    <CardDescription>Other useful meta tags</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="themeColor">Theme Color</Label>
                        <div className="flex gap-2">
                          <Input
                            id="themeColor"
                            value={options.themeColor || ""}
                            onChange={(e) => updateOption("themeColor", e.target.value)}
                            placeholder="#ffffff"
                            className="flex-1"
                          />
                          <input
                            type="color"
                            value={options.themeColor || "#ffffff"}
                            onChange={(e) => updateOption("themeColor", e.target.value)}
                            className="h-10 w-10 rounded border border-input cursor-pointer"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Input
                          id="language"
                          value={options.language || ""}
                          onChange={(e) => updateOption("language", e.target.value)}
                          placeholder="en"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="applicationName">Application Name</Label>
                      <Input
                        id="applicationName"
                        value={options.applicationName || ""}
                        onChange={(e) => updateOption("applicationName", e.target.value)}
                        placeholder="Your App Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="copyright">Copyright</Label>
                      <Input
                        id="copyright"
                        value={options.copyright || ""}
                        onChange={(e) => updateOption("copyright", e.target.value)}
                        placeholder="© 2024 Your Company"
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
                {/* Preview */}
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Generated Meta Tags</CardTitle>
                        <CardDescription>Copy and paste into your HTML &lt;head&gt;</CardDescription>
                      </div>
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
                    <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-xs font-mono max-h-[600px] overflow-y-auto whitespace-pre-wrap">
                      {result || "<!-- Fill in the fields to generate meta tags -->"}
                    </pre>
                  </CardContent>
                </Card>

                {/* SEO Checklist */}
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Checklist</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ChecklistItem
                      checked={!!options.title && titleStatus.status !== "error"}
                      label="Page title is set"
                    />
                    <ChecklistItem
                      checked={!!options.description && descriptionStatus.status !== "error"}
                      label="Meta description is set"
                    />
                    <ChecklistItem
                      checked={!!options.canonical}
                      label="Canonical URL is set"
                    />
                    <ChecklistItem
                      checked={!!options.ogImage}
                      label="OG image is set"
                    />
                    <ChecklistItem
                      checked={!!options.twitterCard}
                      label="Twitter card type is set"
                    />
                    <ChecklistItem
                      checked={options.viewport === "width=device-width, initial-scale=1"}
                      label="Mobile viewport is configured"
                    />
                  </CardContent>
                </Card>

                {/* Search Preview */}
                {options.title && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Google Search Preview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg border">
                        <div className="text-blue-600 dark:text-blue-400 text-lg hover:underline cursor-pointer truncate">
                          {options.title || "Page Title"}
                        </div>
                        <div className="text-green-700 dark:text-green-500 text-sm truncate">
                          {options.canonical || "https://example.com/page"}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                          {options.description || "Your meta description will appear here..."}
                        </div>
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

function ChecklistItem({ checked, label }: { checked: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {checked ? (
        <CheckCircle2 className="h-4 w-4 text-green-600" />
      ) : (
        <AlertCircle className="h-4 w-4 text-muted-foreground" />
      )}
      <span className={checked ? "text-foreground" : "text-muted-foreground"}>{label}</span>
    </div>
  )
}

