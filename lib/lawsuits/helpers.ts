/**
 * Helpers, categories index, and the archive→detailed-slug mapping for the
 * lawsuits dataset. Importing this module pulls in the full lawsuits array
 * once via `lawsuits-data`, so prefer importing the helpers here rather than
 * re-implementing them at call sites.
 */
import { lawsuits } from "./data"
import type { Lawsuit, LawsuitCategory } from "./types"

export type { Lawsuit, LawsuitCategory } from "./types"

export const categories: LawsuitCategory[] = [
  {
    name: "Digital & Web Accessibility",
    description: "Website and app accessibility lawsuits under ADA Title III",
    count: lawsuits.filter((l) => l.category === "digital").length,
  },
  {
    name: "Employment",
    description: "Workplace discrimination and accommodation failures (ADA Title I)",
    count: lawsuits.filter((l) => l.category === "employment").length,
  },
  {
    name: "Physical Accessibility",
    description: "Building, facility, and public accommodation barriers",
    count: lawsuits.filter((l) => l.category === "physical").length,
  },
  {
    name: "Transportation",
    description: "Airline, transit, and rideshare accessibility",
    count: lawsuits.filter((l) => l.category === "transportation").length,
  },
  {
    name: "Healthcare",
    description: "Hospital, medical facility, and health service accessibility",
    count: lawsuits.filter((l) => l.category === "healthcare").length,
  },
  {
    name: "Housing",
    description: "Residential and housing accessibility violations",
    count: lawsuits.filter((l) => l.category === "housing").length,
  },
  {
    name: "International",
    description: "Accessibility enforcement actions outside United States",
    count: lawsuits.filter((l) => l.category === "international").length,
  },
]

// Helper functions
export function getAllLawsuits(): Lawsuit[] {
  return lawsuits
}

export function getLawsuitBySlug(slug: string): Lawsuit | undefined {
  return lawsuits.find((lawsuit) => lawsuit.slug === slug)
}

export function getLawsuitsByStatus(status: Lawsuit["status"]): Lawsuit[] {
  return lawsuits.filter((lawsuit) => lawsuit.status === status)
}

export function getRecentLawsuits(count: number = 5): Lawsuit[] {
  return lawsuits
    .filter((lawsuit) => lawsuit.dateResolved)
    .sort(
      (a, b) =>
        new Date(b.dateResolved || 0).getTime() -
        new Date(a.dateResolved || 0).getTime()
    )
    .slice(0, count)
}

/**
 * Get the latest N lawsuits by filing date (includes both ongoing and settled)
 * Returns the most recently filed lawsuits
 */
export function getLatestLawsuits(count: number = 4): Lawsuit[] {
  return lawsuits
    .sort(
      (a, b) =>
        new Date(b.dateFiled).getTime() - new Date(a.dateFiled).getTime()
    )
    .slice(0, count)
}

export function getLawsuitsByCategory(category: string): Lawsuit[] {
  return lawsuits.filter((lawsuit) => lawsuit.category === category)
}

/**
 * Get lawsuits from the last N years (default: 3 years)
 * Returns lawsuits filed in the current year and the previous N-1 years
 */
export function getRecentLawsuitsByYears(years: number = 3): Lawsuit[] {
  const currentYear = new Date().getFullYear()
  const startYear = currentYear - (years - 1)

  return lawsuits.filter((lawsuit) => {
    const filedYear = new Date(lawsuit.dateFiled).getFullYear()
    return filedYear >= startYear && filedYear <= currentYear
  })
}

/**
 * Manual mapping of archive lawsuits to detailed lawsuit slugs
 * This is a comprehensive manual mapping based on exact data analysis
 */
