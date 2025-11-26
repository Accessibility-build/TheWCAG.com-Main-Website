import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Modals & Dialogs - WCAG Compliant Examples | TheWCAG",
  description:
    "Learn how to create accessible modals and dialogs with proper focus management, keyboard trapping, and ARIA patterns. WCAG 2.2 compliant dialog examples.",
  keywords: [
    "accessible modals",
    "accessible dialogs",
    "modal accessibility",
    "dialog accessibility",
    "focus management",
  ],
  openGraph: {
    title: "Accessible Modals & Dialogs - WCAG Compliant Examples",
    description: "Learn how to create accessible modals and dialogs with proper focus management.",
    type: "article",
    url: "https://thewcag.com/examples/modals-dialogs",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessible Modals & Dialogs Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Modals & Dialogs - WCAG Compliant Examples",
    description: "Learn how to create accessible modals and dialogs with proper focus management.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/examples/modals-dialogs",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ModalsDialogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

