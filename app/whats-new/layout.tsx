import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What's New in WCAG 2.2",
  description:
    "Discover the 9 new success criteria in WCAG 2.2. Learn about focus appearance, dragging movements, target size, and other new accessibility requirements.",
  openGraph: {
    title: "What's New in WCAG 2.2 - 9 New Success Criteria",
    description:
      "Discover the 9 new success criteria in WCAG 2.2 including focus appearance, dragging movements, and target size requirements.",
    url: "https://thewcag.com/whats-new",
  },
  alternates: {
    canonical: "/whats-new",
  },
}

export default function WhatsNewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

