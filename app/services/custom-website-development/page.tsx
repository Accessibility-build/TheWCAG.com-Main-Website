import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Monitor,
  CheckCircle2,
  Code,
  Palette,
  Search,
  ArrowRight,
  Zap,
  ShieldCheck,
  Smartphone
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Website Development Services - WCAG 2.2 Compliant | TheWCAG",
  description:
    "Custom accessible website development with WCAG 2.2 compliance built-in. Modern, responsive, SEO-optimized websites designed for accessibility from the ground up.",
  openGraph: {
    title: "Accessible Website Development Services",
    description:
      "Custom website development with accessibility built-in. WCAG 2.2 compliant, responsive, and optimized for all users.",
    url: "https://thewcag.com/services/custom-website-development",
    type: "website",
  },
}

export default function CustomWebsiteDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Website Development Service",
    description:
      "Beautiful, accessible websites built from scratch. WCAG 2.2 AA compliant, modern stack, fully responsive, and SEO optimized. Because starting right is easier than fixing later.",
    url: "https://thewcag.com/services/custom-website-development",
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
    serviceType: "Custom Website Development",
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
          name: "Custom Website Development",
          item: "https://thewcag.com/services/custom-website-development",
        },
      ],
    },
  }

  const features = [
    {
      title: "WCAG 2.2 AA Compliant",
      description: "Built with accessibility from day one. No retrofitting, no excuses, just accessible code.",
      icon: ShieldCheck,
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Modern Tech Stack",
      description: "We use the latest frameworks and tools. React, Next.js, TypeScript. Whatever fits your needs.",
      icon: Code,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Fully Responsive",
      description: "Works beautifully on desktop, tablet, and mobile. Because your users are everywhere.",
      icon: Smartphone,
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "SEO Optimized",
      description: "Built for search engines and humans. Fast, semantic, and discoverable.",
      icon: Search,
      color: "bg-orange-500/10 text-orange-600",
    },
  ]

  const whatWeBuild = [
    "Corporate websites",
    "E-commerce platforms",
    "Web applications",
    "Landing pages",
    "Portfolio sites",
    "Blog platforms",
    "SaaS products",
    "Admin dashboards",
  ]

  const included = [
    "Accessibility audit & testing",
    "Responsive design",
    "SEO optimization",
    "Performance optimization",
    "Content management system (if needed)",
    "Analytics integration",
    "Documentation",
    "Training & handoff",
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
                { label: "Custom Website Development", href: "/services/custom-website-development" },
              ]}
            />

            {/* Hero Section */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Monitor className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Custom Website Development</h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mb-6">
                Beautiful, accessible websites built from scratch. Because starting right is easier than fixing later. No shortcuts, no compromises, just good, accessible code.
              </p>
            </div>

            {/* Features */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What You Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <Card key={feature.title}>
                      <CardHeader>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
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
                    We Build With Your Preferred Tech Stack
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-2">
                    Need a WordPress site? Drupal? Wix? Custom React app?
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                    We build accessible websites using whatever technology stack fits your needs and preferences.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">CMS Platforms</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {[
                      "WordPress",
                      "Drupal",
                      "Wix",
                      "Shopify",
                      "Squarespace",
                      "Custom CMS",
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
                  <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Frontend Technologies</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {[
                      "React",
                      "Next.js",
                      "Vue.js",
                      "Angular",
                      "TypeScript",
                      "Svelte",
                      "Astro",
                      "Remix",
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
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {[
                      "Node.js",
                      "PHP",
                      "Python",
                      "Laravel",
                      "Django",
                      "Ruby on Rails",
                      "ASP.NET",
                      "Java",
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
                    Have a specific technology in mind? <Link href="/contact" className="text-primary hover:underline font-semibold">Let's discuss</Link> your project.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Build */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What We Build</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {whatWeBuild.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included */}
            <div className="mb-12 sm:mb-16 bg-muted/50 rounded-2xl p-6 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Our Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Discovery & Planning</h3>
                    <p className="text-muted-foreground">
                      We understand your goals, audience, and requirements. Then we plan the architecture and design approach.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Design & Development</h3>
                    <p className="text-muted-foreground">
                      We design and build your site with accessibility built-in from the start. No retrofitting needed.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Testing & Refinement</h3>
                    <p className="text-muted-foreground">
                      We test with assistive technologies, real users, and automated tools to ensure everything works perfectly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Launch & Handoff</h3>
                    <p className="text-muted-foreground">
                      We launch your site and provide documentation and training so you can maintain it going forward.
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
                    <CardTitle className="text-lg">Complete Website</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Fully functional, accessible website</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>WCAG 2.2 AA compliant from day one</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Responsive across all devices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>SEO optimized and fast-loading</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Documentation & Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Complete source code and documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Deployment and hosting setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Training session for your team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Post-launch support period</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-primary/5 rounded-2xl p-8 sm:p-12 border-2 border-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Build Something Great?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's build your accessible website the right way, from the ground up. No retrofitting, no compromises.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Start Your Project
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

