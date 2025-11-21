"use client"

import { CheckCircle2, XCircle, Copy, Check, FileText, Tag } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function PageTitledPage() {
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
        <Link href="/principles/operable" className="hover:text-foreground transition-colors">
          Operable
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">2.4.2 Page Titled</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Navigable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.4.2 Page Titled</h1>
        <p className="text-xl text-muted-foreground">
          Web pages have titles that describe topic or purpose.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Page titles are the first thing screen reader users hear when navigating to a page. They appear in browser tabs, bookmarks, search results, and browser history. Descriptive titles help users understand where they are and find content they've visited before.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Title is first thing announced</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Tag className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Browser Tabs</h4>
              <p className="text-sm text-muted-foreground">Title appears in tab label</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Bookmarks & History</h4>
              <p className="text-sm text-muted-foreground">Title helps identify pages</p>
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
              <h3 className="font-semibold text-lg">❌ Poor Title</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <FileText className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Title: "Home"</p>
                <p className="text-xs text-destructive mt-2">Not descriptive or unique</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Generic title doesn't describe page content
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<title>Home</title>`}
            </code>
            <p className="text-sm mt-2">Screen reader: "Home" - no context about what page</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Descriptive Title</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <FileText className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Title: "About Us - Company Name"</p>
                <p className="text-xs text-green-600 mt-2">Descriptive and unique</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Title describes page content and purpose
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<title>About Us - Company Name</title>`}
            </code>
            <p className="text-sm mt-2">Screen reader: "About Us - Company Name" - clear context</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🏠 Homepage</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<title>Home</title>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<title>Company Name - Web Development Services</title>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Include company name and main purpose.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📄 Product Page</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<title>Product</title>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<title>Wireless Headphones - Premium Audio | Company Name</title>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Include product name and key details.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Blog Post</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<title>Blog</title>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<title>10 Tips for Web Accessibility | Blog Name</title>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Include article title and site name.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📋 Form Page</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<title>Form</title>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<title>Contact Us - Company Name</title>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Describe the form's purpose.
              </p>
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
            <TabsTrigger value="nextjs">Next.js</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML Implementation</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode("HTML code", "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Descriptive page title -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>About Us - Company Name</title>
  <meta charset="UTF-8">
</head>
<body>
  <!-- Page content -->
</body>
</html>

<!-- ✅ Good: Product page -->
<title>Wireless Headphones - Premium Audio | Company Name</title>

<!-- ✅ Good: Blog post -->
<title>10 Tips for Web Accessibility | Blog Name</title>

<!-- ✅ Good: Form page -->
<title>Contact Us - Company Name</title>

<!-- ❌ Bad: Generic titles -->
<title>Home</title>
<title>Page</title>
<title>Untitled</title>
<title>New Page</title>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="nextjs" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Next.js Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Next.js code", "nextjs")}>
                  {copiedCode === "nextjs" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Static title
export const metadata = {
  title: 'About Us - Company Name',
  description: 'Learn about our company and mission'
}

// ✅ Good: Dynamic title
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id)
  
  return {
    title: \`\${product.name} - \${product.category} | Company Name\`,
    description: product.description
  }
}

// ✅ Good: Template with default
export const metadata = {
  title: {
    template: '%s | Company Name',
    default: 'Company Name - Web Development Services'
  }
}

// Usage in page:
export const metadata = {
  title: 'About Us' // Becomes "About Us | Company Name"
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("React code", "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Using react-helmet
import { Helmet } from 'react-helmet'

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Company Name</title>
        <meta name="description" content="Learn about our company" />
      </Helmet>
      <div>About page content</div>
  )
}

// ✅ Good: Dynamic title
function ProductPage({ product }) {
  return (
    <>
      <Helmet>
        <title>{\`\${product.name} - \${product.category} | Company Name\`}</title>
      </Helmet>
      <div>Product details</div>
  )
}

// ✅ Good: Using useEffect
import { useEffect } from 'react'

function Page({ title }) {
  useEffect(() => {
    document.title = \`\${title} | Company Name\`
  }, [title])
  
  return <div>Page content</div>
}

// ✅ Good: Custom hook
function usePageTitle(title) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = \`\${title} | Company Name\`
    return () => {
      document.title = previousTitle
    }
  }, [title])
}

function AboutPage() {
  usePageTitle('About Us')
  return <div>About content</div>
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
  <div>
    <!-- Page content -->
  </div>
</template>

<script setup>
// ✅ Good: Using vue-meta or @vueuse/head
import { useHead } from '@vueuse/head'

useHead({
  title: 'About Us - Company Name',
  meta: [
    { name: 'description', content: 'Learn about our company' }
  ]
})

// ✅ Good: Dynamic title
const product = ref(null)

onMounted(async () => {
  product.value = await fetchProduct()
  
  useHead({
    title: \`\${product.value.name} - \${product.value.category} | Company Name\`
  })
})

// ✅ Good: Using computed
const pageTitle = computed(() => {
  if (product.value) {
    return \`\${product.value.name} | Company Name\`
  }
  return 'Company Name'
})

useHead({
  title: pageTitle
})
</script>

<!-- ✅ Good: In template (Vue 3) -->
<script setup>
import { ref, watch } from 'vue'

const title = ref('About Us')

watch(title, (newTitle) => {
  document.title = \`\${newTitle} | Company Name\`
}, { immediate: true })
</script>`}
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
            <h3 className="text-xl font-semibold mb-4">Manual Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Browser Tab:</strong> Check if title appears in browser tab
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Use NVDA/JAWS to hear page title on load
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Uniqueness:</strong> Verify each page has a unique title
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Descriptiveness:</strong> Title should describe page content
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Length:</strong> Keep titles under 60 characters for best display
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
                  <strong>axe DevTools:</strong> Detects missing or duplicate page titles
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies pages without titles
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Reports missing or non-descriptive titles
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>HTML Validator:</strong> Checks for presence of title tag
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
            <h3 className="font-semibold mb-2">❌ Generic titles like "Home" or "Page"</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<title>Home</title>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use descriptive titles that explain the page content and purpose.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Missing title tag</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              No &lt;title&gt; tag in HTML head
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Every page must have a title tag in the head section.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Duplicate titles across pages</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Multiple pages with same title
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Each page should have a unique title to help users distinguish between pages.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Title doesn't update on navigation</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Single-page app with static title
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Update title when route changes in single-page applications.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Every page must have a unique, descriptive title</li>
          <li>✓ Include site name for context (e.g., "Page Name | Site Name")</li>
          <li>✓ Keep titles under 60 characters for best display</li>
          <li>✓ Put most important information first</li>
          <li>✓ Update titles in single-page apps when route changes</li>
          <li>✓ Avoid generic words like "Home", "Page", "Untitled"</li>
          <li>✓ Test with screen readers to hear how title is announced</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.4.1">
            <Button variant="outline">2.4.1 Bypass Blocks</Button>
          </Link>
          <Link href="/criteria/2.4.6">
            <Button variant="outline">2.4.6 Headings and Labels</Button>
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

