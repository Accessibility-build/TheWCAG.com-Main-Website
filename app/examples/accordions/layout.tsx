import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Accordions Example 2025 - WCAG 2.2 Compliant Guide | TheWCAG",
  description:
    "Learn how to create accessible accordions with native details/summary and ARIA patterns. Complete WCAG 2.2 compliant accordion examples with keyboard navigation and free code snippets.",
  keywords: [
    "accessible accordions",
    "accordion accessibility",
    "WCAG 2.2 accordions",
    "expandable content",
    "details summary",
    "ARIA accordion",
    "accessible collapsible",
  ],
  openGraph: {
    title: "Accessible Accordions Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible accordions with native details/summary and ARIA patterns. Complete WCAG 2.2 examples with keyboard support.",
    type: "article",
    url: "https://thewcag.com/examples/accordions",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Accordions Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Accordions Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible accordions with native details/summary and ARIA patterns. Complete WCAG 2.2 examples.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/accordions",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AccordionsLayout({
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
        name: "Accessible Accordions",
        item: "https://thewcag.com/examples/accordions",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Accordions - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible accordions with native details/summary and ARIA patterns following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/accordions",
    step: [
      {
        "@type": "HowToStep",
        name: "Use Native Details/Summary",
        text: "For simple accordions, use the native HTML details and summary elements. This provides built-in keyboard support and screen reader compatibility.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Implement ARIA Accordion Pattern",
        text: "For custom accordions, use ARIA roles (button, region), states (aria-expanded, aria-controls), and proper heading hierarchy within accordion panels.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Add Keyboard Support",
        text: "Ensure accordion headers are keyboard accessible. Use Enter or Space to toggle, Arrow keys for navigation between accordion items, and proper focus management.",
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

