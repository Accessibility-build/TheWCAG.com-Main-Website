import { describe, expect, it } from "vitest"
import { isPrivateHost, validateScanUrl } from "@/lib/scan-validation"

describe("isPrivateHost", () => {
  it("rejects loopback names", () => {
    expect(isPrivateHost("localhost")).toBe(true)
    expect(isPrivateHost("LocalHost")).toBe(true) // case-insensitive
    expect(isPrivateHost("127.0.0.1")).toBe(true)
    expect(isPrivateHost("0.0.0.0")).toBe(true)
    expect(isPrivateHost("::1")).toBe(true)
  })

  it("rejects internal-suffix domains", () => {
    expect(isPrivateHost("api.localhost")).toBe(true)
    expect(isPrivateHost("svc.internal")).toBe(true)
    expect(isPrivateHost("printer.local")).toBe(true)
  })

  it("rejects RFC-1918 IPv4 ranges", () => {
    expect(isPrivateHost("10.0.0.1")).toBe(true)
    expect(isPrivateHost("10.255.255.255")).toBe(true)
    expect(isPrivateHost("172.16.0.1")).toBe(true)
    expect(isPrivateHost("172.31.255.255")).toBe(true)
    expect(isPrivateHost("172.32.0.1")).toBe(false) // outside 16–31
    expect(isPrivateHost("192.168.1.1")).toBe(true)
    expect(isPrivateHost("169.254.1.1")).toBe(true) // link-local
  })

  it("permits public hosts", () => {
    expect(isPrivateHost("example.com")).toBe(false)
    expect(isPrivateHost("api.example.com")).toBe(false)
    expect(isPrivateHost("8.8.8.8")).toBe(false)
    expect(isPrivateHost("203.0.113.4")).toBe(false)
  })
})

describe("validateScanUrl", () => {
  it("accepts http and https URLs", () => {
    const a = validateScanUrl("https://example.com")
    expect(a.ok).toBe(true)
    const b = validateScanUrl("http://example.com/path?query=1")
    expect(b.ok).toBe(true)
  })

  it("trims whitespace before parsing", () => {
    const r = validateScanUrl("   https://example.com   ")
    expect(r.ok).toBe(true)
    if (r.ok) expect(r.url.hostname).toBe("example.com")
  })

  it("rejects empty input", () => {
    const r = validateScanUrl("")
    expect(r.ok).toBe(false)
    if (!r.ok) expect(r.reason).toBe("invalid")
  })

  it("rejects non-URL strings", () => {
    const r = validateScanUrl("not-a-url")
    expect(r.ok).toBe(false)
    if (!r.ok) expect(r.reason).toBe("invalid")
  })

  it("rejects non-http(s) protocols", () => {
    expect(validateScanUrl("ftp://example.com").ok).toBe(false)
    expect(validateScanUrl("file:///etc/passwd").ok).toBe(false)
    expect(validateScanUrl("javascript:alert(1)").ok).toBe(false)
  })

  it("rejects private hosts (SSRF guard)", () => {
    const r = validateScanUrl("http://192.168.1.1/admin")
    expect(r.ok).toBe(false)
    if (!r.ok) expect(r.reason).toBe("private")
  })

  it("rejects localhost variants", () => {
    expect(validateScanUrl("http://localhost:3000").ok).toBe(false)
    expect(validateScanUrl("http://127.0.0.1").ok).toBe(false)
    expect(validateScanUrl("http://0.0.0.0").ok).toBe(false)
  })
})
