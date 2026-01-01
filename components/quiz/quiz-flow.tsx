"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trophy, Smile, Meh, Frown, Sparkles, ArrowRight, RotateCcw, Send, Clock, HelpCircle, CheckCircle2, Plus, ExternalLink } from "lucide-react"
import { questions as allQuestions, type Question } from "@/lib/quiz/questions"

interface QuizFlowProps {
  onComplete?: (score: number, total: number, name?: string) => void
  questionCount?: number
}

type QuizState = 'intro' | 'quiz' | 'name-entry' | 'results'

const getResultMessage = (score: number, total: number) => {
  const percentage = (score / total) * 100
  
  if (percentage === 100) {
    return {
      icon: Trophy,
      title: "Accessibility Master!",
      emoji: "🏆",
      message: "Wow! You're an accessibility wizard! Perfect score - you clearly know your stuff!",
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border-yellow-500/30"
    }
  } else if (percentage >= 75) {
    return {
      icon: Sparkles,
      title: "Excellent Work!",
      emoji: "✨",
      message: "Great job! You have a solid understanding of web accessibility. Keep learning!",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30"
    }
  } else if (percentage >= 50) {
    return {
      icon: Smile,
      title: "Good Progress!",
      emoji: "😊",
      message: "You're on the right track! There's more to learn, but you've got the basics down.",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30"
    }
  } else if (percentage >= 25) {
    return {
      icon: Meh,
      title: "Keep Learning!",
      emoji: "📚",
      message: "You're getting there! Check out our resources to boost your accessibility knowledge.",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-amber-500/20 border-orange-500/30"
    }
  } else {
    return {
      icon: Frown,
      title: "Time to Study!",
      emoji: "🎓",
      message: "Don't worry - everyone starts somewhere! Explore our guides to level up your skills.",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-purple-500/30"
    }
  }
}

