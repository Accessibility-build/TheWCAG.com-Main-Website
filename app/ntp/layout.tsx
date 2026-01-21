import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NTP Server Sync System - Technical Guide | TheWCAG",
  description:
    "Comprehensive technical documentation for time synchronization between CCS and AIG servers using NTP and Chrony. Learn about backend-driven, frontend-driven, and database-driven approaches.",
  keywords: [
    "NTP server sync",
    "Chrony configuration",
    "time synchronization",
    "CCS server",
    "AIG server",
    "stratum 1 time source",
    "network time protocol",
    "chronyc commands",
    "time sync architecture",
  ],
  openGraph: {
    title: "NTP Server Sync System - Technical Guide",
    description:
      "Technical documentation for time synchronization between CCS and AIG servers. Covers backend-driven, frontend-driven, and database-driven approaches.",
    url: "https://thewcag.com/ntp",
    type: "article",
    siteName: "TheWCAG - Technical Documentation",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "NTP Server Sync System Guide",
      },
    ],
  },
  alternates: {
    canonical: "https://thewcag.com/ntp",
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

export default function NTPLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
