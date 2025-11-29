# King Tut Template - Complete Page Building Guide

Welcome to the **King Tut Template**! This guide will teach you how to build pages using our template system. Every page in `pages/` serves as both a working example and a guide.

## 📚 Table of Contents

1. [Template Structure](#template-structure)
2. [Page Types](#page-types)
3. [Building Your First Page](#building-your-first-page)
4. [Common Components](#common-components)
5. [SEO Requirements](#seo-requirements)
6. [Page Templates Reference](#page-templates-reference)
7. [Best Practices](#best-practices)

---

## Template Structure

### Standard Page Layout

Every page follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- 1. Analytics (if enabled) -->
  <!-- 2. Meta Tags -->
  <!-- 3. Favicons -->
  <!-- 4. Stylesheet -->
</head>
<body>
  <!-- 5. Header (Navigation) -->
  <!-- 6. Main Content -->
  <!-- 7. Footer -->
</body>
</html>
```

### File Paths

**Important**: Pages in `pages/` use `../` to reference root files:

- CSS: `../css/styles.css`
- Images: `../images/`
- Homepage: `../index.html`
- Other pages: `about.html`, `services.html`, etc.

---

## Page Types

### 1. Standard Content Pages
- `about.html` - About page template
- `services.html` - Services listing
- `contact.html` - Contact page
- `faq.html` - FAQ page

**See**: `pages/about.html` for example

### 2. Service Detail Pages
- `services/service-2.html` - Individual service pages
- Located in `pages/services/`

**See**: `pages/services/service-2.html` for example

### 3. City/Location Pages
- `cities/salt-lake-city-ut.html` - City-specific pages
- Located in `pages/cities/`

**See**: `pages/cities/salt-lake-city-ut.html` for example

### 4. Special Pages
- `book.html` - Booking/quote form
- `gallery.html` - Image gallery
- `how-it-works.html` - Process explanation

---

## Building Your First Page

### Step 1: Copy a Template

Start with an existing page that's similar to what you need:

```bash
# For a standard page
cp pages/about.html pages/my-new-page.html

# For a service page
cp pages/services/service-2.html pages/services/my-service.html

# For a city page
cp pages/cities/salt-lake-city-ut.html pages/cities/my-city.html
```

### Step 2: Update the Head Section

```html
<head>
  <!-- STEP 2.1: Analytics (if using) -->
  <!-- Replace G-R7MX5CJ43F with your tracking ID from site.config.json -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-TRACKING-ID"></script>
  
  <!-- STEP 2.2: Meta Tags -->
  <meta charset="UTF-8" />
  <title>Your Page Title | Your Site Name</title>
  <meta name="description" content="Your page description (150-160 characters)" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- STEP 2.3: Canonical URL -->
  <link rel="canonical" href="https://yourdomain.com/pages/your-page" />
  
  <!-- STEP 2.4: Favicons (usually don't need to change) -->
  <link rel="icon" type="image/x-icon" href="../images/logo/favicon.ico" />
  <!-- ... other favicon sizes ... -->
  
  <!-- STEP 2.5: Stylesheet -->
  <link rel="stylesheet" href="../css/styles.css" />
</head>
```

### Step 3: Update Navigation

The header navigation is consistent across all pages:

```html
<header class="site-header">
  <div class="container header-inner">
    <!-- Logo - Update alt text if needed -->
    <a href="../index.html" class="logo">
      <img src="../images/logo/your-logo.png" alt="Your Site Name" class="logo-img" />
    </a>
    
    <!-- Navigation - Update links as needed -->
    <nav class="main-nav">
      <a href="services.html">Services</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
      <!-- Add your CTA button -->
      <a href="book.html" class="btn btn-primary">Get Started</a>
    </nav>
  </div>
</header>
```

### Step 4: Build Main Content

Use semantic HTML and CSS classes:

```html
<main>
  <!-- Hero Section -->
  <section class="directory-hero">
    <div class="container">
      <h1>Your Main Headline</h1>
      <p>Your compelling subtitle or description</p>
    </div>
  </section>

  <!-- Content Section -->
  <section class="how-it-works">
    <div class="container" style="max-width: 800px;">
      <h2>Section Heading</h2>
      <p>Your content here...</p>
    </div>
  </section>

  <!-- CTA Section (optional) -->
  <section class="bottom-cta">
    <div class="container">
      <h2>Call to Action</h2>
      <a href="book.html" class="btn btn-primary">Get Started</a>
    </div>
  </section>
</main>
```

### Step 5: Add Footer

```html
<footer class="site-footer">
  <div class="container footer-inner">
    <p>&copy; 2025 Your Site Name. All rights reserved.</p>
    <nav class="footer-nav">
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="contact.html">Contact</a>
    </nav>
  </div>
</footer>
```

---

## Common Components

### Hero Section

```html
<section class="directory-hero">
  <div class="container">
    <h1>Main Headline</h1>
    <p>Supporting text or description</p>
  </div>
</section>
```

### Content Section

```html
<section class="how-it-works">
  <div class="container" style="max-width: 800px;">
    <h2>Section Title</h2>
    <p>Content paragraph...</p>
    
    <!-- Lists -->
    <ul class="services-list">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>
</section>
```

### Service Cards Grid

```html
<section class="popular-services">
  <div class="container">
    <div class="services-grid">
      <article class="service-card">
        <h3>Service Name</h3>
        <p>Service description...</p>
        <a href="services/service-name.html" class="service-link">Learn more →</a>
      </article>
      <!-- More cards... -->
    </div>
  </div>
</section>
```

### CTA Section

```html
<section class="bottom-cta" style="background-image: url('../images/your-image.jpg');">
  <div class="container">
    <h2>Ready to Get Started?</h2>
    <p>Your call-to-action text</p>
    <a href="book.html" class="btn btn-primary">Get Started</a>
  </div>
</section>
```

### Buttons

```html
<!-- Primary Button -->
<a href="page.html" class="btn btn-primary">Primary Action</a>

<!-- Secondary Button -->
<a href="page.html" class="btn btn-secondary">Secondary Action</a>
```

---

## SEO Requirements

### Required Meta Tags

Every page MUST have:

```html
<!-- Title: 50-60 characters, include site name -->
<title>Page Title | Your Site Name</title>

<!-- Description: 150-160 characters, compelling -->
<meta name="description" content="Your page description for search results" />

<!-- Canonical: Full URL to this page -->
<link rel="canonical" href="https://yourdomain.com/pages/your-page" />

<!-- Viewport: For mobile responsiveness -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Optional but Recommended

```html
<!-- Keywords (optional) -->
<meta name="keywords" content="keyword1, keyword2, keyword3" />

<!-- Open Graph (for social sharing) -->
<meta property="og:title" content="Your Page Title" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="https://yourdomain.com/images/og-image.jpg" />
<meta property="og:url" content="https://yourdomain.com/pages/your-page" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Page Title" />
<meta name="twitter:description" content="Your description" />
```

### Structured Data (JSON-LD)

For service pages, add Service schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Your Service Type",
  "provider": {
    "@type": "Organization",
    "name": "Your Site Name",
    "url": "https://yourdomain.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
}
</script>
```

---

## Page Templates Reference

### Standard Page Template

**File**: `pages/about.html`

**Use for**: About, FAQ, general content pages

**Key sections**:
- Hero section
- Content sections with headings
- Lists or bullet points
- Optional CTA

### Services Listing Template

**File**: `pages/services.html`

**Use for**: Service overview pages

**Key sections**:
- Hero section
- Service cards grid
- Service descriptions
- CTA section

### Service Detail Template

**File**: `pages/services/service-2.html`

**Use for**: Individual service pages

**Key sections**:
- Hero with service name
- Service description
- What's included
- Pricing/process info
- CTA

### City Page Template

**File**: `pages/cities/salt-lake-city-ut.html`

**Use for**: Location-specific pages

**Key sections**:
- City name in hero
- Local service information
- City-specific content
- Service area details
- Local references

### Gallery Template

**File**: `pages/gallery.html`

**Use for**: Image galleries, portfolios

**Key sections**:
- Hero section
- Image grid
- Image captions

### Contact/Form Template

**File**: `pages/contact.html` or `pages/book.html`

**Use for**: Contact forms, booking forms

**Key sections**:
- Hero section
- Form fields
- Contact information
- Map (optional)

---

## Best Practices

### 1. File Naming

- Use lowercase with hyphens: `my-page.html`
- Be descriptive: `service-2.html` not `page1.html`
- Keep it short but clear

### 2. Headings Hierarchy

```html
<h1>Main Page Title (only one per page)</h1>
  <h2>Major Section</h2>
    <h3>Subsection</h3>
      <h4>Sub-subsection (rarely needed)</h4>
```

### 3. Semantic HTML

```html
<!-- Good -->
<article class="service-card">
  <h3>Service Name</h3>
  <p>Description</p>
</article>

<!-- Avoid -->
<div class="service-card">
  <div class="title">Service Name</div>
  <div class="text">Description</div>
</div>
```

### 4. Images

- Always include `alt` text
- Use descriptive filenames
- Optimize images before uploading
- Use appropriate sizes

```html
<img src="../images/service-image.jpg" alt="Description of what the image shows" />
```

### 5. Links

- Use relative paths for internal links
- Use descriptive link text
- Open external links in new tab: `target="_blank" rel="noopener"`

```html
<!-- Internal link -->
<a href="services.html">Our Services</a>

<!-- External link -->
<a href="https://example.com" target="_blank" rel="noopener">External Site</a>
```

### 6. Content

- Keep paragraphs short (2-3 sentences)
- Use bullet points for lists
- Break up long content with headings
- Include CTAs where appropriate

### 7. Mobile Responsiveness

- Test on mobile devices
- Use responsive CSS classes
- Avoid fixed widths
- Test touch targets (buttons should be at least 44x44px)

### 8. Performance

- Optimize images
- Minimize inline styles
- Use CSS classes instead of inline styles when possible
- Keep page size reasonable

---

## Quick Reference Checklist

When creating a new page:

- [ ] Copy similar template page
- [ ] Update `<title>` tag
- [ ] Update meta description
- [ ] Update canonical URL
- [ ] Update H1 heading
- [ ] Replace placeholder content
- [ ] Update images and alt text
- [ ] Check all links work
- [ ] Add to navigation (if needed)
- [ ] Test on mobile
- [ ] Run SEO validation

---

## Getting Help

1. **Look at examples**: Check existing pages in `pages/` directory
2. **Check CSS**: See `css/styles.css` for available classes
3. **Review config**: Check `site.config.json` for site settings
4. **Documentation**: See other guides in `Start Here/` folder

---

## Next Steps

1. ✅ Read this guide
2. ✅ Look at example pages in `pages/`
3. ✅ Copy a similar page as template
4. ✅ Customize content
5. ✅ Test and validate

**Happy building!** 🚀

---

**Template Version**: 1.0.0  
**Last Updated**: 2024-12-19

