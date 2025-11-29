# Page Building Quick Reference

Quick reference guide for building pages with the King Tut Template.

## 🚀 Quick Start

1. **Choose a template**:
   - Standard page → `_TEMPLATE-BASE.html`
   - Service page → `_TEMPLATE-SERVICE.html`
   - City page → `_TEMPLATE-CITY.html`

2. **Copy template**:
   ```bash
   cp pages/_TEMPLATE-BASE.html pages/my-page.html
   ```

3. **Search for "REPLACE"** in the file and update all instances

4. **Remove comment blocks** when done

## 📋 Required Updates Checklist

### Head Section
- [ ] Analytics tracking ID (if using)
- [ ] Page title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Canonical URL
- [ ] Open Graph tags (for social sharing)
- [ ] Structured data (JSON-LD)

### Body Section
- [ ] Logo path and alt text
- [ ] Navigation links
- [ ] H1 heading (only one per page)
- [ ] All content text
- [ ] Images with alt text
- [ ] Footer copyright and links

## 🎨 Common CSS Classes

### Layout
- `.container` - Main container (centered, max-width)
- `.directory-hero` - Hero section
- `.how-it-works` - Content section
- `.bottom-cta` - Call-to-action section

### Components
- `.service-card` - Service/feature card
- `.services-grid` - Grid of service cards
- `.services-list` - Styled list
- `.btn` - Button base class
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button

### Sections
- `.site-header` - Header/navigation
- `.site-footer` - Footer
- `.popular-services` - Services grid section

## 📝 File Paths Reference

### From `pages/` directory:
- CSS: `../css/styles.css`
- Images: `../images/`
- Homepage: `../index.html`
- Other pages: `about.html`, `services.html`

### From `pages/services/` directory:
- CSS: `../../css/styles.css`
- Images: `../../images/`
- Homepage: `../../index.html`
- Services page: `../services.html`

### From `pages/cities/` directory:
- CSS: `../../css/styles.css`
- Images: `../../images/`
- Homepage: `../../index.html`
- Cities index: `index.html`

## 🔍 SEO Checklist

- [ ] Unique title tag (50-60 characters)
- [ ] Unique meta description (150-160 characters)
- [ ] Canonical URL (full URL)
- [ ] H1 tag (only one, matches page purpose)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text on all images
- [ ] Internal links to related pages
- [ ] Structured data (JSON-LD) if applicable

## 🖼️ Image Guidelines

- **Format**: JPG for photos, PNG for logos/graphics
- **Size**: Optimize before uploading (aim for < 500KB)
- **Alt text**: Always include, describe what image shows
- **City pages**: Include city name in alt text
- **Example**: `alt="Service in City Name, State"`

## 🔗 Link Guidelines

### Internal Links
```html
<!-- Same directory -->
<a href="about.html">About</a>

<!-- Parent directory -->
<a href="../index.html">Home</a>

<!-- Subdirectory -->
<a href="services/service-name.html">Service</a>
```

### External Links
```html
<a href="https://example.com" target="_blank" rel="noopener">External Site</a>
```

## 📐 Content Guidelines

### Headings
- **H1**: One per page, main title
- **H2**: Major sections
- **H3**: Subsections
- **H4+**: Rarely needed

### Paragraphs
- Keep short (2-3 sentences)
- Break up long content with headings
- Use lists for multiple items

### Lists
```html
<!-- Unordered list -->
<ul class="services-list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Ordered list -->
<ol class="services-list">
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
```

## 🎯 Page-Specific Notes

### Standard Pages
- Use `_TEMPLATE-BASE.html`
- Focus on clear content structure
- Include relevant CTAs

### Service Pages
- Use `_TEMPLATE-SERVICE.html`
- Include Service JSON-LD schema
- Detail what's included
- Explain the process

### City Pages
- Use `_TEMPLATE-CITY.html`
- **Requires**: 600+ words, 250+ city-unique words
- Include city name naturally throughout
- Add local neighborhoods/ZIPs
- Include LocalBusiness JSON-LD
- Link to nearby cities
- Run validation: `npm run validate:cities`

## ✅ Pre-Publish Checklist

- [ ] All "REPLACE" comments updated
- [ ] Comment blocks removed
- [ ] All links tested
- [ ] Images optimized and have alt text
- [ ] Mobile responsive (test on phone)
- [ ] SEO elements complete
- [ ] No broken links
- [ ] Footer updated
- [ ] Navigation updated (if needed)

## 🆘 Common Issues

### Images not showing
- Check file path (use `../` for parent directory)
- Verify image exists
- Check file extension matches

### Links broken
- Use relative paths for internal links
- Check file exists
- Verify path is correct

### Styles not applying
- Check CSS path is correct
- Verify class names match CSS
- Check for typos in class names

### Page looks wrong on mobile
- Test on actual device
- Check viewport meta tag
- Verify responsive CSS classes

## 📚 More Help

- **Full Guide**: See `KING-TUT-TEMPLATE-GUIDE.md`
- **Examples**: Check existing pages in `pages/`
- **CSS Reference**: See `css/styles.css`
- **Config**: See `site.config.json`

---

**Quick Tip**: When in doubt, look at an existing similar page and copy its structure!

