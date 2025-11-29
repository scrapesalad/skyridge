# SEO Metadata Training Guide - King Tut Template

This guide explains all the SEO and metadata elements in the King Tut Template. Every page uses training placeholders like "PUT TITLE HERE" to teach you what goes where.

## 🎯 Overview

All pages in the template use **training placeholders** instead of real content. This helps you learn:
- What each SEO element does
- Where to put your content
- How to format it correctly

## 📋 Required SEO Elements

### 1. Title Tag (`<title>`)

**Location**: In `<head>` section  
**Format**: `PUT PAGE TITLE HERE | PUT SITE NAME HERE`  
**Length**: 50-60 characters (including spaces and pipe)  
**Purpose**: Appears in browser tabs and search results

**Example**:
```html
<title>About Us | Your Business Name</title>
```

**Best Practices**:
- Include your main keyword
- Make it compelling
- Include site name after pipe
- Keep it under 60 characters

### 2. Meta Description (`<meta name="description">`)

**Location**: In `<head>` section  
**Format**: `PUT YOUR PAGE DESCRIPTION HERE`  
**Length**: 150-160 characters  
**Purpose**: Appears in search results below the title

**Example**:
```html
<meta name="description" content="Professional services in your area. We provide quality solutions with excellent customer service. Get a free quote today." />
```

**Best Practices**:
- Include main keywords naturally
- Make it compelling (encourage clicks)
- Include a call-to-action if possible
- Stay within 150-160 characters

### 3. Canonical URL (`<link rel="canonical">`)

**Location**: In `<head>` section  
**Format**: Full URL to the page  
**Purpose**: Tells search engines the preferred URL (prevents duplicate content issues)

**Example**:
```html
<link rel="canonical" href="https://yourdomain.com/pages/about" />
```

**Best Practices**:
- Use full URL with https://
- Match the actual page URL
- One per page

### 4. Meta Viewport

**Location**: In `<head>` section  
**Format**: Standard (usually don't change)  
**Purpose**: Makes page mobile-responsive

**Example**:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## 🔍 Optional but Recommended

### 5. Meta Keywords

**Location**: In `<head>` section  
**Format**: Comma-separated keywords  
**Purpose**: Helps search engines understand page topics (less important now, but still helpful)

**Example**:
```html
<meta name="keywords" content="keyword1, keyword2, keyword3, keyword4" />
```

**Best Practices**:
- Use 5-10 relevant keywords
- Include variations of main keyword
- Don't stuff keywords

### 6. Meta Robots

**Location**: In `<head>` section  
**Format**: `"index, follow"` or `"noindex, nofollow"`  
**Purpose**: Controls whether search engines should index the page

**Example**:
```html
<meta name="robots" content="index, follow" />
```

**Options**:
- `"index, follow"` - Index page and follow links (default, usually what you want)
- `"noindex, nofollow"` - Don't index page, don't follow links
- `"noindex, follow"` - Don't index but follow links

## 📱 Social Media Tags

### 7. Open Graph Tags (Facebook, LinkedIn)

**Location**: In `<head>` section  
**Purpose**: Controls how page appears when shared on Facebook, LinkedIn, etc.

**Required Tags**:
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://PUT-YOUR-DOMAIN-HERE.com/pages/PUT-PAGE-PATH-HERE" />
<meta property="og:title" content="PUT PAGE TITLE HERE" />
<meta property="og:description" content="PUT PAGE DESCRIPTION HERE" />
<meta property="og:image" content="https://PUT-YOUR-DOMAIN-HERE.com/images/PUT-OG-IMAGE-FILENAME-HERE.jpg" />
<meta property="og:site_name" content="PUT YOUR SITE NAME HERE" />
```

**Best Practices**:
- Use same title/description as meta tags
- Image should be 1200x630 pixels
- Use full URLs

### 8. Twitter Card Tags

**Location**: In `<head>` section  
**Purpose**: Controls how page appears when shared on Twitter

**Required Tags**:
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="PUT PAGE TITLE HERE" />
<meta name="twitter:description" content="PUT PAGE DESCRIPTION HERE" />
<meta name="twitter:image" content="https://PUT-YOUR-DOMAIN-HERE.com/images/PUT-TWITTER-IMAGE-FILENAME-HERE.jpg" />
```

**Card Types**:
- `summary_large_image` - Large image card (recommended)
- `summary` - Small image card

## 🏗️ Structured Data (JSON-LD)

### 9. WebPage Schema

**Location**: In `<head>` section, inside `<script type="application/ld+json">`  
**Purpose**: Helps search engines understand your page

**Example**:
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "PUT PAGE TITLE HERE",
  "description": "PUT PAGE DESCRIPTION HERE",
  "url": "https://PUT-YOUR-DOMAIN-HERE.com/pages/PUT-PAGE-PATH-HERE"
}
```

### 10. Organization Schema

**Location**: In `<head>` section (usually on homepage)  
**Purpose**: Describes your business/organization

**Example**:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PUT YOUR BUSINESS NAME HERE",
  "url": "https://PUT-YOUR-DOMAIN-HERE.com",
  "logo": "https://PUT-YOUR-DOMAIN-HERE.com/images/PUT-LOGO-FILENAME-HERE.png",
  "description": "PUT YOUR BUSINESS DESCRIPTION HERE",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "PUT-YOUR-EMAIL-HERE@yourdomain.com"
  }
}
```

