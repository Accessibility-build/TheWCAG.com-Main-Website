import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Twitter, Linkedin, Code } from "lucide-react"
import { NewsletterSubscription } from "@/components/newsletter-subscription"

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-auto pt-12 md:pt-16 pb-8">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Section - Spans 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="mb-4 md:mb-6">
                <Image
                  src="/Logo.png"
                  alt="TheWCAG.com Logo"
                  width={128}
                  height={128}
                  className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
                  priority
                />
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 md:mb-6 leading-[0.8]">
                The
                <br />
                WCAG
                <br />
                Guide
              </h2>
              <p className="text-base md:text-xl text-background/80 max-w-md leading-relaxed mt-6 md:mt-8">
                Making the web accessible for everyone, one criterion at a time.
              </p>
            </div>

            <div className="mt-8 md:mt-12 flex gap-3 md:gap-4">
              <a
                href="https://x.com/TheWCAG"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
                aria-label="Follow us on Twitter (X)"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/thewcagcom/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://codepen.io/hkeqdwro-the-reactor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
                aria-label="View our CodePen profile"
              >
                <Code className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links - Spans 7 cols */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6 text-primary">Explore</h3>
                <ul className="space-y-3 md:space-y-4">
                  <li>
                    <Link
                      href="/overview"
                      className="text-xl md:text-2xl font-light hover:text-primary transition-colors flex items-center group"
                    >
                      Overview
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/principles"
                      className="text-xl md:text-2xl font-light hover:text-primary transition-colors flex items-center group"
                    >
                      Principles
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/checklist"
                      className="text-xl md:text-2xl font-light hover:text-primary transition-colors flex items-center group"
                    >
                      Checklist
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-xl md:text-2xl font-light hover:text-primary transition-colors flex items-center group"
                    >
                      FAQ
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools"
                      className="text-xl md:text-2xl font-light hover:text-primary transition-colors flex items-center group"
                    >
                      Tools
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compliance"
                      className="text-xl md:text-2xl font-light hover:text-primary transition-colors flex items-center group"
                    >
                      Compliance
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compare"
                      className="text-xl md:text-2xl font-light hover:text-primary transition-colors flex items-center group"
                    >
                      Compare
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/getting-started"
                      className="text-xl md:text-2xl font-light hover:text-primary transition-colors flex items-center group"
                    >
                      Getting Started
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-xl md:text-2xl font-light hover:text-primary transition-colors flex items-center group"
                    >
                      Services
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docaccessible"
                      className="text-xl md:text-2xl font-light hover:text-primary transition-colors flex items-center group"
                    >
                      DocAccessible
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6 text-primary">Newsletter</h3>
                <p className="text-sm text-background/70 mb-4 leading-relaxed">
                  Stay updated with the latest accessibility insights and WCAG updates.
                </p>
                <NewsletterSubscription variant="footer" />
              </div>

              <div>
                <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6 text-primary">Compliance Goal</h3>
                <div className="bg-background/10 p-5 md:p-6 rounded-2xl backdrop-blur-sm border border-background/10">
                  <div className="text-4xl md:text-5xl font-bold mb-2">AA</div>
                  <p className="text-background/80 text-sm leading-relaxed">
                    We target WCAG 2.2 Level AA compliance as the standard for accessible web experiences.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-medium mb-4 text-primary">Legal</h3>
                <ul className="space-y-2 text-sm text-background/60">
                  <li>
                    <Link href="/about" className="hover:text-background transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-background transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-background transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/accessibility" className="hover:text-background transition-colors">
                      Accessibility Statement
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-background transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-background transition-colors">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-medium mb-4 text-primary">Interactive</h3>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm font-semibold text-background/90 mb-2">Test Your Knowledge!</p>
                  <p className="text-xs text-background/70 mb-3">Take our 30-question quiz and compete on the leaderboard.</p>
                  <Link
                    href="/quiz"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full transition-colors"
                  >
                    Start Quiz →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Large Brand Text with Layered People - Engine Inspired */}
      <div className="w-full bg-white overflow-hidden">
        {/* Top bar with copyright and links */}
        <div className="container px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs lg:text-sm font-medium text-black/60 gap-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
              <p>© TheWCAG {new Date().getFullYear()}. All Rights Reserved.</p>
              <span className="hidden sm:inline text-black/20">|</span>
              <p>Designed with inclusion in mind.</p>
            </div>
            <div className="flex gap-6 sm:gap-8">
              <a href="#" className="hover:text-black transition-colors">Privacy Preferences</a>
              <a href="/terms" className="hover:text-black transition-colors">Terms of Service</a>
              <a href="/privacy" className="hover:text-black transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Layered Text and Image Section */}
        <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-end justify-center">
          {/* Background Text Layer - Behind people */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <h2
              className="text-[28vw] sm:text-[26vw] md:text-[24vw] lg:text-[22vw] font-black tracking-[-0.05em] text-black leading-none whitespace-nowrap"
              style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif' }}
            >
              TheWCAG
              <sup className="text-[4vw] sm:text-[3vw] align-super">™</sup>
            </h2>
          </div>

          {/* People Image Layer - Positioned on top of background text */}
          <div className="relative z-10 w-full flex justify-center items-end px-4">
            <img
              src="/Footer_decoraitve.png"
              alt="Diverse group of people representing accessibility - including individuals with prosthetics, in wheelchairs, with guide dogs, using mobility aids, and working on laptops"
              className="w-full max-w-5xl h-auto object-contain object-bottom"
              style={{
                marginBottom: '-2px',
                maxHeight: '450px'
              }}
            />
          </div>

          {/* Foreground Text Layer - Subtle outline that appears in front of people */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <h2
              className="text-[28vw] sm:text-[26vw] md:text-[24vw] lg:text-[22vw] font-black tracking-[-0.05em] text-transparent leading-none whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-outfit), system-ui, sans-serif',
                WebkitTextStroke: '1px rgba(0,0,0,0.05)'
              }}
            >
              TheWCAG
              <sup className="text-[4vw] sm:text-[3vw] align-super">™</sup>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  )
}
