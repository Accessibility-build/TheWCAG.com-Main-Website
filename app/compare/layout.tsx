import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Tools & Services Comparison | TheWCAG",
  description:
    "Compare popular web accessibility tools, services, screen readers, and testing solutions. Find the best accessibility tools for your needs with detailed feature comparisons.",
  keywords: [
    "accessibility tools comparison",
    "WCAG testing tools",
    "accessibility services",
    "screen reader comparison",
    "accessibility overlay comparison",
    "axe vs WAVE",
    "accessibility testing tools",
    "ADA compliance tools",
    "accessibility audit tools",
  ],
  openGraph: {
    title: "Accessibility Tools & Services Comparison",
    description:
      "Compare popular web accessibility tools, services, and solutions. Find the best tools for testing, compliance, and improving accessibility.",
    type: "website",
    url: "https://thewcag.com/compare",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Tools & Services Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Tools & Services Comparison",
    description:
      "Compare popular web accessibility tools, services, and solutions. Find the best tools for your needs.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/compare",
  },
}

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

