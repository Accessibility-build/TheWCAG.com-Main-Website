import { Metadata } from "next"
import { ogImages } from "@/lib/og-image"

export const metadata: Metadata = {
  title: "About Us - Making the Web Accessible for Everyone | TheWCAG",
  description:
    "TheWCAG.com is an independent educational resource dedicated to simplifying web accessibility guidelines for developers, designers, and content creators. Learn our mission.",
  keywords: [
    "about TheWCAG",
    "web accessibility education",
    "accessibility resources",
    "WCAG learning",
    "accessibility training",
    "web accessibility",
    "a11y education",
    "accessibility mission",
    "WCAG guide",
    "web accessibility help",
  ],
  openGraph: {
    title: "About Us - Making the Web Accessible for Everyone",
    description:
      "TheWCAG.com is an independent educational resource dedicated to simplifying web accessibility guidelines.",
    type: "website",
    url: "https://thewcag.com/about",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: ogImages.about(),
        width: 1200,
        height: 630,
        alt: "About TheWCAG - Making the Web Accessible",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Making the Web Accessible for Everyone",
    description:
      "TheWCAG.com is an independent educational resource dedicated to simplifying web accessibility guidelines.",
    images: [ogImages.about()],
  },
  alternates: {
    canonical: "https://thewcag.com/about",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

