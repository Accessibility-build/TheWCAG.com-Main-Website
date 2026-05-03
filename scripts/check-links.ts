/**
 * Internal link checker.
 *
 * Crawls every URL the site is expected to expose — every WCAG criterion,
 * every lawsuit, every example, every static page referenced by search and
 * navigation — and asserts each returns HTTP 200 against a running server.
 *
 * Usage (after `next build && next start &`):
 *   BASE_URL=http://localhost:3000 tsx scripts/check-links.ts
 */

import { successCriteria } from '@/lib/wcag-data'
import { getAllLawsuits } from '@/lib/lawsuits-data'
import { getExampleSlugs } from '@/lib/examples-data'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'
const TIMEOUT_MS = 15_000
const CONCURRENCY = 8

const PAGE_FILES = ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'page.mdx', 'page.md']

function hasPageFile(dir: string): boolean {
  return PAGE_FILES.some((f) => {
    try {
      return statSync(join(dir, f)).isFile()
    } catch {
      return false
    }
  })
}

function listAppRouteDirs(root: string, prefix = ''): string[] {
  const entries = readdirSync(root)
  const routes: string[] = []
  for (const entry of entries) {
    if (entry.startsWith('_') || entry.startsWith('.') || entry === 'api') continue
    const full = join(root, entry)
    if (!statSync(full).isDirectory()) continue
    if (entry.startsWith('[')) continue // dynamic routes handled separately
    if (entry.startsWith('(')) {
      // route group — descend without adding to URL prefix
      routes.push(...listAppRouteDirs(full, prefix))
      continue
    }
    const segment = `${prefix}/${entry}`
    if (hasPageFile(full)) routes.push(segment)
    routes.push(...listAppRouteDirs(full, segment))
  }
  return routes
}

const APP_ROOT = join(process.cwd(), 'app')
const staticRoutes = ['/', ...listAppRouteDirs(APP_ROOT)]

const criteriaRoutes = successCriteria.map((c) => `/criteria/${c.number}`)
const lawsuitRoutes = getAllLawsuits().map((l) => `/lawsuits/${l.slug}`)

const allUrls = Array.from(new Set([...staticRoutes, ...criteriaRoutes, ...lawsuitRoutes]))

async function check(path: string): Promise<{ path: string; status: number | string }> {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'GET',
      redirect: 'manual',
      signal: ctrl.signal,
    })
    return { path, status: res.status }
  } catch (err) {
    return { path, status: err instanceof Error ? err.message : 'error' }
  } finally {
    clearTimeout(timer)
  }
}

async function runPool<T, R>(items: T[], n: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const out: R[] = []
  let cursor = 0
  const workers = Array.from({ length: n }, async () => {
    while (cursor < items.length) {
      const idx = cursor++
      out[idx] = await fn(items[idx])
    }
  })
  await Promise.all(workers)
  return out
}

function assertExamplesIndexMatchesFilesystem() {
  const dirs = readdirSync(join(APP_ROOT, 'examples'))
    .filter((entry) => {
      const full = join(APP_ROOT, 'examples', entry)
      return statSync(full).isDirectory() && !entry.startsWith('_')
    })
    .sort()
  const indexed = [...getExampleSlugs()].sort()
  const onlyOnDisk = dirs.filter((d) => !indexed.includes(d))
  const onlyInIndex = indexed.filter((s) => !dirs.includes(s))

  if (onlyOnDisk.length || onlyInIndex.length) {
    console.error('Examples index drift detected:')
    if (onlyOnDisk.length) console.error(`  On disk but missing from lib/examples-data.ts: ${onlyOnDisk.join(', ')}`)
    if (onlyInIndex.length) console.error(`  In lib/examples-data.ts but missing on disk: ${onlyInIndex.join(', ')}`)
    process.exit(1)
  }
  console.log(`Examples index in sync with filesystem (${dirs.length} entries)`)
}

async function main() {
  assertExamplesIndexMatchesFilesystem()
  console.log(`Checking ${allUrls.length} URLs against ${BASE_URL}...`)
  const started = Date.now()
  const results = await runPool(allUrls, CONCURRENCY, check)
  const failures = results.filter((r) => typeof r.status !== 'number' || r.status >= 400)
  const redirects = results.filter((r) => typeof r.status === 'number' && r.status >= 300 && r.status < 400)

  console.log(
    `Done in ${((Date.now() - started) / 1000).toFixed(1)}s — ` +
      `${results.length - failures.length}/${results.length} OK, ` +
      `${redirects.length} redirects, ${failures.length} failed`
  )

  if (redirects.length) {
    console.log('\nRedirects (informational):')
    for (const r of redirects) console.log(`  ${r.status} ${r.path}`)
  }

  if (failures.length) {
    console.error('\nFailures:')
    for (const f of failures) console.error(`  ${f.status} ${f.path}`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
