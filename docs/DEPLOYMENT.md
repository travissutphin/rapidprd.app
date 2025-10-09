# Docker Deployment Guide

**PRD Generator - Production Deployment**

Version: 1.0
Last Updated: October 8, 2025
Author: [Flow]

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Quick Start](#quick-start)
4. [Docker Build](#docker-build)
5. [Docker Compose](#docker-compose)
6. [Environment Configuration](#environment-configuration)
7. [Production Deployment](#production-deployment)
8. [SSL/TLS Configuration](#ssltls-configuration)
9. [Health Checks](#health-checks)
10. [Troubleshooting](#troubleshooting)
11. [Security Checklist](#security-checklist)

---

## Overview

This guide covers deploying the PRD Generator application using Docker containers for production environments.

**Architecture:**
- Multi-stage Docker build for optimization
- Next.js 14 with standalone output
- Node.js 20 Alpine (lightweight base image)
- Non-root user for security
- Production-optimized build

**Docker Configuration:**
- **Dockerfile**: Multi-stage build (deps → builder → runner)
- **docker-compose.yml**: Dev and production services
- **.dockerignore**: Build optimization

---

## Prerequisites

### Required Software

| Software | Version | Purpose |
|----------|---------|---------|
| **Docker** | 28.4.0+ | Container runtime |
| **Docker Compose** | 2.0+ | Multi-container orchestration |
| **Node.js** | 20+ | Local development (optional) |
| **Git** | Latest | Source control |

### Verify Installation

```bash
# Check Docker version
docker --version
# Expected: Docker version 28.4.0 or higher

# Check Docker Compose version
docker-compose --version
# Expected: Docker Compose version 2.0 or higher

# Verify Docker is running
docker ps
# Should list running containers (or empty list)
```

---

## Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/travissutphin/rapidprd.app.git
cd AIPRD
```

### 2. Create Environment File

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your API keys
# Required: ANTHROPIC_API_KEY
```

### 3. Build and Run (Docker Compose)

```bash
# Production mode
docker-compose up prod

# Development mode (with hot reload)
docker-compose up dev
```

### 4. Access Application

- **URL**: http://localhost:3000
- **Health Check**: http://localhost:3000/api/health (if implemented)

---

## Docker Build

### Multi-Stage Build Process

The Dockerfile uses a 3-stage build for optimization:

**Stage 1: Dependencies (`deps`)**
```dockerfile
FROM node:20-alpine AS deps
```
- Installs all dependencies (including devDependencies)
- Uses `npm ci` for reproducible builds
- Creates node_modules layer for caching

**Stage 2: Builder (`builder`)**
```dockerfile
FROM node:20-alpine AS builder
```
- Copies dependencies from deps stage
- Builds Next.js application
- Generates standalone output

**Stage 3: Runner (`runner`)**
```dockerfile
FROM node:20-alpine AS runner
```
- Production-only runtime
- Non-root user (nextjs:nodejs)
- Minimal image size
- Copies only necessary files

### Build Commands

**Build Production Image:**
```bash
docker build -t rapidprd-app:latest .
```

**Build with Custom Tag:**
```bash
docker build -t rapidprd-app:v1.0.0 .
```

**Build Without Cache:**
```bash
docker build --no-cache -t rapidprd-app:latest .
```

**Build Specific Stage (Development):**
```bash
docker build --target builder -t rapidprd-app:dev .
```

### Verify Build

```bash
# List Docker images
docker images | grep rapidprd-app

# Expected output:
# rapidprd-app    latest    <image-id>    <time>    <size>
```

---

## Docker Compose

### Services

**1. Development Service (`dev`)**
```yaml
services:
  dev:
    build:
      target: builder
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
      - /app/.next
    environment:
      - NODE_ENV=development
    command: npm run dev
```

**Features:**
- Hot reload with volume mounts
- Development dependencies available
- Fast iteration cycle

**2. Production Service (`prod`)**
```yaml
services:
  prod:
    build:
      target: runner
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    env_file:
      - .env
    restart: unless-stopped
```

**Features:**
- Standalone production build
- Environment variables from .env
- Automatic restart on failure
- Minimal image size

### Docker Compose Commands

**Start Services:**
```bash
# Start production service
docker-compose up prod

# Start in detached mode (background)
docker-compose up -d prod

# Start development service
docker-compose up dev
```

**Stop Services:**
```bash
# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

**View Logs:**
```bash
# View logs for production service
docker-compose logs prod

# Follow logs in real-time
docker-compose logs -f prod

# View last 100 lines
docker-compose logs --tail=100 prod
```

**Rebuild and Restart:**
```bash
# Rebuild images and start
docker-compose up --build prod

# Force recreate containers
docker-compose up --force-recreate prod
```

---

## Environment Configuration

### Required Variables

Create a `.env` file in the project root:

```env
# Anthropic Claude API
ANTHROPIC_API_KEY=your_api_key_here

# Optional: Node Environment (auto-set by Docker)
# NODE_ENV=production
```

### Environment File Locations

| File | Purpose | Usage |
|------|---------|-------|
| `.env` | Production secrets | Docker Compose prod service |
| `.env.example` | Template | Copy to .env |
| `.env.local` | Local development | Not used in Docker |

### Security Best Practices

1. **Never commit `.env` files** - Already in .gitignore
2. **Use different keys for dev/staging/prod**
3. **Rotate API keys regularly**
4. **Use environment-specific files** (.env.production, .env.staging)

### Verify Environment Variables

```bash
# Inside running container
docker-compose exec prod printenv | grep ANTHROPIC
```

---

## Production Deployment

### Pre-Deployment Checklist

- [ ] Docker 28.4.0+ installed
- [ ] Docker Compose 2.0+ installed
- [ ] `.env` file created with production API keys
- [ ] Repository cloned and up-to-date
- [ ] Production build tested locally
- [ ] SSL/TLS certificates ready (if using HTTPS)
- [ ] Domain DNS configured
- [ ] Firewall rules configured (port 3000 or 443)

### Deployment Steps

**1. Prepare Server**
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Docker (Ubuntu/Debian)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose -y

# Verify installation
docker --version
docker-compose --version
```

**2. Clone Repository**
```bash
cd /opt
sudo git clone https://github.com/travissutphin/rapidprd.app.git
cd rapidprd.app
```

**3. Configure Environment**
```bash
# Create .env file
sudo nano .env

# Add production API key:
# ANTHROPIC_API_KEY=sk-ant-...
```

**4. Build and Start**
```bash
# Build production image
sudo docker-compose build prod

# Start production service
sudo docker-compose up -d prod

# Verify container is running
sudo docker ps
```

**5. Verify Deployment**
```bash
# Check logs
sudo docker-compose logs prod

# Test application
curl http://localhost:3000

# Expected: HTML response from Next.js app
```

---

## SSL/TLS Configuration

### Option 1: Reverse Proxy (Recommended)

Use **Nginx** or **Traefik** as a reverse proxy with automatic SSL via Let's Encrypt.

**Example Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        # Security headers (additional to app middleware)
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    }
}
```

**Install Certbot (Let's Encrypt):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### Option 2: Docker with SSL

**Update docker-compose.yml:**
```yaml
services:
  prod:
    ports:
      - "443:3000"
    volumes:
      - ./ssl:/app/ssl:ro
    environment:
      - SSL_CERT_PATH=/app/ssl/fullchain.pem
      - SSL_KEY_PATH=/app/ssl/privkey.pem
```

### Option 3: Cloud Provider SSL

- **AWS**: Use Application Load Balancer (ALB) with ACM certificate
- **Google Cloud**: Use Cloud Load Balancing with Google-managed SSL
- **Azure**: Use Application Gateway with SSL termination
- **Cloudflare**: Use Cloudflare SSL (Full or Full Strict mode)

---

## Health Checks

### Docker Health Check

Add to Dockerfile (optional):
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"
```

### Manual Health Check

```bash
# Check if container is running
docker ps | grep rapidprd

# Check application health
curl -I http://localhost:3000

# Expected: HTTP/1.1 200 OK

# Check logs for errors
docker-compose logs --tail=50 prod | grep -i error
```

### Monitoring

**Container Stats:**
```bash
# View resource usage
docker stats rapidprd-prod

# Output: CPU%, MEM USAGE, NET I/O, BLOCK I/O
```

**Application Logs:**
```bash
# Continuous log monitoring
docker-compose logs -f prod
```

---

## Troubleshooting

### Common Issues

**1. Container Won't Start**
```bash
# Check logs
docker-compose logs prod

# Check if port 3000 is already in use
lsof -i :3000  # Linux/Mac
netstat -ano | findstr :3000  # Windows

# Solution: Stop conflicting service or change port
```

**2. Environment Variables Not Loading**
```bash
# Verify .env file exists
ls -la .env

# Check file contents (don't commit!)
cat .env

# Verify variables are loaded in container
docker-compose exec prod printenv
```

**3. Build Fails**
```bash
# Clear build cache
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache prod
```

**4. Application Crashes**
```bash
# Check container logs
docker-compose logs --tail=100 prod

# Check for missing dependencies
docker-compose exec prod npm ls

# Restart container
docker-compose restart prod
```

**5. Slow Build Times**
```bash
# Check available disk space
df -h

# Clean up unused Docker resources
docker system prune -a --volumes

# Use BuildKit for faster builds
DOCKER_BUILDKIT=1 docker-compose build prod
```

### Debug Mode

**Run Container Interactively:**
```bash
# Start container with shell
docker run -it --rm rapidprd-app:latest sh

# Or exec into running container
docker-compose exec prod sh

# Inside container, check:
# - Environment variables: printenv
# - File structure: ls -la
# - Node version: node --version
# - Start server manually: node server.js
```

---

## Security Checklist

### Pre-Deployment Security

- [ ] **Non-root user**: Container runs as `nextjs` user (UID 1001)
- [ ] **Minimal base image**: Using Alpine Linux
- [ ] **Dependency scanning**: Run `npm audit` before build
- [ ] **Environment secrets**: API keys not hardcoded, use `.env`
- [ ] **HTTPS enabled**: SSL/TLS configured for production
- [ ] **Security headers**: Middleware adds security headers
- [ ] **Rate limiting**: API endpoints have rate limits
- [ ] **Input sanitization**: All user input sanitized
- [ ] **CORS configured**: Restrict allowed origins
- [ ] **No exposed secrets**: Check `.dockerignore` and `.gitignore`

### Docker Security

```bash
# Scan image for vulnerabilities
docker scan rapidprd-app:latest

# Check for security best practices
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  aquasec/trivy image rapidprd-app:latest
```

### Post-Deployment Security

- [ ] **Monitor logs**: Set up log aggregation (ELK, CloudWatch, etc.)
- [ ] **Update regularly**: Keep base images and dependencies updated
- [ ] **Limit network access**: Use Docker networks, firewall rules
- [ ] **Backup strategy**: Regular database/config backups
- [ ] **Incident response**: Have rollback plan ready

---

## Performance Optimization

### Build Optimization

1. **.dockerignore**: Exclude unnecessary files from build context
2. **Layer caching**: Order Dockerfile instructions from least to most frequently changed
3. **Multi-stage build**: Only include runtime dependencies in final image
4. **BuildKit**: Enable for faster, more efficient builds

```bash
# Use BuildKit
DOCKER_BUILDKIT=1 docker build -t rapidprd-app:latest .
```

### Runtime Optimization

1. **Resource limits**:
```yaml
services:
  prod:
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '1'
          memory: 1G
```

2. **Restart policy**:
```yaml
services:
  prod:
    restart: unless-stopped
```

3. **Health checks**: Automatic container restart on failure

---

## Rollback Strategy

### Backup Before Deployment

```bash
# Tag current running image
docker tag rapidprd-app:latest rapidprd-app:backup-$(date +%Y%m%d)

# Or export container
docker save rapidprd-app:latest | gzip > rapidprd-backup-$(date +%Y%m%d).tar.gz
```

### Rollback Steps

```bash
# Stop current container
docker-compose down

# Restore from backup tag
docker tag rapidprd-app:backup-20251008 rapidprd-app:latest

# Or load from file
docker load < rapidprd-backup-20251008.tar.gz

# Restart service
docker-compose up -d prod
```

---

## Additional Resources

### Documentation
- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

### Tools
- **Docker Desktop**: GUI for Docker management
- **Portainer**: Web-based Docker management
- **Watchtower**: Automated container updates
- **Dive**: Docker image layer analysis

### Support
- **Project Repository**: https://github.com/travissutphin/rapidprd.app.git
- **Issues**: Report at GitHub Issues
- **Product Owner**: Travis Sutphin

---

## Appendix

### Dockerfile Reference

```dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
# Install ALL dependencies (including devDependencies for build)
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build Next.js app (standalone output)
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
# Copy necessary files from builder
# Note: public folder not needed for this app (no static assets)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# Set correct permissions
RUN chown -R nextjs:nodejs /app
# Switch to non-root user
USER nextjs
# Expose port
EXPOSE 3000
# Set hostname
ENV HOSTNAME="0.0.0.0"
# Start the app
CMD ["node", "server.js"]
```

### Image Size Optimization

| Stage | Purpose | Size |
|-------|---------|------|
| `deps` | Install dependencies | ~500 MB |
| `builder` | Build application | ~600 MB |
| `runner` | Production runtime | ~254 MB |

**Final production image: ~254 MB** (Alpine-based, standalone output)

**Note:** Image size is larger than initially estimated due to react-markdown and remark-gfm dependencies. Size is optimized through multi-stage build (only runtime files in final image).

---

**Last Updated:** October 8, 2025
**Version:** 1.0
**Maintained by:** [Flow] - DevOps Engineer
