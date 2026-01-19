import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Dropdowns & Selects Example 2026 - WCAG 2.2 Guide | TheWCAG",
  description:
    "Learn how to create accessible dropdowns and selects with native HTML and ARIA combobox patterns. Complete WCAG 2.2 compliant select examples with keyboard navigation and free code snippets.",
  keywords: [
    "accessible dropdowns",
    "accessible selects",
    "WCAG 2.2 dropdowns",
    "combobox accessibility",
    "autocomplete accessibility",
    "select accessibility",
    "ARIA combobox",
  ],
  openGraph: {
    title: "Accessible Dropdowns & Selects Example 2025 - WCAG 2.2 Guide",
    description: "Learn how to create accessible dropdowns and selects with native HTML and ARIA combobox patterns. Complete WCAG 2.2 examples with keyboard support.",
    type: "article",
    url: "https://thewcag.com/examples/dropdowns-selects",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Dropdowns & Selects Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Dropdowns & Selects Example 2025 - WCAG 2.2 Guide",
    description: "Learn how to create accessible dropdowns and selects with native HTML and ARIA combobox patterns. Complete WCAG 2.2 examples.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/dropdowns-selects",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DropdownsSelectsLayout({
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
        name: "Accessible Dropdowns & Selects",
        item: "https://thewcag.com/examples/dropdowns-selects",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Dropdowns & Selects - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible dropdowns and selects with native HTML and ARIA combobox patterns following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/dropdowns-selects",
    step: [
      {
        "@type": "HowToStep",
        name: "Use Native Select When Possible",
        text: "For simple dropdowns, use the native HTML select element with proper label association. This provides built-in accessibility.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Implement ARIA Combobox for Custom Dropdowns",
        text: "For custom dropdowns, use ARIA combobox pattern with proper roles (combobox, listbox, option), states (aria-expanded, aria-selected), and keyboard navigation.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Add Keyboard Support",
        text: "Implement full keyboard support: Arrow keys to navigate options, Enter/Space to select, Escape to close, and proper focus management.",
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

