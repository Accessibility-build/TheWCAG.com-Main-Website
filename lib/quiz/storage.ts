import fs from 'fs/promises'
import path from 'path'
import { Redis } from '@upstash/redis'
import { logger } from '@/lib/logger'

const QUIZ_SCORES_DIR = path.join(process.cwd(), 'lib', 'quiz-scores')
const SCORES_FILE = path.join(QUIZ_SCORES_DIR, 'scores.json')

const REDIS_KEY = 'quiz:scores'
const REDIS_SEEDED_KEY = 'quiz:scores:seeded'
const MAX_SCORES = 1000

/**
 * Quiz score entry structure
 */
export interface QuizScore {
  id: string
  name?: string
  score: number
  total: number
  percentage: number
  timestamp: string
  date: string
}

interface ScoresData {
  scores: QuizScore[]
}

// --- Backend selection -------------------------------------------------------
// In production (Vercel) the filesystem is read-only, so writes to scores.json
// silently disappear. When Upstash Redis credentials are present we route all
// reads/writes through Redis instead. In dev, with no creds set, we fall back
// to the filesystem so the local experience keeps working.

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN

const redis: Redis | null =
  REDIS_URL && REDIS_TOKEN ? new Redis({ url: REDIS_URL, token: REDIS_TOKEN }) : null

const useRedis = redis !== null

if (!useRedis && process.env.NODE_ENV === 'production') {
  logger.warn(
    'Quiz storage: no UPSTASH_REDIS_REST_URL / KV_REST_API_URL configured. ' +
      'Falling back to filesystem — score writes will not persist on a read-only deployment.'
  )
}

/**
 * Generate a unique ID for a score entry
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

/**
 * Generate realistic dummy data for initial leaderboard
 */
function generateDummyData(): QuizScore[] {
  const names = [
    'Priya Sharma', 'Alex Johnson', 'Rahul Patel', 'Emma Williams', 'Arjun Kumar',
    'Sophie Martin', 'Vikram Singh', 'Isabella Garcia', 'Amit Desai', 'Olivia Brown',
    'Rohan Gupta', 'Mia Anderson', 'Ananya Reddy', 'Lucas Schmidt', 'Neha Kapoor',
    "James O'Connor", 'Sanjay Mehta', 'Charlotte Dubois', 'Karthik Iyer', 'Emily Chen',
    'Aditya Verma', 'Sofia Rodriguez', 'Rajesh Nair', 'Hannah Lee', 'Deepak Joshi',
    'Zoe Taylor', 'Manish Agarwal', 'Chloe Wilson', 'Varun Malhotra', 'Ava Martinez',
  ]

  const dummyScores: QuizScore[] = []
  const now = new Date()

  for (let i = 0; i < 30; i++) {
    const daysAgo = Math.floor(Math.random() * 14)
    const hoursAgo = Math.floor(Math.random() * 24)
    const minutesAgo = Math.floor(Math.random() * 60)
    const timestamp = new Date(
      now.getTime() -
        daysAgo * 24 * 60 * 60 * 1000 -
        hoursAgo * 60 * 60 * 1000 -
        minutesAgo * 60 * 1000
    )

    let score: number
    const rand = Math.random()
    if (rand < 0.1) score = Math.floor(Math.random() * 4) + 27
    else if (rand < 0.4) score = Math.floor(Math.random() * 3) + 24
    else if (rand < 0.8) score = Math.floor(Math.random() * 6) + 18
    else score = Math.floor(Math.random() * 6) + 12

    const total = 30
    const percentage = Math.round((score / total) * 100)

    dummyScores.push({
      id: `dummy-${i}-${timestamp.getTime()}`,
      name: names[i],
      score,
      total,
      percentage,
      timestamp: timestamp.toISOString(),
      date: timestamp.toISOString().split('T')[0],
    })
  }

  return dummyScores.sort((a, b) => {
    if (b.percentage !== a.percentage) return b.percentage - a.percentage
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  })
}

// --- Redis backend -----------------------------------------------------------

async function ensureRedisSeeded(): Promise<void> {
  if (!redis) return
  // SETNX returns 1 only the first time — guards against double-seeding when
  // many cold starts hit an empty list at once.
  const claimed = await redis.set(REDIS_SEEDED_KEY, '1', { nx: true })
  if (!claimed) return
  const dummy = generateDummyData()
  // Push oldest first so the newest dummy ends up at index 0 of the list.
  for (let i = dummy.length - 1; i >= 0; i--) {
    await redis.lpush(REDIS_KEY, JSON.stringify(dummy[i]))
  }
}

