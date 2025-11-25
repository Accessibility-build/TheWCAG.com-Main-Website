import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Audit Service - WCAG 2.2 Compliance Testing | TheWCAG",
  description:
    "Comprehensive WCAG 2.2 compliance audit service. Automated and manual testing to identify all accessibility issues. Get detailed reports and prioritized recommendations.",
  keywords: [
    "accessibility audit",
    "WCAG audit",
    "accessibility testing",
    "WCAG compliance audit",
    "web accessibility audit",
    "accessibility assessment",
    "WCAG 2.2 audit",
    "accessibility evaluation",
  ],
  openGraph: {
    title: "Accessibility Audit Service - WCAG 2.2 Compliance Testing",
    description:
      "Comprehensive WCAG 2.2 compliance audit service. We identify all accessibility issues and provide detailed recommendations.",
    type: "website",
    url: "https://thewcag.com/services/accessibility-audit",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Audit Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Audit Service - WCAG 2.2 Compliance Testing",
    description: "Comprehensive WCAG 2.2 compliance audit service.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/services/accessibility-audit",
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

export default function AccessibilityAuditLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

