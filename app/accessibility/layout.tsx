import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Statement | TheWCAG",
  description:
    "Read TheWCAG.com's accessibility statement to learn about our commitment to digital accessibility and WCAG compliance.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Accessibility Statement | TheWCAG",
    description: "Read TheWCAG.com's accessibility statement to learn about our commitment to digital accessibility.",
    type: "website",
    url: "https://thewcag.com/accessibility",
  },
  alternates: {
    canonical: "https://thewcag.com/accessibility",
  },
}

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

