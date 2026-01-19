import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Lists Example 2026 - WCAG 2.2 Compliant Guide | TheWCAG",
  description:
    "Learn how to create accessible lists with semantic HTML and ARIA patterns. Complete WCAG 2.2 compliant list examples including ordered, unordered, and description lists with free code snippets.",
  keywords: [
    "accessible lists",
    "list accessibility",
    "WCAG 2.2 lists",
    "semantic lists",
    "ordered lists",
    "unordered lists",
    "description lists",
  ],
  openGraph: {
    title: "Accessible Lists Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible lists with semantic HTML and ARIA patterns. Complete WCAG 2.2 examples with free code snippets.",
    type: "article",
    url: "https://thewcag.com/examples/lists",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Lists Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Lists Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible lists with semantic HTML and ARIA patterns. Complete WCAG 2.2 examples.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/lists",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ListsLayout({
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
        name: "Accessible Lists",
        item: "https://thewcag.com/examples/lists",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Lists - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible lists with semantic HTML and ARIA patterns following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/lists",
    step: [
      {
        "@type": "HowToStep",
        name: "Use Semantic List Elements",
        text: "Use ul for unordered lists, ol for ordered lists, and dl for description lists. Avoid using div elements styled to look like lists.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Provide List Context",
        text: "Use list headings or aria-label to provide context for screen reader users. Ensure list items are properly nested within list containers.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Maintain Proper Structure",
        text: "Keep list structure consistent. Don't mix list types unnecessarily. Use nested lists when appropriate for hierarchical content.",
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

