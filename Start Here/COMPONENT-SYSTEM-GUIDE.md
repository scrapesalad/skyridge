# Component System Guide

## 🎯 Overview

The King Tut Template now uses a **component-based architecture** that allows you to update shared elements (header, footer, hero, etc.) across all pages by editing a single file.

---

## 📁 Component Structure

### Components Directory
```
components/
├── global-head.html    # All <head> content (meta tags, structured data, CSS)
├── skip-link.html      # Accessibility skip link
├── header.html         # Site header and navigation
├── hero.html           # Hero section (with heroimage.png)
├── footer.html         # Site footer
└── scripts.html        # JavaScript (mobile nav, etc.)
```

---

## 🔧 How It Works

### Component Placeholders

In your HTML pages, use component placeholders:

```html
<!-- COMPONENT: global-head -->
<!-- COMPONENT: skip-link -->
<!-- COMPONENT: header -->
<!-- COMPONENT: hero -->
<!-- COMPONENT: footer -->
<!-- COMPONENT: scripts -->
```

### Build Process

1. **Edit components** in `components/` directory
2. **Run build script**: `npm run build`
3. **All pages are updated** automatically with the new component content

---

## 📝 Available Components

### 1. `global-head.html`
Contains all `<head>` content:
- Analytics (Google Analytics)
- Meta tags (title, description, keywords, robots)
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Favicons
- CSS links

**Usage:**
```html
<head>
<!-- COMPONENT: global-head -->
</head>
```

### 2. `skip-link.html`
Accessibility skip link for keyboard navigation.

**Usage:**
```html
<body>
<!-- COMPONENT: skip-link -->
```

### 3. `header.html`
Site header with:
- Logo
- Mobile navigation toggle
- Main navigation menu
- CTA button

**Usage:**
```html
<!-- COMPONENT: header -->
```

### 4. `hero.html`
Hero section with:
- Main headline (H1)
- Subtitle
- CTA buttons
- Trust line
- Optional form
- Hero image (`images/logo/heroimage.png`)

**Usage:**
```html
<main id="main-content">
<!-- COMPONENT: hero -->
```

### 5. `footer.html`
Site footer with:
- Copyright notice
- Footer navigation links

**Usage:**
```html
<!-- COMPONENT: footer -->
```

### 6. `scripts.html`
JavaScript for:
- Mobile navigation toggle
- ARIA state management

**Usage:**
```html
<!-- COMPONENT: scripts -->
</body>
```

---

## 🚀 Usage

### Building Pages

After editing components, run:

```bash
npm run build
```

This will:
- Process all HTML files in the root and `pages/` directory
- Replace component placeholders with actual component content
- Adjust relative paths for nested pages automatically

### Example Workflow

1. **Update header navigation:**
   ```bash
   # Edit components/header.html
   # Change navigation links, logo, etc.
   ```

2. **Build all pages:**
   ```bash
   npm run build
   ```

3. **All pages updated!** ✅

---

## 📍 Path Handling

The build script automatically adjusts relative paths based on page depth:

- **Root pages** (`index.html`): Uses `images/`, `css/`, `pages/`
- **Nested pages** (`pages/about.html`): Uses `../images/`, `../css/`, `pages/`
- **Deeply nested** (`pages/cities/chicago-il.html`): Uses `../../images/`, `../../css/`, `pages/`

---

## 🎨 Customizing Components

### Updating the Header

Edit `components/header.html`:

```html
<nav id="main-nav" class="main-nav" aria-label="Primary navigation">
  <a href="pages/services.html">Services</a>
  <a href="pages/gallery.html">Gallery</a>
  <!-- Add/remove navigation items -->
</nav>
```

Then run `npm run build` to update all pages.

### Updating the Hero Image

The hero image is set in `components/hero.html`:

```html
<img
  src="images/logo/heroimage.png"
  alt="PUT YOUR HERO IMAGE ALT TEXT HERE"
  loading="eager"
  decoding="async"
/>
```

**Current hero image:** `images/logo/heroimage.png`

### Updating Global Head

Edit `components/global-head.html` to update:
- Meta tags
- Structured data
- Analytics
- Favicons

---

## 📋 Component Template

### Creating a New Page

1. Create your HTML file
2. Use component placeholders:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<!-- COMPONENT: global-head -->
</head>
<body>
<!-- COMPONENT: skip-link -->
<!-- COMPONENT: header -->

<main id="main-content">
  <!-- Your page content here -->
</main>

<!-- COMPONENT: footer -->
<!-- COMPONENT: scripts -->
</body>
</html>
```

3. Run `npm run build` to merge components

---

## 🔍 Troubleshooting

### Component Not Found

If you see `<!-- ERROR: Could not load component X -->`:

1. Check that `components/X.html` exists
2. Verify the component name matches exactly (case-sensitive)
3. Check file permissions

### Path Issues

If images/CSS don't load:

1. The build script should handle paths automatically
2. For custom paths, edit the component file directly
3. Rebuild: `npm run build`

### Component Not Updating

1. Make sure you ran `npm run build` after editing
2. Check that the placeholder syntax is correct: `<!-- COMPONENT: name -->`
3. Verify the component file was saved

---

## ✅ Benefits

1. **Single Source of Truth** - Update header once, all pages update
2. **Consistency** - All pages use the same components
3. **Easy Maintenance** - Change navigation in one place
4. **Version Control** - Track component changes separately
5. **Scalability** - Add new pages easily with component placeholders

---

## 📚 Related Files

- `scripts/build-pages.js` - Build script that merges components
- `package.json` - Contains `npm run build` command
- `components/` - All component files

---

## 🎉 Quick Reference

```bash
# Build all pages with components
npm run build

# Edit header
components/header.html

# Edit footer
components/footer.html

# Edit hero section
components/hero.html

# Edit global head (meta tags, etc.)
components/global-head.html
```

---

**Version:** 1.0  
**Last Updated:** 2025-01-27  
**Status:** ✅ Production Ready

