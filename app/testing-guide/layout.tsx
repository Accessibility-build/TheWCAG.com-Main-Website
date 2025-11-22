import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Testing Guide - How to Test for WCAG Compliance | TheWCAG",
  description:
    "Master accessibility testing with our 6-step guide. Learn automated tools, manual testing, screen readers & user testing methods. Test WCAG compliance today!",
  keywords: [
    "accessibility testing",
    "WCAG testing",
    "how to test accessibility",
    "accessibility audit",
    "accessibility testing guide",
    "WCAG compliance testing",
    "automated accessibility testing",
    "manual accessibility testing",
    "screen reader testing",
  ],
  openGraph: {
    title: "Accessibility Testing Guide - How to Test for WCAG Compliance",
    description:
      "Comprehensive guide to accessibility testing. Learn automated and manual testing methods for WCAG compliance.",
    type: "website",
    url: "https://thewcag.com/testing-guide",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Testing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Testing Guide - How to Test for WCAG Compliance",
    description: "Comprehensive guide to accessibility testing methods and tools.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/testing-guide",
  },
}

export default function TestingGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

