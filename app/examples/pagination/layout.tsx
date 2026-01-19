import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Pagination Example 2025 - WCAG 2.2 Compliant Guide | TheWCAG",
  description:
    "Learn how to create accessible pagination with proper navigation, keyboard support, and ARIA labels. Complete WCAG 2.2 compliant pagination examples with free code snippets.",
  keywords: [
    "accessible pagination",
    "pagination accessibility",
    "WCAG 2.2 pagination",
    "accessible page navigation",
    "keyboard navigation pagination",
    "ARIA pagination",
  ],
  openGraph: {
    title: "Accessible Pagination - WCAG Compliant Examples",
    description: "Learn how to create accessible pagination with proper navigation.",
    type: "article",
    url: "https://thewcag.com/examples/pagination",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Pagination Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Pagination - WCAG Compliant Examples",
    description: "Learn how to create accessible pagination with proper navigation.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/pagination",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PaginationLayout({
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
        name: "Accessible Pagination",
        item: "https://thewcag.com/examples/pagination",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Pagination - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible pagination with proper navigation, keyboard support, and ARIA labels following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/pagination",
    step: [
      {
        "@type": "HowToStep",
        name: "Use Semantic Navigation",
        text: "Wrap pagination controls in a nav element with aria-label describing the pagination purpose.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Add Keyboard Support",
        text: "Ensure all pagination links are keyboard accessible. Use proper focus indicators and allow arrow key navigation.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Provide Current Page Indicator",
        text: "Use aria-current='page' on the current page link and visually distinguish it from other links.",
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

