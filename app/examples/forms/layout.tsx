import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Forms Example 2026 - WCAG 2.2 Compliant Guide | TheWCAG",
  description:
    "Learn how to create accessible forms with proper labels, error handling, validation, and multi-step patterns. Complete WCAG 2.2 compliant form examples with free code snippets and best practices.",
  keywords: [
    "accessible forms",
    "WCAG 2.2 forms",
    "form accessibility",
    "accessible validation",
    "form labels",
    "error messages",
    "WCAG 3.3.1",
    "WCAG 3.3.2",
    "accessible form design",
  ],
  openGraph: {
    title: "Accessible Forms Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible forms with proper labels, error handling, validation, and multi-step patterns. Complete WCAG 2.2 examples.",
    type: "website",
    url: "https://thewcag.com/examples/forms",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Forms Examples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Forms Example 2025 - WCAG 2.2 Compliant Guide",
    description: "Learn how to create accessible forms with proper labels, error handling, validation, and multi-step patterns. Complete WCAG 2.2 examples.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/forms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FormsLayout({
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
        name: "Accessible Forms",
        item: "https://thewcag.com/examples/forms",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Forms - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible forms with proper labels, error handling, validation, and multi-step patterns following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/forms",
    step: [
      {
        "@type": "HowToStep",
        name: "Add Proper Labels",
        text: "Associate every form input with a label element using the for attribute matching the input id, or wrap the input in a label element.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Implement Error Messages",
        text: "Provide clear, descriptive error messages that identify the field and explain the issue. Associate errors with inputs using aria-describedby and aria-invalid attributes.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Add Validation",
        text: "Implement both client-side and server-side validation. Use HTML5 validation attributes and provide real-time feedback with ARIA live regions when appropriate.",
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

