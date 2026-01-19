import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Tables Example 2025 - WCAG 2.2 Compliant Table Guide | TheWCAG",
  description:
    "Learn how to create accessible tables with semantic HTML and ARIA patterns. Complete WCAG 2.2 compliant examples including basic, sortable, responsive, and complex multi-level header tables. Free code examples included.",
  keywords: [
    "accessible tables",
    "WCAG tables",
    "semantic tables",
    "ARIA tables",
    "sortable tables",
    "responsive tables",
    "table accessibility",
  ],
  openGraph: {
    title: "Accessible Tables - WCAG Compliant Table Examples",
    description: "Learn how to create accessible tables with semantic HTML and ARIA patterns.",
    type: "website",
    url: "https://thewcag.com/examples/tables",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Tables Examples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Tables - WCAG Compliant Table Examples",
    description: "Learn how to create accessible tables with semantic HTML and ARIA patterns.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/tables",
  },
}

export default function TablesLayout({
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
        name: "Accessible Tables",
        item: "https://thewcag.com/examples/tables",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Tables - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible tables with semantic HTML, proper headers, and ARIA patterns following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/tables",
    step: [
      {
        "@type": "HowToStep",
        name: "Use Semantic HTML",
        text: "Use table, thead, tbody, th, and td elements. Use th elements for header cells with scope attributes.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Add Table Captions",
        text: "Use the caption element to provide a descriptive title for the table.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Implement Complex Headers",
        text: "For multi-level headers, use colspan and rowspan attributes, and associate header cells with data cells using headers attribute.",
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

