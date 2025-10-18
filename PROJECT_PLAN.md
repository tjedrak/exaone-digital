# ExaOne Digital Website - Development Plan

**Project:** ExaOne Digital Marketing Website
**Date Created:** October 18, 2025
**Target Launch:** October 31, 2025 (13 days)
**ClickUp Task:** https://app.clickup.com/t/86c61az65

---

## 📋 Executive Summary

Build and launch professional marketing website for AEONEX OÜ (trading as ExaOne Digital) to support:
- Wise Business banking application (due diligence requirement)
- Professional online presence for EU business legitimacy
- Client acquisition and lead generation

**Tech Stack:** Astro 5.1.20 + AstroWind template + Tailwind CSS
**Hosting:** Vercel (auto-deploy from GitHub)
**Timeline:** 13 days to launch (aggressive but achievable)

---

## 🎯 Success Criteria

### Must-Have for Launch (Banking Requirements)

✅ Professional, complete design (no "under construction")
✅ All legal pages (Privacy, Terms, Cookies, Impressum)
✅ Working contact form
✅ Complete company information (AEONEX OÜ details)
✅ Fast loading (PageSpeed Green)
✅ Mobile responsive
✅ GDPR compliant (cookie consent, privacy policy)

### Nice-to-Have (Week 1)

✅ Portfolio showcase (Thai Visa, Bali Visa logos)
✅ Client area mock (login/register pages)
✅ Dark mode support
✅ Google Analytics integration

### Post-Launch (Week 2+)

- Dedicated Portfolio page with case studies
- Dedicated Contact page (Week 1 has form on homepage)
- Blog functionality (AstroWind supports MDX)
- Enhanced automation examples

---

## 🗓️ Development Timeline

### Week 1: Foundation & Core Pages (Oct 18-24)

**Day 1-2: Setup & Configuration**
- [ ] Install Astro 5.1.20 with AstroWind template
- [ ] Configure project structure
- [ ] Install dependencies (HugeIcons, Tailwind)
- [ ] Setup Vercel deployment
- [ ] Configure environment variables
- [ ] Create GitHub repository and push

**Day 3-4: Homepage Development**
- [ ] Hero section with CTA
- [ ] Services overview (3 services)
- [ ] Portfolio showcase section
- [ ] Why ExaOne Digital section
- [ ] Company brief
- [ ] Contact form (Formspree/Web3Forms integration)
- [ ] Mobile responsive testing

**Day 5: Services Page**
- [ ] Service 1: SEO & Affiliate Marketing (detailed)
- [ ] Service 2: System Architecture & Cloud
- [ ] Service 3: Automations & Integrations
- [ ] How We Work section
- [ ] Pricing approach
- [ ] CTA to contact

**Day 6: About Page**
- [ ] Company story section
- [ ] Our approach and values
- [ ] Tech stack showcase
- [ ] Team section (Tomasz + lean team)
- [ ] Why Estonia, why remote
- [ ] CTA to services/contact

**Day 7: Client Area Mock Pages**
- [ ] /client/login page (mock, always errors)
- [ ] /client/register page (captures interest)
- [ ] Form validations and messages
- [ ] Success/error state handling
- [ ] Match main site design

### Week 2: Legal, Testing & Launch (Oct 25-31)

**Day 8-9: Legal Pages**
- [ ] Generate Privacy Policy (Termly)
- [ ] Generate Terms of Service (Termly)
- [ ] Generate Cookie Policy (Termly)
- [ ] Write Legal Notice/Impressum (Estonian requirement)
- [ ] Integrate Cookiebot consent banner
- [ ] Test GDPR compliance

**Day 10: Integration & Polish**
- [ ] Google Analytics 4 setup
- [ ] All forms tested and working
- [ ] Email notifications configured
- [ ] SEO metadata complete (all pages)
- [ ] Schema.org markup added
- [ ] Sitemap.xml generated

**Day 11: Testing & Optimization**
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile responsiveness (iOS, Android)
- [ ] PageSpeed Insights optimization (Green scores)
- [ ] Core Web Vitals check
- [ ] All links functional
- [ ] Forms submission testing
- [ ] Cookie consent testing

**Day 12: Pre-Launch Review**
- [ ] Content review (no Bangkok mentions, correct service names)
- [ ] Legal review (all pages complete)
- [ ] Final design polish
- [ ] Performance optimization
- [ ] Security headers check
- [ ] SSL certificate confirmed

