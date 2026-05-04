import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LawsuitHubPage } from "@/components/lawsuits/hub-page"
import {
  isStatusKey,
  lawsuitsForStatus,
  statusKeys,
  statusLabel,
} from "@/lib/lawsuits/hub-helpers"

export const dynamicParams = false

interface RouteProps {
  params: Promise<{ status: string }>
}

export async function generateStaticParams() {
  return statusKeys().map((status) => ({ status }))
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { status } = await params
  if (!isStatusKey(status)) return { title: "Status Not Found | TheWCAG" }
  const meta = statusLabel(status)
  const list = lawsuitsForStatus(status)
  const title = `${meta.name} Accessibility Lawsuits | TheWCAG`
  const description = `${list.length} accessibility lawsuits with status "${meta.name}". ${meta.description}`
  return {
    title,
    description,
    keywords: [meta.name, "accessibility lawsuits", "ADA cases", "WCAG litigation"],
    openGraph: {
      title,
      description,
      url: `https://thewcag.com/lawsuits/status/${status}`,
      type: "article",
      siteName: "TheWCAG - An accessibility Guide",
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `https://thewcag.com/lawsuits/status/${status}` },
    robots: { index: true, follow: true },
  }
}

export default async function LawsuitsByStatusPage({ params }: RouteProps) {
  const { status } = await params
  if (!isStatusKey(status)) notFound()
  const meta = statusLabel(status)
  const list = lawsuitsForStatus(status)
  return (
    <LawsuitHubPage
      title={`${meta.name} accessibility lawsuits`}
      description={meta.description}
      canonicalPath={`/lawsuits/status/${status}`}
      breadcrumbLabel={meta.name}
      lawsuits={list}
    />
  )
}
