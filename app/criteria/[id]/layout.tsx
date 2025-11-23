import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCriterionById, successCriteria } from "@/lib/wcag-data"

export const dynamicParams = false

export async function generateStaticParams() {
  // Generate all possible criterion IDs from the data
  return successCriteria.map((criterion) => ({
    id: criterion.number, // Use the number format (e.g., "1.1.1")
  }))
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

