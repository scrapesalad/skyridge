# King Tut Template - Index & Overview

## 🎯 What is the King Tut Template?

The **King Tut Template** is a comprehensive website template system where every page serves as both:
1. **A working example** - See how pages are built
2. **A building guide** - Learn from the structure and comments

## 📁 Template Files

### Base Templates (Start Here)

Located in `pages/` directory:

| Template File | Use For | Location |
|--------------|---------|----------|
| `_TEMPLATE-BASE.html` | Standard content pages (About, FAQ, Contact) | `pages/` |
| `_TEMPLATE-SERVICE.html` | Individual service detail pages | `pages/services/` |
| `_TEMPLATE-CITY.html` | City/location-specific pages | `pages/cities/` |

**How to use**: Copy a template file, search for "REPLACE" comments, and customize.

### Example Pages (Learn From)

All pages in `pages/` are examples you can learn from:

- `about.html` - Standard page example
- `services.html` - Services listing example
- `services/service-2.html` - Service detail example
- `cities/salt-lake-city-ut.html` - City page example
- `contact.html` - Contact form example
- `gallery.html` - Gallery example

## 📚 Documentation

### Getting Started
1. **[KING-TUT-TEMPLATE-GUIDE.md](KING-TUT-TEMPLATE-GUIDE.md)** - Complete guide (read this first!)
2. **[PAGE-BUILDING-QUICK-REFERENCE.md](PAGE-BUILDING-QUICK-REFERENCE.md)** - Quick reference

### Setup Guides
- **[START-HERE.md](START-HERE.md)** - Template overview
- **[QUICK-START.md](QUICK-START.md)** - 5-minute setup
- **[SETUP-GUIDE.md](SETUP-GUIDE.md)** - Detailed setup

## 🚀 Quick Start Workflow

### Step 1: Choose Your Template
```
Need a standard page?     → _TEMPLATE-BASE.html
Need a service page?       → _TEMPLATE-SERVICE.html
Need a city page?         → _TEMPLATE-CITY.html
```

### Step 2: Copy Template
```bash
# Standard page
cp pages/_TEMPLATE-BASE.html pages/my-page.html

# Service page
cp pages/_TEMPLATE-SERVICE.html pages/services/my-service.html

# City page
cp pages/_TEMPLATE-CITY.html pages/cities/my-city-state.html
```

### Step 3: Customize
1. Open your new file
2. Search for "REPLACE" (case-sensitive)
3. Update all instances
4. Remove comment blocks when done

### Step 4: Validate
- Test links
- Check mobile responsiveness
- Run SEO validation
- For city pages: `npm run validate:cities`

## 🎨 Template Features

### Built-in Guides
- ✅ Step-by-step comments in every template
- ✅ Clear "REPLACE" markers for customization
- ✅ SEO requirements explained
- ✅ Best practices included

### Example Pages
- ✅ Every page is a working example
- ✅ Learn by examining existing pages
- ✅ Copy structure from similar pages

### Documentation
- ✅ Comprehensive guides
- ✅ Quick reference
- ✅ Common patterns explained

## 📋 Template Structure

### Standard Page Structure
```
1. Head Section
   - Analytics (optional)
   - Meta tags (required)
   - Favicons
   - Stylesheet
   - Structured data (recommended)

2. Header
   - Logo
   - Navigation

3. Main Content
   - Hero section
   - Content sections
   - CTA section (optional)

4. Footer
   - Copyright
   - Footer navigation
```

### File Paths
- Pages in `pages/` use `../` for root files
- Pages in `pages/services/` use `../../` for root files
- Pages in `pages/cities/` use `../../` for root files

## 🎯 Page Types Guide

### Standard Pages
**Template**: `_TEMPLATE-BASE.html`  
**Examples**: `about.html`, `faq.html`, `contact.html`  
**Use for**: General content pages

### Service Pages
**Template**: `_TEMPLATE-SERVICE.html`  
**Examples**: `services/service-2.html`  
**Use for**: Individual service descriptions

### City Pages
**Template**: `_TEMPLATE-CITY.html`  
**Examples**: `cities/salt-lake-city-ut.html`  
**Use for**: Location-specific pages  
**Requirements**: 600+ words, 250+ city-unique words

## 🔍 Finding What You Need

### Need to build a page?
→ Start with [KING-TUT-TEMPLATE-GUIDE.md](KING-TUT-TEMPLATE-GUIDE.md)

### Need quick reference?
→ See [PAGE-BUILDING-QUICK-REFERENCE.md](PAGE-BUILDING-QUICK-REFERENCE.md)

### Need an example?
→ Look at similar pages in `pages/` directory

### Need CSS classes?
→ Check `css/styles.css` or look at existing pages

### Need configuration?
→ See `site.config.json` in root directory

## ✅ Quality Checklist

Before publishing any page:

- [ ] All "REPLACE" comments updated
- [ ] Comment blocks removed
- [ ] Title tag (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] Canonical URL set
- [ ] H1 tag present (only one)
- [ ] Images have alt text
- [ ] All links work
- [ ] Mobile responsive
- [ ] SEO elements complete
- [ ] Structured data (if applicable)

## 🎓 Learning Path

1. **Read**: [KING-TUT-TEMPLATE-GUIDE.md](KING-TUT-TEMPLATE-GUIDE.md)
2. **Examine**: Look at `pages/about.html` as an example
3. **Practice**: Copy `_TEMPLATE-BASE.html` and build a test page
4. **Reference**: Keep [PAGE-BUILDING-QUICK-REFERENCE.md](PAGE-BUILDING-QUICK-REFERENCE.md) handy
5. **Build**: Create your actual pages

## 🆘 Getting Help

1. **Check examples**: Look at similar pages in `pages/`
2. **Read guides**: See documentation in `Start Here/`
3. **Check CSS**: See `css/styles.css` for available classes
4. **Review config**: Check `site.config.json` for settings

## 📊 Template Statistics

- **3 Base Templates** - Cover all page types
- **10+ Example Pages** - Learn from real examples
- **2 Comprehensive Guides** - Full documentation
- **1 Quick Reference** - Fast lookup

---

**Ready to build?** Start with [KING-TUT-TEMPLATE-GUIDE.md](KING-TUT-TEMPLATE-GUIDE.md)!

