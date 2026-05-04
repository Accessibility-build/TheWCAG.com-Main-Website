"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, ArrowRight, ExternalLink, Loader2, ShieldCheck } from "lucide-react"

interface AxeNode {
  html: string
  target: Array<string | string[]>
  failureSummary?: string
}

interface ScanViolation {
  id: string
  impact: "minor" | "moderate" | "serious" | "critical" | null
  description: string
  help: string
  helpUrl: string
  tags: string[]
  nodeCount: number
  nodes: AxeNode[]
}

interface ScanResponse {
  ok: true
  url: string
  finalUrl: string
  fetchedAt: string
  durationMs: number
  counts: { violations: number; passes: number; incomplete: number; inapplicable: number }
  violations: ScanViolation[]
}

interface ScanError {
  ok?: false
  error: string
}

const IMPACT_ORDER: Record<string, number> = { critical: 4, serious: 3, moderate: 2, minor: 1 }
const IMPACT_BADGE: Record<string, string> = {
  critical: "bg-red-600 text-white border-red-700",
  serious: "bg-orange-600 text-white border-orange-700",
  moderate: "bg-amber-500 text-white border-amber-600",
  minor: "bg-blue-600 text-white border-blue-700",
}

export function ScanForm() {
  const [url, setUrl] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [report, setReport] = React.useState<ScanResponse | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setReport(null)
    if (!url.trim()) {
      setError("Enter a URL.")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      })
      const json = (await res.json()) as ScanResponse | ScanError
      if (!res.ok || !("ok" in json) || !json.ok) {
        const message = "error" in json ? json.error : `Scan failed (status ${res.status})`
        setError(message)
        return
      }
      setReport(json)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error.")
    } finally {
      setLoading(false)
    }
  }

  const sortedViolations = React.useMemo(() => {
    if (!report) return []
    return [...report.violations].sort((a, b) => {
      const ai = a.impact ? IMPACT_ORDER[a.impact] ?? 0 : 0
      const bi = b.impact ? IMPACT_ORDER[b.impact] ?? 0 : 0
      if (bi !== ai) return bi - ai
      return b.nodeCount - a.nodeCount
    })
  }, [report])

  return (
    <div>
      <form onSubmit={onSubmit} className="rounded-2xl border-2 bg-card p-4 sm:p-5">
        <label htmlFor="scan-url" className="block text-sm font-semibold mb-2">
          Public URL to scan
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            id="scan-url"
            type="url"
            inputMode="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={loading}
            className="h-11 text-base"
            aria-describedby="scan-help"
          />
          <Button type="submit" disabled={loading} className="h-11 px-5 sm:px-6">
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                Scanning…
              </>
            ) : (
              <>
                Run scan
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </>
            )}
          </Button>
        </div>
        <p id="scan-help" className="mt-2 text-xs text-muted-foreground">
          We fetch the page server-side and run axe-core against the rendered HTML. The page must
          be publicly reachable. Internal hosts (localhost, 10.x.x.x, 192.168.x.x) are blocked.
        </p>
      </form>

      {error && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-3 rounded-xl border-2 border-red-500/40 bg-red-500/10 p-4 text-sm"
        >
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-red-700 dark:text-red-300">Scan failed</p>
            <p className="text-red-700/90 dark:text-red-300/90">{error}</p>
          </div>
        </div>
      )}

      {report && (
        <section aria-label="Scan report" className="mt-8">
          {/* Summary */}
          <Card className="border-2 mb-6">
            <CardHeader className="pb-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle className="text-lg sm:text-xl">Summary</CardTitle>
                <span className="text-xs text-muted-foreground">
                  {(report.durationMs / 1000).toFixed(1)}s ·{" "}
                  {new Date(report.fetchedAt).toLocaleTimeString()}
                </span>
              </div>
              <p className="mt-2 text-sm break-all">
                <span className="font-semibold">URL:</span>{" "}
                <a className="text-primary hover:underline" href={report.finalUrl} target="_blank" rel="noopener noreferrer">
                  {report.finalUrl}
                </a>
              </p>
            </CardHeader>
            <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Stat label="Violations" value={report.counts.violations} tone={report.counts.violations === 0 ? "good" : "bad"} />
              <Stat label="Passes" value={report.counts.passes} tone="good" />
              <Stat label="Needs review" value={report.counts.incomplete} tone="warn" />
              <Stat label="Not applicable" value={report.counts.inapplicable} tone="neutral" />
            </CardContent>
          </Card>

          {sortedViolations.length === 0 ? (
            <div className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-500/10 p-5 sm:p-6 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1">
                  axe-core found no rule violations on this page.
                </p>
                <p className="text-sm text-emerald-700/90 dark:text-emerald-300/90">
                  Automated tools catch ~30–40 % of real issues — pair this with manual testing
                  using a screen reader and the keyboard.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {sortedViolations.map((v) => (
                <Card key={v.id} className="border-2">
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <CardTitle className="text-base sm:text-lg leading-snug">
                        {v.help}
                      </CardTitle>
                      {v.impact && (
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold border ${
                            IMPACT_BADGE[v.impact] ?? ""
                          }`}
                        >
                          {v.impact.toUpperCase()}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1.5">{v.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {v.tags
                        .filter((t) => t.startsWith("wcag") || t.startsWith("best-practice"))
                        .slice(0, 6)
                        .map((t) => (
                          <Badge key={t} variant="outline" className="text-[10px] uppercase">
                            {t}
                          </Badge>
                        ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span>
                        <span className="font-semibold text-foreground">{v.nodeCount}</span>{" "}
                        {v.nodeCount === 1 ? "instance" : "instances"} on the page
                        {v.nodes.length < v.nodeCount ? ` (showing first ${v.nodes.length})` : ""}
                      </span>
                      <a
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                        href={v.helpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Rule details
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    </div>
                    <ul className="space-y-2">
                      {v.nodes.map((n, idx) => (
                        <li key={idx} className="rounded-md border bg-muted/30 p-3">
                          <p className="text-[11px] uppercase tracking-wide font-semibold text-muted-foreground mb-1">
                            Selector
                          </p>
                          <pre className="text-xs font-mono whitespace-pre-wrap break-all mb-2">
                            {flattenTarget(n.target)}
                          </pre>
                          <p className="text-[11px] uppercase tracking-wide font-semibold text-muted-foreground mb-1">
                            HTML
                          </p>
                          <pre className="text-xs font-mono whitespace-pre-wrap break-all">{n.html}</pre>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  )
}

function flattenTarget(target: Array<string | string[]>): string {
  return target.map((t) => (Array.isArray(t) ? t.join(" >> ") : t)).join(" >> ")
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string
  value: number
  tone: "good" | "bad" | "warn" | "neutral"
}) {
  const toneClass =
    tone === "good"
      ? "text-emerald-700 dark:text-emerald-400"
      : tone === "bad"
        ? "text-red-700 dark:text-red-400"
        : tone === "warn"
          ? "text-amber-700 dark:text-amber-400"
          : "text-foreground"
  return (
    <div className="rounded-xl border bg-muted/30 p-3">
      <div className={`text-2xl sm:text-3xl font-bold ${toneClass}`}>{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}
