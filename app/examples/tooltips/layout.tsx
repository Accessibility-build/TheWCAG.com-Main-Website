import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Tooltips - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible tooltips with proper ARIA patterns and keyboard support. WCAG 2.2 compliant tooltip examples.",
  keywords: ["accessible tooltips", "tooltip accessibility", "ARIA tooltip", "help text"],
  openGraph: {
    title: "Accessible Tooltips - WCAG Compliant Examples",
    description: "Learn how to create accessible tooltips with proper ARIA patterns.",
    type: "article",
    url: "https://thewcag.com/examples/tooltips",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Tooltips Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Tooltips - WCAG Compliant Examples",
    description: "Learn how to create accessible tooltips with proper ARIA patterns.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/tooltips",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TooltipsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

