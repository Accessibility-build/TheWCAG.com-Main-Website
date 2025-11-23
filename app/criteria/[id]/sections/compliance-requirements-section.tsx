import { Card } from "@/components/ui/card"
import { ListChecks } from "lucide-react"
import { CheckCircle2 } from "lucide-react"

interface ComplianceRequirementsSectionProps {
  requirements: string[]
}

export function ComplianceRequirementsSection({ requirements }: ComplianceRequirementsSectionProps) {
  return (
    <section className="mb-8 sm:mb-12" aria-labelledby="compliance-heading">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <ListChecks className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" aria-hidden="true" />
        <h2 id="compliance-heading" className="text-xl sm:text-2xl md:text-3xl font-bold">
          Compliance Requirements
        </h2>
      </div>
      <Card className="p-4 sm:p-6 md:p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6">
          To meet this success criterion, ensure the following requirements are met:
        </p>
        <div className="space-y-3 sm:space-y-4">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-lg border border-primary/20"
            >
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <span className="text-sm sm:text-base text-foreground leading-relaxed flex-1">{requirement}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}

