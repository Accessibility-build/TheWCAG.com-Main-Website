import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | TheWCAG",
  description:
    "Get in touch with TheWCAG.com. We welcome your questions, feedback, and accessibility-related inquiries.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us | TheWCAG",
    description: "Get in touch with TheWCAG.com. We welcome your questions, feedback, and accessibility-related inquiries.",
    type: "website",
    url: "https://thewcag.com/contact",
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

