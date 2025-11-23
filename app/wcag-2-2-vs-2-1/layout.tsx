import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG 2.2 vs 2.1 - What's New and Changed | TheWCAG",
  description:
    "Complete WCAG 2.2 vs 2.1 comparison: 9 new criteria, 1 removed, migration guide & backward compatibility. Upgrade to WCAG 2.2 compliance now!",
  keywords: [
    "WCAG 2.2 vs 2.1",
    "WCAG 2.2 changes",
    "WCAG 2.2 new criteria",
    "upgrade to WCAG 2.2",
    "WCAG 2.2 comparison",
    "WCAG 2.2 differences",
    "WCAG 2.2 updates",
    "WCAG 2.2 migration",
  ],
  openGraph: {
    title: "WCAG 2.2 vs 2.1 - What's New and Changed",
    description:
      "Compare WCAG 2.2 and WCAG 2.1. Learn about new success criteria, changes, and migration guide.",
    type: "website",
    url: "https://thewcag.com/wcag-2-2-vs-2-1",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "WCAG 2.2 vs 2.1 Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG 2.2 vs 2.1 - What's New and Changed",
    description: "Compare WCAG 2.2 and WCAG 2.1. Learn about new success criteria and changes.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/wcag-2-2-vs-2-1",
  },
}

export default function WCAGComparisonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

