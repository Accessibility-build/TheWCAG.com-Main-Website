import * as XLSX from 'xlsx'

// ============================================================================
// ACCESSIBILITY STATEMENT TEMPLATE
// ============================================================================

export interface AccessibilityStatementData {
    organizationName: string
    websiteUrl: string
    conformanceLevel: 'A' | 'AA' | 'AAA'
    standard: string
    contactEmail: string
    contactPhone: string
    knownLimitations: string[]
    remediationPlan: string
    statementDate: string
}

export function generateAccessibilityStatementTemplate(): Blob {
    const wb = XLSX.utils.book_new()

    // Main template sheet
    const templateData = [
        ['ACCESSIBILITY STATEMENT TEMPLATE'],
        ['Generated from TheWCAG.com'],
        [''],
        ['INSTRUCTIONS: Fill in the yellow cells with your organization\'s information'],
        [''],
        ['SECTION', 'FIELD', 'YOUR VALUE', 'EXAMPLE/GUIDANCE'],
        ['Organization Details', 'Organization Name', '', 'Acme Corporation'],
        ['', 'Website URL', '', 'https://www.example.com'],
        ['', 'Statement Date', '', new Date().toLocaleDateString()],
        [''],
        ['Conformance', 'Standard', '', 'WCAG 2.2'],
        ['', 'Conformance Level', '', 'AA (most common for legal compliance)'],
        ['', 'Scope', '', 'This statement applies to [describe scope]'],
        [''],
        ['Contact Information', 'Email', '', 'accessibility@example.com'],
        ['', 'Phone', '', '+1 (555) 123-4567'],
        ['', 'Mailing Address', '', '123 Main St, City, State 12345'],
        [''],
        ['Known Limitations', 'Limitation 1', '', 'PDFs created before 2023 may not be fully accessible'],
        ['', 'Limitation 2', '', 'Third-party content may not meet all criteria'],
        ['', 'Limitation 3', '', ''],
        [''],
        ['Remediation', 'Current Efforts', '', 'We are actively working to improve accessibility'],
        ['', 'Timeline', '', 'Full remediation expected by Q4 2025'],
        ['', 'Feedback Process', '', 'Users can report issues via our contact form'],
        [''],
        ['Testing', 'Last Audit Date', '', ''],
        ['', 'Audit Conducted By', '', 'Internal team / External auditor'],
        ['', 'Testing Tools Used', '', 'axe DevTools, WAVE, Manual testing'],
    ]

    const ws = XLSX.utils.aoa_to_sheet(templateData)
    ws['!cols'] = [{ wch: 20 }, { wch: 20 }, { wch: 40 }, { wch: 45 }]
    XLSX.utils.book_append_sheet(wb, ws, 'Statement Template')

    // Sample statement sheet
    const sampleData = [
        ['SAMPLE ACCESSIBILITY STATEMENT'],
        ['Copy and customize this text for your website'],
        [''],
        ['---BEGIN STATEMENT---'],
        [''],
        ['Accessibility Statement for [Organization Name]'],
        [''],
        ['[Organization Name] is committed to ensuring digital accessibility for people with disabilities.'],
        ['We are continually improving the user experience for everyone and applying the relevant accessibility standards.'],
        [''],
        ['Conformance Status'],
        ['We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA.'],
        ['These guidelines explain how to make web content more accessible for people with disabilities.'],
        [''],
        ['Feedback'],
        ['We welcome your feedback on the accessibility of [Website Name].'],
        ['Please let us know if you encounter accessibility barriers:'],
        ['• Email: [accessibility@example.com]'],
        ['• Phone: [phone number]'],
        [''],
        ['We try to respond to feedback within [X] business days.'],
        [''],
        ['Technical Specifications'],
        ['Accessibility of [Website Name] relies on the following technologies:'],
        ['• HTML, CSS, JavaScript'],
        ['• WAI-ARIA'],
        [''],
        ['These technologies are relied upon for conformance with the accessibility standards used.'],
        [''],
        ['---END STATEMENT---'],
    ]

    const sampleWs = XLSX.utils.aoa_to_sheet(sampleData)
    sampleWs['!cols'] = [{ wch: 80 }]
    XLSX.utils.book_append_sheet(wb, sampleWs, 'Sample Statement')

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    return new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
}

