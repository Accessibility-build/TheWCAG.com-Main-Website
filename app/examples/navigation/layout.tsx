import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Navigation Example 2026 - WCAG 2.2 Compliant Guide | TheWCAG",
  description:
    "Learn how to create accessible navigation patterns including semantic nav, breadcrumbs, skip links, mega menus, and tabs. Complete WCAG 2.2 compliant navigation examples with free code snippets.",
  keywords: [
    "accessible navigation",
    "WCAG 2.2 navigation",
    "accessible menu",
    "breadcrumbs accessibility",
    "skip links",
    "accessible tabs",
    "mega menu accessibility",
    "ARIA navigation",
  ],
  openGraph: {
    title: "Accessible Navigation Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible navigation patterns with semantic HTML and ARIA. Complete WCAG 2.2 examples including breadcrumbs, skip links, and menus.",
    type: "article",
    url: "https://thewcag.com/examples/navigation",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Navigation Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Navigation Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible navigation patterns with semantic HTML and ARIA. Complete WCAG 2.2 examples.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/navigation",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function NavigationLayout({
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
        name: "Accessible Navigation",
        item: "https://thewcag.com/examples/navigation",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Navigation - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible navigation patterns including semantic nav, breadcrumbs, skip links, mega menus, and tabs following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/navigation",
    step: [
      {
        "@type": "HowToStep",
        name: "Use Semantic Navigation",
        text: "Wrap navigation in a nav element with an aria-label describing the navigation purpose. Use proper heading hierarchy within navigation.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Add Skip Links",
        text: "Provide skip links to allow users to bypass repetitive navigation and jump to main content. Make skip links visible on focus.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Ensure Keyboard Accessibility",
        text: "Make all navigation items keyboard accessible. Use proper focus indicators. For dropdown menus, implement keyboard navigation with Arrow keys.",
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

