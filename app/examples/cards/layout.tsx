import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Cards Example 2025 - WCAG 2.2 Compliant Guide | TheWCAG",
  description:
    "Learn how to create accessible card components with proper heading hierarchy, keyboard support, and ARIA patterns. Complete WCAG 2.2 compliant card examples with free code snippets.",
  keywords: [
    "accessible cards",
    "card accessibility",
    "WCAG 2.2 cards",
    "card components",
    "accessible card design",
    "WCAG compliant cards",
  ],
  openGraph: {
    title: "Accessible Cards Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible card components with proper heading hierarchy, keyboard support, and ARIA patterns. Complete WCAG 2.2 examples.",
    type: "article",
    url: "https://thewcag.com/examples/cards",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Cards Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Cards Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible card components with proper heading hierarchy, keyboard support, and ARIA patterns.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/cards",
  },
}

export default function CardsLayout({
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
        name: "Accessible Cards",
        item: "https://thewcag.com/examples/cards",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Cards - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible card components with proper heading hierarchy, keyboard support, and ARIA patterns following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/cards",
    step: [
      {
        "@type": "HowToStep",
        name: "Use Semantic HTML",
        text: "Use proper heading elements (h2, h3) for card titles and semantic HTML structure. Ensure cards are keyboard accessible.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Add Keyboard Support",
        text: "Make interactive cards keyboard accessible. If cards are clickable, use button or anchor elements, not div elements.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Provide Focus Indicators",
        text: "Ensure cards have visible focus indicators when navigated via keyboard. Use CSS to style focus states clearly.",
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

