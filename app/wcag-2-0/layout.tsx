import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG 2.0 - Web Content Accessibility Guidelines 2.0 (2008) | TheWCAG",
  description:
    "Learn about WCAG 2.0, published in December 2008. Discover the POUR principles, success criteria structure, and how it became ISO/IEC 40500:2012.",
  keywords: [
    "WCAG 2.0",
    "WCAG 2.0 guidelines",
    "ISO 40500",
    "POUR principles",
    "WCAG 2.0 success criteria",
    "web accessibility 2008",
    "WCAG history",
  ],
  openGraph: {
    title: "WCAG 2.0 - Web Content Accessibility Guidelines 2.0 (2008)",
    description: "Learn about WCAG 2.0, published in December 2008, introducing POUR principles and testable success criteria.",
    type: "article",
    url: "https://thewcag.com/wcag-2-0",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WCAG 2.0 - Web Content Accessibility Guidelines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG 2.0 - Web Content Accessibility Guidelines 2.0",
    description: "Learn about WCAG 2.0, published in December 2008.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/wcag-2-0",
  },
}

export default function WCAG20Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

