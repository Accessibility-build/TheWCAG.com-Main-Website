import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Tooltips Example 2025 - WCAG 2.2 Compliant Guide | TheWCAG",
  description:
    "Learn how to create accessible tooltips with proper ARIA patterns and keyboard support. Complete WCAG 2.2 compliant tooltip examples with hover, focus, and keyboard-triggered tooltips with free code snippets.",
  keywords: [
    "accessible tooltips",
    "WCAG 2.2 tooltips",
    "tooltip accessibility",
    "ARIA tooltip",
    "help text",
    "accessible help",
    "tooltip keyboard",
  ],
  openGraph: {
    title: "Accessible Tooltips Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible tooltips with proper ARIA patterns and keyboard support. Complete WCAG 2.2 examples.",
    type: "article",
    url: "https://thewcag.com/examples/tooltips",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Tooltips Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Tooltips Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible tooltips with proper ARIA patterns and keyboard support. Complete WCAG 2.2 examples.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/tooltips",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TooltipsLayout({
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
        name: "Accessible Tooltips",
        item: "https://thewcag.com/examples/tooltips",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Tooltips - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible tooltips with proper ARIA patterns and keyboard support following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/tooltips",
    step: [
      {
        "@type": "HowToStep",
        name: "Use ARIA Tooltip Pattern",
        text: "Use role='tooltip' for the tooltip element and associate it with the trigger using aria-describedby. Ensure the tooltip is a child of the trigger or properly associated.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Add Keyboard Support",
        text: "Make tooltips accessible via keyboard. Use focus events in addition to hover events. Ensure tooltips can be triggered and dismissed with keyboard.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Provide Persistent Access",
        text: "For important information, don't rely solely on tooltips. Consider providing the information in a more persistent way or ensure tooltips are keyboard accessible and don't disappear too quickly.",
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

