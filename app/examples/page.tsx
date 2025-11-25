import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, FormInput, Menu, PlayCircle, Table, GripVertical, AlertCircle, CheckCircle2, Clock } from "lucide-react"

export default function ExamplesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Accessibility Examples - Real-World WCAG Implementation",
    description:
      "Explore real-world examples of accessible web components and patterns with practical code examples for forms, navigation, media, and more.",
    url: "https://thewcag.com/examples",
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Accessibility Code Examples",
      description: "Collection of accessible web component examples",
      numberOfItems: 12,
    },
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
      category: "Data Display",
      icon: Table,
      items: [
        {
          title: "Tables",
          description: "Semantic HTML and ARIA table patterns with sorting and responsive layouts",
          criteria: ["1.3.1", "1.3.2", "2.1.1", "4.1.3"],
          href: "/examples/tables",
        },
        {
          title: "Pagination",
          description: "Keyboard accessible page navigation with proper ARIA",
          criteria: ["2.1.1", "2.4.3"],
          href: "/examples/pagination",
        },
        {
          title: "Lists",
          description: "Semantic lists with proper structure and ARIA patterns",
          criteria: ["1.3.1"],
          href: "/examples/lists",
        },
        {
          title: "Cards",
          description: "Accessible card components with proper heading hierarchy",
          criteria: ["1.3.1", "2.1.1"],
          href: "/examples/cards",
        },
      ],
    },
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
          title: "Forms",
          description: "Complete form patterns with validation, multi-step, and fieldset groups",
          criteria: ["3.3.1", "3.3.2", "3.3.3", "4.1.2"],
          href: "/examples/forms",
        },
        {
          title: "Dropdowns & Selects",
          description: "Native and custom select components with ARIA combobox pattern",
          criteria: ["2.1.1", "4.1.2", "4.1.3"],
          href: "/examples/dropdowns-selects",
        },
      ],
    },
    {
      category: "Navigation",
      icon: Menu,
      items: [
        {
          title: "Navigation",
          description: "Semantic nav, breadcrumbs, skip links, and tabs patterns",
          criteria: ["2.1.1", "2.4.1", "2.4.8", "4.1.2"],
          href: "/examples/navigation",
        },
      ],
    },
    {
      category: "Interactive",
      icon: GripVertical,
      items: [
        {
          title: "Buttons & Links",
          description: "Semantic buttons, icon buttons, states, and when to use which",
          criteria: ["2.1.1", "2.4.4", "4.1.2"],
          href: "/examples/buttons-links",
        },
        {
          title: "Modals & Dialogs",
          description: "Focus management, keyboard trapping, and ARIA dialog patterns",
          criteria: ["2.1.2", "2.4.3", "4.1.2"],
          href: "/examples/modals-dialogs",
        },
        {
          title: "Accordions",
          description: "Native details/summary and ARIA accordion patterns",
          criteria: ["2.1.1", "4.1.2"],
          href: "/examples/accordions",
        },
        {
          title: "Tooltips",
          description: "Hover and focus accessible help text with ARIA patterns",
          criteria: ["1.3.1", "1.4.13", "2.1.1"],
          href: "/examples/tooltips",
        },
      ],
    },
    {
      category: "Feedback",
      icon: AlertCircle,
      items: [
        {
          title: "Progress Indicators",
          description: "Native progress and ARIA progressbar patterns with status announcements",
          criteria: ["4.1.3"],
          href: "/examples/progress-indicators",
        },
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
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">Code Examples</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
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
                        const isAvailable = "href" in item && !!item.href
                        const ItemCard = isAvailable ? Link : "div"
                        const itemHref = "href" in item ? item.href : "#"
                        return (
                          <ItemCard key={item.title} href={itemHref} className={isAvailable ? "block" : ""}>
                            <Card className={`hover:shadow-md transition-shadow ${isAvailable ? "cursor-pointer" : "opacity-90"}`}>
                              <CardHeader>
                                <CardTitle className="text-lg flex items-center justify-between gap-2">
                                  <span>{item.title}</span>
                                  <div className="flex items-center gap-2 shrink-0">
                                    {isAvailable ? (
                                      <Badge variant="default" className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1 text-xs">
                                        <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                                        Available
                                      </Badge>
                                    ) : (
                                      <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                                        <Clock className="h-3 w-3" aria-hidden="true" />
                                        Coming Soon
                                      </Badge>
                                    )}
                                    {isAvailable && <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />}
                                  </div>
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

            {/* Additional Resources */}
            <Card className="mt-12 bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" aria-hidden="true" />
                  Additional Resources
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Explore more accessibility patterns and examples from the W3C WAI-ARIA Authoring Practices Guide.
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
