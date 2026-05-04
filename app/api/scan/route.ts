import { NextRequest, NextResponse } from "next/server"
import { JSDOM, VirtualConsole } from "jsdom"
import { readFile } from "fs/promises"
import { join } from "path"
import { logger } from "@/lib/logger"

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

function isPrivateHost(hostname: string): boolean {
  const lower = hostname.toLowerCase()
  if (lower === "localhost" || lower === "127.0.0.1" || lower === "0.0.0.0" || lower === "::1") return true
  if (lower.endsWith(".localhost") || lower.endsWith(".internal") || lower.endsWith(".local")) return true
  // IPv4 private ranges
  const m = lower.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)
  if (m) {
    const a = +m[1]
    const b = +m[2]
    if (a === 10) return true
    if (a === 127) return true
    if (a === 169 && b === 254) return true
    if (a === 172 && b >= 16 && b <= 31) return true
    if (a === 192 && b === 168) return true
  }
  return false
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
  let url: string
  try {
    const body = await request.json()
    url = typeof body?.url === "string" ? body.url.trim() : ""
  } catch {
    return badRequest("Request body must be JSON: { url: string }.")
  }
  if (!url) return badRequest("Provide a URL to scan.")

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return badRequest("That doesn't look like a valid URL. Include http:// or https://.")
  }
  if (!/^https?:$/.test(parsed.protocol)) {
    return badRequest("Only http and https URLs are supported.")
  }
  if (isPrivateHost(parsed.hostname)) {
    return badRequest("Scanning of private, internal, or loopback hosts is not allowed.")
  }

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
