import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Progress Indicators - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible progress indicators with native HTML and ARIA patterns. WCAG 2.2 compliant progress examples.",
  keywords: ["accessible progress", "progress bar", "loading indicators", "status messages"],
  openGraph: {
    title: "Accessible Progress Indicators - WCAG Compliant Examples",
    description: "Learn how to create accessible progress indicators with proper ARIA patterns.",
    type: "website",
    url: "https://thewcag.com/examples/progress-indicators",
  },
  alternates: {
    canonical: "https://thewcag.com/examples/progress-indicators",
  },
}

export default function ProgressIndicatorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