const ARCHIVE_TO_DETAILED_MAP: Record<string, string> = {
  // 2000 cases
  "2000|Brown, et al|Bank of America": "brown-v-bank-of-america-2000",
  "2000|NFB, et al.|HDVest, Intuit, H & R Block, and Gilman & Ciocia": "nfb-v-hdvest-intuit-hrblock-2000",

  // 2001 cases
  "2001|Bay State Council of the Blind, et al.|Fleet Bank": "bay-state-council-v-fleet-bank-2001",

  // 2002 cases
  "2002|Bay State Council of the Blind, et al.|Sovereign Bank": "bay-state-council-v-sovereign-bank-2002",
  "2002|Martinez, et al.|Washington Mutual": "martinez-v-washington-mutual-2002",

  // 2003 cases
  "2003|Kelly Pierce, Anna Byrne|Bank One": "pierce-byrne-v-bank-one-2003",
  "2003|Carmelle, et al|First Union": "carmelle-v-first-union-2003",
  "2003|US Dept. Of Education|CSU Fullerton": "us-doe-v-csu-fullerton-2003",

  // 2004 DOJ cases
  "2004|US DOJ|Butler County, MO": "doj-v-butler-county-mo-2004",
  "2004|US DOJ|Carpinteria": "doj-v-carpinteria-2004",
  "2004|US DOJ|Cheshire County, NH": "doj-v-cheshire-county-nh-2004",
  "2004|US DOJ|City of Bend, OR": "doj-v-city-of-bend-or-2004",
  "2004|US DOJ|City of Burton, MI": "doj-v-city-of-burton-mi-2004",
  "2004|US DOJ|City of Coral Gables": "doj-v-city-of-coral-gables-2004",
  "2004|US DOJ|City of Davenport, IA": "doj-v-city-of-davenport-ia-2004",
  "2004|US DOJ|City of Frederick, MD": "doj-v-city-of-frederick-md-2004",
  "2004|US DOJ|City of Gallup, NM": "doj-v-city-of-gallup-nm-2004",
  "2004|US DOJ|City of Green Bay, WI": "doj-v-city-of-green-bay-wi-2004",
  "2004|US DOJ|City of San Luis Obispo": "doj-v-city-of-san-luis-obispo-2004",
  "2004|US DOJ|City of San Rafael, CA": "doj-v-city-of-san-rafael-ca-2004",
  "2004|US DOJ|City of Suffolk, VA": "doj-v-city-of-suffolk-va-2004",
  "2004|US DOJ|County of Cape May, NJ": "doj-v-county-of-cape-may-nj-2004",
  "2004|US DOJ|Deschutes County, OR": "doj-v-deschutes-county-or-2004",
  "2004|US DOJ|Highland County, OH": "doj-v-highland-county-oh-2004",
  "2004|US DOJ|Jeffersonville, IN": "doj-v-jeffersonville-in-2004",
  "2004|US DOJ|Lafayette County, FL": "doj-v-lafayette-county-fl-2004",
  "2004|US DOJ|Minnehaha, SD": "doj-v-minnehaha-sd-2004",
  "2004|US DOJ|Missoula County, MT": "doj-v-missoula-county-mt-2004",
  "2004|US DOJ|Taos County, NM": "doj-v-taos-county-nm-2004",
  "2004|US DOJ|The City and Borough of Juneau, AK": "doj-v-juneau-ak-2004",
  "2004|US DOJ|Town of Brunswick, ME": "doj-v-town-of-brunswick-me-2004",
  "2004|US DOJ|Town of Fountain Hills, AZ": "doj-v-town-of-fountain-hills-az-2004",
  "2004|US DOJ|Town of Vail CO": "doj-v-town-of-vail-co-2004",
  "2004|US DOJ|Town of Vail, CO": "doj-v-town-of-vail-co-2004",
  "2004|US DOJ|Vail Recreation District": "doj-v-vail-recreation-district-2004",
  "2004|US DOJ|Washington County, UT": "doj-v-washington-county-ut-2004",

  // 2005 DOJ cases
  "2005|US DOJ|Ada County, ID": "doj-v-ada-county-id-2005",
  "2005|US DOJ|Allen County, IN": "doj-v-allen-county-in-2005",
  "2005|US DOJ|Amarillo, TX": "doj-v-amarillo-tx-2005",
  "2005|US DOJ|Barnstable County, MA": "doj-v-barnstable-county-ma-2005",
  "2005|US DOJ|Billings, MT": "doj-v-billings-mt-2005",
  "2005|US DOJ|Birmingham, AL": "doj-v-birmingham-al-2005",
  "2005|US DOJ|City of Durham, NC": "doj-v-city-of-durham-nc-2005",
  "2005|US DOJ|City of Fontana, CA": "doj-v-city-of-fontana-ca-2005",

  // 2005 other cases
  "2005|ACB, et al.|LaSalle Bank": "acb-v-lasalle-bank-2005",
}

