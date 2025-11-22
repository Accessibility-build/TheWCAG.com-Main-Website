import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG Principles - POUR: Perceivable, Operable, Understandable, Robust | TheWCAG",
  description:
    "Master WCAG 2.2 POUR principles: Perceivable, Operable, Understandable & Robust. Learn how these 4 principles guide 87+ success criteria. Start learning now!",
  keywords: [
    "WCAG principles",
    "POUR principles",
    "perceivable",
    "operable",
    "understandable",
    "robust",
    "web accessibility principles",
    "accessibility fundamentals",
    "WCAG 2.2 principles",
  ],
  openGraph: {
    title: "WCAG Principles - POUR: Perceivable, Operable, Understandable, Robust",
    description:
      "Explore the four foundational principles of WCAG 2.2 that guide web accessibility standards.",
    type: "website",
    url: "https://thewcag.com/principles",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WCAG Principles - POUR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG Principles - POUR: Perceivable, Operable, Understandable, Robust",
    description:
      "Explore the four foundational principles of WCAG 2.2 that guide web accessibility standards.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/principles",
  },
}

export default function PrinciplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

