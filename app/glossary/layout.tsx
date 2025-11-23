import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Glossary - Web Accessibility Terms & Definitions | TheWCAG",
  description:
    "Complete accessibility glossary with 30+ terms & definitions. Learn ARIA, screen readers, assistive tech & WCAG terminology. Search & filter terms easily. Start learning!",
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

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

