import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  XCircle,
  Code,
  Lightbulb,
  Eye,
  Keyboard,
  FileText,
  Image,
  Palette,
  MousePointer,
  Volume2,
  Shield,
  ArrowRight,
  BookOpen,
  Target,
  Search,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export default function BestPracticesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Web Accessibility Best Practices - Complete Guide",
    description:
      "Comprehensive guide to web accessibility best practices with code examples and actionable recommendations for WCAG 2.2 compliance",
    url: "https://thewcag.com/best-practices",
    author: {
      "@type": "Organization",
      name: "TheWCAG.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
    },
  }

  const practices = [
    {
      category: "Images and Media",
      icon: Image,
      items: [
        {
          title: "Always provide alt text for images",
          good: `<img src="chart.png" alt="Sales increased 25% from Q1 to Q2" />`,
          bad: `<img src="chart.png" alt="chart" />`,
          badAlt: `<img src="chart.png" />`,
          description: "Alt text should be descriptive and convey the same information as the image. Decorative images should have empty alt text.",
          link: "/criteria/1.1.1",
        },
        {
          title: "Provide captions and transcripts for video/audio",
          good: `<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srclang="en" label="English" />
</video>`,
          bad: `<video controls>
  <source src="video.mp4" type="video/mp4" />
</video>`,
          description: "All pre-recorded video content needs captions. Audio content needs transcripts.",
          link: "/criteria/1.2.1",
        },
      ],
    },
    {
      category: "Color and Contrast",
      icon: Palette,
      items: [
        {
          title: "Ensure sufficient color contrast",
          good: `/* Good: 4.5:1 contrast ratio */
color: #000000; /* Black on white */
background: #ffffff;`,
          bad: `/* Bad: 2.1:1 contrast ratio */
color: #999999; /* Gray on white */
background: #ffffff;`,
          description: "Normal text needs 4.5:1 contrast ratio, large text needs 3:1. Don't rely on color alone to convey information.",
          link: "/criteria/1.4.3",
        },
        {
          title: "Don't rely on color alone",
          good: `<span class="error">
  <span aria-label="Error">⚠️</span>
  Email is required
</span>`,
          bad: `<span style="color: red;">Email is required</span>`,
          description: "Use icons, text, or patterns in addition to color to convey information.",
          link: "/criteria/1.4.1",
        },
      ],
    },
    {
      category: "Keyboard Navigation",
      icon: Keyboard,
      items: [
        {
          title: "Make all interactive elements keyboard accessible",
          good: `<button onclick="submit()">Submit</button>`,
          bad: `<div onclick="submit()" class="button">Submit</div>`,
          description: "Use semantic HTML elements (button, a, input) instead of div/span with click handlers.",
          link: "/criteria/2.1.1",
        },
        {
          title: "Provide visible focus indicators",
          good: `button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}`,
          bad: `button:focus {
  outline: none;
}`,
          description: "Users need to see where keyboard focus is. Never remove focus outlines without providing alternatives.",
          link: "/criteria/2.4.7",
        },
        {
          title: "Ensure logical tab order",
          good: `/* Tab order follows visual order */
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>`,
          bad: `/* Tab order doesn't match visual order */
<div style="order: 2">Second</div>
<div style="order: 1">First</div>`,
          description: "Tab order should follow the visual order of content. Use CSS order carefully.",
          link: "/criteria/2.4.3",
        },
      ],
    },
    {
      category: "Forms",
      icon: FileText,
      items: [
        {
          title: "Always associate labels with inputs",
          good: `<label for="email">Email</label>
<input type="email" id="email" name="email" />`,
          bad: `<input type="email" placeholder="Email" />`,
          description: "Every form input needs a visible label. Placeholders are not sufficient.",
          link: "/criteria/3.3.2",
        },
        {
          title: "Provide clear error messages",
          good: `<input 
  type="email" 
  id="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>`,
          bad: `<input type="email" />
<!-- Error shown elsewhere without connection -->`,
          description: "Error messages should be associated with inputs using aria-describedby and clearly explain what's wrong.",
          link: "/criteria/3.3.1",
        },
        {
          title: "Mark required fields clearly",
          good: `<label for="name">
  Name <span aria-label="required">*</span>
</label>
<input type="text" id="name" aria-required="true" />`,
          bad: `<label>Name</label>
<input type="text" required />`,
          description: "Required fields should be marked visually and programmatically (aria-required).",
          link: "/criteria/3.3.2",
        },
      ],
    },
    {
      category: "Structure and Semantics",
      icon: Code,
      items: [
        {
          title: "Use proper heading hierarchy",
          good: `<h1>Main Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>`,
          bad: `<h1>Main Title</h1>
  <h3>Section</h3>
    <h5>Subsection</h5>`,
          description: "Headings should be nested properly (H1 → H2 → H3). Don't skip levels.",
          link: "/criteria/2.4.6",
        },
        {
          title: "Use semantic HTML elements",
          good: `<nav>...</nav>
<main>...</main>
<article>...</article>
<aside>...</aside>
<footer>...</footer>`,
          bad: `<div class="nav">...</div>
<div class="main">...</div>
<div class="article">...</div>`,
          description: "Use semantic HTML5 elements to convey structure and meaning.",
          link: "/criteria/4.1.2",
        },
        {
          title: "Provide skip links",
          good: `<a href="#main-content" class="skip-link">
  Skip to main content
</a>
<main id="main-content">...</main>`,
          bad: `<!-- No skip link -->
<header>...</header>
<nav>...</nav>
<main>...</main>`,
          description: "Skip links allow keyboard users to bypass repetitive navigation.",
          link: "/criteria/2.4.1",
        },
      ],
    },
    {
      category: "ARIA and Dynamic Content",
      icon: Shield,
      items: [
        {
          title: "Use ARIA labels for icon-only buttons",
          good: `<button aria-label="Close dialog">
  <span aria-hidden="true">×</span>
</button>`,
          bad: `<button>
  <span>×</span>
</button>`,
          description: "Icon-only buttons need aria-label to be accessible to screen readers.",
          link: "/criteria/4.1.2",
        },
        {
          title: "Use ARIA live regions for dynamic content",
          good: `<div role="alert" aria-live="polite">
  Form submitted successfully
</div>`,
          bad: `<div>
  Form submitted successfully
</div>`,
          description: "Use aria-live regions to announce dynamic content changes to screen reader users.",
          link: "/criteria/4.1.3",
        },
        {
          title: "Hide decorative content from screen readers",
          good: `<div aria-hidden="true">
  <span>Decorative icon</span>
</div>`,
          bad: `<div>
  <span>Decorative icon</span>
</div>`,
          description: "Use aria-hidden to hide purely decorative content from assistive technologies.",
          link: "/criteria/1.1.1",
        },
      ],
    },
  ]

  const generalTips = [
    {
      tip: "Test with real users",
      description: "Automated tools catch about 30% of issues. Test with people who use assistive technologies.",
      icon: Eye,
    },
    {
      tip: "Start early in the design process",
      description: "It's 10x easier to build accessibility in from the start than to retrofit it later.",
      icon: Lightbulb,
    },
    {
      tip: "Use semantic HTML first",
      description: "Semantic HTML is more accessible by default. Only use ARIA when HTML isn't sufficient.",
      icon: Code,
    },
    {
      tip: "Test with keyboard only",
      description: "Unplug your mouse and navigate your site using only the keyboard. This reveals many issues.",
      icon: Keyboard,
    },
    {
      tip: "Test with screen readers",
      description: "Try NVDA (free), VoiceOver (Mac), or Narrator (Windows) to experience your site as users do.",
      icon: Volume2,
    },
    {
      tip: "Check color contrast",
      description: "Use tools to verify contrast ratios. Don't trust your eyes alone.",
      icon: Palette,
    },
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Best Practices", href: "/best-practices" }]} />
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Accessibility Best Practices</h1>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Last Updated: January 2025</p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Comprehensive guide to web accessibility best practices with real code examples. Learn what to do and
                what to avoid for WCAG 2.2 compliance.
              </p>
            </div>

            {/* Practices by Category */}
            <div className="space-y-12 mb-12">
              {practices.map((category, categoryIndex) => {
                const CategoryIcon = category.icon
                return (
                  <section key={categoryIndex}>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                      <CategoryIcon className="h-7 w-7 text-primary" />
                      {category.category}
                    </h2>
                    <div className="space-y-6">
                      {category.items.map((item, itemIndex) => (
                        <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                          <CardHeader>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                                  <span className="text-sm font-semibold">Good Example</span>
                                </div>
                                <pre className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg overflow-x-auto text-sm border border-green-200 dark:border-green-800">
                                  <code>{item.good}</code>
                                </pre>
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <XCircle className="h-4 w-4 text-red-600" />
                                  <span className="text-sm font-semibold">Bad Example</span>
                                </div>
                                <pre className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg overflow-x-auto text-sm border border-red-200 dark:border-red-800">
                                  <code>{item.bad || item.badAlt}</code>
                                </pre>
                              </div>
                            </div>
                            <div>
                              <Button asChild variant="outline" size="sm">
                                <Link href={item.link}>
                                  Learn More <ArrowRight className="h-3 w-3 ml-1" />
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>

            {/* General Tips */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  General Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {generalTips.map((tip, index) => {
                    const TipIcon = tip.icon
                    return (
                      <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border">
                        <TipIcon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1">{tip.tip}</h3>
                          <p className="text-sm text-muted-foreground">{tip.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="text-2xl">Related Resources</CardTitle>
                <CardDescription>Continue learning with these related guides and resources.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/how-to-make-website-accessible">
                      <Target className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">How to Make Website Accessible</div>
                        <div className="text-xs text-muted-foreground">Step-by-step implementation guide</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Complete compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/testing-guide">
                      <Search className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Testing Guide</div>
                        <div className="text-xs text-muted-foreground">Comprehensive testing methods</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/examples">
                      <Code className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Code Examples</div>
                        <div className="text-xs text-muted-foreground">Accessible code patterns</div>
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

