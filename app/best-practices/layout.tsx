import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Accessibility Best Practices - Complete Guide 2025 | TheWCAG",
  description:
    "Master web accessibility with proven best practices that go beyond compliance. Learn WCAG 2.2 strategies for images, forms, keyboard navigation & more with real-world scenarios and code examples.",
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
    "beyond WCAG compliance",
    "accessibility excellence",
    "WCAG 2.2 best practices",
    "accessibility strategies",
  ],
  openGraph: {
    title: "Web Accessibility Best Practices - Complete Guide 2025",
    description:
      "Comprehensive guide to web accessibility best practices with detailed scenarios, code examples, and strategies that go beyond compliance to create exceptional user experiences.",
    type: "article",
    url: "https://thewcag.com/best-practices",
    siteName: "TheWCAG",
    publishedTime: "2025-01-01",
    modifiedTime: new Date().toISOString().split("T")[0],
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Accessibility Best Practices Guide - Beyond Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Accessibility Best Practices - Complete Guide 2025",
    description:
      "Learn accessibility best practices that go beyond compliance. Real-world scenarios, code examples, and strategies for exceptional user experiences.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/best-practices",
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

export default function BestPracticesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

