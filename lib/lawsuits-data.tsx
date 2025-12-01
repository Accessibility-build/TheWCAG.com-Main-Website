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
  category: "digital" | "physical" | "employment" | "healthcare" | "housing" | "transportation" | "international"
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

export const lawsuits: Lawsuit[] = [
  // HISTORICAL ACCESSIBILITY CASES - 2000-2017
  {
    slug: "brown-v-bank-of-america-2000",
    title: "Brown et al. v. Bank of America - First Bank Website Accessibility Agreement",
    defendant: "Bank of America, N. A. and Bank of America Corporation",
    plaintiff: "Don Brown, Nicaise Dogbo, Bernice Kandarian, Jerry Kuns, Roger Petersen and California Council of the Blind",
    dateFiled: "2000-03-14",
    status: "settled",
    summary:
      "Landmark settlement agreement establishing the first bank commitment to make websites accessible and install Talking ATMs in multiple states. Negotiated through Structured Negotiations without filing a lawsuit.",
    details: `This groundbreaking settlement agreement, entered into on March 14, 2000, was the first agreement in the United States in which a bank committed to make its website accessible to blind users. It was also the first agreement where a bank committed to install Talking ATMs in more than one state (California and Florida).

The agreement was negotiated by Lainey Feingold and Linda Dardarian using Structured Negotiations (a collaborative process that avoids litigation) on behalf of the California Council of the Blind and individual blind advocates. The Disability Rights Education & Defense Fund (DREDF) also represented the claimants.

Key commitments:
- Installation of Talking ATMs in California and Florida with specific rollout schedules
- Website accessibility commitment to comply with WCAG Priorities One and Two
- Comprehensive Auxiliary Aids and Services Policy for printed materials (Braille, large print, audio, etc.)
- Training programs for bank personnel
- Fee waivers for visually impaired customers using telephone banking services

This was the first of three agreements Bank of America signed with the blind community, establishing a model for banking accessibility that would be followed by other financial institutions nationwide.`,
    issues: [
      "Inaccessible ATMs for blind users",
      "Website not accessible to screen readers",
      "Printed materials not available in alternative formats",
      "Lack of Talking ATM technology",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (California and Florida, structured negotiations)",
    category: "digital",
    officialLinks: [
      {
        title: "LF Legal - Bank of America Initial Agreement",
        url: "http://lflegal.com/2000/03/bank-of-america-initial-agreement/",
      },
    ],
    keyTakeaways: [
      "First bank agreement to commit to website accessibility",
      "First multi-state Talking ATM installation commitment",
      "Structured Negotiations can achieve comprehensive accessibility without litigation",
      "Established model for banking accessibility agreements",
      "WCAG Priorities One and Two became early accessibility standards",
    ],
    impact:
      "This agreement set the foundation for banking accessibility in the United States. It demonstrated that financial institutions could commit to comprehensive accessibility improvements through collaborative negotiation. The model established here influenced dozens of subsequent bank accessibility agreements.",
  },

  {
    slug: "bay-state-council-v-fleet-bank-2001",
    title: "Bay State Council of the Blind v. Fleet Bank - First Massachusetts Talking ATMs",
    defendant: "Fleet National Bank",
    plaintiff: "Bay State Council of the Blind, National Federation of the Blind of Massachusetts, Sight Loss Services, and individual blind advocates",
    dateFiled: "2001-02-28",
    status: "settled",
    summary:
      "First agreement establishing Talking ATMs in Massachusetts, along with website accessibility and comprehensive alternative formats policy. Fleet Bank was later purchased by Bank of America.",
    details: `This settlement agreement, entered into on February 28, 2001, was the first agreement that Fleet Bank signed with the blind community. It established the first Talking ATMs in Massachusetts and created a comprehensive framework for banking accessibility.

The agreement was negotiated by Lainey Feingold and Stan Eichner of the Disability Law Center in Boston using Structured Negotiations on behalf of the Bay State Council of the Blind and other Massachusetts advocates.

Key commitments:
- Development, testing, and pilot installation of Fleet Talking ATMs
- Installation of Talking ATMs at Fleet ATM locations
- Comprehensive alternative formats policy for printed materials
- Website accessibility improvements
- Training programs for bank staff

Fleet Bank was subsequently purchased by Bank of America, and the accessibility commitments were integrated into Bank of America's nationwide accessibility program. The agreement demonstrated that regional banks could also commit to comprehensive accessibility improvements.`,
    issues: [
      "Inaccessible ATMs for blind users",
      "Website not accessible to screen readers",
      "Printed materials not available in alternative formats",
      "Lack of Talking ATM technology in Massachusetts",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Massachusetts, structured negotiations)",
    category: "digital",
    officialLinks: [
      {
        title: "LF Legal - Fleet Bank Initial Agreement",
        url: "http://lflegal.com/2001/02/fleet-bank-initial-agreement/",
      },
    ],
    keyTakeaways: [
      "First Talking ATMs installed in Massachusetts",
      "Regional banks can commit to comprehensive accessibility",
      "Alternative formats policy established as standard practice",
      "Demonstrated accessibility commitments survive bank mergers",
      "Collaborative negotiation effective for regional institutions",
    ],
    impact:
      "This agreement brought Talking ATM technology to Massachusetts for the first time and established that regional banks could make the same accessibility commitments as national banks. When Fleet was acquired by Bank of America, these commitments were maintained and expanded.",
  },

  {
    slug: "martinez-v-washington-mutual-2002",
    title: "Martinez et al. v. Washington Mutual - First Spanish Language Talking ATMs",
    defendant: "Washington Mutual Bank, FA",
    plaintiff: "Kathleen Martinez, Jesus Garcia, California Council of the Blind and Florida Council of the Blind",
    dateFiled: "2002-01-01",
    status: "settled",
    summary:
      "Settlement agreement where Washington Mutual became the first bank to offer Talking ATMs in Spanish, along with comprehensive website accessibility and alternative formats commitments.",
    details: `This Letter of Understanding, entered into in 2002, established Washington Mutual as the first bank in the United States to offer Talking ATMs with Spanish language support. The agreement was negotiated through Structured Negotiations by Lainey Feingold and Linda Dardarian.

Key commitments:
- Installation of Washington Mutual Talking ATMs at all existing ATM locations by June 30, 2005
- Talking ATMs with speech output in both English and Spanish (where available to sighted users)
- Website accessibility compliance with WCAG Priority One and Two by December 31, 2004
- Comprehensive alternative formats policy (Braille, large print, audio)
- Provision of private listening devices (headphones) for Talking ATMs
- Training programs for bank personnel

The agreement covered approximately 1,300 ATM locations nationwide and established a rollout schedule that would ensure 100% coverage of existing locations. Washington Mutual's commitment to Spanish language support was particularly significant for the accessibility of Spanish-speaking blind customers.`,
    issues: [
      "Inaccessible ATMs for blind users",
      "No Spanish language support for blind ATM users",
      "Website not accessible to screen readers",
      "Printed materials not available in alternative formats",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (nationwide, structured negotiations)",
    category: "digital",
    officialLinks: [
      {
        title: "LF Legal - Washington Mutual Agreement",
        url: "http://lflegal.com/2002/01/washington-mutual-agreement/",
      },
    ],
    keyTakeaways: [
      "First bank to offer Spanish language Talking ATMs",
      "Demonstrated importance of multilingual accessibility",
      "Comprehensive nationwide ATM rollout commitment",
      "Established model for large-scale ATM accessibility programs",
      "Website accessibility timeline set precedent for other banks",
    ],
    impact:
      "This agreement was groundbreaking for establishing Spanish language support in Talking ATMs, making banking accessible to Spanish-speaking blind customers. The comprehensive nationwide rollout demonstrated that large financial institutions could commit to 100% ATM accessibility coverage.",
  },

  {
    slug: "pierce-byrne-v-bank-one-2003",
    title: "Pierce and Byrne v. Bank One - First Bank to Install All New ATMs as Talking ATMs",
    defendant: "Bank One, National Association",
    plaintiff: "Kelly Pierce and Anna Byrne",
    dateFiled: "2003-06-01",
    status: "settled",
    summary:
      "Settlement agreement where Bank One (now Chase) became the first bank to commit to installing every new ATM as a Talking ATM, along with installation of 1,500 Talking ATMs and comprehensive website accessibility.",
    details: `This settlement agreement, entered into in June 2003, was the second agreement Bank One signed with Chicago blind advocates Kelly Pierce and Anna Byrne. The agreement was negotiated by Lainey Feingold and Linda Dardarian using Structured Negotiations.

Key commitments:
- Installation of 1,500 Talking ATMs by December 31, 2004
- Commitment to install every new ATM as a Talking ATM (first bank to make this commitment)
- Website accessibility compliance with WCAG guidelines
- Comprehensive alternative formats policy (Braille, large print, audio)
- Provision of headphones for Talking ATMs
- Staff training programs

Bank One's commitment to install all new ATMs as Talking ATMs was particularly significant, as it established that accessibility should be built into new installations rather than requiring retrofitting. Bank One was subsequently acquired by Chase Bank, and as of March 2008, Chase had over 9,000 Talking ATMs nationwide, demonstrating the long-term impact of this agreement.`,
    issues: [
      "Inaccessible ATMs for blind users",
      "Website not accessible to screen readers",
      "Printed materials not available in alternative formats",
      "New ATMs not being installed with accessibility features",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (nationwide, structured negotiations)",
    category: "digital",
    officialLinks: [
      {
        title: "LF Legal - Bank One Final Agreement",
        url: "http://lflegal.com/2003/06/bank-one-final-agreement/",
      },
    ],
    keyTakeaways: [
      "First bank to commit to installing all new ATMs as Talking ATMs",
      "Established principle that new installations should be accessible from the start",
      "Large-scale Talking ATM installation commitment (1,500 machines)",
      "Demonstrated accessibility commitments survive bank acquisitions",
      "Set precedent for proactive accessibility in new technology deployments",
    ],
    impact:
      "This agreement was revolutionary for establishing that all new ATMs should be accessible from installation, rather than requiring retrofitting. This principle has since been adopted by many financial institutions. The agreement's impact was amplified when Bank One was acquired by Chase, which now operates one of the largest networks of Talking ATMs in the country.",
  },

  {
    slug: "carmelle-v-first-union-2003",
    title: "Carmelle et al. v. First Union - Expanded Talking ATM and Website Accessibility",
    defendant: "Wachovia Corporation and Wachovia Bank (formerly First Union)",
    plaintiff: "Lisa Carmelle, Rene Cummins, North Carolina Council of the Blind, Orange County Disability Awareness Council, James Caldwell, Bette Homer, and National Federation of the Blind of Pennsylvania",
    dateFiled: "2003-01-01",
    status: "settled",
    summary:
      "Amendment to settlement agreement expanding First Union's Talking ATM commitments, establishing website accessibility timeline, and implementing comprehensive alternative formats policy.",
    details: `This Amendment to Settlement Agreement, entered into in January 2003, expanded upon an earlier 2001 agreement between First Union and blind advocates. The agreement was negotiated by Lainey Feingold, Linda Dardarian, and Tom Earle (formerly with the Disability Rights Network of Pennsylvania).

Key commitments:
- Expansion of Talking ATM installation to 600-650 machines by December 31, 2003
- Website accessibility compliance with WCAG Priority One and Two by November 30, 2002 (with online banking by December 31, 2004)
- Comprehensive alternative formats policy for printed materials
- Fee waivers for visually impaired customers
- Raised-line checks at standard pricing

First Union was subsequently purchased by Wachovia, and the accessibility commitments were maintained. The agreement demonstrated how accessibility commitments could be expanded and refined through collaborative negotiation, and how such commitments survive corporate mergers and acquisitions.`,
    issues: [
      "Limited Talking ATM availability",
      "Website not fully accessible to screen readers",
      "Printed materials not available in comprehensive alternative formats",
      "Fees charged for accessible banking services",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (North Carolina and Pennsylvania, structured negotiations)",
    category: "digital",
    officialLinks: [
      {
        title: "LF Legal - First Union Final Agreement",
        url: "http://lflegal.com/2003/01/first-union-final-agreement/",
      },
    ],
    keyTakeaways: [
      "Demonstrated how accessibility agreements can be expanded over time",
      "Established separate timelines for public website vs. online banking accessibility",
      "Fee waiver provisions important for equal access",
      "Accessibility commitments maintained through corporate acquisitions",
      "Regional agreements can establish comprehensive accessibility standards",
    ],
    impact:
      "This agreement showed how initial accessibility commitments could be expanded and refined. The maintenance of these commitments through First Union's acquisition by Wachovia demonstrated that accessibility obligations can and should survive corporate transactions.",
  },

  {
    slug: "bay-state-council-v-sovereign-bank-2002",
    title: "Bay State Council of the Blind v. Sovereign Bank - Comprehensive Banking Accessibility",
    defendant: "Sovereign Bank",
    plaintiff: "Bay State Council of the Blind, Sight Loss Services, and individual blind advocates",
    dateFiled: "2002-11-01",
    status: "settled",
    summary:
      "Settlement agreement where Sovereign Bank committed to install Talking ATMs at all locations, implement comprehensive alternative formats policy, and make website accessible through Structured Negotiations.",
    details: `This settlement agreement, entered into in November 2002, established comprehensive accessibility commitments for Sovereign Bank across its multi-state operations (Massachusetts, Connecticut, Rhode Island, New Hampshire, New Jersey, Delaware, and Pennsylvania).

The agreement was negotiated by Lainey Feingold and Stan Eichner of the Disability Law Center in Boston using Structured Negotiations on behalf of the Bay State Council of the Blind and other Massachusetts advocates.

Key commitments:
- Development, testing, and pilot installation of 30 Talking ATMs in Massachusetts and Pennsylvania
- Rollout of Talking ATMs at all Sovereign ATM locations
- Comprehensive alternative formats policy for printed materials (Braille, large print, audio)
- Website accessibility improvements
- Provision of headphones for Talking ATMs
- Training programs for bank personnel

The agreement demonstrated that regional banks operating across multiple states could make comprehensive accessibility commitments similar to national banks.`,
    issues: [
      "Inaccessible ATMs for blind users",
      "Website not accessible to screen readers",
      "Printed materials not available in alternative formats",
      "Lack of Talking ATM technology",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Massachusetts, Pennsylvania, and other states, structured negotiations)",
    category: "digital",
    officialLinks: [
      {
        title: "LF Legal - Sovereign Bank Settlement Agreement",
        url: "http://lflegal.com/2002/11/sovereign-bank-settlement-agreement/",
      },
    ],
    keyTakeaways: [
      "Multi-state regional banks can commit to comprehensive accessibility",
      "Pilot programs effective for testing Talking ATM technology",
      "Alternative formats policy essential for banking accessibility",
      "Structured Negotiations effective for regional institutions",
      "Comprehensive accessibility achievable without litigation",
    ],
    impact:
      "This agreement demonstrated that regional banks operating across multiple states could make the same comprehensive accessibility commitments as national banks. It established a model for regional banking accessibility that has been followed by other similar institutions.",
  },

  {
    slug: "acb-v-lasalle-bank-2005",
    title: "American Council of the Blind v. LaSalle Bank - Multi-State Talking ATM Program",
    defendant: "LaSalle Bank Corporation (including LaSalle Bank National Association and Standard Federal Bank)",
    plaintiff: "American Council of the Blind of Metropolitan Chicago and Kelly Pierce",
    dateFiled: "2005-02-03",
    status: "settled",
    summary:
      "Settlement agreement establishing comprehensive Talking ATM program, alternative formats policy, and website accessibility across all states where LaSalle Bank operated, negotiated through Structured Negotiations.",
    details: `This settlement agreement, entered into on February 3, 2005, established comprehensive accessibility commitments for LaSalle Bank across all states where it operated. The agreement was negotiated by Lainey Feingold and Amy Peterson of Equip for Equality in Chicago using Structured Negotiations on behalf of the American Council of the Blind of Metropolitan Chicago and Kelly Pierce.

Key commitments:
- Development, testing, and pilot installation of 25 Talking ATMs by March 31, 2005
- Three-year rollout schedule to install Talking ATMs at 100% of LaSalle ATM locations (33% by 2005, 66% by 2006, 100% by 2007)
- All newly purchased ATMs to be equipped as Talking ATMs
- Comprehensive alternative formats policy (Braille, large print, audio)
- Website accessibility compliance with WCAG guidelines
- Provision of headphones for Talking ATMs
- Spanish language support where available to sighted users
- Training programs for bank personnel

The agreement included provisions for handling bulk ATM acquisitions and established that all new ATMs would be Talking ATMs from installation, continuing the principle established in earlier bank agreements.`,
    issues: [
      "Inaccessible ATMs for blind users",
      "Website not accessible to screen readers",
      "Printed materials not available in alternative formats",
      "Lack of Talking ATM technology",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (multi-state, structured negotiations)",
    category: "digital",
    officialLinks: [
      {
        title: "LF Legal - LaSalle Final Agreement",
        url: "http://lflegal.com/2005/05/la-salle-final-agreement/",
      },
    ],
    keyTakeaways: [
      "Comprehensive multi-state banking accessibility program",
      "Three-year phased rollout established as model",
      "All new ATMs to be Talking ATMs from installation",
      "Provisions for handling corporate acquisitions and mergers",
      "Spanish language support important for inclusive accessibility",
    ],
    impact:
      "This agreement demonstrated how comprehensive accessibility programs could be implemented across multi-state banking operations with clear phased rollouts. The commitment to install all new ATMs as Talking ATMs reinforced the principle that accessibility should be built into new technology from the start.",
  },

  // DIGITAL & WEB ACCESSIBILITY - 2024-2025
  {
    slug: "fashion-nova-class-action-2025",
    title: "Fashion Nova Class Action Settlement",
    defendant: "Fashion Nova LLC",
    plaintiff: "Legally blind class plaintiffs",
    dateFiled: "2024-01-01",
    dateResolved: "2025-01-31",
    status: "settled",
    settlementAmount: "$5.15 million (up to $4,000 per claimant)",
    summary:
      "Major web accessibility class action settlement where Fashion Nova agreed to achieve substantial conformance with WCAG 2.1 AA, addressing missing alt text, redundant links, and screen reader incompatibility.",
    details: `Fashion Nova, a major fashion e-commerce retailer, faced a nationwide class action lawsuit from legally blind users who could not access their online shopping platform. The lawsuit alleged systematic accessibility barriers preventing screen reader users from browsing products, viewing images, and completing purchases.

Key accessibility issues included:
- Missing alt text for product images and marketing graphics
- Redundant links without proper labeling
- Linked images without descriptive alt text
- Screen reader incompatibility affecting checkout process
- Form elements not properly labeled for assistive technology

The settlement required Fashion Nova to achieve and maintain "substantial conformance" with WCAG 2.1 AA standards. The company agreed to implement comprehensive accessibility improvements, conduct regular accessibility audits, and maintain ongoing compliance.

Settlement distribution includes compensation to class members and establishment of an accessibility monitoring fund. This settlement represents one of the largest class action digital accessibility settlements to date.`,
    issues: [
      "Missing alt text for images",
      "Redundant links",
      "Linked images without alt text",
      "Screen reader incompatibility",
      "Form accessibility barriers",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Federal court, nationwide and California classes certified)",
    category: "digital",
    keyTakeaways: [
      "Large-scale fashion retailers face significant accessibility liability",
      "E-commerce platforms must ensure comprehensive alt text for all product images",
      "Screen reader compatibility is critical for online shopping functionality",
      "Class action settlements can result in substantial damages and ongoing compliance obligations",
      "WCAG 2.1 AA has become the standard for web accessibility lawsuits",
    ],
    impact:
      "This settlement signals that major e-commerce retailers remain targets for accessibility litigation. The $5.15 million settlement and comprehensive WCAG 2.1 AA requirement may prompt similar improvements across the fashion and retail industries.",
  },

  {
    slug: "ftc-v-accessibe-2025",
    title: "FTC v. accessiBe - Deceptive Marketing and False Claims",
    defendant: "accessiBe Inc. & accessiBe Ltd.",
    plaintiff: "Federal Trade Commission",
    dateFiled: "2025-01-03",
    dateResolved: "2025-04-22",
    status: "settled",
    settlementAmount: "$1 million penalty",
    summary:
      "Landmark FTC action against accessibility overlay vendor accessiBe for deceptive marketing claims that their automated tool could make any website WCAG compliant within 48 hours.",
    details: `The Federal Trade Commission filed its first major enforcement action against an accessibility overlay vendor, charging accessiBe with making false and deceptive claims about the capabilities of their automated accessibility widget (accessWidget).

Primary violations included:
- False claims that accessWidget could make any website WCAG 2.1 compliant within 48 hours
- Undisclosed paid endorsements from content creators and accessibility advocates
- Deceptive third-party review generation practices
- Misleading marketing about automated accessibility solutions

FTC findings demonstrated that automated overlay solutions alone cannot achieve WCAG compliance, particularly for:
- Complex form functionality requiring human review
- Context-dependent content decisions
- Nuanced accessibility requirements that require manual implementation
- Screen reader compatibility issues requiring code-level fixes

The $1 million penalty and 20-year compliance monitoring order represent unprecedented FTC enforcement against the accessibility overlay industry. AccessiBe is prohibited from making any claims that automated products can make websites fully WCAG-compliant without substantial human review and implementation.`,
    issues: [
      "False compliance claims",
      "Deceptive marketing practices",
      "Undisclosed paid endorsements",
      "Misleading automated solutions",
      "Consumer fraud",
    ],
    jurisdiction: "FTC Administrative (Federal Trade Commission)",
    category: "digital",
    caseNumber: "Matter No. 2223156",
    keyTakeaways: [
      "Automated accessibility overlays cannot fully solve WCAG compliance independently",
      "Companies cannot make unsubstantiated compliance claims",
      "FTC now actively enforcing against accessibility solution vendors",
      "20-year monitoring represents unprecedented regulatory oversight",
      "Marketing claims about accessibility solutions face heightened scrutiny",
    ],
    impact:
      "This FTC action fundamentally challenges the accessibility overlay business model and establishes that automated solutions alone do not meet WCAG standards. It may trigger similar enforcement against other overlay vendors and significantly impact the accessibility technology market.",
  },

  {
    slug: "verizon-wireless-class-action-2024",
    title: "Verizon Wireless Class Action - Screen Reader Incompatibility",
    defendant: "Verizon Communications, Inc.",
    plaintiff: "Derek Pollitt (legally blind)",
    dateFiled: "2024-09-04",
    dateResolved: "2025-03-10",
    status: "settled",
    caseNumber: "1:24-cv-06156",
    summary:
      "Class action lawsuit against Verizon Communications for website accessibility barriers affecting blind users, citing WCAG 2.2 as technical standard. Case settled in March 2025.",
    details: `Derek Pollitt, a legally blind user of JAWS screen reader software, filed a class action lawsuit against Verizon Wireless for systematic accessibility barriers on their website and mobile app. The lawsuit alleges that Verizon's digital properties do not comply with WCAG 2.2 standards and prevent blind users from viewing account information, making payments, and accessing customer service.

Specific accessibility issues include:
- Missing text alternatives for images throughout the site
- Hyperlinks without descriptive text or aria-label attributes
- UI components without programmatically determinable names
- Screen reader incompatibility with navigation menus
- Form fields not properly labeled for assistive technology
- Interactive buttons without accessible names
- Missing context information for visually-dependent features

The lawsuit represents one of the first major cases to cite WCAG 2.2 (rather than 2.0 or 2.1) as the technical standard, reflecting the evolution of accessibility compliance expectations.`,
    issues: [
      "Missing text alternatives",
      "Undescriptive hyperlinks",
      "Missing component names",
      "Screen reader incompatibility",
      "Form accessibility barriers",
      "Navigation barriers",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court for the Eastern District of New York",
    category: "digital",
    officialLinks: [
      {
        title: "PacerMonitor - Pollitt v. Verizon Communications",
        url: "https://www.pacermonitor.com/public/case/54969176/Pollitt_v_Verizon_Communications,_Inc",
      },
    ],
    unofficialLinks: [
      {
        title: "Top Class Actions - Verizon Class Action",
        url: "https://topclassactions.com/verizon-class-action-lawsuit-and-settlement-news/verizon-class-action-claims-company-denies-blind-visually-impaired-equal-access-to-website/",
      },
    ],
    keyTakeaways: [
      "Major telecommunications companies face accessibility scrutiny",
      "WCAG 2.2 is emerging as the new standard in litigation",
      "Customer account access is a critical accessibility requirement",
      "Screen reader compatibility is essential for financial services websites",
      "Large enterprises remain targets despite resources to implement accessibility",
      "Cases can settle relatively quickly (6 months) when companies address accessibility issues",
    ],
    impact:
      "This lawsuit settlement demonstrates that WCAG 2.2 is becoming the expected standard even though 2.1 AA is the most common regulatory requirement. The relatively quick settlement suggests companies are increasingly willing to resolve accessibility claims promptly.",
  },

  {
    slug: "bashin-v-conduent-2024",
    title: "Bashin v. Conduent/US eDirect - California False Claims Act",
    defendant: "Conduent State & Local Solutions, Inc.; US eDirect",
    plaintiff: "Bryan Bashin (whistleblower)",
    dateFiled: "2020-01-01",
    dateResolved: "2024-06-30",
    status: "settled",
    settlementAmount: "$2 million (one of largest web accessibility settlements)",
    summary:
      "Novel California False Claims Act case where contractor failed to deliver WCAG-compliant campsite reservation system despite contractual guarantees.",
    details: `Bryan Bashin, a blind accessibility advocate and whistleblower, filed a qui tam action under the California False Claims Act against Conduent and US eDirect for failing to deliver a WCAG-compliant ReserveCalifornia.com campsite reservation system despite contractual obligations to the State of California.

Key case elements:
- Contractor claimed WCAG compliance in proposals but delivered inaccessible system
- System contained numerous accessibility barriers including missing alt text, incompatible forms, and poor screen reader support
- State of California was defrauded into paying for non-compliant solution
- Whistleblower provisions of California False Claims Act allowed private individual to sue on behalf of state

Settlement distribution:
- $87,500 to plaintiff (Bashin) as whistleblower reward
- $1.75 million to attorneys for legal fees
- $165,000 to State of California

This case established novel precedent that web developers can face liability under false claims acts when they fail to meet contractual WCAG compliance guarantees. It demonstrated that accessibility is not merely a customer service issue but a contractual compliance matter with potential fraud implications.`,
    issues: [
      "Missing alt text",
      "Form accessibility barriers",
      "Screen reader incompatibility",
      "Contractual non-compliance",
      "False claims to government",
    ],
    wcagLevel: "AA",
    jurisdiction: "California state court",
    category: "digital",
    keyTakeaways: [
      "Web developers face liability for failing to meet contractual WCAG commitments",
      "California False Claims Act can be applied to accessibility failures",
      "Whistleblower provisions incentivize disclosure of accessibility fraud",
      "Contractors cannot claim compliance they do not deliver",
      "Accessibility becomes a contractual compliance issue, not optional feature",
    ],
    impact:
      "This novel application of the False Claims Act creates significant precedent for government contracts. It suggests that contractors nationwide may face similar qui tam actions if they fail to deliver accessible systems. This case may increase government agencies' scrutiny of contractor accessibility compliance.",
  },

  {
    slug: "dominos-pizza-v-robles-updated",
    title: "Robles v. Domino's Pizza LLC - Landmark ADA Digital Rights Case",
    defendant: "Domino's Pizza LLC",
    plaintiff: "Guillermo Robles (blind, uses JAWS screen reader)",
    dateFiled: "2016-09-01",
    dateResolved: "2022-06-30",
    status: "settled",
    settlementAmount: "Confidential",
    summary:
      "Landmark case establishing that ADA Title III applies to websites and mobile apps. This case went through multiple appeals and reached the Supreme Court.",
    details: `Guillermo Robles, who is blind and uses JAWS screen reader software, attempted to order a pizza from Domino's website and mobile app but was unable to complete his order due to accessibility barriers. He filed a lawsuit under the Americans with Disabilities Act Title III, claiming that Domino's website and mobile app are "places of public accommodation" and must be accessible to people with disabilities.

Domino's initial defense argued that the ADA only applied to physical locations and that websites/apps were not covered under Title III. However, the Central District of California disagreed, finding that websites and apps were indeed places of public accommodation.

Court timeline:
- Central District of California (2021): Summary judgment for plaintiff; found ADA Title III applies to digital properties
- Domino's ordered to make website WCAG 2.0 compliant
- Plaintiff awarded $4,000 in Unruh Act penalties
- Ninth Circuit affirmed lower court decision
- Supreme Court declined certiorari (October 2019), effectively upholding precedent

Settlement reached in June 2022 after extensive appeals process.

Specific accessibility issues:
- Website and mobile app incompatible with JAWS screen reader
- Missing alt text for images and buttons
- Unlabeled form fields
- No keyboard navigation
- Unclear error messages
- Buttons without accessible names`,
    issues: [
      "Missing alt text",
      "No keyboard navigation",
      "Missing form labels",
      "Screen reader incompatibility",
      "Unlabeled buttons",
      "Inaccessible error messages",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Central District of California, Ninth Circuit, U.S. Supreme Court)",
    caseNumber: "Case No. 2:16-cv-06599, C.D. Cal.",
    category: "digital",
    officialLinks: [
      {
        title: "Ninth Circuit Decision - Robles v. Domino's",
        url: "https://cdn.ca9.uscourts.gov/datastore/opinions/2019/01/15/17-55504.pdf",
      },
    ],
    unofficialLinks: [
      {
        title: "Wikipedia - Robles v. Domino's Pizza",
        url: "https://en.wikipedia.org/wiki/Robles_v._Domino%27s_Pizza,_LLC",
      },
    ],
    keyTakeaways: [
      "ADA Title III unequivocally applies to websites and mobile apps",
      "Websites and apps are legal 'places of public accommodation'",
      "Supreme Court's refusal to hear the case strengthened the precedent",
      "WCAG 2.0 compliance became the expected standard following this case",
      "This single case triggered thousands of subsequent digital accessibility lawsuits",
    ],
    impact:
      "This landmark case established the legal foundation for digital accessibility rights in the United States. It transformed accessibility from a niche consideration into a core legal compliance requirement and has directly or indirectly resulted in thousands of subsequent lawsuits and settlements.",
  },

  {
    slug: "nfb-v-hdvest-intuit-hrblock-2000",
    title: "NFB et al. v. HDVest, Intuit, H & R Block, and Gilman & Ciocia - Tax Software Accessibility",
    defendant: "HDVest, Intuit, H & R Block, and Gilman & Ciocia",
    plaintiff: "National Federation of the Blind, et al.",
    dateFiled: "2000-01-01",
    status: "settled",
    summary:
      "Settlement agreement addressing accessibility of tax preparation software and services for blind users. Case involved multiple tax software providers and tax preparation services.",
    details: `This case involved the National Federation of the Blind and other blind advocates filing complaints against multiple tax software providers and tax preparation services for failing to make their software and services accessible to blind users.

The case addressed accessibility barriers in tax preparation software that prevented blind users from independently preparing and filing their tax returns. This was one of the early cases addressing software accessibility under the ADA.

The settlement required the defendants to make their tax preparation software and services accessible to blind users, ensuring that blind individuals could independently prepare and file their taxes using assistive technology.`,
    issues: [
      "Inaccessible tax preparation software",
      "Software not compatible with screen readers",
      "Barriers to independent tax filing for blind users",
    ],
    jurisdiction: "Connecticut (state attorney general)",
    category: "digital",
    officialLinks: [
      {
        title: "Connecticut Attorney General - Case Information",
        url: "http://www.ct.gov/AG/cwp/view.asp?a=1775&q=283012",
      },
    ],
    keyTakeaways: [
      "Tax preparation software must be accessible to blind users",
      "Software accessibility is required under ADA",
      "Multiple defendants can be addressed in single settlement",
      "Early case establishing software accessibility requirements",
    ],
    impact:
      "This case established that tax preparation software must be accessible to blind users, ensuring equal access to essential financial services. It set a precedent for software accessibility requirements that would be applied to other financial software applications.",
  },

  {
    slug: "us-doe-v-csu-fullerton-2003",
    title: "US Department of Education v. CSU Fullerton - Educational Technology Accessibility",
    defendant: "California State University, Fullerton",
    plaintiff: "U.S. Department of Education, Office for Civil Rights",
    dateFiled: "2003-01-01",
    status: "settled",
    summary:
      "OCR resolution agreement addressing accessibility of educational technology and course materials for students with disabilities at California State University, Fullerton.",
    details: `The U.S. Department of Education's Office for Civil Rights (OCR) investigated California State University, Fullerton regarding the accessibility of its educational technology and course materials for students with disabilities.

The case addressed barriers that prevented students with disabilities from accessing course materials, online learning platforms, and educational technology used by the university. OCR found that the university needed to ensure that all educational technology and materials were accessible to students using assistive technology.

The resolution agreement required CSU Fullerton to:
- Ensure all educational technology is accessible to students with disabilities
- Provide accessible course materials in alternative formats
- Train faculty and staff on accessibility requirements
- Establish procedures for addressing accessibility complaints
- Conduct regular accessibility audits of educational technology`,
    issues: [
      "Inaccessible educational technology",
      "Course materials not available in accessible formats",
      "Online learning platforms not compatible with assistive technology",
      "Lack of accessibility training for faculty",
    ],
    jurisdiction: "United States (Department of Education, Office for Civil Rights)",
    category: "digital",
    officialLinks: [
      {
        title: "OCR Resolution - CSU Fullerton",
        url: "http://dspssolutions.org/media/48594/CA_OCR_CSU_Fullerton%5B1%5D.pdf",
      },
    ],
    keyTakeaways: [
      "Educational technology must be accessible to students with disabilities",
      "OCR actively enforces accessibility in higher education",
      "Universities must provide accessible course materials",
      "Faculty training essential for accessibility compliance",
    ],
    impact:
      "This case reinforced that educational institutions must ensure all educational technology and course materials are accessible to students with disabilities. It established that OCR would actively enforce accessibility requirements in higher education settings.",
  },

  // EMPLOYMENT & WORKPLACE ACCESSIBILITY
  {
    slug: "eeoc-v-walmart-maryann-t",
    title: "EEOC v. Walmart - Largest Disability Discrimination Verdict",
    defendant: "Walmart Inc.",
    plaintiff: "Maryann T. (employee with Down syndrome)",
    dateFiled: "2019-01-01",
    dateResolved: "2024-08-15",
    status: "won",
    settlementAmount: "$125 million jury verdict (reduced due to statutory caps)",
    summary:
      "Landmark EEOC case resulting in the largest disability discrimination verdict in history. Walmart violated ADA by denying accommodations and subsequently terminating employee with Down syndrome after schedule change.",
    details: `The Equal Employment Opportunity Commission (EEOC) represented Maryann T., an employee with Down syndrome, in a discrimination case against Walmart. The case centered on Walmart's failure to provide reasonable accommodations following a schedule change and the subsequent termination.

Case facts:
- Maryann T. worked successfully at Walmart for an extended period
- When Walmart changed her work schedule, she requested accommodation (working same hours/times) due to her disability
- Walmart denied the accommodation request despite business feasibility
- Maryann T. was subsequently terminated
- EEOC filed suit for ADA Title I violation

Trial results:
- Federal jury returned $125 million verdict in favor of Maryann T.
- Seventh Circuit affirmed the verdict in August 2024
- Amount reduced to statutory caps but still the largest disability discrimination verdict in EEOC history

Legal significance:
- Established that schedule changes may require accommodation for individuals with disabilities
- Demonstrated that post-accommodation termination creates strong inference of discrimination
- Affirmed employer's duty to explore reasonable accommodations before adverse employment action
- Set precedent for substantial damages in disability discrimination cases`,
    issues: [
      "Failure to provide reasonable accommodation",
      "Disability-based termination",
      "Pattern of discrimination",
      "Retaliation for requesting accommodation",
    ],
    jurisdiction: "Federal court, Wisconsin (Seventh Circuit affirmed August 2024)",
    category: "employment",
    keyTakeaways: [
      "Schedule changes may create new accommodation obligations",
      "Employers must explore accommodation feasibility before denying requests",
      "Termination following accommodation denial creates discrimination inference",
      "Jury verdicts can exceed statutory caps in egregious cases",
      "Even large corporations are not immune from substantial liability",
    ],
    impact:
      "This case represents a watershed moment in employment disability discrimination law. It demonstrates that major employers face serious liability for failing to accommodate employees with disabilities and may inspire other employees to pursue similar claims.",
  },

  {
    slug: "eeoc-v-mclane-northeast-2024",
    title: "EEOC v. McLane Northeast - Hiring Discrimination Against Deaf Applicant",
    defendant: "McLane Northeast",
    plaintiff: "Deaf job applicant",
    dateFiled: "2023-01-01",
    dateResolved: "2024-02-28",
    status: "won",
    settlementAmount: "$1.675 million ($25K back pay, $150K emotional distress, $1.5M punitive)",
    summary:
      "EEOC case where employer refused to interview or hire deaf applicant for warehouse position due to disability.",
    details: `The EEOC represented a deaf individual who applied for a warehouse position at McLane Northeast but was rejected at the application stage before being interviewed. The employer made no effort to accommodate the applicant's disability or explore reasonable accommodations for the role.

Discrimination evidence:
- Applicant met all stated job qualifications
- Application was rejected without interview opportunity
- Employer made no attempt to provide interpreter services
- Company had failed to establish communication accommodations
- Pattern of similar rejections of deaf applicants

Jury verdict awarded:
- $25,000 in back pay (lost wages)
- $150,000 for emotional distress and compensatory damages
- $1.5 million in punitive damages

This case established that employers cannot discriminate based on disability assumptions about job capability without providing opportunity and reasonable accommodation.`,
    issues: [
      "Failure to hire due to disability",
      "No accommodation provided",
      "Pre-interview discrimination",
      "Communication barriers",
    ],
    jurisdiction: "Western District of New York",
    category: "employment",
    keyTakeaways: [
      "Employers must interview and consider deaf applicants fairly",
      "Disability assumptions cannot justify hiring discrimination",
      "Reasonable accommodations (interpreters) must be available",
      "Pre-interview discrimination is still illegal discrimination",
      "Punitive damages available for knowing ADA violations",
    ],
    impact:
      "This case reinforces that hiring processes must be accessible and that employers cannot pre-judge capability based on disability.",
  },

  // PHYSICAL ACCESSIBILITY - DOJ SETTLEMENTS
  {
    slug: "doj-v-butler-county-mo-2004",
    title: "US DOJ v. Butler County, MO - Physical Accessibility Settlement",
    defendant: "Butler County, MO",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Butler County, Missouri to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services under ADA Title II.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Butler County, Missouri as part of DOJ's Project Civic Access initiative. Project Civic Access is a nationwide effort by DOJ to ensure that state and local government facilities, programs, and services are accessible to people with disabilities under Title II of the Americans with Disabilities Act.

The settlement addressed systematic physical accessibility barriers throughout Butler County's facilities and services. DOJ investigations typically identify barriers in courthouses, administrative buildings, polling places, parks, and other public facilities.

Specific requirements typically included in Project Civic Access settlements:
- Removal of physical barriers in county facilities including courthouses, administrative buildings, and service centers
- Installation of accessible routes and entrances meeting ADA Standards
- Provision of accessible parking spaces with proper signage and access aisles
- Making restrooms accessible with proper clearances, grab bars, and accessible fixtures
- Ensuring accessible communication including TTY/TDD availability and sign language interpreter services
- Providing accessible voting locations and equipment
- Ensuring program accessibility so all county services are available to people with disabilities
- Establishing grievance procedures for accessibility complaints
- Training staff on ADA requirements and serving customers with disabilities

These settlements typically require jurisdictions to conduct self-evaluations, develop transition plans, and implement accessibility improvements over specified timeframes. The settlements are monitored by DOJ to ensure compliance.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Butler County, MO",
        url: "http://www.ada.gov/butlersa.htm",
      },
    ],
    keyTakeaways: [
      "DOJ actively enforces ADA Title II for state and local governments through Project Civic Access",
      "Physical accessibility barriers must be removed from all government facilities",
      "Program accessibility required - services must be accessible even if facilities are not fully accessible",
      "Self-evaluation and transition plans required for compliance",
      "DOJ monitors settlements to ensure implementation",
      "Government entities have ongoing obligations to maintain accessibility",
    ],
    impact:
      "This settlement was part of DOJ's Project Civic Access initiative, which has resulted in hundreds of settlements with state and local governments nationwide. These settlements ensure that people with disabilities can access essential government services, vote, and participate fully in civic life. The initiative has established that ADA Title II compliance is not optional for government entities.",
  },

  {
    slug: "doj-v-carpinteria-2004",
    title: "US DOJ v. City of Carpinteria - Physical Accessibility Settlement",
    defendant: "City of Carpinteria",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Carpinteria to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Carpinteria, California as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

Project Civic Access settlements typically require cities to:
- Conduct self-evaluations of all facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services
- Train city employees on ADA requirements
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for barrier removal

The settlement ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Carpinteria",
        url: "http://www.ada.gov/carpinteria.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Carpinteria's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-cheshire-county-nh-2004",
    title: "US DOJ v. Cheshire County, NH - Physical Accessibility Settlement",
    defendant: "Cheshire County, NH",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Cheshire County, New Hampshire to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Cheshire County, New Hampshire as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Cheshire County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Cheshire County, NH",
        url: "http://www.ada.gov/cheshire.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Cheshire County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-city-of-bend-or-2004",
    title: "US DOJ v. City of Bend, OR - Physical Accessibility Settlement",
    defendant: "City of Bend, OR",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Bend, Oregon to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Bend, Oregon as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Bend to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Bend, OR",
        url: "http://www.ada.gov/bendor.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Bend's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-city-of-burton-mi-2004",
    title: "US DOJ v. City of Burton, MI - Physical Accessibility Settlement",
    defendant: "City of Burton, MI",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Burton, Michigan to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Burton, Michigan as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Burton to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, and service facilities
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services
- Train city employees on ADA requirements
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access city services and participate in civic activities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Burton, MI",
        url: "http://www.ada.gov/burtonsa.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Burton's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide.",
  },

  {
    slug: "doj-v-city-of-coral-gables-2004",
    title: "US DOJ v. City of Coral Gables - Physical Accessibility Settlement",
    defendant: "City of Coral Gables",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Coral Gables to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Coral Gables, Florida as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Coral Gables to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Coral Gables",
        url: "http://www.ada.gov/CoralGablesSA.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Coral Gables' facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-city-of-davenport-ia-2004",
    title: "US DOJ v. City of Davenport, IA - Physical Accessibility Settlement",
    defendant: "City of Davenport, IA",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Davenport, Iowa to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Davenport, Iowa as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Davenport to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services
- Train city employees on ADA requirements
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access city services and participate in civic activities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Davenport, IA",
        url: "http://www.ada.gov/DavenportSA.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Davenport's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide.",
  },

  {
    slug: "doj-v-city-of-frederick-md-2004",
    title: "US DOJ v. City of Frederick, MD - Physical Accessibility Settlement",
    defendant: "City of Frederick, MD",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Frederick, Maryland to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Frederick, Maryland as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Frederick to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Frederick, MD",
        url: "http://www.ada.gov/fredericksa.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Frederick's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-city-of-gallup-nm-2004",
    title: "US DOJ v. City of Gallup, NM - Physical Accessibility Settlement",
    defendant: "City of Gallup, NM",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Gallup, New Mexico to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Gallup, New Mexico as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Gallup to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, and service facilities
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services
- Train city employees on ADA requirements
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access city services and participate in civic activities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Gallup, NM",
        url: "http://www.ada.gov/gallupnm.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Gallup's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide.",
  },

  {
    slug: "doj-v-city-of-green-bay-wi-2004",
    title: "US DOJ v. City of Green Bay, WI - Physical Accessibility Settlement",
    defendant: "City of Green Bay, WI",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Green Bay, Wisconsin to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Green Bay, Wisconsin as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Green Bay to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Green Bay, WI",
        url: "http://www.ada.gov/GreenBaySA.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Green Bay's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-city-of-san-luis-obispo-2004",
    title: "US DOJ v. City of San Luis Obispo - Physical Accessibility Settlement",
    defendant: "City of San Luis Obispo",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of San Luis Obispo to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of San Luis Obispo, California as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of San Luis Obispo to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of San Luis Obispo",
        url: "http://www.ada.gov/sanluis.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of San Luis Obispo's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-city-of-san-rafael-ca-2004",
    title: "US DOJ v. City of San Rafael, CA - Physical Accessibility Settlement",
    defendant: "City of San Rafael, CA",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of San Rafael, California to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of San Rafael, California as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of San Rafael to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of San Rafael, CA",
        url: "http://www.ada.gov/SanRafaelSA.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of San Rafael's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-city-of-suffolk-va-2004",
    title: "US DOJ v. City of Suffolk, VA - Physical Accessibility Settlement",
    defendant: "City of Suffolk, VA",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Suffolk, Virginia to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Suffolk, Virginia as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Suffolk to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Suffolk, VA",
        url: "http://www.ada.gov/suffolkva.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Suffolk's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-county-of-cape-may-nj-2004",
    title: "US DOJ v. County of Cape May, NJ - Physical Accessibility Settlement",
    defendant: "County of Cape May, NJ",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Cape May County, New Jersey to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Cape May County, New Jersey as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Cape May County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - County of Cape May, NJ",
        url: "http://www.ada.gov/capemaysa.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Cape May County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-deschutes-county-or-2004",
    title: "US DOJ v. Deschutes County, OR - Physical Accessibility Settlement",
    defendant: "Deschutes County, OR",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Deschutes County, Oregon to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Deschutes County, Oregon as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Deschutes County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Deschutes County, OR",
        url: "http://www.ada.gov/deschutessa.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Deschutes County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-highland-county-oh-2004",
    title: "US DOJ v. Highland County, OH - Physical Accessibility Settlement",
    defendant: "Highland County, OH",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Highland County, Ohio to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Highland County, Ohio as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Highland County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Highland County, OH",
        url: "http://www.ada.gov/highlandsa.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Highland County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-jeffersonville-in-2004",
    title: "US DOJ v. City of Jeffersonville, IN - Physical Accessibility Settlement",
    defendant: "City of Jeffersonville, IN",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Jeffersonville, Indiana to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Jeffersonville, Indiana as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Jeffersonville to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Jeffersonville, IN",
        url: "http://www.ada.gov/jeffersonvillesa.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Jeffersonville's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-lafayette-county-fl-2004",
    title: "US DOJ v. Lafayette County, FL - Physical Accessibility Settlement",
    defendant: "Lafayette County, FL",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Lafayette County, Florida to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Lafayette County, Florida as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Lafayette County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Lafayette County, FL",
        url: "http://www.ada.gov/lafayettefl.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Lafayette County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-minnehaha-sd-2004",
    title: "US DOJ v. Minnehaha County, SD - Physical Accessibility Settlement",
    defendant: "Minnehaha County, SD",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Minnehaha County, South Dakota to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Minnehaha County, South Dakota as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Minnehaha County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Minnehaha County, SD",
        url: "http://www.ada.gov/minnehahasa.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Minnehaha County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-missoula-county-mt-2004",
    title: "US DOJ v. Missoula County, MT - Physical Accessibility Settlement",
    defendant: "Missoula County, MT",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Missoula County, Montana to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Missoula County, Montana as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Missoula County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Missoula County, MT",
        url: "http://www.ada.gov/missoula.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Missoula County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-taos-county-nm-2004",
    title: "US DOJ v. Taos County, NM - Physical Accessibility Settlement",
    defendant: "Taos County, NM",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Taos County, New Mexico to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Taos County, New Mexico as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Taos County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Taos County, NM",
        url: "http://www.ada.gov/TaosSA.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Taos County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-juneau-ak-2004",
    title: "US DOJ v. City and Borough of Juneau, AK - Physical Accessibility Settlement",
    defendant: "The City and Borough of Juneau, AK",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City and Borough of Juneau, Alaska to remove physical accessibility barriers and ensure all programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City and Borough of Juneau, Alaska as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city and borough's facilities and ensured that all programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City and Borough of Juneau to:
- Conduct self-evaluations of all facilities and programs
- Remove physical barriers in buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City and Borough of Juneau, AK",
        url: "http://www.ada.gov/JuneauSA.htm",
      },
    ],
    keyTakeaways: [
      "Local governments must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City and Borough of Juneau's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of local governments nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-town-of-brunswick-me-2004",
    title: "US DOJ v. Town of Brunswick, ME - Physical Accessibility Settlement",
    defendant: "Town of Brunswick, ME",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the Town of Brunswick, Maine to remove physical accessibility barriers and ensure all town programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the Town of Brunswick, Maine as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the town's facilities and ensured that all town programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the Town of Brunswick to:
- Conduct self-evaluations of all town facilities and programs
- Remove physical barriers in town buildings including town halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all town facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train town employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access town services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Town of Brunswick, ME",
        url: "http://www.ada.gov/BrunswickSA.htm",
      },
    ],
    keyTakeaways: [
      "Towns must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the Town of Brunswick's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of towns nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-town-of-fountain-hills-az-2004",
    title: "US DOJ v. Town of Fountain Hills, AZ - Physical Accessibility Settlement",
    defendant: "Town of Fountain Hills, AZ",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the Town of Fountain Hills, Arizona to remove physical accessibility barriers and ensure all town programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the Town of Fountain Hills, Arizona as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the town's facilities and ensured that all town programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the Town of Fountain Hills to:
- Conduct self-evaluations of all town facilities and programs
- Remove physical barriers in town buildings including town halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all town facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train town employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access town services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Town of Fountain Hills, AZ",
        url: "http://www.ada.gov/FountainHillsSA.htm",
      },
    ],
    keyTakeaways: [
      "Towns must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the Town of Fountain Hills' facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of towns nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-town-of-vail-co-2004",
    title: "US DOJ v. Town of Vail, CO - Physical Accessibility Settlement",
    defendant: "Town of Vail, CO",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the Town of Vail, Colorado to remove physical accessibility barriers and ensure all town programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the Town of Vail, Colorado as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the town's facilities and ensured that all town programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the Town of Vail to:
- Conduct self-evaluations of all town facilities and programs
- Remove physical barriers in town buildings including town halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all town facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train town employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access town services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Town of Vail, CO",
        url: "http://www.ada.gov/VailSA.htm",
      },
    ],
    keyTakeaways: [
      "Towns must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the Town of Vail's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of towns nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-vail-recreation-district-2004",
    title: "US DOJ v. Vail Recreation District - Physical Accessibility Settlement",
    defendant: "Vail Recreation District",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the Vail Recreation District to remove physical accessibility barriers and ensure all district programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the Vail Recreation District as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the district's facilities and ensured that all district programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the Vail Recreation District to:
- Conduct self-evaluations of all district facilities and programs
- Remove physical barriers in district buildings including recreation centers, parks, and sports facilities
- Ensure accessible routes, entrances, and parking at all district facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train district employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access recreation programs and facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Vail Recreation District",
        url: "http://www.ada.gov/VailRecSA.htm",
      },
    ],
    keyTakeaways: [
      "Special districts must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for special districts",
      "Self-evaluation and transition plans required for barrier removal",
      "Recreation programs must be accessible to people with disabilities",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the Vail Recreation District's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in special districts nationwide, enabling people with disabilities to fully participate in recreation and community programs.",
  },

  {
    slug: "doj-v-washington-county-ut-2004",
    title: "US DOJ v. Washington County, UT - Physical Accessibility Settlement",
    defendant: "Washington County, UT",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2004-01-01",
    dateResolved: "2004-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Washington County, Utah to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Washington County, Utah as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Washington County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Washington County, UT",
        url: "http://www.ada.gov/washcout.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Washington County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-ada-county-id-2005",
    title: "US DOJ v. Ada County, ID - Physical Accessibility Settlement",
    defendant: "Ada County, ID",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2005-01-01",
    dateResolved: "2005-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Ada County, Idaho to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Ada County, Idaho as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Ada County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Ada County, ID",
        url: "http://www.ada.gov/adaidsa.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Ada County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-allen-county-in-2005",
    title: "US DOJ v. Allen County, IN - Physical Accessibility Settlement",
    defendant: "Allen County, IN",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2005-01-01",
    dateResolved: "2005-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Allen County, Indiana to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Allen County, Indiana as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Allen County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Allen County, IN",
        url: "http://www.ada.gov/allensa.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Allen County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-amarillo-tx-2005",
    title: "US DOJ v. City of Amarillo, TX - Physical Accessibility Settlement",
    defendant: "City of Amarillo, TX",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2005-01-01",
    dateResolved: "2005-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Amarillo, Texas to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Amarillo, Texas as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Amarillo to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Amarillo, TX",
        url: "http://www.ada.gov/amarillotxsa.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Amarillo's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-barnstable-county-ma-2005",
    title: "US DOJ v. Barnstable County, MA - Physical Accessibility Settlement",
    defendant: "Barnstable County, MA",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2005-01-01",
    dateResolved: "2005-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring Barnstable County, Massachusetts to remove physical accessibility barriers in county facilities and ensure program accessibility for all county services.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with Barnstable County, Massachusetts as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the county's facilities and ensured that all county programs and services are accessible to people with disabilities under ADA Title II.

The settlement required Barnstable County to:
- Conduct self-evaluations of all county facilities and programs
- Remove physical barriers in county buildings including courthouses, administrative offices, and service centers
- Ensure accessible routes, entrances, and parking at all county facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train county employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents with disabilities could access essential county services including court services, social services, voting, and other government programs on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - Barnstable County, MA",
        url: "http://www.ada.gov/barnstableMApca.htm",
      },
    ],
    keyTakeaways: [
      "Counties must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for county governments",
      "Self-evaluation and transition plans required for systematic barrier removal",
      "Program accessibility must be maintained - services accessible even if facilities need renovation",
      "Training and grievance procedures essential for ongoing compliance",
    ],
    impact:
      "This settlement ensured that Barnstable County's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of counties nationwide, ensuring people with disabilities can access essential government services and participate fully in civic life.",
  },

  {
    slug: "doj-v-billings-mt-2005",
    title: "US DOJ v. City of Billings, MT - Physical Accessibility Settlement",
    defendant: "City of Billings, MT",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2005-01-01",
    dateResolved: "2005-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Billings, Montana to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Billings, Montana as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Billings to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Billings, MT",
        url: "http://www.ada.gov/BillingsMTpca.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Billings' facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-birmingham-al-2005",
    title: "US DOJ v. City of Birmingham, AL - Physical Accessibility Settlement",
    defendant: "City of Birmingham, AL",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2005-01-01",
    dateResolved: "2005-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Birmingham, Alabama to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Birmingham, Alabama as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Birmingham to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Birmingham, AL",
        url: "http://www.ada.gov/birminghamalsa.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Birmingham's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-city-of-durham-nc-2005",
    title: "US DOJ v. City of Durham, NC - Physical Accessibility Settlement",
    defendant: "City of Durham, NC",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2005-01-01",
    dateResolved: "2005-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Durham, North Carolina to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Durham, North Carolina as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Durham to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Durham, NC",
        url: "http://www.ada.gov/DurhamNCpca.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Durham's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  {
    slug: "doj-v-city-of-fontana-ca-2005",
    title: "US DOJ v. City of Fontana, CA - Physical Accessibility Settlement",
    defendant: "City of Fontana, CA",
    plaintiff: "U.S. Department of Justice",
    dateFiled: "2005-01-01",
    dateResolved: "2005-12-31",
    status: "settled",
    summary:
      "DOJ Project Civic Access settlement requiring the City of Fontana, California to remove physical accessibility barriers and ensure all city programs and services are accessible to people with disabilities.",
    details: `The U.S. Department of Justice reached a comprehensive settlement agreement with the City of Fontana, California as part of DOJ's Project Civic Access initiative. This settlement addressed physical accessibility barriers throughout the city's facilities and ensured that all city programs and services are accessible to people with disabilities under ADA Title II.

The settlement required the City of Fontana to:
- Conduct self-evaluations of all city facilities and programs
- Remove physical barriers in city buildings including city halls, community centers, libraries, and parks
- Ensure accessible routes, entrances, and parking at all city facilities
- Make restrooms, drinking fountains, and other amenities accessible
- Provide accessible voting locations and equipment
- Ensure accessible communication including TTY/TDD services and sign language interpreters
- Train city employees on ADA requirements and serving customers with disabilities
- Establish grievance procedures for accessibility complaints
- Develop and implement transition plans for systematic barrier removal

These requirements ensured that residents and visitors with disabilities could access city services, participate in civic activities, and enjoy public facilities on an equal basis with others.`,
    issues: [
      "Physical barriers in public facilities",
      "Inaccessible entrances and routes",
      "Lack of accessible parking",
      "Inaccessible restrooms and amenities",
      "Barriers to program access",
      "Inaccessible voting locations",
      "Lack of accessible communication",
    ],
    jurisdiction: "United States (DOJ Project Civic Access settlement)",
    category: "physical",
    officialLinks: [
      {
        title: "DOJ Settlement - City of Fontana, CA",
        url: "http://www.ada.gov/FontanaCApca06.htm",
      },
    ],
    keyTakeaways: [
      "Cities must ensure accessible facilities and programs under ADA Title II",
      "DOJ Project Civic Access enforces compliance for local governments",
      "Self-evaluation and transition plans required for barrier removal",
      "Program accessibility must be maintained even during facility renovations",
      "Training and grievance procedures essential for compliance",
    ],
    impact:
      "This settlement ensured that the City of Fontana's facilities and services are accessible to people with disabilities. As part of Project Civic Access, these settlements have improved accessibility in hundreds of cities nationwide, enabling people with disabilities to fully participate in civic life.",
  },

  // TRANSPORTATION ACCESSIBILITY
  {
    slug: "dot-v-american-airlines-2024",
    title: "DOT v. American Airlines - Largest Airline Disability Penalty",
    defendant: "American Airlines",
    plaintiff: "U.S. Department of Transportation",
    dateFiled: "2024-10-01",
    dateResolved: "2024-10-31",
    status: "settled",
    settlementAmount: "$50 million (largest ever against airline for disability violations)",
    summary:
      "Landmark DOT enforcement action against American Airlines for systematic wheelchair mishandling and unsafe assistance practices, resulting in $50 million penalty.",
    details: `The U.S. Department of Transportation took enforcement action against American Airlines for systematic failures in handling wheelchairs and providing safe assistance to passengers with mobility disabilities during the 2019-2023 period.

Violations documented:
- Over 11,500 wheelchairs and scooters mishandled by airlines in 2023 alone
- American Airlines contributed disproportionately to this total
- Documented evidence of unsafe physical assistance practices
- Multiple passenger injuries from improper handling
- Video evidence showing wheelchair thrown down baggage ramp at Miami International Airport
- Lack of proper equipment and training for ground personnel

Settlement terms:
- $25 million civil penalty to U.S. Treasury
- $25 million credited for investments in:
  - Wheelchair equipment and handling systems
  - Specialized tagging systems for mobility devices
  - Additional ground control employees
  - Staff training and safety protocols
  - Equipment maintenance programs

Significance:
- Represents the largest single penalty ever levied against airline for disability violations
- Demonstrates DOT commitment to transportation accessibility
- Addresses systemic industry problem affecting thousands of travelers annually
- Establishes precedent for substantial penalties for transportation failures`,
    issues: [
      "Wheelchair mishandling",
      "Unsafe passenger assistance",
      "Inadequate equipment",
      "Insufficient staff training",
      "Pattern of injuries",
    ],
    jurisdiction: "U.S. Department of Transportation",
    category: "transportation",
    keyTakeaways: [
      "Airlines face substantial liability for wheelchair handling failures",
      "DOT actively enforces transportation accessibility requirements",
      "Systemic violations attract maximum penalties",
      "Over 11,500 annual wheelchair incidents demonstrate industry-wide problems",
      "Equipment investment required as remediation component",
    ],
    impact:
      "This enforcement action signals that DOT will aggressively pursue transportation accessibility violations. It may prompt industry-wide improvements in wheelchair handling procedures and staff training.",
  },

  {
    slug: "lyft-wav-class-action-2024",
    title: "Lyft Wheelchair Accessible Vehicle (WAV) Class Action",
    defendant: "Lyft, Inc.",
    plaintiff: "Wheelchair users seeking accessible vehicles",
    dateFiled: "2023-01-01",
    dateResolved: "2024-07-30",
    status: "ongoing",
    summary:
      "Landmark class action trial addressing whether rideshare services must provide equal access to wheelchair-accessible vehicles.",
    details: `This case addresses a systemic issue affecting wheelchair users in the rideshare economy: the lack of readily available wheelchair-accessible vehicles (WAVs) through rideshare platforms. The lawsuit challenges Lyft's business model which does not guarantee WAV availability.

Issues presented:
- Long wait times for wheelchair-accessible vehicles (often 30-60+ minutes)
- Unreliable WAV availability despite platform claims
- Surge pricing applied to accessible vehicle requests
- Inconsistent WAV distribution across cities
- Discrimination against wheelchair users by effectively limiting access

Legal question:
"Must rideshare services provide equal access to wheelchair-accessible vehicles, or can they relegate disabled passengers to secondary tier of service?"

Trial Status:
- Trial held July 8, 2024 in U.S. District Court, Southern District of New York
- Trial completed; decision pending
- Represents landmark litigation about accessibility in gig economy services

Broader implications:
- Sets precedent for accessibility obligations in digital platform economy
- May require rideshare platforms to maintain minimum WAV availability
- Could establish precedent for regulatory requirements beyond current ADA standards`,
    issues: [
      "Lack of wheelchair-accessible vehicles",
      "Long wait times for accessible service",
      "Unequal service tier for disabled users",
      "Surge pricing discrimination",
      "Unreliable platform accessibility",
    ],
    jurisdiction: "U.S. District Court, Southern District of New York",
    category: "transportation",
    keyTakeaways: [
      "Gig economy platforms face accessibility requirements",
      "Equal access may require guaranteeing service availability",
      "Wheelchair users cannot be relegated to secondary service tier",
      "Digital platforms subject to same accessibility standards as traditional services",
      "Decision could reshape rideshare industry business models",
    ],
    impact:
      "If plaintiff prevails, this case could establish that rideshare platforms must guarantee wheelchair accessibility, potentially requiring significant service model changes industry-wide.",
  },

  {
    slug: "nfb-v-greyhound-2017",
    title: "National Federation of the Blind v. Greyhound - Website and Mobile App Accessibility",
    defendant: "Greyhound Lines, Inc.",
    plaintiff: "Tina Thomas, four other blind Californians, and National Federation of the Blind",
    dateFiled: "2017-06-12",
    status: "ongoing",
    summary:
      "Class action lawsuit alleging Greyhound's website and mobile app are inaccessible to blind users, violating ADA Title III and state laws. Plaintiffs were charged convenience fees for booking by phone when website was unusable.",
    details: `In February 2015, Tina Thomas, who is blind, attempted to book a trip from Los Angeles to Las Vegas on Greyhound.com but found that her text-to-speech screen reader software could not interpret Greyhound's website. When she called Greyhound to book her trip, explaining that she could not use the website, Greyhound still charged her a "convenience fee" for booking by phone. She tried to use the website again in early 2017, but the experience had not improved.

Ms. Thomas and four other blind Californians, along with the National Federation of the Blind, filed a class action lawsuit against Greyhound in federal district court. The lawsuit alleges that Greyhound has designed its website and mobile app so that they cannot be used by blind people, violating the Americans with Disabilities Act (ADA Title III) and California state laws.

Accessibility barriers:
- Website and mobile app incompatible with screen reader software
- Text-to-speech software cannot interpret website content
- Missing or improperly coded alt text for images and graphics
- Forms and menus not properly coded for screen reader compatibility
- Interactive elements not accessible to assistive technology users

Legal framework:
- Violates ADA Title III (public accommodations)
- Violates California Unruh Civil Rights Act
- Violates California Disabled Persons Act
- Website and app must comply with WCAG 2.0 Level AA standards

Key complaint:
The lawsuit highlights that while other major transportation providers (Southwest Airlines, Amtrak, Uber, and Lyft) have accessible websites or apps that blind people can use to book travel, Greyhound has not made the needed changes despite several requests from blind people and advocates.

Discriminatory pricing:
- Greyhound charges "convenience fees" for phone bookings
- Blind users forced to pay extra fees for the only booking method accessible to them
- Creates unequal treatment and financial burden on disabled customers

The lawsuit may be certified as a class action if the court approves. The suit seeks an injunction requiring Greyhound to make the needed changes to its website and mobile app to achieve WCAG 2.0 Level AA compliance.`,
    issues: [
      "Screen reader incompatibility",
      "Missing alt text for images",
      "Inaccessible forms and menus",
      "Mobile app accessibility barriers",
      "Discriminatory convenience fees",
      "Website not WCAG compliant",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Federal court, Northern District of California)",
    caseNumber: "Case No. 3:17-cv-03368",
    category: "transportation",
    officialLinks: [
      {
        title: "RBGG - Greyhound Lawsuit Announcement",
        url: "https://rbgg.com/lawsuit-alleges-blind-people-cannot-use-greyhound-website-mobile-app/",
      },
    ],
    keyTakeaways: [
      "Transportation companies must ensure website and mobile app accessibility",
      "Charging convenience fees for accessible booking methods may constitute discrimination",
      "Screen reader compatibility is essential for digital booking platforms",
      "Major transportation providers face liability for inaccessible digital services",
      "WCAG 2.0 Level AA is the expected standard for transportation websites",
      "Blind users should not be forced to pay extra fees for accessible booking methods",
    ],
    impact:
      "This case demonstrates that transportation companies cannot relegate blind customers to phone booking with additional fees. It establishes that digital accessibility is a requirement for transportation services, not an optional feature. The case may prompt other transportation providers to proactively ensure their digital platforms are accessible.",
  },

  // HEALTHCARE ACCESSIBILITY
  {
    slug: "multicare-health-settlement-2024",
    title: "MultiCare Health System - Interpreter Services Settlement",
    defendant: "MultiCare Health System (Washington)",
    plaintiff: "DOJ + HHS Office for Civil Rights",
    dateFiled: "2023-01-01",
    dateResolved: "2024-11-30",
    status: "settled",
    settlementAmount: "$2,000,000+ compensation fund",
    summary:
      "Major healthcare settlement requiring $2 million compensation for deaf and deaf-blind patients denied appropriate interpreter services.",
    details: `The Department of Justice and HHS Office for Civil Rights (OCR) reached settlement with MultiCare Health System of Washington for systematic failures to provide appropriate interpreter services to deaf and deaf-blind patients, violating Title III ADA and Section 504.

Violations:
- Failed to provide qualified sign language interpreters for deaf patients
- No available video relay services
- Required patients to provide their own interpreters (including family members)
- Forced family members to act as medical interpreters despite clinical risks
- Created barriers to emergency care access
- Compromised patient confidentiality when family members interpreted

Settlement compensation distribution:
- $100,000 each to two primary complainants
- $40,000 each to family members forced to interpret medical information
- $95,000 civil penalty to federal government
- Claims administrator appointed to identify additional affected patients
- Provision for future patient compensation from settlement fund

Required changes:
- Establish qualified interpreter service protocols
- Implement video relay service integration
- Staff training on interpreter availability requirements
- Monitoring and compliance mechanisms
- Accessibility coordinator appointment`,
    issues: [
      "No qualified interpreters provided",
      "Family members forced to interpret medical care",
      "Video relay services unavailable",
      "Barriers to emergency access",
      "Patient confidentiality violations",
    ],
    jurisdiction: "Washington state (DOJ/HHS settlement)",
    category: "healthcare",
    keyTakeaways: [
      "Healthcare providers must provide professional interpreters, not family",
      "Video relay services required for deaf patient communication",
      "Medical interpretation is distinct from general interpretation services",
      "Failing to accommodate deaf patients creates liability and confidentiality risks",
      "Settlements include both compensatory damages and systemic remediation",
    ],
    impact:
      "This settlement establishes that healthcare providers face substantial liability for failing to provide proper interpreter services. It may prompt healthcare systems nationwide to upgrade their accessibility infrastructure.",
  },

  // INTERNATIONAL CASES - EU
  {
    slug: "vueling-airlines-spain-2024",
    title: "Vueling Airlines v. Secretary of State (Spain) - Web Accessibility",
    defendant: "Vueling Airlines",
    plaintiff: "Secretary of State for Social Rights (Spain)",
    dateFiled: "2023-01-01",
    dateResolved: "2024-03-31",
    status: "settled",
    settlementAmount: "€90,000 fine plus 6-month public funding prohibition",
    summary:
      "First major private-sector enforcement case in Spain directly linked to European accessibility requirements, holding airline liable for inaccessible website.",
    details: `Spain's National Court (Audiencia Nacional) ruled against Vueling Airlines for maintaining an inaccessible website, finding violation of Royal Legislative Decree 1/2013 (General Law on the Rights of Persons with Disabilities).

Case significance:
- First major Spanish private-sector enforcement case for web accessibility
- Occurred before European Accessibility Act (EAA) enforcement deadline
- Demonstrated Spain's proactive enforcement of accessibility requirements
- Court noted minimal progress despite previous 2016 inspection/sanction

Accessibility issues:
- Website not WCAG compliant
- Screen reader incompatibility
- Missing alt text for images
- Non-functional keyboard navigation
- Form accessibility barriers

Penalty structure:
- €90,000 fine (significant for private company)
- 6-month prohibition from receiving public funds from Secretary of State for Social Rights
- Requirement to remediate website accessibility within specified timeframe
- Continued monitoring obligations

Legal context:
- Case anticipated European Accessibility Act (EAA) June 28, 2025 enforcement deadline
- Demonstrated that accessibility compliance would be enforced with penalties
- Set precedent for Spanish private-sector liability`,
    issues: [
      "Inaccessible website",
      "Screen reader incompatibility",
      "Missing alt text",
      "Keyboard navigation failures",
      "Form accessibility barriers",
    ],
    wcagLevel: "AA",
    jurisdiction: "Spain (National Court / Audiencia Nacional)",
    category: "international",
    caseNumber: "Contentious-Administrative Chamber",
    keyTakeaways: [
      "European countries enforcing web accessibility before EAA deadline",
      "Private companies liable for website accessibility violations",
      "Penalties include both fines and business operation restrictions",
      "Previous non-compliance increases enforcement scrutiny",
      "EAA likely to intensify enforcement across EU",
    ],
    impact:
      "This case demonstrates that European enforcement of web accessibility is not theoretical. Organizations operating in the EU face real consequences for non-compliance, and this will likely intensify significantly following EAA enforcement deadlines.",
  },

  {
    slug: "french-retailers-eaa-2025",
    title: "French Retailers - European Accessibility Act Pre-Enforcement Actions",
    defendant: "Auchan, Carrefour, E. Leclerc, Picard Surgelés",
    plaintiff: "ApiDV & Droit Pluriel (advocacy groups)",
    dateFiled: "2025-07-07",
    status: "ongoing",
    summary:
      "First major European Accessibility Act enforcement actions by advocacy groups immediately after June 28, 2025 effective date, targeting major French supermarket chains.",
    details: `Just days after the European Accessibility Act (EAA) effective date of June 28, 2025, French disability advocacy groups ApiDV and Droit Pluriel issued formal enforcement notices to four major French retailers for inaccessible online shopping platforms.

Affected retailers:
- Auchan (major supermarket chain)
- Carrefour (France's largest retailer)
- E. Leclerc (supermarket network)
- Picard Surgelés (frozen food retailer)

Accessibility issues:
- Online grocery ordering systems not fully accessible
- Screen reader incompatibility
- Missing alt text for product images
- Non-functional keyboard navigation
- Checkout process barriers

Legal framework:
- European Accessibility Act (EAA) enforcement effective June 28, 2025
- Requires WCAG 2.1 AA compliance for digital services
- Applies to organizations with annual turnover >€2 million

Enforcement timeline:
- Formal notices issued July 7, 2025
- Retailers given until September 1, 2025 to achieve compliance
- Legal action threatened if compliance not achieved by deadline
- Potential penalties up to €250,000 per violation under French law

Significance:
- First coordinated EAA enforcement actions by advocacy groups
- Demonstrates immediate enforcement will follow effective date
- Targets high-visibility retailers to maximize compliance impact
- Sets precedent for aggressive enforcement approach`,
    issues: [
      "Inaccessible online shopping platforms",
      "Screen reader incompatibility",
      "Missing product image alt text",
      "Keyboard navigation failures",
      "Checkout process barriers",
    ],
    wcagLevel: "AA",
    jurisdiction: "France (under European Accessibility Act)",
    category: "international",
    keyTakeaways: [
      "EAA enforcement began immediately upon effective date",
      "Advocacy groups actively enforcing against major corporations",
      "Major retailers remain vulnerable to accessibility litigation",
      "E-commerce requires comprehensive WCAG 2.1 AA compliance",
      "French penalties among Europe's highest (up to €250,000)",
      "No grace period or transition time after EAA effective date",
    ],
    impact:
      "These cases demonstrate that EAA enforcement is not theoretical. European retailers face immediate compliance pressure and substantial penalties. This will likely accelerate accessibility implementation across EU e-commerce sector.",
  },

  // UK EMPLOYMENT CASES
  {
    slug: "wright-turner-v-hammersmith-2024",
    title: "Wright-Turner v. London Borough of Hammersmith - Record UK Compensation",
    defendant: "London Borough of Hammersmith and Fulham & Ms K Dero",
    plaintiff: "Wright-Turner (employee with ADHD and PTSD)",
    dateFiled: "2020-01-01",
    dateResolved: "2024-03-13",
    status: "won",
    settlementAmount: "£4,580,587.39 total",
    summary:
      "One of the largest Employment Tribunal awards in UK history for disability discrimination. Award far exceeded previous Vento caps due to exceptional circumstances.",
    details: `The Employment Tribunal awarded record-breaking compensation of £4.58 million to Wright-Turner for disability discrimination by London Borough of Hammersmith and Fulham.

Discrimination claims:
- Discrimination related to ADHD (Attention-Deficit/Hyperactivity Disorder)
- Discrimination related to PTSD (Post-Traumatic Stress Disorder)
- Failure to provide reasonable accommodations
- Discriminatory treatment despite disclosure of disabilities
- Constructive dismissal forcing employee to resign

Award breakdown:
- Past loss of earnings: £327,000+
- Future loss of earnings to retirement: £900,000
- Loss of pension contributions: £600,000+
- Injury to feelings: £60,000 (exceeded highest Vento band)
- Psychiatric injury: £60,000
- ACAS Code uplift: £271,479.85
- Exemplary damages: £15,000

Legal significance:
- One of largest Employment Tribunal awards in UK history
- Demonstrates courts willing to award substantial damages for serious discrimination
- Exceptional circumstances justified exceeding traditional Vento bands
- Establishes precedent for future disability discrimination claims
- Shows that neurodivergent conditions (ADHD, PTSD) receive legal protection

Vento bands context:
- Traditional Vento bands cap injury to feelings at £30,000-£45,000
- This award's £60,000 injury component significantly exceeded standard levels
- Reflects tribunal finding of exceptionally serious discrimination`,
    issues: [
      "Disability discrimination (ADHD and PTSD)",
      "Failure to accommodate disabilities",
      "Constructive dismissal",
      "Discriminatory employment practices",
      "Breach of Equality Act 2010",
    ],
    jurisdiction: "United Kingdom (Employment Tribunal)",
    category: "employment",
    keyTakeaways: [
      "UK Employment Tribunals can award record-breaking damages",
      "Neurodivergent conditions (ADHD, PTSD) receive legal protection",
      "Damages can exceed traditional Vento caps in exceptional cases",
      "Injury to feelings component can reach £60,000+ for serious discrimination",
      "Employers must accommodate disclosed disabilities",
    ],
    impact:
      "This case sets a precedent for substantial disability discrimination awards in the UK. It demonstrates that serious discrimination can result in damages far exceeding traditional caps, which may encourage more disabled employees to pursue claims.",
  },

  // 2022-2023 HEALTHCARE CASES
  {
    slug: "us-v-flint-neurological-centre-2022",
    title: "United States v. Flint Neurological Centre P.C. - Sign Language Interpreter Denial",
    defendant: "Flint Neurological Centre P.C. and Dr. Nael Tarakji",
    plaintiff: "United States of America",
    dateFiled: "2022-03-17",
    dateResolved: "2023-06-20",
    status: "settled",
    summary:
      "DOJ lawsuit against medical practice for refusing to provide sign language interpreters to deaf and hard of hearing patients, violating ADA Title III requirements for effective communication.",
    details: `The U.S. Attorney's Office for the Eastern District of Michigan filed a lawsuit against Flint Neurological Centre P.C. and Dr. Nael Tarakji, alleging that the medical practice violated Title III of the Americans with Disabilities Act by refusing to provide auxiliary aids and services required to ensure effective communication with patients who are deaf or hard of hearing.

The complaint alleged that the medical practice repeatedly refused requests for sign language interpreters from deaf patients, instead requiring them to bring their own interpreters or communicate through written notes. This practice violated the ADA's requirement that healthcare providers ensure effective communication with patients with disabilities.

Key violations:
- Refusal to provide qualified sign language interpreters
- Failure to ensure effective communication with deaf patients
- Requiring patients to provide their own auxiliary aids
- Discrimination against individuals with hearing disabilities

The settlement required the medical practice to:
- Develop and implement policies for providing auxiliary aids and services
- Train staff on ADA requirements for effective communication
- Provide sign language interpreters when necessary
- Compensate affected patients
- Submit to monitoring by the DOJ

This case highlights the critical importance of effective communication in healthcare settings and the legal obligation of medical providers to accommodate patients with disabilities.`,
    issues: [
      "Failure to provide sign language interpreters",
      "Denial of effective communication for deaf patients",
      "ADA Title III violations in healthcare",
      "Discrimination against individuals with hearing disabilities",
    ],
    jurisdiction: "U.S. District Court for the Eastern District of Michigan",
    category: "healthcare",
    officialLinks: [
      {
        title: "PacerMonitor - United States v. Flint Neurological Centre",
        url: "https://www.pacermonitor.com/public/case/43904583/United_States_of_America_v_Flint_Neurological_Centre_PC",
      },
    ],
    unofficialLinks: [
      {
        title: "DOJ Press Release - Flint Neurological Centre Lawsuit",
        url: "https://www.justice.gov/usao-edmi/pr/us-attorney-s-office-files-lawsuit-against-flint-neurological-centre-pc-violating",
      },
    ],
    keyTakeaways: [
      "Healthcare providers must provide auxiliary aids and services for effective communication",
      "Sign language interpreters are required when necessary for effective communication",
      "Patients cannot be required to provide their own interpreters",
      "DOJ actively enforces ADA requirements in healthcare settings",
      "Medical practices face legal consequences for denying communication accommodations",
    ],
    impact:
      "This case reinforces that healthcare providers have a legal obligation to ensure effective communication with patients who are deaf or hard of hearing. The DOJ's enforcement action demonstrates that medical practices cannot refuse to provide necessary auxiliary aids and services.",
  },

  // 2023 DIGITAL ACCESSIBILITY CASES
  {
    slug: "toro-v-whirlpool-2023",
    title: "Toro v. Whirlpool Corporation - KitchenAid Website Accessibility",
    defendant: "Whirlpool Corporation",
    plaintiff: "Andrew Toro, on behalf of himself and all others similarly situated",
    dateFiled: "2023-01-02",
    dateResolved: "2023-03-04",
    status: "settled",
    caseNumber: "1:23-cv-848",
    summary:
      "Class action lawsuit alleging KitchenAid's website discriminates against blind and visually impaired consumers by not being compatible with screen-reading software.",
    details: `Andrew Toro filed a class action lawsuit against Whirlpool Corporation on behalf of himself and all others similarly situated, alleging that KitchenAid's website discriminates against blind and visually impaired people.

The lawsuit claims that the company has not made its website compatible with screen-reading software that helps visually impaired consumers navigate websites. This prevents blind and visually impaired individuals from independently accessing KitchenAid's products, services, and information online.

The case was filed in the U.S. District Court for the Southern District of New York and settled quickly in March 2023, just two months after filing. The rapid settlement suggests Whirlpool recognized the accessibility issues and moved to resolve them.

This case is part of a broader pattern of website accessibility litigation targeting major consumer brands, particularly in the home appliance and retail sectors.`,
    issues: [
      "Website not compatible with screen-reading software",
      "Inaccessible to blind and visually impaired users",
      "Lack of alternative text and accessible navigation",
      "ADA Title III violations in e-commerce",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court for the Southern District of New York",
    category: "digital",
    officialLinks: [
      {
        title: "PacerMonitor - Toro v. Whirlpool Corporation",
        url: "https://www.pacermonitor.com/public/case/47658398/Toro_v_Whirlpool_Corporation",
      },
    ],
    unofficialLinks: [
      {
        title: "Top Class Actions - Whirlpool Class Action",
        url: "https://topclassactions.com/disability-class-action-lawsuit/whirlpool-class-action-alleges-kitchenaid-website-not-accessible-to-visually-impaired-blind-visitors/",
      },
    ],
    keyTakeaways: [
      "Major appliance manufacturers face website accessibility litigation",
      "E-commerce sites must be compatible with screen-reading software",
      "Cases can settle quickly when companies address accessibility promptly",
      "Consumer product websites are frequent targets of accessibility lawsuits",
      "Class action format allows multiple plaintiffs to seek relief",
    ],
    impact:
      "This case demonstrates that even well-established consumer brands like KitchenAid are vulnerable to website accessibility claims. The quick settlement suggests companies are increasingly recognizing the importance of digital accessibility compliance.",
  },

  {
    slug: "toro-v-hasbro-2023",
    title: "Toro v. Hasbro Inc. - Fan Website Accessibility",
    defendant: "Hasbro, Inc.",
    plaintiff: "Luis Toro",
    dateFiled: "2023-04-04",
    dateResolved: "2023-09-06",
    status: "settled",
    caseNumber: "1:23-cv-02800",
    summary:
      "Lawsuit alleging Hasbro's website contains access barriers to screen-reading software, preventing blind and visually impaired individuals from independently using the site.",
    details: `Luis Toro, a legally blind man, filed a lawsuit against Hasbro, Inc., claiming that the company failed to make its website fully accessible to and independently usable by individuals who are blind or visually impaired.

The complaint alleges that Hasbro's website contains access barriers to screen-reading software used by individuals who are blind or visually impaired to scan the internet. These barriers prevent blind users from independently engaging with Hasbro's digital services, including accessing product information, fan content, and other website features.

The case was filed in the U.S. District Court for the Southern District of New York and settled in September 2023, approximately five months after filing. The settlement likely required Hasbro to make its website accessible and compatible with assistive technologies.

This case highlights that entertainment and toy company websites, including fan sites and brand platforms, must be accessible to users with disabilities.`,
    issues: [
      "Website access barriers for screen-reading software",
      "Inaccessible to blind and visually impaired users",
      "Lack of independent usability for disabled users",
      "ADA Title III violations",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court for the Southern District of New York",
    category: "digital",
    officialLinks: [
      {
        title: "PacerMonitor - Toro v. Hasbro, Inc.",
        url: "https://www.pacermonitor.com/public/case/48395527/Toro_v_Hasbro,_Inc",
      },
    ],
    unofficialLinks: [
      {
        title: "Top Class Actions - Hasbro Class Action",
        url: "https://topclassactions.com/disability-class-action-lawsuit/hasbro-class-action-claims-fan-site-not-accessible-to-blind-visually-impaired-visitors/",
      },
    ],
    keyTakeaways: [
      "Entertainment and toy company websites must be accessible",
      "Fan sites and brand platforms are subject to ADA requirements",
      "Screen reader compatibility is essential for all public-facing websites",
      "Companies must ensure independent usability for disabled users",
      "Settlements typically require comprehensive website accessibility improvements",
    ],
    impact:
      "This case demonstrates that entertainment industry websites, including fan sites and brand platforms, are subject to the same accessibility requirements as e-commerce sites. Companies must ensure their digital presence is accessible to all users.",
  },

  {
    slug: "alexandria-v-panama-jack-2023",
    title: "Alexandria v. Panama Jack International Inc. - Website Accessibility",
    defendant: "Panama Jack International, Inc.",
    plaintiff: "Erika Alexandria",
    dateFiled: "2023-07-06",
    dateResolved: "2023-10-08",
    status: "settled",
    caseNumber: "1:23-cv-04811",
    summary:
      "Lawsuit alleging Panama Jack's website is not accessible to those who are blind or visually impaired, violating the Americans with Disabilities Act.",
    details: `Erika Alexandria filed a lawsuit against Panama Jack International, Inc., claiming that the company's website is not accessible to those who are blind or visually impaired, a violation of the Americans with Disabilities Act.

The case was filed in the U.S. District Court for the Southern District of New York and settled in October 2023, approximately three months after filing. The settlement likely required Panama Jack to make its website accessible and compatible with assistive technologies used by blind and visually impaired individuals.

This case is part of the ongoing pattern of website accessibility litigation targeting retail and consumer product companies. Fashion and lifestyle brands are increasingly facing accessibility claims as e-commerce becomes the primary sales channel.`,
    issues: [
      "Website not accessible to blind and visually impaired users",
      "ADA Title III violations",
      "Lack of screen reader compatibility",
      "Inaccessible e-commerce platform",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court for the Southern District of New York",
    category: "digital",
    officialLinks: [
      {
        title: "PacerMonitor - Alexandria v. Panama Jack International",
        url: "https://www.pacermonitor.com/public/case/49143542/Alexandria_v_Panama_Jack_International,_Inc",
      },
    ],
    unofficialLinks: [
      {
        title: "Top Class Actions - Panama Jack Class Action",
        url: "https://topclassactions.com/disability-class-action-lawsuit/panama-jack-class-action-alleges-website-not-fully-accessible-to-disabled-users/",
      },
    ],
    keyTakeaways: [
      "Fashion and lifestyle brand websites must be accessible",
      "E-commerce platforms are frequent targets of accessibility litigation",
      "Retail companies face increasing pressure to ensure digital accessibility",
      "Quick settlements suggest companies recognize accessibility obligations",
      "ADA requirements apply to all public-facing commercial websites",
    ],
    impact:
      "This case reinforces that fashion and lifestyle brands must ensure their e-commerce platforms are accessible. As online shopping becomes the primary sales channel, accessibility compliance is essential for legal protection and market reach.",
  },

  // 2024 DIGITAL ACCESSIBILITY CASES
  {
    slug: "colak-v-sweetgreen-2024",
    title: "Colak v. Sweetgreen Inc. - Website Accessibility Barriers",
    defendant: "Sweetgreen Inc.",
    plaintiff: "Ali Colak",
    dateFiled: "2024-10-01",
    dateResolved: "2025-02-07",
    status: "settled",
    caseNumber: "2:24-cv-00198",
    summary:
      "Lawsuit alleging Sweetgreen's website contains access barriers to screen-reading software, preventing blind and visually impaired consumers from accessing the company's online services.",
    details: `Ali Colak filed a lawsuit against Sweetgreen Inc., claiming that the company's website contains access barriers to screen-reading software used by individuals who are blind or visually impaired to access the internet.

The case was filed in the U.S. District Court for the Eastern District of New York and settled in February 2025, approximately four months after filing. The lawsuit alleges that Sweetgreen's website prevents blind users from independently accessing the company's online ordering system, menu information, and other digital services.

This case highlights that food service and restaurant companies must ensure their online platforms, including ordering systems and menus, are accessible to users with disabilities. As restaurants increasingly rely on digital ordering, accessibility becomes critical for equal access to services.`,
    issues: [
      "Website access barriers for screen-reading software",
      "Inaccessible online ordering system",
      "Lack of accessible menu information",
      "ADA Title III violations in food service",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court for the Eastern District of New York",
    category: "digital",
    officialLinks: [
      {
        title: "PacerMonitor - Colak v. Sweetgreen, Inc.",
        url: "https://www.pacermonitor.com/public/case/51968173/Colak_v_Sweetgreen,_Inc",
      },
    ],
    unofficialLinks: [
      {
        title: "Top Class Actions - Sweetgreen Class Action",
        url: "https://topclassactions.com/lawsuit-settlements/lawsuit-news/sweetgreen-class-action-claims-website-inaccessible-to-blind-visually-impaired-consumers/",
      },
    ],
    keyTakeaways: [
      "Restaurant and food service websites must be accessible",
      "Online ordering systems require screen reader compatibility",
      "Digital menus must be accessible to blind users",
      "Food service companies face increasing accessibility litigation",
      "Accessibility is critical as restaurants shift to digital ordering",
    ],
    impact:
      "This case demonstrates that food service companies must ensure their digital platforms are accessible. As restaurants increasingly rely on online ordering, accessibility compliance is essential for serving all customers equally.",
  },

  {
    slug: "frost-v-petco-2024",
    title: "Frost et al. v. Petco Animal Supplies Stores Inc. - Website Accessibility",
    defendant: "Petco Animal Supplies Stores, Inc.",
    plaintiff: "Clarence Frost and Tammy Frost",
    dateFiled: "2024-09-16",
    dateResolved: "2024-11-04",
    status: "settled",
    caseNumber: "0:24-cv-03669",
    summary:
      "Class action lawsuit filed by two legally blind consumers alleging Petco's website is not accessible to individuals who use a screen reader.",
    details: `Two legally blind consumers, Clarence and Tammy Frost, filed a class action lawsuit against Petco Animal Supplies Stores, Inc., alleging that the company's website is not accessible to individuals who use a screen reader.

The case was filed in the U.S. District Court for the District of Minnesota and settled in November 2024, approximately six weeks after filing. The rapid settlement suggests Petco recognized the accessibility issues and moved quickly to resolve them.

The lawsuit alleges that Petco's website prevents blind users from independently accessing product information, making purchases, and using the company's online services. As pet supply retailers increasingly rely on e-commerce, accessibility becomes critical for serving all customers.

This case highlights that specialty retail companies, including pet supply stores, must ensure their e-commerce platforms are accessible to users with disabilities.`,
    issues: [
      "Website not accessible to screen reader users",
      "Inaccessible e-commerce platform",
      "Lack of accessible product information",
      "ADA Title III violations in retail",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court for the District of Minnesota",
    category: "digital",
    officialLinks: [
      {
        title: "PacerMonitor - Frost et al. v. Petco Animal Supplies Stores",
        url: "https://www.pacermonitor.com/public/case/55101482/Frost_et_al_v_Petco_Animal_Supplies_Stores,_Inc",
      },
    ],
    unofficialLinks: [
      {
        title: "Top Class Actions - Petco Class Action",
        url: "https://topclassactions.com/lawsuit-settlements/consumer-products/pet/petco-class-action-alleges-website-not-fully-accessible-to-those-with-vision-related-disabilities/",
      },
    ],
    keyTakeaways: [
      "Specialty retail websites must be accessible",
      "Pet supply and animal care companies face accessibility litigation",
      "E-commerce platforms require screen reader compatibility",
      "Rapid settlements suggest companies recognize accessibility obligations",
      "Multiple plaintiffs can strengthen class action claims",
    ],
    impact:
      "This case demonstrates that specialty retail companies must ensure their e-commerce platforms are accessible. The quick settlement suggests companies are increasingly recognizing the importance of digital accessibility compliance.",
  },

  // 2024 HEALTHCARE CASES
  {
    slug: "us-v-medstar-health-2024",
    title: "United States v. MedStar Health Inc. - Support Person Visitor Restrictions",
    defendant: "MedStar Health, Inc.",
    plaintiff: "United States of America",
    dateFiled: "2024-01-30",
    dateResolved: "2024-02-05",
    status: "settled",
    summary:
      "DOJ lawsuit alleging MedStar Health failed to modify visitor restrictions so that people with certain disabilities could be accompanied by their support persons during medical care.",
    details: `The United States Department of Justice filed a lawsuit against MedStar Health, Inc., alleging that the healthcare system failed to modify visitor restrictions so that people with certain disabilities, which affected their ability to independently access medical care, could be accompanied by their support persons (such as a family member, companion, or aide).

The complaint alleged that MedStar's visitor restrictions, implemented during public health emergencies or other circumstances, did not include exceptions for individuals with disabilities who require support persons to access medical care. This violated the ADA's requirement that healthcare providers make reasonable modifications to policies, practices, and procedures when necessary to ensure equal access for individuals with disabilities.

The case settled very quickly, just six days after filing, suggesting MedStar recognized the issue and moved promptly to resolve it. The settlement likely required MedStar to:
- Modify visitor restriction policies to include exceptions for support persons
- Train staff on ADA requirements for reasonable modifications
- Ensure individuals with disabilities can access medical care with necessary support
- Develop policies that balance public health concerns with disability access rights

This case highlights the critical importance of ensuring that public health policies and visitor restrictions do not discriminate against individuals with disabilities who require support to access healthcare services.`,
    issues: [
      "Failure to modify visitor restrictions for individuals with disabilities",
      "Denial of support person access during medical care",
      "ADA Title III violations in healthcare",
      "Discrimination against individuals requiring assistance",
    ],
    jurisdiction: "U.S. District Court (federal)",
    category: "healthcare",
    officialLinks: [
      {
        title: "PacerMonitor - United States v. MedStar Health",
        url: "https://www.pacermonitor.com/public/case/52158661/United_States_of_America_v_MedStar_Health%2C_Inc?utm_source=chatgpt.com",
      },
    ],
    unofficialLinks: [
      {
        title: "DOJ - United States v. MedStar Health",
        url: "https://www.justice.gov/crt/case/us-v-medstar-health-inc?utm_source=chatgpt.com",
      },
    ],
    keyTakeaways: [
      "Healthcare providers must modify visitor restrictions for individuals with disabilities",
      "Support persons are essential for some individuals to access medical care",
      "Public health policies must balance safety with disability access rights",
      "Healthcare systems must train staff on ADA reasonable modification requirements",
      "DOJ actively enforces ADA requirements in healthcare settings",
    ],
    impact:
      "This case establishes that healthcare providers must ensure their visitor restriction policies accommodate individuals with disabilities who require support persons. The extremely quick settlement demonstrates the importance of this issue and the need for healthcare systems to proactively address accessibility in their policies.",
  },

  // 2024 PHYSICAL ACCESSIBILITY CASES
  {
    slug: "us-v-katzs-deli-2024",
    title: "United States v. Katz's Delicatessen - Physical Accessibility Violations",
    defendant: "Katz's Delicatessen of Houston St., Inc.",
    plaintiff: "United States of America",
    dateFiled: "2024-12-17",
    dateResolved: "2024-12-27",
    status: "settled",
    summary:
      "DOJ lawsuit against iconic New York deli for multiple ADA violations including inaccessible main entrance, insufficient dining surfaces, and non-compliant restrooms despite 2018 renovations.",
    details: `The U.S. Attorney's Office for the Southern District of New York filed a lawsuit against Katz's Delicatessen of Houston St., Inc., located on the Lower East Side of Manhattan, for numerous violations of the Americans with Disabilities Act.

The complaint identified multiple significant violations:
- The main entrance of Katz's Delicatessen is not accessible to individuals using wheelchairs or other mobility devices
- The restaurant does not provide sufficient dining surfaces accessible to persons with disabilities
- Despite having been renovated in 2018, the restaurant's restrooms fail to comply with ADA accessibility standards

The case settled very quickly, just ten days after filing, suggesting Katz's recognized the violations and moved promptly to address them. The settlement likely required Katz's to:
- Make the main entrance accessible
- Provide accessible dining surfaces
- Bring restrooms into ADA compliance
- Compensate affected individuals
- Submit to monitoring by the DOJ

This case is particularly notable because the restaurant underwent renovations in 2018 but failed to bring the facility into ADA compliance at that time. This highlights the importance of ensuring that renovations include accessibility improvements, as required by the ADA.`,
    issues: [
      "Inaccessible main entrance",
      "Insufficient accessible dining surfaces",
      "Non-compliant restrooms",
      "ADA Title III violations in restaurants",
      "Failure to include accessibility in renovations",
    ],
    jurisdiction: "U.S. District Court for the Southern District of New York",
    category: "physical",
    officialLinks: [
      {
        title: "PacerMonitor - United States v. Katz's Delicatessen",
        url: "https://www.pacermonitor.com/public/case/56213974/United_States_of_America_v_Katzs_Delicatessen_of_Houston_St,_Inc",
      },
    ],
    unofficialLinks: [
      {
        title: "DOJ Press Release - Katz's Deli Settlement",
        url: "https://www.justice.gov/usao-sdny/pr/us-attorneys-office-sues-and-settles-katzs-deli-ensure-americans-disabilities-act",
      },
    ],
    keyTakeaways: [
      "Iconic restaurants are not exempt from ADA requirements",
      "Renovations must include accessibility improvements",
      "Main entrances must be accessible to individuals with mobility disabilities",
      "Restaurants must provide accessible dining surfaces",
      "DOJ actively enforces ADA requirements for physical accessibility",
      "Even recently renovated facilities can violate ADA standards",
    ],
    impact:
      "This case demonstrates that even well-known, historic establishments must comply with ADA accessibility requirements. The fact that violations existed despite 2018 renovations highlights the importance of including accessibility in all renovation projects.",
  },

  // 2024-2025 INTERNATIONAL CASES
  {
    slug: "raturi-v-union-of-india-2005",
    title: "Rajive Raturi v. Union of India - Public Space and Transportation Accessibility",
    defendant: "Union of India & Ors.",
    plaintiff: "Rajive Raturi",
    dateFiled: "2005-01-01",
    dateResolved: "2024-11-08",
    status: "settled",
    summary:
      "Landmark Indian Supreme Court case filed by a visually-challenged human rights advocate seeking directions to make public spaces, transport and related infrastructure accessible to persons with disabilities (PWDs).",
    details: `Mr. Rajive Raturi, a visually-challenged human rights advocate, filed Writ Petition (Civil) No. 243 of 2005 in the Supreme Court of India, seeking directions to make public spaces, transport, and related infrastructure accessible to persons with disabilities (PWDs).

This landmark case spanned nearly 20 years, from 2005 to 2024, making it one of the longest-running accessibility cases in India. The petitioner sought comprehensive accessibility improvements across India's public infrastructure, including:
- Public transportation systems (buses, trains, metro)
- Public buildings and spaces
- Streets and sidewalks
- Government facilities
- Related infrastructure

The case was finally resolved in November 2024, with the Supreme Court issuing directions to ensure accessibility across public infrastructure. This case represents a significant milestone in India's disability rights movement and has influenced accessibility policy and implementation across the country.

The lengthy duration of the case reflects both the complexity of implementing accessibility across India's vast infrastructure and the persistence required to achieve systemic change.`,
    issues: [
      "Inaccessible public transportation",
      "Inaccessible public buildings and spaces",
      "Lack of accessible infrastructure",
      "Violation of rights of persons with disabilities",
      "Failure to implement accessibility standards",
    ],
    jurisdiction: "Supreme Court of India",
    category: "international",
    officialLinks: [
      {
        title: "Supreme Court of India Judgment",
        url: "https://api.sci.gov.in/supremecourt/2005/9321/9321_2005_1_1503_56986_Judgement_08-Nov-2024.pdf",
      },
    ],
    keyTakeaways: [
      "Accessibility litigation can span decades to achieve systemic change",
      "Public infrastructure must be accessible to persons with disabilities",
      "Transportation systems are critical for disability access",
      "Supreme Court cases can drive nationwide accessibility improvements",
      "Persistent advocacy is necessary for comprehensive accessibility",
      "India's disability rights movement has achieved significant legal victories",
    ],
    impact:
      "This landmark case has had a profound impact on accessibility in India, influencing policy and implementation across the country's vast public infrastructure. The nearly 20-year duration demonstrates both the complexity of achieving systemic accessibility and the importance of persistent advocacy.",
  },

  {
    slug: "pragya-prasun-v-union-of-india-2024",
    title: "Pragya Prasun & Ors v. Union of India - Digital KYC Accessibility",
    defendant: "Union of India & Ors.",
    plaintiff: "Pragya Prasun & Ors.",
    dateFiled: "2024-01-01",
    dateResolved: "2025-04-30",
    status: "settled",
    summary:
      "Indian Supreme Court case challenging digital KYC/e-KYC processes that exclude persons with disabilities, including acid attack survivors unable to blink for live photographs and blind individuals unable to complete video KYC.",
    details: `Pragya Prasun and others filed Writ Petitions in the Supreme Court of India (WP(C) No. 289 of 2024 and WP(C) No. 49 of 2025) challenging digital KYC (Know Your Customer) and e-KYC processes that exclude persons with disabilities.

The petitioners included:
- Acid attack survivors who have experienced difficulties completing digital KYC/e-KYC processes due to their inability to click a "live photograph" by blinking, which prevented them from opening bank accounts and purchasing SIM cards from telecom providers
- An individual suffering from 100% blindness who faces daily challenges in establishing account-based relationships, conducting transactions, availing services, and verifying identity due to inaccessible digital KYC processes

The petitioners argued that digital KYC/e-KYC/video KYC norms are not designed keeping in view the accessibility needs of persons with disabilities. The digital KYC process that excludes persons with disabilities violates the fundamental rights enshrined under Article 21 of the Constitution of India, which guarantees the right to life and personal liberty.

The case was resolved in April 2025, with the Supreme Court directing the government and financial institutions to make digital KYC processes accessible to persons with disabilities. This case highlights the critical importance of ensuring that digital identity verification systems are accessible to all users, including those with disabilities.

This case is particularly significant as it addresses the intersection of digital accessibility and financial inclusion, ensuring that persons with disabilities can access essential services like banking and telecommunications.`,
    issues: [
      "Digital KYC processes not accessible to persons with disabilities",
      "Live photograph requirements exclude individuals unable to blink",
      "Video KYC inaccessible to blind individuals",
      "Violation of fundamental rights under Article 21",
      "Exclusion from banking and telecommunications services",
    ],
    jurisdiction: "Supreme Court of India",
    category: "international",
    officialLinks: [
      {
        title: "Supreme Court of India Judgment",
        url: "https://cdnbbsr.s3waas.gov.in/s36ee69d3769e832ec77c9584e0b7ba112/uploads/2024/11/20250501496797524.pdf",
      },
    ],
    keyTakeaways: [
      "Digital identity verification systems must be accessible to persons with disabilities",
      "Biometric requirements (like blinking) can exclude individuals with certain disabilities",
      "Financial inclusion requires accessible digital processes",
      "Constitutional rights apply to digital accessibility",
      "Alternative KYC methods must be available for persons with disabilities",
      "India's Supreme Court actively enforces accessibility in digital services",
    ],
    impact:
      "This landmark case ensures that digital KYC processes in India are accessible to persons with disabilities, enabling financial inclusion and access to essential services. The judgment has implications for digital identity verification systems worldwide, demonstrating that accessibility must be built into digital processes from the start.",
  },

  // 2025 DIGITAL ACCESSIBILITY CASES
  {
    slug: "crosby-v-hp-inc-2025",
    title: "Crosby v. HP Inc. - Website Accessibility Barriers",
    defendant: "HP Inc.",
    plaintiff: "Daniel Crosby",
    dateFiled: "2025-06-11",
    status: "ongoing",
    caseNumber: "1:25-cv-09286",
    summary:
      "Lawsuit alleging HP's website and affiliated platforms contain missing alternative text, broken ARIA references, unlabeled buttons, and inaccessible navigation menus that prevent blind users from independently engaging with its digital services.",
    details: `Daniel Crosby filed a lawsuit against HP Inc., alleging that the company's website is not accessible to blind individuals. The complaint was filed in the U.S. District Court for the Southern District of New York.

Crosby claims that HP's website and its affiliated platforms contain numerous accessibility barriers that prevent blind users from independently engaging with the company's digital services. Specific issues identified include:
- Missing alternative text for images and graphics
- Broken ARIA (Accessible Rich Internet Applications) references
- Unlabeled buttons and interactive elements
- Inaccessible navigation menus that cannot be used with screen readers
- Other barriers that prevent blind users from accessing HP's products, services, and information online

This case represents ongoing litigation against a major technology company, highlighting that even companies in the technology sector can face accessibility claims if their websites are not properly designed for users with disabilities. The case is currently in progress as of the filing date.`,
    issues: [
      "Missing alternative text",
      "Broken ARIA references",
      "Unlabeled buttons",
      "Inaccessible navigation menus",
      "Screen reader incompatibility",
      "ADA Title III violations",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court for the Southern District of New York",
    category: "digital",
    officialLinks: [
      {
        title: "PacerMonitor - Crosby v. HP Inc.",
        url: "https://www.pacermonitor.com/public/case/61025750/Crosby_v_HP_Inc",
      },
    ],
    unofficialLinks: [
      {
        title: "Top Class Actions - HP Lawsuit",
        url: "https://topclassactions.com/lawsuit-settlements/lawsuit-news/hp-sued-for-discrimination-over-inaccessible-website-for-blind-users/",
      },
    ],
    keyTakeaways: [
      "Technology companies are not exempt from website accessibility requirements",
      "ARIA implementation must be correct and functional",
      "All interactive elements must be properly labeled",
      "Navigation menus must be accessible to screen reader users",
      "Major corporations continue to face accessibility litigation",
      "Website accessibility requires comprehensive implementation, not just basic compliance",
    ],
    impact:
      "This case demonstrates that even technology companies, which might be expected to have strong digital accessibility practices, can face litigation if their websites are not properly accessible. The specific issues cited (broken ARIA, unlabeled buttons) suggest that partial or incorrect implementation of accessibility features is not sufficient.",
  },

  // 2025 PHYSICAL/HEALTHCARE CASES
  {
    slug: "provo-v-wright-county-2025",
    title: "Provo v. Wright County, Minnesota et al. - ADA Violations",
    defendant: "Wright County, Minnesota and Minnesota Department of Human Services (DHS)",
    plaintiff: "Timothy Robert Provo",
    dateFiled: "2025-10-23",
    status: "ongoing",
    caseNumber: "0:25-cv-04090",
    summary:
      "Lawsuit alleging violations of the Americans with Disabilities Act by Wright County and the Minnesota Department of Human Services.",
    details: `Timothy Robert Provo filed a lawsuit against Wright County, Minnesota and the Minnesota Department of Human Services (DHS), alleging violations of the Americans with Disabilities Act.

The case was filed in the U.S. District Court for the District of Minnesota in October 2025. The complaint alleges that the defendants violated the ADA by failing to provide reasonable accommodations and equal access to services for individuals with disabilities.

This case is currently in progress, and specific details about the allegations and requested relief are being determined through the litigation process. The case highlights ongoing enforcement of ADA requirements at the county and state agency level, ensuring that government services are accessible to individuals with disabilities.`,
    issues: [
      "ADA violations by government entities",
      "Failure to provide reasonable accommodations",
      "Lack of equal access to government services",
      "County and state agency accessibility requirements",
    ],
    jurisdiction: "U.S. District Court for the District of Minnesota",
    category: "physical",
    officialLinks: [
      {
        title: "PacerMonitor - Provo v. Wright County, Minnesota",
        url: "https://www.pacermonitor.com/public/case/60753479/Provo_v_Wright_County,_Minnesota_et_al",
      },
    ],
    unofficialLinks: [
      {
        title: "DOJ - Related Cases",
        url: "https://www.justice.gov/crt/case/united-states-v-city-anoka-minnesota-d-minn?utm_source=chatgpt.com",
      },
    ],
    keyTakeaways: [
      "County governments must comply with ADA requirements",
      "State agencies face accessibility litigation",
      "Government services must be accessible to individuals with disabilities",
      "Ongoing enforcement of ADA at local and state levels",
      "Individuals continue to advocate for accessibility rights",
    ],
    impact:
      "This case demonstrates ongoing enforcement of ADA requirements at the local government level. It highlights that county and state agencies must ensure their services and facilities are accessible to individuals with disabilities.",
  },

  // NEW 2022-2025 CASES
  {
    slug: "doj-v-uber-disability-discrimination-2025",
    title: "DOJ v. Uber - Disability Discrimination Lawsuit",
    defendant: "Uber Technologies, Inc.",
    plaintiff: "United States Department of Justice",
    dateFiled: "2025-09-11",
    status: "ongoing",
    summary:
      "DOJ lawsuit alleging Uber violated ADA by discriminating against passengers with disabilities through wait time fees and service refusals.",
    details: `The U.S. Department of Justice filed a lawsuit against Uber Technologies in September 2025, accusing the ride-hailing company of violating federal law by discriminating against people with physical disabilities.

The DOJ's civil rights division claims that Uber and its drivers "routinely refuse to serve individuals with disabilities, including individuals who travel with service animals or who use stowable wheelchairs." The lawsuit alleges that Uber drivers have charged illegal cleaning fees for service animal shedding and imposed cancellation fees after denying service.

This case follows a 2022 settlement where Uber paid millions to more than 65,000 affected users after being sued in 2021 for overcharging passengers with disabilities through wait time fees. Under that two-year agreement in July 2022, Uber committed to waive wait time fees for riders who certify they need more time to get in an Uber car because of a disability.

The DOJ is seeking $125 million in damages for affected individuals and an injunction to prevent further violations. This case highlights the ongoing challenges passengers with disabilities face when using ride-sharing platforms.`,
    issues: [
      "Service refusal to passengers with disabilities",
      "Illegal wait time fees for passengers needing extra time",
      "Discriminatory cleaning fees for service animals",
      "Cancellation fees after denying service",
      "Inadequate wheelchair accessible vehicle availability",
      "Driver training on disability accommodations",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court",
    category: "transportation",
    settlementAmount: "$125 million (sought in damages)",
    officialLinks: [
      {
        title: "DOJ Press Release",
        url: "https://www.justice.gov/opa/pr/justice-department-sues-uber-discriminating-against-passengers-disabilities",
      },
    ],
    unofficialLinks: [
      {
        title: "CBS News Coverage",
        url: "https://www.cbsnews.com/news/uber-passengers-with-disabilities-justice-department-ada-lawsuit/",
      },
      {
        title: "TechCrunch Article",
        url: "https://techcrunch.com/2025/09/11/justice-department-sues-uber-for-allegedly-discriminating-against-people-with-disabilities/",
      },
    ],
    keyTakeaways: [
      "Ride-sharing platforms must accommodate passengers with disabilities equally",
      "Wait time fees cannot discriminate against those needing extra time due to disability",
      "Service animals cannot be refused or charged cleaning fees",
      "Previous settlements don't prevent future DOJ enforcement actions",
      "Platforms responsible for driver compliance with ADA",
    ],
    impact:
      "This lawsuit represents one of the largest disability discrimination cases against a ride-sharing platform, with $125 million in potential damages. It sets a precedent that technology platforms cannot use automated systems that disadvantage people with disabilities, and that companies are responsible for ensuring their drivers comply with ADA requirements.",
  },
  {
    slug: "darnell-williams-v-rowing-blazers-2025",
    title: "Darnell Williams v. Rowing Blazers Ltd. - E-Commerce Website Accessibility",
    defendant: "Rowing Blazers Ltd.",
    plaintiff: "Darnell Williams",
    dateFiled: "2025-10-24",
    status: "ongoing",
    caseNumber: "1:25-cv-13002",
    summary:
      "Class action lawsuit alleging Rowing Blazers' e-commerce website is inaccessible to blind users, with significant barriers preventing navigation and transaction completion in violation of the Americans with Disabilities Act.",
    details: `Darnell Williams, a visually impaired individual, filed a class action lawsuit against Rowing Blazers Ltd. on October 24, 2025, in the United States District Court for the Northern District of Illinois. The case is presided over by Honorable Judge John Robert Blakey.

Williams alleges that Rowing Blazers' website (www.rowingblazers.com) is inaccessible to blind and visually impaired users, violating Title III of the Americans with Disabilities Act. He encountered significant barriers while attempting to purchase a shirt from the preppy-inspired apparel retailer, including:

- Navigation difficulties that prevented independent browsing
- Issues completing transactions and checkout processes
- Inability to access product information and descriptions
- Screen reader incompatibility with website elements

The lawsuit is filed as a proposed class action on behalf of all legally blind individuals in the United States who have attempted to access rowingblazers.com and were denied access to the enjoyment of goods and services offered on the website during the relevant statutory period.

Williams, represented by Equal Access Law Group, PLLC, has filed similar accessibility lawsuits against other companies including Alphalete Athletics, LLC and Lowa Boots, LLC.

Causes of Action:
- Violation of 42 U.S.C. §§ 12181 et seq. – Title III of the Americans with Disabilities Act
- Declaratory Relief
- Negligent Infliction of Emotional Distress`,
    issues: [
      "Website inaccessible to blind users",
      "Navigation barriers for screen reader users",
      "Transaction completion issues",
      "Product information inaccessibility",
      "Screen reader incompatibility",
      "ADA Title III violations",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court for the Northern District of Illinois",
    category: "digital",
    officialLinks: [
      {
        title: "Law360 - Case Information",
        url: "https://www.law360.com/cases/68fbc50ab443c8fb72d0b447",
      },
    ],
    unofficialLinks: [
      {
        title: "Accessibility.com - Case Summary",
        url: "https://www.accessibility.com/digital-lawsuits/darnell-williams-vs-rowing-blazers-ltd-2025-10-24",
      },
    ],
    keyTakeaways: [
      "E-commerce websites must be accessible to blind and visually impaired users",
      "Fashion and apparel retailers face increasing accessibility litigation",
      "Serial litigants continue to file accessibility lawsuits across multiple industries",
      "Class action lawsuits amplify potential damages for inaccessible websites",
      "Screen reader compatibility is essential for ADA compliance",
      "Transaction completion barriers constitute discriminatory barriers under ADA",
    ],
    impact:
      "This case highlights the ongoing wave of e-commerce accessibility lawsuits targeting retail websites. Rowing Blazers, known for its preppy-inspired apparel, joins a growing list of fashion retailers facing ADA litigation. The case underscores that all online retailers, regardless of size or niche market, must ensure their websites are accessible to users with disabilities. The proposed class action format increases potential liability and serves as a warning to e-commerce businesses that have not prioritized web accessibility.",
  },
  {
    slug: "darnell-williams-v-pete-and-pedro-2025",
    title: "Darnell Williams v. Pete and Pedro, LLC - Men's Grooming Website Accessibility",
    defendant: "Pete and Pedro, LLC",
    plaintiff: "Darnell Williams",
    dateFiled: "2025-04-25",
    status: "ongoing",
    caseNumber: "1:25-cv-04503",
    summary:
      "Lawsuit alleging Pete and Pedro's e-commerce website is inaccessible to blind users, preventing visually impaired individuals from accessing the men's grooming brand's products and services in violation of the Americans with Disabilities Act.",
    details: `Darnell Williams, a visually impaired individual, filed a lawsuit against Pete and Pedro, LLC on April 25, 2025, in the U.S. District Court for the Northern District of Illinois. The case is presided over by Honorable Judge Martha M. Pacold.

Williams alleges that Pete and Pedro's website (www.peteandpedro.com) is not sufficiently digitally accessible to blind and visually impaired users, violating Title III of the Americans with Disabilities Act. Pete & Pedro is a leading men's grooming brand offering professional-quality products and expert advice for hair care and grooming.

The complaint alleges that the website contains accessibility barriers that prevent blind users from independently accessing the company's products, services, and information. These barriers likely include issues with screen reader compatibility, navigation difficulties, and problems accessing product information and completing transactions.

Williams, represented by Equal Access Law Group, PLLC, has filed similar accessibility lawsuits against other companies including Rowing Blazers Ltd., Alphalete Athletics, LLC, and Lowa Boots, LLC, demonstrating a pattern of legal actions to enforce digital accessibility compliance.

Causes of Action:
- Violation of 42 U.S.C. §§ 12181 et seq. – Title III of the Americans with Disabilities Act
- Declaratory Relief
- Negligent Infliction of Emotional Distress`,
    issues: [
      "Website inaccessible to blind users",
      "Digital accessibility barriers",
      "Screen reader incompatibility",
      "Navigation difficulties",
      "Product information inaccessibility",
      "Transaction completion barriers",
      "ADA Title III violations",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court for the Northern District of Illinois",
    category: "digital",
    officialLinks: [
      {
        title: "Law360 - Case Information",
        url: "https://www.law360.com/cases/680baa3abc3381c449b9e969",
      },
    ],
    unofficialLinks: [
      {
        title: "Accessibility.com - Case Summary",
        url: "https://www.accessibility.com/digital-lawsuits/darnell-williams-vs-pete-and-pedro-llc-2025-04-25",
      },
    ],
    keyTakeaways: [
      "E-commerce websites in the personal care and grooming industry must be accessible",
      "Men's grooming and household product retailers face increasing accessibility litigation",
      "Serial litigants continue to file accessibility lawsuits across diverse industries",
      "Screen reader compatibility is essential for ADA compliance in e-commerce",
      "Product information and transaction completion must be accessible to all users",
      "Smaller niche brands are not exempt from accessibility requirements",
    ],
    impact:
      "This case demonstrates that accessibility litigation extends beyond traditional retail sectors to include personal care and grooming brands. Pete and Pedro, as a specialized men's grooming brand, highlights that companies in the household and personal products industry must ensure their digital presence is accessible. The case reinforces that all e-commerce businesses, regardless of their market niche or product category, face potential legal exposure if their websites are not accessible to users with disabilities.",
  },
  {
    slug: "malone-v-disney-das-policy-2024",
    title: "Malone v. Disney - Disability Access Service Class Action",
    defendant: "Walt Disney Parks and Resorts U.S., Inc.",
    plaintiff: "Trisha Malone and others",
    dateFiled: "2024-06-20",
    status: "ongoing",
    summary:
      "Class action lawsuit alleging Disney's revised Disability Access Service policies discriminate against individuals with physical disabilities.",
    details: `A class action lawsuit was filed against Walt Disney Parks and Resorts in 2024 alleging that Disney's Disability Access Service (DAS) policies and practices systematically discriminate against individuals with physical disabilities and violate their rights to equal access, privacy, and dignity.

The plaintiff, Trisha Malone, claims that Disney's DAS policies violate the Americans with Disabilities Act (ADA) and the Unruh Civil Rights Act by imposing discriminatory eligibility criteria and requiring unnecessary public disclosure of sensitive medical information.

The revised policy, introduced on June 18, 2024, limited DAS accommodations to guests with developmental disabilities, such as autism, while excluding individuals with physical disabilities. Previously, DAS was available to a broader range of disabled guests, including those with mobility impairments, chronic pain conditions, and other physical disabilities that made prolonged waiting in line difficult.

Disney recommended "location return time accommodations" which were designed for guests using wheelchairs or mobility scooters as alternatives for those no longer qualifying for DAS passes. However, plaintiffs argue these alternatives do not provide equal access.

The lawsuit is ongoing, with plaintiffs seeking damages and policy revisions to ensure compliance with disability laws. Disney's terms of service include forced arbitration clauses which may complicate class action proceedings.`,
    issues: [
      "Discriminatory DAS eligibility criteria",
      "Exclusion of guests with physical disabilities",
      "Inadequate alternative accommodations",
      "Privacy violations through medical information disclosure",
      "Unequal access to theme park attractions",
      "Disparate treatment based on disability type",
    ],
    jurisdiction: "California State Court",
    category: "physical",
    officialLinks: [
      {
        title: "Disney DAS Program Information",
        url: "https://disneyland.disney.go.com/guest-services/disability-access-service/",
      },
    ],
    unofficialLinks: [
      {
        title: "Disability Scoop Coverage",
        url: "https://www.disabilityscoop.com/2024/05/20/disney-implements-overhaul-of-disability-access-at-parks/30887/",
      },
      {
        title: "FindLaw Analysis",
        url: "https://www.findlaw.com/legalblogs/law-and-life/disney-faces-lawsuit-for-altering-disability-accommodations/",
      },
    ],
    keyTakeaways: [
      "Theme parks cannot limit accessibility accommodations to specific disability types",
      "Alternative accommodations must provide equal access, not just any access",
      "Medical information disclosure requirements must be justified and minimal",
      "Policy changes affecting disability access require careful ADA compliance review",
      "Forced arbitration clauses may limit class action accessibility lawsuits",
    ],
    impact:
      "This case could significantly impact how theme parks and entertainment venues structure their disability accommodation programs. It raises important questions about whether businesses can limit accommodations based on disability type and whether alternative accommodations satisfy ADA requirements for equal access.",
  },
  {
    slug: "target-website-accessibility-2023",
    title: "Website Accessibility Class Action v. Target Corporation",
    defendant: "Target Corporation",
    plaintiff: "Blind and visually impaired consumers",
    dateFiled: "2023-01-01",
    caseNumber: "0:23-cv-03080",
    status: "ongoing",
    summary:
      "Class action lawsuit claiming Target's website is not accessible to consumers who are blind or have low vision.",
    details: `Target Corporation is facing a class action lawsuit filed in the U.S. District Court for the District of Minnesota, claiming its website is not accessible to consumers who are blind or have low vision.

The lawsuit alleges that Target.com violates the Americans with Disabilities Act by failing to be compatible with screen reading software and other assistive technologies used by blind and visually impaired individuals. Plaintiffs claim they encounter numerous barriers when attempting to browse products, make purchases, and access services on Target's website.

This is one of many web accessibility lawsuits filed against major retailers in 2023, reflecting the continued trend of litigation targeting e-commerce platforms. The case highlights that even major corporations with significant resources continue to face accessibility compliance challenges.

Target was previously involved in a landmark accessibility case in 2008 (National Federation of the Blind v. Target Corp.) which resulted in a settlement requiring accessibility improvements. The current lawsuit suggests ongoing compliance issues despite past litigation.`,
    issues: [
      "Website incompatible with screen readers",
      "Inaccessible navigation and menus",
      "Images lacking alternative text",
      "Form fields not properly labeled",
      "Checkout process not accessible",
      "Lack of keyboard navigation support",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court for the District of Minnesota",
    category: "digital",
    unofficialLinks: [
      {
        title: "Top Class Actions Coverage",
        url: "https://topclassactions.com/disability-class-action-lawsuit/target-class-action-claims-website-not-equally-accessible-to-blind-low-vision-customers/",
      },
      {
        title: "Pinsent Masons Analysis",
        url: "https://www.pinsentmasons.com/out-law/news/target-sued-over-web-accessibility",
      },
    ],
    relatedLinks: [
      {
        title: "W3C - Target Case Study (2008)",
        url: "https://www.w3.org/WAI/business-case/archive/target-case-study",
      },
    ],
    keyTakeaways: [
      "Major retailers remain vulnerable to accessibility lawsuits despite past settlements",
      "E-commerce platforms must maintain ongoing WCAG compliance",
      "Previous accessibility litigation doesn't prevent future lawsuits",
      "Screen reader compatibility is essential for e-commerce accessibility",
      "Regular accessibility audits are necessary to maintain compliance",
    ],
    impact:
      "This case demonstrates that web accessibility compliance is an ongoing responsibility, not a one-time fix. Even companies that have previously settled accessibility lawsuits can face new litigation if they fail to maintain accessible websites. It reinforces the importance of building accessibility into development processes and conducting regular audits.",
  },
  {
    slug: "morgan-stanley-website-accessibility-2022",
    title: "Website Accessibility Class Action v. Morgan Stanley",
    defendant: "Morgan Stanley",
    plaintiff: "Blind and visually impaired individuals",
    dateFiled: "2022-06-01",
    status: "settled",
    summary:
      "Class action alleging Morgan Stanley's website was not accessible to blind and visually impaired users.",
    details: `Morgan Stanley faced a class action lawsuit in 2022 alleging the company failed to design, construct and maintain its website so that it was fully accessible for individuals who are blind or visually impaired.

The lawsuit claimed that Morgan Stanley's website violated the Americans with Disabilities Act by not being compatible with screen reading software and other assistive technologies. Plaintiffs alleged they encountered barriers when attempting to access financial services, account information, and other resources on the Morgan Stanley website.

This case was part of a wave of accessibility lawsuits against financial services companies in 2022, reflecting increased scrutiny of banking and investment websites. Financial institutions have faced particular attention because accessible banking services are essential for individuals with disabilities to manage their finances independently.

The case was settled with terms that typically include website remediation to WCAG 2.0 or 2.1 standards and monetary compensation to affected class members. Specific settlement terms were not publicly disclosed.`,
    issues: [
      "Website incompatible with screen readers",
      "Inaccessible account management features",
      "Financial tools not accessible to blind users",
      "Lack of alternative text for images and graphs",
      "Forms and input fields improperly labeled",
      "Complex navigation not keyboard accessible",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court",
    category: "digital",
    unofficialLinks: [
      {
        title: "Top Class Actions Article",
        url: "https://topclassactions.com/lawsuit-settlements/lawsuit-news/morgan-stanley-ally-financial-class-actions-claim-websites-not-accessible-to-blind-visually-impaired/",
      },
    ],
    keyTakeaways: [
      "Financial services websites must be accessible to ensure equal access to banking",
      "Investment platforms need to make complex financial tools accessible",
      "Screen reader compatibility is critical for financial services websites",
      "WCAG 2.0/2.1 Level AA is the expected standard for financial institution websites",
      "Financial services industry faces significant accessibility litigation risk",
    ],
    impact:
      "This lawsuit reinforces that financial institutions cannot exclude individuals with disabilities from accessing online banking and investment services. It demonstrates that the financial services industry must prioritize accessibility to avoid litigation and ensure compliance with the ADA.",
  },
  {
    slug: "ally-financial-website-accessibility-2022",
    title: "Website Accessibility Class Action v. Ally Financial",
    defendant: "Ally Financial Inc.",
    plaintiff: "Blind and visually impaired individuals",
    dateFiled: "2022-06-01",
    status: "settled",
    summary:
      "Class action lawsuit alleging Ally Financial's website was not accessible to individuals who are blind or visually impaired.",
    details: `Ally Financial Inc. faced a class action lawsuit in 2022 alleging the company failed to design and maintain its website to be fully accessible for individuals who are blind or visually impaired.

The lawsuit claimed that Ally Financial's website violated the Americans with Disabilities Act by creating barriers for screen reader users and others who rely on assistive technologies. Plaintiffs alleged they could not independently access online banking services, loan applications, and other financial products offered through the website.

As one of the largest online-only banks in the United States, Ally Financial's accessibility is particularly important since customers rely entirely on digital channels to access banking services. The lawsuit highlighted that inaccessible digital banking platforms effectively deny service to blind and visually impaired customers.

The case was settled with terms that typically include commitments to remediate the website to meet WCAG accessibility standards. Specific settlement details were not publicly disclosed, but such settlements generally include monetary compensation to class members and ongoing accessibility compliance monitoring.`,
    issues: [
      "Banking website incompatible with assistive technologies",
      "Online loan applications not accessible",
      "Account management features inaccessible to blind users",
      "Lack of proper heading structure and landmarks",
      "Images and graphics without alternative text",
      "Forms with improper labeling and error handling",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court",
    category: "digital",
    unofficialLinks: [
      {
        title: "Top Class Actions Article",
        url: "https://topclassactions.com/lawsuit-settlements/lawsuit-news/morgan-stanley-ally-financial-class-actions-claim-websites-not-accessible-to-blind-visually-impaired/",
      },
    ],
    keyTakeaways: [
      "Online-only banks have heightened accessibility obligations",
      "Digital-first financial services must be accessible from inception",
      "Banking accessibility affects financial independence for people with disabilities",
      "WCAG compliance is essential for online banking platforms",
      "Financial services companies face significant litigation exposure for inaccessible websites",
    ],
    impact:
      "This case emphasizes that online-only financial institutions cannot rely on physical branch alternatives to excuse inaccessible digital platforms. For banks that operate primarily or exclusively online, website accessibility is not optional it's a fundamental requirement to ensure equal access to financial services.",
  },
  {
    slug: "gil-v-winn-dixie-2017-2021",
    title: "Gil v. Winn-Dixie Stores - Website Accessibility Trial",
    defendant: "Winn-Dixie Stores, Inc.",
    plaintiff: "Juan Carlos Gil",
    dateFiled: "2016-01-01",
    dateResolved: "2021-04-07",
    status: "dismissed",
    summary:
      "Landmark trial verdict requiring website accessibility, later reversed by Eleventh Circuit holding websites alone are not public accommodations under ADA.",
    details: `Gil v. Winn-Dixie Stores is believed to be the first Americans with Disabilities Act (ADA) accessibility lawsuit to go to trial in Florida, where Juan Carlos Gil, a blind plaintiff, initially prevailed in his claim that Winn-Dixie's website was inaccessible to the visually impaired.

Juan Carlos Gil heard ads for the Winn-Dixie website where he could access prescription refills and coupons online, but when he tried using the website with his screen reader, he found that 90% of the tabs on the site didn't work. Gil filed suit alleging that Winn-Dixie's website was incompatible with screen reading software that assists the visually impaired, in violation of Title III of the ADA.

Initial District Court Ruling (2017):
The district court rejected the theory that a website can never be a public accommodation as defined by the ADA. The court ordered Winn-Dixie to adopt and implement a Web Accessibility Policy conforming with WCAG 2.0 criteria, require third-party vendors to conform to WCAG 2.0, and conduct mandatory yearly web accessibility training.

Eleventh Circuit Reversal (2021):
After years of appeals, the Eleventh Circuit issued its ruling on April 7, 2021, holding that websites alone are not covered as places of public accommodation under Title III of the ADA. The circuit court vacated the 2017 trial court ruling and concluded that websites are not a public accommodation and that Winn-Dixie's website did not create an "intangible barrier" to its physical store services.

The reversal created a circuit split, with the Eleventh Circuit taking a narrower view of ADA Title III coverage for websites compared to other circuits. Despite the reversal, many businesses continue to face website accessibility litigation in other jurisdictions.`,
    issues: [
      "Website incompatibility with screen readers",
      "90% of website tabs non-functional with assistive technology",
      "Prescription refill services inaccessible to blind users",
      "Digital coupons unavailable to screen reader users",
      "WCAG 2.0 compliance requirements",
      "Definition of 'public accommodation' under ADA Title III",
    ],
    wcagLevel: "AA",
    jurisdiction: "U.S. District Court, Southern District of Florida / Eleventh Circuit Court of Appeals",
    category: "digital",
    officialLinks: [
      {
        title: "Eleventh Circuit Opinion",
        url: "https://www.ca11.uscourts.gov/opinions/ops/201713467.pdf",
      },
    ],
    unofficialLinks: [
      {
        title: "Law Office of Lainey Feingold Analysis",
        url: "https://www.lflegal.com/2017/06/winn-dixie/",
      },
      {
        title: "National Law Review - Eleventh Circuit Analysis",
        url: "https://natlawreview.com/article/eleventh-circuit-finally-breaks-its-silence-website-accessibility-was-its-decision",
      },
      {
        title: "Medium Article on Case Impact",
        url: "https://medium.com/accessibility-made-accessible/a-lawsuit-that-should-change-the-way-we-approach-web-accessibility-47c62894b3a0",
      },
    ],
    keyTakeaways: [
      "First major ADA website accessibility case to go to trial",
      "Eleventh Circuit created circuit split on website coverage under ADA Title III",
      "Websites alone may not be covered by ADA in Eleventh Circuit jurisdiction",
      "Other circuits continue to find websites are covered by ADA",
      "Despite reversal, WCAG 2.0 remains industry standard for accessibility",
      "Trial court's initial ruling influenced many subsequent settlements",
    ],
    impact:
      "Gil v. Winn-Dixie remains one of the most significant and controversial website accessibility cases. While the initial trial verdict inspired many businesses to improve accessibility, the Eleventh Circuit's reversal created legal uncertainty. The case demonstrates the ongoing debate about whether standalone websites constitute places of public accommodation under the ADA. Despite the reversal, most businesses outside the Eleventh Circuit continue to face significant litigation risk for inaccessible websites, and WCAG compliance remains the industry standard.",
  },
]

export interface LawsuitCategory {
  name: string
  description: string
  count: number
}

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
