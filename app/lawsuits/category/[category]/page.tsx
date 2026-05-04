import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LawsuitHubPage } from "@/components/lawsuits/hub-page"
import {
  categoryKeys,
  categoryLabel,
  isCategoryKey,
  lawsuitsForCategory,
} from "@/lib/lawsuits/hub-helpers"

export const dynamicParams = false

interface RouteProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return categoryKeys().map((category) => ({ category }))
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { category } = await params
  if (!isCategoryKey(category)) return { title: "Category Not Found | TheWCAG" }
  const meta = categoryLabel(category)
  const list = lawsuitsForCategory(category)
  const title = `${meta.name} Accessibility Lawsuits | TheWCAG`
  const description = `${list.length} ${meta.name.toLowerCase()} accessibility lawsuits. ${meta.description}`
  return {
    title,
    description,
    keywords: [meta.name, "accessibility lawsuits", "ADA cases", "WCAG litigation"],
    openGraph: {
      title,
      description,
      url: `https://thewcag.com/lawsuits/category/${category}`,
      type: "article",
      siteName: "TheWCAG - An accessibility Guide",
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `https://thewcag.com/lawsuits/category/${category}` },
    robots: { index: true, follow: true },
  }
}

export default async function LawsuitsByCategoryPage({ params }: RouteProps) {
  const { category } = await params
  if (!isCategoryKey(category)) notFound()
  const meta = categoryLabel(category)
  const list = lawsuitsForCategory(category)
  return (
    <LawsuitHubPage
      title={`${meta.name} accessibility lawsuits`}
      description={meta.description}
      canonicalPath={`/lawsuits/category/${category}`}
      breadcrumbLabel={meta.name}
      lawsuits={list}
    />
  )
}
