"use client"

import { useRef } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    BookOpen,
    ArrowLeft,
    Eye,
    Hand,
    Brain,
    Cog,
    Download,
    Printer
} from "lucide-react"

const principles = [
    {
        name: "Perceivable",
        icon: Eye,
        color: "text-blue-600",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        borderColor: "border-blue-200",
        description: "Information must be presentable to users in ways they can perceive.",
        guidelines: [
            { id: "1.1", name: "Text Alternatives", key: "Provide text for non-text content" },
            { id: "1.2", name: "Time-based Media", key: "Captions, audio descriptions" },
            { id: "1.3", name: "Adaptable", key: "Content preserves meaning when reformatted" },
            { id: "1.4", name: "Distinguishable", key: "Contrast, resize, spacing" },
        ],
        keyCriteria: [
            { id: "1.1.1", name: "Non-text Content", level: "A", tip: "All images need alt text" },
            { id: "1.4.3", name: "Contrast", level: "AA", tip: "4.5:1 for text, 3:1 for large" },
            { id: "1.4.10", name: "Reflow", level: "AA", tip: "No horizontal scroll at 320px" },
            { id: "1.4.11", name: "Non-text Contrast", level: "AA", tip: "3:1 for UI components" },
        ]
    },
    {
        name: "Operable",
        icon: Hand,
        color: "text-green-600",
        bgColor: "bg-green-100 dark:bg-green-900/30",
        borderColor: "border-green-200",
        description: "User interface components and navigation must be operable.",
        guidelines: [
            { id: "2.1", name: "Keyboard", key: "All functionality via keyboard" },
            { id: "2.2", name: "Enough Time", key: "Users have enough time to read/use" },
            { id: "2.3", name: "Seizures", key: "Avoid flashing content" },
            { id: "2.4", name: "Navigable", key: "Ways to navigate, find content" },
            { id: "2.5", name: "Input Modalities", key: "Multiple ways to operate" },
        ],
        keyCriteria: [
            { id: "2.1.1", name: "Keyboard", level: "A", tip: "Tab to all interactive elements" },
            { id: "2.1.2", name: "No Trap", level: "A", tip: "Can always tab away" },
            { id: "2.4.7", name: "Focus Visible", level: "AA", tip: "Clear focus indicator" },
            { id: "2.5.8", name: "Target Size", level: "AA", tip: "24×24px minimum (2.2)" },
        ]
    },
    {
        name: "Understandable",
        icon: Brain,
        color: "text-purple-600",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
        borderColor: "border-purple-200",
        description: "Information and operation of UI must be understandable.",
        guidelines: [
            { id: "3.1", name: "Readable", key: "Language is identified" },
            { id: "3.2", name: "Predictable", key: "Pages work predictably" },
            { id: "3.3", name: "Input Assistance", key: "Help users avoid/correct errors" },
        ],
        keyCriteria: [
            { id: "3.1.1", name: "Language", level: "A", tip: "Set lang attribute on <html>" },
            { id: "3.3.1", name: "Error ID", level: "A", tip: "Describe errors clearly" },
            { id: "3.3.2", name: "Labels", level: "A", tip: "Provide labels and instructions" },
            { id: "3.3.8", name: "Auth", level: "AA", tip: "No cognitive tests (2.2)" },
        ]
    },
    {
        name: "Robust",
        icon: Cog,
        color: "text-orange-600",
        bgColor: "bg-orange-100 dark:bg-orange-900/30",
        borderColor: "border-orange-200",
        description: "Content must be robust enough for assistive technologies.",
        guidelines: [
            { id: "4.1", name: "Compatible", key: "Works with current & future tech" },
        ],
        keyCriteria: [
            { id: "4.1.2", name: "Name, Role, Value", level: "A", tip: "Use semantic HTML" },
            { id: "4.1.3", name: "Status Messages", level: "AA", tip: "aria-live for updates" },
        ]
    }
]

const quickTests = [
    { test: "Tab through the page", checks: "Focus visible, logical order, no traps" },
    { test: "Zoom to 200%", checks: "Text readable, no overlap, content accessible" },
    { test: "View at 320px width", checks: "No horizontal scroll, content reflows" },
    { test: "Turn off images", checks: "Alt text provides equivalent info" },
    { test: "Use screen reader", checks: "All content announced, forms labeled" },
    { test: "Check color contrast", checks: "4.5:1 text, 3:1 graphics" },
]

