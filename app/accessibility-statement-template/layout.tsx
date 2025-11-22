import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Statement Template - Free Generator & Examples | TheWCAG",
  description:
    "Free accessibility statement template and generator. Create a WCAG 2.2 compliant accessibility statement for your website with our customizable template and examples.",
  keywords: [
    "accessibility statement template",
    "accessibility statement generator",
    "accessibility statement example",
    "WCAG accessibility statement",
    "website accessibility statement",
    "accessibility policy template",
    "create accessibility statement",
    "accessibility declaration",
    "accessibility commitment",
  ],
  openGraph: {
    title: "Accessibility Statement Template - Free Generator & Examples",
    description:
      "Free accessibility statement template and generator. Create a WCAG 2.2 compliant accessibility statement for your website.",
    type: "article",
    url: "https://thewcag.com/accessibility-statement-template",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Statement Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Statement Template - Free Generator & Examples",
    description: "Free accessibility statement template and generator for WCAG 2.2 compliance.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/accessibility-statement-template",
  },
}

export default function AccessibilityStatementTemplateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

