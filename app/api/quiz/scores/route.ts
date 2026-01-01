import { NextRequest, NextResponse } from 'next/server'
import {
  saveScore,
  getAllTimeLeaderboard,
  getDailyLeaderboard,
  getLeaderboardStats,
  type QuizScore,
} from '@/lib/quiz/storage'
import { logger } from '@/lib/logger'

/**
 * GET /api/quiz/scores
 * Retrieve leaderboard data
 * Query params:
 *   - type: 'all-time' | 'daily' | 'stats' (default: 'all-time')
 *   - limit: number (default: 10)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'all-time'
    const limit = parseInt(searchParams.get('limit') || '10', 10)

    if (type === 'stats') {
      const stats = await getLeaderboardStats()
      return NextResponse.json({ success: true, data: stats })
    }

    let leaderboard: QuizScore[]
    
    if (type === 'daily') {
      leaderboard = await getDailyLeaderboard(limit)
    } else {
      leaderboard = await getAllTimeLeaderboard(limit)
    }

    return NextResponse.json({
      success: true,
      data: leaderboard,
      type,
      limit,
    })
  } catch (error) {
    logger.error('Failed to get leaderboard', error)
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve leaderboard' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/quiz/scores
 * Save a new quiz score
 * Body: { score: number, total: number, name?: string }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { score, total, name } = body

    // Validate required fields
    if (typeof score !== 'number' || typeof total !== 'number') {
      return NextResponse.json(
        { success: false, error: 'Invalid score or total' },
        { status: 400 }
      )
    }

    // Validate score range
    if (score < 0 || score > total || total <= 0) {
      return NextResponse.json(
        { success: false, error: 'Score must be between 0 and total' },
        { status: 400 }
      )
    }

    // Validate name if provided
    if (name !== undefined && typeof name !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Name must be a string' },
        { status: 400 }
      )
    }

    // Sanitize name (max 50 characters, no HTML)
    const sanitizedName = name
      ? name.trim().slice(0, 50).replace(/<[^>]*>/g, '')
      : undefined

    const savedScore = await saveScore(score, total, sanitizedName)

    return NextResponse.json({
      success: true,
      data: savedScore,
    })
  } catch (error) {
    logger.error('Failed to save score', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save score' },
      { status: 500 }
    )
  }
}

