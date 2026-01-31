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
    Smartphone,
    Download,
    ArrowLeft,
    Hand,
    Volume2,
    Move,
    Palette,
    FormInput,
    RotateCcw
} from "lucide-react"
import * as XLSX from "xlsx"

interface ChecklistItem {
    id: string
    item: string
    ios: string
    android: string
    wcag: string
    checked: boolean
}

const initialChecklistData: Record<string, Omit<ChecklistItem, 'checked' | 'id'>[]> = {
    touch: [
        { item: "Touch targets are at least 44x44pt (iOS) / 48x48dp (Android)", ios: "44x44pt minimum", android: "48x48dp minimum", wcag: "2.5.5" },
        { item: "Adequate spacing between touch targets", ios: "Prevent accidental taps", android: "Prevent accidental taps", wcag: "2.5.5" },
        { item: "No small text-only buttons", ios: "Use adequate padding", android: "Use adequate padding", wcag: "2.5.5" },
    ],
    screenReader: [
        { item: "All elements have accessible names", ios: "accessibilityLabel", android: "contentDescription", wcag: "1.1.1" },
        { item: "Images have alt text or are decorative", ios: "isAccessibilityElement", android: "importantForAccessibility", wcag: "1.1.1" },
        { item: "Buttons describe their action", ios: "\"Submit form\" not \"Button\"", android: "\"Submit form\" not \"Button\"", wcag: "2.4.4" },
        { item: "Form fields have labels", ios: "Associated labels", android: "Associated labels", wcag: "1.3.1" },
        { item: "Headings are marked as headings", ios: "accessibilityTraits: header", android: "heading role", wcag: "1.3.1" },
        { item: "Live regions announce updates", ios: "Use post notifications", android: "announceForAccessibility", wcag: "4.1.3" },
        { item: "Focus order is logical", ios: "Swipe order = visual", android: "Swipe order = visual", wcag: "2.4.3" },
        { item: "Custom actions are available", ios: "accessibilityCustomActions", android: "AccessibilityNodeInfo", wcag: "2.1.1" },
    ],
    gestures: [
        { item: "Standard gestures are supported", ios: "Swipe, tap, double-tap", android: "Swipe, tap, double-tap", wcag: "2.5.1" },
        { item: "Complex gestures have alternatives", ios: "Provide buttons for pinch", android: "Provide buttons for pinch", wcag: "2.5.1" },
        { item: "Motion activation has alternatives", ios: "Button for shake actions", android: "Button for shake actions", wcag: "2.5.4" },
        { item: "Drag actions have alternatives", ios: "Tap-based alternative", android: "Tap-based alternative", wcag: "2.5.7" },
    ],
    layout: [
        { item: "App works in portrait and landscape", ios: "Unless specific need", android: "Unless specific need", wcag: "1.3.4" },
        { item: "Content reflows when resized", ios: "No horizontal scroll", android: "No horizontal scroll", wcag: "1.4.10" },
        { item: "Text scales with system settings", ios: "Dynamic Type support", android: "Font Scale support", wcag: "1.4.4" },
        { item: "UI adapts to larger text sizes", ios: "No clipping or overlap", android: "No clipping or overlap", wcag: "1.4.4" },
    ],
    color: [
        { item: "Text contrast is 4.5:1 minimum", ios: "Use contrast analyzer", android: "Use contrast analyzer", wcag: "1.4.3" },
        { item: "UI component contrast is 3:1", ios: "Buttons, icons, borders", android: "Buttons, icons, borders", wcag: "1.4.11" },
        { item: "Color is not sole indicator", ios: "Use icons, text, patterns", android: "Use icons, text, patterns", wcag: "1.4.1" },
        { item: "Supports Dark Mode accessibly", ios: "Maintain contrast", android: "Maintain contrast", wcag: "1.4.3" },
    ],
    forms: [
        { item: "Input fields have visible labels", ios: "Not placeholder-only", android: "Not placeholder-only", wcag: "3.3.2" },
        { item: "Keyboard type matches input", ios: "Email, number, phone", android: "Email, number, phone", wcag: "1.3.5" },
        { item: "Error messages are clear", ios: "Specific and helpful", android: "Specific and helpful", wcag: "3.3.1" },
        { item: "Errors announced to screen reader", ios: "Post notification", android: "announceForAccessibility", wcag: "4.1.3" },
    ],
}

const categories = [
    { key: "touch", name: "Touch", icon: Hand, color: "text-blue-600" },
    { key: "screenReader", name: "Screen Reader", icon: Volume2, color: "text-green-600" },
    { key: "gestures", name: "Gestures", icon: Move, color: "text-purple-600" },
    { key: "layout", name: "Layout", icon: Smartphone, color: "text-orange-600" },
    { key: "color", name: "Color", icon: Palette, color: "text-pink-600" },
    { key: "forms", name: "Forms", icon: FormInput, color: "text-cyan-600" },
]

export default function MobileAccessibilityChecklistPage() {
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
                    "iOS (VoiceOver)": item.ios,
                    "Android (TalkBack)": item.android,
                    "WCAG": item.wcag,
                    Status: item.checked ? "✓ Pass" : "☐ Not Tested",
                    Notes: ""
                })
            })
        })

        const ws = XLSX.utils.json_to_sheet(data)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "Mobile Checklist")

        ws['!cols'] = [
            { wch: 15 }, { wch: 50 }, { wch: 25 }, { wch: 25 }, { wch: 10 }, { wch: 15 }, { wch: 30 },
        ]

        XLSX.writeFile(wb, "mobile-accessibility-checklist.xlsx")
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
                                { label: "Mobile Checklist", href: "/resources/templates/mobile-accessibility-checklist" },
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
                                <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                                    <Smartphone className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                                </div>
                                <Badge variant="secondary">Interactive Checklist</Badge>
                                <Badge variant="outline">{totalItems} Items</Badge>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                                Mobile App Accessibility Checklist
                            </h1>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                Check off items as you test iOS and Android. Download your progress with platform-specific columns.
                            </p>
                        </div>

                        {/* Platform Overview */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
                                <CardContent className="pt-4">
                                    <p className="font-semibold flex items-center gap-2"><span className="text-xl">🍎</span> iOS / VoiceOver</p>
                                    <p className="text-sm text-muted-foreground mt-1">44x44pt targets, accessibilityLabel, Dynamic Type</p>
                                </CardContent>
                            </Card>
                            <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
                                <CardContent className="pt-4">
                                    <p className="font-semibold flex items-center gap-2"><span className="text-xl">🤖</span> Android / TalkBack</p>
                                    <p className="text-sm text-muted-foreground mt-1">48x48dp targets, contentDescription, Font Scale</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Progress Bar */}
                        <Card className="mb-6">
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">Testing Progress</span>
                                    <span className="text-sm text-muted-foreground">{checkedItems} of {totalItems} tested</span>
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
                                <Tabs defaultValue="touch" className="w-full">
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
                                                                            <div className="flex flex-wrap gap-4 mt-2 text-xs">
                                                                                <span className="text-blue-600">🍎 {item.ios}</span>
                                                                                <span className="text-green-600">🤖 {item.android}</span>
                                                                            </div>
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
                                        <CardDescription>Excel with iOS & Android columns</CardDescription>
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
                                                        → QA Testing Checklist
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
