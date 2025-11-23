import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface RealWorldExamplesSectionProps {
  examples: NonNullable<SuccessCriterion["examples"]>
}

export function RealWorldExamplesSection({ examples }: RealWorldExamplesSectionProps) {
  return (
    <section className="mb-8 sm:mb-12" aria-labelledby="examples-heading">
      <h2 id="examples-heading" className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">
        Real World Examples
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {examples.map((example, index) => (
          <Card
            key={index}
            className={`p-4 sm:p-6 transition-all hover:shadow-lg ${
              example.type === "bad"
                ? "border-destructive/50 bg-destructive/5"
                : "border-green-500/50 bg-green-500/5"
            }`}
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              {example.type === "bad" ? (
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-destructive shrink-0 mt-1" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 shrink-0 mt-1" aria-hidden="true" />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {example.type === "bad" ? "❌ Incorrect" : "✓ Correct"}
                </h3>
                <h4 className="font-medium text-sm sm:text-base mb-2">{example.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  {example.description}
                </p>
                {example.code && (
                  <div className="mt-3 sm:mt-4">
                    <div className="bg-background border rounded-lg p-3 sm:p-4 overflow-x-auto">
                      <pre className="text-xs">
                        <code className="text-foreground">{example.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

