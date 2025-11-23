// Export all perceivable criteria organized by guideline
export { textAlternativesCriteria } from './1.1-text-alternatives'
export { timeBasedMediaCriteria } from './1.2-time-based-media'
export { adaptableCriteria } from './1.3-adaptable'
export { distinguishableCriteria } from './1.4-distinguishable'

// Combine all perceivable criteria
import { textAlternativesCriteria } from './1.1-text-alternatives'
import { timeBasedMediaCriteria } from './1.2-time-based-media'
import { adaptableCriteria } from './1.3-adaptable'
import { distinguishableCriteria } from './1.4-distinguishable'
import type { SuccessCriterion } from '../types'

export const perceivableCriteria: SuccessCriterion[] = [
  ...textAlternativesCriteria,
  ...timeBasedMediaCriteria,
  ...adaptableCriteria,
  ...distinguishableCriteria,
]

