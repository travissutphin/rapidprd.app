/**
 * Security Utilities
 * Simple, robust input sanitization and validation
 * No overengineering - only essentials for PRD generator
 */

/**
 * Sanitize text input to prevent XSS attacks
 * Removes HTML tags and dangerous characters
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') return '';

  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');

  // Remove script/style content
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  sanitized = sanitized.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // Trim whitespace
  sanitized = sanitized.trim();

  return sanitized;
}

/**
 * Validate text field with length constraints
 */
export function validateTextField(
  input: string,
  minLength: number,
  maxLength: number
): { valid: boolean; error?: string; sanitized: string } {
  const sanitized = sanitizeInput(input);

  if (!sanitized) {
    return {
      valid: false,
      error: 'Field is required',
      sanitized: '',
    };
  }

  if (sanitized.length < minLength) {
    return {
      valid: false,
      error: `Minimum ${minLength} characters required`,
      sanitized,
    };
  }

  if (sanitized.length > maxLength) {
    return {
      valid: false,
      error: `Maximum ${maxLength} characters allowed`,
      sanitized,
    };
  }

  return {
    valid: true,
    sanitized,
  };
}

/**
 * Validate environment variable exists
 */
export function validateEnvVar(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

/**
 * Safely get environment variable with fallback
 */
export function getEnvVar(name: string, fallback?: string): string {
  return process.env[name] || fallback || '';
}
