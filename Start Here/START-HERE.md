# 🚀 START HERE - Website Template

Welcome! This is a **generic website template** that you can customize for any business or service.

## Quick Navigation

- **New to this?** → Read [QUICK-START.md](QUICK-START.md) (5 minutes)
- **Want detailed setup?** → Read [SETUP-GUIDE.md](SETUP-GUIDE.md)
- **Developer?** → Read [TEMPLATE-README.md](TEMPLATE-README.md)
- **Converting from template?** → Use [CONVERSION-CHECKLIST.md](CONVERSION-CHECKLIST.md)

## First Steps

### 1. Configure Your Site (2 minutes)

Edit `../site.config.json` (in the root directory):

```json
{
  "site": {
    "name": "Your Business Name",
    "domain": "yourdomain.com",
    "url": "https://yourdomain.com"
  }
}
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Opens at `http://localhost:3000`

### 4. Customize

- Replace content in HTML files
- Add your logo to `images/logo/`
- Update colors in `css/styles.css`
- Follow [SETUP-GUIDE.md](SETUP-GUIDE.md) for details

## Key Files

| File | Purpose | Location |
|------|---------|----------|
| `site.config.json` | ⭐ **Main configuration** - Edit this first! | Root directory |
| `README.md` | Complete user guide | Root directory |
| `QUICK-START.md` | 5-minute quick start | This folder |
| `SETUP-GUIDE.md` | Detailed setup instructions | This folder |
| `index.html` | Homepage template | Root directory |
| `pages/` | All page templates | Root directory |

## Available Commands

```bash
npm run dev              # Start development server
npm run validate:cities  # Validate city pages (if using)
npm run generate:sitemap # Generate sitemap.xml
npm run check:sitemap    # Validate sitemap
```

## What's Included

✅ Modern, responsive design  
✅ SEO optimization tools  
✅ Automation scripts  
✅ Quality assurance tools  
✅ Comprehensive documentation  
✅ Configuration-driven setup  

## Need Help?

1. **Quick setup?** → [QUICK-START.md](QUICK-START.md)
2. **Detailed guide?** → [SETUP-GUIDE.md](SETUP-GUIDE.md)
3. **Developer docs?** → [TEMPLATE-README.md](TEMPLATE-README.md)
4. **Checklist?** → [CONVERSION-CHECKLIST.md](CONVERSION-CHECKLIST.md)

## Next Steps

1. ✅ Edit `site.config.json`
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Customize content
5. ✅ Deploy!

---

**Ready?** Start with [QUICK-START.md](QUICK-START.md) or [SETUP-GUIDE.md](SETUP-GUIDE.md)

