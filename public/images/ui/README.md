# UI Elements

## Purpose
Reusable UI components, backgrounds, patterns, and decorative elements.

## Best Practices

- **Format**: SVG for vectors, WebP/PNG for photos
- **Naming**: `[element]-[variant].extension`
- **Optimization**: Compress images before adding
- **Responsive**: Provide multiple sizes if needed (@1x, @2x)
- **Accessibility**: Ensure sufficient contrast for text overlays

## Example Files
```
hero-background.png
pattern-grid.svg
gradient-crimson.svg
button-glow.png
card-texture.png
divider-wave.svg
```

## Usage in Code
```typescript
// Background image
<div
  className="bg-cover bg-center"
  style={{ backgroundImage: "url('/images/ui/hero-background.png')" }}
>
  Content
</div>

// Next.js Image as background
<Image
  src="/images/ui/pattern-grid.svg"
  alt=""
  fill
  className="object-cover opacity-10"
/>

// SVG pattern overlay
<div className="relative">
  <img src="/images/ui/gradient-crimson.svg" className="absolute inset-0" />
  <div className="relative z-10">Content</div>
</div>
```

## Performance Tips
- Use CSS gradients/patterns instead of images when possible
- Lazy load below-the-fold images
- Consider using `<Image>` component for automatic optimization

---
**Maintained by:** [Aesthetica]
