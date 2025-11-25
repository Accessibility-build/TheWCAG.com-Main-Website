import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ShieldCheck, 
  CheckCircle2, 
  Code, 
  Palette, 
  FileText, 
  ArrowRight,
  Wrench,
  Zap
} from "lucide-react"

export default function AccessibilityRemediationServicePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Accessibility Remediation Service",
    description:
      "We fix accessibility issues on your website or application. Code fixes, design updates, and content improvements to achieve WCAG 2.2 compliance.",
    url: "https://thewcag.com/services/accessibility-remediation",
    provider: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
    areaServed: "Worldwide",
    serviceType: "Accessibility Remediation",
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
          name: "Services",
          item: "https://thewcag.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Accessibility Remediation",
          item: "https://thewcag.com/services/accessibility-remediation",
        },
      ],
    },
  }

  const remediationAreas = [
    {
      title: "Code Fixes",
      description: "We fix broken ARIA, add missing labels, improve keyboard navigation, and ensure semantic HTML throughout your codebase.",
      icon: Code,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Design Updates",
      description: "We improve color contrast, fix focus indicators, enhance visual hierarchy, and ensure your design works for everyone.",
      icon: Palette,
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "Content Improvements",
      description: "We add alt text, improve headings, fix form labels, and ensure your content is clear and accessible to all users.",
      icon: FileText,
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Testing & Validation",
      description: "We test all fixes with screen readers, keyboard navigation, and automated tools to ensure everything works.",
      icon: ShieldCheck,
      color: "bg-orange-500/10 text-orange-600",
    },
  ]

  const whatWeFix = [
    "Missing or incorrect ARIA attributes",
    "Keyboard navigation issues",
    "Color contrast problems",
    "Missing alt text on images",
    "Form accessibility issues",
    "Focus management problems",
    "Screen reader compatibility",
    "Mobile accessibility issues",
    "Video/audio captioning",
    "Document structure problems",
    "Error handling and announcements",
    "Dynamic content updates",
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Accessibility Remediation", href: "/services/accessibility-remediation" },
              ]}
            />

            {/* Hero Section */}
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 border border-green-500/20 mb-6 text-sm font-medium">
                <Wrench className="w-4 h-4" />
                Service: Accessibility Remediation
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Accessibility Remediation Service
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                We fix what's broken. Let us clean up your accessibility mess and make your site actually usable by humans.
                <span className="block mt-2 font-semibold text-foreground">
                  No more excuses, just working code.
                </span>
              </p>
            </div>

            {/* Remediation Areas */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What We Fix</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {remediationAreas.map((area) => {
                  const Icon = area.icon
                  return (
                    <Card key={area.title}>
                      <CardHeader>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${area.color} mb-4`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle>{area.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{area.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mb-12 sm:mb-16">
              <div className="bg-gradient-to-br from-primary/5 via-background to-background rounded-2xl p-6 sm:p-8 md:p-12 border border-primary/10">
                <div className="text-center mb-10 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    We Fix Issues on Any Platform
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-2">
                    WordPress, Drupal, Wix, custom websites, or any other tech stack.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                    We work with your existing technology, not against it. Our team understands the unique challenges of each platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Supported Technologies</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {[
                      "WordPress",
                      "Drupal",
                      "Wix",
                      "Shopify",
                      "Squarespace",
                      "React",
                      "Vue.js",
                      "Angular",
                      "Next.js",
                      "PHP",
                      "Python",
                      "Node.js",
                      "Laravel",
                      "Django",
                      "Ruby on Rails",
                      "Custom Sites",
                    ].map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center justify-center p-3 sm:p-4 rounded-lg bg-card border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all"
                      >
                        <span className="text-xs sm:text-sm font-semibold text-center">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-primary/10 mt-6">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Need remediation on a different platform? <Link href="/contact" className="text-primary hover:underline font-semibold">Contact us</Link> for more information.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Fix List */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Common Issues We Fix</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {whatWeFix.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-12 sm:mb-16 bg-muted/50 rounded-2xl p-6 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Our Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Assessment</h3>
                    <p className="text-muted-foreground">
                      We review your audit report (or conduct one) to understand all issues and prioritize fixes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Implementation</h3>
                    <p className="text-muted-foreground">
                      We fix issues systematically, starting with critical blockers and working through to enhancements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Testing</h3>
                    <p className="text-muted-foreground">
                      We test all fixes with multiple assistive technologies and real-world scenarios to ensure they work.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Validation</h3>
                    <p className="text-muted-foreground">
                      Final validation to ensure WCAG 2.2 compliance and provide you with a clean, accessible product.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What You'll Receive</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Fixed Codebase</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>All accessibility issues resolved</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Clean, semantic, and maintainable code</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>WCAG 2.2 AA compliant implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Code comments and documentation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Validation & Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Compliance validation report</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Testing results with assistive technologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Before/after comparison</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Maintenance guidelines for future updates</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-primary/5 rounded-2xl p-8 sm:p-12 border-2 border-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Fix Your Site?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's turn your broken site into an accessible masterpiece. We'll handle the messy parts and deliver a fully compliant solution.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

