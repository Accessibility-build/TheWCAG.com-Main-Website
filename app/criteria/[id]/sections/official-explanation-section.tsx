"use client"

import { Card } from "@/components/ui/card"
import { FileText, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface OfficialExplanationSectionProps {
  criterion: SuccessCriterion
}

export function OfficialExplanationSection({ criterion }: OfficialExplanationSectionProps) {
  const [isIntentExpanded, setIsIntentExpanded] = useState(false)
  
  // Use officialDefinition if available, fallback to description for backward compatibility
  const officialText = criterion.officialDefinition || criterion.description
  const intent = criterion.details?.intent

  return (
    <section className="mb-12" aria-labelledby="official-explanation-heading">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="official-explanation-heading" className="text-3xl font-bold">
          Official WCAG Definition
        </h2>
      </div>
      <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-md font-semibold border border-primary/20">
                WCAG 2.2 Official
              </span>
              <span className="text-foreground/80">Exact wording from W3C Web Content Accessibility Guidelines</span>
            </div>
            <a
              href={`https://www.w3.org/WAI/WCAG22/Understanding/${criterion.number.replace(/\./g, "")}.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
            >
              View on W3C
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground font-medium">
              {officialText}
            </p>
          </div>

          {intent && (
            <div className="mt-6 pt-6 border-t border-primary/20">
              <button
                onClick={() => setIsIntentExpanded(!isIntentExpanded)}
                className="w-full flex items-center justify-between text-left gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                aria-expanded={isIntentExpanded}
                aria-controls="intent-content"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold text-lg">Intent</h3>
                </div>
                {isIntentExpanded ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" aria-hidden="true" />
                )}
              </button>
              {isIntentExpanded && (
                <div id="intent-content" className="mt-4 pl-4 border-l-4 border-l-primary/30">
                  <p className="text-base leading-relaxed text-foreground/90">
                    {intent}
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-primary/10">
            <p className="text-xs text-muted-foreground">
              Source:{" "}
              <a
                href="https://www.w3.org/WAI/WCAG22/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                W3C Web Content Accessibility Guidelines (WCAG) 2.2
              </a>
            </p>
          </div>
        </div>
      </Card>
    </section>
  )
}

