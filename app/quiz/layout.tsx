import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Accessibility Quiz with Leaderboard | WCAG 2.2 Knowledge Test | TheWCAG",
  description: "Take our free accessibility quiz and test your WCAG 2.2 knowledge! Compete on the leaderboard, get instant feedback, and learn web accessibility best practices. Perfect for developers, designers, and accessibility professionals.",
  keywords: [
    "accessibility quiz",
    "accessibility quiz with leaderboard",
    "WCAG quiz",
    "WCAG 2.2 quiz",
    "web accessibility test",
    "accessibility knowledge test",
    "WCAG guidelines quiz",
    "accessibility leaderboard",
    "free accessibility quiz",
    "learn accessibility",
    "accessibility challenge",
    "accessibility quiz online",
    "web accessibility quiz",
    "a11y quiz",
    "accessibility training quiz",
    "WCAG compliance quiz",
    "accessibility certification practice",
    "accessibility quiz for developers",
    "accessibility quiz for designers"
  ],
  openGraph: {
    title: "Free Accessibility Quiz with Leaderboard | WCAG 2.2 Knowledge Test",
    description: "Test your WCAG knowledge with our interactive accessibility quiz. Compete on the leaderboard, get instant feedback, and improve your web accessibility skills.",
    type: "website",
    url: "https://thewcag.com/quiz",
    siteName: "TheWCAG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Accessibility Quiz with Leaderboard | WCAG 2.2 Test",
    description: "Test your WCAG knowledge with our interactive accessibility quiz. Compete on the leaderboard and improve your skills!",
    site: "@thewcag",
  },
  alternates: {
    canonical: "https://thewcag.com/quiz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
