import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG 1.0 - The First Web Accessibility Guidelines (1999) | TheWCAG",
  description:
    "Learn about WCAG 1.0, the first version of Web Content Accessibility Guidelines published in May 1999. Understand its 14 guidelines and legacy impact on web accessibility.",
  keywords: [
    "WCAG 1.0",
    "WCAG 1.0 guidelines",
    "web accessibility 1999",
    "WCAG history",
    "first accessibility guidelines",
    "WCAG 1.0 legacy",
    "W3C WCAG 1.0",
  ],
  openGraph: {
    title: "WCAG 1.0 - The First Web Accessibility Guidelines (1999)",
    description: "Learn about WCAG 1.0, the first version of Web Content Accessibility Guidelines published in May 1999.",
    type: "article",
    url: "https://thewcag.com/wcag-1-0",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "WCAG 1.0 - First Web Accessibility Guidelines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG 1.0 - The First Web Accessibility Guidelines",
    description: "Learn about WCAG 1.0, published in May 1999.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/wcag-1-0",
  },
}

export default function WCAG10Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

