import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Accordions - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible accordions with native details/summary and ARIA patterns. WCAG 2.2 compliant accordion examples.",
  keywords: ["accessible accordions", "accordion accessibility", "WCAG accordions", "expandable content"],
  openGraph: {
    title: "Accessible Accordions - WCAG Compliant Examples",
    description: "Learn how to create accessible accordions with native HTML and ARIA patterns.",
    type: "article",
    url: "https://thewcag.com/examples/accordions",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Accordions Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Accordions - WCAG Compliant Examples",
    description: "Learn how to create accessible accordions with native HTML and ARIA patterns.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/accordions",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AccordionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

