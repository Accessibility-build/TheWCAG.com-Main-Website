import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Navigation - WCAG Compliant Navigation Examples | TheWCAG",
  description:
    "Learn how to create accessible navigation patterns including semantic nav, breadcrumbs, skip links, mega menus, and tabs. WCAG 2.2 compliant navigation examples.",
  keywords: [
    "accessible navigation",
    "WCAG navigation",
    "accessible menu",
    "breadcrumbs",
    "skip links",
    "accessible tabs",
  ],
  openGraph: {
    title: "Accessible Navigation - WCAG Compliant Navigation Examples",
    description: "Learn how to create accessible navigation patterns with semantic HTML and ARIA.",
    type: "website",
    url: "https://thewcag.com/examples/navigation",
    siteName: "TheWCAG - An accessibility Guide",
  },
  alternates: {
    canonical: "https://thewcag.com/examples/navigation",
  },
}

export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

