# Vercel Memory Optimization Guide

## Overview

This document explains the memory configuration for serverless functions on Vercel's Hobby (Personal) plan.

## Memory Limits

### Hobby Plan (Personal Account)
- **Maximum Memory:** 2048 MB (2 GB)
- **Default Memory:** 1024 MB (1 GB)
- **Recommended:** Use 1024 MB unless specifically needed

### Pro Plan (Team Account)
- **Maximum Memory:** 3008 MB (~3 GB)
- **More flexibility for memory-intensive operations**

## Current Configuration

Our serverless functions are configured in `vercel.json`:

```json
{
    "functions": {
        "app/api/tools/accessibility-test/route.ts": {
            "maxDuration": 60,
            "memory": 1024
        },
        "app/api/cron/generate-blog/route.ts": {
            "maxDuration": 300,
            "memory": 1024
        }
    }
}
```

### Function Details

#### 1. Accessibility Test API (`/api/tools/accessibility-test`)
- **Memory:** 1024 MB
- **Duration:** 60 seconds
- **Purpose:** Analyzes web pages for accessibility issues
- **Optimization:** Uses Cheerio (lightweight) instead of Puppeteer

**Why 1024 MB is sufficient:**
- Static HTML parsing with Cheerio
- No browser automation (Puppeteer removed)
- Efficient DOM traversal
- Limited screenshot capture

#### 2. Blog Generation Cron (`/api/cron/generate-blog`)
- **Memory:** 1024 MB
- **Duration:** 300 seconds (5 minutes)
- **Purpose:** Automated blog post generation
- **Runs:** Every 48 hours via Vercel Cron

**Why 1024 MB is sufficient:**
- Sequential processing (one article at a time)
- Efficient API calls
- Streaming responses where possible
- Garbage collection optimized

## Optimization Strategies

### 1. Use Lightweight Libraries
✅ **Do:**
- Use `cheerio` for HTML parsing
- Use `node-fetch` for HTTP requests
- Use streaming for large data

❌ **Don't:**
- Use `puppeteer` (requires 2GB+ memory)
- Use `playwright` (memory intensive)
- Load entire files into memory

### 2. Process Data Incrementally
```typescript
// ✅ Good: Process in chunks
for (const item of items) {
  await processItem(item)
}

// ❌ Bad: Load everything at once
const results = await Promise.all(items.map(processItem))
```

### 3. Clean Up Resources
```typescript
// ✅ Good: Clean up after use
const data = await fetchData()
processData(data)
data = null // Allow garbage collection

// ❌ Bad: Keep references
const allData = []
for (const item of items) {
  allData.push(await fetchData(item))
}
```

### 4. Use Edge Runtime When Possible
```typescript
// For lightweight operations
export const runtime = 'edge'

export async function GET() {
  // Edge runtime has lower memory limits
  // but is faster and cheaper
}
```

## Monitoring Memory Usage

### 1. Vercel Dashboard
1. Go to your project in Vercel
2. Navigate to "Functions" tab
3. Check "Memory Usage" metrics
4. Look for functions approaching limits

### 2. Local Testing
```bash
# Monitor memory during development
node --max-old-space-size=1024 .next/server/app/api/your-route.js
```

### 3. Add Logging
```typescript
import { logger } from '@/lib/logger'

export async function POST(request: NextRequest) {
  const startMemory = process.memoryUsage()
  
  // Your code here
  
  const endMemory = process.memoryUsage()
  logger.log('Memory used:', {
    heapUsed: (endMemory.heapUsed - startMemory.heapUsed) / 1024 / 1024,
    external: (endMemory.external - startMemory.external) / 1024 / 1024
  })
}
```

## Common Issues and Solutions

### Issue 1: "Function exceeded memory limit"
**Solution:**
1. Reduce memory allocation in `vercel.json`
2. Optimize code to use less memory
3. Process data in smaller chunks
4. Remove unused dependencies

