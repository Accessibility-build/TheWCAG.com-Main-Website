import { Card } from "@/components/ui/card"
import { ListChecks } from "lucide-react"
import { CheckCircle2 } from "lucide-react"

interface ComplianceRequirementsSectionProps {
  requirements: string[]
}

export function ComplianceRequirementsSection({ requirements }: ComplianceRequirementsSectionProps) {
  return (
    <section className="mb-12" aria-labelledby="compliance-heading">
      <div className="flex items-center gap-3 mb-6">
        <ListChecks className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="compliance-heading" className="text-3xl font-bold">
          Compliance Requirements
        </h2>
      </div>
      <Card className="p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
        <p className="text-muted-foreground mb-6 text-lg">
          To meet this success criterion, ensure the following requirements are met:
        </p>
        <div className="space-y-4">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-background rounded-lg border border-primary/20"
            >
              <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <span className="text-foreground leading-relaxed flex-1">{requirement}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}

