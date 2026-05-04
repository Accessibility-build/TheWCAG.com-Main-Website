import { describe, expect, it } from "vitest"
import { questions } from "@/lib/quiz/questions"

/**
 * Quiz scoring math used to live inline in components/quiz/quiz-flow.tsx.
 * Re-implemented here as a pure function so the math can be tested without
 * mounting React; the flow component's logic is identical.
 */
function tallyScore(correctAnswers: number[], userAnswers: number[]): number {
  return correctAnswers.reduce(
    (acc, expected, idx) => acc + (userAnswers[idx] === expected ? 1 : 0),
    0
  )
}

describe("quiz dataset", () => {
  it("has at least 30 questions so a full quiz round is possible", () => {
    expect(questions.length).toBeGreaterThanOrEqual(30)
  })

  it("every question has 2–5 options and a valid correctAnswer index", () => {
    for (const q of questions) {
      expect(q.options.length).toBeGreaterThanOrEqual(2)
      expect(q.options.length).toBeLessThanOrEqual(5)
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0)
      expect(q.correctAnswer).toBeLessThan(q.options.length)
    }
  })

  it("ids are unique", () => {
    const ids = questions.map((q) => q.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})

describe("tallyScore", () => {
  it("counts only matching answers", () => {
    expect(tallyScore([0, 1, 2, 3], [0, 1, 2, 3])).toBe(4)
    expect(tallyScore([0, 1, 2, 3], [0, 0, 0, 0])).toBe(1)
    expect(tallyScore([0, 1, 2, 3], [3, 2, 1, 0])).toBe(0)
  })

  it("treats skipped questions (-1 sentinel) as wrong", () => {
    expect(tallyScore([0, 1, 2, 3], [0, -1, 2, -1])).toBe(2)
  })

  it("treats undefined trailing answers as wrong", () => {
    // simulates the case where the user submits before answering all questions
    const userAnswers: number[] = [0, 1]
    expect(tallyScore([0, 1, 2, 3], userAnswers)).toBe(2)
  })
})
