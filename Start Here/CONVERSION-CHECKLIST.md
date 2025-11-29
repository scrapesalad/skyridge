# Template Conversion Checklist

Use this checklist when converting this template to your own site.

## ✅ Configuration

- [ ] Updated `site.config.json` with your site information
- [ ] Updated `package.json` name and description
- [ ] Updated domain in `robots.txt`
- [ ] Updated sitemap domain (run `npm run generate:sitemap`)

## ✅ Branding

- [ ] Replaced logo files in `images/logo/`
- [ ] Updated logo paths in HTML files
- [ ] Updated alt text for logos
- [ ] Updated colors in `css/styles.css`
- [ ] Updated fonts (if custom)
- [ ] Updated favicon files

## ✅ Content

- [ ] Updated homepage (`index.html`)
  - [ ] Title and meta description
  - [ ] Hero section
  - [ ] Services section
  - [ ] Testimonials
  - [ ] Footer
- [ ] Updated all pages in `pages/`
  - [ ] About page
  - [ ] Services page
  - [ ] Contact page
  - [ ] Other pages
- [ ] Removed/updated template-specific content
- [ ] Updated all placeholder images

## ✅ Navigation

- [ ] Updated navigation in `site.config.json`
- [ ] Updated navigation in HTML files
- [ ] Updated footer links
- [ ] Updated CTA buttons

## ✅ Contact Information

- [ ] Updated phone number
- [ ] Updated email address
- [ ] Updated address (if applicable)
- [ ] Updated social media links
- [ ] Updated contact forms

## ✅ SEO

- [ ] Updated all meta titles
- [ ] Updated all meta descriptions
- [ ] Updated JSON-LD structured data
- [ ] Updated Open Graph tags
- [ ] Updated Twitter Card tags
- [ ] Generated sitemap (`npm run generate:sitemap`)
- [ ] Updated canonical URLs

## ✅ Analytics

- [ ] Added Google Analytics ID (if using)
- [ ] Updated tracking code in HTML files
- [ ] Tested analytics tracking

## ✅ Testing

- [ ] Tested all pages load correctly
- [ ] Tested all links work
- [ ] Tested mobile responsiveness
- [ ] Tested in multiple browsers
- [ ] Ran validation scripts:
  - [ ] `npm run validate:cities` (if using city pages)
  - [ ] `npm run check:sitemap`
  - [ ] `.\verify-seo.ps1` (if on Windows)

## ✅ Cleanup

- [ ] Removed unused pages
- [ ] Removed template-specific documentation
- [ ] Updated README.md
- [ ] Removed example/test files
- [ ] Cleaned up comments in code

## ✅ Final Checks

- [ ] All "Pond Cleanup" references replaced
- [ ] All "pondcleanup.com" references replaced
- [ ] All placeholder content replaced
- [ ] All images replaced
- [ ] All forms work (if applicable)
- [ ] Site loads quickly
- [ ] No console errors
- [ ] SEO elements present

## ✅ Deployment

- [ ] Generated final sitemap
- [ ] Tested on staging (if applicable)
- [ ] Deployed to production
- [ ] Verified live site works
- [ ] Submitted sitemap to Google Search Console
- [ ] Verified analytics on live site

---

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete

