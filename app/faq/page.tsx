import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Shield,
  Code,
  FileText,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG FAQ - 100+ Frequently Asked Accessibility Questions | TheWCAG",
  description:
    "Comprehensive FAQ covering WCAG compliance, ADA requirements, ARIA, keyboard navigation, color contrast, alt text, testing tools, and more. Expert answers to accessibility questions.",
  openGraph: {
    title: "WCAG FAQ - 100+ Frequently Asked Accessibility Questions",
    description:
      "Comprehensive FAQ covering WCAG compliance, ADA requirements, ARIA, keyboard navigation, color contrast, alt text, testing tools, and more. Expert answers to accessibility questions.",
    url: "https://thewcag.com/faq",
    type: "website",
  },
}

export default function FAQPage() {
  const faqs = [
    {
      category: "WCAG Basics",
      questions: [
        {
          q: "What is WCAG?",
          a: "WCAG (Web Content Accessibility Guidelines) is a set of international standards developed by the W3C to make web content accessible to people with disabilities. WCAG 2.2 is the latest version, providing guidelines organized into four principles: Perceivable, Operable, Understandable, and Robust (POUR).",
        },
        {
          q: "What are the WCAG compliance levels?",
          a: "WCAG has three compliance levels: Level A (minimum), Level AA (recommended for most websites), and Level AAA (highest). Most organizations aim for Level AA compliance, which balances accessibility improvements with practical implementation.",
        },
        {
          q: "What's the difference between WCAG 2.1 and WCAG 2.2?",
          a: "WCAG 2.2 builds upon WCAG 2.1 by adding 9 new success criteria, particularly for mobile accessibility, low vision users, and users with cognitive disabilities. WCAG 2.2 maintains backward compatibility with 2.1, meaning if you meet 2.2, you also meet 2.1.",
        },
        {
          q: "Which WCAG version should I follow?",
          a: "W3C encourages using the latest version, WCAG 2.2. However, WCAG 2.2 does not deprecate WCAG 2.1 or 2.0 - they all remain existing standards. Most legislation currently references WCAG 2.1 Level AA as the expected standard.",
        },
        {
          q: "What are the four POUR principles?",
          a: "POUR stands for: Perceivable (information must be presentable to users in ways they can perceive), Operable (interface components must be operable), Understandable (information and operation must be understandable), and Robust (content must be robust enough for assistive technologies).",
        },
        {
          q: "What is WCAG 3.0?",
          a: "WCAG 3.0 (previously called Silver) is a future version still in development. It will use a different conformance model and testing approach. However, it's not yet ready for implementation - continue using WCAG 2.2 for now.",
        },
        {
          q: "Does WCAG apply to mobile apps?",
          a: "While WCAG was originally written for web content, many success criteria apply to mobile apps. For native mobile apps, follow platform-specific guidelines (iOS Accessibility Guidelines, Android Accessibility) which align with WCAG principles.",
        },
      ],
    },
    {
      category: "Legal & Compliance",
      questions: [
        {
          q: "Is WCAG compliance required by law?",
          a: "WCAG itself is not a law, but many countries have incorporated WCAG standards into their legal frameworks. In the US, ADA and Section 508 reference WCAG. In the EU, EN 301 549 requires WCAG compliance. Many jurisdictions require WCAG 2.0 or 2.1 Level AA compliance.",
        },
        {
          q: "What happens if my website isn't WCAG compliant?",
          a: "Non-compliance can result in legal action (lawsuits under ADA, Section 508, etc.), loss of customers, exclusion from government contracts, reputational damage, and missed business opportunities. Many organizations face accessibility lawsuits each year.",
        },
        {
          q: "Do accessibility overlays make websites compliant?",
          a: "No. Accessibility overlays are controversial and often don't provide true compliance. Many accessibility experts recommend fixing issues at the code level rather than relying on overlay widgets, as overlays may not work with all assistive technologies and can create additional barriers.",
        },
        {
          q: "What is Section 508?",
          a: "Section 508 is a US federal law requiring government agencies to make their electronic and information technology accessible. It references WCAG 2.0 Level AA as the technical standard. Organizations doing business with the government must comply.",
        },
        {
          q: "What is the ADA and how does it relate to websites?",
          a: "The Americans with Disabilities Act (ADA) prohibits discrimination against people with disabilities. While it doesn't explicitly mention websites, courts have ruled that websites are places of public accommodation and must be accessible. The DOJ recommends following WCAG 2.1 Level AA.",
        },
        {
          q: "When does the new ADA web accessibility rule take effect?",
          a: "State and local governments must comply by April 2026 or April 2027 (depending on population size) with the new rule published April 24, 2024, requiring web content and mobile apps meet WCAG 2.1 Level AA.",
        },
        {
          q: "What is the AODA?",
          a: "The Accessibility for Ontarians with Disabilities Act (AODA) is Ontario's accessibility law requiring organizations to meet accessibility standards. The web standard requires WCAG 2.0 Level AA compliance for public sector and large private sector organizations.",
        },
        {
          q: "What is EN 301 549?",
          a: "EN 301 549 is the European accessibility standard for ICT products and services. It incorporates WCAG 2.1 Level AA and applies to public sector websites and mobile apps under the European Accessibility Act.",
        },
        {
          q: "Can I be sued for accessibility issues?",
          a: "Yes. Accessibility lawsuits have increased significantly, particularly under ADA Title III. High-profile companies and small businesses alike face legal action. Proactive accessibility compliance reduces legal risk.",
        },
        {
          q: "Do I need an accessibility statement?",
          a: "While not always legally required, an accessibility statement is highly recommended. It demonstrates commitment, provides contact information for reporting issues, lists known limitations, and can show good faith compliance efforts.",
        },
      ],
    },
    {
      category: "Testing & Implementation",
      questions: [
        {
          q: "How do I test my website for WCAG compliance?",
          a: "Testing involves both automated tools (like axe DevTools, WAVE, Lighthouse) and manual testing (keyboard navigation, screen reader testing). A comprehensive approach includes automated scans, manual testing with assistive technologies, and user testing with people with disabilities.",
        },
        {
          q: "What percentage of accessibility issues can automated tools find?",
          a: "Automated testing tools can detect approximately 25-30% of WCAG issues at best. Manual testing is essential for the remaining 70-75% of potential accessibility barriers. Automated tools are a starting point, not a complete solution.",
        },
        {
          q: "How long does it take to make a website WCAG compliant?",
          a: "The time varies significantly based on website size, complexity, and current accessibility state. A small website might take weeks, while a large enterprise site could take months. It's best to integrate accessibility from the start of development rather than retrofitting.",
        },
        {
          q: "How often should I audit my website for accessibility?",
          a: "Regular audits are essential. Conduct automated scans regularly (weekly or monthly), manual testing quarterly, and comprehensive audits annually or when making major changes. Accessibility should be part of your continuous development process, not a one-time check.",
        },
        {
          q: "What are the most common WCAG violations?",
          a: "Common violations include: missing alt text, insufficient color contrast, missing form labels, keyboard navigation issues, missing focus indicators, improper heading hierarchy, missing ARIA labels, and inaccessible PDFs. Most can be fixed with proper HTML semantics and CSS.",
        },
        {
          q: "What testing tools should I use?",
          a: "Recommended tools include: axe DevTools (browser extension), WAVE (web accessibility evaluation tool), Lighthouse (Chrome DevTools), Pa11y (automated testing), screen readers (NVDA, JAWS, VoiceOver), and color contrast checkers.",
        },
        {
          q: "Should I test with real users with disabilities?",
          a: "Yes. While automated and manual testing are essential, nothing replaces testing with actual users who rely on assistive technologies. Their feedback reveals real-world barriers and usability issues you might miss.",
        },
        {
          q: "When should accessibility testing happen in development?",
          a: "Accessibility testing should happen throughout the development lifecycle: during design (review mockups), during development (component testing), during QA (comprehensive testing), and post-launch (ongoing monitoring). Shift-left testing catches issues early when they're cheaper to fix.",
        },
        {
          q: "What is a VPAT and do I need one?",
          a: "A VPAT (Voluntary Product Accessibility Template) is a document showing how your product conforms to accessibility standards like WCAG and Section 508. Government contractors and enterprise software vendors often need VPATs for procurement.",
        },
        {
          q: "How do I prioritize accessibility fixes?",
          a: "Prioritize by: severity (Level A violations first), impact (number of users affected), frequency (issues appearing on multiple pages), and legal risk. Focus on barriers that completely block access before enhancement issues.",
        },
      ],
    },
    {
      category: "Color & Contrast",
      questions: [
        {
          q: "What is the minimum color contrast ratio for WCAG?",
          a: "For Level AA: 4.5:1 for normal text and 3:1 for large text (18pt+ or 14pt+ bold). For Level AAA: 7:1 for normal text and 4.5:1 for large text. These ratios ensure text is readable for users with low vision.",
        },
        {
          q: "How do I test color contrast?",
          a: "Use color contrast checker tools like WebAIM's Contrast Checker, the Colour Contrast Analyser app, or browser DevTools. Test all text against its background, including text on images, buttons, and form inputs.",
        },
        {
          q: "Do I need to meet contrast requirements for logos?",
          a: "No. Logos and brand names are exempt from WCAG contrast requirements. However, if the logo contains text that conveys essential information, consider providing that information in an accessible alternative way.",
        },
        {
          q: "What about contrast for disabled or inactive elements?",
          a: "WCAG 2.2 requires disabled form elements to have at least 3:1 contrast ratio. This helps users identify that the element exists, even if it's not currently interactive.",
        },
        {
          q: "Can I rely on color alone to convey information?",
          a: "No. WCAG 1.4.1 (Use of Color) requires that color is not the only visual means of conveying information. Always provide additional indicators like text labels, patterns, icons, or underlines for links.",
        },
        {
          q: "What is the non-text contrast requirement?",
          a: "WCAG 2.1 introduced Success Criterion 1.4.11 requiring at least 3:1 contrast for user interface components (like form borders, focus indicators) and graphical objects (like icons, charts) that are essential for understanding content.",
        },
        {
          q: "Do I need contrast for focus indicators?",
          a: "Yes. WCAG 2.2 Success Criterion 2.4.13 requires focus indicators to have at least 3:1 contrast against adjacent colors and meet minimum size requirements.",
        },
        {
          q: "How does WCAG handle gradients and background images?",
          a: "For text on gradients or images, test contrast at the point where it's lowest. If contrast varies, ensure all text meets minimum ratios. Consider using solid background overlays or text shadows to improve readability.",
        },
      ],
    },
    {
      category: "ARIA & Assistive Technologies",
      questions: [
        {
          q: "What is ARIA and when should I use it?",
          a: "ARIA (Accessible Rich Internet Applications) is a set of attributes that enhance HTML for assistive technologies. Use ARIA when semantic HTML isn't sufficient, such as for custom widgets, dynamic content, or complex interactions. However, prefer semantic HTML over ARIA when possible.",
        },
        {
          q: "What is aria-label and how should I use it?",
          a: "aria-label provides a text label for objects that screen readers announce. Use it when you have non-textual indication of an element's purpose (like icon buttons) but still need to provide text alternatives for assistive technologies. Avoid overusing it - prefer visible text when possible.",
        },
        {
          q: "What's the difference between aria-label and aria-labelledby?",
          a: "aria-label provides a string value as the label. aria-labelledby references the ID(s) of other elements to use as the label. Use aria-labelledby when you want to reuse existing visible text; use aria-label when no visible label exists.",
        },
        {
          q: "What is aria-describedby used for?",
          a: "aria-describedby references elements that provide additional description or context. It's commonly used to associate form fields with error messages or help text. Screen readers announce the description after the element's label.",
        },
        {
          q: "What does aria-hidden='true' do?",
          a: "aria-hidden='true' removes elements from the accessibility tree, making them invisible to screen readers. Use it for decorative icons or redundant content. Never use it on focusable elements or content that conveys essential information.",
        },
        {
          q: "What is a live region?",
          a: "Live regions (aria-live) announce dynamic content changes to screen reader users without moving focus. Use aria-live='polite' for non-urgent updates, 'assertive' for important time-sensitive messages, and 'off' to disable announcements.",
        },
        {
          q: "When should I use role='button' vs a <button> element?",
          a: "Always prefer the native <button> element. Only use role='button' when you absolutely must use a different element and can't change the HTML. With role='button', you must manually add keyboard support, focus management, and other button behaviors.",
        },
        {
          q: "What are ARIA landmark roles?",
          a: "Landmark roles (banner, navigation, main, complementary, contentinfo) help screen reader users navigate page sections. HTML5 elements (<header>, <nav>, <main>, <aside>, <footer>) provide these landmarks automatically - use semantic HTML instead of explicit ARIA roles when possible.",
        },
        {
          q: "Can ARIA make my site less accessible?",
          a: "Yes. Incorrectly implemented ARIA can significantly worsen accessibility. Follow the first rule of ARIA: 'If you can use a native HTML element or attribute with the semantics and behavior you require already built in, do so instead of repurposing an element and adding ARIA.'",
        },
        {
          q: "What is the accessible name?",
          a: "The accessible name is the text screen readers announce to identify an element. It's computed from multiple sources in priority order: aria-labelledby, aria-label, native label elements, placeholder (for inputs), or text content. Understanding this computation is crucial for ARIA.",
        },
      ],
    },
    {
      category: "Keyboard Navigation",
      questions: [
        {
          q: "How do I make keyboard navigation accessible?",
          a: "Ensure all interactive elements are keyboard accessible using Tab, Enter, Space, and arrow keys. Maintain logical tab order, provide visible focus indicators, avoid keyboard traps, and implement proper focus management for modals and dynamic content. All functionality must be operable through keyboard alone.",
        },
        {
          q: "What is a keyboard trap and how do I avoid it?",
          a: "A keyboard trap occurs when keyboard focus gets stuck in a component and users can't navigate away. Avoid traps by ensuring Escape or Tab can always exit components. Intentional traps (like modals) must provide clear exit mechanisms.",
        },
        {
          q: "What is focus order and why does it matter?",
          a: "Focus order is the sequence elements receive focus when using Tab. It should follow a logical and intuitive flow, generally left to right, top to bottom. Illogical focus order confuses keyboard users and makes navigation difficult.",
        },
        {
          q: "What is a focus indicator?",
          a: "A focus indicator is the visual highlight showing which element currently has keyboard focus (typically an outline or border). WCAG 2.4.7 requires focus indicators to be visible. WCAG 2.2 adds specific size and contrast requirements.",
        },
        {
          q: "Should I remove the default focus outline?",
          a: "Never remove focus indicators (outline: none) without providing a replacement. If you don't like browser defaults, replace them with custom focus styles that meet WCAG contrast and size requirements. Focus indicators are essential for keyboard users.",
        },
        {
          q: "What is tabindex and when should I use it?",
          a: "tabindex controls focus behavior. Use tabindex='0' to make non-interactive elements focusable in natural tab order. Use tabindex='-1' to make elements programmatically focusable but not in tab order. Avoid positive values (tabindex='1', '2') as they create confusing focus order.",
        },
        {
          q: "What is roving tabindex?",
          a: "Roving tabindex is a pattern for complex widgets (like toolbars, tree views) where arrow keys navigate between items and only one item is in tab order at a time. It prevents excessive tabbing through many items.",
        },
        {
          q: "How do I handle keyboard navigation in modals?",
          a: "When a modal opens: move focus to the modal (usually the close button or first interactive element), trap focus within the modal, allow Escape to close it, and return focus to the trigger element when closed.",
        },
        {
          q: "What keyboard shortcuts should I implement?",
          a: "Common patterns: Tab (move forward), Shift+Tab (move backward), Enter and Space (activate), Escape (close/cancel), Arrow keys (navigate within widgets). Document any custom shortcuts and ensure they don't conflict with browser/screen reader shortcuts.",
        },
        {
          q: "Do I need skip links?",
          a: "Yes. Skip links (typically 'Skip to main content') allow keyboard users to bypass repetitive navigation. They should be the first focusable element on the page. They can be visually hidden until focused.",
        },
      ],
    },
    {
      category: "Forms & Input",
      questions: [
        {
          q: "How do I make forms accessible?",
          a: "Use proper <label> elements for all inputs, provide clear error messages, group related fields with <fieldset> and <legend>, ensure keyboard accessibility, indicate required fields, provide helpful instructions, and validate accessibility with screen readers.",
        },
        {
          q: "What's the best way to label form inputs?",
          a: "Use the <label> element with the for attribute matching the input's id. This creates a programmatic association screen readers recognize and makes the label clickable to focus the input. Avoid placeholder-only labels.",
        },
        {
          q: "Can I use placeholder text instead of labels?",
          a: "No. Placeholder text disappears when typing, has poor contrast, and isn't reliably announced by screen readers. Always use visible, persistent labels. Use placeholder text only for example input, not as the primary label.",
        },
        {
          q: "How should I indicate required fields?",
          a: "Mark required fields with the required attribute, provide a visible indicator (like an asterisk), and explain the indicator in text (e.g., '* indicates required field'). Don't rely on color or asterisk alone.",
        },
        {
          q: "How do I make error messages accessible?",
          a: "Display errors visibly near the field, use color plus text/icons (not color alone), associate errors with fields using aria-describedby, move focus to the first error or an error summary, and use clear, helpful language explaining how to fix issues.",
        },
        {
          q: "What is autocomplete and why is it important?",
          a: "The autocomplete attribute helps users fill forms by indicating the purpose of fields (like 'email', 'name', 'address'). WCAG 2.1 SC 1.3.5 requires autocomplete for common input purposes to help users with cognitive disabilities.",
        },
        {
          q: "How do I make custom select dropdowns accessible?",
          a: "Use native <select> when possible. For custom dropdowns, implement full keyboard support (arrow keys, type-ahead), ARIA (role='combobox', aria-expanded, aria-controls), focus management, and screen reader announcements. Test thoroughly.",
        },
        {
          q: "What about CAPTCHA accessibility?",
          a: "Traditional visual CAPTCHAs are inaccessible to blind users. Provide alternatives: audio CAPTCHAs, logic questions, or better yet, use invisible bot detection like reCAPTCHA v3 or hCaptcha that don't require user interaction.",
        },
        {
          q: "How do I make radio buttons and checkboxes accessible?",
          a: "Use <fieldset> and <legend> to group related options, provide <label> for each option, ensure keyboard navigation works (Tab to group, arrow keys between radio buttons), and use clear labels describing each choice.",
        },
        {
          q: "Should I disable the submit button until the form is valid?",
          a: "Generally no. Disabled buttons can't receive focus, so keyboard users can't discover them. Instead, keep the button enabled and show validation errors when clicked. If you must disable it, provide clear indication of what's missing.",
        },
      ],
    },
    {
      category: "Images & Graphics",
      questions: [
        {
          q: "What is alt text and when is it required?",
          a: "Alt text (alternative text) is a text description of images that screen readers announce. It's required for all informative images (Level A). Decorative images should have empty alt attributes (alt=''). Alt text should be concise, descriptive, and convey the image's purpose and content.",
        },
        {
          q: "How do I write good alt text?",
          a: "Be concise (typically under 150 characters), describe the image's purpose and content, don't start with 'image of' or 'picture of', include text that appears in the image, and consider context - what would sighted users gain from the image?",
        },
        {
          q: "When should I use empty alt text (alt='')?",
          a: "Use empty alt (alt='') for decorative images that don't convey information or add context. This tells screen readers to skip the image. Never omit the alt attribute entirely - that makes screen readers announce the filename.",
        },
        {
          q: "What about complex images like charts or diagrams?",
          a: "For complex images, provide a short alt text summarizing the image, plus a longer description nearby (in visible text, a details/summary element, or linked page). Use aria-describedby to connect the image to detailed description.",
        },
        {
          q: "Do SVGs need alt text?",
          a: "Informative SVGs should have accessible names. For simple SVGs used as images, use <title> inside the SVG or aria-label. For decorative SVGs, use aria-hidden='true' and role='presentation'. Complex SVGs may need more detailed descriptions.",
        },
        {
          q: "What if the image is just a small amount of text?",
          a: "If the image contains text, the alt text must match the text in the image exactly. Better yet, use real HTML text instead of text in images - it's more accessible, responsive, and SEO-friendly.",
        },
        {
          q: "How do I handle background images?",
          a: "CSS background images can't have alt text. If a background image is informative, provide the information in HTML text. If it's critical, consider using an <img> instead. Decorative backgrounds don't need alternatives.",
        },
        {
          q: "What about image maps?",
          a: "For client-side image maps (<map> and <area>), provide alt text for each clickable area. Each <area> should have meaningful alt text describing its destination. Consider if separate links would be clearer and more accessible.",
        },
        {
          q: "Do icons need alt text?",
          a: "Icon-only buttons need accessible names (via aria-label or visually-hidden text). Icons next to text labels should be hidden from screen readers (aria-hidden='true'). Icon fonts should use aria-hidden and be paired with text alternatives.",
        },
        {
          q: "What is the alt decision tree?",
          a: "The W3C provides an alt decision tree to help determine appropriate alt text. It asks questions about the image's purpose: Is it decorative? Does it contain text? Is it a link? Does it add information? Each path leads to the correct alt text approach.",
        },
      ],
    },
    {
      category: "Multimedia & Audio/Video",
      questions: [
        {
          q: "Do I need to provide captions for all videos?",
          a: "Yes, for Level A compliance, all pre-recorded audio content in synchronized media (videos) must have captions. For Level AA, live captions are also required for live audio content. This ensures deaf and hard-of-hearing users can access video content.",
        },
        {
          q: "What's the difference between captions and subtitles?",
          a: "Captions include all audio information (dialogue, sound effects, music) for deaf users. Subtitles typically only include dialogue and assume the viewer can hear audio. For accessibility, always provide captions, not just subtitles.",
        },
        {
          q: "Do I need transcripts in addition to captions?",
          a: "For Level A, captions OR transcripts are sufficient. However, transcripts offer additional benefits: they're searchable, accessible to deaf-blind users who can't see captions, and can be translated. Best practice is to provide both.",
        },
        {
          q: "What about audio descriptions?",
          a: "Audio descriptions provide narration of visual information for blind users. They're required at Level AA for pre-recorded videos (unless all information is already in the audio). Descriptions fit between dialogue to describe actions, settings, and visual details.",
        },
        {
          q: "How do I make video players accessible?",
          a: "Ensure all player controls are keyboard accessible, provide visible focus indicators, include captions toggle, support keyboard shortcuts, use accessible markup (proper buttons and labels), and don't auto-play videos (or provide easy pause).",
        },
        {
          q: "Are auto-playing videos allowed?",
          a: "Videos that auto-play with sound must have a mechanism to pause, stop, or control volume (WCAG 1.4.2). Better yet, don't auto-play videos - they're disorienting for screen reader users and distracting for users with cognitive disabilities.",
        },
        {
          q: "What about podcasts - do they need transcripts?",
          a: "Yes. Audio-only content (like podcasts) must provide text alternatives. Transcripts make content accessible to deaf users, searchable, and available to users who can't play audio in their current environment.",
        },
        {
          q: "How do I handle sign language interpretation?",
          a: "Sign language interpretation is a Level AAA requirement for pre-recorded audio in synchronized media. It should be clearly visible, in frame with the speaker when possible, and high enough quality to see finger spelling and facial expressions.",
        },
        {
          q: "Can I use YouTube's auto-generated captions?",
          a: "Auto-generated captions are a starting point but often contain errors. You must review and correct them for accuracy, punctuation, speaker identification, and sound effects. Uncorrected auto-captions don't meet WCAG requirements for accuracy.",
        },
        {
          q: "What format should transcripts be in?",
          a: "Transcripts should be in accessible HTML (preferred) or accessible PDF. Include speaker identification, sound effects in [brackets], and maintain logical reading order. Place transcripts near the media or provide a clear link.",
        },
      ],
    },
    {
      category: "Mobile Accessibility",
      questions: [
        {
          q: "Does mobile accessibility differ from desktop?",
          a: "While the same WCAG principles apply, mobile has specific considerations: touch target sizes (minimum 24x24px for Level AA), orientation support, gesture alternatives, and mobile screen reader compatibility. WCAG 2.2 added criteria specifically for mobile accessibility.",
        },
        {
          q: "What is the minimum touch target size?",
          a: "WCAG 2.2 Success Criterion 2.5.8 requires target sizes of at least 24x24 CSS pixels for Level AA. Level AAA requires 44x44px. This ensures users with motor impairments can accurately tap interactive elements.",
        },
        {
          q: "Do I need to support both portrait and landscape orientation?",
          a: "Yes. WCAG 2.1 SC 1.3.4 requires supporting both orientations unless a specific orientation is essential (like a piano app). Don't restrict orientation in your code - let users choose.",
        },
        {
          q: "What about gesture-based interactions?",
          a: "Complex gestures (like pinch, swipe) must have alternative single-pointer methods (WCAG 2.1 SC 2.5.1). For example, if pinch-to-zoom exists, also provide zoom buttons. Not everyone can perform complex gestures.",
        },
        {
          q: "How do I test mobile accessibility?",
          a: "Test with mobile screen readers (VoiceOver on iOS, TalkBack on Android), use browser developer tools in device mode, test on actual devices, verify touch target sizes, test with zoom enabled (up to 200%), and ensure keyboard accessibility on mobile browsers.",
        },
        {
          q: "What is reflow and why does it matter for mobile?",
          a: "Reflow (WCAG 2.1 SC 1.4.10) requires content to be viewable without horizontal scrolling at 320px width (equivalent to 400% zoom on desktop). This ensures content works on small screens and for users who need significant zoom.",
        },
        {
          q: "Should I create a separate mobile site?",
          a: "Responsive design is generally better than separate mobile sites. Responsive sites provide consistent experience across devices and are easier to maintain for accessibility. If you must create separate sites, ensure both meet WCAG requirements.",
        },
        {
          q: "How do mobile screen readers differ?",
          a: "Mobile screen readers like VoiceOver and TalkBack use touch-based navigation (swipe to move, double-tap to activate) rather than keyboard commands. They integrate with platform gestures and have different announcement patterns than desktop screen readers.",
        },
      ],
    },
    {
      category: "Content & Structure",
      questions: [
        {
          q: "Why is heading structure important?",
          a: "Proper heading hierarchy (<h1> through <h6>) provides document structure screen reader users rely on to navigate. Don't skip levels (like h2 to h4), use only one <h1> per page, and use headings for structure, not styling.",
        },
        {
          q: "Can I use <div> and <span> for everything?",
          a: "No. Use semantic HTML elements that convey meaning: <nav> for navigation, <main> for main content, <article> for articles, <button> for buttons, etc. Semantic HTML provides structure, improves accessibility, and requires less ARIA.",
        },
        {
          q: "What is reading order and why does it matter?",
          a: "Reading order is the sequence assistive technologies present content. It should match visual order. CSS can create visual layouts that don't match DOM order, confusing screen reader users. Use CSS Grid/Flexbox carefully to avoid breaking logical reading order.",
        },
        {
          q: "How do I make links accessible?",
          a: "Use descriptive link text (not 'click here' or 'read more'), ensure links are visually distinguishable (not by color alone), provide underlines or other indicators, ensure sufficient contrast, and make link purpose clear from text or context.",
        },
        {
          q: "What is link purpose and how do I make it clear?",
          a: "Link purpose is where the link goes or what it does. Users should understand link purpose from link text alone, or from link text plus surrounding context. 'Click here' fails this - 'Download 2024 Annual Report (PDF)' succeeds.",
        },
        {
          q: "Should I open links in new windows?",
          a: "Generally avoid opening links in new windows/tabs as it's disorienting. If you must, warn users beforehand (via visible text or aria-label like 'opens in new window'). Never use only a visual icon without text alternative.",
        },
        {
          q: "How do I make tables accessible?",
          a: "Use <table> for data tables only (not layout), provide <caption> describing table purpose, use <th> for headers with scope attribute, use <thead>, <tbody>, <tfoot> for structure, and keep tables simple - consider alternatives for complex data.",
        },
        {
          q: "What about lists - when should I use them?",
          a: "Use list elements (<ul>, <ol>, <dl>) for actual lists of items. Screen readers announce list presence and count, helping users navigate. Don't use lists for purely visual styling, and don't use <div> or <p> tags for list items.",
        },
        {
          q: "Do I need a <main> landmark?",
          a: "Yes. The <main> element (or role='main') identifies primary page content, allowing screen reader users to skip directly to it. Use one <main> per page. It's essential for page structure and navigation.",
        },
        {
          q: "What is the language attribute and why is it important?",
          a: "The lang attribute (<html lang='en'>) tells assistive technologies and browsers what language content is in. This ensures correct pronunciation by screen readers and proper font rendering. For multi-lingual content, use lang on specific elements too.",
        },
      ],
    },
    {
      category: "JavaScript & Dynamic Content",
      questions: [
        {
          q: "Can I use JavaScript and still be WCAG compliant?",
          a: "Yes, JavaScript is allowed in WCAG-compliant websites. However, you must ensure keyboard accessibility, proper ARIA labels, focus management, and that content is accessible without JavaScript when possible. Progressive enhancement is recommended.",
        },
        {
          q: "How do I make single-page applications (SPAs) accessible?",
          a: "SPAs require extra attention: manage focus on route changes, announce page changes to screen readers (aria-live regions), update page titles, maintain browser history, ensure keyboard navigation works, and manage focus for dynamic content.",
        },
        {
          q: "How do I announce dynamic content changes?",
          a: "Use ARIA live regions (aria-live) to announce content that updates without page reload. Use aria-live='polite' for non-urgent updates (like search results) and 'assertive' for urgent messages (like errors). Keep announcements concise.",
        },
        {
          q: "What is focus management and when is it needed?",
          a: "Focus management means controlling where keyboard focus goes after interactions. Manage focus when: opening/closing modals, deleting items, lazy-loading content, navigating SPAs, or any interaction that changes context. Always return focus logically.",
        },
        {
          q: "How do I make infinite scroll accessible?",
          a: "Infinite scroll can be problematic - keyboard users may never reach the footer. Provide alternatives: pagination, 'load more' button, or keyboard shortcut to skip to footer. Announce new content loading via live regions.",
        },
        {
          q: "What about loading states and spinners?",
          a: "Provide text alternatives for loading spinners (aria-label='Loading'), use aria-live regions to announce loading/completion, consider aria-busy='true' on containers, and ensure keyboard focus management during and after loading.",
        },
        {
          q: "How do I make autocomplete/typeahead accessible?",
          a: "Implement ARIA combobox pattern: use aria-autocomplete, aria-expanded, aria-controls, announce result count and selection changes, support arrow key navigation through results, and ensure Escape clears/closes suggestions.",
        },
        {
          q: "Can I use <div> with onClick instead of <button>?",
          a: "No. Buttons have built-in keyboard support, focus management, and semantics. If you use <div onClick>, you must add role='button', tabindex='0', keyboard handlers (Enter and Space), and focus styles. Just use <button> instead.",
        },
        {
          q: "How do I handle client-side form validation?",
          a: "Display errors visibly immediately or on blur, use aria-describedby to associate errors with fields, update error count in live region, don't rely on color alone, provide clear error messages, and ensure validation works with screen readers.",
        },
        {
          q: "What about drag and drop accessibility?",
          a: "Drag and drop is not inherently keyboard accessible. You must provide keyboard alternatives: up/down buttons to reorder, or keyboard shortcuts (Ctrl+arrow keys). Consider if drag and drop is necessary or if a simpler interface would work.",
        },
      ],
    },
    {
      category: "PDFs & Documents",
      questions: [
        {
          q: "Do PDFs need to be accessible?",
          a: "Yes. PDFs are covered by WCAG if they're web content. Accessible PDFs need proper tags, reading order, alt text for images, form labels, heading structure, and table markup. Many PDFs are completely inaccessible to screen readers.",
        },
        {
          q: "How do I create accessible PDFs?",
          a: "Start with accessible source documents (Word, InDesign), use proper headings and styles, add alt text to images, tag tables properly, use Adobe Acrobat Pro to add tags and check accessibility, or better yet, provide HTML versions instead.",
        },
        {
          q: "Should I provide both HTML and PDF versions?",
          a: "When possible, yes. HTML is generally more accessible than PDF. If you must provide PDFs (for printing, legal requirements), also offer HTML or accessible Word versions. Make PDF accessibility clear (e.g., 'Accessible PDF, 2.3MB').",
        },
        {
          q: "What about scanned PDFs?",
          a: "Scanned PDFs (images of pages) are completely inaccessible to screen readers - they're just pictures. Run OCR to convert to text, then properly tag the PDF. Or better, convert to HTML.",
        },
        {
          q: "Do I need to make PowerPoint presentations accessible?",
          a: "If PowerPoint presentations are published on your website, yes. Use slide layouts, provide alt text, ensure reading order, use sufficient contrast, and add captions to videos. PowerPoint has built-in accessibility checkers.",
        },
        {
          q: "What about Excel spreadsheets?",
          a: "Accessible spreadsheets need: descriptive sheet names, proper table structure, text alternatives for charts, meaningful link text, color not as only indicator, and instructions for use. Consider if data could be presented as HTML tables instead.",
        },
        {
          q: "How do I check if a PDF is accessible?",
          a: "Use Adobe Acrobat Pro's accessibility checker, test with screen readers, verify tags exist (View > Show/Hide > Navigation Panes > Tags), check that text is selectable (not images), and verify reading order makes sense.",
        },
      ],
    },
    {
      category: "Design & UX",
      questions: [
        {
          q: "Will accessibility make my website look ugly?",
          a: "No. Accessible design is good design. Many beautiful, award-winning websites are fully accessible. Accessibility constraints often lead to cleaner, more user-friendly designs that benefit everyone, not just users with disabilities.",
        },
        {
          q: "What is inclusive design?",
          a: "Inclusive design considers diverse users from the start, designing for the full range of human diversity. It's broader than accessibility - it considers different abilities, situations, languages, cultures, and contexts. Accessibility is part of inclusive design.",
        },
        {
          q: "How do I design for users with cognitive disabilities?",
          a: "Use clear language, provide consistent navigation, minimize distractions, break content into chunks, use headings and lists, provide enough time for tasks, allow users to control animations, and test with users with cognitive disabilities.",
        },
        {
          q: "What about animations and motion?",
          a: "Some users experience motion sickness or vestibular disorders from animations. WCAG 2.1 SC 2.3.3 requires respecting prefers-reduced-motion. Provide ways to pause, stop, or hide animations. Avoid auto-playing animations.",
        },
        {
          q: "How much time should users have to complete tasks?",
          a: "WCAG 2.2.1 requires timing adjustments: allow users to turn off time limits, adjust them, or extend them before time expires (with at least 20 seconds warning). Or don't use time limits unless absolutely essential.",
        },
        {
          q: "Should I disable zoom on mobile?",
          a: "Never disable zoom (maximum-scale=1.0, user-scalable=no). WCAG 2.1 SC 1.4.4 requires text to be resizable up to 200% without loss of functionality. Users with low vision need to zoom. Use responsive design instead of restricting zoom.",
        },
        {
          q: "What is cognitive load and how does it relate to accessibility?",
          a: "Cognitive load is mental effort required to use your site. High cognitive load disproportionately affects users with cognitive disabilities, but reducing it benefits everyone. Simplify navigation, use clear language, reduce clutter, and be consistent.",
        },
        {
          q: "How do I make error prevention accessible?",
          a: "For legal, financial, or data modifications: provide reversible actions (undo), confirmations before submission, or review steps. Clear error prevention helps users with cognitive disabilities avoid costly mistakes.",
        },
      ],
    },
    {
      category: "Screen Readers",
      questions: [
        {
          q: "What are the most common screen readers?",
          a: "JAWS (Windows, paid), NVDA (Windows, free), VoiceOver (macOS/iOS, built-in), TalkBack (Android, built-in), and Narrator (Windows, built-in). Test with multiple screen readers as behavior varies. NVDA and VoiceOver are good starting points.",
        },
        {
          q: "How do screen readers navigate pages?",
          a: "Screen readers navigate by: headings, landmarks, links list, form elements, tab order, and virtual cursor (reading linearly). Proper semantic HTML and landmarks are essential for efficient navigation.",
        },
        {
          q: "Do I need to test with screen readers?",
          a: "Yes. Automated tools can't catch everything. Testing with screen readers reveals real user experience: Do labels make sense? Is navigation logical? Are dynamic changes announced? It's the best way to verify accessibility.",
        },
        {
          q: "How do I learn to use a screen reader?",
          a: "Start with free options: NVDA (Windows) or VoiceOver (Mac). Learn basic commands: start/stop, navigate by heading/landmark, forms mode, and virtual cursor. Take tutorials, practice on your own sites, and watch screen reader users.",
        },
        {
          q: "What is browse/focus mode?",
          a: "Screen readers have two modes: browse/virtual mode (for reading content, using arrow keys) and focus/forms mode (for interacting with forms and widgets, using Tab). Mode switching can confuse users if not handled properly.",
        },
        {
          q: "Why does my site work in one screen reader but not another?",
          a: "Screen readers interpret ARIA and HTML differently. JAWS, NVDA, and VoiceOver have different announcement patterns and bugs. Follow WCAG and ARIA best practices, test in multiple screen readers, and prioritize semantic HTML which works more consistently.",
        },
        {
          q: "What is a screen reader testing checklist?",
          a: "Test: Can you navigate to all content? Are headings and landmarks used effectively? Are images, links, and buttons labeled? Are forms and errors understandable? Do dynamic changes announce? Is there unexpected behavior? Can you complete key tasks?",
        },
      ],
    },
    {
      category: "Getting Started & Best Practices",
      questions: [
        {
          q: "Where do I start with accessibility?",
          a: "Start by: learning WCAG basics and POUR principles, running automated scans to find low-hanging fruit, fixing critical issues (alt text, form labels, keyboard access), learning to use a screen reader, and integrating accessibility into your development process.",
        },
        {
          q: "What are quick wins for accessibility?",
          a: "Quick wins: add alt text to images, use semantic HTML, label form inputs, ensure keyboard access, improve color contrast, add skip links, fix heading hierarchy, and use ARIA only when necessary. These cover many common issues.",
        },
        {
          q: "Should I retrofit accessibility or start from scratch?",
          a: "It depends. For new projects, build accessibility in from the start - it's faster and cheaper. For existing sites, prioritize by impact: fix critical blockers first, then enhance incrementally. Complete redesigns may be needed for severely inaccessible sites.",
        },
        {
          q: "How do I convince stakeholders to prioritize accessibility?",
          a: "Make the business case: legal risk reduction, market expansion (15% of population has disabilities), SEO benefits, improved usability for everyone, corporate social responsibility, and potential for government contracts. Share user stories showing real impact.",
        },
        {
          q: "What training should developers receive?",
          a: "Developers should learn: WCAG guidelines and success criteria, semantic HTML, ARIA basics and when to use it, keyboard navigation patterns, screen reader testing, automated testing tools, and how to design accessibly from the start.",
        },
        {
          q: "How do I integrate accessibility into agile development?",
          a: "Include accessibility in: definition of done, design reviews, code reviews, QA testing, user stories (as acceptance criteria), sprint planning, and retrospectives. Assign accessibility champions, provide training, and use automated testing in CI/CD.",
        },
        {
          q: "What is shift-left accessibility?",
          a: "Shift-left means addressing accessibility earlier in development - during design and coding rather than at the end. This catches issues when they're cheaper to fix and prevents building in barriers that must be removed later.",
        },
        {
          q: "Should every team member know about accessibility?",
          a: "Yes. Designers need to design accessible interfaces, developers need to code them correctly, content authors need to write accessible content, QA needs to test for accessibility, and product managers need to prioritize it. It's everyone's responsibility.",
        },
      ],
    },
    {
      category: "Common Mistakes & Myths",
      questions: [
        {
          q: "Is accessibility just for blind users?",
          a: "No. Accessibility benefits users with visual, auditory, motor, cognitive, and seizure/vestibular disabilities, plus situational limitations (bright sunlight, noisy environments), temporary disabilities (broken arm), and aging users. It's for everyone.",
        },
        {
          q: "Can accessibility widgets make my site compliant?",
          a: "No. Overlay widgets that claim 'instant accessibility' are widely criticized by accessibility experts. They don't fix underlying code issues, can create new barriers, and give false confidence. Real accessibility requires fixing your code.",
        },
        {
          q: "Is accessibility expensive?",
          a: "Building accessibility in from the start costs little - often 1-5% of project budget. Retrofitting inaccessible sites costs more. Legal action, lost customers, and reputational damage from inaccessibility cost far more. Accessibility is an investment, not an expense.",
        },
        {
          q: "Can I achieve 100% compliance?",
          a: "Perfect compliance is challenging. Focus on meeting WCAG Level AA, which is the legal standard for most jurisdictions. Regularly test, fix issues promptly, and continuously improve. Accessibility is an ongoing process, not a one-time achievement.",
        },
        {
          q: "Does accessibility hurt SEO?",
          a: "No - accessibility improves SEO. Semantic HTML, alt text, meaningful headings, and clear content structure help search engines understand your site. Accessible sites often rank higher. Accessibility and SEO have many overlapping best practices.",
        },
        {
          q: "Is accessibility only about compliance?",
          a: "No. While legal compliance matters, accessibility is fundamentally about inclusion and user experience. Focus on making your site usable for everyone, not just checking boxes. True accessibility goes beyond minimum compliance.",
        },
        {
          q: "Will fixing accessibility break my design?",
          a: "No. Properly implemented accessibility shouldn't break designs. If accessibility constraints seem to conflict with design, there's usually a creative solution that achieves both. Work collaboratively to find accessible design solutions.",
        },
        {
          q: "Can I just make a separate 'accessible version'?",
          a: "No. Separate sites segregate users with disabilities and are rarely equivalent. They're harder to maintain and often fall behind. Focus on making your main site accessible - that's better for everyone.",
        },
        {
          q: "Is accessibility just alt text and color contrast?",
          a: "No. While those are important, accessibility covers much more: keyboard navigation, ARIA, focus management, semantic HTML, captions, transcripts, form labels, error handling, heading structure, responsive design, and more.",
        },
        {
          q: "Do users with disabilities really use my site?",
          a: "Yes. 15% of the world's population has some form of disability. They use the internet for the same reasons everyone else does. If your site is inaccessible, you're excluding a significant portion of potential users and customers.",
        },
      ],
    },
  ]

  // Generate comprehensive FAQ structured data for Google Search
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "WCAG FAQ - 100+ Frequently Asked Questions About Web Accessibility",
    description:
      "Comprehensive answers to accessibility questions covering WCAG compliance, ADA requirements, testing, implementation, ARIA, keyboard navigation, and more.",
    url: "https://thewcag.com/faq",
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    ),
  }

  return (
    <>
      <StructuredData data={faqData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Accessibility FAQ - 100+ Questions Answered
                </h1>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground mb-4">
                Comprehensive answers to the most common questions about WCAG, web accessibility, compliance, testing,
                implementation, and best practices. Everything you need to know about making your website accessible.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">100+ Questions</Badge>
                <Badge variant="secondary">WCAG 2.2</Badge>
                <Badge variant="secondary">ADA Compliance</Badge>
                <Badge variant="secondary">Expert Answers</Badge>
              </div>
            </div>

            {/* Table of Contents */}
            <Card className="mb-8 bg-muted/50">
              <CardHeader>
                <CardTitle className="text-xl">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-2">
                  {faqs.map((category, index) => (
                    <a
                      key={index}
                      href={`#${category.category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm hover:text-primary underline-offset-4 hover:underline"
                    >
                      {category.category} ({category.questions.length})
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Categories */}
            <div className="space-y-8 sm:space-y-12">
              {faqs.map((category, categoryIndex) => (
                <section
                  key={categoryIndex}
                  id={category.category.toLowerCase().replace(/\s+/g, "-")}
                  className="space-y-4 sm:space-y-6 scroll-mt-4"
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold border-b pb-2">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <Card key={faqIndex} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-base md:text-lg flex items-start gap-3">
                            <HelpCircle className="h-5 w-5 text-primary mt-1 shrink-0" aria-hidden="true" />
                            <span>{faq.q}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed pl-8">{faq.a}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Related Resources */}
            <Card className="mt-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Still Have Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Explore our comprehensive resources to learn more about web accessibility and WCAG compliance.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Interactive compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/learn">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Learn Accessibility</div>
                        <div className="text-xs text-muted-foreground">Educational resources</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/compliance">
                      <Shield className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Compliance Laws</div>
                        <div className="text-xs text-muted-foreground">Legal requirements</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/testing-guide">
                      <Code className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Testing Guide</div>
                        <div className="text-xs text-muted-foreground">How to test accessibility</div>
                      </div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sources Section */}
            <Card className="mt-8 bg-muted/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Sources & Further Reading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This FAQ is based on official WCAG documentation and trusted accessibility resources:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://www.w3.org/WAI/standards-guidelines/wcag/faq/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      WCAG 2 FAQ - W3C Web Accessibility Initiative <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ada.gov/resources/web-guidance/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Guidance on Web Accessibility and the ADA <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://webaim.org/techniques/keyboard/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      WebAIM: Keyboard Accessibility <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      ARIA - MDN Web Docs <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://webaim.org/articles/contrast/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      WebAIM: Contrast and Color Accessibility <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.deque.com/blog/top-5-questions-asked-in-accessibility-trainings/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Top 5 Questions Asked in Accessibility Trainings - Deque <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.accessibility.works/resources/web-accessibility-faqs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Digital Accessibility FAQs - Accessibility.Works <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
