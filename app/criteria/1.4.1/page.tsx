"use client"

import { CheckCircle2, XCircle, Copy, Check, AlertCircle, CheckSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function UseOfColorPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <CriteriaPageLayout>
      <div className="container py-8 md:py-12 max-w-6xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/principles/perceivable" className="hover:text-foreground transition-colors">
          Perceivable
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">1.4.1 Use of Color</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Perceivable → Distinguishable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.4.1 Use of Color</h1>
        <p className="text-xl text-muted-foreground">
          Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Approximately 8% of men and 0.5% of women have some form of color blindness. When information is conveyed only through color, these users cannot access that information. Additionally, screen reader users cannot perceive color at all.
        </p>
        <p className="text-lg leading-relaxed">
          Always provide additional visual cues like icons, text labels, patterns, or shapes alongside color to ensure everyone can understand the information.
        </p>
      </Card>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interactive Examples</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Bad Example */}
          <Card className="p-6 border-destructive/50">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-destructive" />
              <h3 className="font-semibold text-lg">❌ Incorrect</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span>Required field</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span>Optional field</span>
                </div>
                <div className="mt-4">
                  <p className="text-red-600 mb-2">Error: Invalid email format</p>
                </div>
                <div className="mt-4">
                  <button className="px-4 py-2 rounded" style={{ backgroundColor: '#3b82f6', color: 'white' }}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Information conveyed only through color
            </p>
            <p className="text-sm mt-2">Color blind users cannot distinguish required vs optional fields</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Correct</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="font-semibold">Required field</span>
                  <span className="text-red-600">*</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span>Optional field</span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-600 font-semibold">Error: Invalid email format</p>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="px-4 py-2 rounded bg-blue-600 text-white font-semibold">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Adding icons, text labels, and symbols alongside color
            </p>
            <p className="text-sm mt-2">All users can understand the information regardless of color perception</p>
          </Card>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Implement</h2>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">✅ Form Validation</h3>
            <p className="mb-4">Don't rely on color alone to indicate errors:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold mb-2 text-destructive">❌ Bad:</p>
                <div className="bg-muted p-3 rounded">
                  <p className="text-red-600">Invalid email</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2 text-green-600">✓ Good:</p>
                <div className="bg-muted p-3 rounded">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <p className="text-red-600 font-semibold">Error: Invalid email</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">✅ Status Indicators</h3>
            <p className="mb-4">Use icons or text alongside color:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold mb-2 text-destructive">❌ Bad:</p>
                <div className="bg-muted p-3 rounded space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Active</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2 text-green-600">✓ Good:</p>
                <div className="bg-muted p-3 rounded space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">✅ Links and Actions</h3>
            <p className="mb-4">Make links distinguishable beyond color:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold mb-2 text-destructive">❌ Bad:</p>
                <div className="bg-muted p-3 rounded">
                  <p>Click <span className="text-blue-600">here</span> to continue</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2 text-green-600">✓ Good:</p>
                <div className="bg-muted p-3 rounded">
                  <p>Click <a href="#" className="text-blue-600 underline font-semibold">here</a> to continue</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML with Icons and Text</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode("HTML code", "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Error with icon and text -->
<div class="error-message" role="alert">
  <span aria-hidden="true">⚠️</span>
  <strong>Error:</strong> Invalid email address
</div>

<!-- ✅ Good: Status with icon -->
<div class="status">
  <span class="status-icon" aria-hidden="true">✓</span>
  <span class="status-text">Completed</span>
</div>

<!-- ✅ Good: Required field indicator -->
<label>
  Email Address
  <span class="required" aria-label="required">*</span>
</label>
<input type="email" required />`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Component</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("React code", "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`import { AlertCircle, CheckCircle2 } from 'lucide-react'

// ✅ Good: Error message with icon
export function ErrorMessage({ message }) {
  return (
    <div className="error" role="alert">
      <AlertCircle className="w-5 h-5" aria-hidden="true" />
      <strong>Error:</strong> {message}
    </div>
  )
}

// ✅ Good: Status indicator
export function StatusBadge({ status }) {
  const icons = {
    success: <CheckCircle2 className="w-4 h-4" />,
    error: <AlertCircle className="w-4 h-4" />,
  }
  
  return (
    <div className="status-badge">
      {icons[status]}
      <span>{status}</span>
    </div>
  )
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Patterns</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("CSS code", "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ✅ Good: Links with underline */
a {
  color: #0066cc;
  text-decoration: underline;
}

a:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* ✅ Good: Required fields with asterisk */
.required::after {
  content: "*";
  color: red;
  font-weight: bold;
  margin-left: 2px;
}

/* ✅ Good: Error states with border */
input.error {
  border: 2px solid red;
  border-left: 4px solid red;
}

/* ✅ Good: Status with patterns */
.status-success {
  background-color: #d4edda;
  border-left: 4px solid #28a745;
}

.status-error {
  background-color: #f8d7da;
  border-left: 4px solid #dc3545;
}`}
              </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Testing Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Test</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Visual Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Grayscale Test:</strong> Convert page to grayscale and verify information is still clear
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Color Blindness Simulator:</strong> Use tools like Color Oracle to test different types
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Remove Color:</strong> Check if you can understand everything without color
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>axe DevTools:</strong> Detects color-only information conveyance
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies elements that rely solely on color
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Checks for color contrast and accessibility
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>

        <div className="space-y-4">
          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Red text for errors only</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<p className="text-red-600">Invalid input</p>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Add an icon or "Error:" label so color blind users can identify it
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Color-coded status without labels</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<div className="status-dot bg-green-500"></div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Include text like "Active" or "Inactive" alongside the colored indicator
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Links distinguished only by color</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<a href="#" className="text-blue-600">Click here</a>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Add underline or other visual distinction (especially for links in paragraphs)
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Always pair color with icons, text labels, or patterns</li>
          <li>✓ Use underlines for links (especially in body text)</li>
          <li>✓ Add text labels like "Error:", "Required:", or "Success:"</li>
          <li>✓ Test your design in grayscale to verify information is clear</li>
          <li>✓ Use shapes or patterns in addition to color for charts and graphs</li>
          <li>✓ Ensure sufficient contrast ratios (see 1.4.3)</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.4.3">
            <Button variant="outline">1.4.3 Contrast (Minimum)</Button>
          </Link>
          <Link href="/criteria/1.4.11">
            <Button variant="outline">1.4.11 Non-text Contrast</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

