# Automation Scripts

This directory contains automation scripts for the website template. All scripts use `site.config.json` for configuration.

## Available Scripts

### City Page Validation

**File**: `validate-city-pages.js`  
**Usage**: `npm run validate:cities` or `node scripts/validate-city-pages.js`

Validates all city pages meet quality standards:
- Minimum word count (600 words)
- City-unique content (250+ words)
- Image count and alt text quality
- JSON-LD schema presence
- SEO elements (canonical, title, meta description)
- Internal linking

**Example Output**:
```
✅ salt-lake-city-ut
   City: Salt Lake City
   Words: 850 total, ~320 city-unique
   Images: 5
   JSON-LD: LocalBusiness
```

### Sitemap Generation

**File**: `generate-sitemap.js`  
**Usage**: `npm run generate:sitemap` or `node scripts/generate-sitemap.js`

Dynamically generates `sitemap.xml` by scanning the filesystem:
- Scans all HTML files in `pages/` directory
- Sets appropriate priorities and change frequencies
- Updates lastmod dates from file modification times
- Sorts URLs by priority

**Features**:
- Homepage: priority 1.0, weekly updates
- City pages: priority 0.8, monthly updates
- Service pages: priority 0.9, monthly updates
- Other pages: priority 0.7, monthly updates

### Sitemap Validation

**File**: `check-sitemap.js`  
**Usage**: `npm run check:sitemap` or `node scripts/check-sitemap.js`

Validates sitemap.xml structure:
- Checks all URLs use correct domain (pondcleanup.com)
- Detects duplicate URLs
- Validates URL format
- Reports statistics

**Note**: This validates structure only. For full HTTP status checking, use external tools like Screaming Frog or Google Search Console.

## Data Structure

### City Data CSV

**File**: `data/cities/cities.csv`

Contains city-specific data for future data-driven generation:
- City name, state, county
- ZIP codes served
- Delivery/service information
- Permit requirements
- Local business information
- Contact information

**Current Status**: Sample data for 3 cities (Salt Lake City, Phoenix, Austin). Can be expanded.

## Configuration

All scripts use `site.config.json` via `config-loader.js`:

```javascript
const { loadConfig } = require('./config-loader');
const config = loadConfig();

// Access configuration
const siteName = config.site.name;
const siteUrl = config.site.url;
```

### Configuration Options

Scripts read from these config sections:

- **Sitemap**: `config.seo.sitemap.path` (default: `sitemap.xml`)
- **Site URL**: `config.site.url` (for sitemap URLs)
- **City Pages**: `config.features.cityPages.path` (default: `pages/cities`)
- **Validation Rules**: `config.validation.cityPages.*` (word counts, image counts)

## Extending Scripts

### Adding New Scripts

1. Create script in `scripts/` directory
2. Use `config-loader.js` to access configuration:
   ```javascript
   const { loadConfig } = require('./config-loader');
   const config = loadConfig();
   ```
3. Add npm script to `package.json`
4. Document in this README

### Custom Validation Rules

Update `site.config.json`:

```json
{
  "validation": {
    "cityPages": {
      "minWords": 600,
      "minCityUniqueWords": 250,
      "minImages": 3
    },
    "custom": {
      "yourRule": "value"
    }
  }
}
```

## Notes

- All scripts use Node.js (no TypeScript compilation needed)
- Scripts are designed for static HTML sites
- Configuration-driven via `site.config.json`
- Works with any domain/service type
- Maintains compatibility with PowerShell scripts (if present)

