import { NextResponse } from 'next/server'

/**
 * Health check endpoint for monitoring services
 * Returns 200 OK if the service is healthy
 */
export async function GET() {
  try {
    // Basic health check - can be extended with database checks, etc.
    const health = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'TheWCAG.com',
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
    }

    return NextResponse.json(health, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 503 }
    )
  }
}

