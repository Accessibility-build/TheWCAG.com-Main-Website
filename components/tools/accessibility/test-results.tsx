"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SummaryStats } from "./summary-stats"
import { ViolationCard } from "./violation-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, HelpCircle, ExternalLink } from "lucide-react"
import type { ProcessedResults } from "@/lib/tools/accessibility/processor"

interface TestResultsProps {
  results: ProcessedResults
}

export function TestResults({ results }: TestResultsProps) {
  return (
    <div className="space-y-6">
      <SummaryStats results={results} />

      <Tabs defaultValue="violations" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="violations">
            Violations ({results.summary.violations})
          </TabsTrigger>
          <TabsTrigger value="passed">
            Passed ({results.summary.passes})
          </TabsTrigger>
          <TabsTrigger value="incomplete">
            Incomplete ({results.summary.incomplete})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="violations" className="space-y-4">
          {results.violations.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" aria-hidden="true" />
                <p className="text-lg font-semibold">No Violations Found!</p>
                <p className="text-sm text-muted-foreground mt-2">
                  All accessibility rules passed for this page.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {results.violations.map((violation, index) => (
                <ViolationCard key={index} violation={violation} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="passed" className="space-y-4">
          {results.passes.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">No passed checks to display.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {results.passes.map((pass, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-lg">{pass.ruleName}</CardTitle>
                          <Badge variant="outline" className="text-xs bg-green-50 dark:bg-green-950">
                            Passed
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{pass.description}</p>
                      </div>
                      <a
                        href={pass.helpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Learn more about ${pass.ruleName}`}
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">{pass.help}</p>
                    </div>
                    {pass.wcagCriteria.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2">WCAG Criteria</h4>
                        <div className="flex flex-wrap gap-2">
                          {pass.wcagCriteria.map((criteria, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {criteria}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Checked {pass.checkedElements} element{pass.checkedElements !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="incomplete" className="space-y-4">
          {results.incomplete.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">No incomplete checks to display.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {results.incomplete.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-lg">{item.ruleName}</CardTitle>
                          <Badge variant="outline" className="text-xs bg-yellow-50 dark:bg-yellow-950">
                            Needs Review
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <a
                        href={item.helpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Learn more about ${item.ruleName}`}
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">{item.help}</p>
                    </div>
                    {item.wcagCriteria.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2">WCAG Criteria</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.wcagCriteria.map((criteria, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {criteria}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-semibold mb-2">
                        Elements to Review ({item.affectedElements.length})
                      </h4>
                      <div className="space-y-2">
                        {item.affectedElements.map((element, idx) => (
                          <div key={idx} className="text-xs bg-muted p-2 rounded">
                            <p className="font-mono text-muted-foreground">{element.selector}</p>
                            {element.failureSummary && (
                              <p className="text-muted-foreground mt-1">{element.failureSummary}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

