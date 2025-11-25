import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Buttons & Links - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible buttons and links with proper semantics, labels, states, and keyboard support. WCAG 2.2 compliant button and link examples.",
  keywords: [
    "accessible buttons",
    "accessible links",
    "button accessibility",
    "link accessibility",
    "WCAG buttons",
  ],
  openGraph: {
    title: "Accessible Buttons & Links - WCAG Compliant Examples",
    description: "Learn how to create accessible buttons and links with proper semantics and keyboard support.",
    type: "website",
    url: "https://thewcag.com/examples/buttons-links",
  },
  alternates: {
    canonical: "https://thewcag.com/examples/buttons-links",
  },
}

export default function ButtonsLinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

