# Color Scheme Presets

Ready-to-use color schemes for the King Tut Template. Copy these into your `site.config.json` → `branding.colors` section.

---

## 🎨 Professional Blue (Default)

Perfect for corporate, professional, and tech businesses.

```json
{
  "primary": {
    "base": "#0066cc",
    "dark": "#004d99",
    "light": "#3385d6"
  },
  "secondary": {
    "base": "#00a3a3",
    "dark": "#008080",
    "light": "#33b3b3"
  },
  "accent": {
    "base": "#2d8659",
    "dark": "#246b47",
    "light": "#4da37a"
  }
}
```

---

## 💜 Modern Purple

Great for creative agencies, design studios, and modern brands.

```json
{
  "primary": {
    "base": "#7c3aed",
    "dark": "#6d28d9",
    "light": "#8b5cf6"
  },
  "secondary": {
    "base": "#a855f7",
    "dark": "#9333ea",
    "light": "#c084fc"
  },
  "accent": {
    "base": "#ec4899",
    "dark": "#db2777",
    "light": "#f472b6"
  }
}
```

---

## 🌿 Corporate Green

Ideal for environmental, health, and wellness businesses.

```json
{
  "primary": {
    "base": "#059669",
    "dark": "#047857",
    "light": "#10b981"
  },
  "secondary": {
    "base": "#10b981",
    "dark": "#059669",
    "light": "#34d399"
  },
  "accent": {
    "base": "#34d399",
    "dark": "#10b981",
    "light": "#6ee7b7"
  }
}
```

---

## 🔴 Bold Red

Perfect for bold brands, food & beverage, and high-energy businesses.

```json
{
  "primary": {
    "base": "#dc2626",
    "dark": "#b91c1c",
    "light": "#ef4444"
  },
  "secondary": {
    "base": "#ef4444",
    "dark": "#dc2626",
    "light": "#f87171"
  },
  "accent": {
    "base": "#f87171",
    "dark": "#ef4444",
    "light": "#fca5a5"
  }
}
```

---

## 🌊 Elegant Teal

Great for luxury brands, spas, and premium services.

```json
{
  "primary": {
    "base": "#0d9488",
    "dark": "#0f766e",
    "light": "#14b8a6"
  },
  "secondary": {
    "base": "#14b8a6",
    "dark": "#0d9488",
    "light": "#2dd4bf"
  },
  "accent": {
    "base": "#2dd4bf",
    "dark": "#14b8a6",
    "light": "#5eead4"
  }
}
```

---

## 🟠 Warm Orange

Perfect for food services, hospitality, and friendly brands.

```json
{
  "primary": {
    "base": "#ea580c",
    "dark": "#c2410c",
    "light": "#f97316"
  },
  "secondary": {
    "base": "#f97316",
    "dark": "#ea580c",
    "light": "#fb923c"
  },
  "accent": {
    "base": "#fb923c",
    "dark": "#f97316",
    "light": "#fdba74"
  }
}
```

---

## 🔵 Ocean Blue

Ideal for travel, marine, and adventure businesses.

```json
{
  "primary": {
    "base": "#0284c7",
    "dark": "#0369a1",
    "light": "#0ea5e9"
  },
  "secondary": {
    "base": "#0ea5e9",
    "dark": "#0284c7",
    "light": "#38bdf8"
  },
  "accent": {
    "base": "#38bdf8",
    "dark": "#0ea5e9",
    "light": "#7dd3fc"
  }
}
```

---

## 🟣 Deep Purple

Great for luxury, premium, and sophisticated brands.

```json
{
  "primary": {
    "base": "#6b21a8",
    "dark": "#581c87",
    "light": "#7c3aed"
  },
  "secondary": {
    "base": "#7c3aed",
    "dark": "#6b21a8",
    "light": "#8b5cf6"
  },
  "accent": {
    "base": "#a855f7",
    "dark": "#7c3aed",
    "light": "#c084fc"
  }
}
```

---

## 🟢 Fresh Mint

Perfect for health, wellness, and clean brands.

```json
{
  "primary": {
    "base": "#10b981",
    "dark": "#059669",
    "light": "#34d399"
  },
  "secondary": {
    "base": "#34d399",
    "dark": "#10b981",
    "light": "#6ee7b7"
  },
  "accent": {
    "base": "#6ee7b7",
    "dark": "#34d399",
    "light": "#a7f3d0"
  }
}
```

---

## 🟡 Golden Yellow

Great for energy, optimism, and vibrant brands.

```json
{
  "primary": {
    "base": "#d97706",
    "dark": "#b45309",
    "light": "#f59e0b"
  },
  "secondary": {
    "base": "#f59e0b",
    "dark": "#d97706",
    "light": "#fbbf24"
  },
  "accent": {
    "base": "#fbbf24",
    "dark": "#f59e0b",
    "light": "#fcd34d"
  }
}
```

---

## How to Use

1. **Choose a preset** that matches your brand
2. **Copy the JSON** for that preset
3. **Paste it** into `site.config.json` under `branding.colors`
4. **Run** `npm run sync:design-tokens` to generate CSS overrides
5. **Include** `css/design-tokens-override.css` in your HTML

### Example:

```json
{
  "branding": {
    "colors": {
      "primary": {
        "base": "#7c3aed",
        "dark": "#6d28d9",
        "light": "#8b5cf6"
      },
      "secondary": {
        "base": "#a855f7",
        "dark": "#9333ea",
        "light": "#c084fc"
      },
      "accent": {
        "base": "#ec4899",
        "dark": "#db2777",
        "light": "#f472b6"
      }
    }
  }
}
```

---

## Custom Color Generator

Need a custom color? Use these tools:

- **Coolors.co** - Generate color palettes
- **Adobe Color** - Color wheel and harmony
- **Material Design Colors** - Material color system
- **Tailwind Colors** - Pre-built color scales

---

**Tip:** Always test your color scheme for accessibility. Ensure sufficient contrast ratios (WCAG AA minimum) between text and backgrounds.

