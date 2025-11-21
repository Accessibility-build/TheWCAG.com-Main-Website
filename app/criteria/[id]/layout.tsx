import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCriterionById } from "@/lib/wcag-data"

export const dynamicParams = false

export async function generateStaticParams() {
  // Generate all possible criterion IDs
  const ids = [
    "1.1.1", "1.2.1", "1.2.2", "1.2.3", "1.2.4", "1.2.5", "1.2.6", "1.2.7", "1.2.8", "1.2.9",
    "1.3.1", "1.3.2", "1.3.3", "1.3.4", "1.3.5", "1.3.6",
    "1.4.1", "1.4.2", "1.4.3", "1.4.4", "1.4.5", "1.4.6", "1.4.7", "1.4.8", "1.4.9", "1.4.10", "1.4.11", "1.4.12", "1.4.13",
    "2.1.1", "2.1.2", "2.1.3", "2.1.4",
    "2.2.1", "2.2.2", "2.2.3", "2.2.4", "2.2.5", "2.2.6",
    "2.3.1", "2.3.2", "2.3.3",
    "2.4.1", "2.4.2", "2.4.3", "2.4.4", "2.4.5", "2.4.6", "2.4.7", "2.4.8", "2.4.9", "2.4.10", "2.4.11", "2.4.12", "2.4.13",
    "2.5.1", "2.5.2", "2.5.3", "2.5.4", "2.5.5", "2.5.6", "2.5.7", "2.5.8",
    "3.1.1", "3.1.2", "3.1.3", "3.1.4", "3.1.5", "3.1.6",
    "3.2.1", "3.2.2", "3.2.3", "3.2.4", "3.2.5", "3.2.6",
    "3.3.1", "3.3.2", "3.3.3", "3.3.4", "3.3.5", "3.3.6", "3.3.7", "3.3.8", "3.3.9",
    "4.1.1", "4.1.2", "4.1.3",
  ]
  
  return ids.map((id) => ({ id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  // Convert dot format (1.1.1) to dash format (1-1-1)
  const criterionId = id.replace(/\./g, "-")
  const criterion = getCriterionById(criterionId)

  if (!criterion) {
    return {
      title: "Criterion Not Found | TheWCAG",
      description: "The requested WCAG success criterion could not be found.",
    }
  }

  const principleName = criterion.principle.charAt(0).toUpperCase() + criterion.principle.slice(1)
  const title = `${criterion.number} ${criterion.title} - WCAG ${criterion.level} | TheWCAG`
  const description = `${criterion.summary} Learn about ${criterion.number} ${criterion.title}, a WCAG ${criterion.level} success criterion under ${principleName}. ${criterion.whyItMatters}`

  return {
    title,
    description,
    keywords: [
      `WCAG ${criterion.number}`,
      `WCAG ${criterion.level}`,
      criterion.title,
      "web accessibility",
      "accessibility guidelines",
      principleName.toLowerCase(),
      criterion.guideline.toLowerCase(),
      "a11y",
      "accessibility compliance",
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://thewcag.com/criteria/${id}`,
      siteName: "TheWCAG",
      images: [
        {
          url: `https://thewcag.com/og-image-${criterion.level}.png`,
          width: 1200,
          height: 630,
          alt: `${criterion.number} ${criterion.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://thewcag.com/og-image-${criterion.level}.png`],
    },
    alternates: {
      canonical: `https://thewcag.com/criteria/${id}`,
    },
  }
}

export default async function CriteriaLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  // Convert dot format (1.1.1) to dash format (1-1-1)
  const criterionId = id.replace(/\./g, "-")
  const criterion = getCriterionById(criterionId)

  if (!criterion) {
    return <>{children}</>
  }

  const principleName = criterion.principle.charAt(0).toUpperCase() + criterion.principle.slice(1)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${criterion.number} ${criterion.title}`,
    description: criterion.description,
    url: `https://thewcag.com/criteria/${id}`,
    author: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/logo.png",
      },
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://thewcag.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Principles",
          item: "https://thewcag.com/principles",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: principleName,
          item: `https://thewcag.com/principles/${criterion.principle}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: `${criterion.number} ${criterion.title}`,
          item: `https://thewcag.com/criteria/${id}`,
        },
      ],
    },
    mainEntityOfPage: {
      "@type": "TechArticle",
      headline: `${criterion.number} ${criterion.title}`,
      description: criterion.summary,
      about: {
        "@type": "Thing",
        name: "Web Content Accessibility Guidelines",
        alternateName: "WCAG 2.2",
      },
      keywords: [
        `WCAG ${criterion.number}`,
        `WCAG ${criterion.level}`,
        criterion.title,
        principleName,
        criterion.guideline,
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}

