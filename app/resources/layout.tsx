import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Resources - Checklists & Tools | TheWCAG",
  description:
    "Download WCAG accessibility checklists, templates, and explore additional resources. Find browser extensions, testing tools, documentation, and guides for accessible sites.",
  keywords: [
    "accessibility resources",
    "WCAG checklist",
    "accessibility templates",
    "accessibility tools",
    "a11y resources",
    "accessibility testing tools",
    "WCAG compliance checklist",
    "accessibility browser extensions",
    "accessibility downloads",
    "WCAG 2.2 checklist PDF",
    "accessibility templates download",
    "VPAT template",
    "accessibility reference guide",
    "a11y tools list",
  ],
  openGraph: {
    title: "Accessibility Resources - Checklists, Templates & Tools",
    description:
      "Download WCAG accessibility checklists, templates, and explore additional resources for building accessible websites.",
    type: "website",
    url: "https://thewcag.com/resources",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
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
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/resources",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

