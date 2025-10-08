/**
 * Environment Configuration
 * Validates and exports environment variables
 * Fails fast if required variables are missing
 */

import { validateEnvVar, getEnvVar } from './security';

// Validate required environment variables
export const env = {
  // Node environment
  NODE_ENV: getEnvVar('NODE_ENV', 'development'),

  // Server configuration
  PORT: parseInt(getEnvVar('PORT', '3000'), 10),

  // API keys (optional in development, required in production)
  ANTHROPIC_API_KEY: process.env.NODE_ENV === 'production'
    ? validateEnvVar('ANTHROPIC_API_KEY')
    : getEnvVar('ANTHROPIC_API_KEY', ''),

  // Public variables
  NEXT_PUBLIC_APP_URL: getEnvVar('NEXT_PUBLIC_APP_URL', 'http://localhost:3000'),
} as const;

// Helper to check if we're in production
export const isProduction = env.NODE_ENV === 'production';
export const isDevelopment = env.NODE_ENV === 'development';
