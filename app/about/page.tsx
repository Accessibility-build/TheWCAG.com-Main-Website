import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Scale, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="container relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Making the web accessible for <span className="text-primary">everyone</span>.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                  TheWCAG.com is an independent educational resource dedicated to simplifying web accessibility
                  guidelines for developers, designers, and content creators.
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

          {/* Team / Contribution */}
          <section className="py-20">
            <div className="container max-w-4xl text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Community Driven</h2>
              <p className="text-xl text-muted-foreground mb-8">
                This project is maintained by a dedicated group of accessibility advocates, developers, and designers
                who want to make the web a better place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/checklist">
                    Start Your Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    Contribute on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
