# Production setup

This site runs on Vercel. The application code works without any of the
integrations below — they are progressive enhancements that turn this from
"shipping" into "production-grade observable".

Set the env vars in **Vercel → Project Settings → Environment Variables**
(Production + Preview). All variables fall back gracefully when empty.

## Required for full feature parity

### 1. Persistent quiz leaderboard (Upstash Redis)

**Why:** Vercel's filesystem is read-only at runtime. Without Upstash
configured, every quiz score posted in production is silently lost on the
next cold start.

**Steps:**

1. Sign up at <https://upstash.com> (free tier covers a small site for years).
2. Create a Redis database. Pick a region close to your Vercel deployment.
3. Copy the **REST URL** and **REST Token**.
4. In Vercel, set:
   ```
   UPSTASH_REDIS_REST_URL=https://....upstash.io
   UPSTASH_REDIS_REST_TOKEN=...
   ```
5. Redeploy. The first request to `/api/quiz/scores` will seed dummy data.

The same Upstash instance is also used for `/api/scan` rate limiting, so
turning it on enables both.

### 2. Rate-limit enforcement (Upstash Redis — same instance)

`/api/scan` enforces 10 requests / minute and 60 / hour per IP. Without
Upstash, the limiter falls back to in-process memory — fine for a single
serverless instance, but useless across cold starts. Provisioning Upstash
(see above) automatically enables distributed rate limits.

## Recommended

### 3. Error monitoring (Sentry)

**Why:** When a real user hits a 500, you want to find out from a dashboard,
not a complaint email.

**Steps:**

1. Create a free account at <https://sentry.io>.
2. Create a Next.js project. Copy the DSN.
3. In Vercel, set:
   ```
   NEXT_PUBLIC_SENTRY_DSN=https://...@....ingest.sentry.io/...
   SENTRY_DSN=https://...@....ingest.sentry.io/...   # same value
   ```
4. (Optional, for symbolicated stack traces) Generate an internal-integration
   auth token in Sentry → Settings → Auth Tokens, then set:
   ```
   SENTRY_ORG=your-org-slug
   SENTRY_PROJECT=your-project-slug
   SENTRY_AUTH_TOKEN=...
   ```
   With these set, build-time source-map upload is enabled automatically.

The Sentry config files (`sentry.client.config.ts`, `sentry.server.config.ts`,
`sentry.edge.config.ts`, `instrumentation.ts`) are no-ops without a DSN, so
it's safe to leave them committed.

### 4. Vercel function timeout

`/api/scan` already declares `export const maxDuration = 60`. On the **Hobby**
plan this is silently capped at 10 seconds, which will time out scans of
larger pages. **Upgrade to Pro** if `/scan` is a primary feature.

### 5. Cron jobs

`vercel.json` already wires up `/api/cron/blog` for blog generation. The new
quarterly data-freshness reminder uses the same cron infrastructure (see
`/api/cron/data-freshness`). Cron jobs require a Pro plan.

## Verifying after deploy

```bash
# Should redirect 308 → /criteria/1.4.3
curl -I https://thewcag.com/criteria/1-4-3

# Should return 429 after 10 quick hits
for i in {1..15}; do
  curl -s -o /dev/null -w "%{http_code}\n" \
    -X POST https://thewcag.com/api/scan \
    -H 'Content-Type: application/json' \
    -d '{"url":"https://example.com"}'
done

# Quiz score round-trip
curl -X POST https://thewcag.com/api/quiz/scores \
  -H 'Content-Type: application/json' \
  -d '{"score":21,"total":30,"name":"smoketest"}'
curl 'https://thewcag.com/api/quiz/scores?type=daily&limit=5'

# Sitemap should include >500 URLs
curl -s https://thewcag.com/sitemap.xml | grep -c '<url>'
```
