import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

/**
 * Lightweight per-IP rate limiting for expensive endpoints.
 *
 * In production we use Upstash Redis (auto-detected via the same env vars
 * as quiz storage). In dev or any environment without Upstash configured,
 * the limiter degrades to an in-memory fallback so local development still
 * works — that fallback resets on every cold start, which is fine because
 * dev traffic is single-user.
 */

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN

const upstashRedis: Redis | null =
  REDIS_URL && REDIS_TOKEN ? new Redis({ url: REDIS_URL, token: REDIS_TOKEN }) : null

interface LimiterConfig {
  /** Stable identifier; becomes part of the Redis key prefix. */
  name: string
  /** Maximum requests in the window. */
  requests: number
  /** Window in seconds. */
  windowSeconds: number
}

interface LimiterDecision {
  success: boolean
  limit: number
  remaining: number
  /** Unix-ms timestamp when the bucket resets. */
  reset: number
}

interface LimiterImpl {
  limit(identifier: string): Promise<LimiterDecision>
}

function memoryLimiter(cfg: LimiterConfig): LimiterImpl {
  const buckets = new Map<string, { count: number; resetAt: number }>()
  return {
    async limit(identifier: string) {
      const now = Date.now()
      const bucket = buckets.get(identifier)
      if (!bucket || bucket.resetAt < now) {
        const fresh = { count: 1, resetAt: now + cfg.windowSeconds * 1000 }
        buckets.set(identifier, fresh)
        return { success: true, limit: cfg.requests, remaining: cfg.requests - 1, reset: fresh.resetAt }
      }
      bucket.count += 1
      const allowed = bucket.count <= cfg.requests
      return {
        success: allowed,
        limit: cfg.requests,
        remaining: Math.max(0, cfg.requests - bucket.count),
        reset: bucket.resetAt,
      }
    },
  }
}

function upstashLimiter(cfg: LimiterConfig): LimiterImpl {
  if (!upstashRedis) throw new Error("upstashLimiter called without Redis configured")
  const inner = new Ratelimit({
    redis: upstashRedis,
    limiter: Ratelimit.slidingWindow(cfg.requests, `${cfg.windowSeconds} s`),
    analytics: false,
    prefix: `ratelimit:${cfg.name}`,
  })
  return {
    async limit(identifier: string) {
      const r = await inner.limit(identifier)
      return { success: r.success, limit: r.limit, remaining: r.remaining, reset: r.reset }
    },
  }
}

const cache = new Map<string, LimiterImpl>()

export function getRateLimiter(cfg: LimiterConfig): LimiterImpl {
  const key = `${cfg.name}:${cfg.requests}:${cfg.windowSeconds}`
  let impl = cache.get(key)
  if (!impl) {
    impl = upstashRedis ? upstashLimiter(cfg) : memoryLimiter(cfg)
    cache.set(key, impl)
  }
  return impl
}

/**
 * Best-effort client IP extraction. Vercel passes `x-forwarded-for`; some
 * platforms only set `x-real-ip`. Fall back to a generic identifier so the
 * limiter still bites when no header is present.
 */
export function clientIdentifier(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for")
  if (forwardedFor) return forwardedFor.split(",")[0].trim()
  const realIp = headers.get("x-real-ip")
  if (realIp) return realIp.trim()
  return "anonymous"
}

export function rateLimitHeaders(decision: LimiterDecision): Record<string, string> {
  return {
    "X-RateLimit-Limit": String(decision.limit),
    "X-RateLimit-Remaining": String(decision.remaining),
    "X-RateLimit-Reset": String(Math.floor(decision.reset / 1000)),
  }
}
