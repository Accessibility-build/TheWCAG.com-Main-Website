"use client"

import { CheckCircle2, XCircle, Radio } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LevelBadge } from "@/components/level-badge"

export default function CaptionsLivePage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="container py-8 max-w-6xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/principles/perceivable" className="hover:text-foreground transition-colors">
          Perceivable
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">1.2.4 Captions (Live)</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Perceivable → Time-based Media</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.2.4 Captions (Live)</h1>
        <p className="text-xl text-muted-foreground">
          Captions are provided for all live audio content in synchronized media.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Live events (webinars, news broadcasts, livestreams) are inaccessible to people who are deaf or hard of
          hearing if captions aren't provided in real-time.
        </p>
        <p className="text-lg leading-relaxed">
          Live captions ensure equal access to information as it happens, allowing everyone to participate fully.
        </p>
      </Card>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interactive Examples</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Bad Example */}
          <Card className="p-6 border-destructive/50">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-destructive" />
              <h3 className="font-semibold text-lg">❌ Incorrect</h3>
            </div>
            <div className="bg-muted aspect-video rounded-lg mb-4 flex items-center justify-center relative">
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded animate-pulse flex items-center gap-1">
                <Radio className="w-3 h-3" /> LIVE
              </div>
              <p className="text-center text-muted-foreground">
                Live Stream Player
                <br />
                (No Captions)
              </p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Live stream without real-time captions
            </p>
            <p className="text-sm mt-2">Deaf users are excluded from the live event.</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Correct</h3>
            </div>
            <div className="bg-muted aspect-video rounded-lg mb-4 flex items-center justify-center relative">
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded animate-pulse flex items-center gap-1">
                <Radio className="w-3 h-3" /> LIVE
              </div>
              <div className="w-full h-full flex flex-col justify-end p-4">
                <div className="bg-black/80 text-white p-2 rounded text-center">
                  And now, let's welcome our keynote speaker...
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Real-time CART or AI captions
            </p>
            <p className="text-sm mt-2">Captions appear with a slight delay as spoken.</p>
          </Card>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Implement</h2>

        <div className="space-y-6">
          {/* CART Services */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Option 1: CART Services (Best Quality)</h3>
            <p className="mb-4">Communication Access Real-time Translation (CART) uses human captioners.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Hire a professional CART provider.</li>
              <li>Connect them to your stream audio.</li>
              <li>Feed their text output back into your video player or a separate window.</li>
              <li>Highest accuracy (98%+).</li>
            </ul>
          </Card>

          {/* AI Captioning */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Option 2: Automated AI Captions</h3>
            <p className="mb-4">Use automatic speech recognition (ASR).</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Supported by platforms like YouTube Live, Zoom, Microsoft Teams.</li>
              <li>Lower accuracy, especially with accents or technical terms.</li>
              <li>Good as a fallback or for low-budget events.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Platform Support</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4">
            <h3 className="font-bold mb-2">YouTube Live</h3>
            <p className="text-sm text-muted-foreground">
              Supports automatic captions (English) and embedded 608/708 captions from encoders.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-bold mb-2">Zoom / Teams</h3>
            <p className="text-sm text-muted-foreground">
              Built-in live transcription features available for meetings and webinars.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-bold mb-2">Custom Player</h3>
            <p className="text-sm text-muted-foreground">
              Use WebSockets to push caption text chunks to the client in real-time.
            </p>
          </Card>
        </div>
      </section>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.2.2">
            <Button variant="outline">1.2.2 Captions (Prerecorded)</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
