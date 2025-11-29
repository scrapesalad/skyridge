# Vercel Deployment Troubleshooting

## 🐛 Common Issues & Solutions

### Issue 1: 404 NOT_FOUND Error

**Symptoms:** Site deploys but shows 404 error  
**Cause:** Vercel can't find your files or routing is misconfigured

**Solutions:**

#### Solution A: Remove vercel.json (Let Vercel Auto-Detect)

For simple static sites, Vercel auto-detects HTML files. Try removing `vercel.json`:

```bash
# Delete vercel.json temporarily
rm vercel.json

# Commit and push
git add .
git commit -m "Remove vercel.json for auto-detection"
git push origin main
```

#### Solution B: Use Minimal vercel.json

If you need configuration, use this minimal version:

```json
{
  "version": 2,
  "cleanUrls": true,
  "trailingSlash": false
}
```

#### Solution C: Check Vercel Project Settings

1. Go to Vercel Dashboard → Your Project → Settings
2. Check **Build & Development Settings**:
   - **Framework Preset:** Other
   - **Root Directory:** `.` (root)
   - **Build Command:** (leave empty or remove)
   - **Output Directory:** `.` (root)
   - **Install Command:** `npm install` (optional)

3. Save and redeploy

---

### Issue 2: Images Not Loading

**Symptoms:** Images show broken links  
**Cause:** Path issues or files not uploaded

**Solutions:**

1. **Verify Absolute Paths**
   - All images should use `/images/...` (absolute)
   - Check a few HTML files to confirm

2. **Check File Structure**
   ```bash
   # Verify images folder exists
   ls images/
   ls images/logo/
   ```

3. **Check Vercel Build Logs**
   - Go to Deployment → Build Logs
   - Look for file upload errors
   - Check if images are being included

4. **Verify .vercelignore**
   - Make sure `images/` is NOT in `.vercelignore`
   - Images should be included in deployment

---

### Issue 3: CSS Not Loading

**Symptoms:** Unstyled pages  
**Cause:** CSS paths or files missing

**Solutions:**

1. **Check CSS Paths**
   - Should be `/css/styles.css` (absolute)
   - Not `css/styles.css` or `../css/styles.css`

2. **Verify CSS Files**
   ```bash
   ls css/
   # Should show: styles.css, design-tokens-override.css, avada-enhancements.css
   ```

3. **Check Browser Console**
   - Open deployed site
   - Press F12 → Console tab
   - Look for 404 errors on CSS files

---

### Issue 4: Build Fails

**Symptoms:** Deployment shows "Build Failed"  
**Cause:** Build command error or missing dependencies

**Solutions:**

1. **Remove Build Command**
   - Go to Settings → Build & Development Settings
   - Clear "Build Command" field
   - Save and redeploy

2. **Check package.json**
   - Ensure all scripts are optional
   - Remove any required build steps

3. **Check Build Logs**
   - View detailed error in Vercel dashboard
   - Look for specific error messages

---

### Issue 5: Files Not Found

**Symptoms:** 404 on all pages  
**Cause:** Files not in expected location

**Solutions:**

1. **Verify File Structure**
   ```
   ✅ index.html (must be in root)
   ✅ pages/ (folder exists)
   ✅ images/ (folder exists)
   ✅ css/ (folder exists)
   ```

2. **Check .gitignore**
   - Make sure HTML files aren't ignored
   - Check that images aren't ignored

3. **Verify Deployment Includes Files**
   - Check Vercel build logs
   - Look for "Uploading files" section
   - Verify all files are listed

---

## 🔧 Quick Fixes

### Fix 1: Simplest Configuration

**Delete vercel.json and let Vercel auto-detect:**

```bash
rm vercel.json
git add .
git commit -m "Remove vercel.json for auto-detection"
git push origin main
```

Vercel will automatically:
- Detect HTML files
- Serve static files
- Set up routing

### Fix 2: Minimal vercel.json

