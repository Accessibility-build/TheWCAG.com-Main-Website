import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Examples 2026 - Real-World WCAG 2.2 Implementation Guide | TheWCAG",
  description:
    "Explore real-world accessible web components & patterns. Learn WCAG 2.2 implementation with practical code examples for forms, navigation, tables, modals & more. Free code snippets included. Start building accessible UI today!",
  keywords: [
    "accessibility examples",
    "WCAG 2.2 examples",
    "accessible components",
    "accessibility code examples",
    "accessible forms",
    "accessible navigation",
    "a11y examples",
    "accessibility patterns",
    "accessible UI components",
    "WCAG examples",
    "accessible code snippets",
    "web accessibility examples",
  ],
  openGraph: {
    title: "Accessibility Examples 2025 - Real-World WCAG 2.2 Implementation Guide",
    description:
      "Explore real-world examples of accessible web components and patterns with practical WCAG 2.2 code examples. Free code snippets included.",
    type: "website",
    url: "https://thewcag.com/examples",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Examples - Real-World WCAG Implementation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Examples 2025 - Real-World WCAG 2.2 Implementation Guide",
    description:
      "Explore real-world examples of accessible web components and patterns with practical WCAG 2.2 code examples. Free code snippets included.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples",
  },
}

export default function ExamplesLayout({
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
        name: "Accessibility Examples",
        item: "https://thewcag.com/examples",
      },
    ],
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "WCAG 2.2 Accessibility Examples",
    description: "Collection of real-world accessible web component examples following WCAG 2.2 guidelines",
    url: "https://thewcag.com/examples",
    numberOfItems: 13,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accessible Input Fields",
        url: "https://thewcag.com/examples/accessible-input-fields",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Accessible Tables",
        url: "https://thewcag.com/examples/tables",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Accessible Forms",
        url: "https://thewcag.com/examples/forms",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Accessible Navigation",
        url: "https://thewcag.com/examples/navigation",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Accessible Modals & Dialogs",
        url: "https://thewcag.com/examples/modals-dialogs",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {children}
    </>
  )
}

