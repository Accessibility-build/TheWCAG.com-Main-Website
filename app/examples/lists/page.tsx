"use client"

import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ExternalLink } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"

export default function ListsPage() {
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
            <span className="font-medium">Lists</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Lists</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible lists with semantic HTML and ARIA patterns.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              1.3.1
            </Badge>
          </div>
        </div>

        {/* Semantic Lists */}
        <ExampleSection
          title="Semantic Lists"
          description="Use <code>&amp;lt;ul&amp;gt;</code> for unordered lists, <code>&amp;lt;ol&amp;gt;</code> for ordered lists, and <code>&amp;lt;dl&amp;gt;</code> for description lists. Screen readers announce list structure, including the number of items. Never use divs styled to look like lists - use actual list elements."
          sectionId="semantic-lists"
          code={`{/* Unordered list */}
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

{/* Ordered list */}
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

{/* Description list */}
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>`}
          testingGuide={{
            screenReader: ["List structure is announced", "Number of items is communicated", "List type is clear"],
          }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Unordered List</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Accessibility</li>
                <li>Usability</li>
                <li>Performance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ordered List</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Description List</h4>
              <dl className="space-y-1 text-sm">
                <dt className="font-semibold">WCAG</dt>
                <dd className="ml-4">Web Content Accessibility Guidelines</dd>
                <dt className="font-semibold">ARIA</dt>
                <dd className="ml-4">Accessible Rich Internet Applications</dd>
              </dl>
            </div>
          </div>
        </ExampleSection>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Use semantic list elements (ul, ol, dl)",
              "Never use divs styled as lists",
              "Nested lists should be properly structured",
              "List items should be meaningful",
            ]}
            warnings={["Don't use CSS to create list-like appearance without list elements"]}
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
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </CriteriaPageLayout>
  )
}

