import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG 3.0 - The Future of Web Accessibility Guidelines | TheWCAG",
  description:
    "Discover WCAG 3.0 - the future of accessibility standards. Learn outcomes-based approach, Bronze/Silver/Gold scoring & how it differs from WCAG 2.2. Stay ahead!",
  keywords: [
    "WCAG 3.0",
    "W3C Accessibility Guidelines",
    "WCAG 3.0 draft",
    "WCAG 3.0 status",
    "WCAG 3.0 vs 2.2",
    "future of accessibility",
    "outcomes-based accessibility",
    "WCAG 3.0 scoring",
    "accessibility guidelines 3.0",
    "next generation WCAG",
  ],
  openGraph: {
    title: "WCAG 3.0 - The Future of Web Accessibility Guidelines",
    description:
      "Learn about WCAG 3.0, the next generation of accessibility standards with outcomes-based approach and scoring system.",
    type: "website",
    url: "https://thewcag.com/wcag-3-0",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WCAG 3.0 - Future of Accessibility Guidelines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG 3.0 - The Future of Web Accessibility Guidelines",
    description: "Learn about WCAG 3.0, the next generation of accessibility standards.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/wcag-3-0",
  },
}

export default function WCAG30Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

