# Metadata Update Instructions

## 🎯 Overview

All pages in the King Tut Template now use **training placeholders** for SEO metadata. This document explains how to update them.

## 📋 What Needs Updating

### Required Updates (Every Page)

1. **Title Tag** - `PUT PAGE TITLE HERE | PUT SITE NAME HERE`
2. **Meta Description** - `PUT YOUR PAGE DESCRIPTION HERE`
3. **Canonical URL** - `https://PUT-YOUR-DOMAIN-HERE.com/pages/PUT-PAGE-PATH-HERE`
4. **Analytics ID** - `PUT-YOUR-GOOGLE-ANALYTICS-ID-HERE` (if using analytics)

### Recommended Updates

5. **Open Graph Tags** - For social sharing
6. **Twitter Card Tags** - For Twitter sharing
7. **Structured Data** - JSON-LD schemas

## 🔍 How to Find Placeholders

### Method 1: Search in File
1. Open HTML file
2. Press `Ctrl+F` (Windows) or `Cmd+F` (Mac)
3. Search for: `PUT`
4. Replace each instance

### Method 2: Use Script
```bash
npm run update:placeholders
```
This updates analytics placeholders automatically (other metadata needs manual update).

## 📝 Update Process

### Step 1: Open File
Open the HTML file you want to update.

### Step 2: Find Placeholders
Search for "PUT" to find all placeholders.

### Step 3: Replace Content
Replace each placeholder with your actual content:

**Before**:
```html
<title>PUT PAGE TITLE HERE | PUT SITE NAME HERE</title>
```

**After**:
```html
<title>About Our Company | Acme Services</title>
```

### Step 4: Verify Requirements
- Title: 50-60 characters ✓
- Description: 150-160 characters ✓
- URLs: Full format with https:// ✓

## 🎯 Page-Specific Updates

### Homepage (`index.html`)

Update:
- `PUT SITE NAME HERE` → Your site name
- `PUT PRIMARY SERVICE HERE` → Your main service
- `PUT YOUR DOMAIN HERE` → Your domain
- `PUT-YOUR-GOOGLE-ANALYTICS-ID-HERE` → Your analytics ID
- Organization schema fields
- WebSite schema fields

### Standard Pages (`pages/about.html`, etc.)

Update:
- `PUT PAGE TITLE HERE` → Page-specific title
- `PUT SITE NAME HERE` → Your site name
- `PUT YOUR PAGE DESCRIPTION HERE` → Page description
- `PUT-PAGE-PATH-HERE` → Actual page path

### Service Pages (`pages/services/service-name.html`)

Update:
- `PUT SERVICE NAME HERE` → Service name
- `PUT SERVICE TYPE HERE` → Service type
- `PUT SERVICE DESCRIPTION HERE` → Service description
- Service schema (JSON-LD) fields

### City Pages (`pages/cities/city-name-state.html`)

Update:
- `PUT CITY NAME HERE` → City name
- `PUT STATE HERE` → State name
- `PUT STATE CODE HERE` → State code (UT, CA, etc.)
- `PUT SERVICES HERE` → Services offered
- LocalBusiness schema (JSON-LD) fields

## ⚡ Quick Update Script

For analytics only:
```bash
npm run update:placeholders
```

This updates analytics placeholders across all files. Other metadata needs manual updates.

## 📚 Reference Guides

- **Complete Guide**: `SEO-METADATA-TRAINING-GUIDE.md`
- **Placeholders List**: `METADATA-PLACEHOLDERS-REFERENCE.md`
- **Template Guide**: `KING-TUT-TEMPLATE-GUIDE.md`

## ✅ Checklist

When updating a page:

- [ ] Title tag updated (50-60 chars)
- [ ] Meta description updated (150-160 chars)
- [ ] Canonical URL updated
- [ ] Analytics ID updated (if using)
- [ ] Open Graph tags updated
- [ ] Twitter Card tags updated
- [ ] Structured data (JSON-LD) updated
- [ ] All "PUT" placeholders replaced
- [ ] Verified character counts
- [ ] Tested on page

## 🆘 Common Questions

### Q: Do I need to update all 88+ pages?
**A**: Start with main pages (homepage, about, services, contact). City pages can be updated as needed or use a find/replace tool.

### Q: Can I use find/replace?
**A**: Yes! Use find/replace to update common values like site name and domain across multiple files.

### Q: What if I don't use analytics?
**A**: Remove or comment out the analytics section in the `<head>`.

### Q: Do I need all the meta tags?
**A**: Title, description, and canonical are required. Open Graph and Twitter tags are recommended for social sharing.

---

**Remember**: The placeholders are there to teach you! Replace them with your actual content.

