import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn Web Accessibility - WCAG 2.2 Learning Resources & Guides | TheWCAG",
  description:
    "Learn web accessibility with role-based guides, tutorials, and resources. Start your accessibility journey with guides tailored for developers, designers, content creators, and QA testers. Master WCAG 2.2 principles and best practices.",
  keywords: [
    "learn accessibility",
    "web accessibility training",
    "WCAG 2.2 tutorial",
    "accessibility learning",
    "a11y education",
    "accessibility courses",
    "web accessibility guide",
    "accessibility for developers",
    "accessibility for designers",
    "WCAG training",
    "accessibility best practices",
  ],
  openGraph: {
    title: "Learn Web Accessibility - WCAG 2.2 Learning Resources & Guides",
    description:
      "Learn web accessibility with role-based guides, tutorials, and resources for developers, designers, and content creators. Master WCAG 2.2 principles.",
    type: "website",
    url: "https://thewcag.com/learn",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Learn Web Accessibility - WCAG 2.2 Learning Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Web Accessibility - WCAG 2.2 Learning Resources & Guides",
    description:
      "Learn web accessibility with role-based guides, tutorials, and resources for developers, designers, and content creators.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/learn",
  },
}

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

