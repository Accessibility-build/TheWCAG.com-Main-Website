import fs from 'fs/promises'
import path from 'path'
import { logger } from '@/lib/logger'

const QUIZ_SCORES_DIR = path.join(process.cwd(), 'lib', 'quiz-scores')
const SCORES_FILE = path.join(QUIZ_SCORES_DIR, 'scores.json')

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
    'Priya Sharma',
    'Alex Johnson',
    'Rahul Patel',
    'Emma Williams',
    'Arjun Kumar',
    'Sophie Martin',
    'Vikram Singh',
    'Isabella Garcia',
    'Amit Desai',
    'Olivia Brown',
    'Rohan Gupta',
    'Mia Anderson',
    'Ananya Reddy',
    'Lucas Schmidt',
    'Neha Kapoor',
    'James O\'Connor',
    'Sanjay Mehta',
    'Charlotte Dubois',
    'Karthik Iyer',
    'Emily Chen',
    'Aditya Verma',
    'Sofia Rodriguez',
    'Rajesh Nair',
    'Hannah Lee',
    'Deepak Joshi',
    'Zoe Taylor',
    'Manish Agarwal',
    'Chloe Wilson',
    'Varun Malhotra',
    'Ava Martinez'
  ]
  
  const dummyScores: QuizScore[] = []
  const now = new Date()
  
  // Generate 30 dummy scores over the past 2 weeks with realistic distribution
  for (let i = 0; i < 30; i++) {
    const daysAgo = Math.floor(Math.random() * 14) // Past 2 weeks
    const hoursAgo = Math.floor(Math.random() * 24)
    const minutesAgo = Math.floor(Math.random() * 60)
    const timestamp = new Date(
      now.getTime() - 
      (daysAgo * 24 * 60 * 60 * 1000) - 
      (hoursAgo * 60 * 60 * 1000) - 
      (minutesAgo * 60 * 1000)
    )
    
    // Realistic score distribution (most people get 60-90%)
    let score: number
    const rand = Math.random()
    if (rand < 0.1) {
      // 10% get very high scores (27-30)
      score = Math.floor(Math.random() * 4) + 27
    } else if (rand < 0.4) {
      // 30% get high scores (24-26)
      score = Math.floor(Math.random() * 3) + 24
    } else if (rand < 0.8) {
      // 40% get medium scores (18-23)
      score = Math.floor(Math.random() * 6) + 18
    } else {
      // 20% get lower scores (12-17)
      score = Math.floor(Math.random() * 6) + 12
    }
    
    const total = 30
    const percentage = Math.round((score / total) * 100)
    
    dummyScores.push({
      id: `dummy-${i}-${timestamp.getTime()}`,
      name: names[i],
      score,
      total,
      percentage,
      timestamp: timestamp.toISOString(),
      date: timestamp.toISOString().split('T')[0]
    })
  }
  
  // Sort by percentage (highest first), then by timestamp (most recent first)
  return dummyScores.sort((a, b) => {
    if (b.percentage !== a.percentage) {
      return b.percentage - a.percentage
    }
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  })
}

/**
 * Read all scores from storage
 */
async function readScores(): Promise<QuizScore[]> {
  try {
    const data = await fs.readFile(SCORES_FILE, 'utf-8')
    const parsed = JSON.parse(data) as ScoresData
    
    // If file exists but has no scores, add dummy data
    if (!parsed.scores || parsed.scores.length === 0) {
      const dummyData = generateDummyData()
      await writeScores(dummyData)
      return dummyData
    }
    
    return parsed.scores || []
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      // File doesn't exist yet, create it with dummy data
      const dummyData = generateDummyData()
      await ensureDirectoryExists()
      await writeScores(dummyData)
      return dummyData
    }
    logger.error('Error reading quiz scores:', error)
    throw error
  }
}

/**
 * Write scores to storage
 */
async function writeScores(scores: QuizScore[]): Promise<void> {
  try {
    await ensureDirectoryExists()
    const data: ScoresData = { scores }
    await fs.writeFile(SCORES_FILE, JSON.stringify(data, null, 2), 'utf-8')
  } catch (error) {
    logger.error('Error writing quiz scores:', error)
    throw error
  }
}

/**
 * Ensure the scores directory exists
 */
async function ensureDirectoryExists(): Promise<void> {
  try {
    await fs.mkdir(QUIZ_SCORES_DIR, { recursive: true })
  } catch (error) {
    logger.error('Error creating quiz scores directory:', error)
    throw error
  }
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

  const scores = await readScores()
  scores.unshift(newScore) // Add to beginning
  
  // Keep only the most recent 1000 scores to prevent file from growing too large
  const trimmedScores = scores.slice(0, 1000)
  
  await writeScores(trimmedScores)
  return newScore
}

/**
 * Get all-time leaderboard (top scores)
 */
export async function getAllTimeLeaderboard(limit: number = 10): Promise<QuizScore[]> {
  const scores = await readScores()
  
  // Sort by percentage (highest first), then by timestamp (most recent first)
  const sorted = scores.sort((a, b) => {
    if (b.percentage !== a.percentage) {
      return b.percentage - a.percentage
    }
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  })
  
  return sorted.slice(0, limit)
}

/**
 * Get daily leaderboard (top scores for today)
 */
export async function getDailyLeaderboard(limit: number = 10): Promise<QuizScore[]> {
  const scores = await readScores()
  const today = new Date().toISOString().split('T')[0]
  
  const todayScores = scores.filter(score => score.date === today)
  
  // Sort by percentage (highest first), then by timestamp (most recent first)
  const sorted = todayScores.sort((a, b) => {
    if (b.percentage !== a.percentage) {
      return b.percentage - a.percentage
    }
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  })
  
  return sorted.slice(0, limit)
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
  
  const todayScores = scores.filter(score => score.date === today)
  
  const totalAttempts = scores.length
  const todayAttempts = todayScores.length
  
  const averageScore = scores.length > 0
    ? Math.round(scores.reduce((sum, score) => sum + score.percentage, 0) / scores.length)
    : 0
  
  return {
    totalAttempts,
    todayAttempts,
    averageScore,
  }
}
