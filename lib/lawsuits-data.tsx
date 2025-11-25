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
    defendant: "Verizon Wireless",
    plaintiff: "Derek Pollitt (legally blind)",
    dateFiled: "2024-09-04",
    status: "ongoing",
    summary:
      "Ongoing class action lawsuit against Verizon Wireless for website accessibility barriers affecting blind users, citing WCAG 2.2 as technical standard.",
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
    jurisdiction: "Federal court (New York)",
    category: "digital",
    keyTakeaways: [
      "Major telecommunications companies face accessibility scrutiny",
      "WCAG 2.2 is emerging as the new standard in litigation",
      "Customer account access is a critical accessibility requirement",
      "Screen reader compatibility is essential for financial services websites",
      "Large enterprises remain targets despite resources to implement accessibility",
    ],
    impact:
      "This lawsuit signals that WCAG 2.2 is becoming the expected standard even though 2.1 AA is the most common regulatory requirement. If successful, it could establish new precedent for telecommunications and financial services accessibility.",
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

  // STATISTICS & TRENDS ENTRY
  {
    slug: "accessibility-litigation-trends-2024-2025",
    title: "Accessibility Litigation Trends 2024-2025: Statistics and Analysis",
    defendant: "N/A - Trend Analysis",
    plaintiff: "N/A - Trend Analysis",
    dateFiled: "2024-01-01",
    dateResolved: "2025-12-31",
    status: "ongoing",
    summary:
      "Overview of accessibility litigation trends showing continued growth with major shifts in enforcement mechanisms, jurisdiction concentration, and international expansion.",
    details: `Accessibility litigation has experienced dramatic growth and evolution from 2023-2025, with significant implications for organizations.

Federal ADA Title III Litigation Trends:
- 2023: 8,227 federal ADA Title III lawsuits filed
- 2024: 8,800 filed (+7% year-over-year)
- 2025 (projected): ~9,100 expected

Digital/Web Accessibility Lawsuits:
- 2023: 2,749 website-specific federal lawsuits
- 2024: 2,452 (-13% from 2023)
- 2025 (first half): Projected 37% year-over-year increase rebound

Geographic Concentration:
- New York: 63.7% of federal web accessibility filings
- Illinois: 746% increase in cases (emerging new hotspot)
- Minnesota: 745%+ increase in 2025

Industries Most Targeted (2024):
- Lifestyle, Fashion, Clothing & Apparel: 35.16% (1,121 cases)
- Restaurant, Food, Drinks & Beverages: 23.78% (758 cases)
- Beauty, Skin & Body Care: 7.8% (250 cases)
- Medical & Health: 5.0% (159 cases)
- E-commerce overall: ~77% of all digital accessibility suits

Technical Violations Cited:
- Missing alt text: Most frequently cited issue
- Screen reader incompatibility: Second most common
- Keyboard navigation barriers: Third
- Missing form labels: Fourth
- Empty/redundant links: Fifth
- Missing video captions
- Color contrast issues
- Inaccessible menus/dropdowns

Notable Finding:
- 25%+ of 2024 lawsuits (1,023 cases) cited accessibility overlay widgets as barriers
- This represents shift from viewing overlays as solutions to barriers

Most Prolific Plaintiff Law Firms (2024):
- So Cal Equal Access Group: 2,598 cases
- Stein Saks, PLLC: 395 cases
- Sconzo Law: 193 cases
- Gottlieb Associates: 190 cases

Key Serial Plaintiffs:
- Orlando Garcia: ~1,000 lawsuits since 2014
- Scott Johnson: 24 cases since April 2023 sentencing
- Brian Whitaker: 772 cases through Potter Handy firm
- Robert Glen Myers: 75+ businesses since August 2024

Emerging Trend - AI-Assisted Filings:
- 40% increase in pro se (self-represented) ADA filings in 2025
- AI tools enabling increased filing volume
- Issues include citation of non-existent cases and incorrect holdings

Repeat Offender Rate:
- 41% of businesses targeted by ADA litigation in 2024 were previous defendants
- Indicates superficial remediation invites renewed litigation
- Suggests need for comprehensive vs. temporary fixes`,
    issues: [
      "Missing alt text",
      "Screen reader incompatibility",
      "Keyboard navigation barriers",
      "Missing form labels",
      "Overlay widget dependencies",
    ],
    jurisdiction: "United States (Federal and State)",
    category: "digital",
    keyTakeaways: [
      "ADA litigation continues growing despite volatility in specific sectors",
      "Litigation concentration in NY and expansion to IL/MN creates regional hotspots",
      "E-commerce remains most vulnerable sector to accessibility litigation",
      "Overlay widgets increasingly viewed as barriers rather than solutions",
      "41% repeat defendant rate indicates need for comprehensive remediation",
      "AI-assisted pro se filings may increase filing volume further",
      "WCAG compliance is critical to reducing litigation exposure",
    ],
    impact:
      "The data demonstrates that accessibility litigation remains a significant business risk. Organizations in targeted industries face continued exposure, and the emergence of new hotspots suggests geographic expansion of enforcement focus.",
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

export function getLawsuitsByCategory(category: string): Lawsuit[] {
  return lawsuits.filter((lawsuit) => lawsuit.category === category)
}
