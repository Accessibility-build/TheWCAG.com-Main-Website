import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Input Fields Example 2025 - WCAG 2.2 Form Implementation Guide | TheWCAG",
  description:
    "Learn how to create accessible input fields with proper labels, error messages, and validation. Complete WCAG 2.2 compliant form examples with code snippets. Implement WCAG 3.3.1, 3.3.2, and 4.1.2 today.",
  keywords: [
    "accessible input fields",
    "accessible forms",
    "WCAG form examples",
    "accessible labels",
    "form accessibility",
    "error messages accessibility",
    "WCAG 3.3.1",
    "WCAG 3.3.2",
    "WCAG 4.1.2",
    "accessible validation",
  ],
  openGraph: {
    title: "Accessible Input Fields Example 2025 - WCAG 2.2 Form Implementation Guide",
    description:
      "Learn how to create accessible input fields with proper labels, error messages, and validation. Complete WCAG 2.2 compliant form examples with code snippets.",
    type: "article",
    url: "https://thewcag.com/examples/accessible-input-fields",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Input Fields Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Input Fields Example 2025 - WCAG 2.2 Form Implementation Guide",
    description:
      "Learn how to create accessible input fields with proper labels, error messages, and validation. Complete WCAG 2.2 compliant examples.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/accessible-input-fields",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function AccessibleInputFieldsLayout({
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
        name: "Accessible Input Fields",
        item: "https://thewcag.com/examples/accessible-input-fields",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Input Fields - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible input fields with proper labels, error messages, and validation following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/accessible-input-fields",
    step: [
      {
        "@type": "HowToStep",
        name: "Add Proper Labels",
        text: "Use the label element with the for attribute matching the input id, or wrap the input in a label element.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Implement Error Messages",
        text: "Provide clear, descriptive error messages that identify the field and explain the issue. Associate errors with inputs using aria-describedby.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Add Validation",
        text: "Implement client-side and server-side validation. Use HTML5 validation attributes and ARIA states for real-time feedback.",
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

