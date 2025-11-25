"use client"

import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"

export default function CardsPage() {
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
            <span className="font-medium">Cards</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Cards</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible card components with proper heading hierarchy and keyboard support.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              1.3.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.1.1
            </Badge>
          </div>
        </div>

        {/* Semantic Card */}
        <ExampleSection
          title="Semantic Card"
          description="Cards should use proper heading hierarchy. The card title should be a heading element (<code>&amp;lt;h2&amp;gt;</code>, <code>&amp;lt;h3&amp;gt;</code>, etc.) appropriate to the page structure. Use semantic HTML elements and ensure the card content is readable in a logical order. If the card is clickable, use a link or button, not a div with onClick."
          sectionId="semantic-card"
          code={`<article>
  <h3>Card Title</h3>
  <p>Card description and content</p>
  <a href="/link">Read more</a>
</article>

{/* Clickable card */}
<a href="/article" className="card">
  <h3>Article Title</h3>
  <p>Article summary</p>
</a>`}
          testingGuide={{
            keyboard: ["Tab through card links/buttons", "Enter activates clickable cards"],
            screenReader: ["Heading hierarchy is clear", "Card content is readable"],
          }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This is a semantic card with proper heading structure and accessible content.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Link href="#" className="block">
              <Card className="hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-primary">
                <CardHeader>
                  <CardTitle>Clickable Card</CardTitle>
                  <CardDescription>This entire card is clickable as a link</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    When a card is clickable, wrap it in a link or button element, not just a div with onClick.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </ExampleSection>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Use proper heading hierarchy in cards",
              "Ensure card content is readable in logical order",
              "Use semantic HTML (article, section, etc.)",
              "If clickable, use link or button, not div",
              "Provide clear focus indicators",
            ]}
            warnings={["Don't use divs with onClick for clickable cards", "Don't skip heading levels"]}
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
                    <Link href="/criteria/2.1.1" className="text-primary hover:underline">
                      2.1.1 Keyboard
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

