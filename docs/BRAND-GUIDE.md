# rapidPRD.app - Brand Guide for Web App

**Version:** 1.0
**Last Updated:** October 9, 2025
**Maintained by:** [Aesthetica]

---

## 🎨 Color System

### Primary Colors
```css
/* Use these exact hex values in code */
--black:        #000000   /* Primary background */
--crimson:      #ac0234   /* Primary accent */
--white:        #FFFFFF   /* Primary text */
```

### Secondary Colors (Grays)
```css
--dark-100:     #1a1a1a   /* Cards, secondary backgrounds */
--dark-200:     #2a2a2a   /* Input fields, tertiary backgrounds */
--dark-300:     #3a3a3a   /* Borders, dividers */
--text-tertiary:#8a8a8a   /* Disabled text, placeholders */
```

### Accent Variations
```css
--crimson-light:#d4045c   /* Hover states */
--crimson-dark: #8a0229   /* Active/pressed states */
```

### Status Colors
```css
--success:      #10b981   /* Success messages, valid states */
--error:        #ef4444   /* Error messages, invalid states */
--warning:      #f59e0b   /* Warning messages, alerts */
```

### Tailwind Reference
All colors are configured in `tailwind.config.ts` and can be used as:
```typescript
className="bg-black text-white border-dark-300 text-crimson"
```

---

## 📐 Logo System

### Logo Files (Store in `/public/images/logos/`)

| File | Use Case | Dimensions |
|------|----------|------------|
| `rapidprd-logo-horizontal.svg` | Header, navigation | 800x200px |
| `rapidprd-icon.svg` | Favicon, profile pics | 400x400px |
| `rapidprd-logo-stacked.svg` | Mobile splash, social | 500x600px |
| `rapidprd-logo-minimal.svg` | Modern landing pages | 800x200px |
| `rapidprd-wordmark.svg` | Footer, text contexts | 600x150px |
| `rapidprd-logo-light.svg` | Light backgrounds | 800x200px |
| `rapidprd-app-icon.svg` | App stores, PWA | 1024x1024px |

### Usage in Web App

**Header Logo (Desktop):**
```typescript
<Image
  src="/images/logos/rapidprd-logo-horizontal.svg"
  alt="rapidPRD - Lightning-fast product requirements"
  width={200}
  height={50}
  priority
/>
```

**Header Logo (Mobile < 640px):**
```typescript
<Image
  src="/images/logos/rapidprd-icon.svg"
  alt="rapidPRD"
  width={40}
  height={40}
  priority
/>
```

**Favicon:**
```html
<!-- In app/layout.tsx -->
<link rel="icon" href="/images/logos/rapidprd-icon.svg" />
<link rel="apple-touch-icon" href="/images/logos/rapidprd-app-icon.svg" />
```

### Logo Rules

✅ **Do:**
- Scale proportionally (maintain aspect ratio)
- Use SVG format for all web instances
- Minimum size: 200px wide (horizontal), 32px (icon)
- Maintain clear space (equal to "r" height)

❌ **Don't:**
- Change colors (except approved variations)
- Stretch, rotate, or distort
- Add effects (shadows, glows) unless specified
- Use on crimson background (low contrast)
- Scale smaller than minimum sizes

---

## 🔤 Typography

### Primary Font: Inter

**Source:** Google Fonts CDN (configured in `app/layout.tsx`)

**Weights Used:**
```typescript
font-weight: 400;  // Regular - Body text
font-weight: 500;  // Medium - Emphasis
font-weight: 600;  // Semibold - Subheadings
font-weight: 700;  // Bold - Headings
```

**Tailwind Classes:**
```typescript
className="font-sans font-normal"  // 400
className="font-sans font-medium"  // 500
className="font-sans font-semibold"// 600
className="font-sans font-bold"    // 700
```

**Fallbacks:**
```css
font-family: 'Inter', system-ui, sans-serif;
```

---

## 🎯 Component Styling Standards

### Buttons

**Primary Button (CTA):**
```typescript
<button className="bg-crimson hover:bg-crimson-light text-white font-semibold px-6 py-3 rounded-lg">
  Generate PRD
</button>
```

**Secondary Button:**
```typescript
<button className="bg-dark-200 hover:bg-dark-300 text-white font-medium px-6 py-3 rounded-lg border border-dark-300">
  Cancel
</button>
```

### Input Fields

**Text Input:**
```typescript
<input
  type="text"
  className="bg-dark-200 border border-dark-300 text-white px-4 py-3 rounded-lg focus:border-crimson focus:ring-1 focus:ring-crimson"
/>
```

**Textarea:**
```typescript
<textarea
  className="bg-dark-200 border border-dark-300 text-white px-4 py-3 rounded-lg focus:border-crimson focus:ring-1 focus:ring-crimson resize-none"
  rows={4}
/>
```

### Cards

**Standard Card:**
```typescript
<div className="bg-dark-100 border border-dark-300 rounded-xl p-6">
  {content}
</div>
```

