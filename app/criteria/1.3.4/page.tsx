"use client"

import { CheckCircle2, XCircle, Copy, Check, Smartphone, Monitor } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function OrientationPage() {
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
        <span className="text-foreground font-medium">1.3.4 Orientation</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Perceivable → Adaptable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.3.4 Orientation</h1>
        <p className="text-xl text-muted-foreground">
          Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users with disabilities may have devices mounted in fixed orientations, or may need to use their device in a specific orientation due to physical limitations. Forcing a particular orientation (portrait or landscape) prevents these users from accessing content. Content should work in both orientations.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Smartphone className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Mounted Devices</h4>
              <p className="text-sm text-muted-foreground">Fixed orientation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Monitor className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Physical Limitations</h4>
              <p className="text-sm text-muted-foreground">Cannot rotate device</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Smartphone className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Prefer different orientations</p>
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
              <h3 className="font-semibold text-lg">❌ Portrait Only</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Smartphone className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Portrait mode only</p>
                <p className="text-xs text-destructive mt-2">Cannot rotate to landscape</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Content locked to portrait orientation
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`screen-orientation: portrait;`}
            </code>
            <p className="text-sm mt-2">Users with fixed device orientation cannot access</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Both Orientations</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Smartphone className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Works in portrait</p>
                <p className="text-xs text-green-600 mt-1">and landscape</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Content adapts to both orientations
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Responsive design, no orientation lock
            </code>
            <p className="text-sm mt-2">All users can access in their preferred orientation</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📱 Mobile Apps</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  App locked to portrait, cannot rotate
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  App works in both portrait and landscape
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should be able to use their preferred orientation.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">💻 Web Applications</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Website forces landscape orientation
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Website adapts to both orientations
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Responsive design should support all orientations.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎮 Games</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Game only works in landscape (unless essential)
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Game works in both orientations, or orientation is essential
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Unless orientation is essential, support both.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📄 Documents</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  PDF viewer locked to portrait
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  PDF viewer adapts to device orientation
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Documents should be readable in any orientation.
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
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="js">JavaScript</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
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
                {`<!-- ❌ Bad: Locking orientation -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="screen-orientation" content="portrait">

<!-- ✅ Good: Allowing both orientations -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- No orientation lock -->

<!-- ✅ Good: Responsive design -->
<div class="container">
  <header>Header</header>
  <main>Content adapts to orientation</main>
  <footer>Footer</footer>
</div>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("CSS code", "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ❌ Bad: Locking orientation */
@media (orientation: portrait) {
  body {
    /* Force portrait layout */
  }
}

/* ✅ Good: Responsive to both orientations */
.container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

/* Adapt layout for landscape */
@media (orientation: landscape) {
  .container {
    flex-direction: row;
    gap: 2rem;
  }
}

/* ✅ Good: Flexible grid */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (orientation: landscape) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ✅ Good: Responsive typography */
h1 {
  font-size: 2rem;
}

@media (orientation: landscape) {
  h1 {
    font-size: 2.5rem;
  }
}

/* ✅ Good: Flexible images */
img {
  max-width: 100%;
  height: auto;
}

/* Note: Don't use orientation lock unless essential */`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="js" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">JavaScript Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("JS code", "js")}>
                  {copiedCode === "js" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ❌ Bad: Locking orientation
if (screen.orientation) {
  screen.orientation.lock('portrait')
}

// ✅ Good: Allowing orientation changes
// Don't lock orientation, let users rotate

// ✅ Good: Adapting to orientation changes
window.addEventListener('orientationchange', () => {
  updateLayout()
})

function updateLayout() {
  const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
  
  if (orientation === 'landscape') {
    document.body.classList.add('landscape')
    document.body.classList.remove('portrait')
  } else {
    document.body.classList.add('portrait')
    document.body.classList.remove('landscape')
  }
}

// ✅ Good: Responsive adjustments
function handleResize() {
  const width = window.innerWidth
  const height = window.innerHeight
  
  // Adjust layout based on dimensions, not orientation lock
  if (width > height) {
    // Landscape layout
    applyLandscapeLayout()
  } else {
    // Portrait layout
    applyPortraitLayout()
  }
}

window.addEventListener('resize', handleResize)
window.addEventListener('orientationchange', handleResize)

// ✅ Good: Media query matching
function checkOrientation() {
  const mediaQuery = window.matchMedia('(orientation: landscape)')
  
  if (mediaQuery.matches) {
    // Landscape
    applyLandscapeLayout()
  } else {
    // Portrait
    applyPortraitLayout()
  }
}

mediaQuery.addEventListener('change', checkOrientation)`}
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
                {`// ✅ Good: Responsive component
import { useState, useEffect } from 'react'

function ResponsiveLayout({ children }) {
  const [orientation, setOrientation] = useState('portrait')

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(
        window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
      )
    }

    updateOrientation()
    window.addEventListener('resize', updateOrientation)
    window.addEventListener('orientationchange', updateOrientation)

    return () => {
      window.removeEventListener('resize', updateOrientation)
      window.removeEventListener('orientationchange', updateOrientation)
    }
  }, [])

  return (
    <div className={\`layout \${orientation}\`}>
      {children}
    </div>
  )
}

// ✅ Good: Using media queries
function ResponsiveComponent() {
  const [isLandscape, setIsLandscape] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(orientation: landscape)')
    setIsLandscape(mediaQuery.matches)

    const handleChange = (e) => {
      setIsLandscape(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <div className={isLandscape ? 'landscape-layout' : 'portrait-layout'}>
      Content adapts to orientation
    </div>
  )
}

// ✅ Good: Flexible grid
function AdaptiveGrid({ items }) {
  return (
    <div className="grid grid-cols-1 landscape:grid-cols-2">
      {items.map(item => (
        <div key={item.id}>{item.content}</div>
      ))}
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
                  <strong>Rotate Device:</strong> Rotate device, verify content works in both orientations
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Browser DevTools:</strong> Test with device emulation in different orientations
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Functionality:</strong> Verify all features work in both orientations
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Layout Check:</strong> Ensure content is readable in both orientations
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
                  <strong>Manual Review:</strong> Requires manual testing on devices
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
            <h3 className="font-semibold mb-2">❌ Locking orientation with meta tag</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<meta name="screen-orientation" content="portrait">`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Don't lock orientation unless it's essential for the content (e.g., certain games).
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Using screen.orientation.lock()</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`screen.orientation.lock('portrait')`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Don't programmatically lock orientation unless essential.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Layout breaks in one orientation</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Content only works properly in portrait
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Ensure content is functional and readable in both orientations.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Don't lock orientation unless essential</li>
          <li>✓ Use responsive design that adapts to both orientations</li>
          <li>✓ Test content in both portrait and landscape</li>
          <li>✓ Use CSS media queries for orientation-specific styles</li>
          <li>✓ Ensure all functionality works in both orientations</li>
          <li>✓ Consider users with fixed device mounts</li>
          <li>✓ Test on actual devices, not just emulators</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.3.1">
            <Button variant="outline">1.3.1 Info and Relationships</Button>
          </Link>
          <Link href="/criteria/1.4.10">
            <Button variant="outline">1.4.10 Reflow</Button>
          </Link>
          <Link href="/criteria/1.4.12">
            <Button variant="outline">1.4.12 Text Spacing</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

