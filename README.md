# PRD Generator - Dark Theme Mobile-First Edition

> **AI-powered Product Requirements Document generator with a premium dark interface**

Transform app ideas into comprehensive, developer-ready PRDs in seconds.

---

## 🎯 Project Overview

**Version:** 3.0
**Status:** Phase 1 Development
**Product Owner:** Travis Sutphin

A mobile-first, dark-themed PRD generator featuring:
- 🎨 Premium black (#000000) background with deep crimson (#89023e) accents
- 📱 iOS-style bottom navigation (mobile)
- 🖥️ Elegant slide-out menu (desktop)
- 🤖 AI-powered PRD generation via Claude API
- ⚡ Fast, simple, and professional

---

## 🚀 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS** (Dark mode configured)
- **React 18.3+**
- **Inter Font** (Google Fonts)

### Backend
- **Next.js API Routes**
- **Anthropic Claude API**

### Deployment
- **Docker** (Multi-stage build)
- **Docker Compose**

---

## 📋 Project Structure

```
/AIPRD
├── /app                     # Next.js 14 app directory
│   ├── layout.tsx           # Root layout with Inter font
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles with dark theme
│   ├── /history             # History page route
│   ├── /templates           # Templates page route
│   ├── /settings            # Settings page route
│   ├── /help                # Help & Documentation route
│   └── /about               # About page route
├── /docs                    # Project documentation
│   ├── AIPRD-PRD.md        # Product Requirements Document
│   ├── AIPRD-UserJourney.md # User flow and steps
│   └── kanban.html          # Development kanban board
├── /components              # React components
│   └── /Navigation          # Navigation components
│       ├── MobileNav.tsx    # iOS-style bottom nav (mobile)
│       └── DesktopNav.tsx   # Slide-out menu (desktop)
├── /lib                     # Security and utility functions
│   ├── security.ts          # Input sanitization and validation
│   ├── env.ts               # Environment variable validation
│   └── README.md            # Library documentation
├── middleware.ts            # Security headers for all routes
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration (standalone output)
├── tailwind.config.ts       # Tailwind CSS with dark theme
├── .eslintrc.json           # ESLint configuration
├── Dockerfile               # Multi-stage Docker build
├── docker-compose.yml       # Docker Compose (dev + prod)
├── .dockerignore            # Docker ignore rules
├── .gitignore               # Git ignore file
├── .env.example             # Environment variables template
└── README.md                # This file
```

---

## 🎨 Design System

### Color Palette (Configured in Tailwind)
| Element | Tailwind Class | Hex Code |
|---------|---------------|----------|
| Primary BG | `bg-black` | `#000000` |
| Secondary BG | `bg-dark-100` | `#1a1a1a` |
| Tertiary BG | `bg-dark-200` | `#2a2a2a` |
| Borders | `border-dark-300` | `#3a3a3a` |
| Primary Text | `text-white` / `text-text-primary` | `#FFFFFF` |
| Secondary Text | `text-text-secondary` | `#e0e0e0` |
| Tertiary Text | `text-text-tertiary` | `#8a8a8a` |
| Accent | `bg-crimson` / `text-crimson` | `#89023e` |
| Accent Hover | `hover:bg-crimson-light` | `#a00344` |
| Success | `text-success` / `bg-success` | `#10b981` |
| Error | `text-error` / `bg-error` | `#ef4444` |
| Warning | `text-warning` / `bg-warning` | `#f59e0b` |

### Typography
- **Font:** Inter (Sans-serif) - Loaded from Google Fonts
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Sizes:** Standard Tailwind scale (text-xs to text-5xl)

### Shadows
- **Crimson Glow:** `shadow-crimson` - Subtle accent shadow
- **Crimson Glow Large:** `shadow-crimson-lg` - Prominent accent shadow

---

## 📱 Components

### Navigation

#### Mobile Navigation

**iOS-Style Bottom Navigation** (`components/Navigation/MobileNav.tsx`)

Fixed bottom navigation bar for mobile devices (< 640px):

**Features:**
- Fixed bottom position with blur effect
- 4 navigation items: Generate, History, Templates, Settings
- Crimson active state highlighting
- Touch-optimized (48px minimum touch targets)
- Safe area padding for iPhone notch/home indicator
- Hidden on desktop (≥ 640px)

**Styling:**
- Background: `#1a1a1a` with 95% opacity + backdrop blur
- Border-top: 1px solid `#3a3a3a`
- Height: 80px (includes safe area)
- Active state: Crimson (#89023e)
- Inactive state: Tertiary text (#8a8a8a)

**Usage:**
```typescript
import MobileNav from '@/components/Navigation/MobileNav';

// Already included in app/layout.tsx
<MobileNav />
```

#### Desktop Navigation

**Slide-Out Menu with Overlay** (`components/Navigation/DesktopNav.tsx`)

Elegant slide-out navigation menu for desktop (≥ 640px):

**Features:**
- 320px slide-out menu from left
- Opaque overlay (80% black with backdrop blur)
- 300ms smooth slide animation
- 6 navigation items with icons
- Keyboard accessible (Escape to close)
- Desktop only (hidden on mobile)

**Menu Items:**
- Generate PRD, History, Templates, Settings, Help & Documentation, About

**Styling:**
- Menu: `#1a1a1a` background, 320px width
- Overlay: Black 80% opacity with backdrop blur
- Active state: Crimson background (20% opacity) with left border
- Trigger button: Top-left corner (fixed position)
- Animation: 300ms ease-in-out transform

**Keyboard Navigation:**
- Escape key closes menu
- Tab navigation between items
- Enter/Space to select

**Usage:**
```typescript
import DesktopNav from '@/components/Navigation/DesktopNav';

// Already included in app/layout.tsx
<DesktopNav />
```

#### Accessibility

Both navigation components are designed for accessibility and meet **WCAG 2.1 AA standards**:

**Mobile Navigation (MobileNav.tsx):**
- ✅ **Touch Targets:** 48x48px minimum (exceeds WCAG AAA 44x44px requirement)
- ✅ **Semantic HTML:** `<nav>` and `<Link>` elements with implicit ARIA roles
- ✅ **Visual Indicators:** Crimson active state (#89023e) with sufficient contrast
- ✅ **Safe Area Support:** iPhone notch and home indicator padding

**Desktop Navigation (DesktopNav.tsx):**
- ✅ **Keyboard Navigation:** Escape key closes menu, Tab navigation between items
- ✅ **ARIA Labels:** Descriptive labels on menu buttons (`aria-label="Open navigation menu"`)
- ✅ **Focus Management:** Visual focus indicators on all interactive elements
- ✅ **Screen Reader Support:** Semantic structure with proper landmarks

**Compliance Summary:**
- WCAG 2.1 Level AA: ✅ Compliant
- Keyboard Accessibility: ✅ Full support
- Touch Target Size (AAA): ✅ Exceeds standards
- Color Contrast: ✅ Meets AA standards

### Routes & Pages

The application includes the following routes, all with dark theme styling:

**Active Routes:**
- **`/`** - Home page with hero section
- **`/history`** - PRD generation history (Phase 2 placeholder)
- **`/templates`** - PRD templates library (Phase 2 placeholder)
- **`/settings`** - Application settings page
- **`/help`** - Help & Documentation with navigation guide
- **`/about`** - About page with version and tech stack info

**Features:**
- All pages prerendered as static content
- Responsive layout (mobile padding for bottom nav, desktop padding for menu)
- Consistent dark theme styling
- Crimson gradient headings
- Navigation state management with `usePathname`

---

## 🏃 Getting Started

### Clone Repository

```bash
# Clone the repository
git clone https://github.com/travissutphin/rapidprd.app.git
cd AIPRD

# Checkout develop branch for development
git checkout develop
git pull origin develop
```

**Repository:** https://github.com/travissutphin/rapidprd.app.git

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Docker & Docker Compose (for deployment)

### Development Setup

**Phase 1 - Sprint 1 (Current Status):**
- ✅ Git repository initialized and configured
- ✅ GitOps framework established (README, CONTRIBUTING, .gitignore, .env.example)
- ✅ Branches created: `main`, `develop`
- ✅ Next.js 14 with App Router and TypeScript configured
- ✅ TailwindCSS dark theme complete (all PRD colors, Inter font, shadows)
- ✅ ESLint and type checking
- ✅ Complete design system tokens configured
- ✅ Docker multi-stage build configured
- ✅ iOS-style bottom navigation (mobile)
- ✅ Desktop slide-out menu with overlay
- ✅ Navigation routing with 6 pages
- ✅ Security utilities and headers

**Install Dependencies:**
```bash
npm install
```

**Run Development Server:**
```bash
npm run dev
```

**Build for Production:**
```bash
npm run build
npm start
```

**Type Check:**
```bash
npm run type-check
```

**Lint Code:**
```bash
npm run lint
```

**View Kanban Board:**
Open `docs/kanban.html` in your browser to see all tasks and progress.

---

## 🐳 Docker Deployment

### Quick Start with Docker

**Development Mode (with hot reload):**
```bash
docker-compose up dev
```

**Production Mode:**
```bash
# Build and run production container
docker-compose up prod

# Or use Docker directly
docker build -t rapidprd-app .
docker run -p 3000:3000 rapidprd-app
```

### Docker Commands

**Build image:**
```bash
docker build -t rapidprd-app .
```

**Run container:**
```bash
docker run -p 3000:3000 rapidprd-app
```

**Stop container:**
```bash
docker-compose down
```

### Environment Variables

Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
# Edit .env with your API keys
```

---

## 📖 Documentation

### Key Documents
1. **[Product Requirements Document](docs/AIPRD-PRD.md)** - Complete PRD with all features, design system, and specifications
2. **[User Journey](docs/AIPRD-UserJourney.md)** - Complete user flow and interaction patterns
3. **[Kanban Board](docs/kanban.html)** - Live development tracking

### Branching Strategy
- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - Feature development branches
- `hotfix/*` - Emergency fixes

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

**Security Note:** Never commit `.env` files. Use `.env.example` as a template.

---

## 🔒 Security

### Input Sanitization

All user input is sanitized using the security utilities in `lib/security.ts`:

```typescript
import { sanitizeInput, validateTextField } from '@/lib/security';

// Remove HTML tags and dangerous characters
const clean = sanitizeInput(userInput);

// Validate with length constraints
const result = validateTextField(userInput, 50, 500);
if (!result.valid) {
  console.error(result.error);
}
```

**Functions:**
- `sanitizeInput(input)` - Remove HTML tags, script/style content, prevent XSS
- `validateTextField(input, min, max)` - Validate text with length constraints
- `validateEnvVar(name)` - Ensure required environment variables exist
- `getEnvVar(name, fallback?)` - Safely get environment variable with fallback

### Environment Variable Validation

Environment variables are validated at startup using `lib/env.ts`:

```typescript
import { env, isProduction } from '@/lib/env';

// Access validated environment variables
const apiKey = env.ANTHROPIC_API_KEY;

// Check environment
if (isProduction) {
  // Production-only code
}
```

**Fail-Fast Approach:** In production, missing required variables (like `ANTHROPIC_API_KEY`) will throw an error at startup rather than failing silently.

### Security Headers

Middleware (`middleware.ts`) adds security headers to all responses:

- **X-XSS-Protection:** `1; mode=block` - Prevent XSS attacks
- **X-Frame-Options:** `DENY` - Prevent clickjacking
- **X-Content-Type-Options:** `nosniff` - Prevent MIME sniffing
- **Referrer-Policy:** `strict-origin-when-cross-origin` - Control referrer information
- **Content-Security-Policy:** Strict CSP allowing only same-origin and Google Fonts
- **Permissions-Policy:** Restrict camera, microphone, geolocation access

### Security Best Practices

1. **Input Sanitization** - All user input is sanitized before processing
2. **Environment Validation** - Required variables are validated at startup
3. **Fail Fast** - Missing required config causes immediate error
4. **Security Headers** - All responses include security headers
5. **Simple & Robust** - No overengineering, just essentials

**Documentation:** See `lib/README.md` for detailed security utility documentation and examples.

---

## 🎯 Phase 1 Goals (MVP)

### Core Features
- ✅ Dark theme UI (black background, crimson accents)
- ✅ Mobile-first responsive design
- ✅ iOS-style bottom nav (mobile)
- ✅ Slide-out menu (desktop)
- ✅ 4-field dark form
- ✅ AI PRD generation
- ✅ Dark PRD display
- ✅ Download markdown
- ✅ Copy to clipboard

### Timeline
**6-8 weeks** (4 sprints, 2 weeks each)

---

## 🧪 Testing

### Testing Strategy
- Unit tests for components
- Integration tests for API routes
- E2E tests for user flows
- Cross-browser testing
- Mobile device testing
- ✅ Accessibility audit (WCAG AA) - Navigation components compliant

---

## 🚢 Deployment

### Docker Deployment

**Build:**
```bash
docker build -t prd-generator .
```

**Run:**
```bash
docker-compose up -d
```

---

## 👥 Team

### Development Team
- **[Travis Sutphin]** - Product Owner
- **[Syntax]** - Principal Engineer
- **[Codey]** - Technical Program Manager
- **[Aesthetica]** - Front-end Developer & UI/UX Designer
- **[Sentinal]** - Security Operations Specialist
- **[Flow]** - DevOps Engineer
- **[Verity]** - QA Specialist

---

## 📊 Success Metrics

### Target Metrics
- Mobile usability: > 95/100
- Desktop usability: > 98/100
- Accessibility: > 90/100
- Performance: > 85/100 (mobile)
- PRD generation: < 45 seconds
- Form completion: > 75%

---

## 🔮 Future Enhancements

### Phase 2
- User accounts
- PRD history
- Template library
- PDF export
- Share via link

### Phase 3
- Team collaboration
- Real-time editing
- Comments/feedback
- Version control
- Custom templates

---

## 📄 License

Proprietary - All rights reserved

---

## 📞 Contact

**Product Owner:** Travis Sutphin
**Project:** PRD Generator v3.0
**Status:** Phase 1 - Active Development

---

**Last Updated:** October 7, 2025
