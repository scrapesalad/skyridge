# Metadata Placeholders Reference

Quick reference for all "PUT" placeholders used throughout the King Tut Template.

## 🔍 Finding Placeholders

**Search for**: `PUT` (case-sensitive) in any HTML file to find all placeholders.

## 📋 Common Placeholders

### Site Information
- `PUT SITE NAME HERE` - Your website/business name
- `PUT YOUR DOMAIN HERE` - Your domain (e.g., yoursite.com)
- `PUT-YOUR-DOMAIN-HERE` - Same, used in URLs (no spaces)

### Page Information
- `PUT PAGE TITLE HERE` - Page title (50-60 characters)
- `PUT PAGE DESCRIPTION HERE` - Meta description (150-160 characters)
- `PUT PAGE PATH HERE` - URL path (e.g., about, services/service-name)

### SEO Elements
- `PUT KEYWORD 1 HERE` - Primary keyword
- `PUT KEYWORD 2 HERE` - Secondary keyword
- `PUT KEYWORD 3 HERE` - Tertiary keyword

### Images
- `PUT-OG-IMAGE-FILENAME-HERE.jpg` - Open Graph image filename
- `PUT-TWITTER-IMAGE-FILENAME-HERE.jpg` - Twitter image filename
- `PUT-LOGO-FILENAME-HERE.png` - Logo filename

### Analytics
- `PUT-YOUR-GOOGLE-ANALYTICS-ID-HERE` - Google Analytics tracking ID (format: G-XXXXXXXXXX)

### Service Pages
- `PUT SERVICE NAME HERE` - Name of the service
- `PUT SERVICE TYPE HERE` - Type of service (e.g., "Professional Service", "Web Design")
- `PUT SERVICE DESCRIPTION HERE` - Service description
- `PUT-SERVICE-PATH-HERE` - Service URL path

### City Pages
- `PUT CITY NAME HERE` - City name
- `PUT STATE HERE` - State name (full)
- `PUT STATE CODE HERE` - State code (e.g., UT, CA, TX)
- `PUT SERVICES HERE` - Services offered
- `PUT-CITY-SLUG-HERE` - City URL slug (e.g., salt-lake-city-ut)

### Business Information
- `PUT YOUR BUSINESS NAME HERE` - Business/organization name
- `PUT YOUR BUSINESS DESCRIPTION HERE` - Business description
- `PUT-YOUR-EMAIL-HERE@yourdomain.com` - Contact email

### Social Media
- `PUT-FACEBOOK-URL-HERE` - Facebook page URL
- `PUT-TWITTER-URL-HERE` - Twitter profile URL
- `PUT-LINKEDIN-URL-HERE` - LinkedIn company URL

## 🔄 Replacement Workflow

1. **Open HTML file**
2. **Search for "PUT"** (Ctrl+F / Cmd+F)
3. **Replace each instance** with your actual content
4. **Verify format** matches requirements
5. **Check length** (for title/description)

## ✅ Quick Checklist

When replacing placeholders:

- [ ] All `PUT SITE NAME HERE` → Your site name
- [ ] All `PUT-YOUR-DOMAIN-HERE` → Your domain
- [ ] All `PUT PAGE TITLE HERE` → Page-specific title
- [ ] All `PUT PAGE DESCRIPTION HERE` → Page-specific description
- [ ] All image filenames → Actual image filenames
- [ ] All URLs → Actual URLs
- [ ] Analytics ID → Your tracking ID (if using)

## 📝 Examples

### Before (Template)
```html
<title>PUT PAGE TITLE HERE | PUT SITE NAME HERE</title>
<meta name="description" content="PUT YOUR PAGE DESCRIPTION HERE" />
<link rel="canonical" href="https://PUT-YOUR-DOMAIN-HERE.com/pages/PUT-PAGE-PATH-HERE" />
```

### After (Your Content)
```html
<title>About Our Company | Acme Services</title>
<meta name="description" content="Learn about Acme Services, a leading provider of quality solutions. We've been serving customers since 2010 with excellence." />
<link rel="canonical" href="https://acmeservices.com/pages/about" />
```

---

**Tip**: Use Find & Replace (Ctrl+H / Cmd+H) to replace all instances of a placeholder at once!

