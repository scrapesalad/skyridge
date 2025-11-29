# Vercel Deployment Guide - King Tut Template

## 🚀 Quick Deploy to Vercel

Your King Tut template is ready for Vercel deployment! All images are in the `public` folder and paths are configured correctly.

---

## 📋 Pre-Deployment Checklist

✅ **All images in public folder** - Done!  
✅ **Absolute image paths** - All paths use `/images/...`  
✅ **vercel.json configured** - Security headers and caching set  
✅ **Static assets organized** - CSS, JS, images all ready  

---

## 🎯 Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with GitHub

2. **Import Your Repository**
   - Click "Add New Project"
   - Select `Utah-MMC/kingtut` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Other
   - **Root Directory:** `.` (root)
   - **Build Command:** `npm run sync:design-tokens` (optional)
   - **Output Directory:** `.` (root)

4. **Deploy!**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

---

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow Prompts**
   - Link to existing project? **No** (first time)
   - Project name: **kingtut** (or your choice)
   - Directory: **.** (current directory)
   - Override settings? **No**

5. **Production Deploy**
   ```bash
   vercel --prod
   ```

---

## 📁 Project Structure for Vercel

```
kingtut/
├── index.html              # Homepage (served at /)
├── pages/                  # All page files
│   ├── about.html
│   ├── services.html
│   ├── cities/            # 71 city pages
│   └── ...
├── images/                 # All images (served at /images/)
│   ├── logo/
│   └── ...
├── css/                    # Stylesheets (served at /css/)
│   ├── styles.css
│   ├── design-tokens-override.css
│   └── avada-enhancements.css
├── js/                     # JavaScript (served at /js/)
├── vercel.json             # Vercel configuration
└── package.json            # Dependencies
```

**Important:** All image paths are **absolute** (`/images/...`) so they work from any page depth!

---

## ⚙️ Vercel Configuration

### vercel.json Features

✅ **Security Headers**
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

✅ **Caching**
- Images: 1 year cache
- CSS/JS: 1 year cache
- HTML: No cache (always fresh)

✅ **Routing**
- Root `/` serves `index.html`
- All other routes work automatically

---

## 🔧 Post-Deployment

### 1. Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### 2. Environment Variables (If Needed)

If you add dynamic features later:
1. Go to Settings → Environment Variables
2. Add variables for:
   - API keys
   - Analytics IDs
   - Other secrets

### 3. Preview Deployments

Every push to GitHub automatically creates a preview deployment!
- Preview URL: `your-project-xyz.vercel.app`
- Production URL: `your-project.vercel.app` (or custom domain)

---

## 🐛 Troubleshooting

### Images Not Loading

**Problem:** Images show broken links  
**Solution:** 
- Check that paths use `/images/...` (absolute)
- Verify images are in `images/` folder
- Check browser console for 404 errors

### CSS Not Loading

**Problem:** Styles not applied  
**Solution:**
- Check paths use `/css/...` (absolute)
- Verify CSS files are in `css/` folder
- Check browser console for errors

### 404 Errors

**Problem:** Pages return 404  
**Solution:**
- Ensure HTML files are in correct locations
- Check `vercel.json` routing configuration
- Verify file names match URLs exactly

### Build Errors

**Problem:** Deployment fails  
**Solution:**
- Check `package.json` for correct scripts
- Verify all dependencies are listed
- Check build logs in Vercel dashboard

---

## 📊 Performance Optimization

### Already Configured

✅ **Image Caching** - 1 year cache for images  
✅ **CSS/JS Caching** - 1 year cache for assets  
✅ **Security Headers** - Protection against common attacks  
✅ **Absolute Paths** - Fast loading from any page  

### Additional Optimizations (Optional)

1. **Image Optimization**
   - Use WebP format for images
   - Compress images before upload
   - Use responsive images

2. **CSS Minification**
   - Minify CSS files
   - Remove unused CSS

3. **Lazy Loading**
   - Add `loading="lazy"` to images
   - Load below-fold content on demand

---

## 🔄 Updating Your Site

### Automatic Deployments

Every push to `main` branch automatically deploys to production!

1. Make changes locally
2. Commit: `git commit -am "Update site"`
3. Push: `git push origin main`
4. Vercel automatically deploys

### Manual Deployments

```bash
vercel --prod
```

---

## 📝 Important Notes

### Image Paths

**✅ Correct (Absolute):**
```html
<img src="/images/logo/kingtutlogo.png" alt="Logo" />
<img src="/images/Gemini_Generated_Image_3171973171973171.png" />
```

**❌ Wrong (Relative):**
```html
<img src="images/logo/kingtutlogo.png" />  <!-- Won't work from /pages/ -->
<img src="../images/logo/kingtutlogo.png" />  <!-- Breaks on Vercel -->
```

### CSS Paths

**✅ Correct:**
```html
<link rel="stylesheet" href="/css/styles.css" />
```

**❌ Wrong:**
```html
<link rel="stylesheet" href="css/styles.css" />
```

---

## 🎯 Deployment Checklist

Before deploying, verify:

- [ ] All images use absolute paths (`/images/...`)
- [ ] All CSS uses absolute paths (`/css/...`)
- [ ] All JS uses absolute paths (`/js/...`)
- [ ] `vercel.json` is in root directory
- [ ] `package.json` has correct scripts
- [ ] All HTML files are accessible
- [ ] Test locally with `npm run dev`

---

## 🚀 Quick Commands

```bash
# Prepare for Vercel (run once)
node scripts/prepare-vercel.js

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs
```

---

## 📞 Support

### Vercel Documentation
- https://vercel.com/docs
- https://vercel.com/docs/configuration

### Common Issues
- Check Vercel dashboard for build logs
- Review browser console for errors
- Verify file paths are absolute

---

## ✅ Success!

Once deployed, your site will be:
- ✅ Fast (CDN-powered)
- ✅ Secure (HTTPS by default)
- ✅ Scalable (handles any traffic)
- ✅ Global (served from edge locations)

**Your King Tut template is production-ready!** 🎉

---

**Last Updated:** November 29, 2025  
**Template Version:** King Tut Universal v2.0  
**Deployment:** Vercel Ready ✅

