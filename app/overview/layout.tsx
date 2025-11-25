import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG Overview - Web Accessibility Guidelines | TheWCAG",
  description:
    "Master WCAG 2.2 - the international web accessibility standard. Learn POUR principles, 87+ success criteria & how to make sites accessible. Start your journey.",
  keywords: [
    "WCAG",
    "WCAG 2.2",
    "web accessibility guidelines",
    "accessibility standards",
    "POUR principles",
    "web accessibility",
    "a11y",
    "accessibility compliance",
    "W3C WCAG",
    "ADA compliance",
    "Section 508",
    "WCAG overview",
    "web content accessibility guidelines",
    "WCAG principles",
    "accessibility levels",
    "WCAG success criteria",
    "WCAG conformance",
  ],
  openGraph: {
    title: "WCAG Overview - Understanding Web Content Accessibility Guidelines",
    description:
      "Learn about WCAG (Web Content Accessibility Guidelines) 2.2, the international standard for web accessibility.",
    type: "website",
    url: "https://thewcag.com/overview",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "WCAG Overview - Web Content Accessibility Guidelines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG Overview - Understanding Web Content Accessibility Guidelines",
    description:
      "Learn about WCAG (Web Content Accessibility Guidelines) 2.2, the international standard for web accessibility.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/overview",
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

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

