import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Tools - Free WCAG Testing & Analysis Tools | TheWCAG",
  description:
    "Free accessibility tools: color contrast checker, AI audit helper, alt text generator & more. Test your site's WCAG 2.2 compliance instantly. Start improving accessibility today!",
  keywords: [
    "accessibility tools",
    "WCAG testing tools",
    "color contrast checker",
    "accessibility checker",
    "a11y tools",
    "web accessibility tools",
    "accessibility testing tools",
    "WCAG compliance tools",
    "accessibility audit tools",
    "screen reader testing",
    "accessibility scanner",
  ],
  openGraph: {
    title: "Accessibility Tools - Free WCAG Testing & Analysis Tools",
    description:
      "Free accessibility tools including color contrast checker, AI-powered audit helper, and more. Test your website's accessibility and improve WCAG 2.2 compliance.",
    type: "website",
    url: "https://thewcag.com/tools",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Tools - Free WCAG Testing & Analysis Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Tools - Free WCAG Testing & Analysis Tools",
    description:
      "Free accessibility tools including color contrast checker, AI-powered audit helper, and more.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/tools",
  },
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

