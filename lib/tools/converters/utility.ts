import CryptoJS from "crypto-js"
import { v4 as uuidv4 } from "uuid"
import QRCode from "qrcode"

/**
 * Generate hash from text
 */
export function generateHash(
  text: string,
  algorithm: "md5" | "sha1" | "sha256" | "sha512"
): string {
  switch (algorithm) {
    case "md5":
      return CryptoJS.MD5(text).toString()
    case "sha1":
      return CryptoJS.SHA1(text).toString()
    case "sha256":
      return CryptoJS.SHA256(text).toString()
    case "sha512":
      return CryptoJS.SHA512(text).toString()
    default:
      throw new Error(`Unknown algorithm: ${algorithm}`)
  }
}

/**
 * Generate hash from file
 */
export async function generateFileHash(
  file: File,
  algorithm: "md5" | "sha1" | "sha256" | "sha512"
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const wordArray = CryptoJS.lib.WordArray.create(reader.result as ArrayBuffer)
      let hash: CryptoJS.lib.WordArray
      
      switch (algorithm) {
        case "md5":
          hash = CryptoJS.MD5(wordArray)
          break
        case "sha1":
          hash = CryptoJS.SHA1(wordArray)
          break
        case "sha256":
          hash = CryptoJS.SHA256(wordArray)
          break
        case "sha512":
          hash = CryptoJS.SHA512(wordArray)
          break
        default:
          reject(new Error(`Unknown algorithm: ${algorithm}`))
          return
      }
      
      resolve(hash.toString())
    }
    reader.onerror = () => reject(new Error("Failed to read file"))
    reader.readAsArrayBuffer(file)
  })
}

/**
 * Generate UUID v4
 */
export function generateUuid(): string {
  return uuidv4()
}

/**
 * Generate multiple UUIDs
 */
export function generateMultipleUuids(count: number): string[] {
  return Array.from({ length: count }, () => uuidv4())
}

/**
 * Generate Lorem Ipsum text
 */
export function generateLoremIpsum(
  type: "words" | "sentences" | "paragraphs",
  count: number
): string {
  const loremWords = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
    "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
    "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
    "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
    "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
    "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
    "deserunt", "mollit", "anim", "id", "est", "laborum", "perspiciatis", "unde",
    "omnis", "iste", "natus", "error", "voluptatem", "accusantium", "doloremque",
    "laudantium", "totam", "rem", "aperiam", "eaque", "ipsa", "quae", "ab", "illo",
    "inventore", "veritatis", "quasi", "architecto", "beatae", "vitae", "dicta"
  ]
  
  const getRandomWord = () => loremWords[Math.floor(Math.random() * loremWords.length)]
  
  const generateSentence = (wordCount: number = 8 + Math.floor(Math.random() * 10)): string => {
    const words = Array.from({ length: wordCount }, getRandomWord)
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
    return words.join(" ") + "."
  }
  
  const generateParagraph = (sentenceCount: number = 4 + Math.floor(Math.random() * 4)): string => {
    return Array.from({ length: sentenceCount }, () => generateSentence()).join(" ")
  }
  
  switch (type) {
    case "words":
      return Array.from({ length: count }, getRandomWord).join(" ")
    case "sentences":
      return Array.from({ length: count }, () => generateSentence()).join(" ")
    case "paragraphs":
      return Array.from({ length: count }, () => generateParagraph()).join("\n\n")
    default:
      throw new Error(`Unknown type: ${type}`)
  }
}

/**
 * Generate secure password
 */
export function generatePassword(options: {
  length?: number
  uppercase?: boolean
  lowercase?: boolean
  numbers?: boolean
  symbols?: boolean
  excludeAmbiguous?: boolean
} = {}): string {
  const {
    length = 16,
    uppercase = true,
    lowercase = true,
    numbers = true,
    symbols = true,
    excludeAmbiguous = false,
  } = options
  
  let chars = ""
  
  const uppercaseChars = excludeAmbiguous ? "ABCDEFGHJKLMNPQRSTUVWXYZ" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercaseChars = excludeAmbiguous ? "abcdefghjkmnpqrstuvwxyz" : "abcdefghijklmnopqrstuvwxyz"
  const numberChars = excludeAmbiguous ? "23456789" : "0123456789"
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
  
  if (uppercase) chars += uppercaseChars
  if (lowercase) chars += lowercaseChars
  if (numbers) chars += numberChars
  if (symbols) chars += symbolChars
  
  if (!chars) {
    throw new Error("At least one character type must be selected")
  }
  
  // Use crypto for secure random
  const array = new Uint32Array(length)
  crypto.getRandomValues(array)
  
  let password = ""
  for (let i = 0; i < length; i++) {
    password += chars[array[i] % chars.length]
  }
  
  return password
}

/**
 * Calculate password strength
 */
export function calculatePasswordStrength(password: string): {
  score: number // 0-4
  feedback: string
} {
  let score = 0
  const feedback: string[] = []
  
  // Length
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (password.length >= 16) score++
  
  // Character types
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++
  
  // Penalties
  if (/^[a-zA-Z]+$/.test(password)) score--
  if (/^[0-9]+$/.test(password)) score--
  if (/(.)\1{2,}/.test(password)) score-- // Repeated characters
  
  score = Math.max(0, Math.min(4, score))
  
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"]
  
  return {
    score,
    feedback: strengthLabels[score],
  }
}

/**
 * Generate QR code as data URL
 */
export async function generateQrCode(
  content: string,
  options: {
    size?: number
    errorCorrectionLevel?: "L" | "M" | "Q" | "H"
    margin?: number
  } = {}
): Promise<string> {
  const { size = 256, errorCorrectionLevel = "M", margin = 4 } = options
  
  return QRCode.toDataURL(content, {
    width: size,
    errorCorrectionLevel,
    margin,
  })
}

/**
 * Generate QR code as SVG
 */
export async function generateQrCodeSvg(
  content: string,
  options: {
    size?: number
    errorCorrectionLevel?: "L" | "M" | "Q" | "H"
    margin?: number
  } = {}
): Promise<string> {
  const { errorCorrectionLevel = "M", margin = 4 } = options
  
  return QRCode.toString(content, {
    type: "svg",
    errorCorrectionLevel,
    margin,
  })
}
