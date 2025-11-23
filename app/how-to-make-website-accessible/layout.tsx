import { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Make a Website Accessible - Complete Step-by-Step Guide | TheWCAG",
  description:
    "Complete 8-step guide to making your website accessible & WCAG 2.2 compliant. From audits to fixes, learn everything you need. Start improving accessibility today!",
  keywords: [
    "how to make website accessible",
    "make website accessible",
    "website accessibility guide",
    "accessible website",
    "web accessibility tutorial",
    "accessibility checklist",
    "WCAG compliance guide",
    "accessible web design",
    "accessibility implementation",
    "website accessibility steps",
  ],
  openGraph: {
    title: "How to Make a Website Accessible - Complete Step-by-Step Guide",
    description:
      "Learn how to make your website accessible with our comprehensive step-by-step guide covering WCAG 2.2 compliance.",
    type: "article",
    url: "https://thewcag.com/how-to-make-website-accessible",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Make a Website Accessible Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a Website Accessible - Complete Guide",
    description: "Step-by-step guide to making your website accessible and WCAG 2.2 compliant.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/how-to-make-website-accessible",
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

export default function HowToMakeWebsiteAccessibleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

