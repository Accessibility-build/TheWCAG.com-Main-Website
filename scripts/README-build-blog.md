# Build-Time Blog Generation

## Overview

The blog generation system now includes a build-time script that generates a blog post during the build process. This ensures that at least one blog post is available immediately when the site is deployed, rather than waiting for the first cron job to run (which could be up to 48 hours).

## How It Works

1. **Build Script Integration**: The `npm run build` command now automatically runs `generate-blog:build` before building the Next.js app.

2. **Process**:
   - Extracts accessibility articles from last 48 hours
   - Generates a consolidated blog post
   - Fact-checks the content
   - Saves to JSON storage
   - Continues with normal build process

3. **Graceful Handling**:
   - If environment variables are missing → Skips gracefully (doesn't fail build)
   - If no articles found → Skips gracefully (cron will handle later)
   - If generation fails → Skips gracefully (cron will handle later)

## Configuration

### Environment Variables Required

The following environment variables must be set in your Vercel project settings (or `.env.local` for local builds):

- `OPENROUTER_API_KEY`
- `OPENROUTER_BLOG_MODEL`
- `OPENROUTER_FACT_CHECK_MODEL`
- `BLOG_AUTO_PUBLISH` (optional, defaults to true)

### Build Process

```bash
npm run build
```

This will:
1. Run `generate-blog:build` script
2. Generate blog post if articles are available
3. Continue with Next.js build
4. Blog posts are available immediately after deployment

## Benefits

✅ **Immediate Content**: Blog posts available right after deployment
✅ **No Waiting**: Don't need to wait 48 hours for first cron job
✅ **Graceful**: Build doesn't fail if blog generation fails
✅ **Automatic**: Runs automatically on every build

## Manual Execution

You can also run the build script manually:

```bash
npm run generate-blog:build
```

## Notes

- The script uses the same logic as the cron job
- It respects the same filtering (accessibility-only, top 7 articles)
- It uses the same fact-checking and auto-publish logic
- If no articles are found, it exits gracefully (cron will handle later)

