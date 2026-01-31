import { Metadata } from "next"
import PDFChecklistPage from "./client"

export const metadata: Metadata = {
    title: "PDF Accessibility Checklist | WCAG 2.1 & 2.2 Compliant",
    description: "Complete checklist for making PDF documents accessible. Covers tagging, reading order, alt text, and table structures for PDF/UA and WCAG compliance.",
    openGraph: {
        title: "PDF Accessibility Checklist | WCAG 2.1 & 2.2 Compliant",
        description: "Complete checklist for making PDF documents accessible. Covers tagging, reading order, alt text, and table structures for PDF/UA and WCAG compliance.",
    }
}

export default function Page() {
    return <PDFChecklistPage />
}
