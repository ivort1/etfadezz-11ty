# ET Fadezz

## Overview

This is a website for a client of mine, ET Fadezz, who owns a private barber studio in Fontana, CA.

---

## Tech Stack

- **Framework:** 11ty / Eleventy
- **Styling:** Vanilla CSS
- **Hosting:** Netlify
- **Repo:** GitHub

---

## Core Principles

### 1. Performance Above All

Every decision should optimize for:
- **PageSpeed Insights:** Target 100 across all metrics
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Minimal requests:** No external fonts, no unnecessary scripts

### 2. SEO-First Design

- Semantic HTML (proper heading hierarchy, landmarks)
- Meta descriptions and Open Graph tags on every page
- Schema.org structured data for local businesses
- Fast load times (Google rewards speed)
- Mobile-first responsive design

### 3. Conversion-Focused

- Phone number always visible and clickable
- Clear CTAs above the fold
- Contact forms simple and accessible
- Trust signals (reviews, credentials) prominent
- CONVERSIONS AND SEO ARE CRITICAL. We want the client's customers to convert to sales and for the site to appear organically in search engines.

---

## Technical Rules

### Fonts

Use system fonts only. No Google Fonts, no external font requests.
```css
--font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-serif: Georgia, 'Times New Roman', serif;
```

If a design genuinely benefits from a custom font, mention it but do not implement without approval.

### Images

- Always use 11ty's image component for optimization
- Provide descriptive alt text for accessibility and SEO
- Use WebP format when possible
- Lazy load below-the-fold images

### SVGs

- Inline SVGs when possible for color control with `currentColor`
- Use `aria-hidden="true"` for decorative icons
- When iterating through data, import SVGs efficiently or use an icon component


---

## When Helping, Claude Should:

1. **Reference site.en.ts** for all business content
2. **Match existing patterns** in code style and file structure
3. **Provide complete, working code** - no placeholders or TODOs
4. **Prioritize performance** - no bloat, no unnecessary dependencies
5. **Think SEO** - semantic HTML, proper headings, meta tags
6. **Think conversion** - CTAs visible, phone clickable, forms simple
7. **Challenge me** - If I'm wrong or there's a better approach, say so
8. **Ask questions** - Clarify before assuming
9. **Recommend the best solution** - Not just the easiest one

---

## Pre-Launch Checklist

Before deploying any client site:

- [ ] All pages have unique meta titles and descriptions
- [ ] Schema.org LocalBusiness markup is accurate
- [ ] All images have alt text
- [ ] Phone numbers are clickable `tel:` links
- [ ] Contact form works (test submission)
- [ ] Mobile responsive (test on real device)
- [ ] PageSpeed Insights score 95+ on all metrics
- [ ] No console errors
- [ ] Favicon installed
- [ ] robots.txt and sitemap.xml present
- [ ] Google Business Profile linked

---