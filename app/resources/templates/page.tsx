"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    FileText,
    ClipboardCheck,
    FormInput,
    Smartphone,
    FileType,
    ArrowRight,
    Download,
    Sparkles,
    FileSpreadsheet,
    BookOpen
} from "lucide-react"

const templates = [
    {
        slug: "accessibility-statement",
        title: "Accessibility Statement Template",
        description: "Fill in your organization's details and download a ready-to-use accessibility statement. Preview updates in real-time.",
        icon: FileText,
        badge: "Most Popular",
        format: "Word Document",
        features: ["Fillable form", "Live preview", "Word download", "Copy to clipboard"],
        color: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
        slug: "vpat-template",
        title: "VPAT Template",
        description: "Document your product's accessibility conformance. Supports WCAG 2.0, 2.1, and 2.2 with fillable criteria tables.",
        icon: FileSpreadsheet,
        badge: "Compliance",
        format: "Word + Excel",
        features: ["WCAG version selector", "Product info form", "Status dropdowns", "Word/Excel export"],
        color: "text-indigo-600 dark:text-indigo-400",
        bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    },
    {
        slug: "quick-reference",
        title: "Quick Reference Guide",
        description: "One-page visual summary of WCAG 2.2. Print-friendly reference with POUR principles and key criteria.",
        icon: BookOpen,
        badge: "Cheat Sheet",
        format: "Print / PDF",
        features: ["POUR principles", "Key criteria", "Quick tests", "Print-friendly"],
        color: "text-amber-600 dark:text-amber-400",
        bgColor: "bg-amber-100 dark:bg-amber-900/30",
    },
    {
        slug: "qa-testing-checklist",
        title: "QA Accessibility Testing Checklist",
        description: "Interactive checklist - check off items as you test, track your progress, and download results.",
        icon: ClipboardCheck,
        badge: "For Testers",
        format: "Interactive + Excel",
        features: ["Working checkboxes", "Progress tracking", "6 categories", "Excel export"],
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
        slug: "form-accessibility-checklist",
        title: "Form Accessibility Checklist",
        description: "Check off requirements as you implement them. Download your progress as a spreadsheet.",
        icon: FormInput,
        badge: "For Developers",
        format: "Interactive + Excel",
        features: ["Working checkboxes", "30+ items", "Progress bar", "Excel export"],
        color: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
        slug: "mobile-accessibility-checklist",
        title: "Mobile App Accessibility Checklist",
        description: "Test iOS and Android apps with this interactive checklist. Track progress with platform-specific guidance.",
        icon: Smartphone,
        badge: "iOS & Android",
        format: "Interactive + Excel",
        features: ["Working checkboxes", "iOS column", "Android column", "Progress tracking"],
        color: "text-orange-600 dark:text-orange-400",
        bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
        slug: "pdf-accessibility-checklist",
        title: "PDF Accessibility Checklist",
        description: "Remediate PDFs step by step. Check items as you fix them, download progress with tools reference.",
        icon: FileType,
        badge: "For Documents",
        format: "Interactive + Excel",
        features: ["Working checkboxes", "How-to instructions", "Tools reference", "Multi-sheet Excel"],
        color: "text-red-600 dark:text-red-400",
        bgColor: "bg-red-100 dark:bg-red-900/30",
    },
]

export default function TemplatesPage() {
    return (
        <>
            <SkipLink />
            <div className="flex min-h-screen flex-col">
                <Header />
                <main id="main-content" className="flex-1">
                    <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
                        <Breadcrumb
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Resources", href: "/resources" },
                                { label: "Templates", href: "/resources/templates" },
                            ]}
                        />

                        {/* Header */}
                        <div className="mb-8 sm:mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                </div>
                                <Badge variant="secondary" className="text-sm">Free Downloads</Badge>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                                Free Templates & Checklists
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Professional accessibility templates and checklists. Preview all content on the page,
                                then download in your preferred format. Free for personal and commercial use.
                            </p>
                        </div>

                        {/* Templates Grid */}
                        <div className="space-y-6">
                            {templates.map((template) => {
                                const Icon = template.icon
                                return (
                                    <Card key={template.slug} className="group hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                                <div className={`p-3 rounded-xl ${template.bgColor} shrink-0`}>
                                                    <Icon className={`h-7 w-7 ${template.color}`} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                                        <CardTitle className="text-xl">{template.title}</CardTitle>
                                                        <Badge variant="outline" className="text-xs">{template.badge}</Badge>
                                                        <Badge variant="secondary" className="text-xs">{template.format}</Badge>
                                                    </div>
                                                    <CardDescription className="text-base leading-relaxed">
                                                        {template.description}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {template.features.map((feature, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                                <Link href={`/resources/templates/${template.slug}`}>
                                                    <Button className="gap-2 group-hover:gap-3 transition-all">
                                                        View & Download
                                                        <ArrowRight className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>

                        {/* Download All CTA */}
                        <Card className="mt-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                            <CardContent className="pt-6">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div>
                                        <h2 className="text-xl font-bold mb-1">Want all templates?</h2>
                                        <p className="text-muted-foreground">
                                            Visit each template page to download the Excel files you need.
                                        </p>
                                    </div>
                                    <Link href="/resources">
                                        <Button variant="outline" className="gap-2">
                                            <Download className="h-4 w-4" />
                                            Browse All Resources
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
