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
    FormInput,
    Download,
    ArrowLeft,
    Type,
    AlertTriangle,
    Keyboard,
    CheckSquare,
    Zap,
    RotateCcw
} from "lucide-react"
import * as XLSX from "xlsx"

interface ChecklistItem {
    id: string
    item: string
    description: string
    wcag: string
    checked: boolean
}

const initialChecklistData: Record<string, Omit<ChecklistItem, 'checked' | 'id'>[]> = {
    labels: [
        { item: "Every input has a visible label", description: "Labels should be persistent, not placeholder-only", wcag: "3.3.2" },
        { item: "Labels are programmatically associated", description: "Use for/id or wrap input in label", wcag: "1.3.1" },
        { item: "Labels are positioned correctly", description: "Above or to the left of inputs", wcag: "3.3.2" },
        { item: "Placeholder is not the only label", description: "Placeholders disappear on focus", wcag: "3.3.2" },
        { item: "Format requirements are stated", description: "e.g., 'Date format: MM/DD/YYYY'", wcag: "3.3.2" },
        { item: "Help text is associated with input", description: "Use aria-describedby for additional info", wcag: "1.3.1" },
    ],
    required: [
        { item: "Required fields are indicated", description: "Visual indicator (asterisk) + 'required'", wcag: "3.3.2" },
        { item: "Required is programmatic", description: "Use required attribute or aria-required", wcag: "3.3.2" },
        { item: "Legend explains required indicator", description: "e.g., '* indicates required field'", wcag: "3.3.2" },
    ],
    errors: [
        { item: "Errors are clearly identified", description: "Error message appears near the field", wcag: "3.3.1" },
        { item: "Errors describe the problem", description: "Not just 'Invalid input'", wcag: "3.3.1" },
        { item: "Errors suggest correction", description: "e.g., 'Enter email as name@domain.com'", wcag: "3.3.3" },
        { item: "Error summary at top of form", description: "List all errors with links to fields", wcag: "3.3.1" },
        { item: "Errors announced to screen readers", description: "Use role='alert' or aria-live", wcag: "4.1.3" },
        { item: "Invalid fields marked with aria-invalid", description: "aria-invalid='true' on error", wcag: "3.3.1" },
        { item: "Error messages linked to fields", description: "Use aria-describedby or aria-errormessage", wcag: "3.3.1" },
    ],
    grouping: [
        { item: "Related fields are grouped", description: "Use fieldset and legend", wcag: "1.3.1" },
        { item: "Radio/checkbox groups have legend", description: "Group question in legend element", wcag: "1.3.1" },
        { item: "Multi-step forms show progress", description: "e.g., 'Step 2 of 4'", wcag: "3.3.2" },
        { item: "Form sections have headings", description: "Use proper heading hierarchy", wcag: "1.3.1" },
    ],
    keyboard: [
        { item: "All fields are keyboard accessible", description: "Can tab to and interact with all fields", wcag: "2.1.1" },
        { item: "Focus order is logical", description: "Tab order matches visual order", wcag: "2.4.3" },
        { item: "Focus is visible", description: "Clear focus indicator on all fields", wcag: "2.4.7" },
        { item: "No keyboard traps", description: "Can tab away from all fields", wcag: "2.1.2" },
        { item: "Custom controls work with keyboard", description: "Custom selects, date pickers, etc.", wcag: "2.1.1" },
        { item: "Enter submits form (when appropriate)", description: "Single input forms submit on Enter", wcag: "3.2.2" },
    ],
    validation: [
        { item: "Validation happens on submit", description: "Not only on blur (can be frustrating)", wcag: "3.3.1" },
        { item: "Success feedback is provided", description: "Confirm successful submission", wcag: "3.3.1" },
        { item: "Data can be reviewed before submit", description: "For legal/financial transactions", wcag: "3.3.4" },
        { item: "Submissions can be reversed", description: "Or confirmation step required", wcag: "3.3.4" },
    ],
}

const categories = [
    { key: "labels", name: "Labels", icon: Type, color: "text-blue-600" },
    { key: "required", name: "Required", icon: CheckSquare, color: "text-red-600" },
    { key: "errors", name: "Errors", icon: AlertTriangle, color: "text-orange-600" },
    { key: "grouping", name: "Grouping", icon: FormInput, color: "text-purple-600" },
    { key: "keyboard", name: "Keyboard", icon: Keyboard, color: "text-green-600" },
    { key: "validation", name: "Validation", icon: Zap, color: "text-cyan-600" },
]

export default function FormAccessibilityChecklistPage() {
    const [checklist, setChecklist] = useState<Record<string, ChecklistItem[]>>(() => {
        const result: Record<string, ChecklistItem[]> = {}
        Object.entries(initialChecklistData).forEach(([category, items]) => {
            result[category] = items.map((item, index) => ({
                ...item,
                id: `${category}-${index}`,
                checked: false,
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
                result[category] = items.map(item => ({ ...item, checked: false }))
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
                    Requirement: item.item,
                    Description: item.description,
                    "WCAG": item.wcag,
                    Status: item.checked ? "✓ Pass" : "☐ Not Tested",
                    Notes: ""
                })
            })
        })

        const ws = XLSX.utils.json_to_sheet(data)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "Form Checklist")

        ws['!cols'] = [
            { wch: 15 },
            { wch: 40 },
            { wch: 45 },
            { wch: 10 },
            { wch: 15 },
            { wch: 30 },
        ]

        XLSX.writeFile(wb, "form-accessibility-checklist.xlsx")
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
                                { label: "Form Checklist", href: "/resources/templates/form-accessibility-checklist" },
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
                                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                    <FormInput className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                                </div>
                                <Badge variant="secondary">Interactive Checklist</Badge>
                                <Badge variant="outline">{totalItems} Items</Badge>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                                Form Accessibility Checklist
                            </h1>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                Check off requirements as you implement them, then download your progress.
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <Card className="mb-6">
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">Implementation Progress</span>
                                    <span className="text-sm text-muted-foreground">{checkedItems} of {totalItems} complete</span>
                                </div>
                                <Progress value={progress} className="h-3" />
                                <div className="flex justify-between mt-2">
                                    <span className="text-xs text-muted-foreground">{progress}% complete</span>
                                    <Button variant="ghost" size="sm" onClick={resetAll} className="h-6 text-xs gap-1">
                                        <RotateCcw className="h-3 w-3" />
                                        Reset
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <Tabs defaultValue="labels" className="w-full">
                                    <TabsList className="grid grid-cols-3 sm:grid-cols-6 mb-4">
                                        {categories.map((cat) => {
                                            const catItems = checklist[cat.key] || []
                                            const catChecked = catItems.filter(i => i.checked).length
                                            return (
                                                <TabsTrigger key={cat.key} value={cat.key} className="text-xs relative">
                                                    {cat.name}
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
                                                                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
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
                                        <CardDescription>Export with your status</CardDescription>
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
                                        <hr />
                                        <div className="text-sm">
                                            <p className="font-medium mb-2">Related</p>
                                            <ul className="space-y-2 text-muted-foreground">
                                                <li>
                                                    <Link href="/resources/templates/qa-testing-checklist" className="hover:text-primary transition-colors">
                                                        → QA Checklist
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
