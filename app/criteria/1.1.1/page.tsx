"use client"

import { CheckCircle2, XCircle, Copy, Check, Eye, Image as ImageIcon, FileImage, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import Image from "next/image"

export default function NonTextContentPage() {
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
        <span className="text-foreground font-medium">1.1.1 Non-text Content</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Perceivable → Text Alternatives</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.1.1 Non-text Content</h1>
        <p className="text-xl text-muted-foreground">
          All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 md:p-8 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-primary" />
          Why This Matters
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Text alternatives make visual content accessible to people who cannot see images, whether due to blindness,
            low vision, or technical limitations. Screen readers announce these alternatives, ensuring everyone can
            understand the content's meaning and purpose.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <Eye className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Blind Users</h4>
                <p className="text-sm text-muted-foreground">Rely entirely on alt text to understand images</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ImageIcon className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Low Vision</h4>
                <p className="text-sm text-muted-foreground">May use screen readers or zoom tools</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileImage className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Slow Connections</h4>
                <p className="text-sm text-muted-foreground">Images may not load, alt text provides context</p>
              </div>
            </div>
          </div>
        </div>
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
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <ImageIcon className="w-16 h-16 mx-auto mb-2 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">Image without alt text</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-2 text-destructive">Problem:</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Empty alt attribute on meaningful image. Screen readers cannot convey any information about this image.
                </p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block">alt=""</code>
              </div>
              <div className="bg-destructive/5 p-3 rounded border border-destructive/20">
                <p className="text-xs font-semibold mb-1">Screen Reader Output:</p>
                <p className="text-xs text-muted-foreground italic">"Image" (no context provided)</p>
              </div>
              <div className="bg-destructive/5 p-3 rounded border border-destructive/20">
                <p className="text-xs font-semibold mb-1">Impact:</p>
                <p className="text-xs text-muted-foreground">
                  Users who cannot see the image miss all information it contains. This violates WCAG 2.2 Level A.
                </p>
              </div>
            </div>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Correct</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <ImageIcon className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Dashboard Chart</p>
                <p className="text-xs text-muted-foreground mt-1">Sales growth visualization</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-2 text-green-600">Solution:</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Descriptive alt text that explains both the content and its purpose in context.
                </p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  alt="Dashboard showing sales growth of 45% in Q4 2024"
                </code>
              </div>
              <div className="bg-green-500/5 p-3 rounded border border-green-500/20">
                <p className="text-xs font-semibold mb-1">Screen Reader Output:</p>
                <p className="text-xs text-muted-foreground italic">
                  "Dashboard showing sales growth of 45% in Q4 2024, image"
                </p>
              </div>
              <div className="bg-green-500/5 p-3 rounded border border-green-500/20">
                <p className="text-xs font-semibold mb-1">Impact:</p>
                <p className="text-xs text-muted-foreground">
                  All users understand the image content. Meets WCAG 2.2 Level A requirements.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📱 E-commerce Product Images</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  alt="product-image.jpg"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  alt="Blue wireless headphones with noise cancellation, $199"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users need to know what the product is and key details. The filename provides no value.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📊 Data Visualizations</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  alt="Chart"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  alt="Bar chart: Sales increased from $50K in Q1 to $120K in Q4"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Charts contain critical data. Summarize key trends and numbers in the alt text.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔘 Icon Buttons</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  alt="icon"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  alt="Print this page"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Describe the action, not the appearance. Users need to know what happens when they click.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎨 Decorative Elements</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  alt="Decorative border"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  alt="" role="presentation"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Decorative images add no information. Empty alt tells screen readers to skip them.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Different Image Types */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Different Image Types & How to Handle Them</h2>

        <div className="space-y-6">
          {/* Informative Images */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📸 Informative Images</h3>
            <p className="mb-4">Images that convey important information or concepts.</p>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {`<img 
  src="warning.png" 
  alt="Warning: System maintenance scheduled for tonight"
/>`}
              </pre>
            </div>
          </Card>

          {/* Decorative Images */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎨 Decorative Images</h3>
            <p className="mb-4">Images that are purely decorative and don't add information.</p>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {`<img 
  src="decorative-divider.png" 
  alt=""
  role="presentation"
/>`}
              </pre>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Use empty alt="" for decorative images</p>
          </Card>

          {/* Functional Images */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔘 Functional Images (Buttons/Links)</h3>
            <p className="mb-4">Images that perform an action when clicked.</p>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {`<button>
  <img src="print-icon.png" alt="Print this page" />
</button>`}
              </pre>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Describe the action, not the appearance</p>
          </Card>

          {/* Complex Images */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📊 Complex Images (Charts/Diagrams)</h3>
            <p className="mb-4">Images with detailed information like charts or infographics.</p>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {`<img 
  src="sales-chart.png" 
  alt="Bar chart showing quarterly sales data"
  aria-describedby="chart-description"
/>
<div id="chart-description">
  Sales increased from $50K in Q1 to $120K in Q4, 
  with Q3 showing the highest growth at 45%.
</div>`}
              </pre>
            </div>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
            <TabsTrigger value="svg">SVG</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML Implementation</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    copyCode('<img src="product.jpg" alt="Blue wireless headphones with noise cancellation" />', "html")
                  }
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- Informative image -->
<img 
  src="product.jpg" 
  alt="Blue wireless headphones with noise cancellation"
/>

<!-- Decorative image -->
<img 
  src="border-design.png" 
  alt=""
  role="presentation"
/>

<!-- Image with long description -->
<img 
  src="complex-diagram.png"
  alt="Network architecture diagram"
  aria-describedby="diagram-desc"
/>
<p id="diagram-desc">
  The diagram shows three servers connected to a 
  load balancer, which distributes traffic to...
</p>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React/Next.js Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("React code", "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`import Image from 'next/image'

function ProductImage() {
  return (
    <Image
      src="/product.jpg"
      alt="Blue wireless headphones with noise cancellation"
      width={300}
      height={200}
    />
  )
}

// Decorative image
function DecorativeImage() {
  return (
    <Image
      src="/decoration.png"
      alt=""
      aria-hidden="true"
      width={100}
      height={50}
    />
  )
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="vue" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Vue Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Vue code", "vue")}>
                  {copiedCode === "vue" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<template>
  <!-- Informative image -->
  <img 
    :src="productImage" 
    :alt="productDescription"
    class="product-img"
  />
  
  <!-- Decorative image -->
  <img 
    :src="decorativeImage" 
    alt=""
    role="presentation"
  />
</template>

<script setup>
const productImage = '/product.jpg'
const productDescription = 'Blue wireless headphones'
const decorativeImage = '/decoration.png'
</script>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="svg" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">SVG Accessibility</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("SVG code", "svg")}>
                  {copiedCode === "svg" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- SVG with title and description -->
<svg role="img" aria-labelledby="icon-title icon-desc">
  <title id="icon-title">Settings</title>
  <desc id="icon-desc">
    Gear icon representing settings menu
  </desc>
  <circle cx="50" cy="50" r="40"/>
  <!-- SVG paths here -->
</svg>

<!-- Decorative SVG -->
<svg aria-hidden="true" focusable="false">
  <circle cx="50" cy="50" r="40"/>
</svg>`}
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
                  <strong>axe DevTools:</strong> Checks for missing alt attributes
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies images without alternative text
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Reports accessibility score including alt text
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
                  <strong>Screen Reader:</strong> Use NVDA/JAWS to hear how images are announced
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Inspect Element:</strong> Check alt attributes in browser DevTools
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Disable Images:</strong> Ensure alt text provides context
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
            <h3 className="font-semibold mb-2">❌ Using filename as alt text</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded">alt="IMG_1234.jpg"</code>
            <p className="text-sm mt-2 text-muted-foreground">This provides no useful information</p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Starting with "image of" or "picture of"</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded">alt="Image of a cat"</code>
            <p className="text-sm mt-2 text-muted-foreground">Screen readers already announce it's an image</p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Using alt="image" or alt="photo"</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded">alt="image"</code>
            <p className="text-sm mt-2 text-muted-foreground">Completely unhelpful for understanding content</p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Making decorative images without empty alt</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded">{`<img src="border.png">`}</code>
            <p className="text-sm mt-2 text-muted-foreground">Missing alt creates confusion for screen readers</p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Be concise but descriptive (aim for 150 characters or less)</li>
          <li>✓ Describe the content and function, not just appearance</li>
          <li>✓ Don't repeat information already in surrounding text</li>
          <li>✓ For decorative images, use empty alt="" and role="presentation"</li>
          <li>✓ For complex images, use aria-describedby for longer descriptions</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.4.5">
            <Button variant="outline">1.4.5 Images of Text</Button>
          </Link>
          <Link href="/criteria/2.4.4">
            <Button variant="outline">2.4.4 Link Purpose</Button>
          </Link>
          <Link href="/criteria/4.1.2">
            <Button variant="outline">4.1.2 Name, Role, Value</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}
