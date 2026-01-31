import { Metadata } from "next"
import QuickReferencePage from "./client"

export const metadata: Metadata = {
    title: "WCAG 2.2 Quick Reference Guide | TheWCAG",
    description: "A comprehensive one-page quick reference guide for WCAG 2.2 success criteria. Filter by level, principle, and download as PDF for your team.",
    openGraph: {
        title: "WCAG 2.2 Quick Reference Guide | TheWCAG",
        description: "A comprehensive one-page quick reference guide for WCAG 2.2 success criteria. Filter by level, principle, and download as PDF for your team.",
    }
}

export default function Page() {
    return <QuickReferencePage />
}
