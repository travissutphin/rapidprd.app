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
│   └── globals.css          # Global styles with dark theme
├── /docs                    # Project documentation
│   ├── AIPRD-PRD.md        # Product Requirements Document
│   ├── AIPRD-UserJourney.md # User flow and steps
│   └── kanban.html          # Development kanban board
├── /components              # React components (to be created)
├── /lib                     # Utility functions (to be created)
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS with dark theme
├── .eslintrc.json           # ESLint configuration
├── Dockerfile               # Docker configuration (to be created)
├── docker-compose.yml       # Docker Compose config (to be created)
├── .gitignore               # Git ignore file
└── README.md                # This file
```

---

## 🎨 Design System

### Color Palette
| Element | Color | Hex Code |
|---------|-------|----------|
| Primary BG | Pure Black | `#000000` |
| Secondary BG | Dark Gray | `#1a1a1a` |
| Tertiary BG | Medium Gray | `#2a2a2a` |
| Borders | Light Gray | `#3a3a3a` |
| Primary Text | White | `#FFFFFF` |
| Accent | Deep Crimson | `#89023e` |

### Typography
- **Font:** Inter (Sans-serif)
- **Weights:** 400, 500, 600, 700

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
- ✅ TailwindCSS with dark theme tokens
- ✅ ESLint and type checking
- 🔄 Docker setup (upcoming)

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
- Accessibility audit (WCAG AA)

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