// ============================================================================
// QA ACCESSIBILITY TESTING CHECKLIST
// ============================================================================

export function generateQATestingChecklist(): Blob {
    const wb = XLSX.utils.book_new()

    const checklistData = [
        ['QA ACCESSIBILITY TESTING CHECKLIST'],
        ['Sprint-Ready Testing Checklist for QA Teams'],
        ['Generated from TheWCAG.com'],
        [''],
        ['CATEGORY', 'TEST ITEM', 'HOW TO TEST', 'PASS', 'FAIL', 'N/A', 'NOTES', 'WCAG CRITERIA'],
        [''],
        ['KEYBOARD NAVIGATION', '', '', '', '', '', '', ''],
        ['', 'All interactive elements are focusable', 'Tab through the page', '', '', '', '', '2.1.1'],
        ['', 'Focus order is logical', 'Tab through and verify order matches visual layout', '', '', '', '', '2.4.3'],
        ['', 'Focus indicator is visible', 'Tab and look for visible focus ring', '', '', '', '', '2.4.7'],
        ['', 'No keyboard traps', 'Can you tab out of all components?', '', '', '', '', '2.1.2'],
        ['', 'Skip links work', 'First tab should reveal skip link', '', '', '', '', '2.4.1'],
        ['', 'Custom controls work with keyboard', 'Test dropdowns, modals, tabs with Enter/Space/Arrows', '', '', '', '', '2.1.1'],
        [''],
        ['SCREEN READER', '', '', '', '', '', '', ''],
        ['', 'Page title is descriptive', 'Check browser tab or AT announcement', '', '', '', '', '2.4.2'],
        ['', 'Headings are properly structured', 'Use heading navigation (H key in NVDA/VO)', '', '', '', '', '1.3.1'],
        ['', 'Images have alt text', 'Navigate to images, verify announcement', '', '', '', '', '1.1.1'],
        ['', 'Form labels are announced', 'Focus on form fields, verify label is read', '', '', '', '', '1.3.1'],
        ['', 'Error messages are announced', 'Submit invalid form, verify error is announced', '', '', '', '', '3.3.1'],
        ['', 'Dynamic content changes announced', 'Trigger dynamic updates, verify live regions work', '', '', '', '', '4.1.3'],
        [''],
        ['VISUAL', '', '', '', '', '', '', ''],
        ['', 'Color contrast meets 4.5:1 for text', 'Use contrast checker tool', '', '', '', '', '1.4.3'],
        ['', 'Color is not only means of info', 'Can you understand without color?', '', '', '', '', '1.4.1'],
        ['', 'Text can be resized to 200%', 'Zoom browser to 200%, verify readability', '', '', '', '', '1.4.4'],
        ['', 'Content reflows at 320px width', 'Resize window or use responsive mode', '', '', '', '', '1.4.10'],
        ['', 'Non-text contrast meets 3:1', 'Check buttons, icons, form fields', '', '', '', '', '1.4.11'],
        [''],
        ['FORMS', '', '', '', '', '', '', ''],
        ['', 'All fields have visible labels', 'Visual inspection', '', '', '', '', '3.3.2'],
        ['', 'Required fields are indicated', 'Check for asterisk or "required" text', '', '', '', '', '3.3.2'],
        ['', 'Error messages are specific', 'Submit invalid data, check error clarity', '', '', '', '', '3.3.1'],
        ['', 'Instructions are provided', 'Check for format hints (e.g., date format)', '', '', '', '', '3.3.2'],
        [''],
        ['MEDIA', '', '', '', '', '', '', ''],
        ['', 'Videos have captions', 'Play video and check for captions', '', '', '', '', '1.2.2'],
        ['', 'Audio has transcript', 'Look for transcript link', '', '', '', '', '1.2.1'],
        ['', 'Media can be paused', 'Test pause/stop controls', '', '', '', '', '1.4.2'],
        ['', 'No auto-playing audio', 'Page load should be silent', '', '', '', '', '1.4.2'],
        [''],
        ['STRUCTURE', '', '', '', '', '', '', ''],
        ['', 'Language is set', 'Check HTML lang attribute', '', '', '', '', '3.1.1'],
        ['', 'Lists are marked up correctly', 'Inspect list elements', '', '', '', '', '1.3.1'],
        ['', 'Tables have headers', 'Check for th elements and scope', '', '', '', '', '1.3.1'],
        ['', 'Landmarks are used', 'Check for main, nav, header, footer', '', '', '', '', '1.3.1'],
    ]

    const ws = XLSX.utils.aoa_to_sheet(checklistData)
    ws['!cols'] = [
        { wch: 20 }, { wch: 40 }, { wch: 45 },
        { wch: 6 }, { wch: 6 }, { wch: 6 },
        { wch: 30 }, { wch: 12 }
    ]
    XLSX.utils.book_append_sheet(wb, ws, 'QA Checklist')

    // Summary sheet
    const summaryData = [
        ['QA ACCESSIBILITY TESTING SUMMARY'],
        [''],
        ['Tester Name:', ''],
        ['Date:', ''],
        ['Sprint/Release:', ''],
        ['Application/URL:', ''],
        [''],
        ['RESULTS SUMMARY'],
        ['Total Tests:', ''],
        ['Passed:', ''],
        ['Failed:', ''],
        ['N/A:', ''],
        [''],
        ['CRITICAL ISSUES FOUND:'],
        ['1.', ''],
        ['2.', ''],
        ['3.', ''],
        [''],
        ['RECOMMENDATIONS:'],
        ['', ''],
    ]

    const summaryWs = XLSX.utils.aoa_to_sheet(summaryData)
    summaryWs['!cols'] = [{ wch: 25 }, { wch: 50 }]
    XLSX.utils.book_append_sheet(wb, summaryWs, 'Summary')

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    return new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
}

