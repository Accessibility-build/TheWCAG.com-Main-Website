import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile Accessibility Guide - Making Mobile Apps & Websites Accessible | TheWCAG",
  description:
    "Master mobile accessibility: touch targets (44x44px), gestures, screen readers & WCAG 2.2 mobile requirements. Make iOS & Android apps accessible today!",
  keywords: [
    "mobile accessibility",
    "mobile app accessibility",
    "iOS accessibility",
    "Android accessibility",
    "touch target accessibility",
    "mobile screen reader",
    "mobile WCAG",
    "accessible mobile design",
    "mobile accessibility guidelines",
    "responsive accessibility",
  ],
  openGraph: {
    title: "Mobile Accessibility Guide - Making Mobile Apps & Websites Accessible",
    description:
      "Complete guide to mobile accessibility with touch targets, gestures, screen readers, and WCAG 2.2 mobile requirements.",
    type: "article",
    url: "https://thewcag.com/mobile-accessibility",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Mobile Accessibility Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Accessibility Guide - Making Mobile Apps & Websites Accessible",
    description: "Complete guide to mobile accessibility for WCAG 2.2 compliance.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/mobile-accessibility",
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

export default function MobileAccessibilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

