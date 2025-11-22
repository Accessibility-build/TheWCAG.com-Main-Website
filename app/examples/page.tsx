import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, FormInput, Menu, PlayCircle, Table, GripVertical, AlertCircle } from "lucide-react"

export default function ExamplesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Accessibility Examples",
    description:
      "Explore real-world examples of accessible web components and patterns with practical code examples for forms, navigation, media, and more.",
    url: "https://thewcag.com/examples",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://thewcag.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Accessibility Examples",
          item: "https://thewcag.com/examples",
        },
      ],
    },
  }

  const examples = [
    {
      category: "Forms",
      icon: FormInput,
      items: [
        {
          title: "Accessible Input Fields",
          description: "Proper labels, error messages, and validation",
          criteria: ["3.3.1", "3.3.2", "4.1.2"],
          href: "/examples/accessible-input-fields",
        },
        {
          title: "Date Picker",
          description: "Keyboard accessible date selection with ARIA",
          criteria: ["2.1.1", "4.1.2"],
        },
        {
          title: "Autocomplete",
          description: "Predictive text input with screen reader support",
          criteria: ["3.2.2", "4.1.3"],
        },
        {
          title: "Form Validation",
          description: "Clear error identification and suggestions",
          criteria: ["3.3.1", "3.3.3", "3.3.4"],
        },
      ],
    },
    {
      category: "Navigation",
      icon: Menu,
      items: [
        { title: "Skip Links", description: "Bypass repetitive navigation blocks", criteria: ["2.4.1"] },
        { title: "Accessible Menu", description: "Keyboard navigable dropdown menus", criteria: ["2.1.1", "4.1.2"] },
        { title: "Breadcrumbs", description: "Navigation path with proper landmarks", criteria: ["2.4.8", "4.1.2"] },
        { title: "Tabs Component", description: "ARIA tabs with keyboard support", criteria: ["2.1.1", "4.1.2"] },
      ],
    },
    {
      category: "Media",
      icon: PlayCircle,
      items: [
        { title: "Image Alt Text", description: "Descriptive alternatives for images", criteria: ["1.1.1"] },
        {
          title: "Video Player",
          description: "Captions, transcripts, and audio descriptions",
          criteria: ["1.2.1", "1.2.2", "1.2.3"],
        },
        { title: "Responsive Images", description: "Accessible images across devices", criteria: ["1.1.1", "1.4.5"] },
        { title: "SVG Accessibility", description: "Accessible vector graphics", criteria: ["1.1.1", "4.1.2"] },
      ],
    },
    {
      category: "Interactive",
      icon: GripVertical,
      items: [
        {
          title: "Modal Dialogs",
          description: "Focus management and keyboard trapping",
          criteria: ["2.1.2", "2.4.3", "4.1.2"],
        },
        { title: "Tooltips", description: "Hover and focus accessible help text", criteria: ["1.3.1", "1.4.13"] },
        { title: "Accordions", description: "Expandable content with ARIA", criteria: ["4.1.2", "2.1.1"] },
        { title: "Drag and Drop Alternatives", description: "Keyboard alternatives to dragging", criteria: ["2.5.7"] },
      ],
    },
    {
      category: "Data",
      icon: Table,
      items: [
        { title: "Data Tables", description: "Properly structured tables with headers", criteria: ["1.3.1", "1.3.2"] },
        { title: "Sortable Tables", description: "Accessible sorting controls", criteria: ["2.1.1", "4.1.3"] },
        { title: "Pagination", description: "Keyboard accessible page navigation", criteria: ["2.1.1", "2.4.3"] },
      ],
    },
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-5xl">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Code Examples</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Production-ready accessible components with full code examples and explanations
              </p>
            </div>

            <div className="space-y-8">
              {examples.map((category) => {
                const Icon = category.icon
                return (
                  <section key={category.category}>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      {category.category}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.items.map((item) => {
                        const ItemCard = item.href ? Link : "div"
                        return (
                          <ItemCard key={item.title} href={item.href || "#"} className={item.href ? "block" : ""}>
                            <Card className={`hover:shadow-md transition-shadow ${item.href ? "cursor-pointer" : ""}`}>
                              <CardHeader>
                                <CardTitle className="text-lg flex items-center justify-between">
                                  {item.title}
                                  {item.href && <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />}
                                </CardTitle>
                                <CardDescription className="leading-relaxed">{item.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="flex items-center justify-between">
                                  <div className="flex gap-2 flex-wrap">
                                    {item.criteria.map((criterion) => (
                                      <Badge key={criterion} variant="outline" className="text-xs">
                                        {criterion}
                                      </Badge>
                                    ))}
                                  </div>
                                  {!item.href && <Code2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />}
                                </div>
                              </CardContent>
                            </Card>
                          </ItemCard>
                        )
                      })}
                    </div>
                  </section>
                )
              })}
            </div>

            {/* Coming Soon Notice */}
            <Card className="mt-12 bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                  Full Examples Coming Soon
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  We're building a comprehensive library of copy-paste ready accessible components. In the meantime,
                  check out the code examples on individual criterion pages or explore the W3C WAI-ARIA Authoring
                  Practices Guide for detailed patterns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.w3.org/WAI/ARIA/apg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Visit WAI-ARIA Authoring Practices
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </a>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
