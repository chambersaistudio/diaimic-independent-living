# Diaimic Independent Shared Living — Website

A clean, modern, professional static website for **Diaimic Independent Shared Living**, a supportive shared housing service.

---

## Project Overview

- **Business:** Diaimic Independent Shared Living
- **Type:** Static website (HTML / CSS / JavaScript only)
- **Hosting:** Netlify
- **Domain:** Managed through Design.com (DNS pointed to Netlify after deployment)

---

## File Structure

```
/
├── index.html        # Single-page website (all sections)
├── style.css         # All styles — color palette, layout, responsive
├── script.js         # Mobile nav, scroll effects, fade-in animations
└── README.md         # This file
```

---

## Sections

1. **Hero** — Headline, subheadline, Call/Email CTAs
2. **About** — Business description and values
3. **Who We Serve** — Resident population cards
4. **What We Provide** — Feature/amenity cards
5. **Payment Options** — Accepted payment methods (SSI, SSDI, Private Pay)
6. **Gallery** — Shared living space images (Unsplash stock photos)
7. **Contact** — Phone and email contact only (no form, no address)

---

## Contact Information

| | |
|---|---|
| **Phone** | 219-302-3016 |
| **Email** | DiaimicLiving@yahoo.com |

---

## Design

- **Color palette:** Olive green, beige/cream, white, earth tones, gold accents
- **Fonts:** Inter (body), Playfair Display (headings) — loaded from Google Fonts
- **Images:** Unsplash stock photos loaded via URL (no local image assets required)

---

## Deployment (Netlify)

### Option A — Netlify Drop (Quickest)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag and drop this entire project folder onto the Netlify dashboard
3. Your site will be live within seconds

### Option B — GitHub + Netlify (Recommended)

1. Push this repo to GitHub
2. Log into Netlify → **Add new site** → **Import an existing project**
3. Connect your GitHub account and select this repository
4. Build settings:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.` (or leave as repo root)
5. Click **Deploy site**

### Custom Domain (Design.com DNS)

After your site is live on Netlify:

1. In Netlify: **Site settings → Domain management → Add custom domain**
2. Enter your domain and note the Netlify DNS values provided
3. In Design.com: Update the DNS records to point to Netlify
   - Typically: set the **A record** or **CNAME** as instructed by Netlify
4. SSL certificate will be provisioned automatically (Let's Encrypt)

> DNS changes typically propagate within 1–48 hours.

---

## Editing the Site

All content is in `index.html` — each section is clearly labeled with comments and `id` attributes.

- **Phone/email:** Search for `2193023016` and `DiaimicLiving@yahoo.com`
- **Colors:** Edit CSS custom properties at the top of `style.css` under `:root {}`
- **Section content:** Find the relevant `<section>` by its `id` attribute in `index.html`

---

## No Backend Required

This site has:
- No database
- No login system
- No contact form
- No booking or payment system
- No server-side code

It is 100% static and can be hosted anywhere that serves HTML files.
