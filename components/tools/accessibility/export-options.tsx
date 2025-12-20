"use client"

import { Button } from "@/components/ui/button"
import { Download, FileJson, FileText, FileCode } from "lucide-react"
import type { ProcessedResults } from "@/lib/tools/accessibility/processor"

interface ExportOptionsProps {
  results: ProcessedResults
}

export function ExportOptions({ results }: ExportOptionsProps) {
  const exportJSON = () => {
    const dataStr = JSON.stringify(results, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `accessibility-report-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const exportCSV = () => {
    const headers = ['Rule ID', 'Impact', 'Description', 'WCAG Criteria', 'Affected Elements']
    const rows = results.violations.map(v => [
      v.id,
      v.impact,
      v.description.replace(/,/g, ';'),
      v.wcagCriteria.join('; '),
      v.affectedElements.length.toString()
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const dataBlob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `accessibility-report-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const exportHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessibility Test Report - ${results.url}</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
    h1 { color: #333; }
    .summary { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 20px 0; }
    .summary-card { border: 1px solid #ddd; border-radius: 8px; padding: 20px; }
    .violation { border-left: 4px solid #dc2626; padding: 16px; margin: 16px 0; background: #fef2f2; }
    .violation h3 { margin-top: 0; }
    .badge { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin: 4px; }
    .critical { background: #fee2e2; color: #991b1b; }
    .serious { background: #fed7aa; color: #9a3412; }
    .moderate { background: #fef3c7; color: #854d0e; }
    .minor { background: #dbeafe; color: #1e40af; }
    code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
  </style>
</head>
<body>
  <h1>Accessibility Test Report</h1>
  <p><strong>URL:</strong> ${results.url}</p>
  <p><strong>Date:</strong> ${new Date(results.timestamp).toLocaleString()}</p>
  
  <div class="summary">
    <div class="summary-card">
      <h2>Violations</h2>
      <p style="font-size: 32px; font-weight: bold; color: #dc2626;">${results.summary.violations}</p>
    </div>
    <div class="summary-card">
      <h2>Passed</h2>
      <p style="font-size: 32px; font-weight: bold; color: #16a34a;">${results.summary.passes}</p>
    </div>
    <div class="summary-card">
      <h2>Incomplete</h2>
      <p style="font-size: 32px; font-weight: bold; color: #ca8a04;">${results.summary.incomplete}</p>
    </div>
  </div>

  <h2>Violations (${results.violations.length})</h2>
  ${results.violations.map(v => `
    <div class="violation">
      <h3>${v.ruleName} <span class="badge ${v.impact}">${v.impact}</span></h3>
      <p><strong>Description:</strong> ${v.description}</p>
      <p><strong>How to Fix:</strong> ${v.help}</p>
      <p><strong>WCAG Criteria:</strong> ${v.wcagCriteria.join(', ')}</p>
      <p><strong>Affected Elements:</strong> ${v.affectedElements.length}</p>
      <details>
        <summary>View Elements</summary>
        ${v.affectedElements.map(e => `
          <div style="margin: 8px 0; padding: 8px; background: white; border-radius: 4px;">
            <code>${e.selector}</code>
            <pre style="margin-top: 8px; font-size: 12px;">${e.html}</pre>
            ${e.fixGuidance ? `<p style="margin-top: 8px; font-size: 12px;">${e.fixGuidance}</p>` : ''}
          </div>
        `).join('')}
      </details>
      <p><a href="${v.helpUrl}" target="_blank">Learn more</a></p>
    </div>
  `).join('')}
</body>
</html>`

    const dataBlob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `accessibility-report-${new Date().toISOString().split('T')[0]}.html`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={exportJSON} className="gap-2">
        <FileJson className="h-4 w-4" aria-hidden="true" />
        Export JSON
      </Button>
      <Button variant="outline" onClick={exportCSV} className="gap-2">
        <FileText className="h-4 w-4" aria-hidden="true" />
        Export CSV
      </Button>
      <Button variant="outline" onClick={exportHTML} className="gap-2">
        <FileCode className="h-4 w-4" aria-hidden="true" />
        Export HTML
      </Button>
    </div>
  )
}

