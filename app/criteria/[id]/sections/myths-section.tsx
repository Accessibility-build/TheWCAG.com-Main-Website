import { Card } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import { X, CheckCircle2 } from "lucide-react"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface MythsSectionProps {
  myths: NonNullable<SuccessCriterion["myths"]>
}

export function MythsSection({ myths }: MythsSectionProps) {
  return (
    <section className="mb-8 sm:mb-12" aria-labelledby="myths-heading">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" aria-hidden="true" />
        <h2 id="myths-heading" className="text-xl sm:text-2xl md:text-3xl font-bold">
          Common Myths
        </h2>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {myths.map((myth, index) => (
          <Card key={index} className="p-4 sm:p-6 border-2 border-amber-500/20 bg-amber-500/5">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive shrink-0 mt-1" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 text-destructive">Myth</h3>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">{myth.myth}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-amber-500/20">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 shrink-0 mt-1" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 text-green-600">Reality</h3>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">{myth.reality}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