export default function QuickReferencePage() {
    const printRef = useRef<HTMLDivElement>(null)

    const handlePrint = () => {
        window.print()
    }

    return (
        <>
            <SkipLink />
            <div className="flex min-h-screen flex-col">
                <Header />
                <main id="main-content" className="flex-1">
                    <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="print:hidden">
                            <Breadcrumb
                                items={[
                                    { label: "Home", href: "/" },
                                    { label: "Resources", href: "/resources" },
                                    { label: "Templates", href: "/resources/templates" },
                                    { label: "Quick Reference", href: "/resources/templates/quick-reference" },
                                ]}
                            />

                            <Link
                                href="/resources/templates"
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Templates
                            </Link>
                        </div>

                        <div className="mb-8 print:mb-4">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 print:hidden">
                                        <BookOpen className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <div>
                                        <h1 className="text-2xl sm:text-3xl font-bold leading-tight print:text-2xl">
                                            WCAG 2.2 Quick Reference
                                        </h1>
                                        <p className="text-muted-foreground print:text-sm">
                                            One-page summary of key accessibility requirements
                                        </p>
                                    </div>
                                </div>
                                <Button onClick={handlePrint} className="gap-2 print:hidden">
                                    <Printer className="h-4 w-4" />
                                    Print / Save PDF
                                </Button>
                            </div>
                        </div>

                        <div ref={printRef} className="print:text-sm">
                            {/* POUR Principles */}
                            <div className="grid md:grid-cols-2 gap-4 mb-8 print:gap-2 print:mb-4">
                                {principles.map((principle) => {
                                    const Icon = principle.icon
                                    return (
                                        <Card key={principle.name} className={`border-2 ${principle.borderColor} print:border`}>
                                            <CardHeader className="pb-2 print:pb-1">
                                                <CardTitle className="flex items-center gap-2 text-lg print:text-base">
                                                    <Icon className={`h-5 w-5 ${principle.color} print:h-4 print:w-4`} />
                                                    {principle.name}
                                                </CardTitle>
                                                <CardDescription className="text-xs">{principle.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-3 print:space-y-1">
                                                {/* Guidelines */}
                                                <div className="space-y-1">
                                                    {principle.guidelines.map(g => (
                                                        <div key={g.id} className="text-xs flex gap-2">
                                                            <span className="font-mono font-semibold shrink-0">{g.id}</span>
                                                            <span className="text-muted-foreground">{g.key}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Key Criteria */}
                                                <div className="pt-2 border-t print:pt-1">
                                                    <p className="text-xs font-semibold mb-1">Key Criteria:</p>
                                                    <div className="space-y-1">
                                                        {principle.keyCriteria.map(c => (
                                                            <div key={c.id} className="text-xs flex items-start gap-1">
                                                                <Badge variant="outline" className="text-[10px] px-1 shrink-0">{c.level}</Badge>
                                                                <span className="font-medium">{c.id}</span>
                                                                <span className="text-muted-foreground">- {c.tip}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>

                            {/* Quick Tests */}
                            <Card className="mb-6 print:mb-2">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg print:text-base">Quick Accessibility Tests</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 print:gap-1">
                                        {quickTests.map((item, i) => (
                                            <div key={i} className="p-2 rounded border bg-muted/30 print:p-1">
                                                <p className="font-medium text-sm print:text-xs">{item.test}</p>
                                                <p className="text-xs text-muted-foreground">{item.checks}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Levels */}
                            <Card className="print:hidden">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">Conformance Levels</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid sm:grid-cols-3 gap-4">
                                        <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200">
                                            <Badge className="bg-orange-500 mb-2">Level A</Badge>
                                            <p className="text-sm font-medium">Minimum</p>
                                            <p className="text-xs text-muted-foreground">Essential, must-have requirements</p>
                                        </div>
                                        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
                                            <Badge className="bg-blue-500 mb-2">Level AA</Badge>
                                            <p className="text-sm font-medium">Recommended</p>
                                            <p className="text-xs text-muted-foreground">Standard target for most sites</p>
                                        </div>
                                        <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200">
                                            <Badge className="bg-purple-500 mb-2">Level AAA</Badge>
                                            <p className="text-sm font-medium">Enhanced</p>
                                            <p className="text-xs text-muted-foreground">Highest level, not always achievable</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Print footer */}
                            <div className="hidden print:block text-center text-xs text-muted-foreground mt-4 pt-2 border-t">
                                WCAG 2.2 Quick Reference • TheWCAG.com • Print this page for a handy reference
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>

            {/* Print styles */}
            <style jsx global>{`
        @media print {
          .print\\:hidden { display: none !important; }
          .print\\:block { display: block !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          header, footer, nav { display: none !important; }
          main { padding: 0 !important; }
          .container { max-width: 100% !important; padding: 1rem !important; }
        }
      `}</style>
        </>
    )
}
