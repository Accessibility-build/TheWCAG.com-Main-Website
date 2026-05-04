/**
 * Static index of US state-level accessibility laws layered on top of the ADA.
 * The ADA is the federal floor; these state statutes are the ones that
 * actually drive most digital-accessibility litigation.
 */

export interface StateLawSection {
  heading: string
  body: string
}

export interface StateAccessibilityLaw {
  slug: string
  state: string
  shortName: string
  /** Primary statute(s) by name. */
  statute: string
  /** Two-line subtitle for the page header. */
  summary: string
  /** Plain-English description of how the law actually bites. */
  whyItMatters: string
  /** Whether the statute permits monetary damages on top of injunctive relief. */
  damagesAvailable: boolean
  damagesNote: string
  technicalStandard: string
  sections: StateLawSection[]
  resources: Array<{ label: string; url: string }>
}

export const STATE_LAWS: StateAccessibilityLaw[] = [
  {
    slug: "california",
    state: "California",
    shortName: "California",
    statute: "Unruh Civil Rights Act (Cal. Civ. Code § 51) + California Disabled Persons Act",
    summary:
      "The most plaintiff-friendly state regime in the United States. Statutory damages of $4,000 per visit make California the dominant venue for digital accessibility lawsuits.",
    whyItMatters:
      "Any ADA Title III violation is automatically a violation of the Unruh Act. That sounds technical but the consequence is huge: a plaintiff who wins on an ADA claim is entitled to a minimum of $4,000 in statutory damages per offense, plus attorneys' fees — without proving any actual harm. Most plaintiffs allege multiple visits, which multiplies the recovery.",
    damagesAvailable: true,
    damagesNote: "Minimum statutory damages of $4,000 per offense (per visit) plus attorneys' fees and injunctive relief.",
    technicalStandard: "Unruh adopts the ADA standard. WCAG 2.1 AA is the de facto benchmark courts apply.",
    sections: [
      {
        heading: "Who can sue",
        body:
          "Any person — including 'tester' plaintiffs who visit a website with the express purpose of evaluating accessibility. California courts have repeatedly upheld tester standing, in contrast to several federal circuits.",
      },
      {
        heading: "Where claims are filed",
        body:
          "Both state court (Superior Court) and federal court (Central, Eastern, Northern, and Southern Districts of California). Filings have been split roughly 60/40 federal-to-state in recent years.",
      },
      {
        heading: "Verification & high-frequency-litigant rules",
        body:
          "California Code of Civil Procedure §§ 425.50–425.55 require plaintiffs filing more than 10 construction-related accessibility cases per year to file a verified complaint and pay a $1,000 fee per case. Designed to deter abusive serial litigation.",
      },
      {
        heading: "Common defenses",
        body:
          "Standing challenges (geographic proximity, intent to return), bona-fide-remediation arguments, and arbitration clauses where applicable. Standing is harder for defendants to win in California state court than in federal court.",
      },
    ],
    resources: [
      { label: "Cal. Civ. Code § 51 (Unruh Act)", url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=51" },
      { label: "Cal. Civ. Code §§ 54–55.32 (CDPA)", url: "https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=1.&title=&part=2.5.&chapter=&article=" },
    ],
  },
  {
    slug: "new-york",
    state: "New York",
    shortName: "New York",
    statute: "NY State Human Rights Law (Exec. Law § 296) + NYC Human Rights Law",
    summary:
      "The other major hotbed for digital-accessibility litigation. Federal courts in the Southern and Eastern Districts of New York lead the country in case filings.",
    whyItMatters:
      "The state Human Rights Law and especially the NYC Human Rights Law impose obligations that meet or exceed the ADA. NYCHRL is interpreted independently and 'liberally and broadly' in favor of plaintiffs, which makes early-stage dismissals harder for defendants. Many web-accessibility complaints couple ADA claims with NYSHRL and NYCHRL claims to capture both injunctive relief and damages.",
    damagesAvailable: true,
    damagesNote:
      "Compensatory damages and attorneys' fees under NYSHRL/NYCHRL. Punitive damages possible under NYCHRL. No automatic per-violation statutory damages like California's Unruh Act.",
    technicalStandard:
      "Same de facto WCAG 2.1 AA benchmark used in federal cases; settlements increasingly reference WCAG 2.2.",
    sections: [
      {
        heading: "Who can sue",
        body:
          "Any individual who alleges a discriminatory experience — including tester plaintiffs, though SDNY and EDNY have tightened standing scrutiny in 2024–2025 (e.g., Erkan v. Hidalgo). State courts apply NYCHRL more permissively.",
      },
      {
        heading: "Where claims are filed",
        body:
          "SDNY led federal courts nationally with over 1,000 website-accessibility filings in 2025. EDNY a close second. NYC Civil Court hears parallel city/state-law claims.",
      },
      {
        heading: "Common defenses",
        body:
          "Standing challenges (intent to return, geographic proximity), mootness via voluntary remediation, arbitration. The trend in 2024–2026 EDNY decisions is toward stricter standing review than NYCHRL state-court cases.",
      },
      {
        heading: "Notable case",
        body:
          "Andrews v. Blick Art Materials (EDNY 2017) was an early ruling that an inaccessible website can violate Title III where the website has a sufficient nexus to a physical store. Cited in countless follow-on complaints.",
      },
    ],
    resources: [
      { label: "NY State Human Rights Law (§ 296)", url: "https://www.nysenate.gov/legislation/laws/EXC/296" },
      { label: "NYC Human Rights Law", url: "https://www.nyc.gov/site/cchr/law/the-law.page" },
    ],
  },
  {
    slug: "colorado",
    state: "Colorado",
    shortName: "Colorado",
    statute: "Colorado HB 21-1110 (Cross-Government Standards for Accessible Tech)",
    summary:
      "First U.S. state to enact a hard-edged digital accessibility statute with deadlines and damages — focused on state and local government, not the private sector.",
    whyItMatters:
      "HB 21-1110, passed in 2021, requires every state agency, public university, and political subdivision to adopt accessibility standards published by the Office of Information Technology and to make all digital products and services compliant. The original July 1, 2024 deadline was extended to July 1, 2025, with limited statutory grace through July 2026. Damages of $3,500 per violation per disabled person are available on top of injunctive relief and attorneys' fees.",
    damagesAvailable: true,
    damagesNote: "$3,500 per violation per affected individual + actual damages, costs, and attorneys' fees.",
    technicalStandard: "Colorado OIT Technology Accessibility Rules — incorporates WCAG 2.1 Level AA.",
    sections: [
      {
        heading: "Who is covered",
        body:
          "State agencies, public institutions of higher education, public school districts, counties, municipalities, special districts. Private businesses are not directly covered, but vendors that contract with the state must produce accessible products.",
      },
      {
        heading: "What is covered",
        body:
          "Any 'information and communication technology' the entity uses to deliver services to the public — websites, mobile apps, internal HRIS systems used by employees with disabilities, kiosks, learning management systems, and digital documents.",
      },
      {
        heading: "Enforcement",
        body:
          "An aggrieved individual may bring a civil action against a state-government entity in district court. The Colorado Civil Rights Division also has parallel investigative authority.",
      },
      {
        heading: "Practical impact",
        body:
          "HB 21-1110 served as the template for the federal DOJ Title II web rule. Colorado public bodies and their vendors are de-facto already operating under a regime very similar to the federal one — Colorado vendors have a head start.",
      },
    ],
    resources: [
      { label: "HB 21-1110 — Colorado General Assembly", url: "https://leg.colorado.gov/bills/hb21-1110" },
      { label: "Colorado OIT Technology Accessibility", url: "https://oit.colorado.gov/standards-policies/accessibility" },
    ],
  },
  {
    slug: "massachusetts",
    state: "Massachusetts",
    shortName: "Massachusetts",
    statute: "M.G.L. c. 272 § 98 (Public Accommodations) + Equal Access Law",
    summary:
      "Massachusetts public-accommodations law has been read by the courts to cover commercial websites under Title III principles. Treble damages are available in certain cases.",
    whyItMatters:
      "M.G.L. c. 272 § 98 prohibits any 'place of public accommodation' from refusing or restricting service based on disability, and Massachusetts courts have followed the First Circuit's broad reading of public accommodation that includes online services with a clear nexus to a physical business. The Equal Access Law allows treble damages for willful violations, plus attorneys' fees.",
    damagesAvailable: true,
    damagesNote:
      "Compensatory damages, treble damages for willful violations, attorneys' fees and costs. Civil penalties of up to $2,500 per violation under § 98.",
    technicalStandard:
      "ADA / WCAG 2.1 AA via incorporation. The Massachusetts Office on Disability publishes recommended technical guidelines that also reference WCAG.",
    sections: [
      {
        heading: "Who can sue",
        body:
          "Any individual alleging denial of full and equal access. Private right of action is available in addition to enforcement by the Attorney General.",
      },
      {
        heading: "Notable enforcement",
        body:
          "The Massachusetts Attorney General's Office has settled multiple consent decrees with state and local entities over inaccessible websites and online services.",
      },
      {
        heading: "Trends",
        body:
          "Filings have grown steadily as plaintiffs' firms expand from New York, Florida, and California into the First Circuit. Many cases pair § 98 claims with parallel ADA claims to seek both injunctive relief and damages.",
      },
    ],
    resources: [
      { label: "M.G.L. c. 272 § 98", url: "https://malegislature.gov/Laws/GeneralLaws/PartIV/TitleI/Chapter272/Section98" },
      { label: "Massachusetts Office on Disability", url: "https://www.mass.gov/orgs/massachusetts-office-on-disability" },
    ],
  },
  {
    slug: "florida",
    state: "Florida",
    shortName: "Florida",
    statute: "Florida Civil Rights Act (Fla. Stat. § 760)",
    summary:
      "Federal-court filings in Florida exploded in 2024–2025 as plaintiffs' firms shifted activity from California. Eleventh-Circuit precedent on website accessibility remains contested.",
    whyItMatters:
      "Florida ranks #2 in the country for federal website-accessibility lawsuit filings. Even though the Eleventh Circuit's Gil v. Winn-Dixie reversal (2021) narrowed the legal theory in that circuit, plaintiffs continue to file under both federal ADA and the Florida Civil Rights Act, particularly where a website has a strong nexus to a physical place of public accommodation.",
    damagesAvailable: true,
    damagesNote: "Compensatory damages and attorneys' fees under FCRA. No California-style statutory minimum.",
    technicalStandard: "WCAG 2.1 AA in settlement agreements and court orders — though the underlying public-accommodations status is still contested in the Eleventh Circuit.",
    sections: [
      {
        heading: "Eleventh Circuit context",
        body:
          "Gil v. Winn-Dixie Stores (11th Cir. 2021) held that a standalone website is not a 'place of public accommodation' under Title III. The opinion did not foreclose claims tied to physical stores, and plaintiffs continue to file by alleging website-store nexus.",
      },
      {
        heading: "Trends",
        body:
          "Florida federal courts saw nearly 1,000 website-accessibility filings in 2025. Most settle. Defendants increasingly raise standing and Eleventh-Circuit precedent at the motion-to-dismiss stage.",
      },
      {
        heading: "Florida Civil Rights Act",
        body:
          "FCRA generally tracks the ADA but is enforced through the Florida Commission on Human Relations and state courts. Some plaintiffs have used FCRA to pursue claims that struggled under post-Gil ADA case law.",
      },
    ],
    resources: [
      { label: "Florida Civil Rights Act (§ 760)", url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0760/0760ContentsIndex.html" },
      { label: "Florida Commission on Human Relations", url: "https://fchr.myflorida.com/" },
    ],
  },
]

export function getStateLaw(slug: string): StateAccessibilityLaw | undefined {
  return STATE_LAWS.find((s) => s.slug === slug)
}

export function getStateLawSlugs(): string[] {
  return STATE_LAWS.map((s) => s.slug)
}
