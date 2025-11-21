import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Resources - Checklists, Templates & Tools | TheWCAG",
  description:
    "Download WCAG accessibility checklists, templates, and explore additional resources. Find browser extensions, testing tools, documentation, and guides to help you build accessible websites.",
  keywords: [
    "accessibility resources",
    "WCAG checklist",
    "accessibility templates",
    "accessibility tools",
    "a11y resources",
    "accessibility testing tools",
    "WCAG compliance checklist",
    "accessibility browser extensions",
  ],
  openGraph: {
    title: "Accessibility Resources - Checklists, Templates & Tools",
    description:
      "Download WCAG accessibility checklists, templates, and explore additional resources for building accessible websites.",
    type: "website",
    url: "https://thewcag.com/resources",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Resources - Checklists, Templates & Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Resources - Checklists, Templates & Tools",
    description:
      "Download WCAG accessibility checklists, templates, and explore additional resources for building accessible websites.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/resources",
  },
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

