# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **ExaOne Digital** website repository - the public-facing marketing website for AEONEX OÜ (trading as ExaOne Digital), an Estonian technology consulting company.

**Legal Entity:** AEONEX OÜ (Registration: 17350891)
**Brand Name:** ExaOne Digital
**Domain:** exaone.digital
**Owner:** Tomasz Jędrak

## Project Context

The company provides B2B technology consulting services focused on:
1. SEO & Affiliate Marketing
2. System Architecture & Cloud Consulting
3. AI Automation & Integration

Target market: European SMEs and growing startups, remote delivery from Bangkok.

## ClickUp Integration

This project is managed through ClickUp with MCP integration configured in `.mcp.json`. The ClickUp workspace contains:

- **Operations Space** (space_id: 90157388262) - Main operations and task management
- **Company Knowledge Base** (doc_id: 2kyqc7z9-55) - Central documentation including company identity, business model, tech stack, revenue streams, and strategic priorities
- **Website Documentation** (doc_id: 2kyqc7z9-135) - Complete website structure and content specifications for all pages

### Key ClickUp Documents

When working on website features, reference these documents in ClickUp:
- Homepage structure: doc_id 2kyqc7z9-135, page "Website - Homepage (/)"
- Services page: doc_id 2kyqc7z9-135, page "Services (/services)"
- About page: doc_id 2kyqc7z9-135, page "About (/about)"

Use MCP tools to read these documents for complete specifications, content requirements, and design notes.

## MCP Servers Available

The project has several MCP servers configured:

1. **clickup** - Access to ClickUp API for reading documents, managing tasks, and tracking project status
2. **sequential-thinking** - For complex reasoning tasks
3. **chrome-devtools** - Browser automation and testing (Chromium)
4. **ref-tools** - Reference and documentation tools
5. **context7** - Additional context management

## Website Requirements

Based on ClickUp documentation, the website must:

1. **Establish legitimacy** - Critical for banking requirements and EU business credibility
2. **Professional appearance** - No "under construction" elements
3. **Modern tech stack** - Focus on performance and modern frameworks
4. **SEO optimization** - Technical SEO best practices, PageSpeed priority
5. **GDPR compliance** - Cookie consent, privacy policy, legal pages

### Key Pages to Build

- `/` - Homepage (hero, services overview, portfolio, CTA)
- `/services` - Detailed service offerings with case studies
- `/about` - Company story, team (Tomasz), Estonian registration details
- `/portfolio` - Projects and case studies (Thai Visa Reviews, Bali Visa Reviews, automation examples)
- `/contact` - Contact form and information
- `/client/login` - Client area mock/portal

### Design Principles

- Clean, modern, professional aesthetic
- Tailwind CSS for styling
- Fast loading (PageSpeed optimization critical)
- Mobile-first responsive design
- Dark mode support (nice-to-have)
- No stock photos of fake offices/people
- Focus on real projects and expertise

## Company Information

When creating content or documentation:

**Contact Emails:**
- Main: tom@exaone.digital
- Admin: admin@exaone.digital (for Enty.io, invoices)
- Technical: tech@exaone.digital
- Financial: finance@exaone.digital

**Legal Details:**
- Legal Name: AEONEX OÜ
- Registration: 17350891
- Address: Tornimäe tn 5, 10145 Tallinn, Estonia
- Registered: October 15, 2025
- Jurisdiction: Estonia

**Service Providers:**
- Accounting: Enty.io
- Banking: Wise Business
- Email: ProtonMail
- Project Management: ClickUp

## Working with ClickUp

When creating tasks or updating project status:
- Always include task URLs (https://app.clickup.com/t/TASK_ID) in references
- Use the Operations space (90151722985) for project tasks
- Check task status before booking time - avoid inactive statuses like 'backlog' or 'closed'
- Link related tasks and documents when creating or updating tasks
- Use `searchTasks` to check for existing similar tasks before creating new ones

## Strategic Context

**Current Phase (Q4 2025):**
1. Website development and launch
2. First client contract setup
3. Banking setup completion
4. Digital infrastructure finalization

**Business Model:**
- Primary: Monthly consulting retainers (€4,000-5,000/month target)
- Secondary: Affiliate income from SEO projects
- Target: €50-60k annually (Year 1)

**Portfolio Projects:**
- Thai Visa Reviews (live, active SEO case study)
- Bali Visa Reviews (launching Q1 2026)
- Internal automation systems (n8n workflows, domain monitoring)
