import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for WCAG guide
  title: "TheWCAG.com - Complete WCAG 2.2 Accessibility Guidelines",
  description:
    "Comprehensive guide to Web Content Accessibility Guidelines (WCAG) 2.2 with interactive examples, tools, and resources for developers, designers, and content creators.",
  keywords: [
    "WCAG",
    "accessibility",
    "a11y",
    "WCAG 2.2",
    "web accessibility",
    "POUR principles",
    "accessible web design",
  ],
  authors: [{ name: "TheWCAG.com" }],
  generator: "Next.js",
  openGraph: {
    type: "website",
    title: "TheWCAG.com - Complete WCAG 2.2 Guidelines",
    description:
      "Master web accessibility with our comprehensive WCAG 2.2 guide. Interactive examples, tools, and resources.",
    siteName: "TheWCAG.com",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFDF9" },
    { media: "(prefers-color-scheme: dark)", color: "#1F1F1E" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
