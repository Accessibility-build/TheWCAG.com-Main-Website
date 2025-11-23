import type { SuccessCriterion } from '../types'

// Guideline 2.5: Input Modalities
export const inputModalitiesCriteria: SuccessCriterion[] = [
{
    id: "2-5-1",
    number: "2.5.1",
    title: "Pointer Gestures",
    level: "A",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.",
    summary: "Don't require complex gestures (like pinch-to-zoom) without simple alternatives.",
    whyItMatters: "Users with motor disabilities may not be able to perform complex gestures.",
    whoBenefits: ["Users with motor disabilities", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion ensures that functionality requiring complex gestures (like pinch-to-zoom, swiping, or multi-touch) also provides simple single-pointer alternatives.",
      intent:
        "The intent is to ensure that users who cannot perform complex gestures (due to motor disabilities, device limitations, or assistive technologies) can still access all functionality through simple single-pointer interactions.",
    },
    examples: [
      {
        title: "Pinch-to-Zoom Only",
        description: "Image zooming only works with pinch gesture, no alternative.",
        type: "bad",
        code: '<img src="photo.jpg" onpinch="zoom(event)">',
      },
      {
        title: "Zoom with Buttons",
        description: "Image zooming works with pinch gesture AND zoom in/out buttons.",
        type: "good",
        code: '<img src="photo.jpg" onpinch="zoom(event)"><button onclick="zoomIn()">+</button><button onclick="zoomOut()">-</button>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Swipe-only carousel -->
<div class="carousel" ontouchstart="handleSwipe(event)">
  <!-- Only works with swipe gesture -->
</div>

<!-- ✅ Good: Swipe with button alternatives -->
<div class="carousel" ontouchstart="handleSwipe(event)">
  <!-- Works with swipe AND buttons -->
</div>
<button onclick="previousSlide()">Previous</button>
<button onclick="nextSlide()">Next</button>`,
      react: `// ✅ Good: Gesture with alternatives
function ImageViewer({ image }) {
  const [zoom, setZoom] = useState(1)
  
  const handlePinch = (e) => {
    // Handle pinch gesture
  }
  
  return (
    <div>
      <img 
        src={image} 
        onTouchStart={handlePinch}
        style={{ transform: 'scale(' + zoom + ')' }}
      />
      <button onClick={() => setZoom(prev => prev + 0.1)}>Zoom In</button>
      <button onClick={() => setZoom(prev => prev - 0.1)}>Zoom Out</button>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Identify all functionality that requires complex gestures.",
        "Verify that simple single-pointer alternatives exist.",
        "Test alternatives with mouse, keyboard, or single touch.",
        "Check that alternatives provide the same functionality.",
        "Verify that essential gestures (like drawing apps) are clearly marked.",
      ],
      automated: [
        "Tools can detect gesture handlers but cannot verify alternatives.",
        "Use accessibility testing tools to check for alternative controls.",
      ],
    },
    complianceRequirements: [
      "All functionality using multipoint or path-based gestures must have single-pointer alternatives.",
      "Alternatives must provide the same functionality as the gesture.",
      "Alternatives must be clearly visible and accessible.",
      "Essential gestures (like drawing in a drawing app) are exempt but should be documented.",
      "Single-pointer alternatives must work with mouse, keyboard, or single touch.",
    ],
    beyondCompliance: [
      "Provide multiple alternative methods when possible (buttons, keyboard shortcuts, menu options).",
      "Make alternatives prominent and easy to discover.",
      "Test with users who have motor disabilities.",
      "Consider making single-pointer methods the primary interaction method.",
      "Document gesture alternatives clearly in help or documentation.",
    ],
    myths: [
      {
        myth: "If I provide pinch-to-zoom, that's enough for accessibility.",
        reality: "Pinch-to-zoom requires two fingers, which some users cannot perform. You must also provide single-pointer alternatives like zoom buttons or a slider.",
      },
      {
        myth: "Touch devices require gestures, so alternatives aren't needed.",
        reality: "Many users cannot perform complex gestures. Always provide simple single-pointer alternatives, even on touch devices.",
      },
    ],
    commonFailures: [
      {
        failure: "Carousels or sliders that only work with swipe gestures.",
        solution: "Add previous/next buttons or arrow keys as alternatives. Ensure single-click/tap can navigate.",
      },
      {
        failure: "Image zoom that only works with pinch-to-zoom.",
        solution: "Add zoom in/out buttons or a zoom slider. Allow users to zoom with simple click/tap interactions.",
      },
      {
        failure: "Drag-and-drop interfaces without alternative controls.",
        solution: "Provide buttons, form inputs, or keyboard shortcuts that achieve the same result. See also 2.5.7 Dragging Movements.",
      },
    ],
  },
  {
    id: "2-5-2",
    number: "2.5.2",
    title: "Pointer Cancellation",
    level: "A",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "For functionality that can be operated using a single pointer, at least one of the following is true: No Down-Event, Abort or Undo, Up Reversal, Essential.",
    summary: "Actions should trigger on the 'up' event, not the 'down' event, to allow cancellation.",
    whyItMatters: "Prevents accidental clicks/taps.",
    whoBenefits: ["Users with motor disabilities", "Users with tremors"],
    details: {
      introduction:
        "This criterion ensures that actions don't trigger immediately on pointer down, allowing users to cancel by moving the pointer away before releasing.",
      intent:
        "The intent is to prevent accidental activations, especially for users with motor disabilities or tremors who may have difficulty with precise pointer control. Actions should trigger on pointer up, not down.",
    },
    examples: [
      {
        title: "Action on Mouse Down",
        description: "Button deletes item immediately when mouse is pressed down, no way to cancel.",
        type: "bad",
        code: '<button onmousedown="deleteItem()">Delete</button>',
      },
      {
        title: "Action on Mouse Up",
        description: "Button only deletes when mouse is released, allowing user to move away to cancel.",
        type: "good",
        code: '<button onmouseup="deleteItem()">Delete</button>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Triggers on mousedown -->
<button onmousedown="submitForm()">Submit</button>

<!-- ✅ Good: Triggers on mouseup -->
<button onmouseup="submitForm()">Submit</button>

<!-- ✅ Good: Using click event (triggers on up) -->
<button onclick="submitForm()">Submit</button>

<!-- ✅ Good: With undo option -->
<button onclick="deleteItem()">Delete</button>
<button onclick="undoDelete()">Undo</button>`,
      react: `// ❌ Bad: Triggers on mouseDown
function Button() {
  return (
    <button onMouseDown={() => handleClick()}>
      Click me
    </button>
  )
}

// ✅ Good: Triggers on mouseUp or click
function Button() {
  return (
    <button onClick={() => handleClick()}>
      Click me
    </button>
  )
}

// ✅ Good: With undo
function DeleteButton() {
  const [deleted, setDeleted] = useState(false)
  
  const handleDelete = () => {
    setDeleted(true)
    deleteItem()
  }
  
  const handleUndo = () => {
    setDeleted(false)
    restoreItem()
  }
  
  return (
    <>
      <button onClick={handleDelete}>Delete</button>
      {deleted && <button onClick={handleUndo}>Undo</button>}
    </>
  )
}`,
    },
    testing: {
      manual: [
        "Test all buttons and interactive elements.",
        "Press down on an element and move pointer away before releasing.",
        "Verify that actions don't trigger until pointer is released.",
        "Check that moving pointer away cancels the action.",
        "Test with touch devices to ensure tap cancellation works.",
        "Verify undo/abort options are available for destructive actions.",
      ],
      automated: [
        "Tools can detect event handlers but cannot verify cancellation behavior.",
        "Use browser DevTools to check event listeners.",
      ],
    },
    complianceRequirements: [
      "Actions must not trigger on pointer down event alone.",
      "Actions should trigger on pointer up event or click event.",
      "Users must be able to cancel actions by moving pointer away before releasing.",
      "For destructive actions, provide undo or abort options.",
      "Essential actions (like drawing) may trigger on down but should be clearly indicated.",
    ],
    beyondCompliance: [
      "Always use click events instead of mousedown/touchstart for actions.",
      "Provide undo options for all destructive actions.",
      "Add visual feedback when pointer is down to show action will occur.",
      "Test cancellation with users who have motor disabilities.",
      "Consider adding confirmation dialogs for critical actions.",
    ],
    myths: [
      {
        myth: "Click events automatically handle this correctly.",
        reality: "Click events do trigger on up, but if you use mousedown, touchstart, or pointerdown directly, you need to ensure actions trigger on up or provide cancellation.",
      },
      {
        myth: "This only applies to buttons.",
        reality: "This applies to all single-pointer interactions, including custom interactive elements, draggable items, and any clickable content.",
      },
    ],
    commonFailures: [
      {
        failure: "Using onmousedown or ontouchstart to trigger actions immediately.",
        solution: "Use onclick, onmouseup, or ontouchend instead. If you must use down events, trigger actions on up events or provide undo.",
      },
      {
        failure: "No way to cancel actions once pointer is down.",
        solution: "Ensure actions trigger on pointer up, allowing users to move pointer away to cancel. Or provide undo/abort options.",
      },
      {
        failure: "Destructive actions without undo or confirmation.",
        solution: "Add undo functionality or confirmation dialogs for destructive actions. Allow users to cancel before action completes.",
      },
    ],
  },
  {
    id: "2-5-3",
    number: "2.5.3",
    title: "Label in Name",
    level: "A",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "For user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
    summary: "The accessible name (for screen readers) must match the visible label.",
    whyItMatters:
      "Speech recognition users say the visible label to interact. If the code name is different, it won't work.",
    whoBenefits: ["Speech recognition users", "Screen reader users"],
    details: {
      introduction:
        "This criterion ensures that the accessible name (used by screen readers and speech recognition) contains the visible label text, allowing speech recognition users to activate elements by saying what they see.",
      intent:
        "The intent is to ensure that users of speech recognition software can interact with elements by speaking the visible label. If the accessible name doesn't match the visible label, speech recognition won't work.",
    },
    examples: [
      {
        title: "Mismatched Label and Name",
        description: "Button shows 'Submit Form' but accessible name is 'Send', so speech recognition fails.",
        type: "bad",
        code: '<button aria-label="Send">Submit Form</button>',
      },
      {
        title: "Matching Label and Name",
        description: "Button shows 'Submit Form' and accessible name is 'Submit Form', so speech recognition works.",
        type: "good",
        code: '<button>Submit Form</button>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Visible text doesn't match accessible name -->
<button aria-label="Close dialog">X</button>
<button aria-label="Search">🔍</button>

<!-- ✅ Good: Accessible name contains visible text -->
<button aria-label="Close dialog">Close dialog</button>
<button aria-label="Search website">Search website</button>

<!-- ✅ Good: Using visible text as accessible name -->
<button>Submit Form</button>
<label>
  <input type="checkbox">
  I agree to the terms
</label>`,
      react: `// ❌ Bad: Mismatched label
function IconButton() {
  return (
    <button aria-label="Delete item">
      🗑️
    </button>
  )
}

// ✅ Good: Label matches visible text
function IconButton() {
  return (
    <button aria-label="Delete item">
      🗑️ Delete item
    </button>
  )
}

// ✅ Good: Visible text is the accessible name
function Button() {
  return <button>Submit Form</button>
}`,
    },
    testing: {
      manual: [
        "Check all interactive elements with visible labels.",
        "Verify accessible names contain the visible label text.",
        "Test with speech recognition software by saying visible labels.",
        "Use screen reader to verify accessible names match visible text.",
        "Check icon-only buttons have accessible names that include visible context.",
        "Verify that accessible names start with visible text (can have additional text).",
      ],
      automated: [
        "Use axe DevTools to check for label in name violations.",
        "Use WAVE to identify mismatched labels and names.",
        "Use browser accessibility inspector to compare visible text and accessible names.",
      ],
    },
    complianceRequirements: [
      "The accessible name must contain the visible label text (it can start with it).",
      "For icon-only buttons, the accessible name should match what users would say to activate it.",
      "Accessible names can include additional text beyond the visible label.",
      "The visible label text must appear at the start of the accessible name.",
      "All interactive elements with visible text labels must comply.",
    ],
    beyondCompliance: [
      "Make accessible names exactly match visible labels when possible.",
      "Test with actual speech recognition software to verify functionality.",
      "Provide clear, descriptive labels that are easy to speak.",
      "Avoid using only icons without text labels.",
      "Ensure labels are consistent across the site.",
    ],
    myths: [
      {
        myth: "If I use aria-label, I don't need to worry about visible text.",
        reality: "aria-label should contain the visible text. Speech recognition users see and say the visible text, so the accessible name must match it.",
      },
      {
        myth: "The accessible name can be completely different from the visible label.",
        reality: "The accessible name must contain the visible label text. It can have additional text, but must start with or include the visible label.",
      },
    ],
    commonFailures: [
      {
        failure: "Icon buttons with aria-label that doesn't match visible context.",
        solution: "Ensure aria-label includes text that matches what users see. For example, if button shows 'X' to close, aria-label should be 'Close' or 'Close dialog', not just 'X'.",
      },
      {
        failure: "Buttons where visible text and accessible name are different.",
        solution: "Make accessible name contain the visible text. Use visible text as the primary label, or ensure aria-label starts with visible text.",
      },
      {
        failure: "Form labels that don't match accessible names.",
        solution: "Ensure <label> text matches the accessible name. If using aria-labelledby, ensure referenced text matches visible label.",
      },
    ],
  },
  {
    id: "2-5-4",
    number: "2.5.4",
    title: "Motion Actuation",
    level: "A",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation.",
    summary: "Don't require device motion (shaking, tilting) without an alternative.",
    whyItMatters: "Users with motor disabilities may not be able to move the device.",
    whoBenefits: ["Users with motor disabilities", "Device mounted users"],
    details: {
      introduction:
        "This criterion ensures that any functionality triggered by device motion (like shaking or tilting) also has alternative UI controls and can be disabled to prevent accidental activation.",
      intent:
        "The intent is to ensure that users who cannot move their device (due to motor disabilities, device mounting, or other reasons) can still access all functionality through standard UI controls.",
    },
    examples: [
      {
        title: "Shake-to-Undo Only",
        description: "Undo only works by shaking device, no button alternative.",
        type: "bad",
        code: 'window.addEventListener("devicemotion", (e) => { if (isShake(e)) undo(); });',
      },
      {
        title: "Shake with Button Alternative",
        description: "Undo works by shaking device AND has an Undo button.",
        type: "good",
        code: 'window.addEventListener("devicemotion", (e) => { if (isShake(e) && motionEnabled) undo(); });<button onclick="undo()">Undo</button><button onclick="toggleMotion()">Disable Shake</button>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Motion-only control -->
<script>
  window.addEventListener('devicemotion', (e) => {
    if (isShake(e)) {
      undo()
    }
  })
</script>

<!-- ✅ Good: Motion with button alternative -->
<button onclick="undo()">Undo</button>
<button onclick="toggleMotion()">Disable Motion Controls</button>
<script>
  let motionEnabled = true
  window.addEventListener('devicemotion', (e) => {
    if (isShake(e) && motionEnabled) {
      undo()
    }
  })
</script>`,
      react: `// ✅ Good: Motion with alternatives
function UndoButton() {
  const [motionEnabled, setMotionEnabled] = useState(true)
  
  useEffect(() => {
    if (!motionEnabled) return
    
    const handleMotion = (e) => {
      if (isShake(e)) {
        handleUndo()
      }
    }
    
    window.addEventListener('devicemotion', handleMotion)
    return () => window.removeEventListener('devicemotion', handleMotion)
  }, [motionEnabled])
  
  return (
    <>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={() => setMotionEnabled(!motionEnabled)}>
        {motionEnabled ? 'Disable' : 'Enable'} Motion Controls
      </button>
    </>
  )
}`,
    },
    testing: {
      manual: [
        "Identify all functionality triggered by device motion.",
        "Verify that UI button/control alternatives exist.",
        "Test that alternatives provide the same functionality.",
        "Check that motion controls can be disabled.",
        "Test with device mounted or in fixed position.",
        "Verify motion controls don't trigger accidentally.",
      ],
      automated: [
        "Tools can detect motion event listeners but cannot verify alternatives.",
        "Use browser DevTools to check for motion event handlers.",
      ],
    },
    complianceRequirements: [
      "All motion-activated functionality must have UI control alternatives.",
      "Motion controls must be disableable to prevent accidental activation.",
      "Alternatives must provide the same functionality as motion controls.",
      "Motion controls should be disabled by default or easily disabled.",
      "Essential motion (like games) may be exempt but should be clearly indicated.",
    ],
    beyondCompliance: [
      "Make UI controls the primary method, with motion as optional enhancement.",
      "Provide clear settings to enable/disable motion controls.",
      "Test with devices in fixed positions or mounted devices.",
      "Consider providing motion sensitivity settings.",
      "Document motion controls clearly for users.",
    ],
    myths: [
      {
        myth: "Motion controls are a nice enhancement, so alternatives aren't needed.",
        reality: "If functionality can be triggered by motion, it MUST also be available through UI controls. Motion cannot be the only way to access functionality.",
      },
      {
        myth: "Games and apps that require motion are exempt.",
        reality: "While some motion may be essential to the function, you should still provide alternatives when possible, or clearly indicate that motion is required.",
      },
    ],
    commonFailures: [
      {
        failure: "Shake-to-undo or tilt-to-scroll without button alternatives.",
        solution: "Add UI controls (buttons, menu options) that provide the same functionality. Ensure motion can be disabled.",
      },
      {
        failure: "Motion controls that cannot be disabled, causing accidental activations.",
        solution: "Provide settings to disable motion controls. Make disabling easy and discoverable.",
      },
      {
        failure: "Motion-activated features without clear alternatives.",
        solution: "Always provide UI controls alongside motion controls. Make alternatives prominent and easy to find.",
      },
    ],
  },
  {
    id: "2-5-5",
    number: "2.5.5",
    title: "Target Size",
    level: "AAA",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when: Equivalent, Inline, User Agent Control, Essential.",
    summary: "Touch targets should be at least 44x44 pixels.",
    whyItMatters: "Larger targets are easier to tap for everyone.",
    whoBenefits: ["Users with motor disabilities", "Mobile users", "Older users"],
    details: {
      introduction:
        "This criterion requires that touch targets are at least 44x44 CSS pixels, which is larger than the Level AA requirement of 24x24 pixels, making them easier to tap for users with motor disabilities.",
      intent:
        "The intent is to ensure that interactive elements are large enough to be easily activated by users with motor disabilities or those using touch devices.",
    },
    examples: [
      {
        title: "Small Touch Target",
        description: "A button is only 20x20 pixels, too small to tap easily.",
        type: "bad",
        code: `<button style="width: 20px; height: 20px;">X</button>`,
      },
      {
        title: "Large Touch Target",
        description: "A button is 44x44 pixels, meeting the AAA requirement.",
        type: "good",
        code: `<button style="width: 44px; height: 44px; padding: 8px;">X</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Small touch target -->
<button style="width: 20px; height: 20px;">X</button>

<!-- âœ… Good: Large touch target (44x44px) -->
<button style="width: 44px; height: 44px; padding: 8px;">X</button>

<!-- âœ… Good: Using padding to increase target size -->
<button style="padding: 12px; min-width: 44px; min-height: 44px;">
  Click me
</button>`,
      css: `/* âœ… Good: Large touch targets */
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}

.icon-button {
  width: 44px;
  height: 44px;
  padding: 8px;
}

/* âŒ Bad: Small touch targets */
.small-button {
  width: 20px;
  height: 20px;
}`,
      react: `// âœ… Good: Large touch target
function Button() {
  return (
    <button
      style={{
        minWidth: '44px',
        minHeight: '44px',
        padding: '12px'
      }}
    >
      Click me
    </button>
  )
}

// âœ… Good: Icon button with adequate size
function IconButton({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '44px',
        height: '44px',
        padding: '8px'
      }}
      aria-label="Close"
    >
      {icon}
    </button>
  )
}`,
    },
    testing: {
      manual: [
        "Measure all interactive elements (buttons, links, form controls).",
        "Verify that touch targets are at least 44x44 CSS pixels.",
        "Check that padding is included in target size calculations.",
        "Test on touch devices to ensure targets are easily tappable.",
        "Verify that exceptions (inline links, etc.) are appropriate.",
        "Test with users who have motor disabilities if possible.",
        "Check that small icons have adequate padding to reach 44x44px.",
      ],
      automated: [
        "Tools can measure element sizes but cannot verify touch target adequacy.",
        "Use browser DevTools to measure element dimensions.",
      ],
    },
    complianceRequirements: [
      "Touch targets must be at least 44x44 CSS pixels.",
      "Padding counts toward target size, so small icons with padding can meet the requirement.",
      "Inline links in text are exempt but should still be as large as possible.",
      "User agent controls (browser UI) are exempt.",
      "Essential targets (like close buttons in modals) should still meet size when possible.",
    ],
    beyondCompliance: [
      "Aim for even larger targets (48x48px or more) when possible.",
      "Provide adequate spacing between targets to prevent mis-taps.",
      "Test target sizes with actual users on various devices.",
      "Consider providing a setting to increase target sizes.",
      "Ensure targets are large enough even when zoomed in.",
    ],
    myths: [
      {
        myth: "44x44 pixels is too large and will break my design.",
        reality: "Padding counts toward the size, so you can have a small icon (24x24) with 10px padding on all sides to reach 44x44. This often doesn't change visual appearance much.",
      },
      {
        myth: "This only applies to mobile devices.",
        reality: "Large targets benefit all users, including desktop users with motor disabilities. It's good practice regardless of device.",
      },
    ],
    commonFailures: [
      {
        failure: "Small icon buttons (16x16 or 20x20 pixels) without adequate padding.",
        solution: "Add padding to reach 44x44px minimum. Use CSS padding or min-width/min-height. The icon can be small, but the clickable area must be large.",
      },
      {
        failure: "Links in text that are too small to tap easily.",
        solution: "While inline links are exempt, make them as large as possible. Consider making important links into buttons with adequate size.",
      },
      {
        failure: "Targets that are close together, causing mis-taps.",
        solution: "Ensure adequate spacing between targets (at least 8px). Consider increasing spacing on touch devices.",
      },
    ],
  },
  {
    id: "2-5-6",
    number: "2.5.6",
    title: "Concurrent Input Mechanisms",
    level: "AAA",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.",
    summary: "Allow users to switch between input methods (mouse, keyboard, touch) at any time.",
    whyItMatters: "Users may need to switch input methods depending on the task or fatigue.",
    whoBenefits: ["All users", "Users with motor disabilities"],
    details: {
      introduction:
        "This criterion requires that web content doesn't restrict users from switching between different input methods (mouse, keyboard, touch, etc.) unless the restriction is essential for security or functionality.",
      intent:
        "The intent is to allow users to use whatever input method works best for them at any given time, accommodating different needs and preferences.",
    },
    examples: [
      {
        title: "Restricted Input Method",
        description: "A form only accepts touch input and disables keyboard input.",
        type: "bad",
        code: `<form ontouchstart="enableForm()" onkeydown="disableForm()">
  <!-- Form only works with touch -->
</form>`,
      },
      {
        title: "Flexible Input Methods",
        description: "A form accepts input from any method (mouse, keyboard, touch).",
        type: "good",
        code: `<form>
  <!-- Form works with any input method -->
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Accepts all input methods -->
<form>
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>

<!-- âœ… Good: Drag and drop with keyboard alternative -->
<div>
  <div draggable="true">Item 1</div>
  <button onclick="moveUp()">Move Up</button>
  <button onclick="moveDown()">Move Down</button>
</div>

<!-- âŒ Bad: Restricts input method -->
<div onmouseover="enable()" onkeydown="disable()">
  Only works with mouse
</div>`,
      react: `// âœ… Good: Supports all input methods
function Form() {
  return (
    <form>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}

// âœ… Good: Drag with keyboard alternative
function SortableList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id} draggable>
          {item.name}
          <button onClick={() => moveUp(index)}>â†‘</button>
          <button onClick={() => moveDown(index)}>â†“</button>
        </div>
      ))}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Test all functionality with mouse.",
        "Test all functionality with keyboard.",
        "Test all functionality with touch (if available).",
        "Verify that users can switch between input methods.",
        "Check that no functionality is restricted to a single input method.",
        "Test switching input methods mid-task.",
        "Verify that restrictions are only for essential security or functionality.",
      ],
      automated: [
        "Tools cannot verify input method restrictions.",
        "Use browser DevTools to check for input method event handlers.",
      ],
    },
    complianceRequirements: [
      "Users must be able to switch between input methods (mouse, keyboard, touch) at any time.",
      "No functionality should be restricted to a single input method unless essential.",
      "Security restrictions (like password fields) are acceptable exceptions.",
      "User settings that restrict input are acceptable.",
      "Essential functionality restrictions must be clearly indicated.",
    ],
    beyondCompliance: [
      "Support all input methods for all functionality when possible.",
      "Provide clear feedback about which input methods are supported.",
      "Test with users who switch between input methods frequently.",
      "Consider providing input method preferences in settings.",
      "Document any necessary input method restrictions clearly.",
    ],
    myths: [
      {
        myth: "If my app is designed for touch, I don't need to support keyboard.",
        reality: "Users should be able to use whatever input method works for them. Even touch-first apps should support keyboard navigation.",
      },
      {
        myth: "Security features can restrict any input method.",
        reality: "Security restrictions are acceptable, but they should be minimal and clearly necessary. Don't use security as an excuse to restrict accessibility.",
      },
    ],
    commonFailures: [
      {
        failure: "Touch-only interfaces that don't support keyboard.",
        solution: "Add keyboard support for all functionality. Ensure all interactive elements are keyboard accessible.",
      },
      {
        failure: "Mouse-only interactions without keyboard alternatives.",
        solution: "Provide keyboard alternatives for all mouse interactions. Use standard keyboard navigation patterns.",
      },
      {
        failure: "Unnecessary restrictions on input methods.",
        solution: "Remove restrictions unless absolutely essential. Allow users to use their preferred input method.",
      },
    ],
  },
  {
    id: "2-5-7",
    number: "2.5.7",
    title: "Dragging Movements",
    level: "AA",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: true,
    description:
      "All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging.",
    summary: "Provide alternatives to drag-and-drop interactions like buttons or direct input.",
    whyItMatters: "Users with motor disabilities may struggle with precise dragging movements.",
    whoBenefits: ["Users with motor disabilities", "Mobile users", "Users with tremors"],
    details: {
      introduction:
        "This criterion requires that any functionality using drag-and-drop must also be available through alternative methods that don't require dragging, such as buttons, form inputs, or other single-click interactions.",
      intent:
        "The intent is to ensure that users who cannot perform dragging movements (due to motor disabilities, tremors, or device limitations) can still access all functionality through alternative means.",
    },
    examples: [
      {
        title: "Drag-Only Slider",
        description: "A slider that can only be adjusted by dragging, with no alternative input method.",
        type: "bad",
        code: `<div class="slider" onmousedown="startDrag(event)"></div>`,
      },
      {
        title: "Slider with Input",
        description: "A slider that can be adjusted by dragging OR by typing a value in an input field.",
        type: "good",
        code: `<div class="slider" onmousedown="startDrag(event)"></div>
<input type="number" min="0" max="100" value="50" onchange="updateSlider(this.value)">`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Drag-only interface -->
<div class="sortable-list">
  <div draggable="true">Item 1</div>
  <div draggable="true">Item 2</div>
</div>

<!-- âœ… Good: Drag with alternative buttons -->
<div class="sortable-list">
  <div draggable="true">
    Item 1
    <button onclick="moveUp(this)">â†‘</button>
    <button onclick="moveDown(this)">â†“</button>
  </div>
</div>

<!-- âœ… Good: Slider with input -->
<div class="slider-container">
  <input type="range" min="0" max="100" value="50" id="slider">
  <input type="number" min="0" max="100" value="50" id="value-input">
</div>`,
      react: `// âœ… Good: Drag with alternative controls
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
          <button onClick={() => moveUp(index)}>â†‘</button>
          <button onClick={() => moveDown(index)}>â†“</button>
        </div>
      ))}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Identify all drag-and-drop functionality.",
        "Verify alternative methods exist (buttons, inputs, etc.).",
        "Test that alternatives provide the same functionality.",
        "Check that alternatives are keyboard accessible.",
        "Test on touch devices to ensure alternatives work.",
        "Verify that alternatives are clearly visible and easy to find.",
        "Test with users who cannot perform dragging movements.",
      ],
      automated: [
        "Tools can detect draggable elements but cannot verify alternatives.",
        "Use accessibility testing tools to check for alternative controls.",
      ],
    },
    complianceRequirements: [
      "All drag-and-drop functionality must have single-pointer alternatives.",
      "Alternatives must provide the same functionality as dragging.",
      "Alternatives must be keyboard accessible.",
      "Alternatives must be clearly visible and easy to find.",
      "Dragging can still be available as an optional enhancement.",
    ],
    beyondCompliance: [
      "Make alternatives the primary interaction method, with drag as enhancement.",
      "Provide multiple alternative methods when possible (buttons, keyboard shortcuts, form inputs).",
      "Test alternatives with users who have motor disabilities.",
      "Provide clear instructions about alternative methods.",
      "Consider making drag-and-drop opt-in rather than default.",
    ],
    myths: [
      {
        myth: "If I provide drag-and-drop, that's enough - users can figure out alternatives.",
        reality: "You must explicitly provide alternatives. Users shouldn't have to figure out workarounds. Alternatives must be clearly available.",
      },
      {
        myth: "Keyboard navigation counts as an alternative to dragging.",
        reality: "Keyboard navigation is required separately (2.1.1). For drag-and-drop, you need specific alternatives like up/down buttons or form inputs that achieve the same result.",
      },
    ],
    commonFailures: [
      {
        failure: "Sortable lists that only work with drag-and-drop.",
        solution: "Add up/down buttons or arrow keys to reorder items. Provide a form interface where users can enter positions.",
      },
      {
        failure: "File upload that only works with drag-and-drop.",
        solution: "Always provide a file input button as the primary method. Drag-and-drop can be an enhancement.",
      },
      {
        failure: "Sliders that only work by dragging.",
        solution: "Add number input fields or increment/decrement buttons. Allow users to type values directly.",
      },
    ],
  },
  {
    id: "2-5-8",
    number: "2.5.8",
    title: "Target Size (Minimum)",
    level: "AA",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: true,
    description: "The size of the target for pointer inputs is at least 24 by 24 CSS pixels.",
    summary: "Touch targets must be at least 24x24 pixels to be easily tappable.",
    whyItMatters: "Small targets are difficult to tap for users with motor disabilities or on mobile devices.",
    whoBenefits: ["Users with motor disabilities", "Mobile users", "Older users"],
    details: {
      introduction:
        "This criterion requires that all interactive elements (buttons, links, form controls) have a minimum target size of 24x24 CSS pixels to ensure they are easily tappable, especially on touch devices.",
      intent:
        "The intent is to ensure that targets are large enough for users to easily activate them, particularly on touch devices. Small targets are difficult to tap accurately, especially for users with motor disabilities or tremors.",
    },
    examples: [
      {
        title: "Small Icon Button",
        description: "A 16x16 pixel icon button is too small to tap accurately.",
        type: "bad",
        code: `<button style="width: 16px; height: 16px;">
  <img src="icon.png" alt="Delete">
</button>`,
      },
      {
        title: "Adequate Size Button",
        description: "A button with at least 24x24 pixels is easily tappable.",
        type: "good",
        code: `<button style="min-width: 24px; min-height: 24px; padding: 8px;">
  <img src="icon.png" alt="Delete">
</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Too small -->
<button style="width: 16px; height: 16px;">Ã—</button>

<!-- âœ… Good: Minimum 24x24 pixels -->
<button style="min-width: 24px; min-height: 24px; padding: 8px;">Ã—</button>

<!-- âœ… Good: Link with adequate padding -->
<a href="#" style="display: inline-block; min-height: 24px; padding: 8px 12px;">
  Link text
</a>`,
      css: `/* âœ… Good: Minimum target size */
.button {
  min-width: 24px;
  min-height: 24px;
  padding: 8px 12px; /* Increases clickable area */
}

.icon-button {
  width: 24px;
  height: 24px;
  padding: 4px; /* Ensures minimum size */
}

/* Use padding to increase target size without visual change */
.link {
  display: inline-block;
  min-height: 24px;
  padding: 4px 0; /* Vertical padding increases target */
}

/* âŒ Bad: Too small */
.small-button {
  width: 16px;
  height: 16px;
}`,
      react: `// âœ… Good: Adequate target size
function IconButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="min-w-[24px] min-h-[24px] p-2"
    >
      {icon}
    </button>
  )
}

// âœ… Good: Link with padding
function Link({ href, children }) {
  return (
    <a 
      href={href}
      className="inline-block min-h-[24px] py-2 px-3"
    >
      {children}
    </a>
  )
}`,
    },
    testing: {
      manual: [
        "Measure all interactive elements (buttons, links, form controls).",
        "Verify minimum size is 24x24 CSS pixels.",
        "Test on touch devices to ensure easy tapping.",
        "Check that padding increases target size appropriately.",
        "Verify targets are not too close together (minimum 8px spacing).",
        "Test with users who have motor disabilities if possible.",
        "Check that targets remain adequate size when zoomed.",
      ],
      automated: [
        "Tools can measure element sizes but may not account for padding.",
        "Use browser DevTools to measure element dimensions.",
        "Use accessibility testing tools to identify small targets.",
      ],
    },
    complianceRequirements: [
      "Touch targets must be at least 24x24 CSS pixels.",
      "Padding counts toward target size.",
      "Targets should have adequate spacing (at least 8px) to prevent mis-taps.",
      "Inline links in text are exempt but should be as large as possible.",
      "User agent controls are exempt.",
    ],
    beyondCompliance: [
      "Aim for larger targets (32x32px or 44x44px) when possible.",
      "Provide adequate spacing between targets.",
      "Test target sizes with actual users on various devices.",
      "Consider providing settings to increase target sizes.",
      "Ensure targets are large enough even when content is zoomed.",
    ],
    myths: [
      {
        myth: "24x24 pixels is the maximum size I need.",
        reality: "24x24 is the minimum. Larger targets (44x44px) are better for accessibility and easier for all users to tap.",
      },
      {
        myth: "This only matters on mobile devices.",
        reality: "Large targets benefit all users, including desktop users with motor disabilities or those using touch screens.",
      },
    ],
    commonFailures: [
      {
        failure: "Small icon buttons without adequate padding to reach 24x24px.",
        solution: "Add padding to reach minimum size. Use CSS min-width and min-height. The icon can be small, but clickable area must be adequate.",
      },
      {
        failure: "Links or buttons that are too close together, causing mis-taps.",
        solution: "Ensure adequate spacing (at least 8px) between interactive elements. Increase spacing on touch devices.",
      },
      {
        failure: "Form controls that are too small to tap easily.",
        solution: "Ensure checkboxes, radio buttons, and other form controls have adequate target size. Use padding to increase clickable area.",
      },
    ],
  },
]