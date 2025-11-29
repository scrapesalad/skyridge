# King Tut Universal Template - Quick Start Card

## ⚡ 30-Second Overview

**What is this?** A professional website template for ANY service business  
**Who's it for?** Trainees building lead-generation websites  
**What's special?** No niche-specific content - works for roofing, HVAC, legal, dental, ANY business!

---

## 🚀 5-Minute Quick Start

### 1. Define Your Business (1 min)
```
Business Name: _____________________
Primary Service: ___________________
Target City: _______________________
```

### 2. Update Config (2 min)
Edit `site.config.json`:
- Change `"name"` to your business name
- Change phone/email in `"contact"`

### 3. Sync Colors (30 sec)
```bash
npm run sync:design-tokens
```

### 4. Find & Replace (1 min)
Press `Ctrl+Shift+F` (Windows) or `Cmd+Shift+F` (Mac)

Replace these everywhere:
- `PUT SITE NAME HERE` → Your Business Name
- `PUT PRIMARY SERVICE HERE` → Your Main Service
- `PUT YOUR DOMAIN HERE` → yourdomain.com

### 5. You're Ready! (30 sec)
```bash
npm run dev
```
View at `http://localhost:3000`

---

## 📚 Full Guides Available

| Guide | Purpose | When to Use |
|-------|---------|-------------|
| **TRAINEE-CUSTOMIZATION-GUIDE.md** | Complete customization | Setting up for first time |
| **NICHE-EXAMPLES.md** | 20+ industry examples | Need ideas for your niche |
| **AVADA-THEME-GUIDE.md** | Theme customization | Changing colors/design |
| **COLOR-PALETTE-REFERENCE.md** | Color usage | Working with colors |
| **README.md** | Full documentation | Need complete reference |

---

## 🎯 Common Customizations

### Change Business Type
1. Rename service files: `pages/services/service-template-1.html` → `your-service-name.html`
2. Update service names in files
3. Update homepage service section

### Change Service Area
**Option A:** Use existing city pages
- Edit city pages in `pages/cities/`
- Delete cities you don't serve

**Option B:** Create new city pages
- Copy `pages/cities/_TEMPLATE-CITY.html`
- Rename to `your-city-state.html`
- Customize content

### Change Colors
1. Edit `site.config.json` → `branding.colors`
2. Run `npm run sync:design-tokens`
3. Done!

### Add Logo
1. Replace `images/logo/kingtutlogo.png`
2. Update `alt` text in HTML
3. Generate favicon: https://favicon.io

---

## 🔍 Universal Placeholders

Search for these and replace with your info:

| Placeholder | Replace With | Example |
|------------|--------------|---------|
| `PUT SITE NAME HERE` | Business name | "ABC Roofing" |
| `PUT PRIMARY SERVICE HERE` | Main service | "Roof Repair" |
| `PUT SERVICE TYPE HERE` | Specific service | "AC Repair" |
| `PUT CITY NAME HERE` | Target city | "Austin" |
| `PUT STATE HERE` | State | "Texas" |
| `PUT YOUR DOMAIN HERE` | Your domain | "abcroofing.com" |
| `PUT KEYWORD 1 HERE` | SEO keyword | "roofing austin" |
| `PUT YOUR MAIN CTA TEXT HERE` | CTA button | "Get Free Quote" |

---

## 📂 Key Files

| File/Folder | What It Does |
|-------------|--------------|
| `site.config.json` | Master configuration |
| `index.html` | Homepage |
| `pages/services/` | Service pages |
| `pages/cities/` | City/location pages |
| `css/styles.css` | Styles |
| `images/logo/` | Your logo |

---

## 🛠️ Useful Commands

```bash
# Sync design tokens (after editing site.config.json)
npm run sync:design-tokens

# Start development server
npm run dev

# Validate city pages (check quality)
npm run validate:cities

# Generate sitemap (for SEO)
npm run generate:sitemap

# Make template universal (already done!)
node scripts/universalize-template.js
```

---

## ✅ Pre-Launch Checklist

- [ ] All `PUT YOUR` placeholders replaced
- [ ] Logo updated
- [ ] Favicon created
- [ ] Contact info correct
- [ ] Service pages renamed and customized
- [ ] Unnecessary city pages deleted
- [ ] Forms tested
- [ ] Mobile view checked
- [ ] Colors match brand (if needed)

---

## 💡 Pro Tips

1. **Start Simple:** Customize homepage first, then add pages
2. **Use Templates:** Copy `_TEMPLATE-*.html` files for new pages
3. **Keep It Clean:** Delete example pages you don't need
4. **Test Often:** Use `npm run dev` to preview changes
5. **Read Examples:** Check `NICHE-EXAMPLES.md` for ideas

---

## 🆘 Quick Troubleshooting

**Q: Colors won't change**  
A: After editing `site.config.json`, run `npm run sync:design-tokens`

**Q: Where's the contractor/pond stuff?**  
A: Removed! This is now a universal template. See `UNIVERSAL-TEMPLATE-TRANSFORMATION.md`

**Q: How do I add a new service page?**  
A: Copy `pages/services/_TEMPLATE-SERVICE.html`, rename it, customize it

**Q: Do I need all 71 city pages?**  
A: No! Delete cities you don't serve. Keep only what you need.

**Q: Can I change the theme colors?**  
A: Yes! Edit `site.config.json` → `branding.colors`

---

## 🎓 Learning Path

### Day 1: Setup & Configuration
- Read this guide
- Edit `site.config.json`
- Run design token sync
- Preview site

### Day 2: Homepage Customization
- Update homepage content
- Replace placeholders
- Add your logo
- Customize hero section

### Day 3: Service Pages
- Rename service templates
- Customize service content
- Add service images

### Day 4: City Pages
- Choose cities to keep
- Customize city content
- Add local information
- Delete unnecessary pages

### Day 5: Polish & Launch
- Test all forms
- Check all links
- Validate SEO
- Generate sitemap
- Deploy!

---

## 📞 Need More Help?

**Full Customization Guide:**  
→ `Start Here/TRAINEE-CUSTOMIZATION-GUIDE.md`

**Niche Examples:**  
→ `Start Here/NICHE-EXAMPLES.md`

**Full Documentation:**  
→ `Start Here/README.md`

**What Changed:**  
→ `Start Here/UNIVERSAL-TEMPLATE-TRANSFORMATION.md`

---

## 🎉 You're Ready!

This template works for:
- Home services (roofing, HVAC, plumbing)
- Professional services (lawyers, accountants)
- Health & wellness (gyms, spas, clinics)
- Automotive (detailing, repair)
- **ANY local service business!**

**No industry-specific content. Just customize and launch!**

---

**Template Version:** King Tut Universal v2.0  
**Last Updated:** November 29, 2025  
**Status:** Ready for Trainees ✅

