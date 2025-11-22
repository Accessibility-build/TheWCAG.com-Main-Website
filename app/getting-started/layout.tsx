import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Getting Started with Web Accessibility - WCAG Guide for Beginners | TheWCAG",
  description:
    "Learn how to get started with web accessibility and WCAG compliance. Step-by-step guide for beginners, developers, and designers. Start making your website accessible today.",
  keywords: [
    "getting started with accessibility",
    "WCAG for beginners",
    "web accessibility guide",
    "accessibility tutorial",
    "how to make website accessible",
    "WCAG compliance guide",
    "accessibility basics",
    "learn web accessibility",
  ],
  openGraph: {
    title: "Getting Started with Web Accessibility - WCAG Guide for Beginners",
    description:
      "Step-by-step guide to getting started with web accessibility and WCAG compliance. Perfect for beginners, developers, and designers.",
    type: "website",
    url: "https://thewcag.com/getting-started",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Getting Started with Web Accessibility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Started with Web Accessibility - WCAG Guide for Beginners",
    description: "Step-by-step guide to getting started with web accessibility and WCAG compliance.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/getting-started",
  },
}

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

