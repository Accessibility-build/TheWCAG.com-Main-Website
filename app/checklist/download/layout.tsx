import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Download WCAG 2.2 Checklist | Custom Excel Export | TheWCAG",
    description:
        "Download a customizable WCAG 2.2 checklist in Excel format. Choose columns, design options, and filters to create the perfect accessibility compliance checklist for your team.",
    keywords: [
        "WCAG 2.2 download",
        "WCAG checklist Excel",
        "accessibility checklist download",
        "WCAG compliance spreadsheet",
        "custom WCAG export",
        "accessibility audit template",
    ],
    openGraph: {
        title: "Download Custom WCAG 2.2 Checklist",
        description: "Create and download a customizable WCAG 2.2 checklist in Excel format with design options and filters.",
        url: "https://thewcag.com/checklist/download",
        siteName: "TheWCAG",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Download Custom WCAG 2.2 Checklist",
        description: "Create and download a customizable WCAG 2.2 checklist in Excel format.",
    },
    alternates: {
        canonical: "https://thewcag.com/checklist/download",
    },
}

export default function DownloadLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
