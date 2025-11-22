import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG 2.2 Checklist - Interactive Accessibility Compliance Checklist | TheWCAG",
  description:
    "Interactive WCAG 2.2 compliance checklist. Track your accessibility progress with our comprehensive checklist covering all Level A, AA, and AAA success criteria. Filter by level, principle, and save your progress.",
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
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
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
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/checklist",
  },
}

export default function ChecklistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

