import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Modals & Dialogs Example 2026 - WCAG 2.2 Guide | TheWCAG",
  description:
    "Learn how to create accessible modals and dialogs with proper focus management, keyboard trapping, and ARIA patterns. Complete WCAG 2.2 compliant dialog examples with free code snippets.",
  keywords: [
    "accessible modals",
    "accessible dialogs",
    "WCAG 2.2 modals",
    "modal accessibility",
    "dialog accessibility",
    "focus management",
    "keyboard trapping",
    "ARIA dialog",
  ],
  openGraph: {
    title: "Accessible Modals & Dialogs Example 2025 - WCAG 2.2 Guide",
    description: "Learn how to create accessible modals and dialogs with proper focus management, keyboard trapping, and ARIA patterns. Complete WCAG 2.2 examples.",
    type: "article",
    url: "https://thewcag.com/examples/modals-dialogs",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Modals & Dialogs Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Modals & Dialogs Example 2025 - WCAG 2.2 Guide",
    description: "Learn how to create accessible modals and dialogs with proper focus management, keyboard trapping, and ARIA patterns.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/modals-dialogs",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ModalsDialogsLayout({
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
        name: "Accessible Modals & Dialogs",
        item: "https://thewcag.com/examples/modals-dialogs",
      },
    ],
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Accessible Modals & Dialogs - WCAG 2.2 Guide",
    description: "Step-by-step guide to creating accessible modals and dialogs with proper focus management, keyboard trapping, and ARIA patterns following WCAG 2.2 guidelines.",
    url: "https://thewcag.com/examples/modals-dialogs",
    step: [
      {
        "@type": "HowToStep",
        name: "Use Native Dialog Element",
        text: "For modern browsers, use the native HTML dialog element which provides built-in accessibility features. For older browsers, use ARIA dialog pattern.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Implement Focus Management",
        text: "Move focus into the dialog when it opens and return focus to the trigger when it closes. Trap focus within the dialog using tabindex and focus management.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Add Keyboard Support",
        text: "Ensure Escape key closes the dialog. Provide a visible close button. Ensure all interactive elements within the dialog are keyboard accessible.",
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

