import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Lists - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible lists with semantic HTML and ARIA patterns. WCAG 2.2 compliant list examples.",
  keywords: ["accessible lists", "list accessibility", "semantic lists"],
  openGraph: {
    title: "Accessible Lists - WCAG Compliant Examples",
    description: "Learn how to create accessible lists with semantic HTML.",
    type: "website",
    url: "https://thewcag.com/examples/lists",
  },
  alternates: {
    canonical: "https://thewcag.com/examples/lists",
  },
}

export default function ListsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

