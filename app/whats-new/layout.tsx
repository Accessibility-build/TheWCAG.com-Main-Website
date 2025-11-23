import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What's New in WCAG 2.2 - 9 New Success Criteria | TheWCAG",
  description:
    "Discover the 9 new success criteria in WCAG 2.2. Learn about focus appearance, dragging movements, target size, and other new accessibility requirements.",
  keywords: [
    "WCAG 2.2 new criteria",
    "WCAG 2.2 updates",
    "new accessibility requirements",
    "WCAG 2.2 changes",
    "accessibility updates",
    "WCAG 2.2 new features",
  ],
  openGraph: {
    title: "What's New in WCAG 2.2 - 9 New Success Criteria",
    description:
      "Discover the 9 new success criteria in WCAG 2.2 including focus appearance, dragging movements, and target size requirements.",
    type: "article",
    url: "https://thewcag.com/whats-new",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "What's New in WCAG 2.2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What's New in WCAG 2.2 - 9 New Success Criteria",
    description:
      "Discover the 9 new success criteria in WCAG 2.2 including focus appearance, dragging movements, and target size requirements.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/whats-new",
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

export default function WhatsNewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

