'use client'

import { useState, useMemo, useEffect } from "react"
import { getAllArchiveLawsuits, type ArchiveLawsuit, isValidUrl, isDeprecatedUrl, isCaseNumber } from "@/lib/lawsuit-archive"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowUpDown, ArrowUp, ArrowDown, ExternalLink, Search, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type SortField = "year" | "plaintiff" | "defendant"
type SortDirection = "asc" | "desc" | null

const ITEMS_PER_PAGE = 25

export function LawsuitArchiveTable() {
  const allLawsuits = getAllArchiveLawsuits()
  const [searchTerm, setSearchTerm] = useState("")
  const [yearFilter, setYearFilter] = useState<string>("all")
  const [sortField, setSortField] = useState<SortField>("year")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")
  const [currentPage, setCurrentPage] = useState(1)

  // Handle sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle direction: desc -> asc -> null -> desc
      if (sortDirection === "desc") {
        setSortDirection("asc")
      } else if (sortDirection === "asc") {
        setSortDirection(null)
      } else {
        setSortDirection("desc")
      }
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  // Get unique years for filter
  const uniqueYears = useMemo(() => {
    const years = new Set(allLawsuits.map((l) => l.year))
    return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a))
  }, [allLawsuits])

  // Filter and sort lawsuits
  const filteredAndSortedLawsuits = useMemo(() => {
    let filtered = allLawsuits

    // Apply year filter
    if (yearFilter !== "all") {
      filtered = filtered.filter((lawsuit) => lawsuit.year === yearFilter)
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (lawsuit) =>
          lawsuit.year.toLowerCase().includes(searchLower) ||
          lawsuit.plaintiff.toLowerCase().includes(searchLower) ||
          lawsuit.defendant.toLowerCase().includes(searchLower) ||
          lawsuit.citationText.toLowerCase().includes(searchLower)
      )
    }

    // Apply sorting
    if (sortDirection) {
      filtered = [...filtered].sort((a, b) => {
        let aValue: string
        let bValue: string

        switch (sortField) {
          case "year":
            aValue = a.year
            bValue = b.year
            break
          case "plaintiff":
            aValue = a.plaintiff
            bValue = b.plaintiff
            break
          case "defendant":
            aValue = a.defendant
            bValue = b.defendant
            break
          default:
            return 0
        }

        const comparison = aValue.localeCompare(bValue, undefined, {
          numeric: true,
          sensitivity: "base",
        })

        return sortDirection === "asc" ? comparison : -comparison
      })
    }

    return filtered
  }, [allLawsuits, searchTerm, yearFilter, sortField, sortDirection])

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, yearFilter, sortField, sortDirection])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedLawsuits.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedLawsuits = filteredAndSortedLawsuits.slice(startIndex, endIndex)

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    // Scroll to top of table
    const tableElement = document.getElementById("archive-table")
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const getSortIcon = (field: SortField) => {
    if (sortField !== field || sortDirection === null) {
      return <ArrowUpDown className="h-4 w-4" aria-hidden="true" />
    }
    return sortDirection === "asc" ? (
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    ) : (
      <ArrowDown className="h-4 w-4" aria-hidden="true" />
    )
  }

  const getSortLabel = (field: SortField) => {
    if (sortField !== field || sortDirection === null) {
      return `Sort by ${field}`
    }
    return `Sorted by ${field} ${sortDirection === "asc" ? "ascending" : "descending"}. Click to change.`
  }

  return (
    <div className="space-y-6" id="archive-table">
      {/* Credits */}
      <Card className="bg-muted/50 border-primary/20">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Historical Lawsuit Archive</CardTitle>
          <CardDescription className="text-sm sm:text-base leading-relaxed">
            Archive data extracted from{" "}
            <a
              href="https://karlgroves.github.io/a11y-lawsuits/lawsuits.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Karl Groves' Accessibility Lawsuits Database
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
            . Thanks to{" "}
            <a
              href="https://karlgroves.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Karl Groves
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>{" "}
            for maintaining this comprehensive database of web accessibility related lawsuits and settlements.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 p-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <Input
            type="search"
            placeholder="Search by year, plaintiff, defendant, or citation..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
            className="pl-10 h-10 sm:h-11"
            aria-label="Search lawsuits"
          />
        </div>
        <Select
          value={yearFilter}
          onValueChange={(value) => {
            setYearFilter(value)
            setCurrentPage(1)
          }}
        >
          <SelectTrigger className="w-full sm:w-48 h-10 sm:h-11" aria-label="Filter by year">
            <SelectValue placeholder="All Years" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {uniqueYears.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Results count */}
      <div className="text-sm sm:text-base text-muted-foreground px-2 py-1">
        Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedLawsuits.length)} of {filteredAndSortedLawsuits.length} lawsuits
        {searchTerm && ` matching "${searchTerm}"`}
        {yearFilter !== "all" && ` from ${yearFilter}`}
        {filteredAndSortedLawsuits.length !== allLawsuits.length && ` (${allLawsuits.length} total in archive)`}
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden bg-background">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-24 px-4 py-3 sm:px-6 sm:py-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 font-semibold hover:bg-transparent text-xs sm:text-sm"
                    onClick={() => handleSort("year")}
                    aria-label={getSortLabel("year")}
                  >
                    Year
                    <span className="ml-2">{getSortIcon("year")}</span>
                  </Button>
                </TableHead>
                <TableHead className="px-4 py-3 sm:px-6 sm:py-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 font-semibold hover:bg-transparent text-xs sm:text-sm"
                    onClick={() => handleSort("plaintiff")}
                    aria-label={getSortLabel("plaintiff")}
                  >
                    Plaintiff(s)
                    <span className="ml-2">{getSortIcon("plaintiff")}</span>
                  </Button>
                </TableHead>
                <TableHead className="px-4 py-3 sm:px-6 sm:py-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 font-semibold hover:bg-transparent text-xs sm:text-sm"
                    onClick={() => handleSort("defendant")}
                    aria-label={getSortLabel("defendant")}
                  >
                    Defendant(s)
                    <span className="ml-2">{getSortIcon("defendant")}</span>
                  </Button>
                </TableHead>
                <TableHead className="w-64 px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm">Citation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedLawsuits.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 sm:py-12 text-muted-foreground px-4 sm:px-6">
                    No lawsuits found matching your filters.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedLawsuits.map((lawsuit, index) => (
                  <TableRow key={`${lawsuit.year}-${lawsuit.plaintiff}-${lawsuit.defendant}-${startIndex + index}`}>
                    <TableCell className="font-medium px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm">{lawsuit.year}</TableCell>
                    <TableCell className="px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm">{lawsuit.plaintiff}</TableCell>
                    <TableCell className="px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm">{lawsuit.defendant}</TableCell>
                    <TableCell className="px-4 py-3 sm:px-6 sm:py-4">
                      {isValidUrl(lawsuit.citation) ? (
                        // It's a valid URL - check if it's deprecated
                        isDeprecatedUrl(lawsuit.citation) ? (
                          <span className="text-muted-foreground text-xs sm:text-sm">
                            {lawsuit.citationText} <span className="text-xs">(deprecated)</span>
                          </span>
                        ) : (
                          <a
                            href={lawsuit.citation}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                            aria-label={`View citation for ${lawsuit.plaintiff} v. ${lawsuit.defendant} (opens in new window)`}
                          >
                            {lawsuit.citationText}
                            <ExternalLink className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                          </a>
                        )
                      ) : (
                        // Not a URL - check if it's a case number
                        isCaseNumber(lawsuit.citation) ? (
                          // Case number - show as plain text without deprecated label
                          <span className="text-muted-foreground text-xs sm:text-sm">
                            {lawsuit.citationText}
                          </span>
                        ) : (
                          // Other non-URL text - show as plain text
                          <span className="text-muted-foreground text-xs sm:text-sm">
                            {lawsuit.citationText}
                          </span>
                        )
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-4 sm:py-6">
          <div className="text-sm sm:text-base text-muted-foreground">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="h-9 sm:h-10 px-3 sm:px-4"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum: number
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(pageNum)}
                    aria-label={`Go to page ${pageNum}`}
                    aria-current={currentPage === pageNum ? "page" : undefined}
                    className="h-9 sm:h-10 w-9 sm:w-10 p-0"
                  >
                    {pageNum}
                  </Button>
                )
              })}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="h-9 sm:h-10 px-3 sm:px-4"
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

