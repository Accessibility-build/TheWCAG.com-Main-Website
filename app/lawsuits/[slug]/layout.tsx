import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLawsuitBySlug, getAllLawsuits } from "@/lib/lawsuits-data"

export const dynamicParams = false

export async function generateStaticParams() {
  const lawsuits = getAllLawsuits()
  return lawsuits.map((lawsuit) => ({
    slug: lawsuit.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const lawsuit = getLawsuitBySlug(slug)

  if (!lawsuit) {
    return {
      title: "Lawsuit Not Found | TheWCAG",
      description: "The requested accessibility lawsuit case could not be found.",
    }
  }

  const title = `${lawsuit.title} - Accessibility Lawsuit Case | TheWCAG`
  const description = `${lawsuit.summary} Filed ${new Date(lawsuit.dateFiled).getFullYear()}. ${lawsuit.status === "settled" && lawsuit.settlementAmount ? `Settlement: ${lawsuit.settlementAmount}.` : ""} Learn about this accessibility lawsuit and its impact on digital accessibility.`

  return {
    title,
    description,
    keywords: [
      lawsuit.title,
      "accessibility lawsuit",
      "ADA lawsuit",
      lawsuit.defendant,
      "website accessibility case",
      "digital accessibility legal",
      lawsuit.jurisdiction,
      lawsuit.wcagLevel ? `WCAG ${lawsuit.wcagLevel}` : "",
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://thewcag.com/lawsuits/${slug}`,
      siteName: "TheWCAG - An accessibility Guide",
      images: [
        {
          url: "https://thewcag.com/Logo.png",
          width: 1200,
          height: 630,
          alt: lawsuit.title,
        },
      ],
      publishedTime: lawsuit.dateFiled,
      modifiedTime: lawsuit.dateResolved || lawsuit.dateFiled,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://thewcag.com/Logo.png"],
    },
    alternates: {
      canonical: `https://thewcag.com/lawsuits/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function LawsuitLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lawsuit = getLawsuitBySlug(slug)

  if (!lawsuit) {
    notFound()
  }

  return <>{children}</>
}

