"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, ArrowRight, Code2, CheckCircle2 } from "lucide-react"
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
    <section className="mb-8 sm:mb-12" aria-labelledby="implementation-cta-heading">
      <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/3 border-2 border-primary/30 shadow-lg">
        <div className="space-y-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-primary/20 rounded-lg shrink-0">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 id="implementation-cta-heading" className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Why We Don't Provide Generic Code Examples
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/90">
                <p>
                  Implementing <strong className="font-semibold">{criterionNumber} {criterionTitle}</strong> correctly 
                  requires understanding your specific context. Code solutions vary significantly based on multiple factors:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-background/50 rounded-lg border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base mb-1">Programming Language</h3>
                      <p className="text-xs sm:text-sm text-foreground/80">
                        HTML, React, Vue, Angular, PHP, Python, and other frameworks each have different patterns and best practices.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-background/50 rounded-lg border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base mb-1">Architecture & Patterns</h3>
                      <p className="text-xs sm:text-sm text-foreground/80">
                        Server-side rendering, client-side rendering, static generation, and hybrid approaches require different solutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-background/50 rounded-lg border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base mb-1">Design System</h3>
                      <p className="text-xs sm:text-sm text-foreground/80">
                        Your existing components, styling approach, and UI library influence how accessibility must be implemented.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-background/50 rounded-lg border border-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base mb-1">User Context</h3>
                      <p className="text-xs sm:text-sm text-foreground/80">
                        Your specific user base, content type, and interaction patterns determine the most appropriate implementation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 sm:p-6 bg-primary/10 border-l-4 border-l-primary rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base mb-2">Custom Solutions Available</h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-foreground/90 mb-4">
                        We provide tailored implementation guidance by analyzing your specific technology stack, 
                        coding patterns, design system, and project requirements. Our team reviews your codebase 
                        and provides custom solutions that integrate seamlessly with your existing architecture.
                      </p>
                      <Button asChild size="default" className="group text-sm sm:text-base">
                        <Link href="/contact">
                          Get Custom Implementation Help
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

