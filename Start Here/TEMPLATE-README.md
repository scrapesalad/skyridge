# Website Template - Developer Documentation

## Overview

This is a **generic website template** that can be customized for any business or service. It includes:

- Modern, responsive design
- SEO optimization tools
- Automation scripts
- Quality assurance tools
- Comprehensive documentation

## For Developers

### Quick Start

1. **Clone/Download** this template
2. **Configure** `site.config.json` with your site details
3. **Customize** content, branding, and styling
4. **Deploy** to any static hosting

### Key Files

- `site.config.json` - **Main configuration file** (edit this first!)
- `README.md` - User-facing documentation
- `SETUP-GUIDE.md` - Step-by-step setup instructions
- `scripts/` - Automation and validation scripts
- `qa/` - Quality assurance checklists

### Architecture

```
Static HTML Site
├── Configuration-driven (site.config.json)
├── Modular page structure
├── Automation scripts (Node.js)
├── Quality assurance tools
└── SEO-optimized by default
```

### Customization Points

1. **Configuration**: `site.config.json` controls most settings
2. **Content**: HTML files in root and `pages/`
3. **Styling**: `css/styles.css` with CSS variables
4. **Scripts**: Node.js scripts in `scripts/`
5. **Data**: CSV/JSON files in `data/`

### Scripts API

All scripts use `config-loader.js` to read `site.config.json`:

```javascript
const { loadConfig } = require('./config-loader');
const config = loadConfig();

// Access config
const siteName = config.site.name;
const siteUrl = config.site.url;
```

### Adding Features

#### New Page Type

1. Create HTML template in `pages/`
2. Update navigation in `site.config.json`
3. Add to sitemap generation (if needed)
4. Update validation scripts (if needed)

#### New Automation Script

1. Create script in `scripts/`
2. Use `config-loader.js` for configuration
3. Add npm script to `package.json`
4. Document in `scripts/README.md`

#### Custom Validation

1. Add validation rules to `scripts/validate-*.js`
2. Update config in `site.config.json` → `validation`
3. Add to QA documentation

### Best Practices

1. **Always use config**: Don't hardcode values, use `site.config.json`
2. **Document changes**: Update README/docs when adding features
3. **Test scripts**: Run validation scripts after changes
4. **Keep it generic**: Avoid business-specific assumptions
5. **Version control**: Use Git, exclude `node_modules/` and `dist/`

### Template Structure

```
template/
├── site.config.json       # Configuration (EDIT THIS)
├── index.html             # Homepage template
├── pages/                 # Page templates
├── css/                   # Stylesheets
├── js/                    # JavaScript
├── images/                # Image placeholders
├── scripts/               # Automation scripts
│   ├── config-loader.js   # Config loader (use this!)
│   └── ...
├── data/                  # Data files
└── qa/                    # QA documentation
```

### Configuration Schema

See `site.config.json` for full schema. Key sections:

- `site` - Site information (name, domain, URL)
- `branding` - Logo, colors, fonts
- `contact` - Contact information
- `analytics` - Analytics configuration
- `seo` - SEO settings
- `navigation` - Menu structure
- `features` - Feature flags
- `validation` - Validation rules

### Extending the Template

#### Custom Build Process

Add to `package.json`:

```json
{
  "scripts": {
    "build": "node scripts/build.js",
    "deploy": "npm run build && deploy-command"
  }
}
```

#### Custom Scripts

Create in `scripts/`:

```javascript
const { loadConfig } = require('./config-loader');

function myScript() {
  const config = loadConfig();
  // Your script logic
}

if (require.main === module) {
  myScript();
}
```

#### Custom Validation

Extend validation scripts:

```javascript
const { loadConfig } = require('./config-loader');

function validateCustom(config) {
  const rules = config.validation.custom || {};
  // Validation logic
}
```

### Testing

```bash
# Test configuration loading
node -e "const {loadConfig} = require('./scripts/config-loader'); console.log(loadConfig());"

# Test scripts
npm run validate:cities
npm run generate:sitemap
npm run check:sitemap
```

### Deployment Considerations

1. **Static hosting only** - No server-side code
2. **Build step optional** - Works as-is or with build process
3. **CDN-friendly** - All assets can be on CDN
4. **No dependencies** - HTML/CSS/JS only (scripts are dev tools)

### Contributing to Template

If improving the template:

1. Keep it generic - no business-specific code
2. Use configuration - avoid hardcoded values
3. Document changes - update README/docs
4. Test scripts - ensure they work with config
5. Maintain compatibility - don't break existing setups

### Support

- **Documentation**: See `README.md` and `SETUP-GUIDE.md`
- **Scripts**: See `scripts/README.md`
- **QA**: See `qa/` directory
- **Config**: See `site.config.json` comments

---

**Template Version**: 1.0.0  
**For**: Developers building custom websites  
**License**: [Specify license]

