"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, Code2, ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

interface ImplementationCTASectionProps {
  criterionNumber: string
  criterionTitle: string
}

export function ImplementationCTASection({ 
  criterionNumber, 
  criterionTitle 
}: ImplementationCTASectionProps) {
  return (
    <section className="mb-12" aria-labelledby="implementation-cta-heading">
      <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/3 border-2 border-primary/30 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <HelpCircle className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h2 id="implementation-cta-heading" className="text-2xl md:text-3xl font-bold">
                Need Help Implementing This?
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground/90">
              Implementing <strong>{criterionNumber} {criterionTitle}</strong> correctly requires 
              understanding your specific technology stack, design patterns, and user needs. 
              Generic code examples may not fit your unique situation.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              Our team can help you create custom, accessible solutions tailored to your 
              project. We provide implementation guidance, code reviews, and accessibility 
              consulting to ensure your website meets WCAG requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Implementation Help
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/examples">
                  <Code2 className="w-4 h-4 mr-2" aria-hidden="true" />
                  View Code Examples
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-64 space-y-4">
            <div className="p-6 bg-background/50 rounded-lg border border-primary/20">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                What We Offer
              </h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Custom implementation guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Code review and feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Accessibility audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Training and consultation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

