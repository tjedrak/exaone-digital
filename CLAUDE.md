# CLAUDE.md

**Project:** ExaOne Digital Website
**Last Updated:** October 18, 2025
**Status:** Active Development

This file provides comprehensive guidance to Claude Code when working on the ExaOne Digital website codebase.

---

## 🏢 Project Overview

**ExaOne Digital** is the public-facing marketing website for **AEONEX OÜ** (trading as ExaOne Digital), an Estonian technology consulting company.

### Legal Entity Information

```yaml
Legal Name: AEONEX OÜ
Trading As: ExaOne Digital
Registration: 17350891
Registered: October 15, 2025
Jurisdiction: Estonia (EU)
Address: Tornimäe tn 5, 10145 Tallinn, Estonia
```

### Business Focus

B2B technology consulting services:
1. **SEO & Affiliate Marketing** - Flagship expertise with live case studies
2. **System Architecture & Cloud Consulting** - AWS, GCP, Azure, modern platforms
3. **Automations & Integrations** - n8n workflows, API integrations, business process automation

**Target Market:** European SMEs and growing startups
**Delivery Model:** Remote/international operations

---

## 🎯 Website Purpose & Requirements

### Primary Goals

1. **Banking Requirement** - Professional website for Wise Business application (due diligence)
2. **Business Legitimacy** - Demonstrate EU company credibility
3. **Client Acquisition** - Professional online presence for lead generation
4. **Portfolio Showcase** - Display real projects (Thai Visa Reviews, automation systems)

### Success Criteria (Bank Requirements)

✅ Professional design (no "under construction" elements)
✅ Complete company information (AEONEX OÜ details)
✅ All legal pages (Privacy, Terms, Cookie Policy, Impressum)
✅ Working contact methods
✅ Fast loading (PageSpeed optimization)
✅ Mobile responsive
✅ GDPR compliance

### Launch Deadline

**October 31, 2025** - Hard deadline for banking application support

---

## 🛠️ Tech Stack

### Core Framework

**Astro 5.1.20** - Selected for:
- Static site generation (perfect for marketing sites)
- Excellent SEO performance
- Fast page loads (PageSpeed priority)
- Minimal JavaScript by default
- Easy content management

### Template Base

**AstroWind** - Free, open-source template
- Repository: https://github.com/arthelokyo/astrowind
- Features: Tailwind CSS, dark mode, SEO optimization, MDX blog support
- Production-ready PageSpeed scores
- Limitation: Blog requires `prerender = true` (no SSR for blog)

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Dark Mode** - Built-in support (nice-to-have)
- **Icons** - HugeIcons React (`npm install hugeicons-react`)
- **Responsive** - Mobile-first design approach

### Hosting & Deployment

- **Hosting:** Vercel (auto-deploy from GitHub)
- **Domain:** exaone.digital (ProtonMail DNS)
- **CDN:** Cloudflare (future consideration)
- **Local Dev Port:** 3002 (other ports occupied)

### Integrations

- **Forms:** Formspree or Web3Forms (free tier)
- **Analytics:** Google Analytics 4 (for bank recognition)
- **Cookie Consent:** Cookiebot (free tier)
- **Email:** ProtonMail with multiple aliases

---

## 📂 Site Structure

### Main Pages (Week 1 Priority)

```
/ (Homepage)
├── Hero section
├── Services overview (3 services)
├── Portfolio showcase (Thai Visa, Bali Visa logos)
├── Why ExaOne Digital
├── Company brief
└── Contact form (primary CTA)

/services
├── SEO & Affiliate Marketing (flagship)
├── System Architecture & Cloud
└── Automations & Integrations

/about
├── Company story (EU company, remote operations)
├── Our approach and values
├── Tech stack expertise
├── Team (Tomasz + lean contractors)
└── Why Estonia, why remote

/portfolio (HIDDEN - Week 2+)
├── Thai Visa Reviews (live case study)
├── Bali Visa Reviews (upcoming, logo only)
└── Domain Monitoring System (automation example)

/contact (Week 2+ - Week 1 has form on homepage)
├── Contact form
├── Alternative contact methods
└── Company details

/client/login (Mock - Professional Touch)
├── Login form (always shows generic error)
└── Link to register

/client/register (Mock - Captures Interest)
├── Registration form
├── Sends notification to contact@exaone.digital
└── Shows success message
```

### Legal Pages (Required)

```
/legal/privacy-policy (GDPR compliant)
/legal/terms (Terms of Service)
/legal/cookies (Cookie Policy)
/legal/impressum (Estonian Legal Notice requirement)
```

