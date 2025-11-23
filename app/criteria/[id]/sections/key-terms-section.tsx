"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface KeyTermsSectionProps {
  keyTerms: NonNullable<SuccessCriterion["keyTerms"]>
}

export function KeyTermsSection({ keyTerms }: KeyTermsSectionProps) {
  const [expandedTerms, setExpandedTerms] = useState<Set<number>>(new Set())

  const toggleTerm = (index: number) => {
    const newExpanded = new Set(expandedTerms)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedTerms(newExpanded)
  }

  return (
    <section className="mb-8 sm:mb-12" aria-labelledby="key-terms-heading">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" aria-hidden="true" />
        <h2 id="key-terms-heading" className="text-xl sm:text-2xl md:text-3xl font-bold">
          Key Terms & Concepts
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {keyTerms.map((term, index) => {
          const isExpanded = expandedTerms.has(index)
          return (
            <Card
              key={index}
              className="p-4 sm:p-5 border-2 border-primary/10 hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => toggleTerm(index)}
                className="w-full text-left flex items-start justify-between gap-3 sm:gap-4"
                aria-expanded={isExpanded}
                aria-controls={`term-content-${index}`}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg mb-1 text-foreground">
                    {term.term}
                  </h3>
                  {!isExpanded && (
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {term.definition}
                    </p>
                  )}
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-1" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-1" aria-hidden="true" />
                )}
              </button>
              {isExpanded && (
                <div id={`term-content-${index}`} className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-primary/10">
                  <p className="text-sm sm:text-base leading-relaxed text-foreground mb-2 sm:mb-3">
                    {term.definition}
                  </p>
                  {term.context && (
                    <div className="p-2 sm:p-3 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                      <p className="text-xs sm:text-sm text-foreground/80 italic">
                        <strong className="font-medium">In context:</strong> {term.context}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </Card>
          )
        })}
      </div>
    </section>
  )
}

