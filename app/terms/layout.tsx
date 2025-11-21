import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | TheWCAG",
  description:
    "Read TheWCAG.com's terms of service to understand the rules and guidelines for using our website.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | TheWCAG",
    description: "Read TheWCAG.com's terms of service to understand the rules and guidelines for using our website.",
    type: "website",
    url: "https://thewcag.com/terms",
  },
  alternates: {
    canonical: "https://thewcag.com/terms",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

