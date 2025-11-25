import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get Help with WCAG & Accessibility | TheWCAG",
  description:
    "Get in touch with TheWCAG.com for questions about WCAG compliance, accessibility guidance, or feedback. We're here to help you build accessible websites.",
  keywords: [
    "contact TheWCAG",
    "accessibility help",
    "WCAG support",
    "accessibility questions",
    "web accessibility contact",
    "accessibility consultation",
    "WCAG help",
    "accessibility support",
    "get accessibility help",
    "accessibility contact form",
  ],
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
  openGraph: {
    title: "Contact Us - Get Help with WCAG & Accessibility",
    description: "Get in touch with TheWCAG.com. We welcome your questions, feedback, and accessibility-related inquiries.",
    type: "website",
    url: "https://thewcag.com/contact",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Contact TheWCAG - Get Help with Accessibility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get Help with WCAG & Accessibility",
    description: "Get in touch with TheWCAG.com. We welcome your questions, feedback, and accessibility-related inquiries.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

