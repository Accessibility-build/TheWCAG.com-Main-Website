import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Accessibility Templates & Checklists | TheWCAG",
    description:
        "Download free accessibility templates and checklists: Accessibility Statement, QA Testing, Form, Mobile App, and PDF accessibility checklists. Professional Excel format.",
    keywords: [
        "accessibility templates",
        "accessibility checklist download",
        "WCAG checklist",
        "accessibility statement template",
        "QA accessibility testing",
        "form accessibility checklist",
        "mobile accessibility checklist",
        "PDF accessibility checklist",
    ],
    openGraph: {
        title: "Free Accessibility Templates & Checklists",
        description: "Download professional accessibility templates and checklists in Excel format. Free resources for accessibility compliance.",
        url: "https://thewcag.com/resources/templates",
        type: "website",
        siteName: "TheWCAG - An accessibility Guide",
    },
    alternates: {
        canonical: "https://thewcag.com/resources/templates",
    },
}

export default function TemplatesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
