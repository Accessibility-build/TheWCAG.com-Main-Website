import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | TheWCAG",
  description:
    "Read TheWCAG.com's privacy policy to understand how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | TheWCAG",
    description: "Read TheWCAG.com's privacy policy to understand how we collect, use, and protect your personal information.",
    type: "website",
    url: "https://thewcag.com/privacy",
  },
  alternates: {
    canonical: "https://thewcag.com/privacy",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

