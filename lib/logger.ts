/**
 * Production-safe logging utility
 * Only logs in development, can be extended to send to error tracking service in production
 */

const isDevelopment = process.env.NODE_ENV === 'development'

export const logger = {
  error: (message: string, error?: Error | unknown, context?: Record<string, unknown>) => {
    if (isDevelopment) {
      console.error(message, error, context)
    } else {
      // In production, send to error tracking service
      // Example: Sentry.captureException(error, { extra: context })
      // For now, silently handle in production to avoid console pollution
      // TODO: Integrate with error tracking service (Sentry, LogRocket, etc.)
    }
  },
  warn: (message: string, context?: Record<string, unknown>) => {
    if (isDevelopment) {
      console.warn(message, context)
    }
    // Warnings are typically not critical, so we don't send to tracking service
  },
  log: (message: string, context?: Record<string, unknown>) => {
    if (isDevelopment) {
      console.log(message, context)
    }
    // Regular logs are development-only
  },
  info: (message: string, context?: Record<string, unknown>) => {
    if (isDevelopment) {
      console.info(message, context)
    }
  },
}

