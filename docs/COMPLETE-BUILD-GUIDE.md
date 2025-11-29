# Complete Build Guide: King Tut Template
## Step-by-Step Instructions to Build from Scratch

**Version:** 2.0  
**Date:** December 2024  
**Template:** King Tut Universal Business Template

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Initial Setup & Project Structure](#initial-setup--project-structure)
3. [Configuration File (site.config.json)](#configuration-file-siteconfigjson)
4. [Homepage Development (index.html)](#homepage-development-indexhtml)
5. [CSS Styling System](#css-styling-system)
6. [Component System](#component-system)
7. [Template Files Creation](#template-files-creation)
8. [Main Pages Development](#main-pages-development)
9. [City Pages System](#city-pages-system)
10. [Service Pages](#service-pages)
11. [SEO Optimization](#seo-optimization)
12. [Design System Integration](#design-system-integration)
13. [Development Environment](#development-environment)
14. [Deployment Setup](#deployment-setup)

---

## Project Overview

**Project Name:** King Tut Template  
**Type:** Universal Business Website Template  
**Purpose:** A universal lead generation website template that works for ANY business category  
**Technology Stack:** 
- Static HTML/CSS/JavaScript
- Node.js (for automation scripts)
- Configuration-driven (JSON)

**Key Features:**
- Universal placeholders (works for any business)
- 71 pre-built city pages
- Complete design system ($20,000+ value)
- SEO-optimized structure
- Mobile-responsive design
- Training placeholders for metadata

---

## Initial Setup & Project Structure

### Step 1: Create Project Directory

**Action:** Create a new folder for your project

```bash
mkdir kingtut
cd kingtut
```

### Step 2: Initialize Project Structure

**Prompt to Use:**
```
Create a modern website template structure with the following folders:
- css/ (for stylesheets)
- js/ (for JavaScript)
- images/ (for images and logos)
- images/logo/ (for logo files and favicons)
- pages/ (for all page files)
- pages/cities/ (for city/location pages)
- pages/services/ (for service detail pages)
- components/ (for reusable HTML components)
- scripts/ (for Node.js automation scripts)
- data/ (for CSV/JSON data files)
- qa/ (for quality assurance documentation)
- Start Here/ (for documentation)
```

**Files Created:**
```
kingtut/
├── css/
├── js/
├── images/
│   └── logo/
├── pages/
│   ├── cities/
│   └── services/
├── components/
├── scripts/
├── data/
├── qa/
└── Start Here/
```

### Step 3: Initialize NPM Project

**Prompt to Use:**
```
Create a package.json file for this static website project with:
- Name: website-template
- Description: A modern, SEO-optimized website template
- Scripts for: dev server (live-server), sitemap generation, validation
- Dev dependencies: live-server
```

**File Created:** `package.json`

```json
{
  "name": "website-template",
  "version": "1.0.0",
  "description": "A modern, SEO-optimized website template",
  "scripts": {
    "dev": "live-server --port=3000 --open=/index.html",
    "start": "live-server --port=3000 --open=/index.html",
    "build": "echo 'No build step needed for static site'",
    "prepare:vercel": "node scripts/prepare-vercel.js",
    "validate:cities": "node scripts/validate-city-pages.js",
    "generate:sitemap": "node scripts/generate-sitemap.js",
    "check:sitemap": "node scripts/check-sitemap.js",
    "update:placeholders": "node scripts/update-metadata-placeholders.js",
    "sync:design-tokens": "node scripts/sync-design-tokens.js"
  },
  "keywords": ["website", "template", "business", "service"],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "live-server": "^1.2.2"
  }
}
```

**Action:** Run `npm install` to install dependencies

---

## Configuration File (site.config.json)

### Step 4: Create Site Configuration

**Prompt to Use:**
```
Create a comprehensive site.config.json file that serves as the single source of truth for all site configuration. Include:

1. Site Information:
   - name, tagline, domain, url, description, keywords, language, author

2. Branding:
   - Logo configuration (path, alt text, favicon path, dimensions)
   - Complete color system (primary, secondary, accent, semantic, neutral, text, background, border)
   - Typography (fonts, sizes, headings, weights, line heights)
   - Spacing system (8px base scale)
   - Layout (container max widths)
   - Border radius values
   - Shadow system
   - Transitions
   - Breakpoints

3. Contact Information:
   - Phone, email, address (street, city, state, zip, country)
   - Social media links (Facebook, Twitter, Instagram, LinkedIn, YouTube)

4. Analytics:
   - Google Analytics (enabled flag, tracking ID)
   - Google Tag Manager (enabled flag, container ID)

5. SEO:
   - Default title, description, keywords
   - Sitemap configuration
   - Robots.txt configuration

6. Navigation:
   - Main navigation menu items
   - Footer navigation items
   - CTA button configuration

7. Content:
   - Hero section content
   - Services configuration
   - Testimonials configuration

8. Features:
   - City pages (enabled, path, index page)
   - Service pages (enabled, path)
   - Contractor pages (enabled, path)
   - Blog (enabled, path)

9. Validation:
   - City page requirements (min words, min city-unique words, min images)

10. Build:
    - Output directory
    - Source directory
    - Exclude directories
```

**File Created:** `site.config.json`

**Key Sections:**

```json
{
  "site": {
    "name": "Your Site Name",
    "tagline": "Your site tagline or description",
    "domain": "yoursite.com",
    "url": "https://yoursite.com",
    "description": "A brief description of your site for SEO and meta tags",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "language": "en",
    "author": "Your Name or Company"
  },
  "branding": {
    "logo": {
      "path": "images/logo/kingtutlogo.png",
      "alt": "PUT YOUR SITE NAME HERE",
      "faviconPath": "images/logo/favicon.ico"
    },
    "colors": {
      "primary": {
        "base": "#C8A860",
        "dark": "#A68943",
        "light": "#D4BA7F",
        "50": "#FAF7F0",
        "100": "#F2EBD9",
        "200": "#E8DEC0",
        "300": "#DDD1A7",
        "400": "#D3C38E",
        "500": "#C8A860",
        "600": "#B5964D",
        "700": "#A68943",
        "800": "#8A7238",
        "900": "#6E5B2D"
      },
      "secondary": {
        "base": "#2B4F66",
        "dark": "#1E3849",
        "light": "#3D6A89"
      }
    }
  }
}
```

**Why This Matters:** This configuration file drives the entire site. All scripts read from it, and it allows easy customization without touching code.

---

## Homepage Development (index.html)

### Step 5: Create Homepage Structure

**Prompt to Use:**
```
Create a modern, SEO-optimized homepage (index.html) with the following structure:

1. HEAD SECTION:
   - Analytics placeholder (Google Analytics with PUT-YOUR-GOOGLE-ANALYTICS-ID-HERE)
   - Complete SEO meta tags with training placeholders:
     * Title: "PUT SITE NAME HERE | PUT PRIMARY SERVICE HERE"
     * Description: "PUT YOUR HOME PAGE DESCRIPTION HERE - This should be 150-160 characters..."
     * Keywords: "PUT KEYWORD 1 HERE, PUT KEYWORD 2 HERE"
   - Open Graph tags for social sharing
   - Twitter Card tags
   - Canonical URL: "https://PUT-YOUR-DOMAIN-HERE.com/"
   - Structured data (JSON-LD):
     * WebSite schema
     * Organization schema
   - Favicon links (all sizes)
   - CSS stylesheet links (styles.css, design-tokens-override.css, avada-enhancements.css)

2. BODY STRUCTURE:
   - Skip link for accessibility
   - Header component (include via component system)
   - Hero section with:
     * Main headline (training placeholder)
     * Subheadline (training placeholder)
     * Primary CTA button
     * Secondary CTA button
     * Hero image
   - Services section:
     * Section title
     * Grid of service cards (6 services)
     * Each card has: icon, title, description, link
   - How It Works section:
     * Section title
     * 4-step process with icons
   - Features/Benefits section:
     * Section title
     * Grid of benefit cards
   - Testimonials section (optional):
     * Section title
     * 3 testimonial cards
   - CTA banner section
   - Footer component (include via component system)
   - JavaScript files (search.js, etc.)

Use training placeholders like "PUT YOUR..." throughout so trainees learn what goes where.
Make it mobile-responsive with semantic HTML5.
```

**File Created:** `index.html`

**Key Sections Breakdown:**

#### 1. Analytics Section
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=PUT-YOUR-GOOGLE-ANALYTICS-ID-HERE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'PUT-YOUR-GOOGLE-ANALYTICS-ID-HERE');
</script>
```

#### 2. SEO Meta Tags
```html
<title>PUT SITE NAME HERE | PUT PRIMARY SERVICE HERE</title>
<meta name="description" content="PUT YOUR HOME PAGE DESCRIPTION HERE - This should be 150-160 characters..." />
<meta name="keywords" content="PUT KEYWORD 1 HERE, PUT KEYWORD 2 HERE, PUT KEYWORD 3 HERE" />
<link rel="canonical" href="https://PUT-YOUR-DOMAIN-HERE.com/" />
```

#### 3. Structured Data (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "PUT YOUR SITE NAME HERE",
  "url": "https://PUT-YOUR-DOMAIN-HERE.com",
  "description": "PUT YOUR SITE DESCRIPTION HERE"
}
</script>
```

#### 4. Hero Section
```html
<section class="hero">
  <div class="container">
    <h1>PUT YOUR MAIN HEADLINE HERE</h1>
    <p class="hero-subtitle">PUT YOUR COMPELLING SUBTITLE HERE</p>
    <div class="hero-cta">
      <a href="pages/book.html" class="btn btn-primary">PUT YOUR MAIN CTA TEXT HERE</a>
      <a href="pages/about.html" class="btn btn-secondary">Learn More</a>
    </div>
  </div>
</section>
```

#### 5. Services Section
```html
<section class="services">
  <div class="container">
    <h2>Our Services</h2>
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">[Icon]</div>
        <h3>PUT SERVICE 1 NAME HERE</h3>
        <p>PUT SERVICE 1 DESCRIPTION HERE</p>
        <a href="pages/services/service-1.html" class="btn-link">Learn More →</a>
      </div>
      <!-- Repeat for 6 services -->
    </div>
  </div>
</section>
```

**Training Placeholders Used:**
- `PUT SITE NAME HERE`
- `PUT PRIMARY SERVICE HERE`
- `PUT YOUR HOME PAGE DESCRIPTION HERE`
- `PUT YOUR DOMAIN HERE`
- `PUT YOUR MAIN HEADLINE HERE`
- `PUT YOUR MAIN CTA TEXT HERE`
- `PUT SERVICE X NAME HERE`
- `PUT SERVICE X DESCRIPTION HERE`

---

## CSS Styling System

### Step 6: Create Main Stylesheet

**Prompt to Use:**
```
Create a comprehensive CSS stylesheet (css/styles.css) with:

1. CSS Variables (Design Tokens):
   - Color system (primary, secondary, accent, semantic, neutral, text, background, border)
   - Typography (fonts, sizes, weights, line heights)
   - Spacing system (8px base scale: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32)
   - Layout (container max widths, breakpoints)
   - Border radius values
   - Shadow system
   - Transitions

2. Reset/Normalize:
   - Box-sizing: border-box
   - Margin/padding reset
   - List style reset

3. Base Styles:
   - Body typography
   - Heading styles (h1-h6)
   - Link styles
   - Button styles (primary, secondary, outline)
   - Form input styles

4. Layout Components:
   - Container class (max-width, centered, padding)
   - Grid system (2-column, 3-column, 4-column)
   - Flexbox utilities

5. Component Styles:
   - Header/Navigation
   - Hero section
   - Service cards
   - Testimonial cards
   - CTA sections
   - Footer

6. Responsive Design:
   - Mobile-first approach
   - Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
   - Media queries for all components

7. Utility Classes:
   - Text alignment
   - Spacing utilities (margin, padding)
   - Display utilities
   - Color utilities

Use CSS variables throughout so colors can be changed via site.config.json.
```

**File Created:** `css/styles.css`

**Key CSS Variables:**

```css
:root {
  /* Colors - Primary */
  --color-primary: #C8A860;
  --color-primary-dark: #A68943;
  --color-primary-light: #D4BA7F;
  --color-primary-50: #FAF7F0;
  --color-primary-100: #F2EBD9;
  /* ... more shades ... */
  
  /* Colors - Secondary */
  --color-secondary: #2B4F66;
  --color-secondary-dark: #1E3849;
  --color-secondary-light: #3D6A89;
  
  /* Typography */
  --font-primary: Inter, system-ui, -apple-system, sans-serif;
  --font-headings: Inter, system-ui, -apple-system, sans-serif;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Spacing (8px base) */
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;  /* 12px */
  --spacing-4: 1rem;     /* 16px */
  --spacing-6: 1.5rem;   /* 24px */
  --spacing-8: 2rem;     /* 32px */
  --spacing-12: 3rem;    /* 48px */
  --spacing-16: 4rem;    /* 64px */
  
  /* Layout */
  --container-max-width: 1200px;
  --container-padding: 1rem;
  
  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

**Component Example - Button:**

```css
.btn {
  display: inline-block;
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--font-size-base);
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
}
```

### Step 7: Create Design Tokens Override

**Prompt to Use:**
```
Create a CSS file (css/design-tokens-override.css) that will be generated from site.config.json. This file should:

1. Use CSS custom properties (variables) for all design tokens
2. Map all values from site.config.json → branding section
3. Include:
   - All color values (primary, secondary, accent, semantic, neutral, text, background, border)
   - Typography (fonts, sizes, weights, line heights)
   - Spacing scale
   - Layout values
   - Border radius
   - Shadows
   - Transitions

This file will be auto-generated by the sync:design-tokens script.
```

**File Created:** `css/design-tokens-override.css`

**Note:** This file is generated by running `npm run sync:design-tokens`

### Step 8: Create Avada Theme Enhancements

**Prompt to Use:**
```
Create a CSS file (css/avada-enhancements.css) that adds premium Avada-inspired design elements:

1. Gold and navy color accents
2. Premium button styles
3. Enhanced card designs
4. Gradient backgrounds
5. Hover effects
6. Animation transitions
7. Premium typography treatments

This should complement the main styles.css and add a premium feel.
```

**File Created:** `css/avada-enhancements.css`

---

## Component System

### Step 9: Create Reusable Components

**Prompt to Use:**
```
Create a component system with reusable HTML components. Create these files in the components/ folder:

1. global-head.html - All head section elements (analytics, meta tags, favicons, CSS links)
2. header.html - Site header with logo and navigation
3. hero.html - Hero section component
4. footer.html - Site footer with links and copyright
5. scripts.html - All JavaScript includes
6. skip-link.html - Accessibility skip link

Each component should:
- Use training placeholders
- Be self-contained
- Include comments explaining each section
- Work when included via server-side includes or copy-paste
```

**Files Created:**
- `components/global-head.html`
- `components/header.html`
- `components/hero.html`
- `components/footer.html`
- `components/scripts.html`
- `components/skip-link.html`

**Example - Header Component:**

```html
<!-- components/header.html -->
<header class="site-header">
  <div class="container">
    <div class="header-content">
      <!-- Logo -->
      <a href="../index.html" class="logo">
        <img src="../images/logo/kingtutlogo.png" alt="PUT YOUR SITE NAME HERE" class="logo-img" />
      </a>
      
      <!-- Navigation -->
      <nav class="main-nav">
        <ul class="nav-list">
          <li><a href="../pages/services.html">Services</a></li>
          <li><a href="../pages/gallery.html">Gallery</a></li>
          <li><a href="../pages/locations.html">Locations</a></li>
          <li><a href="../pages/about.html">About</a></li>
        </ul>
      </nav>
      
      <!-- CTA Button -->
      <a href="../pages/book.html" class="btn btn-primary">Get Started</a>
    </div>
  </div>
</header>
```

**Note:** Paths adjust based on where component is included (root vs pages/ vs pages/cities/)

---

## Template Files Creation

### Step 10: Create Base Template

**Prompt to Use:**
```
Create a base template file (pages/_TEMPLATE-BASE.html) that serves as the foundation for all standard pages. Include:

1. Complete HTML5 structure
2. All head elements with training placeholders:
   - Analytics placeholder
   - SEO meta tags (title, description, keywords, canonical)
   - Open Graph tags
   - Structured data (JSON-LD) - Organization schema
   - Favicon links
   - CSS includes

3. Body structure:
   - Skip link
   - Header (include component or copy)
   - Main content area with:
     * Hero section (page-specific)
     * Content sections
     * CTA section (optional)
   - Footer (include component or copy)
   - JavaScript includes

4. Extensive comments explaining:
   - What each section does
   - What placeholders to replace
   - SEO requirements
   - Best practices

Use "STEP" comments to guide trainees through customization.
```

**File Created:** `pages/_TEMPLATE-BASE.html`

**Key Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- STEP 1: ANALYTICS (Optional) -->
  <!-- If using Google Analytics, update the tracking ID -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=PUT-YOUR-GOOGLE-ANALYTICS-ID-HERE"></script>
  
  <!-- STEP 2: META TAGS (Required) -->
  <title>PUT PAGE TITLE HERE | PUT SITE NAME HERE</title>
  <meta name="description" content="PUT YOUR PAGE DESCRIPTION HERE - 150-160 characters..." />
  <link rel="canonical" href="https://PUT-YOUR-DOMAIN-HERE.com/pages/PUT-PAGE-PATH-HERE" />
  
  <!-- STEP 3: STRUCTURED DATA (Recommended) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PUT PAGE TITLE HERE",
    "description": "PUT YOUR PAGE DESCRIPTION HERE"
  }
  </script>
  
  <!-- STEP 4: CSS FILES -->
  <link rel="stylesheet" href="../css/styles.css" />
  <link rel="stylesheet" href="../css/design-tokens-override.css" />
  <link rel="stylesheet" href="../css/avada-enhancements.css" />
</head>
<body>
  <!-- Skip Link -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <!-- Header -->
  <!-- Include header component or copy from components/header.html -->
  
  <!-- Main Content -->
  <main id="main-content">
    <!-- STEP 5: HERO SECTION -->
    <section class="hero">
      <div class="container">
        <h1>PUT YOUR PAGE H1 TITLE HERE</h1>
        <p class="hero-subtitle">PUT YOUR PAGE SUBTITLE HERE</p>
      </div>
    </section>
    
    <!-- STEP 6: CONTENT SECTIONS -->
    <section class="content-section">
      <div class="container">
        <h2>PUT SECTION TITLE HERE</h2>
        <p>PUT YOUR CONTENT HERE</p>
      </div>
    </section>
  </main>
  
  <!-- Footer -->
  <!-- Include footer component or copy from components/footer.html -->
  
  <!-- JavaScript -->
  <script src="../js/search.js"></script>
</body>
</html>
```

### Step 11: Create Service Template

**Prompt to Use:**
```
Create a service page template (pages/_TEMPLATE-SERVICE.html) for individual service detail pages. Include:

1. All base template elements
2. Service-specific sections:
   - Service hero with service name and description
   - Service details section
   - Service features/benefits
   - Service process/steps
   - Pricing information (optional)
   - CTA section
   - Related services section

3. Service-specific structured data:
   - Service schema
   - LocalBusiness schema (if applicable)

Use training placeholders throughout.
```

**File Created:** `pages/_TEMPLATE-SERVICE.html`

### Step 12: Create City Template

**Prompt to Use:**
```
Create a city/location page template (pages/_TEMPLATE-CITY.html) for location-specific pages. Include:

1. All base template elements
2. City-specific sections:
   - City hero with city name and state
   - City description
   - Service area information
   - Local references and landmarks
   - Why choose this city section
   - Top 10 professional service websites/resources (if applicable)
   - CTA section

3. City-specific structured data:
   - LocalBusiness schema
   - City-specific information

4. SEO requirements:
   - Minimum 600 words total
   - Minimum 250 city-unique words
   - Minimum 3 images with alt text
   - City-specific keywords

Use training placeholders throughout.
```

**File Created:** `pages/_TEMPLATE-CITY.html`

---

## Main Pages Development

### Step 13: Create About Page

**Prompt to Use:**
```
Create an About page (pages/about.html) using the base template. Include:

1. Copy _TEMPLATE-BASE.html to about.html
2. Update all training placeholders:
   - Title: "About Us | PUT SITE NAME HERE"
   - Description: About page description
   - Canonical URL
   - H1: "About PUT SITE NAME HERE"
3. Content sections:
   - Our Story/Mission
   - What We Do
   - Why Choose Us
   - Our Values
   - Team (optional)
   - CTA section
4. Update structured data for About page
```

**File Created:** `pages/about.html`

### Step 14: Create Services Page

**Prompt to Use:**
```
Create a Services overview page (pages/services.html) that lists all services. Include:

1. Copy _TEMPLATE-BASE.html to services.html
2. Update all training placeholders
3. Content sections:
   - Services overview
   - Grid of all services (6-8 services)
   - Each service card links to detail page
   - Service categories (if applicable)
   - CTA section
4. Update structured data for Services page
```

**File Created:** `pages/services.html`

### Step 15: Create Contact Page

**Prompt to Use:**
```
Create a Contact page (pages/contact.html) with:

1. Copy _TEMPLATE-BASE.html to contact.html
2. Update all training placeholders
3. Content sections:
   - Contact information (phone, email, address)
   - Contact form (name, email, phone, message)
   - Office hours (optional)
   - Map (optional)
   - CTA section
4. Update structured data with ContactPoint schema
```

**File Created:** `pages/contact.html`

### Step 16: Create Additional Pages

**Prompt to Use:**
```
Create these additional pages using the base template:

1. pages/how-it-works.html - Explain your process
2. pages/gallery.html - Showcase work/images
3. pages/faq.html - Frequently asked questions
4. pages/book.html - Booking/appointment page
5. pages/locations.html - Locations overview
6. pages/find-a-contractor.html - Contractor finder (if applicable)
7. pages/for-contractors.html - For contractors page (if applicable)

For each:
- Copy _TEMPLATE-BASE.html
- Update all training placeholders
- Add page-specific content
- Update structured data
```

**Files Created:**
- `pages/how-it-works.html`
- `pages/gallery.html`
- `pages/faq.html`
- `pages/book.html`
- `pages/locations.html`
- `pages/find-a-contractor.html`
- `pages/for-contractors.html`

---

## City Pages System

### Step 17: Create Cities Index Page

**Prompt to Use:**
```
Create a cities index page (pages/cities/index.html) that:

1. Lists all 71 cities in a grid layout
2. Features Salt Lake City prominently at the top
3. Each city card links to its detail page
4. Search/filter functionality (optional)
5. SEO-optimized with CollectionPage schema
6. Uses training placeholders
```

**File Created:** `pages/cities/index.html`

### Step 18: Create City Pages

**Prompt to Use:**
```
Create 71 city pages using the city template. For each city:

1. Copy _TEMPLATE-CITY.html to pages/cities/[city-name]-[state-abbr].html
2. Update all placeholders:
   - City name
   - State name
   - City-specific content (600+ words)
   - City-unique content (250+ words)
   - Local references
   - Top 10 professional service websites/resources
3. Add 3+ city-specific images with alt text
4. Update structured data with city information
5. Ensure SEO requirements met

Cities to create:
- Salt Lake City, UT (featured)
- Denver, CO
- Phoenix, AZ
- Austin, TX
- Atlanta, GA
- [List all 71 cities]
```

**Files Created:** 71 city pages in `pages/cities/`

**Example File:** `pages/cities/salt-lake-city-ut.html`

**Key Requirements:**
- Minimum 600 words total
- Minimum 250 city-unique words
- Minimum 3 images
- City-specific structured data
- Proper canonical URLs

### Step 19: Create City Page Generator Script

**Prompt to Use:**
```
Create a PowerShell script (create-cities.ps1) that:

1. Reads a template city page (e.g., denver-co.html)
2. Reads city data from data/cities/cities.csv
3. For each city in CSV:
   - Copies template
   - Replaces city name, state name, state abbreviation
   - Replaces region references
   - Generates new city page
4. Handles edge cases (state name corrections, special characters)
5. Outputs progress and completion status
```

**File Created:** `create-cities.ps1`

**CSV Format:**
```csv
City,State,StateAbbr,Region
Salt Lake City,Utah,UT,Mountain West
Denver,Colorado,CO,Mountain West
```

---

## Service Pages

### Step 20: Create Service Detail Pages

**Prompt to Use:**
```
Create service detail pages using the service template. For each service:

1. Copy _TEMPLATE-SERVICE.html to pages/services/[service-name].html
2. Update all placeholders:
   - Service name
   - Service description
   - Service features
   - Service process/steps
   - Service pricing (if applicable)
3. Add service-specific images
4. Update structured data with Service schema
5. Link from services.html overview page

Services to create:
- Service 1 (e.g., "Pond Cleaning")
- Service 2 (e.g., "Pond Installation")
- Service 3 (e.g., "Pond Maintenance")
- [List all services]
```

**Files Created:** Service pages in `pages/services/`

---

## SEO Optimization

### Step 21: Create Sitemap Generator

**Prompt to Use:**
```
Create a Node.js script (scripts/generate-sitemap.js) that:

1. Reads site.config.json for domain
2. Scans all HTML files in the project
3. Generates sitemap.xml with:
   - All page URLs
   - Last modified dates
   - Priority values (homepage: 1.0, main pages: 0.9, city pages: 0.8)
   - Change frequencies
4. Outputs to sitemap.xml in root
5. Validates URLs
```

**File Created:** `scripts/generate-sitemap.js`

**Command:** `npm run generate:sitemap`

### Step 22: Create robots.txt

**Prompt to Use:**
```
Create a robots.txt file that:

1. Allows all search engines
2. Points to sitemap location
3. Uses domain from site.config.json
```

**File Created:** `robots.txt`

```txt
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

### Step 23: Create SEO Verification Script

**Prompt to Use:**
```
Create a PowerShell script (verify-seo.ps1) that:

1. Scans all HTML files
2. Checks for required SEO elements:
   - Title tag (50-60 characters)
   - Meta description (150-160 characters)
   - Canonical URL
   - H1 tag (only one)
   - Images with alt text
   - Structured data
3. Reports missing elements
4. Validates canonical URLs point to correct domain
```

**File Created:** `verify-seo.ps1`

---

## Design System Integration

### Step 24: Create Design Tokens Sync Script

**Prompt to Use:**
```
Create a Node.js script (scripts/sync-design-tokens.js) that:

1. Reads site.config.json
2. Extracts all branding values (colors, typography, spacing, etc.)
3. Generates css/design-tokens-override.css with CSS variables
4. Maps all config values to CSS custom properties
5. Handles color shades (50-900)
6. Handles typography scales
7. Handles spacing scales
8. Outputs formatted CSS file
```

**File Created:** `scripts/sync-design-tokens.js`

**Command:** `npm run sync:design-tokens`

**Example Output:**

```css
:root {
  /* Colors - Primary */
  --color-primary: #C8A860;
  --color-primary-dark: #A68943;
  --color-primary-light: #D4BA7F;
  --color-primary-50: #FAF7F0;
  --color-primary-100: #F2EBD9;
  /* ... */
  
  /* Typography */
  --font-primary: Inter, system-ui, -apple-system, sans-serif;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  /* ... */
  
  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  /* ... */
}
```

---

## Development Environment

### Step 25: Create Config Loader

**Prompt to Use:**
```
Create a Node.js utility (scripts/config-loader.js) that:

1. Reads site.config.json
2. Provides helper functions to access config values
3. Validates config structure
4. Provides defaults if values missing
5. Used by all other scripts
```

**File Created:** `scripts/config-loader.js`

**Usage:**

```javascript
const { loadConfig } = require('./config-loader');
const config = loadConfig();

const siteName = config.site.name;
const siteUrl = config.site.url;
```

### Step 26: Create Validation Scripts

**Prompt to Use:**
```
Create validation scripts:

1. scripts/validate-city-pages.js:
   - Checks word count (600+ words)
   - Checks city-unique words (250+ words)
   - Checks images (3+ images)
   - Checks alt text on images
   - Checks structured data
   - Reports issues

2. scripts/check-sitemap.js:
   - Validates sitemap.xml structure
   - Checks all URLs are valid
   - Checks domain consistency
   - Reports issues
```

**Files Created:**
- `scripts/validate-city-pages.js`
- `scripts/check-sitemap.js`

**Commands:**
- `npm run validate:cities`
- `npm run check:sitemap`

---

## Deployment Setup

### Step 27: Create Vercel Configuration

**Prompt to Use:**
```
Create Vercel deployment configuration:

1. vercel.json:
   - Version 2
   - Clean URLs enabled
   - Trailing slash disabled
   - Security headers
   - Caching rules

2. .vercelignore:
   - Exclude development files
   - Exclude documentation
   - Exclude scripts
   - Keep only production files
```

**Files Created:**
- `vercel.json`
- `.vercelignore`

### Step 28: Create Deployment Preparation Script

**Prompt to Use:**
```
Create a script (scripts/prepare-vercel.js) that:

1. Creates public/ folder structure
2. Copies all production files to public/
3. Updates all image paths to absolute paths (/images/...)
4. Updates all CSS paths to absolute paths (/css/...)
5. Updates all JS paths to absolute paths (/js/...)
6. Creates vercel.json if needed
7. Creates .vercelignore if needed
8. Reports completion
```

**File Created:** `scripts/prepare-vercel.js`

**Command:** `npm run prepare:vercel`

---

## Complete File Structure

```
kingtut/
├── index.html                          # Homepage
├── site.config.json                    # Main configuration
├── package.json                        # NPM configuration
├── vercel.json                         # Vercel config
├── .vercelignore                       # Vercel ignore
├── robots.txt                          # Robots file
├── sitemap.xml                         # XML sitemap (generated)
├── css/
│   ├── styles.css                      # Main stylesheet
│   ├── design-tokens-override.css      # Generated from config
│   └── avada-enhancements.css          # Premium enhancements
├── js/
│   └── search.js                       # Search functionality
├── images/
│   ├── logo/
│   │   ├── kingtutlogo.png
│   │   ├── favicon.ico
│   │   └── [other favicon files]
│   └── [gallery images]
├── components/
│   ├── global-head.html
│   ├── header.html
│   ├── hero.html
│   ├── footer.html
│   ├── scripts.html
│   └── skip-link.html
├── pages/
│   ├── _TEMPLATE-BASE.html             # Base template
│   ├── _TEMPLATE-SERVICE.html          # Service template
│   ├── _TEMPLATE-CITY.html            # City template
│   ├── about.html
│   ├── services.html
│   ├── contact.html
│   ├── how-it-works.html
│   ├── gallery.html
│   ├── faq.html
│   ├── book.html
│   ├── locations.html
│   ├── find-a-contractor.html
│   ├── for-contractors.html
│   ├── cities/
│   │   ├── index.html
│   │   ├── salt-lake-city-ut.html
│   │   └── [70 other city pages]
│   └── services/
│       ├── service-1.html
│       └── [other service pages]
├── scripts/
│   ├── config-loader.js
│   ├── generate-sitemap.js
│   ├── check-sitemap.js
│   ├── validate-city-pages.js
│   ├── sync-design-tokens.js
│   ├── prepare-vercel.js
│   └── [other scripts]
├── data/
│   └── cities/
│       └── cities.csv
├── qa/
│   ├── homepage-qa.md
│   └── city-page-qa.md
└── Start Here/
    └── [documentation files]
```

---

## Key Prompts Summary

### Initial Setup
1. "Create a modern website template structure with folders..."
2. "Create a package.json file for this static website project..."
3. "Create a comprehensive site.config.json file..."

### Homepage
4. "Create a modern, SEO-optimized homepage (index.html) with..."

### CSS
5. "Create a comprehensive CSS stylesheet (css/styles.css) with..."
6. "Create a CSS file (css/design-tokens-override.css)..."
7. "Create a CSS file (css/avada-enhancements.css)..."

### Components
8. "Create a component system with reusable HTML components..."

### Templates
9. "Create a base template file (pages/_TEMPLATE-BASE.html)..."
10. "Create a service page template (pages/_TEMPLATE-SERVICE.html)..."
11. "Create a city/location page template (pages/_TEMPLATE-CITY.html)..."

### Pages
12. "Create an About page (pages/about.html)..."
13. "Create a Services overview page (pages/services.html)..."
14. "Create a Contact page (pages/contact.html)..."
15. "Create these additional pages..."

### City Pages
16. "Create a cities index page (pages/cities/index.html)..."
17. "Create 71 city pages using the city template..."
18. "Create a PowerShell script (create-cities.ps1)..."

### SEO
19. "Create a Node.js script (scripts/generate-sitemap.js)..."
20. "Create a robots.txt file..."
21. "Create a PowerShell script (verify-seo.ps1)..."

### Design System
22. "Create a Node.js script (scripts/sync-design-tokens.js)..."

### Scripts
23. "Create a Node.js utility (scripts/config-loader.js)..."
24. "Create validation scripts..."

### Deployment
25. "Create Vercel deployment configuration..."
26. "Create a script (scripts/prepare-vercel.js)..."

---

## Development Workflow

### 1. Initial Setup
```bash
npm install
npm run sync:design-tokens
```

### 2. Development
```bash
npm run dev
# Opens http://localhost:3000
```

### 3. Validation
```bash
npm run validate:cities
npm run check:sitemap
```

### 4. Generate Sitemap
```bash
npm run generate:sitemap
```

### 5. Prepare for Deployment
```bash
npm run prepare:vercel
```

### 6. Deploy
```bash
vercel --prod
```

---

## Training Placeholders Reference

All pages use training placeholders so trainees learn what goes where:

### SEO Placeholders
- `PUT SITE NAME HERE`
- `PUT PRIMARY SERVICE HERE`
- `PUT YOUR HOME PAGE DESCRIPTION HERE`
- `PUT YOUR DOMAIN HERE`
- `PUT PAGE TITLE HERE`
- `PUT YOUR PAGE DESCRIPTION HERE`
- `PUT KEYWORD 1 HERE, PUT KEYWORD 2 HERE`

### Content Placeholders
- `PUT YOUR MAIN HEADLINE HERE`
- `PUT YOUR COMPELLING SUBTITLE HERE`
- `PUT YOUR MAIN CTA TEXT HERE`
- `PUT SERVICE X NAME HERE`
- `PUT SERVICE X DESCRIPTION HERE`
- `PUT YOUR CONTENT HERE`

### Contact Placeholders
- `PUT-YOUR-PHONE-NUMBER-HERE`
- `PUT-YOUR-EMAIL-HERE@yourdomain.com`
- `PUT STREET ADDRESS HERE`
- `PUT CITY HERE`
- `PUT STATE/REGION HERE`

### Analytics Placeholders
- `PUT-YOUR-GOOGLE-ANALYTICS-ID-HERE`

---

## Best Practices

### 1. Always Use Training Placeholders
- Helps trainees learn SEO
- Makes customization clear
- Ensures nothing is missed

### 2. Follow File Naming Conventions
- City pages: `[city-name]-[state-abbr].html` (lowercase, hyphens)
- Service pages: `[service-name].html` (lowercase, hyphens)
- Use descriptive names

### 3. Maintain Path Consistency
- Root files: `pages/filename.html`
- From pages/: `filename.html` or `../index.html`
- From pages/cities/: `../filename.html` or `../../index.html`

### 4. SEO Requirements
- Title: 50-60 characters
- Description: 150-160 characters
- One H1 per page
- Images have alt text
- Canonical URLs on all pages
- Structured data where applicable

### 5. City Page Requirements
- Minimum 600 words total
- Minimum 250 city-unique words
- Minimum 3 images with alt text
- City-specific structured data

---

## Troubleshooting

### Issue: Design tokens not syncing
**Solution:** Run `npm run sync:design-tokens` after updating `site.config.json`

### Issue: Sitemap not generating
**Solution:** Check that HTML files exist and paths are correct

### Issue: City pages failing validation
**Solution:** Check word count, images, and structured data

### Issue: Paths broken in subdirectories
**Solution:** Use relative paths based on file location

---

## Summary

This guide documents the complete build process for the King Tut Template:

- **1 Homepage** (index.html)
- **13+ Main Pages** (About, Services, Contact, etc.)
- **71 City Pages** (with Salt Lake City featured)
- **Multiple Service Pages**
- **3 Template Files** (Base, Service, City)
- **Complete Design System** ($20,000+ value)
- **SEO-Optimized** (sitemap, robots.txt, structured data)
- **Automation Scripts** (sitemap generation, validation, design tokens)
- **Component System** (reusable components)
- **Training Placeholders** (learn as you build)

**Total:** 90+ HTML pages fully optimized and ready for deployment.

---

*Document Version: 2.0*  
*Last Updated: December 2024*  
*Template: King Tut Universal Business Template*