### Issue 2: "Serverless Functions are limited to 2048 mb"
**Solution:**
1. Change memory from 3008 to 1024 in `vercel.json`
2. Optimize the function code
3. Consider upgrading to Pro plan if absolutely necessary

### Issue 3: Function times out before memory limit
**Solution:**
1. Increase `maxDuration` (up to 300s on Hobby)
2. Optimize slow operations
3. Use caching where possible
4. Consider breaking into multiple functions

## Best Practices

### 1. Start Small
- Begin with 1024 MB
- Only increase if monitoring shows it's needed
- Most functions don't need more than 1024 MB

### 2. Profile Before Optimizing
```typescript
// Add profiling to identify bottlenecks
console.time('operation')
await expensiveOperation()
console.timeEnd('operation')
```

### 3. Use Appropriate Tools
| Task | Tool | Memory |
|------|------|--------|
| HTML Parsing | Cheerio | Low (50-100 MB) |
| API Calls | fetch | Low (10-50 MB) |
| Image Processing | Sharp | Medium (200-500 MB) |
| PDF Generation | PDFKit | Medium (100-300 MB) |
| Browser Automation | ❌ Too heavy | High (2GB+) |

### 4. Cache Aggressively
```typescript
// Use Vercel's Edge Config or KV for caching
import { kv } from '@vercel/kv'

export async function GET() {
  const cached = await kv.get('key')
  if (cached) return cached
  
  const data = await expensiveOperation()
  await kv.set('key', data, { ex: 3600 })
  return data
}
```

## Migration from High Memory Functions

If you had functions using > 2048 MB:

### Option 1: Optimize (Recommended)
1. Replace Puppeteer with Cheerio
2. Use streaming instead of loading full data
3. Process in chunks
4. Remove unnecessary dependencies

### Option 2: Move to Edge Runtime
```typescript
export const runtime = 'edge'
// Lighter weight, but more restrictions
```

### Option 3: Use External Service
- For browser automation: Use external service like BrowserStack
- For heavy processing: Use dedicated server or AWS Lambda
- For AI/ML: Use specialized APIs

### Option 4: Upgrade to Pro Plan
- Only if optimization isn't feasible
- Costs $20/month per team member
- Provides 3008 MB memory limit

## Testing Memory Limits

### Local Test
```bash
# Test with memory limit
node --max-old-space-size=1024 -r ts-node/register test-function.ts
```

### Vercel Preview
1. Deploy to preview branch
2. Monitor function execution
3. Check logs for memory warnings
4. Adjust configuration as needed

## Current Status

✅ **All functions optimized for Hobby plan**
- Accessibility test: 1024 MB (was 3008 MB)
- Blog generation: 1024 MB
- All other functions: Default (1024 MB)

✅ **No Pro plan required**
- All functions work within Hobby limits
- Optimized for performance and cost
- Monitoring in place

## Future Considerations

### When to Upgrade to Pro
- If you need browser automation (Puppeteer/Playwright)
- If you're processing very large files (>500 MB)
- If you need more than 300s execution time
- If you have high traffic requiring more resources

### Alternative Solutions
- **Cloudflare Workers:** Edge runtime, very low memory
- **AWS Lambda:** More memory options (up to 10 GB)
- **Dedicated Server:** Full control, no limits
- **Hybrid Approach:** Heavy tasks on separate service

## Resources

- [Vercel Function Configuration](https://vercel.com/docs/functions/serverless-functions/runtimes)
- [Vercel Pricing](https://vercel.com/pricing)
- [Node.js Memory Management](https://nodejs.org/en/docs/guides/simple-profiling/)
- [Optimizing Serverless Functions](https://vercel.com/docs/functions/serverless-functions/optimization)

## Support

If you encounter memory issues:
1. Check Vercel function logs
2. Review this optimization guide
3. Profile your function locally
4. Consider alternative approaches
5. Contact Vercel support if needed

---

**Last Updated:** January 1, 2026  
**Status:** ✅ All functions optimized for Hobby plan

