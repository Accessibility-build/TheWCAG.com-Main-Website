import { describe, expect, it } from "vitest"
import { searchAll } from "@/lib/search"

describe("searchAll — empty input", () => {
  it("returns no results for empty query", () => {
    expect(searchAll("").length).toBe(0)
    expect(searchAll("   ").length).toBe(0)
  })
})

describe("searchAll — exact criterion-number match", () => {
  it("ranks the exact-number match above everything else", () => {
    const results = searchAll("1.4.3", 5)
    expect(results.length).toBeGreaterThan(0)
    const top = results[0]
    expect(top.type).toBe("criterion")
    if (top.type === "criterion") {
      expect(top.criterion.number).toBe("1.4.3")
    }
  })

  it("uses the dot-format URL so the page actually resolves", () => {
    const [top] = searchAll("1.4.3", 1)
    expect(top.url).toBe("/criteria/1.4.3")
  })
})

describe("searchAll — keyword match", () => {
  it("returns multiple criteria for 'contrast'", () => {
    const results = searchAll("contrast", 20)
    const criteria = results.filter((r) => r.type === "criterion")
    expect(criteria.length).toBeGreaterThan(2)
  })

  it("includes lawsuits whose defendant matches", () => {
    const results = searchAll("Fashion Nova", 10)
    const lawsuitHits = results.filter((r) => r.type === "lawsuit")
    expect(lawsuitHits.length).toBeGreaterThanOrEqual(1)
  })

  it("returns example pages when the keyword lands on examples", () => {
    const results = searchAll("modal dialog", 20)
    const ex = results.find((r) => r.type === "example" && r.url.includes("modals-dialogs"))
    expect(ex).toBeDefined()
  })
})

describe("searchAll — fuzzy fallback", () => {
  it("recovers from a small typo", () => {
    // 'contras' missing the trailing 't' — exact substring match would still
    // hit, so use a clearer typo: misspelled 'screan' (screen).
    const results = searchAll("screan reader", 10)
    expect(results.length).toBeGreaterThan(0)
  })

  it("recovers from a transposed character", () => {
    const results = searchAll("kayboard", 5) // keyboard → kayboard
    expect(results.length).toBeGreaterThan(0)
  })
})

describe("searchAll — limit and ordering", () => {
  it("respects the limit", () => {
    const results = searchAll("the", 5)
    expect(results.length).toBeLessThanOrEqual(5)
  })

  it("returns results ordered by descending score", () => {
    const results = searchAll("focus", 10)
    for (let i = 1; i < results.length; i++) {
      expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score)
    }
  })
})
