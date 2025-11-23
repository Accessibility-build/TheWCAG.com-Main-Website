import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG 2.2 - Current Web Content Accessibility Guidelines (2023) | TheWCAG",
  description:
    "Learn about WCAG 2.2, the current version published in October 2023. Discover the 9 new success criteria and improvements for mobile, cognitive, and low vision accessibility.",
  keywords: [
    "WCAG 2.2",
    "WCAG 2.2 guidelines",
    "current WCAG version",
    "WCAG 2.2 success criteria",
    "web accessibility 2023",
    "WCAG 2.2 new criteria",
    "latest WCAG",
  ],
  openGraph: {
    title: "WCAG 2.2 - Current Web Content Accessibility Guidelines (2023)",
    description: "Learn about WCAG 2.2, the current version published in October 2023 with 9 new success criteria.",
    type: "article",
    url: "https://thewcag.com/wcag-2-2",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "WCAG 2.2 - Current Web Content Accessibility Guidelines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG 2.2 - Current Web Content Accessibility Guidelines",
    description: "Learn about WCAG 2.2, published in October 2023.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/wcag-2-2",
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

export default function WCAG22Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

