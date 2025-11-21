"use client"

import { CheckCircle2, XCircle, Copy, Check, Tag, Repeat } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function ConsistentIdentificationPage() {
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
        <span className="text-foreground font-medium">3.2.4 Consistent Identification</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Understandable → Predictable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">3.2.4 Consistent Identification</h1>
        <p className="text-xl text-muted-foreground">
          Components that have the same functionality within a set of Web pages are identified consistently.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Reduces cognitive load by making the interface predictable. When the same functionality appears with different labels or icons, users must relearn what each component does on every page.
        </p>
        <p className="text-lg leading-relaxed">
          This criterion requires that components with the same functionality use consistent labels, icons, and text across all pages, making the interface predictable and reducing cognitive load.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Tag className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Need consistent identification</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Repeat className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from predictability</p>
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
              <h3 className="font-semibold text-lg">❌ Inconsistent Search Labels</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-dashed border-destructive/30">
              <div className="space-y-2">
                <button className="px-3 py-1 bg-destructive/20 rounded text-xs">Search</button>
                <button className="px-3 py-1 bg-destructive/20 rounded text-xs">Find</button>
                <button className="px-3 py-1 bg-destructive/20 rounded text-xs">Lookup</button>
              </div>
              <p className="text-xs text-destructive mt-2">Same function, different labels</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Users must relearn labels
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`Page 1: "Search"`}
              {`\nPage 2: "Find"`}
              {`\nPage 3: "Lookup"`}
            </code>
            <p className="text-sm mt-2">Confusing for users</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Consistent Search Labels</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-green-500/30">
              <div className="space-y-2">
                <button className="px-3 py-1 bg-green-500/20 rounded text-xs">🔍 Search</button>
                <button className="px-3 py-1 bg-green-500/20 rounded text-xs">🔍 Search</button>
                <button className="px-3 py-1 bg-green-500/20 rounded text-xs">🔍 Search</button>
              </div>
              <p className="text-xs text-green-600 mt-2">Same label and icon everywhere</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Use consistent labels and icons
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`All pages: "Search" with search icon`}
            </code>
            <p className="text-sm mt-2">Users learn once, use everywhere</p>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML Implementation</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode(`<!-- ✅ Good: Consistent component identification -->
<!-- All pages use same structure for search -->
<form role="search">
  <label for="search">Search</label>
  <input type="search" id="search" name="q">
  <button type="submit" aria-label="Search">
    <svg><!-- Search icon --></svg>
    Search
  </button>
</form>

<!-- ❌ Bad: Different labels for same function -->
<!-- Page 1: <button>Search</button> -->
<!-- Page 2: <button>Find</button> -->
<!-- Page 3: <button>Lookup</button> -->`, "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Consistent component identification -->
<!-- All pages use same structure for search -->
<form role="search">
  <label for="search">Search</label>
  <input type="search" id="search" name="q">
  <button type="submit" aria-label="Search">
    <svg><!-- Search icon --></svg>
    Search
  </button>
</form>

<!-- ❌ Bad: Different labels for same function -->
<!-- Page 1: <button>Search</button> -->
<!-- Page 2: <button>Find</button> -->
<!-- Page 3: <button>Lookup</button> -->`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`/* ✅ Good: Consistent styling for same components */
.search-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}

/* Same styling applied consistently */
.home-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}`, "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ✅ Good: Consistent styling for same components */
.search-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}

/* Same styling applied consistently */
.home-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`// ✅ Good: Reusable component with consistent identification
function SearchButton() {
  return (
    <button type="submit" aria-label="Search">
      <SearchIcon />
      Search
    </button>
  )
}

// Use this component everywhere search is needed

// ✅ Good: Consistent icon component
function IconButton({ icon, label, onClick }) {
  return (
    <button onClick={onClick} aria-label={label}>
      {icon}
      {label}
    </button>
  )
}

// Use consistent icons for same functions
<IconButton icon={<SearchIcon />} label="Search" />
<IconButton icon={<HomeIcon />} label="Home" />`, "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Reusable component with consistent identification
function SearchButton() {
  return (
    <button type="submit" aria-label="Search">
      <SearchIcon />
      Search
    </button>
  )
}

// Use this component everywhere search is needed

// ✅ Good: Consistent icon component
function IconButton({ icon, label, onClick }) {
  return (
    <button onClick={onClick} aria-label={label}>
      {icon}
      {label}
    </button>
  )
}

// Use consistent icons for same functions
<IconButton icon={<SearchIcon />} label="Search" />
<IconButton icon={<HomeIcon />} label="Home" />`}
              </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Testing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Testing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Manual Testing</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Review all pages on the site</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Identify components with the same functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that labels, icons, and text are consistent</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify that similar components use the same visual design</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Test that users can predict component behavior based on consistent identification</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <p className="text-muted-foreground mb-4">
              Tools can check for consistent HTML structure but cannot verify semantic consistency. Manual review is essential.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Compare component labels across pages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Check for consistent aria-label usage</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

