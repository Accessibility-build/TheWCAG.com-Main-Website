import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG FAQ - Frequently Asked Questions About Web Accessibility | TheWCAG",
  description:
    "Get answers to frequently asked questions about WCAG, web accessibility, ADA compliance, and accessibility testing. Learn about WCAG 2.2, accessibility requirements, and best practices.",
  keywords: [
    "WCAG FAQ",
    "accessibility FAQ",
    "web accessibility questions",
    "WCAG 2.2 FAQ",
    "ADA compliance FAQ",
    "accessibility testing FAQ",
    "WCAG compliance questions",
    "accessibility requirements FAQ",
  ],
  openGraph: {
    title: "WCAG FAQ - Frequently Asked Questions About Web Accessibility",
    description:
      "Get answers to common questions about WCAG, web accessibility, compliance, and testing. Comprehensive FAQ for developers and designers.",
    type: "website",
    url: "https://thewcag.com/faq",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WCAG FAQ - Frequently Asked Questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG FAQ - Frequently Asked Questions About Web Accessibility",
    description: "Get answers to common questions about WCAG and web accessibility.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/faq",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

