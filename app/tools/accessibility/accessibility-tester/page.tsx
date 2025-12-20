"use client"

import { useState, useCallback } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TestResults } from "@/components/tools/accessibility/test-results"
import { ExportOptions } from "@/components/tools/accessibility/export-options"
import { Loader2, Globe, Monitor, AlertCircle } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { processAxeResults, type ProcessedResults } from "@/lib/tools/accessibility/processor"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("accessibility-tester")!

export default function AccessibilityTesterPage() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<ProcessedResults | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [testType, setTestType] = useState<"url" | "current" | null>(null)

  const validateUrl = useCallback((urlString: string): boolean => {
    try {
      const urlObj = new URL(urlString)
      return ['http:', 'https:'].includes(urlObj.protocol)
    } catch {
      return false
    }
  }, [])

  const testCurrentPage = useCallback(async () => {
    setLoading(true)
    setError(null)
    setTestType("current")
    setResults(null)

    try {
      // Dynamically load axe-core
      const axeScript = await fetch('https://unpkg.com/axe-core@4.10.0/axe.min.js').then(r => r.text())
      
      // Inject axe-core script
      const script = document.createElement('script')
      script.textContent = axeScript
      document.head.appendChild(script)

      // Wait for axe to be available
      await new Promise((resolve) => {
        const checkAxe = () => {
          // @ts-expect-error - axe is injected dynamically
          if (typeof window.axe !== 'undefined') {
            resolve(true)
          } else {
            setTimeout(checkAxe, 100)
          }
        }
        checkAxe()
      })

      // Run axe-core test
      // @ts-expect-error - axe is injected dynamically
      const axeResults = await window.axe.run(document, {
        tags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'],
      })

      // Process results
      const processed = processAxeResults(window.location.href, axeResults)
      setResults(processed)

      // Remove script
      document.head.removeChild(script)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to test current page'
      setError(errorMessage)
      console.error('Accessibility test error:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const testUrl = useCallback(async () => {
    if (!url.trim()) {
      setError("Please enter a URL")
      return
    }

    if (!validateUrl(url)) {
      setError("Please enter a valid URL (must start with http:// or https://)")
      return
    }

    setLoading(true)
    setError(null)
    setTestType("url")
    setResults(null)

    try {
      const response = await fetch('/api/tools/accessibility-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, captureScreenshots: true }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || errorData.error || 'Test failed')
      }

      const data = await response.json()
      const processed = processAxeResults(data.url, data)
      setResults(processed)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to test URL'
      setError(errorMessage)
      console.error('Accessibility test error:', err)
    } finally {
      setLoading(false)
    }
  }, [url, validateUrl])

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !loading) {
      testUrl()
    }
  }, [testUrl, loading])

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

            <div className="space-y-6">
              {/* Input Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Test Accessibility</CardTitle>
                  <CardDescription>
                    Test any URL or the current page for WCAG 2.2 Level AA compliance using axe-core
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="url-input">Website URL</Label>
                    <div className="flex gap-2">
                      <Input
                        id="url-input"
                        type="url"
                        placeholder="https://example.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={loading}
                        aria-describedby="url-help"
                      />
                      <Button
                        onClick={testUrl}
                        disabled={loading || !url.trim()}
                        className="gap-2"
                        aria-label="Test the entered URL for accessibility"
                      >
                        {loading && testType === "url" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                            Testing...
                          </>
                        ) : (
                          <>
                            <Globe className="h-4 w-4" aria-hidden="true" />
                            Test URL
                          </>
                        )}
                      </Button>
                    </div>
                    <p id="url-help" className="text-xs text-muted-foreground">
                      Enter a full URL including http:// or https://
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or</span>
                    </div>
                  </div>

                  <Button
                    onClick={testCurrentPage}
                    disabled={loading}
                    variant="outline"
                    className="w-full gap-2"
                    aria-label="Test the current page for accessibility"
                  >
                    {loading && testType === "current" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Testing Current Page...
                      </>
                    ) : (
                      <>
                        <Monitor className="h-4 w-4" aria-hidden="true" />
                        Test Current Page
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Error Display */}
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" aria-hidden="true" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Results Display */}
              {results && (
                <div className="space-y-4" role="region" aria-live="polite" aria-atomic="true">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold" id="results-heading">Test Results</h2>
                    <ExportOptions results={results} />
                  </div>
                  {testType === "current" && (
                    <p className="text-sm text-muted-foreground italic">
                      Note: Screenshots are only available when testing external URLs using the server-side test.
                    </p>
                  )}
                  <div aria-labelledby="results-heading">
                    <TestResults results={results} showScreenshots={testType === "url"} />
                  </div>
                </div>
              )}

              {/* Loading State */}
              {loading && !results && (
                <Card role="status" aria-live="polite" aria-busy="true">
                  <CardContent className="py-12 text-center">
                    <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" aria-hidden="true" />
                    <p className="text-lg font-semibold">Running Accessibility Test...</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      This may take a few moments. Please wait.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            <ToolFooter tool={tool} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

