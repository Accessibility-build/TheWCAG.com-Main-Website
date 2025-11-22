import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Compliance - Laws & Regulations Guide | TheWCAG",
  description:
    "Complete guide to accessibility laws: ADA, Section 508, EN 301 549, AODA & European Accessibility Act. Understand legal requirements & avoid costly lawsuits. Get compliant now!",
  keywords: [
    "accessibility compliance",
    "ADA compliance",
    "Section 508",
    "EN 301 549",
    "AODA compliance",
    "European Accessibility Act",
    "accessibility laws",
    "digital accessibility regulations",
    "WCAG compliance",
    "accessibility requirements",
  ],
  openGraph: {
    title: "Accessibility Compliance - Laws & Regulations Guide",
    description:
      "Comprehensive guide to digital accessibility laws and regulations. Understand compliance requirements for ADA, Section 508, EN 301 549, AODA, and more.",
    type: "website",
    url: "https://thewcag.com/compliance",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Compliance Laws & Regulations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Compliance - Laws & Regulations Guide",
    description:
      "Comprehensive guide to digital accessibility laws and regulations. Understand compliance requirements for your region.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/compliance",
  },
}

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

