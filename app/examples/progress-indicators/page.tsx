"use client"

import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ExternalLink } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"

export default function ProgressIndicatorsPage() {
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
            <span className="font-medium">Progress Indicators</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Progress Indicators</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible progress indicators with native HTML and ARIA patterns.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              4.1.3
            </Badge>
          </div>
        </div>

        {/* Native Progress */}
        <ExampleSection
          title="Native Progress"
          description="The HTML5 <code>&amp;lt;progress&amp;gt;</code> element provides built-in accessibility. Use <code>value</code> and <code>max</code> attributes for determinate progress, or omit <code>value</code> for indeterminate progress. Always provide an <code>aria-label</code> or visible label describing what is progressing."
          sectionId="native-progress"
          code={`<label htmlFor="upload-progress">Upload Progress</label>
<progress
  id="upload-progress"
  value="65"
  max="100"
  aria-label="Upload progress: 65%"
>
  65%
</progress>

{/* Indeterminate */}
<progress aria-label="Loading, please wait" />`}
          testingGuide={{
            screenReader: ["Progress value is announced", "Label describes what is progressing"],
          }}
        >
          <div className="space-y-4 max-w-md">
            <div>
              <label htmlFor="progress-example" className="text-sm font-medium block mb-2">
                Upload Progress
              </label>
              <progress
                id="progress-example"
                value="65"
                max="100"
                aria-label="Upload progress: 65%"
                className="w-full h-2"
              >
                65%
              </progress>
              <span className="text-sm text-muted-foreground">65% complete</span>
            </div>
          </div>
        </ExampleSection>

        {/* ARIA Progressbar */}
        <ExampleSection
          title="ARIA Progressbar"
          description="For custom progress bars, use <code>role=&amp;quot;progressbar&amp;quot;</code> with <code>aria-valuenow</code>, <code>aria-valuemin</code>, and <code>aria-valuemax</code>. Use <code>aria-label</code> or <code>aria-labelledby</code> to describe what is progressing. For indeterminate progress, omit <code>aria-valuenow</code>."
          sectionId="aria-progressbar"
          code={`<div
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Processing: 75%"
>
  <div style={{ width: '75%' }} />
</div>`}
          testingGuide={{
            screenReader: ["Progress value is announced", "Updates are communicated"],
          }}
        >
          <div className="space-y-4 max-w-md">
            <div>
              <label className="text-sm font-medium block mb-2">Processing</label>
              <div
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Processing: 75%"
                className="w-full h-2 bg-muted rounded-full overflow-hidden"
              >
                <div className="h-full bg-primary transition-all" style={{ width: "75%" }} />
              </div>
              <span className="text-sm text-muted-foreground">75% complete</span>
            </div>
          </div>
        </ExampleSection>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Always provide a label describing what is progressing",
              "Use aria-live regions for dynamic updates",
              "Announce significant progress changes",
              "Use native progress when possible",
              "Ensure progress is perceivable",
            ]}
            warnings={["Don't update progress too frequently (can be overwhelming)", "Ensure progress is visible to all users"]}
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
                    <Link href="/criteria/4.1.3" className="text-primary hover:underline">
                      4.1.3 Status Messages
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

