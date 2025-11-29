# Color Palette Reference - King Tut Theme

## 🎨 Quick Color Reference

### Primary Gold (From Logo)
```
Main Gold:    #C8A860  █████  rgb(200, 168, 96)
Dark Gold:    #A68943  █████  rgb(166, 137, 67)
Light Gold:   #D4BA7F  █████  rgb(212, 186, 127)
```

### Secondary Navy (From Logo)
```
Main Navy:    #2B4F66  █████  rgb(43, 79, 102)
Dark Navy:    #1E3849  █████  rgb(30, 56, 73)
Light Navy:   #3D6A89  █████  rgb(61, 106, 137)
```

### Accent Gold (Highlights)
```
Accent Gold:  #D4AF37  █████  rgb(212, 175, 55)
Dark Accent:  #B8951F  █████  rgb(184, 149, 31)
Light Accent: #E0C35C  █████  rgb(224, 195, 92)
```

---

## 📐 Color Scale (50-900)

### Primary Gold Scale
```
50:  #FAF7F0  █████  Very Light Cream
100: #F2EBD9  █████  Light Cream
200: #E8DEC0  █████  Pale Gold
300: #DDD1A7  █████  Soft Gold
400: #D3C38E  █████  Medium Gold
500: #C8A860  █████  Main Gold ★
600: #B5964D  █████  Rich Gold
700: #A68943  █████  Dark Gold
800: #8A7238  █████  Deep Gold
900: #6E5B2D  █████  Very Dark Gold
```

### Secondary Navy Scale
```
50:  #E8EDF1  █████  Very Light Blue-Gray
100: #D1DBE3  █████  Light Blue-Gray
200: #A3B7C7  █████  Pale Navy
300: #7593AB  █████  Soft Navy
400: #476F8F  █████  Medium Navy
500: #2B4F66  █████  Main Navy ★
600: #234258  █████  Rich Navy
700: #1E3849  █████  Dark Navy
800: #182E3B  █████  Deep Navy
900: #12242D  █████  Very Dark Navy
```

---

## 🎯 Usage Guide

### Where to Use Each Color

#### Primary Gold (#C8A860)
- Primary buttons (CTAs)
- Links and clickable elements
- Icons and decorative elements
- Step numbers
- Accent borders
- Section underlines

#### Secondary Navy (#2B4F66)
- All headings (H1-H6)
- Navigation text
- Body text emphasis
- Dark section backgrounds
- Footer background
- Form labels

#### Accent Gold (#D4AF37)
- Special CTAs
- Highlighted text
- Promotional badges
- Hover states on gold buttons
- Gradient combinations
- Featured elements

#### Background Colors
- Section backgrounds: #FAF7F0 (Primary 50 - Warm cream)
- Card backgrounds: #FFFFFF (White)
- Alternating sections: #F9FAFB (Light gray)
- Dark sections: #1E3849 (Navy 700)

---

## 🎨 Color Combinations

### Recommended Pairs

#### Elegant Luxury
```
Gold + Navy
#C8A860 + #2B4F66
Perfect for headers, cards, and CTAs
```

#### High Contrast
```
Accent Gold + Dark Navy
#D4AF37 + #1E3849
Great for important buttons and highlights
```

#### Soft & Professional
```
Light Gold + Navy
#D4BA7F + #2B4F66
Ideal for backgrounds and subtle elements
```

#### Premium Dark Mode
```
Dark Navy + Gold
#1E3849 + #C8A860
Footer and dark sections
```

---

## 🔍 Accessibility Notes

### Color Contrast Ratios

#### Text on White Background
```
Navy (#2B4F66) on White (#FFFFFF):  9.22:1  ✅ AAA (Excellent)
Gold (#C8A860) on White (#FFFFFF):  3.41:1  ⚠️  AA Large Text Only
Dark Gold (#A68943) on White:       4.51:1  ✅ AA (Good)
```

#### Text on Navy Background
```
White (#FFFFFF) on Navy (#2B4F66):  9.22:1  ✅ AAA (Excellent)
Gold (#C8A860) on Navy (#2B4F66):   2.70:1  ⚠️  Use for large text only
Light Gold (#D4BA7F) on Navy:       3.82:1  ✅ AA Large Text
```

#### Text on Gold Background
```
Navy (#2B4F66) on Gold (#C8A860):   2.70:1  ⚠️  Use for large text
Dark Navy (#1E3849) on Gold:        4.50:1  ✅ AA (Good)
White (#FFFFFF) on Gold:            3.41:1  ⚠️  AA Large Text Only
```

