import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Progress Indicators Example 2026 - WCAG 2.2 Guide | TheWCAG",
  description:
    "Learn how to create accessible progress indicators with native HTML and ARIA patterns. Complete WCAG 2.2 compliant progress examples including progress bars, loading states, and status messages with free code snippets.",
  keywords: [
    "accessible progress",
    "WCAG 2.2 progress",
    "progress bar accessibility",
    "loading indicators",
    "status messages",
    "ARIA progressbar",
    "accessible loading",
  ],
  openGraph: {
    title: "Accessible Progress Indicators Example 2025 - WCAG 2.2 Guide",
    description: "Learn how to create accessible progress indicators with native HTML and ARIA patterns. Complete WCAG 2.2 examples with status updates.",
    type: "article",
    url: "https://thewcag.com/examples/progress-indicators",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Progress Indicators Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Progress Indicators Example 2025 - WCAG 2.2 Guide",
    description: "Learn how to create accessible progress indicators with native HTML and ARIA patterns. Complete WCAG 2.2 examples.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/progress-indicators",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ProgressIndicatorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
        name: "Examples",
        item: "https://thewcag.com/examples",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Accessible Progress Indicators",
        item: "https://thewcag.com/examples/progress-indicators",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Progress Indicators - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible progress indicators with native HTML and ARIA patterns following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/progress-indicators",
    step: [
      {
        "@type": "HowToStep",
        name: "Use Native Progress Element",
        text: "For determinate progress, use the native HTML progress element. For indeterminate progress, use ARIA progressbar role with aria-busy.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Provide Status Updates",
        text: "Use aria-live regions to announce progress updates to screen reader users. Update aria-valuenow and aria-valuetext as progress changes.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Add Visual Indicators",
        text: "Ensure progress indicators are visually clear. Use color contrast that meets WCAG 2.2 requirements. Don't rely on color alone to convey progress.",
        position: 3,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {children}
    </>
  )
}

