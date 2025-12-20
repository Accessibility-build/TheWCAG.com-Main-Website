"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  ExternalLink, 
  Code, 
  Copy, 
  Check, 
  Clock, 
  AlertTriangle,
  Zap,
  Wrench,
  AlertCircle,
  ChevronRight,
  Target,
  Lightbulb
} from "lucide-react"
import type { ProcessedViolation } from "@/lib/tools/accessibility/processor"
import { 
  getImpactColor, 
  getImpactBadgeVariant, 
  formatImpact,
  getFixComplexityColor,
  formatFixComplexity
} from "@/lib/tools/accessibility/processor"
import { ScreenshotViewer, ScreenshotPlaceholder } from "./screenshot-viewer"
import { formatTimeRange, IMPACT_DESCRIPTIONS, FIX_COMPLEXITY_DESCRIPTIONS } from "@/lib/tools/accessibility/formatters"

interface ViolationCardProps {
  violation: ProcessedViolation
  showScreenshots?: boolean
}

export function ViolationCard({ violation, showScreenshots = true }: ViolationCardProps) {
  const [copiedSelector, setCopiedSelector] = useState<string | null>(null)
  const impactColor = getImpactColor(violation.impact)
  const badgeVariant = getImpactBadgeVariant(violation.impact)
  const complexityColor = getFixComplexityColor(violation.fixComplexity)
  const impactInfo = IMPACT_DESCRIPTIONS[violation.impact] || IMPACT_DESCRIPTIONS.moderate
  const complexityInfo = FIX_COMPLEXITY_DESCRIPTIONS[violation.fixComplexity]

  const copySelector = useCallback(async (selector: string) => {
    try {
      await navigator.clipboard.writeText(selector)
      setCopiedSelector(selector)
      setTimeout(() => setCopiedSelector(null), 2000)
    } catch (err) {
      console.error('Failed to copy selector:', err)
    }
  }, [])

  return (
    <Card className="border-l-4 overflow-hidden" style={{ borderLeftColor: getImpactBorderColor(violation.impact) }}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-3">
            {/* Title Row with Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-lg">
                {violation.humanReadableName || violation.ruleName}
              </CardTitle>
              <Badge variant={badgeVariant} className="text-xs">
                {formatImpact(violation.impact)}
              </Badge>
              <Badge 
                variant="outline" 
                className={`text-xs ${complexityColor}`}
              >
                <Zap className="h-3 w-3 mr-1" aria-hidden="true" />
                {formatFixComplexity(violation.fixComplexity)}
              </Badge>
              {violation.priorityScore >= 70 && (
                <Badge variant="outline" className="text-xs bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800">
                  <Target className="h-3 w-3 mr-1" aria-hidden="true" />
                  High Priority
                </Badge>
              )}
            </div>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground">{violation.description}</p>

            {/* Meta Info Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{impactInfo.short}: {impactInfo.userImpact}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                <span>
                  Est. {formatTimeRange(violation.estimatedFixTime.min, violation.estimatedFixTime.max, violation.estimatedFixTime.unit)} to fix
                </span>
              </div>
            </div>
          </div>
          <a
            href={violation.helpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted"
            aria-label={`Learn more about ${violation.humanReadableName || violation.ruleName}`}
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* How to Fix Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-primary" aria-hidden="true" />
            <h4 className="text-sm font-semibold">How to Fix</h4>
          </div>
          <div className="pl-6">
            <p className="text-sm text-muted-foreground">{violation.help}</p>
            {complexityInfo && (
              <p className="text-xs text-muted-foreground mt-2 italic">
                {complexityInfo.description} ({complexityInfo.timeEstimate})
              </p>
            )}
          </div>
        </div>

        {/* WCAG Criteria Section */}
        {violation.wcagCriteriaStrings.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-primary" aria-hidden="true" />
              <h4 className="text-sm font-semibold">WCAG Success Criteria</h4>
            </div>
            <div className="pl-6 flex flex-wrap gap-2">
              {violation.wcagCriteria.length > 0 ? (
                violation.wcagCriteria.map((criterion, index) => (
                  <a
                    key={index}
                    href={criterion.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs hover:underline"
                  >
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getWCAGLevelBadgeStyle(criterion.level)}`}
                    >
                      SC {criterion.number}
                    </Badge>
                    <span className="text-muted-foreground">{criterion.name}</span>
                    <ChevronRight className="h-3 w-3 text-muted-foreground" aria-hidden="true" />
                  </a>
                ))
              ) : (
                violation.wcagCriteriaStrings.map((criteria, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {criteria}
                  </Badge>
                ))
              )}
            </div>
          </div>
        )}

        {/* Affected Elements Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4 text-primary" aria-hidden="true" />
            <h4 className="text-sm font-semibold">
              Affected Elements ({violation.affectedElements.length})
            </h4>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {violation.affectedElements.map((element, index) => (
              <AccordionItem key={index} value={`element-${index}`} className="border-b-0">
                <AccordionTrigger className="text-sm py-3 px-4 bg-muted/50 rounded-t-lg hover:bg-muted data-[state=open]:rounded-b-none">
                  <div className="flex items-center gap-2 text-left min-w-0">
                    <span className="flex-shrink-0 text-xs font-mono text-muted-foreground">
                      #{index + 1}
                    </span>
                    <code className="truncate text-xs font-mono">
                      {element.formattedSelector || element.selector}
                    </code>
                    {element.screenshot && (
                      <Badge variant="outline" className="text-[10px] ml-2 flex-shrink-0">
                        📷
                      </Badge>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-muted/30 rounded-b-lg px-4 py-4">
                  <div className="space-y-4">
                    {/* Screenshot */}
                    {showScreenshots && (
                      <div>
                        <p className="text-xs font-medium mb-2 flex items-center gap-1">
                          <Target className="h-3 w-3" aria-hidden="true" />
                          Visual Preview
                        </p>
                        {element.screenshot ? (
                          <ScreenshotViewer
                            screenshot={element.screenshot}
                            elementSelector={element.selector}
                            violationName={violation.humanReadableName || violation.ruleName}
                          />
                        ) : (
                          <ScreenshotPlaceholder />
                        )}
                      </div>
                    )}

                    {/* Element Context */}
                    {element.context && (
                      <div>
                        <p className="text-xs font-medium mb-2">Element Info</p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-background rounded px-2 py-1.5">
                            <span className="text-muted-foreground">Tag:</span>{' '}
                            <code className="font-mono">&lt;{element.context.tagName.toLowerCase()}&gt;</code>
                          </div>
                          {element.context.id && (
                            <div className="bg-background rounded px-2 py-1.5">
                              <span className="text-muted-foreground">ID:</span>{' '}
                              <code className="font-mono">{element.context.id}</code>
                            </div>
                          )}
                          {element.context.className && (
                            <div className="bg-background rounded px-2 py-1.5 col-span-2">
                              <span className="text-muted-foreground">Classes:</span>{' '}
                              <code className="font-mono">{element.context.className}</code>
                            </div>
                          )}
                          {element.context.ariaRole && (
                            <div className="bg-background rounded px-2 py-1.5">
                              <span className="text-muted-foreground">Role:</span>{' '}
                              <code className="font-mono">{element.context.ariaRole}</code>
                            </div>
                          )}
                          {element.context.textContent && (
                            <div className="bg-background rounded px-2 py-1.5 col-span-2">
                              <span className="text-muted-foreground">Text:</span>{' '}
                              <span className="italic">"{element.context.textContent.slice(0, 50)}{element.context.textContent.length > 50 ? '...' : ''}"</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* HTML Code */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-medium flex items-center gap-1">
                          <Code className="h-3 w-3" aria-hidden="true" />
                          HTML Source
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 text-xs"
                          onClick={() => copySelector(element.selector)}
                        >
                          {copiedSelector === element.selector ? (
                            <Check className="h-3 w-3 mr-1" aria-hidden="true" />
                          ) : (
                            <Copy className="h-3 w-3 mr-1" aria-hidden="true" />
                          )}
                          Copy Selector
                        </Button>
                      </div>
                      <pre className="text-xs bg-background p-3 rounded overflow-x-auto border">
                        <code className="language-html">{element.html}</code>
                      </pre>
                    </div>

                    {/* Fix Guidance */}
                    {element.fixGuidance && (
                      <div>
                        <p className="text-xs font-medium mb-2 flex items-center gap-1">
                          <Lightbulb className="h-3 w-3" aria-hidden="true" />
                          Specific Guidance
                        </p>
                        <div className="text-xs text-muted-foreground bg-background rounded p-3 border-l-2 border-primary">
                          {element.fixGuidance}
                        </div>
                      </div>
                    )}

                    {/* Failure Summary */}
                    {element.failureSummary && element.failureSummary !== element.fixGuidance && (
                      <div>
                        <p className="text-xs font-medium mb-2">Technical Details</p>
                        <p className="text-xs text-muted-foreground bg-background rounded p-3">
                          {element.failureSummary}
                        </p>
                      </div>
                    )}
                  </div>
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

function getWCAGLevelBadgeStyle(level: 'A' | 'AA' | 'AAA'): string {
  switch (level) {
    case 'A':
      return 'bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800'
    case 'AA':
      return 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
    case 'AAA':
      return 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
  }
}

// Compact violation card for list views
interface CompactViolationCardProps {
  violation: ProcessedViolation
  onClick?: () => void
}

export function CompactViolationCard({ violation, onClick }: CompactViolationCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-4 rounded-lg border border-border hover:border-primary transition-colors bg-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-sm truncate">
              {violation.humanReadableName || violation.ruleName}
            </span>
            <Badge variant={getImpactBadgeVariant(violation.impact)} className="text-xs">
              {formatImpact(violation.impact)}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {violation.description}
          </p>
          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span>{violation.affectedElements.length} element{violation.affectedElements.length !== 1 ? 's' : ''}</span>
            <span>•</span>
            <span className={getFixComplexityColor(violation.fixComplexity)}>
              {formatFixComplexity(violation.fixComplexity)}
            </span>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
      </div>
    </button>
  )
}
