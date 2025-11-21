import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG Principles - POUR: Perceivable, Operable, Understandable, Robust | TheWCAG",
  description:
    "Explore the four foundational principles of WCAG 2.2: Perceivable, Operable, Understandable, and Robust (POUR). Learn how these principles guide web accessibility standards and success criteria.",
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

