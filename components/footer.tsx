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
                <ul className="space-y-2 text-sm text-background/60">
                  <li>
                    <Link href="/#quiz" className="hover:text-background transition-colors">
                      Accessibility Quiz
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-background/40">
          <p>© {new Date().getFullYear()} TheWCAG.com. All rights reserved.</p>
          <p>Designed with inclusion in mind.</p>
        </div>
      </div>
      
      {/* Large Brand Text - Full Width (Outside Container) */}
      <div className="w-full overflow-x-visible">
        <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 w-full">
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col items-center justify-center w-full min-w-0">
              <h2 className="text-[20vw] sm:text-[18vw] md:text-[17vw] lg:text-[19vw] xl:text-[21vw] leading-[0.85] sm:leading-[0.8] font-black tracking-tighter text-center select-none pointer-events-none text-orange-500/40 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)] whitespace-nowrap px-1">
                TheWCAG
              </h2>
              <span className="text-[5vw] sm:text-[4.5vw] md:text-[5vw] lg:text-[5.5vw] xl:text-[6vw] text-background/35 font-black tracking-tighter select-none pointer-events-none whitespace-nowrap">
                .com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
