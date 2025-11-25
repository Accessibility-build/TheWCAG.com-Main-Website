import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Forms - WCAG Compliant Form Examples | TheWCAG",
  description:
    "Learn how to create accessible forms with proper labels, error handling, validation, and multi-step patterns. WCAG 2.2 compliant form examples.",
  keywords: [
    "accessible forms",
    "WCAG forms",
    "form accessibility",
    "accessible validation",
    "form labels",
    "error messages",
  ],
  openGraph: {
    title: "Accessible Forms - WCAG Compliant Form Examples",
    description: "Learn how to create accessible forms with proper labels, error handling, and validation.",
    type: "website",
    url: "https://thewcag.com/examples/forms",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Forms Examples",
      },
    ],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/forms",
  },
}

export default function FormsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

