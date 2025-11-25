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
    type: "website",
    url: "https://thewcag.com/examples/modals-dialogs",
  },
  alternates: {
    canonical: "https://thewcag.com/examples/modals-dialogs",
  },
}

export default function ModalsDialogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

