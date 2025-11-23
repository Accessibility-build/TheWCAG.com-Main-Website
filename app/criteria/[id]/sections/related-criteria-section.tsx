import { Card } from "@/components/ui/card"
import { Link2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface RelatedCriteriaSectionProps {
  relatedCriteria: NonNullable<SuccessCriterion["relatedCriteria"]>
}

export function RelatedCriteriaSection({ relatedCriteria }: RelatedCriteriaSectionProps) {
  return (
    <section className="mb-12" aria-labelledby="related-criteria-heading">
      <div className="flex items-center gap-3 mb-6">
        <Link2 className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="related-criteria-heading" className="text-3xl font-bold">
          Related Success Criteria
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {relatedCriteria.map((related, index) => {
          const criterionId = related.number.replace(/\./g, "-")
          return (
            <Card
              key={index}
              className="p-5 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-md group"
            >
              <Link
                href={`/criteria/${related.number}`}
                className="block"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">
                      {related.relationship}
                    </p>
                    <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                      {related.number} {related.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

