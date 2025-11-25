import type { FactCheckResult, OpenRouterResponse } from './types'
import { logger } from '@/lib/logger'

/**
 * Fact-check a blog post using OpenRouter API
 */
export async function factCheckBlogPost(blogContent: string, title: string): Promise<FactCheckResult> {
  const apiKey = process.env.OPENROUTER_API_KEY
  const model = process.env.OPENROUTER_FACT_CHECK_MODEL || 'openai/gpt-4o-mini'

  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY is not configured')
  }

  const prompt = `You are a fact-checker specializing in web accessibility and WCAG compliance. Review the following blog post for factual accuracy.

Title: ${title}

Content:
${blogContent}

Please check for:
1. Accuracy of WCAG compliance claims and guidelines
2. Correctness of dates, statistics, and technical information
3. Verification of accessibility standards and best practices
4. Any misleading or incorrect statements about accessibility
5. Accuracy of legal information (ADA, Section 508, etc.)
6. Technical accuracy of implementation details

Respond with a JSON object in this exact format:
{
  "verified": true or false,
  "notes": "Detailed explanation of any issues found, or 'All facts verified' if everything is correct"
}

If the content is factually correct, set "verified" to true. If there are any factual errors, inaccuracies, or unverified claims, set "verified" to false and provide detailed notes.

Return ONLY the JSON object, no other text.`

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://thewcag.com',
        'X-Title': 'TheWCAG Fact Checker',
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content:
              'You are a fact-checker for accessibility content. You verify the accuracy of WCAG guidelines, accessibility standards, legal information, and technical details. Always respond with valid JSON only.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.3, // Lower temperature for more consistent fact-checking
        max_tokens: 1000,
        response_format: { type: 'json_object' },
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

    // Parse JSON response
    let result: FactCheckResult
    try {
      result = JSON.parse(content) as FactCheckResult
    } catch (parseError) {
      // Try to extract JSON from markdown code blocks if present
      const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/) || content.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[1] || jsonMatch[0]) as FactCheckResult
      } else {
        throw new Error('Failed to parse fact-check response as JSON')
      }
    }

    // Validate result structure
    if (typeof result.verified !== 'boolean' || typeof result.notes !== 'string') {
      throw new Error('Invalid fact-check result format')
    }

    logger.log(`Fact-check completed: ${result.verified ? 'Verified' : 'Needs Review'}`)
    return result
  } catch (error) {
    logger.error('Failed to fact-check blog post', error)
    // Return a conservative result on error
    return {
      verified: false,
      notes: `Fact-checking failed: ${error instanceof Error ? error.message : 'Unknown error'}. Manual review required.`,
    }
  }
}

