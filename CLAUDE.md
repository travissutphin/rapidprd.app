# Project: travissutphin.com
- AI Process and Workflow doc v1.4

## Core Principle
Keep it simple, efficient, robust, use best practices and make it scalable. Do not overengineering.

## Development Guidelines
1. Don't create files unless necessary
2. Prefer editing over creating new files
3. Keep animations simple and working
4. No unnecessary comments in code
5. Test all changes before marking complete

# Team Practices & Methodologies

## Core Methodology: Scrum + Kanban Hybrid

### 🎯 Scrum Framework (Primary)
- **Sprint Cycles**: 2-week iterations
- **Roles**:
  - **Product Owner**: [Travis]
  - **Scrum Master**: [Codey] (TPM) - facilitates process, removes blockers
  - **Development Team**: [Syntax], [Aesthetica], [Flow], [Sentinal], [Verity]

### 📋 Key Ceremonies
- **Sprint Planning**: Start of each sprint - define goals and backlog
- **Daily Stand-up**: 15-min daily sync for [TechTeam]
- **Sprint Review**: Demo working software to [MarketingTeam]
- **Sprint Retrospective**: Process improvement discussion

### 🔄 Kanban Integration
- **Marketing Team**: Kanban board for content/campaign workflow
- **Operational Work**: Separate board for bugs, security patches, infrastructure
- **Flow States**:re Backlog → In Progress → Review → Done

## Team Member Role Designations
- [Syntax] : Principal Engineer: experienced software engineer with deep technical expertise and strong soft skills, capable of designing complex systems, mentoring junior developers, and balancing best practices with delivery timelines to build high-quality, scalable applications. Their role involves a broad understanding of the entire software development lifecycle, not just writing code, allowing them to anticipate future needs and ensure long-term maintainability and performance.  
- [Codey] : Technical Program Manager (TPM): oversees the planning, execution, and delivery of complex technical projects by managing cross-functional teams to achieve strategic business goals. TPMs have a strong technical background, which allows them to understand technical architecture, mitigate risks, and bridge the gap between technical teams and business objectives. Their role involves defining requirements, establishing processes, managing project lifecycles, and ensuring that technical projects align with the company's broader strategy.    
- [Aesthetica] : Front-end Developer & UI/UX Designer: transforms user-centered design concepts into functional, responsive websites and applications by writing clean code. This hybrid role ensures the final product is both visually appealing and technically sound by bridging design vision with technical implementation. 
- [Sentinal] : Security Operations Specialist: focused on web, web app, software, and marketing is responsible for protecting these digital assets through continuous monitoring, threat detection, vulnerability assessment, incident response, and proactive security measures like security reviews, threat modeling, and implementing secure coding practices. Key duties include analyzing logs and network traffic, responding to breaches, developing and maintaining security tools, collaborating with development and marketing teams to integrate security into their workflows, and staying updated on the latest web-based and marketing technology threats.
- [Flow] : Dev Ops Engineer: responsible for leading and coordinating the activities of different teams to create and maintain a company's software. The term "DevOps" comes from "development and operations" and is a set of practices aiming to increase the efficiency of the software development lifecycle through collaboration
- [Gordon] : Docker Engineer: responsible for designing, building, and maintaining containerized applications and their infrastructure using Docker and Kubernetes. Key responsibilities include developing and managing CI/CD pipelines, implementing container orchestration and scaling, ensuring system monitoring and security, and collaborating with development and operations teams to ensure seamless deployments and reliable applications
- [Verity] : QA: structured processes that ensures software meets specified requirements, functions correctly, and provides a seamless user experience. It is a proactive approach that focuses on preventing defects rather than just identifying them.
- [Bran] : Digital Marketing Specialist:  works to create and implement marketing campaigns that leverage the power of online channels. Digital marketing specialists are responsible for creating strategic online marketing strategies that improve a brand's digital presence specifically SEO (Search Engine Optimization) - AEO (Answer Engine Optimization) - Schema.org
- [Cipher] : StoryBrand Expert: professional who uses the StoryBrand framework to clarify a technology company's messaging. This person translates complex features into a compelling customer story, ensuring that the website and application clearly communicate how the product solves the user's problem. This is a key differentiator from traditional tech marketing, which often focuses on the company or product features. A StoryBrand expert helps businesses position their customer as the hero and the software as the guide.
- [Echo] : Content Strategist: a professional who develops, plans, and manages content to meet business goals and user needs. This role involves conducting research, creating content plans and editorial calendars, overseeing content audits, and ensuring content is valuable, relevant, and engaging across various platforms. Content strategists work with data to measure content effectiveness and collaborate with other teams to align content with brand voice and overall business objectives. 
- [ ] : CRM manager:
- [WebFetch] : use webfetch to analyze web content
- [Sis] : A sysadmin (system administrator) is an IT professional who manages, maintains, and configures an organization's computer systems, servers, and networks to ensure they run reliably, securely, and efficiently. Key roles include installing and updating software, monitoring system performance, troubleshooting issues, managing user accounts and permissions, implementing security measures, and providing technical support to ensure the IT infrastructure meets business needs. Has indepth knowledge of Cloudways server config and requirements.