// ============================================================================
// FORM ACCESSIBILITY CHECKLIST
// ============================================================================

export function generateFormAccessibilityChecklist(): Blob {
    const wb = XLSX.utils.book_new()

    const checklistData = [
        ['FORM ACCESSIBILITY CHECKLIST'],
        ['Comprehensive checklist for accessible form design'],
        ['Generated from TheWCAG.com'],
        [''],
        ['CATEGORY', 'REQUIREMENT', 'DESCRIPTION', 'STATUS', 'NOTES', 'WCAG'],
        [''],
        ['LABELS & INSTRUCTIONS', '', '', '', '', ''],
        ['', 'Every input has a visible label', 'Labels should be persistent, not placeholder-only', '', '', '3.3.2'],
        ['', 'Labels are programmatically associated', 'Use for/id or wrap input in label', '', '', '1.3.1'],
        ['', 'Labels are positioned correctly', 'Above or to the left (RTL: right) of inputs', '', '', '3.3.2'],
        ['', 'Placeholder is not the only label', 'Placeholders disappear on focus', '', '', '3.3.2'],
        ['', 'Format requirements are stated', 'e.g., "Date format: MM/DD/YYYY"', '', '', '3.3.2'],
        ['', 'Help text is associated with input', 'Use aria-describedby for additional info', '', '', '1.3.1'],
        [''],
        ['REQUIRED FIELDS', '', '', '', '', ''],
        ['', 'Required fields are indicated', 'Visual indicator (asterisk) + "required"', '', '', '3.3.2'],
        ['', 'Required is programmatic', 'Use required attribute or aria-required', '', '', '3.3.2'],
        ['', 'Legend explains required indicator', 'e.g., "* indicates required field"', '', '', '3.3.2'],
        [''],
        ['ERROR HANDLING', '', '', '', '', ''],
        ['', 'Errors are clearly identified', 'Error message appears near the field', '', '', '3.3.1'],
        ['', 'Errors describe the problem', 'Not just "Invalid input"', '', '', '3.3.1'],
        ['', 'Errors suggest correction', 'e.g., "Enter email as name@domain.com"', '', '', '3.3.3'],
        ['', 'Error summary at top of form', 'List all errors with links to fields', '', '', '3.3.1'],
        ['', 'Errors announced to screen readers', 'Use role="alert" or aria-live', '', '', '4.1.3'],
        ['', 'Invalid fields marked with aria-invalid', 'aria-invalid="true" on error', '', '', '3.3.1'],
        ['', 'Error messages linked to fields', 'Use aria-describedby or aria-errormessage', '', '', '3.3.1'],
        [''],
        ['GROUPING & STRUCTURE', '', '', '', '', ''],
        ['', 'Related fields are grouped', 'Use fieldset and legend', '', '', '1.3.1'],
        ['', 'Radio/checkbox groups have legend', 'Group question in legend element', '', '', '1.3.1'],
        ['', 'Multi-step forms show progress', 'e.g., "Step 2 of 4"', '', '', '3.3.2'],
        ['', 'Form sections have headings', 'Use proper heading hierarchy', '', '', '1.3.1'],
        [''],
        ['KEYBOARD & INTERACTION', '', '', '', '', ''],
        ['', 'All fields are keyboard accessible', 'Can tab to and interact with all fields', '', '', '2.1.1'],
        ['', 'Focus order is logical', 'Tab order matches visual order', '', '', '2.4.3'],
        ['', 'Focus is visible', 'Clear focus indicator on all fields', '', '', '2.4.7'],
        ['', 'No keyboard traps', 'Can tab away from all fields', '', '', '2.1.2'],
        ['', 'Custom controls work with keyboard', 'Custom selects, date pickers, etc.', '', '', '2.1.1'],
        ['', 'Enter submits form (when appropriate)', 'Single input forms submit on Enter', '', '', '3.2.2'],
        [''],
        ['VALIDATION', '', '', '', '', ''],
        ['', 'Validation happens on submit', 'Not only on blur (can be frustrating)', '', '', '3.3.1'],
        ['', 'Success feedback is provided', 'Confirm successful submission', '', '', '3.3.1'],
        ['', 'Data can be reviewed before submit', 'For legal/financial transactions', '', '', '3.3.4'],
        ['', 'Submissions can be reversed', 'Or confirmation step required', '', '', '3.3.4'],
        [''],
        ['SPECIAL INPUTS', '', '', '', '', ''],
        ['', 'Autocomplete attributes used', 'e.g., autocomplete="email"', '', '', '1.3.5'],
        ['', 'Date inputs have fallback', 'Native date picker or clear format', '', '', '3.3.2'],
        ['', 'File inputs describe accepted types', 'e.g., "Accept: .pdf, .doc"', '', '', '3.3.2'],
        ['', 'CAPTCHAs have alternatives', 'Audio, or alternative verification', '', '', '1.1.1'],
    ]

    const ws = XLSX.utils.aoa_to_sheet(checklistData)
    ws['!cols'] = [{ wch: 22 }, { wch: 35 }, { wch: 42 }, { wch: 10 }, { wch: 25 }, { wch: 8 }]
    XLSX.utils.book_append_sheet(wb, ws, 'Form Checklist')

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    return new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
}

