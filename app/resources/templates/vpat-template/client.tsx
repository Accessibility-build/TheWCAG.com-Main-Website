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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
    FileSpreadsheet,
    Download,
    ArrowLeft,
    Building2,
    FileIcon,
    Info
} from "lucide-react"
import * as XLSX from "xlsx"

// WCAG Success Criteria by version
const wcagCriteria: Record<string, { id: string; name: string; level: string; principle: string; new?: boolean }[]> = {
    "2.0": [
        // Level A
        { id: "1.1.1", name: "Non-text Content", level: "A", principle: "Perceivable" },
        { id: "1.2.1", name: "Audio-only and Video-only (Prerecorded)", level: "A", principle: "Perceivable" },
        { id: "1.2.2", name: "Captions (Prerecorded)", level: "A", principle: "Perceivable" },
        { id: "1.2.3", name: "Audio Description or Media Alternative", level: "A", principle: "Perceivable" },
        { id: "1.3.1", name: "Info and Relationships", level: "A", principle: "Perceivable" },
        { id: "1.3.2", name: "Meaningful Sequence", level: "A", principle: "Perceivable" },
        { id: "1.3.3", name: "Sensory Characteristics", level: "A", principle: "Perceivable" },
        { id: "1.4.1", name: "Use of Color", level: "A", principle: "Perceivable" },
        { id: "1.4.2", name: "Audio Control", level: "A", principle: "Perceivable" },
        { id: "2.1.1", name: "Keyboard", level: "A", principle: "Operable" },
        { id: "2.1.2", name: "No Keyboard Trap", level: "A", principle: "Operable" },
        { id: "2.2.1", name: "Timing Adjustable", level: "A", principle: "Operable" },
        { id: "2.2.2", name: "Pause, Stop, Hide", level: "A", principle: "Operable" },
        { id: "2.3.1", name: "Three Flashes or Below Threshold", level: "A", principle: "Operable" },
        { id: "2.4.1", name: "Bypass Blocks", level: "A", principle: "Operable" },
        { id: "2.4.2", name: "Page Titled", level: "A", principle: "Operable" },
        { id: "2.4.3", name: "Focus Order", level: "A", principle: "Operable" },
        { id: "2.4.4", name: "Link Purpose (In Context)", level: "A", principle: "Operable" },
        { id: "3.1.1", name: "Language of Page", level: "A", principle: "Understandable" },
        { id: "3.2.1", name: "On Focus", level: "A", principle: "Understandable" },
        { id: "3.2.2", name: "On Input", level: "A", principle: "Understandable" },
        { id: "3.3.1", name: "Error Identification", level: "A", principle: "Understandable" },
        { id: "3.3.2", name: "Labels or Instructions", level: "A", principle: "Understandable" },
        { id: "4.1.1", name: "Parsing", level: "A", principle: "Robust" },
        { id: "4.1.2", name: "Name, Role, Value", level: "A", principle: "Robust" },
        // Level AA
        { id: "1.2.4", name: "Captions (Live)", level: "AA", principle: "Perceivable" },
        { id: "1.2.5", name: "Audio Description (Prerecorded)", level: "AA", principle: "Perceivable" },
        { id: "1.4.3", name: "Contrast (Minimum)", level: "AA", principle: "Perceivable" },
        { id: "1.4.4", name: "Resize Text", level: "AA", principle: "Perceivable" },
        { id: "1.4.5", name: "Images of Text", level: "AA", principle: "Perceivable" },
        { id: "2.4.5", name: "Multiple Ways", level: "AA", principle: "Operable" },
        { id: "2.4.6", name: "Headings and Labels", level: "AA", principle: "Operable" },
        { id: "2.4.7", name: "Focus Visible", level: "AA", principle: "Operable" },
        { id: "3.1.2", name: "Language of Parts", level: "AA", principle: "Understandable" },
        { id: "3.2.3", name: "Consistent Navigation", level: "AA", principle: "Understandable" },
        { id: "3.2.4", name: "Consistent Identification", level: "AA", principle: "Understandable" },
        { id: "3.3.3", name: "Error Suggestion", level: "AA", principle: "Understandable" },
        { id: "3.3.4", name: "Error Prevention (Legal, Financial, Data)", level: "AA", principle: "Understandable" },
        // Level AAA
        { id: "1.2.6", name: "Sign Language (Prerecorded)", level: "AAA", principle: "Perceivable" },
        { id: "1.2.7", name: "Extended Audio Description", level: "AAA", principle: "Perceivable" },
        { id: "1.2.8", name: "Media Alternative (Prerecorded)", level: "AAA", principle: "Perceivable" },
        { id: "1.2.9", name: "Audio-only (Live)", level: "AAA", principle: "Perceivable" },
        { id: "1.4.6", name: "Contrast (Enhanced)", level: "AAA", principle: "Perceivable" },
        { id: "1.4.7", name: "Low or No Background Audio", level: "AAA", principle: "Perceivable" },
        { id: "1.4.8", name: "Visual Presentation", level: "AAA", principle: "Perceivable" },
        { id: "1.4.9", name: "Images of Text (No Exception)", level: "AAA", principle: "Perceivable" },
        { id: "2.1.3", name: "Keyboard (No Exception)", level: "AAA", principle: "Operable" },
        { id: "2.2.3", name: "No Timing", level: "AAA", principle: "Operable" },
        { id: "2.2.4", name: "Interruptions", level: "AAA", principle: "Operable" },
        { id: "2.2.5", name: "Re-authenticating", level: "AAA", principle: "Operable" },
        { id: "2.3.2", name: "Three Flashes", level: "AAA", principle: "Operable" },
        { id: "2.4.8", name: "Location", level: "AAA", principle: "Operable" },
        { id: "2.4.9", name: "Link Purpose (Link Only)", level: "AAA", principle: "Operable" },
        { id: "2.4.10", name: "Section Headings", level: "AAA", principle: "Operable" },
        { id: "3.1.3", name: "Unusual Words", level: "AAA", principle: "Understandable" },
        { id: "3.1.4", name: "Abbreviations", level: "AAA", principle: "Understandable" },
        { id: "3.1.5", name: "Reading Level", level: "AAA", principle: "Understandable" },
        { id: "3.1.6", name: "Pronunciation", level: "AAA", principle: "Understandable" },
        { id: "3.2.5", name: "Change on Request", level: "AAA", principle: "Understandable" },
        { id: "3.3.5", name: "Help", level: "AAA", principle: "Understandable" },
        { id: "3.3.6", name: "Error Prevention (All)", level: "AAA", principle: "Understandable" },
    ],
    "2.1": [
        // Inherits all 2.0 criteria plus new ones
        { id: "1.3.4", name: "Orientation", level: "AA", principle: "Perceivable", new: true },
        { id: "1.3.5", name: "Identify Input Purpose", level: "AA", principle: "Perceivable", new: true },
        { id: "1.3.6", name: "Identify Purpose", level: "AAA", principle: "Perceivable", new: true },
        { id: "1.4.10", name: "Reflow", level: "AA", principle: "Perceivable", new: true },
        { id: "1.4.11", name: "Non-text Contrast", level: "AA", principle: "Perceivable", new: true },
        { id: "1.4.12", name: "Text Spacing", level: "AA", principle: "Perceivable", new: true },
        { id: "1.4.13", name: "Content on Hover or Focus", level: "AA", principle: "Perceivable", new: true },
        { id: "2.1.4", name: "Character Key Shortcuts", level: "A", principle: "Operable", new: true },
        { id: "2.2.6", name: "Timeouts", level: "AAA", principle: "Operable", new: true },
        { id: "2.3.3", name: "Animation from Interactions", level: "AAA", principle: "Operable", new: true },
        { id: "2.5.1", name: "Pointer Gestures", level: "A", principle: "Operable", new: true },
        { id: "2.5.2", name: "Pointer Cancellation", level: "A", principle: "Operable", new: true },
        { id: "2.5.3", name: "Label in Name", level: "A", principle: "Operable", new: true },
        { id: "2.5.4", name: "Motion Actuation", level: "A", principle: "Operable", new: true },
        { id: "2.5.5", name: "Target Size", level: "AAA", principle: "Operable", new: true },
        { id: "2.5.6", name: "Concurrent Input Mechanisms", level: "AAA", principle: "Operable", new: true },
        { id: "4.1.3", name: "Status Messages", level: "AA", principle: "Robust", new: true },
    ],
    "2.2": [
        // New in WCAG 2.2
        { id: "2.4.11", name: "Focus Not Obscured (Minimum)", level: "AA", principle: "Operable", new: true },
        { id: "2.4.12", name: "Focus Not Obscured (Enhanced)", level: "AAA", principle: "Operable", new: true },
        { id: "2.4.13", name: "Focus Appearance", level: "AAA", principle: "Operable", new: true },
        { id: "2.5.7", name: "Dragging Movements", level: "AA", principle: "Operable", new: true },
        { id: "2.5.8", name: "Target Size (Minimum)", level: "AA", principle: "Operable", new: true },
        { id: "3.2.6", name: "Consistent Help", level: "A", principle: "Understandable", new: true },
        { id: "3.3.7", name: "Redundant Entry", level: "A", principle: "Understandable", new: true },
        { id: "3.3.8", name: "Accessible Authentication (Minimum)", level: "AA", principle: "Understandable", new: true },
        { id: "3.3.9", name: "Accessible Authentication (Enhanced)", level: "AAA", principle: "Understandable", new: true },
    ]
}