**Day 13: Launch & Deploy**
- [ ] Final build and deploy to Vercel
- [ ] Configure exaone.digital domain DNS
- [ ] Test live site completely
- [ ] Submit to Google Search Console
- [ ] Announce launch
- [ ] Monitor for issues

---

## 📂 Page Breakdown & Priorities

### Priority 1: Critical for Launch

**Homepage (/)** - HIGHEST PRIORITY
- Purpose: First impression, main conversion page
- Complexity: Medium-High
- Time Estimate: 2 days
- Content: In ClickUp doc_id 2kyqc7z9-135, page_id 2kyqc7z9-415

**Services (/services)** - HIGH PRIORITY
- Purpose: Service descriptions, qualification
- Complexity: Medium
- Time Estimate: 1 day
- Content: In ClickUp doc_id 2kyqc7z9-135, page_id 2kyqc7z9-435

**About (/about)** - HIGH PRIORITY
- Purpose: Company legitimacy, trust building
- Complexity: Medium
- Time Estimate: 1 day
- Content: In ClickUp doc_id 2kyqc7z9-135, page_id 2kyqc7z9-455

**Legal Pages (/legal/*)** - CRITICAL (Bank Requirement)
- Privacy Policy, Terms, Cookie Policy, Impressum
- Complexity: Low (generated via Termly)
- Time Estimate: 1 day
- Specifications: In ClickUp doc_id 2kyqc7z9-135, page_id 2kyqc7z9-375

**Client Area (/client/login, /client/register)** - MEDIUM PRIORITY
- Purpose: Professional appearance (mock functionality)
- Complexity: Low-Medium
- Time Estimate: 0.5 days
- Content: In ClickUp doc_id 2kyqc7z9-135, page_id 2kyqc7z9-335

### Priority 2: Post-Launch

**Portfolio (/portfolio)** - HIDDEN FOR WEEK 1
- Status: Documented but not implemented Week 1
- Reason: Time constraint, not critical for bank
- Timeline: Week 2+ enhancement

**Contact (/contact)** - WEEK 2+
- Status: Homepage has contact form (Week 1)
- Dedicated page: Week 2+ if needed

---

## 🛠️ Technical Implementation Details

### Setup Commands

```bash
# Initialize Astro project with AstroWind template
npm create astro@latest -- --template arthelokyo/astrowind

# Install additional dependencies
npm install hugeicons-react

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
exaone-digital/
├── src/
│   ├── pages/              # Route-based pages
│   │   ├── index.astro     # Homepage
│   │   ├── services.astro  # Services page
│   │   ├── about.astro     # About page
│   │   ├── client/
│   │   │   ├── login.astro
│   │   │   └── register.astro
│   │   └── legal/
│   │       ├── privacy-policy.astro
│   │       ├── terms.astro
│   │       ├── cookies.astro
│   │       └── impressum.astro
│   ├── components/         # Reusable components
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Portfolio.astro
│   │   ├── ContactForm.astro
│   │   └── ...
│   ├── layouts/            # Page layouts
│   │   └── BaseLayout.astro
│   ├── assets/             # Images, styles
│   └── content/            # MDX content (future blog)
├── public/                 # Static assets
│   └── images/             # Logos, portfolio images
├── .env                    # Environment variables
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs     # Tailwind configuration
├── CLAUDE.md               # This documentation
└── package.json
```

### Environment Variables

```bash
# .env file
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
# or
PUBLIC_WEB3FORMS_ACCESS_KEY=xxxxx-xxxxx-xxxxx
PUBLIC_COOKIEBOT_ID=xxxxx-xxxxx-xxxxx
```

### Vercel Configuration

```json
// vercel.json (optional, auto-detected)
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

---

## 📝 Content Checklist (Per Page)

### Homepage (/)

- [ ] Hero headline and subheadline (v2 content)
- [ ] Primary CTA (Get in Touch) + Secondary (Client Area)
- [ ] Services overview (3 services, correct names)
- [ ] Portfolio showcase (Thai Visa, Bali Visa logos)
- [ ] Why ExaOne Digital (4 value props)
- [ ] Company brief (2-3 sentences)
- [ ] Contact form (working integration)
- [ ] SEO metadata (title, description, OG tags)

### Services (/services)

- [ ] Page intro and hero
- [ ] Service 1: SEO & Affiliate Marketing (detailed)
- [ ] Service 2: System Architecture & Cloud (detailed)
- [ ] Service 3: Automations & Integrations (NOT "AI Automation")
- [ ] How We Work section
- [ ] Pricing approach (transparent)
- [ ] CTA to contact
- [ ] SEO metadata

### About (/about)

- [ ] Hero section
- [ ] Company story (how ExaOne started)
- [ ] Our approach (5 principles)
- [ ] What we're good at (3 areas + examples)
- [ ] Why Estonia / Why Remote
- [ ] Team section (Tomasz + lean team positioning)
- [ ] Who we work with (ideal clients)
- [ ] Company information (AEONEX OÜ details)
- [ ] CTA to contact
- [ ] NO Bangkok mentions (international operations only)
- [ ] SEO metadata

### Client Area Pages

**Login (/client/login)**
- [ ] Logo and branding
- [ ] "Client Portal" title
- [ ] Email input (validation)
- [ ] Password input (validation)
- [ ] Submit button
- [ ] Generic error message (always shown)
- [ ] Link to /client/register
- [ ] Link to contact@exaone.digital
- [ ] Matches main site design

**Register (/client/register)**
- [ ] Logo and branding
- [ ] "Request Client Access" title
- [ ] Company name input
- [ ] Email input (validation)
- [ ] Phone input (optional)
- [ ] Message textarea (optional)
- [ ] Submit button
- [ ] Success message on submit
- [ ] Form integration (Web3Forms/Formspree)
- [ ] Link to /client/login
- [ ] Matches main site design

### Legal Pages

**Privacy Policy (/legal/privacy-policy)**
- [ ] Generated via Termly
- [ ] AEONEX OÜ details
- [ ] GDPR compliant
- [ ] Contact: legal@exaone.digital
- [ ] Estonian Data Protection Authority info

**Terms of Service (/legal/terms)**
- [ ] Generated via Termly
- [ ] Service descriptions
- [ ] Payment terms
- [ ] Intellectual property
- [ ] Limitation of liability
- [ ] Estonian law governing

**Cookie Policy (/legal/cookies)**
- [ ] Generated via Termly/Cookiebot
- [ ] Cookie categories
- [ ] Third-party cookies list
- [ ] User control instructions
- [ ] Contact: legal@exaone.digital

**Legal Notice/Impressum (/legal/impressum)**
- [ ] AEONEX OÜ complete details
- [ ] Registration number: 17350891
- [ ] Address: Tornimäe tn 5, 10145 Tallinn, Estonia
- [ ] Director: Tomasz Jędrak
- [ ] Contact emails (contact@, legal@)
- [ ] Estonian Business Registry link
- [ ] VAT status (not registered)

---

## 🎨 Design Guidelines

### Brand Colors (To Be Defined)

```css
/* Suggested palette - to be finalized */
:root {
  --primary: #3B82F6;      /* Professional blue */
  --accent: #10B981;       /* Success green */
  --dark: #1F2937;         /* Dark gray */
  --light: #F3F4F6;        /* Light gray background */
  --text: #374151;         /* Body text */
}
```

### Typography

- **Headings:** Bold, clear hierarchy (H1 > H2 > H3)
- **Body:** 16-18px base, line-height 1.6-1.8
- **Font:** System font stack or modern sans-serif (Inter, Plus Jakarta Sans)

### Components to Build

1. **Hero Section** - Homepage main banner with CTA
2. **Service Cards** - 3-column service overview
3. **Portfolio Showcase** - Logo grid with descriptions
4. **Value Props** - 4 benefits with icons
5. **Contact Form** - Working form with validation
6. **Client Area Forms** - Login and registration forms
7. **Footer** - Company info, links, legal pages
8. **Navigation** - Main nav with mobile hamburger
9. **Cookie Banner** - Cookiebot integration

### Icon Usage (HugeIcons)

```jsx
import { Icon01, Icon02 } from 'hugeicons-react';

// Use semantic icon names for services
// SEO: Search icon, Target icon
// Cloud: Cloud icon, Server icon
// Automation: Automation icon, Integration icon
```

---

## 🔧 Integration Tasks

### Contact Form Integration

**Option 1: Formspree (Recommended)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

**Option 2: Web3Forms**
```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

**Configuration:**
- Send to: contact@exaone.digital
- Success redirect: /?success=true
- Include spam protection (honeypot)

### Google Analytics 4

```html
<!-- Add to BaseLayout.astro <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Cookiebot Integration

```html
<!-- Add to BaseLayout.astro <head> -->
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js"
  data-cbid="YOUR_COOKIEBOT_ID"
  data-blockingmode="auto"
  type="text/javascript">
</script>
```

---

## ✅ Pre-Launch Checklist

### Content Review

- [ ] All content matches v2 specifications (no Bangkok, correct service names)
- [ ] No "under construction" or lorem ipsum
- [ ] All company details correct (AEONEX OÜ, reg 17350891)
- [ ] Email addresses correct (contact@, legal@, finance@ in legal only)
- [ ] Links to ClickUp removed from public pages

### Technical Review

- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Email notifications working
- [ ] Mobile responsive (tested on multiple devices)
- [ ] Cross-browser compatible (Chrome, Firefox, Safari)
- [ ] PageSpeed Green (desktop and mobile)
- [ ] Core Web Vitals pass
- [ ] No console errors
- [ ] SSL/HTTPS working

### SEO Review

- [ ] Title tags unique per page
- [ ] Meta descriptions unique per page
- [ ] H1 tags on every page
- [ ] Alt text on all images
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Schema.org markup added
- [ ] Open Graph tags present

### Legal & Compliance

- [ ] Privacy Policy complete and accessible
- [ ] Terms of Service complete and accessible
- [ ] Cookie Policy complete and accessible
- [ ] Legal Notice/Impressum complete
- [ ] Cookiebot banner working
- [ ] Cookie consent functional
- [ ] All legal pages linked in footer
- [ ] GDPR compliance verified

### Analytics & Tracking

- [ ] Google Analytics 4 installed
- [ ] GA4 tracking verified
- [ ] Cookiebot installed
- [ ] Cookie categories configured
- [ ] Form submissions tracked (optional)

---

## 🚨 Critical Reminders

### Content Rules (v2 Corrections)

❌ **DO NOT USE:**
- "Bangkok" or "Thailand" (use "international operations")
- "AI Automation" (use "Automations & Integrations")
- tom@exaone.digital publicly (backend only)
- admin@exaone.digital publicly (internal only)
- Tax structure details on public pages

✅ **MUST USE:**
- "International operations serving European clients"
- "Automations & Integrations" (Service #3)
- contact@exaone.digital (primary public contact)
- legal@exaone.digital (GDPR, legal matters)
- Professional "we" language throughout

### Estonian Requirements

✅ Legal Notice/Impressum is MANDATORY
✅ Must include registration number and address
✅ Director name required
✅ Link to Estonian Business Registry recommended

### GDPR Requirements

✅ Privacy Policy MANDATORY
✅ Cookie consent MANDATORY (Cookiebot)
✅ User rights clearly stated
✅ Data Protection Authority contact info

---

## 📊 Success Metrics

### Week 1 (Launch)

- [ ] Website live at exaone.digital
- [ ] PageSpeed score: Green (90+)
- [ ] Mobile usability: No errors
- [ ] All forms working
- [ ] GDPR compliant
- [ ] Bank review ready

### Week 2+ (Post-Launch)

- Monitor Google Analytics traffic
- Track form submissions
- Monitor PageSpeed trends
- Collect user feedback
- Plan enhancements (blog, portfolio expansion)

---

## 🔗 Resources & Documentation

### ClickUp Documentation

- **Main Task:** https://app.clickup.com/t/86c61az65
- **Company KB:** https://app.clickup.com/90151722985/v/dc/2kyqc7z9-55
- **Website Content:** https://app.clickup.com/90151722985/v/dc/2kyqc7z9-135

### Technical Documentation

- **Astro Docs:** https://docs.astro.build
- **AstroWind Template:** https://github.com/arthelokyo/astrowind
- **Tailwind CSS:** https://tailwindcss.com/docs
- **HugeIcons:** https://github.com/hugeicons/hugeicons-react

### Tools

- **Termly** (Legal Pages): https://termly.io
- **Cookiebot** (Cookies): https://cookiebot.com
- **Formspree** (Forms): https://formspree.io
- **Web3Forms** (Forms): https://web3forms.com
- **Vercel** (Hosting): https://vercel.com

---

## 📞 Support & Questions

**For development questions:**
- Review CLAUDE.md (project documentation)
- Check ClickUp documentation (complete content specs)
- Consult Astro/AstroWind docs

**For content questions:**
- All content in ClickUp doc_id: 2kyqc7z9-135
- Company info in ClickUp doc_id: 2kyqc7z9-55

**For project management:**
- Main task: https://app.clickup.com/t/86c61az65
- Operations space: https://app.clickup.com/90151722985/v/s/90157388262

---

**Document Created:** October 18, 2025
**Last Updated:** October 18, 2025
**Status:** Active Development Plan
**Owner:** Tomasz Jędrak
