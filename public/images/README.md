# Images Directory

## Structure

```
/public/images/
├── /design-files    # Design source files (Figma exports, mockups, wireframes)
├── /icons           # Icon files (SVG preferred for scalability)
├── /logos           # Brand logos and variations
└── /ui              # UI elements, buttons, backgrounds
```

## Usage Guidelines

### Referencing Images in Code

**Next.js Image Component (Recommended):**
```typescript
import Image from 'next/image';

<Image
  src="/images/logos/logo.svg"
  alt="Company Logo"
  width={200}
  height={50}
  priority // For above-the-fold images
/>
```

**Standard HTML:**
```html
<img src="/images/icons/check.svg" alt="Check icon" />
```

**CSS Background:**
```css
background-image: url('/images/ui/hero-bg.png');
```

### File Naming Conventions

- Use lowercase with hyphens: `logo-dark.svg`, `icon-check.svg`
- Be descriptive: `hero-background-dark.png` not `bg1.png`
- Include size/variant in name: `logo-sm.svg`, `logo-lg.svg`

### Optimization Tips

1. **SVG for icons and logos** - Scalable, small file size
2. **WebP/AVIF for photos** - Better compression than PNG/JPG
3. **Use Next.js Image component** - Automatic optimization
4. **Provide alt text** - Accessibility and SEO

### Image Specifications

| Type | Format | Max Size | Notes |
|------|--------|----------|-------|
| Icons | SVG | - | Preferred for scalability |
| Logos | SVG/PNG | < 50 KB | Transparent backgrounds |
| UI Elements | SVG/PNG | < 100 KB | Use CSS where possible |
| Photos/Mockups | WebP/PNG | < 500 KB | Compress before adding |

---

**Last Updated:** October 9, 2025
**Maintained by:** [Aesthetica] - Front-end Developer & UI/UX Designer
