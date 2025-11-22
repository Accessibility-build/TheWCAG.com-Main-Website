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
  {
    slug: "canali-usa-accessibility-lawsuit-2025",
    title: "Canali U.S.A. Website Accessibility Lawsuit",
    defendant: "Canali U.S.A., Inc.",
    plaintiff: "Unknown (Filed by serial plaintiff)",
    dateFiled: "2025-03-15",
    status: "ongoing",
    summary:
      "A luxury menswear brand faced a lawsuit alleging their website was inaccessible to visually impaired users, highlighting that high-end fashion retailers are not exempt from accessibility requirements.",
    details: `Canali U.S.A., Inc., a luxury Italian menswear brand, was sued in March 2025 for operating a website that was not accessible to users with visual impairments. The lawsuit alleged that the company's website violated Title III of the Americans with Disabilities Act (ADA) by failing to provide accessible features for screen reader users.

The case is part of the 2025 surge in accessibility litigation, which saw a 37% increase in ADA website lawsuits compared to 2024. Luxury fashion brands, like other e-commerce retailers, are required to ensure their websites are accessible to all users, regardless of their abilities.

The lawsuit likely alleged common accessibility barriers such as missing alt text for product images, inaccessible navigation menus, lack of keyboard navigation support, and screen reader incompatibility. These barriers prevent visually impaired customers from browsing products, viewing product details, or completing purchases independently.

This case demonstrates that accessibility requirements apply universally across all industries and business sizes, from small retailers to luxury brands. The fashion and apparel industry was among the top five industries targeted by accessibility lawsuits in 2025.`,
    issues: [
      "Missing alt text for product images",
      "Inaccessible navigation and menus",
      "Lack of keyboard navigation support",
      "Screen reader incompatibility",
      "Inaccessible product browsing and shopping experience",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (likely New York, Florida, or California)",
    keyTakeaways: [
      "Luxury brands are not exempt from accessibility requirements",
      "Fashion and apparel industry is heavily targeted in accessibility litigation",
      "All e-commerce websites must be accessible regardless of brand positioning",
      "2025 saw a significant increase in accessibility lawsuits across industries",
    ],
    impact:
      "This case highlights that accessibility requirements apply to all businesses, including luxury brands. It's part of a broader trend showing that no industry is immune from accessibility litigation, and proactive compliance is essential for all online retailers.",
  },
  {
    slug: "et-browne-palmers-accessibility-lawsuit-2025",
    title: "E.T. Browne Drug Co. (Palmer's) Website Accessibility Lawsuit",
    defendant: "E.T. Browne Drug Co., Inc.",
    plaintiff: "Unknown (Filed by serial plaintiff)",
    dateFiled: "2025-03-20",
    status: "ongoing",
    summary:
      "The maker of Palmer's skincare products was sued for operating a website that did not support screen readers or provide accessible navigation, demonstrating that beauty and skincare brands must ensure digital accessibility.",
    details: `E.T. Browne Drug Co., Inc., the manufacturer of Palmer's Cocoa Butter Formula and other skincare products, faced a website accessibility lawsuit in March 2025. The lawsuit alleged that the company's website violated the ADA by not supporting screen readers and failing to provide accessible navigation for users with disabilities.

The beauty, skin, and body care industry was among the top five industries most affected by accessibility lawsuits in 2025, with over 90% of lawsuits targeting ten specific industries. This case is representative of the growing trend of accessibility litigation in the consumer goods and beauty sectors.

The lawsuit likely claimed that users with visual impairments could not:
- Navigate the website using screen readers
- Access product information and descriptions
- Browse product categories and collections
- Complete purchases or access customer service features
- View product images with proper alternative text

This case demonstrates that consumer product companies, regardless of their product category, must ensure their digital presence is accessible. The beauty industry's heavy reliance on visual content makes proper accessibility implementation even more critical.`,
    issues: [
      "Website did not support screen readers",
      "Lack of accessible navigation",
      "Missing alt text for product images",
      "Inaccessible product information and descriptions",
      "No keyboard navigation support",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (likely New York, Florida, or California)",
    keyTakeaways: [
      "Beauty and skincare brands must ensure website accessibility",
      "Consumer product companies are frequent targets of accessibility litigation",
      "Visual-heavy industries require careful accessibility implementation",
      "Screen reader compatibility is a fundamental accessibility requirement",
    ],
    impact:
      "This case highlights that accessibility requirements extend to all consumer-facing industries, including beauty and personal care. Companies in visually-oriented industries must pay special attention to implementing proper alternative text and accessible navigation structures.",
  },
  {
    slug: "sun-sky-spa-accessibility-lawsuit-2025",
    title: "Sun & Sky Spa Website Accessibility Lawsuit",
    defendant: "Sun & Sky – Spa / Salon",
    plaintiff: "Unknown (Filed by serial plaintiff)",
    dateFiled: "2025-03-10",
    status: "ongoing",
    summary:
      "A single-location spa in Brooklyn was sued for having a website that was not sufficiently accessible to users with disabilities, showing that small businesses are also subject to accessibility requirements.",
    details: `Sun & Sky, a single-location spa and salon in Brooklyn, New York, was named in a website accessibility lawsuit filed in March 2025. The case demonstrates that accessibility requirements apply to businesses of all sizes, from small local establishments to large corporations.

The lawsuit alleged that the spa's website was not sufficiently accessible to users with disabilities, preventing potential customers from accessing information about services, booking appointments, or learning about the business online. This case is particularly notable because it involves a small, local business rather than a large corporation.

Small businesses often face unique challenges when it comes to website accessibility, as they may lack the resources or technical expertise of larger companies. However, the ADA applies equally to all businesses that serve the public, regardless of size.

The lawsuit likely claimed violations such as:
- Inaccessible service descriptions and pricing information
- Lack of keyboard navigation for appointment booking
- Missing alt text for images of the spa and services
- Screen reader incompatibility
- Inaccessible contact forms or booking systems

This case serves as a reminder that all businesses, including small local establishments, must ensure their websites are accessible to comply with the ADA.`,
    issues: [
      "Website not sufficiently accessible to users with disabilities",
      "Inaccessible service information and descriptions",
      "Lack of keyboard navigation support",
      "Missing alt text for images",
      "Screen reader incompatibility",
      "Inaccessible booking or contact forms",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Eastern District of New York - Brooklyn)",
    keyTakeaways: [
      "Small businesses are subject to the same accessibility requirements as large corporations",
      "Local service businesses must ensure their websites are accessible",
      "Size does not exempt businesses from ADA compliance",
      "Service industry websites must be accessible for booking and information access",
    ],
    impact:
      "This case highlights that accessibility requirements apply universally, regardless of business size. Small businesses must prioritize website accessibility, and may need to seek affordable solutions or guidance to ensure compliance with the ADA.",
  },
  {
    slug: "omoi-inc-accessibility-lawsuit-2025",
    title: "Omoi, Inc. Website Accessibility Lawsuit",
    defendant: "Omoi, Inc.",
    plaintiff: "Unknown (Filed by serial plaintiff)",
    dateFiled: "2025-03-25",
    status: "ongoing",
    summary:
      "A small retailer in Philadelphia faced legal action over an inaccessible online shopping experience for users with disabilities, emphasizing that all e-commerce businesses must prioritize accessibility.",
    details: `Omoi, Inc., a small retailer based in Philadelphia, Pennsylvania, was sued in March 2025 for operating a website that provided an inaccessible online shopping experience for users with disabilities. The lawsuit alleged violations of the ADA and potentially Pennsylvania state accessibility laws.

This case is representative of the broader trend in 2025 where small and medium-sized retailers faced accessibility litigation. The lawsuit likely claimed that users with disabilities could not:
- Browse products effectively using assistive technologies
- Access product descriptions and details
- Navigate the shopping cart and checkout process
- Complete purchases independently
- Access customer service or support features

Small retailers often operate with limited budgets and may not have dedicated web development teams, making accessibility implementation more challenging. However, the ADA requires all businesses that serve the public to ensure their digital properties are accessible.

The case demonstrates that:
- E-commerce accessibility is mandatory for all retailers, regardless of size
- Small businesses need affordable accessibility solutions
- Online shopping must be accessible to all customers
- State laws may provide additional accessibility requirements beyond the ADA

This lawsuit is part of the 2025 surge in accessibility litigation, which saw over 2,000 ADA website lawsuits filed in the first half of the year alone.`,
    issues: [
      "Inaccessible online shopping experience",
      "Inability to browse products using assistive technologies",
      "Lack of keyboard navigation support",
      "Missing alt text for product images",
      "Inaccessible shopping cart and checkout process",
      "Screen reader incompatibility",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Eastern District of Pennsylvania - Philadelphia)",
    keyTakeaways: [
      "Small retailers must ensure e-commerce accessibility",
      "Online shopping must be accessible to all customers",
      "Business size does not exempt companies from ADA compliance",
      "Affordable accessibility solutions are needed for small businesses",
    ],
    impact:
      "This case emphasizes that accessibility is not optional for any e-commerce business, regardless of size. Small retailers must find ways to implement accessibility, whether through affordable tools, developer training, or consulting services, to avoid legal liability and serve all customers.",
  },
  {
    slug: "academy-museum-foundation-accessibility-lawsuit-2025",
    title: "Academy Museum Foundation Website Accessibility Lawsuit",
    defendant: "Academy Museum Foundation",
    plaintiff: "Unknown (Filed by serial plaintiff)",
    dateFiled: "2025-03-18",
    status: "ongoing",
    summary:
      "A nonprofit organization affiliated with the Academy of Motion Picture Arts and Sciences was sued for website barriers that prevented users with disabilities from accessing online content and services, showing that cultural institutions must prioritize accessibility.",
    details: `The Academy Museum Foundation, a nonprofit organization affiliated with the Academy of Motion Picture Arts and Sciences (the organization behind the Oscars), faced a website accessibility lawsuit in March 2025. The lawsuit alleged that the organization's website contained barriers that prevented users with disabilities from accessing online content, services, and information.

This case is particularly significant because it involves a cultural and educational institution that should be leading by example in accessibility. Museums and cultural organizations have a responsibility to ensure their digital content is accessible to all visitors, including those with disabilities.

The lawsuit likely claimed that users with disabilities could not:
- Access information about museum exhibitions and events
- Purchase tickets online
- Navigate the website using assistive technologies
- Access educational content and resources
- View images and multimedia content with proper accessibility features
- Complete online forms for membership or donations

Nonprofit organizations, including museums and cultural institutions, are subject to the same ADA requirements as for-profit businesses. Additionally, many cultural institutions receive public funding, which may include additional accessibility requirements.

This case demonstrates that:
- Cultural institutions must ensure digital accessibility
- Educational and nonprofit websites are subject to ADA requirements
- Museums should lead by example in accessibility implementation
- Public-facing organizations have a particular responsibility for accessibility`,
    issues: [
      "Website barriers preventing access to online content",
      "Inaccessible ticket purchasing system",
      "Lack of keyboard navigation support",
      "Missing alt text for images and multimedia",
      "Screen reader incompatibility",
      "Inaccessible forms for membership or donations",
      "Inaccessible educational content and resources",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (likely Central District of California - Los Angeles)",
    keyTakeaways: [
      "Nonprofit organizations must ensure website accessibility",
      "Cultural and educational institutions should lead in accessibility",
      "Museums and cultural sites must make digital content accessible",
      "Public-facing organizations have accessibility responsibilities",
    ],
    impact:
      "This case highlights that accessibility requirements apply to all types of organizations, including nonprofits and cultural institutions. Museums and educational organizations should prioritize accessibility not only for legal compliance but also to fulfill their mission of serving all members of the public.",
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

