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
    type: "article",
    url: "https://thewcag.com/examples/navigation",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Navigation Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Navigation - WCAG Compliant Navigation Examples",
    description: "Learn how to create accessible navigation patterns with semantic HTML and ARIA.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/navigation",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

