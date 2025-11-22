import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Audit Guide - How to Audit Website Accessibility | TheWCAG",
  description:
    "Complete guide to conducting accessibility audits. Learn how to audit your website for WCAG 2.2 compliance with automated tools, manual testing, and user testing methods.",
  keywords: [
    "accessibility audit",
    "website accessibility audit",
    "how to audit accessibility",
    "accessibility audit checklist",
    "WCAG audit",
    "accessibility testing audit",
    "accessibility evaluation",
    "audit website accessibility",
    "accessibility assessment",
    "accessibility review",
  ],
  openGraph: {
    title: "Accessibility Audit Guide - How to Audit Website Accessibility",
    description:
      "Complete guide to conducting accessibility audits with automated tools, manual testing, and user testing methods.",
    type: "article",
    url: "https://thewcag.com/accessibility-audit-guide",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Audit Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Audit Guide - How to Audit Website Accessibility",
    description: "Complete guide to conducting accessibility audits for WCAG 2.2 compliance.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/accessibility-audit-guide",
  },
}

export default function AccessibilityAuditGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

