import type { Metadata } from "next"

function getChecklistFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I use the WCAG 2.2 checklist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use our interactive checklist to track your WCAG 2.2 compliance progress. Check off each success criterion as you implement it, filter by level (A, AA, AAA) or principle, and save your progress. You can also download a PDF version for offline use."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between WCAG A, AA, and AAA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG has three conformance levels: Level A (minimum requirements), Level AA (standard compliance - most common target), and Level AAA (enhanced accessibility). Most organizations aim for Level AA compliance as it's the standard for legal compliance."
        }
      },
      {
        "@type": "Question",
        name: "Can I download the WCAG 2.2 checklist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can download a free PDF version of our WCAG 2.2 checklist. The PDF includes all 86 success criteria organized by principle and level, making it easy to use offline or share with your team."
        }
      },
      {
        "@type": "Question",
        name: "How many success criteria are in WCAG 2.2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 has 86 success criteria: 29 under Perceivable, 29 under Operable, 17 under Understandable, and 2 under Robust. For AA compliance, you need to meet all Level A and Level AA criteria."
        }
      }
    ]
  }
}

export const metadata: Metadata = {
  title: "Free WCAG 2.2 AA Compliance Checklist 2025 | Download PDF | TheWCAG",
  description:
    "Complete WCAG 2.2 AA compliance checklist with all 86 success criteria. Download free PDF, use interactive checklist, track progress, and achieve accessibility compliance. Filter by level, save your progress.",
  keywords: [
    "WCAG 2.2 checklist",
    "WCAG AA checklist",
    "accessibility checklist",
    "WCAG compliance checklist",
    "WCAG 2.2 AA checklist",
    "free WCAG checklist",
    "download WCAG checklist",
    "accessibility compliance checklist",
    "WCAG audit checklist",
    "web accessibility checklist",
    "a11y checklist",
    "ADA compliance checklist",
  ],
  openGraph: {
    title: "Free WCAG 2.2 AA Compliance Checklist 2025 | Download PDF",
    description:
      "Complete WCAG 2.2 AA compliance checklist with all 86 success criteria. Download free PDF, use interactive checklist, and achieve accessibility compliance.",
    type: "website",
    url: "https://thewcag.com/checklist",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Free WCAG 2.2 AA Compliance Checklist 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free WCAG 2.2 AA Compliance Checklist 2025 | Download PDF",
    description:
      "Complete WCAG 2.2 AA compliance checklist with all 86 success criteria. Download free PDF and use interactive checklist.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/checklist",
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

export default function ChecklistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqSchema = getChecklistFAQSchema()
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "WCAG 2.2 Checklist",
        item: "https://thewcag.com/checklist",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}

