# King Tut Template - Trainee Customization Guide

## 🎯 Overview

Welcome! This **King Tut Template** is a universal lead generation website that works for **ANY business category**. Whether you're building a site for:

- Home services (plumbing, HVAC, roofing)
- Professional services (lawyers, accountants, consultants)
- Health & wellness (gyms, spas, clinics)
- Automotive (detailing, repair, dealers)
- Food & beverage (restaurants, catering)
- **ANY local business!**

This guide will show you how to customize it for your specific niche in just a few steps.

---

## 🚀 Quick Start (5 Steps)

### Step 1: Define Your Business Details

Before you start, gather this information:

```
Business Name: __________________________
Primary Service: _________________________
Target City/Region: _____________________
Phone Number: ___________________________
Business Email: __________________________
```

### Step 2: Update Site Configuration

Open `site.config.json` and update:

```json
{
  "site": {
    "name": "Your Business Name",
    "tagline": "Your catchy tagline",
    "domain": "yourdomain.com",
    "description": "Brief description of what you do"
  },
  "contact": {
    "phone": "(555) 123-4567",
    "email": "info@yourbusiness.com"
  }
}
```

### Step 3: Run the Design Tokens Sync

This updates all colors and styles across your site:

```bash
npm run sync:design-tokens
```

### Step 4: Customize Homepage Content

Edit `index.html` and search for `PUT YOUR` placeholders:

- `PUT SITE NAME HERE` → Your Business Name
- `PUT PRIMARY SERVICE HERE` → Your Main Service
- `PUT YOUR MAIN CTA TEXT HERE` → Your Call-to-Action

### Step 5: Customize City Pages

Use the city templates to create location-specific pages for your service area.

---

## 📋 Complete Customization Checklist

### ✅ Site Configuration (site.config.json)

- [ ] Update site name and tagline
- [ ] Update contact information
- [ ] Update social media links
- [ ] Update navigation labels
- [ ] Update CTA button text

### ✅ Homepage (index.html)

- [ ] Update hero title and subtitle
- [ ] Update service descriptions
- [ ] Update "How It Works" steps
- [ ] Update testimonials
- [ ] Update footer content

### ✅ Service Pages (pages/services/)

- [ ] Rename service template files to your services
- [ ] Update service names and descriptions
- [ ] Add service-specific content
- [ ] Update service images

### ✅ City Pages (pages/cities/)

- [ ] Keep existing city pages OR
- [ ] Delete and create new city pages for your area
- [ ] Update city-specific content
- [ ] Add local neighborhoods and ZIP codes

### ✅ About Page (pages/about.html)

- [ ] Update company story
- [ ] Update team information
- [ ] Update credentials/certifications

### ✅ Contact Page (pages/contact.html)

- [ ] Update contact form
- [ ] Update business hours
- [ ] Update address/location

### ✅ Images

- [ ] Replace placeholder images
- [ ] Add your logo
- [ ] Add service photos
- [ ] Add before/after photos

---

## 🎨 Customizing for Different Niches

### Example 1: Roofing Company

**Service Names:**
- "Service 1" → "Roof Repair"
- "Service 2" → "Roof Replacement"
- "Service 3" → "Roof Inspection"
- "Service 4" → "Emergency Repairs"

**City Page Content:**
- "Professional services" → "Professional roofing services"
- "Quality service" → "Quality roofing"
- Mention local weather conditions
- Add zip codes you serve

**How It Works:**
1. "Request a free roof inspection"
2. "Get a detailed estimate"
3. "Schedule your roofing project"
4. "Enjoy your new roof"

### Example 2: Law Firm

**Service Names:**
- "Service 1" → "Personal Injury"
- "Service 2" → "Family Law"
- "Service 3" → "Business Law"
- "Service 4" → "Estate Planning"

**City Page Content:**
- "Professional services" → "Legal services"
- "Quick response" → "Free consultation"
- Mention local courts and jurisdictions
- Add practice areas

**How It Works:**
1. "Schedule free consultation"
2. "Discuss your case"
3. "We handle your legal matters"
4. "Get the results you deserve"

### Example 3: HVAC Company

**Service Names:**
- "Service 1" → "AC Repair"
- "Service 2" → "Heating Repair"
- "Service 3" → "Installation"
- "Service 4" → "Maintenance Plans"

**City Page Content:**
- "Professional services" → "HVAC services"
- "Local expertise" → "24/7 emergency service"
- Mention climate considerations
- Add service areas

**How It Works:**
1. "Call for service"
2. "Same-day diagnosis"
3. "Expert repairs"
4. "Guaranteed comfort"

---

## 🔍 Find and Replace Guide

### Universal Placeholders to Customize

Search your files for these placeholders and replace them:

