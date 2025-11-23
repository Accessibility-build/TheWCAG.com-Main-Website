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
  if (level === "AAA") {
    return successCriteria // All criteria
  } else if (level === "AA") {
    return successCriteria.filter((c) => c.level === "A" || c.level === "AA")
  } else {
    return successCriteria.filter((c) => c.level === "A")
  }
}

