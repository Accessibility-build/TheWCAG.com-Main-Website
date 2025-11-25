"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Trophy, Smile, Meh, Frown, Sparkles } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is web accessibility?",
    options: [
      "Making websites look pretty",
      "Making websites usable by everyone, including people with disabilities",
      "Making websites load faster",
      "Making websites work on mobile phones"
    ],
    correctAnswer: 1,
    explanation: "Accessibility is about making websites usable by everyone, including people with disabilities. It's not just about looks or speed!"
  },
  {
    id: 2,
    question: "What does 'alt text' do?",
    options: [
      "Makes images load faster",
      "Describes images for screen readers and when images don't load",
      "Makes images bigger",
      "Adds a border to images"
    ],
    correctAnswer: 1,
    explanation: "Alt text describes images for people using screen readers and shows up when images can't load. Super important!"
  },
  {
    id: 3,
    question: "Can you navigate a website using only a keyboard?",
    options: [
      "No, you need a mouse",
      "Yes, if it's built accessibly",
      "Only on some websites",
      "Only on mobile"
    ],
    correctAnswer: 1,
    explanation: "Yes! Accessible websites should be fully navigable with just a keyboard. Tab through everything!"
  },
  {
    id: 4,
    question: "What is a screen reader?",
    options: [
      "A device that makes your screen bigger",
      "Software that reads website content aloud for people with visual impairments",
      "A tool that checks your code",
      "A browser extension"
    ],
    correctAnswer: 1,
    explanation: "Screen readers are assistive technologies that read content aloud. They're essential for many users!"
  },
  {
    id: 5,
    question: "What's the minimum color contrast ratio for normal text (WCAG AA)?",
    options: [
      "2:1",
      "3:1",
      "4.5:1",
      "10:1"
    ],
    correctAnswer: 2,
    explanation: "4.5:1 is the minimum contrast ratio for normal text. This ensures text is readable for people with low vision."
  },
  {
    id: 6,
    question: "Should all buttons have labels?",
    options: [
      "No, icons are enough",
      "Yes, always! Buttons need clear, accessible labels",
      "Only if they're important",
      "Only on mobile"
    ],
    correctAnswer: 1,
    explanation: "Yes! All interactive elements need clear, accessible labels (visible or via aria-label). Icons alone aren't enough—users need to know what buttons do."
  },
  {
    id: 7,
    question: "What does WCAG stand for?",
    options: [
      "Web Content Accessibility Guidelines",
      "Website Color and Graphics",
      "Web Coding and Graphics",
      "Website Content and Guidelines"
    ],
    correctAnswer: 0,
    explanation: "WCAG = Web Content Accessibility Guidelines. The international standard for web accessibility!"
  },
  {
    id: 8,
    question: "Is accessibility only for people with disabilities?",
    options: [
      "Yes, only for disabled people",
      "No, it benefits everyone",
      "Only for blind people",
      "Only for developers"
    ],
    correctAnswer: 1,
    explanation: "Nope! Accessibility benefits everyone—people on slow connections, mobile users, people in bright sunlight, and yes, people with disabilities too!"
  }
]

const getResultMessage = (score: number, total: number) => {
  const percentage = (score / total) * 100
  
  if (percentage === 100) {
    return {
      icon: Trophy,
      title: "Accessibility Master! 🏆",
      message: "Wow! You're an accessibility wizard! You clearly know your stuff. Want to learn even more? Check out our guides!",
      color: "text-yellow-600",
      bgColor: "bg-yellow-500/10"
    }
  } else if (percentage >= 75) {
    return {
      icon: Sparkles,
      title: "Pretty Good! ✨",
      message: "Nice work! You know the basics. There's always more to learn though—dive into our resources to become an accessibility pro!",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10"
    }
  } else if (percentage >= 50) {
    return {
      icon: Smile,
      title: "Getting There! 😊",
      message: "Not bad! You've got some knowledge, but there's room to grow. Good news: you're in the right place to learn!",
      color: "text-green-600",
      bgColor: "bg-green-500/10"
    }
  } else if (percentage >= 25) {
    return {
      icon: Meh,
      title: "Room for Improvement 😅",
      message: "Hey, we all start somewhere! The good news? You're here, which means you care. That's the first step! Time to learn!",
      color: "text-orange-600",
      bgColor: "bg-orange-500/10"
    }
  } else {
    return {
      icon: Frown,
      title: "Beginner Mode Activated 🎓",
      message: "No worries! Everyone's a beginner at some point. The fact that you took this quiz shows you're curious—that's awesome! Let's learn together!",
      color: "text-purple-600",
      bgColor: "bg-purple-500/10"
    }
  }
}

