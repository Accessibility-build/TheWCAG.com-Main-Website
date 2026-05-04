/**
 * Run axe-core against our own pages from a running dev/start server.
 * Skips the /api/scan SSRF guard that (correctly) blocks localhost.
 */

import { JSDOM, VirtualConsole } from "jsdom"
import { readFile } from "fs/promises"
import { join } from "path"

const BASE_URL = process.env.BASE_URL || "http://localhost:3211"

const PAGES = [
  "/",
  "/aria-cheatsheet",
  "/screen-reader-shortcuts",
  "/scan",
  "/tools/color-blindness-simulator",
  "/lawsuits/year/2026",
  "/lawsuits/category/healthcare",
  "/lawsuits/status/settled",
  "/criteria/tag/keyboard",
  "/criteria/tag/color-contrast",
  "/compliance/state/california",
  "/hhs-section-504-deadline",
  "/european-accessibility-act",
]

interface Violation {
  id: string
  impact: string | null
  description: string
  nodes: Array<{ html: string; target: Array<string | string[]> }>
}

interface AxeWindow {
  axe?: {
    run: (
      ctx: Document,
      opts: { resultTypes: Array<"violations"> }
    ) => Promise<{ violations: Violation[] }>
  }
}

async function loadAxe(): Promise<string> {
  const file = join(process.cwd(), "node_modules", "axe-core", "axe.min.js")
  return readFile(file, "utf-8")
}

async function scan(url: string, axeSrc: string) {
  const res = await fetch(url, { headers: { "User-Agent": "self-scan" } })
  if (!res.ok) return { url, error: `HTTP ${res.status}` }
  const html = await res.text()
  const vc = new VirtualConsole()
  const dom = new JSDOM(html, {
    url,
    runScripts: "dangerously",
    pretendToBeVisual: true,
    virtualConsole: vc,
  })
  const script = dom.window.document.createElement("script")
  script.textContent = axeSrc
  dom.window.document.head.appendChild(script)
  const w = dom.window as unknown as AxeWindow
  if (!w.axe) {
    dom.window.close()
    return { url, error: "axe failed to attach" }
  }
  try {
    const r = await w.axe.run(dom.window.document, { resultTypes: ["violations"] })
    return { url, violations: r.violations }
  } finally {
    dom.window.close()
  }
}

async function main() {
  const axeSrc = await loadAxe()
  console.log(`Self-scanning ${PAGES.length} pages against ${BASE_URL}\n`)

  const allViolations = new Map<string, Set<string>>() // ruleId -> set of urls

  for (const path of PAGES) {
    const url = `${BASE_URL}${path}`
    process.stdout.write(`${path} ... `)
    const result = await scan(url, axeSrc)
    if ("error" in result && result.error) {
      console.log(`ERROR: ${result.error}`)
      continue
    }
    const v = result.violations || []
    if (v.length === 0) {
      console.log("clean ✓")
      continue
    }
    console.log(`${v.length} ${v.length === 1 ? "rule" : "rules"} flagged`)
    for (const violation of v) {
      const set = allViolations.get(violation.id) ?? new Set()
      set.add(path)
      allViolations.set(violation.id, set)
      console.log(`  · [${violation.impact ?? "n/a"}] ${violation.id} (${violation.nodes.length} ${violation.nodes.length === 1 ? "instance" : "instances"})`)
      for (const node of violation.nodes.slice(0, 2)) {
        const target = node.target.map((t) => (Array.isArray(t) ? t.join(" ") : t)).join(" >> ")
        console.log(`      ${target}`)
      }
    }
  }

  console.log("\n=== Aggregate ===")
  if (allViolations.size === 0) {
    console.log("No violations across any scanned page.")
    return
  }
  for (const [rule, urls] of [...allViolations.entries()].sort((a, b) => b[1].size - a[1].size)) {
    console.log(`  ${urls.size}× ${rule}`)
    for (const u of urls) console.log(`      ${u}`)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
