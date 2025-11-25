import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Cards - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible card components with proper heading hierarchy and keyboard support. WCAG 2.2 compliant card examples.",
  keywords: ["accessible cards", "card accessibility", "card components"],
  openGraph: {
    title: "Accessible Cards - WCAG Compliant Examples",
    description: "Learn how to create accessible card components.",
    type: "website",
    url: "https://thewcag.com/examples/cards",
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