export function AccessibilityQuiz() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNext = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      // Calculate score
      const finalScore = questions.reduce((acc, q, idx) => {
        return acc + (newAnswers[idx] === q.correctAnswer ? 1 : 0)
      }, 0)
      setScore(finalScore)
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setAnswers([])
    setShowResult(false)
    setScore(0)
  }

  const handleClose = () => {
    setIsOpen(false)
    // Reset after a delay to allow animation
    setTimeout(() => {
      handleRestart()
    }, 300)
  }

  const result = showResult ? getResultMessage(score, questions.length) : null
  const ResultIcon = result?.icon || Trophy

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="h-12 sm:h-14 md:h-16 px-8 sm:px-10 md:px-12 text-base sm:text-lg md:text-xl font-bold shadow-xl hover:shadow-2xl transition-all bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
      >
        <Sparkles className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
        Take the Quiz Now
      </Button>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:p-8 max-h-[90vh] overflow-y-auto">
            <Dialog.Title className="sr-only">Accessibility Quiz</Dialog.Title>
            
            {!showResult ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                      How Much Do You Know About Accessibility?
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Question {currentQuestion + 1} of {questions.length}
                    </p>
                  </div>
                  <Dialog.Close asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      aria-label="Close quiz"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </Dialog.Close>
                </div>

                <div className="mb-6">
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle id={`question-${questions[currentQuestion].id}`} className="text-xl sm:text-2xl">
                      {questions[currentQuestion].question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3" role="radiogroup" aria-labelledby={`question-${questions[currentQuestion].id}`}>
                      {questions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault()
                              handleAnswerSelect(index)
                            }
                          }}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                            selectedAnswer === index
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50 hover:bg-muted/50"
                          }`}
                          aria-pressed={selectedAnswer === index}
                          role="radio"
                          aria-checked={selectedAnswer === index}
                        >
                          <span className="font-medium">{option}</span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end">
                  <Button
                    onClick={handleNext}
                    disabled={selectedAnswer === null}
                    size="lg"
                  >
                    {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold">Your Results</h2>
                  <Dialog.Close asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      aria-label="Close quiz"
                      onClick={handleClose}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </Dialog.Close>
                </div>

                <Card className={`mb-6 ${result?.bgColor} border-2`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <ResultIcon className={`h-16 w-16 ${result?.color}`} />
                    </div>
                    <CardTitle className={`text-2xl sm:text-3xl mb-2 ${result?.color}`}>
                      {result?.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      You got {score} out of {questions.length} correct!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-base sm:text-lg mb-6">
                      {result?.message}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {questions.map((q, idx) => {
                        const isCorrect = answers[idx] === q.correctAnswer
                        const userAnswer = q.options[answers[idx]]
                        const correctAnswer = q.options[q.correctAnswer]
                        
                        return (
                          <div
                            key={q.id}
                            className={`p-3 rounded-lg border ${
                              isCorrect
                                ? "bg-green-500/10 border-green-500/20"
                                : "bg-red-500/10 border-red-500/20"
                            }`}
                          >
                            <div className="flex items-start gap-2 mb-1">
                              {isCorrect ? (
                                <span className="text-green-600 font-bold text-lg">✓</span>
                              ) : (
                                <span className="text-red-600 font-bold text-lg">✗</span>
                              )}
                              <div className="flex-1">
                                <span className="font-medium text-sm block mb-1">{q.question}</span>
                                {!isCorrect && (
                                  <div className="text-xs space-y-1 mt-2">
                                    <p className="text-red-600">
                                      <span className="font-semibold">Your answer:</span> {userAnswer}
                                    </p>
                                    <p className="text-green-600">
                                      <span className="font-semibold">Correct answer:</span> {correctAnswer}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                            {q.explanation && (
                              <p className="text-xs text-muted-foreground ml-7 mt-2">
                                {q.explanation}
                              </p>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={handleRestart}
                    size="lg"
                  >
                    Take Quiz Again
                  </Button>
                  <Dialog.Close asChild>
                    <Button
                      onClick={handleClose}
                      size="lg"
                    >
                      Close
                    </Button>
                  </Dialog.Close>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

