import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { logger } from '@/lib/logger'

/**
 * On-demand revalidation endpoint for ISR
 * Used to regenerate pages after new blog posts are created
 */
export async function POST(request: NextRequest) {
  try {
    const { path, secret } = await request.json()

    // Verify secret token
    const revalidateSecret = process.env.REVALIDATE_SECRET
    if (!revalidateSecret) {
      logger.error('REVALIDATE_SECRET is not configured')
      return NextResponse.json({ error: 'Revalidation not configured' }, { status: 500 })
    }

    if (secret !== revalidateSecret) {
      logger.warn('Invalid revalidation secret')
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    if (!path) {
      return NextResponse.json({ error: 'Path is required' }, { status: 400 })
    }

    // Revalidate the specified path
    revalidatePath(path)

    logger.log(`Revalidated path: ${path}`)

    return NextResponse.json({
      revalidated: true,
      path,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error('Revalidation failed', error)
    return NextResponse.json(
      {
        error: 'Revalidation failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

