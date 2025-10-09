# Icons

## Purpose
Small, reusable icon files for UI elements (buttons, navigation, status indicators).

## Best Practices

- **Format**: SVG strongly preferred (scalable, small file size)
- **Size**: 24x24px or 32x32px viewBox standard
- **Color**: Use `currentColor` for flexible theming
- **Naming**: `icon-[name].svg` (e.g., `icon-menu.svg`, `icon-close.svg`)
- **Optimization**: Run through SVGO or similar tool

## Example Files
```
icon-menu.svg
icon-close.svg
icon-check.svg
icon-arrow-right.svg
icon-settings.svg
icon-user.svg
```

## Usage in Code
```typescript
// Standard img tag
<img src="/images/icons/icon-check.svg" alt="Check" className="w-6 h-6" />

// As background
<div className="w-6 h-6 bg-[url('/images/icons/icon-menu.svg')]" />

// Inline SVG (best for color control)
import CheckIcon from '@/public/images/icons/icon-check.svg';
<CheckIcon className="w-6 h-6 text-crimson" />
```

---
**Maintained by:** [Aesthetica]
