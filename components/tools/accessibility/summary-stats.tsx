"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  XCircle,
  Zap,
  Clock,
  TrendingUp,
  Target
} from "lucide-react"
import type { ProcessedResults, FixComplexity } from "@/lib/tools/accessibility/processor"
import { 
  getComplianceScoreColor, 
  getComplianceScoreBgColor,
  formatFixComplexity
} from "@/lib/tools/accessibility/processor"
import { formatTimeRange, getScoreGrade, formatCount } from "@/lib/tools/accessibility/formatters"

interface SummaryStatsProps {
  results: ProcessedResults
}

export function SummaryStats({ results }: SummaryStatsProps) {
  const { summary } = results
  const scoreGrade = getScoreGrade(summary.complianceScore)

  return (
    <div className="space-y-6">
      {/* Main Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {/* Compliance Score Card */}
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
              <Target className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg className="h-20 w-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-muted"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeDasharray={`${summary.complianceScore * 2.2} 220`}
                    strokeLinecap="round"
                    className={getComplianceScoreBgColor(summary.complianceScore).replace('bg-', 'text-')}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-xl font-bold ${getComplianceScoreColor(summary.complianceScore)}`}>
                    {summary.complianceScore}%
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className={`text-lg font-semibold ${getComplianceScoreColor(summary.complianceScore)}`}>
                  {scoreGrade.label}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {scoreGrade.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Violations Card */}
        <Card>
          <CardHeader className="pb-2">
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
            {summary.violations > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {summary.impactBreakdown.critical > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {summary.impactBreakdown.critical} critical
                  </Badge>
                )}
                {summary.impactBreakdown.serious > 0 && (
                  <Badge variant="default" className="text-xs bg-orange-600">
                    {summary.impactBreakdown.serious} serious
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Passed Card */}
        <Card>
          <CardHeader className="pb-2">
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
            <div className="mt-3">
              <Progress 
                value={(summary.passes / (summary.passes + summary.violations + summary.incomplete)) * 100} 
                className="h-2"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {Math.round((summary.passes / (summary.passes + summary.violations + summary.incomplete)) * 100)}% pass rate
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Incomplete Card */}
        <Card>
          <CardHeader className="pb-2">
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
            {summary.incomplete > 0 && (
              <p className="text-xs text-muted-foreground mt-3">
                These require human judgment to verify
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Detailed Breakdown */}
      {summary.violations > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {/* Impact Breakdown */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <CardTitle className="text-sm font-medium">Impact Breakdown</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ImpactBar 
                label="Critical" 
                count={summary.impactBreakdown.critical} 
                total={summary.violations}
                color="bg-red-500"
                description="Completely blocks access"
              />
              <ImpactBar 
                label="Serious" 
                count={summary.impactBreakdown.serious} 
                total={summary.violations}
                color="bg-orange-500"
                description="Significant barriers"
              />
              <ImpactBar 
                label="Moderate" 
                count={summary.impactBreakdown.moderate} 
                total={summary.violations}
                color="bg-yellow-500"
                description="Some difficulty"
              />
              <ImpactBar 
                label="Minor" 
                count={summary.impactBreakdown.minor} 
                total={summary.violations}
                color="bg-blue-500"
                description="Small inconvenience"
              />
            </CardContent>
          </Card>

          {/* Fix Complexity Breakdown */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <CardTitle className="text-sm font-medium">Fix Complexity</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ComplexityBar 
                complexity="quick" 
                count={summary.fixComplexityBreakdown.quick} 
                total={summary.violations}
              />
              <ComplexityBar 
                complexity="moderate" 
                count={summary.fixComplexityBreakdown.moderate} 
                total={summary.violations}
              />
              <ComplexityBar 
                complexity="complex" 
                count={summary.fixComplexityBreakdown.complex} 
                total={summary.violations}
              />
              
              {/* Estimated Total Time */}
              <div className="pt-3 border-t mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <span className="text-muted-foreground">Estimated Total Fix Time</span>
                  </div>
                  <span className="font-medium">
                    {formatTimeRange(
                      summary.estimatedFixTime.min,
                      summary.estimatedFixTime.max,
                      summary.estimatedFixTime.unit
                    )}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quick Wins Section */}
      {summary.fixComplexityBreakdown.quick > 0 && (
        <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
          <CardContent className="py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-900">
                <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium text-green-800 dark:text-green-200">
                  {formatCount(summary.fixComplexityBreakdown.quick, 'Quick Win')} Available!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Start with easy fixes to improve your score quickly.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

interface ImpactBarProps {
  label: string
  count: number
  total: number
  color: string
  description: string
}

function ImpactBar({ label, count, total, color, description }: ImpactBarProps) {
  const percentage = total > 0 ? (count / total) * 100 : 0
  
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{count}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full ${color} transition-all duration-300`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground w-10 text-right">
          {Math.round(percentage)}%
        </span>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  )
}

interface ComplexityBarProps {
  complexity: FixComplexity
  count: number
  total: number
}

function ComplexityBar({ complexity, count, total }: ComplexityBarProps) {
  const percentage = total > 0 ? (count / total) * 100 : 0
  
  const getColor = (c: FixComplexity) => {
    switch (c) {
      case 'quick': return 'bg-green-500'
      case 'moderate': return 'bg-yellow-500'
      case 'complex': return 'bg-red-500'
    }
  }

  const getDescription = (c: FixComplexity) => {
    switch (c) {
      case 'quick': return '1-5 min per fix'
      case 'moderate': return '5-15 min per fix'
      case 'complex': return '15+ min per fix'
    }
  }
  
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{formatFixComplexity(complexity)}</span>
        <span className="text-muted-foreground">{count}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full ${getColor(complexity)} transition-all duration-300`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground w-10 text-right">
          {Math.round(percentage)}%
        </span>
      </div>
      <p className="text-xs text-muted-foreground">{getDescription(complexity)}</p>
    </div>
  )
}

// Compact summary for smaller displays
interface CompactSummaryProps {
  results: ProcessedResults
}

export function CompactSummary({ results }: CompactSummaryProps) {
  const { summary } = results
  
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-2">
        <div className={`text-2xl font-bold ${getComplianceScoreColor(summary.complianceScore)}`}>
          {summary.complianceScore}%
        </div>
        <span className="text-sm text-muted-foreground">compliance</span>
      </div>
      <div className="h-6 w-px bg-border" />
      <div className="flex items-center gap-4 text-sm">
        <span className="text-destructive font-medium">
          {summary.violations} violations
        </span>
        <span className="text-green-600 dark:text-green-400">
          {summary.passes} passed
        </span>
        <span className="text-yellow-600 dark:text-yellow-400">
          {summary.incomplete} incomplete
        </span>
      </div>
    </div>
  )
}
