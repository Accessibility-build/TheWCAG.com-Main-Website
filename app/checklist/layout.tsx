import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG 2.2 Checklist",
  description:
    "Interactive WCAG 2.2 compliance checklist. Track your accessibility progress with our comprehensive checklist covering all Level A, AA, and AAA success criteria.",
  openGraph: {
    title: "WCAG 2.2 Checklist - Track Your Accessibility Progress",
    description:
      "Interactive WCAG 2.2 compliance checklist. Track your accessibility progress with our comprehensive checklist.",
    url: "https://thewcag.com/checklist",
  },
  alternates: {
    canonical: "/checklist",
  },
}

export default function ChecklistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

