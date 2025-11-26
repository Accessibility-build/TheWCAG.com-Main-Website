import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Cards - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible card components with proper heading hierarchy and keyboard support. WCAG 2.2 compliant card examples.",
  keywords: ["accessible cards", "card accessibility", "card components"],
  openGraph: {
    title: "Accessible Cards - WCAG Compliant Examples",
    description: "Learn how to create accessible card components with proper heading hierarchy and keyboard support.",
    type: "article",
    url: "https://thewcag.com/examples/cards",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Cards Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Cards - WCAG Compliant Examples",
    description: "Learn how to create accessible card components with proper heading hierarchy and keyboard support.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/cards",
  },
}

export default function CardsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

