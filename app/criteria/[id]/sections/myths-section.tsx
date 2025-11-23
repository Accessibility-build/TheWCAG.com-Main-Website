import { Card } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import { X, CheckCircle2 } from "lucide-react"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface MythsSectionProps {
  myths: NonNullable<SuccessCriterion["myths"]>
}

export function MythsSection({ myths }: MythsSectionProps) {
  return (
    <section className="mb-12" aria-labelledby="myths-heading">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="myths-heading" className="text-3xl font-bold">
          Common Myths
        </h2>
      </div>
      <div className="space-y-6">
        {myths.map((myth, index) => (
          <Card key={index} className="p-6 border-2 border-amber-500/20 bg-amber-500/5">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-destructive shrink-0 mt-1" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-destructive">Myth</h3>
                  <p className="text-foreground leading-relaxed">{myth.myth}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pt-4 border-t border-amber-500/20">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-green-600">Reality</h3>
                  <p className="text-foreground leading-relaxed">{myth.reality}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

