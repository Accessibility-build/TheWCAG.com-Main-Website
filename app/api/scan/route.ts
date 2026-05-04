import { NextRequest, NextResponse } from "next/server"
import { JSDOM, VirtualConsole } from "jsdom"
import { readFile } from "fs/promises"
import { join } from "path"
import { logger } from "@/lib/logger"
import { clientIdentifier, getRateLimiter, rateLimitHeaders } from "@/lib/rate-limit"
import { validateScanUrl } from "@/lib/scan-validation"

interface AxeRunResultLike {
  violations: AxeViolation[]
  passes: AxeViolation[]
  incomplete: AxeViolation[]
  inapplicable: AxeViolation[]
}

interface AxeOnWindow {
  run: (
    ctx: Document,
    opts: { resultTypes?: Array<"violations" | "passes" | "incomplete" | "inapplicable"> }
  ) => Promise<AxeRunResultLike>
}

// Load axe-core's UMD bundle from disk once per process. Going through the
// filesystem (rather than `import axe from "axe-core"`) avoids Turbopack
// bundling the 1.2 MB script in a way that breaks its `window.axe` IIFE.
let axeSourcePromise: Promise<string> | null = null
function loadAxeSource(): Promise<string> {
  if (!axeSourcePromise) {
    axeSourcePromise = (async () => {
      const file = join(process.cwd(), "node_modules", "axe-core", "axe.min.js")
      return await readFile(file, "utf-8")
    })()
  }
  return axeSourcePromise
}

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
// Vercel function timeout — axe-core + JSDOM against a moderate site can run
// 5–15s. 60s requires Pro; the runtime caps to plan limits if smaller.
export const maxDuration = 60

// Per-IP throttle: 10 scans per minute and 60 per hour. Burst-friendly for
// dashboards; brutal enough to deter scripted abuse.
const SCAN_BURST = { name: "scan-burst", requests: 10, windowSeconds: 60 }
const SCAN_HOURLY = { name: "scan-hourly", requests: 60, windowSeconds: 3600 }

const FETCH_TIMEOUT_MS = 12_000
const MAX_HTML_BYTES = 5 * 1024 * 1024 // 5 MB
const USER_AGENT = "TheWCAGScanBot/1.0 (+https://thewcag.com/scan)"

interface AxeNode {
  html: string
  target: Array<string | string[]>
  failureSummary?: string
}

interface AxeViolation {
  id: string
  impact: "minor" | "moderate" | "serious" | "critical" | null
  description: string
  help: string
  helpUrl: string
  tags: string[]
  nodes: AxeNode[]
}

interface ScanResponse {
  ok: true
  url: string
  finalUrl: string
  fetchedAt: string
  durationMs: number
  counts: { violations: number; passes: number; incomplete: number; inapplicable: number }
  violations: Array<Omit<AxeViolation, "nodes"> & { nodeCount: number; nodes: AxeNode[] }>
}

function badRequest(error: string) {
  return NextResponse.json({ ok: false, error }, { status: 400 })
}

export async function POST(request: NextRequest) {
  try {
    return await runScan(request)
  } catch (err) {
    logger.error("scan handler crashed", err)
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json(
      { ok: false, error: `Scan handler crashed: ${message}` },
      { status: 500 }
    )
  }
}

