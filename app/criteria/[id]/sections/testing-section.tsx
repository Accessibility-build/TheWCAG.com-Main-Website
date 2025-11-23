import { Card } from "@/components/ui/card"
import { TestTube, CheckCircle2 } from "lucide-react"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface TestingSectionProps {
  testing: NonNullable<SuccessCriterion["testing"]>
}

export function TestingSection({ testing }: TestingSectionProps) {
  return (
    <section className="mb-12" aria-labelledby="testing-heading">
      <div className="flex items-center gap-3 mb-6">
        <TestTube className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="testing-heading" className="text-3xl font-bold">
          How to Test This Properly
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Manual Testing */}
        {testing.manual && testing.manual.length > 0 && (
          <Card className="p-6 border-2 border-blue-500/20 bg-blue-500/5">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TestTube className="w-5 h-5 text-blue-600" aria-hidden="true" />
              Manual Testing
            </h3>
            <ul className="space-y-3">
              {testing.manual.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Automated Testing */}
        {testing.automated && testing.automated.length > 0 && (
          <Card className="p-6 border-2 border-green-500/20 bg-green-500/5">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TestTube className="w-5 h-5 text-green-600" aria-hidden="true" />
              Automated Testing
            </h3>
            <ul className="space-y-3">
              {testing.automated.map((tool, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-foreground leading-relaxed">{tool}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </section>
  )
}

