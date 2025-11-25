import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Getting Started with Web Accessibility Guide | TheWCAG",
  description:
    "Start your accessibility journey with our beginner-friendly 6-step guide. Learn WCAG basics, audit your site & fix issues. Perfect for developers & designers.",
  keywords: [
    "getting started with accessibility",
    "WCAG for beginners",
    "web accessibility guide",
    "accessibility tutorial",
    "how to make website accessible",
    "WCAG compliance guide",
    "accessibility basics",
    "learn web accessibility",
    "accessibility for beginners",
    "WCAG 2.2 guide",
    "web accessibility tutorial",
    "accessibility step by step",
    "how to learn accessibility",
    "accessibility quick start",
  ],
  openGraph: {
    title: "Getting Started with Web Accessibility - WCAG Guide for Beginners",
    description:
      "Step-by-step guide to getting started with web accessibility and WCAG compliance. Perfect for beginners, developers, and designers.",
    type: "website",
    url: "https://thewcag.com/getting-started",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Getting Started with Web Accessibility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Started with Web Accessibility - WCAG Guide for Beginners",
    description: "Step-by-step guide to getting started with web accessibility and WCAG compliance.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/getting-started",
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

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

