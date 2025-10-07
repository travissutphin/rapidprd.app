# Contributing to PRD Generator

Thank you for contributing to the PRD Generator project!

---

## 🎯 Development Process

### Scrum Framework
- **Sprint Duration:** 2 weeks
- **Sprint Planning:** Start of each sprint
- **Daily Stand-ups:** 15 minutes daily
- **Sprint Review:** End of sprint demo
- **Retrospective:** Process improvement

---

## 🌿 Branching Strategy

### Branch Types

**Main Branches:**
- `main` - Production-ready code only
- `develop` - Integration branch for features

**Supporting Branches:**
- `feature/*` - New features (e.g., `feature/ios-navigation`)
- `bugfix/*` - Bug fixes (e.g., `bugfix/form-validation`)
- `hotfix/*` - Emergency production fixes

### Branch Naming Convention

```
feature/[sprint-number]-[short-description]
bugfix/[issue-number]-[short-description]
hotfix/[issue-number]-[short-description]
```

**Examples:**
- `feature/sprint1-nextjs-setup`
- `feature/sprint2-ios-bottom-nav`
- `bugfix/123-form-character-counter`
- `hotfix/456-api-timeout`

---

## 🔄 Git Workflow

### Creating a Feature Branch

```bash
# Start from develop
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/sprint1-nextjs-setup

# Work on your feature
# ... make changes ...

# Commit changes
git add .
git commit -m "feat: initialize Next.js 14 with TypeScript"

# Push to remote
git push origin feature/sprint1-nextjs-setup

# Create Pull Request to develop
```

### Commit Message Convention

Use conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding/updating tests
- `chore:` - Maintenance tasks

**Examples:**
```
feat(navigation): add iOS-style bottom navigation

Implemented fixed bottom navigation bar with 4 items,
blur effect, and crimson active state.

Closes #006
```

```
fix(form): correct character counter color states

Character counter now properly shows:
- Gray (< 50 chars)
- Green (50-400 chars)
- Amber (400-500 chars)
- Red (> 500 chars)

Fixes #011
```

---

## 🧪 Testing Requirements

### Before Creating a Pull Request

- [ ] All tests pass locally
- [ ] New code has unit tests
- [ ] Manual testing completed
- [ ] Accessibility tested
- [ ] Mobile/desktop tested
- [ ] No console errors
- [ ] Code follows style guide

### Testing Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run linting
npm run lint

# Type checking
npm run type-check
```

---

## 📝 Pull Request Process

### Creating a Pull Request

1. **Update from develop:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout your-feature-branch
   git merge develop
   ```

2. **Resolve conflicts** (if any)

3. **Push changes:**
   ```bash
   git push origin your-feature-branch
   ```

4. **Create PR** with description:
   - What changes were made
   - Why these changes were needed
   - How to test the changes
   - Screenshots (if UI changes)
   - Related kanban card #

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation
- [ ] Refactoring

## Related Tasks
- Kanban Card: #XXX
- Sprint: X

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Accessibility tested
- [ ] Mobile/desktop tested

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No breaking changes
```

### Review Process

1. **Assigned Reviewers:** [Codey], [Syntax], [Verity]
2. **Required Approvals:** At least 1
3. **Automated Checks:** Must pass
4. **Merge:** Squash and merge to develop

---

## 🎨 Code Style

### TypeScript/React

```typescript
// Use functional components with TypeScript
interface NavItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

export function NavItem({ icon, label, active = false }: NavItemProps) {
  return (
    <button className={active ? 'text-crimson' : 'text-gray'}>
      {icon} {label}
    </button>
  );
}
```

### TailwindCSS

```typescript
// Use Tailwind utility classes
<div className="bg-black text-white p-4 rounded-xl border border-dark-300">
  Content
</div>

// Avoid inline styles
// ❌ style={{ backgroundColor: '#000000' }}
// ✅ className="bg-black"
```

### File Naming

- **Components:** PascalCase (e.g., `MobileNav.tsx`)
- **Utilities:** camelCase (e.g., `formatDate.ts`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

---

## 🔐 Security

### Security Best Practices

- **Never commit:**
  - API keys
  - Passwords
  - `.env` files
  - Sensitive data

- **Always:**
  - Use environment variables
  - Sanitize user inputs
  - Validate on server-side
  - Keep dependencies updated

### Reporting Security Issues

Contact [Sentinal] immediately for security concerns.

---

## 📊 Kanban Board Updates

### When to Update Kanban

1. **Start Task:** Move from Backlog → Sprint
2. **In Progress:** Mark task as active
3. **Ready for QA:** Move to QA column
4. **QA Pass:** Move to Staged
5. **Deployed:** Move to Live

### Card Updates

Update kanban card when:
- Starting work
- Completing work
- Blocking issues found
- Status changes

---

## 🚀 Deployment

### Deployment Process

**Staging Deployment:**
```bash
git checkout develop
git pull origin develop
docker-compose -f docker-compose.staging.yml up -d
```

**Production Deployment:**
```bash
git checkout main
git pull origin main
docker-compose -f docker-compose.prod.yml up -d
```

**Only [Flow] and [Travis] can deploy to production.**

---

## ❓ Questions?

- **Technical Questions:** [Syntax], [Codey]
- **Design Questions:** [Aesthetica]
- **Security Questions:** [Sentinal]
- **DevOps Questions:** [Flow]
- **QA Questions:** [Verity]

---

## 📋 Checklist for New Contributors

- [ ] Read README.md
- [ ] Read AIPRD-PRD.md
- [ ] Review kanban board
- [ ] Set up development environment
- [ ] Understand branching strategy
- [ ] Review code style guidelines
- [ ] Join team communication channels

---

**Happy Coding! 🚀**

_Last Updated: October 7, 2025_
