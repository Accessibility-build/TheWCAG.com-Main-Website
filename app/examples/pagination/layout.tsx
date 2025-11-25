import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Pagination - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible pagination with proper navigation and keyboard support. WCAG 2.2 compliant pagination examples.",
  keywords: ["accessible pagination", "pagination accessibility", "page navigation"],
  openGraph: {
    title: "Accessible Pagination - WCAG Compliant Examples",
    description: "Learn how to create accessible pagination with proper navigation.",
    type: "website",
    url: "https://thewcag.com/examples/pagination",
  },
  alternates: {
    canonical: "https://thewcag.com/examples/pagination",
  },
}

export default function PaginationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

