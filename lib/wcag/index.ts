// Export types
export type { SuccessCriterion } from './types'

// Export principles
export { principles } from './principles'

// Export all criteria from each principle
export { perceivableCriteria } from './perceivable'
export { operableCriteria } from './operable'
export { understandableCriteria } from './understandable'
export { robustCriteria } from './robust'

// Combine all criteria into a single array
import { perceivableCriteria } from './perceivable/index'
import { operableCriteria } from './operable/index'
import { understandableCriteria } from './understandable/index'
import { robustCriteria } from './robust/index'
import type { SuccessCriterion } from './types'

export const successCriteria: SuccessCriterion[] = [
  ...perceivableCriteria,
  ...operableCriteria,
  ...understandableCriteria,
  ...robustCriteria,
]

// Utility functions
export function getCriteriaByPrinciple(principle: string) {
  return successCriteria.filter((c) => c.principle === principle)
}

export function getCriterionById(id: string) {
  return successCriteria.find((c) => c.id === id)
}

export function getNewCriteria() {
  return successCriteria.filter((c) => c.isNew)
}

export function getCriteriaByLevel(level: "A" | "AA" | "AAA") {
  return successCriteria.filter((c) => c.level === level)
}

/**
 * Get all criteria required for the given conformance target.
 * AAA conformance includes A + AA + AAA. AA conformance includes A + AA.
 */
export function getCriteriaForConformance(target: "A" | "AA" | "AAA") {
  if (target === "AAA") return successCriteria
  if (target === "AA") return successCriteria.filter((c) => c.level === "A" || c.level === "AA")
  return successCriteria.filter((c) => c.level === "A")
}

