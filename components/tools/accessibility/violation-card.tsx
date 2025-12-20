"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink, Code } from "lucide-react"
import type { ProcessedViolation } from "@/lib/tools/accessibility/processor"
import { getImpactColor, getImpactBadgeVariant, formatImpact } from "@/lib/tools/accessibility/processor"

interface ViolationCardProps {
  violation: ProcessedViolation
}

export function ViolationCard({ violation }: ViolationCardProps) {
  const impactColor = getImpactColor(violation.impact)
  const badgeVariant = getImpactBadgeVariant(violation.impact)

  return (
    <Card className="border-l-4" style={{ borderLeftColor: getImpactBorderColor(violation.impact) }}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-lg">{violation.ruleName}</CardTitle>
              <Badge variant={badgeVariant} className="text-xs">
                {formatImpact(violation.impact)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{violation.description}</p>
          </div>
          <a
            href={violation.helpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`Learn more about ${violation.ruleName}`}
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-2">How to Fix</h4>
          <p className="text-sm text-muted-foreground">{violation.help}</p>
        </div>

        {violation.wcagCriteria.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2">WCAG Criteria</h4>
            <div className="flex flex-wrap gap-2">
              {violation.wcagCriteria.map((criteria, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {criteria}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 className="text-sm font-semibold mb-2">
            Affected Elements ({violation.affectedElements.length})
          </h4>
          <Accordion type="single" collapsible className="w-full">
            {violation.affectedElements.map((element, index) => (
              <AccordionItem key={index} value={`element-${index}`}>
                <AccordionTrigger className="text-sm">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4" aria-hidden="true" />
                    <span className="truncate">{element.selector}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <div>
                    <p className="text-xs font-medium mb-1">HTML:</p>
                    <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
                      <code>{element.html}</code>
                    </pre>
                  </div>
                  {element.fixGuidance && (
                    <div>
                      <p className="text-xs font-medium mb-1">Fix Guidance:</p>
                      <p className="text-xs text-muted-foreground">{element.fixGuidance}</p>
                    </div>
                  )}
                  {element.failureSummary && (
                    <div>
                      <p className="text-xs font-medium mb-1">Failure Summary:</p>
                      <p className="text-xs text-muted-foreground">{element.failureSummary}</p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  )
}

function getImpactBorderColor(impact: string): string {
  switch (impact) {
    case 'critical':
      return 'rgb(220, 38, 38)' // red-600
    case 'serious':
      return 'rgb(234, 88, 12)' // orange-600
    case 'moderate':
      return 'rgb(202, 138, 4)' // yellow-600
    case 'minor':
      return 'rgb(37, 99, 235)' // blue-600
    default:
      return 'rgb(156, 163, 175)' // gray-400
  }
}

