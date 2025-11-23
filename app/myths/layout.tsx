import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Myths Debunked - Common Misconceptions About WCAG | TheWCAG",
  description:
    "Debunk 12 common accessibility myths about costs, time & compliance. Learn the truth about WCAG, overlays & accessibility implementation. Get the facts now!",
  keywords: [
    "accessibility myths",
    "WCAG myths",
    "accessibility misconceptions",
    "accessibility false beliefs",
    "debunk accessibility myths",
    "accessibility facts",
    "WCAG misconceptions",
  ],
  openGraph: {
    title: "Accessibility Myths Debunked - Common Misconceptions About WCAG",
    description:
      "Debunk common accessibility myths and learn the truth about WCAG compliance, costs, and implementation.",
    type: "website",
    url: "https://thewcag.com/myths",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Myths Debunked",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Myths Debunked - Common Misconceptions About WCAG",
    description: "Debunk common accessibility myths and learn the truth about WCAG compliance.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/myths",
  },
}

export default function MythsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

