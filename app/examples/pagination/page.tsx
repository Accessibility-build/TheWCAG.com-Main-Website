"use client"

import { useState } from "react"
import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(3)
  const totalPages = 10

  return (
    <CriteriaPageLayout>
      <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Link
              href="/examples"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Examples
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">Pagination</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Pagination</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible pagination with proper navigation and keyboard support.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.1.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.4.3
            </Badge>
          </div>
        </div>

        {/* Semantic Pagination */}
        <ExampleSection
          title="Semantic Pagination"
          description="Use <code>&amp;lt;nav aria-label=&amp;quot;Pagination&amp;quot;&amp;gt;</code> to identify the pagination region. Use an ordered list for page numbers. The current page should have <code>aria-current=&amp;quot;page&amp;quot;</code> and not be a link. Previous/Next buttons should have clear labels. Provide screen reader text indicating current page and total pages."
          sectionId="semantic-pagination"
          code={`<nav aria-label="Pagination">
  <ol>
    <li>
      <a href="?page=1" aria-label="Previous page">Previous</a>
    </li>
    <li>
      <a href="?page=1">1</a>
    </li>
    <li>
      <span aria-current="page">2</span>
    </li>
    <li>
      <a href="?page=3">3</a>
    </li>
    <li>
      <a href="?page=3" aria-label="Next page">Next</a>
    </li>
  </ol>
  <span className="sr-only">Page 2 of 10</span>
</nav>`}
          testingGuide={{
            keyboard: ["Tab through pagination links", "Current page is not focusable", "Previous/Next are accessible"],
            screenReader: [
              "Pagination region is announced",
              "Current page is indicated",
              "Page numbers are clear",
            ],
          }}
        >
          <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              aria-label="Go to previous page"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              Previous
            </Button>
            <ol className="flex items-center gap-1" role="list">
              {[1, 2, 3, 4, 5].map((page) => (
                <li key={page}>
                  {page === currentPage ? (
                    <span
                      className="px-3 py-2 border rounded bg-primary text-primary-foreground"
                      aria-current="page"
                    >
                      {page}
                    </span>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      aria-label={`Go to page ${page}`}
                    >
                      {page}
                    </Button>
                  )}
                </li>
              ))}
            </ol>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              aria-label="Go to next page"
            >
              Next
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <span className="sr-only">
              Page {currentPage} of {totalPages}
            </span>
            <span className="text-sm text-muted-foreground ml-2" aria-hidden="true">
              Page {currentPage} of {totalPages}
            </span>
          </nav>
        </ExampleSection>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Use nav element with aria-label",
              "Indicate current page with aria-current",
              "Provide clear Previous/Next labels",
              "Announce current page and total pages",
              "Ensure keyboard navigation works",
              "Use ordered list for page numbers",
            ]}
            warnings={["Don't make current page a link", "Ensure pagination is keyboard accessible"]}
          />
        </section>

        {/* Additional Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Related WCAG Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/criteria/2.1.1" className="text-primary hover:underline">
                      2.1.1 Keyboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/2.4.3" className="text-primary hover:underline">
                      2.4.3 Focus Order
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </CriteriaPageLayout>
  )
}

