import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Tables - WCAG Compliant Table Examples | TheWCAG",
  description:
    "Learn how to create accessible tables with semantic HTML and ARIA patterns. Examples include basic tables, sortable tables, responsive tables, and complex multi-level headers. WCAG 2.2 compliant.",
  keywords: [
    "accessible tables",
    "WCAG tables",
    "semantic tables",
    "ARIA tables",
    "sortable tables",
    "responsive tables",
    "table accessibility",
  ],
  openGraph: {
    title: "Accessible Tables - WCAG Compliant Table Examples",
    description: "Learn how to create accessible tables with semantic HTML and ARIA patterns.",
    type: "website",
    url: "https://thewcag.com/examples/tables",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Tables Examples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Tables - WCAG Compliant Table Examples",
    description: "Learn how to create accessible tables with semantic HTML and ARIA patterns.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/tables",
  },
}

export default function TablesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

