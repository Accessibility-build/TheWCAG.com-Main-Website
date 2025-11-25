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
  Code, 
  Smartphone, 
  Monitor, 
  Search, 
  FileCheck, 
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Users,
  Target
} from "lucide-react"

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Accessibility Services - TheWCAG.com",
    description:
      "Professional accessibility services including audits, remediation, custom development, and mobile app development. We help you build accessible digital experiences.",
    url: "https://thewcag.com/services",
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
    serviceType: [
      "Accessibility Audit",
      "Accessibility Remediation",
      "Custom Website Development",
      "Android App Development",
      "iOS App Development",
    ],
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
      ],
    },
  }

  const services = [
    {
      id: "accessibility-audit",
      title: "Accessibility Audit",
      description: "Comprehensive WCAG 2.2 compliance audit of your website or app. We'll find every issue (yes, even the embarrassing ones).",
      icon: Search,
      href: "/services/accessibility-audit",
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      features: ["Automated & Manual Testing", "WCAG 2.2 AA Compliance", "Detailed Report", "Priority Recommendations"],
    },
    {
      id: "accessibility-remediation",
      title: "Accessibility Remediation",
      description: "We fix what's broken. Let us clean up your accessibility mess and make your site actually usable by humans.",
      icon: ShieldCheck,
      href: "/services/accessibility-remediation",
      color: "bg-green-500/10 text-green-600 border-green-500/20",
      features: ["Code Fixes", "Design Updates", "Content Improvements", "Testing & Validation"],
    },
    {
      id: "custom-website",
      title: "Custom Website Development",
      description: "Beautiful, accessible websites built from scratch. Because starting right is easier than fixing later.",
      icon: Monitor,
      href: "/services/custom-website-development",
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      features: ["WCAG 2.2 AA Compliant", "Modern Stack", "Fully Responsive", "SEO Optimized"],
    },
    {
      id: "android-app",
      title: "Android App Development",
      description: "Native Android apps that work for everyone. Accessibility isn't optional—it's how good apps are built.",
      icon: Smartphone,
      href: "/services/android-app-development",
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      features: ["Material Design", "Accessibility Built-in", "Performance Optimized", "Play Store Ready"],
    },
    {
      id: "ios-app",
      title: "iOS App Development",
      description: "Native iOS apps that follow Apple's accessibility guidelines. Because everyone deserves great apps.",
      icon: Code,
      href: "/services/ios-app-development",
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
      features: ["Swift/SwiftUI", "VoiceOver Compatible", "App Store Ready", "Modern iOS Features"],
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
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
              ]}
            />

            {/* Hero Section - Quirky & Funny */}
            <div className="mb-12 sm:mb-16 md:mb-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 border border-orange-500/20 mb-6 text-sm font-medium">
                <AlertTriangle className="w-4 h-4" />
                Welcome to the Hell
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Oops, You're Here? 😅
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                Well, if you'd focused on accessibility from the start, you probably wouldn't need us. 
                <span className="block mt-2 font-semibold text-foreground">
                  But since you're here, we're ready to help! 🚀
                </span>
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer professional accessibility services to get your digital products back on track. 
                No judgment, just results.
              </p>
            </div>

            {/* Services Grid */}
            <div className="mb-12 sm:mb-16">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Here's What We Offer
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  From audits to full development, we've got you covered. Pick your poison.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                      <CardHeader>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.color} mb-4`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl sm:text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm sm:text-base">
                              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href={service.href}>
                          <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mb-12 sm:mb-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-primary/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  We Work With Your Tech Stack
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                  No matter what platform or technology you're using, we've got you covered. 
                  <span className="block mt-2 font-semibold text-foreground">
                    WordPress, Drupal, Wix, custom websites, or anything else—we handle it all.
                  </span>
                </p>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our team is experienced with all major platforms and frameworks. We don't force you to change your tech stack—we make your existing setup accessible.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
                {[
                  "WordPress",
                  "Drupal",
                  "Wix",
                  "Shopify",
                  "Squarespace",
                  "React",
                  "Next.js",
                  "Vue.js",
                  "Angular",
                  "Custom HTML/CSS/JS",
                  "PHP",
                  "Python",
                  "Node.js",
                  "Laravel",
                  "Django",
                  "Ruby on Rails",
                  "ASP.NET",
                  "Java",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center justify-center p-3 sm:p-4 rounded-lg bg-background border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-medium text-center">{tech}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm sm:text-base text-muted-foreground mt-6">
                And many more! Don't see your tech stack? <Link href="/contact" className="text-primary hover:underline font-semibold">Contact us</Link>—we probably support it.
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-12 sm:mb-16 bg-muted/50 rounded-2xl p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Why Work With Us?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Because we actually know what we're doing (unlike some people we've seen).
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">WCAG 2.2 Experts</h3>
                  <p className="text-sm text-muted-foreground">
                    We live and breathe accessibility standards. Literally.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Fast Turnaround</h3>
                  <p className="text-sm text-muted-foreground">
                    We work efficiently because we've seen it all before.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">User-Focused</h3>
                  <p className="text-sm text-muted-foreground">
                    We build for real people, not just compliance checkboxes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">
                    We've helped countless sites become actually accessible.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-primary/5 rounded-2xl p-8 sm:p-12 border-2 border-primary/20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to Fix This?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's talk about your project. We promise not to judge (too much). 😉
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