---

## 📧 Email Structure

### Public-Facing Emails (Use These on Website)

- **contact@exaone.digital** - General inquiries, contact forms
- **legal@exaone.digital** - GDPR requests, legal matters
- **finance@exaone.digital** - Payment inquiries (mentioned in legal pages only)

### Internal/Private Emails (Do NOT Display Publicly)

- **tom@exaone.digital** - Personal/direct client communication (backend only)
- **admin@exaone.digital** - Enty.io, internal admin (backend only)
- **tech@exaone.digital** - Reserved for future (not yet active)

---

## 🎨 Content Guidelines

### Key Messages (v2 Corrections Applied)

1. **Service #3 Name:** "Automations & Integrations" (NOT "AI Automation")
   - Reason: Avoid 2025 AI hype, focus on practical solutions

2. **Location Strategy:** "International operations serving European clients"
   - ❌ DO NOT mention: Bangkok, Thailand, specific geographic base
   - ✅ DO mention: EU company (Estonia), remote delivery, international team
   - Reason: DTV visa compliance

3. **Team Positioning:** "Led by Tomasz Jędrak with lean expert team"
   - Professional "we" language throughout
   - Focus on expertise and direct access, not company size

4. **Tech Stack Emphasis:** Show modern, production tools
   - Platforms: Vercel, Cloudflare, Supabase, Airtable, DigitalOcean
   - Frameworks: Astro, Next.js, React
   - Automation: n8n, Zapier, API integrations

### Portfolio Highlights

**Thai Visa Reviews** 🇹🇭
- Status: Live, active SEO case study
- Use for credibility and proof of expertise

**Bali Visa Reviews** 🇮🇩
- Status: Coming Q1 2026
- Show logo only, no link yet

**Domain Monitoring System** 🔍
- Custom automation using n8n, Majestic API, Ahrefs API
- Real-world automation example

### Tone & Voice

- Professional but approachable
- Technical credibility without jargon overload
- Focus on results and real examples
- Honest about structure (lean team) but confident in capabilities
- EU legitimacy emphasized

---

## 🔗 ClickUp Integration

### MCP Configuration

This project uses ClickUp MCP server for project management integration (configured in `.mcp.json`).

### Key ClickUp Resources

**Operations Space** (space_id: 90157388262)
- Main project management and task tracking
- URL: https://app.clickup.com/90151722985/v/s/90157388262

**Main Task:** 🚀 ExaOne Digital Website - Build & Launch
- Task ID: 86c61az65
- URL: https://app.clickup.com/t/86c61az65
- Status: In Progress
- Due: October 31, 2025

**Documentation (ClickUp Docs):**

1. **Company Knowledge Base** (doc_id: 2kyqc7z9-55)
   - Company identity, business model, tech stack
   - Revenue streams, strategic priorities
   - Invoice and client onboarding information

2. **Website Content Documentation** (doc_id: 2kyqc7z9-135)
   - Complete page-by-page content specifications
   - Homepage v2: page_id 2kyqc7z9-415
   - Services v2: page_id 2kyqc7z9-435
   - About v2: page_id 2kyqc7z9-455
   - Contact, Client Area, Legal Pages

### Working with ClickUp Tasks

