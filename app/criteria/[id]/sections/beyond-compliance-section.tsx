import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { ArrowRight } from "lucide-react"

interface BeyondComplianceSectionProps {
  beyondCompliance: string[]
}

export function BeyondComplianceSection({ beyondCompliance }: BeyondComplianceSectionProps) {
  return (
    <section className="mb-12" aria-labelledby="beyond-compliance-heading">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="beyond-compliance-heading" className="text-3xl font-bold">
          Going Beyond Compliance
        </h2>
      </div>
      <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent">
        <p className="text-muted-foreground mb-6 text-lg">
          While meeting the minimum requirements ensures compliance, consider these enhancements for a better user experience:
        </p>
        <div className="space-y-4">
          {beyondCompliance.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-background rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-primary mt-1 shrink-0" aria-hidden="true" />
              <span className="text-foreground leading-relaxed flex-1">{item}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}

