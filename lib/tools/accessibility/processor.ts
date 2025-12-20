/**
 * Process and format axe-core accessibility test results
 * Enhanced with human-readable formatting, WCAG criterion details, and fix complexity
 */

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface ScreenshotData {
  data: string
  width: number
  height: number
}

export interface AxeViolation {
  id: string
  impact?: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  help: string
  helpUrl: string
  tags: string[]
  nodes: Array<{
    html: string
    target: string[]
    failureSummary?: string
    any?: Array<{ message: string; data?: Record<string, unknown> }>
    all?: Array<{ message: string; data?: Record<string, unknown> }>
    none?: Array<{ message: string; data?: Record<string, unknown> }>
    screenshot?: ScreenshotData
    element?: {
      computedStyles?: Record<string, string>
      textContent?: string
      ariaAttributes?: Record<string, string>
      parentInfo?: {
        tagName: string
        className?: string
        id?: string
      }
    }
  }>
}

export interface AxePass {
  id: string
  description: string
  help: string
  helpUrl: string
  tags: string[]
  nodes: Array<{
    html: string
    target: string[]
  }>
}

export interface AxeIncomplete {
  id: string
  impact?: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  help: string
  helpUrl: string
  tags: string[]
  nodes: Array<{
    html: string
    target: string[]
    failureSummary?: string
  }>
}

export interface WCAGCriterion {
  id: string
  number: string
  name: string
  level: 'A' | 'AA' | 'AAA'
  version: '2.0' | '2.1' | '2.2'
  url: string
}

export interface ElementContext {
  tagName: string
  className?: string
  id?: string
  textContent?: string
  ariaLabel?: string
  ariaRole?: string
  parentTagName?: string
  parentClassName?: string
  formattedSelector: string
}

export type FixComplexity = 'quick' | 'moderate' | 'complex'

export interface ProcessedResults {
  url: string
  timestamp: string
  pageMetadata?: {
    title?: string
    description?: string
    language?: string
  }
  violations: ProcessedViolation[]
  passes: ProcessedPass[]
  incomplete: ProcessedIncomplete[]
  summary: {
    violations: number
    passes: number
    incomplete: number
    totalIssues: number
    complianceScore: number
    impactBreakdown: {
      critical: number
      serious: number
      moderate: number
      minor: number
    }
    fixComplexityBreakdown: {
      quick: number
      moderate: number
      complex: number
    }
    estimatedFixTime: {
      min: number
      max: number
      unit: 'minutes' | 'hours'
    }
  }
}

export interface ProcessedViolation {
  id: string
  ruleName: string
  humanReadableName: string
  impact: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  help: string
  helpUrl: string
  wcagCriteria: WCAGCriterion[]
  wcagCriteriaStrings: string[]
  fixComplexity: FixComplexity
  estimatedFixTime: { min: number; max: number; unit: 'minutes' }
  priorityScore: number
  affectedElements: Array<{
    html: string
    selector: string
    formattedSelector: string
    failureSummary?: string
    fixGuidance?: string
    context?: ElementContext
    screenshot?: {
      data: string
      width: number
      height: number
    }
  }>
  fixGuidance: string
  codeExamples?: {
    before?: string
    after?: string
  }
}

export interface ProcessedPass {
  id: string
  ruleName: string
  humanReadableName: string
  description: string
  help: string
  helpUrl: string
  wcagCriteria: WCAGCriterion[]
  wcagCriteriaStrings: string[]
  checkedElements: number
}

export interface ProcessedIncomplete {
  id: string
  ruleName: string
  humanReadableName: string
  impact?: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  help: string
  helpUrl: string
  wcagCriteria: WCAGCriterion[]
  wcagCriteriaStrings: string[]
  affectedElements: Array<{
    html: string
    selector: string
    formattedSelector: string
    failureSummary?: string
    context?: ElementContext
  }>
}

// ============================================================================
// Rule Name Mapping (Technical ID → Human-Readable Name)
// ============================================================================

