import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contrast Checker - WCAG Color Contrast Tool",
  description:
    "Free WCAG contrast checker tool. Test color contrast ratios for text and backgrounds to ensure compliance with WCAG 2.2 Level AA and AAA requirements.",
  openGraph: {
    title: "Contrast Checker - WCAG Color Contrast Tool",
    description:
      "Free WCAG contrast checker tool. Test color contrast ratios for WCAG 2.2 compliance.",
    url: "https://thewcag.com/tools/contrast-checker",
  },
  alternates: {
    canonical: "/tools/contrast-checker",
  },
}

export default function ContrastCheckerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

