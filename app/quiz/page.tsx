"use client"

import { useState, useEffect, useCallback } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { QuizFlow } from "@/components/quiz/quiz-flow"
import { SubmitQuestion } from "@/components/quiz/submit-question"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Trophy, 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  Crown, 
  Medal, 
  Clock, 
  Users, 
  Target, 
  Calendar,
  RefreshCw,
  Zap,
  Brain,
  Award
} from "lucide-react"
import Link from "next/link"

interface QuizScore {
  id: string
  name?: string
  score: number
  total: number
  percentage: number
  timestamp: string
  date: string
}

interface LeaderboardStats {
  totalAttempts: number
  todayAttempts: number
  averageScore: number
}

export default function QuizPage() {
  const [leaderboardKey, setLeaderboardKey] = useState(0)
  const [allTimeScores, setAllTimeScores] = useState<QuizScore[]>([])
  const [dailyScores, setDailyScores] = useState<QuizScore[]>([])
  const [stats, setStats] = useState<LeaderboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchLeaderboards = useCallback(async () => {
    setLoading(true)
    try {
      const [allTimeRes, dailyRes, statsRes] = await Promise.all([
        fetch('/api/quiz/scores?type=all-time&limit=5'),
        fetch('/api/quiz/scores?type=daily&limit=5'),
        fetch('/api/quiz/scores?type=stats')
      ])
      
      const allTimeData = await allTimeRes.json()
      const dailyData = await dailyRes.json()
      const statsData = await statsRes.json()
      
      if (allTimeData.success) setAllTimeScores(allTimeData.data)
      if (dailyData.success) setDailyScores(dailyData.data)
      if (statsData.success) setStats(statsData.data)
    } catch (err) {
      console.error('Failed to fetch leaderboard:', err)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchLeaderboards()
  }, [fetchLeaderboards, leaderboardKey])

  const handleQuizComplete = () => {
    setLeaderboardKey(prev => prev + 1)
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />
      case 2: return <Medal className="h-5 w-5 text-gray-400" />
      case 3: return <Medal className="h-5 w-5 text-amber-600" />
      default: return <span className="w-5 text-center font-bold text-muted-foreground text-sm">{rank}</span>
    }
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-emerald-600 dark:text-emerald-400'
    if (percentage >= 70) return 'text-blue-600 dark:text-blue-400'
    if (percentage >= 50) return 'text-amber-600 dark:text-amber-400'
    return 'text-red-600 dark:text-red-400'
  }

  const LeaderboardList = ({ scores, emptyMessage, title }: { scores: QuizScore[], emptyMessage: string, title: string }) => (
    <div className="space-y-2">
      {scores.length === 0 ? (
        <div className="text-center py-8">
          <div className="inline-flex p-3 rounded-full bg-muted/50 mb-3">
            <Trophy className="h-6 w-6 text-muted-foreground/50" />
          </div>
          <p className="font-semibold text-sm mb-1">{title}</p>
          <p className="text-xs text-muted-foreground">{emptyMessage}</p>
        </div>
      ) : (
        scores.map((entry, index) => (
          <div
            key={entry.id}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              index === 0 
                ? 'bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20' 
                : index === 1 
                  ? 'bg-gradient-to-r from-slate-500/10 to-gray-500/10 border border-slate-500/20' 
                  : index === 2 
                    ? 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20' 
                    : 'bg-muted/30 hover:bg-muted/50'
            }`}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background/80">
              {getRankIcon(index + 1)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate text-sm">{entry.name || 'Anonymous'}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {formatDate(entry.timestamp)}
              </p>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className={`font-bold ${getScoreColor(entry.percentage)}`}>
                {entry.percentage}%
              </Badge>
            </div>
          </div>
        ))
      )}
    </div>
  )

  // Structured data for the quiz page - Enhanced for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": "Free Web Accessibility Quiz with Leaderboard - WCAG 2.2 Knowledge Test",
    "description": "Interactive accessibility quiz testing WCAG 2.2 guidelines, web accessibility best practices, and accessibility fundamentals. Features leaderboard, instant feedback, and detailed explanations.",
    "educationalLevel": "beginner to advanced",
    "learningResourceType": "Quiz",
    "teaches": ["WCAG 2.2 Guidelines", "Web Accessibility", "Accessible Design", "ARIA", "Semantic HTML", "Accessibility Testing"],
    "about": {
      "@type": "Thing",
      "name": "Web Accessibility",
      "sameAs": "https://www.w3.org/WAI/fundamentals/accessibility-intro/"
    },
    "hasPart": [
      {
        "@type": "Question",
        "eduQuestionType": "Multiple choice",
        "learningResourceType": "Practice problem",
        "educationalAlignment": {
          "@type": "AlignmentObject",
          "alignmentType": "educationalSubject",
          "targetName": "Web Accessibility"
        }
      }
    ],
    "provider": { 
      "@type": "Organization", 
      "name": "TheWCAG", 
      "url": "https://thewcag.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thewcag.com/logo.png"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "isAccessibleForFree": true,
    "inLanguage": "en",
    "aggregateRating": stats ? {
      "@type": "AggregateRating",
      "ratingValue": stats.averageScore / 10,
      "bestRating": "10",
      "worstRating": "0",
      "ratingCount": stats.totalAttempts
    } : undefined
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thewcag.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Accessibility Quiz",
        "item": "https://thewcag.com/quiz"
      }
    ]
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the accessibility quiz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our free accessibility quiz tests your knowledge of WCAG 2.2 guidelines, web accessibility best practices, and accessibility fundamentals. It features 10 randomized questions with instant feedback and explanations."
        }
      },
      {
        "@type": "Question",
        "name": "How does the leaderboard work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The leaderboard tracks both all-time best scores and daily leaders. You can optionally add your name when submitting your score to compete with others."
        }
      },
      {
        "@type": "Question",
        "name": "Is the quiz free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the accessibility quiz is completely free. No registration or payment required."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <SkipLink />
      <Header />
      
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-40 right-[15%] w-48 h-48 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-700" />
            <div className="absolute bottom-20 left-[30%] w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container relative">
            <Breadcrumb items={[{ label: "Quiz", href: "/quiz" }]} className="mb-8" />

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 border border-primary/20">
                <Brain className="h-4 w-4" />
                <span>Test Your Knowledge</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
                Accessibility Quiz
                <span className="block text-primary">with Leaderboard</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Test your WCAG 2.2 knowledge with 30 challenging questions! Each question has 15 seconds. 
                Get instant feedback, learn from detailed explanations, and compete on the leaderboard.
              </p>

              {/* Quick Stats */}
              {stats && (
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border shadow-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="font-bold">{stats.totalAttempts}</span>
                    <span className="text-muted-foreground text-sm">quiz attempts</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border shadow-sm">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="font-bold">{stats.averageScore}%</span>
                    <span className="text-muted-foreground text-sm">average score</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border shadow-sm">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="font-bold">{stats.todayAttempts}</span>
                    <span className="text-muted-foreground text-sm">today</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content: Quiz + Leaderboards */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Quiz Section - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                    <Sparkles className="h-7 w-7 text-primary" />
                    <span>Take the Quiz</span>
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    Test your WCAG 2.2 knowledge with 30 randomized questions • 15 seconds per question
                  </p>
                </div>
                
                <QuizFlow 
                  questionCount={30} 
                  onComplete={handleQuizComplete}
                />

                {/* Pro Tips Card */}
                <Card className="border-2 bg-gradient-to-br from-primary/5 to-violet-500/5 mt-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Pro Tips</h3>
                        <ul className="text-sm text-muted-foreground space-y-1.5">
                          <li>• Read each explanation to learn</li>
                          <li>• WCAG 2.2 is the latest version</li>
                          <li>• Practice makes perfect!</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Leaderboard Sidebar */}
              <div className="space-y-6">
                {/* All-Time Leaderboard */}
                <Card className="border-2 overflow-hidden">
                  <CardHeader className="border-b pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        <span>All-Time Best</span>
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={fetchLeaderboards}
                        disabled={loading}
                        className="h-8 w-8"
                        aria-label="Refresh leaderboard"
                      >
                        <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    {loading ? (
                      <div className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 animate-pulse">
                            <div className="w-8 h-8 rounded-full bg-muted" />
                            <div className="flex-1 space-y-1.5">
                              <div className="h-3 w-20 bg-muted rounded" />
                              <div className="h-2 w-14 bg-muted rounded" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <LeaderboardList 
                        scores={allTimeScores} 
                        title="All-Time Best"
                        emptyMessage="Be the first to set a record!" 
                      />
                    )}
                  </CardContent>
                </Card>

                {/* Daily Leaderboard */}
                <Card className="border-2 overflow-hidden">
                  <CardHeader className="border-b pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      <span>Today's Leaders</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    {loading ? (
                      <div className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 animate-pulse">
                            <div className="w-8 h-8 rounded-full bg-muted" />
                            <div className="flex-1 space-y-1.5">
                              <div className="h-3 w-20 bg-muted rounded" />
                              <div className="h-2 w-14 bg-muted rounded" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <LeaderboardList 
                        scores={dailyScores} 
                        title="Today's Leaders"
                        emptyMessage="Start today's competition!" 
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contribute Section */}
        <section className="py-16 md:py-20 bg-muted/30 border-y">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  <span>Contribute Your Questions</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Help grow our accessibility quiz! Submit your own WCAG questions for review.
                </p>
              </div>
              <SubmitQuestion variant="card" />
            </div>
          </div>
        </section>

        {/* Learn More Section */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  <span>Continue Learning Accessibility</span>
                </h2>
                <p className="text-muted-foreground">
                  Explore more resources to master WCAG guidelines and web accessibility
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href="/learn"
                  className="group relative p-6 rounded-2xl border-2 bg-background hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                  <BookOpen className="h-10 w-10 text-primary mb-4 relative" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    Learning Path
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Start from basics and progress to advanced accessibility concepts.
                  </p>
                  <span className="inline-flex items-center text-sm text-primary font-semibold">
                    Start Learning
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link 
                  href="/checklist"
                  className="group relative p-6 rounded-2xl border-2 bg-background hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full" />
                  <svg className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-4 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    WCAG Checklist
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Interactive checklist to track your compliance progress.
                  </p>
                  <span className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
                    View Checklist
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link 
                  href="/tools"
                  className="group relative p-6 rounded-2xl border-2 bg-background hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full" />
                  <svg className="h-10 w-10 text-violet-600 dark:text-violet-400 mb-4 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    Accessibility Tools
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Free tools to help you test and improve accessibility.
                  </p>
                  <span className="inline-flex items-center text-sm text-violet-600 dark:text-violet-400 font-semibold">
                    Explore Tools
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
