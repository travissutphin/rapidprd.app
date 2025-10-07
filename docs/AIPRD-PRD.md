# Product Requirements Document
## PRD Generator - Dark Theme Mobile-First Edition

**Version:** 3.0  
**Date:** October 7, 2025  
**Product Owner:** Travis Sutphin  
**Status:** Ready for Development

---

## Executive Summary

A mobile-first, dark-themed PRD (Product Requirements Document) generator with a sophisticated black background (#000000), deep crimson accents (#89023e), and white text (#FFFFFF). The application features an iOS-style bottom navigation on mobile devices and an elegant slide-out menu with opaque background on desktop, delivering a premium, professional user experience while generating comprehensive, AI-powered PRDs in seconds.

---

## Product Vision

Create the most elegant, mobile-first PRD generation tool with a distinctive dark aesthetic that professionals trust for creating developer-ready documentation. The design should feel premium, modern, and effortless to use on any device.

---

## Design System

### Color Palette

**Primary Colors:**
- **Background:** `#000000` (Pure Black)
- **Accent/Primary:** `#89023e` (Deep Crimson)
- **Text:** `#FFFFFF` (Pure White)

**Secondary Colors:**
- **Secondary Background:** `#1a1a1a` (Dark Gray) - For cards and elevated surfaces
- **Tertiary Background:** `#2a2a2a` (Medium Gray) - For input fields
- **Border/Divider:** `#3a3a3a` (Light Gray) - For separators
- **Accent Hover:** `#a00344` (Lighter Crimson) - For hover states
- **Success:** `#10b981` (Green) - For positive feedback
- **Error:** `#ef4444` (Red) - For errors
- **Warning:** `#f59e0b` (Amber) - For warnings

### Typography

**Primary Font:** 'Inter' (Sans-serif)
- Professional, clean, highly readable
- Excellent at all sizes
- Used by: Notion, Linear, GitHub

**Font Weights:**
- Regular: 400 (body text)
- Medium: 500 (emphasis)
- Semibold: 600 (subheadings)
- Bold: 700 (headings)

**Font Sizes (Mobile-First):**
- `text-xs`: 0.75rem (12px) - Helper text
- `text-sm`: 0.875rem (14px) - Body text small
- `text-base`: 1rem (16px) - Body text
- `text-lg`: 1.125rem (18px) - Large body
- `text-xl`: 1.25rem (20px) - H4
- `text-2xl`: 1.5rem (24px) - H3
- `text-3xl`: 1.875rem (30px) - H2
- `text-4xl`: 2.25rem (36px) - H1 Mobile
- `text-5xl`: 3rem (48px) - H1 Desktop

### Spacing System

**Mobile-First Scale:**
- `1`: 0.25rem (4px)
- `2`: 0.5rem (8px)
- `3`: 0.75rem (12px)
- `4`: 1rem (16px)
- `6`: 1.5rem (24px)
- `8`: 2rem (32px)
- `12`: 3rem (48px)
- `16`: 4rem (64px)

---

## Core Features

### Feature 1: Mobile-First Responsive Design

**Description:**  
Application designed mobile-first with seamless adaptation to tablet and desktop viewports.

**Breakpoints:**
- Mobile: `< 640px` (default)
- Tablet: `640px - 1024px` (sm, md)
- Desktop: `> 1024px` (lg, xl, 2xl)

**Mobile Experience (< 640px):**
- Full-screen app layout
- iOS-style bottom navigation bar
- Swipe gestures for navigation
- Touch-optimized controls (48px minimum touch targets)
- Vertical scrolling
- Single column layout

**Desktop Experience (> 1024px):**
- Slide-out navigation menu
- Opaque background overlay when menu is open
- Horizontal layout with sidebar
- Larger touch targets
- Multi-column layouts where appropriate

**Acceptance Criteria:**
- ✅ All UI elements usable on 320px width (iPhone SE)
- ✅ Touch targets minimum 44x44px (iOS guidelines)
- ✅ No horizontal scrolling on any device
- ✅ Smooth transitions between breakpoints
- ✅ Menu animations are 60fps

**Priority:** Must Have  
**Complexity:** Large (L)  
**Story Points:** 8

---

### Feature 2: iOS-Style Bottom Navigation (Mobile)

**Description:**  
Fixed bottom navigation bar on mobile devices mimicking iOS design patterns.

**Components:**

**Navigation Bar:**
- Position: Fixed bottom, full width
- Height: 80px (includes safe area padding)
- Background: `#1a1a1a` with blur effect
- Border-top: 1px solid `#3a3a3a`
- Safe area padding for iPhone notch/home indicator

**Navigation Items (4 items):**

1. **Home/Generate**
   - Icon: Document with plus icon
   - Label: "Generate"
   - Route: `/`

2. **History** (Phase 2)
   - Icon: Clock/History icon
   - Label: "History"
   - Route: `/history`

3. **Templates** (Phase 2)
   - Icon: Grid/Template icon
   - Label: "Templates"
   - Route: `/templates`

4. **Settings**
   - Icon: Gear/Settings icon
   - Label: "Settings"
   - Route: `/settings`

**Active State:**
- Icon color: `#89023e` (crimson)
- Label color: `#89023e`
- Small indicator above icon

**Inactive State:**
- Icon color: `#8a8a8a` (gray)
- Label color: `#8a8a8a`

**Interaction:**
- Tap to navigate
- Haptic feedback on iOS
- Smooth page transitions
- Active state persists

**Acceptance Criteria:**
- ✅ Fixed to bottom on scroll
- ✅ Works with iOS safe area
- ✅ Smooth transitions between tabs
- ✅ Active state clearly visible
- ✅ Touch targets 48px minimum
- ✅ Blur effect on background

**Priority:** Must Have  
**Complexity:** Medium (M)  
**Story Points:** 5

---

### Feature 3: Slide-Out Menu with Opaque Background (Desktop)

**Description:**  
Elegant slide-out navigation menu for desktop with opaque overlay.

**Components:**

**Menu Trigger:**
- Position: Top-left corner
- Icon: Hamburger menu (3 lines)
- Size: 48x48px
- Color: `#FFFFFF`
- Hover: `#89023e`

**Opaque Overlay:**
- Background: `rgba(0, 0, 0, 0.8)` (80% black)
- Full viewport coverage
- Click to close menu
- Smooth fade-in/out (300ms)
- Backdrop blur: 8px

**Slide-Out Menu:**
- Width: 320px
- Background: `#1a1a1a`
- Border-right: 1px solid `#3a3a3a`
- Slide animation from left (300ms ease-out)
- Shadow: Large drop shadow for depth

**Menu Structure:**

**Header Section:**
- Logo/App name
- User avatar (Phase 2)
- Close button (X icon, top-right)

**Navigation Items:**
- Generate PRD
- History (Phase 2)
- Templates (Phase 2)
- Settings
- Help/Documentation
- About

**Navigation Item Style:**
- Height: 56px
- Padding: 16px
- Hover background: `#2a2a2a`
- Active background: `#89023e` (20% opacity)
- Active left border: 3px solid `#89023e`
- Icon + Label layout
- Smooth transitions

**Footer Section:**
- Version number
- Links (Privacy, Terms)
- Social icons (Phase 2)

**Keyboard Navigation:**
- Escape key closes menu
- Tab navigation between items
- Enter/Space to select

**Acceptance Criteria:**
- ✅ Smooth slide animation (300ms)
- ✅ Overlay prevents interaction with content
- ✅ Click overlay to close
- ✅ Keyboard accessible
- ✅ Active state persists
- ✅ Menu remembers scroll position

**Priority:** Must Have  
**Complexity:** Medium (M)  
**Story Points:** 5

---

### Feature 4: Dark Theme Form with Crimson Accents

**Description:**  
Professional dark-themed form with crimson accent colors and high contrast for readability.

**Form Container:**
- Background: `#1a1a1a`
- Border: 1px solid `#3a3a3a`
- Border-radius: 16px
- Padding: 24px (mobile), 32px (desktop)
- Shadow: Subtle elevation

**Input Fields:**

**Style:**
- Background: `#2a2a2a`
- Border: 2px solid `#3a3a3a`
- Border-radius: 12px
- Padding: 16px
- Font-size: 16px (prevents zoom on iOS)
- Color: `#FFFFFF`
- Placeholder: `#6a6a6a`

**Focus State:**
- Border: 2px solid `#89023e`
- Ring: 4px `#89023e` (20% opacity)
- Outline: none

**Error State:**
- Border: 2px solid `#ef4444`
- Background: `#ef4444` (10% opacity)

**Success State:**
- Border: 2px solid `#10b981`
- Checkmark icon

**Labels:**
- Color: `#FFFFFF`
- Font-size: 14px
- Font-weight: 600
- Margin-bottom: 8px
- Required asterisk: `#89023e`

**Helper Text:**
- Color: `#8a8a8a`
- Font-size: 12px
- Margin-top: 6px

**Character Count:**
- Position: Bottom-right of field
- Default: `#8a8a8a`
- Approaching limit (>400/500): `#f59e0b`
- Over limit: `#ef4444`
- Valid: `#10b981`

**Error Messages:**
- Color: `#ef4444`
- Font-size: 12px
- Font-weight: 500
- Icon: Alert triangle

**Submit Button:**
- Background: Gradient (`#89023e` to darker crimson)
- Color: `#FFFFFF`
- Font-weight: 600
- Height: 56px
- Border-radius: 12px
- Shadow: 0 4px 12px `#89023e` (30% opacity)
- Hover: Lift effect, brighter gradient
- Active: Scale 98%
- Disabled: `#3a3a3a` background, `#6a6a6a` text

**Loading State:**
- Spinner: Crimson animated circle
- Button text: "Generating Your PRD..."
- Button disabled
- Progress indicator

**Acceptance Criteria:**
- ✅ High contrast (WCAG AAA)
- ✅ No zoom on focus (iOS)
- ✅ Smooth transitions (200ms)
- ✅ Touch-friendly (48px targets)
- ✅ Real-time validation
- ✅ Clear error states
- ✅ Accessible labels

**Priority:** Must Have  
**Complexity:** Large (L)  
**Story Points:** 8

---

### Feature 5: Dark Theme PRD Display

**Description:**  
Beautiful, readable PRD display with dark background and professional typography.

**Container:**
- Background: `#1a1a1a`
- Border: 1px solid `#3a3a3a`
- Border-radius: 16px
- Padding: 32px (mobile), 48px (desktop)
- Max-width: 1200px
- Shadow: Elevation

**Typography Styles:**

**Headings:**
- H1: 36px (mobile), 48px (desktop), `#FFFFFF`, Bold
- H2: 30px (mobile), 36px (desktop), `#FFFFFF`, Bold
- H3: 24px (mobile), 28px (desktop), `#FFFFFF`, Semibold
- H4: 20px, `#FFFFFF`, Semibold
- Border-bottom for H1, H2: 2px solid `#3a3a3a`

**Body Text:**
- Font-size: 16px (mobile), 18px (desktop)
- Color: `#e0e0e0` (slightly dimmed white for body)
- Line-height: 1.7
- Paragraph spacing: 16px

**Lists:**
- Color: `#e0e0e0`
- Bullet color: `#89023e`
- Indent: 24px
- Spacing: 8px between items

**Code:**
- Inline code: Background `#2a2a2a`, Color `#89023e`, Padding 4px 8px, Border-radius 6px
- Code blocks: Background `#0a0a0a`, Color `#e0e0e0`, Padding 24px, Border-radius 12px, Border-left 4px solid `#89023e`

**Blockquotes:**
- Background: `#2a2a2a`
- Border-left: 4px solid `#89023e`
- Padding: 16px 24px
- Italic text
- Color: `#c0c0c0`

**Links:**
- Color: `#89023e`
- Underline on hover
- Visited: Lighter crimson

**Tables:**
- Header background: `#2a2a2a`
- Header text: `#FFFFFF`, Bold
- Row borders: 1px solid `#3a3a3a`
- Alternating rows: Subtle background difference
- Padding: 12px 16px

**Horizontal Rules:**
- Color: `#3a3a3a`
- Height: 2px
- Margin: 32px 0

**Sticky Action Bar:**
- Position: Sticky top (4px from top)
- Background: `#1a1a1a` with 95% opacity
- Backdrop blur: 12px
- Border: 1px solid `#3a3a3a`
- Border-radius: 12px
- Padding: 16px
- Shadow: Large

**Action Buttons:**

**Download Button:**
- Background: `#89023e`
- Color: `#FFFFFF`
- Icon: Download
- Hover: Lighter crimson
- Shadow: Crimson glow

**Copy Button:**
- Background: `#2a2a2a`
- Color: `#FFFFFF`
- Icon: Clipboard
- Hover: `#3a3a3a`
- Copied state: Green checkmark, "Copied!" text

**New PRD Button:**
- Background: Transparent
- Border: 2px solid `#3a3a3a`
- Color: `#FFFFFF`
- Icon: Plus
- Hover: Border `#89023e`

**Acceptance Criteria:**
- ✅ Readable on all screen sizes
- ✅ High contrast for accessibility
- ✅ Professional typography hierarchy
- ✅ Smooth scrolling
- ✅ Sticky actions always visible
- ✅ Print-friendly (if needed)

**Priority:** Must Have  
**Complexity:** Large (L)  
**Story Points:** 8

---

## Technical Architecture

### Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS (Dark mode configured)
- React (18.3+)
- Inter font (Google Fonts)

**Backend:**
- Next.js API Routes
- Anthropic Claude API

**Deployment:**
- Docker (Multi-stage build)
- Docker Compose

**No Dependencies for:**
- Form validation (native HTML5)
- State management (React useState)
- Animation libraries (CSS + Tailwind)

### TailwindCSS Configuration

```typescript
// tailwind.config.ts
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        crimson: {
          DEFAULT: '#89023e',
          light: '#a00344',
          dark: '#6d0131',
        },
        dark: {
          100: '#1a1a1a', // Cards
          200: '#2a2a2a', // Inputs
          300: '#3a3a3a', // Borders
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'crimson': '0 4px 12px rgba(137, 2, 62, 0.3)',
        'crimson-lg': '0 8px 24px rgba(137, 2, 62, 0.4)',
      },
    },
  },
}
```

### Component Structure

```
app/
├── layout.tsx                    # Root layout with Inter font
├── page.tsx                      # Main page
├── globals.css                   # Dark theme styles
└── api/generate/route.ts         # API endpoint

components/
├── Navigation/
│   ├── MobileNav.tsx            # iOS bottom nav
│   ├── DesktopNav.tsx           # Slide-out menu
│   └── MenuOverlay.tsx          # Opaque overlay
├── PRDForm.tsx                   # Dark form
└── PRDDisplay.tsx                # Dark display
```

---

## User Stories & Acceptance Criteria

### Epic 1: Dark Theme Mobile-First UI

**User Story 1.1: Mobile-First Dark Interface**  
**As a** mobile user  
**I want** a beautiful dark interface optimized for mobile  
**So that** I can use the app comfortably on my phone at any time  

**Acceptance Criteria:**
- Given I open the app on mobile
- When the page loads
- Then I see a black background (#000000)
- And white text (#FFFFFF) with high contrast
- And crimson accents (#89023e)
- And the interface is optimized for touch
- And all text is readable
- And the app feels premium and professional

**Priority:** Must Have  
**Complexity:** Large (L)  
**Story Points:** 8

---

**User Story 1.2: iOS-Style Bottom Navigation**  
**As a** mobile user  
**I want** an iOS-style navigation bar at the bottom  
**So that** I can easily navigate with my thumb  

**Acceptance Criteria:**
- Given I am on mobile (< 640px)
- When I scroll the page
- Then the bottom nav bar stays fixed
- And I see 4 navigation items
- And the active tab is highlighted in crimson
- And tapping an item navigates smoothly
- And the icons are crisp and clear
- And touch targets are minimum 48px

**Priority:** Must Have  
**Complexity:** Medium (M)  
**Story Points:** 5

---

**User Story 1.3: Desktop Slide-Out Menu**  
**As a** desktop user  
**I want** an elegant slide-out menu  
**So that** I can navigate without cluttering the interface  

**Acceptance Criteria:**
- Given I am on desktop (> 1024px)
- When I click the menu icon
- Then an opaque overlay appears
- And the menu slides in from the left
- And I can click the overlay to close
- And the menu shows all navigation items
- And animations are smooth (60fps)
- And I can use keyboard to navigate

**Priority:** Must Have  
**Complexity:** Medium (M)  
**Story Points:** 5

---

### Epic 2: Dark Form Experience

**User Story 2.1: High-Contrast Dark Form**  
**As a** user filling out the form  
**I want** a readable, high-contrast dark form  
**So that** I can input information comfortably  

**Acceptance Criteria:**
- Given I am on the form page
- When I see the input fields
- Then backgrounds are dark gray (#2a2a2a)
- And text is white (#FFFFFF)
- And labels are clear and bold
- And placeholders are visible but dimmed
- And focus states use crimson accents
- And character counts are visible
- And validation is color-coded

**Priority:** Must Have  
**Complexity:** Large (L)  
**Story Points:** 8

---

**User Story 2.2: Crimson Accent Interactions**  
**As a** user interacting with the form  
**I want** visual feedback with crimson accents  
**So that** I know the app is responding to my actions  

**Acceptance Criteria:**
- Given I interact with form elements
- When I focus an input
- Then border becomes crimson (#89023e)
- And a crimson glow appears
- When I hover the submit button
- Then it lifts with crimson shadow
- When I submit successfully
- Then success indicators use green
- When validation fails
- Then errors use red clearly

**Priority:** Must Have  
**Complexity:** Medium (M)  
**Story Points:** 5

---

### Epic 3: Dark PRD Display

**User Story 3.1: Professional Dark Document**  
**As a** user viewing the generated PRD  
**I want** a professionally formatted dark document  
**So that** it's easy to read and looks premium  

**Acceptance Criteria:**
- Given my PRD has been generated
- When I view the document
- Then background is dark (#1a1a1a)
- And text is highly readable
- And headings have clear hierarchy
- And code blocks are well formatted
- And tables are easy to scan
- And the document feels professional

**Priority:** Must Have  
**Complexity:** Large (L)  
**Story Points:** 8

---

**User Story 3.2: Sticky Actions on Dark Background**  
**As a** user reviewing a long PRD  
**I want** actions to stay visible while scrolling  
**So that** I can download or copy at any time  

**Acceptance Criteria:**
- Given I am viewing a PRD
- When I scroll down
- Then the action bar stays at the top
- And has a dark semi-transparent background
- And buttons remain visible and accessible
- And download button is crimson
- And copy button provides feedback
- And actions work on mobile and desktop

**Priority:** Must Have  
**Complexity:** Small (S)  
**Story Points:** 3

---

## Responsive Breakpoints & Behavior

### Mobile (< 640px)

**Layout:**
- Single column
- Full-width elements
- Vertical stacking
- Bottom navigation (80px)
- Content padding: 16px

**Typography:**
- Base: 16px (prevents zoom)
- H1: 36px
- H2: 30px
- Line-height: 1.6

**Touch Targets:**
- Minimum: 48x48px
- Spacing: 8px between targets
- No hover states

**Navigation:**
- iOS-style bottom bar
- 4 visible items
- Fixed position

### Tablet (640px - 1024px)

**Layout:**
- Flexible columns
- Larger padding: 24px
- Bottom nav persists
- Or optional: Top nav appears

**Typography:**
- Base: 16px
- H1: 42px
- H2: 32px

**Touch Targets:**
- Same as mobile (48x48px)
- Hover states optional

### Desktop (> 1024px)

**Layout:**
- Multi-column where appropriate
- Sidebar navigation (slide-out)
- Content max-width: 1200px
- Padding: 32px-48px

**Typography:**
- Base: 18px
- H1: 48px
- H2: 36px
- Line-height: 1.7

**Interactions:**
- Hover states on all interactive elements
- Cursor pointers
- Keyboard navigation
- Tooltips

---

## Animation & Transitions

### Principles

**Speed:**
- Micro-interactions: 150ms
- Standard transitions: 200-300ms
- Page transitions: 400ms
- Menu animations: 300ms

**Easing:**
- Default: `ease-out`
- Bounce: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- Smooth: `cubic-bezier(0.4, 0.0, 0.2, 1)`

### Specific Animations

**Menu Slide-In:**
```css
transform: translateX(-320px) -> translateX(0)
transition: 300ms ease-out
```

**Overlay Fade:**
```css
opacity: 0 -> 0.8
transition: 300ms ease-out
backdrop-filter: blur(8px)
```

**Button Hover:**
```css
transform: translateY(-2px)
box-shadow: 0 8px 24px crimson
transition: 200ms ease-out
```

**Focus Ring:**
```css
ring: 4px crimson (20% opacity)
transition: 150ms ease-out
```

**Loading Spinner:**
```css
animation: spin 1s linear infinite
color: crimson
```

---

## Accessibility Requirements

### WCAG Compliance

**Level:** AA (minimum), AAA (target)

**Color Contrast:**
- White on Black: 21:1 (AAA)
- White on #1a1a1a: 15.6:1 (AAA)
- Crimson on Black: 5.2:1 (AA Large)
- Crimson on #1a1a1a: 3.6:1 (AA Large)

**Keyboard Navigation:**
- All interactive elements keyboard accessible
- Tab order logical
- Focus indicators visible (crimson ring)
- Escape closes modals/menus
- Enter/Space activates buttons

**Screen Readers:**
- Semantic HTML
- ARIA labels where needed
- Alt text for icons
- Role attributes
- Live regions for dynamic content

**Touch Accessibility:**
- Minimum 44x44px (iOS)
- Adequate spacing (8px minimum)
- No accidental touches
- Clear focus states

**Motion:**
- Respect `prefers-reduced-motion`
- Disable animations if requested
- Provide alternative navigation

---

## Performance Requirements

### Metrics

**Mobile (3G):**
- First Paint: < 2 seconds
- Time to Interactive: < 4 seconds
- Total Page Weight: < 500KB

**Desktop (Broadband):**
- First Paint: < 1 second
- Time to Interactive: < 2 seconds

**API:**
- PRD Generation: 30-45 seconds (AI processing)
- API Response: < 200ms (excluding AI)

### Optimization

**Images:**
- None required (icon fonts or inline SVG)
- Logo: SVG format

**Fonts:**
- Inter font: Load optimized subset
- Font-display: swap
- Preload critical fonts

**JavaScript:**
- Code splitting
- Lazy loading
- Tree shaking
- Minification

**CSS:**
- Tailwind purge
- Critical CSS inline
- Defer non-critical

---

## Security & Privacy

### Security Measures

✅ **Input Validation:**
- Client-side (HTML5)
- Server-side (API route)
- Sanitize all inputs
- No XSS vulnerabilities

✅ **API Security:**
- Environment variables for keys
- No keys in client code
- Rate limiting (production)
- HTTPS only

✅ **Docker Security:**
- Non-root user
- Read-only filesystem (where possible)
- Minimal image
- Security updates

### Privacy

✅ **Data Handling:**
- No persistent storage (MVP)
- No cookies required
- No tracking by default
- Privacy-first approach

✅ **Analytics (Optional):**
- Anonymous usage stats only
- No PII collected
- User opt-in
- GDPR compliant

---

## Technical Implementation Details

### Dark Mode Implementation

```css
/* globals.css */
:root {
  --bg-primary: #000000;
  --bg-secondary: #1a1a1a;
  --bg-tertiary: #2a2a2a;
  --border: #3a3a3a;
  --text-primary: #FFFFFF;
  --text-secondary: #e0e0e0;
  --text-tertiary: #8a8a8a;
  --accent: #89023e;
  --accent-hover: #a00344;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

### Mobile Navigation Component

```typescript
// components/Navigation/MobileNav.tsx
export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 
                    bg-dark-100 border-t border-dark-300
                    pb-safe">
      <div className="flex justify-around items-center h-20">
        <NavItem icon="document" label="Generate" active />
        <NavItem icon="clock" label="History" />
        <NavItem icon="grid" label="Templates" />
        <NavItem icon="gear" label="Settings" />
      </div>
    </nav>
  );
}
```

### Desktop Menu Component

```typescript
// components/Navigation/DesktopNav.tsx
export default function DesktopNav({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 
                     backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      
      {/* Menu */}
      <aside className={`fixed left-0 top-0 bottom-0 w-80
                         bg-dark-100 border-r border-dark-300
                         transform transition-transform duration-300
                         z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Menu content */}
      </aside>
    </>
  );
}
```

### Form Input Component

```typescript
// components/DarkInput.tsx
export function DarkInput({ label, error, value, onChange, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-white">
        {label} <span className="text-crimson">*</span>
      </label>
      <input
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-4 bg-dark-200 border-2 
                   rounded-xl text-white placeholder-gray-500
                   transition-all duration-200
                   focus:border-crimson focus:ring-4 
                   focus:ring-crimson focus:ring-opacity-20
                   ${error ? 'border-red-500' : 'border-dark-300'}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
}
```

---

## MVP Scope

### Phase 1: Core Functionality (Weeks 1-3)

**Must Have:**
- ✅ Dark theme UI (black background, crimson accents)
- ✅ Mobile-first responsive design
- ✅ iOS-style bottom nav (mobile)
- ✅ Slide-out menu (desktop)
- ✅ 4-field dark form
- ✅ AI PRD generation
- ✅ Dark PRD display
- ✅ Download markdown
- ✅ Copy to clipboard
- ✅ Inter font implementation

**Out of Scope:**
- User accounts
- PRD history
- Templates library
- PDF export
- Collaboration

---

## Design Mockup Descriptions

### Mobile Home Screen

**Layout:**
- Black background
- Top: App logo + hamburger menu (for future)
- Center: Hero section with crimson gradient text
- Form section: Dark gray card with inputs
- Bottom: iOS-style nav bar

**Colors:**
- Background: #000000
- Card: #1a1a1a
- Inputs: #2a2a2a
- Borders: #3a3a3a
- Text: #FFFFFF
- Accents: #89023e

### Desktop Home Screen

**Layout:**
- Black background
- Top-left: Menu icon (hamburger)
- Center: Wide layout with form
- Max-width: 1200px
- Centered content

**Menu (Open State):**
- Left sidebar: 320px width
- Dark gray background (#1a1a1a)
- Opaque overlay on right
- Menu items with crimson hover

### PRD Display (All Devices)

**Layout:**
- Dark container (#1a1a1a)
- Sticky action bar at top
- Formatted markdown content
- Professional typography
- Code blocks with crimson borders
- Tables with dark styling

---

## Success Metrics

### User Experience

**Target Metrics:**
- Mobile usability score: > 95/100
- Desktop usability score: > 98/100
- Accessibility score: > 90/100 (Lighthouse)
- Performance score: > 85/100 (mobile)

### Technical

**Target Metrics:**
- Page load (mobile): < 2s
- Page load (desktop): < 1s
- Menu animation: 60fps
- Smooth scrolling: 60fps
- Zero CLS (Cumulative Layout Shift)

### Business

**Target Metrics:**
- Mobile completion rate: > 75%
- Desktop completion rate: > 85%
- PRD generation success: > 95%
- User satisfaction: > 4.5/5

---

## Testing Requirements

### Visual Regression

✅ Test on devices:
- iPhone SE (320px)
- iPhone 14 Pro (390px)
- iPad (768px)
- Desktop (1920px)

✅ Test themes:
- Dark mode (default)
- High contrast
- Color blind modes

### Functional Testing

✅ Form:
- All fields validate correctly
- Character counts accurate
- Error states display properly
- Submit works on all devices

✅ Navigation:
- Mobile nav fixed correctly
- Desktop menu animates smoothly
- Keyboard navigation works
- Touch gestures work

✅ PRD Display:
- Markdown renders correctly
- Actions remain sticky
- Download works
- Copy works
- Print works (if needed)

### Performance Testing

✅ Load testing:
- 100 concurrent users
- API response times
- No memory leaks
- Smooth animations

### Accessibility Testing

✅ Tools:
- Lighthouse audit
- WAVE extension
- Screen reader testing
- Keyboard-only navigation

---

## Launch Checklist

### Pre-Launch

- [ ] All features complete
- [ ] Dark theme perfect on all devices
- [ ] Mobile nav works flawlessly
- [ ] Desktop menu smooth
- [ ] Form validation solid
- [ ] PRD display beautiful
- [ ] Performance optimized
- [ ] Accessibility verified
- [ ] Cross-browser tested
- [ ] Docker image built

### Launch

- [ ] Deploy Docker container
- [ ] Configure domain
- [ ] SSL certificate active
- [ ] Analytics configured (optional)
- [ ] Error monitoring active
- [ ] Documentation complete

### Post-Launch

- [ ] Monitor performance
- [ ] Collect user feedback
- [ ] Fix critical bugs
- [ ] Plan Phase 2 features

---

## Future Enhancements (Phase 2+)

### Phase 2 Features

- User accounts and authentication
- PRD history and management
- Template library
- PDF export
- Share PRDs via link

### Phase 3 Features

- Team collaboration
- Real-time editing
- Comments and feedback
- Version control
- Custom templates

### Phase 4 Features

- AI chat for refinement
- Visual diagrams
- Integration with PM tools
- White-label for agencies
- API for developers

---

## Appendix

### Color Palette Reference

| Element | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| Primary BG | Pure Black | #000000 | Main background |
| Secondary BG | Dark Gray | #1a1a1a | Cards, containers |
| Tertiary BG | Medium Gray | #2a2a2a | Input fields |
| Borders | Light Gray | #3a3a3a | Dividers, outlines |
| Primary Text | White | #FFFFFF | Headings, labels |
| Body Text | Off-White | #e0e0e0 | Paragraphs |
| Secondary Text | Gray | #8a8a8a | Helper text |
| Accent | Deep Crimson | #89023e | Primary actions |
| Accent Hover | Light Crimson | #a00344 | Hover states |
| Success | Green | #10b981 | Success states |
| Error | Red | #ef4444 | Error states |
| Warning | Amber | #f59e0b | Warning states |

### Typography Scale

| Element | Mobile | Desktop | Weight |
|---------|--------|---------|--------|
| H1 | 36px | 48px | Bold (700) |
| H2 | 30px | 36px | Bold (700) |
| H3 | 24px | 28px | Semibold (600) |
| H4 | 20px | 20px | Semibold (600) |
| Body | 16px | 18px | Regular (400) |
| Small | 14px | 14px | Regular (400) |
| Tiny | 12px | 12px | Regular (400) |

### Spacing Scale

| Name | Value | Usage |
|------|-------|-------|
| xs | 4px | Tiny gaps |
| sm | 8px | Small spacing |
| md | 16px | Default spacing |
| lg | 24px | Section spacing |
| xl | 32px | Large spacing |
| 2xl | 48px | Major sections |

### Component States

| State | Visual Treatment |
|-------|------------------|
| Default | Base colors, no effects |
| Hover | Lighter shade, subtle lift |
| Focus | Crimson ring, border change |
| Active | Slight scale down (98%) |
| Disabled | Gray colors, no interaction |
| Loading | Spinner, disabled state |
| Error | Red border, red text |
| Success | Green indicators |

---

## Glossary

**iOS-Style Navigation:** Bottom navigation bar mimicking iOS design patterns with large touch targets and icon + label layout.

**Opaque Overlay:** Semi-transparent layer that covers content behind a modal or menu, usually 70-90% opacity.

**Slide-Out Menu:** Navigation drawer that appears from the side of the screen with a sliding animation.

**Mobile-First:** Design approach starting with mobile layouts and progressively enhancing for larger screens.

**Touch Target:** The interactive area of a button or control, minimum 44x44px for iOS, 48x48px recommended.

**Crimson Accent:** Deep red/burgundy color (#89023e) used for primary actions and highlights.

**Safe Area:** The area of a mobile screen that isn't obscured by notches, rounded corners, or home indicators.

**Backdrop Blur:** CSS filter that blurs content behind an element, creating depth.

**Sticky Positioning:** CSS position that keeps an element visible during scroll within a container.

---

**Document Version:** 1.0  
**Created:** October 7, 2025  
**Status:** Ready for Development  

---

**Total Estimated Effort:** 40-50 story points (6-8 weeks)  
**Team:** 1-2 developers + 1 designer (or AI-assisted solo)  
**Priority:** All Phase 1 features are Must Have  

**This PRD is comprehensive, actionable, and ready to hand to developers or AI coding tools.**