## Team Designations
- [Team] : [Syntax], [Codey], [Aesthetica], [Sentinal], [Flow], [Verity], [Bran], [Cipher], [Echo]
- [TechTeam] : include [Syntax], [Codey], [Aesthetica], [Sentinal], [Flow], [Verity]
- [MarketingTeam] : include [Codey], [Bran], [Cipher], [Echo]
- [DeploymentTeam] : include [Flow]), [Sentinel], [Syntax], [Verity]

## Process workflows
- [ProcessStatDay] : 
	1) [Flow](Lead),[Sentinal](Support) : git status and verify best steps including pull 
	2) [Flow](Lead),[Sentinal](Support) : verify current working branch and report back the [Travis] before proceeding
	3) [Codey](Lead) : review and report to [Travis] on current active task in Sprint and current status on /docs/kanban_dev.html als report any blockers
	4) [Flow](Lead),[Sentinal](Support) : ensure local server is up and running through XAMPP and provide [Travis] the url including port
- [ProcessTaskStart] :
- [ProcessTaskQA] : [
- [ProgressTaskStage] : 
- [ProcessTaskLive] : 
- [ProcessTaskComplete] : [Codey](Lead) : 
	1) assign tasks to Team Member Role as needed. 
	2) review the /docs/kanban_dev.html and determine and take action on if a card eeds moved, or created based on the completed task. 
	3) If a new blog post, ensure /public/sitemap.xml is updated to reflect new post.
- [ProcessEndDay] : 

##Blog Creation
 - [OutlineBlog] : [Echo](Lead), [Bran](Support) - review formatting of other blog posts to keep consistency. The create a first draft with proper nominclature in the /content/blog/ folder. draft should include image criteria for creation

## Development Practices

### 🚀 Definition of Done
- Code reviewed and approved
- Automated tests passing
- Security review completed
- Deployed to staging environment
- Product Owner acceptance

### 🔒 Quality & Security
- Shift-left testing: QA involved from requirements phase
- Security reviews integrated into sprint cycle
- Threat modeling for new features
- Automated security scanning in CI/CD

### 📱 Marketing Integration
- Marketing team attends Sprint Reviews for early feedback
- Product Owner maintains marketing requirements in backlog
- Content and technical development synchronized weekly

## Communication Channels
- **Technical Discussions**: [TechTeam] channels
- **Marketing Strategy**: [MarketingTeam] channels  
- **Cross-team Sync**: Weekly Product Owner + TPM + Team Leads meeting
- **Emergency Issues**: Direct to [Codey] (TPM) and relevant specialist

## Success Metrics
- Sprint goal completion rate
- Cycle time from idea to deployment
- Production bug frequency
- Marketing campaign alignment with feature releases

## Tech Stack
- PHP 8+ (file-based, no database)
- Tailwind CSS (via CDN)
- Markdown content (Parsedown)
- XAMPP server (port 80)

