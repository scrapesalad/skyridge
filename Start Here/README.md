# King Tut Template - Universal Business Template

> 🎯 **UNIVERSAL TEMPLATE FOR ANY BUSINESS** - This King Tut template works for ANY service business in ANY category!

## ⭐ What Makes This Template Universal?

**Perfect for ANY local service business:**
- 🏠 Home Services (plumbing, HVAC, roofing, landscaping)
- 💼 Professional Services (lawyers, accountants, consultants)
- 🏥 Health & Wellness (gyms, spas, clinics, dentists)
- 🚗 Automotive (detailing, repair, dealers)
- 🏢 Business Services (cleaning, IT, marketing)
- **...and ANY other service business!**

**No niche-specific content.** All placeholders are generic and can be customized for your specific industry in minutes!

> 🎓 **FOR TRAINEES**: See [TRAINEE-CUSTOMIZATION-GUIDE.md](TRAINEE-CUSTOMIZATION-GUIDE.md) - Complete step-by-step guide!  
> 📖 **NICHE EXAMPLES**: See [NICHE-EXAMPLES.md](NICHE-EXAMPLES.md) - 20+ real-world examples!

---

## 🌟 What You Get

A modern, SEO-optimized, lead-generation website template with:
- ✅ **Premium Avada-Inspired Design** - Gold & navy color scheme (easily customizable)
- ✅ **Universal Placeholders** - No pond/contractor references, works for ANY business
- ✅ **71 City Pages** - Pre-built location pages (use or delete as needed)
- ✅ **SEO-Optimized** - Structured data, meta tags, sitemaps
- ✅ **Mobile Responsive** - Perfect on all devices
- ✅ **Lead Generation** - Forms and CTAs optimized for conversions
- ✅ **Automation Scripts** - Build pages, validate content, generate sitemaps
- ✅ **Complete Documentation** - Guides for every aspect

> 📚 **Documentation**: All setup guides and documentation are in the [`Start Here`](.) folder.

## 🎨 King Tut Template System

The **King Tut Template** includes:
- ✅ Template files with step-by-step instructions
- ✅ **Training placeholders** - All metadata uses "PUT TITLE HERE" style placeholders
- ✅ Comprehensive building guides
- ✅ Examples in every page
- ✅ Quick reference guides
- ✅ **$20,000+ Design System** - Professional CSS variables, color schemes, and typography

**Start Building**: See [KING-TUT-TEMPLATE-GUIDE.md](KING-TUT-TEMPLATE-GUIDE.md)  
**SEO Training**: See [SEO-METADATA-TRAINING-GUIDE.md](SEO-METADATA-TRAINING-GUIDE.md)  
**Design System**: See [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)  
**Color Presets**: See [COLOR-SCHEME-PRESETS.md](COLOR-SCHEME-PRESETS.md)  
**Placeholders Reference**: See [METADATA-PLACEHOLDERS-REFERENCE.md](METADATA-PLACEHOLDERS-REFERENCE.md)

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone <repository-url>
cd website-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Your Site

Edit `site.config.json` with your site information:

```json
{
  "site": {
    "name": "Your Site Name",
    "domain": "yoursite.com",
    "url": "https://yoursite.com"
  },
  "branding": {
    "colors": {
      "primary": { "base": "#0066cc" },
      "secondary": { "base": "#00a3a3" }
    },
    "logo": {
      "path": "images/logo/your-logo.png"
    }
  }
}
```

