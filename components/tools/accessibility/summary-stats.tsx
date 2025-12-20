"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle2, HelpCircle, XCircle } from "lucide-react"
import type { ProcessedResults } from "@/lib/tools/accessibility/processor"

interface SummaryStatsProps {
  results: ProcessedResults
}

export function SummaryStats({ results }: SummaryStatsProps) {
  const { summary } = results

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Violations</CardTitle>
            <XCircle className="h-5 w-5 text-destructive" aria-hidden="true" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-destructive">{summary.violations}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Issues that need to be fixed
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Passed</CardTitle>
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">{summary.passes}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Rules that passed
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Incomplete</CardTitle>
            <HelpCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{summary.incomplete}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Need manual review
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

