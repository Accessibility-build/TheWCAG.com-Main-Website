/**
 * Process and format axe-core accessibility test results
 */

export interface AxeViolation {
  id: string
  impact?: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  help: string
  helpUrl: string
  tags: string[]
  nodes: Array<{
    html: string
    target: string[]
    failureSummary?: string
    any?: Array<{ message: string }>
    all?: Array<{ message: string }>
    none?: Array<{ message: string }>
  }>
}

export interface AxePass {
  id: string
  description: string
  help: string
  helpUrl: string
  tags: string[]
  nodes: Array<{
    html: string
    target: string[]
  }>
}

export interface AxeIncomplete {
  id: string
  impact?: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  help: string
  helpUrl: string
  tags: string[]
  nodes: Array<{
    html: string
    target: string[]
    failureSummary?: string
  }>
}

export interface ProcessedResults {
  url: string
  timestamp: string
  violations: ProcessedViolation[]
  passes: ProcessedPass[]
  incomplete: ProcessedIncomplete[]
  summary: {
    violations: number
    passes: number
    incomplete: number
    totalIssues: number
  }
}

export interface ProcessedViolation {
  id: string
  ruleName: string
  impact: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  help: string
  helpUrl: string
  wcagCriteria: string[]
  affectedElements: Array<{
    html: string
    selector: string
    failureSummary?: string
    fixGuidance?: string
  }>
  fixGuidance: string
}

export interface ProcessedPass {
  id: string
  ruleName: string
  description: string
  help: string
  helpUrl: string
  wcagCriteria: string[]
  checkedElements: number
}

export interface ProcessedIncomplete {
  id: string
  ruleName: string
  impact?: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  help: string
  helpUrl: string
  wcagCriteria: string[]
  affectedElements: Array<{
    html: string
    selector: string
    failureSummary?: string
  }>
}

/**
 * Map axe-core rule IDs to WCAG success criteria
 */
function mapToWCAGCriteria(tags: string[]): string[] {
  const wcagCriteria: string[] = []
  
  // Extract WCAG criteria from tags
  tags.forEach((tag) => {
    if (tag.startsWith('wcag')) {
      // Convert tags like "wcag2a", "wcag2aa" to criteria
      if (tag.includes('2a')) {
        wcagCriteria.push('WCAG 2.0 Level A')
      }
      if (tag.includes('2aa')) {
        wcagCriteria.push('WCAG 2.0 Level AA')
      }
      if (tag.includes('21aa')) {
        wcagCriteria.push('WCAG 2.1 Level AA')
      }
      if (tag.includes('22aa')) {
        wcagCriteria.push('WCAG 2.2 Level AA')
      }
    }
  })

  return [...new Set(wcagCriteria)] // Remove duplicates
}

/**
 * Extract fix guidance from violation node
 */
function extractFixGuidance(node: AxeViolation['nodes'][0]): string {
  const guidance: string[] = []

  if (node.failureSummary) {
    guidance.push(node.failureSummary)
  }

  if (node.any && node.any.length > 0) {
    node.any.forEach((check) => {
      if (check.message) {
        guidance.push(check.message)
      }
    })
  }

  if (node.all && node.all.length > 0) {
    node.all.forEach((check) => {
      if (check.message) {
        guidance.push(check.message)
      }
    })
  }

  if (node.none && node.none.length > 0) {
    node.none.forEach((check) => {
      if (check.message) {
        guidance.push(check.message)
      }
    })
  }

  return guidance.join(' ') || 'Review the element and ensure it meets accessibility requirements.'
}

/**
 * Process violations
 */
function processViolations(violations: AxeViolation[]): ProcessedViolation[] {
  return violations.map((violation) => {
    const processedViolation: ProcessedViolation = {
      id: violation.id,
      ruleName: violation.id,
      impact: violation.impact || 'moderate',
      description: violation.description,
      help: violation.help,
      helpUrl: violation.helpUrl,
      wcagCriteria: mapToWCAGCriteria(violation.tags),
      affectedElements: violation.nodes.map((node) => ({
        html: node.html,
        selector: node.target.join(' '),
        failureSummary: node.failureSummary,
        fixGuidance: extractFixGuidance(node),
      })),
      fixGuidance: violation.help,
    }

    return processedViolation
  })
}

/**
 * Process passes
 */
function processPasses(passes: AxePass[]): ProcessedPass[] {
  return passes.map((pass) => ({
    id: pass.id,
    ruleName: pass.id,
    description: pass.description,
    help: pass.help,
    helpUrl: pass.helpUrl,
    wcagCriteria: mapToWCAGCriteria(pass.tags),
    checkedElements: pass.nodes.length,
  }))
}

/**
 * Process incomplete checks
 */
function processIncomplete(incomplete: AxeIncomplete[]): ProcessedIncomplete[] {
  return incomplete.map((item) => ({
    id: item.id,
    ruleName: item.id,
    impact: item.impact,
    description: item.description,
    help: item.help,
    helpUrl: item.helpUrl,
    wcagCriteria: mapToWCAGCriteria(item.tags),
    affectedElements: item.nodes.map((node) => ({
      html: node.html,
      selector: node.target.join(' '),
      failureSummary: node.failureSummary,
    })),
  }))
}

/**
 * Process raw axe-core results
 */
export function processAxeResults(
  url: string,
  results: {
    violations: AxeViolation[]
    passes: AxePass[]
    incomplete: AxeIncomplete[]
  }
): ProcessedResults {
  const violations = processViolations(results.violations)
  const passes = processPasses(results.passes)
  const incomplete = processIncomplete(results.incomplete)

  // Sort violations by impact (critical first)
  const impactOrder: Record<string, number> = {
    critical: 0,
    serious: 1,
    moderate: 2,
    minor: 3,
  }

  violations.sort((a, b) => {
    return (impactOrder[a.impact] || 99) - (impactOrder[b.impact] || 99)
  })

  return {
    url,
    timestamp: new Date().toISOString(),
    violations,
    passes,
    incomplete,
    summary: {
      violations: violations.length,
      passes: passes.length,
      incomplete: incomplete.length,
      totalIssues: violations.length + incomplete.length,
    },
  }
}

/**
 * Format impact level for display
 */
export function formatImpact(impact?: string): string {
  if (!impact) return 'Unknown'
  return impact.charAt(0).toUpperCase() + impact.slice(1)
}

/**
 * Get impact color class
 */
export function getImpactColor(impact?: string): string {
  switch (impact) {
    case 'critical':
      return 'text-red-600 dark:text-red-400'
    case 'serious':
      return 'text-orange-600 dark:text-orange-400'
    case 'moderate':
      return 'text-yellow-600 dark:text-yellow-400'
    case 'minor':
      return 'text-blue-600 dark:text-blue-400'
    default:
      return 'text-muted-foreground'
  }
}

/**
 * Get impact badge variant
 */
export function getImpactBadgeVariant(impact?: string): 'destructive' | 'default' | 'secondary' | 'outline' {
  switch (impact) {
    case 'critical':
      return 'destructive'
    case 'serious':
      return 'default'
    case 'moderate':
      return 'secondary'
    case 'minor':
      return 'outline'
    default:
      return 'outline'
  }
}

