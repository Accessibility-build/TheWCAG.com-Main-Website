import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Code, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Store, 
  ArrowRight,
  Smartphone,
  Palette
} from "lucide-react"

export default function IOSAppDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "iOS App Development Service",
    description:
      "Native iOS apps that follow Apple's accessibility guidelines. Swift/SwiftUI, VoiceOver compatible, App Store ready, and modern iOS features. Because everyone deserves great apps.",
    url: "https://thewcag.com/services/ios-app-development",
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
    serviceType: "iOS App Development",
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
          name: "iOS App Development",
          item: "https://thewcag.com/services/ios-app-development",
        },
      ],
    },
  }

  const features = [
    {
      title: "Swift/SwiftUI",
      description: "Built with modern Swift and SwiftUI for beautiful, declarative UIs that are accessible by default.",
      icon: Code,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "VoiceOver Compatible",
      description: "Full VoiceOver support with proper accessibility labels, hints, and traits. Your app works with screen readers out of the box.",
      icon: ShieldCheck,
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "App Store Ready",
      description: "We handle App Store submission and ensure your app meets all Apple guidelines and requirements.",
      icon: Store,
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "Modern iOS Features",
      description: "We use the latest iOS features and APIs, including Dynamic Type, Voice Control, and accessibility enhancements.",
      icon: Zap,
      color: "bg-orange-500/10 text-orange-600",
    },
  ]

  const technologies = [
    "Swift",
    "SwiftUI",
    "UIKit",
    "Combine",
    "Core Data",
    "URLSession",
    "AVFoundation",
    "Accessibility APIs",
  ]

  const included = [
    "VoiceOver testing",
    "Dynamic Type support",
    "App Store submission",
    "App icon & assets",
    "Performance optimization",
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
                { label: "iOS App Development", href: "/services/ios-app-development" },
              ]}
            />

            {/* Hero Section */}
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 border border-orange-500/20 mb-6 text-sm font-medium">
                <Smartphone className="w-4 h-4" />
                Service: iOS App Development
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                iOS App Development
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                Native iOS apps that follow Apple's accessibility guidelines. Because everyone deserves great apps.
                <span className="block mt-2 font-semibold text-foreground">
                  Swift, SwiftUI, VoiceOver support, and App Store ready.
                </span>
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
                      We plan your app architecture, design the UI with Human Interface Guidelines, and ensure accessibility is built-in from the start.
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
                      We build your app with Swift/SwiftUI, implement accessibility features, and ensure it follows Apple's best practices.
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
                      We test with VoiceOver, real devices, and various iOS versions to ensure your app works for everyone.
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
                      We help you submit to the App Store and provide documentation so you can maintain and update your app.
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
                    <CardTitle className="text-lg">Complete iOS App</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Fully functional native iOS app</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>VoiceOver compatible and accessible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>SwiftUI/UIKit with modern iOS features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dynamic Type and accessibility support</span>
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
                        <span>App Store submission assistance</span>
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
                Ready to Build Your iOS App?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's create an iOS app that's accessible, beautiful, and ready for the App Store. Built with Swift/SwiftUI and VoiceOver support from the start.
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

