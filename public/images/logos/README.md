# Logos

## Purpose
Brand logos and variations for headers, footers, and marketing materials.

## Best Practices

- **Format**: SVG preferred, PNG with transparency as fallback
- **Variations**: Include light/dark versions for different backgrounds
- **Size**: Multiple sizes for different contexts
- **Naming**: `logo-[variant]-[size].svg`
- **File Size**: Keep under 50 KB

## Example Files
```
logo.svg                    # Primary logo
logo-dark.svg              # For light backgrounds
logo-light.svg             # For dark backgrounds
logo-icon.svg              # Icon/favicon version
logo-horizontal.svg        # Horizontal layout
logo-stacked.svg           # Stacked layout
```

## Usage in Code
```typescript
import Image from 'next/image';

// Header logo
<Image
  src="/images/logos/logo-light.svg"
  alt="RapidPRD"
  width={150}
  height={40}
  priority
/>

// Favicon (also place in /public root as favicon.ico)
<link rel="icon" href="/images/logos/logo-icon.svg" />
```

## Brand Guidelines
- Maintain clear space around logo (minimum 20px)
- Never distort aspect ratio
- Use official color values (Crimson #89023e, Black #000000)

---
**Maintained by:** [Aesthetica]
