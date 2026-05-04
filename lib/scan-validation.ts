/**
 * URL validation for /api/scan. Pure helpers extracted so they can be
 * unit-tested without a server context.
 */

export type ScanUrlError =
  | { ok: false; reason: "invalid"; message: string }
  | { ok: false; reason: "protocol"; message: string }
  | { ok: false; reason: "private"; message: string }

export type ScanUrlResult = { ok: true; url: URL } | ScanUrlError

export function validateScanUrl(input: string): ScanUrlResult {
  const trimmed = input.trim()
  if (!trimmed) {
    return { ok: false, reason: "invalid", message: "Provide a URL to scan." }
  }
  let parsed: URL
  try {
    parsed = new URL(trimmed)
  } catch {
    return {
      ok: false,
      reason: "invalid",
      message: "That doesn't look like a valid URL. Include http:// or https://.",
    }
  }
  if (!/^https?:$/.test(parsed.protocol)) {
    return { ok: false, reason: "protocol", message: "Only http and https URLs are supported." }
  }
  if (isPrivateHost(parsed.hostname)) {
    return {
      ok: false,
      reason: "private",
      message: "Scanning of private, internal, or loopback hosts is not allowed.",
    }
  }
  return { ok: true, url: parsed }
}

export function isPrivateHost(hostname: string): boolean {
  const lower = hostname.toLowerCase()
  if (lower === "localhost" || lower === "127.0.0.1" || lower === "0.0.0.0" || lower === "::1") {
    return true
  }
  if (lower.endsWith(".localhost") || lower.endsWith(".internal") || lower.endsWith(".local")) {
    return true
  }
  // IPv4 private + link-local + loopback ranges
  const m = lower.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)
  if (m) {
    const a = +m[1]
    const b = +m[2]
    if (a === 10) return true
    if (a === 127) return true
    if (a === 169 && b === 254) return true
    if (a === 172 && b >= 16 && b <= 31) return true
    if (a === 192 && b === 168) return true
  }
  return false
}