// ============================================================================
// MOBILE APP ACCESSIBILITY CHECKLIST
// ============================================================================

export function generateMobileAccessibilityChecklist(): Blob {
    const wb = XLSX.utils.book_new()

    const checklistData = [
        ['MOBILE APP ACCESSIBILITY CHECKLIST'],
        ['iOS (VoiceOver) & Android (TalkBack) Testing'],
        ['Generated from TheWCAG.com'],
        [''],
        ['CATEGORY', 'REQUIREMENT', 'iOS', 'ANDROID', 'STATUS', 'NOTES', 'WCAG'],
        [''],
        ['TOUCH TARGETS', '', '', '', '', '', ''],
        ['', 'Touch targets are at least 44x44pt (iOS) / 48x48dp (Android)', '44x44pt', '48x48dp', '', '', '2.5.5'],
        ['', 'Adequate spacing between targets', 'Prevent accidental taps', '', '', '', '2.5.5'],
        ['', 'No small text-only buttons', 'Icons should have sufficient size', '', '', '', '2.5.5'],
        [''],
        ['SCREEN READER', '', '', '', '', '', ''],
        ['', 'All elements have accessible names', 'accessibilityLabel', 'contentDescription', '', '', '1.1.1'],
        ['', 'Images have alt text or are decorative', 'isAccessibilityElement', 'importantForAccessibility', '', '', '1.1.1'],
        ['', 'Buttons describe their action', '"Submit form" not "Button"', '', '', '', '2.4.4'],
        ['', 'Form fields have labels', 'Associated labels announced', '', '', '', '1.3.1'],
        ['', 'Headings are marked as headings', 'accessibilityTraits', 'heading role', '', '', '1.3.1'],
        ['', 'Live regions announce updates', 'accessibilityLiveRegion', 'announceForAccessibility', '', '', '4.1.3'],
        ['', 'Focus order is logical', 'Swipe order matches visual', '', '', '', '2.4.3'],
        ['', 'Custom actions are available', 'accessibilityCustomActions', 'AccessibilityNodeInfo', '', '', '2.1.1'],
        [''],
        ['GESTURES', '', '', '', '', '', ''],
        ['', 'Standard gestures are supported', 'Swipe, tap, double-tap', '', '', '', '2.5.1'],
        ['', 'Complex gestures have alternatives', 'Pinch/multi-finger: provide buttons', '', '', '', '2.5.1'],
        ['', 'Motion activation has alternatives', 'Shake actions have button options', '', '', '', '2.5.4'],
        ['', 'Drag actions have alternatives', 'Provide tap-based alternative', '', '', '', '2.5.7'],
        [''],
        ['ORIENTATION & LAYOUT', '', '', '', '', '', ''],
        ['', 'App works in portrait and landscape', 'Unless specific orientation required', '', '', '', '1.3.4'],
        ['', 'Content reflows when resized', 'No horizontal scrolling at 320dp', '', '', '', '1.4.10'],
        ['', 'Text scales with system settings', 'Support Dynamic Type / Font Scale', '', '', '', '1.4.4'],
        ['', 'UI adapts to larger text sizes', 'No clipping or overlap', '', '', '', '1.4.4'],
        [''],
        ['COLOR & CONTRAST', '', '', '', '', '', ''],
        ['', 'Text contrast is 4.5:1 minimum', 'Use contrast analyzer', '', '', '', '1.4.3'],
        ['', 'UI component contrast is 3:1', 'Buttons, icons, borders', '', '', '', '1.4.11'],
        ['', 'Color is not sole indicator', 'Use icons, text, patterns', '', '', '', '1.4.1'],
        ['', 'Supports Dark Mode accessibly', 'Contrast maintained in dark mode', '', '', '', '1.4.3'],
        [''],
        ['NAVIGATION', '', '', '', '', '', ''],
        ['', 'Consistent navigation patterns', 'Tab bar, nav drawer consistent', '', '', '', '3.2.3'],
        ['', 'Back navigation works', 'System back button/gesture works', '', '', '', '2.4.5'],
        ['', 'Skip to main content option', 'For apps with complex headers', '', '', '', '2.4.1'],
        ['', 'Search is available', 'If content is extensive', '', '', '', '2.4.5'],
        [''],
        ['FORMS & INPUT', '', '', '', '', '', ''],
        ['', 'Input fields have visible labels', 'Not placeholder-only', '', '', '', '3.3.2'],
        ['', 'Keyboard type matches input', 'Email, number, phone keyboards', '', '', '', '1.3.5'],
        ['', 'Autocomplete/autofill supported', 'textContentType (iOS)', '', '', '', '1.3.5'],
        ['', 'Error messages are clear', 'Specific and helpful', '', '', '', '3.3.1'],
        ['', 'Errors announced to screen reader', 'Use accessibility announcements', '', '', '', '4.1.3'],
        [''],
        ['MEDIA', '', '', '', '', '', ''],
        ['', 'Videos have captions', 'Built-in or third-party', '', '', '', '1.2.2'],
        ['', 'Audio has controls', 'Play, pause, volume', '', '', '', '1.4.2'],
        ['', 'No auto-playing audio', 'Or easy way to stop', '', '', '', '1.4.2'],
        ['', 'Animation can be reduced', 'Respect reduceMotion setting', '', '', '', '2.3.3'],
        [''],
        ['AUTHENTICATION', '', '', '', '', '', ''],
        ['', 'Biometric has fallback', 'PIN, password alternative', '', '', '', '3.3.8'],
        ['', 'Timeout warnings provided', '20+ seconds to respond', '', '', '', '2.2.1'],
        ['', 'Session can be extended', 'Without losing data', '', '', '', '2.2.1'],
    ]

    const ws = XLSX.utils.aoa_to_sheet(checklistData)
    ws['!cols'] = [
        { wch: 22 }, { wch: 45 }, { wch: 20 }, { wch: 20 },
        { wch: 10 }, { wch: 25 }, { wch: 8 }
    ]
    XLSX.utils.book_append_sheet(wb, ws, 'Mobile Checklist')

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    return new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
}

