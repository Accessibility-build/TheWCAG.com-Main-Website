import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Accordions - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible accordions with native details/summary and ARIA patterns. WCAG 2.2 compliant accordion examples.",
  keywords: ["accessible accordions", "accordion accessibility", "WCAG accordions", "expandable content"],
  openGraph: {
    title: "Accessible Accordions - WCAG Compliant Examples",
    description: "Learn how to create accessible accordions with native HTML and ARIA patterns.",
    type: "website",
    url: "https://thewcag.com/examples/accordions",
  },
  alternates: {
    canonical: "https://thewcag.com/examples/accordions",
  },
}

export default function AccordionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

