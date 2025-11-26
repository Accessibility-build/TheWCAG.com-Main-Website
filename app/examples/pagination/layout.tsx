import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Pagination - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible pagination with proper navigation and keyboard support. WCAG 2.2 compliant pagination examples.",
  keywords: ["accessible pagination", "pagination accessibility", "page navigation"],
  openGraph: {
    title: "Accessible Pagination - WCAG Compliant Examples",
    description: "Learn how to create accessible pagination with proper navigation.",
    type: "article",
    url: "https://thewcag.com/examples/pagination",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Pagination Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Pagination - WCAG Compliant Examples",
    description: "Learn how to create accessible pagination with proper navigation.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/pagination",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PaginationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

