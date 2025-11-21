"use client"

import { CheckCircle2, XCircle, Copy, Check, Move, Hand } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function DraggingMovementsPage() {
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
        <Link href="/principles/operable" className="hover:text-foreground transition-colors">
          Operable
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">2.5.7 Dragging Movements</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Operable → Input Modalities</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.5.7 Dragging Movements</h1>
        <p className="text-xl text-muted-foreground">
          All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users with motor disabilities may struggle with precise dragging movements. If drag-and-drop is the only way to interact with content, these users cannot access the functionality.
        </p>
        <p className="text-lg leading-relaxed">
          This criterion requires that any functionality using drag-and-drop must also be available through alternative methods that don't require dragging, such as buttons, form inputs, or other single-click interactions.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Hand className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Cannot perform dragging</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Move className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Mobile Users</h4>
              <p className="text-sm text-muted-foreground">Dragging is difficult on touch</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Hand className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Tremors</h4>
              <p className="text-sm text-muted-foreground">Need alternative controls</p>
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
              <h3 className="font-semibold text-lg">❌ Drag-Only Slider</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-dashed border-destructive/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-2 bg-gray-300 rounded mb-2">
                  <div className="w-4 h-4 bg-primary rounded-full -mt-1 ml-12"></div>
                </div>
                <p className="text-xs text-destructive mt-2">Only draggable, no input field</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> No alternative input method
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<div class="slider" onmousedown="startDrag(event)"></div>`}
            </code>
            <p className="text-sm mt-2">Users must drag to adjust</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Slider with Input</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-green-500/30 flex flex-col items-center justify-center gap-2">
              <div className="w-48 h-2 bg-gray-300 rounded">
                <div className="w-4 h-4 bg-primary rounded-full -mt-1 ml-12"></div>
              </div>
              <input type="number" min="0" max="100" value="50" className="w-20 px-2 py-1 border rounded text-center" />
              <p className="text-xs text-green-600 mt-2">Can drag OR type value</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Alternative input method provided
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<input type="number" onchange="updateSlider(this.value)">`}
            </code>
            <p className="text-sm mt-2">Users can type value directly</p>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML Implementation</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode(`<!-- ❌ Bad: Drag-only interface -->
<div class="sortable-list">
  <div draggable="true">Item 1</div>
  <div draggable="true">Item 2</div>
</div>

<!-- ✅ Good: Drag with alternative buttons -->
<div class="sortable-list">
  <div draggable="true">
    Item 1
    <button onclick="moveUp(this)">↑</button>
    <button onclick="moveDown(this)">↓</button>
  </div>
</div>

<!-- ✅ Good: Slider with input -->
<div class="slider-container">
  <input type="range" min="0" max="100" value="50" id="slider">
  <input type="number" min="0" max="100" value="50" id="value-input">
</div>`, "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ❌ Bad: Drag-only interface -->
<div class="sortable-list">
  <div draggable="true">Item 1</div>
  <div draggable="true">Item 2</div>
</div>

<!-- ✅ Good: Drag with alternative buttons -->
<div class="sortable-list">
  <div draggable="true">
    Item 1
    <button onclick="moveUp(this)">↑</button>
    <button onclick="moveDown(this)">↓</button>
  </div>
</div>

<!-- ✅ Good: Slider with input -->
<div class="slider-container">
  <input type="range" min="0" max="100" value="50" id="slider">
  <input type="number" min="0" max="100" value="50" id="value-input">
</div>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`/* Styles for drag-and-drop alternatives */
.sortable-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.move-buttons {
  display: flex;
  gap: 0.25rem;
}

.move-buttons button {
  min-width: 24px;
  min-height: 24px;
}`, "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* Styles for drag-and-drop alternatives */
.sortable-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.move-buttons {
  display: flex;
  gap: 0.25rem;
}

.move-buttons button {
  min-width: 24px;
  min-height: 24px;
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`// ✅ Good: Drag with alternative controls
function SortableList({ items }) {
  const [items, setItems] = useState(items)

  const moveUp = (index) => {
    if (index > 0) {
      const newItems = [...items]
      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]]
      setItems(newItems)
    }
  }

  const moveDown = (index) => {
    if (index < items.length - 1) {
      const newItems = [...items]
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]]
      setItems(newItems)
    }
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id} draggable>
          {item.name}
          <button onClick={() => moveUp(index)}>↑</button>
          <button onClick={() => moveDown(index)}>↓</button>
        </div>
      ))}
    </div>
  )
}`, "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Drag with alternative controls
function SortableList({ items }) {
  const [items, setItems] = useState(items)

  const moveUp = (index) => {
    if (index > 0) {
      const newItems = [...items]
      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]]
      setItems(newItems)
    }
  }

  const moveDown = (index) => {
    if (index < items.length - 1) {
      const newItems = [...items]
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]]
      setItems(newItems)
    }
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id} draggable>
          {item.name}
          <button onClick={() => moveUp(index)}>↑</button>
          <button onClick={() => moveDown(index)}>↓</button>
        </div>
      ))}
    </div>
  )
}`}
              </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Testing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Testing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Manual Testing</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Identify all drag-and-drop functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify alternative methods exist (buttons, inputs, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Test that alternatives provide the same functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that alternatives are keyboard accessible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Test on touch devices to ensure alternatives work</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <p className="text-muted-foreground mb-4">
              Tools can detect draggable elements but cannot verify alternatives. Manual testing is essential.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Check for draggable attributes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Verify presence of alternative controls</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

