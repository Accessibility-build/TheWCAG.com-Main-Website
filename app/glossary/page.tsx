"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Search, ArrowRight, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const terms = [
    {
      term: "Accessibility",
      definition:
        "The practice of making websites, tools, and technologies usable by people with disabilities. Also known as a11y (a + 11 letters + y).",
      category: "General",
    },
    {
      term: "ARIA",
      definition:
        "Accessible Rich Internet Applications. A set of attributes that can be added to HTML to enhance accessibility for assistive technologies, particularly for dynamic content and custom widgets.",
      category: "Technical",
    },
    {
      term: "Alt Text",
      definition:
        "Alternative text that describes images for screen reader users. Required for informative images, should be empty for decorative images.",
      category: "Content",
    },
    {
      term: "Assistive Technology",
      definition:
        "Any device, software, or equipment that helps people with disabilities interact with computers and digital content. Examples include screen readers, voice recognition software, and switch controls.",
      category: "General",
    },
    {
      term: "Color Contrast Ratio",
      definition:
        "The difference in luminance between text and its background. WCAG requires a minimum ratio of 4.5:1 for normal text (Level AA) to ensure readability.",
      category: "Design",
    },
    {
      term: "Focus Indicator",
      definition:
        "A visual indicator that shows which element currently has keyboard focus. Essential for keyboard navigation and required by WCAG 2.4.7.",
      category: "Navigation",
    },
    {
      term: "Heading Hierarchy",
      definition:
        "The proper nesting of heading elements (h1-h6) to create a logical document structure. Screen readers use headings to navigate content.",
      category: "Structure",
    },
    {
      term: "Keyboard Navigation",
      definition:
        "The ability to navigate and interact with a website using only a keyboard, without a mouse. Required for users with motor disabilities and essential for WCAG compliance.",
      category: "Navigation",
    },
    {
      term: "Landmark",
      definition:
        "ARIA regions that identify major sections of a page (navigation, main, banner, etc.). Help screen reader users understand page structure.",
      category: "Technical",
    },
    {
      term: "POUR",
      definition:
        "The four principles of WCAG: Perceivable, Operable, Understandable, and Robust. All WCAG guidelines fall under one of these principles.",
      category: "WCAG",
    },
    {
      term: "Screen Reader",
      definition:
        "Assistive technology software that reads aloud content displayed on a computer screen. Popular examples include NVDA, JAWS, and VoiceOver.",
      category: "Assistive Technology",
    },
    {
      term: "Semantic HTML",
      definition:
        "HTML elements that convey meaning about their content (e.g., <nav>, <main>, <article>). Preferred over generic <div> elements for accessibility.",
      category: "Technical",
    },
    {
      term: "Skip Link",
      definition:
        "A link that allows keyboard users to skip repetitive navigation and jump directly to main content. Improves navigation efficiency.",
      category: "Navigation",
    },
    {
      term: "Success Criterion",
      definition:
        "A testable statement that defines what must be achieved to meet a WCAG guideline. Each criterion has a level (A, AA, or AAA).",
      category: "WCAG",
    },
    {
      term: "Touch Target",
      definition:
        "The interactive area of a button or link on touch devices. WCAG 2.5.8 (Level AA) requires a minimum size of 24x24 CSS pixels, while WCAG 2.5.5 (Level AAA) requires 44x44 CSS pixels for touch targets.",
      category: "Mobile",
    },
    {
      term: "WCAG",
      definition:
        "Web Content Accessibility Guidelines. International standards developed by the W3C to make web content accessible to people with disabilities.",
      category: "WCAG",
    },
    {
      term: "Live Region",
      definition:
        "An ARIA region that announces dynamic content changes to screen reader users without requiring them to navigate to that area.",
      category: "Technical",
    },
    {
      term: "Focus Trap",
      definition:
        "A technique that keeps keyboard focus within a modal or dialog until it's closed, preventing users from tabbing to background content.",
      category: "Navigation",
    },
    {
      term: "Color Blindness",
      definition:
        "A visual impairment affecting the ability to distinguish certain colors. WCAG requires that color not be the only means of conveying information.",
      category: "Design",
    },
    {
      term: "Captions",
      definition:
        "Text versions of spoken content in videos, synchronized with the audio. Required for WCAG Level A compliance for pre-recorded video content.",
      category: "Media",
    },
    {
      term: "Transcript",
      definition:
        "A text version of audio or video content. Provides an alternative way to access information for deaf and hard-of-hearing users.",
      category: "Media",
    },
    {
      term: "Form Label",
      definition:
        "Text that identifies the purpose of a form input. Must be programmatically associated with the input using <label> or aria-labelledby.",
      category: "Forms",
    },
    {
      term: "Error Message",
      definition:
        "Text that identifies form validation errors. Must be programmatically associated with the input and clearly describe the error.",
      category: "Forms",
    },
    {
      term: "Landmark Role",
      definition:
        "ARIA roles that identify major page regions (banner, navigation, main, complementary, contentinfo). Help users navigate page structure.",
      category: "Technical",
    },
    {
      term: "Focus Order",
      definition:
        "The sequence in which elements receive focus when navigating with a keyboard. Must follow a logical order that matches the visual layout.",
      category: "Navigation",
    },
    {
      term: "Progressive Enhancement",
      definition:
        "A development approach that starts with basic, accessible HTML and adds layers of enhancement (CSS, JavaScript) while maintaining core functionality.",
      category: "Development",
    },
    {
      term: "Graceful Degradation",
      definition:
        "Ensuring that websites remain functional even when advanced features fail or aren't supported. Important for accessibility and compatibility.",
      category: "Development",
    },
    {
      term: "Voice Control",
      definition:
        "Assistive technology that allows users to control computers and navigate websites using voice commands instead of a keyboard or mouse.",
      category: "Assistive Technology",
    },
    {
      term: "Switch Control",
      definition:
        "An assistive technology that allows users to interact with devices using switches, often used by people with limited mobility.",
      category: "Assistive Technology",
    },
    {
      term: "Braille Display",
      definition:
        "A tactile device that converts screen content into Braille characters, used by blind and visually impaired users alongside screen readers.",
      category: "Assistive Technology",
    },
  ]

  const categories = ["All", "General", "Technical", "WCAG", "Navigation", "Design", "Content", "Forms", "Media", "Mobile", "Structure", "Assistive Technology", "Development"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTerms = terms.filter((term) => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || term.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Accessibility Glossary</h1>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground">
                Comprehensive definitions of web accessibility terms, WCAG terminology, and concepts.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Terms Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {filteredTerms.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-xl">{item.term}</CardTitle>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.definition}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTerms.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-muted-foreground">No terms found matching your search.</p>
                </CardContent>
              </Card>
            )}

            {/* Related Resources */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Learn More</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Explore our comprehensive resources to deepen your understanding of web accessibility.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/overview">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Overview</div>
                        <div className="text-xs text-muted-foreground">Learn about WCAG principles</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/faq">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">FAQ</div>
                        <div className="text-xs text-muted-foreground">Common questions answered</div>
                      </div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

