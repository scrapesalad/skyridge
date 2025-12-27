# Update "You Take Pride in Your Home" Gallery Section

## File to Update: `app/page.tsx`

## STEP 1: Update the Image Array (Line 31-32)

**FIND THIS (around line 31-32):**
```tsx
export default function Page() {
  // All 49 images available
  const allImages = Array.from({ length: 49 }, (_, i) => i + 1);
```

**REPLACE WITH:**
```tsx
export default function Page() {
  // Gallery images from scrap folder (24 professional roofing images)
  const galleryImages = [
    'roofing-job.jpg',
    'roofing-center-02.jpg',
    'West-Jordan-Roofing.jpg',
    'metal-roofing-768x576.jpg',
    'finishing-ceramic-roof-768x512.webp',
    'Cincinnati-commercial-roof-restoration.jpg',
    'commercial-roof-installation.jpg',
    'Idaho-Roofing-Contractors-1.jpg',
    'GAF_Timberline_HD_Slate_2_Shown_For_Color-1-scaled-1.jpg',
    'GAF_Slateline_Antique_Slate_1440x1440.jpg',
    'Camelot_Aged_Oak_Photo_1-scaled-1.jpg',
    'CF-Shingle-Project-8-300x202.webp',
    'landmark-series-shingles-certainteed.jpg',
    'closed-roof-valley.jpg',
    'flat-roof.jpg',
    'Roof-Inspection-Image-768x439.jpg',
    'replace-rotted-roof-decking-r9s0s1ll2umws3di4jscahu9s54iilxkq8ir4t3ads.jpg',
    'RoofCricketConstruction4.webp',
    'gutter-covers-maryland-1024x768-1.webp',
    'IMG_5791-2-scaled-1.jpg',
    'building-exterior.jpg',
    'hero-image-vacation-homes.jpg',
    'bungalow-holiday-apartments-on-cyprus.jpg',
    'roofing-center-04-qg13nktj9cx8cworod4wf2skk8m3jzkgal4zrz09ao.jpg',
  ];
```

---

## STEP 2: Update the Gallery Grid (Line 515-529)

**FIND THIS (around lines 515-529):**
```tsx
{/* Image Grid - 3 columns, 4 rows (12 images) */}
<div className="grid grid-cols-3 gap-0 max-w-5xl mx-auto">
  {allImages.slice(0, 12).map((num) => (
    <div key={num} className="relative aspect-square overflow-hidden group cursor-pointer">
      <Image
        src={`/images/skyridge/skyridge_image_${String(num).padStart(3, '0')}.webp`}
        alt={`Roofing project ${num}`}
        fill
        className="object-cover group-hover:scale-110 transition duration-300"
        sizes="(max-width: 768px) 33vw, (max-width: 1024px) 33vw, 33vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300" />
    </div>
  ))}
</div>
```

**REPLACE WITH:**
```tsx
{/* Image Grid - 3 columns, 4 rows (12 images) */}
<div className="grid grid-cols-3 gap-0 max-w-5xl mx-auto">
  {galleryImages.slice(0, 12).map((imageName, index) => (
    <div key={index} className="relative aspect-square overflow-hidden group cursor-pointer">
      <Image
        src={`/images/skyridge/scrap/${imageName}`}
        alt={`Professional roofing project ${index + 1}`}
        fill
        className="object-cover group-hover:scale-110 transition duration-300"
        sizes="(max-width: 768px) 33vw, (max-width: 1024px) 33vw, 33vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300" />
    </div>
  ))}
</div>
```

---

## STEP 3: Update the "View More" Condition (Line 532)

**FIND THIS (around line 532):**
```tsx
{/* Show more images button/link - optional, if you want to show all images */}
{allImages.length > 12 && (
```

**REPLACE WITH:**
```tsx
{/* Show more images button/link - optional, if you want to show all images */}
{galleryImages.length > 12 && (
```

---

## SUMMARY OF CHANGES:

1. **Changed variable name** from `allImages` to `galleryImages`
2. **Replaced numbered images** (skyridge_image_001.webp) with **actual scrap folder images**
3. **Updated image paths** from `/images/skyridge/skyridge_image_${num}.webp` to `/images/skyridge/scrap/${imageName}`
4. **Now displays 24 professional roofing images** instead of 5 broken image references

---

## RESULT:

✅ **12 beautiful roofing images** displayed in the gallery
✅ **"View More Projects →" button** shown (since 24 > 12)
✅ **All images exist** in the scrap folder
✅ **Professional showcase** of roofing work

---

## Images Included:

The gallery will showcase:
- ✅ Completed roofing jobs
- ✅ Metal roofing installations
- ✅ Commercial projects
- ✅ GAF shingles (Timberline HD, Slateline)
- ✅ Various roofing materials
- ✅ Roof inspections
- ✅ Professional installations
- ✅ Building exteriors with new roofs
- ✅ Gutter installations
- ✅ Residential properties

---

## Alternative: Show 18 Images (3 columns x 6 rows)

If you want to show MORE images in the grid, change line 517:

**FROM:**
```tsx
{galleryImages.slice(0, 12).map((imageName, index) => (
```

**TO:**
```tsx
{galleryImages.slice(0, 18).map((imageName, index) => (
```

This will show 18 images (6 rows) instead of 12 (4 rows).

---

## Alternative: Show ALL 24 Images

To show all 24 images:

**FROM:**
```tsx
{galleryImages.slice(0, 12).map((imageName, index) => (
```

**TO:**
```tsx
{galleryImages.map((imageName, index) => (
```

And remove the "View More" button section entirely (lines 531-541).

---

## Testing:

After making these changes:

1. Save the file
2. Refresh your browser at http://localhost:3000
3. Scroll to "You Take Pride in Your Home" section
4. Verify 12 roofing images display correctly
5. Verify "View More Projects →" button appears
6. Hover over images to see zoom effect

---

**All images are already in your `/public/images/skyridge/scrap/` folder and ready to use!**