const conformanceOptions = [
    { value: "supports", label: "Supports", color: "bg-green-100 text-green-800" },
    { value: "partially", label: "Partially Supports", color: "bg-yellow-100 text-yellow-800" },
    { value: "not-support", label: "Does Not Support", color: "bg-red-100 text-red-800" },
    { value: "na", label: "Not Applicable", color: "bg-gray-100 text-gray-800" },
    { value: "", label: "Not Evaluated", color: "bg-white" },
]

interface ProductInfo {
    productName: string
    productVersion: string
    vendorName: string
    vendorContact: string
    evaluationDate: string
    evaluationMethods: string
    notes: string
}

interface CriterionStatus {
    status: string
    remarks: string
}

export default function VPATTemplatePage() {
    const [wcagVersion, setWcagVersion] = useState<"2.0" | "2.1" | "2.2">("2.2")
    const [productInfo, setProductInfo] = useState<ProductInfo>({
        productName: "",
        productVersion: "",
        vendorName: "",
        vendorContact: "",
        evaluationDate: new Date().toISOString().split('T')[0],
        evaluationMethods: "Testing with assistive technologies, manual inspection",
        notes: ""
    })
    const [criteriaStatus, setCriteriaStatus] = useState<Record<string, CriterionStatus>>({})

    // Get all criteria for selected version
    const allCriteria = useMemo(() => {
        let criteria = [...wcagCriteria["2.0"]]
        if (wcagVersion === "2.1" || wcagVersion === "2.2") {
            criteria = [...criteria, ...wcagCriteria["2.1"]]
        }
        if (wcagVersion === "2.2") {
            criteria = [...criteria, ...wcagCriteria["2.2"]]
        }
        // Sort by ID
        return criteria.sort((a, b) => a.id.localeCompare(b.id))
    }, [wcagVersion])

    const levelACriteria = allCriteria.filter(c => c.level === "A")
    const levelAACriteria = allCriteria.filter(c => c.level === "AA")
    const levelAAACriteria = allCriteria.filter(c => c.level === "AAA")

    const evaluatedCount = Object.values(criteriaStatus).filter(s => s.status).length
    const progress = Math.round((evaluatedCount / allCriteria.length) * 100)

    const updateCriterionStatus = (id: string, field: "status" | "remarks", value: string) => {
        setCriteriaStatus(prev => ({
            ...prev,
            [id]: { ...prev[id], [field]: value }
        }))
    }

    const downloadExcel = () => {
        const data = allCriteria.map(c => ({
            "Criteria": c.id,
            "Name": c.name,
            "Level": c.level,
            "Principle": c.principle,
            "Conformance": conformanceOptions.find(o => o.value === criteriaStatus[c.id]?.status)?.label || "Not Evaluated",
            "Remarks": criteriaStatus[c.id]?.remarks || ""
        }))

        const ws = XLSX.utils.json_to_sheet(data)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, `WCAG ${wcagVersion} Conformance`)

        // Add product info sheet
        const productData = [
            { Field: "Product Name", Value: productInfo.productName },
            { Field: "Product Version", Value: productInfo.productVersion },
            { Field: "Vendor", Value: productInfo.vendorName },
            { Field: "Contact", Value: productInfo.vendorContact },
            { Field: "Evaluation Date", Value: productInfo.evaluationDate },
            { Field: "WCAG Version", Value: `WCAG ${wcagVersion}` },
            { Field: "Evaluation Methods", Value: productInfo.evaluationMethods },
            { Field: "Notes", Value: productInfo.notes },
        ]
        const ws2 = XLSX.utils.json_to_sheet(productData)
        XLSX.utils.book_append_sheet(wb, ws2, "Product Information")

        ws['!cols'] = [{ wch: 10 }, { wch: 45 }, { wch: 8 }, { wch: 15 }, { wch: 20 }, { wch: 40 }]

        XLSX.writeFile(wb, `VPAT-WCAG${wcagVersion}-${productInfo.productName || "Product"}.xlsx`)
    }

    const downloadWord = () => {
        let html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word">
      <head><meta charset="utf-8"><title>VPAT - ${productInfo.productName}</title>
      <style>
        body { font-family: Arial, sans-serif; }
        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        th { background: #f5f5f5; }
        h1, h2, h3 { color: #333; }
        .supports { background: #d4edda; }
        .partially { background: #fff3cd; }
        .not-support { background: #f8d7da; }
      </style>
      </head>
      <body>
      <h1>Voluntary Product Accessibility Template (VPAT®)</h1>
      <h2>WCAG ${wcagVersion} Conformance Report</h2>
      
      <h3>Product Information</h3>
      <table>
        <tr><td><strong>Product Name</strong></td><td>${productInfo.productName || "[Product Name]"}</td></tr>
        <tr><td><strong>Product Version</strong></td><td>${productInfo.productVersion || "[Version]"}</td></tr>
        <tr><td><strong>Vendor</strong></td><td>${productInfo.vendorName || "[Vendor Name]"}</td></tr>
        <tr><td><strong>Contact</strong></td><td>${productInfo.vendorContact || "[Contact Info]"}</td></tr>
        <tr><td><strong>Evaluation Date</strong></td><td>${productInfo.evaluationDate}</td></tr>
        <tr><td><strong>Evaluation Methods</strong></td><td>${productInfo.evaluationMethods}</td></tr>
      </table>
      
      <h3>WCAG ${wcagVersion} Conformance</h3>
      <table>
        <tr><th>Criteria</th><th>Conformance Level</th><th>Remarks</th></tr>
    `

        allCriteria.forEach(c => {
            const status = criteriaStatus[c.id]
            const statusLabel = conformanceOptions.find(o => o.value === status?.status)?.label || "Not Evaluated"
            const statusClass = status?.status === "supports" ? "supports" : status?.status === "partially" ? "partially" : status?.status === "not-support" ? "not-support" : ""
            html += `<tr class="${statusClass}"><td>${c.id} ${c.name} (Level ${c.level})</td><td>${statusLabel}</td><td>${status?.remarks || ""}</td></tr>`
        })

        html += `</table></body></html>`

        const blob = new Blob([html], { type: 'application/msword' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `VPAT-WCAG${wcagVersion}-${productInfo.productName || "Product"}.doc`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    const renderCriteriaTable = (criteria: typeof allCriteria, title: string) => (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>{title} ({criteria.length} criteria)</span>
                    <Badge variant="outline">
                        {criteria.filter(c => criteriaStatus[c.id]?.status).length}/{criteria.length} evaluated
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="p-2 text-left w-24">Criteria</th>
                                <th className="p-2 text-left">Name</th>
                                <th className="p-2 text-left w-40">Conformance</th>
                                <th className="p-2 text-left">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {criteria.map((c) => {
                                const status = criteriaStatus[c.id]
                                return (
                                    <tr key={c.id} className="border-b hover:bg-muted/30">
                                        <td className="p-2 font-mono text-xs">
                                            {c.id}
                                            {c.new && <Badge variant="secondary" className="ml-1 text-[10px]">New</Badge>}
                                        </td>
                                        <td className="p-2">{c.name}</td>
                                        <td className="p-2">
                                            <select
                                                className="w-full h-8 px-2 text-xs rounded border bg-background"
                                                value={status?.status || ""}
                                                onChange={(e) => updateCriterionStatus(c.id, "status", e.target.value)}
                                            >
                                                {conformanceOptions.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className="p-2">
                                            <Input
                                                className="h-8 text-xs"
                                                placeholder="Add remarks..."
                                                value={status?.remarks || ""}
                                                onChange={(e) => updateCriterionStatus(c.id, "remarks", e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    )

    return (
        <>
            <SkipLink />
            <div className="flex min-h-screen flex-col">
                <Header />
                <main id="main-content" className="flex-1">
                    <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
                        <Breadcrumb
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Resources", href: "/resources" },
                                { label: "Templates", href: "/resources/templates" },
                                { label: "VPAT Template", href: "/resources/templates/vpat-template" },
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
                                <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
                                    <FileSpreadsheet className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <Badge variant="secondary">VPAT 2.5</Badge>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                                VPAT Template
                            </h1>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                Voluntary Product Accessibility Template for documenting your product's accessibility conformance.
                                Select your WCAG version, fill in product details, and evaluate each criterion.
                            </p>
                        </div>

                        {/* WCAG Version Selector */}
                        <Card className="mb-6">
                            <CardContent className="pt-6">
                                <div className="flex flex-wrap items-center gap-4">
                                    <Label className="font-semibold">WCAG Version:</Label>
                                    <div className="flex gap-2">
                                        {(["2.0", "2.1", "2.2"] as const).map((version) => (
                                            <Button
                                                key={version}
                                                variant={wcagVersion === version ? "default" : "outline"}
                                                onClick={() => setWcagVersion(version)}
                                                className="min-w-[80px]"
                                            >
                                                WCAG {version}
                                                {version === "2.2" && <Badge variant="secondary" className="ml-2 text-[10px]">Latest</Badge>}
                                            </Button>
                                        ))}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {allCriteria.length} total criteria
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Progress */}
                        <Card className="mb-6">
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">Evaluation Progress</span>
                                    <span className="text-sm text-muted-foreground">{evaluatedCount} of {allCriteria.length} evaluated</span>
                                </div>
                                <Progress value={progress} className="h-3" />
                            </CardContent>
                        </Card>

                        <div className="grid lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-3">
                                <Tabs defaultValue="product" className="w-full">
                                    <TabsList className="grid w-full grid-cols-4 mb-4">
                                        <TabsTrigger value="product">Product Info</TabsTrigger>
                                        <TabsTrigger value="levelA">Level A ({levelACriteria.length})</TabsTrigger>
                                        <TabsTrigger value="levelAA">Level AA ({levelAACriteria.length})</TabsTrigger>
                                        <TabsTrigger value="levelAAA">Level AAA ({levelAAACriteria.length})</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="product">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="flex items-center gap-2">
                                                    <Building2 className="h-5 w-5" />
                                                    Product Information
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="productName">Product Name *</Label>
                                                        <Input
                                                            id="productName"
                                                            placeholder="My Product"
                                                            value={productInfo.productName}
                                                            onChange={(e) => setProductInfo(p => ({ ...p, productName: e.target.value }))}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="productVersion">Version</Label>
                                                        <Input
                                                            id="productVersion"
                                                            placeholder="1.0.0"
                                                            value={productInfo.productVersion}
                                                            onChange={(e) => setProductInfo(p => ({ ...p, productVersion: e.target.value }))}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="vendorName">Vendor/Company</Label>
                                                        <Input
                                                            id="vendorName"
                                                            placeholder="Acme Inc."
                                                            value={productInfo.vendorName}
                                                            onChange={(e) => setProductInfo(p => ({ ...p, vendorName: e.target.value }))}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="vendorContact">Contact</Label>
                                                        <Input
                                                            id="vendorContact"
                                                            placeholder="accessibility@acme.com"
                                                            value={productInfo.vendorContact}
                                                            onChange={(e) => setProductInfo(p => ({ ...p, vendorContact: e.target.value }))}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="evalDate">Evaluation Date</Label>
                                                        <Input
                                                            id="evalDate"
                                                            type="date"
                                                            value={productInfo.evaluationDate}
                                                            onChange={(e) => setProductInfo(p => ({ ...p, evaluationDate: e.target.value }))}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="evalMethods">Evaluation Methods</Label>
                                                    <Textarea
                                                        id="evalMethods"
                                                        placeholder="Testing with assistive technologies, automated testing, manual review..."
                                                        value={productInfo.evaluationMethods}
                                                        onChange={(e) => setProductInfo(p => ({ ...p, evaluationMethods: e.target.value }))}
                                                        rows={3}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="notes">Additional Notes</Label>
                                                    <Textarea
                                                        id="notes"
                                                        placeholder="Any additional information..."
                                                        value={productInfo.notes}
                                                        onChange={(e) => setProductInfo(p => ({ ...p, notes: e.target.value }))}
                                                        rows={3}
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="levelA">
                                        {renderCriteriaTable(levelACriteria, "Level A Success Criteria")}
                                    </TabsContent>

                                    <TabsContent value="levelAA">
                                        {renderCriteriaTable(levelAACriteria, "Level AA Success Criteria")}
                                    </TabsContent>

                                    <TabsContent value="levelAAA">
                                        {renderCriteriaTable(levelAAACriteria, "Level AAA Success Criteria")}
                                    </TabsContent>
                                </Tabs>
                            </div>

                            {/* Sidebar */}
                            <div>
                                <Card className="sticky top-6">
                                    <CardHeader>
                                        <CardTitle>Download VPAT</CardTitle>
                                        <CardDescription>Export your completed template</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                                            <div className="text-3xl font-bold text-primary">{progress}%</div>
                                            <div className="text-sm text-muted-foreground">Evaluated</div>
                                        </div>
                                        <Button size="lg" onClick={downloadWord} className="w-full gap-2">
                                            <FileIcon className="h-5 w-5" />
                                            Download Word
                                        </Button>
                                        <Button size="lg" variant="outline" onClick={downloadExcel} className="w-full gap-2">
                                            <Download className="h-5 w-5" />
                                            Download Excel
                                        </Button>
                                        <hr />
                                        <div className="text-xs text-muted-foreground space-y-1">
                                            <p className="flex items-center gap-1"><Info className="h-3 w-3" /> VPAT® is a registered trademark of ITI</p>
                                            <p>• Based on VPAT 2.5 format</p>
                                            <p>• WCAG {wcagVersion} ({allCriteria.length} criteria)</p>
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
