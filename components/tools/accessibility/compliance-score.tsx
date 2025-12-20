"use client"

import { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Award, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Info
} from "lucide-react"
import type { ProcessedResults, WCAGCriterion } from "@/lib/tools/accessibility/processor"
import { 
  getComplianceScoreColor, 
  getComplianceScoreBgColor 
} from "@/lib/tools/accessibility/processor"
import { getScoreGrade } from "@/lib/tools/accessibility/formatters"

interface ComplianceScoreProps {
  results: ProcessedResults
  size?: 'sm' | 'md' | 'lg'
  showBreakdown?: boolean
}

export function ComplianceScore({ results, size = 'md', showBreakdown = true }: ComplianceScoreProps) {
  const { summary } = results
  const scoreGrade = getScoreGrade(summary.complianceScore)
  
  // Calculate WCAG level breakdown
  const wcagBreakdown = useMemo(() => {
    const breakdown: Record<'A' | 'AA' | 'AAA', { passed: number; failed: number }> = {
      A: { passed: 0, failed: 0 },
      AA: { passed: 0, failed: 0 },
      AAA: { passed: 0, failed: 0 },
    }
    
    // Count violations by level
    results.violations.forEach(v => {
      v.wcagCriteria.forEach(criterion => {
        if (criterion.level) {
          breakdown[criterion.level].failed++
        }
      })
    })
    
    // Count passes by level
    results.passes.forEach(p => {
      p.wcagCriteria.forEach(criterion => {
        if (criterion.level) {
          breakdown[criterion.level].passed++
        }
      })
    })
    
    return breakdown
  }, [results])
  
  // Calculate level compliance percentages
  const levelCompliance = useMemo(() => {
    const calculatePercent = (level: 'A' | 'AA' | 'AAA') => {
      const total = wcagBreakdown[level].passed + wcagBreakdown[level].failed
      if (total === 0) return 100
      return Math.round((wcagBreakdown[level].passed / total) * 100)
    }
    
    return {
      A: calculatePercent('A'),
      AA: calculatePercent('AA'),
      AAA: calculatePercent('AAA'),
    }
  }, [wcagBreakdown])
  
  const sizeClasses = {
    sm: { circle: 'h-16 w-16', text: 'text-lg', label: 'text-xs' },
    md: { circle: 'h-24 w-24', text: 'text-2xl', label: 'text-sm' },
    lg: { circle: 'h-32 w-32', text: 'text-4xl', label: 'text-base' },
  }

  const circleSize = size === 'sm' ? 32 : size === 'md' ? 48 : 64
  const strokeWidth = size === 'sm' ? 4 : 6

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Award className="h-4 w-4" aria-hidden="true" />
            Compliance Score
          </CardTitle>
          <Badge 
            variant="outline" 
            className={`${getComplianceScoreColor(summary.complianceScore)}`}
          >
            Grade {scoreGrade.grade}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Score Circle */}
        <div className="flex items-center gap-6">
          <div className="relative flex-shrink-0">
            <svg className={`${sizeClasses[size].circle} transform -rotate-90`}>
              {/* Background circle */}
              <circle
                cx={circleSize}
                cy={circleSize}
                r={circleSize - strokeWidth}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className="text-muted"
              />
              {/* Progress circle */}
              <circle
                cx={circleSize}
                cy={circleSize}
                r={circleSize - strokeWidth}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeDasharray={`${(summary.complianceScore / 100) * (2 * Math.PI * (circleSize - strokeWidth))} ${2 * Math.PI * (circleSize - strokeWidth)}`}
                strokeLinecap="round"
                className={getComplianceScoreBgColor(summary.complianceScore).replace('bg-', 'text-')}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`font-bold ${sizeClasses[size].text} ${getComplianceScoreColor(summary.complianceScore)}`}>
                {summary.complianceScore}
              </span>
            </div>
          </div>
          
          <div className="flex-1">
            <div className={`font-semibold ${sizeClasses[size].label} ${getComplianceScoreColor(summary.complianceScore)}`}>
              {scoreGrade.label}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {scoreGrade.description}
            </p>
            
            {/* Quick stats */}
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1 text-xs">
                {summary.violations > 0 ? (
                  <TrendingDown className="h-3 w-3 text-destructive" aria-hidden="true" />
                ) : (
                  <TrendingUp className="h-3 w-3 text-green-600" aria-hidden="true" />
                )}
                <span className="text-muted-foreground">
                  {summary.violations > 0 
                    ? `${summary.violations} issues to fix`
                    : 'All checks passed'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* WCAG Level Breakdown */}
        {showBreakdown && (
          <div className="space-y-4">
            <h4 className="text-sm font-medium flex items-center gap-2">
              WCAG Level Compliance
              <Info className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
            </h4>
            
            <div className="space-y-3">
              <LevelProgressBar 
                level="A" 
                percentage={levelCompliance.A}
                passed={wcagBreakdown.A.passed}
                failed={wcagBreakdown.A.failed}
              />
              <LevelProgressBar 
                level="AA" 
                percentage={levelCompliance.AA}
                passed={wcagBreakdown.AA.passed}
                failed={wcagBreakdown.AA.failed}
              />
              <LevelProgressBar 
                level="AAA" 
                percentage={levelCompliance.AAA}
                passed={wcagBreakdown.AAA.passed}
                failed={wcagBreakdown.AAA.failed}
              />
            </div>

            {/* Level Status Summary */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              <LevelStatusCard level="A" percentage={levelCompliance.A} />
              <LevelStatusCard level="AA" percentage={levelCompliance.AA} />
              <LevelStatusCard level="AAA" percentage={levelCompliance.AAA} />
            </div>
          </div>
        )}

        {/* Recommendations */}
        {summary.violations > 0 && (
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium">Improvement Suggestions</p>
                <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                  {summary.fixComplexityBreakdown.quick > 0 && (
                    <li>• Start with {summary.fixComplexityBreakdown.quick} quick fixes for immediate improvement</li>
                  )}
                  {summary.impactBreakdown.critical > 0 && (
                    <li>• Address {summary.impactBreakdown.critical} critical issues first for maximum impact</li>
                  )}
                  {levelCompliance.A < 100 && (
                    <li>• Focus on Level A compliance - these are the most essential requirements</li>
                  )}
                  {levelCompliance.A === 100 && levelCompliance.AA < 100 && (
                    <li>• Great progress on Level A! Now work towards Level AA compliance</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}

        {summary.complianceScore === 100 && (
          <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 text-center">
            <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" aria-hidden="true" />
            <p className="text-sm font-medium text-green-800 dark:text-green-200">
              Perfect Score! 🎉
            </p>
            <p className="text-xs text-green-700 dark:text-green-300 mt-1">
              All automated accessibility checks passed
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

interface LevelProgressBarProps {
  level: 'A' | 'AA' | 'AAA'
  percentage: number
  passed: number
  failed: number
}

function LevelProgressBar({ level, percentage, passed, failed }: LevelProgressBarProps) {
  const total = passed + failed
  
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium">Level {level}</span>
        <span className="text-muted-foreground">
          {total > 0 ? `${passed}/${total} criteria` : 'No checks'}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Progress value={percentage} className="h-2 flex-1" />
        <span className={`text-xs font-medium w-10 text-right ${getPercentageColor(percentage)}`}>
          {percentage}%
        </span>
      </div>
    </div>
  )
}

interface LevelStatusCardProps {
  level: 'A' | 'AA' | 'AAA'
  percentage: number
}

function LevelStatusCard({ level, percentage }: LevelStatusCardProps) {
  const status = percentage >= 100 ? 'pass' : percentage >= 70 ? 'partial' : 'fail'
  
  const statusConfig = {
    pass: {
      icon: CheckCircle2,
      bg: 'bg-green-50 dark:bg-green-950/30',
      text: 'text-green-700 dark:text-green-300',
      label: 'Compliant',
    },
    partial: {
      icon: AlertTriangle,
      bg: 'bg-yellow-50 dark:bg-yellow-950/30',
      text: 'text-yellow-700 dark:text-yellow-300',
      label: 'Partial',
    },
    fail: {
      icon: AlertTriangle,
      bg: 'bg-red-50 dark:bg-red-950/30',
      text: 'text-red-700 dark:text-red-300',
      label: 'Issues',
    },
  }
  
  const config = statusConfig[status]
  const Icon = config.icon
  
  return (
    <div className={`rounded-lg p-3 text-center ${config.bg}`}>
      <Icon className={`h-4 w-4 mx-auto mb-1 ${config.text}`} aria-hidden="true" />
      <div className={`text-xs font-medium ${config.text}`}>Level {level}</div>
      <div className={`text-[10px] ${config.text}`}>{config.label}</div>
    </div>
  )
}

function getPercentageColor(percentage: number): string {
  if (percentage >= 100) return 'text-green-600 dark:text-green-400'
  if (percentage >= 70) return 'text-yellow-600 dark:text-yellow-400'
  return 'text-red-600 dark:text-red-400'
}

// Compact version for inline display
interface CompactScoreProps {
  score: number
  size?: 'sm' | 'md'
}

export function CompactScore({ score, size = 'md' }: CompactScoreProps) {
  const scoreGrade = getScoreGrade(score)
  
  const sizeClasses = {
    sm: { circle: 'h-10 w-10', text: 'text-sm' },
    md: { circle: 'h-14 w-14', text: 'text-lg' },
  }
  
  const circleSize = size === 'sm' ? 20 : 28
  const strokeWidth = size === 'sm' ? 3 : 4
  
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-shrink-0">
        <svg className={`${sizeClasses[size].circle} transform -rotate-90`}>
          <circle
            cx={circleSize}
            cy={circleSize}
            r={circleSize - strokeWidth}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted"
          />
          <circle
            cx={circleSize}
            cy={circleSize}
            r={circleSize - strokeWidth}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={`${(score / 100) * (2 * Math.PI * (circleSize - strokeWidth))} ${2 * Math.PI * (circleSize - strokeWidth)}`}
            strokeLinecap="round"
            className={getComplianceScoreBgColor(score).replace('bg-', 'text-')}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold ${sizeClasses[size].text} ${getComplianceScoreColor(score)}`}>
            {score}
          </span>
        </div>
      </div>
      <div>
        <div className={`font-medium text-sm ${getComplianceScoreColor(score)}`}>
          {scoreGrade.label}
        </div>
        <div className="text-xs text-muted-foreground">
          Compliance Score
        </div>
      </div>
    </div>
  )
}

// Score change indicator
interface ScoreChangeProps {
  previousScore: number
  currentScore: number
}

export function ScoreChange({ previousScore, currentScore }: ScoreChangeProps) {
  const change = currentScore - previousScore
  const isPositive = change > 0
  const isNeutral = change === 0
  
  if (isNeutral) {
    return (
      <div className="flex items-center gap-1 text-muted-foreground text-sm">
        <span>No change</span>
      </div>
    )
  }
  
  return (
    <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
      {isPositive ? (
        <TrendingUp className="h-4 w-4" aria-hidden="true" />
      ) : (
        <TrendingDown className="h-4 w-4" aria-hidden="true" />
      )}
      <span>
        {isPositive ? '+' : ''}{change} points
      </span>
    </div>
  )
}

