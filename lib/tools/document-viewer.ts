// Document Viewer utility functions for parsing, storage, and search

export interface Document {
  id: string
  name: string
  content: string
  path: string
  uploadedAt: number
  wordCount: number
  headings: Heading[]
}

export interface Heading {
  id: string
  text: string
  level: number
}

const STORAGE_KEY = "document-viewer-docs"
const MAX_STORAGE_SIZE = 4.5 * 1024 * 1024 // 4.5MB to stay under 5MB limit

/**
 * Generate a unique ID for a document
 */
export function generateId(): string {
  return `doc-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

/**
 * Extract headings from markdown content
 */
export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = []
  const lines = content.split("\n")
  
  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.+)$/)
    if (match) {
      const level = match[1].length
      const text = match[2].trim()
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
      
      headings.push({ id, text, level })
    }
  }
  
  return headings
}

/**
 * Count words in markdown content (excluding code blocks and special syntax)
 */
export function countWords(content: string): number {
  // Remove code blocks
  let text = content.replace(/```[\s\S]*?```/g, "")
  // Remove inline code
  text = text.replace(/`[^`]+`/g, "")
  // Remove markdown links but keep text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
  // Remove images
  text = text.replace(/!\[[^\]]*\]\([^)]+\)/g, "")
  // Remove headings markers
  text = text.replace(/^#{1,6}\s+/gm, "")
  // Remove other markdown syntax
  text = text.replace(/[*_~`#>-]/g, " ")
  
  const words = text.trim().split(/\s+/).filter(word => word.length > 0)
  return words.length
}

/**
 * Parse a file into a Document object
 */
export async function parseFile(file: File, path?: string): Promise<Document> {
  const content = await file.text()
  const headings = extractHeadings(content)
  const wordCount = countWords(content)
  
  return {
    id: generateId(),
    name: file.name,
    content,
    path: path || file.name,
    uploadedAt: Date.now(),
    wordCount,
    headings,
  }
}

/**
 * Check if a file is a supported markdown file
 */
export function isMarkdownFile(file: File): boolean {
  const name = file.name.toLowerCase()
  return (
    name.endsWith(".md") ||
    name.endsWith(".markdown") ||
    name.endsWith(".txt")
  )
}

/**
 * Get the current storage size in bytes
 */
function getStorageSize(): number {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? new Blob([data]).size : 0
  } catch {
    return 0
  }
}

/**
 * Load documents from localStorage
 */
export function loadDocuments(): Document[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return []
    return JSON.parse(data) as Document[]
  } catch {
    return []
  }
}

/**
 * Save documents to localStorage
 */
export function saveDocuments(documents: Document[]): { success: boolean; error?: string } {
  try {
    const data = JSON.stringify(documents)
    const size = new Blob([data]).size
    
    if (size > MAX_STORAGE_SIZE) {
      return { 
        success: false, 
        error: `Storage limit exceeded. Please remove some documents. (${(size / 1024 / 1024).toFixed(2)}MB / ${(MAX_STORAGE_SIZE / 1024 / 1024).toFixed(1)}MB)` 
      }
    }
    
    localStorage.setItem(STORAGE_KEY, data)
    return { success: true }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to save documents" 
    }
  }
}

/**
 * Add a document to storage
 */
export function addDocument(doc: Document): { success: boolean; error?: string } {
  const documents = loadDocuments()
  
  // Check for duplicates by name and path
  const existingIndex = documents.findIndex(
    d => d.name === doc.name && d.path === doc.path
  )
  
  if (existingIndex !== -1) {
    // Replace existing document
    documents[existingIndex] = doc
  } else {
    documents.push(doc)
  }
  
  return saveDocuments(documents)
}

/**
 * Remove a document from storage
 */
export function removeDocument(id: string): { success: boolean; error?: string } {
  const documents = loadDocuments()
  const filtered = documents.filter(d => d.id !== id)
  return saveDocuments(filtered)
}

/**
 * Clear all documents from storage
 */
export function clearAllDocuments(): { success: boolean; error?: string } {
  try {
    localStorage.removeItem(STORAGE_KEY)
    return { success: true }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to clear documents" 
    }
  }
}

/**
 * Search documents by name and content
 */
export function searchDocuments(documents: Document[], query: string): Document[] {
  if (!query.trim()) return documents
  
  const lowerQuery = query.toLowerCase()
  
  return documents.filter(doc => {
    const nameMatch = doc.name.toLowerCase().includes(lowerQuery)
    const pathMatch = doc.path.toLowerCase().includes(lowerQuery)
    const contentMatch = doc.content.toLowerCase().includes(lowerQuery)
    const headingMatch = doc.headings.some(h => 
      h.text.toLowerCase().includes(lowerQuery)
    )
    
    return nameMatch || pathMatch || contentMatch || headingMatch
  })
}

/**
 * Get storage usage info
 */
export function getStorageInfo(): { used: number; max: number; percentage: number } {
  const used = getStorageSize()
  return {
    used,
    max: MAX_STORAGE_SIZE,
    percentage: (used / MAX_STORAGE_SIZE) * 100,
  }
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

/**
 * Format date for display
 */
export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

