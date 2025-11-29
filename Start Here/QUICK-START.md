# Quick Start Guide

Get your website up and running in 5 minutes.

## Step 1: Configure (2 minutes)

Edit `site.config.json`:

```json
{
  "site": {
    "name": "Your Business Name",
    "domain": "yourdomain.com",
    "url": "https://yourdomain.com"
  }
}
```

## Step 2: Replace Logo (1 minute)

1. Add your logo to `images/logo/your-logo.png`
2. Update `site.config.json` → `branding.logo.path`

## Step 3: Update Homepage (2 minutes)

Edit `index.html`:
- Change title and description
- Update hero text
- Replace placeholder content

## Step 4: Test Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Step 5: Deploy

Upload all files to your web hosting or use:
- Netlify (drag & drop)
- Vercel (connect Git)
- GitHub Pages
- Any static hosting

---

**That's it!** Your site is live.

For detailed customization, see `SETUP-GUIDE.md`.

