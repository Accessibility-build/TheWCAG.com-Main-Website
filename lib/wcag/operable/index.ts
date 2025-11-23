// Export all operable criteria organized by guideline
export { keyboardAccessibleCriteria } from './2.1-keyboard-accessible'
export { enoughTimeCriteria } from './2.2-enough-time'
export { seizuresCriteria } from './2.3-seizures'
export { navigableCriteria } from './2.4-navigable'
export { inputModalitiesCriteria } from './2.5-input-modalities'

// Combine all operable criteria
import { keyboardAccessibleCriteria } from './2.1-keyboard-accessible'
import { enoughTimeCriteria } from './2.2-enough-time'
import { seizuresCriteria } from './2.3-seizures'
import { navigableCriteria } from './2.4-navigable'
import { inputModalitiesCriteria } from './2.5-input-modalities'
import type { SuccessCriterion } from '../types'

export const operableCriteria: SuccessCriterion[] = [
  ...keyboardAccessibleCriteria,
  ...enoughTimeCriteria,
  ...seizuresCriteria,
  ...navigableCriteria,
  ...inputModalitiesCriteria,
]

