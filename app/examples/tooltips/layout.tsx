import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Tooltips - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible tooltips with proper ARIA patterns and keyboard support. WCAG 2.2 compliant tooltip examples.",
  keywords: ["accessible tooltips", "tooltip accessibility", "ARIA tooltip", "help text"],
  openGraph: {
    title: "Accessible Tooltips - WCAG Compliant Examples",
    description: "Learn how to create accessible tooltips with proper ARIA patterns.",
    type: "website",
    url: "https://thewcag.com/examples/tooltips",
  },
  alternates: {
    canonical: "https://thewcag.com/examples/tooltips",
  },
}

export default function TooltipsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