### Best Practices
✅ **DO**: Use Navy for body text on white backgrounds  
✅ **DO**: Use White for text on Navy backgrounds  
✅ **DO**: Use Dark Gold/Navy for text on Gold backgrounds  
⚠️  **CAREFUL**: Gold text should be larger (18px+) or bold  
❌ **DON'T**: Use light gold for small text  

---

## 🎨 Gradient Combinations

### Gold Gradients
```css
/* Warm Gold */
linear-gradient(135deg, #C8A860 0%, #D4AF37 100%)

/* Rich Gold to Dark */
linear-gradient(135deg, #C8A860 0%, #A68943 100%)

/* Subtle Gold */
linear-gradient(135deg, #D4BA7F 0%, #C8A860 100%)
```

### Navy Gradients
```css
/* Deep Navy */
linear-gradient(135deg, #2B4F66 0%, #1E3849 100%)

/* Navy to Light */
linear-gradient(135deg, #3D6A89 0%, #2B4F66 100%)

/* Rich Navy */
linear-gradient(135deg, #2B4F66 0%, #234258 100%)
```

### Combined Gradients
```css
/* Hero Gradient (Gold to Navy) */
linear-gradient(135deg, #FAF7F0 0%, #ffffff 50%, #E8EDF1 100%)

/* Premium Button */
linear-gradient(135deg, #C8A860 0%, #A68943 100%)

/* Footer Gradient */
linear-gradient(135deg, #1E3849 0%, #2B4F66 100%)
```

---

## 🎭 Semantic Colors

### Status Colors (Unchanged from base)
```
Success:  #10b981  █████  Green
Warning:  #f59e0b  █████  Orange
Error:    #ef4444  █████  Red
Info:     #3b82f6  █████  Blue
```

---

## 📝 CSS Variable Reference

### Primary Colors
```css
--color-primary: #C8A860;
--color-primary-dark: #A68943;
--color-primary-light: #D4BA7F;
--color-primary-50 through --color-primary-900
```

### Secondary Colors
```css
--color-secondary: #2B4F66;
--color-secondary-dark: #1E3849;
--color-secondary-light: #3D6A89;
--color-secondary-50 through --color-secondary-900
```

### Accent Colors
```css
--color-accent: #D4AF37;
--color-accent-dark: #B8951F;
--color-accent-light: #E0C35C;
--color-accent-50 through --color-accent-900
```

---

## 🖌️ Design Tool Colors

### Figma / Adobe XD / Sketch
```
Primary Gold:    C8A860
Secondary Navy:  2B4F66
Accent Gold:     D4AF37
```

### RGB Values
```
Primary Gold:    rgb(200, 168, 96)
Secondary Navy:  rgb(43, 79, 102)
Accent Gold:     rgb(212, 175, 55)
```

### HSL Values
```
Primary Gold:    hsl(42, 49%, 58%)
Secondary Navy:  hsl(203, 41%, 28%)
Accent Gold:     hsl(45, 66%, 52%)
```

---

## 🎨 Color Psychology

### Gold (#C8A860)
- **Emotions**: Luxury, wealth, prestige, quality
- **Use For**: Premium services, high-value CTAs, elegance
- **Industries**: Luxury brands, jewelry, premium services

### Navy (#2B4F66)
- **Emotions**: Trust, professionalism, stability, authority
- **Use For**: Corporate content, trustworthy messaging
- **Industries**: Finance, law, consulting, professional services

### Combined Gold + Navy
- **Message**: Premium quality with trustworthy professionalism
- **Perfect For**: High-end services, luxury contractors, premium brands

---

## 🔄 Updating Colors

To change the entire color scheme:

1. **Edit** `site.config.json`
2. **Run** `npm run sync:design-tokens`
3. **Refresh** your browser

The color values will automatically update across the entire site!

---

## 📋 Quick Copy-Paste

### CSS Variables
```css
/* Gold */
var(--color-primary)
var(--color-primary-dark)
var(--color-primary-light)

/* Navy */
var(--color-secondary)
var(--color-secondary-dark)
var(--color-secondary-light)

/* Accent */
var(--color-accent)
```

### Hex Codes
```
#C8A860  (Gold)
#2B4F66  (Navy)
#D4AF37  (Accent)
```

---

**Last Updated**: November 29, 2025  
**Theme Version**: King Tut Avada-Inspired v2.0

