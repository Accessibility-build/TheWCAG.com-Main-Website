"use client"

import { CheckCircle2, XCircle, Copy, Check, SkipForward, Navigation } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function BypassBlocksPage() {
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
        <span className="text-foreground font-medium">2.4.1 Bypass Blocks</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Navigable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.4.1 Bypass Blocks</h1>
        <p className="text-xl text-muted-foreground">
          A mechanism is available to bypass blocks of content that are repeated on multiple web pages.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Screen reader and keyboard users must navigate through the same navigation menu, header, and footer on every single page. This repetitive content can be extremely frustrating and time-consuming.
        </p>
        <p className="text-lg leading-relaxed">
          Skip links allow users to jump directly to the main content, bypassing repetitive navigation blocks. This dramatically improves efficiency and user experience for keyboard and screen reader users.
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
              <h3 className="font-semibold text-lg">❌ No Skip Link</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 space-y-2">
              <div className="p-2 bg-gray-200 rounded">Navigation Menu (10 links)</div>
              <div className="p-2 bg-gray-200 rounded">Breadcrumb Navigation</div>
              <div className="p-2 bg-gray-200 rounded">Search Bar</div>
              <div className="p-2 bg-blue-100 rounded">Main Content (starts here after 3 tabs)</div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Keyboard users must tab through all navigation first
            </p>
            <p className="text-sm mt-2">Screen reader: "Link, Home. Link, About. Link, Services..." (repeated on every page)</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Skip Link Available</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 space-y-2">
              <a 
                href="#main-content" 
                className="block p-2 bg-blue-600 text-white rounded text-center font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('main-content')?.focus()
                }}
              >
                Skip to main content
              </a>
              <div className="p-2 bg-gray-200 rounded">Navigation Menu</div>
              <div className="p-2 bg-gray-200 rounded">Breadcrumb Navigation</div>
              <div className="p-2 bg-gray-200 rounded">Search Bar</div>
              <div id="main-content" className="p-2 bg-blue-100 rounded" tabIndex={-1}>Main Content (accessible immediately)</div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Skip link appears on first Tab press
            </p>
            <p className="text-sm mt-2">Screen reader: "Skip to main content, link" - user can jump directly</p>
          </Card>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Implement</h2>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <SkipForward className="w-5 h-5" />
              Skip to Main Content
            </h3>
            <p className="mb-4">The most common skip link pattern:</p>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`<a href="#main-content" className="skip-link">
  Skip to main content
</a>

<nav>...</nav>
<header>...</header>

<main id="main-content" tabIndex={-1}>
  <!-- Main content here -->
</main>`}
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Navigation className="w-5 h-5" />
              Multiple Skip Links
            </h3>
            <p className="mb-4">For complex pages, provide multiple skip options:</p>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`<div className="skip-links">
  <a href="#main-content">Skip to main content</a>
  <a href="#navigation">Skip to navigation</a>
  <a href="#search">Skip to search</a>
</div>`}
            </pre>
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
                <h3 className="font-semibold">HTML Skip Link</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode("HTML code", "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Skip link at the top -->
<body>
  <a href="#main-content" class="skip-link">
    Skip to main content
  </a>
  
  <header>
    <nav>
      <!-- Navigation links -->
    </nav>
  </header>
  
  <main id="main-content" tabindex="-1">
    <!-- Main content -->
  </main>
</body>

<!-- CSS to hide skip link until focused -->
<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
  }
  
  .skip-link:focus {
    top: 0;
  }
</style>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React/Next.js Component</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("React code", "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Skip link component
export function SkipLink({ href, children }) {
  return (
    <a
      href={href}
      className="skip-link"
      onClick={(e) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.focus()
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }}
    >
      {children}
    </a>
  )
}

// Usage in layout
export default function Layout({ children }) {
  return (
    <>
      <SkipLink href="#main-content">
        Skip to main content
      </SkipLink>
      
      <Header />
      <Navigation />
      
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      
      <Footer />
  )
}

// ✅ Good: Multiple skip links
export function SkipLinks() {
  return (
    <div className="skip-links">
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <SkipLink href="#navigation">Skip to navigation</SkipLink>
      <SkipLink href="#search">Skip to search</SkipLink>
    </div>
  )
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Styling</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("CSS code", "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ✅ Good: Hidden until focused */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  z-index: 1000;
  border-radius: 0 0 4px 0;
  font-weight: 600;
}

.skip-link:focus {
  top: 0;
  outline: 3px solid #fff;
  outline-offset: -3px;
}

/* Alternative: Always visible but subtle */
.skip-link {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 1000;
  transform: translateY(-100%);
  transition: transform 0.2s;
}

.skip-link:focus {
  transform: translateY(0);
}

/* Multiple skip links */
.skip-links {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}

.skip-links a {
  display: block;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  margin-bottom: 2px;
  text-decoration: none;
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
            <h3 className="text-xl font-semibold mb-4">Keyboard Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Tab Key:</strong> Press Tab on page load - skip link should appear first
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Enter Key:</strong> Activate skip link - should jump to main content
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Focus:</strong> Verify skip link receives focus before navigation
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Multiple Pages:</strong> Test skip link works on all pages
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Screen Reader Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>NVDA/JAWS:</strong> Use screen reader to navigate - skip link should be first
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Activation:</strong> Activate skip link - should jump to main content
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Landmarks:</strong> Verify main content has proper landmark role
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Automated:</strong> Use axe DevTools to check for skip links
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
            <h3 className="font-semibold mb-2">❌ No skip link at all</h3>
            <p className="text-sm text-muted-foreground">
              Users must tab through all navigation on every page, wasting time and causing frustration.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Skip link not visible on focus</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`.skip-link { display: none; }`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Skip link must be visible when it receives keyboard focus. Hide it off-screen, not with display:none.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Skip link goes to wrong element</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<a href="#content">Skip</a>
<div id="content">Not the main content</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Ensure skip link targets the actual main content area, not a sidebar or navigation.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Main content not focusable</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<main id="main-content">Content</main>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Add tabIndex="-1" to the main content so it can receive programmatic focus when skip link is activated.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Place skip link as the first focusable element on the page</li>
          <li>✓ Hide skip link off-screen until it receives focus</li>
          <li>✓ Make skip link visually prominent when focused</li>
          <li>✓ Target the main content area with id="main-content"</li>
          <li>✓ Add tabIndex="-1" to main content for programmatic focus</li>
          <li>✓ Test on every page to ensure skip link works consistently</li>
          <li>✓ Consider multiple skip links for complex layouts</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.4.3">
            <Button variant="outline">2.4.3 Focus Order</Button>
          </Link>
          <Link href="/criteria/2.4.5">
            <Button variant="outline">2.4.5 Multiple Ways</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

