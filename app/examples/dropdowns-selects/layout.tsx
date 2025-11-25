import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Dropdowns & Selects - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible dropdowns and selects with native HTML and ARIA combobox patterns. WCAG 2.2 compliant select examples.",
  keywords: ["accessible dropdowns", "accessible selects", "combobox", "autocomplete", "select accessibility"],
  openGraph: {
    title: "Accessible Dropdowns & Selects - WCAG Compliant Examples",
    description: "Learn how to create accessible dropdowns and selects with proper keyboard support.",
    type: "website",
    url: "https://thewcag.com/examples/dropdowns-selects",
  },
  alternates: {
    canonical: "https://thewcag.com/examples/dropdowns-selects",
  },
}

export default function DropdownsSelectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

