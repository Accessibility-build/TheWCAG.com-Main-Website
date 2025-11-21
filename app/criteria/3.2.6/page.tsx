"use client"

import { CheckCircle2, XCircle, Copy, Check, AlertCircle, HelpCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function ConsistentHelpPage() {
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
        <Link href="/principles/understandable" className="hover:text-foreground transition-colors">
          Understandable
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">3.2.6 Consistent Help</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Understandable → Predictable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">3.2.6 Consistent Help</h1>
        <p className="text-xl text-muted-foreground">
          If a Web page contains any of the following help mechanisms, and these mechanisms are repeated on multiple Web pages within a set of Web pages, they occur in the same relative order to other page content, unless a change is initiated by the user.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users with cognitive disabilities, memory impairments, or those learning to use a website benefit from consistent placement of help mechanisms. When help buttons, contact links, or support information appear in the same location across pages, users can find them more easily and predictably.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Need consistent patterns</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Memory Impairments</h4>
              <p className="text-sm text-muted-foreground">Easier to remember location</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from consistency</p>
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
              <h3 className="font-semibold text-lg">❌ Inconsistent Placement</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center w-full">
                <div className="text-xs mb-2">Page 1: Help top-right</div>
                <div className="text-xs mb-2">Page 2: Help bottom-left</div>
                <div className="text-xs text-destructive">Inconsistent</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Help button appears in different locations on each page
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Help location changes between pages
            </code>
            <p className="text-sm mt-2">Users cannot predict where to find help</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Consistent Placement</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center w-full">
                <div className="text-xs mb-2">Page 1: Help top-right</div>
                <div className="text-xs mb-2">Page 2: Help top-right</div>
                <div className="text-xs text-green-600">Consistent</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Help button always in same location
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Help location consistent across pages
            </code>
            <p className="text-sm mt-2">Users can easily find help</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">❓ Help Buttons</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Help button top-right on page 1, bottom-left on page 2
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Help button always in top-right corner
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users expect help in same location.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📞 Contact Links</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Contact link in header on some pages, footer on others
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Contact link always in footer
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Consistent placement improves findability.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">💬 Support Chat</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Chat widget position changes between pages
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Chat widget always bottom-right corner
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users learn where to find support.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📚 Documentation Links</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Documentation link in different sections on each page
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Documentation link always in same navigation area
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Consistent navigation improves usability.
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
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
            <TabsTrigger value="nextjs">Next.js</TabsTrigger>
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
                {`<!-- ✅ Good: Consistent help placement in header -->
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
  <div class="help-section">
    <button class="help-button">Help</button>
    <a href="/contact">Contact</a>
  </div>
</header>

<!-- ✅ Good: Consistent help in footer -->
<footer>
  <div class="help-links">
    <a href="/help">Help</a>
    <a href="/contact">Contact</a>
    <a href="/support">Support</a>
  </div>
</footer>

<!-- ✅ Good: Consistent chat widget position -->
<div class="chat-widget" style="position: fixed; bottom: 20px; right: 20px;">
  <button>Chat with us</button>
</div>

<!-- Use same structure across all pages -->`}
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
                {`// ✅ Good: Consistent header component
function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      <div className="help-section">
        <button className="help-button">Help</button>
        <a href="/contact">Contact</a>
      </div>
    </header>
  )
}

// ✅ Good: Consistent footer component
function Footer() {
  return (
    <footer>
      <div className="help-links">
        <a href="/help">Help</a>
        <a href="/contact">Contact</a>
        <a href="/support">Support</a>
      </div>
    </footer>
  )
}

// ✅ Good: Consistent chat widget
function ChatWidget() {
  return (
    <div className="chat-widget" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <button>Chat with us</button>
    </div>
  )
}

// Use in all pages
function Page() {
  return (
    <>
      <Header />
      <main>Page content</main>
      <Footer />
      <ChatWidget />
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
                {`<!-- ✅ Good: Consistent header component -->
<template>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
    <div class="help-section">
      <button class="help-button">Help</button>
      <a href="/contact">Contact</a>
    </div>
  </header>
</template>

<!-- ✅ Good: Consistent footer component -->
<template>
  <footer>
    <div class="help-links">
      <a href="/help">Help</a>
      <a href="/contact">Contact</a>
      <a href="/support">Support</a>
    </div>
  </footer>
</template>

<!-- ✅ Good: Consistent chat widget -->
<template>
  <div class="chat-widget" style="position: fixed; bottom: 20px; right: 20px;">
    <button>Chat with us</button>
  </div>
</template>

<!-- Use in all pages -->
<template>
  <div>
    <Header />
    <main>Page content</main>
    <Footer />
    <ChatWidget />
  </div>
</template>`}
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
                {`// ✅ Good: Consistent layout
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}

// components/Header.tsx
export function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className="help-section">
        <button className="help-button">Help</button>
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  )
}

// components/Footer.tsx
export function Footer() {
  return (
    <footer>
      <div className="help-links">
        <Link href="/help">Help</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/support">Support</Link>
      </div>
    </footer>
  )
}

// components/ChatWidget.tsx
export function ChatWidget() {
  return (
    <div className="chat-widget" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <button>Chat with us</button>
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
            <h3 className="text-xl font-semibold mb-4">Manual Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Page Comparison:</strong> Compare help placement across multiple pages
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Location Check:</strong> Verify help mechanisms in same relative position
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Navigation Test:</strong> Navigate between pages, check consistency
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Visual Inspection:</strong> Check if help elements appear in same location
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
                  <strong>Note:</strong> Automated testing is limited for this criterion
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Manual Review:</strong> Requires visual comparison across pages
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
            <h3 className="font-semibold mb-2">❌ Help in different locations</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Help button top-right on some pages, bottom-left on others
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Keep help mechanisms in the same relative position across all pages.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Inconsistent navigation</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Help links appear in different sections on each page
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use consistent layout components to ensure same placement.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Missing help on some pages</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Help available on some pages but not others
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              If help is provided, it should be consistently available across pages.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Keep help mechanisms in same relative position</li>
          <li>✓ Use shared layout components for consistency</li>
          <li>✓ Place help in header, footer, or fixed position</li>
          <li>✓ Test across multiple pages to verify consistency</li>
          <li>✓ Consider user expectations for help placement</li>
          <li>✓ Document help placement in design system</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/3.2.3">
            <Button variant="outline">3.2.3 Consistent Navigation</Button>
          </Link>
          <Link href="/criteria/3.2.4">
            <Button variant="outline">3.2.4 Consistent Identification</Button>
          </Link>
          <Link href="/criteria/2.4.1">
            <Button variant="outline">2.4.1 Bypass Blocks</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

