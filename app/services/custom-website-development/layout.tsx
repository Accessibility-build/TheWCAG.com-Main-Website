import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Website Development - Accessible Web Design | TheWCAG",
  description:
    "Beautiful, accessible websites built from scratch. WCAG 2.2 AA compliant, modern stack, fully responsive, and SEO optimized. Starting right is easier than fixing later.",
  keywords: [
    "custom website development",
    "accessible website design",
    "WCAG compliant websites",
    "web development services",
    "accessible web design",
    "responsive website development",
    "modern website development",
  ],
  openGraph: {
    title: "Custom Website Development - Accessible Web Design",
    description:
      "Beautiful, accessible websites built from scratch. WCAG 2.2 AA compliant, modern stack, fully responsive, and SEO optimized.",
    type: "website",
    url: "https://thewcag.com/services/custom-website-development",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Custom Website Development Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Development - Accessible Web Design",
    description: "Beautiful, accessible websites built from scratch with WCAG 2.2 AA compliance.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/services/custom-website-development",
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

export default function CustomWebsiteDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

