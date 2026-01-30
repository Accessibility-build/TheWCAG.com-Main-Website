import * as XLSX from 'xlsx'
import type { SuccessCriterion } from './wcag-data'

export interface ExcelColumnConfig {
  key: keyof SuccessCriterion | 'implementationChecklistText' | 'testingManualText' | 'testingAutomatedText' | 'whoBenefitsText' | 'commonFailuresText'
  label: string
  width: number
  enabled: boolean
}

export interface ExcelDesignConfig {
  headerColor: string
  levelAColor: string
  levelAAColor: string
  levelAAAColor: string
  enableRowStriping: boolean
  stripingColor: string
  includeBranding: boolean
}

export interface ExcelFilterConfig {
  levels: ('A' | 'AA' | 'AAA')[]
  principles: string[]
  newOnly: boolean
}

export const defaultColumns: ExcelColumnConfig[] = [
  { key: 'number', label: 'Criterion Number', width: 15, enabled: true },
  { key: 'title', label: 'Title', width: 35, enabled: true },
  { key: 'level', label: 'Level', width: 8, enabled: true },
  { key: 'principle', label: 'Principle', width: 15, enabled: true },
  { key: 'guideline', label: 'Guideline', width: 25, enabled: false },
  { key: 'isNew', label: 'New in 2.2', width: 12, enabled: false },
  { key: 'summary', label: 'Summary', width: 50, enabled: true },
  { key: 'description', label: 'Description', width: 60, enabled: false },
  { key: 'whyItMatters', label: 'Why It Matters', width: 50, enabled: false },
  { key: 'whoBenefitsText', label: 'Who Benefits', width: 40, enabled: false },
  { key: 'implementationChecklistText', label: 'Implementation Checklist', width: 50, enabled: false },
  { key: 'testingManualText', label: 'Manual Testing', width: 40, enabled: false },
  { key: 'testingAutomatedText', label: 'Automated Testing', width: 40, enabled: false },
  { key: 'commonFailuresText', label: 'Common Failures', width: 50, enabled: false },
]

export const defaultDesign: ExcelDesignConfig = {
  headerColor: '1a5f7a',
  levelAColor: 'e8f5e9',
  levelAAColor: 'fff3e0',
  levelAAAColor: 'fce4ec',
  enableRowStriping: true,
  stripingColor: 'f5f5f5',
  includeBranding: true,
}

export const defaultFilters: ExcelFilterConfig = {
  levels: ['A', 'AA'],
  principles: ['perceivable', 'operable', 'understandable', 'robust'],
  newOnly: false,
}

function getCellValue(criterion: SuccessCriterion, key: ExcelColumnConfig['key']): string | boolean {
  switch (key) {
    case 'number':
      return criterion.number
    case 'title':
      return criterion.title
    case 'level':
      return criterion.level
    case 'principle':
      return criterion.principle.charAt(0).toUpperCase() + criterion.principle.slice(1)
    case 'guideline':
      return criterion.guideline
    case 'isNew':
      return criterion.isNew ? 'Yes' : 'No'
    case 'summary':
      return criterion.summary
    case 'description':
      return criterion.description
    case 'whyItMatters':
      return criterion.whyItMatters
    case 'whoBenefitsText':
      return criterion.whoBenefits?.join('; ') || ''
    case 'implementationChecklistText':
      return criterion.implementationChecklist
        ?.map(c => `${c.category}: ${c.items.join(', ')}`)
        .join('\n') || ''
    case 'testingManualText':
      return criterion.testing?.manual?.join('\n') || ''
    case 'testingAutomatedText':
      return criterion.testing?.automated?.join('\n') || ''
    case 'commonFailuresText':
      return criterion.commonFailures
        ?.map(f => `• ${f.failure}`)
        .join('\n') || ''
    default:
      return ''
  }
}

function hexToArgb(hex: string): string {
  // Remove # if present and convert to ARGB format for xlsx
  const cleanHex = hex.replace('#', '')
  return 'FF' + cleanHex.toUpperCase()
}

export function generateWCAGExcel(
  criteria: SuccessCriterion[],
  columns: ExcelColumnConfig[],
  design: ExcelDesignConfig,
  filters: ExcelFilterConfig
): Blob {
  // Filter criteria based on settings
  let filteredCriteria = criteria.filter(c => filters.levels.includes(c.level))
  
  if (filters.principles.length > 0) {
    filteredCriteria = filteredCriteria.filter(c => filters.principles.includes(c.principle))
  }
  
  if (filters.newOnly) {
    filteredCriteria = filteredCriteria.filter(c => c.isNew)
  }

  // Get enabled columns only
  const enabledColumns = columns.filter(c => c.enabled)

  // Create workbook and worksheet
  const wb = XLSX.utils.book_new()
  
  // Build data array
  const data: (string | boolean)[][] = []
  
  // Header row
  const headerRow = enabledColumns.map(c => c.label)
  data.push(headerRow)
  
  // Data rows
  filteredCriteria.forEach(criterion => {
    const row = enabledColumns.map(col => getCellValue(criterion, col.key))
    data.push(row)
  })

  // Create worksheet from data
  const ws = XLSX.utils.aoa_to_sheet(data)

  // Set column widths
  ws['!cols'] = enabledColumns.map(col => ({ wch: col.width }))

  // Add some cell styling info (xlsx-style would provide full styling, but xlsx has limited support)
  // We'll add comments and formatting where possible
  
  // Freeze header row
  ws['!freeze'] = { xSplit: 0, ySplit: 1 }

  // Add the worksheet to workbook
  XLSX.utils.book_append_sheet(wb, ws, 'WCAG 2.2 Checklist')

  // Add a summary sheet if branding is enabled
  if (design.includeBranding) {
    const summaryData = [
      ['WCAG 2.2 Checklist'],
      [''],
      ['Generated from TheWCAG.com'],
      [''],
      ['Summary'],
      [`Total Criteria: ${filteredCriteria.length}`],
      [`Level A: ${filteredCriteria.filter(c => c.level === 'A').length}`],
      [`Level AA: ${filteredCriteria.filter(c => c.level === 'AA').length}`],
      [`Level AAA: ${filteredCriteria.filter(c => c.level === 'AAA').length}`],
      [`New in 2.2: ${filteredCriteria.filter(c => c.isNew).length}`],
      [''],
      ['Principles Included:'],
      ...filters.principles.map(p => [`  • ${p.charAt(0).toUpperCase() + p.slice(1)}`]),
      [''],
      [`Generated: ${new Date().toLocaleDateString()}`],
    ]
    
    const summaryWs = XLSX.utils.aoa_to_sheet(summaryData)
    summaryWs['!cols'] = [{ wch: 40 }]
    XLSX.utils.book_append_sheet(wb, summaryWs, 'Summary')
  }

  // Generate binary string
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
  
  return new Blob([wbout], { 
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
  })
}

export function downloadExcel(blob: Blob, filename: string = 'wcag-2.2-checklist.xlsx') {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// Quick download with default settings
export function quickDownloadWCAGExcel(criteria: SuccessCriterion[]) {
  const blob = generateWCAGExcel(criteria, defaultColumns, defaultDesign, defaultFilters)
  downloadExcel(blob)
}
