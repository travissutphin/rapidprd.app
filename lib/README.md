# Security & Utilities Library

Simple, robust utilities for the PRD Generator application.

## Files

### `security.ts`
Input sanitization and validation utilities.

**Functions:**
- `sanitizeInput(input: string)` - Remove HTML tags and dangerous characters
- `validateTextField(input, min, max)` - Validate text with length constraints
- `validateEnvVar(name)` - Ensure environment variable exists
- `getEnvVar(name, fallback?)` - Safely get environment variable

**Usage:**
```typescript
import { sanitizeInput, validateTextField } from '@/lib/security';

// Sanitize user input
const clean = sanitizeInput(userInput);

// Validate with constraints
const result = validateTextField(userInput, 50, 500);
if (!result.valid) {
  console.error(result.error);
}
```

### `env.ts`
Environment variable configuration and validation.

**Exports:**
- `env` - Validated environment variables
- `isProduction` - Boolean flag
- `isDevelopment` - Boolean flag

**Usage:**
```typescript
import { env, isProduction } from '@/lib/env';

// Access validated environment variables
const apiKey = env.ANTHROPIC_API_KEY;

// Check environment
if (isProduction) {
  // Production-only code
}
```

## Security Principles

1. **Input Sanitization** - All user input is sanitized before processing
2. **Environment Validation** - Required variables are validated at startup
3. **Fail Fast** - Missing required config causes immediate error
4. **Simple & Robust** - No overengineering, just essentials

## Testing

```typescript
// Test sanitization
import { sanitizeInput } from '@/lib/security';

const dirty = '<script>alert("xss")</script>Hello';
const clean = sanitizeInput(dirty); // "Hello"

// Test validation
import { validateTextField } from '@/lib/security';

const result = validateTextField('Test', 3, 10);
console.log(result.valid); // true
console.log(result.sanitized); // "Test"
```
