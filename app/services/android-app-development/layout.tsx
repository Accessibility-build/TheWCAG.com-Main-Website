import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Android App Development - Accessible Mobile Apps | TheWCAG",
  description:
    "Native Android apps that work for everyone. Material Design, accessibility built-in, performance optimized, and Play Store ready. Accessibility isn't optional.",
  keywords: [
    "Android app development",
    "accessible Android apps",
    "mobile app development",
    "Android accessibility",
    "TalkBack support",
    "Material Design apps",
    "Kotlin development",
  ],
  openGraph: {
    title: "Android App Development - Accessible Mobile Apps",
    description:
      "Native Android apps that work for everyone. Material Design, accessibility built-in, performance optimized, and Play Store ready.",
    type: "website",
    url: "https://thewcag.com/services/android-app-development",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Android App Development Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Android App Development - Accessible Mobile Apps",
    description: "Native Android apps with Material Design and accessibility built-in.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/services/android-app-development",
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

export default function AndroidAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

