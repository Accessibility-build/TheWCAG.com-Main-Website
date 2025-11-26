import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Lists - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible lists with semantic HTML and ARIA patterns. WCAG 2.2 compliant list examples.",
  keywords: ["accessible lists", "list accessibility", "semantic lists"],
  openGraph: {
    title: "Accessible Lists - WCAG Compliant Examples",
    description: "Learn how to create accessible lists with semantic HTML.",
    type: "article",
    url: "https://thewcag.com/examples/lists",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Lists Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Lists - WCAG Compliant Examples",
    description: "Learn how to create accessible lists with semantic HTML.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/lists",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ListsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

