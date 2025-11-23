import { Card } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { XCircle, Lightbulb } from "lucide-react"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface CommonFailuresSectionProps {
  failures: NonNullable<SuccessCriterion["commonFailures"]>
}

export function CommonFailuresSection({ failures }: CommonFailuresSectionProps) {
  return (
    <section className="mb-8 sm:mb-12" aria-labelledby="failures-heading">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" aria-hidden="true" />
        <h2 id="failures-heading" className="text-xl sm:text-2xl md:text-3xl font-bold">
          Common Failures
        </h2>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {failures.map((failure, index) => (
          <Card key={index} className="p-4 sm:p-6 border-2 border-destructive/20 bg-destructive/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-destructive shrink-0 mt-1" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 text-destructive">Common Failure</h3>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">{failure.failure}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 text-primary">Solution</h3>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">{failure.solution}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

