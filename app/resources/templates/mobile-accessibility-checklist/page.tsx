import { Metadata } from "next"
import MobileChecklistPage from "./client"

export const metadata: Metadata = {
    title: "Mobile Accessibility Checklist (WCAG 2.2) | TheWCAG",
    description: "Ensure your mobile apps and responsive sites are accessible. Comprehensive checklist for touch targets, gestures, and mobile-specific WCAG criteria.",
    openGraph: {
        title: "Mobile Accessibility Checklist (WCAG 2.2) | TheWCAG",
        description: "Ensure your mobile apps and responsive sites are accessible. Comprehensive checklist for touch targets, gestures, and mobile-specific WCAG criteria.",
    }
}

export default function Page() {
    return <MobileChecklistPage />
}
