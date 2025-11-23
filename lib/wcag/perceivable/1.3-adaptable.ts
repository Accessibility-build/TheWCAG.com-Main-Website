import type { SuccessCriterion } from '../types'

// Guideline 1.3: Adaptable
export const adaptableCriteria: SuccessCriterion[] = [
{
    id: "1-3-1",
    number: "1.3.1",
    title: "Info and Relationships",
    level: "A",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.",
    summary:
      "Use proper HTML elements (headings, lists, tables) so assistive technologies understand the page structure.",
    whyItMatters: "Screen readers rely on semantic HTML to navigate and understand content relationships.",
    whoBenefits: ["Blind users", "Users with cognitive disabilities", "Keyboard users"],
    details: {
      introduction:
        "This criterion ensures that information conveyed through visual presentation (like headings, lists, tables, form fields) is also available programmatically so assistive technologies can understand and communicate the structure.",
      intent:
        "The intent is to ensure that information, structure, and relationships that are visually apparent are also programmatically determinable, allowing assistive technologies to present this information to users in different modalities.",
    },
    examples: [
      {
        title: "Visual Headings Without Semantic HTML",
        description: "Text is styled to look like headings but uses <div> or <span> instead of <h1>-<h6>.",
        type: "bad",
        code: '<div style="font-size: 24px; font-weight: bold;">Main Title</div>',
      },
      {
        title: "Proper Semantic Headings",
        description: "Headings use proper <h1>-<h6> elements so screen readers can navigate by heading structure.",
        type: "good",
        code: '<h1>Main Title</h1><h2>Section Title</h2>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Visual structure without semantics -->
<div style="font-weight: bold; font-size: 24px;">Title</div>
<div style="margin-left: 20px;">• Item 1</div>
<div style="margin-left: 20px;">• Item 2</div>

<!-- ✅ Good: Semantic HTML -->
<h1>Title</h1>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- ✅ Good: Proper table structure -->
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>`,
      react: `// ✅ Good: Semantic components
function Article() {
  return (
    <article>
      <h1>Article Title</h1>
      <h2>Section Heading</h2>
      <p>Content here...</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    </article>
  )
}`,
    },
    testing: {
      manual: [
        "Use a screen reader to navigate by headings and verify structure is announced correctly.",
        "Check that lists use proper <ul>, <ol>, and <li> elements.",
        "Verify tables have proper <thead>, <tbody>, and <th> elements.",
        "Test form fields are properly associated with labels using <label> or aria-labelledby.",
        "Check that visual groupings (like form fieldsets) use semantic HTML.",
        "Verify relationships between elements are programmatically determinable.",
        "Test with browser DevTools accessibility tree to verify structure.",
      ],
      automated: [
        "Use axe DevTools to check for missing semantic HTML elements.",
        "Use WAVE to identify structure and relationship issues.",
        "Use HTML validators to check for proper semantic markup.",
      ],
    },
    complianceRequirements: [
      "Headings must use proper <h1>-<h6> elements, not just styled text.",
      "Lists must use <ul>, <ol>, and <li> elements, not just visually styled content.",
      "Tables must have proper structure with <thead>, <tbody>, <th> for headers.",
      "Form fields must be associated with labels using <label> or aria-labelledby.",
      "Related form fields must be grouped using <fieldset> and <legend>.",
      "Information conveyed through visual presentation must be programmatically determinable.",
    ],
    beyondCompliance: [
      "Use semantic HTML5 elements (<article>, <section>, <nav>, <aside>) for better structure.",
      "Provide ARIA landmarks to identify page regions.",
      "Use proper heading hierarchy (h1 → h2 → h3) without skipping levels.",
      "Ensure all visual relationships have programmatic equivalents.",
      "Test structure with multiple assistive technologies to ensure compatibility.",
      "Use ARIA attributes to enhance relationships when semantic HTML isn't sufficient.",
      "Document component structure and relationships for consistency.",
    ],
    myths: [
      {
        myth: "If it looks like a heading, it's fine to use a div with styling.",
        reality: "Screen readers rely on semantic HTML. A styled div doesn't provide heading structure, making navigation by headings impossible.",
      },
      {
        myth: "Screen readers can see visual structure, so semantic HTML isn't needed.",
        reality: "Screen readers are blind to visual presentation. They rely entirely on programmatic structure (HTML semantics and ARIA) to understand relationships.",
      },
      {
        myth: "I can use CSS to make anything look like a list, so I don't need <ul> or <ol>.",
        reality: "Visual styling doesn't convey list structure to screen readers. Use proper list elements so assistive technologies can announce list items correctly.",
      },
    ],
    commonFailures: [
      {
        failure: "Using styled divs or spans instead of heading elements (<h1>-<h6>).",
        solution: "Use proper heading elements. Style them with CSS, but use semantic HTML for structure. Example: <h1>Title</h1> not <div class='heading'>Title</div>.",
      },
      {
        failure: "Creating lists with divs and CSS instead of <ul>/<ol> elements.",
        solution: "Use proper list elements. Screen readers announce list structure. Example: <ul><li>Item</li></ul> not <div>• Item</div>.",
      },
      {
        failure: "Tables without proper <thead> and <th> elements for headers.",
        solution: "Use <thead> for header rows and <th> for header cells. Associate data cells with headers using scope or headers attributes.",
      },
      {
        failure: "Form fields without proper label associations.",
        solution: "Use <label> with for attribute matching input id, or use aria-labelledby. Never rely on placeholder text as the only label.",
      },
      {
        failure: "Visual groupings without semantic structure (like form fieldsets).",
        solution: "Use <fieldset> and <legend> to group related form fields. This helps screen readers understand relationships.",
      },
    ],
  },
  {
    id: "1-3-2",
    number: "1.3.2",
    title: "Meaningful Sequence",
    level: "A",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.",
    summary: "Ensure the DOM order matches the visual order so content makes sense when read linearly.",
    whyItMatters: "Screen readers and keyboard navigation follow DOM order, not visual layout.",
    whoBenefits: ["Blind users", "Keyboard users", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion ensures that when content order matters (like instructions or a sequence of steps), the programmatic order matches the visual order.",
      intent:
        "The intent is to ensure that any meaning that depends on the order of content is preserved when the content is presented in a different modality or style. Screen readers read content in DOM order, not visual order.",
    },
    examples: [
      {
        title: "Instructions with Wrong DOM Order",
        description: "Visual layout shows steps 1-2-3, but DOM order is 3-1-2, confusing screen reader users.",
        type: "bad",
        code: `<div style="display: flex; flex-direction: row-reverse;">
  <div>Step 3</div>
  <div>Step 1</div>
  <div>Step 2</div>
</div>`,
      },
      {
        title: "Correct DOM Order",
        description: "DOM order matches visual order, so screen readers read steps in the correct sequence.",
        type: "good",
        code: `<div>
  <div>Step 1: First, gather ingredients</div>
  <div>Step 2: Then, mix them together</div>
  <div>Step 3: Finally, bake for 30 minutes</div>
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Logical DOM order -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<!-- âŒ Bad: Using CSS to reorder -->
<div style="display: flex; flex-direction: row-reverse;">
  <div>Step 3</div>
  <div>Step 1</div>
  <div>Step 2</div>
</div>`,
      css: `/* âœ… Good: Visual styling without changing order */
.steps {
  display: flex;
  gap: 1rem;
}

/* âŒ Bad: Reordering with CSS */
.steps {
  display: flex;
  flex-direction: row-reverse; /* Changes visual order */
}`,
      react: `// âœ… Good: Logical order in JSX
function Steps() {
  return (
    <ol>
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>
  )
}

// âŒ Bad: Reordered array
function Steps() {
  const steps = ["Step 3", "Step 1", "Step 2"]
  return (
    <div>
      {steps.map(step => <div key={step}>{step}</div>)}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Use Tab key to navigate through content and verify order makes sense.",
        "Use screen reader (NVDA/JAWS) to read page and verify sequence is logical.",
        "Check if CSS transforms or flexbox reordering changes visual vs DOM order.",
        "Verify instructions or sequential content reads in correct order.",
        "Test with keyboard navigation to ensure focus order matches visual order.",
        "Check that content meaning doesn't depend on visual layout alone.",
        "Verify that sequential content (steps, instructions) reads in correct order.",
      ],
      automated: [
        "Tools can check DOM order but cannot verify if it matches intended meaning.",
        "Use browser DevTools to inspect DOM order vs visual order.",
        "Use accessibility testing tools to check for CSS reordering issues.",
      ],
    },
    complianceRequirements: [
      "When content sequence affects meaning, the programmatic order must match the visual order.",
      "DOM order must be logical and meaningful, not just visually arranged.",
      "CSS should not be used to reorder content in ways that change meaning.",
      "Sequential content (instructions, steps) must read in correct order with screen readers.",
      "Focus order must follow a logical sequence that matches visual layout.",
      "Content meaning must not depend solely on visual presentation.",
    ],
    beyondCompliance: [
      "Ensure DOM order always matches visual order for better predictability.",
      "Use semantic HTML to reinforce content relationships.",
      "Test content order with multiple assistive technologies.",
      "Provide clear visual and programmatic structure for sequential content.",
      "Consider providing alternative formats for complex sequential content.",
      "Document content order requirements for developers.",
    ],
    myths: [
      {
        myth: "I can use CSS flexbox order to rearrange content visually - it doesn't matter.",
        reality: "CSS reordering changes visual order but not DOM order. Screen readers follow DOM order, so content may be read out of sequence, confusing users.",
      },
      {
        myth: "As long as it looks right, the order doesn't matter.",
        reality: "Screen reader users navigate by DOM order, not visual order. If DOM order doesn't match visual order, content may be confusing or nonsensical.",
      },
    ],
    commonFailures: [
      {
        failure: "Using CSS flexbox order or grid to visually reorder content that has sequential meaning.",
        solution: "Ensure DOM order matches visual order. If reordering is necessary, restructure the HTML to match the desired visual order.",
      },
      {
        failure: "Instructions or steps that read out of order with screen readers.",
        solution: "Structure HTML so sequential content appears in correct order in the DOM. Test with screen readers to verify order.",
      },
      {
        failure: "Focus order that doesn't match visual layout.",
        solution: "Ensure tab order follows visual layout. Use tabindex sparingly and only when necessary, keeping it logical.",
      },
    ],
  },
  {
    id: "1-3-3",
    number: "1.3.3",
    title: "Sensory Characteristics",
    level: "A",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, visual location, orientation, or sound.",
    summary: "Don't rely on shape, size, or location alone for instructions (e.g., 'click the round button').",
    whyItMatters: "Blind users cannot see shapes or locations. Deaf users cannot hear sound cues.",
    whoBenefits: ["Blind users", "Deaf users", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion ensures that instructions don't require users to perceive sensory characteristics that some users cannot access.",
      intent:
        "The intent is to ensure that all users can access instructions. Instructions should use labels, names, or text descriptions rather than relying on visual or auditory characteristics alone.",
    },
    examples: [
      {
        title: "Relying on Shape",
        description: "Instruction says 'click the round button' - blind users can't see shapes.",
        type: "bad",
        code: `<!-- Instruction: "Click the round button" -->
<button>Submit</button>`,
      },
      {
        title: "Using Label",
        description: "Instruction says 'click the Submit button' - accessible to all users.",
        type: "good",
        code: `<!-- Instruction: "Click the Submit button" -->
<button>Submit</button>`,
      },
      {
        title: "Relying on Location",
        description: "Instruction says 'use the button on the right' - screen reader users can't see layout.",
        type: "bad",
      },
      {
        title: "Using Name",
        description: "Instruction says 'use the Search button' - accessible by name.",
        type: "good",
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Instruction relies on visual location -->
<p>Click the button on the right</p>
<button>Submit</button>

<!-- âœ… Good: Instruction uses button name -->
<p>Click the Submit button</p>
<button>Submit</button>

<!-- âŒ Bad: Instruction relies on color -->
<p>Click the red button</p>
<button style="background: red;">Delete</button>

<!-- âœ… Good: Instruction uses label -->
<p>Click the Delete button</p>
<button style="background: red;">Delete</button>`,
      react: `// âŒ Bad: Instruction relies on shape
function Form() {
  return (
    <>
      <p>Click the round button</p>
      <button className="round">Submit</button>
    </>
  )
}

// âœ… Good: Instruction uses accessible name
function Form() {
  return (
    <>
      <p>Click the Submit button</p>
      <button className="round" aria-label="Submit form">Submit</button>
    </>
  )
}`,
    },
    testing: {
      manual: [
        "Read all instructions on the page.",
        "Check if any instructions rely on shape, color, size, or location.",
        "Verify instructions can be followed without seeing or hearing the interface.",
        "Test with screen reader to ensure instructions make sense.",
        "Check for phrases like 'click the round button', 'use the button on the right', 'the red button'.",
        "Verify all instructions use names, labels, or text descriptions instead of sensory characteristics.",
        "Test instructions with users who cannot see or hear the interface.",
      ],
      automated: [
        "Cannot be fully automated - requires manual review of instruction text.",
        "Use text analysis tools to search for common sensory characteristic phrases.",
      ],
    },
    complianceRequirements: [
      "Instructions must not rely solely on sensory characteristics (shape, color, size, location, orientation, sound).",
      "Instructions must use names, labels, or text descriptions that are programmatically determinable.",
      "If sensory characteristics are mentioned, they must be in addition to names or labels, not the only identifier.",
      "Instructions must be understandable without seeing or hearing the interface.",
      "All interactive elements referenced in instructions must have accessible names.",
    ],
    beyondCompliance: [
      "Always use element names or labels in instructions, even when visual characteristics are obvious.",
      "Provide multiple ways to identify elements (name + visual description).",
      "Test instructions with actual users who cannot see or hear the interface.",
      "Use clear, descriptive names for all interactive elements.",
      "Consider providing alternative instruction formats for different user needs.",
    ],
    myths: [
      {
        myth: "It's okay to say 'click the red button' if the button is obviously red.",
        reality: "Blind users can't see color. Instructions must use names or labels that are programmatically determinable, like 'click the Submit button'.",
      },
      {
        myth: "I can mention location if I also provide the name.",
        reality: "While providing both is better than just location, it's best practice to use names primarily. Location can be mentioned as additional context, but shouldn't be the primary identifier.",
      },
    ],
    commonFailures: [
      {
        failure: "Instructions like 'click the round button' or 'use the button on the right'.",
        solution: "Use element names or labels. Instead of 'click the round button', use 'click the Submit button' or 'click the button labeled Submit'.",
      },
      {
        failure: "Instructions referencing 'the red button' or 'the green icon'.",
        solution: "Use accessible names. Instead of 'click the red button', use 'click the Delete button' or 'click the button labeled Delete'.",
      },
      {
        failure: "Instructions saying 'use the button at the top' or 'the link on the left'.",
        solution: "Use names or labels. Instead of location-based instructions, use 'use the Navigation button' or 'click the Home link'.",
      },
    ],
  },
  {
    id: "1-3-4",
    number: "1.3.4",
    title: "Orientation",
    level: "AA",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.",
    summary: "Content must work in both portrait and landscape orientations.",
    whyItMatters: "Some users have their devices mounted in a fixed orientation (e.g., on a wheelchair).",
    whoBenefits: ["Users with motor disabilities", "Mobile users"],
    details: {
      introduction:
        "This criterion ensures that content can be viewed and used in both portrait and landscape orientations, accommodating users who cannot rotate their devices.",
      intent:
        "The intent is to ensure that content is accessible regardless of device orientation. Some users have devices mounted in fixed positions (like on wheelchairs) and cannot rotate them.",
    },
    examples: [
      {
        title: "Portrait-Only Content",
        description: "Content is locked to portrait mode and doesn't work in landscape.",
        type: "bad",
        code: '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, orientation=portrait">',
      },
      {
        title: "Orientation-Flexible Content",
        description: "Content adapts to both portrait and landscape orientations.",
        type: "good",
        code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Locking orientation -->
<meta name="viewport" 
      content="width=device-width, 
               initial-scale=1.0, 
               orientation=portrait">

<!-- ✅ Good: Flexible orientation -->
<meta name="viewport" 
      content="width=device-width, 
               initial-scale=1.0">`,
      css: `/* ✅ Good: Responsive design for both orientations */
.container {
  display: flex;
  flex-direction: column;
}

@media (orientation: landscape) {
  .container {
    flex-direction: row;
  }
}

/* ✅ Good: Flexible layouts */
.content {
  max-width: 100%;
  padding: 1rem;
}

@media (orientation: landscape) {
  .content {
    max-width: 50%;
  }
}`,
      react: `// ✅ Good: Orientation-aware component
function ResponsiveLayout() {
  const [orientation, setOrientation] = useState('portrait')
  
  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(
        window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
      )
    }
    
    window.addEventListener('resize', updateOrientation)
    updateOrientation()
    
    return () => window.removeEventListener('resize', updateOrientation)
  }, [])
  
  return (
    <div className={orientation === 'landscape' ? 'landscape-layout' : 'portrait-layout'}>
      {/* Content adapts to orientation */}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Rotate device or browser window between portrait and landscape.",
        "Verify all content is accessible and functional in both orientations.",
        "Check that navigation, forms, and interactive elements work in both orientations.",
        "Test that text is readable and buttons are accessible in both orientations.",
        "Verify that essential functionality is not lost when orientation changes.",
        "Test with devices mounted in fixed orientations if possible.",
      ],
      automated: [
        "Use browser DevTools to simulate different orientations.",
        "Test responsive design breakpoints for both orientations.",
        "Use automated testing tools to check layout in different orientations.",
      ],
    },
    complianceRequirements: [
      "Content must be viewable and operable in both portrait and landscape orientations.",
      "No functionality should be lost when device orientation changes.",
      "Content should not be locked to a single orientation unless orientation is essential (e.g., piano app, document scanner).",
      "Text must be readable and interactive elements accessible in both orientations.",
      "Navigation and forms must work in both orientations.",
    ],
    beyondCompliance: [
      "Optimize layouts for both orientations to provide best experience.",
      "Test with actual devices in both orientations.",
      "Consider providing orientation-specific optimizations when helpful.",
      "Ensure touch targets remain adequate size in both orientations.",
      "Test with assistive technologies in both orientations.",
      "Provide clear feedback when orientation changes.",
    ],
    myths: [
      {
        myth: "If my app is designed for mobile, portrait-only is fine.",
        reality: "Many users have devices mounted in fixed orientations (like on wheelchairs). Content must work in both orientations unless orientation is truly essential to the function.",
      },
      {
        myth: "I can just tell users to rotate their device.",
        reality: "Some users physically cannot rotate their devices. Content must be accessible regardless of orientation.",
      },
    ],
    commonFailures: [
      {
        failure: "Locking content to portrait or landscape orientation.",
        solution: "Remove orientation locks. Allow content to adapt to both orientations. Only lock orientation if it's essential to the function (like a piano keyboard app).",
      },
      {
        failure: "Content that becomes unusable or loses functionality in one orientation.",
        solution: "Design responsive layouts that work in both orientations. Test thoroughly in both portrait and landscape modes.",
      },
      {
        failure: "Text or buttons that become too small or inaccessible in one orientation.",
        solution: "Ensure text remains readable and interactive elements remain accessible in both orientations. Use responsive design techniques.",
      },
    ],
  },
  {
    id: "1-3-5",
    number: "1.3.5",
    title: "Identify Input Purpose",
    level: "AA",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "The purpose of each input field collecting information about the user can be programmatically determined when the field serves a purpose identified in the Input Purposes for User Interface Components section.",
    summary: "Use HTML autocomplete attributes on form fields collecting user data.",
    whyItMatters:
      "Allows browsers and assistive tools to auto-fill forms, helping users with memory or motor impairments.",
    whoBenefits: ["Users with cognitive disabilities", "Users with motor disabilities"],
    details: {
      introduction:
        "This criterion requires using HTML autocomplete attributes to identify the purpose of form fields that collect user information, enabling browsers and assistive technologies to auto-fill forms.",
      intent:
        "The intent is to help users with cognitive or motor disabilities by allowing browsers and assistive tools to automatically fill in form fields, reducing the need for manual input and memory recall.",
    },
    examples: [
      {
        title: "Form Without Autocomplete",
        description: "Form fields have no autocomplete attributes, requiring manual entry every time.",
        type: "bad",
        code: '<input type="text" name="name"><input type="email" name="email">',
      },
      {
        title: "Form With Autocomplete",
        description: "Form fields use autocomplete attributes, enabling browser auto-fill.",
        type: "good",
        code: '<input type="text" name="name" autocomplete="name"><input type="email" name="email" autocomplete="email">',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: No autocomplete -->
<input type="text" name="fullname">
<input type="email" name="email">
<input type="tel" name="phone">

<!-- ✅ Good: With autocomplete -->
<input type="text" name="fullname" autocomplete="name">
<input type="email" name="email" autocomplete="email">
<input type="tel" name="phone" autocomplete="tel">

<!-- ✅ Good: Common autocomplete values -->
<input type="text" autocomplete="given-name">
<input type="text" autocomplete="family-name">
<input type="text" autocomplete="address-line1">
<input type="text" autocomplete="address-line2">
<input type="text" autocomplete="postal-code">
<input type="text" autocomplete="country">
<input type="text" autocomplete="organization">`,
      react: `// ✅ Good: Form with autocomplete
function ContactForm() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input 
        id="name"
        type="text" 
        name="name" 
        autocomplete="name"
      />
      
      <label htmlFor="email">Email</label>
      <input 
        id="email"
        type="email" 
        name="email" 
        autocomplete="email"
      />
      
      <label htmlFor="phone">Phone</label>
      <input 
        id="phone"
        type="tel" 
        name="phone" 
        autocomplete="tel"
      />
      
      <button type="submit">Submit</button>
    </form>
  )
}`,
    },
    testing: {
      manual: [
        "Check all form fields that collect user information.",
        "Verify autocomplete attributes are present and use correct values.",
        "Test browser auto-fill functionality with the form.",
        "Verify that assistive technologies can identify input purposes.",
        "Check that autocomplete values match the actual field purpose.",
        "Test with password managers and browser auto-fill features.",
      ],
      automated: [
        "Use axe DevTools to check for missing autocomplete attributes.",
        "Use WAVE to identify form fields that should have autocomplete.",
        "Use HTML validators to verify autocomplete attribute values.",
      ],
    },
    complianceRequirements: [
      "Form fields collecting user information must have autocomplete attributes when the purpose matches a standard input purpose.",
      "Autocomplete values must use standard HTML autocomplete values (name, email, tel, address-line1, etc.).",
      "The autocomplete value must accurately reflect the field's purpose.",
      "Fields that don't collect standard user information don't need autocomplete.",
      "Password fields should use autocomplete='current-password' or 'new-password'.",
    ],
    beyondCompliance: [
      "Use specific autocomplete values when available (given-name, family-name instead of just name).",
      "Provide autocomplete for all user information fields, not just required ones.",
      "Test autocomplete with multiple browsers and password managers.",
      "Consider providing hints or examples for complex fields.",
      "Ensure autocomplete works with assistive technologies.",
    ],
    myths: [
      {
        myth: "Autocomplete is just for convenience, not accessibility.",
        reality: "Autocomplete is crucial for users with cognitive or motor disabilities who may have difficulty typing or remembering information. It's a Level AA requirement.",
      },
      {
        myth: "I can use any autocomplete value I want.",
        reality: "Autocomplete values must use standard HTML values. Browsers and assistive technologies recognize these standard values to provide auto-fill functionality.",
      },
    ],
    commonFailures: [
      {
        failure: "Form fields without autocomplete attributes.",
        solution: "Add appropriate autocomplete attributes to all fields collecting user information. Use standard values like 'name', 'email', 'tel', 'address-line1', etc.",
      },
      {
        failure: "Using incorrect or non-standard autocomplete values.",
        solution: "Use standard HTML autocomplete values. Refer to the HTML specification for the complete list of valid values.",
      },
      {
        failure: "Not using autocomplete on password fields.",
        solution: "Use autocomplete='current-password' for login forms and 'new-password' for registration/change password forms.",
      },
    ],
  },
  {
    id: "1-3-6",
    number: "1.3.6",
    title: "Identify Purpose",
    level: "AAA",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined.",
    summary: "Use ARIA landmarks and personalization semantics to identify regions and components.",
    whyItMatters: "Enables users to personalize the interface (e.g., swap icons for text) based on their needs.",
    whoBenefits: ["Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion requires using semantic markup and ARIA attributes to identify the purpose of UI components, icons, and regions, enabling personalization tools to adapt the interface to user needs.",
      intent:
        "The intent is to support personalization by making component purposes programmatically determinable, allowing tools to replace icons with text, change colors, or modify layouts based on user preferences.",
    },
    examples: [
      {
        title: "Icon Without Semantic Purpose",
        description: "An icon button has no semantic indication of its purpose.",
        type: "bad",
        code: `<button><img src="search-icon.png" alt=""></button>`,
      },
      {
        title: "Icon With Semantic Purpose",
        description: "An icon button uses ARIA attributes to identify its purpose.",
        type: "good",
        code: `<button aria-label="Search" data-purpose="search">
  <img src="search-icon.png" alt="">
</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Components with identified purpose -->
<nav aria-label="Main navigation" data-purpose="navigation">
  <ul>
    <li>
      <a href="/search" data-purpose="search" aria-label="Search">
        <svg aria-hidden="true"><!-- Search icon --></svg>
      </a>
    </li>
  </ul>
</nav>

<button data-purpose="submit" aria-label="Submit form">
  Submit
</button>

<!-- Use data-purpose or ARIA attributes to identify component purpose -->`,
      react: `// âœ… Good: Components with semantic purpose
function SearchButton() {
  return (
    <button
      aria-label="Search"
      data-purpose="search"
      onClick={handleSearch}
    >
      <SearchIcon aria-hidden="true" />
    </button>
  )
}

function Navigation() {
  return (
    <nav aria-label="Main navigation" data-purpose="navigation">
      {/* Navigation items */}
    </nav>
  )
}`,
    },
    testing: {
      manual: [
        "Check that UI components have identifiable purposes using semantic markup.",
        "Verify icons have data-purpose attributes or ARIA labels.",
        "Test that regions are properly identified with landmarks.",
        "Check that personalization tools can identify component purposes.",
        "Verify that purpose identification is programmatically determinable.",
        "Test with personalization tools to verify components can be adapted.",
        "Check that component purposes are clearly defined and consistent.",
      ],
      automated: [
        "Tools can check for ARIA attributes and data attributes but cannot verify personalization compatibility.",
        "Use accessibility testing tools to verify semantic markup and ARIA attributes.",
      ],
    },
    complianceRequirements: [
      "UI components must have programmatically determinable purposes using semantic markup or ARIA attributes.",
      "Icons must have identifiable purposes through data-purpose attributes, ARIA labels, or semantic HTML.",
      "Page regions must be identified using ARIA landmarks or semantic HTML5 elements.",
      "Component purposes must be consistent across the site.",
      "Purpose identification must enable personalization tools to adapt the interface.",
    ],
    beyondCompliance: [
      "Use comprehensive semantic markup throughout the site.",
      "Provide detailed purpose information for complex components.",
      "Test with actual personalization tools to verify compatibility.",
      "Document component purposes for consistency.",
      "Consider providing multiple ways to identify component purposes.",
      "Ensure purposes are clear and unambiguous.",
    ],
    myths: [
      {
        myth: "Personalization is a future feature, so I don't need to worry about it now.",
        reality: "Identifying component purposes benefits all users now, not just future personalization. It improves accessibility and makes code more maintainable.",
      },
      {
        myth: "I can just use any data attribute for purpose identification.",
        reality: "Use standard semantic HTML and ARIA attributes first. Use data-purpose or other attributes consistently and according to established patterns.",
      },
    ],
    commonFailures: [
      {
        failure: "Icons without identifiable purposes.",
        solution: "Add aria-label, aria-labelledby, or data-purpose attributes to icons. Ensure icon purposes are programmatically determinable.",
      },
      {
        failure: "Components without semantic markup or ARIA attributes.",
        solution: "Use semantic HTML elements (<button>, <nav>, <article>) or add appropriate ARIA roles and attributes to identify component purposes.",
      },
      {
        failure: "Inconsistent purpose identification across the site.",
        solution: "Establish consistent patterns for identifying component purposes. Use the same approach for similar components throughout the site.",
      },
    ],
  },
]