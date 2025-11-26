import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Progress Indicators - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible progress indicators with native HTML and ARIA patterns. WCAG 2.2 compliant progress examples.",
  keywords: ["accessible progress", "progress bar", "loading indicators", "status messages"],
  openGraph: {
    title: "Accessible Progress Indicators - WCAG Compliant Examples",
    description: "Learn how to create accessible progress indicators with proper ARIA patterns.",
    type: "article",
    url: "https://thewcag.com/examples/progress-indicators",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Progress Indicators Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Progress Indicators - WCAG Compliant Examples",
    description: "Learn how to create accessible progress indicators with proper ARIA patterns.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/progress-indicators",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ProgressIndicatorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