// ============================================================================
// PDF ACCESSIBILITY CHECKLIST
// ============================================================================

export function generatePDFAccessibilityChecklist(): Blob {
    const wb = XLSX.utils.book_new()

    const checklistData = [
        ['PDF ACCESSIBILITY CHECKLIST'],
        ['For Document Creators and Publishers'],
        ['Generated from TheWCAG.com'],
        [''],
        ['CATEGORY', 'REQUIREMENT', 'HOW TO CHECK/FIX', 'STATUS', 'NOTES', 'WCAG'],
        [''],
        ['DOCUMENT STRUCTURE', '', '', '', '', ''],
        ['', 'Document is tagged', 'Acrobat: View > Navigation > Tags', '', '', '1.3.1'],
        ['', 'Tags are in correct reading order', 'Use Tags panel to verify order', '', '', '1.3.2'],
        ['', 'Document has title', 'File > Properties > Title field', '', '', '2.4.2'],
        ['', 'Language is set', 'File > Properties > Advanced > Language', '', '', '3.1.1'],
        ['', 'Bookmarks for long documents', 'Bookmarks panel for 20+ page docs', '', '', '2.4.5'],
        [''],
        ['HEADINGS', '', '', '', '', ''],
        ['', 'Headings use proper tags (H1, H2, etc.)', 'Check Tags panel structure', '', '', '1.3.1'],
        ['', 'Heading hierarchy is logical', 'No skipping levels (H1 > H3)', '', '', '1.3.1'],
        ['', 'Headings are not just styled text', 'Must be tagged, not just bold', '', '', '1.3.1'],
        [''],
        ['IMAGES & GRAPHICS', '', '', '', '', ''],
        ['', 'Images have alt text', 'Right-click > Edit Alt Text', '', '', '1.1.1'],
        ['', 'Decorative images marked as artifacts', 'Background/decorative images', '', '', '1.1.1'],
        ['', 'Complex images have long descriptions', 'Charts, diagrams, infographics', '', '', '1.1.1'],
        ['', 'Text in images avoided', 'Use actual text when possible', '', '', '1.4.5'],
        [''],
        ['LISTS', '', '', '', '', ''],
        ['', 'Lists use proper tags (L, LI)', 'Not just dashes/bullets as text', '', '', '1.3.1'],
        ['', 'Nested lists are structured correctly', 'Check Tags panel hierarchy', '', '', '1.3.1'],
        [''],
        ['TABLES', '', '', '', '', ''],
        ['', 'Tables have header rows/columns', 'Tag as TH not TD', '', '', '1.3.1'],
        ['', 'Tables have proper structure', 'Table, TR, TH, TD tags', '', '', '1.3.1'],
        ['', 'Complex tables have scope attributes', 'Row/column scope defined', '', '', '1.3.1'],
        ['', 'Tables have summary or captions', 'For complex data tables', '', '', '1.3.1'],
        ['', 'Layout tables avoided', 'Tables not used for layout', '', '', '1.3.1'],
        [''],
        ['LINKS', '', '', '', '', ''],
        ['', 'Link text is descriptive', 'Not "click here" or URLs', '', '', '2.4.4'],
        ['', 'Links are properly tagged', 'Link tag with correct destination', '', '', '1.3.1'],
        ['', 'Link destinations are valid', 'Test all hyperlinks', '', '', '2.4.4'],
        [''],
        ['FORMS', '', '', '', '', ''],
        ['', 'Form fields have labels', 'Tooltip describes purpose', '', '', '1.3.1'],
        ['', 'Form fields are tagged', 'Form field tags in Tags panel', '', '', '1.3.1'],
        ['', 'Required fields indicated', 'Visual and text indication', '', '', '3.3.2'],
        ['', 'Tab order is logical', 'Test tabbing through form', '', '', '2.4.3'],
        [''],
        ['COLOR & CONTRAST', '', '', '', '', ''],
        ['', 'Text has sufficient contrast', 'Minimum 4.5:1 ratio', '', '', '1.4.3'],
        ['', 'Color not sole indicator', 'Required fields, links, errors', '', '', '1.4.1'],
        [''],
        ['FONTS & TEXT', '', '', '', '', ''],
        ['', 'Fonts are embedded', 'File > Properties > Fonts', '', '', '1.4.5'],
        ['', 'Text is actual text (not images)', 'Select text to verify', '', '', '1.4.5'],
        ['', 'Text reflows properly', 'View > Zoom > Reflow', '', '', '1.4.10'],
        [''],
        ['ACCESSIBILITY CHECKER', '', '', '', '', ''],
        ['', 'Run Acrobat accessibility check', 'Accessibility > Full Check', '', '', 'All'],
        ['', 'Fix all flagged issues', 'Review and resolve each item', '', '', 'All'],
        ['', 'Test with screen reader', 'NVDA, JAWS, or VoiceOver', '', '', 'All'],
    ]

    const ws = XLSX.utils.aoa_to_sheet(checklistData)
    ws['!cols'] = [{ wch: 22 }, { wch: 40 }, { wch: 40 }, { wch: 10 }, { wch: 25 }, { wch: 8 }]
    XLSX.utils.book_append_sheet(wb, ws, 'PDF Checklist')

    // Tools reference sheet
    const toolsData = [
        ['PDF ACCESSIBILITY TOOLS REFERENCE'],
        [''],
        ['TOOL', 'PURPOSE', 'FREE/PAID', 'LINK'],
        ['Adobe Acrobat Pro', 'Create and fix PDF accessibility', 'Paid', 'adobe.com/acrobat'],
        ['PAC 2024', 'PDF accessibility checker', 'Free', 'pdfua.foundation/pac'],
        ['NVDA', 'Free screen reader for testing', 'Free', 'nvaccess.org'],
        ['axe PDF checker', 'Browser-based PDF checker', 'Free tier', 'axe.pdf'],
        ['CommonLook PDF', 'Enterprise PDF remediation', 'Paid', 'commonlook.com'],
        ['Word/Google Docs', 'Create accessible source documents', 'Varies', ''],
        ['', '', '', ''],
        ['TIPS FOR CREATING ACCESSIBLE PDFs'],
        ['1. Start with an accessible source document (Word, InDesign)'],
        ['2. Use styles for headings, not manual formatting'],
        ['3. Add alt text to images before exporting to PDF'],
        ['4. Run accessibility checker in source application'],
        ['5. Export/Save As PDF with accessibility options enabled'],
        ['6. Run Acrobat accessibility check and fix remaining issues'],
        ['7. Test with a screen reader before publishing'],
    ]

    const toolsWs = XLSX.utils.aoa_to_sheet(toolsData)
    toolsWs['!cols'] = [{ wch: 20 }, { wch: 40 }, { wch: 12 }, { wch: 25 }]
    XLSX.utils.book_append_sheet(wb, toolsWs, 'Tools Reference')

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    return new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
}

// ============================================================================
// DOWNLOAD HELPERS
// ============================================================================

export function downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}

export const templateDownloaders = {
    accessibilityStatement: () => {
        const blob = generateAccessibilityStatementTemplate()
        downloadBlob(blob, 'accessibility-statement-template.xlsx')
    },
    qaTestingChecklist: () => {
        const blob = generateQATestingChecklist()
        downloadBlob(blob, 'qa-accessibility-testing-checklist.xlsx')
    },
    formAccessibilityChecklist: () => {
        const blob = generateFormAccessibilityChecklist()
        downloadBlob(blob, 'form-accessibility-checklist.xlsx')
    },
    mobileAccessibilityChecklist: () => {
        const blob = generateMobileAccessibilityChecklist()
        downloadBlob(blob, 'mobile-app-accessibility-checklist.xlsx')
    },
    pdfAccessibilityChecklist: () => {
        const blob = generatePDFAccessibilityChecklist()
        downloadBlob(blob, 'pdf-accessibility-checklist.xlsx')
    },
}
