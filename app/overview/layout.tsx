import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG Overview - Understanding Web Content Accessibility Guidelines | TheWCAG",
  description:
    "Learn about WCAG (Web Content Accessibility Guidelines) 2.2, the international standard for web accessibility. Understand the POUR principles, success criteria, and how to make your website accessible to everyone.",
  keywords: [
    "WCAG",
    "WCAG 2.2",
    "web accessibility guidelines",
    "accessibility standards",
    "POUR principles",
    "web accessibility",
    "a11y",
    "accessibility compliance",
    "W3C WCAG",
    "ADA compliance",
    "Section 508",
  ],
  openGraph: {
    title: "WCAG Overview - Understanding Web Content Accessibility Guidelines",
    description:
      "Learn about WCAG (Web Content Accessibility Guidelines) 2.2, the international standard for web accessibility.",
    type: "website",
    url: "https://thewcag.com/overview",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WCAG Overview - Web Content Accessibility Guidelines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG Overview - Understanding Web Content Accessibility Guidelines",
    description:
      "Learn about WCAG (Web Content Accessibility Guidelines) 2.2, the international standard for web accessibility.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/overview",
  },
}

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

