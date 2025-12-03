import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ADA Compliance Risks - Legal, Financial & Business Risks | TheWCAG",
  description:
    "Comprehensive guide to ADA compliance risks including lawsuits, financial penalties, reputational damage, and business losses. Learn how to mitigate accessibility compliance risks and protect your organization.",
  keywords: [
    "ADA compliance risks",
    "ADA lawsuit risks",
    "accessibility compliance risks",
    "website accessibility risks",
    "ADA legal risks",
    "accessibility financial risks",
    "ADA penalties",
    "accessibility lawsuit costs",
    "ADA compliance consequences",
    "digital accessibility risks",
    "WCAG compliance risks",
    "ADA violation risks",
  ],
  openGraph: {
    title: "ADA Compliance Risks - Legal, Financial & Business Impact",
    description:
      "Understand the comprehensive risks of ADA non-compliance: lawsuits, financial penalties, reputational damage, and lost business opportunities. Learn mitigation strategies.",
    url: "https://thewcag.com/ada-compliance-risks",
    type: "website",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "ADA Compliance Risks Guide",
      },
    ],
  },
  alternates: {
    canonical: "https://thewcag.com/ada-compliance-risks",
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

export default function ADAComplianceRisksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

