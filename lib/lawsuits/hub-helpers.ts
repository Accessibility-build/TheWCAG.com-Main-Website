import { lawsuits } from "./data"
import type { Lawsuit } from "./types"

/**
 * Helpers for the auto-generated hub pages under /lawsuits/{year,category,status}.
 * All values are derived from the canonical `lawsuits` array so adding a new
 * entry automatically populates the corresponding hub.
 */

const CATEGORY_LABELS: Record<Lawsuit["category"], { name: string; description: string }> = {
  digital: {
    name: "Digital & Web Accessibility",
    description: "Website, mobile app, and software accessibility lawsuits — typically ADA Title III claims.",
  },
  employment: {
    name: "Employment",
    description: "Workplace discrimination, hiring barriers, and reasonable-accommodation failures under ADA Title I.",
  },
  physical: {
    name: "Physical Accessibility",
    description: "Architectural and built-environment barriers in places of public accommodation.",
  },
  healthcare: {
    name: "Healthcare",
    description: "Hospitals, clinics, patient portals, and health-service accessibility claims.",
  },
  housing: {
    name: "Housing",
    description: "Residential and housing-related accessibility violations under the Fair Housing Act and ADA.",
  },
  transportation: {
    name: "Transportation",
    description: "Airline, transit, and rideshare accessibility cases.",
  },
  international: {
    name: "International",
    description: "Accessibility enforcement actions and rulings outside the United States.",
  },
}

const STATUS_LABELS: Record<Lawsuit["status"], { name: string; description: string }> = {
  settled: {
    name: "Settled",
    description: "Cases that ended in a settlement agreement, often with monetary payment and remediation commitments.",
  },
  ongoing: {
    name: "Ongoing",
    description: "Active cases that have not yet been decided or settled.",
  },
  dismissed: {
    name: "Dismissed",
    description: "Cases dismissed by the court — frequently on standing or jurisdictional grounds.",
  },
  won: {
    name: "Plaintiff Verdict",
    description: "Cases where the plaintiff prevailed at trial or via a final judgment.",
  },
}

export function lawsuitYears(): string[] {
  const years = new Set<string>()
  for (const l of lawsuits) {
    const y = new Date(l.dateFiled).getFullYear()
    if (!Number.isNaN(y)) years.add(String(y))
  }
  return [...years].sort((a, b) => Number(b) - Number(a))
}

export function lawsuitsForYear(year: string): Lawsuit[] {
  return lawsuits
    .filter((l) => String(new Date(l.dateFiled).getFullYear()) === year)
    .sort((a, b) => new Date(b.dateFiled).getTime() - new Date(a.dateFiled).getTime())
}

export function lawsuitsForCategory(category: Lawsuit["category"]): Lawsuit[] {
  return lawsuits
    .filter((l) => l.category === category)
    .sort((a, b) => new Date(b.dateFiled).getTime() - new Date(a.dateFiled).getTime())
}

export function lawsuitsForStatus(status: Lawsuit["status"]): Lawsuit[] {
  return lawsuits
    .filter((l) => l.status === status)
    .sort((a, b) => new Date(b.dateFiled).getTime() - new Date(a.dateFiled).getTime())
}

export function categoryLabel(category: Lawsuit["category"]) {
  return CATEGORY_LABELS[category]
}

export function statusLabel(status: Lawsuit["status"]) {
  return STATUS_LABELS[status]
}

export function isCategoryKey(value: string): value is Lawsuit["category"] {
  return value in CATEGORY_LABELS
}

export function isStatusKey(value: string): value is Lawsuit["status"] {
  return value in STATUS_LABELS
}

export function categoryKeys(): Lawsuit["category"][] {
  return Object.keys(CATEGORY_LABELS) as Lawsuit["category"][]
}

export function statusKeys(): Lawsuit["status"][] {
  return Object.keys(STATUS_LABELS) as Lawsuit["status"][]
}
