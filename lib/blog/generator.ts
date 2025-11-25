import type { ExtractedArticle, OpenRouterResponse } from './types'
import { logger } from '@/lib/logger'

/**
 * Generate a blog post from multiple articles using OpenRouter API
 */
export async function generateBlogPost(articles: ExtractedArticle[]): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY
  const model = process.env.OPENROUTER_BLOG_MODEL || 'openai/gpt-4o-mini'

  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY is not configured')
  }

  if (articles.length === 0) {
    throw new Error('No articles provided for blog generation')
  }

  // Format articles for the prompt
  const articlesText = articles
    .map((article, index) => {
      return `Article ${index + 1}:
Title: ${article.title}
Source: ${article.source}
URL: ${article.url}
Published: ${article.publishedDate}
Content: ${article.content.substring(0, 2000)}${article.content.length > 2000 ? '...' : ''}`
    })
    .join('\n\n---\n\n')

  const prompt = `You are a professional accessibility content writer. Create a comprehensive, well-structured blog post that consolidates and synthesizes the following accessibility articles from the last 48 hours.

Articles:
${articlesText}

Requirements:
1. Create a single, cohesive blog post (not a list of articles)
2. Synthesize information from all articles into a unified narrative
3. Use proper markdown formatting with headings, paragraphs, and lists
4. Include a "Sources" section at the end with all article titles, sources, and URLs
5. Write in a professional, engaging tone suitable for accessibility professionals
6. Focus on key insights, trends, and important information
7. Ensure the content is accurate and well-organized
8. The blog post should be substantial (at least 800 words)
9. Use H2 headings for main sections
10. Include an introduction and conclusion

Format the response as clean markdown. Do not include a title in the markdown (we'll add that separately).`

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://thewcag.com',
        'X-Title': 'TheWCAG Blog Generator',
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content:
              'You are an expert accessibility content writer who creates well-structured, informative blog posts about web accessibility and WCAG compliance.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`)
    }

    const data = (await response.json()) as OpenRouterResponse

    if (!data.choices || data.choices.length === 0) {
      throw new Error('No response from OpenRouter API')
    }

    const content = data.choices[0]?.message?.content

    if (!content) {
      throw new Error('Empty response from OpenRouter API')
    }

    logger.log('Blog post generated successfully')
    return content
  } catch (error) {
    logger.error('Failed to generate blog post', error)
    throw error
  }
}

