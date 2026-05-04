import { NextRequest, NextResponse } from "next/server"
import { getAllLawsuits } from "@/lib/lawsuits-data"
import { logger } from "@/lib/logger"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * Quarterly data-freshness audit. Cron-triggered (see vercel.json `crons`).
 *
 * Reports on data sources that decay if left untouched:
 *   - Lawsuit dataset (newest filing date should be < 90 days old)
 *   - Time-sensitive deadline pages (HHS 504, ADA Title II, EAA)
 *   - State-law pages (legislative changes)
 *
 * The endpoint returns a JSON report. The caller decides what to do with it
 * (Vercel cron logs surface it; you can extend with email/Slack later).
 *
 * Auth: must include `Authorization: Bearer $CRON_SECRET` (Vercel cron does
 * this automatically when CRON_SECRET is configured) or a `?secret=…` query.
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  const querySecret = request.nextUrl.searchParams.get("secret")
  const expected = process.env.CRON_SECRET
  if (expected) {
    const authed =
      authHeader === `Bearer ${expected}` || querySecret === expected
    if (!authed) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 })
    }
  }

  const now = Date.now()
  const lawsuits = getAllLawsuits()
  const newestFiling = lawsuits.reduce<number>((max, l) => {
    const t = new Date(l.dateFiled).getTime()
    return Number.isFinite(t) && t > max ? t : max
  }, 0)
  const daysSinceLastFiling = Math.floor((now - newestFiling) / (1000 * 60 * 60 * 24))

  // Pages with content tied to specific dates that need periodic re-checking.
  const dateBoundPages = [
    {
      path: "/ada-title-ii-deadline-extension",
      contentDate: "2026-04-19",
      reason: "DOJ may issue further guidance or extensions",
    },
    {
      path: "/hhs-section-504-deadline",
      contentDate: "2026-05-04",
      reason: "Approaching the May 11 2026 / May 10 2027 deadlines",
    },
    {
      path: "/european-accessibility-act",
      contentDate: "2026-05-04",
      reason: "Member-state enforcement details evolve",
    },
  ]

  const stalePages = dateBoundPages
    .map((p) => ({
      ...p,
      ageDays: Math.floor(
        (now - new Date(p.contentDate).getTime()) / (1000 * 60 * 60 * 24)
      ),
    }))
    .filter((p) => p.ageDays > 90)

  const report = {
    generatedAt: new Date().toISOString(),
    lawsuits: {
      total: lawsuits.length,
      newestFilingDays: daysSinceLastFiling,
      newestFilingFlag:
        daysSinceLastFiling > 60
          ? "stale — consider adding new entries"
          : "fresh",
    },
    dateBoundPages: stalePages.length
      ? stalePages.map((p) => ({
          path: p.path,
          ageDays: p.ageDays,
          reason: p.reason,
        }))
      : "all under the 90-day staleness threshold",
    todo: stalePages.length || daysSinceLastFiling > 60 ? "review-needed" : "ok",
  }

  if (report.todo !== "ok") {
    logger.warn("data-freshness check found stale items", { report })
  }

  return NextResponse.json({ ok: true, report })
}
