import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contrast Checker - Free WCAG Color Contrast Tool | TheWCAG",
  description:
    "Free WCAG contrast checker tool. Test color contrast ratios for text and backgrounds to ensure compliance with WCAG 2.2 Level AA and AAA requirements. Get instant pass/fail results with detailed contrast ratio calculations.",
  keywords: [
    "color contrast checker",
    "WCAG contrast checker",
    "accessibility contrast tool",
    "color contrast analyzer",
    "WCAG 2.2 contrast",
    "accessibility testing tool",
    "contrast ratio calculator",
    "web accessibility contrast",
    "a11y contrast checker",
    "ADA contrast compliance",
  ],
  openGraph: {
    title: "Contrast Checker - Free WCAG Color Contrast Tool",
    description:
      "Free WCAG contrast checker tool. Test color contrast ratios for WCAG 2.2 Level AA and AAA compliance. Get instant pass/fail results.",
    type: "website",
    url: "https://thewcag.com/tools/contrast-checker",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Contrast Checker - WCAG Color Contrast Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contrast Checker - Free WCAG Color Contrast Tool",
    description:
      "Free WCAG contrast checker tool. Test color contrast ratios for WCAG 2.2 compliance.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/tools/contrast-checker",
  },
}

export default function ContrastCheckerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

