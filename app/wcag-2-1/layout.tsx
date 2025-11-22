import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG 2.1 - Web Content Accessibility Guidelines 2.1 (2018) | TheWCAG",
  description:
    "Learn about WCAG 2.1, published in June 2018. Discover the 17 new success criteria focusing on mobile accessibility, low vision, and cognitive disabilities.",
  keywords: [
    "WCAG 2.1",
    "WCAG 2.1 guidelines",
    "mobile accessibility",
    "WCAG 2.1 success criteria",
    "web accessibility 2018",
    "WCAG 2.1 new criteria",
    "WCAG history",
  ],
  openGraph: {
    title: "WCAG 2.1 - Web Content Accessibility Guidelines 2.1 (2018)",
    description: "Learn about WCAG 2.1, published in June 2018, with 17 new success criteria for mobile and cognitive accessibility.",
    type: "article",
    url: "https://thewcag.com/wcag-2-1",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WCAG 2.1 - Web Content Accessibility Guidelines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG 2.1 - Web Content Accessibility Guidelines 2.1",
    description: "Learn about WCAG 2.1, published in June 2018.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/wcag-2-1",
  },
}

export default function WCAG21Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

