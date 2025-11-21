import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, TestTube, FileText, GraduationCap } from "lucide-react"

export default function LearnPage() {
  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-5xl">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn Accessibility</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Start your accessibility journey with guides tailored to your role
              </p>
            </div>

            {/* Quick Start by Role */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Get Started by Role</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle>For Developers</CardTitle>
                    </div>
                    <CardDescription className="leading-relaxed">
                      Learn to write semantic HTML, implement ARIA, and test with assistive technologies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Start Here:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>
                          •{" "}
                          <Link href="/criteria/4-1-2" className="hover:text-foreground">
                            Semantic HTML basics
                          </Link>
                        </li>
                        <li>
                          •{" "}
                          <Link href="/criteria/2-1-1" className="hover:text-foreground">
                            Keyboard accessibility
                          </Link>
                        </li>
                        <li>
                          •{" "}
                          <Link href="/criteria/1-1-1" className="hover:text-foreground">
                            Alt text for images
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="w-full mt-4">
                      <Link href="/principles">
                        Explore All Criteria
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Palette className="h-5 w-5 text-secondary" aria-hidden="true" />
                      </div>
                      <CardTitle>For Designers</CardTitle>
                    </div>
                    <CardDescription className="leading-relaxed">
                      Create accessible designs with proper contrast, touch targets, and visual hierarchy
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Start Here:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>
                          •{" "}
                          <Link href="/criteria/1-4-3" className="hover:text-foreground">
                            Color contrast requirements
                          </Link>
                        </li>
                        <li>
                          •{" "}
                          <Link href="/criteria/2-5-8" className="hover:text-foreground">
                            Touch target sizing
                          </Link>
                        </li>
                        <li>
                          •{" "}
                          <Link href="/criteria/1-4-1" className="hover:text-foreground">
                            Don't rely on color alone
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="w-full mt-4">
                      <Link href="/tools/contrast-checker">
                        Try Contrast Checker
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <TestTube className="h-5 w-5 text-accent" aria-hidden="true" />
                      </div>
                      <CardTitle>For QA Testers</CardTitle>
                    </div>
                    <CardDescription className="leading-relaxed">
                      Learn testing methodologies and tools to validate accessibility compliance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Start Here:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Manual keyboard testing</li>
                        <li>• Screen reader basics</li>
                        <li>• Automated testing tools</li>
                      </ul>
                    </div>
                    <Button asChild className="w-full mt-4">
                      <Link href="/checklist">
                        View Testing Checklist
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle>For Content Creators</CardTitle>
                    </div>
                    <CardDescription className="leading-relaxed">
                      Write accessible content with proper headings, links, and plain language
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Start Here:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>
                          •{" "}
                          <Link href="/criteria/1-3-1" className="hover:text-foreground">
                            Proper heading structure
                          </Link>
                        </li>
                        <li>
                          •{" "}
                          <Link href="/criteria/2-4-4" className="hover:text-foreground">
                            Descriptive link text
                          </Link>
                        </li>
                        <li>
                          •{" "}
                          <Link href="/criteria/3-1-5" className="hover:text-foreground">
                            Reading level guidance
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="w-full mt-4">
                      <Link href="/overview">
                        Learn WCAG Basics
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Learning Path */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Beginner's Learning Path</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Badge className="bg-primary text-primary-foreground shrink-0">Step 1</Badge>
                      <div>
                        <CardTitle>Understand the POUR Principles</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          Learn the four foundational principles: Perceivable, Operable, Understandable, and Robust
                        </CardDescription>
                        <Link
                          href="/overview"
                          className="inline-flex items-center text-primary hover:underline font-medium mt-3"
                        >
                          Read Overview
                          <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Badge className="bg-secondary text-secondary-foreground shrink-0">Step 2</Badge>
                      <div>
                        <CardTitle>Master Level A Criteria</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          Start with the 30 Level A success criteria - the minimum requirements for accessibility
                        </CardDescription>
                        <Link
                          href="/principles"
                          className="inline-flex items-center text-secondary hover:underline font-medium mt-3"
                        >
                          View Level A Criteria
                          <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Badge className="bg-accent text-accent-foreground shrink-0">Step 3</Badge>
                      <div>
                        <CardTitle>Practice with Real Examples</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          Study accessible component patterns and try building them yourself
                        </CardDescription>
                        <Link
                          href="/examples"
                          className="inline-flex items-center text-accent hover:underline font-medium mt-3"
                        >
                          Browse Examples
                          <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="shrink-0">
                        Step 4
                      </Badge>
                      <div>
                        <CardTitle>Test with Assistive Technology</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          Use screen readers, keyboard navigation, and automated tools to verify your work
                        </CardDescription>
                        <Link
                          href="/tools"
                          className="inline-flex items-center text-primary hover:underline font-medium mt-3"
                        >
                          Explore Testing Tools
                          <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </section>

            {/* Additional Resources */}
            <section id="glossary" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Glossary</h2>
              <Card>
                <CardContent className="pt-6">
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-semibold">ARIA (Accessible Rich Internet Applications)</dt>
                      <dd className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        A set of attributes that define ways to make web content more accessible to people with
                        disabilities.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Assistive Technology</dt>
                      <dd className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        Hardware or software that helps people with disabilities use computers, such as screen readers,
                        screen magnifiers, or speech recognition software.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Screen Reader</dt>
                      <dd className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        Software that reads the text displayed on a computer screen with a speech synthesizer or braille
                        display. Used primarily by people who are blind.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Semantic HTML</dt>
                      <dd className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        HTML elements that clearly describe their meaning to both the browser and developer. Examples
                        include header, nav, main, article, section, aside, and footer.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Alt Text (Alternative Text)</dt>
                      <dd className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        Text description of an image that is read by screen readers and displayed when images fail to
                        load.
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </section>

            {/* Certification */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Professional Certification</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
                      <CardTitle>CPACC</CardTitle>
                    </div>
                    <CardDescription className="leading-relaxed">
                      Certified Professional in Accessibility Core Competencies - demonstrates foundational knowledge
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="https://www.accessibilityassociation.org/s/certified-professional"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="h-6 w-6 text-secondary" aria-hidden="true" />
                      <CardTitle>WAS</CardTitle>
                    </div>
                    <CardDescription className="leading-relaxed">
                      Web Accessibility Specialist - advanced technical certification for practitioners
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="https://www.accessibilityassociation.org/s/wascertification"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-secondary hover:underline font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
