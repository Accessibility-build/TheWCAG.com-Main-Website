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
        title: "Ninth Circuit Court Decision (Official)",
        url: "https://cdn.ca9.uscourts.gov/datastore/opinions/2019/01/15/17-55504.pdf",
      },
      {
        title: "Federal Court Records (Justia)",
        url: "https://law.justia.com/cases/federal/district-courts/california/cacdce/2:2016cv06599/",
      },
      {
        title: "PACER Case Search",
        url: "https://www.uscourts.gov/court-records/find-case-pacer",
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
        title: "Federal Court Records (Justia)",
        url: "https://law.justia.com/cases/federal/district-courts/california/candce/3:2006cv01782/",
      },
      {
        title: "Settlement Agreement (NFB)",
        url: "https://nfb.org/sites/default/files/images/nfb/documents/pdf/target_settlement.pdf",
      },
      {
        title: "PACER Case Search",
        url: "https://www.uscourts.gov/court-records/find-case-pacer",
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
    relatedLinks: [
      {
        title: "Federal Court Records (Justia)",
        url: "https://law.justia.com/cases/federal/district-courts/florida/flsdce/1:2017cv23025/",
      },
      {
        title: "PACER Case Search",
        url: "https://www.uscourts.gov/court-records/find-case-pacer",
      },
    ],
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
    relatedLinks: [
      {
        title: "Federal Court Records (Justia)",
        url: "https://law.justia.com/cases/federal/district-courts/new-york/nyedce/1:2019cv00153/",
      },
      {
        title: "PACER Case Search",
        url: "https://www.uscourts.gov/court-records/find-case-pacer",
      },
    ],
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
        title: "DOJ Settlement Agreement (Official)",
        url: "https://www.ada.gov/netflix_sa.htm",
      },
      {
        title: "Federal Court Records (Justia)",
        url: "https://law.justia.com/cases/federal/district-courts/massachusetts/madce/3:2011cv30168/",
      },
      {
        title: "PACER Case Search",
        url: "https://www.uscourts.gov/court-records/find-case-pacer",
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
    relatedLinks: [
      {
        title: "Federal Court Records (Justia)",
        url: "https://law.justia.com/cases/federal/district-courts/california/cacdce/2:2018cv02380/",
      },
      {
        title: "PACER Case Search",
        url: "https://www.uscourts.gov/court-records/find-case-pacer",
      },
    ],
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
  {
    slug: "lucas-rice-sam-wilson-v-blenders-eyewear-2025",
    title: "Lucas Rice and Sam Wilson v. Blenders Eyewear LLC",
    defendant: "Blenders Eyewear LLC",
    plaintiff: "Lucas Rice, Sam Wilson",
    dateFiled: "2025-10-28",
    status: "ongoing",
    summary:
      "Two plaintiffs filed a lawsuit against Blenders Eyewear LLC alleging that the eyewear retailer's website was not accessible to users with disabilities, preventing them from browsing and purchasing products online.",
    details: `Lucas Rice and Sam Wilson filed a lawsuit against Blenders Eyewear LLC on October 28, 2025, in the United States District Court. The lawsuit alleged that Blenders Eyewear's website violated Title III of the Americans with Disabilities Act (ADA) by failing to provide accessible features for users with disabilities.

Blenders Eyewear is an online retailer specializing in sunglasses and eyewear. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse product collections and view product details
- Access product images with proper alternative text
- Complete purchases through the checkout process
- Access customer service features or support information

This case is part of the October 2025 surge in accessibility litigation, which saw 95 website accessibility lawsuits filed that month. The retailing industry, including eyewear retailers, has been consistently targeted in accessibility lawsuits, as e-commerce websites must be accessible to all customers regardless of their abilities.

The case highlights the importance of ensuring that online retail experiences are accessible, particularly for businesses that rely heavily on visual product presentation. Eyewear retailers must ensure that product images, descriptions, and shopping functionality are accessible to users with disabilities.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for product images",
      "Inaccessible navigation and product browsing",
      "Lack of keyboard navigation support",
      "Inaccessible checkout and purchase process",
      "Screen reader incompatibility",
      "Inaccessible forms and interactive elements",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court",
    keyTakeaways: [
      "Eyewear and fashion retailers must ensure website accessibility",
      "E-commerce websites must be accessible to all customers",
      "Product browsing and purchasing must work with assistive technologies",
      "Visual product presentation requires proper accessibility implementation",
    ],
    impact:
      "This case demonstrates that specialty retailers, including eyewear companies, must ensure their online shopping experiences are accessible. As e-commerce continues to grow, accessibility compliance is essential for all online retailers to serve customers with disabilities and avoid legal liability.",
  },
  {
    slug: "dominique-tompkins-richard-degaetano-v-between-the-sheets-2025",
    title: "Dominique Tompkins and Richard DeGaetano v. Between the Sheets, Inc.",
    defendant: "Between the Sheets, Inc.",
    plaintiff: "Dominique Tompkins, Richard DeGaetano",
    dateFiled: "2025-10-24",
    status: "ongoing",
    summary:
      "Two plaintiffs filed a lawsuit against Between the Sheets, Inc., a retail company, alleging that their website was not accessible to users with disabilities, preventing access to products and services.",
    details: `Dominique Tompkins and Richard DeGaetano filed a lawsuit against Between the Sheets, Inc. on October 24, 2025, in the United States District Court. The lawsuit alleged violations of Title III of the Americans with Disabilities Act (ADA) due to the company's website being inaccessible to users with disabilities.

Between the Sheets, Inc. operates as a retail business, and the lawsuit likely claimed that users with disabilities could not:
- Navigate the website using assistive technologies such as screen readers
- Browse products and access product information
- View product images with proper alternative text descriptions
- Complete purchases or access online services
- Navigate using keyboard-only input
- Access forms, buttons, and interactive elements

This case was filed on the same day as several other accessibility lawsuits, reflecting the continued high volume of ADA website litigation in 2025. The retailing industry has been one of the most frequently targeted sectors, as online shopping must be accessible to all consumers.

The lawsuit emphasizes that all retail businesses, regardless of size or product category, must ensure their digital presence is accessible. Companies must implement proper accessibility features to comply with the ADA and serve customers with disabilities.`,
    issues: [
      "Website not accessible to assistive technologies",
      "Missing alt text for images",
      "Inaccessible navigation and product browsing",
      "Lack of keyboard navigation support",
      "Screen reader incompatibility",
      "Inaccessible forms and interactive elements",
      "Inaccessible checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court",
    keyTakeaways: [
      "All retail websites must be accessible to users with disabilities",
      "Online shopping experiences must work with assistive technologies",
      "Product browsing and purchasing must be accessible",
      "Retailers must implement proper accessibility features",
    ],
    impact:
      "This case is part of the ongoing trend of accessibility litigation targeting retail businesses. It reinforces that all e-commerce websites must be accessible, and retailers should proactively implement accessibility measures to serve all customers and avoid legal action.",
  },
  {
    slug: "nicole-da-vis-v-may-lindstrom-skin-2025",
    title: "Nicole Da Vis v. May Lindstrom Skin, LLC",
    defendant: "May Lindstrom Skin, LLC",
    plaintiff: "Nicole Da Vis",
    dateFiled: "2025-10-24",
    status: "ongoing",
    summary:
      "A plaintiff filed a lawsuit against May Lindstrom Skin, LLC, a beauty and skincare company, alleging that their website was not accessible to users with disabilities, preventing access to product information and online shopping.",
    details: `Nicole Da Vis filed a lawsuit against May Lindstrom Skin, LLC on October 24, 2025, in the United States District Court for the Northern District. The lawsuit alleged that the beauty and skincare company's website violated the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

May Lindstrom Skin is a luxury skincare brand, and the lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse skincare products and view product details
- Access product images with proper alternative text
- Read product descriptions and ingredient information
- Complete purchases through the online store
- Access customer service or support features
- Navigate using keyboard-only input

The beauty and skincare industry has been frequently targeted in accessibility lawsuits, as these businesses often rely heavily on visual content to showcase products. However, all product information, images, and shopping functionality must be accessible to users with disabilities.

This case highlights the importance of accessibility in the beauty industry, where visual presentation is crucial but must be balanced with accessibility requirements. Companies must ensure that product information is available through multiple modalities, including text alternatives for images and proper semantic structure for assistive technologies.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for product images",
      "Inaccessible product browsing and navigation",
      "Lack of keyboard navigation support",
      "Inaccessible product descriptions and information",
      "Screen reader incompatibility",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court for the Northern District",
    keyTakeaways: [
      "Beauty and skincare websites must be accessible",
      "Visual product presentation requires accessibility considerations",
      "Product information must be accessible through multiple modalities",
      "E-commerce functionality must work with assistive technologies",
    ],
    impact:
      "This case demonstrates that beauty and skincare brands must ensure their websites are accessible, even when visual presentation is a key part of their brand identity. Accessibility and visual appeal are not mutually exclusive, and companies must implement both effectively.",
  },
  {
    slug: "tanisia-bowman-v-mulberry-park-silks-2025",
    title: "Tanisia Bowman v. Mulberry Park Silks, LLC",
    defendant: "Mulberry Park Silks, LLC",
    plaintiff: "Tanisia Bowman",
    dateFiled: "2025-10-24",
    status: "ongoing",
    summary:
      "A plaintiff filed a lawsuit against Mulberry Park Silks, LLC, a retail company, alleging that their website was not accessible to users with disabilities, preventing access to products and services.",
    details: `Tanisia Bowman filed a lawsuit against Mulberry Park Silks, LLC on October 24, 2025, in the United States District Court for the Northern District. The lawsuit alleged that the retail company's website violated Title III of the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

Mulberry Park Silks operates as a retail business, and the lawsuit likely claimed that users with disabilities could not:
- Navigate the website using assistive technologies
- Browse products and access product information
- View product images with proper alternative text
- Complete purchases or access online services
- Navigate using keyboard-only input
- Access forms, buttons, and interactive elements
- Use screen readers effectively

This case was filed on the same day as multiple other accessibility lawsuits, reflecting the high volume of ADA website litigation in October 2025. The retailing industry continues to be heavily targeted, as online shopping must be accessible to all consumers regardless of their abilities.

The lawsuit emphasizes that all retail businesses must ensure their digital properties are accessible. Companies should implement proper accessibility features, including keyboard navigation, screen reader compatibility, and proper alternative text for images, to comply with the ADA and serve all customers.`,
    issues: [
      "Website not accessible to assistive technologies",
      "Missing alt text for product images",
      "Inaccessible navigation and product browsing",
      "Lack of keyboard navigation support",
      "Screen reader incompatibility",
      "Inaccessible forms and interactive elements",
      "Inaccessible checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court for the Northern District",
    keyTakeaways: [
      "All retail websites must be accessible to users with disabilities",
      "Online shopping must work with assistive technologies",
      "Product browsing and purchasing must be accessible",
      "Retailers must implement comprehensive accessibility features",
    ],
    impact:
      "This case is part of the continued trend of accessibility litigation in the retail sector. It reinforces that all e-commerce websites must be accessible, and retailers should proactively address accessibility to serve all customers and mitigate legal risk.",
  },
  {
    slug: "teniya-booker-jessica-meyer-v-matisse-footwear-2025",
    title: "Teniya Booker and Jessica Meyer v. Matisse Footwear, Inc.",
    defendant: "Matisse Footwear, Inc.",
    plaintiff: "Teniya Booker, Jessica Meyer",
    dateFiled: "2025-10-24",
    status: "ongoing",
    summary:
      "Two plaintiffs filed a lawsuit against Matisse Footwear, Inc., an apparel and footwear retailer, alleging that their website was not accessible to users with disabilities, preventing access to footwear products and online shopping.",
    details: `Teniya Booker and Jessica Meyer filed a lawsuit against Matisse Footwear, Inc. on October 24, 2025, in the United States District Court. The lawsuit alleged that the footwear retailer's website violated the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

Matisse Footwear is a retailer specializing in footwear and apparel. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse footwear products and view product details
- Access product images with proper alternative text descriptions
- Read product descriptions, sizing information, and specifications
- Complete purchases through the online store
- Access customer service or support features
- Navigate using keyboard-only input

The apparel and footwear industry has been consistently targeted in accessibility lawsuits, as these businesses rely on visual product presentation. However, all product information, images, and shopping functionality must be accessible to users with disabilities.

This case highlights the importance of accessibility in the fashion and apparel industry, where visual presentation is important but must be balanced with accessibility requirements. Companies must ensure that product information is available through multiple modalities and that the shopping experience works with assistive technologies.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for product images",
      "Inaccessible product browsing and navigation",
      "Lack of keyboard navigation support",
      "Inaccessible product descriptions and sizing information",
      "Screen reader incompatibility",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court",
    keyTakeaways: [
      "Footwear and apparel websites must be accessible",
      "Visual product presentation requires accessibility considerations",
      "Product information must be accessible through multiple modalities",
      "E-commerce functionality must work with assistive technologies",
    ],
    impact:
      "This case demonstrates that fashion and apparel retailers must ensure their websites are accessible, even when visual presentation is crucial. Accessibility and visual appeal can coexist, and companies must implement both effectively to serve all customers and comply with legal requirements.",
  },
  {
    slug: "kelly-smith-karen-blachowicz-v-levan-group-high-fashion-home-2025",
    title: "Kelly Smith and Karen Blachowicz v. Levan Group I, L.P. DBA High Fashion Home",
    defendant: "Levan Group I, L.P. DBA High Fashion Home",
    plaintiff: "Kelly Smith, Karen Blachowicz",
    dateFiled: "2025-10-24",
    status: "ongoing",
    summary:
      "Two plaintiffs filed a lawsuit against Levan Group I, L.P. (doing business as High Fashion Home), a retail company, alleging that their website was not accessible to users with disabilities, preventing access to home furnishings and retail products.",
    details: `Kelly Smith and Karen Blachowicz filed a lawsuit against Levan Group I, L.P., doing business as High Fashion Home, on October 24, 2025, in the United States District Court. The lawsuit alleged that the retail company's website violated Title III of the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

High Fashion Home is a retail business specializing in home furnishings and related products. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse home furnishings and product collections
- Access product images with proper alternative text descriptions
- Read product descriptions, specifications, and pricing information
- Complete purchases through the online store
- Access customer service or support features
- Navigate using keyboard-only input

The home furnishings and retail industry has been consistently targeted in accessibility lawsuits, as these businesses rely on visual product presentation. However, all product information, images, and shopping functionality must be accessible to users with disabilities.

This case highlights the importance of accessibility in the home furnishings retail sector, where visual presentation is important but must be balanced with accessibility requirements. Companies must ensure that product information is available through multiple modalities and that the shopping experience works with assistive technologies.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for product images",
      "Inaccessible product browsing and navigation",
      "Lack of keyboard navigation support",
      "Inaccessible product descriptions and specifications",
      "Screen reader incompatibility",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court",
    keyTakeaways: [
      "Home furnishings and retail websites must be accessible",
      "Visual product presentation requires accessibility considerations",
      "Product information must be accessible through multiple modalities",
      "E-commerce functionality must work with assistive technologies",
    ],
    impact:
      "This case demonstrates that home furnishings retailers must ensure their websites are accessible. Even when visual presentation is crucial for showcasing products, companies must implement accessibility features to serve all customers and comply with legal requirements.",
  },
  {
    slug: "constance-henry-v-mountain-hardwear-2025",
    title: "Constance Henry v. Mountain Hardwear, Inc.",
    defendant: "Mountain Hardwear, Inc.",
    plaintiff: "Constance Henry",
    dateFiled: "2025-10-24",
    status: "ongoing",
    summary:
      "A plaintiff filed a lawsuit against Mountain Hardwear, Inc., an apparel and outdoor gear retailer, alleging that their website was not accessible to users with disabilities, preventing access to outdoor apparel and equipment products.",
    details: `Constance Henry filed a lawsuit against Mountain Hardwear, Inc. on October 24, 2025, in the United States District Court for the Northern District. The lawsuit alleged that the outdoor apparel and gear retailer's website violated the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

Mountain Hardwear is a retailer specializing in outdoor apparel, equipment, and gear. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse outdoor apparel and equipment products
- Access product images with proper alternative text descriptions
- Read product descriptions, technical specifications, and sizing information
- Complete purchases through the online store
- Access customer service, warranty information, or support features
- Navigate using keyboard-only input

The apparel and outdoor gear industry has been consistently targeted in accessibility lawsuits. These businesses often rely on visual product presentation and technical specifications, which must be accessible to users with disabilities.

This case highlights the importance of accessibility in the outdoor and apparel retail sector. Companies must ensure that product information, including technical specifications and sizing details, is accessible through multiple modalities and that the shopping experience works with assistive technologies.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for product images",
      "Inaccessible product browsing and navigation",
      "Lack of keyboard navigation support",
      "Inaccessible product descriptions and technical specifications",
      "Screen reader incompatibility",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court for the Northern District",
    keyTakeaways: [
      "Outdoor apparel and gear websites must be accessible",
      "Technical product information must be accessible",
      "Product specifications must be available through multiple modalities",
      "E-commerce functionality must work with assistive technologies",
    ],
    impact:
      "This case demonstrates that outdoor and apparel retailers must ensure their websites are accessible, including technical product information and specifications. Companies must implement accessibility features to serve all customers, including those with disabilities who may rely on assistive technologies to access product details.",
  },
  {
    slug: "phyllis-hampton-v-malnati-organization-2025",
    title: "Phyllis Hampton v. The Malnati Organization, LLC",
    defendant: "The Malnati Organization, LLC",
    plaintiff: "Phyllis Hampton",
    dateFiled: "2025-10-24",
    status: "ongoing",
    summary:
      "A plaintiff filed a lawsuit against The Malnati Organization, LLC, a food, beverage, and tobacco company, alleging that their website was not accessible to users with disabilities, preventing access to products and services.",
    details: `Phyllis Hampton filed a lawsuit against The Malnati Organization, LLC on October 24, 2025, in the United States District Court for the Northern District. The lawsuit alleged that the company's website violated Title III of the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

The Malnati Organization operates in the food, beverage, and tobacco industry. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse products and access product information
- Access product images with proper alternative text descriptions
- Read product descriptions, menus, or service information
- Complete purchases or place orders online
- Access customer service or support features
- Navigate using keyboard-only input

The food, beverage, and tobacco industry has been one of the most frequently targeted sectors in accessibility lawsuits, accounting for a significant portion of cases filed in 2025. These businesses must ensure their websites are accessible to all customers, regardless of their abilities.

This case highlights the importance of accessibility in the food and beverage industry, where online ordering and menu access are increasingly important. Companies must ensure that all digital services, including online ordering systems and menu information, are accessible to users with disabilities.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for images",
      "Inaccessible navigation and product browsing",
      "Lack of keyboard navigation support",
      "Inaccessible menus and product information",
      "Screen reader incompatibility",
      "Inaccessible forms and ordering process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court for the Northern District",
    keyTakeaways: [
      "Food, beverage, and tobacco websites must be accessible",
      "Online ordering systems must work with assistive technologies",
      "Menu and product information must be accessible",
      "E-commerce functionality must work with assistive technologies",
    ],
    impact:
      "This case demonstrates that food, beverage, and tobacco companies must ensure their websites are accessible, including online ordering systems and menu information. As online ordering becomes increasingly important, accessibility is essential to serve all customers and comply with legal requirements.",
  },
  {
    slug: "tanisia-bowman-v-kiyonna-clothing-2025",
    title: "Tanisia Bowman v. Kiyonna Clothing, Inc.",
    defendant: "Kiyonna Clothing, Inc.",
    plaintiff: "Tanisia Bowman",
    dateFiled: "2025-10-24",
    status: "ongoing",
    summary:
      "A plaintiff filed a lawsuit against Kiyonna Clothing, Inc., an apparel retailer, alleging that their website was not accessible to users with disabilities, preventing access to clothing products and online shopping.",
    details: `Tanisia Bowman filed a lawsuit against Kiyonna Clothing, Inc. on October 24, 2025, in the United States District Court for the Northern District. The lawsuit alleged that the apparel retailer's website violated the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

Kiyonna Clothing is a retailer specializing in women's apparel. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse clothing products and view product details
- Access product images with proper alternative text descriptions
- Read product descriptions, sizing information, and style details
- Complete purchases through the online store
- Access customer service or support features
- Navigate using keyboard-only input

The apparel industry has been consistently targeted in accessibility lawsuits, as these businesses rely heavily on visual product presentation. However, all product information, images, and shopping functionality must be accessible to users with disabilities.

This case highlights the importance of accessibility in the fashion and apparel industry. Companies must ensure that product information, including sizing and style details, is accessible through multiple modalities and that the shopping experience works with assistive technologies.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for product images",
      "Inaccessible product browsing and navigation",
      "Lack of keyboard navigation support",
      "Inaccessible product descriptions and sizing information",
      "Screen reader incompatibility",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court for the Northern District",
    keyTakeaways: [
      "Apparel websites must be accessible",
      "Visual product presentation requires accessibility considerations",
      "Product sizing and style information must be accessible",
      "E-commerce functionality must work with assistive technologies",
    ],
    impact:
      "This case demonstrates that apparel retailers must ensure their websites are accessible, including detailed product information like sizing and style details. Companies must implement accessibility features to serve all customers and comply with legal requirements, even when visual presentation is important.",
  },
  {
    slug: "robert-glen-myers-v-lodge-of-four-seasons-2025",
    title: "Robert Glen Myers v. Lodge of Four Seasons LLC",
    defendant: "Lodge of Four Seasons LLC",
    plaintiff: "Robert Glen Myers",
    dateFiled: "2025-10-24",
    status: "ongoing",
    summary:
      "A plaintiff filed a lawsuit against Lodge of Four Seasons LLC, a consumer services company, alleging that their website was not accessible to users with disabilities, preventing access to services and information.",
    details: `Robert Glen Myers filed a lawsuit against Lodge of Four Seasons LLC on October 24, 2025, in the United States District Court. The lawsuit alleged that the consumer services company's website violated Title III of the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

Lodge of Four Seasons operates in the consumer services industry, likely providing hospitality or related services. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Access service information and descriptions
- View images with proper alternative text descriptions
- Complete online reservations or bookings
- Access customer service or support features
- Navigate using keyboard-only input
- Use forms and interactive elements effectively

The consumer services industry has been targeted in accessibility lawsuits, particularly businesses that offer online booking or reservation systems. These services must be accessible to all customers, regardless of their abilities.

This case highlights the importance of accessibility in the consumer services sector, where online booking and service information are increasingly important. Companies must ensure that all digital services, including reservation systems and service descriptions, are accessible to users with disabilities.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for images",
      "Inaccessible navigation and service information",
      "Lack of keyboard navigation support",
      "Inaccessible booking or reservation systems",
      "Screen reader incompatibility",
      "Inaccessible forms and interactive elements",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court",
    keyTakeaways: [
      "Consumer services websites must be accessible",
      "Online booking systems must work with assistive technologies",
      "Service information must be accessible",
      "Reservation and booking functionality must be accessible",
    ],
    impact:
      "This case demonstrates that consumer services companies must ensure their websites are accessible, including online booking and reservation systems. As digital services become more important, accessibility is essential to serve all customers and comply with legal requirements.",
  },
  {
    slug: "darnell-williams-v-rowing-blazers-2025",
    title: "Darnell Williams v. Rowing Blazers Ltd.",
    defendant: "Rowing Blazers Ltd.",
    plaintiff: "Darnell Williams",
    dateFiled: "2025-10-24",
    status: "ongoing",
    summary:
      "A plaintiff filed a lawsuit against Rowing Blazers Ltd., an apparel retailer, alleging that their website was not accessible to users with disabilities, preventing access to clothing products and online shopping.",
    details: `Darnell Williams filed a lawsuit against Rowing Blazers Ltd. on October 24, 2025, in the United States District Court for the Northern District. The lawsuit alleged that the apparel retailer's website violated the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

Rowing Blazers is a retailer specializing in apparel, particularly blazers and related clothing. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse apparel products and view product details
- Access product images with proper alternative text descriptions
- Read product descriptions, sizing information, and style details
- Complete purchases through the online store
- Access customer service or support features
- Navigate using keyboard-only input

The apparel industry has been consistently targeted in accessibility lawsuits, as these businesses rely heavily on visual product presentation. However, all product information, images, and shopping functionality must be accessible to users with disabilities.

This case highlights the importance of accessibility in the fashion and apparel industry. Companies must ensure that product information, including sizing and style details, is accessible through multiple modalities and that the shopping experience works with assistive technologies.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for product images",
      "Inaccessible product browsing and navigation",
      "Lack of keyboard navigation support",
      "Inaccessible product descriptions and sizing information",
      "Screen reader incompatibility",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court for the Northern District",
    keyTakeaways: [
      "Apparel websites must be accessible",
      "Visual product presentation requires accessibility considerations",
      "Product sizing and style information must be accessible",
      "E-commerce functionality must work with assistive technologies",
    ],
    impact:
      "This case demonstrates that apparel retailers must ensure their websites are accessible, including detailed product information. Companies must implement accessibility features to serve all customers and comply with legal requirements, even when visual presentation is important for fashion brands.",
  },
  {
    slug: "leah-walker-v-lightopia-2025",
    title: "Leah Walker v. Lightopia, LLC",
    defendant: "Lightopia, LLC",
    plaintiff: "Leah Walker",
    dateFiled: "2025-10-24",
    status: "ongoing",
    summary:
      "A plaintiff filed a lawsuit against Lightopia, LLC, a retail company, alleging that their website was not accessible to users with disabilities, preventing access to products and services.",
    details: `Leah Walker filed a lawsuit against Lightopia, LLC on October 24, 2025, in the United States District Court for the Northern District. The lawsuit alleged that the retail company's website violated Title III of the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

Lightopia operates as a retail business. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse products and access product information
- Access product images with proper alternative text descriptions
- Read product descriptions and specifications
- Complete purchases through the online store
- Access customer service or support features
- Navigate using keyboard-only input

The retailing industry has been consistently targeted in accessibility lawsuits, as e-commerce websites must be accessible to all customers. These businesses must ensure their digital properties are accessible to comply with the ADA and serve customers with disabilities.

This case highlights the importance of accessibility in the retail sector. Companies must ensure that product information is accessible through multiple modalities and that the shopping experience works with assistive technologies.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for product images",
      "Inaccessible navigation and product browsing",
      "Lack of keyboard navigation support",
      "Inaccessible product descriptions and specifications",
      "Screen reader incompatibility",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court for the Northern District",
    keyTakeaways: [
      "Retail websites must be accessible to users with disabilities",
      "Online shopping must work with assistive technologies",
      "Product information must be accessible",
      "E-commerce functionality must work with assistive technologies",
    ],
    impact:
      "This case demonstrates that all retail businesses must ensure their websites are accessible. As e-commerce continues to grow, accessibility compliance is essential for all online retailers to serve customers with disabilities and avoid legal liability.",
  },
  {
    slug: "james-murphy-v-low-tech-toy-club-2025",
    title: "James Murphy v. Low Tech Toy Club, LLC",
    defendant: "Low Tech Toy Club, LLC",
    plaintiff: "James Murphy",
    dateFiled: "2025-10-23",
    status: "ongoing",
    summary:
      "A plaintiff filed a lawsuit against Low Tech Toy Club, LLC, a retail company, alleging that their website was not accessible to users with disabilities, preventing access to toy products and online shopping.",
    details: `James Murphy filed a lawsuit against Low Tech Toy Club, LLC on October 23, 2025, in the United States District Court for the Southern District. The lawsuit alleged that the retail company's website violated the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

Low Tech Toy Club operates as a retail business specializing in toys. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse toy products and view product details
- Access product images with proper alternative text descriptions
- Read product descriptions, age recommendations, and safety information
- Complete purchases through the online store
- Access customer service or support features
- Navigate using keyboard-only input

The retailing industry has been consistently targeted in accessibility lawsuits, and toy retailers are no exception. These businesses must ensure their digital properties are accessible to comply with the ADA and serve customers with disabilities, including parents and caregivers who may use assistive technologies.

This case highlights the importance of accessibility in the toy retail sector. Companies must ensure that product information, including age recommendations and safety information, is accessible through multiple modalities and that the shopping experience works with assistive technologies.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for product images",
      "Inaccessible navigation and product browsing",
      "Lack of keyboard navigation support",
      "Inaccessible product descriptions and safety information",
      "Screen reader incompatibility",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court for the Southern District",
    keyTakeaways: [
      "Toy retail websites must be accessible",
      "Product safety information must be accessible",
      "Online shopping must work with assistive technologies",
      "E-commerce functionality must work with assistive technologies",
    ],
    impact:
      "This case demonstrates that toy retailers must ensure their websites are accessible, including important product information like age recommendations and safety details. Companies must implement accessibility features to serve all customers, including parents and caregivers who may rely on assistive technologies.",
  },
  {
    slug: "christopher-jackson-christopher-walters-v-surya-carpet-2025",
    title: "Christopher Jackson and Christopher Walters v. Surya Carpet Inc.",
    defendant: "Surya Carpet Inc.",
    plaintiff: "Christopher Jackson, Christopher Walters",
    dateFiled: "2025-10-21",
    status: "ongoing",
    summary:
      "Two plaintiffs filed a lawsuit against Surya Carpet Inc., a retail company, alleging that their website was not accessible to users with disabilities, preventing access to carpet and home furnishings products.",
    details: `Christopher Jackson and Christopher Walters filed a lawsuit against Surya Carpet Inc. on October 21, 2025, in the United States District Court. The lawsuit alleged that the retail company's website violated Title III of the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

Surya Carpet operates as a retail business specializing in carpets and home furnishings. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse carpet and home furnishings products
- Access product images with proper alternative text descriptions
- Read product descriptions, specifications, and pricing information
- Complete purchases through the online store
- Access customer service or support features
- Navigate using keyboard-only input

The retailing industry has been consistently targeted in accessibility lawsuits, and home furnishings retailers are no exception. These businesses must ensure their digital properties are accessible to comply with the ADA and serve customers with disabilities.

This case highlights the importance of accessibility in the home furnishings retail sector. Companies must ensure that product information, including specifications and pricing, is accessible through multiple modalities and that the shopping experience works with assistive technologies.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for product images",
      "Inaccessible navigation and product browsing",
      "Lack of keyboard navigation support",
      "Inaccessible product descriptions and specifications",
      "Screen reader incompatibility",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court",
    keyTakeaways: [
      "Home furnishings retail websites must be accessible",
      "Product specifications must be accessible",
      "Online shopping must work with assistive technologies",
      "E-commerce functionality must work with assistive technologies",
    ],
    impact:
      "This case demonstrates that home furnishings retailers must ensure their websites are accessible, including detailed product specifications. Companies must implement accessibility features to serve all customers and comply with legal requirements.",
  },
  {
    slug: "holger-fiallo-jessica-meyer-v-renegade-furniture-group-2025",
    title: "Holger Fiallo and Jessica Meyer v. Renegade Furniture Group, Inc.",
    defendant: "Renegade Furniture Group, Inc.",
    plaintiff: "Holger Fiallo, Jessica Meyer",
    dateFiled: "2025-10-21",
    status: "ongoing",
    summary:
      "Two plaintiffs filed a lawsuit against Renegade Furniture Group, Inc., a retail company, alleging that their website was not accessible to users with disabilities, preventing access to furniture products and online shopping.",
    details: `Holger Fiallo and Jessica Meyer filed a lawsuit against Renegade Furniture Group, Inc. on October 21, 2025, in the United States District Court. The lawsuit alleged that the retail company's website violated the Americans with Disabilities Act (ADA) by not being accessible to users with disabilities.

Renegade Furniture Group operates as a retail business specializing in furniture. The lawsuit likely claimed that users with visual impairments or other disabilities could not:
- Navigate the website using screen readers or other assistive technologies
- Browse furniture products and view product details
- Access product images with proper alternative text descriptions
- Read product descriptions, dimensions, and specifications
- Complete purchases through the online store
- Access customer service or support features
- Navigate using keyboard-only input

The retailing industry has been consistently targeted in accessibility lawsuits, and furniture retailers are no exception. These businesses must ensure their digital properties are accessible to comply with the ADA and serve customers with disabilities.

This case highlights the importance of accessibility in the furniture retail sector. Companies must ensure that product information, including dimensions and specifications, is accessible through multiple modalities and that the shopping experience works with assistive technologies.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for product images",
      "Inaccessible navigation and product browsing",
      "Lack of keyboard navigation support",
      "Inaccessible product descriptions and dimensions",
      "Screen reader incompatibility",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States District Court",
    keyTakeaways: [
      "Furniture retail websites must be accessible",
      "Product dimensions and specifications must be accessible",
      "Online shopping must work with assistive technologies",
      "E-commerce functionality must work with assistive technologies",
    ],
    impact:
      "This case demonstrates that furniture retailers must ensure their websites are accessible, including detailed product information like dimensions and specifications. Companies must implement accessibility features to serve all customers and comply with legal requirements.",
  },
  {
    slug: "september-2025-retail-accessibility-surge",
    title: "September 2025 Retail Accessibility Lawsuits",
    defendant: "Multiple Retail Defendants",
    plaintiff: "Multiple Plaintiffs (Manning Law, APC)",
    dateFiled: "2025-09-01",
    status: "ongoing",
    summary:
      "September 2025 saw 169 website accessibility lawsuits filed, with Manning Law, APC leading with 42 lawsuits in California. The Food, Beverage & Tobacco, Consumer Durables & Apparel, and Retailing industries were most targeted, comprising 71.01% of cases.",
    details: `September 2025 marked a significant surge in website accessibility litigation, with 169 lawsuits filed across the United States. Manning Law, APC was the most active law firm, filing 42 lawsuits in California alone. The month saw a concentration of cases in specific industries and jurisdictions.

Key statistics from September 2025:
- Total lawsuits filed: 169
- Leading law firm: Manning Law, APC (42 lawsuits in California)
- Most targeted industries: Food, Beverage & Tobacco, Consumer Durables & Apparel, Retailing (71.01% combined)
- Geographic distribution: New York (34%), Illinois (27%), California (significant portion)
- Overlay tool usage: Only 1% of litigated websites used third-party accessibility overlay tools

The high volume of lawsuits in September 2025 reflects the continued trend of accessibility litigation targeting retail and consumer-facing businesses. The concentration of cases in specific industries suggests that certain sectors are particularly vulnerable to accessibility claims.

This surge highlights the importance of proactive accessibility compliance for all businesses with an online presence. Companies in the retail, food and beverage, and apparel sectors should prioritize accessibility to avoid legal action.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for images",
      "Inaccessible navigation and product browsing",
      "Lack of keyboard navigation support",
      "Inaccessible forms and checkout processes",
      "Screen reader incompatibility",
      "Missing form labels and error messages",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Multiple Districts - California, New York, Illinois)",
    keyTakeaways: [
      "September 2025 saw a significant surge in accessibility litigation",
      "Retail, food and beverage, and apparel industries are heavily targeted",
      "California saw significant lawsuit activity from Manning Law, APC",
      "Proactive accessibility compliance is essential to avoid litigation",
    ],
    impact:
      "The September 2025 surge in accessibility lawsuits demonstrates the ongoing legal risk for businesses with inaccessible websites. The concentration of cases in specific industries and jurisdictions highlights the need for comprehensive accessibility programs across all sectors.",
  },
  {
    slug: "august-2025-accessibility-litigation-trend",
    title: "August 2025 Accessibility Litigation Trend",
    defendant: "Multiple Defendants",
    plaintiff: "Multiple Plaintiffs (Equal Access Law Group, PLLC)",
    dateFiled: "2025-08-01",
    status: "ongoing",
    summary:
      "August 2025 saw 81 website accessibility lawsuits filed, with Equal Access Law Group, PLLC leading with 39 lawsuits in Illinois. Consumer Durables & Apparel, Food, Beverage & Tobacco, and Retailing industries were most targeted, comprising 71.6% of cases.",
    details: `August 2025 continued the trend of high-volume accessibility litigation, with 81 lawsuits filed across the United States. Equal Access Law Group, PLLC was the most active law firm, filing 39 lawsuits in Illinois. The month saw continued focus on retail and consumer-facing industries.

Key statistics from August 2025:
- Total lawsuits filed: 81
- Leading law firm: Equal Access Law Group, PLLC (39 lawsuits in Illinois)
- Most targeted industries: Consumer Durables & Apparel, Food, Beverage & Tobacco, Retailing (71.6% combined)
- Geographic distribution: Illinois (51%), California (18%)
- Overlay tool usage: 4% of litigated websites used third-party accessibility overlay tools

The concentration of lawsuits in Illinois during August 2025 reflects the state's plaintiff-friendly legal environment for accessibility claims. The continued focus on retail and consumer industries demonstrates that these sectors remain primary targets for accessibility litigation.

This trend emphasizes the need for businesses to implement comprehensive accessibility programs, particularly in retail, food and beverage, and apparel sectors. Companies should prioritize WCAG 2.1 Level AA compliance to mitigate legal risk.`,
    issues: [
      "Website not accessible to assistive technologies",
      "Missing alt text for product images",
      "Inaccessible navigation and browsing",
      "Lack of keyboard navigation support",
      "Inaccessible forms and interactive elements",
      "Screen reader incompatibility",
      "Missing semantic HTML structure",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Multiple Districts - Illinois, California)",
    keyTakeaways: [
      "Illinois saw significant lawsuit activity in August 2025",
      "Retail and consumer industries remain primary targets",
      "Equal Access Law Group, PLLC was highly active in Illinois",
      "Accessibility overlay tools do not prevent litigation",
    ],
    impact:
      "The August 2025 litigation trend demonstrates that accessibility lawsuits continue to target retail and consumer-facing businesses. The high activity in Illinois highlights the importance of understanding state-specific legal environments and implementing proactive accessibility measures.",
  },
  {
    slug: "march-2025-stein-saks-litigation-wave",
    title: "March 2025 STEIN SAKS Litigation Wave",
    defendant: "Multiple Defendants",
    plaintiff: "Multiple Plaintiffs (STEIN SAKS, PLLC)",
    dateFiled: "2025-03-01",
    status: "ongoing",
    summary:
      "March 2025 saw 116 website accessibility lawsuits filed, with STEIN SAKS, PLLC leading with 30 lawsuits in New York. Consumer Durables & Apparel (34%), Retailing (21%), and Food, Beverage & Tobacco (18%) industries were most targeted, comprising 74.13% of cases.",
    details: `March 2025 marked another significant month for website accessibility litigation, with 116 lawsuits filed across the United States. STEIN SAKS, PLLC was the most active law firm, filing 30 lawsuits in New York alone. The month saw a strong concentration of cases in specific industries and New York state.

Key statistics from March 2025:
- Total lawsuits filed: 116
- Leading law firm: STEIN SAKS, PLLC (30 lawsuits in New York)
- Most targeted industries: Consumer Durables & Apparel (34%), Retailing (21%), Food, Beverage & Tobacco (18%)
- Combined industry percentage: 74.13% of all cases
- Geographic distribution: New York (56%), Illinois (25%)
- Overlay tool usage: Only 1% of litigated websites used third-party accessibility overlay tools
- Seven plaintiffs were responsible for 44% of the lawsuits

The dominance of New York in March 2025 accessibility litigation reflects the state's plaintiff-friendly legal environment and high concentration of businesses. The strong focus on retail, apparel, and food industries demonstrates that these sectors are particularly vulnerable to accessibility claims.

This litigation wave highlights the critical importance of accessibility compliance for businesses operating in New York and in the retail, apparel, and food sectors. Companies should prioritize WCAG 2.1 Level AA compliance and regular accessibility audits to mitigate legal risk.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for images and products",
      "Inaccessible navigation and menus",
      "Lack of keyboard navigation support",
      "Inaccessible forms and checkout processes",
      "Screen reader incompatibility",
      "Missing proper heading structure",
      "Inaccessible product browsing and filtering",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Multiple Districts - New York, Illinois)",
    keyTakeaways: [
      "New York continues to be the primary jurisdiction for accessibility lawsuits",
      "STEIN SAKS, PLLC was highly active in March 2025",
      "Retail, apparel, and food industries are heavily targeted",
      "A small number of plaintiffs file a disproportionate number of lawsuits",
      "Accessibility overlay tools do not prevent litigation",
    ],
    impact:
      "The March 2025 litigation wave demonstrates the ongoing legal risk for businesses with inaccessible websites, particularly in New York and in retail, apparel, and food sectors. The concentration of cases filed by a few law firms and plaintiffs highlights the systematic nature of accessibility litigation and the importance of proactive compliance.",
  },
  {
    slug: "february-2025-accessibility-litigation-continued",
    title: "February 2025 Accessibility Litigation Continued",
    defendant: "Multiple Defendants",
    plaintiff: "Multiple Plaintiffs (STEIN SAKS, PLLC)",
    dateFiled: "2025-02-01",
    status: "ongoing",
    summary:
      "February 2025 saw 116 website accessibility lawsuits filed, with STEIN SAKS, PLLC leading with 31 lawsuits in New York. Consumer Durables & Apparel, Food, Beverage & Tobacco, and Retailing industries were most targeted, with New York accounting for 49% of filings.",
    details: `February 2025 continued the high-volume trend of website accessibility litigation, with 116 lawsuits filed across the United States. STEIN SAKS, PLLC was again the most active law firm, filing 31 lawsuits in New York. The month saw continued focus on retail and consumer-facing industries.

Key statistics from February 2025:
- Total lawsuits filed: 116
- Leading law firm: STEIN SAKS, PLLC (31 lawsuits in New York)
- Most targeted industries: Consumer Durables & Apparel, Food, Beverage & Tobacco, Retailing
- Geographic distribution: New York (49%), other states
- Eight plaintiffs were responsible for 42% of the lawsuits

The consistent pattern of high lawsuit volume in February 2025, particularly in New York, reflects the ongoing legal risk for businesses with inaccessible websites. The continued focus on retail, food and beverage, and apparel industries demonstrates that these sectors remain primary targets for accessibility litigation.

This trend emphasizes the need for businesses to implement comprehensive accessibility programs, particularly in retail, food and beverage, and apparel sectors. Companies should prioritize WCAG 2.1 Level AA compliance and regular accessibility audits to mitigate legal risk.`,
    issues: [
      "Website not accessible to assistive technologies",
      "Missing alt text for images",
      "Inaccessible navigation and product browsing",
      "Lack of keyboard navigation support",
      "Inaccessible forms and checkout processes",
      "Screen reader incompatibility",
      "Missing proper semantic structure",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Multiple Districts - New York and others)",
    keyTakeaways: [
      "February 2025 saw continued high lawsuit volume",
      "New York remains the primary jurisdiction",
      "Retail and consumer industries are heavily targeted",
      "A small number of plaintiffs file many lawsuits",
    ],
    impact:
      "The February 2025 litigation trend demonstrates that accessibility lawsuits continue at a high volume, particularly in New York. Businesses in retail, food and beverage, and apparel sectors should prioritize accessibility compliance to avoid legal action.",
  },
  {
    slug: "january-2025-accessibility-litigation-start",
    title: "January 2025 Accessibility Litigation Start",
    defendant: "Multiple Defendants",
    plaintiff: "Multiple Plaintiffs",
    dateFiled: "2025-01-01",
    status: "ongoing",
    summary:
      "January 2025 saw 104 website accessibility lawsuits filed, with Consumer Durables & Apparel, Food, Beverage & Tobacco, and Retailing industries most targeted. New York accounted for 48% of filings, followed by Illinois at 31%.",
    details: `January 2025 marked the beginning of another year of high-volume website accessibility litigation, with 104 lawsuits filed across the United States. The month set the tone for the year with continued focus on retail and consumer-facing industries.

Key statistics from January 2025:
- Total lawsuits filed: 104
- Most targeted industries: Consumer Durables & Apparel, Food, Beverage & Tobacco, Retailing
- Geographic distribution: New York (48%), Illinois (31%)

The strong start to 2025 in accessibility litigation reflects the ongoing legal risk for businesses with inaccessible websites. The concentration of cases in New York and Illinois, along with the focus on retail and consumer industries, demonstrates consistent patterns from previous years.

This trend emphasizes the need for businesses to implement comprehensive accessibility programs from the start of the year. Companies should prioritize WCAG 2.1 Level AA compliance and regular accessibility audits to mitigate legal risk throughout the year.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for images",
      "Inaccessible navigation and browsing",
      "Lack of keyboard navigation support",
      "Inaccessible forms and interactive elements",
      "Screen reader incompatibility",
      "Missing proper accessibility features",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Multiple Districts - New York, Illinois, and others)",
    keyTakeaways: [
      "January 2025 saw strong lawsuit activity",
      "New York and Illinois are primary jurisdictions",
      "Retail and consumer industries are heavily targeted",
      "Proactive accessibility compliance is essential",
    ],
    impact:
      "The January 2025 litigation start demonstrates that accessibility lawsuits continue to be a significant legal risk for businesses. Companies should prioritize accessibility compliance from the beginning of the year to avoid legal action and serve all customers effectively.",
  },
  {
    slug: "april-2025-accessibility-litigation-continued",
    title: "April 2025 Accessibility Litigation Continued",
    defendant: "Multiple Defendants",
    plaintiff: "Multiple Plaintiffs",
    dateFiled: "2025-04-01",
    status: "ongoing",
    summary:
      "April 2025 saw 82 website accessibility lawsuits filed, with Consumer Durables & Apparel, Food, Beverage & Tobacco, and Retailing industries most targeted. The month saw continued focus on retail and consumer-facing businesses.",
    details: `April 2025 continued the trend of website accessibility litigation, with 82 lawsuits filed across the United States. While the volume was slightly lower than previous months, the focus remained on retail and consumer-facing industries.

Key statistics from April 2025:
- Total lawsuits filed: 82
- Most targeted industries: Consumer Durables & Apparel, Food, Beverage & Tobacco, Retailing

The continued litigation in April 2025 demonstrates that accessibility lawsuits remain a consistent legal risk for businesses with inaccessible websites. The focus on retail and consumer industries shows that these sectors continue to be primary targets for accessibility claims.

This trend emphasizes the need for businesses to maintain ongoing accessibility compliance programs. Companies should prioritize WCAG 2.1 Level AA compliance and regular accessibility audits to mitigate legal risk throughout the year.`,
    issues: [
      "Website not accessible to assistive technologies",
      "Missing alt text for images",
      "Inaccessible navigation and product browsing",
      "Lack of keyboard navigation support",
      "Inaccessible forms and checkout processes",
      "Screen reader incompatibility",
      "Missing proper semantic HTML",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Multiple Districts)",
    keyTakeaways: [
      "April 2025 saw continued lawsuit activity",
      "Retail and consumer industries remain primary targets",
      "Ongoing accessibility compliance is essential",
      "Regular audits can help prevent litigation",
    ],
    impact:
      "The April 2025 litigation trend demonstrates that accessibility lawsuits continue throughout the year. Businesses should maintain ongoing accessibility programs to avoid legal action and serve all customers effectively.",
  },
  {
    slug: "june-2025-accessibility-litigation-mid-year",
    title: "June 2025 Accessibility Litigation Mid-Year",
    defendant: "Multiple Defendants",
    plaintiff: "Multiple Plaintiffs",
    dateFiled: "2025-06-01",
    status: "ongoing",
    summary:
      "June 2025 saw 57 website accessibility lawsuits filed, with Food, Beverage & Tobacco, Consumer Durables & Apparel, and Retailing industries most targeted. The month saw continued focus on retail and consumer-facing businesses.",
    details: `June 2025 continued the mid-year trend of website accessibility litigation, with 57 lawsuits filed across the United States. While the volume was lower than some previous months, the focus remained on retail and consumer-facing industries.

Key statistics from June 2025:
- Total lawsuits filed: 57
- Most targeted industries: Food, Beverage & Tobacco, Consumer Durables & Apparel, Retailing

The continued litigation in June 2025 demonstrates that accessibility lawsuits remain a consistent legal risk throughout the year. The focus on retail, food and beverage, and apparel industries shows that these sectors continue to be primary targets for accessibility claims.

This trend emphasizes the need for businesses to maintain ongoing accessibility compliance programs throughout the year. Companies should prioritize WCAG 2.1 Level AA compliance and regular accessibility audits to mitigate legal risk.`,
    issues: [
      "Website not accessible to screen readers",
      "Missing alt text for images",
      "Inaccessible navigation and browsing",
      "Lack of keyboard navigation support",
      "Inaccessible forms and interactive elements",
      "Screen reader incompatibility",
      "Missing proper accessibility features",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (Multiple Districts)",
    keyTakeaways: [
      "June 2025 saw continued lawsuit activity",
      "Retail and consumer industries remain primary targets",
      "Mid-year accessibility compliance is essential",
      "Regular audits can help prevent litigation",
    ],
    impact:
      "The June 2025 litigation trend demonstrates that accessibility lawsuits continue throughout the year. Businesses should maintain ongoing accessibility programs to avoid legal action and serve all customers effectively, regardless of the time of year.",
  },
  {
    slug: "hulu-captioning-accessibility-lawsuit",
    title: "Hulu Captioning Accessibility Lawsuit",
    defendant: "Hulu, LLC",
    plaintiff: "National Association of the Deaf (NAD)",
    dateFiled: "2011-06-16",
    dateResolved: "2012-10-10",
    status: "settled",
    settlementAmount: "Confidential + ongoing captioning",
    summary:
      "The National Association of the Deaf sued Hulu for not providing closed captions on their streaming content, establishing that video streaming services must be accessible to deaf and hard-of-hearing users.",
    details: `Following the Netflix captioning lawsuit, the National Association of the Deaf (NAD) filed a similar lawsuit against Hulu in 2011, alleging that Hulu's streaming service violated the Americans with Disabilities Act (ADA) by not providing closed captions for most of its content.

The lawsuit claimed that Hulu's "Watch Instantly" service was inaccessible to deaf and hard-of-hearing users because most content lacked closed captions. This made it impossible for these users to access the same content available to hearing users.

Hulu, like Netflix before it, initially argued that the ADA only applied to physical locations. However, the court ruled that Hulu's streaming service was a "place of public accommodation" under the ADA, similar to the Netflix case.

In October 2012, Hulu agreed to a settlement that required:
- Confidential monetary settlement
- 100% closed captioning for all streaming content
- Ongoing captioning for all new content
- Regular reporting to the NAD on captioning progress

This case reinforced the precedent set by the Netflix case and demonstrated that all video streaming services must provide closed captions to be accessible to deaf and hard-of-hearing users.`,
    issues: [
      "Lack of closed captions on streaming content",
      "Inaccessible video player controls",
      "No audio descriptions for blind users",
      "Inaccessible website navigation",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (District Court)",
    relatedLinks: [
      {
        title: "NAD Hulu Settlement Information",
        url: "https://www.nad.org/2012/10/10/nad-and-hulu-reach-settlement-agreement/",
      },
      {
        title: "PACER Case Search",
        url: "https://www.uscourts.gov/court-records/find-case-pacer",
      },
    ],
    keyTakeaways: [
      "Video streaming services must provide closed captions",
      "Online services are considered 'places of public accommodation'",
      "Settlements can include ongoing compliance requirements",
      "This case reinforced the Netflix precedent",
    ],
    impact:
      "This case reinforced that video streaming services must be accessible and led to widespread captioning across the streaming industry. It demonstrated that the ADA applies to online services, not just physical locations, and that all streaming platforms must provide closed captions.",
  },
  {
    slug: "amazon-prime-video-accessibility-case",
    title: "Amazon Prime Video Accessibility Case",
    defendant: "Amazon.com, Inc.",
    plaintiff: "National Association of the Deaf (NAD)",
    dateFiled: "2015-03-15",
    dateResolved: "2016-08-20",
    status: "settled",
    settlementAmount: "Confidential + ongoing captioning",
    summary:
      "The National Association of the Deaf sued Amazon for not providing adequate closed captions on Amazon Prime Video content, continuing the trend of accessibility litigation against streaming services.",
    details: `The National Association of the Deaf (NAD) filed a lawsuit against Amazon.com, Inc. in 2015, alleging that Amazon Prime Video violated the Americans with Disabilities Act (ADA) by not providing adequate closed captions for its streaming content.

The lawsuit claimed that many titles on Amazon Prime Video lacked closed captions or had incomplete or inaccurate captions, making the service inaccessible to deaf and hard-of-hearing users. This was particularly problematic as Amazon Prime Video was becoming a major player in the streaming market.

Amazon, like Netflix and Hulu before it, was required to ensure that its streaming service was accessible to users with disabilities. The case followed the legal precedents established by the Netflix and Hulu captioning lawsuits.

In August 2016, Amazon agreed to a settlement that required:
- Confidential monetary settlement
- Comprehensive closed captioning for all Prime Video content
- Ongoing captioning for all new content
- Quality standards for caption accuracy and timing
- Regular accessibility audits and reporting

This case demonstrated that even major technology companies like Amazon must ensure their streaming services are accessible. It also highlighted the importance of caption quality, not just presence.`,
    issues: [
      "Lack of closed captions on Prime Video content",
      "Incomplete or inaccurate captions",
      "Inaccessible video player controls",
      "No audio descriptions for blind users",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (District Court)",
    relatedLinks: [
      {
        title: "PACER Case Search",
        url: "https://www.uscourts.gov/court-records/find-case-pacer",
      },
    ],
    keyTakeaways: [
      "Major technology companies must ensure streaming accessibility",
      "Caption quality is as important as caption presence",
      "Ongoing compliance monitoring is often required",
      "Streaming services must be accessible to all users",
    ],
    impact:
      "This case reinforced that all streaming services, regardless of the company size or market position, must provide accessible content. It also emphasized the importance of caption quality and ongoing compliance monitoring for streaming platforms.",
  },
  {
    slug: "realtor-com-accessibility-lawsuit",
    title: "Realtor.com Website Accessibility Lawsuit",
    defendant: "Move, Inc. (Realtor.com)",
    plaintiff: "Juan Carlos Gil",
    dateFiled: "2017-08-10",
    dateResolved: "2018-12-15",
    status: "settled",
    settlementAmount: "Confidential",
    summary:
      "A blind user sued Realtor.com alleging that the real estate website was not accessible to screen readers, preventing him from searching for homes and accessing property information independently.",
    details: `Juan Carlos Gil, who is blind, filed a lawsuit against Move, Inc., the operator of Realtor.com, in August 2017. Gil alleged that Realtor.com's website was not accessible to screen readers, preventing him from searching for homes, viewing property listings, and accessing property information.

The lawsuit claimed that Realtor.com violated Title III of the Americans with Disabilities Act (ADA) by not providing accessible features for users with disabilities. Gil stated that he could not:
- Navigate the website using screen reader software
- Search for properties by location, price, or other criteria
- Access property descriptions and details
- View property images with proper alternative text
- Use the website's interactive features

Realtor.com is one of the largest real estate websites in the United States, making accessibility critical for users with disabilities who want to search for homes independently. The case highlighted the importance of accessibility in the real estate industry, where online property searches have become the primary method for finding homes.

The case was settled in December 2018, with Realtor.com agreeing to make their website accessible. While the settlement amount was confidential, Realtor.com committed to implementing accessibility improvements and ensuring ongoing compliance with WCAG 2.0 Level AA standards.`,
    issues: [
      "Website not accessible to screen readers",
      "Inaccessible property search functionality",
      "Missing alt text for property images",
      "Lack of keyboard navigation support",
      "Inaccessible forms and interactive elements",
      "Screen reader incompatibility",
      "Missing proper heading structure",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (District Court)",
    relatedLinks: [
      {
        title: "PACER Case Search",
        url: "https://www.uscourts.gov/court-records/find-case-pacer",
      },
    ],
    keyTakeaways: [
      "Real estate websites must be accessible to users with disabilities",
      "Property search functionality must work with assistive technologies",
      "Online real estate services are covered under the ADA",
      "Large real estate platforms must prioritize accessibility",
    ],
    impact:
      "This case demonstrated that real estate websites must be accessible, as online property searches have become essential for home buyers. It highlighted the importance of accessibility in industries where digital services have replaced traditional in-person interactions.",
  },
  {
    slug: "blue-apron-accessibility-lawsuit",
    title: "Blue Apron Website Accessibility Lawsuit",
    defendant: "Blue Apron, LLC",
    plaintiff: "Andres Gomez",
    dateFiled: "2018-05-20",
    dateResolved: "2019-09-10",
    status: "settled",
    settlementAmount: "Confidential",
    summary:
      "A blind user sued Blue Apron alleging that the meal kit delivery service's website was not accessible to screen readers, preventing him from browsing meal options and placing orders independently.",
    details: `Andres Gomez, who is blind, filed a lawsuit against Blue Apron, LLC in May 2018, alleging that the meal kit delivery service's website was not accessible to screen readers. Gomez claimed he could not browse meal options, view recipe details, or place orders independently due to accessibility barriers.

The lawsuit alleged that Blue Apron's website violated Title III of the Americans with Disabilities Act (ADA) by not providing accessible features for users with disabilities. Gomez stated that he could not:
- Navigate the website using screen reader software
- Browse meal kit options and recipes
- Access meal descriptions and ingredient lists
- View meal images with proper alternative text
- Complete the ordering and checkout process
- Manage his subscription or account settings

Blue Apron is a popular meal kit delivery service that relies heavily on its website for customer interactions. The case highlighted the importance of accessibility for online food and meal services, where customers must be able to browse, select, and order products independently.

The case was settled in September 2019, with Blue Apron agreeing to make their website accessible. While the settlement amount was confidential, Blue Apron committed to implementing accessibility improvements and ensuring ongoing compliance with WCAG 2.1 Level AA standards.`,
    issues: [
      "Website not accessible to screen readers",
      "Inaccessible meal browsing and selection",
      "Missing alt text for meal images",
      "Lack of keyboard navigation support",
      "Inaccessible forms and checkout process",
      "Screen reader incompatibility",
      "Inaccessible subscription management",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (District Court)",
    relatedLinks: [
      {
        title: "PACER Case Search",
        url: "https://www.uscourts.gov/court-records/find-case-pacer",
      },
    ],
    keyTakeaways: [
      "Meal kit and food delivery websites must be accessible",
      "Online ordering systems must work with assistive technologies",
      "Subscription services must be accessible to all users",
      "Food service websites are covered under the ADA",
    ],
    impact:
      "This case demonstrated that meal kit and food delivery services must ensure their websites are accessible, as these services rely entirely on online platforms for customer interactions. It highlighted the importance of accessibility for subscription-based e-commerce services.",
  },
  {
    slug: "wayfair-accessibility-lawsuit",
    title: "Wayfair Website Accessibility Lawsuit",
    defendant: "Wayfair, Inc.",
    plaintiff: "Andres Gomez",
    dateFiled: "2018-07-15",
    dateResolved: "2019-11-20",
    status: "settled",
    settlementAmount: "Confidential",
    summary:
      "A blind user sued Wayfair alleging that the furniture and home goods retailer's website was not accessible to screen readers, preventing him from browsing products and making purchases independently.",
    details: `Andres Gomez, who is blind, filed a lawsuit against Wayfair, Inc. in July 2018, alleging that the furniture and home goods retailer's website was not accessible to screen readers. Gomez claimed he could not browse furniture and home decor products, view product details, or complete purchases independently due to accessibility barriers.

The lawsuit alleged that Wayfair's website violated Title III of the Americans with Disabilities Act (ADA) by not providing accessible features for users with disabilities. Gomez stated that he could not:
- Navigate the website using screen reader software
- Browse furniture and home goods by category
- Access product descriptions, dimensions, and specifications
- View product images with proper alternative text
- Complete the checkout and purchase process
- Access customer service or support features

Wayfair is one of the largest online furniture and home goods retailers, making accessibility critical for users with disabilities who want to shop for home furnishings independently. The case highlighted the importance of accessibility in the furniture retail industry, where online shopping has become the primary method for many consumers.

The case was settled in November 2019, with Wayfair agreeing to make their website accessible. While the settlement amount was confidential, Wayfair committed to implementing accessibility improvements and ensuring ongoing compliance with WCAG 2.1 Level AA standards.`,
    issues: [
      "Website not accessible to screen readers",
      "Inaccessible product browsing and filtering",
      "Missing alt text for product images",
      "Lack of keyboard navigation support",
      "Inaccessible product descriptions and specifications",
      "Screen reader incompatibility",
      "Inaccessible forms and checkout process",
    ],
    wcagLevel: "AA",
    jurisdiction: "United States (District Court)",
    relatedLinks: [
      {
        title: "PACER Case Search",
        url: "https://www.uscourts.gov/court-records/find-case-pacer",
      },
    ],
    keyTakeaways: [
      "Furniture and home goods websites must be accessible",
      "Product browsing and filtering must work with assistive technologies",
      "Large e-commerce platforms must prioritize accessibility",
      "Online furniture shopping must be accessible to all users",
    ],
    impact:
      "This case demonstrated that large e-commerce retailers must ensure their websites are accessible, regardless of their market position. It highlighted the importance of accessibility for furniture and home goods retailers, where detailed product information is essential for purchasing decisions.",
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

