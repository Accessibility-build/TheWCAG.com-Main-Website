import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Remediation Service - Fix WCAG Issues | TheWCAG",
  description:
    "We fix accessibility issues on your website. Code fixes, design updates, and content improvements to achieve WCAG 2.2 compliance. Get your site accessible today.",
  keywords: [
    "accessibility remediation",
    "fix accessibility issues",
    "WCAG fixes",
    "accessibility code fixes",
    "accessibility design updates",
    "WCAG compliance fixes",
    "accessibility repair",
  ],
  openGraph: {
    title: "Accessibility Remediation Service - Fix WCAG Issues",
    description:
      "We fix accessibility issues on your website. Code fixes, design updates, and content improvements to achieve WCAG 2.2 compliance.",
    type: "website",
    url: "https://thewcag.com/services/accessibility-remediation",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Remediation Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Remediation Service - Fix WCAG Issues",
    description: "We fix accessibility issues on your website to achieve WCAG 2.2 compliance.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/services/accessibility-remediation",
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

export default function AccessibilityRemediationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

