import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Accessibility Best Practices - Complete Guide 2024 | TheWCAG",
  description:
    "Comprehensive guide to web accessibility best practices with code examples, tips, and actionable recommendations for WCAG 2.2 compliance.",
  keywords: [
    "accessibility best practices",
    "web accessibility best practices",
    "accessibility tips",
    "WCAG best practices",
    "accessible design practices",
    "accessibility guidelines",
    "a11y best practices",
    "accessibility standards",
    "inclusive design",
    "accessible development",
  ],
  openGraph: {
    title: "Web Accessibility Best Practices - Complete Guide 2024",
    description:
      "Comprehensive guide to web accessibility best practices with code examples and actionable recommendations.",
    type: "article",
    url: "https://thewcag.com/best-practices",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Accessibility Best Practices Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Accessibility Best Practices - Complete Guide",
    description: "Comprehensive guide to web accessibility best practices with code examples.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/best-practices",
  },
}

export default function BestPracticesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

