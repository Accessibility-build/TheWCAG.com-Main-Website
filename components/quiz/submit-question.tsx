"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { 
  Plus, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb,
  X
} from "lucide-react"
import { logger } from "@/lib/logger"

interface SubmitQuestionProps {
  variant?: "button" | "card"
}

export function SubmitQuestion({ variant = "button" }: SubmitQuestionProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    submitterName: "",
    submitterEmail: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAnswer: "",
    explanation: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")

    try {
      // Validate required fields
      if (
        !formData.submitterEmail ||
        !formData.question ||
        !formData.option1 ||
        !formData.option2 ||
        !formData.option3 ||
        !formData.option4 ||
        !formData.correctAnswer ||
        !formData.explanation
      ) {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
        return
      }

      // Format the question data for email
      const questionDetails = `
NEW QUIZ QUESTION SUBMISSION
============================

Submitter Name: ${formData.submitterName || "Anonymous"}
Submitter Email: ${formData.submitterEmail}

QUESTION:
${formData.question}

OPTIONS:
A) ${formData.option1}
B) ${formData.option2}
C) ${formData.option3}
D) ${formData.option4}

CORRECT ANSWER: ${formData.correctAnswer}

EXPLANATION:
${formData.explanation}

---
Submitted via TheWCAG Quiz Question Submission Form
      `.trim()

      // Create FormData for Formspree
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.submitterName || "Quiz Contributor")
      formDataToSend.append("email", formData.submitterEmail)
      formDataToSend.append("_replyto", formData.submitterEmail)
      formDataToSend.append("subject", `[Quiz Question] New Question Submission`)
      formDataToSend.append("message", questionDetails)

      const response = await fetch("https://formspree.io/f/xpwndkoe", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("success")
        // Reset form after success
        setTimeout(() => {
          setFormData({
            submitterName: "",
            submitterEmail: "",
            question: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            correctAnswer: "",
            explanation: "",
          })
          setStatus("idle")
          setOpen(false)
        }, 3000)
      } else {
        logger.error("Question submission failed", undefined, {
          status: response.status,
        })
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch (error) {
      logger.error("Question submission error", error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Submitter Info */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="submitterName" className="text-sm font-medium">
            Your Name <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="submitterName"
            name="submitterName"
            type="text"
            value={formData.submitterName}
            onChange={handleChange}
            placeholder="John Doe"
            className="h-10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="submitterEmail" className="text-sm font-medium">
            Your Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="submitterEmail"
            name="submitterEmail"
            type="email"
            required
            value={formData.submitterEmail}
            onChange={handleChange}
            placeholder="john@example.com"
            className="h-10"
            aria-required="true"
          />
        </div>
      </div>

      {/* Question */}
      <div className="space-y-2">
        <Label htmlFor="question" className="text-sm font-medium">
          Question <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="question"
          name="question"
          required
          value={formData.question}
          onChange={handleChange}
          placeholder="e.g., What is the purpose of ARIA landmarks?"
          className="min-h-[80px] resize-y"
          aria-required="true"
        />
      </div>

      {/* Options */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">
          Answer Options <span className="text-destructive">*</span>
        </Label>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-muted-foreground w-6">A)</span>
            <Input
              name="option1"
              required
              value={formData.option1}
              onChange={handleChange}
              placeholder="First option"
              className="h-10"
              aria-label="Option A"
              aria-required="true"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-muted-foreground w-6">B)</span>
            <Input
              name="option2"
              required
              value={formData.option2}
              onChange={handleChange}
              placeholder="Second option"
              className="h-10"
              aria-label="Option B"
              aria-required="true"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-muted-foreground w-6">C)</span>
            <Input
              name="option3"
              required
              value={formData.option3}
              onChange={handleChange}
              placeholder="Third option"
              className="h-10"
              aria-label="Option C"
              aria-required="true"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-muted-foreground w-6">D)</span>
            <Input
              name="option4"
              required
              value={formData.option4}
              onChange={handleChange}
              placeholder="Fourth option"
              className="h-10"
              aria-label="Option D"
              aria-required="true"
            />
          </div>
        </div>
      </div>

      {/* Correct Answer */}
      <div className="space-y-2">
        <Label htmlFor="correctAnswer" className="text-sm font-medium">
          Correct Answer <span className="text-destructive">*</span>
        </Label>
        <Input
          id="correctAnswer"
          name="correctAnswer"
          required
          value={formData.correctAnswer}
          onChange={handleChange}
          placeholder="e.g., A, B, C, or D"
          className="h-10"
          aria-required="true"
        />
      </div>

      {/* Explanation */}
      <div className="space-y-2">
        <Label htmlFor="explanation" className="text-sm font-medium">
          Explanation <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="explanation"
          name="explanation"
          required
          value={formData.explanation}
          onChange={handleChange}
          placeholder="Explain why this is the correct answer..."
          className="min-h-[80px] resize-y"
          aria-required="true"
        />
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0" />
          <p className="text-sm text-green-800 dark:text-green-200 font-medium">
            Question submitted successfully! We'll review it soon.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg animate-in fade-in slide-in-from-top-2">
          <AlertCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-destructive font-medium">
              Something went wrong. Please try again.
            </p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full h-11"
        disabled={status === "sending" || status === "success"}
      >
        {status === "sending" ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Submitting...
          </>
        ) : status === "success" ? (
          <>
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Submitted!
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit Question
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Your question will be reviewed by our team before being added to the quiz.
      </p>
    </form>
  )

  if (variant === "card") {
    return (
      <Card className="border-2 bg-gradient-to-br from-primary/5 via-background to-violet-500/5 overflow-hidden shadow-lg">
        <CardContent className="p-8 md:p-10">
          <div className="grid md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-8">
            <div className="flex justify-center md:justify-start">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-violet-500/20">
                <Lightbulb className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Have a Question Idea?</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Contribute your own accessibility question and help others learn. 
                All submissions are reviewed before being added to the quiz.
              </p>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-md hover:shadow-lg transition-shadow w-full md:w-auto">
                  <Plus className="mr-2 h-5 w-5" />
                  Submit Question
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Submit a Quiz Question
                  </DialogTitle>
                  <DialogDescription>
                    Contribute to our accessibility quiz! Your question will be reviewed before being added.
                  </DialogDescription>
                </DialogHeader>
                {formContent}
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Submit Question
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Submit a Quiz Question
          </DialogTitle>
          <DialogDescription>
            Contribute to our accessibility quiz! Your question will be reviewed before being added.
          </DialogDescription>
        </DialogHeader>
        {formContent}
      </DialogContent>
    </Dialog>
  )
}

