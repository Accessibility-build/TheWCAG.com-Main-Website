import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Glossary - Web Accessibility Terms & Definitions | TheWCAG",
  description:
    "Comprehensive glossary of web accessibility terms, WCAG terminology, and definitions. Learn about ARIA, screen readers, assistive technologies, and accessibility concepts.",
  keywords: [
    "accessibility glossary",
    "WCAG terms",
    "accessibility definitions",
    "ARIA glossary",
    "web accessibility terminology",
    "a11y terms",
    "accessibility vocabulary",
    "assistive technology terms",
  ],
  openGraph: {
    title: "Accessibility Glossary - Web Accessibility Terms & Definitions",
    description:
      "Comprehensive glossary of web accessibility terms, WCAG terminology, and definitions for developers and designers.",
    type: "website",
    url: "https://thewcag.com/glossary",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Glossary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Glossary - Web Accessibility Terms & Definitions",
    description: "Comprehensive glossary of web accessibility terms and definitions.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/glossary",
  },
}

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

