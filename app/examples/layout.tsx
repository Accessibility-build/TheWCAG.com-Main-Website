import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Examples - Real-World WCAG Implementation Examples | TheWCAG",
  description:
    "Explore real-world examples of accessible web components and patterns. Learn how to implement WCAG success criteria with practical code examples for forms, navigation, media, and more.",
  keywords: [
    "accessibility examples",
    "WCAG examples",
    "accessible components",
    "accessibility code examples",
    "accessible forms",
    "accessible navigation",
    "a11y examples",
    "accessibility patterns",
    "accessible UI components",
  ],
  openGraph: {
    title: "Accessibility Examples - Real-World WCAG Implementation Examples",
    description:
      "Explore real-world examples of accessible web components and patterns with practical code examples.",
    type: "website",
    url: "https://thewcag.com/examples",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Examples - Real-World WCAG Implementation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Examples - Real-World WCAG Implementation Examples",
    description:
      "Explore real-world examples of accessible web components and patterns with practical code examples.",
    images: ["https://thewcag.com/og-image.png"],
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
  return <>{children}</>
}

