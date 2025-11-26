import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Smartphone,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Store,
  ArrowRight,
  Code,
  Palette
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessible Android App Development - TalkBack & Material Design | TheWCAG",
  description:
    "Professional Android app development with accessibility built-in. TalkBack support, Material Design accessibility, Kotlin expertise. Apps that work for everyone.",
  openGraph: {
    title: "Accessible Android App Development Services",
    description:
      "Expert Android development with TalkBack support and Material Design accessibility. Native Kotlin apps built for all users.",
    url: "https://thewcag.com/services/android-app-development",
    type: "website",
  },
}

export default function AndroidAppDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Android App Development Service",
    description:
      "Native Android apps that work for everyone. Material Design, accessibility built-in, performance optimized, and Play Store ready. Accessibility isn't optional, it's how good apps are built.",
    url: "https://thewcag.com/services/android-app-development",
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
    serviceType: "Android App Development",
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
          name: "Android App Development",
          item: "https://thewcag.com/services/android-app-development",
        },
      ],
    },
  }

  const features = [
    {
      title: "Material Design",
      description: "Following Google's Material Design guidelines for beautiful, consistent, and accessible UI components.",
      icon: Palette,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Accessibility Built-in",
      description: "TalkBack support, proper content descriptions, touch target sizes, and all accessibility best practices from day one.",
      icon: ShieldCheck,
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Performance Optimized",
      description: "Fast, efficient apps that don't drain batteries or waste data. Because performance is an accessibility feature too.",
      icon: Zap,
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      title: "Play Store Ready",
      description: "We handle the Play Store submission process and ensure your app meets all Google Play requirements.",
      icon: Store,
      color: "bg-purple-500/10 text-purple-600",
    },
  ]

  const technologies = [
    "Kotlin",
    "Java",
    "Jetpack Compose",
    "Material Design 3",
    "Android Accessibility APIs",
    "Room Database",
    "Retrofit",
    "Coroutines",
  ]

  const included = [
    "Accessibility testing with TalkBack",
    "Material Design implementation",
    "Performance optimization",
    "Play Store submission",
    "App icon & assets",
    "Documentation",
    "Code handoff",
    "Maintenance support",
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
                { label: "Android App Development", href: "/services/android-app-development" },
              ]}
            />

            {/* Hero Section */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Smartphone className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Android App Development</h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mb-6">
                Native Android apps that work for everyone. Accessibility isn't optional, it's how good apps are built. Material Design, TalkBack support, and performance that doesn't suck.
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

            {/* Technologies */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Technologies We Use</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center justify-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm sm:text-base font-medium">{tech}</span>
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
                    <h3 className="font-semibold mb-2 text-lg">Planning & Design</h3>
                    <p className="text-muted-foreground">
                      We plan your app architecture, design the UI with Material Design, and ensure accessibility is considered from the start.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Development</h3>
                    <p className="text-muted-foreground">
                      We build your app with Kotlin/Java, implement accessibility features, and ensure it follows Android best practices.
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
                      We test with TalkBack, real devices, and various Android versions to ensure your app works for everyone.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Launch</h3>
                    <p className="text-muted-foreground">
                      We help you submit to the Play Store and provide documentation so you can maintain and update your app.
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
                    <CardTitle className="text-lg">Complete Android App</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Fully functional native Android app</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>TalkBack compatible and accessible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Material Design 3 implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Optimized for performance and battery</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">App Store & Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Play Store submission assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Complete source code and documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>App icon, screenshots, and store assets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Maintenance and update support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-primary/5 rounded-2xl p-8 sm:p-12 border-2 border-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Build Your Android App?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's create an Android app that's accessible, performant, and ready for the Play Store. Built with Material Design and accessibility from the start.
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

