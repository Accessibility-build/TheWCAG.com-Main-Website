"use client"

import { useState } from "react"
import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, ChevronDown } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"

export default function AccordionsPage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(["item1"]))

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
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
            <span className="font-medium">Accordions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Accordions</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible accordions with native HTML5 details/summary and ARIA patterns.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.1.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              4.1.2
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
                  <Badge variant="outline">2.1.1</Badge>
                  Keyboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Accordion headers must be keyboard accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Enter or Space toggles accordion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">4.1.2</Badge>
                  Name, Role, Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Expanded/collapsed state must be communicated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use aria-expanded to indicate state</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Native Details/Summary */}
        <ExampleSection
          title="Native Details/Summary"
          description="The HTML5 <code>&amp;lt;details&amp;gt;</code> and <code>&amp;lt;summary&amp;gt;</code> elements provide built-in accordion functionality with native accessibility. The <code>open</code> attribute controls expanded state. This is the simplest and most accessible approach when styling allows."
          sectionId="native-accordion"
          code={`<details>
  <summary>Accordion Header</summary>
  <div>
    Accordion content goes here.
  </div>
</details>

<details open>
  <summary>Pre-expanded Item</summary>
  <div>
    This item starts expanded.
  </div>
</details>`}
          testingGuide={{
            keyboard: ["Tab to summary", "Enter or Space toggles", "Arrow keys navigate between items (if grouped)"],
            screenReader: ["Expanded/collapsed state is announced", "Content is hidden when collapsed"],
          }}
        >
          <div className="space-y-2 max-w-md">
            <details className="border rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer list-none flex items-center justify-between">
                What is accessibility?
                <ChevronDown className="h-4 w-4 transition-transform" />
              </summary>
              <div className="p-4 pt-0 text-sm text-muted-foreground">
                Accessibility ensures that websites and applications can be used by people with disabilities, including
                those using assistive technologies.
              </div>
            </details>
            <details className="border rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer list-none flex items-center justify-between">
                Why is it important?
                <ChevronDown className="h-4 w-4 transition-transform" />
              </summary>
              <div className="p-4 pt-0 text-sm text-muted-foreground">
                Accessibility is not just a legal requirement in many jurisdictions, it also improves usability for all
                users and expands your audience.
              </div>
            </details>
          </div>
        </ExampleSection>

        {/* ARIA Accordion */}
        <ExampleSection
          title="ARIA Accordion"
          description="For custom accordions, use <code>role=&amp;quot;button&amp;quot;</code> on the header with <code>aria-expanded</code> to indicate state. Use <code>aria-controls</code> to link header to content panel. The content panel should have <code>aria-labelledby</code> pointing back to the header. Use <code>hidden</code> attribute or CSS to hide collapsed content."
          sectionId="aria-accordion"
          code={`<div>
  <button
    id="header1"
    role="button"
    aria-expanded={isExpanded}
    aria-controls="panel1"
    onClick={toggle}
  >
    Accordion Header
  </button>
  <div
    id="panel1"
    role="region"
    aria-labelledby="header1"
    hidden={!isExpanded}
  >
    Accordion content
  </div>
</div>`}
          testingGuide={{
            keyboard: ["Tab to accordion headers", "Enter or Space toggles", "Arrow keys for grouped accordions"],
            screenReader: ["aria-expanded state is announced", "Content relationship is clear"],
          }}
        >
          <div className="space-y-2 max-w-md">
            {["item1", "item2", "item3"].map((id) => (
              <div key={id} className="border rounded-lg">
                <button
                  id={`header-${id}`}
                  className="w-full p-4 font-semibold text-left flex items-center justify-between hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                  aria-expanded={expandedItems.has(id)}
                  aria-controls={`panel-${id}`}
                  onClick={() => toggleItem(id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      toggleItem(id)
                    }
                  }}
                >
                  Accordion Item {id.replace("item", "")}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedItems.has(id) ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`panel-${id}`}
                  role="region"
                  aria-labelledby={`header-${id}`}
                  hidden={!expandedItems.has(id)}
                  className="p-4 pt-0 text-sm text-muted-foreground"
                >
                  This is the content for accordion item {id.replace("item", "")}. It expands and collapses when the
                  header is activated.
                </div>
              </div>
            ))}
          </div>
        </ExampleSection>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Use native details/summary when possible",
              "Always indicate expanded/collapsed state",
              "Ensure keyboard navigation works",
              "Use aria-expanded for custom accordions",
              "Link headers to panels with aria-controls",
              "Hide collapsed content from screen readers",
              "Provide visual indicators for state",
            ]}
            warnings={[
              "Don't use accordions for critical information that should always be visible",
              "Avoid nesting accordions too deeply",
              "Ensure accordion headers are clearly clickable",
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
                    <Link href="/criteria/2.1.1" className="text-primary hover:underline">
                      2.1.1 Keyboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/4.1.2" className="text-primary hover:underline">
                      4.1.2 Name, Role, Value
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
                      href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      ARIA Accordion Pattern
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

