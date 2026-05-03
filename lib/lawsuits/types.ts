/**
 * Shared type definitions for the lawsuits dataset.
 *
 * Source-of-truth for the type shape. The actual data array lives in
 * `lib/lawsuits-data.tsx`; helpers live in `lib/lawsuits/helpers.ts`.
 */

export interface Lawsuit {
  slug: string
  title: string
  defendant: string
  plaintiff: string
  dateFiled: string
  dateResolved?: string
  status: "settled" | "ongoing" | "dismissed" | "won"
  settlementAmount?: string
  summary: string
  details: string
  issues: string[]
  wcagLevel?: "A" | "AA" | "AAA"
  jurisdiction: string
  caseNumber?: string
  category:
    | "digital"
    | "physical"
    | "employment"
    | "healthcare"
    | "housing"
    | "transportation"
    | "international"
  officialLinks?: Array<{
    title: string
    url: string
  }>
  unofficialLinks?: Array<{
    title: string
    url: string
  }>
  relatedLinks?: Array<{
    title: string
    url: string
  }>
  keyTakeaways: string[]
  impact: string
}

export interface LawsuitCategory {
  name: string
  description: string
  count: number
}
