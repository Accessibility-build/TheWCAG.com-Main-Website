"use client"

import { useState } from "react"
import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, Loader2, Star, Heart } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"

export default function ButtonsLinksPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isToggled, setIsToggled] = useState(false)

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
            <span className="font-medium">Buttons & Links</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Buttons & Links</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible buttons and links with proper semantics, labels, states, and
            keyboard support.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.1.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.4.4
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              4.1.2
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
                  <Badge variant="outline">2.1.1</Badge>
                  Keyboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>All buttons and links must be keyboard accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Enter or Space activates buttons</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">2.4.4</Badge>
                  Link Purpose
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Link purpose must be clear from link text or context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Avoid generic text like 'click here'</span>
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
                    <span>Buttons must have accessible names</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>State changes must be communicated</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Semantic Buttons */}
        <ExampleSection
          title="Semantic Buttons"
          description="Use the <code>&lt;button&gt;</code> element for actions that don't navigate (submit, toggle, etc.). Use <code>&lt;a&gt;</code> for navigation. Buttons should have clear, descriptive text. If a button only has an icon, provide an <code>aria-label</code>. The <code>type</code> attribute is important: <code>type=&quot;button&quot;</code> for general actions, <code>type=&quot;submit&quot;</code> for form submission, <code>type=&quot;reset&quot;</code> for form reset."
          sectionId="semantic-buttons"
          code={`<button type="button" onClick={handleClick}>
  Click Me
</button>

<button type="submit" form="myForm">
  Submit Form
</button>

<a href="/page">Go to Page</a>

{/* Icon button with label */}
<button aria-label="Close dialog">
  <XIcon />
</button>`}
          testingGuide={{
            keyboard: ["Tab to focus buttons/links", "Enter or Space activates buttons", "Links activate with Enter"],
            screenReader: ["Button role and label are announced", "Link purpose is clear", "State is communicated"],
          }}
        >
          <div className="flex flex-wrap gap-4">
            <Button type="button">Primary Button</Button>
            <Button type="button" variant="outline">
              Outline Button
            </Button>
            <Button type="button" variant="secondary">
              Secondary Button
            </Button>
            <Link href="#" className="text-primary hover:underline">
              Navigation Link
            </Link>
          </div>
        </ExampleSection>

        {/* Icon Buttons */}
        <ExampleSection
          title="Icon Buttons"
          description="Icon-only buttons must have accessible labels via <code>aria-label</code> or <code>aria-labelledby</code>. The label should describe the action, not just say 'button'. For toggle buttons, use <code>aria-pressed</code> to indicate state. If the button has both icon and text, the text is usually sufficient, but ensure the icon is decorative (<code>aria-hidden=&quot;true&quot;</code>) or meaningful."
          sectionId="icon-buttons"
          code={`{/* Icon button with aria-label */}
<button aria-label="Close dialog">
  <XIcon aria-hidden="true" />
</button>

{/* Toggle button */}
<button
  aria-label="Favorite"
  aria-pressed={isFavorite}
  onClick={toggleFavorite}
>
  <StarIcon aria-hidden="true" />
</button>

{/* Button with icon and text */}
<button>
  <SaveIcon aria-hidden="true" />
  Save
</button>`}
          testingGuide={{
            keyboard: ["Tab to icon buttons", "aria-label is announced", "Toggle state is communicated"],
            screenReader: ["Button purpose is clear from label", "Pressed state is announced for toggles"],
          }}
        >
          <div className="flex flex-wrap gap-4">
            <Button aria-label="Close dialog" size="icon">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              aria-label={isToggled ? "Remove from favorites" : "Add to favorites"}
              aria-pressed={isToggled}
              onClick={() => setIsToggled(!isToggled)}
              variant={isToggled ? "default" : "outline"}
            >
              <Heart className={`h-4 w-4 ${isToggled ? "fill-current" : ""}`} aria-hidden="true" />
            </Button>
            <Button>
              <Star className="h-4 w-4" aria-hidden="true" />
              Rate
            </Button>
          </div>
        </ExampleSection>

        {/* Button States */}
        <ExampleSection
          title="Button States"
          description="Buttons can have various states that must be communicated: disabled, loading, pressed, expanded. Use <code>disabled</code> attribute (not just styling) for disabled buttons. For loading states, use <code>aria-busy=&quot;true&quot;</code> and provide text or aria-label indicating loading. Toggle buttons should use <code>aria-pressed</code>. Expanded/collapsed states use <code>aria-expanded</code>."
          sectionId="button-states"
          code={`<button disabled aria-disabled="true">
  Disabled Button
</button>

<button aria-busy="true" aria-label="Loading, please wait">
  <Spinner />
  Loading...
</button>

<button
  aria-pressed={isPressed}
  onClick={() => setIsPressed(!isPressed)}
>
  Toggle Button
</button>

<button
  aria-expanded={isExpanded}
  aria-controls="menu"
  onClick={toggleMenu}
>
  Menu
</button>`}
          testingGuide={{
            keyboard: ["Disabled buttons are not focusable", "Loading state is announced", "Toggle state is communicated"],
            screenReader: [
              "Disabled state is announced",
              "Loading state is clear",
              "Pressed/expanded states are communicated",
            ],
          }}
        >
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled Button</Button>
            <Button
              onClick={() => {
                setIsLoading(true)
                setTimeout(() => setIsLoading(false), 2000)
              }}
              disabled={isLoading}
              aria-busy={isLoading}
              aria-label={isLoading ? "Loading, please wait" : "Click to load content"}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Loading...
                </>
              ) : (
                "Click to Load"
              )}
            </Button>
            <Button
              aria-pressed={isPressed}
              onClick={() => setIsPressed(!isPressed)}
              variant={isPressed ? "default" : "outline"}
            >
              {isPressed ? "Pressed" : "Not Pressed"}
            </Button>
          </div>
        </ExampleSection>

        {/* Link vs Button */}
        <ExampleSection
          title="Link vs Button: When to Use Which"
          description="Use <code>&lt;a&gt;</code> for navigation (changing URL, going to another page). Use <code>&lt;button&gt;</code> for actions (submitting forms, toggling, opening dialogs). If it changes the URL, it's a link. If it performs an action on the current page, it's a button. Never use a link styled as a button for actions - this breaks expectations and accessibility."
          sectionId="link-vs-button"
          code={`{/* Navigation - use link */}
<a href="/about">About Us</a>

{/* Action - use button */}
<button onClick={handleSubmit}>Submit</button>

{/* Opening dialog - use button */}
<button onClick={openDialog}>Open Settings</button>

{/* Download file - use link */}
<a href="/file.pdf" download>Download PDF</a>`}
          testingGuide={{
            keyboard: ["Links and buttons both work with Enter", "Links show URL in status bar (if applicable)"],
            screenReader: ["Link role vs button role are different", "Purpose is clear from context"],
          }}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Navigation (Use Link):</h4>
              <Link href="#" className="text-primary hover:underline">
                Go to About Page
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Action (Use Button):</h4>
              <Button
                type="button"
                onClick={() => {
                  // Action would be performed here
                  console.log("Action performed")
                }}
                aria-label="Perform action"
              >
                Perform Action
              </Button>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Opening Dialog (Use Button):</h4>
              <Button
                type="button"
                onClick={() => {
                  // Dialog would open here
                  console.log("Dialog would open")
                }}
                aria-label="Open dialog"
              >
                Open Dialog
              </Button>
            </div>
          </div>
        </ExampleSection>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Use semantic HTML: button for actions, a for navigation",
              "Provide clear, descriptive labels for all buttons",
              "Icon-only buttons must have aria-label",
              "Communicate state changes (loading, pressed, expanded)",
              "Ensure focus indicators are visible",
              "Disabled buttons should not be focusable",
              "Button groups should have proper roles if needed",
              "Links should have meaningful text, not 'click here'",
            ]}
            warnings={[
              "Don't use links styled as buttons for actions",
              "Don't use buttons for navigation",
              "Avoid generic link text like 'read more' without context",
              "Don't disable buttons with CSS only - use disabled attribute",
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
                    <Link href="/criteria/2.4.4" className="text-primary hover:underline">
                      2.4.4 Link Purpose
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
                      href="https://www.w3.org/WAI/ARIA/apg/patterns/button/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      ARIA Button Pattern
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

