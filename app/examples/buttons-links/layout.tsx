import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Buttons & Links Example 2025 - WCAG 2.2 Compliant Guide | TheWCAG",
  description:
    "Learn how to create accessible buttons and links with proper semantics, labels, states, and keyboard support. Complete WCAG 2.2 compliant button and link examples with free code snippets and best practices.",
  keywords: [
    "accessible buttons",
    "accessible links",
    "WCAG 2.2 buttons",
    "button accessibility",
    "link accessibility",
    "accessible CTAs",
    "button semantics",
    "ARIA button",
  ],
  openGraph: {
    title: "Accessible Buttons & Links Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible buttons and links with proper semantics, labels, states, and keyboard support. Complete WCAG 2.2 examples.",
    type: "article",
    url: "https://thewcag.com/examples/buttons-links",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Buttons & Links Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Buttons & Links Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible buttons and links with proper semantics, labels, states, and keyboard support. Complete WCAG 2.2 examples.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/buttons-links",
  },
}

export default function ButtonsLinksLayout({
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
        name: "Accessible Buttons & Links",
        item: "https://thewcag.com/examples/buttons-links",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Buttons & Links - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible buttons and links with proper semantics, labels, states, and keyboard support following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/buttons-links",
    step: [
      {
        "@type": "HowToStep",
        name: "Use Proper Semantic Elements",
        text: "Use button element for buttons and a element for links. Never use div or span with click handlers. Ensure buttons have accessible names.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Provide Clear Labels",
        text: "Ensure buttons and links have descriptive, accessible names. Use visible text, aria-label, or aria-labelledby. Avoid generic labels like 'click here' or 'read more'.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Ensure Keyboard Accessibility",
        text: "All buttons and links must be keyboard accessible. Provide visible focus indicators. Ensure proper tab order and that interactive elements are reachable via keyboard.",
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

