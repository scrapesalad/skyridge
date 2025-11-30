# Setup Guide - {{BUSINESS_NAME}}

This guide walks you through maintaining **{{BUSINESS_NAME}}** at **{{FULL_URL}}**.

## Step 1: Initial Configuration (5 minutes)

### 1.1 Site Configuration

The generator has already created `site.config.json` with your business information:

```json
{
  "site": {
    "name": "{{BUSINESS_NAME}}",
    "domain": "{{DOMAIN}}",
    "url": "{{FULL_URL}}",
    "description": "{{HOME_PAGE_DESCRIPTION}}"
  },
  "contact": {
    "phone": "{{PHONE}}",
    "email": "{{EMAIL}}",
    "address": {
      "street": "{{STREET}}",
      "city": "{{CITY}}",
      "state": "{{STATE}}",
      "zip": "{{ZIP}}"
    }
  }
}
```

In most cases you won't need to change this, but you can edit `site.config.json` if needed.

### 1.2 Package.json

The `package.json` has been configured with your site information:

```json
{
  "name": "{{DOMAIN_SLUG}}",
  "description": "{{HOME_PAGE_DESCRIPTION}}"
}
```

## Step 2: Branding (10 minutes)

### 2.1 Replace Logo

1. **Add your logo files** to `images/logo/`:
   - `your-logo.png` (main logo)
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`

2. **Update `site.config.json`**:
```json
{
  "branding": {
    "logo": {
      "path": "images/logo/your-logo.png",
      "alt": "{{BUSINESS_NAME}}"
    }
  }
}
```

3. **Update HTML files**: Search for old logo references and replace:
   - `images/logo/kingtutlogo.png` → `images/logo/your-logo.png`
   - `alt="{{BUSINESS_NAME}}"` → `alt="Your Business Name"`

### 2.2 Update Colors

**Option 1: Via CSS (Recommended)**

Edit `css/design-tokens-override.css`:

```css
:root {
  --color-primary: {{PRIMARY_COLOR}};
  --color-secondary: {{SECONDARY_COLOR}};
  --color-accent: {{ACCENT_COLOR}};
  --color-background: {{BACKGROUND_COLOR}};
  --color-text: {{TEXT_COLOR}};
}
```

**Option 2: Via Config**

Update `site.config.json` → `branding.colors` (requires build script to apply).

## Step 3: Content Review (30-60 minutes)

### 3.1 Homepage (`index.html`)

The generator has pre-filled:
- **Title**: `{{SITE_NAME}} | {{PRIMARY_SERVICE}}`
- **Meta description**: `{{HOME_PAGE_DESCRIPTION}}`
- **H1**: Professional {{SERVICE_TYPE}} Services
- **Services section**: Pre-filled with {{SERVICE_TYPE}} content
- **Contact information**: {{PHONE}}, {{EMAIL}}

**Review and customize:**
- Update service descriptions to match your specific offerings
- Replace testimonials with your own
- Update gallery images
- Customize call-to-action text

### 3.2 Navigation

Navigation is configured in `site.config.json`:

```json
{
  "navigation": {
    "main": [
      { "label": "Services", "url": "pages/services.html" },
      { "label": "About", "url": "pages/about.html" },
      { "label": "Contact", "url": "pages/contact.html" }
    ],
    "cta": {
      "label": "Get Started",
      "url": "pages/book.html"
    }
  }
}
```

### 3.3 Page Content

All pages in `pages/` have been pre-filled with your business information. Review each page:

1. **About page** (`pages/about.html`): Update company story and mission
2. **Services page** (`pages/services.html`): Customize service descriptions
3. **Contact page** (`pages/contact.html`): Verify contact form works
4. **City pages** (`pages/cities/`): Update with specific city information if needed

### 3.4 Contact Information

Contact information is already configured:
- **Phone**: {{PHONE}}
- **Email**: {{EMAIL}}
- **Address**: {{STREET}}, {{CITY}}, {{STATE}} {{ZIP}}

Update contact forms to ensure they send to the correct email.

## Step 4: SEO Configuration (15 minutes)

### 4.1 Structured Data

Structured data in `index.html` has been pre-filled with:
- Business name: {{BUSINESS_NAME}}
- Website URL: {{FULL_URL}}
- Service type: {{PRIMARY_SERVICE}}

Review and update if needed.

### 4.2 Analytics

If using Google Analytics:

1. Get your tracking ID (G-XXXXXXXXXX)
2. Update `site.config.json`:
```json
{
  "analytics": {
    "googleAnalytics": {
      "enabled": true,
      "trackingId": "G-XXXXXXXXXX"
    }
  }
}
```

3. Search and replace `{{GOOGLE_ANALYTICS_ID}}` in HTML files with your tracking ID

### 4.3 Generate Sitemap

```bash
npm run generate:sitemap
```

This creates/updates `sitemap.xml` automatically.

### 4.4 Update robots.txt

Edit `robots.txt`:

```
User-agent: *
Allow: /
Sitemap: {{FULL_URL}}/sitemap.xml
```

## Step 5: Images

### 5.1 Stock Images

The generator has copied stock images for {{SERVICE_TYPE}} to `images/stock/`. You can:
- Use these as-is
- Replace with your own images
- Add more images to showcase your work

### 5.2 Scraped Images (if provided)

If you provided an image source URL during generation, images are in `images/scraped/`. Review these and:
- Keep images you have rights to use
- Replace any copyrighted images
- Rename and organize as needed

### 5.3 Gallery Images

Update gallery images in:
- `pages/gallery.html`
- Homepage gallery section
- Service pages

## Step 6: Testing (15 minutes)

### 6.1 Local Testing

```bash
npm run dev
```

Test:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Links are correct
- [ ] Images display
- [ ] Forms work (if applicable)
- [ ] Mobile responsive
- [ ] Fast loading

### 6.2 Quality Checks

```bash
# Validate city pages (if using)
npm run validate:cities

