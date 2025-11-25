"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  const [sortStatus, setSortStatus] = useState<string>("")
  const statusRef = useRef<HTMLDivElement>(null)

  const handleSort = (column: SortColumn) => {
    let newDirection: SortDirection = "asc"
    let statusMessage = ""

    if (sortColumn === column) {
      if (sortDirection === "asc") {
        newDirection = "desc"
        statusMessage = `Table sorted by ${column} in descending order`
      } else if (sortDirection === "desc") {
        newDirection = null
        setSortColumn(null)
        statusMessage = "Table sort removed"
      } else {
        newDirection = "asc"
        statusMessage = `Table sorted by ${column} in ascending order`
      }
    } else {
      newDirection = "asc"
      statusMessage = `Table sorted by ${column} in ascending order`
    }

    setSortColumn(newDirection ? column : null)
    setSortDirection(newDirection)
    setSortStatus(statusMessage)

    // Clear status message after announcement
    setTimeout(() => {
      setSortStatus("")
    }, 1000)
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

  // Keyboard navigation for ARIA tables
  const handleKeyDown = (e: React.KeyboardEvent, rowIndex: number, colIndex: number, totalRows: number, totalCols: number, tableId?: string) => {
    let newRowIndex = rowIndex
    let newColIndex = colIndex

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        newRowIndex = Math.min(rowIndex + 1, totalRows - 1)
        break
      case "ArrowUp":
        e.preventDefault()
        newRowIndex = Math.max(rowIndex - 1, 0)
        break
      case "ArrowRight":
        e.preventDefault()
        newColIndex = Math.min(colIndex + 1, totalCols - 1)
        break
      case "ArrowLeft":
        e.preventDefault()
        newColIndex = Math.max(colIndex - 1, 0)
        break
      case "Home":
        e.preventDefault()
        newColIndex = 0
        break
      case "End":
        e.preventDefault()
        newColIndex = totalCols - 1
        break
      default:
        return
    }

    // Find the target cell - search within the same table if tableId provided
    const tableElement = tableId 
      ? document.getElementById(tableId)?.closest('[role="table"]')
      : (e.currentTarget as HTMLElement).closest('[role="table"]')
    
    if (tableElement) {
      const targetCell = tableElement.querySelector(
        `[role="row"][aria-rowindex="${newRowIndex + 2}"] [role="cell"][aria-colindex="${newColIndex + 1}"]`
      ) as HTMLElement
      if (targetCell) {
        targetCell.focus()
        targetCell.setAttribute("tabIndex", "0")
      }
    }
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
        <section className="mb-12" aria-labelledby="wcag-requirements-heading">
          <h2 id="wcag-requirements-heading" className="text-3xl font-bold mb-6">WCAG Requirements</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Tables must comply with multiple WCAG 2.2 success criteria to ensure accessibility. Below are the key requirements and how to implement them.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">1.3.1</Badge>
                  Info and Relationships
                  <Link href="/criteria/1.3.1" className="ml-auto">
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" aria-label="View 1.3.1 criteria details" />
                  </Link>
                </CardTitle>
                <CardDescription>Level A - Perceivable</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use proper table structure with <code className="text-xs">&lt;th&gt;</code> for headers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Associate data cells with header cells using <code className="text-xs">scope</code> or <code className="text-xs">headers</code> attributes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use <code className="text-xs">&lt;caption&gt;</code> or <code className="text-xs">aria-label</code> to describe table purpose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use <code className="text-xs">&lt;thead&gt;</code>, <code className="text-xs">&lt;tbody&gt;</code>, and <code className="text-xs">&lt;tfoot&gt;</code> for structure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">1.3.2</Badge>
                  Meaningful Sequence
                  <Link href="/criteria/1.3.2" className="ml-auto">
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" aria-label="View 1.3.2 criteria details" />
                  </Link>
                </CardTitle>
                <CardDescription>Level A - Perceivable</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Table content must be readable in logical order (left-to-right, top-to-bottom)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use proper row and column headers to establish relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Ensure screen readers can navigate table structure logically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Maintain reading order in responsive card layouts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">2.1.1</Badge>
                  Keyboard
                  <Link href="/criteria/2.1.1" className="ml-auto">
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" aria-label="View 2.1.1 criteria details" />
                  </Link>
                </CardTitle>
                <CardDescription>Level A - Operable</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>All table interactions must be keyboard accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Sortable columns must be operable via keyboard (Tab, Enter, Space)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Arrow keys should navigate between cells (native tables or custom implementation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Focus indicators must be clearly visible</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">4.1.3</Badge>
                  Status Messages
                  <Link href="/criteria/4.1.3" className="ml-auto">
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" aria-label="View 4.1.3 criteria details" />
                  </Link>
                </CardTitle>
                <CardDescription>Level AA - Robust</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Announce sort changes to screen readers using <code className="text-xs">aria-live</code> regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use <code className="text-xs">role="status"</code> with <code className="text-xs">aria-live="polite"</code> for status updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Provide clear, descriptive feedback on table state changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Status messages should be announced immediately after user action</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Basic Table - Semantic HTML */}
        <ExampleSection
          title="Basic Table (Semantic HTML)"
          description="The most accessible approach uses native HTML table elements. The <code>&amp;lt;table&amp;gt;</code>, <code>&amp;lt;thead&amp;gt;</code>, <code>&amp;lt;tbody&amp;gt;</code>, <code>&amp;lt;th&amp;gt;</code>, and <code>&amp;lt;td&amp;gt;</code> elements provide built-in semantics that screen readers understand.<br/><br/>Use the <code>scope</code> attribute on <code>&amp;lt;th&amp;gt;</code> elements to indicate whether they are column headers (<code>scope=&amp;quot;col&amp;quot;</code>) or row headers (<code>scope=&amp;quot;row&amp;quot;</code>).<br/><br/>Always include a visible <code>&amp;lt;caption&amp;gt;</code> or <code>aria-label</code> to describe the table's purpose. The caption should be placed immediately after the opening <code>&amp;lt;table&amp;gt;</code> tag."
          sectionId="basic-table"
          code={`<!-- Accessible Basic Table -->
<table aria-label="Employee directory">
  <!-- Caption should be visible and descriptive -->
  <caption class="text-left font-semibold mb-2 pb-2">
    Employee contact information
  </caption>
  <thead>
    <tr>
      <!-- Use scope="col" for column headers -->
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
              "Home/End keys navigate to first/last cell in row",
            ],
            screenReader: [
              "Table caption is announced first when entering the table",
              "Headers are announced when entering cells",
              "Row and column positions are clear",
              "Table structure is automatically understood",
            ],
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="Employee directory">
              <caption className="text-left font-semibold mb-2 pb-2 text-foreground">
                Employee contact information
              </caption>
              <thead>
                <tr className="border-b-2 border-foreground/20">
                  <th scope="col" className="text-left p-3 font-semibold bg-muted/50">
                    Name
                  </th>
                  <th scope="col" className="text-left p-3 font-semibold bg-muted/50">
                    Email
                  </th>
                  <th scope="col" className="text-left p-3 font-semibold bg-muted/50">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
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
          description="When you need custom styling that's difficult with native tables, you can use <code>div</code> elements with ARIA roles. This approach requires careful implementation of <code>role=&amp;quot;table&amp;quot;</code>, <code>role=&amp;quot;row&amp;quot;</code>, <code>role=&amp;quot;columnheader&amp;quot;</code>, <code>role=&amp;quot;rowheader&amp;quot;</code>, and <code>role=&amp;quot;cell&amp;quot;</code>. You must also implement keyboard navigation manually using arrow keys, Home, End, and Tab. All cells must be focusable with <code>tabIndex=&amp;quot;0&amp;quot;</code> or <code>tabIndex=&amp;quot;-1&amp;quot;</code> for programmatic focus. Ensure all relationships are properly communicated via ARIA attributes. This approach is more complex and should only be used when semantic HTML tables are not feasible."
          sectionId="div-table"
          code={`<!-- ARIA Table with Keyboard Navigation -->
<div 
  role="table" 
  aria-label="Employee directory" 
  aria-rowcount="5" 
  aria-colcount="3"
>
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader" aria-sort="none">
        Name
      </div>
      <div role="columnheader" aria-sort="none">
        Email
      </div>
      <div role="columnheader" aria-sort="none">
        Role
      </div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="2">
      <div 
        role="cell" 
        aria-colindex="1"
        tabIndex="0"
        onKeyDown={(e) => handleKeyDown(e, 0, 0, 4, 3)}
      >
        John Doe
      </div>
      <div 
        role="cell" 
        aria-colindex="2"
        tabIndex="-1"
        onKeyDown={(e) => handleKeyDown(e, 0, 1, 4, 3)}
      >
        john@example.com
      </div>
      <div 
        role="cell" 
        aria-colindex="3"
        tabIndex="-1"
        onKeyDown={(e) => handleKeyDown(e, 0, 2, 4, 3)}
      >
        Developer
      </div>
    </div>
  </div>
</div>`}
          testingGuide={{
            keyboard: [
              "Tab to enter the table and focus first cell",
              "Arrow keys navigate between cells (Up/Down/Left/Right)",
              "Home/End keys navigate to first/last cell in row",
              "Focus management must be implemented manually",
            ],
            screenReader: [
              "ARIA roles provide table semantics",
              "aria-rowindex and aria-colindex help with navigation",
              "Table structure is communicated via ARIA",
              "May require more navigation commands than native tables",
            ],
            visual: [
              "Verify visual appearance matches intended design",
              "Ensure focus indicators are clearly visible",
              "Check that layout works on all screen sizes",
              "Verify focus ring is visible on all interactive elements",
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
              <div role="rowgroup" className="border-b-2 border-foreground/20">
                <div role="row" className="flex">
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold bg-muted/50" aria-sort="none">
                    Name
                  </div>
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold bg-muted/50" aria-sort="none">
                    Email
                  </div>
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold bg-muted/50" aria-sort="none">
                    Role
                  </div>
                </div>
              </div>
              <div role="rowgroup">
                {sampleData.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    role="row"
                    aria-rowindex={rowIndex + 2}
                    className="flex border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    {[row.name, row.email, row.role].map((cell, colIndex) => (
                      <div
                        key={colIndex}
                        role="cell"
                        aria-colindex={colIndex + 1}
                        tabIndex={rowIndex === 0 && colIndex === 0 ? 0 : -1}
                        onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex, sampleData.length, 3)}
                        onFocus={(e) => {
                          // Make focused cell tabbable
                          e.currentTarget.setAttribute("tabIndex", "0")
                        }}
                        onBlur={(e) => {
                          // Make other cells not tabbable
                          if (rowIndex === 0 && colIndex === 0) return
                          e.currentTarget.setAttribute("tabIndex", "-1")
                        }}
                        className="flex-1 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:z-10"
                      >
                        {cell}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ExampleSection>

        {/* Sortable Table - Semantic */}
        <ExampleSection
          title="Sortable Table (Semantic HTML)"
          description="Sortable tables require interactive controls in the header cells. Use <code>&amp;lt;button&amp;gt;</code> elements inside <code>&amp;lt;th&amp;gt;</code> elements to make columns sortable. The <code>aria-sort</code> attribute indicates the current sort state: <code>none</code> (not sorted), <code>ascending</code>, or <code>descending</code>. Always provide visual indicators (arrows) and ensure the sort state is announced to screen readers via an <code>aria-live</code> region. Include a descriptive <code>aria-label</code> on the button that describes what will happen when clicked, including the current sort state. The status message should be announced immediately after sorting."
          sectionId="sortable-table"
          code={`<!-- Sortable Table with Status Announcements -->
<table aria-label="Sortable employee directory">
  <caption class="text-left font-semibold mb-2 pb-2">
    Employee directory with sortable columns
  </caption>
  <thead>
    <tr>
      <th scope="col">
        <button 
          onClick={() => handleSort('name')}
          aria-label="Sort by name. Currently not sorted"
          aria-sort={sortColumn === 'name' ? sortDirection : 'none'}
          class="flex items-center gap-2"
        >
          Name
          {sortColumn === 'name' && (
            sortDirection === 'asc' ? <ArrowUp /> : <ArrowDown />
          )}
        </button>
      </th>
      {/* Additional sortable columns */}
    </tr>
  </thead>
  <tbody>
    {/* Sorted rows */}
  </tbody>
</table>

<!-- Status announcement for screen readers -->
<div 
  role="status" 
  aria-live="polite" 
  aria-atomic="true"
  class="sr-only"
>
  {sortStatus}
</div>`}
          testingGuide={{
            keyboard: [
              "Tab to sort buttons in header",
              "Press Enter or Space to activate sort",
              "Sort state is announced via aria-live region",
              "Focus remains on the sort button after activation",
            ],
            screenReader: [
              "Button labels indicate sortable columns and current state",
              "aria-sort announces current sort state (ascending/descending/none)",
              "Sort changes are announced immediately via status message",
              "Table caption describes the table's purpose",
            ],
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="Sortable employee directory">
              <caption className="text-left font-semibold mb-2 pb-2 text-foreground">
                Employee directory with sortable columns
              </caption>
              <thead>
                <tr className="border-b-2 border-foreground/20">
                  <th scope="col" className="text-left p-3 font-semibold bg-muted/50">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 py-0.5 -ml-1 -my-0.5"
                      aria-label={`Sort by name${sortColumn === "name" && sortDirection ? `. Currently sorted ${sortDirection === "asc" ? "ascending" : "descending"}` : ". Currently not sorted"}`}
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
                  <th scope="col" className="text-left p-3 font-semibold bg-muted/50">
                    <button
                      onClick={() => handleSort("email")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 py-0.5 -ml-1 -my-0.5"
                      aria-label={`Sort by email${sortColumn === "email" && sortDirection ? `. Currently sorted ${sortDirection === "asc" ? "ascending" : "descending"}` : ". Currently not sorted"}`}
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
                  <th scope="col" className="text-left p-3 font-semibold bg-muted/50">
                    <button
                      onClick={() => handleSort("role")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 py-0.5 -ml-1 -my-0.5"
                      aria-label={`Sort by role${sortColumn === "role" && sortDirection ? `. Currently sorted ${sortDirection === "asc" ? "ascending" : "descending"}` : ". Currently not sorted"}`}
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
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="p-3">{row.name}</td>
                    <td className="p-3">{row.email}</td>
                    <td className="p-3">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div 
              ref={statusRef}
              role="status" 
              aria-live="polite" 
              aria-atomic="true"
              className="sr-only"
            >
              {sortStatus}
            </div>
          </div>
        </ExampleSection>

        {/* Sortable Table - ARIA */}
        <ExampleSection
          title="Sortable Table (ARIA)"
          description="For custom styled sortable tables using divs with ARIA, implement sorting controls within the columnheader elements. Use <code>role=&amp;quot;button&amp;quot;</code> on sortable headers with <code>aria-sort</code> to indicate sort state. Provide descriptive <code>aria-label</code> that describes the sort action and current state. Use <code>aria-live</code> regions with <code>aria-atomic=&amp;quot;true&amp;quot;</code> to announce sort changes. Keyboard navigation must be manually implemented for the div-based structure, including arrow key navigation between cells."
          sectionId="sortable-table-aria"
          code={`<!-- Sortable ARIA Table -->
<div 
  role="table" 
  aria-label="Sortable employee directory"
  aria-rowcount="5" 
  aria-colcount="3"
>
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader">
        <button
          onClick={() => handleSort('name')}
          aria-label="Sort by name. Currently not sorted"
          aria-sort={sortColumn === 'name' ? sortDirection : 'none'}
          class="flex items-center gap-2"
        >
          Name {sortIcon}
        </button>
      </div>
      {/* Additional sortable headers */}
    </div>
  </div>
  <div role="rowgroup">
    {/* Sorted rows with keyboard navigation */}
  </div>
</div>

<!-- Status announcement -->
<div 
  role="status" 
  aria-live="polite" 
  aria-atomic="true"
  class="sr-only"
>
  {sortStatus}
</div>`}
          testingGuide={{
            keyboard: [
              "Tab to sort buttons in header",
              "Press Enter or Space to sort",
              "Sort state is announced via aria-live region",
              "Arrow key navigation must be implemented manually for cells",
              "Home/End keys navigate within rows",
            ],
            screenReader: [
              "Button labels indicate sortable columns and current state",
              "aria-sort announces current sort state",
              "Sort changes are announced immediately via status message",
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
              <div role="rowgroup" className="border-b-2 border-foreground/20">
                <div role="row" className="flex">
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold bg-muted/50">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 py-0.5 -ml-1 -my-0.5"
                      aria-label={`Sort by name${sortColumn === "name" && sortDirection ? `. Currently sorted ${sortDirection === "asc" ? "ascending" : "descending"}` : ". Currently not sorted"}`}
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
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold bg-muted/50">
                    <button
                      onClick={() => handleSort("email")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 py-0.5 -ml-1 -my-0.5"
                      aria-label={`Sort by email${sortColumn === "email" && sortDirection ? `. Currently sorted ${sortDirection === "asc" ? "ascending" : "descending"}` : ". Currently not sorted"}`}
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
                  <div role="columnheader" className="flex-1 text-left p-3 font-semibold bg-muted/50">
                    <button
                      onClick={() => handleSort("role")}
                      className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 py-0.5 -ml-1 -my-0.5"
                      aria-label={`Sort by role${sortColumn === "role" && sortDirection ? `. Currently sorted ${sortDirection === "asc" ? "ascending" : "descending"}` : ". Currently not sorted"}`}
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
                {getSortedData().map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    role="row"
                    aria-rowindex={rowIndex + 2}
                    className="flex border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    {[row.name, row.email, row.role].map((cell, colIndex) => (
                      <div
                        key={colIndex}
                        role="cell"
                        aria-colindex={colIndex + 1}
                        tabIndex={rowIndex === 0 && colIndex === 0 ? 0 : -1}
                        onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex, getSortedData().length, 3)}
                        onFocus={(e) => {
                          e.currentTarget.setAttribute("tabIndex", "0")
                        }}
                        onBlur={(e) => {
                          if (rowIndex === 0 && colIndex === 0) return
                          e.currentTarget.setAttribute("tabIndex", "-1")
                        }}
                        className="flex-1 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:z-10"
                      >
                        {cell}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div 
              role="status" 
              aria-live="polite" 
              aria-atomic="true"
              className="sr-only"
            >
              {sortStatus}
            </div>
          </div>
        </ExampleSection>

        {/* Responsive Table */}
        <ExampleSection
          title="Responsive Table"
          description="On mobile devices, tables can become difficult to use. Two common approaches: 1) Horizontal scroll with proper announcements and scroll indicators, or 2) Card-based layout that transforms rows into cards. For horizontal scroll, ensure users know the table is scrollable and provide visual indicators. For card-based layouts, maintain the same information hierarchy using semantic HTML (<code>&amp;lt;dl&amp;gt;</code>, <code>&amp;lt;dt&amp;gt;</code>, <code>&amp;lt;dd&amp;gt;</code>) and ensure all data is accessible. Use proper heading levels in cards. The card approach is often more usable on small screens and provides better accessibility."
          sectionId="responsive-table"
          code={`{/* Desktop: Standard table with caption */}
<div className="hidden md:block overflow-x-auto">
  <table aria-label="Employee directory">
    <caption class="text-left font-semibold mb-2 pb-2">
      Employee contact information
    </caption>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
      </tr>
    </thead>
    <tbody>
      {/* Table rows */}
    </tbody>
  </table>
</div>

{/* Mobile: Card layout with semantic structure */}
<div className="md:hidden space-y-4" role="list">
  {data.map((row, index) => (
    <article 
      key={index} 
      className="border rounded-lg p-4 focus-within:ring-2 focus-within:ring-primary"
      role="listitem"
      tabIndex={0}
    >
      <h3 className="font-semibold mb-3 text-lg">{row.name}</h3>
      <dl className="space-y-2">
        <div className="flex justify-between">
          <dt className="font-medium">Email:</dt>
          <dd>{row.email}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-medium">Role:</dt>
          <dd>{row.role}</dd>
        </div>
      </dl>
    </article>
  ))}
</div>`}
          testingGuide={{
            keyboard: [
              "On mobile, cards should be keyboard navigable with Tab",
              "Horizontal scroll should work with arrow keys on desktop",
              "Focus should be clearly visible during navigation",
              "Cards should have visible focus indicators",
            ],
            screenReader: [
              "Card layout maintains logical reading order",
              "All table data is accessible in cards",
              "Definition lists (<dl>) provide proper structure",
              "Headings provide context for each card",
            ],
            visual: [
              "Test at 320px, 768px, and 1024px widths",
              "Verify no horizontal scroll on mobile (unless intentional)",
              "Check that cards are readable and well-spaced",
              "Ensure focus indicators are visible on all interactive elements",
            ],
          }}
        >
          <div className="space-y-4">
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse text-sm" aria-label="Employee directory">
                <caption className="text-left font-semibold mb-2 pb-2 text-foreground">
                  Employee contact information
                </caption>
                <thead>
                  <tr className="border-b-2 border-foreground/20">
                    <th scope="col" className="text-left p-3 font-semibold bg-muted/50">
                      Name
                    </th>
                    <th scope="col" className="text-left p-3 font-semibold bg-muted/50">
                      Email
                    </th>
                    <th scope="col" className="text-left p-3 font-semibold bg-muted/50">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sampleData.map((row, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-3">{row.name}</td>
                      <td className="p-3">{row.email}</td>
                      <td className="p-3">{row.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:hidden space-y-4" role="list">
              {sampleData.map((row, index) => (
                <article
                  key={index}
                  className="border rounded-lg p-4 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-all"
                  role="listitem"
                  tabIndex={0}
                >
                  <h3 className="font-semibold mb-3 text-lg">{row.name}</h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="font-medium text-muted-foreground">Email:</dt>
                      <dd className="text-foreground">{row.email}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-muted-foreground">Role:</dt>
                      <dd className="text-foreground">{row.role}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </ExampleSection>

        {/* Complex Table */}
        <ExampleSection
          title="Complex Table (Multi-level Headers)"
          description="Tables with merged cells (colspan/rowspan) require careful attention to accessibility. Use the <code>scope</code> attribute for simple relationships, but for complex tables with multiple header levels, use the <code>headers</code> attribute on each <code>&amp;lt;td&amp;gt;</code> to explicitly reference its header cells. Each header cell should have a unique <code>id</code>, and data cells reference these IDs in their <code>headers</code> attribute (space-separated for multiple headers). Use <code>scope=&amp;quot;colgroup&amp;quot;</code> for column group headers. This ensures screen readers can correctly associate data with all relevant headers, including both row and column headers."
          sectionId="complex-table"
          code={`<!-- Complex Table with Multi-level Headers -->
<table aria-label="Sales report by region and quarter">
  <caption class="text-left font-semibold mb-2 pb-2">
    Q1-Q4 sales data by region
  </caption>
  <thead>
    <tr>
      <!-- Rowspan header for row identifier -->
      <th scope="col" rowspan="2" id="region">Region</th>
      <!-- Colspan header for column group -->
      <th scope="colgroup" colspan="4" id="quarters">Quarters</th>
    </tr>
    <tr>
      <!-- Individual quarter headers reference the group -->
      <th scope="col" id="q1" headers="quarters">Q1</th>
      <th scope="col" id="q2" headers="quarters">Q2</th>
      <th scope="col" id="q3" headers="quarters">Q3</th>
      <th scope="col" id="q4" headers="quarters">Q4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <!-- Row header with unique ID -->
      <th scope="row" id="north">North</th>
      <!-- Data cells reference both row and column headers -->
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
              "Verify all cells are keyboard accessible",
            ],
            screenReader: [
              "Screen reader should announce all relevant headers for each cell",
              "Multi-level headers should be clear in context",
              "Both row and column headers should be announced",
              "Test with NVDA, JAWS, and VoiceOver",
            ],
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="Sales report by region and quarter">
              <caption className="text-left font-semibold mb-2 pb-2 text-foreground">
                Q1-Q4 sales data by region
              </caption>
              <thead>
                <tr className="border-b-2 border-foreground/20">
                  <th scope="col" rowSpan={2} id="region" className="text-left p-3 font-semibold bg-muted/50 border-r border-foreground/20 align-top">
                    Region
                  </th>
                  <th scope="colgroup" colSpan={4} id="quarters" className="text-center p-3 font-semibold bg-muted/50">
                    Quarters
                  </th>
                </tr>
                <tr className="border-b-2 border-foreground/20">
                  <th scope="col" id="q1" headers="quarters" className="text-center p-3 font-semibold bg-muted/50">
                    Q1
                  </th>
                  <th scope="col" id="q2" headers="quarters" className="text-center p-3 font-semibold bg-muted/50">
                    Q2
                  </th>
                  <th scope="col" id="q3" headers="quarters" className="text-center p-3 font-semibold bg-muted/50">
                    Q3
                  </th>
                  <th scope="col" id="q4" headers="quarters" className="text-center p-3 font-semibold bg-muted/50">
                    Q4
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <th scope="row" id="north" className="text-left p-3 font-medium border-r border-foreground/20 bg-muted/30">
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
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <th scope="row" id="south" className="text-left p-3 font-medium border-r border-foreground/20 bg-muted/30">
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
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <th scope="row" id="east" className="text-left p-3 font-medium border-r border-foreground/20 bg-muted/30">
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
        <section className="mb-12" aria-labelledby="best-practices-heading">
          <h2 id="best-practices-heading" className="text-3xl font-bold mb-6">Best Practices</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Follow these best practices to ensure your tables are fully accessible and provide the best user experience for all users, including those using assistive technologies.
          </p>
          <AccessibilityNotes
            notes={[
              "Always provide a visible <caption> or aria-label describing the table's purpose and context",
              "Use scope attributes (scope='col' or scope='row') for simple header relationships",
              "Use headers attribute with unique IDs for complex multi-level headers",
              "Ensure sortable columns have clear visual indicators (arrows) and descriptive aria-labels",
              "Provide status messages via aria-live regions for sort state changes and other dynamic updates",
              "Test with multiple screen readers (NVDA, JAWS, VoiceOver) to ensure compatibility",
              "Ensure tables are responsive - use card layouts on mobile or provide horizontal scroll with indicators",
              "Maintain proper heading hierarchy within table cells if using headings",
              "Use semantic HTML table elements whenever possible - only use ARIA tables when necessary",
              "Ensure all interactive elements (sort buttons) have visible focus indicators",
              "Provide keyboard navigation for ARIA tables (arrow keys, Home, End)",
              "Use proper color contrast for all text and interactive elements (WCAG 2.2 Level AA)",
            ]}
            warnings={[
              "Avoid using tables for layout purposes - use CSS Grid or Flexbox instead. Tables should only contain tabular data",
              "Don't skip header cells - every data cell should have an associated header (row or column)",
              "Complex tables with many merged cells can be difficult for screen reader users - consider simplifying if possible",
              "Don't hide table captions with sr-only unless absolutely necessary - visible captions help all users",
              "Avoid using empty cells for spacing - use CSS padding/margin instead",
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

