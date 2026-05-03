/**
 * Single import surface for the lawsuits dataset.
 *
 *   import { lawsuits, getAllLawsuits, type Lawsuit } from '@/lib/lawsuits'
 *
 * Backwards compatibility: `@/lib/lawsuits-data` still works and re-exports
 * the same names.
 */
export type { Lawsuit, LawsuitCategory } from "./types"
export { lawsuits } from "./data"
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
} from "./helpers"
