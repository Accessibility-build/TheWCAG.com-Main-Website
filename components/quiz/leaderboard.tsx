"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Clock, Users, Target, RefreshCw, Medal, Crown } from "lucide-react"
import type { QuizScore } from "@/lib/quiz/storage"

type LeaderboardType = 'all-time' | 'daily'

interface LeaderboardStats {
  totalAttempts: number
  todayAttempts: number
  averageScore: number
}

export function Leaderboard() {
  const [type, setType] = useState<LeaderboardType>('all-time')
  const [scores, setScores] = useState<QuizScore[]>([])
  const [stats, setStats] = useState<LeaderboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLeaderboard = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const [scoresRes, statsRes] = await Promise.all([
        fetch(`/api/quiz/scores?type=${type}&limit=10`),
        fetch('/api/quiz/scores?type=stats')
      ])
      
      const scoresData = await scoresRes.json()
      const statsData = await statsRes.json()
      
      if (scoresData.success) {
        setScores(scoresData.data)
      } else {
        throw new Error(scoresData.error)
      }
      
      if (statsData.success) {
        setStats(statsData.data)
      }
    } catch (err) {
      setError('Failed to load leaderboard')
      console.error(err)
    }
    setLoading(false)
  }, [type])

  useEffect(() => {
    fetchLeaderboard()
  }, [fetchLeaderboard])

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />
      default:
        return <span className="w-5 text-center font-bold text-muted-foreground">{rank}</span>
    }
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const getScoreBadgeStyle = (percentage: number) => {
    // WCAG AA compliant color combinations with white text
    if (percentage >= 90) {
      return 'bg-green-600 text-white border-green-700'
    }
    if (percentage >= 70) {
      return 'bg-blue-600 text-white border-blue-700'
    }
    if (percentage >= 50) {
      return 'bg-amber-600 text-white border-amber-700'
    }
    return 'bg-red-600 text-white border-red-700'
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-3 gap-4">
          <Card className="border-2">
            <CardContent className="pt-6 text-center">
              <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">{stats.totalAttempts}</p>
              <p className="text-xs text-muted-foreground">Total Attempts</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="pt-6 text-center">
              <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">{stats.todayAttempts}</p>
              <p className="text-xs text-muted-foreground">Today</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="pt-6 text-center">
              <Target className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">{stats.averageScore}%</p>
              <p className="text-xs text-muted-foreground">Average Score</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Leaderboard Card */}
      <Card className="border-2">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              <CardTitle>Leaderboard</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={fetchLeaderboard}
              disabled={loading}
              aria-label="Refresh leaderboard"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
          <CardDescription>
            Top performers in the accessibility quiz
          </CardDescription>
          
          {/* Type Toggle */}
          <div className="flex gap-2 pt-2">
            <Button
              variant={type === 'all-time' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setType('all-time')}
              className="flex-1"
            >
              <Trophy className="mr-1.5 h-4 w-4" />
              All Time
            </Button>
            <Button
              variant={type === 'daily' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setType('daily')}
              className="flex-1"
            >
              <Calendar className="mr-1.5 h-4 w-4" />
              Today
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          {error ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>{error}</p>
              <Button variant="link" onClick={fetchLeaderboard}>Try again</Button>
            </div>
          ) : loading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 animate-pulse">
                  <div className="w-6 h-6 rounded-full bg-muted" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-24 bg-muted rounded" />
                    <div className="h-3 w-16 bg-muted rounded" />
                  </div>
                  <div className="h-6 w-12 bg-muted rounded" />
                </div>
              ))}
            </div>
          ) : scores.length === 0 ? (
            <div className="text-center py-8">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-muted-foreground font-medium">
                {type === 'daily' ? 'No scores today yet!' : 'No scores yet!'}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Be the first to take the quiz and claim the top spot!
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {scores.map((entry, index) => (
                <div
                  key={entry.id}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                    index === 0 
                      ? 'bg-yellow-500/10 border border-yellow-500/30' 
                      : index === 1 
                        ? 'bg-gray-500/10 border border-gray-500/20' 
                        : index === 2 
                          ? 'bg-amber-500/10 border border-amber-500/20' 
                          : 'bg-muted/50 hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center justify-center w-6">
                    {getRankIcon(index + 1)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">
                      {entry.name || 'Anonymous'}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{formatDate(entry.timestamp)}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div 
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-bold border ${getScoreBadgeStyle(entry.percentage)}`}
                    >
                      {entry.percentage}%
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {entry.score}/{entry.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