### 11. Service Schema

**Location**: On service detail pages  
**Purpose**: Describes a specific service

**Example**:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "PUT SERVICE TYPE HERE",
  "name": "PUT SERVICE NAME HERE",
  "description": "PUT SERVICE DESCRIPTION HERE",
  "provider": {
    "@type": "Organization",
    "name": "PUT YOUR BUSINESS NAME HERE",
    "url": "https://PUT-YOUR-DOMAIN-HERE.com"
  }
}
```

### 12. LocalBusiness Schema

**Location**: On city/location pages  
**Purpose**: Helps with local SEO

**Example**:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PUT YOUR BUSINESS NAME HERE - PUT CITY NAME HERE",
  "description": "PUT SERVICES HERE in PUT CITY NAME HERE, PUT STATE HERE",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "PUT CITY NAME HERE",
    "addressRegion": "PUT STATE CODE HERE",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "PUT CITY NAME HERE"
  }
}
```

## 📝 Page-by-Page Checklist

### Homepage (`index.html`)

- [ ] Title tag (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] WebSite schema (JSON-LD)
- [ ] Organization schema (JSON-LD)

### Standard Pages (`pages/about.html`, etc.)

- [ ] Title tag (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Canonical URL
- [ ] Open Graph tags (optional but recommended)
- [ ] WebPage schema (optional but recommended)

### Service Pages (`pages/services/service-name.html`)

- [ ] Title tag (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Canonical URL
- [ ] Service schema (JSON-LD) - **Important!**

### City Pages (`pages/cities/city-name-state.html`)

- [ ] Title tag (include city name)
- [ ] Meta description (include city name)
- [ ] Canonical URL
- [ ] LocalBusiness schema (JSON-LD) - **Important for local SEO!**
- [ ] 600+ words total content
- [ ] 250+ city-unique words

## 🎓 Training Placeholders Explained

### What You'll See

All pages use placeholders like:
- `PUT PAGE TITLE HERE`
- `PUT SITE NAME HERE`
- `PUT YOUR DOMAIN HERE`
- `PUT PAGE DESCRIPTION HERE`

### How to Use

1. **Find the placeholder** (search for "PUT")
2. **Replace with your content**
3. **Follow the format** shown in comments
4. **Check length** requirements

### Example Transformation

**Before (Template)**:
```html
<title>PUT PAGE TITLE HERE | PUT SITE NAME HERE</title>
```

**After (Your Content)**:
```html
<title>About Our Company | Acme Services</title>
```

## ✅ Quality Checklist

Before publishing, verify:

- [ ] All "PUT" placeholders replaced
- [ ] Title is 50-60 characters
- [ ] Description is 150-160 characters
- [ ] Canonical URL is correct
- [ ] Open Graph tags complete
- [ ] Structured data (JSON-LD) present where needed
- [ ] All URLs use your actual domain
- [ ] Images exist and paths are correct

## 🔧 Tools to Validate

### Title & Description Length
- Use character counter
- Google shows ~60 chars for title, ~160 for description

### Structured Data
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

### Open Graph
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## 📚 More Resources

- **Template Guide**: See `KING-TUT-TEMPLATE-GUIDE.md`
- **Quick Reference**: See `PAGE-BUILDING-QUICK-REFERENCE.md`
- **Examples**: Look at template files in `pages/`

---

**Remember**: Every page in the template uses these training placeholders. Replace them with your actual content, but keep the structure and format!

