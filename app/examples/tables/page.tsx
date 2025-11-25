"use client"

import { useState } from "react"
import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"

type SortDirection = "asc" | "desc" | null
type SortColumn = "name" | "email" | "role" | null

interface TableData {
  name: string
  email: string
  role: string
}

const sampleData: TableData[] = [
  { name: "John Doe", email: "john@example.com", role: "Developer" },
  { name: "Jane Smith", email: "jane@example.com", role: "Designer" },
  { name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
  { name: "Alice Williams", email: "alice@example.com", role: "Developer" },
]

export default function TablesPage() {
  const [sortColumn, setSortColumn] = useState<SortColumn>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      if (sortDirection === "asc") {
        setSortDirection("desc")
      } else if (sortDirection === "desc") {
        setSortColumn(null)
        setSortDirection(null)
      } else {
        setSortDirection("asc")
      }
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const getSortedData = () => {
    if (!sortColumn || !sortDirection) return sampleData
    return [...sampleData].sort((a, b) => {
      const aVal = a[sortColumn].toLowerCase()
      const bVal = b[sortColumn].toLowerCase()
      if (sortDirection === "asc") {
        return aVal > bVal ? 1 : -1
      } else {
        return aVal < bVal ? 1 : -1
      }
    })
  }

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
            <span className="font-medium">Tables</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Tables</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible tables with semantic HTML and ARIA patterns. Learn multiple
            implementation approaches for different use cases.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              1.3.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              1.3.2
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.1.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              4.1.3
            </Badge>
          </div>
        </div>

        {/* WCAG Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">WCAG Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">1.3.1</Badge>
                  Info and Relationships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use proper table structure with &lt;th&gt; for headers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Associate data cells with header cells using scope or headers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use &lt;caption&gt; or aria-label to describe table purpose</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">1.3.2</Badge>
                  Meaningful Sequence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Table content must be readable in logical order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use proper row and column headers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Ensure screen readers can navigate table structure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">2.1.1</Badge>
                  Keyboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>All table interactions must be keyboard accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Sortable columns must be operable via keyboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use Tab to navigate, Enter/Space to activate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">4.1.3</Badge>
                  Status Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Announce sort changes to screen readers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use aria-live regions for dynamic updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Provide clear feedback on table state changes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Basic Table - Semantic HTML */}
        <ExampleSection
          title="Basic Table (Semantic HTML)"
          description="The most accessible approach uses native HTML table elements. The <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code> elements provide built-in semantics that screen readers understand. Use the <code>scope</code> attribute on <code>&lt;th&gt;</code> elements to indicate whether they are column headers (<code>scope=&quot;col&quot;</code>) or row headers (<code>scope=&quot;row&quot;</code>). Always include a <code>&lt;caption&gt;</code> or <code>aria-label</code> to describe the table's purpose."
          sectionId="basic-table"
          code={`<table aria-label="Employee directory">
  <caption>Employee contact information</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Developer</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>Designer</td>
    </tr>
  </tbody>
</table>`}
          testingGuide={{
            keyboard: [
              "Use Tab to navigate through table cells",
              "Screen readers will announce headers when entering cells",
              "Arrow keys can navigate within table (browser dependent)",
            ],
            screenReader: [
              "Table caption is announced first",
              "Headers are announced when entering cells",
              "Row and column positions are clear",
            ],
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="Employee directory">
              <caption className="sr-only">Employee contact information</caption>
              <thead>
                <tr className="border-b-2">
                  <th scope="col" className="text-left p-3 font-semibold">
                    Name
                  </th>
                  <th scope="col" className="text-left p-3 font-semibold">
                    Email
                  </th>
                  <th scope="col" className="text-left p-3 font-semibold">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3">{row.name}</td>
                    <td className="p-3">{row.email}</td>
                    <td className="p-3">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ExampleSection>

        {/* Table with Divs + ARIA */}
        <ExampleSection
          title="Table with Divs + ARIA"
          description="When you need custom styling that's difficult with native tables, you can use <code>div</code> elements with ARIA roles. This approach requires careful implementation of <code>role=&quot;table&quot;</code>, <code>role=&quot;row&quot;</code>, <code>role=&quot;columnheader&quot;</code>, <code>role=&quot;rowheader&quot;</code>, and <code>role=&quot;cell&quot;</code>. You must also implement keyboard navigation manually and ensure all relationships are properly communicated via ARIA attributes. This approach is more complex and should only be used when semantic HTML tables are not feasible."
          sectionId="div-table"
          code={`<div role="table" aria-label="Employee directory" aria-rowcount="4" aria-colcount="3">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader" aria-sort="none">Name</div>
      <div role="columnheader" aria-sort="none">Email</div>
      <div role="columnheader" aria-sort="none">Role</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="2">
      <div role="cell" aria-colindex={1}>John Doe</div>
      <div role="cell" aria-colindex={2}>john@example.com</div>
      <div role="cell" aria-colindex={3}>Developer</div>
    </div>
  </div>
</div>`}
          testingGuide={{
            keyboard: [
              "Tab navigation must be implemented manually",
              "Arrow key navigation requires custom JavaScript",
              "Focus management is your responsibility",
            ],
            screenReader: [
              "ARIA roles provide table semantics",
              "aria-rowindex and aria-colindex help with navigation",
              "May require more navigation commands than native tables",
            ],
            visual: [
              "Verify visual appearance matches intended design",
              "Ensure focus indicators are visible",
              "Check that layout works on all screen sizes",
            ],
          }}
        >
          <div className="overflow-x-auto">
            <div
              role="table"
              aria-label="Employee directory"
              aria-rowcount={5}
              aria-colcount={3}
              className="w-full border-collapse"
            >
              <div role="rowgroup" className="border-b-2">
                <div role="row" className="flex">
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold" aria-sort="none">
                    Name
                  </div>
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold" aria-sort="none">
                    Email
                  </div>
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold" aria-sort="none">
                    Role
                  </div>
                </div>
              </div>
              <div role="rowgroup">
                {sampleData.map((row, index) => (
                  <div
                    key={index}
                    role="row"
                    aria-rowindex={index + 2}
                    className="flex border-b hover:bg-muted/50"
                  >
                    <div role="cell" aria-colindex={1} className="flex-1 p-3">
                      {row.name}
                    </div>
                    <div role="cell" aria-colindex={2} className="flex-1 p-3">
                      {row.email}
                    </div>
                    <div role="cell" aria-colindex={3} className="flex-1 p-3">
                      {row.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ExampleSection>

        {/* Sortable Table - Semantic */}
        <ExampleSection
          title="Sortable Table (Semantic HTML)"
          description="Sortable tables require interactive controls in the header cells. Use <code>&lt;button&gt;</code> elements inside <code>&lt;th&gt;</code> elements to make columns sortable. The <code>aria-sort</code> attribute indicates the current sort state: <code>none</code> (not sorted), <code>ascending</code>, or <code>descending</code>. Always provide visual indicators (arrows) and ensure the sort state is announced to screen readers. Include an <code>aria-label</code> on the button that describes what will happen when clicked."
          sectionId="sortable-table"
          code={`<table aria-label="Sortable employee directory">
  <thead>
    <tr>
      <th scope="col">
        <button 
          onClick={handleSort}
          aria-label="Sort by name"
          aria-sort={sortColumn === 'name' ? sortDirection : 'none'}
        >
          Name {sortColumn === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
      </th>
      <th scope="col">
        <button 
          onClick={handleSort}
          aria-label="Sort by email"
          aria-sort={sortColumn === 'email' ? sortDirection : 'none'}
        >
          Email {sortColumn === 'email' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    {/* Sorted rows */}
  </tbody>
</table>
<div role="status" aria-live="polite" className="sr-only">
  {sortColumn && \`Table sorted by \${sortColumn} \${sortDirection}\`}
</div>`}
          testingGuide={{
            keyboard: [
              "Tab to sort buttons in header",
              "Press Enter or Space to sort",
              "Sort state is announced via aria-live region",
            ],
            screenReader: [
              "Button labels indicate sortable columns",
              "aria-sort announces current sort state",
              "Sort changes are announced via status message",
            ],
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="Sortable employee directory">
              <thead>
                <tr className="border-b-2">
                  <th scope="col" className="text-left p-3 font-semibold">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      aria-label={`Sort by name ${sortColumn === "name" && sortDirection ? `(${sortDirection === "asc" ? "ascending" : "descending"})` : ""}`}
                      aria-sort={sortColumn === "name" ? (sortDirection === "asc" ? "ascending" : "descending") : "none"}
                    >
                      Name
                      {sortColumn === "name" &&
                        (sortDirection === "asc" ? (
                          <ArrowUp className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <ArrowDown className="h-4 w-4" aria-hidden="true" />
                        ))}
                      {sortColumn !== "name" && <ArrowUpDown className="h-4 w-4 opacity-50" aria-hidden="true" />}
                    </button>
                  </th>
                  <th scope="col" className="text-left p-3 font-semibold">
                    <button
                      onClick={() => handleSort("email")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      aria-label={`Sort by email ${sortColumn === "email" && sortDirection ? `(${sortDirection === "asc" ? "ascending" : "descending"})` : ""}`}
                      aria-sort={sortColumn === "email" ? (sortDirection === "asc" ? "ascending" : "descending") : "none"}
                    >
                      Email
                      {sortColumn === "email" &&
                        (sortDirection === "asc" ? (
                          <ArrowUp className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <ArrowDown className="h-4 w-4" aria-hidden="true" />
                        ))}
                      {sortColumn !== "email" && <ArrowUpDown className="h-4 w-4 opacity-50" aria-hidden="true" />}
                    </button>
                  </th>
                  <th scope="col" className="text-left p-3 font-semibold">
                    <button
                      onClick={() => handleSort("role")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      aria-label={`Sort by role ${sortColumn === "role" && sortDirection ? `(${sortDirection === "asc" ? "ascending" : "descending"})` : ""}`}
                      aria-sort={sortColumn === "role" ? (sortDirection === "asc" ? "ascending" : "descending") : "none"}
                    >
                      Role
                      {sortColumn === "role" &&
                        (sortDirection === "asc" ? (
                          <ArrowUp className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <ArrowDown className="h-4 w-4" aria-hidden="true" />
                        ))}
                      {sortColumn !== "role" && <ArrowUpDown className="h-4 w-4 opacity-50" aria-hidden="true" />}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {getSortedData().map((row, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3">{row.name}</td>
                    <td className="p-3">{row.email}</td>
                    <td className="p-3">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div role="status" aria-live="polite" className="sr-only">
              {sortColumn && `Table sorted by ${sortColumn} ${sortDirection === "asc" ? "ascending" : "descending"}`}
            </div>
          </div>
        </ExampleSection>

        {/* Sortable Table - ARIA */}
        <ExampleSection
          title="Sortable Table (ARIA)"
          description="For custom styled sortable tables using divs with ARIA, implement sorting controls within the columnheader elements. Use <code>role=&quot;button&quot;</code> on sortable headers with <code>aria-sort</code> to indicate sort state. Provide <code>aria-label</code> that describes the sort action. Use <code>aria-live</code> regions to announce sort changes. Keyboard navigation must be manually implemented for the div-based structure."
          sectionId="sortable-table-aria"
          code={`<div role="table" aria-label="Sortable employee directory">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader">
        <button
          role="button"
          aria-sort={sortColumn === 'name' ? sortDirection : 'none'}
          aria-label="Sort by name"
          onClick={handleSort}
        >
          Name {sortIcon}
        </button>
      </div>
    </div>
  </div>
  <div role="rowgroup">
    {/* Sorted rows */}
  </div>
</div>
<div role="status" aria-live="polite" className="sr-only">
  {sortColumn && \`Table sorted by \${sortColumn} \${sortDirection}\`}
</div>`}
          testingGuide={{
            keyboard: [
              "Tab to sort buttons in header",
              "Press Enter or Space to sort",
              "Sort state is announced via aria-live region",
              "Arrow key navigation must be implemented manually",
            ],
            screenReader: [
              "Button labels indicate sortable columns",
              "aria-sort announces current sort state",
              "Sort changes are announced via status message",
              "Table structure is communicated via ARIA roles",
            ],
          }}
        >
          <div className="overflow-x-auto">
            <div
              role="table"
              aria-label="Sortable employee directory"
              aria-rowcount={5}
              aria-colcount={3}
              className="w-full border-collapse"
            >
              <div role="rowgroup" className="border-b-2">
                <div role="row" className="flex">
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold">
                    <button
                      role="button"
                      onClick={() => handleSort("name")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      aria-label={`Sort by name ${sortColumn === "name" && sortDirection ? `(${sortDirection === "asc" ? "ascending" : "descending"})` : ""}`}
                      aria-sort={sortColumn === "name" ? (sortDirection === "asc" ? "ascending" : "descending") : "none"}
                    >
                      Name
                      {sortColumn === "name" &&
                        (sortDirection === "asc" ? (
                          <ArrowUp className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <ArrowDown className="h-4 w-4" aria-hidden="true" />
                        ))}
                      {sortColumn !== "name" && <ArrowUpDown className="h-4 w-4 opacity-50" aria-hidden="true" />}
                    </button>
                  </div>
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold">
                    <button
                      role="button"
                      onClick={() => handleSort("email")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      aria-label={`Sort by email ${sortColumn === "email" && sortDirection ? `(${sortDirection === "asc" ? "ascending" : "descending"})` : ""}`}
                      aria-sort={sortColumn === "email" ? (sortDirection === "asc" ? "ascending" : "descending") : "none"}
                    >
                      Email
                      {sortColumn === "email" &&
                        (sortDirection === "asc" ? (
                          <ArrowUp className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <ArrowDown className="h-4 w-4" aria-hidden="true" />
                        ))}
                      {sortColumn !== "email" && <ArrowUpDown className="h-4 w-4 opacity-50" aria-hidden="true" />}
                    </button>
                  </div>
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold">
                    <button
                      role="button"
                      onClick={() => handleSort("role")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      aria-label={`Sort by role ${sortColumn === "role" && sortDirection ? `(${sortDirection === "asc" ? "ascending" : "descending"})` : ""}`}
                      aria-sort={sortColumn === "role" ? (sortDirection === "asc" ? "ascending" : "descending") : "none"}
                    >
                      Role
                      {sortColumn === "role" &&
                        (sortDirection === "asc" ? (
                          <ArrowUp className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <ArrowDown className="h-4 w-4" aria-hidden="true" />
                        ))}
                      {sortColumn !== "role" && <ArrowUpDown className="h-4 w-4 opacity-50" aria-hidden="true" />}
                    </button>
                  </div>
                </div>
              </div>
              <div role="rowgroup">
                {getSortedData().map((row, index) => (
                  <div
                    key={index}
                    role="row"
                    aria-rowindex={index + 2}
                    className="flex border-b hover:bg-muted/50"
                  >
                    <div role="cell" aria-colindex={1} className="flex-1 p-3">
                      {row.name}
                    </div>
                    <div role="cell" aria-colindex={2} className="flex-1 p-3">
                      {row.email}
                    </div>
                    <div role="cell" aria-colindex={3} className="flex-1 p-3">
                      {row.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div role="status" aria-live="polite" className="sr-only">
              {sortColumn && `Table sorted by ${sortColumn} ${sortDirection === "asc" ? "ascending" : "descending"}`}
            </div>
          </div>
        </ExampleSection>

        {/* Responsive Table */}
        <ExampleSection
          title="Responsive Table"
          description="On mobile devices, tables can become difficult to use. Two common approaches: 1) Horizontal scroll with proper announcements, or 2) Card-based layout that transforms rows into cards. For horizontal scroll, ensure users know the table is scrollable and provide a way to navigate. For card-based layouts, maintain the same information hierarchy and ensure all data is accessible. The card approach is often more usable on small screens."
          sectionId="responsive-table"
          code={`{/* Desktop: Standard table */}
<div className="hidden md:block overflow-x-auto">
  <table>
    {/* Standard table structure */}
  </table>
</div>

{/* Mobile: Card layout */}
<div className="md:hidden space-y-4">
  {data.map((row, index) => (
    <div key={index} className="border rounded-lg p-4">
      <div className="font-semibold mb-2">{row.name}</div>
      <dl className="space-y-1">
        <div className="flex justify-between">
          <dt className="font-medium">Email:</dt>
          <dd>{row.email}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-medium">Role:</dt>
          <dd>{row.role}</dd>
        </div>
      </dl>
    </div>
  ))}
</div>`}
          testingGuide={{
            keyboard: [
              "On mobile, cards should be keyboard navigable",
              "Horizontal scroll should work with arrow keys",
              "Focus should be visible during scroll",
            ],
            screenReader: [
              "Card layout should maintain logical reading order",
              "All table data should be accessible in cards",
              "Use proper heading structure in cards",
            ],
            visual: [
              "Test at 320px, 768px, and 1024px widths",
              "Verify no horizontal scroll on mobile (unless intentional)",
              "Check that cards are readable and well-spaced",
            ],
          }}
        >
          <div className="space-y-4">
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse text-sm" aria-label="Employee directory">
                <thead>
                  <tr className="border-b-2">
                    <th scope="col" className="text-left p-3 font-semibold">
                      Name
                    </th>
                    <th scope="col" className="text-left p-3 font-semibold">
                      Email
                    </th>
                    <th scope="col" className="text-left p-3 font-semibold">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sampleData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-3">{row.name}</td>
                      <td className="p-3">{row.email}</td>
                      <td className="p-3">{row.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:hidden space-y-4">
              {sampleData.map((row, index) => (
                <Card key={index}>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold mb-3 text-lg">{row.name}</h3>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="font-medium text-muted-foreground">Email:</dt>
                        <dd>{row.email}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-muted-foreground">Role:</dt>
                        <dd>{row.role}</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ExampleSection>

        {/* Complex Table */}
        <ExampleSection
          title="Complex Table (Multi-level Headers)"
          description="Tables with merged cells (colspan/rowspan) require careful attention to accessibility. Use the <code>scope</code> attribute for simple relationships, but for complex tables, use the <code>headers</code> attribute on each <code>&lt;td&gt;</code> to explicitly reference its header cells. Each header cell should have a unique <code>id</code>, and data cells reference these IDs in their <code>headers</code> attribute. This ensures screen readers can correctly associate data with all relevant headers."
          sectionId="complex-table"
          code={`<table aria-label="Sales report by region and quarter">
  <caption>Q1-Q4 sales data by region</caption>
  <thead>
    <tr>
      <th scope="col" rowSpan="2" id="region">Region</th>
      <th scope="colgroup" colSpan="4" id="quarters">Quarters</th>
    </tr>
    <tr>
      <th scope="col" id="q1" headers="quarters">Q1</th>
      <th scope="col" id="q2" headers="quarters">Q2</th>
      <th scope="col" id="q3" headers="quarters">Q3</th>
      <th scope="col" id="q4" headers="quarters">Q4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" id="north">North</th>
      <td headers="north q1">$10k</td>
      <td headers="north q2">$12k</td>
      <td headers="north q3">$15k</td>
      <td headers="north q4">$18k</td>
    </tr>
  </tbody>
</table>`}
          testingGuide={{
            keyboard: [
              "Navigate through cells to verify headers are announced",
              "Check that merged header cells are properly associated",
            ],
            screenReader: [
              "Screen reader should announce all relevant headers for each cell",
              "Multi-level headers should be clear in context",
              "Test with NVDA, JAWS, and VoiceOver",
            ],
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="Sales report by region and quarter">
              <caption className="sr-only mb-2 text-left font-medium">Q1-Q4 sales data by region</caption>
              <thead>
                <tr className="border-b-2">
                  <th scope="col" rowSpan={2} id="region" className="text-left p-3 font-semibold border-r">
                    Region
                  </th>
                  <th scope="colgroup" colSpan={4} id="quarters" className="text-center p-3 font-semibold">
                    Quarters
                  </th>
                </tr>
                <tr className="border-b-2">
                  <th scope="col" id="q1" headers="quarters" className="text-center p-3 font-semibold">
                    Q1
                  </th>
                  <th scope="col" id="q2" headers="quarters" className="text-center p-3 font-semibold">
                    Q2
                  </th>
                  <th scope="col" id="q3" headers="quarters" className="text-center p-3 font-semibold">
                    Q3
                  </th>
                  <th scope="col" id="q4" headers="quarters" className="text-center p-3 font-semibold">
                    Q4
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <th scope="row" id="north" className="text-left p-3 font-medium border-r">
                    North
                  </th>
                  <td headers="north q1" className="text-center p-3">
                    $10k
                  </td>
                  <td headers="north q2" className="text-center p-3">
                    $12k
                  </td>
                  <td headers="north q3" className="text-center p-3">
                    $15k
                  </td>
                  <td headers="north q4" className="text-center p-3">
                    $18k
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <th scope="row" id="south" className="text-left p-3 font-medium border-r">
                    South
                  </th>
                  <td headers="south q1" className="text-center p-3">
                    $8k
                  </td>
                  <td headers="south q2" className="text-center p-3">
                    $9k
                  </td>
                  <td headers="south q3" className="text-center p-3">
                    $11k
                  </td>
                  <td headers="south q4" className="text-center p-3">
                    $13k
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <th scope="row" id="east" className="text-left p-3 font-medium border-r">
                    East
                  </th>
                  <td headers="east q1" className="text-center p-3">
                    $12k
                  </td>
                  <td headers="east q2" className="text-center p-3">
                    $14k
                  </td>
                  <td headers="east q3" className="text-center p-3">
                    $16k
                  </td>
                  <td headers="east q4" className="text-center p-3">
                    $20k
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ExampleSection>

        {/* Comparison Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Use Each Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Semantic HTML Tables</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Use When:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>Displaying tabular data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>Standard table layouts work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>Maximum accessibility is priority</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Advantages:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Built-in accessibility</li>
                      <li>• Less code to maintain</li>
                      <li>• Better screen reader support</li>
                      <li>• Native keyboard navigation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ARIA Tables (Divs)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Use When:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>Custom layouts are required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>CSS Grid/Flexbox needed for layout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>Semantic tables don't fit design</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Considerations:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• More complex to implement</li>
                      <li>• Requires manual keyboard handling</li>
                      <li>• Must test thoroughly with screen readers</li>
                      <li>• Higher maintenance burden</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Always provide a caption or aria-label describing the table's purpose",
              "Use scope attributes for simple header relationships",
              "Use headers attribute for complex multi-level headers",
              "Ensure sortable columns have clear visual and text indicators",
              "Provide status messages for sort state changes",
              "Test with multiple screen readers (NVDA, JAWS, VoiceOver)",
              "Ensure tables are responsive or provide alternative mobile layout",
              "Maintain proper heading hierarchy within table cells if needed",
            ]}
            warnings={[
              "Avoid using tables for layout purposes - use CSS Grid or Flexbox instead",
              "Don't skip header cells - every data cell should have an associated header",
              "Complex tables with many merged cells can be difficult for screen reader users - consider simplifying if possible",
            ]}
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
                    <Link href="/criteria/1.3.1" className="text-primary hover:underline">
                      1.3.1 Info and Relationships
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/1.3.2" className="text-primary hover:underline">
                      1.3.2 Meaningful Sequence
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/2.1.1" className="text-primary hover:underline">
                      2.1.1 Keyboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/4.1.3" className="text-primary hover:underline">
                      4.1.3 Status Messages
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>External Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.w3.org/WAI/WCAG22/Understanding/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      WCAG 2.2 Guidelines
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/tutorials/tables/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      W3C Table Tutorial
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/ARIA/apg/patterns/table/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      ARIA Table Pattern
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
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

