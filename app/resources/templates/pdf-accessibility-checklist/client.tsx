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
    FileType,
    Download,
    ArrowLeft,
    Heading,
    Image,
    Table2,
    Link as LinkIcon,
    FormInput,
    Type,
    FileSpreadsheet,
    Wrench,
    RotateCcw
} from "lucide-react"
import * as XLSX from "xlsx"

interface ChecklistItem {
    id: string
    item: string
    howTo: string
    wcag: string
    checked: boolean
}

const initialChecklistData: Record<string, Omit<ChecklistItem, 'checked' | 'id'>[]> = {
    structure: [
        { item: "Document is tagged", howTo: "View > Navigation > Tags", wcag: "1.3.1" },
        { item: "Tags are in correct reading order", howTo: "Use Tags panel to verify order", wcag: "1.3.2" },
        { item: "Document has title", howTo: "File > Properties > Title field", wcag: "2.4.2" },
        { item: "Language is set", howTo: "File > Properties > Advanced > Language", wcag: "3.1.1" },
        { item: "Bookmarks for long documents", howTo: "Add bookmarks for 20+ page docs", wcag: "2.4.5" },
    ],
    headings: [
        { item: "Headings use proper tags (H1, H2, etc.)", howTo: "Check Tags panel structure", wcag: "1.3.1" },
        { item: "Heading hierarchy is logical", howTo: "No skipping levels (H1 > H3)", wcag: "1.3.1" },
        { item: "Headings are not just styled text", howTo: "Must be tagged, not just bold", wcag: "1.3.1" },
    ],
    images: [
        { item: "Images have alt text", howTo: "Right-click > Edit Alt Text", wcag: "1.1.1" },
        { item: "Decorative images marked as artifacts", howTo: "Background/decorative images", wcag: "1.1.1" },
        { item: "Complex images have long descriptions", howTo: "Charts, diagrams, infographics", wcag: "1.1.1" },
        { item: "Text in images avoided", howTo: "Use actual text when possible", wcag: "1.4.5" },
    ],
    tables: [
        { item: "Tables have header rows/columns", howTo: "Tag as TH not TD", wcag: "1.3.1" },
        { item: "Tables have proper structure", howTo: "Table, TR, TH, TD tags", wcag: "1.3.1" },
        { item: "Complex tables have scope attributes", howTo: "Row/column scope defined", wcag: "1.3.1" },
        { item: "Tables have summary or captions", howTo: "For complex data tables", wcag: "1.3.1" },
        { item: "Layout tables avoided", howTo: "Tables not used for layout", wcag: "1.3.1" },
    ],
    links: [
        { item: "Link text is descriptive", howTo: "Not 'click here' or URLs", wcag: "2.4.4" },
        { item: "Links are properly tagged", howTo: "Link tag with correct destination", wcag: "1.3.1" },
        { item: "Link destinations are valid", howTo: "Test all hyperlinks", wcag: "2.4.4" },
    ],
    forms: [
        { item: "Form fields have labels", howTo: "Tooltip describes purpose", wcag: "1.3.1" },
        { item: "Form fields are tagged", howTo: "Form field tags in Tags panel", wcag: "1.3.1" },
        { item: "Required fields indicated", howTo: "Visual and text indication", wcag: "3.3.2" },
        { item: "Tab order is logical", howTo: "Test tabbing through form", wcag: "2.4.3" },
    ],
    fonts: [
        { item: "Fonts are embedded", howTo: "File > Properties > Fonts", wcag: "1.4.5" },
        { item: "Text is actual text (not images)", howTo: "Select text to verify", wcag: "1.4.5" },
        { item: "Text reflows properly", howTo: "View > Zoom > Reflow", wcag: "1.4.10" },
    ],
}

const pdfTools = [
    { name: "Adobe Acrobat Pro", purpose: "Create and fix PDF accessibility", free: false },
    { name: "PAC 2024", purpose: "PDF accessibility checker", free: true },
    { name: "NVDA", purpose: "Free screen reader for testing", free: true },
    { name: "CommonLook PDF", purpose: "Enterprise PDF remediation", free: false },
]

