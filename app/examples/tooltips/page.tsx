"use client"

import { useState } from "react"
import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, Info } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"

export default function TooltipsPage() {
  const [showTooltip, setShowTooltip] = useState(false)

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
            <span className="font-medium">Tooltips</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Tooltips</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible tooltips with proper ARIA patterns and keyboard support.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              1.3.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              1.4.13
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.1.1
            </Badge>
          </div>
        </div>

        {/* WCAG Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">WCAG Requirements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">1.4.13</Badge>
                  Content on Hover or Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Tooltip must be dismissible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Tooltip must be hoverable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Tooltip must be persistent</span>
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
                    <span>Tooltip must be keyboard accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Focus should trigger tooltip</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

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
                    <span>Tooltip must be associated with trigger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use aria-describedby to link tooltip</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ARIA Tooltip */}
        <ExampleSection
          title="ARIA Tooltip"
          description="Use <code>role=&amp;quot;tooltip&amp;quot;</code> on the tooltip element. Associate it with the trigger using <code>aria-describedby</code> on the trigger pointing to the tooltip's id. The tooltip should appear on both hover and focus. Use <code>aria-live=&amp;quot;polite&amp;quot;</code> if the tooltip appears dynamically. Ensure the tooltip is keyboard accessible and doesn't block other content."
          sectionId="aria-tooltip"
          code={`<button
  aria-describedby="tooltip1"
  onFocus={() => setShowTooltip(true)}
  onBlur={() => setShowTooltip(false)}
  onMouseEnter={() => setShowTooltip(true)}
  onMouseLeave={() => setShowTooltip(false)}
>
  Hover or focus me
</button>
<div
  id="tooltip1"
  role="tooltip"
  className={showTooltip ? "visible" : "hidden"}
>
  This is helpful information
</div>`}
          testingGuide={{
            keyboard: ["Tab to trigger element", "Tooltip appears on focus", "Tooltip is readable"],
            screenReader: [
              "Tooltip content is announced via aria-describedby",
              "Content is available when needed",
            ],
          }}
        >
          <div className="relative inline-block">
            <button
              className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-describedby="tooltip-example"
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              Hover or focus me
            </button>
            <div
              id="tooltip-example"
              role="tooltip"
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded shadow-lg z-50 whitespace-nowrap ${showTooltip ? "visible" : "hidden"}`}
              aria-hidden={!showTooltip}
            >
              This is helpful tooltip information
              <span
                className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"
                aria-hidden="true"
              />
            </div>
          </div>
        </ExampleSection>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Use aria-describedby to associate tooltip with trigger",
              "Tooltip should appear on both hover and focus",
              "Ensure tooltip doesn't block other interactive elements",
              "Keep tooltip text concise and helpful",
              "Use role='tooltip' for the tooltip element",
              "Ensure tooltip is keyboard accessible",
            ]}
            warnings={[
              "Don't use title attribute as primary tooltip method (not keyboard accessible)",
              "Avoid tooltips for critical information",
              "Don't make tooltips too large or complex",
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
                    <Link href="/criteria/1.4.13" className="text-primary hover:underline">
                      1.4.13 Content on Hover or Focus
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/2.1.1" className="text-primary hover:underline">
                      2.1.1 Keyboard
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
                      href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      ARIA Tooltip Pattern
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

