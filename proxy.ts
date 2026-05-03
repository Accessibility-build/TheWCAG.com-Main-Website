import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Match /criteria/<digits>-<digits>-<digits>(-<digits>)? — the legacy dash format.
// The actual route is statically generated for dot format (e.g. /criteria/1.4.3).
const CRITERION_DASH_PATH = /^\/criteria\/(\d+(?:-\d+){1,3})\/?$/

export function proxy(request: NextRequest) {
  // Permanent redirect dash-format criterion URLs to the canonical dot format.
  // Without this, /criteria/1-4-3 hard-404s because dynamicParams=false in the route.
  const dashMatch = request.nextUrl.pathname.match(CRITERION_DASH_PATH)
  if (dashMatch) {
    const dotted = dashMatch[1].replace(/-/g, '.')
    const url = request.nextUrl.clone()
    url.pathname = `/criteria/${dotted}`
    return NextResponse.redirect(url, 308)
  }

  const response = NextResponse.next()

  // Security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  )

  // Content Security Policy (adjust as needed for your app)
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://www.googletagmanager.com https://unpkg.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com https://www.googletagmanager.com https://formspree.io https://formsubmit.co https://unpkg.com",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self' https://formspree.io https://formsubmit.co",
  ].join('; ')

  response.headers.set('Content-Security-Policy', csp)

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

