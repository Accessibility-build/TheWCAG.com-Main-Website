'use client'

import { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { ArrowUpDown, Search, X } from 'lucide-react'
import { LawsuitArchiveItem, lawsuitArchive, getUniqueYears, searchArchive } from '@/lib/lawsuit-archive'

type SortField = 'date' | 'plaintiff' | 'defendant' | 'year'
type SortDirection = 'asc' | 'desc'

export function LawsuitArchiveTable() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortField, setSortField] = useState<SortField>('year')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')
  const [selectedYear, setSelectedYear] = useState<string>('all')

  const years = useMemo(() => getUniqueYears(), [])

  const filteredData = useMemo(() => {
    let data = searchQuery ? searchArchive(searchQuery) : lawsuitArchive

    if (selectedYear !== 'all') {
      data = data.filter((item) => item.year === parseInt(selectedYear))
    }

    // Sort data
    data.sort((a, b) => {
      let aVal: string | number
      let bVal: string | number

      if (sortField === 'year') {
        aVal = a.year
        bVal = b.year
      } else {
        aVal = a[sortField]
        bVal = b[sortField]
      }

      const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0
      return sortDirection === 'asc' ? comparison : -comparison
    })

    return data
  }, [searchQuery, sortField, sortDirection, selectedYear])

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('desc')
    }
  }

  const SortHeader = ({ field, label }: { field: SortField; label: string }) => (
    <button
      onClick={() => toggleSort(field)}
      className="flex items-center gap-2 font-semibold hover:text-primary transition-colors"
    >
      {label}
      <ArrowUpDown
        className={`h-4 w-4 ${sortField === field ? 'text-primary' : 'text-muted-foreground'}`}
      />
    </button>
  )

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by plaintiff, defendant, or issue..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        Showing <span className="font-semibold">{filteredData.length}</span> of{' '}
        <span className="font-semibold">{lawsuitArchive.length}</span> cases
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted border-b">
              <tr>
                <th className="px-4 py-3 text-left">
                  <SortHeader field="date" label="Date" />
                </th>
                <th className="px-4 py-3 text-left">
                  <SortHeader field="plaintiff" label="Plaintiff" />
                </th>
                <th className="px-4 py-3 text-left">
                  <SortHeader field="defendant" label="Defendant" />
                </th>
                <th className="px-4 py-3 text-left">Issue</th>
                <th className="px-4 py-3 text-left">Result</th>
                <th className="px-4 py-3 text-left">Settlement</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, idx) => (
                  <tr key={idx} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap font-medium">{item.date}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block max-w-xs truncate">{item.plaintiff}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block max-w-xs truncate">{item.defendant}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block max-w-xs text-xs leading-relaxed">
                        {item.issue}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={
                          item.result === 'Settlement' || item.result === 'Settled'
                            ? 'default'
                            : item.result === 'Ongoing litigation' || item.result === 'Ongoing cases'
                              ? 'secondary'
                              : 'outline'
                        }
                      >
                        {item.result}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs">
                      {item.settlement ? (
                        <span className="text-green-600 dark:text-green-400 font-semibold">
                          {item.settlement}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                    No results found. Try adjusting your search or filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Clear Filters */}
      {(searchQuery || selectedYear !== 'all') && (
        <Button
          variant="outline"
          onClick={() => {
            setSearchQuery('')
            setSelectedYear('all')
          }}
          className="w-full"
        >
          Clear all filters
        </Button>
      )}
    </div>
  )
}

