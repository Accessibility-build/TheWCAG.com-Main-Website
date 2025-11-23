// Export all understandable criteria organized by guideline
export { readableCriteria } from './3.1-readable'
export { predictableCriteria } from './3.2-predictable'
export { inputAssistanceCriteria } from './3.3-input-assistance'

// Combine all understandable criteria
import { readableCriteria } from './3.1-readable'
import { predictableCriteria } from './3.2-predictable'
import { inputAssistanceCriteria } from './3.3-input-assistance'
import type { SuccessCriterion } from '../types'

export const understandableCriteria: SuccessCriterion[] = [
  ...readableCriteria,
  ...predictableCriteria,
  ...inputAssistanceCriteria,
]

