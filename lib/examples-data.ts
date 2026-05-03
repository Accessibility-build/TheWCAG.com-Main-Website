/**
 * Static index of /examples pages. Surfaces in:
 *   - global search (lib/search.ts)
 *   - any future examples-listing UI
 *
 * Data is bundled to the client, so we can't read the filesystem here.
 * Source-of-truth lives in this file; `scripts/check-links.ts` enforces
 * that every directory under app/examples/ has a matching entry.
 */

export interface ExampleEntry {
  /** URL slug — must match the directory name under app/examples/ */
  slug: string
  title: string
  description: string
  category?: string
  keywords?: string[]
}

export const examples: ExampleEntry[] = [
  {
    slug: 'accessible-input-fields',
    title: 'Accessible Input Fields',
    description: 'Proper labels, error messages, and validation for accessible form inputs',
    category: 'Forms',
    keywords: ['input', 'form', 'label', 'validation'],
  },
  {
    slug: 'forms',
    title: 'Forms',
    description: 'Complete form patterns with validation, multi-step, and fieldset groups',
    category: 'Forms',
    keywords: ['form', 'validation', 'multi-step', 'fieldset'],
  },
  {
    slug: 'dropdowns-selects',
    title: 'Dropdowns & Selects',
    description: 'Native and custom select components with ARIA combobox pattern',
    category: 'Forms',
    keywords: ['dropdown', 'select', 'combobox', 'aria'],
  },
  {
    slug: 'tables',
    title: 'Tables',
    description: 'Semantic HTML and ARIA table patterns with sorting and responsive layouts',
    category: 'Data Display',
    keywords: ['table', 'data', 'sorting', 'responsive'],
  },
  {
    slug: 'navigation',
    title: 'Navigation',
    description: 'Accessible navigation patterns including menus, breadcrumbs, and skip links',
    category: 'Navigation',
    keywords: ['navigation', 'menu', 'breadcrumb', 'skip link'],
  },
  {
    slug: 'buttons-links',
    title: 'Buttons & Links',
    description: 'Accessible button and link patterns with proper semantics and keyboard support',
    category: 'Interactive',
    keywords: ['button', 'link', 'keyboard', 'semantic'],
  },
  {
    slug: 'modals-dialogs',
    title: 'Modals & Dialogs',
    description: 'Accessible modal and dialog patterns with focus management and ARIA',
    category: 'Interactive',
    keywords: ['modal', 'dialog', 'focus', 'aria'],
  },
  {
    slug: 'tooltips',
    title: 'Tooltips',
    description: 'Accessible tooltip patterns with proper ARIA attributes and keyboard support',
    category: 'Interactive',
    keywords: ['tooltip', 'aria', 'keyboard'],
  },
  {
    slug: 'accordions',
    title: 'Accordions',
    description: 'Accessible accordion patterns with proper ARIA and keyboard navigation',
    category: 'Interactive',
    keywords: ['accordion', 'collapse', 'aria', 'keyboard'],
  },
  {
    slug: 'cards',
    title: 'Cards',
    description: 'Accessible card components with proper heading hierarchy',
    category: 'Data Display',
    keywords: ['card', 'component', 'heading'],
  },
  {
    slug: 'lists',
    title: 'Lists',
    description: 'Semantic lists with proper structure and ARIA patterns',
    category: 'Data Display',
    keywords: ['list', 'semantic', 'aria'],
  },
  {
    slug: 'pagination',
    title: 'Pagination',
    description: 'Keyboard accessible page navigation with proper ARIA',
    category: 'Navigation',
    keywords: ['pagination', 'navigation', 'aria', 'keyboard'],
  },
  {
    slug: 'progress-indicators',
    title: 'Progress Indicators',
    description: 'Accessible progress indicators and loading states with ARIA live regions',
    category: 'Feedback',
    keywords: ['progress', 'loading', 'aria live', 'status'],
  },
]

export function getExampleSlugs(): string[] {
  return examples.map((e) => e.slug)
}
