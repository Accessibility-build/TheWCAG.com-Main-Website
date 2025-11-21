"use client"

import { CheckCircle2, XCircle, Copy, Check, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function AudioControlPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <CriteriaPageLayout>
      <div className="container py-8 md:py-12 max-w-6xl">
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
        <span className="text-foreground font-medium">1.4.2 Audio Control</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Perceivable → Distinguishable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.4.2 Audio Control</h1>
        <p className="text-xl text-muted-foreground">
          If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Auto-playing audio can interfere with screen reader speech output, making it impossible for blind users to access content. It can also be distracting or overwhelming for users with attention disorders, cognitive disabilities, or those in quiet environments.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Volume2 className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Auto-playing audio conflicts with screen reader speech</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <VolumeX className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Attention Disorders</h4>
              <p className="text-sm text-muted-foreground">Unexpected audio can be distracting or overwhelming</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Volume2 className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Quiet Environments</h4>
              <p className="text-sm text-muted-foreground">Users need control in libraries, offices, or public spaces</p>
            </div>
          </div>
        </div>
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
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Volume2 className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Background music playing</p>
                <p className="text-xs text-destructive mt-2">No controls available</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Audio plays automatically with no way to stop it
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<audio src="music.mp3" autoplay loop></audio>`}
            </code>
            <p className="text-sm mt-2">Screen reader users cannot access content while audio plays</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Correct</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Volume2 className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Audio Player</p>
                <div className="flex gap-2 mt-3 justify-center">
                  <button className="px-3 py-1 bg-green-600 text-white rounded text-xs">Pause</button>
                  <button className="px-3 py-1 bg-green-600 text-white rounded text-xs">Stop</button>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Audio has visible controls for pause/stop
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<audio src="music.mp3" controls></audio>`}
            </code>
            <p className="text-sm mt-2">Users can control audio playback</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎵 Background Music</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<audio autoplay loop>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<audio controls>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users must be able to stop background audio that plays automatically.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📢 Announcements</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Auto-playing announcement with no stop button
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Announcement with pause/stop control
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users need to control when they hear announcements.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎬 Video with Audio</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<video autoplay muted>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<video controls>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> If audio plays for more than 3 seconds, controls are required.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔔 Notification Sounds</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Continuous notification sound with no off switch
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Notification sound with mute/disable option
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should control notification audio.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML Implementation</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode("HTML code", "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ❌ Bad: Auto-playing without controls -->
<audio src="music.mp3" autoplay loop></audio>

<!-- ✅ Good: Audio with controls -->
<audio src="music.mp3" controls></audio>

<!-- ✅ Good: Auto-play with pause button -->
<audio id="bgAudio" src="music.mp3" autoplay loop></audio>
<button onclick="document.getElementById('bgAudio').pause()">
  Pause Background Music
</button>

<!-- ✅ Good: Video with controls -->
<video src="video.mp4" controls></video>

<!-- ✅ Good: Independent volume control -->
<audio id="audio" src="sound.mp3" autoplay></audio>
<input 
  type="range" 
  min="0" 
  max="1" 
  step="0.1"
  oninput="document.getElementById('audio').volume = this.value"
>
<label>Volume Control</label>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("CSS code", "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* Style audio controls for visibility */
audio {
  width: 100%;
  max-width: 400px;
}

/* Ensure controls are visible and accessible */
audio::-webkit-media-controls-panel {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Style custom control buttons */
.audio-control {
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.audio-control:hover {
  background: #0056b3;
}

.audio-control:focus {
  outline: 2px solid #0056b3;
  outline-offset: 2px;
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("React code", "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Controlled audio playback
import { useState, useRef } from 'react'

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const stop = () => {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setIsPlaying(false)
  }

  return (
    <div>
      <audio ref={audioRef} src="/music.mp3" />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'} Background Music
      </button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}

// ✅ Good: Audio with native controls
function AudioWithControls() {
  return (
    <audio src="/music.mp3" controls>
      Your browser does not support the audio element.
    </audio>
  )
}

// ✅ Good: Independent volume control
function VolumeControl() {
  const audioRef = useRef(null)
  const [volume, setVolume] = useState(1)

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    audioRef.current.volume = newVolume
  }

  return (
    <div>
      <audio ref={audioRef} src="/sound.mp3" autoPlay />
      <label>
        Volume: {Math.round(volume * 100)}%
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </label>
    </div>
  )
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="vue" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Vue Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Vue code", "vue")}>
                  {copiedCode === "vue" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<template>
  <!-- ✅ Good: Audio with controls -->
  <audio src="/music.mp3" controls></audio>

  <!-- ✅ Good: Controlled audio playback -->
  <div>
    <audio ref="audioRef" :src="audioSrc"></audio>
    <button @click="togglePlay">
      {{ isPlaying ? 'Pause' : 'Play' }} Music
    </button>
    <button @click="stop">Stop</button>
  </div>

  <!-- ✅ Good: Independent volume control -->
  <div>
    <audio ref="audioRef" :src="audioSrc" autoplay></audio>
    <label>
      Volume: {{ Math.round(volume * 100) }}%
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        v-model="volume"
        @input="updateVolume"
      />
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const audioRef = ref(null)
const isPlaying = ref(false)
const volume = ref(1)
const audioSrc = '/music.mp3'

const togglePlay = () => {
  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play()
  }
  isPlaying.value = !isPlaying.value
}

const stop = () => {
  audioRef.value.pause()
  audioRef.value.currentTime = 0
  isPlaying.value = false
}

const updateVolume = () => {
  audioRef.value.volume = volume.value
}
</script>`}
              </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Testing Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Test</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Manual Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Check Auto-play:</strong> Verify if any audio plays automatically on page load
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Duration Check:</strong> If audio plays for more than 3 seconds, verify controls exist
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Control Test:</strong> Test that pause/stop controls actually work
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Keyboard Access:</strong> Verify controls are keyboard accessible
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Test with screen reader to ensure audio doesn't interfere
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>axe DevTools:</strong> Can detect audio elements with autoplay
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies auto-playing media without controls
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Reports auto-playing audio issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Note:</strong> Tools can detect autoplay but cannot verify control functionality
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>

        <div className="space-y-4">
          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Auto-playing audio without controls</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<audio src="music.mp3" autoplay loop></audio>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Audio that plays for more than 3 seconds must have pause/stop controls.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Hidden or inaccessible controls</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Controls that are not keyboard accessible or visible
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Controls must be visible and accessible to all users, including keyboard users.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Assuming muted video is okay</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<video autoplay muted>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              If audio is enabled later or plays for more than 3 seconds, controls are required.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Audio playing for more than 3 seconds must have pause/stop controls</li>
          <li>✓ Use the native HTML5 controls attribute for simple cases</li>
          <li>✓ Ensure controls are keyboard accessible</li>
          <li>✓ Provide independent volume control when possible</li>
          <li>✓ Test with screen readers to ensure audio doesn't interfere</li>
          <li>✓ Consider user preferences for auto-playing media</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.2.2">
            <Button variant="outline">2.2.2 Pause, Stop, Hide</Button>
          </Link>
          <Link href="/criteria/1.2.1">
            <Button variant="outline">1.2.1 Audio-only and Video-only</Button>
          </Link>
          <Link href="/criteria/4.1.2">
            <Button variant="outline">4.1.2 Name, Role, Value</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

