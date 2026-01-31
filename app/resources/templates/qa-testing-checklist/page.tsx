"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
    ClipboardCheck,
    Download,
    ArrowLeft,
    Keyboard,
    Eye,
    Volume2,
    FormInput,
    Play,
    FileSpreadsheet,
    RotateCcw
} from "lucide-react"
import * as XLSX from "xlsx"

interface ChecklistItem {
    id: string
    item: string
    howToTest: string
    wcag: string
    checked: boolean
    notes: string
}

const initialChecklistData: Record<string, Omit<ChecklistItem, 'checked' | 'notes' | 'id'>[]> = {
    keyboard: [
        { item: "All interactive elements are focusable", howToTest: "Tab through the page", wcag: "2.1.1" },
        { item: "Focus order is logical", howToTest: "Tab through and verify order matches visual layout", wcag: "2.4.3" },
        { item: "Focus indicator is visible", howToTest: "Tab and look for visible focus ring", wcag: "2.4.7" },
        { item: "No keyboard traps", howToTest: "Can you tab out of all components?", wcag: "2.1.2" },
        { item: "Skip links work", howToTest: "First tab should reveal skip link", wcag: "2.4.1" },
        { item: "Custom controls work with keyboard", howToTest: "Test dropdowns, modals, tabs with Enter/Space/Arrows", wcag: "2.1.1" },
    ],
    screenReader: [
        { item: "Page title is descriptive", howToTest: "Check browser tab or AT announcement", wcag: "2.4.2" },
        { item: "Headings are properly structured", howToTest: "Use heading navigation (H key in NVDA/VO)", wcag: "1.3.1" },
        { item: "Images have alt text", howToTest: "Navigate to images, verify announcement", wcag: "1.1.1" },
        { item: "Form labels are announced", howToTest: "Focus on form fields, verify label is read", wcag: "1.3.1" },
        { item: "Error messages are announced", howToTest: "Submit invalid form, verify error is announced", wcag: "3.3.1" },
        { item: "Dynamic content changes announced", howToTest: "Trigger dynamic updates, verify live regions work", wcag: "4.1.3" },
    ],
    visual: [
        { item: "Color contrast meets 4.5:1 for text", howToTest: "Use contrast checker tool", wcag: "1.4.3" },
        { item: "Color is not only means of info", howToTest: "Can you understand without color?", wcag: "1.4.1" },
        { item: "Text can be resized to 200%", howToTest: "Zoom browser to 200%, verify readability", wcag: "1.4.4" },
        { item: "Content reflows at 320px width", howToTest: "Resize window or use responsive mode", wcag: "1.4.10" },
        { item: "Non-text contrast meets 3:1", howToTest: "Check buttons, icons, form fields", wcag: "1.4.11" },
    ],
    forms: [
        { item: "All fields have visible labels", howToTest: "Visual inspection", wcag: "3.3.2" },
        { item: "Required fields are indicated", howToTest: "Check for asterisk or 'required' text", wcag: "3.3.2" },
        { item: "Error messages are specific", howToTest: "Submit invalid data, check error clarity", wcag: "3.3.1" },
        { item: "Instructions are provided", howToTest: "Check for format hints (e.g., date format)", wcag: "3.3.2" },
    ],
    media: [
        { item: "Videos have captions", howToTest: "Play video and check for captions", wcag: "1.2.2" },
        { item: "Audio has transcript", howToTest: "Look for transcript link", wcag: "1.2.1" },
        { item: "Media can be paused", howToTest: "Test pause/stop controls", wcag: "1.4.2" },
        { item: "No auto-playing audio", howToTest: "Page load should be silent", wcag: "1.4.2" },
    ],
    structure: [
        { item: "Language is set", howToTest: "Check HTML lang attribute", wcag: "3.1.1" },
        { item: "Lists are marked up correctly", howToTest: "Inspect list elements", wcag: "1.3.1" },
        { item: "Tables have headers", howToTest: "Check for th elements and scope", wcag: "1.3.1" },
        { item: "Landmarks are used", howToTest: "Check for main, nav, header, footer", wcag: "1.3.1" },
    ],
}

