import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Input Fields Example - WCAG Form Implementation | TheWCAG",
  description:
    "Learn how to create accessible input fields with proper labels, error messages, and validation. See real-world examples implementing WCAG 3.3.1, 3.3.2, and 4.1.2.",
  keywords: [
    "accessible input fields",
    "accessible forms",
    "WCAG form examples",
    "accessible labels",
    "form accessibility",
    "error messages accessibility",
    "WCAG 3.3.1",
    "WCAG 3.3.2",
    "WCAG 4.1.2",
    "accessible validation",
  ],
  openGraph: {
    title: "Accessible Input Fields Example - WCAG Form Implementation",
    description:
      "Learn how to create accessible input fields with proper labels, error messages, and validation.",
    type: "article",
    url: "https://thewcag.com/examples/accessible-input-fields",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Input Fields Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Input Fields Example - WCAG Form Implementation",
    description:
      "Learn how to create accessible input fields with proper labels, error messages, and validation.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/accessible-input-fields",
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

export default function AccessibleInputFieldsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