| Placeholder | Replace With | Example |
|------------|--------------|---------|
| `PUT SITE NAME HERE` | Your business name | "ABC Roofing" |
| `PUT PRIMARY SERVICE HERE` | Your main service | "Roof Repair & Replacement" |
| `PUT SERVICES HERE` | Your services | "Roofing Services" |
| `PUT SERVICE TYPE HERE` | Specific service | "Roof Repair" |
| `PUT CITY NAME HERE` | Target city | "Austin" |
| `PUT STATE HERE` | State name | "Texas" |
| `PUT YOUR DOMAIN HERE` | Your domain | "abcroofing.com" |
| `PUT YOUR BUSINESS NAME HERE` | Legal business name | "ABC Roofing, LLC" |
| `PUT KEYWORD 1 HERE` | SEO keyword | "roof repair austin" |

### Using Find and Replace in VS Code

1. Press `Ctrl + Shift + F` (Windows) or `Cmd + Shift + F` (Mac)
2. Enter placeholder text (e.g., "PUT SITE NAME HERE")
3. Enter your replacement text
4. Click "Replace All"
5. Review changes

---

## 📝 Service Page Customization

### Renaming Service Pages

Current files in `pages/services/`:
- `service-template-1.html`
- `service-template-2.html`
- `service-template-3.html`
- `service-template-4.html`

**Rename to match your services:**

```bash
# Example for roofing:
mv service-template-1.html roof-repair.html
mv service-template-2.html roof-replacement.html
mv service-template-3.html roof-inspection.html
mv service-template-4.html emergency-repairs.html
```

### Service Page Content Structure

Each service page should include:

1. **Hero Section**
   - Service name as H1
   - Brief description
   - CTA button

2. **What's Included**
   - List of features
   - What customer gets
   - Deliverables

3. **How It Works**
   - Step-by-step process
   - Timeline
   - What to expect

4. **Why Choose Us**
   - Benefits
   - Guarantees
   - Differentiators

5. **CTA Section**
   - Call to action
   - Contact information
   - Next steps

---

## 🏙️ City Page Customization

### Strategy 1: Keep Existing Cities

If you serve major US cities, keep the existing 71 city pages and customize them:

1. Open a city page (e.g., `pages/cities/austin-tx.html`)
2. Replace generic content with niche-specific content
3. Add local references (neighborhoods, landmarks)
4. Include local statistics or information
5. Add city-specific images

### Strategy 2: Create Custom City Pages

If you serve specific local areas:

1. Delete existing city pages you don't need
2. Copy `_TEMPLATE-CITY.html`
3. Rename to your city (e.g., `santa-monica-ca.html`)
4. Follow template instructions
5. Ensure 600+ words with 250+ city-unique words

### City Page Content Tips

✅ **DO:**
- Mention specific neighborhoods
- Include ZIP codes you serve
- Reference local landmarks
- Discuss local conditions (weather, regulations)
- Add before/after photos from that area

❌ **DON'T:**
- Copy and paste same content across cities
- Use generic descriptions
- Forget to update meta tags
- Skip local optimization

---

## 🎯 SEO Customization

### Homepage SEO

```html
<title>Your Business Name | Primary Service in Your City</title>
<meta name="description" content="Leading provider of [service] in [city]. [Benefit 1], [Benefit 2]. Call for free quote!" />
<meta name="keywords" content="[service] [city], [city] [service], [service] near me" />
```

### City Page SEO

```html
<title>Service Name in City Name, State | Business Name</title>
<meta name="description" content="Professional [service] in [City], [State]. Serving [neighborhoods]. Fast, reliable service. Call today!" />
<meta name="keywords" content="[service] [city], [service] [city] [state], [city] [service] contractor" />
```

### Service Page SEO

```html
<title>Service Name | Business Name</title>
<meta name="description" content="Expert [service name]. [Key benefit]. [Second benefit]. Get a free quote today!" />
```

---

## 🖼️ Image Customization

### Required Images

1. **Logo** (`images/logo/kingtutlogo.png`)
   - Replace with your business logo
   - Recommended: 500x500px PNG with transparent background

2. **Favicon** (`images/logo/favicon.ico`)
   - Create from your logo
   - Use favicon generator: https://favicon.io

3. **Hero Image** (`images/logo/heroimage.png`)
   - Main homepage hero image
   - Recommended: 1920x1080px
   - Should represent your service

4. **Service Images** (various)
   - Replace placeholder images
   - Use high-quality photos of your work
   - Before/after photos work great

### Image Best Practices

✅ **Quality:**
- Use high-resolution images (min 1200px wide)
- Compress for web (use TinyPNG or similar)
- Maintain aspect ratios

✅ **Relevance:**
- Show actual work (not stock photos if possible)
- Include before/after photos
- Show your team in action

✅ **SEO:**
- Use descriptive file names (`roof-repair-austin.jpg`)
- Add alt text describing the image
- Include location in alt text when relevant

---

## 🎨 Color Customization

Your template uses the gold and navy color scheme from the King Tut logo. To customize:

### Option 1: Keep Gold/Navy Theme

Already done! Your colors match the professional gold (#C8A860) and navy (#2B4F66) palette.

### Option 2: Change to Your Brand Colors

1. Open `site.config.json`
2. Update colors in `branding.colors`:

```json
{
  "branding": {
    "colors": {
      "primary": {
        "base": "#YOUR_PRIMARY_COLOR",
        "dark": "#DARKER_VERSION",
        "light": "#LIGHTER_VERSION"
      },
      "secondary": {
        "base": "#YOUR_SECONDARY_COLOR",
        "dark": "#DARKER_VERSION",
        "light": "#LIGHTER_VERSION"
      }
    }
  }
}
```

3. Run: `npm run sync:design-tokens`

### Finding Your Brand Colors

Tools to help:
- **From logo:** Upload to https://imagecolorpicker.com
- **Color scheme:** Use https://coolors.co
- **Shades:** Use https://maketintsandshades.com

---

## 📱 Component Customization

### Navigation Menu

Edit navigation in `site.config.json`:

```json
{
  "navigation": {
    "main": [
      {"label": "Services", "url": "pages/services.html"},
      {"label": "Locations", "url": "pages/locations.html"},
      {"label": "About", "url": "pages/about.html"},
      {"label": "Contact", "url": "pages/contact.html"}
    ],
    "cta": {
      "label": "Get Free Quote",
      "url": "pages/book.html"
    }
  }
}
```

### Footer

Edit `components/footer.html` or footer sections in pages.

### Forms

Forms are in:
- Homepage hero section
- `pages/book.html`
- `pages/contact.html`

Customize form fields to match your business needs.

---

## 🚀 Launch Checklist

### Pre-Launch

- [ ] All placeholders replaced
- [ ] SEO meta tags updated
- [ ] Images replaced with your photos
- [ ] Logo and favicon updated
- [ ] Contact information correct
- [ ] Forms tested
- [ ] Links all working
- [ ] Mobile responsive checked

### Post-Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Set up Google Business Profile
- [ ] Create social media links
- [ ] Set up email forwarding
- [ ] Create 301 redirects if needed

---

## 🆘 Common Questions

### Q: Do I need to keep all 71 city pages?

**A:** No! Delete cities you don't serve. Keep and customize only the cities relevant to your business.

### Q: Can I add more service pages?

**A:** Yes! Copy `_TEMPLATE-SERVICE.html` and create as many service pages as you need.

### Q: How do I change the color scheme?

**A:** Edit `site.config.json` → `branding.colors` → run `npm run sync:design-tokens`

### Q: What if I don't serve multiple cities?

**A:** Delete the cities folder. Focus on service pages and a strong homepage.

### Q: Can I use this for e-commerce?

**A:** This template is designed for local service businesses. For e-commerce, you'd need significant modifications.

### Q: How do I add a blog?

**A:** Copy the template structure to create blog post pages. Consider using a CMS for easier blog management.

---

## 📚 Additional Resources

### Template Documentation

- **README.md** - Main documentation
- **AVADA-THEME-GUIDE.md** - Theme customization
- **COLOR-PALETTE-REFERENCE.md** - Color usage guide
- **BUILD-GUIDE.md** - Building and deployment

### External Resources

- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics:** https://analytics.google.com
- **Schema.org:** https://schema.org (for structured data)
- **Can I Use:** https://caniuse.com (browser compatibility)

---

## 🎓 Next Steps

1. **Start Simple:** Customize homepage first
2. **Add Services:** Create 3-5 service pages
3. **Add Locations:** Create city pages for your service area
4. **Add Content:** Write unique, helpful content
5. **Add Images:** Replace placeholders with real photos
6. **Test Everything:** Forms, links, mobile view
7. **Launch:** Deploy and submit to search engines

---

## ✅ Quick Reference Card

Print this out and keep it handy:

```
KING TUT TEMPLATE QUICK REFERENCE

1. SITE SETTINGS
   → site.config.json

2. SYNC COLORS/TOKENS
   → npm run sync:design-tokens

3. HOMEPAGE
   → index.html

4. SERVICE PAGES
   → pages/services/

5. CITY PAGES
   → pages/cities/

6. IMAGES
   → images/

7. CSS STYLES
   → css/styles.css
   → css/avada-enhancements.css

8. FIND & REPLACE
   → Ctrl+Shift+F (Windows)
   → Cmd+Shift+F (Mac)

COMMON PLACEHOLDERS:
- PUT SITE NAME HERE
- PUT SERVICE TYPE HERE
- PUT CITY NAME HERE
- PUT YOUR DOMAIN HERE
```

---

**Good luck with your project! 🎉**

Remember: This is a **starting point**. Customize it, make it your own, and create something amazing for your clients!

---

**Last Updated:** November 29, 2025  
**Template Version:** King Tut Universal v2.0  
**Support:** See README.md for additional help