const RULE_NAME_MAP: Record<string, string> = {
  // Color & Contrast
  'color-contrast': 'Color Contrast',
  'color-contrast-enhanced': 'Enhanced Color Contrast',
  'link-in-text-block': 'Link Distinguishable from Text',
  
  // Images
  'image-alt': 'Image Alternative Text',
  'image-redundant-alt': 'Redundant Image Alternative Text',
  'input-image-alt': 'Input Image Alternative Text',
  'object-alt': 'Object Alternative Text',
  'svg-img-alt': 'SVG Image Alternative Text',
  'area-alt': 'Image Map Area Alternative Text',
  
  // Forms & Inputs
  'label': 'Form Input Labels',
  'input-button-name': 'Input Button Name',
  'select-name': 'Select Element Name',
  'autocomplete-valid': 'Valid Autocomplete Attribute',
  
  // Links & Buttons
  'link-name': 'Link Name',
  'button-name': 'Button Accessible Name',
  'identical-links-same-purpose': 'Identical Links Same Purpose',
  
  // Headings
  'heading-order': 'Heading Order',
  'empty-heading': 'Empty Heading',
  'page-has-heading-one': 'Page Has Level One Heading',
  
  // Tables
  'table-duplicate-name': 'Duplicate Table Name',
  'td-headers-attr': 'Table Header Attributes',
  'th-has-data-cells': 'Table Headers Have Data Cells',
  'table-fake-caption': 'Table Fake Caption',
  'scope-attr-valid': 'Valid Scope Attribute',
  
  // Document Structure
  'document-title': 'Document Title',
  'html-has-lang': 'HTML Language Attribute',
  'html-lang-valid': 'Valid HTML Language',
  'html-xml-lang-mismatch': 'HTML/XML Language Mismatch',
  'valid-lang': 'Valid Language',
  'landmark-one-main': 'Single Main Landmark',
  'landmark-unique': 'Unique Landmarks',
  'landmark-no-duplicate-banner': 'No Duplicate Banner Landmarks',
  'landmark-no-duplicate-contentinfo': 'No Duplicate Contentinfo Landmarks',
  'landmark-no-duplicate-main': 'No Duplicate Main Landmarks',
  'landmark-banner-is-top-level': 'Banner Landmark Top Level',
  'landmark-contentinfo-is-top-level': 'Contentinfo Landmark Top Level',
  'landmark-main-is-top-level': 'Main Landmark Top Level',
  'landmark-complementary-is-top-level': 'Complementary Landmark Top Level',
  'region': 'Content Within Landmarks',
  'bypass': 'Skip Navigation Link',
  
  // ARIA
  'aria-allowed-attr': 'Allowed ARIA Attributes',
  'aria-allowed-role': 'Allowed ARIA Role',
  'aria-command-name': 'ARIA Command Name',
  'aria-dialog-name': 'ARIA Dialog Name',
  'aria-hidden-body': 'ARIA Hidden Body',
  'aria-hidden-focus': 'ARIA Hidden Focus',
  'aria-input-field-name': 'ARIA Input Field Name',
  'aria-meter-name': 'ARIA Meter Name',
  'aria-progressbar-name': 'ARIA Progress Bar Name',
  'aria-required-attr': 'Required ARIA Attributes',
  'aria-required-children': 'Required ARIA Children',
  'aria-required-parent': 'Required ARIA Parent',
  'aria-roledescription': 'ARIA Role Description',
  'aria-roles': 'Valid ARIA Roles',
  'aria-text': 'ARIA Text',
  'aria-toggle-field-name': 'ARIA Toggle Field Name',
  'aria-tooltip-name': 'ARIA Tooltip Name',
  'aria-treeitem-name': 'ARIA Tree Item Name',
  'aria-valid-attr': 'Valid ARIA Attributes',
  'aria-valid-attr-value': 'Valid ARIA Attribute Values',
  
  // Keyboard & Focus
  'focus-order-semantics': 'Focus Order Semantics',
  'focusable-disabled': 'Focusable Disabled Elements',
  'scrollable-region-focusable': 'Scrollable Regions Focusable',
  'tabindex': 'Valid Tabindex',
  'accesskeys': 'Unique Access Keys',
  'focus-not-trapped': 'Focus Not Trapped',
  
  // Frames & iframes
  'frame-title': 'Frame Title',
  'frame-title-unique': 'Unique Frame Titles',
  'frame-tested': 'Frame Tested',
  'frame-focusable-content': 'Frame Focusable Content',
  
  // Lists
  'list': 'Proper List Structure',
  'listitem': 'List Item Parent',
  'definition-list': 'Definition List Structure',
  'dlitem': 'Definition List Item',
  
  // Media
  'audio-caption': 'Audio Captions',
  'video-caption': 'Video Captions',
  'video-description': 'Video Description',
  
  // Forms Advanced
  'form-field-multiple-labels': 'Multiple Form Labels',
  'hidden-content': 'Hidden Content',
  'label-content-name-mismatch': 'Label Content Name Mismatch',
  'label-title-only': 'Label Title Only',
  
  // Other
  'blink': 'No Blinking Content',
  'marquee': 'No Marquee Element',
  'meta-refresh': 'No Meta Refresh',
  'meta-viewport': 'Meta Viewport',
  'meta-viewport-large': 'Meta Viewport Large',
  'no-autoplay-audio': 'No Autoplay Audio',
  'server-side-image-map': 'No Server-Side Image Map',
  'duplicate-id': 'Unique Element IDs',
  'duplicate-id-active': 'Unique Active Element IDs',
  'duplicate-id-aria': 'Unique ARIA IDs',
  'nested-interactive': 'No Nested Interactive Elements',
  'css-orientation-lock': 'CSS Orientation Lock',
  'target-size': 'Target Size',
  'p-as-heading': 'Paragraph Used as Heading',
  'presentation-role-conflict': 'Presentation Role Conflict',
  'role-img-alt': 'Role Img Alternative Text',
  'summary-name': 'Summary Name',
}

