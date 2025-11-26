"use client"

import type { Metadata } from "next"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { LevelBadge } from "@/components/level-badge"
import { NewBadge } from "@/components/new-badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Filter, CheckCircle2, Circle } from "lucide-react"
import { successCriteria, principles } from "@/lib/wcag-data"

// Note: Metadata cannot be exported from client components
// Consider creating a layout.tsx or converting to server component if metadata is needed

export default function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())
  const [filterLevel, setFilterLevel] = useState<"all" | "A" | "AA">("all")
  const [filterPrinciple, setFilterPrinciple] = useState<string>("all")
  const [filterNew, setFilterNew] = useState(false)
  const [showAAA, setShowAAA] = useState(false)

  // Load checked items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("wcag-checklist")
    if (saved) {
      setCheckedItems(new Set(JSON.parse(saved)))
    }
  }, [])

  // Save to localStorage whenever checkedItems changes
  useEffect(() => {
    localStorage.setItem("wcag-checklist", JSON.stringify(Array.from(checkedItems)))
  }, [checkedItems])

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(id)) {
      newChecked.delete(id)
    } else {
      newChecked.add(id)
    }
    setCheckedItems(newChecked)
  }

  const clearAll = () => {
    if (confirm("Are you sure you want to clear all checked items?")) {
      setCheckedItems(new Set())
    }
  }

  // Filter criteria
  let filteredCriteria = successCriteria

  // First, filter out AAA if not enabled
  if (!showAAA) {
    filteredCriteria = filteredCriteria.filter((c) => c.level !== "AAA")
  }

  if (filterLevel !== "all") {
    if (filterLevel === "A") {
      filteredCriteria = filteredCriteria.filter((c) => c.level === "A")
    } else if (filterLevel === "AA") {
      filteredCriteria = filteredCriteria.filter((c) => c.level === "A" || c.level === "AA")
    }
  }

  if (filterPrinciple !== "all") {
    filteredCriteria = filteredCriteria.filter((c) => c.principle === filterPrinciple)
  }

  if (filterNew) {
    filteredCriteria = filteredCriteria.filter((c) => c.isNew)
  }

  // Calculate progress
  const totalCriteria = filteredCriteria.length
  const completedCriteria = filteredCriteria.filter((c) => checkedItems.has(c.id)).length
  const progressPercent = totalCriteria > 0 ? Math.round((completedCriteria / totalCriteria) * 100) : 0

  // Group by principle
  const criteriaByPrinciple = filteredCriteria.reduce(
    (acc, criterion) => {
      if (!acc[criterion.principle]) {
        acc[criterion.principle] = []
      }
      acc[criterion.principle].push(criterion)
      return acc
    },
    {} as Record<string, typeof filteredCriteria>,
  )

  // Create ItemList structured data for all success criteria
  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "WCAG 2.2 Success Criteria Checklist",
    description:
      "Complete list of all WCAG 2.2 success criteria for Level A, AA, and AAA compliance. Interactive checklist to track your accessibility progress.",
    url: "https://thewcag.com/checklist",
    numberOfItems: successCriteria.length,
    itemListElement: successCriteria.map((criterion, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${criterion.number} ${criterion.title}`,
      description: criterion.summary,
      url: `https://thewcag.com/criteria/${criterion.number}`,
    })),
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "WCAG 2.2 Checklist",
    description:
      "Interactive WCAG 2.2 compliance checklist. Track your accessibility progress with our comprehensive checklist covering all Level A, AA, and AAA success criteria.",
    url: "https://thewcag.com/checklist",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://thewcag.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "WCAG 2.2 Checklist",
          item: "https://thewcag.com/checklist",
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }}
      />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">WCAG Compliance Checklist</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Track your progress toward WCAG compliance with this interactive checklist
              </p>
            </div>

            {/* Progress Card */}
            <Card className="mb-6 sm:mb-8">
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div>
                    <CardTitle className="text-xl sm:text-2xl">Your Progress</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {completedCriteria} of {totalCriteria} criteria completed
                    </CardDescription>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary">{progressPercent}%</div>
                </div>
              </CardHeader>
              <CardContent>
                <div 
                  className="w-full h-5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden border-2 border-gray-400 dark:border-gray-600 shadow-inner"
                  role="progressbar"
                  aria-valuenow={progressPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${progressPercent}% complete`}
                >
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 dark:from-orange-500 dark:via-orange-400 dark:to-orange-500 transition-all duration-300 rounded-full shadow-sm"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="mb-6 sm:mb-8">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Filter className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  {/* First Row: Dropdown Filters */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="filter-level" className="text-sm font-semibold text-foreground block">
                        Conformance Level
                      </label>
                      <Select value={filterLevel} onValueChange={(value: string) => setFilterLevel(value)}>
                        <SelectTrigger id="filter-level" className="w-full">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Visible Levels</SelectItem>
                          <SelectItem value="A">Level A Only</SelectItem>
                          <SelectItem value="AA">Level AA (A + AA)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="filter-principle" className="text-sm font-semibold text-foreground block">
                        Principle
                      </label>
                      <Select value={filterPrinciple} onValueChange={setFilterPrinciple}>
                        <SelectTrigger id="filter-principle" className="w-full">
                          <SelectValue placeholder="Select principle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Principles</SelectItem>
                          <SelectItem value="perceivable">Perceivable</SelectItem>
                          <SelectItem value="operable">Operable</SelectItem>
                          <SelectItem value="understandable">Understandable</SelectItem>
                          <SelectItem value="robust">Robust</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Second Row: Toggles and Actions */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t">
                    <div className="flex flex-wrap items-center gap-6">
                      <Button
                        variant={filterNew ? "default" : "outline"}
                        onClick={() => setFilterNew(!filterNew)}
                        className="h-9"
                      >
                        {filterNew ? (
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                        ) : (
                          <Circle className="h-4 w-4 mr-2" />
                        )}
                        New in 2.2
                      </Button>

                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="show-aaa"
                          checked={showAAA}
                          onCheckedChange={(checked) => setShowAAA(checked as boolean)}
                        />
                        <label
                          htmlFor="show-aaa"
                          className="text-sm font-medium leading-none cursor-pointer select-none"
                        >
                          Show AAA Criteria
                        </label>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      onClick={clearAll}
                      className="h-9"
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Checklist */}
            <div className="space-y-4 sm:space-y-6">
              {Object.entries(criteriaByPrinciple).map(([principle, criteria]) => {
                const principleData = principles[principle as keyof typeof principles]
                const principleCompleted = criteria.filter((c) => checkedItems.has(c.id)).length
                const principleTotal = criteria.length
                const principlePercent = Math.round((principleCompleted / principleTotal) * 100)

                return (
                  <Card key={principle}>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-2">
                        <CardTitle className="text-lg sm:text-xl capitalize">{principleData.title}</CardTitle>
                        <Badge variant="outline" className="text-xs sm:text-sm">
                          {principleCompleted}/{principleTotal}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm sm:text-base">{principleData.description}</CardDescription>
                      <div 
                        className="w-full h-2.5 sm:h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mt-3 border border-gray-400 dark:border-gray-600 shadow-inner"
                        role="progressbar"
                        aria-valuenow={principlePercent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${principlePercent}% complete for ${principleData.title}`}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 dark:from-orange-500 dark:via-orange-400 dark:to-orange-500 transition-all duration-300 rounded-full shadow-sm"
                          style={{ width: `${principlePercent}%` }}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 sm:space-y-3">
                      {criteria.map((criterion) => (
                        <div
                          key={criterion.id}
                          className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <Checkbox
                            id={criterion.id}
                            checked={checkedItems.has(criterion.id)}
                            onCheckedChange={() => toggleItem(criterion.id)}
                            className="mt-1 shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <label htmlFor={criterion.id} className="cursor-pointer">
                              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-1">
                                <p className="font-medium text-sm sm:text-base">
                                  {criterion.number} {criterion.title}
                                </p>
                                <div className="flex items-center gap-2 shrink-0">
                                  {criterion.isNew && <NewBadge />}
                                  <LevelBadge level={criterion.level} />
                                </div>
                              </div>
                              <p className="text-xs sm:text-sm text-muted-foreground">{criterion.summary}</p>
                            </label>
                            <Link
                              href={`/criteria/${criterion.number}`}
                              className="text-xs sm:text-sm text-primary hover:underline inline-flex items-center mt-1"
                            >
                              View details →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Export Options */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" aria-hidden="true" />
                  Export & Share
                </CardTitle>
                <CardDescription>Download your checklist progress or print for offline use</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button variant="outline" onClick={() => window.print()}>
                  Print Checklist
                </Button>
                <Button variant="outline" disabled>
                  Export to PDF
                  <span className="ml-2 text-xs">(Coming Soon)</span>
                </Button>
                <Button variant="outline" disabled>
                  Export to CSV
                  <span className="ml-2 text-xs">(Coming Soon)</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
