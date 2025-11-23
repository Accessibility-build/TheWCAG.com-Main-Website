import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recent Accessibility Lawsuits - Legal Cases & Settlements | TheWCAG",
  description:
    "Explore recent accessibility lawsuits, legal cases & settlements. Learn from real-world ADA compliance cases, WCAG violations, and digital accessibility legal outcomes.",
  keywords: [
    "accessibility lawsuits",
    "ADA lawsuits",
    "website accessibility cases",
    "accessibility settlements",
    "digital accessibility legal cases",
    "WCAG compliance lawsuits",
    "ADA website compliance",
    "accessibility legal precedent",
  ],
  openGraph: {
    title: "Recent Accessibility Lawsuits - Legal Cases & Settlements",
    description:
      "Explore recent accessibility lawsuits, legal cases, and settlements related to website accessibility and ADA compliance.",
    type: "website",
    url: "https://thewcag.com/lawsuits",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Recent Accessibility Lawsuits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recent Accessibility Lawsuits - Legal Cases & Settlements",
    description: "Explore recent accessibility lawsuits and legal cases.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/lawsuits",
  },
}

export default function LawsuitsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