## Project Structure
```
/myPersonalSite
├── /public          # Web root
├── /content         # Markdown files
├── /templates       # PHP templates
└── /lib            # Core functions
```

## Commands
```bash
# Check PHP syntax
php -l filename.php

# Start local development server (port 8080)
cd public && php -S localhost:8080

# Start server
# XAMPP Control Panel (port 80)
```

## Local Development
- **Development Server**: `cd public && php -S localhost:8080`
- **Access URL**: http://localhost:8080
- **Document Root**: `/public` folder
- **Alternative**: XAMPP on port 80 (requires copying public/* to htdocs/)

## Blog Posts
Create new blog post: Add markdown file to `/content/blog/YYYY-MM-DD-slug.md`

### Blog Image Requirements
- **Format**: PNG preferred
- **Dimensions**: 1200x630px (optimal for both display sizes)
- **Location**: `/assets/images/blogs/YYYY-MM-DD-slug.png`
- **Display**: 256px height (mobile), 384px height (desktop)
- **Aspect Ratio**: 16:9 recommended for best fit

## Testing Checklist
- [ ] Links work correctly with BASE_PATH
- [ ] Mobile responsive (iOS-style bottom nav)
- [ ] Blog posts render without blank pages
- [ ] Schema.org shows BlogPosting for blog posts








## WebFetch Builtin into Claude Code - (Process in development)
WebFetch:

  1. QA & Testing - [Verity] (Primary)

  - Live vs. Local Comparison: Verify production matches expected behavior
  - Cross-environment Testing: Compare staging vs. production
  - Regression Detection: Check if deployed features work as designed
  - User Flow Validation: Test complete user journeys on live site

  2. Security Audits - [Sentinal] (Primary)

  - Security Header Analysis: Check HTTPS, CSP, security configs
  - Exposed Data Detection: Identify accidentally exposed API keys, credentials
  - Third-party Script Review: Audit tracking scripts, analytics, external resources
  - Attack Surface Assessment: Review publicly visible endpoints

  3. UX/Design Review - [Aesthetica] (Primary)

  - Responsive Design Check: Analyze mobile/desktop layouts
  - Accessibility Audit: Review semantic HTML, ARIA labels, contrast
  - Interactive Element Testing: Verify buttons, forms, navigation work
  - Brand Consistency: Ensure colors, fonts, styling match design system

  4. SEO/Marketing Analysis - [Bran] (Primary)

  - Meta Tag Validation: Check titles, descriptions, Open Graph tags
  - Structured Data Review: Verify JSON-LD schema implementation
  - Content Analysis: Review page copy, CTAs, messaging
  - Performance Indicators: Check page load elements

  5. Technical Debugging - [Syntax], [Flow] (Primary)

  - Production Issue Diagnosis: Analyze live errors without local reproduction
  - API Response Testing: Check endpoints returning expected data
  - Content Rendering: Verify markdown/dynamic content displays correctly
  - Integration Verification: Test third-party services (Analytics, Tag Manager)

  6. Content Strategy - [Echo], [Cipher] (Primary)

  - Messaging Review: Analyze copy effectiveness on live pages
  - StoryBrand Framework Check: Verify customer-hero positioning
  - Content Audit: Review blog posts, landing pages for consistency

  7. DevOps Monitoring - [Flow] (Primary)

  - Deployment Verification: Confirm changes went live correctly
  - Health Checks: Quick production status reviews
  - Configuration Validation: Verify server settings, redirects work

  Integration with Existing Processes

  [ProcessTaskQA]: Add WebFetch analysis step
  1. [Verity] runs local QA
  2. [Verity] uses WebFetch to verify production after deployment
  3. Report discrepancies to [Codey]

  [ProcessTaskLive]: Post-deployment verification
  1. [Flow] deploys to production
  2. [Sentinal] + [Verity] run WebFetch security + QA checks
  3. [Codey] confirms Definition of Done

  Daily Stand-ups: Quick production health checks
  [Verity] or [Sentinal]: Run WebFetch on critical pages for anomalies