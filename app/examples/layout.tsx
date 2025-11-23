import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Examples - Real-World WCAG Implementation Examples | TheWCAG",
  description:
    "Explore real-world accessible web components & patterns. Learn WCAG implementation with practical code examples for forms, navigation, media & more. Start building accessible UI today!",
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
    title: "Accessibility Examples - Real-World WCAG Implementation Examples",
    description:
      "Explore real-world examples of accessible web components and patterns with practical code examples.",
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
  return <>{children}</>
}