When creating or updating tasks:
- Always include task URLs (https://app.clickup.com/t/TASK_ID)
- Check task status before booking time (avoid 'backlog' or 'closed')
- Link related tasks and documents
- Use `searchTasks` to check for duplicates before creating

---

## 📋 Development Phases

### Phase 1: Setup & Planning ✅ (CURRENT)

- [x] Evaluate templates (chose AstroWind)
- [ ] Setup local development environment
- [ ] Create GitHub repository
- [ ] Connect Vercel deployment

### Phase 2: Content Documentation (In Progress)

All content documented in ClickUp (doc_id: 2kyqc7z9-135):
- [x] Homepage content v2
- [x] Services page v2
- [x] About page v2
- [x] Client Area mock specifications
- [x] Legal pages structure

### Phase 3: Legal Pages (High Priority)

- [ ] Generate Privacy Policy (Termly/GetTerms)
- [ ] Generate Terms of Service
- [ ] Generate Cookie Policy
- [ ] Create Impressum/Legal Notice (Estonian requirement)
- [ ] Implement Cookiebot cookie consent banner

### Phase 4: Client Area Mock (Week 1)

- [ ] Design /client/login page (always shows error)
- [ ] Design /client/register page (captures interest)
- [ ] Setup form submission (email notification)
- [ ] Create success/error messages
- [ ] Match main site design

### Phase 5: Development (Week 2)

- [ ] Build homepage (with contact form)
- [ ] Build services page
- [ ] Build about page
- [ ] Build client area pages (login + register)
- [ ] Build legal pages
- [ ] Integrate Cookiebot

### Phase 6: Deploy & Launch (Week of Oct 28)

- [ ] Deploy to Vercel
- [ ] Configure exaone.digital domain
- [ ] Test all forms and links
- [ ] Mobile responsiveness check
- [ ] PageSpeed optimization
- [ ] Final review and launch

---

## 🎨 Design Principles

### Visual Style

- Clean, modern, professional aesthetic
- No stock photos of fake offices/people
- Focus on real projects and expertise
- Minimal, purposeful imagery

### Performance

- **PageSpeed Priority** - Critical for SEO and banking review
- Fast loading times
- Optimized images (Astro Assets + Unpic CDN)
- Minimal JavaScript

### Accessibility

- Mobile-first responsive design
- Touch-friendly targets (44px minimum)
- Clear focus states
- Readable typography (16-18px base)

---

## ⚠️ Critical Content Rules

### DO NOT Include

❌ Bangkok or Thailand mentions (DTV visa compliance)
❌ "AI Automation" service name (use "Automations & Integrations")
❌ Tax structure details on public pages
❌ tom@exaone.digital or admin@exaone.digital publicly
❌ "Under construction" elements
❌ Lorem ipsum placeholder text

### DO Include

✅ "International operations serving European clients"
✅ Estonian company registration details
✅ contact@exaone.digital and legal@exaone.digital
✅ Real portfolio examples (Thai Visa Reviews)
✅ Professional "we" language
✅ Complete legal pages

---

## 🔐 GDPR Compliance

### Required Elements

1. **Cookie Consent Banner** (Cookiebot)
   - Opt-in for non-essential cookies
   - Clear cookie categories
   - Easy to withdraw consent

2. **Privacy Policy** (complete)
   - Data collection transparency
   - User rights (access, deletion, portability)
   - Legal basis for processing
   - Contact: legal@exaone.digital

3. **Contact Forms**
   - Privacy policy link
   - Clear data usage statement
   - Explicit consent for processing

---

## 📊 SEO Requirements

### Technical SEO

- Sitemap.xml (automatic via Astro)
- Robots.txt
- Schema.org markup (Organization, LocalBusiness)
- Open Graph tags
- Proper heading hierarchy (H1 → H6)

### Performance

- PageSpeed Insights: Green scores required
- Core Web Vitals optimization
- Image optimization (Astro Assets)
- Minimal JavaScript payload

---

## 🚀 Quick Reference

### Install HugeIcons

```bash
npm install hugeicons-react
```

### Start AstroWind Project

```bash
npm create astro@latest -- --template arthelokyo/astrowind
```

### Local Development

```bash
# Start dev server on port 3002
npm run dev -- --port 3002

# Or configure in astro.config.mjs:
# server: { port: 3002 }
```

### Deploy to Vercel

```bash
npm run build
# Vercel auto-deploys from GitHub main branch
```

---

## 📝 Additional Notes

### Version Control

- Initialize git repository before development
- Use conventional commits
- Main branch = production (Vercel auto-deploy)

### Environment Variables

- Configure for form endpoints (Formspree/Web3Forms)
- Google Analytics tracking ID
- Cookiebot configuration

### Future Enhancements (Post-Launch)

- Blog functionality (AstroWind has MDX support)
- Portfolio page expansion
- Dedicated contact page
- Case study deep dives
- Client testimonials

---

## 🔗 Important Links

**ClickUp Resources:**
- Operations Space: https://app.clickup.com/90151722985/v/s/90157388262
- Main Task: https://app.clickup.com/t/86c61az65
- Company KB: https://app.clickup.com/90151722985/v/dc/2kyqc7z9-55
- Website Content Docs: https://app.clickup.com/90151722985/v/dc/2kyqc7z9-135

**Tech Documentation:**
- Astro Docs: https://docs.astro.build
- AstroWind GitHub: https://github.com/arthelokyo/astrowind
- Tailwind CSS: https://tailwindcss.com/docs
- HugeIcons React: https://github.com/hugeicons/hugeicons-react

**Tools:**
- Termly (Legal Pages): https://termly.io
- Cookiebot (Cookie Consent): https://cookiebot.com
- Formspree/Web3Forms (Contact Forms)

---

**Document Owner:** Tomasz Jędrak
**Purpose:** Claude Code development guidance
**Status:** Active - Use this for all website development decisions
