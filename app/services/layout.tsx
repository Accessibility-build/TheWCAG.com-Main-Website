import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Services - Professional WCAG Solutions | TheWCAG",
  description:
    "Professional accessibility services: audits, remediation, custom website & mobile app development. WCAG 2.2 compliant solutions. Get your digital products accessible today!",
  keywords: [
    "accessibility services",
    "WCAG audit",
    "accessibility remediation",
    "custom website development",
    "accessible app development",
    "WCAG compliance services",
    "accessibility consulting",
    "web accessibility services",
    "mobile accessibility",
    "accessibility testing services",
    "WCAG 2.2 compliance",
    "accessible development",
  ],
  openGraph: {
    title: "Accessibility Services - Professional WCAG Solutions",
    description:
      "Professional accessibility services including audits, remediation, and custom development. WCAG 2.2 compliant solutions for websites and mobile apps.",
    type: "website",
    url: "https://thewcag.com/services",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Services - Professional WCAG Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Services - Professional WCAG Solutions",
    description:
      "Professional accessibility services including audits, remediation, and custom development.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/services",
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

