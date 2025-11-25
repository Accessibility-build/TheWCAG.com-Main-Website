import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "iOS App Development - Accessible Mobile Apps | TheWCAG",
  description:
    "Native iOS apps that follow Apple's accessibility guidelines. Swift/SwiftUI, VoiceOver compatible, App Store ready, and modern iOS features. Because everyone deserves great apps.",
  keywords: [
    "iOS app development",
    "accessible iOS apps",
    "mobile app development",
    "iOS accessibility",
    "VoiceOver support",
    "Swift development",
    "SwiftUI apps",
  ],
  openGraph: {
    title: "iOS App Development - Accessible Mobile Apps",
    description:
      "Native iOS apps that follow Apple's accessibility guidelines. Swift/SwiftUI, VoiceOver compatible, and App Store ready.",
    type: "website",
    url: "https://thewcag.com/services/ios-app-development",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "iOS App Development Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iOS App Development - Accessible Mobile Apps",
    description: "Native iOS apps with Swift/SwiftUI and VoiceOver support.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/services/ios-app-development",
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

export default function IOSAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

