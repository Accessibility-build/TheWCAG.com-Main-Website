// Re-export everything from the wcag module for backward compatibility
// This allows existing imports to continue working
export type { SuccessCriterion } from './wcag/types'
export { principles } from './wcag/principles'
export {
  successCriteria,
  getCriteriaByPrinciple,
  getCriterionById,
  getNewCriteria,
  getCriteriaByLevel,
} from './wcag/index'
