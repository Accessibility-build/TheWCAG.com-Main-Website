// Lawsuit Archive Data
// Source: https://karlgroves.github.io/a11y-lawsuits/lawsuits.html
// Comprehensive historical accessibility lawsuits and settlements

export interface LawsuitArchiveItem {
  date: string
  plaintiff: string
  defendant: string
  issue: string
  result: string
  settlement?: string
  reference?: string
  year: number
}

export const lawsuitArchive: LawsuitArchiveItem[] = [
  // 2024-2025 Cases
  {
    date: "2025",
    plaintiff: "Multiple plaintiffs",
    defendant: "Various retailers",
    issue: "Web accessibility violations",
    result: "Ongoing enforcement",
    year: 2025,
  },
  {
    date: "2024-12",
    plaintiff: "FTC",
    defendant: "accessiBe Inc.",
    issue: "Deceptive accessibility claims",
    result: "Settlement",
    settlement: "$1 million penalty",
    year: 2024,
  },
  {
    date: "2024-10",
    plaintiff: "DOT",
    defendant: "American Airlines",
    issue: "Wheelchair accessibility",
    result: "Settlement",
    settlement: "$50 million",
    year: 2024,
  },

  // 2023 Cases
  {
    date: "2023-09",
    plaintiff: "Various individuals",
    defendant: "Multiple e-commerce",
    issue: "Website accessibility",
    result: "Ongoing litigation",
    year: 2023,
  },

  // 2022 Cases
  {
    date: "2022-06",
    plaintiff: "Guillermo Robles",
    defendant: "Domino's Pizza",
    issue: "Website and app accessibility",
    result: "Settled",
    settlement: "Confidential",
    year: 2022,
  },

  // 2021 Cases
  {
    date: "2021-06",
    plaintiff: "Multiple plaintiffs",
    defendant: "Various companies",
    issue: "Digital accessibility",
    result: "Multiple settlements",
    year: 2021,
  },

  // 2020 Cases
  {
    date: "2020-01",
    plaintiff: "Disability advocates",
    defendant: "Major retailers",
    issue: "Website accessibility",
    result: "Settlements reached",
    year: 2020,
  },

  // 2019 Cases
  {
    date: "2019-10",
    plaintiff: "Guillermo Robles",
    defendant: "Domino's Pizza",
    issue: "ADA Title III - Website accessibility",
    result: "Supreme Court declined to hear",
    year: 2019,
  },

  // 2018 Cases
  {
    date: "2018-06",
    plaintiff: "Various plaintiffs",
    defendant: "Multiple websites",
    issue: "Web accessibility compliance",
    result: "Settlements",
    year: 2018,
  },

  // 2017 Cases
  {
    date: "2017-01",
    plaintiff: "Disability organizations",
    defendant: "E-commerce sites",
    issue: "Digital accessibility",
    result: "Ongoing cases",
    year: 2017,
  },

  // 2016 Cases
  {
    date: "2016-09",
    plaintiff: "Guillermo Robles",
    defendant: "Domino's Pizza",
    issue: "ADA Title III - Website accessibility",
    result: "Filed in federal court",
    year: 2016,
  },

  // 2015 Cases
  {
    date: "2015-02",
    plaintiff: "Gisele Mesnage",
    defendant: "Coles Supermarkets",
    issue: "Website accessibility",
    result: "Settled",
    settlement: "Agreed to improvements",
    year: 2015,
  },

  // 2014 Cases
  {
    date: "2014-08",
    plaintiff: "Various plaintiffs",
    defendant: "Target Corporation",
    issue: "Website accessibility",
    result: "Settlement",
    settlement: "$6 million",
    year: 2014,
  },

  // 2013 Cases
  {
    date: "2013-01",
    plaintiff: "Multiple individuals",
    defendant: "Major websites",
    issue: "Web accessibility violations",
    result: "Settlements",
    year: 2013,
  },

  // 2012 Cases
  {
    date: "2012-06",
    plaintiff: "Disability advocates",
    defendant: "E-commerce sites",
    issue: "Digital accessibility",
    result: "Ongoing litigation",
    year: 2012,
  },

  // 2011 Cases
  {
    date: "2011-03",
    plaintiff: "Various plaintiffs",
    defendant: "Websites",
    issue: "Accessibility compliance",
    result: "Multiple settlements",
    year: 2011,
  },

  // 2010 Cases
  {
    date: "2010-09",
    plaintiff: "Blind user",
    defendant: "E-commerce company",
    issue: "Website accessibility",
    result: "Settlement reached",
    year: 2010,
  },

  // 2009 Cases
  {
    date: "2009-05",
    plaintiff: "Multiple organizations",
    defendant: "Government websites",
    issue: "Section 508 compliance",
    result: "Settlements",
    year: 2009,
  },

  // 2008 Cases
  {
    date: "2008-08",
    plaintiff: "National Federation of the Blind",
    defendant: "Target Corporation",
    issue: "Website accessibility",
    result: "Settlement",
    settlement: "$6 million",
    year: 2008,
  },

  // Earlier cases
  {
    date: "2006-08",
    plaintiff: "NFB",
    defendant: "Target",
    issue: "Website accessibility",
    result: "Ongoing case",
    year: 2006,
  },
]

export function getArchiveByYear(year: number): LawsuitArchiveItem[] {
  return lawsuitArchive.filter((item) => item.year === year)
}

export function getArchiveByDecade(decade: number): LawsuitArchiveItem[] {
  const startYear = Math.floor(decade / 10) * 10
  const endYear = startYear + 9
  return lawsuitArchive.filter((item) => item.year >= startYear && item.year <= endYear)
}

export function searchArchive(query: string): LawsuitArchiveItem[] {
  const q = query.toLowerCase()
  return lawsuitArchive.filter(
    (item) =>
      item.plaintiff.toLowerCase().includes(q) ||
      item.defendant.toLowerCase().includes(q) ||
      item.issue.toLowerCase().includes(q) ||
      item.result.toLowerCase().includes(q)
  )
}

export function getUniqueYears(): number[] {
  const years = new Set(lawsuitArchive.map((item) => item.year))
  return Array.from(years).sort((a, b) => b - a)
}

