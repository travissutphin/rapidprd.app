# API Documentation

**Version:** 1.0
**Last Updated:** October 8, 2025
**Base URL:** `http://localhost:3000` (development) | `https://your-domain.com` (production)

---

## Table of Contents

1. [Overview](#overview)
2. [Authentication](#authentication)
3. [Rate Limiting](#rate-limiting)
4. [Endpoints](#endpoints)
   - [POST /api/generate](#post-apigenerate)
5. [Error Handling](#error-handling)
6. [Response Headers](#response-headers)
7. [Security](#security)
8. [Examples](#examples)

---

## Overview

The PRD Generator API provides a single endpoint for generating Product Requirements Documents using AI (Claude API). The API is built with Next.js 14 API Routes and follows REST principles.

**Key Features:**
- Simple, single-endpoint design
- Built-in rate limiting (10 requests per 15 minutes per IP)
- Server-side input validation and sanitization
- Security headers on all responses
- Type-safe with TypeScript

---

## Authentication

**Current Status:** No authentication required (MVP)

The API is currently open and does not require authentication. Rate limiting is enforced by IP address.

**Future Versions:** Authentication via API keys or JWT tokens will be added in Phase 2.

---

## Rate Limiting

**Configuration:**
- **Limit:** 10 requests per IP address
- **Window:** 15 minutes (900,000 milliseconds)
- **Storage:** In-memory (single-instance deployment)
- **Identifier:** Client IP address (supports proxy headers)

**Rate Limit Headers:**

All responses include rate limit information:

| Header | Description | Example |
|--------|-------------|---------|
| `X-RateLimit-Limit` | Maximum requests allowed in window | `10` |
| `X-RateLimit-Remaining` | Requests remaining in current window | `9` |
| `X-RateLimit-Reset` | UTC timestamp when limit resets | `Wed, 08 Oct 2025 15:30:00 GMT` |
| `Retry-After` | Seconds until retry (429 only) | `300` |

**429 Response (Rate Limit Exceeded):**

```json
{
  "error": "Rate limit exceeded. Please try again later.",
  "resetTime": "2025-10-08T15:30:00.000Z"
}
```

**Implementation:** `lib/security.ts` - `checkRateLimit()` function

---

## Endpoints

### POST /api/generate

Generate a Product Requirements Document based on user input.

**URL:** `/api/generate`

**Method:** `POST`

**Content-Type:** `application/json`

#### Request Body

| Field | Type | Required | Min Length | Max Length | Description |
|-------|------|----------|------------|------------|-------------|
| `appName` | string | Yes | 3 | 50 | Application or product name |
| `description` | string | Yes | 50 | 500 | Brief description of the application |
| `painPoint` | string | Yes | 50 | 500 | Problem the application solves |
| `solution` | string | Yes | 50 | 500 | How the application solves the problem |

**Example Request:**

```json
{
  "appName": "TaskMaster Pro",
  "description": "A modern task management application designed for remote teams to collaborate efficiently and track project progress in real-time with intuitive dashboards.",
  "painPoint": "Remote teams struggle with scattered task management across multiple tools, leading to missed deadlines, lack of visibility, and communication breakdowns that hurt productivity.",
  "solution": "TaskMaster Pro provides a unified platform with real-time collaboration, automated reminders, visual progress tracking, and seamless integration with popular tools like Slack and Google Calendar."
}
```

#### Response

**Success Response (200 OK):**

```json
{
  "prd": "# Product Requirements Document: TaskMaster Pro\n\n**Version:** 1.0\n..."
}
```

**Response Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `prd` | string | Markdown-formatted Product Requirements Document |

**Response Headers:**

```
Content-Type: application/json
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 9
X-RateLimit-Reset: Wed, 08 Oct 2025 15:30:00 GMT
X-XSS-Protection: 1; mode=block
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Content-Security-Policy: ...
```

#### Error Responses

**400 Bad Request - Missing Fields:**

```json
{
  "error": "All fields are required"
}
```

**400 Bad Request - Validation Error:**

```json
{
  "error": "App Name: Minimum 3 characters required"
}
```

Possible validation errors:
- `App Name: Minimum 3 characters required`
- `App Name: Maximum 50 characters allowed`
- `Description: Minimum 50 characters required`
- `Description: Maximum 500 characters allowed`
- `Pain Point: Minimum 50 characters required`
- `Pain Point: Maximum 500 characters allowed`
- `Solution: Minimum 50 characters required`
- `Solution: Maximum 500 characters allowed`

**429 Too Many Requests:**

```json
{
  "error": "Rate limit exceeded. Please try again later.",
  "resetTime": "2025-10-08T15:30:00.000Z"
}
```

**500 Internal Server Error:**

```json
{
  "error": "Failed to generate PRD"
}
```

#### Code Example (JavaScript/Fetch)

```javascript
async function generatePRD(formData) {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appName: formData.appName,
        description: formData.description,
        painPoint: formData.painPoint,
        solution: formData.solution,
      }),
    });

    // Check rate limit headers
    const rateLimit = {
      limit: response.headers.get('X-RateLimit-Limit'),
      remaining: response.headers.get('X-RateLimit-Remaining'),
      reset: response.headers.get('X-RateLimit-Reset'),
    };

    if (!response.ok) {
      if (response.status === 429) {
        const data = await response.json();
        throw new Error(`Rate limit exceeded. Reset at: ${data.resetTime}`);
      }

      const error = await response.json();
      throw new Error(error.error);
    }

    const data = await response.json();
    return data.prd; // Markdown string
  } catch (error) {
    console.error('PRD generation error:', error);
    throw error;
  }
}

// Usage
const prd = await generatePRD({
  appName: 'TaskMaster Pro',
  description: 'A modern task management application...',
  painPoint: 'Remote teams struggle with...',
  solution: 'TaskMaster Pro provides...',
});

console.log(prd); // Full PRD in markdown format
```

#### Code Example (cURL)

```bash
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "appName": "TaskMaster Pro",
    "description": "A modern task management application designed for remote teams to collaborate efficiently and track project progress in real-time with intuitive dashboards.",
    "painPoint": "Remote teams struggle with scattered task management across multiple tools, leading to missed deadlines, lack of visibility, and communication breakdowns that hurt productivity.",
    "solution": "TaskMaster Pro provides a unified platform with real-time collaboration, automated reminders, visual progress tracking, and seamless integration with popular tools like Slack and Google Calendar."
  }'
```

---

## Error Handling

All errors follow a consistent JSON format:

```json
{
  "error": "Human-readable error message"
}
```

**HTTP Status Codes:**

| Status Code | Meaning | Common Causes |
|-------------|---------|---------------|
| `200` | Success | PRD generated successfully |
| `400` | Bad Request | Invalid input, validation failure |
| `429` | Too Many Requests | Rate limit exceeded |
| `500` | Internal Server Error | Server error, API failure |

**Best Practices:**
1. Always check `response.ok` before parsing JSON
2. Handle rate limit errors gracefully (show retry time to user)
3. Display validation errors to the user for correction
4. Log 500 errors for debugging (don't expose to user)

---

## Response Headers

All API responses include security headers configured via middleware:

### Security Headers

| Header | Value | Purpose |
|--------|-------|---------|
| `X-XSS-Protection` | `1; mode=block` | Prevent XSS attacks |
| `X-Frame-Options` | `DENY` | Prevent clickjacking |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Control referrer info |
| `Content-Security-Policy` | See below | Restrict resource loading |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Block permissions |

**Content-Security-Policy:**

```
default-src 'self';
script-src 'self' 'unsafe-eval' 'unsafe-inline';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self';
```

### Rate Limit Headers

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Max requests per window |
| `X-RateLimit-Remaining` | Requests remaining |
| `X-RateLimit-Reset` | Reset time (UTC) |
| `Retry-After` | Seconds until retry (429 only) |

---

## Security

### Input Validation

All input is validated on both client and server:

**Client-Side Validation:**
- Real-time character counting
- Visual feedback (color-coded counters)
- Submit button disabled until valid
- Error messages on blur

**Server-Side Validation:**
- Duplicate validation (defense-in-depth)
- Length constraints enforced
- 400 Bad Request for invalid input
- Detailed error messages

**File:** `app/api/generate/route.ts` (lines 58-96)

### Input Sanitization

All user input is sanitized to prevent XSS attacks:

**Techniques:**
1. HTML tag removal (`<script>`, `<style>`, etc.)
2. Script/style content stripping
3. Whitespace trimming

**File:** `lib/security.ts` - `sanitizeInput()` function

**Example:**

```javascript
// Input
"<script>alert('XSS')</script>Hello World"

// Sanitized Output
"Hello World"
```

### Client IP Extraction

Rate limiting uses client IP address, with proxy support:

**Priority Order:**
1. `X-Forwarded-For` header (reverse proxy)
2. `X-Real-IP` header (load balancer)
3. `unknown` fallback

**File:** `lib/security.ts` - `getClientIP()` function

### HTTPS

**Production:** Always use HTTPS to encrypt data in transit.

**Configuration:** See [DEPLOYMENT.md](DEPLOYMENT.md#ssltls-configuration) for SSL/TLS setup.

---

## Examples

### Complete Client Implementation

```typescript
// types.ts
interface PRDRequest {
  appName: string;
  description: string;
  painPoint: string;
  solution: string;
}

interface PRDResponse {
  prd: string;
}

interface ErrorResponse {
  error: string;
  resetTime?: string;
}

// api-client.ts
class PRDGeneratorAPI {
  private baseURL: string;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
  }

  async generatePRD(data: PRDRequest): Promise<string> {
    const response = await fetch(`${this.baseURL}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Check rate limit headers
    const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
    const rateLimitReset = response.headers.get('X-RateLimit-Reset');

    console.log(`Rate limit: ${rateLimitRemaining} requests remaining`);
    if (rateLimitReset) {
      console.log(`Resets at: ${rateLimitReset}`);
    }

    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();

      if (response.status === 429) {
        throw new Error(
          `Rate limit exceeded. Please try again after ${errorData.resetTime}`
        );
      }

      throw new Error(errorData.error);
    }

    const result: PRDResponse = await response.json();
    return result.prd;
  }
}

// Usage
const api = new PRDGeneratorAPI();

try {
  const prd = await api.generatePRD({
    appName: 'TaskMaster Pro',
    description: 'A modern task management application...',
    painPoint: 'Remote teams struggle with...',
    solution: 'TaskMaster Pro provides...',
  });

  console.log('Generated PRD:', prd);
} catch (error) {
  console.error('Failed to generate PRD:', error);
}
```

### React Hook Example

```typescript
import { useState } from 'react';

interface FormData {
  appName: string;
  description: string;
  painPoint: string;
  solution: string;
}

function usePRDGenerator() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [prd, setPRD] = useState<string | null>(null);

  const generatePRD = async (data: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const result = await response.json();
      setPRD(result.prd);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate PRD');
    } finally {
      setLoading(false);
    }
  };

  return { generatePRD, loading, error, prd };
}

// Usage in component
function PRDForm() {
  const { generatePRD, loading, error, prd } = usePRDGenerator();

  const handleSubmit = async (formData: FormData) => {
    await generatePRD(formData);
  };

  return (
    <div>
      {loading && <p>Generating PRD...</p>}
      {error && <p className="error">{error}</p>}
      {prd && <div className="prd-content">{prd}</div>}
    </div>
  );
}
```

---

## Testing

### Manual Testing (cURL)

**Test successful request:**

```bash
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "appName": "Test App",
    "description": "This is a test description with more than fifty characters to meet the minimum requirement for validation.",
    "painPoint": "This is a test pain point with more than fifty characters to meet the minimum requirement for validation tests.",
    "solution": "This is a test solution with more than fifty characters to meet the minimum requirement for validation testing."
  }'
```

**Test validation error (app name too short):**

```bash
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "appName": "AB",
    "description": "Description...",
    "painPoint": "Pain point...",
    "solution": "Solution..."
  }'
```

**Test rate limiting:**

```bash
# Send 11 requests rapidly
for i in {1..11}; do
  curl -X POST http://localhost:3000/api/generate \
    -H "Content-Type: application/json" \
    -d '{...}' &
done
```

### Automated Testing (Jest)

```typescript
import { POST } from '@/app/api/generate/route';

describe('POST /api/generate', () => {
  it('should generate PRD for valid input', async () => {
    const request = new Request('http://localhost:3000/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appName: 'Test App',
        description: 'A'.repeat(60),
        painPoint: 'B'.repeat(60),
        solution: 'C'.repeat(60),
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.prd).toBeDefined();
    expect(typeof data.prd).toBe('string');
  });

  it('should return 400 for invalid input', async () => {
    const request = new Request('http://localhost:3000/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appName: 'AB', // Too short
        description: 'A'.repeat(60),
        painPoint: 'B'.repeat(60),
        solution: 'C'.repeat(60),
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toContain('Minimum 3 characters');
  });
});
```

---

## Changelog

### Version 1.0 (October 8, 2025)

**Initial Release:**
- POST /api/generate endpoint
- Rate limiting (10 req/15min per IP)
- Input validation and sanitization
- Security headers
- Error handling
- Placeholder PRD generator (Claude API integration pending)

**Pending:**
- Claude API integration (replace placeholder)
- Authentication (Phase 2)
- Additional endpoints (history, templates, etc.)

---

## Support

**Documentation:**
- [README.md](../README.md) - Project overview and setup
- [DEPLOYMENT.md](DEPLOYMENT.md) - Docker deployment guide
- [Security-Audit-Report.md](Security-Audit-Report.md) - Security audit and hardening
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Common issues and solutions

**Issues:** Report bugs or feature requests via GitHub Issues

**Product Owner:** Travis Sutphin

---

**Last Updated:** October 8, 2025
**Version:** 1.0
**Maintained by:** [Codey] - Technical Program Manager
