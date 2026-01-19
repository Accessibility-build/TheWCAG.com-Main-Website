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
  const title = `WCAG 2.2 ${criterion.number} ${criterion.title} - Complete Guide with Examples | TheWCAG`
  const description = `Learn WCAG 2.2 success criterion ${criterion.number} ${criterion.title}. ${criterion.summary} Includes examples, testing methods, implementation guide, and code snippets for ${criterion.level} compliance.`

  return {
    title,
    description,
    keywords: [
      `WCAG 2.2 ${criterion.number}`,
      `WCAG ${criterion.number}`,
      `${criterion.number} ${criterion.title}`,
      `WCAG ${criterion.level}`,
      "WCAG 2.2",
      "web accessibility",
      "accessibility guidelines",
      "success criterion",
      criterion.title.toLowerCase(),
      principleName.toLowerCase(),
      "a11y",
      "accessibility compliance",
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://thewcag.com/criteria/${id}`,
      siteName: "TheWCAG - An accessibility Guide",
      images: [
        {
          url: `https://thewcag.com/Logo.png`,
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
      images: [`https://thewcag.com/Logo.png`],
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

function getCriterionFAQSchema(criterion: any, principleName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is WCAG 2.2 ${criterion.number} ${criterion.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${criterion.summary} This is a Level ${criterion.level} success criterion under the ${principleName} principle. ${criterion.whyItMatters || ''}`
        }
      },
      {
        "@type": "Question",
        name: `How do I test for ${criterion.number} compliance?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `To test for ${criterion.number} compliance, ${criterion.testingMethods || 'review the success criterion requirements, test with assistive technologies, and verify that your implementation meets all the requirements.'}`
        }
      },
      {
        "@type": "Question",
        name: `What level is ${criterion.number}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${criterion.number} ${criterion.title} is a Level ${criterion.level} success criterion. ${criterion.level === 'A' ? 'This is a minimum requirement for all WCAG compliance.' : criterion.level === 'AA' ? 'This is required for standard WCAG AA compliance, which is the most common target for organizations.' : 'This is an enhanced requirement for WCAG AAA compliance.'}`
        }
      }
    ]
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
  const faqSchema = getCriterionFAQSchema(criterion, principleName)

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
        url: "https://thewcag.com/Logo.png",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}

