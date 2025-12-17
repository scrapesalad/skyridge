# Avada-Inspired Theme Guide - King Tut Template

## 🎨 Theme Overview

Your King Tut template has been transformed with an **Avada-inspired design** that matches your logo's **gold and navy blue** color scheme. The theme now features:

- ✨ **Logo-Matched Colors**: Gold (#C8A860) and Navy (#2B4F66)
- 🎯 **Premium Design**: Sophisticated gradients, shadows, and animations
- 📱 **Fully Responsive**: Mobile-first approach
- ⚡ **Modern Effects**: Smooth transitions and hover states
- 🎭 **Professional Polish**: Avada-style card designs and typography

---

## 🎨 Color Palette

### Primary Colors (From Your Logo)

```css
/* Gold/Bronze - Primary Brand Color */
--color-primary: #C8A860         /* Main gold from logo */
--color-primary-dark: #A68943    /* Darker gold for hover states */
--color-primary-light: #D4BA7F   /* Lighter gold for highlights */

/* Navy Blue - Secondary Brand Color */
--color-secondary: #2B4F66       /* Main navy from logo stripes */
--color-secondary-dark: #1E3849  /* Darker navy for backgrounds */
--color-secondary-light: #3D6A89 /* Lighter navy for accents */

/* Accent Gold - Call-to-Action */
--color-accent: #D4AF37          /* Bright gold for emphasis */
--color-accent-dark: #B8951F     /* Darker accent gold */
--color-accent-light: #E0C35C    /* Lighter accent gold */
```

### Semantic Colors

```css
--color-success: #10b981   /* Green for success messages */
--color-warning: #f59e0b   /* Orange for warnings */
--color-error: #ef4444     /* Red for errors */
--color-info: #3b82f6      /* Blue for information */
```

### Background Colors

```css
--color-bg-primary: #ffffff       /* White background */
--color-bg-secondary: #f9fafb     /* Light gray */
--color-bg-tertiary: #f3f4f6      /* Medium gray */
--color-bg-section: #FAF7F0       /* Warm cream (matches gold) */
--color-bg-dark: #1E3849          /* Navy for dark sections */
```

---

## 🎯 Key Features

### 1. **Enhanced Typography**
- Headers use navy blue (#2B4F66) with negative letter-spacing
- H1 headings have gradient effect
- H2 headings include decorative gold underline
- Improved font weights and line heights

### 2. **Premium Buttons**
- Gold gradient backgrounds with ripple effect on hover
- Navy outline option for secondary actions
- Smooth animations and shadows
- Uppercase text with letter-spacing

**Button Variants:**
```html
<!-- Primary Gold Button -->
<a href="#" class="btn btn-primary">Get Started</a>

<!-- Secondary Outline Button -->
<a href="#" class="btn btn-secondary">Learn More</a>

<!-- Navy Outline Button -->
<a href="#" class="btn btn-outline-navy">Contact Us</a>
```

### 3. **Enhanced Cards**
- Gold top border appears on hover
- Smooth lift animation (8px translateY)
- Mixed gold/navy shadows
- Staggered fade-in animations

### 4. **Hero Section**
- Gradient background (cream to white to light blue)
- Decorative gold and navy radial gradients
- Enhanced spacing and typography

### 5. **Navigation**
- Gold underline animation on hover
- Sticky header with backdrop blur
- Smooth color transitions

### 6. **Form Styling**
- Gold border on focus
- Soft gold glow effect
- Navy labels
- Enhanced shadows

---

## 📝 Customization Guide

### Changing Colors

Edit `site.config.json` and run `npm run sync:design-tokens`:

```json
{
  "branding": {
    "colors": {
      "primary": {
        "base": "#C8A860",  // Change this to your primary color
        "dark": "#A68943",
        "light": "#D4BA7F"
      },
      "secondary": {
        "base": "#2B4F66",  // Change this to your secondary color
        "dark": "#1E3849",
        "light": "#3D6A89"
      }
    }
  }
}
```

After editing, run:
```bash
npm run sync:design-tokens
```

### Customizing Button Styles

Edit `css/avada-enhancements.css`:

```css
.btn-primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  /* Modify gradient, padding, border-radius, etc. */
}
```

### Adjusting Card Hover Effects

```css
.service-card:hover {
  transform: translateY(-8px);  /* Change lift amount */
  box-shadow: 0 12px 35px rgba(200, 168, 96, 0.25);  /* Adjust shadow */
}
```

### Modifying Typography

Edit font sizes in `site.config.json`:

```json
{
  "branding": {
    "typography": {
      "headings": {
        "h1": "clamp(2rem, 5vw, 3rem)",  // Responsive H1 size
        "h2": "clamp(1.75rem, 4vw, 2.5rem)"
      }
    }
  }
}
```

---

## 🎨 Design Tokens

All design tokens are centralized in `site.config.json` and automatically synced to CSS variables.

### Typography Tokens
```css
--font-primary: Inter, system-ui, sans-serif
--font-headings: Inter, system-ui, sans-serif
--font-size-base: 1rem
--font-weight-semibold: 600
--font-weight-bold: 700
```

### Spacing Tokens
```css
--spacing-2: 0.5rem    /* 8px */
--spacing-4: 1rem      /* 16px */
--spacing-6: 1.5rem    /* 24px */
--spacing-8: 2rem      /* 32px */
--spacing-12: 3rem     /* 48px */
--spacing-16: 4rem     /* 64px */
```

### Border Radius Tokens
```css
--border-radius: 0.5rem       /* 8px - Default */
--border-radius-lg: 1rem      /* 16px - Cards */
--border-radius-xl: 1.5rem    /* 24px - Large elements */
--border-radius-full: 9999px  /* Circular */
```

### Shadow Tokens
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1)
--shadow-md: 0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 20px 25px rgba(0, 0, 0, 0.1)
--shadow-gold: 0 10px 30px rgba(200, 168, 96, 0.2)
--shadow-navy: 0 10px 30px rgba(43, 79, 102, 0.2)
```

---

## 🎭 Avada-Inspired Features

### 1. **Gradient Backgrounds**
Sections use subtle gradients for depth:
```css
background: linear-gradient(135deg, #FAF7F0 0%, #ffffff 100%);
```

### 2. **Decorative Elements**
Hero section includes radial gradient orbs:
```css
.hero::before {
  background: radial-gradient(circle, rgba(200, 168, 96, 0.1) 0%, transparent 70%);
}
```

### 3. **Animated Elements**
Cards fade in with staggered delays:
```css
animation: fadeInUp 0.6s ease-out backwards;
animation-delay: 0.1s; /* Increases per card */
```

### 4. **Interactive States**
All interactive elements have smooth transitions:
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### 5. **Premium Shadows**
Multi-layered shadows create depth:
```css
box-shadow: 0 15px 40px rgba(200, 168, 96, 0.15), 0 5px 15px rgba(43, 79, 102, 0.1);
```

---

## 📂 File Structure

```
kingtut/
├── css/
│   ├── styles.css                    # Base styles (loads first)
│   ├── design-tokens-override.css    # Auto-generated from site.config.json
│   └── avada-enhancements.css        # Avada-inspired premium features
├── components/
│   └── global-head.html              # Includes all CSS files
└── site.config.json                  # Master configuration
```

**CSS Load Order:**
1. `styles.css` - Base design system
2. `design-tokens-override.css` - Color/typography tokens
3. `avada-enhancements.css` - Avada-style polish

---

## 🎯 Common Customizations

### Change Primary Color
1. Open `site.config.json`
2. Find `branding.colors.primary.base`
3. Change to your hex color
4. Run `npm run sync:design-tokens`

### Adjust Button Size
Edit `css/avada-enhancements.css`:
```css
.btn {
  padding: 1rem 2rem;  /* Vertical | Horizontal */
  font-size: 0.875rem; /* Text size */
}
```

### Modify Card Spacing
Edit `css/avada-enhancements.css`:
```css
.service-card,
.contractor-card {
  padding: var(--spacing-6);  /* Change spacing value */
}
```

### Change Hero Background
Edit `css/avada-enhancements.css`:
```css
.hero {
  background: linear-gradient(135deg, #FAF7F0 0%, #ffffff 50%, #E8EDF1 100%);
  /* Adjust gradient colors/stops */
}
```

### Disable Animations
Add to your CSS:
```css
* {
  animation: none !important;
  transition: none !important;
}
```

---

## 🔧 Maintenance

### Updating Design Tokens
After editing `site.config.json`, always run:
```bash
npm run sync:design-tokens
```

### Adding New Color Variants
1. Add to `site.config.json`:
```json
"tertiary": {
  "base": "#FF5733",
  "dark": "#C44628",
  "light": "#FF8A65"
}
```

2. Run sync command
3. Use in HTML/CSS:
```css
color: var(--color-tertiary);
```

### Custom Shadows
Define in `:root` in `avada-enhancements.css`:
```css
:root {
  --shadow-custom: 0 15px 50px rgba(0, 0, 0, 0.2);
}
```

---

## 🎨 Color Usage Guidelines

### When to Use Gold (Primary)
- Primary buttons and CTAs
- Links and interactive elements
- Accents and highlights
- Step numbers
- Decorative underlines

### When to Use Navy (Secondary)
- Headings and titles
- Dark backgrounds
- Footer
- Text emphasis
- Borders and outlines

### When to Use Accent Gold
- Special promotions
- Featured elements
- Hover states on gold elements
- Gradient combinations

---

## 📱 Responsive Behavior

All enhancements are fully responsive:

- **Desktop (1024px+)**: Full effects and animations
- **Tablet (768px-1023px)**: Simplified layouts, maintained effects
- **Mobile (<768px)**: Stacked layouts, touch-friendly sizing

Animations can be disabled for users who prefer reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 🚀 Performance Notes

### Optimizations Included
- CSS custom properties for efficient updates
- Hardware-accelerated transforms
- Efficient selectors
- Conditional animations (prefers-reduced-motion)
- Backdrop-filter with fallback

### Best Practices
- Keep animations under 500ms
- Use `transform` and `opacity` for smooth animations
- Minimize box-shadow complexity on mobile
- Test on slower devices

---

## 🎓 Learning Resources

### Understanding the Theme
1. **Design Tokens**: See `site.config.json`
2. **Base Styles**: Read `css/styles.css`
3. **Enhancements**: Study `css/avada-enhancements.css`

### CSS Custom Properties
All colors/sizes use CSS variables:
```css
background: var(--color-primary);
padding: var(--spacing-4);
border-radius: var(--border-radius-lg);
```

### Gradient Generator
Create custom gradients: https://cssgradient.io/

### Shadow Generator
Design custom shadows: https://shadows.brumm.af/

---

## 🆘 Troubleshooting

### Colors Not Updating
1. Check `site.config.json` syntax
2. Run `npm run sync:design-tokens`
3. Clear browser cache
4. Check CSS load order in `global-head.html`

### Animations Not Working
1. Check `avada-enhancements.css` is loaded
2. Verify no `prefers-reduced-motion` override
3. Test in different browser

### Layout Issues
1. Check responsive breakpoints
2. Verify container max-width
3. Test grid/flexbox browser support

---

## 📞 Support

For issues or questions:
1. Check this guide
2. Review `Start Here/README.md`
3. Inspect browser DevTools
4. Check `site.config.json` syntax

---

## 🎉 Summary

Your King Tut template now features:

✅ **Logo-matched color scheme** (Gold & Navy)  
✅ **Avada-inspired premium design**  
✅ **Smooth animations and transitions**  
✅ **Enhanced typography and spacing**  
✅ **Professional shadows and gradients**  
✅ **Fully responsive layout**  
✅ **Easy customization via site.config.json**  

All changes are controlled through:
- `site.config.json` - Color tokens and settings
- `css/avada-enhancements.css` - Premium styling

Enjoy your beautiful, professional theme! 🎨✨