If you need configuration, use this:

```json
{
  "version": 2
}
```

That's it! Vercel handles the rest.

### Fix 3: Check Vercel Settings

1. **Framework Preset:** Other
2. **Root Directory:** `.` (dot = root)
3. **Build Command:** (empty)
4. **Output Directory:** `.` (dot = root)
5. **Install Command:** `npm install` (optional)

---

## 🎯 Step-by-Step Fix for 404 Error

### Step 1: Check Vercel Project Settings

1. Go to https://vercel.com
2. Select your `kingtut` project
3. Go to **Settings** → **General**
4. Scroll to **Build & Development Settings**

### Step 2: Configure Settings

Set these values:
- **Framework Preset:** `Other`
- **Root Directory:** `.` (just a dot)
- **Build Command:** (leave empty)
- **Output Directory:** `.` (just a dot)
- **Install Command:** `npm install` (optional)

### Step 3: Simplify vercel.json

Replace `vercel.json` with:

```json
{
  "version": 2
}
```

Or delete it entirely.

### Step 4: Redeploy

1. Go to **Deployments** tab
2. Click **Redeploy** on latest deployment
3. Or push a new commit:
   ```bash
   git add .
   git commit -m "Fix Vercel configuration"
   git push origin main
   ```

---

## 🔍 Debugging Steps

### 1. Check Build Logs

1. Go to Vercel Dashboard
2. Click on your deployment
3. Click **Build Logs**
4. Look for errors or warnings

### 2. Check File Upload

In build logs, look for:
```
Uploading files...
✓ index.html
✓ pages/about.html
✓ images/logo/kingtutlogo.png
...
```

If files are missing, check `.vercelignore` and `.gitignore`.

### 3. Test Locally First

```bash
# Test that files work locally
npm run dev

# Visit http://localhost:3000
# Check that images load
# Check that CSS loads
```

### 4. Check Browser Console

1. Visit your deployed site
2. Press F12 (Developer Tools)
3. Go to **Console** tab
4. Look for 404 errors
5. Go to **Network** tab
6. Check which files are failing to load

---

## ✅ Verification Checklist

Before deploying, verify:

- [ ] `index.html` exists in root directory
- [ ] All image paths use `/images/...` (absolute)
- [ ] All CSS paths use `/css/...` (absolute)
- [ ] All JS paths use `/js/...` (absolute)
- [ ] `images/` folder contains all images
- [ ] `css/` folder contains all stylesheets
- [ ] `vercel.json` is simple or removed
- [ ] `.vercelignore` doesn't exclude needed files
- [ ] `.gitignore` doesn't exclude HTML/images

---

## 🚀 Recommended Configuration

### For Static HTML Sites (Simplest)

**Option 1: No vercel.json** (Recommended)
- Delete `vercel.json`
- Let Vercel auto-detect
- Works perfectly for static sites

**Option 2: Minimal vercel.json**
```json
{
  "version": 2
}
```

**Option 3: With Headers Only**
```json
{
  "version": 2,
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000"
        }
      ]
    }
  ]
}
```

---

## 📞 Still Having Issues?

### Check These:

1. **Vercel Dashboard → Build Logs**
   - What errors do you see?
   - Are files being uploaded?

2. **Browser Console**
   - What 404 errors appear?
   - Which files are missing?

3. **File Structure**
   - Is `index.html` in root?
   - Do all folders exist?

4. **Git Status**
   - Are all files committed?
   - Are files in `.gitignore`?

### Get Help:

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Check deployment logs in dashboard

---

## 🎯 Quick Test

After fixing, test your deployment:

1. Visit: `https://your-project.vercel.app`
2. Should show homepage (not 404)
3. Check images load
4. Check CSS applies
5. Navigate to `/pages/about.html`
6. Should work (not 404)

If all work → Success! ✅  
If 404 persists → Check build logs and file structure

---

**Last Updated:** November 29, 2025

