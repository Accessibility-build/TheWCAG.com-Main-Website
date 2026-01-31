import { Metadata } from "next"
import FormChecklistPage from "./client"

export const metadata: Metadata = {
    title: "Form Accessibility Checklist | Accessible Input Fields & Validation",
    description: "Master accessible forms with our detailed checklist. Learn best practices for labels, error identification, keyboard navigation, and cognitive accessibility.",
    openGraph: {
        title: "Form Accessibility Checklist | Accessible Input Fields & Validation",
        description: "Master accessible forms with our detailed checklist. Learn best practices for labels, error identification, keyboard navigation, and cognitive accessibility.",
    }
}

export default function Page() {
    return <FormChecklistPage />
}
