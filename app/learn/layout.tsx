import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn Web Accessibility - WCAG 2.2 Guides | TheWCAG",
  description:
    "Master web accessibility with free role-based guides for developers, designers & content creators. Learn WCAG 2.2 principles, best practices & build accessible websites.",
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
    "accessibility certification",
    "web accessibility tutorial",
    "how to learn accessibility",
    "accessibility resources",
    "a11y training",
  ],
  openGraph: {
    title: "Learn Web Accessibility - WCAG 2.2 Learning Resources & Guides",
    description:
      "Learn web accessibility with role-based guides, tutorials, and resources for developers, designers, and content creators. Master WCAG 2.2 principles.",
    type: "website",
    url: "https://thewcag.com/learn",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
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
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/learn",
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

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

