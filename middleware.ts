import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Security Middleware
 * Adds security headers to all responses
 * Simple, robust, production-ready
 */

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security Headers
  const headers = response.headers;

  // Prevent XSS attacks
  headers.set('X-XSS-Protection', '1; mode=block');

  // Prevent clickjacking
  headers.set('X-Frame-Options', 'DENY');

  // Prevent MIME sniffing
  headers.set('X-Content-Type-Options', 'nosniff');

  // Referrer policy
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Content Security Policy (CSP)
  // Allow only same-origin and Google Fonts for Inter font
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // Next.js requires unsafe-eval and unsafe-inline
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self'",
  ].join('; ');

  headers.set('Content-Security-Policy', csp);

  // Permissions Policy (formerly Feature Policy)
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
};
