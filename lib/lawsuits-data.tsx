/**
 * Backwards-compat barrel for `@/lib/lawsuits-data`.
 *
 * The actual content has moved:
 *   - Type:         lib/lawsuits/types.ts
 *   - Data array:   lib/lawsuits/data.ts
 *   - Helpers:      lib/lawsuits/helpers.ts
 *   - Public API:   lib/lawsuits/index.ts
 *
 * Existing call sites (`import { lawsuits, getAllLawsuits, type Lawsuit } from '@/lib/lawsuits-data'`)
 * continue to work unchanged.
 */
export type { Lawsuit, LawsuitCategory } from "./lawsuits/types"
export { lawsuits } from "./lawsuits/data"
export {
  categories,
  getAllLawsuits,
  getLawsuitBySlug,
  getLawsuitsByStatus,
  getRecentLawsuits,
  getLatestLawsuits,
  getLawsuitsByCategory,
  getRecentLawsuitsByYears,
  findMatchingDetailedLawsuit,
} from "./lawsuits/helpers"
