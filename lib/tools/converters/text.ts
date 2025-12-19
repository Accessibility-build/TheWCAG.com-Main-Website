import { marked } from "marked"
import TurndownService from "turndown"
import { convert as htmlToTextConvert } from "html-to-text"
import * as yaml from "js-yaml"
import Papa from "papaparse"

/**
 * Convert Markdown to HTML
 */
export function markdownToHtml(markdown: string): string {
  return marked.parse(markdown, { async: false }) as string
}

/**
 * Convert HTML to Markdown
 */
export function htmlToMarkdown(html: string): string {
  const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
  })
  return turndownService.turndown(html)
}

/**
 * Convert HTML to plain text
 */
export function htmlToText(html: string): string {
  return htmlToTextConvert(html, {
    wordwrap: false,
    preserveNewlines: true,
  })
}

/**
 * Convert plain text to HTML
 */
export function textToHtml(text: string): string {
  // Escape HTML entities
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")

  // Convert double newlines to paragraphs, single newlines to <br>
  const paragraphs = escaped.split(/\n\n+/)
  return paragraphs
    .map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`)
    .join("\n")
}

/**
 * Format JSON with indentation
 */
export function formatJson(json: string, indent: number = 2): string {
  const parsed = JSON.parse(json)
  return JSON.stringify(parsed, null, indent)
}

/**
 * Minify JSON
 */
export function minifyJson(json: string): string {
  const parsed = JSON.parse(json)
  return JSON.stringify(parsed)
}

/**
 * Validate JSON
 */
export function validateJson(json: string): { valid: boolean; error?: string } {
  try {
    JSON.parse(json)
    return { valid: true }
  } catch (e) {
    return { valid: false, error: (e as Error).message }
  }
}

/**
 * Convert JSON to CSV
 */
export function jsonToCsv(
  json: string,
  options: { delimiter?: string; header?: boolean } = {}
): string {
  const { delimiter = ",", header = true } = options
  const data = JSON.parse(json)
  
  if (!Array.isArray(data)) {
    throw new Error("JSON must be an array of objects")
  }
  
  if (data.length === 0) {
    return ""
  }
  
  // Flatten nested objects
  const flattenObject = (obj: Record<string, unknown>, prefix = ""): Record<string, unknown> => {
    const result: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key
      if (value && typeof value === "object" && !Array.isArray(value)) {
        Object.assign(result, flattenObject(value as Record<string, unknown>, newKey))
      } else {
        result[newKey] = value
      }
    }
    return result
  }
  
  const flatData = data.map((item) => flattenObject(item as Record<string, unknown>))
  
  return Papa.unparse(flatData, {
    delimiter,
    header,
  })
}

/**
 * Convert CSV to JSON
 */
export function csvToJson(csv: string): unknown[] {
  const result = Papa.parse(csv, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  })
  
  if (result.errors.length > 0) {
    throw new Error(result.errors[0].message)
  }
  
  return result.data
}

/**
 * Convert XML to JSON
 */
export function xmlToJson(xml: string): unknown {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xml, "text/xml")
  
  const errorNode = doc.querySelector("parsererror")
  if (errorNode) {
    throw new Error("Invalid XML: " + errorNode.textContent)
  }
  
  const xmlToObject = (node: Element): unknown => {
    const obj: Record<string, unknown> = {}
    
    // Handle attributes
    if (node.attributes.length > 0) {
      for (const attr of Array.from(node.attributes)) {
        obj[`@${attr.name}`] = attr.value
      }
    }
    
    // Handle child nodes
    for (const child of Array.from(node.children)) {
      const childResult = xmlToObject(child)
      const tagName = child.tagName
      
      if (obj[tagName]) {
        // Convert to array if multiple same-named children
        if (!Array.isArray(obj[tagName])) {
          obj[tagName] = [obj[tagName]]
        }
        (obj[tagName] as unknown[]).push(childResult)
      } else {
        obj[tagName] = childResult
      }
    }
    
    // Handle text content
    if (node.children.length === 0) {
      const text = node.textContent?.trim()
      if (text) {
        if (Object.keys(obj).length === 0) {
          return text
        }
        obj["#text"] = text
      }
    }
    
    return Object.keys(obj).length === 0 ? "" : obj
  }
  
  return { [doc.documentElement.tagName]: xmlToObject(doc.documentElement) }
}

/**
 * Convert YAML to JSON
 */
export function yamlToJson(yamlStr: string): unknown {
  return yaml.load(yamlStr)
}

/**
 * Convert JSON to YAML
 */
export function jsonToYaml(json: string): string {
  const data = JSON.parse(json)
  return yaml.dump(data, {
    indent: 2,
    lineWidth: -1,
    noRefs: true,
  })
}

/**
 * URL encode
 */
export function urlEncode(text: string, full: boolean = false): string {
  return full ? encodeURI(text) : encodeURIComponent(text)
}

/**
 * URL decode
 */
export function urlDecode(text: string, full: boolean = false): string {
  return full ? decodeURI(text) : decodeURIComponent(text)
}

/**
 * Base64 encode text
 */
export function base64Encode(text: string): string {
  // Handle UTF-8
  const utf8Bytes = new TextEncoder().encode(text)
  let binary = ""
  utf8Bytes.forEach((byte) => {
    binary += String.fromCharCode(byte)
  })
  return btoa(binary)
}

/**
 * Base64 decode to text
 */
export function base64Decode(base64: string): string {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return new TextDecoder().decode(bytes)
}
