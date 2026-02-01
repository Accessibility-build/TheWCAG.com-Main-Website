"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, Info } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"
import { CodeComparison } from "@/components/examples/code-comparison"

export default function TooltipsPage() {
  const [showTooltip, setShowTooltip] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(false)
    }, 300) // 300ms grace period to move cursor to tooltip
  }

  const handleFocus = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setShowTooltip(true)
  }

  const handleBlur = () => {
    setShowTooltip(false)
  }

  // Allow tooltip to be dismissed with Escape key (WCAG 1.4.13)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showTooltip) {
        setShowTooltip(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [showTooltip])

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

        {/* Why It Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why It Matters</h2>
          <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
                  Magnification Users
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users who zoom in often need to pan the screen. If the tooltip disappears when the mouse pointer moves (e.g., to scroll), they can't read the content.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
                  Cognitive Load
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tooltips that vanish instantly require precise mouse movements. This is frustrating and sometimes impossible for users with tremors or motor impairments.
                </p>
              </div>
            </div>
          </div>
        </section>

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
          code={`// Add Escape key handler
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && showTooltip) {
      setShowTooltip(false)
    }
  }
  document.addEventListener("keydown", handleEscape)
  return () => document.removeEventListener("keydown", handleEscape)
}, [showTooltip])

const timeoutRef = useRef(null)

const handleMouseEnter = () => {
  clearTimeout(timeoutRef.current)
  setShowTooltip(true)
}

const handleMouseLeave = () => {
  // Grace period for moving cursor to tooltip
  timeoutRef.current = setTimeout(() => setShowTooltip(false), 300)
}

return (
  <>
    <button
      aria-describedby="tooltip1"
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover or focus me
    </button>
    <div
      id="tooltip1"
      role="tooltip"
      // Add handlers to tooltip too so it stays open
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className={showTooltip ? "visible" : "hidden"}
    >
      This is helpful information
    </div>
  </>
)`}
          testingGuide={{
            keyboard: [
              "Tab to trigger element - tooltip appears on focus",
              "Press Escape to dismiss tooltip (WCAG 1.4.13)",
              "Tab away to close tooltip",
            ],
            screenReader: [
              "Tooltip content is announced via aria-describedby",
              "Content is available when needed",
              "Tooltip can be dismissed without losing focus",
            ],
          }}
        >
          <div className="relative inline-block">
            <button
              className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-describedby="tooltip-example"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Hover or focus me
            </button>
            <div
              id="tooltip-example"
              role="tooltip"
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded shadow-lg z-50 whitespace-nowrap ${showTooltip ? "visible" : "hidden"}`}
              aria-hidden={!showTooltip}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              This is helpful tooltip information
              <span
                className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"
                aria-hidden="true"
              />
            </div>
          </div>
        </ExampleSection>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">1. Missing Hover Bridge</h3>
            <p className="text-muted-foreground mb-4">If the tooltip is slightly separated from the trigger, moving the mouse to the tooltip will close it.</p>
            <CodeComparison
              badCode={`<button onMouseLeave={() => setShow(false)}>
  Trigger
</button>`}
              goodCode={`<button onMouseLeave={safeClose}>
  Trigger
</button>
// safeClose waits 300ms before closing`}
              badDescription="Tooltip closes instantly, making it impossible to hover over the content."
              goodDescription="A small timeout allows users to traverse the gap between trigger and tooltip."
            />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">2. Using Title Attribute</h3>
            <p className="text-muted-foreground mb-4">The native `title` attribute is visually inconsistent and not keyboard accessible in many browsers.</p>
            <CodeComparison
              badCode={`<button title="More info">
  Help
</button>`}
              goodCode={`<button aria-describedby="tip">
  Help
</button>
<div id="tip" role="tooltip">More info</div>`}
              badDescription="Title attribute often won't appear on focus and can't be styled."
              goodDescription="Custom tooltips give you full control over accessibility and styling."
            />
          </div>
        </section>

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