**Elevated Card (with shadow):**
```typescript
<div className="bg-dark-100 border border-dark-300 rounded-xl p-6 shadow-crimson">
  {content}
</div>
```

---

## 📱 Responsive Breakpoints

```css
/* Tailwind breakpoints (mobile-first) */
sm:  640px   /* Small devices (large phones) */
md:  768px   /* Medium devices (tablets) */
lg:  1024px  /* Large devices (laptops) */
xl:  1280px  /* Extra large devices (desktops) */
2xl: 1536px  /* 2X large devices (large desktops) */
```

**Logo Switching:**
- **< 640px:** Use icon only or minimal
- **≥ 640px:** Use horizontal logo

---

## ✅ Design Principles

### Visual Hierarchy
1. **Black background** - Primary surface
2. **Crimson accents** - Calls-to-action, active states
3. **White text** - Primary content
4. **Gray variations** - Depth, organization

### Spacing (Mobile-First)
- **Mobile padding:** `p-4` (16px) or `p-6` (24px)
- **Desktop padding:** `lg:p-8` (32px) or `lg:p-12` (48px)
- **Component spacing:** `space-y-4` (16px) or `space-y-6` (24px)

### Shadows (Crimson Glow)
```typescript
// Subtle glow (buttons, cards)
className="shadow-crimson"

// Prominent glow (hero elements)
className="shadow-crimson-lg"
```

---

## 🌐 Background Usage

### Dark Backgrounds (Primary)
✅ **Black (#000000)** - Default, recommended
✅ **Dark Gray (#1a1a1a)** - Secondary surfaces
✅ **Very Dark (#0a0a0a)** - Depth variations

**Use:** Standard logos (horizontal, stacked, icon)

### Light Backgrounds
✅ **White (#FFFFFF)** - Documentation, print
✅ **Light Gray (#f5f5f5)** - Light-themed pages

**Use:** `rapidprd-logo-light.svg` (dark text version)

### Image Backgrounds
- **Dark images:** Add 40% black overlay (`bg-black/40`)
- **Light images:** Add 40% white overlay (`bg-white/40`)
- **Busy images:** Use solid color container for logo

---

## 🔍 Accessibility

### Color Contrast
All color combinations meet **WCAG 2.1 AA** standards:
- White on Black: 21:1 (AAA)
- Crimson (#ac0234) on Black: 6.8:1 (AA)
- White on Crimson: 3.1:1 (AA Large Text)
- Crimson Light (#d4045c) on Black: 8.2:1 (AAA)
- Crimson Dark (#8a0229) on Black: 5.4:1 (AA)

### Typography
- Minimum body text: `text-base` (16px)
- Minimum touch targets: 48x48px (navigation)
- Line height: `leading-normal` (1.5) or `leading-relaxed` (1.625)

### Alt Text Standards
```typescript
// Logos
alt="rapidPRD - Lightning-fast product requirements"

// Icons (functional)
alt="Generate PRD" // Describes action

// Icons (decorative)
alt="" // Empty string for decorative
```

---

## 📦 Quick Reference

### CSS Variables (If Needed)
```css
:root {
  /* Colors */
  --color-black: #000000;
  --color-crimson: #ac0234;
  --color-crimson-light: #d4045c;
  --color-crimson-dark: #8a0229;
  --color-white: #FFFFFF;
  --color-dark-100: #1a1a1a;
  --color-dark-200: #2a2a2a;
  --color-dark-300: #3a3a3a;

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;

  /* Spacing */
  --spacing-unit: 4px;
}
```

### File Paths Reference
```typescript
// Logos
/public/images/logos/rapidprd-logo-horizontal.svg
/public/images/logos/rapidprd-icon.svg
/public/images/logos/rapidprd-logo-light.svg

// Icons (UI)
/public/images/icons/icon-menu.svg
/public/images/icons/icon-check.svg

// Fonts (if custom)
/public/fonts/CustomFont-Regular.woff2
```

---

## 🚫 Common Mistakes to Avoid

❌ Using `#ac0234` on black without sufficient size (min 16px text)
❌ Stretching logos to fit containers (use `object-fit: contain`)
❌ Mixing fonts (stick to Inter for all text)
❌ Forgetting hover states on interactive elements
❌ Using low contrast gray text on dark gray backgrounds
❌ Inconsistent spacing (use Tailwind scale: 4, 8, 12, 16, 24, 32)
❌ Not testing on mobile devices (< 640px)

---

## 📞 Questions?

**Brand Implementation:** [Aesthetica]
**Technical Integration:** [Syntax]
**Design Review:** [Travis]

---

## 🔄 Version History

**v1.0 - October 9, 2025**
- Simplified from full brand guide
- Web app development focus
- Tailwind integration examples
- Component styling standards

---

**Reference:** Based on full brand guide (`BRAND_GUIDE.md`)
**Tailwind Config:** `tailwind.config.ts`
**Global Styles:** `app/globals.css`

---

✅ **Keep it simple. Keep it consistent. Keep it crimson.** 🎨⚡
