import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "Professional Accessibility Services - Audits, Development & Remediation | TheWCAG",
  description:
    "Expert accessibility services: WCAG 2.2 audits, accessibility remediation, custom website development, iOS & Android app development. We build accessible digital experiences worldwide.",
  keywords: [
    "accessibility services",
    "accessibility audit",
    "accessibility remediation",
    "accessible web development",
    "accessible app development",
    "WCAG consulting",
  ],
  openGraph: {
    title: "Professional Accessibility Services - Build Accessible Digital Experiences",
    description:
      "Expert accessibility services including audits, remediation, custom website development, and mobile app development. WCAG 2.2 compliance guaranteed.",
    url: "https://thewcag.com/services",
    type: "website",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Professional Accessibility Services",
      },
    ],
  },
  alternates: {
    canonical: "https://thewcag.com/services",
  },
}

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
      description: "Native Android apps that work for everyone. Accessibility isn't optional, it's how good apps are built.",
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

            {/* Hero Section */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <ShieldCheck className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Accessibility Solutions for Your Business</h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mb-6">
                Comprehensive accessibility services to ensure your digital products work for everyone. From WCAG 2.2 audits to custom development, we deliver professional solutions tailored to your needs.
              </p>
            </div>

            {/* Services Grid */}
            <div className="mb-12 sm:mb-16">
              <div className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Our Services
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                  Comprehensive accessibility solutions tailored to your project needs.
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
            <div className="mb-12 sm:mb-16">
              <div className="bg-gradient-to-br from-primary/5 via-background to-background rounded-2xl p-6 sm:p-8 md:p-12 border border-primary/10">
                <div className="text-center mb-10 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                    We Work With Your Tech Stack
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-2">
                    No matter what platform or technology you're using, we've got you covered.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                    WordPress, Drupal, Wix, custom websites, or anything else. We work with your existing technology and make it accessible.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Platforms We Support</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {[
                      "WordPress",
                      "Drupal",
                      "Wix",
                      "Shopify",
                      "Squarespace",
                      "Custom HTML",
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

                <div className="mb-8">
                  <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Frontend Frameworks</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {[
                      "React",
                      "Next.js",
                      "Vue.js",
                      "Angular",
                      "TypeScript",
                      "Svelte",
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

                <div className="mb-8">
                  <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Backend & Languages</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {[
                      "Node.js",
                      "PHP",
                      "Python",
                      "Laravel",
                      "Django",
                      "Ruby on Rails",
                      "ASP.NET",
                      "Java",
                      "Go",
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

                <div className="text-center pt-4 border-t border-primary/10">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Don't see your tech stack listed? <Link href="/contact" className="text-primary hover:underline font-semibold">Contact us</Link> to discuss your specific needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-12 sm:mb-16 bg-muted/50 rounded-2xl p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Why Work With Us
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  We bring expertise, experience, and a commitment to delivering real results.
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
                Ready to Improve Your Accessibility
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us today to discuss your accessibility needs and how we can help improve your digital products.
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

