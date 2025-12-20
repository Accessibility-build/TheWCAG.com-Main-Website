import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Tools - Free WCAG Testing Tools | TheWCAG",
  description:
    "Free accessibility testing tools: axe-core accessibility tester, WCAG compliance checker, and more. Test your website for accessibility issues.",
}

export default function AccessibilityToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

