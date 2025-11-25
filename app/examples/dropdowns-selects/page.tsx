"use client"

import { useState } from "react"
import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ExternalLink } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function DropdownsSelectsPage() {
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
            <span className="font-medium">Dropdowns & Selects</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Dropdowns & Selects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible dropdowns and selects with native HTML and ARIA combobox patterns.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.1.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              4.1.2
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              4.1.3
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
                    <span>All selects must be keyboard accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Arrow keys navigate options</span>
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
                    <span>Select must have accessible name</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Selected value must be communicated</span>
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
                    <span>Selection changes should be announced</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Native Select */}
        <ExampleSection
          title="Native Select"
          description="The native <code>&lt;select&gt;</code> element provides built-in accessibility. Always associate with a <code>&lt;label&gt;</code>. Use <code>&lt;optgroup&gt;</code> to group related options. The first option should typically be a placeholder with empty value. Native selects work with all assistive technologies without additional ARIA."
          sectionId="native-select"
          code={`<label htmlFor="country">Country</label>
<select id="country" name="country">
  <option value="">Select a country</option>
  <optgroup label="North America">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </optgroup>
  <optgroup label="Europe">
    <option value="uk">United Kingdom</option>
    <option value="de">Germany</option>
  </optgroup>
</select>`}
          testingGuide={{
            keyboard: [
              "Tab to select element",
              "Arrow keys navigate options",
              "Enter or Space opens/closes",
              "Type to jump to matching option",
            ],
            screenReader: ["Label is announced", "Options are announced", "Selected value is clear"],
          }}
        >
          <div className="space-y-2 max-w-md">
            <label htmlFor="native-country" className="text-sm font-medium">
              Country
            </label>
            <select
              id="native-country"
              name="country"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a country</option>
              <optgroup label="North America">
                <option value="us">United States</option>
                <option value="ca">Canada</option>
              </optgroup>
              <optgroup label="Europe">
                <option value="uk">United Kingdom</option>
                <option value="de">Germany</option>
              </optgroup>
            </select>
          </div>
        </ExampleSection>

        {/* Custom Select with ARIA */}
        <ExampleSection
          title="Custom Select (ARIA Combobox)"
          description="For custom styled selects, use the ARIA combobox pattern. Use <code>role=&quot;combobox&quot;</code> on the input/button, <code>aria-expanded</code> to indicate open state, <code>aria-controls</code> to link to the listbox, and <code>aria-autocomplete</code> if applicable. The listbox should have <code>role=&quot;listbox&quot;</code> with <code>role=&quot;option&quot;</code> for each item."
          sectionId="custom-select"
          code={`<div>
  <label htmlFor="custom-select">Select Option</label>
  <button
    id="custom-select"
    role="combobox"
    aria-expanded={isOpen}
    aria-controls="listbox"
    aria-haspopup="listbox"
    aria-label="Select an option"
  >
    {selectedValue || "Choose..."}
  </button>
  <ul
    id="listbox"
    role="listbox"
    aria-labelledby="custom-select"
    hidden={!isOpen}
  >
    <li role="option" aria-selected={selected === "option1"}>
      Option 1
    </li>
  </ul>
</div>`}
          testingGuide={{
            keyboard: [
              "Arrow keys navigate options",
              "Enter selects option",
              "Escape closes listbox",
              "Type-ahead for filtering",
            ],
            screenReader: [
              "Combobox role is announced",
              "Expanded state is communicated",
              "Options are announced",
              "Selection is announced",
            ],
          }}
        >
          <div className="space-y-2 max-w-md">
            <label htmlFor="custom-select-label" className="text-sm font-medium">
              Custom Select
            </label>
            <Select>
              <SelectTrigger id="custom-select-label" aria-label="Select an option">
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ExampleSection>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Use native select when styling allows",
              "Always associate with label",
              "Provide placeholder option for required selects",
              "Use optgroup to organize options",
              "Ensure keyboard navigation works",
              "Announce selection changes",
              "For custom selects, implement full combobox pattern",
            ]}
            warnings={[
              "Don't use custom selects unless native doesn't meet design requirements",
              "Ensure all keyboard interactions work",
              "Test with screen readers thoroughly",
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
                      href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      ARIA Combobox Pattern
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

