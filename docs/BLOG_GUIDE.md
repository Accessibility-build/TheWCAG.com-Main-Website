# Blog Writing Guide

This guide explains how to write and publish new blog posts in TheWCAG.

## Overview

The blog system supports two methods for creating posts:

1. **JSON Storage Method** (Recommended): Store blog posts as JSON files in `lib/blog-posts/`
2. **Manual Method**: Hardcode posts directly in `app/blog/page.tsx` (for static posts)

## Method 1: JSON Storage (Recommended)

This is the recommended method for most blog posts. Posts are stored as JSON files and can be dynamically loaded.

### Step 1: Create the Blog Post JSON File

Create a new JSON file in `lib/blog-posts/` with the following structure:

```json
{
  "slug": "your-blog-post-slug",
  "title": "Your Blog Post Title",
  "content": "# Your Blog Post Content\n\nWrite your content in **Markdown** format here...",
  "excerpt": "A brief summary of your blog post (150-300 characters recommended)",
  "publishedAt": "2025-01-28",
  "generatedAt": "2025-01-28T00:00:00.000Z",
  "sources": [
    {
      "title": "Source Title",
      "url": "https://example.com/source",
      "source": "Source Name"
    }
  ],
  "factCheckStatus": "verified",
  "factCheckNotes": "Optional notes about fact-checking",
  "isPublished": true,
  "tags": [
    "accessibility",
    "WCAG",
    "web accessibility"
  ]
}
```

### Required Fields

- **slug**: URL-friendly identifier (e.g., "how-to-make-website-accessible")
- **title**: The blog post title
- **content**: Full blog post content in Markdown format
- **excerpt**: Brief summary (used in blog listing)
- **publishedAt**: Publication date (ISO date format: "YYYY-MM-DD")
- **generatedAt**: When the post was created (ISO datetime format)
- **sources**: Array of source objects (can be empty array `[]`)
- **factCheckStatus**: Either `"verified"` or `"needs_review"`
- **isPublished**: `true` to publish, `false` to keep as draft
- **tags**: Array of tag strings

### Step 2: Update the Index

After creating your JSON file, update `lib/blog-posts/index.json` to include your post metadata:

```json
[
  {
    "slug": "your-blog-post-slug",
    "title": "Your Blog Post Title",
    "excerpt": "A brief summary...",
    "publishedAt": "2025-01-28",
    "factCheckStatus": "verified",
    "isPublished": true
  },
  ...existing posts...
]
```

**Note**: The index is automatically updated when using the `saveBlogPost()` function from `lib/blog/storage.ts`, but if you're creating files manually, you need to update the index yourself.

### Step 3: Verify the Post

1. Start your development server: `npm run dev`
2. Navigate to `/blog` to see your post in the listing
3. Click on your post to view it at `/blog/your-blog-post-slug`

## Method 2: Manual Method (For Static Posts)

For posts that are hardcoded and don't need dynamic loading, you can add them directly to `app/blog/page.tsx`.

### Step 1: Add to Manual Posts Array

Edit `app/blog/page.tsx` and add your post to the `manualBlogPosts` array:

```typescript
const manualBlogPosts = [
  // ... existing posts ...
  {
    slug: 'your-blog-post-slug',
    title: 'Your Blog Post Title',
    excerpt: 'A brief summary of your blog post...',
    publishedAt: '2025-01-28',
    factCheckStatus: 'verified' as const,
    isPublished: true,
  },
]
```

### Step 2: Create the Post Page

Create a new page file at `app/blog/your-blog-post-slug/page.tsx` with your full blog post content.

You can use the existing blog post pages as templates:
- `app/blog/is-accessibility-work-safe-from-ai-in-the-near-future/page.tsx`

## Content Guidelines

### Markdown Support

Blog posts support full Markdown syntax:
- Headers: `# H1`, `## H2`, `### H3`
- **Bold** and *italic* text
- Lists (ordered and unordered)
- Links: `[text](url)`
- Code blocks and inline code
- Blockquotes: `> quote`

### Best Practices

1. **Slug Format**: Use lowercase, hyphens instead of spaces, keep it concise
   - ✅ Good: `how-to-make-website-accessible`
   - ❌ Bad: `How To Make Website Accessible` or `how_to_make_website_accessible`

2. **Excerpt Length**: Keep excerpts between 150-300 characters for optimal display

3. **Content Structure**: Use clear headings to organize your content
   - Start with an introduction
   - Use H2 for main sections
   - Use H3 for subsections

4. **Fact Checking**: 
   - Set `factCheckStatus: "verified"` only after thorough review
   - Use `"needs_review"` if content needs verification
   - Add `factCheckNotes` to document your review process

5. **Tags**: Use relevant tags to help with categorization:
   - Common tags: `accessibility`, `WCAG`, `web accessibility`, `a11y`
   - Add specific tags based on content topic

## Auto-Generated Posts

The system also supports auto-generated blog posts via:

1. **Build-time generation**: `npm run generate-blog:build`
2. **Cron job**: Automatically generates posts from RSS feeds

These posts are automatically saved to JSON storage and don't require manual intervention.

## Troubleshooting

### Post Not Showing Up

1. Check that `isPublished: true` in your JSON file
2. Verify the slug matches the filename (without `.json`)
3. Ensure the post is in `lib/blog-posts/index.json`
4. Restart your dev server if needed

### Post Content Not Rendering

1. Verify your Markdown syntax is correct
2. Check that the `content` field contains valid Markdown
3. Ensure ReactMarkdown is properly rendering (check browser console)

### Duplicate Posts

If you see duplicate posts:
- JSON storage posts take precedence over manual posts
- Remove the manual post entry if you've moved it to JSON storage

## File Structure

```
lib/blog-posts/
├── index.json                    # Metadata index for all posts
├── your-post-slug.json          # Individual post file
└── another-post-slug.json       # Another post file

app/blog/
├── page.tsx                      # Blog listing page
├── layout.tsx                    # Blog layout
└── [slug]/
    └── page.tsx                  # Dynamic post page (loads from JSON)
```

## Examples

### Example JSON Post

See `lib/blog-posts/is-accessibility-work-safe-from-ai-in-the-near-future.json` for a complete example.

### Example Manual Post

See `app/blog/is-accessibility-work-safe-from-ai-in-the-near-future/page.tsx` for a static post example.

## Quick Start: Using the Helper Script

The easiest way to create a new blog post is using the helper script:

```bash
npm run create-blog-post
```

This will prompt you for:
- Title
- Content (Markdown)
- Excerpt (optional, auto-generated if not provided)
- Published date
- Fact check status
- Whether to publish immediately
- Tags

The script will automatically:
- Generate a slug from the title
- Create the JSON file
- Update the index
- Save everything properly

## Need Help?

- Check existing blog posts for reference
- Review `lib/blog/types.ts` for TypeScript interfaces
- See `lib/blog/storage.ts` for storage functions
- Check `app/blog/[slug]/page.tsx` for how posts are rendered