async function readScoresFromRedis(): Promise<QuizScore[]> {
  if (!redis) return []
  const len = await redis.llen(REDIS_KEY)
  if (len === 0) {
    await ensureRedisSeeded()
  }
  const raw = await redis.lrange(REDIS_KEY, 0, MAX_SCORES - 1)
  return raw.map((item) => (typeof item === 'string' ? JSON.parse(item) : item)) as QuizScore[]
}

async function pushScoreToRedis(entry: QuizScore): Promise<void> {
  if (!redis) return
  await redis.lpush(REDIS_KEY, JSON.stringify(entry))
  await redis.ltrim(REDIS_KEY, 0, MAX_SCORES - 1)
}

// --- Filesystem backend (dev fallback) --------------------------------------

async function ensureDirectoryExists(): Promise<void> {
  try {
    await fs.mkdir(QUIZ_SCORES_DIR, { recursive: true })
  } catch (error) {
    logger.error('Error creating quiz scores directory:', error)
    throw error
  }
}

async function writeScoresToFile(scores: QuizScore[]): Promise<void> {
  await ensureDirectoryExists()
  const data: ScoresData = { scores }
  await fs.writeFile(SCORES_FILE, JSON.stringify(data, null, 2), 'utf-8')
}

async function readScoresFromFile(): Promise<QuizScore[]> {
  try {
    const data = await fs.readFile(SCORES_FILE, 'utf-8')
    let parsed: ScoresData
    try {
      parsed = JSON.parse(data) as ScoresData
    } catch (parseErr) {
      logger.error('Quiz scores file is corrupt JSON, reseeding:', parseErr)
      const dummy = generateDummyData()
      await writeScoresToFile(dummy)
      return dummy
    }
    if (!parsed.scores || parsed.scores.length === 0) {
      const dummy = generateDummyData()
      await writeScoresToFile(dummy)
      return dummy
    }
    return parsed.scores
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      const dummy = generateDummyData()
      await writeScoresToFile(dummy)
      return dummy
    }
    logger.error('Error reading quiz scores:', error)
    throw error
  }
}

// --- Public API --------------------------------------------------------------

async function readScores(): Promise<QuizScore[]> {
  return useRedis ? readScoresFromRedis() : readScoresFromFile()
}

async function appendScore(entry: QuizScore): Promise<void> {
  if (useRedis) {
    await pushScoreToRedis(entry)
    return
  }
  const scores = await readScoresFromFile()
  scores.unshift(entry)
  await writeScoresToFile(scores.slice(0, MAX_SCORES))
}

/**
 * Save a new quiz score
 */
export async function saveScore(
  score: number,
  total: number,
  name?: string
): Promise<QuizScore> {
  const percentage = Math.round((score / total) * 100)
  const timestamp = new Date().toISOString()
  const date = timestamp.split('T')[0]

  const newScore: QuizScore = {
    id: generateId(),
    name,
    score,
    total,
    percentage,
    timestamp,
    date,
  }

  await appendScore(newScore)
  return newScore
}

function sortScores(scores: QuizScore[]): QuizScore[] {
  return [...scores].sort((a, b) => {
    if (b.percentage !== a.percentage) return b.percentage - a.percentage
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  })
}

/**
 * Get all-time leaderboard (top scores)
 */
export async function getAllTimeLeaderboard(limit: number = 10): Promise<QuizScore[]> {
  const scores = await readScores()
  return sortScores(scores).slice(0, limit)
}

/**
 * Get daily leaderboard (top scores for today)
 */
export async function getDailyLeaderboard(limit: number = 10): Promise<QuizScore[]> {
  const scores = await readScores()
  const today = new Date().toISOString().split('T')[0]
  const todayScores = scores.filter((s) => s.date === today)
  return sortScores(todayScores).slice(0, limit)
}

/**
 * Get leaderboard statistics
 */
export async function getLeaderboardStats(): Promise<{
  totalAttempts: number
  todayAttempts: number
  averageScore: number
}> {
  const scores = await readScores()
  const today = new Date().toISOString().split('T')[0]
  const todayScores = scores.filter((s) => s.date === today)

  const totalAttempts = scores.length
  const todayAttempts = todayScores.length
  const averageScore =
    scores.length > 0
      ? Math.round(scores.reduce((sum, s) => sum + s.percentage, 0) / scores.length)
      : 0

  return { totalAttempts, todayAttempts, averageScore }
}
