"use client"

import { useState, useCallback } from "react"
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
import { Download, Copy, Plus, Trash2, RefreshCw, Check, AlertCircle } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { downloadFile, copyToClipboard } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"
import {
  generateSitemap,
  parseUrls,
  getInvalidUrls,
  validateUrl,
  getTodayDate,
  CHANGE_FREQUENCIES,
  PRIORITY_PRESETS,
  type SitemapUrl,
} from "@/lib/tools/seo/sitemap"

const tool = getToolBySlug("sitemap-generator")!

interface UrlEntry extends SitemapUrl {
  id: string
}

export default function SitemapGeneratorPage() {
  const [bulkUrls, setBulkUrls] = useState("")
  const [urls, setUrls] = useState<UrlEntry[]>([])
  const [defaultPriority, setDefaultPriority] = useState(0.5)
  const [defaultChangefreq, setDefaultChangefreq] = useState<SitemapUrl["changefreq"]>("weekly")
  const [defaultLastmod, setDefaultLastmod] = useState(getTodayDate())
  const [result, setResult] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [invalidUrls, setInvalidUrls] = useState<string[]>([])

  const handleAddBulkUrls = useCallback(() => {
    const validUrls = parseUrls(bulkUrls)
    const invalid = getInvalidUrls(bulkUrls)
    
    if (invalid.length > 0) {
      setInvalidUrls(invalid)
    } else {
      setInvalidUrls([])
    }

    if (validUrls.length === 0) {
      setError("No valid URLs found. Please enter valid URLs (e.g., https://example.com/page)")
      return
    }

    const newEntries: UrlEntry[] = validUrls.map((url) => ({
      id: Math.random().toString(36).substring(7),
      loc: url,
      priority: defaultPriority,
      changefreq: defaultChangefreq,
      lastmod: defaultLastmod,
    }))

    setUrls((prev) => [...prev, ...newEntries])
    setBulkUrls("")
    setError(null)
  }, [bulkUrls, defaultPriority, defaultChangefreq, defaultLastmod])

  const handleAddSingleUrl = useCallback(() => {
    const newEntry: UrlEntry = {
      id: Math.random().toString(36).substring(7),
      loc: "",
      priority: defaultPriority,
      changefreq: defaultChangefreq,
      lastmod: defaultLastmod,
    }
    setUrls((prev) => [...prev, newEntry])
  }, [defaultPriority, defaultChangefreq, defaultLastmod])

  const handleUpdateUrl = useCallback((id: string, field: keyof SitemapUrl, value: string | number) => {
    setUrls((prev) =>
      prev.map((url) =>
        url.id === id ? { ...url, [field]: value } : url
      )
    )
  }, [])

  const handleRemoveUrl = useCallback((id: string) => {
    setUrls((prev) => prev.filter((url) => url.id !== id))
  }, [])

  const handleGenerate = useCallback(() => {
    if (urls.length === 0) {
      setError("Please add at least one URL")
      return
    }

    const invalidEntries = urls.filter((u) => !validateUrl(u.loc))
    if (invalidEntries.length > 0) {
      setError("Some URLs are invalid. Please fix them before generating.")
      return
    }

    try {
      const sitemap = generateSitemap({
        urls: urls.map(({ id, ...rest }) => rest),
        pretty: true,
      })
      setResult(sitemap)
      setError(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to generate sitemap")
    }
  }, [urls])

  const handleDownload = useCallback(() => {
    if (result) {
      downloadFile(new Blob([result], { type: "application/xml" }), "sitemap.xml", "application/xml")
    }
  }, [result])

  const handleCopy = useCallback(async () => {
    if (result) {
      await copyToClipboard(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [result])

  const handleReset = useCallback(() => {
    setUrls([])
    setBulkUrls("")
    setResult(null)
    setError(null)
    setInvalidUrls([])
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
                {/* Bulk URL Input */}
                <Card>
                  <CardHeader>
                    <CardTitle>Add URLs</CardTitle>
                    <CardDescription>
                      Enter URLs one per line or comma-separated
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      value={bulkUrls}
                      onChange={(e) => setBulkUrls(e.target.value)}
                      placeholder="https://example.com/&#10;https://example.com/about&#10;https://example.com/contact"
                      rows={5}
                      className="font-mono text-sm"
                    />
                    {invalidUrls.length > 0 && (
                      <div className="text-sm text-destructive flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <div>
                          Invalid URLs: {invalidUrls.slice(0, 3).join(", ")}
                          {invalidUrls.length > 3 && ` and ${invalidUrls.length - 3} more`}
                        </div>
                      </div>
                    )}
                    <Button onClick={handleAddBulkUrls} className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add URLs
                    </Button>
                  </CardContent>
                </Card>

                {/* Default Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Default Settings</CardTitle>
                    <CardDescription>
                      Applied to newly added URLs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="defaultPriority">Priority</Label>
                        <select
                          id="defaultPriority"
                          value={defaultPriority}
                          onChange={(e) => setDefaultPriority(parseFloat(e.target.value))}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          {PRIORITY_PRESETS.map((preset) => (
                            <option key={preset.value} value={preset.value}>
                              {preset.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="defaultChangefreq">Change Frequency</Label>
                        <select
                          id="defaultChangefreq"
                          value={defaultChangefreq}
                          onChange={(e) => setDefaultChangefreq(e.target.value as SitemapUrl["changefreq"])}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          {CHANGE_FREQUENCIES.map((freq) => (
                            <option key={freq.value} value={freq.value}>
                              {freq.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="defaultLastmod">Last Modified</Label>
                        <Input
                          id="defaultLastmod"
                          type="date"
                          value={defaultLastmod}
                          onChange={(e) => setDefaultLastmod(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* URL List */}
                {urls.length > 0 && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>URLs ({urls.length})</CardTitle>
                          <CardDescription>
                            Edit individual URL settings
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="sm" onClick={handleAddSingleUrl}>
                          <Plus className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 max-h-[400px] overflow-y-auto">
                      {urls.map((url) => (
                        <div key={url.id} className="p-3 border rounded-lg space-y-3">
                          <div className="flex items-start gap-2">
                            <Input
                              value={url.loc}
                              onChange={(e) => handleUpdateUrl(url.id, "loc", e.target.value)}
                              placeholder="https://example.com/page"
                              className="font-mono text-sm flex-1"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveUrl(url.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid gap-2 sm:grid-cols-3">
                            <select
                              value={url.priority}
                              onChange={(e) => handleUpdateUrl(url.id, "priority", parseFloat(e.target.value))}
                              className="h-9 px-2 rounded-md border border-input bg-background text-xs"
                            >
                              {PRIORITY_PRESETS.map((preset) => (
                                <option key={preset.value} value={preset.value}>
                                  {preset.value}
                                </option>
                              ))}
                            </select>
                            <select
                              value={url.changefreq}
                              onChange={(e) => handleUpdateUrl(url.id, "changefreq", e.target.value)}
                              className="h-9 px-2 rounded-md border border-input bg-background text-xs"
                            >
                              {CHANGE_FREQUENCIES.map((freq) => (
                                <option key={freq.value} value={freq.value}>
                                  {freq.label}
                                </option>
                              ))}
                            </select>
                            <Input
                              type="date"
                              value={url.lastmod}
                              onChange={(e) => handleUpdateUrl(url.id, "lastmod", e.target.value)}
                              className="h-9 text-xs"
                            />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {urls.length > 0 && (
                  <div className="flex gap-2">
                    <Button onClick={handleGenerate} className="flex-1">
                      Generate Sitemap
                    </Button>
                    <Button variant="outline" onClick={handleReset}>
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {error && (
                  <Card className="border-destructive/50">
                    <CardHeader>
                      <CardTitle className="text-destructive flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        Error
                      </CardTitle>
                      <CardDescription>{error}</CardDescription>
                    </CardHeader>
                  </Card>
                )}

                {result && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Generated Sitemap</CardTitle>
                          <CardDescription>
                            {urls.length} URLs • XML format
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
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
                          <Button size="sm" onClick={handleDownload}>
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-xs font-mono max-h-[500px] overflow-y-auto">
                        {result}
                      </pre>
                    </CardContent>
                  </Card>
                )}

                {!result && !error && (
                  <Card>
                    <CardContent className="py-12">
                      <div className="text-center text-muted-foreground">
                        <p className="mb-2">Add URLs and click Generate to create your sitemap</p>
                        <p className="text-sm">
                          Upload to your website root as <code className="px-1 bg-muted rounded">sitemap.xml</code>
                        </p>
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

