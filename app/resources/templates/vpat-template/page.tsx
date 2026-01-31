import { Metadata } from "next"
import VPATTemplatePage from "./client"

export const metadata: Metadata = {
    title: "VPAT Template (WCAG 2.2) | Free Accessibility Conformance Report",
    description: "Download our free VPAT template for WCAG 2.2. Create voluntary product accessibility templates, evaluate conformance, and export reports in Excel or Word.",
    openGraph: {
        title: "VPAT Template (WCAG 2.2) | Free Accessibility Conformance Report",
        description: "Download our free VPAT template for WCAG 2.2. Create voluntary product accessibility templates, evaluate conformance, and export reports in Excel or Word.",
    }
}

export default function Page() {
    return <VPATTemplatePage />
}
