import { Card } from "@/components/ui/card"
import { Lightbulb, CheckCircle2, Info, Target } from "lucide-react"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface SimpleExplanationSectionProps {
  criterion: SuccessCriterion
}

export function SimpleExplanationSection({ criterion }: SimpleExplanationSectionProps) {
  // Use detailedSummary if available, fallback to summary for backward compatibility
  const explanation = criterion.detailedSummary || criterion.summary
  
  // Try to parse the detailed summary into sections if it contains structured content
  // For now, we'll display it as paragraphs with better formatting
  const paragraphs = explanation.split(/\n\n+/).filter(p => p.trim().length > 0)

  return (
    <section className="mb-12" aria-labelledby="simple-explanation-heading">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="simple-explanation-heading" className="text-3xl font-bold">
          Plain Language Explanation
        </h2>
      </div>
      <Card className="p-8 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border-l-4 border-l-primary shadow-sm">
        <div className="space-y-6">
          {paragraphs.length > 1 ? (
            // Multiple paragraphs - structure them nicely
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => {
                // Check if paragraph starts with a heading-like pattern
                const isHeading = /^(What|Why|How|In Practice|Impact|Summary):/i.test(paragraph.trim())
                
                if (isHeading) {
                  const [heading, ...content] = paragraph.split(/:\s*/)
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        {heading.toLowerCase().includes('what') && <Info className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />}
                        {heading.toLowerCase().includes('why') && <Target className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />}
                        {heading.toLowerCase().includes('how') && <CheckCircle2 className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />}
                        <h3 className="font-semibold text-lg text-foreground">{heading}:</h3>
                      </div>
                      <p className="text-base leading-relaxed text-foreground/90 ml-7">
                        {content.join(': ')}
                      </p>
                    </div>
                  )
                }
                
                return (
                  <p key={index} className="text-base leading-relaxed text-foreground/90">
                    {paragraph.trim()}
                  </p>
                )
              })}
            </div>
          ) : (
            // Single paragraph or simple text
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-foreground">
                {explanation}
              </p>
            </div>
          )}
        </div>
      </Card>
    </section>
  )
}

