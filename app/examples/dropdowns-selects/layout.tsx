import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Dropdowns & Selects - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible dropdowns and selects with native HTML and ARIA combobox patterns. WCAG 2.2 compliant select examples.",
  keywords: ["accessible dropdowns", "accessible selects", "combobox", "autocomplete", "select accessibility"],
  openGraph: {
    title: "Accessible Dropdowns & Selects - WCAG Compliant Examples",
    description: "Learn how to create accessible dropdowns and selects with proper keyboard support.",
    type: "article",
    url: "https://thewcag.com/examples/dropdowns-selects",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Dropdowns & Selects Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Dropdowns & Selects - WCAG Compliant Examples",
    description: "Learn how to create accessible dropdowns and selects with proper keyboard support.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/dropdowns-selects",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DropdownsSelectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

