"use client"

import { CheckCircle2, XCircle, Copy, Check, Eye, Contrast } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function ContrastMinimumPage() {
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
        <span className="text-foreground font-medium">1.4.3 Contrast (Minimum)</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Perceivable → Distinguishable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.4.3 Contrast (Minimum)</h1>
        <p className="text-xl text-muted-foreground">
          The visual presentation of text and images of text has a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Low contrast text is difficult or impossible to read for users with low vision, color blindness, or in bright sunlight. Approximately 1 in 12 men and 1 in 200 women have some form of color vision deficiency.
        </p>
        <p className="text-lg leading-relaxed">
          Sufficient contrast ensures that text is readable for everyone, regardless of their visual abilities or viewing conditions.
        </p>
      </Card>

      {/* Contrast Requirements */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Contrast Requirements</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Contrast className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Normal Text</h3>
            </div>
            <p className="text-2xl font-bold mb-2">4.5:1</p>
            <p className="text-sm text-muted-foreground mb-4">
              For text smaller than 18pt (24px) regular weight or 14pt (18.67px) bold
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-600"></div>
                <span className="text-sm">✓ Pass: #0066CC on white (4.5:1)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gray-400"></div>
                <span className="text-sm">✗ Fail: #999999 on white (2.3:1)</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Large Text</h3>
            </div>
            <p className="text-2xl font-bold mb-2">3:1</p>
            <p className="text-sm text-muted-foreground mb-4">
              For text 18pt (24px) or larger regular weight, or 14pt (18.67px) or larger bold
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-500"></div>
                <span className="text-sm">✓ Pass: #3B82F6 on white (3.0:1)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gray-500"></div>
                <span className="text-sm">✗ Fail: #888888 on white (2.1:1)</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interactive Examples</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Bad Example */}
          <Card className="p-6 border-destructive/50">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-destructive" />
              <h3 className="font-semibold text-lg">❌ Insufficient Contrast</h3>
            </div>
            <div className="bg-muted p-6 rounded-lg mb-4 space-y-4">
              <div style={{ color: '#999999', backgroundColor: '#ffffff', padding: '1rem', borderRadius: '0.5rem' }}>
                <p className="text-base">This text has low contrast (2.3:1)</p>
              </div>
              <div style={{ color: '#cccccc', backgroundColor: '#ffffff', padding: '1rem', borderRadius: '0.5rem' }}>
                <p className="text-base">This text is even worse (1.6:1)</p>
              </div>
              <div style={{ color: '#666666', backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '0.5rem' }}>
                <p className="text-base">Gray on light gray (2.8:1)</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> All examples fail the 4.5:1 requirement
            </p>
            <p className="text-sm mt-2">Difficult or impossible to read for many users</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Sufficient Contrast</h3>
            </div>
            <div className="bg-muted p-6 rounded-lg mb-4 space-y-4">
              <div style={{ color: '#000000', backgroundColor: '#ffffff', padding: '1rem', borderRadius: '0.5rem' }}>
                <p className="text-base font-semibold">Black on white (21:1) - Excellent</p>
              </div>
              <div style={{ color: '#0066CC', backgroundColor: '#ffffff', padding: '1rem', borderRadius: '0.5rem' }}>
                <p className="text-base font-semibold">Blue on white (4.5:1) - Passes</p>
              </div>
              <div style={{ color: '#333333', backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '0.5rem' }}>
                <p className="text-base font-semibold">Dark gray on light gray (7.5:1) - Good</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> All examples meet or exceed 4.5:1 contrast ratio
            </p>
            <p className="text-sm mt-2">Readable for users with various visual abilities</p>
          </Card>
        </div>
      </section>

      {/* Tools and Resources */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Contrast Checking Tools</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">WebAIM Contrast Checker</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Free online tool to check contrast ratios
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">
                Visit Tool
              </a>
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Chrome DevTools</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Built-in contrast checker in browser DevTools
            </p>
            <p className="text-xs text-muted-foreground">
              Right-click element → Inspect → Check contrast in Styles panel
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">axe DevTools</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Automated testing with contrast detection
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.deque.com/axe/devtools/" target="_blank" rel="noopener noreferrer">
                Get Extension
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="css" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="tailwind">Tailwind</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
          </TabsList>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS with Good Contrast</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode("CSS code", "css")}
                >
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ✅ Good: Normal text - 4.5:1 or higher */
.body-text {
  color: #000000;        /* Black on white = 21:1 */
  background-color: #ffffff;
}

.primary-text {
  color: #0066CC;        /* Blue on white = 4.5:1 */
  background-color: #ffffff;
}

/* ✅ Good: Large text - 3:1 or higher */
.heading-large {
  color: #3B82F6;        /* Blue on white = 3.0:1 */
  font-size: 24px;        /* 18pt or larger */
  background-color: #ffffff;
}

/* ❌ Bad: Low contrast */
.low-contrast {
  color: #999999;        /* Gray on white = 2.3:1 - FAILS */
  background-color: #ffffff;
}

/* ✅ Good: Dark mode support */
@media (prefers-color-scheme: dark) {
  .body-text {
    color: #ffffff;      /* White on dark = high contrast */
    background-color: #1a1a1a;
  }
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="tailwind" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Tailwind CSS</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Tailwind code", "tailwind")}>
                  {copiedCode === "tailwind" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Tailwind with sufficient contrast
<p className="text-black bg-white">
  Normal text with high contrast
</p>

<p className="text-blue-700 bg-white">
  Blue text that meets 4.5:1 ratio
</p>

<h1 className="text-2xl text-blue-600 bg-white">
  Large heading (3:1 minimum)
</h1>

// ❌ Bad: Low contrast
<p className="text-gray-400 bg-white">
  This fails contrast requirements
</p>

// ✅ Good: Custom colors with contrast
<div className="text-[#0066CC] bg-white">
  Custom blue that passes
</div>`}
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
                {`// ✅ Good: React with accessible colors
export function TextComponent() {
  return (
    <div style={{ 
      color: '#000000',      // 21:1 contrast
      backgroundColor: '#ffffff' 
    }}>
      <p>High contrast text</p>
      
      <h2 style={{ 
        fontSize: '24px',    // Large text
        color: '#3B82F6',    // 3.0:1 for large text
        backgroundColor: '#ffffff' 
      }}>
        Large Heading
      </h2>
    </div>
  )
}

// ✅ Good: Using CSS variables
const colors = {
  text: '#000000',           // High contrast
  background: '#ffffff',
  primary: '#0066CC',        // 4.5:1 minimum
}

export function ThemedComponent() {
  return (
    <div style={{ 
      color: colors.text,
      backgroundColor: colors.background 
    }}>
      Accessible content
    </div>
  )
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
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>axe DevTools:</strong> Automatically detects contrast violations
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Highlights low contrast text
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Reports contrast issues in accessibility audit
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Chrome DevTools:</strong> Shows contrast ratio in Styles panel
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Manual Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Visual Inspection:</strong> Check if text is clearly readable
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Contrast Checker:</strong> Use WebAIM or similar tool to verify ratios
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Different Screens:</strong> Test on various displays and lighting conditions
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Zoom Test:</strong> Verify contrast at different zoom levels
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
            <h3 className="font-semibold mb-2">❌ Light gray text on white</h3>
            <div className="bg-white p-3 rounded mb-2">
              <p style={{ color: '#cccccc' }}>Example: #CCCCCC on white (1.6:1)</p>
            </div>
            <p className="text-sm mt-2 text-muted-foreground">
              Use darker colors like #333333 or #000000 for better contrast
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Colored text on similar colored backgrounds</h3>
            <div className="bg-blue-100 p-3 rounded mb-2">
              <p style={{ color: '#93c5fd' }}>Example: Light blue on light blue background</p>
            </div>
            <p className="text-sm mt-2 text-muted-foreground">
              Ensure sufficient contrast between text and background colors
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Assuming large text needs less contrast</h3>
            <p className="text-sm text-muted-foreground">
              Large text still needs 3:1 minimum. Only text 18pt+ regular or 14pt+ bold qualifies for the lower ratio.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Normal text needs 4.5:1 contrast ratio minimum</li>
          <li>✓ Large text (18pt+ regular or 14pt+ bold) needs 3:1 minimum</li>
          <li>✓ Use contrast checking tools during development</li>
          <li>✓ Test with automated tools like axe DevTools</li>
          <li>✓ Black on white provides the highest contrast (21:1)</li>
          <li>✓ Consider dark mode and ensure contrast in both themes</li>
          <li>✓ Images of text must also meet contrast requirements</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.4.1">
            <Button variant="outline">1.4.1 Use of Color</Button>
          </Link>
          <Link href="/criteria/1.4.6">
            <Button variant="outline">1.4.6 Contrast (Enhanced)</Button>
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

