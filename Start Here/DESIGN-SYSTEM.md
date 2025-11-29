# King Tut Template - Design System

## 🎨 Professional Design System Documentation

This template includes a comprehensive, production-ready design system worth $20,000+. All design tokens are customizable through `site.config.json` and CSS variables.

---

## 📋 Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Layout System](#layout-system)
5. [Components](#components)
6. [Customization Guide](#customization-guide)
7. [Color Scheme Presets](#color-scheme-presets)

---

## 🎨 Color System

### Primary Colors

The primary color is your main brand color. It's used for:
- Primary buttons
- Links
- Headers
- Key UI elements

**Default:** `#0066cc` (Professional Blue)

**Full Palette:**
- `--color-primary-50` to `--color-primary-900` (10 shades)
- `--color-primary-dark` (darker variant)
- `--color-primary-light` (lighter variant)

### Secondary Colors

Used for:
- Secondary buttons
- Accents
- Supporting elements

**Default:** `#00a3a3` (Teal)

### Accent Colors

Used for:
- Highlights
- Special callouts
- Decorative elements

**Default:** `#2d8659` (Green)

### Semantic Colors

Status and feedback colors:

- **Success:** `#10b981` (Green) - Success messages, confirmations
- **Warning:** `#f59e0b` (Amber) - Warnings, cautions
- **Error:** `#ef4444` (Red) - Errors, destructive actions
- **Info:** `#3b82f6` (Blue) - Informational messages

### Neutral Colors

Complete grayscale system (50-900):
- `--color-gray-50` (lightest) to `--color-gray-900` (darkest)
- Used for text, backgrounds, borders

### Text Colors

- `--color-text-primary` - Main text (`#111827`)
- `--color-text-secondary` - Secondary text (`#4b5563`)
- `--color-text-tertiary` - Tertiary text (`#6b7280`)
- `--color-text-muted` - Muted text (`#9ca3af`)
- `--color-text-inverse` - White text for dark backgrounds

### Background Colors

- `--color-bg-primary` - Main background (`#ffffff`)
- `--color-bg-secondary` - Secondary background (`#f9fafb`)
- `--color-bg-tertiary` - Tertiary background (`#f3f4f6`)
- `--color-bg-section` - Section backgrounds (`#f0f7ff`)
- `--color-bg-dark` - Dark backgrounds (`#111827`)

---

## 📝 Typography

### Font Families

**Primary Font:** `Inter` (with system font fallbacks)
- Used for body text and general UI

**Headings Font:** `Inter` (same as primary)
- Used for all headings (H1-H6)

**Mono Font:** `SF Mono, Monaco, Cascadia Code`
- Used for code blocks and technical content

### Font Sizes

**Base Scale:**
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.875rem (30px)
- `--font-size-4xl`: 2.25rem (36px)
- `--font-size-5xl`: 3rem (48px)
- `--font-size-6xl`: 3.75rem (60px)

**Responsive Headings:**
- H1: `clamp(2rem, 5vw, 3rem)` - Scales from 32px to 48px
- H2: `clamp(1.75rem, 4vw, 2.5rem)` - Scales from 28px to 40px
- H3: `clamp(1.5rem, 3vw, 2rem)` - Scales from 24px to 32px
- H4: `clamp(1.25rem, 2.5vw, 1.5rem)` - Scales from 20px to 24px

### Font Weights

- `--font-weight-light`: 300
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700
- `--font-weight-extrabold`: 800

### Line Heights

- `--line-height-tight`: 1.25
- `--line-height-snug`: 1.375
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.625
- `--line-height-loose`: 2

---

## 📏 Spacing System

Based on an **8px grid system** for consistency.

### Spacing Scale

- `--spacing-0`: 0
- `--spacing-1`: 0.25rem (4px)
- `--spacing-2`: 0.5rem (8px)
- `--spacing-3`: 0.75rem (12px)
- `--spacing-4`: 1rem (16px)
- `--spacing-5`: 1.25rem (20px)
- `--spacing-6`: 1.5rem (24px)
- `--spacing-8`: 2rem (32px)
- `--spacing-10`: 2.5rem (40px)
- `--spacing-12`: 3rem (48px)
- `--spacing-16`: 4rem (64px)
- `--spacing-20`: 5rem (80px)
- `--spacing-24`: 6rem (96px)
- `--spacing-32`: 8rem (128px)

### Legacy Spacing (Backward Compatible)

- `--spacing-xs`: 0.5rem
- `--spacing-sm`: 1rem
- `--spacing-md`: 2rem
- `--spacing-lg`: 3rem
- `--spacing-xl`: 4rem

---

## 📐 Layout System

### Container Widths

- `--container-max-width`: 1200px (default)
- `--container-max-width-sm`: 640px
- `--container-max-width-md`: 768px
- `--container-max-width-lg`: 1024px
- `--container-max-width-xl`: 1280px
- `--container-max-width-2xl`: 1536px

### Border Radius

- `--border-radius-none`: 0
- `--border-radius-sm`: 0.25rem (4px)
- `--border-radius`: 0.5rem (8px)
- `--border-radius-md`: 0.75rem (12px)
- `--border-radius-lg`: 1rem (16px)
- `--border-radius-xl`: 1.5rem (24px)
- `--border-radius-2xl`: 2rem (32px)
- `--border-radius-full`: 9999px (full circle)

### Shadows (Elevation System)

- `--shadow-xs`: Subtle shadow
- `--shadow-sm`: Small shadow
- `--shadow`: Base shadow
- `--shadow-md`: Medium shadow
- `--shadow-lg`: Large shadow
- `--shadow-xl`: Extra large shadow
- `--shadow-2xl`: 2X large shadow
- `--shadow-inner`: Inset shadow
- `--shadow-none`: No shadow

**Colored Shadows:**
- `--shadow-primary`: Primary color shadow
- `--shadow-secondary`: Secondary color shadow

---

## ⚡ Transitions & Animations

### Transition Durations

- `--transition-fast`: 150ms
- `--transition-base`: 200ms
- `--transition`: 300ms
- `--transition-slow`: 500ms

### Transition Types

- `--transition-all`: All properties
- `--transition-colors`: Color properties only
- `--transition-transform`: Transform only
- `--transition-opacity`: Opacity only

### Easing Functions

- `--ease-in`: Ease in
- `--ease-out`: Ease out
- `--ease-in-out`: Ease in-out
- `--ease-bounce`: Bounce effect

---

## 🧩 Components

### Buttons

**Primary Button:**
```css
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text-on-primary);
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--button-border-radius);
}
```

**Secondary Button:**
```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}
```

### Cards

```css
.card {
  background: var(--card-bg);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-shadow);
}
```

### Forms

```css
input, select, textarea {
  padding: var(--input-padding-y) var(--input-padding-x);
  border: var(--input-border-width) solid var(--input-border-color);
  border-radius: var(--input-border-radius);
}

input:focus {
  border-color: var(--input-focus-border-color);
  box-shadow: var(--input-focus-shadow);
}
```

---

## 🎨 Customization Guide

### Method 1: Update `site.config.json`

Edit the `branding` section in `site.config.json`:

```json
{
  "branding": {
    "colors": {
      "primary": {
        "base": "#YOUR-COLOR-HERE"
      }
    }
  }
}
```

Then run: `npm run sync:design-tokens`

### Method 2: Direct CSS Variable Override

Create a custom CSS file or add to `styles.css`:

```css
:root {
  --color-primary: #YOUR-COLOR-HERE;
  --color-secondary: #YOUR-COLOR-HERE;
}
```

### Method 3: Component-Level Override

Override for specific components:

```css
.my-custom-section {
  --color-primary: #CUSTOM-COLOR;
  background-color: var(--color-primary);
}
```

---

## 🌈 Color Scheme Presets

### Professional Blue (Default)
- Primary: `#0066cc`
- Secondary: `#00a3a3`
- Accent: `#2d8659`

### Modern Purple
- Primary: `#7c3aed`
- Secondary: `#a855f7`
- Accent: `#ec4899`

### Corporate Green
- Primary: `#059669`
- Secondary: `#10b981`
- Accent: `#34d399`

### Bold Red
- Primary: `#dc2626`
- Secondary: `#ef4444`
- Accent: `#f87171`

### Elegant Teal
- Primary: `#0d9488`
- Secondary: `#14b8a6`
- Accent: `#2dd4bf`

---

## 📱 Responsive Breakpoints

Use with media queries:

```css
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

Or use CSS variables:
```css
@media (min-width: var(--breakpoint-md)) {
  /* Styles */
}
```

---

## 🚀 Best Practices

1. **Always use CSS variables** - Never hardcode colors or spacing
2. **Follow the spacing scale** - Use `--spacing-*` values
3. **Use semantic color names** - `--color-text-primary` not `#111827`
4. **Leverage the elevation system** - Use shadow variables for depth
5. **Maintain consistency** - Use the design system throughout

---

## 📚 Additional Resources

- See `site.config.json` for all configurable values
- Check `css/styles.css` for all available CSS variables
- Review component examples in template files

---

**This design system provides everything you need to create professional, consistent, and beautiful websites. All values are customizable and production-ready!**

