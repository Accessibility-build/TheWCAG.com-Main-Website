/**
 * Minify HTML
 */
export function minifyHtml(html: string): string {
  return html
    // Remove comments
    .replace(/<!--[\s\S]*?-->/g, "")
    // Remove whitespace between tags
    .replace(/>\s+</g, "><")
    // Remove leading/trailing whitespace
    .trim()
    // Collapse multiple spaces
    .replace(/\s{2,}/g, " ")
}

/**
 * Minify CSS
 */
export function minifyCss(css: string): string {
  return css
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, "")
    // Remove newlines and extra spaces
    .replace(/\s+/g, " ")
    // Remove spaces around special characters
    .replace(/\s*([{};:,>+~])\s*/g, "$1")
    // Remove trailing semicolons before closing braces
    .replace(/;}/g, "}")
    // Remove spaces inside parentheses
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .trim()
}

/**
 * Minify JavaScript (basic implementation)
 */
export function minifyJs(js: string): string {
  // Note: For production, use a proper minifier like Terser
  // This is a basic implementation that handles common cases
  
  let result = js
  
  // Remove single-line comments (but not URLs)
  result = result.replace(/([^:])\/\/.*$/gm, "$1")
  
  // Remove multi-line comments
  result = result.replace(/\/\*[\s\S]*?\*\//g, "")
  
  // Remove newlines and collapse whitespace
  result = result.replace(/\s+/g, " ")
  
  // Remove spaces around operators and punctuation
  result = result.replace(/\s*([{};:,=+\-*/<>!&|?])\s*/g, "$1")
  
  // Fix spacing issues with keywords
  const keywords = ["function", "return", "var", "let", "const", "if", "else", "for", "while", "switch", "case", "break", "continue", "new", "typeof", "instanceof", "in", "of"]
  keywords.forEach(keyword => {
    result = result.replace(new RegExp(`${keyword}(\\S)`, "g"), `${keyword} $1`)
  })
  
  return result.trim()
}

/**
 * Format SQL
 */
export function formatSql(
  sql: string,
  options: {
    uppercase?: boolean
    indent?: number
  } = {}
): string {
  const { uppercase = true, indent = 2 } = options
  const indentStr = " ".repeat(indent)
  
  // Keywords to uppercase and add newlines before
  const majorKeywords = [
    "SELECT", "FROM", "WHERE", "AND", "OR", "ORDER BY", "GROUP BY",
    "HAVING", "JOIN", "LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "OUTER JOIN",
    "ON", "INSERT INTO", "VALUES", "UPDATE", "SET", "DELETE FROM",
    "CREATE TABLE", "ALTER TABLE", "DROP TABLE", "LIMIT", "OFFSET",
    "UNION", "UNION ALL", "EXCEPT", "INTERSECT"
  ]
  
  let result = sql.trim()
  
  // Normalize whitespace
  result = result.replace(/\s+/g, " ")
  
  // Add newlines before major keywords
  majorKeywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, "gi")
    result = result.replace(regex, `\n${uppercase ? keyword : keyword.toLowerCase()}`)
  })
  
  // Indent lines after SELECT, etc.
  const lines = result.split("\n")
  const indentLevel = 0
  
  result = lines.map(line => {
    line = line.trim()
    if (!line) return ""
    
    // Decrease indent for certain keywords
    if (/^(FROM|WHERE|ORDER BY|GROUP BY|HAVING)/i.test(line)) {
      // Keep same level
    }
    
    // Increase indent for JOIN clauses
    if (/^(AND|OR)/i.test(line)) {
      return indentStr + indentStr + line
    }
    
    if (/^(JOIN|LEFT|RIGHT|INNER|OUTER)/i.test(line)) {
      return indentStr + line
    }
    
    return line
  }).join("\n")
  
  return result.trim()
}

/**
 * Convert color between formats
 */
export interface ColorFormats {
  hex: string
  rgb: { r: number; g: number; b: number }
  hsl: { h: number; s: number; l: number }
  cmyk: { c: number; m: number; y: number; k: number }
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleanHex = hex.replace("#", "")
  return {
    r: parseInt(cleanHex.substring(0, 2), 16),
    g: parseInt(cleanHex.substring(2, 4), 16),
    b: parseInt(cleanHex.substring(4, 6), 16),
  }
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("")
}

export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255
  g /= 255
  b /= 255
  
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2
  
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360
  s /= 100
  l /= 100
  
  let r, g, b
  
  if (s === 0) {
    r = g = b = l
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1/6) return p + (q - p) * 6 * t
      if (t < 1/2) return q
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
      return p
    }
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1/3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1/3)
  }
  
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

export function rgbToCmyk(r: number, g: number, b: number): { c: number; m: number; y: number; k: number } {
  r /= 255
  g /= 255
  b /= 255
  
  const k = 1 - Math.max(r, g, b)
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 }
  }
  
  return {
    c: Math.round(((1 - r - k) / (1 - k)) * 100),
    m: Math.round(((1 - g - k) / (1 - k)) * 100),
    y: Math.round(((1 - b - k) / (1 - k)) * 100),
    k: Math.round(k * 100),
  }
}

export function convertColor(input: string): ColorFormats | null {
  let r: number, g: number, b: number
  
  // Try HEX
  if (/^#?[0-9A-Fa-f]{6}$/.test(input)) {
    const rgb = hexToRgb(input)
    r = rgb.r
    g = rgb.g
    b = rgb.b
  }
  // Try RGB
  else if (/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.test(input)) {
    const match = input.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i)!
    r = parseInt(match[1])
    g = parseInt(match[2])
    b = parseInt(match[3])
  }
  // Try HSL
  else if (/^hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)$/i.test(input)) {
    const match = input.match(/^hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)$/i)!
    const rgb = hslToRgb(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]))
    r = rgb.r
    g = rgb.g
    b = rgb.b
  }
  else {
    return null
  }
  
  const hsl = rgbToHsl(r, g, b)
  const cmyk = rgbToCmyk(r, g, b)
  
  return {
    hex: rgbToHex(r, g, b),
    rgb: { r, g, b },
    hsl,
    cmyk,
  }
}