const categories = [
    { key: "structure", name: "Structure", icon: FileSpreadsheet, color: "text-blue-600" },
    { key: "headings", name: "Headings", icon: Heading, color: "text-green-600" },
    { key: "images", name: "Images", icon: Image, color: "text-purple-600" },
    { key: "tables", name: "Tables", icon: Table2, color: "text-orange-600" },
    { key: "links", name: "Links", icon: LinkIcon, color: "text-pink-600" },
    { key: "forms", name: "Forms", icon: FormInput, color: "text-cyan-600" },
    { key: "fonts", name: "Fonts", icon: Type, color: "text-yellow-600" },
]

export default function PDFAccessibilityChecklistPage() {
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

    const totalItems = useMemo(() => Object.values(checklist).flat().length, [checklist])
    const checkedItems = useMemo(() => Object.values(checklist).flat().filter(item => item.checked).length, [checklist])
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
                    "How to Check/Fix": item.howTo,
                    "WCAG": item.wcag,
                    Status: item.checked ? "✓ Pass" : "☐ Not Tested",
                    Notes: ""
                })
            })
        })

        const ws = XLSX.utils.json_to_sheet(data)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "PDF Checklist")

        // Add Tools sheet
        const toolsData = pdfTools.map(t => ({
            Tool: t.name,
            Purpose: t.purpose,
            "Free": t.free ? "Yes" : "No"
        }))
        const ws2 = XLSX.utils.json_to_sheet(toolsData)
        XLSX.utils.book_append_sheet(wb, ws2, "Tools Reference")

        ws['!cols'] = [
            { wch: 15 }, { wch: 45 }, { wch: 35 }, { wch: 10 }, { wch: 15 }, { wch: 30 },
        ]

        XLSX.writeFile(wb, "pdf-accessibility-checklist.xlsx")
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
                                { label: "PDF Checklist", href: "/resources/templates/pdf-accessibility-checklist" },
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
                                <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900/30">
                                    <FileType className="h-8 w-8 text-red-600 dark:text-red-400" />
                                </div>
                                <Badge variant="secondary">Interactive Checklist</Badge>
                                <Badge variant="outline">{totalItems} Items</Badge>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                                PDF Accessibility Checklist
                            </h1>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                Check off items as you remediate your PDF. Download includes your progress and a tools reference sheet.
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <Card className="mb-6">
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">Remediation Progress</span>
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
                                <Tabs defaultValue="structure" className="w-full">
                                    <TabsList className="flex flex-wrap gap-1 h-auto mb-4">
                                        {categories.map((cat) => {
                                            const catItems = checklist[cat.key] || []
                                            const catChecked = catItems.filter(i => i.checked).length
                                            return (
                                                <TabsTrigger key={cat.key} value={cat.key} className="text-xs px-3 py-1.5 relative">
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
                                                                    className={`p-3 rounded-lg border transition-colors ${item.checked ? "bg-green-50 dark:bg-green-900/20 border-green-200" : "bg-background"
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
                                                                            <p className="text-sm text-muted-foreground mt-1">📋 {item.howTo}</p>
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

                                {/* Tools */}
                                <Card className="mt-6">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Wrench className="h-5 w-5" />
                                            Recommended Tools
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {pdfTools.map((tool, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                                                    <div>
                                                        <p className="font-medium text-sm">{tool.name}</p>
                                                        <p className="text-xs text-muted-foreground">{tool.purpose}</p>
                                                    </div>
                                                    <Badge variant={tool.free ? "secondary" : "outline"} className="text-xs">
                                                        {tool.free ? "Free" : "Paid"}
                                                    </Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar */}
                            <div>
                                <Card className="sticky top-6">
                                    <CardHeader>
                                        <CardTitle>Download Progress</CardTitle>
                                        <CardDescription>Includes tools reference sheet</CardDescription>
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
                                            <p>• 2 sheets (Checklist + Tools)</p>
                                            <p>• Includes your progress</p>
                                        </div>
                                        <hr />
                                        <div className="text-sm">
                                            <p className="font-medium mb-2">Related</p>
                                            <ul className="space-y-2 text-muted-foreground">
                                                <li>
                                                    <Link href="/resources/templates/accessibility-statement" className="hover:text-primary transition-colors">
                                                        → Accessibility Statement
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
