import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn Web Accessibility",
  description:
    "Learn web accessibility with role-based guides, tutorials, and resources. Start your accessibility journey with guides tailored for developers, designers, content creators, and QA testers.",
  openGraph: {
    title: "Learn Web Accessibility - WCAG 2.2 Learning Resources",
    description:
      "Learn web accessibility with role-based guides, tutorials, and resources for developers, designers, and content creators.",
    url: "https://thewcag.com/learn",
  },
  alternates: {
    canonical: "/learn",
  },
}

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