# Check sitemap
npm run check:sitemap
```

### 6.3 Browser Testing

Test in:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

## Step 7: Final Configuration (10 minutes)

### 7.1 Final Checks

- [ ] All placeholder content replaced
- [ ] All images replaced
- [ ] All links work
- [ ] Analytics configured
- [ ] SEO elements updated
- [ ] Sitemap generated
- [ ] robots.txt updated
- [ ] Contact information correct

### 7.2 Search & Replace

Search for these and verify they're correct:
- `{{BUSINESS_NAME}}` → Should be replaced everywhere
- `{{DOMAIN}}` → Should be your domain
- `{{FULL_URL}}` → Should be your full URL
- `{{PRIMARY_SERVICE}}` → Should be your service type

## Step 8: Deployment

### 8.1 Pre-Deployment

```bash
# Generate sitemap
npm run generate:sitemap

# Run validation
npm run validate:cities  # if applicable
npm run check:sitemap
```

### 8.2 Deploy

Choose your hosting method:

**Netlify:**
1. Drag and drop `index.html` and all files
2. Or connect Git repository

**Vercel:**
1. Connect Git repository
2. Deploy automatically

**GitHub Pages:**
1. Push to GitHub
2. Enable Pages in repository settings

**FTP/SFTP:**
1. Upload all files to web server
2. Ensure `index.html` is in root

### 8.3 Post-Deployment

- [ ] Test live site
- [ ] Submit sitemap to Google Search Console
- [ ] Verify analytics tracking
- [ ] Test all forms
- [ ] Check mobile on real devices

## Quick Reference

### Files to Review

**Must Review:**
- `site.config.json` - Site configuration
- `index.html` - Homepage content
- `package.json` - Project info
- `robots.txt` - Domain reference

**Should Review:**
- `css/design-tokens-override.css` - Colors
- `images/logo/` - Logo files
- `pages/*.html` - Page content

## Troubleshooting

### Issue: Scripts don't work
**Fix**: Run `npm install` first

### Issue: Development server won't start
**Fix**: Check if port 3000 is in use, try `npm run dev -- --port=3001`

### Issue: Sitemap generation fails
**Fix**: Ensure HTML files exist in `pages/` directory

### Issue: Images not showing
**Fix**: Check file paths in HTML match actual file locations

### Issue: Links broken
**Fix**: Use relative paths (e.g., `pages/about.html` not `/pages/about.html`)

## Next Steps

After setup:
1. ✅ Customize design further
2. ✅ Add more content
3. ✅ Set up analytics
4. ✅ Submit to search engines
5. ✅ Monitor performance
6. ✅ Iterate and improve

---

**Need Help?** Check the main README.md for more documentation.

**Your Site:** {{FULL_URL}}
**Business:** {{BUSINESS_NAME}}
**Service:** {{PRIMARY_SERVICE}}

