import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Scale, Heart, Users, Search, Code, Smartphone, Monitor, CheckCircle2, Target, Zap } from "lucide-react"

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About TheWCAG.com",
    description:
      "TheWCAG.com is an independent educational resource dedicated to simplifying web accessibility guidelines for developers, designers, and content creators.",
    url: "https://thewcag.com/about",
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
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
          name: "About",
          item: "https://thewcag.com/about",
        },
      ],
    },
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="container relative z-10">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                ]}
              />
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Making the web accessible for <span className="text-primary">everyone</span>.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-4">
                  We are a team of experts working to maintain accessibility standards and help others achieve the same. 
                  TheWCAG.com is an independent educational resource dedicated to simplifying web accessibility
                  guidelines for developers, designers, and content creators.
                </p>
                <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-2xl">
                  We believe accessibility should be approachable, practical, and integrated into every web project from the start.
                </p>
              </div>
            </div>
            {/* Abstract background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent -z-10 rounded-bl-[100px]" />
          </section>

          {/* Mission & Disclaimer Grid */}
          <section className="py-12 md:py-20 bg-muted/30">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We believe that the internet should be accessible to everyone, regardless of ability or
                      circumstance. Our mission is to demystify the Web Content Accessibility Guidelines (WCAG) and
                      provide practical, actionable advice to help you build inclusive digital experiences.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-background p-6 rounded-xl border shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Accuracy First</h3>
                      <p className="text-sm text-muted-foreground">
                        We meticulously review our content against official W3C specifications to ensure high accuracy.
                      </p>
                    </div>
                    <div className="bg-background p-6 rounded-xl border shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                        <Heart className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="font-semibold mb-2">Human Centered</h3>
                      <p className="text-sm text-muted-foreground">
                        We focus on the people behind the guidelines, explaining <em>why</em> accessibility matters.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-2xl border p-8 md:p-10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -mr-8 -mt-8" />

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                      <Scale className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h2 className="text-2xl font-bold">Important Disclaimer</h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>
                        TheWCAG.com is an independent educational guide and is NOT affiliated with, endorsed by, or a
                        representative of the World Wide Web Consortium (W3C) or the Web Accessibility Initiative (WAI).
                      </strong>
                    </p>
                    <p>
                      While we strive for 100% accuracy and regularly update our content to reflect the latest WCAG 2.2
                      standards, this website should be used for educational purposes only.
                    </p>
                    <p>
                      This guide does not constitute legal advice. For official compliance verification or legal
                      matters, please consult with a qualified accessibility auditor or legal counsel specializing in
                      digital accessibility law.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <p className="text-sm font-medium mb-2">Official Resources:</p>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center"
                        >
                          Official W3C WCAG Overview
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.w3.org/TR/WCAG22/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center"
                        >
                          WCAG 2.2 Technical Specification
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Expertise / Team Section */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are a dedicated team of accessibility experts, developers, and designers united by a single goal: 
                  to make the digital world accessible to everyone. With years of experience in WCAG compliance, 
                  assistive technologies, and inclusive design, we bridge the gap between complex regulations and practical implementation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="text-center p-6 rounded-xl bg-background border shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Certified Experts</h3>
                    <p className="text-muted-foreground">
                      Our team holds industry-recognized certifications in web accessibility and stays up-to-date with the latest WCAG updates.
                    </p>
                 </div>
                 <div className="text-center p-6 rounded-xl bg-background border shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">User-Centric Approach</h3>
                    <p className="text-muted-foreground">
                      We prioritize real-user experiences, testing with assistive technologies to ensure genuine usability beyond just compliance.
                    </p>
                 </div>
                 <div className="text-center p-6 rounded-xl bg-background border shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
                      <Code className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                    <p className="text-muted-foreground">
                      From complex web applications to native mobile apps, we provide robust technical solutions that integrate seamlessly with your stack.
                    </p>
                 </div>
              </div>
            </div>
          </section>

          {/* How We Help / Services Summary */}
          <section className="py-20 bg-muted/30">
             <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Help</h2>
                    <p className="text-lg text-muted-foreground">
                      Whether you need a one-time audit or ongoing support, we offer a range of services to help you achieve and maintain accessibility.
                    </p>
                  </div>
                  <Button asChild variant="outline">
                    <Link href="/services">
                      View All Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link href="/services/accessibility-audit" className="group block">
                    <div className="h-full p-6 rounded-xl bg-background border transition-all hover:shadow-md hover:border-primary/50">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Search className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Audits & Testing</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive WCAG compliance audits with detailed reporting.</p>
                    </div>
                  </Link>

                  <Link href="/services/accessibility-remediation" className="group block">
                    <div className="h-full p-6 rounded-xl bg-background border transition-all hover:shadow-md hover:border-primary/50">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                         <ShieldCheck className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Remediation</h3>
                      <p className="text-sm text-muted-foreground">Expert code fixes to resolve accessibility issues in your existing codebase.</p>
                    </div>
                  </Link>

                  <Link href="/services/custom-website-development" className="group block">
                    <div className="h-full p-6 rounded-xl bg-background border transition-all hover:shadow-md hover:border-primary/50">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Monitor className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Web Development</h3>
                      <p className="text-sm text-muted-foreground">Accessible-first websites built to modern standards.</p>
                    </div>
                  </Link>

                  <Link href="/services/android-app-development" className="group block">
                    <div className="h-full p-6 rounded-xl bg-background border transition-all hover:shadow-md hover:border-primary/50">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">App Development</h3>
                      <p className="text-sm text-muted-foreground">Native iOS and Android apps built for accessibility.</p>
                    </div>
                  </Link>
                </div>
             </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
             <div className="container max-w-4xl">
               <div className="bg-neutral-900 text-neutral-50 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
                 <div className="absolute top-0 left-0 w-full h-full bg-white/5 -skew-y-6 scale-150 origin-top-left pointer-events-none" />
                 <div className="relative z-10">
                   <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a More Inclusive Web?</h2>
                   <p className="text-lg text-neutral-200 mb-8 max-w-2xl mx-auto">
                     Whether you need help fixing compliance issues or want to start a new project on the right foot, our team is here to guide you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                       <Link href="/contact">
                         Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                     <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-neutral-900">
                       <Link href="/checklist">
                         Explore Checklist
                       </Link>
                </Button>
                   </div>
                 </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
