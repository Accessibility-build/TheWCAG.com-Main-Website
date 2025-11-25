"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, ChevronDown, ChevronRight } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"

export default function NavigationPage() {
  const [activeTab, setActiveTab] = useState("tab1")
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  
  // Focus first menu item when mega menu opens
  useEffect(() => {
    if (expandedMenu === "mega") {
      const firstMenuItem = document.querySelector('#megamenu-example [role="menuitem"]') as HTMLElement
      setTimeout(() => firstMenuItem?.focus(), 100)
    }
  }, [expandedMenu])

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
            <span className="font-medium">Navigation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Navigation</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible navigation patterns including semantic nav, breadcrumbs, skip
            links, mega menus, and tabs.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.1.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.4.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.4.8
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              4.1.2
            </Badge>
          </div>
        </div>

        {/* WCAG Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">WCAG Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">2.1.1</Badge>
                  Keyboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>All navigation must be keyboard accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Arrow keys for menu navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Enter/Space to activate, Escape to close</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">2.4.1</Badge>
                  Bypass Blocks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Provide skip links to bypass navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Skip links should be visible on focus</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Semantic Navigation */}
        <ExampleSection
          title="Semantic Navigation"
          description="Use the <code>&lt;nav&gt;</code> element with an <code>aria-label</code> to identify navigation regions. Use semantic list structure (<code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>) for menu items. This provides built-in semantics that screen readers understand. The <code>aria-current=&quot;page&quot;</code> attribute indicates the current page in navigation."
          sectionId="semantic-nav"
          code={`<nav aria-label="Main navigation">
  <ul>
    <li>
      <a href="/" aria-current="page">Home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
  </ul>
</nav>`}
          testingGuide={{
            keyboard: ["Tab through navigation links", "Enter to activate links", "Current page link is indicated"],
            screenReader: ["Navigation region is announced", "List structure is clear", "Current page is indicated"],
          }}
        >
          <nav aria-label="Main navigation" className="border rounded-lg p-4">
            <ul className="flex gap-4">
              <li>
                <Link href="#" className="font-semibold underline" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </nav>
        </ExampleSection>

        {/* ARIA Navigation */}
        <ExampleSection
          title="ARIA Navigation (Custom)"
          description="When you need custom navigation that doesn't use semantic HTML, use <code>role=&quot;navigation&quot;</code> with <code>aria-label</code> to identify the navigation region. Use <code>role=&quot;list&quot;</code> and <code>role=&quot;listitem&quot;</code> for menu items. Ensure keyboard navigation is implemented manually. This approach should only be used when semantic HTML navigation is not feasible."
          sectionId="aria-nav"
          code={`<nav role="navigation" aria-label="Main navigation">
  <ul role="list">
    <li role="listitem">
      <a href="/" aria-current="page">Home</a>
    </li>
    <li role="listitem">
      <a href="/about">About</a>
    </li>
  </ul>
</nav>`}
          testingGuide={{
            keyboard: ["Tab through navigation links", "Enter to activate links", "Keyboard navigation must be implemented"],
            screenReader: ["Navigation role is announced", "List structure is clear", "Current page is indicated"],
          }}
        >
          <nav role="navigation" aria-label="Main navigation" className="border rounded-lg p-4">
            <ul role="list" className="flex gap-4">
              <li role="listitem">
                <Link href="#" className="font-semibold underline" aria-current="page">
                  Home
                </Link>
              </li>
              <li role="listitem">
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li role="listitem">
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </ExampleSection>

        {/* Breadcrumbs */}
        <ExampleSection
          title="Breadcrumbs"
          description="Breadcrumbs provide navigation context and help users understand their location. Use <code>&lt;nav aria-label=&quot;Breadcrumb&quot;&gt;</code> with an ordered list (<code>&lt;ol&gt;</code>). The last item represents the current page and should not be a link. Use <code>aria-current=&quot;page&quot;</code> on the current page item. Separators between items should be hidden from screen readers using <code>aria-hidden=&quot;true&quot;</code>."
          sectionId="breadcrumbs"
          code={`<nav aria-label="Breadcrumb">
  <ol className="flex items-center gap-2">
    <li>
      <a href="/">Home</a>
    </li>
    <li aria-hidden="true">/</li>
    <li>
      <a href="/examples">Examples</a>
    </li>
    <li aria-hidden="true">/</li>
    <li aria-current="page">Navigation</li>
  </ol>
</nav>`}
          testingGuide={{
            keyboard: ["Tab through breadcrumb links", "Current page is not focusable"],
            screenReader: ["Breadcrumb navigation is announced", "Current location is clear", "Path hierarchy is understood"],
          }}
        >
          <nav aria-label="Breadcrumb" className="border rounded-lg p-4">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-muted-foreground">
                /
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Examples
                </Link>
              </li>
              <li aria-hidden="true" className="text-muted-foreground">
                /
              </li>
              <li aria-current="page" className="font-medium">
                Navigation
              </li>
            </ol>
          </nav>
        </ExampleSection>

        {/* Skip Links */}
        <ExampleSection
          title="Skip Links"
          description="Skip links allow keyboard users to bypass repetitive navigation and jump directly to main content. They should be the first focusable element on the page, visible when focused, and hidden otherwise. Use <code>position: absolute</code> with negative positioning to hide them visually, then move them into view on focus. The target should have a matching <code>id</code> and receive focus when the skip link is activated."
          sectionId="skip-links"
          code={`<a 
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground"
>
  Skip to main content
</a>

<main id="main-content" tabIndex={-1}>
  {/* Main content */}
</main>`}
          testingGuide={{
            keyboard: [
              "Tab key should focus skip link first",
              "Skip link should be visible when focused",
              "Enter activates skip link and moves focus to target",
            ],
            screenReader: ["Skip link is announced first", "Target is announced when activated"],
          }}
        >
          <div className="space-y-4">
            <a
              href="#skip-target"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
            >
              Skip to main content
            </a>
            <div className="border rounded-lg p-4 bg-muted/30">
              <p className="text-sm text-muted-foreground mb-2">
                Press Tab to see the skip link appear. This allows keyboard users to bypass navigation.
              </p>
              <div id="skip-target" tabIndex={-1} className="mt-4 p-4 bg-background border rounded">
                <p className="font-semibold">Main Content Area</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Focus moves here when skip link is activated.
                </p>
              </div>
            </div>
          </div>
        </ExampleSection>

        {/* Mega Menu */}
        <ExampleSection
          title="Mega Menu"
          description="Mega menus are large dropdown menus with multiple columns of links. Use proper ARIA attributes: <code>aria-expanded</code> on the trigger button, <code>aria-controls</code> to link trigger to menu, and <code>aria-haspopup=&quot;true&quot;</code>. The menu should be keyboard accessible with Arrow keys for navigation and Escape to close. Focus management is critical - trap focus within the menu when open."
          sectionId="mega-menu"
          code={`<button
  aria-expanded={isOpen}
  aria-controls="megamenu"
  aria-haspopup="true"
  onClick={toggleMenu}
>
  Products
</button>
<div
  id="megamenu"
  role="menu"
  aria-labelledby="products-button"
  hidden={!isOpen}
>
  <div className="grid grid-cols-3">
    <div>
      <h3>Category 1</h3>
      <ul role="group">
        <li><a role="menuitem" href="/item1">Item 1</a></li>
        <li><a role="menuitem" href="/item2">Item 2</a></li>
      </ul>
    </div>
  </div>
</div>`}
          testingGuide={{
            keyboard: [
              "Tab to trigger button",
              "Enter/Space opens menu",
              "Arrow keys navigate menu items",
              "Escape closes menu",
              "Focus is trapped in menu when open",
            ],
            screenReader: [
              "Menu state (expanded/collapsed) is announced",
              "Menu structure is clear",
              "Categories and items are announced",
            ],
          }}
        >
          <div className="relative inline-block">
            <button
              id="products-button"
              className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-expanded={expandedMenu === "mega"}
              aria-controls="megamenu-example"
              aria-haspopup="true"
              onClick={() => setExpandedMenu(expandedMenu === "mega" ? null : "mega")}
              onKeyDown={(e) => {
                if (e.key === "Escape" && expandedMenu === "mega") {
                  setExpandedMenu(null)
                  e.currentTarget.focus()
                }
              }}
            >
              Products {expandedMenu === "mega" ? "▼" : "▶"}
            </button>
            {expandedMenu === "mega" && (
              <div
                id="megamenu-example"
                role="menu"
                aria-labelledby="products-button"
                className="absolute top-full left-0 mt-2 bg-background border rounded-lg shadow-lg p-6 min-w-[600px] z-50"
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setExpandedMenu(null)
                    const button = document.getElementById("products-button")
                    button?.focus()
                  }
                  // Arrow key navigation for menu items
                  const menuItems = Array.from(
                    e.currentTarget.querySelectorAll('[role="menuitem"]')
                  ) as HTMLElement[]
                  const currentIndex = menuItems.indexOf(e.target as HTMLElement)
                  
                  if (e.key === "ArrowDown" && currentIndex < menuItems.length - 1) {
                    e.preventDefault()
                    menuItems[currentIndex + 1]?.focus()
                  } else if (e.key === "ArrowUp" && currentIndex > 0) {
                    e.preventDefault()
                    menuItems[currentIndex - 1]?.focus()
                  } else if (e.key === "Home") {
                    e.preventDefault()
                    menuItems[0]?.focus()
                  } else if (e.key === "End") {
                    e.preventDefault()
                    menuItems[menuItems.length - 1]?.focus()
                  }
                }}
              >
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Software</h3>
                    <ul role="group" className="space-y-1" aria-label="Software category">
                      <li>
                        <Link
                          href="#"
                          role="menuitem"
                          className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-1 block"
                          tabIndex={0}
                        >
                          Desktop Apps
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          role="menuitem"
                          className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-1 block"
                          tabIndex={0}
                        >
                          Mobile Apps
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          role="menuitem"
                          className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-1 block"
                          tabIndex={0}
                        >
                          Web Apps
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Services</h3>
                    <ul role="group" className="space-y-1" aria-label="Services category">
                      <li>
                        <Link
                          href="#"
                          role="menuitem"
                          className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-1 block"
                          tabIndex={0}
                        >
                          Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          role="menuitem"
                          className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-1 block"
                          tabIndex={0}
                        >
                          Support
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          role="menuitem"
                          className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-1 block"
                          tabIndex={0}
                        >
                          Training
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Resources</h3>
                    <ul role="group" className="space-y-1" aria-label="Resources category">
                      <li>
                        <Link
                          href="#"
                          role="menuitem"
                          className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-1 block"
                          tabIndex={0}
                        >
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          role="menuitem"
                          className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-1 block"
                          tabIndex={0}
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          role="menuitem"
                          className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-1 block"
                          tabIndex={0}
                        >
                          Community
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ExampleSection>

        {/* Tabs Navigation */}
        <ExampleSection
          title="Tabs Navigation"
          description="Tabs use the ARIA tabs pattern. Each tab panel should have a corresponding tab button. Use <code>role=&quot;tablist&quot;</code>, <code>role=&quot;tab&quot;</code>, and <code>role=&quot;tabpanel&quot;</code>. The active tab should have <code>aria-selected=&quot;true&quot;</code> and others should have <code>aria-selected=&quot;false&quot;</code>. Use <code>aria-controls</code> to link tabs to panels. Keyboard navigation: Arrow keys move between tabs, Enter/Space activates, Home/End jump to first/last tab."
          sectionId="tabs-nav"
          code={`<div role="tablist" aria-label="Content sections">
  <button
    role="tab"
    aria-selected={activeTab === "tab1"}
    aria-controls="panel1"
    id="tab1"
    onClick={() => setActiveTab("tab1")}
  >
    Tab 1
  </button>
  <button
    role="tab"
    aria-selected={activeTab === "tab2"}
    aria-controls="panel2"
    id="tab2"
    onClick={() => setActiveTab("tab2")}
  >
    Tab 2
  </button>
</div>

<div
  role="tabpanel"
  id="panel1"
  aria-labelledby="tab1"
  hidden={activeTab !== "tab1"}
>
  Tab 1 content
</div>`}
          testingGuide={{
            keyboard: [
              "Arrow keys navigate between tabs",
              "Enter or Space activates tab",
              "Home/End jump to first/last tab",
            ],
            screenReader: [
              "Tab role and state are announced",
              "Tab panel content is announced when activated",
              "Active tab is clearly indicated",
            ],
          }}
        >
          <div className="space-y-4">
            <div role="tablist" aria-label="Content sections" className="flex border-b">
                <button
                  role="tab"
                  aria-selected={activeTab === "tab1"}
                  aria-controls="panel1"
                  id="tab1"
                  onClick={() => setActiveTab("tab1")}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight") {
                      e.preventDefault()
                      setActiveTab("tab2")
                      document.getElementById("tab2")?.focus()
                    } else if (e.key === "ArrowLeft") {
                      e.preventDefault()
                      setActiveTab("tab3")
                      document.getElementById("tab3")?.focus()
                    } else if (e.key === "Home") {
                      e.preventDefault()
                      setActiveTab("tab1")
                      document.getElementById("tab1")?.focus()
                    } else if (e.key === "End") {
                      e.preventDefault()
                      setActiveTab("tab3")
                      document.getElementById("tab3")?.focus()
                    }
                  }}
                  className={`px-4 py-2 border-b-2 transition-colors ${
                    activeTab === "tab1"
                      ? "border-primary font-semibold"
                      : "border-transparent hover:border-muted-foreground"
                  }`}
                >
                  Overview
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "tab2"}
                  aria-controls="panel2"
                  id="tab2"
                  onClick={() => setActiveTab("tab2")}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight") {
                      e.preventDefault()
                      setActiveTab("tab3")
                      document.getElementById("tab3")?.focus()
                    } else if (e.key === "ArrowLeft") {
                      e.preventDefault()
                      setActiveTab("tab1")
                      document.getElementById("tab1")?.focus()
                    } else if (e.key === "Home") {
                      e.preventDefault()
                      setActiveTab("tab1")
                      document.getElementById("tab1")?.focus()
                    } else if (e.key === "End") {
                      e.preventDefault()
                      setActiveTab("tab3")
                      document.getElementById("tab3")?.focus()
                    }
                  }}
                  className={`px-4 py-2 border-b-2 transition-colors ${
                    activeTab === "tab2"
                      ? "border-primary font-semibold"
                      : "border-transparent hover:border-muted-foreground"
                  }`}
                >
                  Details
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "tab3"}
                  aria-controls="panel3"
                  id="tab3"
                  onClick={() => setActiveTab("tab3")}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight") {
                      e.preventDefault()
                      setActiveTab("tab1")
                      document.getElementById("tab1")?.focus()
                    } else if (e.key === "ArrowLeft") {
                      e.preventDefault()
                      setActiveTab("tab2")
                      document.getElementById("tab2")?.focus()
                    } else if (e.key === "Home") {
                      e.preventDefault()
                      setActiveTab("tab1")
                      document.getElementById("tab1")?.focus()
                    } else if (e.key === "End") {
                      e.preventDefault()
                      setActiveTab("tab3")
                      document.getElementById("tab3")?.focus()
                    }
                  }}
                  className={`px-4 py-2 border-b-2 transition-colors ${
                    activeTab === "tab3"
                      ? "border-primary font-semibold"
                      : "border-transparent hover:border-muted-foreground"
                  }`}
                >
                  Settings
                </button>
            </div>
            <div
              role="tabpanel"
              id="panel1"
              aria-labelledby="tab1"
              hidden={activeTab !== "tab1"}
              className="p-4 border rounded-lg"
            >
              <h3 className="font-semibold mb-2">Overview Content</h3>
              <p className="text-sm text-muted-foreground">
                This is the content for the Overview tab. It appears when the tab is selected.
              </p>
            </div>
            <div
              role="tabpanel"
              id="panel2"
              aria-labelledby="tab2"
              hidden={activeTab !== "tab2"}
              className="p-4 border rounded-lg"
            >
              <h3 className="font-semibold mb-2">Details Content</h3>
              <p className="text-sm text-muted-foreground">
                This is the content for the Details tab. It appears when the tab is selected.
              </p>
            </div>
            <div
              role="tabpanel"
              id="panel3"
              aria-labelledby="tab3"
              hidden={activeTab !== "tab3"}
              className="p-4 border rounded-lg"
            >
              <h3 className="font-semibold mb-2">Settings Content</h3>
              <p className="text-sm text-muted-foreground">
                This is the content for the Settings tab. It appears when the tab is selected.
              </p>
            </div>
          </div>
        </ExampleSection>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Always use semantic HTML elements when possible",
              "Provide clear labels for navigation regions",
              "Indicate current page/location clearly",
              "Ensure keyboard navigation works intuitively",
              "Use ARIA only when semantic HTML isn't sufficient",
              "Test with keyboard-only navigation",
              "Provide skip links for long pages",
              "Maintain consistent navigation structure",
            ]}
            warnings={[
              "Don't use divs for navigation when nav element is appropriate",
              "Avoid keyboard traps in dropdown menus",
              "Don't rely solely on hover for menu visibility",
              "Ensure mobile navigation is also keyboard accessible",
            ]}
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
                    <Link href="/criteria/2.1.1" className="text-primary hover:underline">
                      2.1.1 Keyboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/2.4.1" className="text-primary hover:underline">
                      2.4.1 Bypass Blocks
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/2.4.8" className="text-primary hover:underline">
                      2.4.8 Location
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/4.1.2" className="text-primary hover:underline">
                      4.1.2 Name, Role, Value
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>External Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.w3.org/WAI/ARIA/apg/patterns/tabs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      ARIA Tabs Pattern
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/ARIA/apg/patterns/menubar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      ARIA Menubar Pattern
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
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

