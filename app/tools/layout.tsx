import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Tools",
  description:
    "Free accessibility tools and resources. Use our contrast checker, accessibility testing tools, and other resources to improve your website's accessibility.",
  openGraph: {
    title: "Accessibility Tools - Free WCAG Testing Resources",
    description:
      "Free accessibility tools and resources including contrast checker and testing tools to improve your website's accessibility.",
    url: "https://thewcag.com/tools",
  },
  alternates: {
    canonical: "/tools",
  },
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

