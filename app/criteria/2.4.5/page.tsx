"use client"

import { CheckCircle2, XCircle, Copy, Check, Search, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function MultipleWaysPage() {
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
        <span className="text-foreground font-medium">2.4.5 Multiple Ways</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Operable → Navigable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.4.5 Multiple Ways</h1>
        <p className="text-xl text-muted-foreground">
          More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Different users have different navigation preferences and abilities. Some prefer search, others use site maps, and some navigate through links. Providing multiple ways to find content accommodates diverse user needs and improves overall usability.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Search className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Search Users</h4>
              <p className="text-sm text-muted-foreground">Prefer search functionality</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Site Map Users</h4>
              <p className="text-sm text-muted-foreground">Use site maps for overview</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Search className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from multiple options</p>
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
              <h3 className="font-semibold text-lg">❌ Single Navigation Method</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Search className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Only main navigation menu</p>
                <p className="text-xs text-destructive mt-2">No search, no site map</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Only one way to find content
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Single navigation method only
            </code>
            <p className="text-sm mt-2">Users with different preferences cannot find content</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Multiple Navigation Methods</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Search className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Navigation menu</p>
                <p className="text-xs text-green-600 mt-1">+ Search</p>
                <p className="text-xs text-green-600">+ Site map</p>
                <p className="text-xs text-green-600">+ Related links</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Multiple ways to find content
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Search, site map, navigation, related links
            </code>
            <p className="text-sm mt-2">Users can choose preferred navigation method</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔍 Search Functionality</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  No search feature on website
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Search box in header, accessible from all pages
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Many users prefer searching over browsing.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🗺️ Site Map</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  No site map available
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Site map link in footer, shows all pages
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Site maps provide overview of site structure.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔗 Related Links</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  No links between related content
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Related articles, breadcrumbs, category links
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Related links help discover content.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📋 Table of Contents</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Long page with no table of contents
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Table of contents with anchor links to sections
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> TOC provides quick navigation within page.
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
                {`<!-- ✅ Good: Multiple navigation methods -->
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/products">Products</a></li>
    </ul>
  </nav>
  
  <!-- Search -->
  <form role="search">
    <label for="search">Search</label>
    <input type="search" id="search" name="q">
    <button type="submit">Search</button>
  </form>
</header>

<main>
  <!-- Content -->
</main>

<footer>
  <!-- Site map link -->
  <nav aria-label="Footer navigation">
    <a href="/sitemap">Site Map</a>
    <a href="/contact">Contact</a>
  </nav>
</footer>

<!-- ✅ Good: Site map page -->
<nav aria-label="Site map">
  <h2>Site Map</h2>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a>
      <ul>
        <li><a href="/about/team">Team</a></li>
        <li><a href="/about/history">History</a></li>
      </ul>
    </li>
    <li><a href="/products">Products</a></li>
  </ul>
</nav>

<!-- ✅ Good: Table of contents -->
<nav aria-label="Table of contents">
  <h2>Contents</h2>
  <ol>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#section1">Section 1</a></li>
    <li><a href="#section2">Section 2</a></li>
  </ol>
</nav>`}
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
                {`// ✅ Good: Header with multiple navigation
function Header() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/products">Products</Link></li>
        </ul>
      </nav>
      
      <SearchForm />
    </header>
  )
}

function SearchForm() {
  const [query, setQuery] = useState('')
  
  return (
    <form role="search" onSubmit={handleSearch}>
      <label htmlFor="search">Search</label>
      <input
        type="search"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

function Footer() {
  return (
    <footer>
      <nav aria-label="Footer navigation">
        <Link href="/sitemap">Site Map</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  )
}

// ✅ Good: Site map component
function SiteMap() {
  const pages = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About', children: [
      { path: '/about/team', title: 'Team' },
      { path: '/about/history', title: 'History' }
    ]}
  ]
  
  return (
    <nav aria-label="Site map">
      <h2>Site Map</h2>
      <ul>
        {pages.map(page => (
          <li key={page.path}>
            <Link href={page.path}>{page.title}</Link>
            {page.children && (
              <ul>
                {page.children.map(child => (
                  <li key={child.path}>
                    <Link href={child.path}>{child.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
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
  <!-- ✅ Good: Header with multiple navigation -->
  <header>
    <nav aria-label="Main navigation">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
      </ul>
    </nav>
    
    <SearchForm />
  </header>

  <!-- ✅ Good: Search form -->
  <form role="search" @submit.prevent="handleSearch">
    <label for="search">Search</label>
    <input
      type="search"
      id="search"
      v-model="query"
    />
    <button type="submit">Search</button>
  </form>

  <!-- ✅ Good: Footer with site map link -->
  <footer>
    <nav aria-label="Footer navigation">
      <router-link to="/sitemap">Site Map</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </footer>

  <!-- ✅ Good: Site map -->
  <nav aria-label="Site map">
    <h2>Site Map</h2>
    <ul>
      <li v-for="page in pages" :key="page.path">
        <router-link :to="page.path">{{ page.title }}</router-link>
        <ul v-if="page.children">
          <li v-for="child in page.children" :key="child.path">
            <router-link :to="child.path">{{ child.title }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')
const pages = ref([
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About', children: [
    { path: '/about/team', title: 'Team' }
  ]}
])

const handleSearch = () => {
  // Search logic
}
</script>`}
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
                {`// ✅ Good: Layout with multiple navigation
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

// components/Header.tsx
import Link from 'next/link'
import SearchForm from './SearchForm'

export function Header() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/products">Products</Link></li>
        </ul>
      </nav>
      <SearchForm />
    </header>
  )
}

// components/SearchForm.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function SearchForm() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(\`/search?q=\${query}\`)
  }
  
  return (
    <form role="search" onSubmit={handleSubmit}>
      <label htmlFor="search">Search</label>
      <input
        type="search"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

// app/sitemap/page.tsx
import Link from 'next/link'

export default function SiteMap() {
  const pages = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' }
  ]
  
  return (
    <nav aria-label="Site map">
      <h1>Site Map</h1>
      <ul>
        {pages.map(page => (
          <li key={page.path}>
            <Link href={page.path}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
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
                  <strong>Search Test:</strong> Verify search functionality works
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Site Map:</strong> Check if site map exists and is accessible
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Navigation:</strong> Verify main navigation is available
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Related Links:</strong> Check for related content links
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Count Methods:</strong> Verify at least 2 navigation methods
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
                  <strong>Manual Review:</strong> Requires manual inspection of navigation methods
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
            <h3 className="font-semibold mb-2">❌ Only one navigation method</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Only main menu, no search or site map
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide at least two different ways to find content (search, site map, navigation, etc.).
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Site map not accessible</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Site map exists but not linked from main pages
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Site map should be easily discoverable, typically linked in footer.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Search not working</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Search box present but returns no results
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Search functionality must actually work and return relevant results.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Provide at least 2 different navigation methods</li>
          <li>✓ Include search functionality</li>
          <li>✓ Provide site map (link in footer)</li>
          <li>✓ Use breadcrumbs for hierarchical navigation</li>
          <li>✓ Add related links between content</li>
          <li>✓ Include table of contents for long pages</li>
          <li>✓ Ensure all navigation methods are accessible</li>
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
          <Link href="/criteria/2.4.10">
            <Button variant="outline">2.4.10 Section Headings</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

