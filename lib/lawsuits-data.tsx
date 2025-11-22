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
  relatedLinks?: Array<{
    title: string
    url: string
  }>
  keyTakeaways: string[]
  impact: string
}

export const lawsuits: Lawsuit[] = [
  {
    slug: "dominos-pizza-v-robles",
    title: "Domino's Pizza v. Robles",
    defendant: "Domino's Pizza, LLC",
    plaintiff: "Guillermo Robles",
    dateFiled: "2016-06-08",
    dateResolved: "2019-10-07",
    status: "settled",
    settlementAmount: "Confidential",
    summary:
      "A landmark case where a blind customer sued Domino's Pizza because their website and mobile app were not accessible to screen readers. The case went to the Supreme Court before being settled.",
    details: `Guillermo Robles, who is blind, attempted to order a pizza from Domino's website using screen reader software but was unable to complete his order due to accessibility barriers. The website lacked proper alt text for images, form labels, and keyboard navigation support.

Robles filed a lawsuit under the Americans with Disabilities Act (ADA), arguing that Domino's website and mobile app were "places of public accommodation" and must be accessible. Domino's argued that the ADA only applied to physical locations, not websites.

The case made its way through the courts, with the Ninth Circuit Court of Appeals ruling that the ADA applies to websites and mobile apps. Domino's appealed to the U.S. Supreme Court, which declined to hear the case, effectively upholding the lower court's decision.

The case was eventually settled out of court in October 2019, with Domino's agreeing to make their digital properties accessible. While the settlement amount was confidential, the case set an important precedent for website accessibility under the ADA.`,
    issues: [
      "Missing alt text for images",
      "Lack of keyboard navigation",
      "Missing form labels",
      "Screen reader incompatibility",
      "No accessible error messages",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Ninth Circuit)",
    caseNumber: "Case No. 2:16-cv-06599",
    relatedLinks: [
      {
        title: "Ninth Circuit Court Decision",
        url: "https://cdn.ca9.uscourts.gov/datastore/opinions/2019/01/15/17-55504.pdf",
      },
    ],
    keyTakeaways: [
      "The ADA applies to websites and mobile apps, not just physical locations",
      "E-commerce websites must be accessible to users with disabilities",
      "The Supreme Court's refusal to hear the case strengthened the legal precedent",
      "Settling accessibility lawsuits can be costly, even if the amount is confidential",
    ],
    impact:
      "This case established a critical legal precedent that websites and mobile apps are considered 'places of public accommodation' under the ADA. It has led to thousands of similar lawsuits and forced many companies to prioritize digital accessibility.",
  },
  {
    slug: "target-corporation-accessibility-settlement",
    title: "Target Corporation Accessibility Settlement",
    defendant: "Target Corporation",
    plaintiff: "National Federation of the Blind (NFB)",
    dateFiled: "2006-08-01",
    dateResolved: "2008-08-27",
    status: "settled",
    settlementAmount: "$6 million",
    summary:
      "One of the earliest major website accessibility cases, where Target agreed to pay $6 million and make their website accessible after a class-action lawsuit filed by the National Federation of the Blind.",
    details: `In 2006, the National Federation of the Blind (NFB) filed a class-action lawsuit against Target Corporation, alleging that Target's website was inaccessible to blind users. The lawsuit claimed that blind customers could not navigate the website, locate products, or complete purchases independently.

The case was significant because it was one of the first major e-commerce accessibility lawsuits. Target initially argued that the ADA only applied to physical stores, but the court ruled that the website was covered under the ADA as it was closely integrated with Target's physical stores.

In August 2008, Target agreed to a $6 million settlement, which included:
- $6 million in damages to be distributed among class members
- Agreement to make Target.com accessible to screen readers
- Regular accessibility testing and monitoring
- Training for web developers on accessibility

Target also agreed to work with the NFB to ensure ongoing compliance with WCAG 2.0 Level AA standards.`,
    issues: [
      "Missing alt text for product images",
      "Inaccessible forms and checkout process",
      "Missing headings and proper page structure",
      "No keyboard navigation support",
      "Screen reader incompatibility",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Northern District of California)",
    caseNumber: "Case No. C 06-01782 MHP",
    relatedLinks: [
      {
        title: "Settlement Agreement",
        url: "https://nfb.org/sites/default/files/images/nfb/documents/pdf/target_settlement.pdf",
      },
    ],
    keyTakeaways: [
      "Early precedent for e-commerce website accessibility requirements",
      "Class-action lawsuits can result in significant financial penalties",
      "Ongoing compliance monitoring is often part of settlements",
      "Working with disability organizations can help ensure proper accessibility",
    ],
    impact:
      "This case set an early precedent for e-commerce accessibility and demonstrated that large corporations could face significant financial penalties for inaccessible websites. It also showed the importance of working with disability organizations to ensure proper accessibility implementation.",
  },
  {
    slug: "winn-dixie-accessibility-case",
    title: "Winn-Dixie Stores Accessibility Case",
    defendant: "Winn-Dixie Stores, Inc.",
    plaintiff: "Juan Carlos Gil",
    dateFiled: "2017-06-12",
    dateResolved: "2017-06-13",
    status: "won",
    settlementAmount: "Court-ordered remediation",
    summary:
      "A federal court ruled that Winn-Dixie's website violated the ADA and ordered the company to make their website accessible, setting an important precedent for website accessibility requirements.",
    details: `Juan Carlos Gil, who is blind, filed a lawsuit against Winn-Dixie Stores alleging that their website was not accessible to screen readers. Gil claimed he could not use the website to refill prescriptions, find store locations, or access digital coupons.

The case went to trial in June 2017, and the court ruled in favor of Gil, finding that Winn-Dixie's website violated Title III of the ADA. The court ordered Winn-Dixie to:
- Make their website accessible to individuals with disabilities
- Adopt and implement a Web Accessibility Policy
- Provide mandatory web accessibility training to employees
- Hire an independent accessibility consultant
- Conduct annual accessibility audits

The court specifically noted that Winn-Dixie's website was a "gateway" to the physical stores and therefore covered under the ADA. This was one of the first cases where a court ordered specific accessibility remediation measures.`,
    issues: [
      "Website not accessible to screen readers",
      "Inability to refill prescriptions online",
      "Inaccessible store locator",
      "Digital coupons not accessible",
      "No accessibility policy or training",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Southern District of Florida)",
    caseNumber: "Case No. 1:17-cv-23025",
    keyTakeaways: [
      "Courts can order specific accessibility remediation measures",
      "Websites that serve as 'gateways' to physical stores are covered under ADA",
      "Having an accessibility policy and training is important",
      "Annual accessibility audits may be required by courts",
    ],
    impact:
      "This case reinforced that websites are covered under the ADA and that courts can order specific accessibility measures, not just monetary damages. It also highlighted the importance of having accessibility policies and training programs in place.",
  },
  {
    slug: "beyonce-parkwood-entertainment-lawsuit",
    title: "Beyoncé Parkwood Entertainment Website Lawsuit",
    defendant: "Parkwood Entertainment (Beyoncé's company)",
    plaintiff: "Mary Conner",
    dateFiled: "2019-01-08",
    dateResolved: "2019-04-01",
    status: "settled",
    settlementAmount: "Confidential",
    summary:
      "A high-profile case where a blind fan sued Beyoncé's company because her official website was not accessible to screen readers, highlighting that accessibility applies to entertainment and celebrity websites as well.",
    details: `Mary Conner, a blind fan of Beyoncé, filed a lawsuit against Parkwood Entertainment (Beyoncé's company) alleging that Beyoncé's official website was not accessible to screen readers. Conner claimed she could not navigate the website, view images, or purchase merchandise and concert tickets.

The lawsuit alleged that the website violated the ADA by not providing:
- Alt text for images
- Proper heading structure
- Keyboard navigation
- Screen reader compatibility
- Accessible forms for ticket purchases

The case received significant media attention because of Beyoncé's celebrity status, bringing website accessibility issues to a broader audience. The case was settled in April 2019, with Parkwood Entertainment agreeing to make the website accessible. The settlement amount was confidential.

This case highlighted that accessibility requirements apply to all types of websites, including entertainment, celebrity, and media websites, not just e-commerce or business sites.`,
    issues: [
      "Missing alt text for images",
      "No proper heading structure",
      "Inaccessible navigation",
      "Screen reader incompatibility",
      "Inaccessible ticket purchase forms",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Eastern District of New York)",
    caseNumber: "Case No. 1:19-cv-00153",
    keyTakeaways: [
      "Accessibility requirements apply to all types of websites, including entertainment",
      "Celebrity and high-profile cases can raise awareness of accessibility issues",
      "Media attention can pressure companies to settle quickly",
      "Entertainment websites must be accessible to all fans",
    ],
    impact:
      "This high-profile case brought website accessibility to mainstream media attention and demonstrated that accessibility requirements apply universally, regardless of the type of website or the celebrity status of the owner.",
  },
  {
    slug: "netflix-captioning-lawsuit",
    title: "Netflix Captioning Lawsuit",
    defendant: "Netflix, Inc.",
    plaintiff: "National Association of the Deaf (NAD)",
    dateFiled: "2011-06-16",
    dateResolved: "2012-10-10",
    status: "settled",
    settlementAmount: "$755,000 + ongoing captioning",
    summary:
      "A landmark case where the National Association of the Deaf sued Netflix for not providing closed captions on their streaming content, establishing that video streaming services must be accessible to deaf and hard-of-hearing users.",
    details: `The National Association of the Deaf (NAD) filed a lawsuit against Netflix in 2011, alleging that Netflix's "Watch Instantly" streaming service violated the ADA by not providing closed captions for most of its content. This made the service inaccessible to deaf and hard-of-hearing users.

Netflix initially argued that the ADA only applied to physical locations, not online services. However, the court ruled that Netflix's streaming service was a "place of public accommodation" under the ADA.

In October 2012, Netflix agreed to a settlement that required:
- $755,000 in damages and attorney fees
- 100% closed captioning for all streaming content by 2014
- Ongoing captioning for all new content
- Regular reporting to the NAD on captioning progress

This case was significant because it established that online video streaming services must be accessible, setting a precedent for other streaming platforms like Hulu, Amazon Prime, and Disney+.`,
    issues: [
      "Lack of closed captions on streaming content",
      "Inaccessible video player controls",
      "No audio descriptions for blind users",
      "Inaccessible website navigation",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (District of Massachusetts)",
    caseNumber: "Case No. 3:11-cv-30168",
    relatedLinks: [
      {
        title: "Settlement Agreement",
        url: "https://www.ada.gov/netflix_sa.htm",
      },
    ],
    keyTakeaways: [
      "Video streaming services must provide closed captions",
      "Online services are considered 'places of public accommodation'",
      "Settlements can include ongoing compliance requirements",
      "This case set precedent for all streaming platforms",
    ],
    impact:
      "This case established that video streaming services must be accessible and led to widespread captioning across the streaming industry. It also demonstrated that the ADA applies to online services, not just physical locations.",
  },
  {
    slug: "h-m-website-accessibility-lawsuit",
    title: "H&M Website Accessibility Lawsuit",
    defendant: "H&M Hennes & Mauritz LP",
    plaintiff: "Andres Gomez",
    dateFiled: "2018-03-15",
    dateResolved: "2019-06-20",
    status: "settled",
    settlementAmount: "Confidential",
    summary:
      "A class-action lawsuit against fashion retailer H&M alleging their website was not accessible to users with disabilities, resulting in a settlement requiring website accessibility improvements.",
    details: `Andres Gomez, who is blind, filed a class-action lawsuit against H&M alleging that their website was not accessible to screen readers. Gomez claimed he could not browse products, view product details, or complete purchases on the H&M website.

The lawsuit alleged violations of the ADA and California's Unruh Civil Rights Act. H&M's website reportedly lacked:
- Proper alt text for product images
- Accessible navigation and menus
- Keyboard navigation support
- Screen reader compatibility
- Accessible forms and checkout process

The case was settled in June 2019, with H&M agreeing to make their website accessible. While the settlement amount was confidential, H&M committed to:
- Making their website compliant with WCAG 2.1 Level AA
- Regular accessibility testing
- Training for web developers
- Ongoing monitoring and remediation

This case highlighted that fashion and retail websites must be accessible, and that class-action lawsuits can result in significant remediation requirements.`,
    issues: [
      "Missing alt text for product images",
      "Inaccessible navigation and menus",
      "No keyboard navigation",
      "Screen reader incompatibility",
      "Inaccessible checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Central District of California)",
    caseNumber: "Case No. 2:18-cv-02380",
    keyTakeaways: [
      "Fashion and retail websites must be accessible",
      "Class-action lawsuits can affect entire customer bases",
      "Settlements often include ongoing compliance requirements",
      "California's Unruh Act provides additional protections",
    ],
    impact:
      "This case reinforced that all retail websites, regardless of industry, must be accessible. It also showed that class-action lawsuits can result in comprehensive accessibility remediation requirements.",
  },
]

export function getLawsuitBySlug(slug: string): Lawsuit | undefined {
  return lawsuits.find((lawsuit) => lawsuit.slug === slug)
}

export function getAllLawsuits(): Lawsuit[] {
  return lawsuits
}

export function getLawsuitsByStatus(status: Lawsuit["status"]): Lawsuit[] {
  return lawsuits.filter((lawsuit) => lawsuit.status === status)
}

export function getRecentLawsuits(limit: number = 5): Lawsuit[] {
  return lawsuits
    .sort((a, b) => new Date(b.dateFiled).getTime() - new Date(a.dateFiled).getTime())
    .slice(0, limit)
}

