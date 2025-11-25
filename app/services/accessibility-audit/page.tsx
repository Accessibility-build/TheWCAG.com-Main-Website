import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Users, 
  Target,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code
} from "lucide-react"

export default function AccessibilityAuditServicePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Accessibility Audit Service",
    description:
      "Comprehensive WCAG 2.2 compliance audit of your website or application. We identify all accessibility issues and provide detailed recommendations.",
    url: "https://thewcag.com/services/accessibility-audit",
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
    serviceType: "Accessibility Audit",
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
          name: "Accessibility Audit",
          item: "https://thewcag.com/services/accessibility-audit",
        },
      ],
    },
  }

  const auditProcess = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "We review your site structure, technology stack, and current accessibility state.",
      icon: Search,
    },
    {
      step: 2,
      title: "Automated Testing",
      description: "We run comprehensive automated tests using industry-leading tools to catch obvious issues.",
      icon: Zap,
    },
    {
      step: 3,
      title: "Manual Testing",
      description: "Our experts manually test with screen readers, keyboard navigation, and real-world scenarios.",
      icon: Users,
    },
    {
      step: 4,
      title: "Detailed Report",
      description: "You receive a comprehensive report with prioritized issues, screenshots, and actionable recommendations.",
      icon: FileText,
    },
  ]

  const whatWeCheck = [
    "WCAG 2.2 Level AA compliance",
    "Keyboard navigation functionality",
    "Screen reader compatibility",
    "Color contrast ratios",
    "Alt text for images",
    "Form accessibility",
    "ARIA implementation",
    "Focus management",
    "Mobile accessibility",
    "Document structure",
    "Video/audio captions",
    "Error handling",
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
                { label: "Accessibility Audit", href: "/services/accessibility-audit" },
              ]}
            />

            {/* Hero Section */}
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 mb-6 text-sm font-medium">
                <Search className="w-4 h-4" />
                Service: Accessibility Audit
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Accessibility Audit Service
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                We'll find every accessibility issue on your site. Yes, even the ones you didn't know existed. 
                <span className="block mt-2 font-semibold text-foreground">
                  No stone left unturned, no button left untested.
                </span>
              </p>
            </div>

            {/* What's Included */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Comprehensive Testing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Automated and manual testing covering all WCAG 2.2 success criteria. We test with real assistive technologies and real users.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Detailed Report
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A comprehensive report with prioritized issues, screenshots, code examples, and step-by-step remediation guidance.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-600" />
                      Priority Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We tell you what to fix first. Critical issues that block users get top priority, so you can make the biggest impact quickly.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-green-600" />
                      Compliance Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Clear compliance status for WCAG 2.2 Level A, AA, and AAA. Know exactly where you stand and what it takes to get compliant.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Audit Process */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Our Audit Process</h2>
              <div className="space-y-6">
                {auditProcess.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.step} className="flex gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mb-12 sm:mb-16">
              <div className="bg-gradient-to-br from-primary/5 via-background to-background rounded-2xl p-6 sm:p-8 md:p-12 border border-primary/10">
                <div className="text-center mb-10 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    We Audit All Platforms
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-2">
                    No matter what platform or technology you're using, we can audit it.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                    From content management systems to custom applications, we test all platforms thoroughly.
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
                    Using a different platform? <Link href="/contact" className="text-primary hover:underline font-semibold">Contact us</Link> to discuss your specific needs.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Check */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What We Check</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {whatWeCheck.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What You'll Receive</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Comprehensive Audit Report</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Executive summary with compliance status</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Detailed issue list with priority levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Screenshots and code examples for each issue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Step-by-step remediation guidance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Additional Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>WCAG 2.2 compliance score breakdown</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Testing methodology documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Follow-up consultation call (optional)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Accessibility roadmap recommendations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-primary/5 rounded-2xl p-8 sm:p-12 border-2 border-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Find Out What's Broken?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's audit your site and get you on the path to accessibility compliance. We'll provide a detailed report with actionable recommendations.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Get Your Audit
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

