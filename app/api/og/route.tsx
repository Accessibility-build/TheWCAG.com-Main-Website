import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Get parameters from URL
    const title = searchParams.get('title') || 'TheWCAG'
    const subtitle = searchParams.get('subtitle') || 'Complete WCAG 2.2 Accessibility Guidelines'
    const type = searchParams.get('type') || 'website'
    const criterion = searchParams.get('criterion') || ''
    const level = searchParams.get('level') || ''

    // Use system fonts for now (can be enhanced with custom fonts later)

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#FFFDF9', // --background color
            backgroundImage: 'radial-gradient(circle at 25px 25px, #E5DDD0 2px, transparent 0), radial-gradient(circle at 75px 75px, #E5DDD0 2px, transparent 0)',
            backgroundSize: '100px 100px',
            padding: '80px',
            fontFamily: 'Inter',
          }}
        >
          {/* Header with logo and site name */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            {/* Logo placeholder - you'll need to add actual logo */}
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#D97706', // --primary color
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#FFFDF9',
              }}
            >
              W
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: '#1F1F1E', // --foreground color
                  lineHeight: 1.2,
                }}
              >
                TheWCAG.com
              </div>
              <div
                style={{
                  fontSize: '18px',
                  color: '#6B5B4F', // --accent color
                  fontWeight: 400,
                }}
              >
                An Accessibility Guide
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              width: '100%',
              maxWidth: '900px',
            }}
          >
            {/* Criterion badge if applicable */}
            {criterion && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    backgroundColor: level === 'AAA' ? '#DC2626' : level === 'AA' ? '#D97706' : '#059669',
                    color: '#FFFDF9',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                >
                  Level {level}
                </div>
                <div
                  style={{
                    backgroundColor: '#E5DDD0',
                    color: '#6B5B4F',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  {criterion}
                </div>
              </div>
            )}

            {/* Title */}
            <div
              style={{
                fontSize: type === 'criterion' ? '56px' : '72px',
                fontWeight: 600,
                color: '#1F1F1E',
                lineHeight: 1.1,
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: '24px',
                color: '#6B5B4F',
                lineHeight: 1.4,
                fontWeight: 400,
                maxWidth: '800px',
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* Footer with decorative elements */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginTop: '40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#D97706',
                  borderRadius: '50%',
                  opacity: 0.8,
                }}
              />
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#DA7756', // --secondary color
                  borderRadius: '50%',
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#6B5B4F',
                  borderRadius: '50%',
                  opacity: 0.4,
                }}
              />
            </div>
            
            {/* WCAG version badge */}
            <div
              style={{
                backgroundColor: '#D97706',
                color: '#FFFDF9',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: 600,
              }}
            >
              WCAG 2.2
            </div>
          </div>

          {/* Background decoration */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '400px',
              height: '400px',
              background: 'linear-gradient(135deg, #D97706 0%, transparent 70%)',
              opacity: 0.05,
              borderRadius: '0 0 0 200px',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // Using system fonts for now
      }
    )
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    console.error(`[OG Image Generation Error]: ${errorMessage}`)
    return new Response(`Failed to generate the image: ${errorMessage}`, {
      status: 500,
    })
  }
}