async function runScan(request: NextRequest) {
  const started = Date.now()

  // Rate limit before doing any expensive work.
  const ip = clientIdentifier(request.headers)
  const burst = await getRateLimiter(SCAN_BURST).limit(ip)
  if (!burst.success) {
    return NextResponse.json(
      {
        ok: false,
        error: `Too many scans — please wait until ${new Date(burst.reset).toISOString()} before trying again.`,
      },
      { status: 429, headers: rateLimitHeaders(burst) }
    )
  }
  const hourly = await getRateLimiter(SCAN_HOURLY).limit(ip)
  if (!hourly.success) {
    return NextResponse.json(
      {
        ok: false,
        error: `Hourly scan quota reached. Try again after ${new Date(hourly.reset).toISOString()}.`,
      },
      { status: 429, headers: rateLimitHeaders(hourly) }
    )
  }

  let rawUrl: string
  try {
    const body = await request.json()
    rawUrl = typeof body?.url === "string" ? body.url : ""
  } catch {
    return badRequest("Request body must be JSON: { url: string }.")
  }

  const validation = validateScanUrl(rawUrl)
  if (!validation.ok) return badRequest(validation.message)
  const parsed = validation.url

  const ctrl = new AbortController()
  const timeout = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS)
  let fetchRes: Response
  try {
    fetchRes = await fetch(parsed.href, {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml",
      },
      signal: ctrl.signal,
    })
  } catch (err) {
    clearTimeout(timeout)
    const message = err instanceof Error ? err.message : "fetch failed"
    return NextResponse.json(
      {
        ok: false,
        error:
          ctrl.signal.aborted
            ? `Timed out fetching ${parsed.hostname} after ${FETCH_TIMEOUT_MS / 1000}s`
            : `Couldn't fetch the URL: ${message}`,
      },
      { status: 502 }
    )
  } finally {
    clearTimeout(timeout)
  }

  if (!fetchRes.ok) {
    return NextResponse.json(
      { ok: false, error: `Target responded ${fetchRes.status} ${fetchRes.statusText}` },
      { status: 502 }
    )
  }

  const contentType = fetchRes.headers.get("content-type") ?? ""
  if (!/text\/html|application\/xhtml/.test(contentType)) {
    return NextResponse.json(
      { ok: false, error: `Target returned non-HTML content (${contentType || "unknown"}).` },
      { status: 415 }
    )
  }

  const reader = fetchRes.body?.getReader()
  if (!reader) {
    return NextResponse.json({ ok: false, error: "Empty response body." }, { status: 502 })
  }
  const chunks: Uint8Array[] = []
  let total = 0
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    if (value) {
      total += value.byteLength
      if (total > MAX_HTML_BYTES) {
        return NextResponse.json(
          { ok: false, error: `Target HTML exceeded ${MAX_HTML_BYTES / 1024 / 1024} MB cap.` },
          { status: 413 }
        )
      }
      chunks.push(value)
    }
  }
  const buf = new Uint8Array(total)
  let offset = 0
  for (const c of chunks) {
    buf.set(c, offset)
    offset += c.byteLength
  }
  const html = new TextDecoder("utf-8").decode(buf)

  const virtualConsole = new VirtualConsole()
  virtualConsole.on("error", () => {})
  virtualConsole.on("warn", () => {})
  virtualConsole.on("jsdomError", () => {})

  const dom = new JSDOM(html, {
    url: fetchRes.url || parsed.href,
    runScripts: "dangerously",
    pretendToBeVisual: true,
    virtualConsole,
  })

  // Inject axe-core's UMD bundle as a real <script> so its IIFE attaches to
  // dom.window.axe. We read it from disk (see loadAxeSource above).
  const axeSource = await loadAxeSource()
  const scriptEl = dom.window.document.createElement("script")
  scriptEl.textContent = axeSource
  dom.window.document.head.appendChild(scriptEl)

  const axe = (dom.window as unknown as { axe?: AxeOnWindow }).axe
  if (!axe || typeof axe.run !== "function") {
    dom.window.close()
    return NextResponse.json(
      { ok: false, error: "axe-core failed to initialise inside the JSDOM sandbox." },
      { status: 500 }
    )
  }

  let report: AxeRunResultLike
  try {
    report = await axe.run(dom.window.document, {
      resultTypes: ["violations", "passes", "incomplete", "inapplicable"],
    })
  } catch (err) {
    logger.error("axe.run failed", err)
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json(
      { ok: false, error: `axe-core failed while analysing the page: ${message}` },
      { status: 500 }
    )
  } finally {
    dom.window.close()
  }

  const violations = report.violations.map((v) => ({
    id: v.id,
    impact: v.impact,
    description: v.description,
    help: v.help,
    helpUrl: v.helpUrl,
    tags: v.tags,
    nodeCount: v.nodes.length,
    // Cap nodes to avoid massive payloads
    nodes: v.nodes.slice(0, 5),
  }))

  const response: ScanResponse = {
    ok: true,
    url: parsed.href,
    finalUrl: fetchRes.url || parsed.href,
    fetchedAt: new Date().toISOString(),
    durationMs: Date.now() - started,
    counts: {
      violations: report.violations.length,
      passes: report.passes.length,
      incomplete: report.incomplete.length,
      inapplicable: report.inapplicable.length,
    },
    violations,
  }
  return NextResponse.json(response)
}
