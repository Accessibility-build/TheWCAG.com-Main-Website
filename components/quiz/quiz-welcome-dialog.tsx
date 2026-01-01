"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Trophy, Clock, Target, Sparkles } from "lucide-react"
import Link from "next/link"

export function QuizWelcomeDialog() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen the dialog before
    const hasSeenQuizDialog = localStorage.getItem("hasSeenQuizDialog")
    
    if (!hasSeenQuizDialog) {
      // Show dialog after a short delay for better UX
      const timer = setTimeout(() => {
        setOpen(true)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setOpen(false)
    localStorage.setItem("hasSeenQuizDialog", "true")
  }

  const handleTakeQuiz = () => {
    localStorage.setItem("hasSeenQuizDialog", "true")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-6 text-white">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Trophy className="h-8 w-8" />
            </div>
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-white">
              Welcome to TheWCAG Quiz!
            </DialogTitle>
            <DialogDescription className="text-blue-100 text-center text-base mt-2">
              Test your accessibility knowledge and compete on the leaderboard
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg shrink-0">
                <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">30 Challenging Questions</h4>
                <p className="text-sm text-muted-foreground">
                  Test your knowledge of WCAG 2.2, ARIA, and accessibility best practices
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg shrink-0">
                <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">15 Seconds Per Question</h4>
                <p className="text-sm text-muted-foreground">
                  Quick-fire format to keep you engaged and test your instant recall
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg shrink-0">
                <Sparkles className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Instant Feedback & Leaderboard</h4>
                <p className="text-sm text-muted-foreground">
                  Learn from explanations and see how you rank against others
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/quiz" className="flex-1" onClick={handleTakeQuiz}>
              <Button className="w-full h-11 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Take the Quiz
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="flex-1 h-11 text-base"
              onClick={handleClose}
            >
              Maybe Later
            </Button>
          </div>

          {/* Small note */}
          <p className="text-xs text-center text-muted-foreground">
            Takes approximately 7-8 minutes to complete
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

