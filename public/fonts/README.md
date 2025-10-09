# Fonts Directory

## Purpose

Store custom web fonts here if not using CDN delivery.

**Current Font Strategy:** Inter font loaded from Google Fonts CDN (see `app/layout.tsx`)

## When to Use This Directory

Only add fonts here if:
- You have a custom brand font not available on Google Fonts
- You need offline font support
- You require specific font licensing

## Usage

### Adding Custom Fonts

1. **Place font files here:**
   ```
   /public/fonts/
   ├── CustomFont-Regular.woff2
   ├── CustomFont-Bold.woff2
   └── CustomFont-Italic.woff2
   ```

2. **Define @font-face in `app/globals.css`:**
   ```css
   @font-face {
     font-family: 'CustomFont';
     src: url('/fonts/CustomFont-Regular.woff2') format('woff2');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   ```

3. **Update Tailwind config (`tailwind.config.ts`):**
   ```typescript
   fontFamily: {
     sans: ['CustomFont', 'system-ui', 'sans-serif'],
   }
   ```

## Font Formats (Priority Order)

1. **WOFF2** - Best compression, modern browser support
2. **WOFF** - Fallback for older browsers
3. **TTF/OTF** - Avoid if possible (larger file size)

## Performance Tips

- Use `font-display: swap` to prevent invisible text
- Preload critical fonts in `app/layout.tsx`:
  ```typescript
  <link rel="preload" href="/fonts/CustomFont-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
  ```
- Only load font weights you actually use

---

**Last Updated:** October 9, 2025
**Current Font:** Inter (Google Fonts CDN)