/**
 * Find a detailed lawsuit that matches an archive lawsuit
 * Uses manual mapping for exact matches, with fallback to normalized matching
 */
export function findMatchingDetailedLawsuit(
  archiveDefendant: string,
  archiveYear: string,
  archivePlaintiff?: string
): Lawsuit | undefined {
  // First, try exact manual mapping with plaintiff
  const plaintiff = archivePlaintiff || ""
  const mapKey = `${archiveYear}|${plaintiff}|${archiveDefendant}`
  const mappedSlug = ARCHIVE_TO_DETAILED_MAP[mapKey]

  if (mappedSlug) {
    return lawsuits.find((l) => l.slug === mappedSlug)
  }

  // For DOJ cases, try matching by defendant and year (plaintiff is always "US DOJ" or "U.S. Department of Justice")
  if (plaintiff.includes("DOJ") || plaintiff.includes("Department of Justice")) {
    // Try with "US DOJ" as plaintiff
    const dojMapKey = `${archiveYear}|US DOJ|${archiveDefendant}`
    const dojMappedSlug = ARCHIVE_TO_DETAILED_MAP[dojMapKey]
    if (dojMappedSlug) {
      return lawsuits.find((l) => l.slug === dojMappedSlug)
    }

    // Try without comma variations (e.g., "Town of Vail CO" vs "Town of Vail, CO")
    const normalizedDefendant = archiveDefendant.replace(/,/g, "")
    const normalizedMapKey = `${archiveYear}|US DOJ|${normalizedDefendant}`
    const normalizedMappedSlug = ARCHIVE_TO_DETAILED_MAP[normalizedMapKey]
    if (normalizedMappedSlug) {
      return lawsuits.find((l) => l.slug === normalizedMappedSlug)
    }
  }

  // Fallback: try without plaintiff (for cases that might have slight variations)
  const mapKeyNoPlaintiff = `${archiveYear}||${archiveDefendant}`
  const mappedSlugNoPlaintiff = ARCHIVE_TO_DETAILED_MAP[mapKeyNoPlaintiff]
  if (mappedSlugNoPlaintiff) {
    return lawsuits.find((l) => l.slug === mappedSlugNoPlaintiff)
  }

  // Fallback to normalized matching for any remaining cases
  const normalizeName = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/\s+(inc|llc|ltd|corp|corporation|company|co)\.?$/i, "")
      .replace(/[.,]/g, "")
      .trim()
  }

  const splitDefendants = (name: string): string[] => {
    return name
      .split(/\s+and\s+/i)
      .map((n) => normalizeName(n))
      .filter((n) => n.length > 0)
  }

  const archiveDefendants = splitDefendants(archiveDefendant)
  const archiveYearNum = parseInt(archiveYear)

  return lawsuits.find((lawsuit) => {
    const lawsuitDefendants = splitDefendants(lawsuit.defendant)
    const lawsuitYear = new Date(lawsuit.dateFiled).getFullYear().toString()

    const nameMatches = archiveDefendants.some((archiveDef) => {
      return lawsuitDefendants.some((lawsuitDef) => {
        return (
          lawsuitDef.includes(archiveDef) ||
          archiveDef.includes(lawsuitDef) ||
          lawsuitDef === archiveDef
        )
      })
    })

    const yearMatches = lawsuitYear === archiveYear || Math.abs(parseInt(lawsuitYear) - archiveYearNum) <= 1

    return nameMatches && yearMatches
  })
}
