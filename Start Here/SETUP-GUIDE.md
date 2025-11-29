# Setup Guide - Converting This Template to Your Site

This guide walks you through converting this template into your own website.

## Step 1: Initial Configuration (5 minutes)

### 1.1 Update Site Configuration

Open `site.config.json` and update:

```json
{
  "site": {
    "name": "Your Business Name",
    "domain": "yourdomain.com",
    "url": "https://yourdomain.com",
    "description": "Your business description for SEO"
  }
}
```

**Required fields:**
- `site.name` - Your business/website name
- `site.domain` - Your domain (without https://)
- `site.url` - Full URL with https://
- `site.description` - Brief description for SEO

### 1.2 Update Package.json

Edit `package.json`:

```json
{
  "name": "your-site-name",
  "description": "Your site description"
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
      "alt": "Your Business Name"
    }
  }
}
```

3. **Update HTML files**: Search for old logo references and replace:
   - `images/logo/pondcleanuplogo.png` → `images/logo/your-logo.png`
   - `alt="Pond Cleanup"` → `alt="Your Business Name"`

### 2.2 Update Colors

**Option 1: Via CSS (Recommended)**

Edit `css/styles.css`:

```css
:root {
  --color-primary: #0066cc;      /* Your primary color */
  --color-secondary: #00a3a3;      /* Your secondary color */
  --color-accent: #2d8659;        /* Your accent color */
  --color-background: #ffffff;    /* Background color */
  --color-text: #333333;          /* Text color */
}
```

**Option 2: Via Config**

Update `site.config.json` → `branding.colors` (requires build script to apply).

### 2.3 Update Fonts

Edit `css/styles.css`:

```css
body {
  font-family: 'Your Font', system-ui, sans-serif;
}

h1, h2, h3 {
  font-family: 'Your Heading Font', system-ui, sans-serif;
}
```

Or update `site.config.json` → `branding.fonts`.

## Step 3: Content Replacement (30-60 minutes)

### 3.1 Homepage (`index.html`)

Replace:
- **Title**: `<title>Your Site Name | Your Service</title>`
- **Meta description**: Update description tag
- **H1**: Update main headline
- **Hero text**: Update subtitle and description
- **Services section**: Update service descriptions
- **Testimonials**: Replace with your testimonials
- **Footer**: Update copyright and links

### 3.2 Navigation

Update `site.config.json` → `navigation`:

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

Then update navigation in HTML files to match.

### 3.3 Page Content

For each page in `pages/`:

1. **Update meta tags**:
   ```html
   <title>Page Title | Your Site Name</title>
   <meta name="description" content="Page description">
   ```

2. **Update content**: Replace all placeholder text

3. **Update images**: Replace placeholder images

4. **Update links**: Ensure all internal links work

### 3.4 Contact Information

Update in `site.config.json`:

```json
{
  "contact": {
    "phone": "(555) 123-4567",
    "email": "info@yourdomain.com",
    "address": {
      "street": "123 Main St",
      "city": "Your City",
      "state": "ST",
      "zip": "12345"
    }
  }
}
```

Then update contact forms and contact pages.

## Step 4: SEO Configuration (15 minutes)

### 4.1 Update Structured Data

In `index.html`, update JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Business Name",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/images/logo/your-logo.png"
}
```

### 4.2 Update Analytics

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

3. Update HTML files: Replace `G-R7MX5CJ43F` with your tracking ID

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
Sitemap: https://yourdomain.com/sitemap.xml
```

## Step 5: Remove/Adapt Template-Specific Content (20 minutes)

### 5.1 City Pages (If Not Needed)

If you don't need city/location pages:

1. Delete `pages/cities/` directory
2. Remove city links from navigation
3. Update `site.config.json`:
```json
{
  "features": {
    "cityPages": {
      "enabled": false
    }
  }
}
```

### 5.2 Service Pages

If you have different services:

1. Update `pages/services.html` with your services
2. Create individual service pages in `pages/services/`
3. Update service descriptions and images

### 5.3 Remove Unused Pages

Delete any pages you don't need:
- `pages/contractor/` (if not applicable)
- Unused service pages
- Any other template-specific pages

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

# Verify SEO (PowerShell)
.\verify-seo.ps1
```

### 6.3 Browser Testing

Test in:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

## Step 7: Final Configuration (10 minutes)

### 7.1 Update All Domain References

Search and replace across all files:
- `pondcleanup.com` → `yourdomain.com`
- `Pond Cleanup` → `Your Business Name`
- Old email addresses → Your email
- Old phone numbers → Your phone

### 7.2 Update Documentation

- Update `README.md` with your project info
- Remove or update template-specific docs
- Update any references to the template

### 7.3 Final Checks

- [ ] All placeholder content replaced
- [ ] All images replaced
- [ ] All links work
- [ ] Analytics configured
- [ ] SEO elements updated
- [ ] Sitemap generated
- [ ] robots.txt updated
- [ ] Contact information correct

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

### Files to Update

**Must Update:**
- `site.config.json` - Site configuration
- `index.html` - Homepage content
- `package.json` - Project info
- `robots.txt` - Domain reference
- All HTML files - Content and meta tags

**Should Update:**
- `css/styles.css` - Colors and fonts
- `images/logo/` - Logo files
- `pages/*.html` - Page content

**Optional:**
- `scripts/*.js` - If customizing automation
- `data/*` - If using data-driven features

### Search & Replace Checklist

Search for these and replace:
- `Pond Cleanup` → Your business name
- `pondcleanup.com` → yourdomain.com
- `professional service` → Your service keywords
- `G-R7MX5CJ43F` → Your Google Analytics ID
- `info@pondcleanup.com` → Your email
- Logo file names → Your logo names

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

**Need Help?** Check `README.md` for more documentation.

