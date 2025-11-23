import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG 2.2 Checklist - Interactive Accessibility Compliance Checklist | TheWCAG",
  description:
    "Free interactive WCAG 2.2 compliance checklist. Track your accessibility progress with all 87+ success criteria. Filter by level, save progress, and achieve WCAG 2.2 AA compliance today!",
  keywords: [
    "WCAG checklist",
    "WCAG 2.2 checklist",
    "accessibility checklist",
    "WCAG compliance checklist",
    "accessibility compliance",
    "WCAG audit checklist",
    "web accessibility checklist",
    "a11y checklist",
    "ADA compliance checklist",
    "accessibility testing checklist",
  ],
  openGraph: {
    title: "WCAG 2.2 Checklist - Track Your Accessibility Progress",
    description:
      "Interactive WCAG 2.2 compliance checklist. Track your accessibility progress with our comprehensive checklist covering all success criteria.",
    type: "website",
    url: "https://thewcag.com/checklist",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "WCAG 2.2 Checklist - Interactive Accessibility Compliance Checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG 2.2 Checklist - Track Your Accessibility Progress",
    description:
      "Interactive WCAG 2.2 compliance checklist. Track your accessibility progress with our comprehensive checklist.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/checklist",
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

export default function ChecklistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

