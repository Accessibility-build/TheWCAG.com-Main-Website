"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
    Download,
    Zap,
    Settings2,
    Table2,
    Filter,
    Palette,
    ArrowLeft,
    FileSpreadsheet,
    CheckCircle2,
    Circle,
    Info
} from "lucide-react"
import { successCriteria, principles } from "@/lib/wcag-data"
import {
    generateWCAGExcel,
    downloadExcel,
    quickDownloadWCAGExcel,
    defaultColumns,
    defaultDesign,
    defaultFilters,
    type ExcelColumnConfig,
    type ExcelDesignConfig,
    type ExcelFilterConfig
} from "@/lib/wcag-excel-generator"

export default function DownloadPage() {
    // Column configuration state
    const [columns, setColumns] = useState<ExcelColumnConfig[]>([...defaultColumns])

    // Design configuration state
    const [design, setDesign] = useState<ExcelDesignConfig>({ ...defaultDesign })

    // Filter configuration state
    const [filters, setFilters] = useState<ExcelFilterConfig>({ ...defaultFilters })

    // Active tab
    const [activeTab, setActiveTab] = useState<'columns' | 'design' | 'filters'>('columns')

    // Toggle column
    const toggleColumn = (key: string) => {
        setColumns(prev => prev.map(col =>
            col.key === key ? { ...col, enabled: !col.enabled } : col
        ))
    }

    // Toggle level filter
    const toggleLevel = (level: 'A' | 'AA' | 'AAA') => {
        setFilters(prev => ({
            ...prev,
            levels: prev.levels.includes(level)
                ? prev.levels.filter(l => l !== level)
                : [...prev.levels, level]
        }))
    }

    // Toggle principle filter
    const togglePrinciple = (principle: string) => {
        setFilters(prev => ({
            ...prev,
            principles: prev.principles.includes(principle)
                ? prev.principles.filter(p => p !== principle)
                : [...prev.principles, principle]
        }))
    }

    // Calculate preview stats
    const previewStats = useMemo(() => {
        let filtered = successCriteria.filter(c => filters.levels.includes(c.level))
        if (filters.principles.length > 0) {
            filtered = filtered.filter(c => filters.principles.includes(c.principle))
        }
        if (filters.newOnly) {
            filtered = filtered.filter(c => c.isNew)
        }
        return {
            total: filtered.length,
            levelA: filtered.filter(c => c.level === 'A').length,
            levelAA: filtered.filter(c => c.level === 'AA').length,
            levelAAA: filtered.filter(c => c.level === 'AAA').length,
            newIn22: filtered.filter(c => c.isNew).length,
            columns: columns.filter(c => c.enabled).length,
        }
    }, [filters, columns])

    // Handle quick download
    const handleQuickDownload = () => {
        quickDownloadWCAGExcel(successCriteria)
    }

    // Handle custom download
    const handleCustomDownload = () => {
        const blob = generateWCAGExcel(successCriteria, columns, design, filters)
        const timestamp = new Date().toISOString().split('T')[0]
        downloadExcel(blob, `wcag-2.2-checklist-${timestamp}.xlsx`)
    }

    // Color options for design
    const colorPresets = [
        { name: 'Ocean Blue', value: '1a5f7a' },
        { name: 'Forest Green', value: '2d5016' },
        { name: 'Royal Purple', value: '5c2d91' },
        { name: 'Sunset Orange', value: 'c75b12' },
        { name: 'Slate Gray', value: '475569' },
        { name: 'Midnight', value: '1e1e2e' },
    ]

    return (
        <>
            <SkipLink />
            <div className="flex min-h-screen flex-col">
                <Header />
                <main id="main-content" className="flex-1">
                    <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
                        {/* Back link */}
                        <Link
                            href="/checklist"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Checklist
                        </Link>

                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                                Download WCAG 2.2 Checklist
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Customize and download a professional Excel checklist for your accessibility audits
                            </p>
                        </div>

                        {/* Quick Download Card */}
                        <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Zap className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl">Quick Download</CardTitle>
                                            <CardDescription>
                                                Download with recommended settings (Level A + AA, core columns)
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <Button
                                        size="lg"
                                        onClick={handleQuickDownload}
                                        className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <Download className="h-5 w-5" />
                                        Quick Download
                                    </Button>
                                </div>
                            </CardHeader>
                        </Card>

                        {/* Custom Download Section */}
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Configuration Panel */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Tab Navigation */}
                                <Card>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="flex items-center gap-2">
                                            <Settings2 className="h-5 w-5" />
                                            Customize Your Export
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex gap-2 border-b mb-6">
                                            <button
                                                onClick={() => setActiveTab('columns')}
                                                className={`px-4 py-2 font-medium text-sm transition-colors relative ${activeTab === 'columns'
                                                        ? 'text-primary'
                                                        : 'text-muted-foreground hover:text-foreground'
                                                    }`}
                                            >
                                                <span className="flex items-center gap-2">
                                                    <Table2 className="h-4 w-4" />
                                                    Columns
                                                </span>
                                                {activeTab === 'columns' && (
                                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                                )}
                                            </button>
                                            <button
                                                onClick={() => setActiveTab('filters')}
                                                className={`px-4 py-2 font-medium text-sm transition-colors relative ${activeTab === 'filters'
                                                        ? 'text-primary'
                                                        : 'text-muted-foreground hover:text-foreground'
                                                    }`}
                                            >
                                                <span className="flex items-center gap-2">
                                                    <Filter className="h-4 w-4" />
                                                    Filters
                                                </span>
                                                {activeTab === 'filters' && (
                                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                                )}
                                            </button>
                                            <button
                                                onClick={() => setActiveTab('design')}
                                                className={`px-4 py-2 font-medium text-sm transition-colors relative ${activeTab === 'design'
                                                        ? 'text-primary'
                                                        : 'text-muted-foreground hover:text-foreground'
                                                    }`}
                                            >
                                                <span className="flex items-center gap-2">
                                                    <Palette className="h-4 w-4" />
                                                    Design
                                                </span>
                                                {activeTab === 'design' && (
                                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                                )}
                                            </button>
                                        </div>

                                        {/* Columns Tab */}
                                        {activeTab === 'columns' && (
                                            <div className="space-y-4">
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    Select which columns to include in your Excel export. The first three are required.
                                                </p>
                                                <div className="grid sm:grid-cols-2 gap-3">
                                                    {columns.map((col, index) => (
                                                        <div
                                                            key={col.key}
                                                            className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${col.enabled
                                                                    ? 'bg-primary/5 border-primary/20'
                                                                    : 'hover:bg-muted/50'
                                                                } ${index < 3 ? 'opacity-70' : ''}`}
                                                        >
                                                            <Checkbox
                                                                id={`col-${col.key}`}
                                                                checked={col.enabled}
                                                                onCheckedChange={() => index >= 3 && toggleColumn(col.key as string)}
                                                                disabled={index < 3}
                                                                className="shrink-0"
                                                            />
                                                            <Label
                                                                htmlFor={`col-${col.key}`}
                                                                className={`text-sm font-medium cursor-pointer flex-1 ${index < 3 ? 'cursor-not-allowed' : ''
                                                                    }`}
                                                            >
                                                                {col.label}
                                                                {index < 3 && (
                                                                    <Badge variant="secondary" className="ml-2 text-xs">Required</Badge>
                                                                )}
                                                            </Label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Filters Tab */}
                                        {activeTab === 'filters' && (
                                            <div className="space-y-6">
                                                {/* Level Filters */}
                                                <div>
                                                    <h3 className="font-semibold mb-3">Conformance Levels</h3>
                                                    <div className="flex flex-wrap gap-3">
                                                        {(['A', 'AA', 'AAA'] as const).map(level => (
                                                            <button
                                                                key={level}
                                                                onClick={() => toggleLevel(level)}
                                                                className={`px-4 py-2 rounded-lg border font-medium transition-all ${filters.levels.includes(level)
                                                                        ? level === 'A'
                                                                            ? 'bg-green-100 border-green-300 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300'
                                                                            : level === 'AA'
                                                                                ? 'bg-orange-100 border-orange-300 text-orange-800 dark:bg-orange-900/30 dark:border-orange-700 dark:text-orange-300'
                                                                                : 'bg-pink-100 border-pink-300 text-pink-800 dark:bg-pink-900/30 dark:border-pink-700 dark:text-pink-300'
                                                                        : 'bg-muted/50 hover:bg-muted'
                                                                    }`}
                                                            >
                                                                {filters.levels.includes(level) ? (
                                                                    <CheckCircle2 className="h-4 w-4 inline mr-2" />
                                                                ) : (
                                                                    <Circle className="h-4 w-4 inline mr-2" />
                                                                )}
                                                                Level {level}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Principle Filters */}
                                                <div>
                                                    <h3 className="font-semibold mb-3">Principles</h3>
                                                    <div className="grid sm:grid-cols-2 gap-3">
                                                        {Object.entries(principles).map(([key, principle]) => (
                                                            <button
                                                                key={key}
                                                                onClick={() => togglePrinciple(key)}
                                                                className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${filters.principles.includes(key)
                                                                        ? 'bg-primary/5 border-primary/20'
                                                                        : 'hover:bg-muted/50'
                                                                    }`}
                                                            >
                                                                {filters.principles.includes(key) ? (
                                                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                                                ) : (
                                                                    <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
                                                                )}
                                                                <div>
                                                                    <div className="font-medium">{principle.title}</div>
                                                                    <div className="text-xs text-muted-foreground line-clamp-1">
                                                                        {principle.description}
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* New Only Filter */}
                                                <div className="flex items-center gap-3 p-4 rounded-lg border">
                                                    <Checkbox
                                                        id="new-only"
                                                        checked={filters.newOnly}
                                                        onCheckedChange={(checked) =>
                                                            setFilters(prev => ({ ...prev, newOnly: checked as boolean }))
                                                        }
                                                    />
                                                    <Label htmlFor="new-only" className="cursor-pointer">
                                                        <span className="font-medium">New in WCAG 2.2 only</span>
                                                        <span className="block text-sm text-muted-foreground">
                                                            Only include the 9 new success criteria added in WCAG 2.2
                                                        </span>
                                                    </Label>
                                                </div>
                                            </div>
                                        )}

                                        {/* Design Tab */}
                                        {activeTab === 'design' && (
                                            <div className="space-y-6">
                                                {/* Header Color */}
                                                <div>
                                                    <h3 className="font-semibold mb-3">Header Color</h3>
                                                    <div className="flex flex-wrap gap-3">
                                                        {colorPresets.map(color => (
                                                            <button
                                                                key={color.value}
                                                                onClick={() => setDesign(prev => ({ ...prev, headerColor: color.value }))}
                                                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${design.headerColor === color.value
                                                                        ? 'ring-2 ring-primary ring-offset-2'
                                                                        : 'hover:bg-muted/50'
                                                                    }`}
                                                            >
                                                                <div
                                                                    className="w-5 h-5 rounded-full border"
                                                                    style={{ backgroundColor: `#${color.value}` }}
                                                                />
                                                                <span className="text-sm">{color.name}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Row Striping */}
                                                <div className="flex items-center gap-3 p-4 rounded-lg border">
                                                    <Checkbox
                                                        id="row-striping"
                                                        checked={design.enableRowStriping}
                                                        onCheckedChange={(checked) =>
                                                            setDesign(prev => ({ ...prev, enableRowStriping: checked as boolean }))
                                                        }
                                                    />
                                                    <Label htmlFor="row-striping" className="cursor-pointer">
                                                        <span className="font-medium">Alternate Row Colors</span>
                                                        <span className="block text-sm text-muted-foreground">
                                                            Add subtle striping for better readability
                                                        </span>
                                                    </Label>
                                                </div>

                                                {/* Include Branding */}
                                                <div className="flex items-center gap-3 p-4 rounded-lg border">
                                                    <Checkbox
                                                        id="branding"
                                                        checked={design.includeBranding}
                                                        onCheckedChange={(checked) =>
                                                            setDesign(prev => ({ ...prev, includeBranding: checked as boolean }))
                                                        }
                                                    />
                                                    <Label htmlFor="branding" className="cursor-pointer">
                                                        <span className="font-medium">Include Summary Sheet</span>
                                                        <span className="block text-sm text-muted-foreground">
                                                            Add a summary sheet with statistics and generation info
                                                        </span>
                                                    </Label>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Preview Panel */}
                            <div className="space-y-6">
                                {/* Export Preview Card */}
                                <Card className="sticky top-6">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <FileSpreadsheet className="h-5 w-5" />
                                            Export Preview
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {/* Stats */}
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Total Criteria</span>
                                                <span className="font-semibold">{previewStats.total}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Level A</span>
                                                <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20">
                                                    {previewStats.levelA}
                                                </Badge>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Level AA</span>
                                                <Badge variant="outline" className="bg-orange-50 dark:bg-orange-900/20">
                                                    {previewStats.levelAA}
                                                </Badge>
                                            </div>
                                            {previewStats.levelAAA > 0 && (
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Level AAA</span>
                                                    <Badge variant="outline" className="bg-pink-50 dark:bg-pink-900/20">
                                                        {previewStats.levelAAA}
                                                    </Badge>
                                                </div>
                                            )}
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">New in 2.2</span>
                                                <Badge variant="secondary">{previewStats.newIn22}</Badge>
                                            </div>
                                            <hr />
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Columns</span>
                                                <span className="font-semibold">{previewStats.columns}</span>
                                            </div>
                                        </div>

                                        {/* Warning for no criteria */}
                                        {previewStats.total === 0 && (
                                            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                                                <div className="flex gap-2 text-sm text-amber-800 dark:text-amber-200">
                                                    <Info className="h-4 w-4 shrink-0 mt-0.5" />
                                                    <span>No criteria match your current filters. Adjust your selection to include criteria.</span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Download Button */}
                                        <Button
                                            size="lg"
                                            onClick={handleCustomDownload}
                                            disabled={previewStats.total === 0}
                                            className="w-full gap-2"
                                        >
                                            <Download className="h-5 w-5" />
                                            Download Custom Excel
                                        </Button>

                                        {/* File info */}
                                        <p className="text-xs text-muted-foreground text-center">
                                            .xlsx format • Opens in Excel, Google Sheets, Numbers
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Tips Card */}
                                <Card>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-base flex items-center gap-2">
                                            <Info className="h-4 w-4" />
                                            Tips
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="text-sm text-muted-foreground space-y-2">
                                            <li>• Most organizations need Level AA compliance</li>
                                            <li>• Use "Summary" column for quick reference</li>
                                            <li>• "Implementation Checklist" is great for developers</li>
                                            <li>• Add "Testing" columns for QA teams</li>
                                        </ul>
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
