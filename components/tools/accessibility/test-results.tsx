"use client"

import { useState, useMemo, useCallback } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SummaryStats } from "./summary-stats"
import { ViolationCard } from "./violation-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  X,
  Zap,
  ChevronDown
} from "lucide-react"
import type { ProcessedResults, FixComplexity } from "@/lib/tools/accessibility/processor"
import { formatFixComplexity } from "@/lib/tools/accessibility/processor"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"

interface TestResultsProps {
  results: ProcessedResults
  showScreenshots?: boolean
}

type ImpactLevel = 'critical' | 'serious' | 'moderate' | 'minor'
type SortOption = 'priority' | 'impact' | 'elements' | 'complexity' | 'name'

interface Filters {
  impacts: ImpactLevel[]
  complexities: FixComplexity[]
  search: string
}

export function TestResults({ results, showScreenshots = true }: TestResultsProps) {
  const [filters, setFilters] = useState<Filters>({
    impacts: [],
    complexities: [],
    search: '',
  })
  const [sortBy, setSortBy] = useState<SortOption>('priority')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [showQuickWins, setShowQuickWins] = useState(false)

  // Filter violations
  const filteredViolations = useMemo(() => {
    let filtered = [...results.violations]

    // Quick wins filter
    if (showQuickWins) {
      filtered = filtered.filter(v => v.fixComplexity === 'quick')
    }

    // Impact filter
    if (filters.impacts.length > 0) {
      filtered = filtered.filter(v => filters.impacts.includes(v.impact))
    }

    // Complexity filter
    if (filters.complexities.length > 0) {
      filtered = filtered.filter(v => filters.complexities.includes(v.fixComplexity))
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(v => 
        v.humanReadableName.toLowerCase().includes(searchLower) ||
        v.ruleName.toLowerCase().includes(searchLower) ||
        v.description.toLowerCase().includes(searchLower) ||
        v.affectedElements.some(e => 
          e.selector.toLowerCase().includes(searchLower) ||
          e.html.toLowerCase().includes(searchLower)
        )
      )
    }

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0
      
      switch (sortBy) {
        case 'priority':
          comparison = b.priorityScore - a.priorityScore
          break
        case 'impact':
          const impactOrder = { critical: 4, serious: 3, moderate: 2, minor: 1 }
          comparison = impactOrder[b.impact] - impactOrder[a.impact]
          break
        case 'elements':
          comparison = b.affectedElements.length - a.affectedElements.length
          break
        case 'complexity':
          const complexityOrder = { complex: 3, moderate: 2, quick: 1 }
          comparison = complexityOrder[a.fixComplexity] - complexityOrder[b.fixComplexity]
          break
        case 'name':
          comparison = a.humanReadableName.localeCompare(b.humanReadableName)
          break
      }
      
      return sortOrder === 'asc' ? -comparison : comparison
    })

    return filtered
  }, [results.violations, filters, sortBy, sortOrder, showQuickWins])

  // Toggle impact filter
  const toggleImpact = useCallback((impact: ImpactLevel) => {
    setFilters(prev => ({
      ...prev,
      impacts: prev.impacts.includes(impact)
        ? prev.impacts.filter(i => i !== impact)
        : [...prev.impacts, impact]
    }))
  }, [])

  // Toggle complexity filter
  const toggleComplexity = useCallback((complexity: FixComplexity) => {
    setFilters(prev => ({
      ...prev,
      complexities: prev.complexities.includes(complexity)
        ? prev.complexities.filter(c => c !== complexity)
        : [...prev.complexities, complexity]
    }))
  }, [])

  // Clear all filters
  const clearFilters = useCallback(() => {
    setFilters({ impacts: [], complexities: [], search: '' })
    setShowQuickWins(false)
  }, [])

  // Check if any filters are active
  const hasActiveFilters = filters.impacts.length > 0 || 
    filters.complexities.length > 0 || 
    filters.search.length > 0 ||
    showQuickWins

  return (
    <div className="space-y-6">
      <SummaryStats results={results} />

      <Tabs defaultValue="violations" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="violations">
            Violations ({results.summary.violations})
          </TabsTrigger>
          <TabsTrigger value="passed">
            Passed ({results.summary.passes})
          </TabsTrigger>
          <TabsTrigger value="incomplete">
            Incomplete ({results.summary.incomplete})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="violations" className="space-y-4">
          {/* Toolbar */}
          {results.violations.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search violations..."
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="pl-9"
                />
              </div>

              {/* Quick Wins Toggle */}
              <Button
                variant={showQuickWins ? "default" : "outline"}
                onClick={() => setShowQuickWins(!showQuickWins)}
                className="gap-2"
              >
                <Zap className="h-4 w-4" />
                Quick Wins
                {results.summary.fixComplexityBreakdown.quick > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {results.summary.fixComplexityBreakdown.quick}
                  </Badge>
                )}
              </Button>

              {/* Filter Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                    {(filters.impacts.length > 0 || filters.complexities.length > 0) && (
                      <Badge variant="secondary" className="ml-1">
                        {filters.impacts.length + filters.complexities.length}
                      </Badge>
                    )}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Impact Level</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.impacts.includes('critical')}
                    onCheckedChange={() => toggleImpact('critical')}
                  >
                    Critical
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.impacts.includes('serious')}
                    onCheckedChange={() => toggleImpact('serious')}
                  >
                    Serious
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.impacts.includes('moderate')}
                    onCheckedChange={() => toggleImpact('moderate')}
                  >
                    Moderate
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.impacts.includes('minor')}
                    onCheckedChange={() => toggleImpact('minor')}
                  >
                    Minor
                  </DropdownMenuCheckboxItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuLabel>Fix Complexity</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.complexities.includes('quick')}
                    onCheckedChange={() => toggleComplexity('quick')}
                  >
                    {formatFixComplexity('quick')}
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.complexities.includes('moderate')}
                    onCheckedChange={() => toggleComplexity('moderate')}
                  >
                    {formatFixComplexity('moderate')}
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.complexities.includes('complex')}
                    onCheckedChange={() => toggleComplexity('complex')}
                  >
                    {formatFixComplexity('complex')}
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    {sortOrder === 'desc' ? (
                      <SortDesc className="h-4 w-4" />
                    ) : (
                      <SortAsc className="h-4 w-4" />
                    )}
                    Sort
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                  <DropdownMenuRadioGroup value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                    <DropdownMenuRadioItem value="priority">Priority Score</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="impact">Impact Level</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="elements">Element Count</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="complexity">Fix Complexity</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="name">Rule Name</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Order</DropdownMenuLabel>
                  <DropdownMenuRadioGroup value={sortOrder} onValueChange={(v) => setSortOrder(v as 'asc' | 'desc')}>
                    <DropdownMenuRadioItem value="desc">Descending</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="asc">Ascending</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {showQuickWins && (
                <Badge variant="secondary" className="gap-1">
                  Quick Wins
                  <button 
                    onClick={() => setShowQuickWins(false)}
                    className="ml-1 hover:text-destructive"
                    aria-label="Remove quick wins filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {filters.impacts.map(impact => (
                <Badge key={impact} variant="secondary" className="gap-1">
                  {impact}
                  <button 
                    onClick={() => toggleImpact(impact)}
                    className="ml-1 hover:text-destructive"
                    aria-label={`Remove ${impact} filter`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {filters.complexities.map(complexity => (
                <Badge key={complexity} variant="secondary" className="gap-1">
                  {formatFixComplexity(complexity)}
                  <button 
                    onClick={() => toggleComplexity(complexity)}
                    className="ml-1 hover:text-destructive"
                    aria-label={`Remove ${complexity} filter`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {filters.search && (
                <Badge variant="secondary" className="gap-1">
                  Search: &quot;{filters.search.slice(0, 20)}{filters.search.length > 20 ? '...' : ''}&quot;
                  <button 
                    onClick={() => setFilters(prev => ({ ...prev, search: '' }))}
                    className="ml-1 hover:text-destructive"
                    aria-label="Clear search"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                Clear all
              </Button>
            </div>
          )}

          {/* Results Count */}
          {results.violations.length > 0 && (
            <p className="text-sm text-muted-foreground">
              Showing {filteredViolations.length} of {results.violations.length} violations
            </p>
          )}

          {/* Violations List */}
          {filteredViolations.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                {results.violations.length === 0 ? (
                  <>
                    <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" aria-hidden="true" />
                    <p className="text-lg font-semibold">No Violations Found!</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      All accessibility rules passed for this page.
                    </p>
                  </>
                ) : (
                  <>
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
                    <p className="text-lg font-semibold">No Matching Violations</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Try adjusting your filters or search term.
                    </p>
                    <Button variant="outline" className="mt-4" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredViolations.map((violation, index) => (
                <ViolationCard 
                  key={`${violation.id}-${index}`} 
                  violation={violation}
                  showScreenshots={showScreenshots}
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="passed" className="space-y-4">
          {results.passes.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">No passed checks to display.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {results.passes.map((pass, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-lg">{pass.humanReadableName || pass.ruleName}</CardTitle>
                          <Badge variant="outline" className="text-xs bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300">
                            Passed
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{pass.description}</p>
                      </div>
                      <a
                        href={pass.helpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Learn more about ${pass.humanReadableName || pass.ruleName}`}
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">{pass.help}</p>
                    </div>
                    {pass.wcagCriteriaStrings.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2">WCAG Criteria</h4>
                        <div className="flex flex-wrap gap-2">
                          {pass.wcagCriteriaStrings.map((criteria, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {criteria}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Checked {pass.checkedElements} element{pass.checkedElements !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="incomplete" className="space-y-4">
          {results.incomplete.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">No incomplete checks to display.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {results.incomplete.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-lg">{item.humanReadableName || item.ruleName}</CardTitle>
                          <Badge variant="outline" className="text-xs bg-yellow-50 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300">
                            Needs Review
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <a
                        href={item.helpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Learn more about ${item.humanReadableName || item.ruleName}`}
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">{item.help}</p>
                    </div>
                    {item.wcagCriteriaStrings.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2">WCAG Criteria</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.wcagCriteriaStrings.map((criteria, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {criteria}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-semibold mb-2">
                        Elements to Review ({item.affectedElements.length})
                      </h4>
                      <div className="space-y-2">
                        {item.affectedElements.map((element, idx) => (
                          <div key={idx} className="text-xs bg-muted p-2 rounded">
                            <p className="font-mono text-muted-foreground">{element.formattedSelector || element.selector}</p>
                            {element.failureSummary && (
                              <p className="text-muted-foreground mt-1">{element.failureSummary}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