const categories = [
    { key: "keyboard", name: "Keyboard Navigation", icon: Keyboard, color: "text-blue-600" },
    { key: "screenReader", name: "Screen Reader", icon: Volume2, color: "text-green-600" },
    { key: "visual", name: "Visual", icon: Eye, color: "text-purple-600" },
    { key: "forms", name: "Forms", icon: FormInput, color: "text-orange-600" },
    { key: "media", name: "Media", icon: Play, color: "text-red-600" },
    { key: "structure", name: "Structure", icon: FileSpreadsheet, color: "text-cyan-600" },
]

export default function QATestingChecklistPage() {
    // Initialize state with IDs and checked status
    const [checklist, setChecklist] = useState<Record<string, ChecklistItem[]>>(() => {
        const result: Record<string, ChecklistItem[]> = {}
        Object.entries(initialChecklistData).forEach(([category, items]) => {
            result[category] = items.map((item, index) => ({
                ...item,
                id: `${category}-${index}`,
                checked: false,
                notes: ""
            }))
        })
        return result
    })

    const totalItems = useMemo(() =>
        Object.values(checklist).flat().length,
        [checklist]
    )

    const checkedItems = useMemo(() =>
        Object.values(checklist).flat().filter(item => item.checked).length,
        [checklist]
    )

    const progress = Math.round((checkedItems / totalItems) * 100)

    const toggleItem = (category: string, id: string) => {
        setChecklist(prev => ({
            ...prev,
            [category]: prev[category].map(item =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        }))
    }

    const resetAll = () => {
        setChecklist(prev => {
            const result: Record<string, ChecklistItem[]> = {}
            Object.entries(prev).forEach(([category, items]) => {
                result[category] = items.map(item => ({ ...item, checked: false, notes: "" }))
            })
            return result
        })
    }

    const downloadExcel = () => {
        const data: any[] = []

        Object.entries(checklist).forEach(([category, items]) => {
            items.forEach(item => {
                data.push({
                    Category: categories.find(c => c.key === category)?.name || category,
                    "Test Item": item.item,
                    "How to Test": item.howToTest,
                    "WCAG": item.wcag,
                    "Status": item.checked ? "✓ Pass" : "☐ Not Tested",
                    "Notes": item.notes
                })
            })
        })

        const ws = XLSX.utils.json_to_sheet(data)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "QA Checklist")

        // Add column widths
        ws['!cols'] = [
            { wch: 20 }, // Category
            { wch: 45 }, // Test Item
            { wch: 50 }, // How to Test
            { wch: 10 }, // WCAG
            { wch: 15 }, // Status
            { wch: 30 }, // Notes
        ]

        XLSX.writeFile(wb, "qa-accessibility-checklist.xlsx")
    }

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
                                { label: "QA Testing Checklist", href: "/resources/templates/qa-testing-checklist" },
                            ]}
                        />

                        <Link
                            href="/resources/templates"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Templates
                        </Link>

                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30">
                                    <ClipboardCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
                                </div>
                                <Badge variant="secondary">Interactive Checklist</Badge>
                                <Badge variant="outline">{totalItems} Items</Badge>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                                QA Accessibility Testing Checklist
                            </h1>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                Check off items as you test, then download your progress as an Excel file.
                                Your progress is shown in real-time.
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <Card className="mb-6">
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">Testing Progress</span>
                                    <span className="text-sm text-muted-foreground">{checkedItems} of {totalItems} items tested</span>
                                </div>
                                <Progress value={progress} className="h-3" />
                                <div className="flex justify-between mt-2">
                                    <span className="text-xs text-muted-foreground">{progress}% complete</span>
                                    <Button variant="ghost" size="sm" onClick={resetAll} className="h-6 text-xs gap-1">
                                        <RotateCcw className="h-3 w-3" />
                                        Reset All
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <Tabs defaultValue="keyboard" className="w-full">
                                    <TabsList className="grid grid-cols-3 sm:grid-cols-6 mb-4">
                                        {categories.map((cat) => {
                                            const catItems = checklist[cat.key] || []
                                            const catChecked = catItems.filter(i => i.checked).length
                                            return (
                                                <TabsTrigger key={cat.key} value={cat.key} className="text-xs sm:text-sm relative">
                                                    {cat.name.split(' ')[0]}
                                                    {catChecked > 0 && (
                                                        <span className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 text-white text-[10px] rounded-full flex items-center justify-center">
                                                            {catChecked}
                                                        </span>
                                                    )}
                                                </TabsTrigger>
                                            )
                                        })}
                                    </TabsList>

                                    {categories.map((cat) => {
                                        const Icon = cat.icon
                                        const items = checklist[cat.key] || []
                                        const catChecked = items.filter(i => i.checked).length
                                        return (
                                            <TabsContent key={cat.key} value={cat.key}>
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle className="flex items-center justify-between">
                                                            <span className="flex items-center gap-2">
                                                                <Icon className={`h-5 w-5 ${cat.color}`} />
                                                                {cat.name}
                                                            </span>
                                                            <Badge variant={catChecked === items.length ? "default" : "secondary"}>
                                                                {catChecked}/{items.length}
                                                            </Badge>
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="space-y-3">
                                                            {items.map((item) => (
                                                                <div
                                                                    key={item.id}
                                                                    className={`p-3 rounded-lg border transition-colors ${item.checked ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" : "bg-background"
                                                                        }`}
                                                                >
                                                                    <div className="flex items-start gap-3">
                                                                        <Checkbox
                                                                            id={item.id}
                                                                            checked={item.checked}
                                                                            onCheckedChange={() => toggleItem(cat.key, item.id)}
                                                                            className="mt-1"
                                                                        />
                                                                        <div className="flex-1">
                                                                            <label
                                                                                htmlFor={item.id}
                                                                                className={`font-medium cursor-pointer ${item.checked ? "line-through text-muted-foreground" : ""}`}
                                                                            >
                                                                                {item.item}
                                                                            </label>
                                                                            <p className="text-sm text-muted-foreground mt-1">{item.howToTest}</p>
                                                                        </div>
                                                                        <Badge variant="outline" className="text-xs shrink-0">{item.wcag}</Badge>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </TabsContent>
                                        )
                                    })}
                                </Tabs>
                            </div>

                            {/* Sidebar */}
                            <div>
                                <Card className="sticky top-6">
                                    <CardHeader>
                                        <CardTitle>Download Progress</CardTitle>
                                        <CardDescription>Export your checklist with status</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                                            <div className="text-3xl font-bold text-primary">{progress}%</div>
                                            <div className="text-sm text-muted-foreground">Complete</div>
                                        </div>
                                        <Button
                                            size="lg"
                                            onClick={downloadExcel}
                                            className="w-full gap-2"
                                        >
                                            <Download className="h-5 w-5" />
                                            Download Excel
                                        </Button>
                                        <div className="text-xs text-muted-foreground space-y-1">
                                            <p>• Includes your check status</p>
                                            <p>• Marked items show as "Pass"</p>
                                            <p>• Add notes after download</p>
                                        </div>
                                        <hr />
                                        <div className="text-sm">
                                            <p className="font-medium mb-2">Related Resources</p>
                                            <ul className="space-y-2 text-muted-foreground">
                                                <li>
                                                    <Link href="/testing-guide" className="hover:text-primary transition-colors">
                                                        → Testing Guide
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/resources/templates/form-accessibility-checklist" className="hover:text-primary transition-colors">
                                                        → Form Checklist
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
