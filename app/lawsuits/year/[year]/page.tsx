import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LawsuitHubPage } from "@/components/lawsuits/hub-page"
import { lawsuitYears, lawsuitsForYear } from "@/lib/lawsuits/hub-helpers"

export const dynamicParams = false

interface RouteProps {
  params: Promise<{ year: string }>
}

export async function generateStaticParams() {
  return lawsuitYears().map((year) => ({ year }))
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { year } = await params
  const list = lawsuitsForYear(year)
  if (list.length === 0) {
    return { title: "Year Not Found | TheWCAG" }
  }
  const settled = list.filter((l) => l.status === "settled").length
  const ongoing = list.filter((l) => l.status === "ongoing").length
  const title = `Accessibility & ADA Lawsuits Filed in ${year} | TheWCAG`
  const description = `${list.length} accessibility and ADA lawsuits filed in ${year} — ${settled} settled, ${ongoing} ongoing. Defendant lists, summaries, settlement amounts, and outcomes.`
  return {
    title,
    description,
    keywords: [
      `ADA lawsuits ${year}`,
      `accessibility lawsuits ${year}`,
      `WCAG lawsuits ${year}`,
      `Title III lawsuits ${year}`,
      "website accessibility lawsuits",
      "ADA settlement",
    ],
    openGraph: {
      title,
      description,
      url: `https://thewcag.com/lawsuits/year/${year}`,
      type: "article",
      siteName: "TheWCAG - An accessibility Guide",
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `https://thewcag.com/lawsuits/year/${year}` },
    robots: { index: true, follow: true },
  }
}

export default async function LawsuitsByYearPage({ params }: RouteProps) {
  const { year } = await params
  const list = lawsuitsForYear(year)
  if (list.length === 0) notFound()
  return (
    <LawsuitHubPage
      title={`Accessibility lawsuits filed in ${year}`}
      description={`Every accessibility-related lawsuit on TheWCAG that was filed in ${year}, with status, defendant, jurisdiction, and a link to the full case summary.`}
      canonicalPath={`/lawsuits/year/${year}`}
      breadcrumbLabel={year}
      lawsuits={list}
    />
  )
}