// ============================================================================
// WCAG Criterion Mapping (Tag → Full Criterion Details)
// ============================================================================

const WCAG_CRITERION_MAP: Record<string, WCAGCriterion> = {
  // WCAG 2.0 Level A
  'wcag111': { id: 'wcag111', number: '1.1.1', name: 'Non-text Content', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content' },
  'wcag121': { id: 'wcag121', number: '1.2.1', name: 'Audio-only and Video-only (Prerecorded)', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded' },
  'wcag122': { id: 'wcag122', number: '1.2.2', name: 'Captions (Prerecorded)', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded' },
  'wcag123': { id: 'wcag123', number: '1.2.3', name: 'Audio Description or Media Alternative', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded' },
  'wcag131': { id: 'wcag131', number: '1.3.1', name: 'Info and Relationships', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships' },
  'wcag132': { id: 'wcag132', number: '1.3.2', name: 'Meaningful Sequence', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence' },
  'wcag133': { id: 'wcag133', number: '1.3.3', name: 'Sensory Characteristics', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics' },
  'wcag141': { id: 'wcag141', number: '1.4.1', name: 'Use of Color', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color' },
  'wcag142': { id: 'wcag142', number: '1.4.2', name: 'Audio Control', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-control' },
  'wcag211': { id: 'wcag211', number: '2.1.1', name: 'Keyboard', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard' },
  'wcag212': { id: 'wcag212', number: '2.1.2', name: 'No Keyboard Trap', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap' },
  'wcag221': { id: 'wcag221', number: '2.2.1', name: 'Timing Adjustable', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable' },
  'wcag222': { id: 'wcag222', number: '2.2.2', name: 'Pause, Stop, Hide', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide' },
  'wcag231': { id: 'wcag231', number: '2.3.1', name: 'Three Flashes or Below Threshold', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold' },
  'wcag241': { id: 'wcag241', number: '2.4.1', name: 'Bypass Blocks', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks' },
  'wcag242': { id: 'wcag242', number: '2.4.2', name: 'Page Titled', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled' },
  'wcag243': { id: 'wcag243', number: '2.4.3', name: 'Focus Order', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-order' },
  'wcag244': { id: 'wcag244', number: '2.4.4', name: 'Link Purpose (In Context)', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context' },
  'wcag251': { id: 'wcag251', number: '2.5.1', name: 'Pointer Gestures', level: 'A', version: '2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures' },
  'wcag252': { id: 'wcag252', number: '2.5.2', name: 'Pointer Cancellation', level: 'A', version: '2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation' },
  'wcag253': { id: 'wcag253', number: '2.5.3', name: 'Label in Name', level: 'A', version: '2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/label-in-name' },
  'wcag254': { id: 'wcag254', number: '2.5.4', name: 'Motion Actuation', level: 'A', version: '2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation' },
  'wcag311': { id: 'wcag311', number: '3.1.1', name: 'Language of Page', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page' },
  'wcag321': { id: 'wcag321', number: '3.2.1', name: 'On Focus', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-focus' },
  'wcag322': { id: 'wcag322', number: '3.2.2', name: 'On Input', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-input' },
  'wcag331': { id: 'wcag331', number: '3.3.1', name: 'Error Identification', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-identification' },
  'wcag332': { id: 'wcag332', number: '3.3.2', name: 'Labels or Instructions', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions' },
  'wcag411': { id: 'wcag411', number: '4.1.1', name: 'Parsing', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing' },
  'wcag412': { id: 'wcag412', number: '4.1.2', name: 'Name, Role, Value', level: 'A', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value' },
  
  // WCAG 2.0 Level AA
  'wcag124': { id: 'wcag124', number: '1.2.4', name: 'Captions (Live)', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-live' },
  'wcag125': { id: 'wcag125', number: '1.2.5', name: 'Audio Description (Prerecorded)', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded' },
  'wcag134': { id: 'wcag134', number: '1.3.4', name: 'Orientation', level: 'AA', version: '2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/orientation' },
  'wcag135': { id: 'wcag135', number: '1.3.5', name: 'Identify Input Purpose', level: 'AA', version: '2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose' },
  'wcag143': { id: 'wcag143', number: '1.4.3', name: 'Contrast (Minimum)', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum' },
  'wcag144': { id: 'wcag144', number: '1.4.4', name: 'Resize Text', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/resize-text' },
  'wcag145': { id: 'wcag145', number: '1.4.5', name: 'Images of Text', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text' },
  'wcag1410': { id: 'wcag1410', number: '1.4.10', name: 'Reflow', level: 'AA', version: '2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/reflow' },
  'wcag1411': { id: 'wcag1411', number: '1.4.11', name: 'Non-text Contrast', level: 'AA', version: '2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast' },
  'wcag1412': { id: 'wcag1412', number: '1.4.12', name: 'Text Spacing', level: 'AA', version: '2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/text-spacing' },
  'wcag1413': { id: 'wcag1413', number: '1.4.13', name: 'Content on Hover or Focus', level: 'AA', version: '2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus' },
  'wcag245': { id: 'wcag245', number: '2.4.5', name: 'Multiple Ways', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways' },
  'wcag246': { id: 'wcag246', number: '2.4.6', name: 'Headings and Labels', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels' },
  'wcag247': { id: 'wcag247', number: '2.4.7', name: 'Focus Visible', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-visible' },
  'wcag312': { id: 'wcag312', number: '3.1.2', name: 'Language of Parts', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts' },
  'wcag323': { id: 'wcag323', number: '3.2.3', name: 'Consistent Navigation', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation' },
  'wcag324': { id: 'wcag324', number: '3.2.4', name: 'Consistent Identification', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification' },
  'wcag333': { id: 'wcag333', number: '3.3.3', name: 'Error Suggestion', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion' },
  'wcag334': { id: 'wcag334', number: '3.3.4', name: 'Error Prevention (Legal, Financial, Data)', level: 'AA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data' },
  'wcag413': { id: 'wcag413', number: '4.1.3', name: 'Status Messages', level: 'AA', version: '2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/status-messages' },
  
  // WCAG 2.2 Additions
  'wcag2411': { id: 'wcag2411', number: '2.4.11', name: 'Focus Not Obscured (Minimum)', level: 'AA', version: '2.2', url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum' },
  'wcag257': { id: 'wcag257', number: '2.5.7', name: 'Dragging Movements', level: 'AA', version: '2.2', url: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements' },
  'wcag258': { id: 'wcag258', number: '2.5.8', name: 'Target Size (Minimum)', level: 'AA', version: '2.2', url: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum' },
  'wcag326': { id: 'wcag326', number: '3.2.6', name: 'Consistent Help', level: 'A', version: '2.2', url: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-help' },
  'wcag337': { id: 'wcag337', number: '3.3.7', name: 'Redundant Entry', level: 'A', version: '2.2', url: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry' },
  'wcag338': { id: 'wcag338', number: '3.3.8', name: 'Accessible Authentication (Minimum)', level: 'AA', version: '2.2', url: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum' },
  
  // WCAG 2.0 Level AAA
  'wcag146': { id: 'wcag146', number: '1.4.6', name: 'Contrast (Enhanced)', level: 'AAA', version: '2.0', url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced' },
}

// Rule to WCAG mapping for better criterion detection
const RULE_WCAG_MAP: Record<string, string[]> = {
  'color-contrast': ['wcag143'],
  'color-contrast-enhanced': ['wcag146'],
  'image-alt': ['wcag111'],
  'input-image-alt': ['wcag111', 'wcag412'],
  'object-alt': ['wcag111'],
  'svg-img-alt': ['wcag111'],
  'area-alt': ['wcag111', 'wcag244'],
  'label': ['wcag111', 'wcag131', 'wcag412'],
  'input-button-name': ['wcag412'],
  'select-name': ['wcag412', 'wcag131'],
  'autocomplete-valid': ['wcag135'],
  'link-name': ['wcag244', 'wcag412'],
  'button-name': ['wcag412'],
  'heading-order': ['wcag131'],
  'empty-heading': ['wcag131'],
  'page-has-heading-one': ['wcag131'],
  'document-title': ['wcag242'],
  'html-has-lang': ['wcag311'],
  'html-lang-valid': ['wcag311'],
  'valid-lang': ['wcag312'],
  'landmark-one-main': ['wcag131'],
  'bypass': ['wcag241'],
  'frame-title': ['wcag241', 'wcag412'],
  'aria-allowed-attr': ['wcag412'],
  'aria-hidden-focus': ['wcag412', 'wcag211'],
  'aria-required-attr': ['wcag412'],
  'aria-required-children': ['wcag131'],
  'aria-required-parent': ['wcag131'],
  'aria-roles': ['wcag412'],
  'aria-valid-attr': ['wcag412'],
  'aria-valid-attr-value': ['wcag412'],
  'tabindex': ['wcag211'],
  'focus-not-trapped': ['wcag212'],
  'audio-caption': ['wcag122', 'wcag124'],
  'video-caption': ['wcag122', 'wcag124'],
  'video-description': ['wcag123', 'wcag125'],
  'blink': ['wcag222'],
  'marquee': ['wcag222'],
  'meta-refresh': ['wcag221', 'wcag222'],
  'meta-viewport': ['wcag144'],
  'duplicate-id': ['wcag411'],
  'duplicate-id-active': ['wcag411'],
  'duplicate-id-aria': ['wcag411'],
  'target-size': ['wcag258'],
  'css-orientation-lock': ['wcag134'],
}

// ============================================================================
// Fix Complexity Estimation
// ============================================================================

const QUICK_FIX_RULES = new Set([
  'image-alt',
  'button-name',
  'link-name',
  'document-title',
  'html-has-lang',
  'html-lang-valid',
  'frame-title',
  'aria-required-attr',
  'aria-valid-attr',
  'aria-valid-attr-value',
  'label',
  'empty-heading',
  'duplicate-id',
  'meta-viewport',
])

const COMPLEX_FIX_RULES = new Set([
  'color-contrast',
  'color-contrast-enhanced',
  'bypass',
  'focus-order-semantics',
  'landmark-one-main',
  'region',
  'focus-not-trapped',
  'nested-interactive',
  'aria-hidden-focus',
  'heading-order',
  'table-fake-caption',
])

// Time estimates in minutes
const FIX_TIME_ESTIMATES: Record<FixComplexity, { min: number; max: number }> = {
  quick: { min: 1, max: 5 },
  moderate: { min: 5, max: 15 },
  complex: { min: 15, max: 45 },
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Format rule ID to human-readable name
 */
export function formatRuleName(ruleId: string): string {
  if (RULE_NAME_MAP[ruleId]) {
    return RULE_NAME_MAP[ruleId]
  }
  
  // Fallback: convert kebab-case to Title Case
  return ruleId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Get WCAG criterion details from tags
 */
export function getWCAGCriterionDetails(tags: string[], ruleId?: string): WCAGCriterion[] {
  const criteria: WCAGCriterion[] = []
  const seenIds = new Set<string>()
  
  // First, check rule-specific mappings
  if (ruleId && RULE_WCAG_MAP[ruleId]) {
    RULE_WCAG_MAP[ruleId].forEach(wcagId => {
      if (WCAG_CRITERION_MAP[wcagId] && !seenIds.has(wcagId)) {
        criteria.push(WCAG_CRITERION_MAP[wcagId])
        seenIds.add(wcagId)
      }
    })
  }
  
  // Then, parse tags for additional criteria
  tags.forEach(tag => {
    // Match patterns like "wcag111", "wcag143", "wcag2aa", etc.
    const match = tag.match(/^wcag(\d{2,4})$/)
    if (match) {
      const wcagId = tag
      if (WCAG_CRITERION_MAP[wcagId] && !seenIds.has(wcagId)) {
        criteria.push(WCAG_CRITERION_MAP[wcagId])
        seenIds.add(wcagId)
      }
    }
  })
  
  return criteria
}

/**
 * Calculate fix complexity for a violation
 */
export function calculateFixComplexity(violation: AxeViolation): FixComplexity {
  const ruleId = violation.id
  const nodeCount = violation.nodes.length
  
  // Check if rule is known to be quick or complex
  if (QUICK_FIX_RULES.has(ruleId)) {
    return nodeCount > 10 ? 'moderate' : 'quick'
  }
  
  if (COMPLEX_FIX_RULES.has(ruleId)) {
    return 'complex'
  }
  
  // Default: use impact and node count
  if (nodeCount > 20 || violation.impact === 'critical') {
    return 'complex'
  } else if (nodeCount > 5 || violation.impact === 'serious') {
    return 'moderate'
  }
  
  return 'quick'
}

/**
 * Get estimated fix time
 */
export function getEstimatedFixTime(complexity: FixComplexity, nodeCount: number): { min: number; max: number; unit: 'minutes' } {
  const baseTime = FIX_TIME_ESTIMATES[complexity]
  const multiplier = Math.max(1, Math.ceil(nodeCount / 5))
  
  return {
    min: baseTime.min * multiplier,
    max: baseTime.max * multiplier,
    unit: 'minutes',
  }
}

/**
 * Calculate priority score (higher = more urgent)
 */
export function calculatePriorityScore(impact: string | undefined, nodeCount: number, complexity: FixComplexity): number {
  let score = 0
  
  // Impact weight (0-40)
  switch (impact) {
    case 'critical': score += 40; break
    case 'serious': score += 30; break
    case 'moderate': score += 20; break
    case 'minor': score += 10; break
    default: score += 15
  }
  
  // Frequency weight (0-30)
  score += Math.min(30, nodeCount * 3)
  
  // Quick wins bonus (0-20)
  if (complexity === 'quick') {
    score += 20
  } else if (complexity === 'moderate') {
    score += 10
  }
  
  return score
}

/**
 * Extract element context from node data
 */
export function extractElementContext(node: AxeViolation['nodes'][0]): ElementContext {
  const target = node.target[0] || ''
  
  // Parse selector to extract element info
  const tagMatch = target.match(/^([a-z][a-z0-9]*)/i)
  const classMatch = target.match(/\.([a-zA-Z0-9_-]+)/g)
  const idMatch = target.match(/#([a-zA-Z0-9_-]+)/)
  
  // Extract from HTML
  const htmlTagMatch = node.html.match(/<([a-z][a-z0-9]*)/i)
  const htmlIdMatch = node.html.match(/id=["']([^"']+)["']/i)
  const htmlClassMatch = node.html.match(/class=["']([^"']+)["']/i)
  const ariaLabelMatch = node.html.match(/aria-label=["']([^"']+)["']/i)
  const ariaRoleMatch = node.html.match(/role=["']([^"']+)["']/i)
  
  // Extract text content (simplified)
  const textMatch = node.html.match(/>([^<]+)</g)
  const textContent = textMatch
    ? textMatch
        .map(t => t.slice(1, -1).trim())
        .filter(t => t.length > 0)
        .join(' ')
        .slice(0, 100)
    : undefined
  
  const className = classMatch
    ? classMatch.map(c => c.slice(1)).join(' ')
    : htmlClassMatch?.[1]
  
  return {
    tagName: (tagMatch?.[1] || htmlTagMatch?.[1] || 'element').toUpperCase(),
    className: className?.slice(0, 50),
    id: idMatch?.[1] || htmlIdMatch?.[1],
    textContent: textContent?.slice(0, 100),
    ariaLabel: ariaLabelMatch?.[1],
    ariaRole: ariaRoleMatch?.[1],
    parentTagName: node.element?.parentInfo?.tagName,
    parentClassName: node.element?.parentInfo?.className,
    formattedSelector: formatSelector(node.target),
  }
}

/**
 * Format selector to be more readable
 */
export function formatSelector(target: string[]): string {
  const selector = target.join(' > ')
  
  // Simplify long selectors
  if (selector.length > 100) {
    const parts = target
    if (parts.length > 3) {
      return `${parts[0]} > ... > ${parts[parts.length - 1]}`
    }
  }
  
  return selector
}

/**
 * Convert WCAG criteria array to string array
 */
function wcagCriteriaToStrings(criteria: WCAGCriterion[]): string[] {
  return criteria.map(c => `${c.number} ${c.name} (Level ${c.level})`)
}

// ============================================================================
// Legacy WCAG Mapping (for backwards compatibility)
// ============================================================================

/**
 * Map axe-core rule IDs to WCAG success criteria (legacy format)
 */
function mapToWCAGCriteria(tags: string[]): string[] {
  const wcagCriteria: string[] = []
  
  // Extract WCAG criteria from tags
  tags.forEach((tag) => {
    if (tag.startsWith('wcag')) {
      // Convert tags like "wcag2a", "wcag2aa" to criteria
      if (tag.includes('2a') && !tag.includes('2aa')) {
        wcagCriteria.push('WCAG 2.0 Level A')
      }
      if (tag.includes('2aa')) {
        wcagCriteria.push('WCAG 2.0 Level AA')
      }
      if (tag.includes('21aa')) {
        wcagCriteria.push('WCAG 2.1 Level AA')
      }
      if (tag.includes('22aa')) {
        wcagCriteria.push('WCAG 2.2 Level AA')
      }
    }
  })

  return [...new Set(wcagCriteria)] // Remove duplicates
}

// ============================================================================
// Main Processing Functions
// ============================================================================

/**
 * Extract fix guidance from violation node
 */
function extractFixGuidance(node: AxeViolation['nodes'][0]): string {
  const guidance: string[] = []

  if (node.failureSummary) {
    guidance.push(node.failureSummary)
  }

  if (node.any && node.any.length > 0) {
    node.any.forEach((check) => {
      if (check.message) {
        guidance.push(check.message)
      }
    })
  }

  if (node.all && node.all.length > 0) {
    node.all.forEach((check) => {
      if (check.message) {
        guidance.push(check.message)
      }
    })
  }

  if (node.none && node.none.length > 0) {
    node.none.forEach((check) => {
      if (check.message) {
        guidance.push(check.message)
      }
    })
  }

  return guidance.join(' ') || 'Review the element and ensure it meets accessibility requirements.'
}

/**
 * Process violations with enhanced data
 */
function processViolations(violations: AxeViolation[]): ProcessedViolation[] {
  return violations.map((violation) => {
    const fixComplexity = calculateFixComplexity(violation)
    const wcagCriteria = getWCAGCriterionDetails(violation.tags, violation.id)
    const estimatedFixTime = getEstimatedFixTime(fixComplexity, violation.nodes.length)
    const priorityScore = calculatePriorityScore(violation.impact, violation.nodes.length, fixComplexity)
    
    const processedViolation: ProcessedViolation = {
      id: violation.id,
      ruleName: violation.id,
      humanReadableName: formatRuleName(violation.id),
      impact: violation.impact || 'moderate',
      description: violation.description,
      help: violation.help,
      helpUrl: violation.helpUrl,
      wcagCriteria,
      wcagCriteriaStrings: wcagCriteria.length > 0 
        ? wcagCriteriaToStrings(wcagCriteria)
        : mapToWCAGCriteria(violation.tags),
      fixComplexity,
      estimatedFixTime,
      priorityScore,
      affectedElements: violation.nodes.map((node) => ({
        html: node.html,
        selector: node.target.join(' '),
        formattedSelector: formatSelector(node.target),
        failureSummary: node.failureSummary,
        fixGuidance: extractFixGuidance(node),
        context: extractElementContext(node),
        screenshot: node.screenshot,
      })),
      fixGuidance: violation.help,
    }

    return processedViolation
  })
}

/**
 * Process passes with enhanced data
 */
function processPasses(passes: AxePass[]): ProcessedPass[] {
  return passes.map((pass) => {
    const wcagCriteria = getWCAGCriterionDetails(pass.tags, pass.id)
    
    return {
      id: pass.id,
      ruleName: pass.id,
      humanReadableName: formatRuleName(pass.id),
      description: pass.description,
      help: pass.help,
      helpUrl: pass.helpUrl,
      wcagCriteria,
      wcagCriteriaStrings: wcagCriteria.length > 0 
        ? wcagCriteriaToStrings(wcagCriteria)
        : mapToWCAGCriteria(pass.tags),
      checkedElements: pass.nodes.length,
    }
  })
}

/**
 * Process incomplete checks with enhanced data
 */
function processIncomplete(incomplete: AxeIncomplete[]): ProcessedIncomplete[] {
  return incomplete.map((item) => {
    const wcagCriteria = getWCAGCriterionDetails(item.tags, item.id)
    
    return {
      id: item.id,
      ruleName: item.id,
      humanReadableName: formatRuleName(item.id),
      impact: item.impact,
      description: item.description,
      help: item.help,
      helpUrl: item.helpUrl,
      wcagCriteria,
      wcagCriteriaStrings: wcagCriteria.length > 0 
        ? wcagCriteriaToStrings(wcagCriteria)
        : mapToWCAGCriteria(item.tags),
      affectedElements: item.nodes.map((node) => ({
        html: node.html,
        selector: node.target.join(' '),
        formattedSelector: formatSelector(node.target),
        failureSummary: node.failureSummary,
        context: extractElementContext({ ...node, any: [], all: [], none: [] }),
      })),
    }
  })
}

/**
 * Calculate compliance score (0-100)
 */
function calculateComplianceScore(violations: ProcessedViolation[], passes: ProcessedPass[]): number {
  const totalRules = violations.length + passes.length
  if (totalRules === 0) return 100
  
  // Weight violations by impact
  let weightedViolations = 0
  violations.forEach(v => {
    switch (v.impact) {
      case 'critical': weightedViolations += 4; break
      case 'serious': weightedViolations += 3; break
      case 'moderate': weightedViolations += 2; break
      case 'minor': weightedViolations += 1; break
    }
  })
  
  const maxPossibleWeight = (violations.length + passes.length) * 4
  const score = Math.round(((maxPossibleWeight - weightedViolations) / maxPossibleWeight) * 100)
  
  return Math.max(0, Math.min(100, score))
}

/**
 * Calculate impact breakdown
 */
function calculateImpactBreakdown(violations: ProcessedViolation[]): Record<'critical' | 'serious' | 'moderate' | 'minor', number> {
  const breakdown = { critical: 0, serious: 0, moderate: 0, minor: 0 }
  
  violations.forEach(v => {
    if (v.impact && breakdown.hasOwnProperty(v.impact)) {
      breakdown[v.impact]++
    }
  })
  
  return breakdown
}

/**
 * Calculate fix complexity breakdown
 */
function calculateFixComplexityBreakdown(violations: ProcessedViolation[]): Record<FixComplexity, number> {
  const breakdown: Record<FixComplexity, number> = { quick: 0, moderate: 0, complex: 0 }
  
  violations.forEach(v => {
    breakdown[v.fixComplexity]++
  })
  
  return breakdown
}

/**
 * Calculate estimated total fix time
 */
function calculateTotalFixTime(violations: ProcessedViolation[]): { min: number; max: number; unit: 'minutes' | 'hours' } {
  let minTotal = 0
  let maxTotal = 0
  
  violations.forEach(v => {
    minTotal += v.estimatedFixTime.min
    maxTotal += v.estimatedFixTime.max
  })
  
  // Convert to hours if over 120 minutes
  if (maxTotal > 120) {
    return {
      min: Math.round(minTotal / 60 * 10) / 10,
      max: Math.round(maxTotal / 60 * 10) / 10,
      unit: 'hours',
    }
  }
  
  return { min: minTotal, max: maxTotal, unit: 'minutes' }
}

/**
 * Process raw axe-core results (main entry point)
 */
export function processAxeResults(
  url: string,
  results: {
    violations: AxeViolation[]
    passes: AxePass[]
    incomplete: AxeIncomplete[]
  },
  pageMetadata?: {
    title?: string
    description?: string
    language?: string
  }
): ProcessedResults {
  const violations = processViolations(results.violations)
  const passes = processPasses(results.passes)
  const incomplete = processIncomplete(results.incomplete)

  // Sort violations by priority score (highest first)
  violations.sort((a, b) => b.priorityScore - a.priorityScore)

  const impactBreakdown = calculateImpactBreakdown(violations)
  const fixComplexityBreakdown = calculateFixComplexityBreakdown(violations)
  const estimatedFixTime = calculateTotalFixTime(violations)
  const complianceScore = calculateComplianceScore(violations, passes)

  return {
    url,
    timestamp: new Date().toISOString(),
    pageMetadata,
    violations,
    passes,
    incomplete,
    summary: {
      violations: violations.length,
      passes: passes.length,
      incomplete: incomplete.length,
      totalIssues: violations.length + incomplete.length,
      complianceScore,
      impactBreakdown,
      fixComplexityBreakdown,
      estimatedFixTime,
    },
  }
}

// ============================================================================
// Display Utility Functions
// ============================================================================

/**
 * Format impact level for display
 */
export function formatImpact(impact?: string): string {
  if (!impact) return 'Unknown'
  return impact.charAt(0).toUpperCase() + impact.slice(1)
}

/**
 * Get impact color class
 */
export function getImpactColor(impact?: string): string {
  switch (impact) {
    case 'critical':
      return 'text-red-600 dark:text-red-400'
    case 'serious':
      return 'text-orange-600 dark:text-orange-400'
    case 'moderate':
      return 'text-yellow-600 dark:text-yellow-400'
    case 'minor':
      return 'text-blue-600 dark:text-blue-400'
    default:
      return 'text-muted-foreground'
  }
}

/**
 * Get impact badge variant
 */
export function getImpactBadgeVariant(impact?: string): 'destructive' | 'default' | 'secondary' | 'outline' {
  switch (impact) {
    case 'critical':
      return 'destructive'
    case 'serious':
      return 'default'
    case 'moderate':
      return 'secondary'
    case 'minor':
      return 'outline'
    default:
      return 'outline'
  }
}

/**
 * Get fix complexity color class
 */
export function getFixComplexityColor(complexity: FixComplexity): string {
  switch (complexity) {
    case 'quick':
      return 'text-green-600 dark:text-green-400'
    case 'moderate':
      return 'text-yellow-600 dark:text-yellow-400'
    case 'complex':
      return 'text-red-600 dark:text-red-400'
    default:
      return 'text-muted-foreground'
  }
}

/**
 * Get fix complexity badge variant
 */
export function getFixComplexityBadgeVariant(complexity: FixComplexity): 'default' | 'secondary' | 'outline' {
  switch (complexity) {
    case 'quick':
      return 'outline'
    case 'moderate':
      return 'secondary'
    case 'complex':
      return 'default'
    default:
      return 'outline'
  }
}

/**
 * Format fix complexity for display
 */
export function formatFixComplexity(complexity: FixComplexity): string {
  switch (complexity) {
    case 'quick':
      return 'Quick Fix'
    case 'moderate':
      return 'Moderate'
    case 'complex':
      return 'Complex'
    default:
      return 'Unknown'
  }
}

/**
 * Get compliance score color
 */
export function getComplianceScoreColor(score: number): string {
  if (score >= 90) return 'text-green-600 dark:text-green-400'
  if (score >= 70) return 'text-yellow-600 dark:text-yellow-400'
  if (score >= 50) return 'text-orange-600 dark:text-orange-400'
  return 'text-red-600 dark:text-red-400'
}

/**
 * Get compliance score background color
 */
export function getComplianceScoreBgColor(score: number): string {
  if (score >= 90) return 'bg-green-500'
  if (score >= 70) return 'bg-yellow-500'
  if (score >= 50) return 'bg-orange-500'
  return 'bg-red-500'
}
