"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  DollarSign,
  CheckCircle2,
  Clock,
  XCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Scale,
} from "lucide-react"
import type { Lawsuit } from "@/lib/lawsuits-data"

const ITEMS_PER_PAGE = 10

interface PaginatedLawsuitsListProps {
  lawsuits: Lawsuit[]
}

const statusConfig = {
  settled: { label: "Settled", icon: CheckCircle2, className: "bg-green-600 text-white" },
  ongoing: { label: "Ongoing", icon: Clock, className: "bg-blue-600 text-white" },
  dismissed: { label: "Dismissed", icon: XCircle, className: "bg-gray-600 text-white" },
  won: { label: "Won", icon: CheckCircle2, className: "bg-green-600 text-white" },
}

export function PaginatedLawsuitsList({ lawsuits }: PaginatedLawsuitsListProps) {
  const [currentPage, setCurrentPage] = useState(1)

  // Sort lawsuits by dateFiled (most recent first)
  const sortedLawsuits = useMemo(() => {
    return [...lawsuits].sort((a, b) => {
      const dateA = new Date(a.dateFiled).getTime()
      const dateB = new Date(b.dateFiled).getTime()
      return dateB - dateA
    })
  }, [lawsuits])

  const totalPages = Math.ceil(sortedLawsuits.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentLawsuits = sortedLawsuits.slice(startIndex, endIndex)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of the list
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Calculate page numbers to display
  const getPageNumbers = () => {
    const pages: number[] = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else if (currentPage <= 3) {
      // Show first 5 pages
      for (let i = 1; i <= maxVisible; i++) {
        pages.push(i)
      }
    } else if (currentPage >= totalPages - 2) {
      // Show last 5 pages
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Show pages around current page
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages.push(i)
      }
    }
    return pages
  }

  return (
    <div>
      {/* Lawsuits List */}
      <div className="space-y-6">
        {currentLawsuits.map((lawsuit) => {
          const statusInfo = statusConfig[lawsuit.status]
          const StatusIcon = statusInfo.icon
          return (
            <Card key={lawsuit.slug} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg sm:text-xl mb-2">
                      <Link
                        href={`/lawsuits/${lawsuit.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {lawsuit.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base mb-3">{lawsuit.summary}</CardDescription>
                  </div>
                  <Badge className={`${statusInfo.className} shrink-0`}>
                    <StatusIcon className="h-3 w-3 mr-1" />
                    {statusInfo.label}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-start gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <span className="text-muted-foreground">Filed: </span>
                      <span className="font-medium">{formatDate(lawsuit.dateFiled)}</span>
                    </div>
                  </div>
                  {lawsuit.dateResolved && (
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <div>
                        <span className="text-muted-foreground">Resolved: </span>
                        <span className="font-medium">{formatDate(lawsuit.dateResolved)}</span>
                      </div>
                    </div>
                  )}
                  {lawsuit.settlementAmount && (
                    <div className="flex items-start gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <div>
                        <span className="text-muted-foreground">Settlement: </span>
                        <span className="font-medium">{lawsuit.settlementAmount}</span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-2 text-sm">
                    <Scale className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <span className="text-muted-foreground">Jurisdiction: </span>
                      <span className="font-medium">{lawsuit.jurisdiction}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {lawsuit.issues.slice(0, 3).map((issue, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {issue}
                    </Badge>
                  ))}
                  {lawsuit.issues.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{lawsuit.issues.length - 3} more
                    </Badge>
                  )}
                </div>
                <Link
                  href={`/lawsuits/${lawsuit.slug}`}
                  className="inline-flex items-center text-sm sm:text-base text-primary hover:underline font-medium"
                >
                  Read full case details
                  <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav aria-label="Pagination" className="mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm sm:text-base text-muted-foreground">
              Showing {startIndex + 1} to {Math.min(endIndex, sortedLawsuits.length)} of {sortedLawsuits.length} cases
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
                <span className="sr-only sm:not-sr-only sm:ml-1">Previous</span>
              </Button>
              <div className="flex items-center gap-1" role="list">
                {getPageNumbers().map((pageNum) => (
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
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="h-9 sm:h-10 px-3 sm:px-4"
              >
                <span className="sr-only sm:not-sr-only sm:mr-1">Next</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <div className="text-sm text-muted-foreground sm:hidden">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}

