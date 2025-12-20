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
import { Badge } from "@/components/ui/badge"
import { Download, Copy, Plus, Trash2, RefreshCw, Check, AlertCircle } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { downloadFile, copyToClipboard } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"
import {
  generateRobotsTxt,
  COMMON_USER_AGENTS,
  COMMON_PATHS,
  PRESETS,
  type RobotRule,
} from "@/lib/tools/seo/robots"

const tool = getToolBySlug("robots-txt-generator")!

interface RuleEntry extends RobotRule {
  id: string
}

export default function RobotsTxtGeneratorPage() {
  const [rules, setRules] = useState<RuleEntry[]>([
    {
      id: "1",
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
  ])
  const [sitemapUrls, setSitemapUrls] = useState<string[]>([])
  const [newSitemap, setNewSitemap] = useState("")
  const [host, setHost] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleApplyPreset = useCallback((presetKey: keyof typeof PRESETS) => {
    const preset = PRESETS[presetKey]
    setRules(
      preset.rules.map((rule, index) => ({
        id: `preset-${index}`,
        userAgent: rule.userAgent,
        allow: [...rule.allow],
        disallow: [...rule.disallow],
        crawlDelay: undefined,
      }))
    )
    setResult(null)
  }, [])

  const handleAddRule = useCallback(() => {
    setRules((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        userAgent: "*",
        allow: [],
        disallow: [],
      },
    ])
  }, [])

  const handleRemoveRule = useCallback((id: string) => {
    setRules((prev) => prev.filter((rule) => rule.id !== id))
  }, [])

  const handleUpdateRule = useCallback(
    (id: string, field: keyof RobotRule, value: string | string[] | number | undefined) => {
      setRules((prev) =>
        prev.map((rule) => (rule.id === id ? { ...rule, [field]: value } : rule))
      )
    },
    []
  )

  const handleAddPath = useCallback((ruleId: string, type: "allow" | "disallow", path: string) => {
    if (!path.trim()) return
    setRules((prev) =>
      prev.map((rule) => {
        if (rule.id === ruleId) {
          return {
            ...rule,
            [type]: [...rule[type], path.trim()],
          }
        }
        return rule
      })
    )
  }, [])

  const handleRemovePath = useCallback((ruleId: string, type: "allow" | "disallow", index: number) => {
    setRules((prev) =>
      prev.map((rule) => {
        if (rule.id === ruleId) {
          return {
            ...rule,
            [type]: rule[type].filter((_, i) => i !== index),
          }
        }
        return rule
      })
    )
  }, [])

  const handleAddSitemap = useCallback(() => {
    if (newSitemap.trim()) {
      setSitemapUrls((prev) => [...prev, newSitemap.trim()])
      setNewSitemap("")
    }
  }, [newSitemap])

  const handleRemoveSitemap = useCallback((index: number) => {
    setSitemapUrls((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const handleGenerate = useCallback(() => {
    if (rules.length === 0) {
      setError("Please add at least one rule")
      return
    }

    try {
      const robotsTxt = generateRobotsTxt({
        rules: rules.map(({ id, ...rest }) => rest),
        sitemapUrls,
        host: host.trim() || undefined,
      })
      setResult(robotsTxt)
      setError(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to generate robots.txt")
    }
  }, [rules, sitemapUrls, host])

  const handleDownload = useCallback(() => {
    if (result) {
      downloadFile(new Blob([result], { type: "text/plain" }), "robots.txt", "text/plain")
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
    setRules([{ id: "1", userAgent: "*", allow: ["/"], disallow: [] }])
    setSitemapUrls([])
    setHost("")
    setResult(null)
    setError(null)
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
                {/* Presets */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Presets</CardTitle>
                    <CardDescription>Start with a common configuration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(PRESETS).map(([key, preset]) => (
                        <Button
                          key={key}
                          variant="outline"
                          size="sm"
                          onClick={() => handleApplyPreset(key as keyof typeof PRESETS)}
                        >
                          {preset.name}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Rules */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>User-Agent Rules</CardTitle>
                        <CardDescription>Define crawling rules for bots</CardDescription>
                      </div>
                      <Button variant="outline" size="sm" onClick={handleAddRule}>
                        <Plus className="h-4 w-4 mr-1" />
                        Add Rule
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 max-h-[500px] overflow-y-auto">
                    {rules.map((rule) => (
                      <div key={rule.id} className="p-4 border rounded-lg space-y-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 space-y-2">
                            <Label>User-Agent</Label>
                            <select
                              value={rule.userAgent}
                              onChange={(e) => handleUpdateRule(rule.id, "userAgent", e.target.value)}
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                            >
                              {COMMON_USER_AGENTS.map((ua) => (
                                <option key={ua.value} value={ua.value}>
                                  {ua.label}
                                </option>
                              ))}
                            </select>
                          </div>
                          {rules.length > 1 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveRule(rule.id)}
                              className="text-destructive hover:text-destructive mt-6"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>

                        {/* Allow paths */}
                        <div className="space-y-2">
                          <Label className="text-green-600 dark:text-green-400">Allow</Label>
                          <div className="flex flex-wrap gap-1">
                            {rule.allow.map((path, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="cursor-pointer hover:bg-destructive/10"
                                onClick={() => handleRemovePath(rule.id, "allow", index)}
                              >
                                {path} ×
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <select
                              className="flex-1 h-9 px-2 rounded-md border border-input bg-background text-sm"
                              onChange={(e) => {
                                if (e.target.value) {
                                  handleAddPath(rule.id, "allow", e.target.value)
                                  e.target.value = ""
                                }
                              }}
                            >
                              <option value="">Add allow path...</option>
                              {COMMON_PATHS.allow.map((p) => (
                                <option key={p.value} value={p.value}>
                                  {p.label} ({p.value})
                                </option>
                              ))}
                            </select>
                            <Input
                              placeholder="Custom path"
                              className="w-32 h-9"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleAddPath(rule.id, "allow", e.currentTarget.value)
                                  e.currentTarget.value = ""
                                }
                              }}
                            />
                          </div>
                        </div>

                        {/* Disallow paths */}
                        <div className="space-y-2">
                          <Label className="text-red-600 dark:text-red-400">Disallow</Label>
                          <div className="flex flex-wrap gap-1">
                            {rule.disallow.map((path, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="cursor-pointer hover:bg-destructive/10"
                                onClick={() => handleRemovePath(rule.id, "disallow", index)}
                              >
                                {path} ×
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <select
                              className="flex-1 h-9 px-2 rounded-md border border-input bg-background text-sm"
                              onChange={(e) => {
                                if (e.target.value) {
                                  handleAddPath(rule.id, "disallow", e.target.value)
                                  e.target.value = ""
                                }
                              }}
                            >
                              <option value="">Add disallow path...</option>
                              {COMMON_PATHS.disallow.map((p) => (
                                <option key={p.value} value={p.value}>
                                  {p.label} ({p.value})
                                </option>
                              ))}
                            </select>
                            <Input
                              placeholder="Custom path"
                              className="w-32 h-9"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleAddPath(rule.id, "disallow", e.currentTarget.value)
                                  e.currentTarget.value = ""
                                }
                              }}
                            />
                          </div>
                        </div>

                        {/* Crawl delay */}
                        <div className="space-y-2">
                          <Label>Crawl Delay (seconds)</Label>
                          <Input
                            type="number"
                            min="0"
                            value={rule.crawlDelay || ""}
                            onChange={(e) =>
                              handleUpdateRule(
                                rule.id,
                                "crawlDelay",
                                e.target.value ? parseInt(e.target.value) : undefined
                              )
                            }
                            placeholder="Optional"
                            className="w-32"
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Sitemap URLs */}
                <Card>
                  <CardHeader>
                    <CardTitle>Sitemap URLs</CardTitle>
                    <CardDescription>Add sitemap references</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {sitemapUrls.map((url, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="cursor-pointer hover:bg-destructive/10"
                          onClick={() => handleRemoveSitemap(index)}
                        >
                          {url} ×
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        value={newSitemap}
                        onChange={(e) => setNewSitemap(e.target.value)}
                        placeholder="https://example.com/sitemap.xml"
                        className="flex-1"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleAddSitemap()
                          }
                        }}
                      />
                      <Button variant="outline" onClick={handleAddSitemap}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Host */}
                <Card>
                  <CardHeader>
                    <CardTitle>Host Directive</CardTitle>
                    <CardDescription>Specify preferred domain (optional)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Input
                      value={host}
                      onChange={(e) => setHost(e.target.value)}
                      placeholder="example.com"
                    />
                  </CardContent>
                </Card>

                <div className="flex gap-2">
                  <Button onClick={handleGenerate} className="flex-1">
                    Generate robots.txt
                  </Button>
                  <Button variant="outline" onClick={handleReset}>
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
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
                          <CardTitle>Generated robots.txt</CardTitle>
                          <CardDescription>
                            {rules.length} rule{rules.length !== 1 ? "s" : ""}
                            {sitemapUrls.length > 0 && ` • ${sitemapUrls.length} sitemap${sitemapUrls.length !== 1 ? "s" : ""}`}
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
                      <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono whitespace-pre-wrap">
                        {result}
                      </pre>
                    </CardContent>
                  </Card>
                )}

                {!result && !error && (
                  <Card>
                    <CardContent className="py-12">
                      <div className="text-center text-muted-foreground">
                        <p className="mb-2">Configure rules and click Generate</p>
                        <p className="text-sm">
                          Upload to your website root as <code className="px-1 bg-muted rounded">robots.txt</code>
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