See [Configuration Guide](#configuration) for all options.

### 4. Customize Content

- Replace placeholder content in HTML files
- Update images in `images/` directory
- Customize CSS in `css/styles.css`
- Update navigation in `site.config.json`

### 5. Start Development Server

```bash
npm run dev
```

Opens at `http://localhost:3000`

## 📁 Project Structure

```
.
├── site.config.json          # Site configuration (EDIT THIS FIRST)
├── index.html                # Homepage
├── pages/                    # All page files
│   ├── about.html
│   ├── services.html
│   ├── cities/              # City/location pages
│   ├── services/            # Individual service pages
│   └── ...
├── css/
│   └── styles.css           # Main stylesheet
├── js/
│   └── search.js            # Search functionality
├── images/                  # All images
│   └── logo/                # Logo and favicons
├── scripts/                 # Automation scripts
│   ├── validate-city-pages.js
│   ├── generate-sitemap.js
│   └── check-sitemap.js
├── data/                    # Data files (CSV, JSON)
│   └── cities/
└── qa/                      # Quality assurance docs
```

## ⚙️ Configuration

### Site Configuration (`site.config.json`)

The main configuration file controls all site settings:

#### Site Information
```json
{
  "site": {
    "name": "Your Site Name",
    "domain": "yoursite.com",
    "url": "https://yoursite.com",
    "description": "Your site description",
    "keywords": ["keyword1", "keyword2"]
  }
}
```

#### Branding
```json
{
  "branding": {
    "logo": {
      "path": "images/logo/your-logo.png",
      "alt": "Your Site Name"
    },
    "colors": {
      "primary": "#0066cc",
      "secondary": "#00a3a3"
    }
  }
}
```

#### Navigation
```json
{
  "navigation": {
    "main": [
      { "label": "Services", "url": "pages/services.html" },
      { "label": "About", "url": "pages/about.html" }
    ]
  }
}
```

#### Analytics
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

See `site.config.json` for all available options.

## 🛠️ Available Scripts

### Development
```bash
npm run dev          # Start development server
npm start            # Same as dev
```

### Quality Assurance
```bash
npm run validate:cities    # Validate city pages
npm run generate:sitemap   # Generate sitemap.xml
npm run check:sitemap      # Validate sitemap structure
```

### PowerShell Scripts (Windows)
```powershell
.\verify-seo.ps1           # Verify SEO elements
.\create-cities.ps1        # Generate city pages (if applicable)
```

## 🎨 Customization Guide

### 1. Branding

#### Logo
1. Replace logo files in `images/logo/`
2. Update `site.config.json` → `branding.logo.path`
3. Update alt text in HTML files

#### Colors
1. Edit CSS variables in `css/styles.css`:
```css
:root {
  --color-primary: #0066cc;
  --color-secondary: #00a3a3;
}
```

Or update `site.config.json` → `branding.colors`

#### Fonts
Update `site.config.json` → `branding.fonts` or edit CSS directly.

### 2. Content

#### Homepage
- Edit `index.html`
- Update hero section, services, testimonials
- Replace placeholder images

#### Pages
- Edit files in `pages/` directory
- Update meta tags (title, description)
- Customize content sections

#### City/Location Pages
- Edit templates in `pages/cities/`
- Update city-specific content
- Run `npm run validate:cities` to check quality

### 3. Navigation

Edit `site.config.json` → `navigation`:
- `main`: Main navigation menu
- `footer`: Footer links
- `cta`: Call-to-action button

### 4. SEO

#### Meta Tags
Update in each HTML file:
- `<title>`
- `<meta name="description">`
- `<meta name="keywords">`

#### Structured Data (JSON-LD)
Update JSON-LD scripts in HTML `<head>`:
- Organization schema
- WebSite schema
- LocalBusiness schema (if applicable)

#### Sitemap
Run `npm run generate:sitemap` to auto-generate from filesystem.

### 5. Analytics

Enable in `site.config.json`:
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

Then update HTML files to use the tracking ID (or use a build script).

## 📝 Page Templates

### Homepage (`index.html`)
- Hero section with CTA
- Services overview
- Features/benefits
- Testimonials
- Call-to-action

### Service Pages (`pages/services.html`)
- Service listing
- Individual service detail pages in `pages/services/`

### City/Location Pages (`pages/cities/`)
- City-specific content
- Service area information
- Local references
- SEO-optimized for local search

### About Page (`pages/about.html`)
- Company/business information
- Mission/values
- Team (if applicable)

### Contact Page (`pages/contact.html`)
- Contact form
- Contact information
- Map (if applicable)

## 🔍 SEO Features

### Built-in SEO
- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ Canonical URLs
- ✅ Sitemap generation
- ✅ robots.txt
- ✅ Mobile-responsive design

### SEO Tools
- **Sitemap Generator**: Auto-generates from filesystem
- **City Page Validator**: Ensures quality standards
- **SEO Verification**: PowerShell script checks all pages

## 🧪 Quality Assurance

### Automated Validation

#### City Pages
```bash
npm run validate:cities
```
Checks:
- Word count (600+ words)
- City-unique content (250+ words)
- Images and alt text
- JSON-LD schemas
- SEO elements

#### Sitemap
```bash
npm run check:sitemap
```
Validates:
- URL structure
- Domain consistency
- Duplicate detection

### Manual Checklists
- `qa/city-page-qa.md` - City page quality checklist
- `qa/homepage-qa.md` - Homepage quality checklist

## 📦 Deployment

### Static Hosting

This template works with any static hosting:

- **Netlify**: Drag & drop or connect Git
- **Vercel**: Connect repository
- **GitHub Pages**: Enable in repository settings
- **AWS S3 + CloudFront**: Upload files to S3
- **Any web server**: Upload files via FTP/SFTP

### Pre-Deployment Checklist

- [ ] Update `site.config.json` with production settings
- [ ] Replace all placeholder content
- [ ] Update all images and logos
- [ ] Run `npm run generate:sitemap`
- [ ] Run `npm run validate:cities` (if using city pages)
- [ ] Test all links and forms
- [ ] Verify analytics tracking
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers
- [ ] Run SEO verification script

## 🎯 Features

### Core Features
- ✅ Modern, responsive design
- ✅ SEO-optimized structure
- ✅ Fast loading times
- ✅ Mobile-first approach
- ✅ Accessibility considerations
- ✅ Cross-browser compatible

### Automation
- ✅ Dynamic sitemap generation
- ✅ City page validation
- ✅ SEO verification tools
- ✅ Quality assurance scripts

### Extensibility
- ✅ Modular page structure
- ✅ Configurable via JSON
- ✅ Easy to customize
- ✅ Well-documented

## 📚 King Tut Template Documentation

### Building Pages
- **[KING-TUT-TEMPLATE-GUIDE.md](KING-TUT-TEMPLATE-GUIDE.md)** - Complete page building guide
- **[PAGE-BUILDING-QUICK-REFERENCE.md](PAGE-BUILDING-QUICK-REFERENCE.md)** - Quick reference for building pages

### Template Files
- `pages/_TEMPLATE-BASE.html` - Base template for standard pages
- `pages/_TEMPLATE-SERVICE.html` - Template for service detail pages
- `pages/_TEMPLATE-CITY.html` - Template for city/location pages

**How to use**: Copy a template file and follow the STEP comments to customize.

## 📚 Documentation

- **Configuration**: See `site.config.json` comments
- **Scripts**: See `scripts/README.md`
- **QA**: See `qa/` directory
- **SEO**: See `SEO-SETUP.md`

## 🤝 Contributing

This is a template - customize it for your needs! If you improve it:

1. Document your changes
2. Update configuration examples
3. Share improvements (if applicable)

## 📄 License

[Specify your license here]

## 🆘 Support

### Common Issues

**Issue**: Scripts not working
- **Fix**: Ensure Node.js is installed (`node --version`)
- **Fix**: Run `npm install` to install dependencies

**Issue**: Development server won't start
- **Fix**: Check if port 3000 is available
- **Fix**: Try `npm run dev -- --port=3001`

**Issue**: Sitemap generation fails
- **Fix**: Ensure HTML files exist in `pages/` directory
- **Fix**: Check file permissions

### Getting Help

1. Check documentation in `qa/` and `scripts/README.md`
2. Review `site.config.json` examples
3. Check HTML file structure matches template

## 🎨 Design System

The template includes a **professional design system** worth $20,000+:

- ✅ **200+ CSS Variables** - Complete design token system
- ✅ **Color System** - Full palettes with 50-900 shades
- ✅ **Typography Scale** - Responsive headings and font sizes
- ✅ **Spacing System** - 8px-based grid system
- ✅ **10 Color Presets** - Ready-to-use color schemes
- ✅ **Automation** - Sync config to CSS with one command

**Quick Start:**
1. Choose a color scheme from [COLOR-SCHEME-PRESETS.md](COLOR-SCHEME-PRESETS.md)
2. Copy it into `site.config.json` → `branding.colors`
3. Run `npm run sync:design-tokens`
4. Include `css/design-tokens-override.css` in your HTML

**Full Documentation:** See [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)

## 🎉 Next Steps

1. ✅ Configure `site.config.json`
2. ✅ Choose a color scheme from presets
3. ✅ Run `npm run sync:design-tokens`
4. ✅ Replace placeholder content
5. ✅ Add your logo and images
6. ✅ Customize colors and fonts
7. ✅ Update navigation
8. ✅ Test locally with `npm run dev`
9. ✅ Run quality checks
10. ✅ Deploy to hosting

---

**Template Version**: 1.0.0  
**Last Updated**: 2024-12-19
