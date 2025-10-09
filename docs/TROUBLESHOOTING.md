# Troubleshooting Guide

**Version:** 1.0
**Last Updated:** October 8, 2025
**Application:** PRD Generator (RapidPRD)

---

## Table of Contents

1. [Development Server Issues](#1-development-server-issues)
2. [Build Errors](#2-build-errors)
3. [TypeScript Errors](#3-typescript-errors)
4. [ESLint Errors](#4-eslint-errors)
5. [API Errors](#5-api-errors)
6. [Docker Issues](#6-docker-issues)
7. [Environment Variable Issues](#7-environment-variable-issues)
8. [Performance Issues](#8-performance-issues)
9. [UI/UX Issues](#9-uiux-issues)
10. [Security Issues](#10-security-issues)

---

## 1. Development Server Issues

### Issue: Dev server won't start

**Symptoms:**
```
Error: Port 3000 is already in use
```

**Solution:**

**Option 1: Kill process on port 3000**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

**Option 2: Use different port**
```bash
# Edit package.json
"dev": "next dev -p 3001"

# Or run directly
npm run dev -- -p 3001
```

---

### Issue: Dev server crashes on start

**Symptoms:**
```
Error: Cannot find module 'next'
```

**Solution:**

**1. Reinstall dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**2. Clear Next.js cache:**
```bash
rm -rf .next
npm run dev
```

**3. Check Node version:**
```bash
node --version
# Should be 18+ or 20+
```

**4. Update Node if needed:**
```bash
# Using nvm
nvm install 20
nvm use 20
```

---

### Issue: Hot reload not working

**Symptoms:**
- Changes to files don't trigger page refresh
- Have to manually refresh browser

**Solution:**

**1. Check file watcher limits (Linux):**
```bash
# Increase inotify watchers
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

**2. Clear .next directory:**
```bash
rm -rf .next
npm run dev
```

**3. Check file permissions:**
```bash
# Ensure files are readable
chmod -R 755 .
```

---

## 2. Build Errors

### Issue: Build fails with memory error

**Symptoms:**
```
FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
```

**Solution:**

**Increase Node memory:**
```bash
# Edit package.json
"build": "NODE_OPTIONS='--max_old_space_size=4096' next build"

# Windows
"build": "set NODE_OPTIONS=--max_old_space_size=4096 && next build"
```

---

### Issue: Build succeeds but app crashes on start

**Symptoms:**
```
Error: NEXT_NOT_FOUND
```

**Solution:**

**1. Check next.config.mjs:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

**2. Rebuild:**
```bash
rm -rf .next
npm run build
```

---

### Issue: Build fails with "Module not found"

**Symptoms:**
```
Error: Cannot find module '@/components/...'
```

**Solution:**

**1. Check tsconfig.json paths:**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**2. Reinstall dependencies:**
```bash
npm install
```

---

## 3. TypeScript Errors

### Issue: TypeScript errors in IDE but build succeeds

**Symptoms:**
- Red squiggly lines in VS Code
- `npm run type-check` shows errors
- `npm run build` succeeds

**Solution:**

**1. Restart TypeScript server (VS Code):**
- Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
- Type "TypeScript: Restart TS Server"
- Press Enter

**2. Clear TypeScript cache:**
```bash
rm -rf node_modules/.cache
rm tsconfig.tsbuildinfo
npm run type-check
```

---

### Issue: "Cannot find name" errors

**Symptoms:**
```
Cannot find name 'React'
Cannot find name 'NextRequest'
```

**Solution:**

**1. Install type definitions:**
```bash
npm install --save-dev @types/react @types/react-dom @types/node
```

**2. Check tsconfig.json includes:**
```json
{
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]
}
```

---

## 4. ESLint Errors

### Issue: ESLint errors prevent build

**Symptoms:**
```
Error: ESLint: 'variable' is assigned a value but never used
```

**Solution:**

**Option 1: Fix the code**
```typescript
// Remove unused variables
- const unused = 'value';
+ // Removed unused variable
```

**Option 2: Disable rule temporarily** (not recommended)
```javascript
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unused = 'value';
```

**Option 3: Update .eslintrc.json:**
```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn"
  }
}
```

---

## 5. API Errors

### Issue: API returns 429 (Rate Limit Exceeded)

**Symptoms:**
```json
{
  "error": "Rate limit exceeded. Please try again later.",
  "resetTime": "2025-10-08T15:30:00.000Z"
}
```

**Solution:**

**1. Wait for rate limit to reset:**
- Check `resetTime` in response
- Wait until that time
- Retry request

**2. For development, increase rate limit:**
```typescript
// app/api/generate/route.ts
const rateLimit = checkRateLimit(clientIP, 100, 15 * 60 * 1000); // 100 requests
```

**3. Clear rate limit storage (development only):**
- Restart dev server (clears in-memory rate limit store)

---

### Issue: API returns 400 (Validation Error)

**Symptoms:**
```json
{
  "error": "App Name: Minimum 3 characters required"
}
```

**Solution:**

**Check input meets requirements:**
- **App Name:** 3-50 characters
- **Description:** 50-500 characters
- **Pain Point:** 50-500 characters
- **Solution:** 50-500 characters

**Example valid input:**
```json
{
  "appName": "TaskMaster",
  "description": "A modern task management application designed for remote teams to collaborate efficiently and track project progress.",
  "painPoint": "Remote teams struggle with scattered task management across multiple tools, leading to missed deadlines and communication issues.",
  "solution": "TaskMaster provides a unified platform with real-time collaboration, automated reminders, and visual progress tracking."
}
```

---

### Issue: API returns 500 (Internal Server Error)

**Symptoms:**
```json
{
  "error": "Failed to generate PRD"
}
```

**Solution:**

**1. Check server logs:**
```bash
# Development
npm run dev
# Check console for error stack trace
```

**2. Check environment variables:**
```bash
# Verify .env exists
cat .env

# Check ANTHROPIC_API_KEY is set
echo $ANTHROPIC_API_KEY
```

**3. Check API route file:**
```bash
# Verify file exists
ls app/api/generate/route.ts
```

**4. Restart development server:**
```bash
# Ctrl+C to stop
npm run dev
```

---

### Issue: CORS errors when calling API from external domain

**Symptoms:**
```
Access to fetch at 'https://your-domain.com/api/generate' from origin 'https://external.com' has been blocked by CORS policy
```

**Solution:**

**Add CORS headers (production only):**

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add CORS headers for production
  if (process.env.NODE_ENV === 'production') {
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
    const origin = request.headers.get('origin');

    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'POST');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    }
  }

  return response;
}
```

**Update .env:**
```env
ALLOWED_ORIGINS=https://trusted-domain.com,https://another-domain.com
```

---

## 6. Docker Issues

### Issue: Docker build fails

**Symptoms:**
```
ERROR: failed to solve: process "/bin/sh -c npm ci" did not complete successfully
```

**Solution:**

**1. Check Docker is running:**
```bash
docker ps
```

**2. Clear Docker cache:**
```bash
docker system prune -a
docker build --no-cache -t rapidprd-app .
```

**3. Check .dockerignore:**
```bash
cat .dockerignore
# Ensure node_modules is excluded
```

---

### Issue: Docker container starts but crashes immediately

**Symptoms:**
```
docker ps  # Container not listed
docker ps -a  # Shows "Exited (1)"
```

**Solution:**

**1. Check logs:**
```bash
docker logs rapidprd-prod
```

**2. Check environment variables:**
```bash
# Verify .env file exists
ls -la .env

# Check container env vars
docker inspect rapidprd-prod | grep -A 10 "Env"
```

**3. Run container interactively:**
```bash
docker run -it --rm rapidprd-app:latest sh
# Inside container:
node server.js
# Check error output
```

---

### Issue: Docker container runs but can't access on localhost:3000

**Symptoms:**
- `docker ps` shows container running
- Browser shows "Can't connect to localhost:3000"

**Solution:**

**1. Check port mapping:**
```bash
docker ps
# Verify PORTS column shows "0.0.0.0:3000->3000/tcp"
```

**2. Ensure port is exposed:**
```bash
# Stop existing container
docker stop rapidprd-prod
docker rm rapidprd-prod

# Run with correct port mapping
docker run -d --name rapidprd-prod -p 3000:3000 rapidprd-app:latest
```

**3. Check if port 3000 is in use:**
```bash
# Windows
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000
```

---

### Issue: Docker Compose fails to start

**Symptoms:**
```
ERROR: for prod  Cannot start service prod: port is already allocated
```

**Solution:**

**1. Stop existing containers:**
```bash
docker-compose down
```

**2. Remove containers manually:**
```bash
docker rm -f rapidprd-prod rapidprd-dev
```

**3. Change port in docker-compose.yml:**
```yaml
services:
  prod:
    ports:
      - "3001:3000"  # Use different host port
```

---

## 7. Environment Variable Issues

### Issue: "Missing required environment variable" error

**Symptoms:**
```
Error: Missing required environment variable: ANTHROPIC_API_KEY
```

**Solution:**

**1. Create .env file:**
```bash
cp .env.example .env
```

**2. Add API key:**
```env
ANTHROPIC_API_KEY=your_actual_api_key_here
```

**3. Restart server:**
```bash
# Development
npm run dev

# Docker
docker-compose restart prod
```

---

### Issue: Environment variables not loaded

**Symptoms:**
- `.env` file exists
- Values are undefined in application

**Solution:**

**1. Check .env file location:**
```bash
# Must be in project root
ls -la .env
```

**2. Check .env file format:**
```env
# ✅ Correct
ANTHROPIC_API_KEY=sk-ant-abc123

# ❌ Wrong (no spaces around =)
ANTHROPIC_API_KEY = sk-ant-abc123
```

**3. Restart server:**
```bash
# Env vars are loaded on server start
npm run dev
```

---

## 8. Performance Issues

### Issue: Slow page load times

**Symptoms:**
- Initial page load >3 seconds
- Slow navigation between pages

**Solution:**

**1. Check bundle size:**
```bash
npm run build
# Review output for large bundles
```

**2. Analyze bundle:**
```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Run analysis
ANALYZE=true npm run build
```

**3. Optimize images:**
- Use Next.js Image component
- Serve WebP format
- Add width/height attributes

---

### Issue: API requests are slow

**Symptoms:**
- PRD generation takes >60 seconds

**Solution:**

**1. Check Claude API response time:**
```typescript
// Add logging
const startTime = Date.now();
const prd = await generatePRDWithClaude(data);
console.log(`Claude API took ${Date.now() - startTime}ms`);
```

**2. Optimize prompt:**
- Reduce prompt length
- Be more specific about requirements

**3. Check network:**
- Verify stable internet connection
- Check firewall/proxy settings

---

## 9. UI/UX Issues

### Issue: Dark theme not applying

**Symptoms:**
- Pages show light background
- Colors don't match design system

**Solution:**

**1. Check Tailwind config:**
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#000000',
        crimson: '#89023e',
        // ... other colors
      },
    },
  },
};
```

**2. Clear Tailwind cache:**
```bash
rm -rf .next
npm run dev
```

**3. Check CSS import:**
```typescript
// app/layout.tsx
import './globals.css';
```

---

### Issue: Mobile navigation not showing

**Symptoms:**
- Bottom navigation missing on mobile
- Desktop menu showing on mobile

**Solution:**

**1. Check responsive breakpoints:**
```typescript
// components/Navigation/MobileNav.tsx
className="sm:hidden"  // Hidden on ≥640px

// components/Navigation/DesktopNav.tsx
className="hidden sm:block"  // Shown on ≥640px
```

**2. Test in responsive mode:**
- Open browser DevTools (F12)
- Click device toolbar (Ctrl+Shift+M)
- Select mobile device (iPhone SE)

---

### Issue: Form validation not working

**Symptoms:**
- Can submit form with invalid data
- Character counter not updating

**Solution:**

**1. Check state management:**
```typescript
// components/Forms/PRDForm.tsx
const [formData, setFormData] = useState({...});
const [touched, setTouched] = useState({...});
```

**2. Check event handlers:**
```typescript
onChange={(e) => setFormData({...formData, appName: e.target.value})}
onBlur={() => setTouched({...touched, appName: true})}
```

**3. Check validation logic:**
```typescript
const isValid =
  formData.appName.length >= 3 &&
  formData.description.length >= 50 &&
  // ... other validations
```

---

## 10. Security Issues

### Issue: Security headers not present

**Symptoms:**
- Browser security warnings
- Missing CSP, X-Frame-Options headers

**Solution:**

**1. Check middleware.ts exists:**
```bash
ls middleware.ts
```

**2. Verify middleware config:**
```typescript
export const config = {
  matcher: '/:path*',  // Apply to all routes
};
```

**3. Test headers:**
```bash
curl -I http://localhost:3000
# Should see X-XSS-Protection, X-Frame-Options, etc.
```

---

### Issue: Rate limiting not working

**Symptoms:**
- Can send unlimited requests
- No 429 responses

**Solution:**

**1. Check rate limit implementation:**
```typescript
// app/api/generate/route.ts
const rateLimit = checkRateLimit(clientIP, 10, 15 * 60 * 1000);
```

**2. Verify IP extraction:**
```typescript
const clientIP = getClientIP(request);
console.log('Client IP:', clientIP);
// Should show actual IP, not "unknown"
```

**3. Test rate limiting:**
```bash
# Send 11 requests rapidly
for i in {1..11}; do curl -X POST http://localhost:3000/api/generate -d '{...}'; done
# Should get 429 on 11th request
```

---

### Issue: XSS vulnerability

**Symptoms:**
- User input contains HTML tags
- Script execution in browser

**Solution:**

**1. Verify sanitization:**
```typescript
// lib/security.ts
export function sanitizeInput(input: string): string {
  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');
  // Remove scripts
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  return sanitized.trim();
}
```

**2. Check server-side validation:**
```typescript
// app/api/generate/route.ts
const sanitizedData = {
  appName: appNameValidation.sanitized,
  // ... use sanitized values
};
```

---

## Common Error Messages

| Error | Meaning | Solution |
|-------|---------|----------|
| `EADDRINUSE` | Port already in use | Kill process on port or use different port |
| `MODULE_NOT_FOUND` | Missing dependency | Run `npm install` |
| `NEXT_NOT_FOUND` | Missing page/route | Check file exists in correct location |
| `ENOENT` | File not found | Check file path is correct |
| `CORS policy` | Cross-origin request blocked | Add CORS headers or proxy request |
| `heap out of memory` | Not enough memory | Increase Node memory limit |
| `Permission denied` | File permission issue | Check file permissions (`chmod`) |

---

## Getting Help

**Before asking for help, please:**

1. **Check logs:**
   ```bash
   # Development server
   npm run dev

   # Docker container
   docker logs rapidprd-prod
   ```

2. **Run diagnostics:**
   ```bash
   # TypeScript check
   npm run type-check

   # ESLint check
   npm run lint

   # Build check
   npm run build
   ```

3. **Verify environment:**
   ```bash
   node --version  # Should be 18+ or 20+
   npm --version   # Should be 9+
   docker --version  # Should be 28.4.0+
   ```

**Resources:**
- [README.md](../README.md) - Project setup and overview
- [API.md](API.md) - API documentation
- [DEPLOYMENT.md](DEPLOYMENT.md) - Docker deployment guide
- [Security-Audit-Report.md](Security-Audit-Report.md) - Security documentation

**Report Issues:**
- GitHub Issues: https://github.com/travissutphin/rapidprd.app/issues
- Product Owner: Travis Sutphin

---

## Quick Reference

### Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server
npm run type-check       # Check TypeScript errors
npm run lint             # Check ESLint errors

# Docker
docker build -t rapidprd-app .           # Build image
docker run -p 3000:3000 rapidprd-app     # Run container
docker-compose up prod                    # Start with Compose
docker-compose down                       # Stop all services
docker logs rapidprd-prod                # View logs

# Cleanup
rm -rf node_modules package-lock.json    # Clean dependencies
rm -rf .next                              # Clean Next.js cache
docker system prune -a                    # Clean Docker cache
```

### File Locations

| File | Purpose | Location |
|------|---------|----------|
| Environment variables | Configuration | `.env` |
| TypeScript config | TS settings | `tsconfig.json` |
| Next.js config | Build settings | `next.config.mjs` |
| Tailwind config | Styling | `tailwind.config.ts` |
| API routes | Backend endpoints | `app/api/*/route.ts` |
| Security utilities | Validation/sanitization | `lib/security.ts` |
| Middleware | Security headers | `middleware.ts` |

---

**Last Updated:** October 8, 2025
**Version:** 1.0
**Maintained by:** [Codey] - Technical Program Manager
