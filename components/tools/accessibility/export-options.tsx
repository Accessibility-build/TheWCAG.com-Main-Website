"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Download, 
  FileJson, 
  FileText, 
  FileCode,
  Printer,
  Share2,
  Check,
  Loader2
} from "lucide-react"
import type { ProcessedResults } from "@/lib/tools/accessibility/processor"
import { 
  formatReportDate, 
  generateReportFilename,
  formatCount,
  getScoreGrade
} from "@/lib/tools/accessibility/formatters"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ExportOptionsProps {
  results: ProcessedResults
}

export function ExportOptions({ results }: ExportOptionsProps) {
  const [isExporting, setIsExporting] = useState<string | null>(null)
  const [copiedLink, setCopiedLink] = useState(false)

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const exportJSON = async () => {
    setIsExporting('json')
    try {
      // Enhanced JSON with all data
      const exportData = {
        ...results,
        exportedAt: new Date().toISOString(),
        exportVersion: '2.0',
      }
      const dataStr = JSON.stringify(exportData, null, 2)
      downloadFile(dataStr, generateReportFilename(results.url, 'json'), 'application/json')
    } finally {
      setIsExporting(null)
    }
  }

  const exportCSV = async () => {
    setIsExporting('csv')
    try {
      // Enhanced CSV with human-readable columns
      const headers = [
        'Rule ID',
        'Rule Name',
        'Impact',
        'Fix Complexity',
        'Priority Score',
        'Description',
        'How to Fix',
        'WCAG Criteria',
        'Affected Elements',
        'Estimated Fix Time (min)',
        'Help URL'
      ]
      
      const rows = results.violations.map(v => [
        v.id,
        v.humanReadableName,
        v.impact,
        v.fixComplexity,
        v.priorityScore.toString(),
        `"${v.description.replace(/"/g, '""')}"`,
        `"${v.help.replace(/"/g, '""')}"`,
        `"${v.wcagCriteriaStrings.join('; ')}"`,
        v.affectedElements.length.toString(),
        `${v.estimatedFixTime.min}-${v.estimatedFixTime.max}`,
        v.helpUrl
      ])

      const csvContent = [
        // Metadata
        `# Accessibility Report for: ${results.url}`,
        `# Generated: ${formatReportDate(results.timestamp)}`,
        `# Compliance Score: ${results.summary.complianceScore}%`,
        `# Total Violations: ${results.summary.violations}`,
        '',
        headers.join(','),
        ...rows.map(row => row.join(','))
      ].join('\n')

      downloadFile(csvContent, generateReportFilename(results.url, 'csv'), 'text/csv')
    } finally {
      setIsExporting(null)
    }
  }

  const exportHTML = async () => {
    setIsExporting('html')
    try {
      const scoreGrade = getScoreGrade(results.summary.complianceScore)
      
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessibility Report - ${results.url}</title>
  <style>
    :root {
      --color-critical: #dc2626;
      --color-serious: #ea580c;
      --color-moderate: #ca8a04;
      --color-minor: #2563eb;
      --color-pass: #16a34a;
      --color-bg: #ffffff;
      --color-text: #1f2937;
      --color-muted: #6b7280;
      --color-border: #e5e7eb;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --color-bg: #1f2937;
        --color-text: #f9fafb;
        --color-muted: #9ca3af;
        --color-border: #374151;
      }
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { 
      font-family: system-ui, -apple-system, sans-serif; 
      max-width: 1200px; 
      margin: 0 auto; 
      padding: 40px 20px; 
      background: var(--color-bg);
      color: var(--color-text);
      line-height: 1.6;
    }
    h1 { font-size: 2rem; margin-bottom: 0.5rem; }
    h2 { font-size: 1.5rem; margin: 2rem 0 1rem; border-bottom: 2px solid var(--color-border); padding-bottom: 0.5rem; }
    h3 { font-size: 1.1rem; margin-top: 0; }
    .meta { color: var(--color-muted); margin-bottom: 2rem; }
    .summary { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
      gap: 20px; 
      margin: 20px 0 40px; 
    }
    .summary-card { 
      border: 1px solid var(--color-border); 
      border-radius: 12px; 
      padding: 24px; 
      text-align: center;
    }
    .summary-card.score { background: linear-gradient(135deg, #f0fdf4, #dcfce7); }
    .summary-card.violations { border-left: 4px solid var(--color-critical); }
    .summary-card.passed { border-left: 4px solid var(--color-pass); }
    .summary-card.incomplete { border-left: 4px solid var(--color-moderate); }
    .summary-number { font-size: 3rem; font-weight: bold; }
    .summary-label { color: var(--color-muted); font-size: 0.9rem; margin-top: 0.5rem; }
    .score-grade { font-size: 1.2rem; color: var(--color-pass); margin-top: 0.5rem; }
    .violation { 
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 24px; 
      margin: 20px 0; 
      page-break-inside: avoid;
    }
    .violation-header { display: flex; justify-content: space-between; align-items: start; gap: 16px; flex-wrap: wrap; }
    .violation-title { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .badge { 
      display: inline-block; 
      padding: 4px 12px; 
      border-radius: 20px; 
      font-size: 12px; 
      font-weight: 500;
      text-transform: uppercase;
    }
    .critical { background: #fee2e2; color: #991b1b; }
    .serious { background: #fed7aa; color: #9a3412; }
    .moderate { background: #fef3c7; color: #854d0e; }
    .minor { background: #dbeafe; color: #1e40af; }
    .quick { background: #dcfce7; color: #166534; }
    .complex { background: #fef2f2; color: #991b1b; }
    .description { color: var(--color-muted); margin: 12px 0; }
    .section { margin-top: 20px; }
    .section-title { font-size: 0.9rem; font-weight: 600; margin-bottom: 8px; }
    .criteria-list { display: flex; flex-wrap: wrap; gap: 8px; }
    .criteria-badge { 
      background: #f3f4f6; 
      padding: 4px 10px; 
      border-radius: 6px; 
      font-size: 12px;
      color: var(--color-text);
    }
    .element { 
      background: #f9fafb; 
      border-radius: 8px; 
      padding: 16px; 
      margin: 12px 0;
    }
    .element-selector { 
      font-family: monospace; 
      font-size: 13px; 
      color: var(--color-muted);
      margin-bottom: 8px;
    }
    .element-screenshot { 
      max-width: 400px; 
      border-radius: 8px; 
      margin: 12px 0;
      border: 1px solid var(--color-border);
    }
    .element-html { 
      background: #1f2937; 
      color: #f9fafb;
      padding: 12px; 
      border-radius: 6px; 
      font-family: monospace; 
      font-size: 12px;
      overflow-x: auto;
      white-space: pre-wrap;
      word-break: break-all;
    }
    .guidance { 
      background: #fef3c7; 
      border-left: 3px solid #ca8a04;
      padding: 12px 16px; 
      margin-top: 12px;
      border-radius: 0 8px 8px 0;
      font-size: 14px;
    }
    .help-link { 
      display: inline-block; 
      margin-top: 16px; 
      color: #2563eb; 
      text-decoration: none;
    }
    .help-link:hover { text-decoration: underline; }
    .breakdown { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-top: 16px; }
    .breakdown-item { text-align: center; padding: 12px; background: #f9fafb; border-radius: 8px; }
    .breakdown-value { font-size: 1.5rem; font-weight: bold; }
    .breakdown-label { font-size: 0.8rem; color: var(--color-muted); }
    .footer { 
      margin-top: 60px; 
      padding-top: 20px; 
      border-top: 1px solid var(--color-border); 
      text-align: center;
      color: var(--color-muted);
      font-size: 0.9rem;
    }
    @media print {
      body { padding: 20px; }
      .violation { break-inside: avoid; }
      .element-screenshot { max-width: 300px; }
    }
  </style>
</head>
<body>
  <h1>Accessibility Report</h1>
  <div class="meta">
    <p><strong>URL:</strong> <a href="${results.url}" target="_blank">${results.url}</a></p>
    <p><strong>Generated:</strong> ${formatReportDate(results.timestamp)}</p>
    ${results.pageMetadata?.title ? `<p><strong>Page Title:</strong> ${results.pageMetadata.title}</p>` : ''}
  </div>
  
  <div class="summary">
    <div class="summary-card score">
      <div class="summary-number" style="color: ${results.summary.complianceScore >= 70 ? 'var(--color-pass)' : 'var(--color-critical)'}">
        ${results.summary.complianceScore}%
      </div>
      <div class="summary-label">Compliance Score</div>
      <div class="score-grade">${scoreGrade.label}</div>
    </div>
    <div class="summary-card violations">
      <div class="summary-number" style="color: var(--color-critical)">${results.summary.violations}</div>
      <div class="summary-label">Violations</div>
    </div>
    <div class="summary-card passed">
      <div class="summary-number" style="color: var(--color-pass)">${results.summary.passes}</div>
      <div class="summary-label">Passed</div>
    </div>
    <div class="summary-card incomplete">
      <div class="summary-number" style="color: var(--color-moderate)">${results.summary.incomplete}</div>
      <div class="summary-label">Need Review</div>
    </div>
  </div>

  ${results.summary.violations > 0 ? `
  <div class="breakdown">
    <div class="breakdown-item">
      <div class="breakdown-value" style="color: var(--color-critical)">${results.summary.impactBreakdown.critical}</div>
      <div class="breakdown-label">Critical</div>
    </div>
    <div class="breakdown-item">
      <div class="breakdown-value" style="color: var(--color-serious)">${results.summary.impactBreakdown.serious}</div>
      <div class="breakdown-label">Serious</div>
    </div>
    <div class="breakdown-item">
      <div class="breakdown-value" style="color: var(--color-moderate)">${results.summary.impactBreakdown.moderate}</div>
      <div class="breakdown-label">Moderate</div>
    </div>
    <div class="breakdown-item">
      <div class="breakdown-value" style="color: var(--color-minor)">${results.summary.impactBreakdown.minor}</div>
      <div class="breakdown-label">Minor</div>
    </div>
  </div>
  ` : ''}

  <h2>Violations (${results.violations.length})</h2>
  ${results.violations.length === 0 ? '<p>No violations found! 🎉</p>' : results.violations.map((v, i) => `
    <div class="violation">
      <div class="violation-header">
        <div class="violation-title">
          <h3>${v.humanReadableName}</h3>
          <span class="badge ${v.impact}">${v.impact}</span>
          <span class="badge ${v.fixComplexity === 'quick' ? 'quick' : v.fixComplexity === 'complex' ? 'complex' : ''}">${v.fixComplexity} fix</span>
        </div>
        <span style="color: var(--color-muted); font-size: 0.9rem;">Priority: ${v.priorityScore}/100</span>
      </div>
      <p class="description">${v.description}</p>
      
      <div class="section">
        <div class="section-title">How to Fix</div>
        <p>${v.help}</p>
        <p style="font-size: 0.85rem; color: var(--color-muted); margin-top: 8px;">
          Estimated time: ${v.estimatedFixTime.min}-${v.estimatedFixTime.max} ${v.estimatedFixTime.unit}
        </p>
      </div>

      ${v.wcagCriteriaStrings.length > 0 ? `
      <div class="section">
        <div class="section-title">WCAG Criteria</div>
        <div class="criteria-list">
          ${v.wcagCriteriaStrings.map(c => `<span class="criteria-badge">${c}</span>`).join('')}
        </div>
      </div>
      ` : ''}

      <div class="section">
        <div class="section-title">Affected Elements (${v.affectedElements.length})</div>
        ${v.affectedElements.slice(0, 5).map((e, j) => `
          <div class="element">
            <div class="element-selector">${e.formattedSelector || e.selector}</div>
            ${e.screenshot ? `<img class="element-screenshot" src="${e.screenshot.data}" alt="Screenshot of affected element" />` : ''}
            <pre class="element-html"><code>${escapeHtml(e.html)}</code></pre>
            ${e.fixGuidance ? `<div class="guidance">${e.fixGuidance}</div>` : ''}
          </div>
        `).join('')}
        ${v.affectedElements.length > 5 ? `<p style="color: var(--color-muted); font-style: italic;">... and ${v.affectedElements.length - 5} more elements</p>` : ''}
      </div>

      <a class="help-link" href="${v.helpUrl}" target="_blank">Learn more about this rule →</a>
    </div>
  `).join('')}

  <div class="footer">
    <p>Generated by WCAG Accessibility Tester</p>
    <p style="margin-top: 8px;">For questions about this report, visit <a href="https://thewcag.com" target="_blank">TheWCAG.com</a></p>
  </div>
</body>
</html>`

      downloadFile(html, generateReportFilename(results.url, 'html'), 'text/html')
    } finally {
      setIsExporting(null)
    }
  }

  const exportMarkdown = async () => {
    setIsExporting('md')
    try {
      const scoreGrade = getScoreGrade(results.summary.complianceScore)
      
      const md = `# Accessibility Report

**URL:** ${results.url}
**Generated:** ${formatReportDate(results.timestamp)}
${results.pageMetadata?.title ? `**Page Title:** ${results.pageMetadata.title}` : ''}

## Summary

| Metric | Value |
|--------|-------|
| Compliance Score | ${results.summary.complianceScore}% (${scoreGrade.label}) |
| Violations | ${results.summary.violations} |
| Passed | ${results.summary.passes} |
| Incomplete | ${results.summary.incomplete} |

### Impact Breakdown

- **Critical:** ${results.summary.impactBreakdown.critical}
- **Serious:** ${results.summary.impactBreakdown.serious}
- **Moderate:** ${results.summary.impactBreakdown.moderate}
- **Minor:** ${results.summary.impactBreakdown.minor}

### Fix Complexity

- **Quick Fixes:** ${results.summary.fixComplexityBreakdown.quick}
- **Moderate:** ${results.summary.fixComplexityBreakdown.moderate}
- **Complex:** ${results.summary.fixComplexityBreakdown.complex}

**Estimated Total Fix Time:** ${results.summary.estimatedFixTime.min}-${results.summary.estimatedFixTime.max} ${results.summary.estimatedFixTime.unit}

---

## Violations (${results.violations.length})

${results.violations.length === 0 ? '✅ No violations found!' : results.violations.map((v, i) => `
### ${i + 1}. ${v.humanReadableName}

| Property | Value |
|----------|-------|
| Impact | ${v.impact.toUpperCase()} |
| Fix Complexity | ${v.fixComplexity} |
| Priority Score | ${v.priorityScore}/100 |
| Affected Elements | ${v.affectedElements.length} |

**Description:** ${v.description}

**How to Fix:** ${v.help}

${v.wcagCriteriaStrings.length > 0 ? `**WCAG Criteria:** ${v.wcagCriteriaStrings.join(', ')}` : ''}

<details>
<summary>View Affected Elements</summary>

${v.affectedElements.slice(0, 5).map((e, j) => `
#### Element ${j + 1}

\`\`\`
${e.selector}
\`\`\`

\`\`\`html
${e.html}
\`\`\`

${e.fixGuidance ? `> **Guidance:** ${e.fixGuidance}` : ''}
`).join('\n')}

${v.affectedElements.length > 5 ? `*... and ${v.affectedElements.length - 5} more elements*` : ''}

</details>

[Learn more about this rule](${v.helpUrl})

---
`).join('\n')}

---

*Generated by WCAG Accessibility Tester - [TheWCAG.com](https://thewcag.com)*
`

      downloadFile(md, generateReportFilename(results.url, 'md'), 'text/markdown')
    } finally {
      setIsExporting(null)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleCopyLink = async () => {
    try {
      // Create a shareable data URL with summary
      const shareData = {
        url: results.url,
        score: results.summary.complianceScore,
        violations: results.summary.violations,
        passes: results.summary.passes,
        timestamp: results.timestamp,
      }
      const shareUrl = `${window.location.origin}/tools/accessibility/accessibility-tester?share=${encodeURIComponent(btoa(JSON.stringify(shareData)))}`
      
      await navigator.clipboard.writeText(shareUrl)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" aria-hidden="true" />
            Export Report
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Export Format</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={exportJSON} disabled={isExporting === 'json'}>
            {isExporting === 'json' ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <FileJson className="h-4 w-4 mr-2" />
            )}
            JSON (Full Data)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={exportCSV} disabled={isExporting === 'csv'}>
            {isExporting === 'csv' ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <FileText className="h-4 w-4 mr-2" />
            )}
            CSV (Spreadsheet)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={exportHTML} disabled={isExporting === 'html'}>
            {isExporting === 'html' ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <FileCode className="h-4 w-4 mr-2" />
            )}
            HTML (With Screenshots)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={exportMarkdown} disabled={isExporting === 'md'}>
            {isExporting === 'md' ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <FileText className="h-4 w-4 mr-2" />
            )}
            Markdown
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="outline" onClick={handlePrint} className="gap-2">
        <Printer className="h-4 w-4" aria-hidden="true" />
        Print
      </Button>

      <Button variant="outline" onClick={handleCopyLink} className="gap-2">
        {copiedLink ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Share2 className="h-4 w-4" aria-hidden="true" />
        )}
        {copiedLink ? 'Copied!' : 'Share'}
      </Button>
    </div>
  )
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const div = typeof document !== 'undefined' 
    ? document.createElement('div')
    : null
  
  if (div) {
    div.textContent = text
    return div.innerHTML
  }
  
  // Fallback for SSR
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