export function QuizFlow({ onComplete, questionCount = 30 }: QuizFlowProps) {
  const [state, setState] = useState<QuizState>('intro')
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const [timerActive, setTimerActive] = useState(false)
  const [showTimeExtension, setShowTimeExtension] = useState(false)
  const [announcement, setAnnouncement] = useState("")
  const liveRegionRef = useRef<HTMLDivElement>(null)

  const startQuiz = useCallback(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, Math.min(questionCount, allQuestions.length))
    setQuestions(selected)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setAnswers([])
    setScore(0)
    setShowExplanation(false)
    setTimeLeft(15)
    setTimerActive(true)
    setState('quiz')
  }, [questionCount])

  // Timer effect with warnings
  useEffect(() => {
    if (!timerActive || showExplanation || state !== 'quiz') return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTimerActive(false)
          setAnnouncement("Time is up! Would you like 15 more seconds to answer this question?")
          setShowTimeExtension(true)
          return 0
        }
        // Announce warnings at 10 and 5 seconds
        if (prev === 10) {
          setAnnouncement("Warning: 10 seconds remaining")
        } else if (prev === 5) {
          setAnnouncement("Warning: 5 seconds remaining")
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timerActive, showExplanation, state])

  // Handle time extension response
  const handleExtendTime = () => {
    setTimeLeft(15)
    setTimerActive(true)
    setShowTimeExtension(false)
    setAnnouncement("15 seconds added to timer")
  }

  const handleSkipQuestion = () => {
    setShowTimeExtension(false)
    setAnnouncement("Question skipped. Moving to next question.")
    // Move to next question without selecting an answer
    if (currentQuestion < questions.length - 1) {
      const newAnswers = [...answers, -1] // -1 indicates skipped
      setAnswers(newAnswers)
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setTimeLeft(15)
      setTimerActive(true)
    } else {
      // Last question - go to results
      const newAnswers = [...answers, -1]
      const finalScore = questions.reduce((acc, q, idx) => {
        return acc + (newAnswers[idx] === q.correctAnswer ? 1 : 0)
      }, 0)
      setScore(finalScore)
      setState('name-entry')
    }
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return
    setSelectedAnswer(answerIndex)
    setTimerActive(false) // Stop timer when answer is selected
  }

  const handleNext = () => {
    if (selectedAnswer === null) return

    if (!showExplanation) {
      const currentQ = questions[currentQuestion]
      const isCorrect = selectedAnswer === currentQ.correctAnswer
      setShowExplanation(true)
      setAnnouncement(isCorrect ? "Correct answer!" : "Incorrect. Review the explanation below.")
      return
    }

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setTimeLeft(15)
      setTimerActive(true)
      setAnnouncement(`Moving to question ${currentQuestion + 2} of ${questions.length}`)
    } else {
      const finalScore = questions.reduce((acc, q, idx) => {
        return acc + (newAnswers[idx] === q.correctAnswer ? 1 : 0)
      }, 0)
      setScore(finalScore)
      setAnnouncement("Quiz complete! Entering your score.")
      setState('name-entry')
    }
  }

  const handleSubmitScore = async () => {
    setIsSubmitting(true)
    try {
      await fetch('/api/quiz/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          score,
          total: questions.length,
          name: name.trim() || undefined,
        }),
      })
    } catch (error) {
      console.error('Failed to submit score:', error)
    }
    setIsSubmitting(false)
    onComplete?.(score, questions.length, name.trim() || undefined)
    setState('results')
  }

  const handleSkipName = async () => {
    setIsSubmitting(true)
    try {
      await fetch('/api/quiz/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          score,
          total: questions.length,
        }),
      })
    } catch (error) {
      console.error('Failed to submit score:', error)
    }
    setIsSubmitting(false)
    onComplete?.(score, questions.length)
    setState('results')
  }

  const handleRestart = () => {
    setState('intro')
  }

  const result = getResultMessage(score, questions.length || 1)
  const ResultIcon = result.icon

  // Intro screen
  if (state === 'intro') {
    return (
      <Card className="border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
        <CardContent className="p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Test Your Knowledge?
              </h3>
              <p className="text-muted-foreground mb-6">
                Challenge yourself with {questionCount} randomized questions covering WCAG guidelines, 
                best practices, and accessibility fundamentals.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <span><strong>{questionCount}</strong> Questions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-5 w-5 text-primary" />
                  <span><strong>15 seconds</strong> per question</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Instant Feedback</span>
                </div>
              </div>

              <Button onClick={startQuiz} size="lg" className="text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all">
                Start Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-background/80 backdrop-blur rounded-2xl p-6 border-2 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Learn as you go</p>
                      <p className="text-sm text-muted-foreground">Each answer includes an explanation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-yellow-500/10">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="font-semibold">Compete on leaderboard</p>
                      <p className="text-sm text-muted-foreground">See how you rank against others</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-green-500/10">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold">Track your progress</p>
                      <p className="text-sm text-muted-foreground">Review all answers at the end</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Quiz questions
  if (state === 'quiz' && questions.length > 0) {
    const currentQ = questions[currentQuestion]
    const isCorrect = selectedAnswer === currentQ.correctAnswer
    const currentScore = answers.filter((a, i) => a === questions[i].correctAnswer).length

    return (
      <>
        {/* ARIA Live Region for announcements */}
        <div 
          ref={liveRegionRef}
          role="status" 
          aria-live="polite" 
          aria-atomic="true"
          className="sr-only"
        >
          {announcement}
        </div>

        {/* Time Extension Dialog */}
        {showTimeExtension && (
          <Card className="border-2 border-amber-500 bg-amber-500/10 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-amber-500/20">
                  <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Time's Up!</h3>
                  <p className="text-muted-foreground mb-4">
                    Would you like 15 more seconds to answer this question, or skip to the next one?
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      onClick={handleExtendTime}
                      className="gap-2"
                      autoFocus
                    >
                      <Plus className="h-4 w-4" />
                      Add 15 Seconds
                    </Button>
                    <Button 
                      onClick={handleSkipQuestion}
                      variant="outline"
                    >
                      Skip Question
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-2 overflow-hidden">
          {/* Progress Header */}
          <div className="bg-muted/50 px-6 py-4 border-b">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-4">
                {!showExplanation && !showTimeExtension && (
                  <div 
                    className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                      timeLeft <= 5 ? 'bg-red-500/20 text-red-600 dark:text-red-400' : 'bg-primary/10 text-primary'
                    }`}
                    role="timer"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <span className="text-sm font-bold">
                      <span className="sr-only">Time remaining: </span>
                      {timeLeft} seconds
                    </span>
                  </div>
                )}
                <span className="text-sm font-semibold text-primary">
                  <span className="sr-only">Current score: </span>
                  Score: {currentScore}/{currentQuestion}
                </span>
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-violet-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                role="progressbar"
                aria-valuenow={currentQuestion + 1}
                aria-valuemin={1}
                aria-valuemax={questions.length}
                aria-label={`Question ${currentQuestion + 1} of ${questions.length}`}
              />
            </div>
          </div>

        <CardContent className="p-6 md:p-8">
          <h3 id={`question-${currentQ.id}`} className="text-xl md:text-2xl font-bold leading-relaxed mb-6">
            {currentQ.question}
          </h3>

          <div className="space-y-3" role="radiogroup" aria-labelledby={`question-${currentQ.id}`}>
            {currentQ.options.map((option, index) => {
              let optionClass = "border-border hover:border-primary/50 hover:bg-muted/50"
              let iconContent = null
              
              if (showExplanation) {
                if (index === currentQ.correctAnswer) {
                  optionClass = "border-green-500 bg-green-500/10"
                  iconContent = <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                } else if (index === selectedAnswer && !isCorrect) {
                  optionClass = "border-red-500 bg-red-500/10"
                  iconContent = <span className="text-red-500 font-bold text-lg">✗</span>
                }
              } else if (selectedAnswer === index) {
                optionClass = "border-primary bg-primary/5 ring-2 ring-primary/20"
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-3 ${optionClass} ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                  aria-pressed={selectedAnswer === index}
                  role="radio"
                  aria-checked={selectedAnswer === index}
                >
                  <span className="flex-1 font-medium">{option}</span>
                  {iconContent}
                </button>
              )
            })}
          </div>

          {showExplanation && currentQ.explanation && (
            <div 
              className={`mt-6 p-5 rounded-xl border-2 ${isCorrect ? 'bg-green-500/10 border-green-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}
              role="region"
              aria-label="Answer explanation"
            >
              <p className="font-bold mb-2 flex items-center gap-2">
                {isCorrect ? (
                  <><CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" /> Correct!</>
                ) : (
                  <><span className="text-amber-500" aria-hidden="true">💡</span> Learn from this</>
                )}
              </p>
              <p className="text-muted-foreground mb-4">{currentQ.explanation}</p>
              
              {currentQ.source && (
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Source Reference:</p>
                  <a 
                    href={currentQ.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    {currentQ.source.title}
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-end mt-6">
            <Button
              onClick={handleNext}
              disabled={selectedAnswer === null || showTimeExtension}
              size="lg"
              className="min-w-[160px] h-12"
            >
              {!showExplanation 
                ? 'Check Answer' 
                : currentQuestion < questions.length - 1 
                  ? 'Next Question' 
                  : 'See Results'
              }
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </CardContent>
      </Card>
      </>
    )
  }

  // Name entry screen
  if (state === 'name-entry') {
    const percentage = Math.round((score / questions.length) * 100)
    
    return (
      <Card className={`border-2 ${result.bgColor} overflow-hidden`}>
        <CardContent className="p-8 md:p-10">
          <div className="text-center max-w-md mx-auto">
            <div className={`inline-flex p-4 rounded-full bg-background/80 mb-6`}>
              <ResultIcon className={`h-12 w-12 ${result.color}`} />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Quiz Complete! {result.emoji}
            </h3>
            
            <div className="flex justify-center gap-4 my-6">
              <div className="text-center">
                <p className="text-4xl font-black text-primary">{score}</p>
                <p className="text-sm text-muted-foreground">Correct</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-4xl font-black">{questions.length}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className={`text-4xl font-black ${result.color}`}>{percentage}%</p>
                <p className="text-sm text-muted-foreground">Score</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8">{result.message}</p>
            
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label htmlFor="player-name" className="text-sm font-semibold">
                  Add your name to the leaderboard (optional)
                </Label>
                <Input
                  id="player-name"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                  disabled={isSubmitting}
                  className="h-12 text-center text-lg"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={handleSubmitScore}
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full h-12"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Submitting...' : 'Submit to Leaderboard'}
                </Button>
                <Button 
                  onClick={handleSkipName}
                  variant="ghost"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  Submit Anonymously
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Results screen
  if (state === 'results') {
    return (
      <Card className={`border-2 ${result.bgColor} overflow-hidden`}>
        <CardHeader className="text-center pb-4 pt-8">
          <div className="inline-flex p-4 rounded-full bg-background/80 mx-auto mb-4">
            <ResultIcon className={`h-12 w-12 ${result.color}`} />
          </div>
          <CardTitle className={`text-2xl md:text-3xl ${result.color}`}>
            {result.title} {result.emoji}
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            You scored <span className="font-bold text-foreground">{score}</span> out of {questions.length} ({Math.round((score / questions.length) * 100)}%)
          </CardDescription>
        </CardHeader>
        
        <CardContent className="px-6 md:px-8 pb-8">
          <p className="text-center text-muted-foreground mb-6">{result.message}</p>

          <div className="max-h-[350px] overflow-y-auto space-y-2 pr-2 mb-6">
            {questions.map((q, idx) => {
              const isQuestionCorrect = answers[idx] === q.correctAnswer
              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border ${
                    isQuestionCorrect
                      ? "bg-green-500/10 border-green-500/20"
                      : "bg-red-500/10 border-red-500/20"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`font-bold text-lg shrink-0 mt-0.5 ${isQuestionCorrect ? 'text-green-500' : 'text-red-500'}`}>
                      {isQuestionCorrect ? '✓' : '✗'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{q.question}</p>
                      {!isQuestionCorrect && (
                        <div className="text-xs mt-2 space-y-1">
                          <p className="text-red-600 dark:text-red-400">
                            <span className="font-semibold">Your answer:</span> {q.options[answers[idx]]}
                          </p>
                          <p className="text-green-600 dark:text-green-400">
                            <span className="font-semibold">Correct:</span> {q.options[q.correctAnswer]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleRestart} variant="outline" className="flex-1 h-12">
              <RotateCcw className="mr-2 h-5 w-5" />
              Take Quiz Again
            </Button>
            <Button 
              onClick={() => {
                const leaderboardSection = document.querySelector('[data-leaderboard]')
                if (leaderboardSection) {
                  leaderboardSection.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="flex-1 h-12"
            >
              <Trophy className="mr-2 h-5 w-5" />
              View Leaderboard
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return null
}
