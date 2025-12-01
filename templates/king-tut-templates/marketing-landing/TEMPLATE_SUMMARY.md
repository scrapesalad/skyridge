# Marketing Landing Template Summary

## Template Structure

```
king-tut-templates/marketing-landing/
├── template.json                 # Template manifest with placeholders
├── package.json                  # Minimal dependencies (Next.js, React, Tailwind)
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── app/
    ├── layout.tsx                # Root layout with metadata placeholders
    ├── page.tsx                  # Homepage with hero and sections
    ├── components/
    │   ├── header.tsx            # Navigation header component
    │   ├── Footer.tsx            # Footer component
    │   └── hero.tsx              # Hero section component
    └── styles/
        └── globals.css           # Global styles and Tailwind directives
```

## template.json Contents

```json
{
  "name": "marketing-landing",
  "description": "A modern, responsive marketing landing page template built with Next.js and Tailwind CSS. Perfect for service-based businesses, local companies, and lead generation sites.",
  "version": "1.0.0",
  "engine": "nextjs",
  "entry": "app/page.tsx",
  "placeholders": {
    "siteTitle": "Example Site Title",
    "tagline": "Example tagline here",
    "primaryColor": "#0d9488",
    "secondaryColor": "#ffffff",
    "accentColor": "#f97316",
    "heroHeading": "Example hero heading",
    "heroSubheading": "Example hero subheading",
    "heroImage": "/images/hero-image.jpg",
    "ctaLabel": "Get Started",
    "phoneNumber": "(555) 123-4567",
    "phoneLink": "tel:+15551234567",
    "email": "info@example.com",
    "footerText": "© 2025 Example Company. All Rights Reserved.",
    "logoPath": "/images/logo.png",
    "logoAlt": "Company Logo",
    "siteUrl": "https://example.com",
    "metaDescription": "Example meta description for SEO",
    "metaKeywords": "example, keywords, seo"
  }
}
```

## Placeholders and Usage

### siteTitle
**Default:** "Example Site Title"

**Used in:**
- `app/layout.tsx` - Metadata title, authors, creator, publisher, OpenGraph siteName, Twitter title
- `app/page.tsx` - Metadata title, OpenGraph title and siteName, image alt text
- `app/components/Footer.tsx` - Footer company name heading

### tagline
**Default:** "Example tagline here"

**Used in:**
- `app/components/header.tsx` - Logo tagline text below logo
- `app/components/Footer.tsx` - Footer description text

### primaryColor
**Default:** "#0d9488"

**Note:** Defined in template.json but colors are hardcoded in components. Replace teal-600/700 classes with your brand color.

### secondaryColor
**Default:** "#ffffff"

**Note:** Defined in template.json but colors are hardcoded in components.

### accentColor
**Default:** "#f97316"

**Note:** Defined in template.json but colors are hardcoded in components. Used for CTA buttons.

### heroHeading
**Default:** "Example hero heading"

**Used in:**
- `app/components/hero.tsx` - Main hero headline (h1)
- `app/components/hero.tsx` - Hero image alt text

### heroSubheading
**Default:** "Example hero subheading"

**Used in:**
- `app/components/hero.tsx` - Hero subheading paragraph below main headline

### heroImage
**Default:** "/images/hero-image.jpg"

**Used in:**
- `app/components/hero.tsx` - Hero background image source
- `app/layout.tsx` - OpenGraph and Twitter card image
- `app/page.tsx` - OpenGraph image

### ctaLabel
**Default:** "Get Started"

**Used in:**
- `app/components/hero.tsx` - Primary CTA button text
- `app/components/header.tsx` - Mobile menu CTA button
- `app/page.tsx` - Main CTA section button

### phoneNumber
**Default:** "(555) 123-4567"

**Used in:**
- `app/components/header.tsx` - Desktop and mobile phone display
- `app/components/hero.tsx` - Call button text
- `app/page.tsx` - Call button text

### phoneLink
**Default:** "tel:+15551234567"

**Used in:**
- `app/components/header.tsx` - Phone number link href (2 places)
- `app/components/hero.tsx` - Call button link href
- `app/components/Footer.tsx` - Footer phone link href
- `app/page.tsx` - Call button link href

### email
**Default:** "info@example.com"

**Used in:**
- `app/components/Footer.tsx` - Footer email link (mailto:)

### footerText
**Default:** "© 2025 Example Company. All Rights Reserved."

**Used in:**
- `app/components/Footer.tsx` - Copyright text in bottom footer

### logoPath
**Default:** "/images/logo.png"

**Used in:**
- `app/components/header.tsx` - Logo image source

### logoAlt
**Default:** "Company Logo"

**Used in:**
- `app/components/header.tsx` - Logo image alt text

### siteUrl
**Default:** "https://example.com"

**Used in:**
- `app/layout.tsx` - Canonical URL, metadataBase, OpenGraph URL
- `app/page.tsx` - Canonical URL, OpenGraph URL

### metaDescription
**Default:** "Example meta description for SEO"

**Used in:**
- `app/layout.tsx` - Metadata description, OpenGraph description, Twitter description
- `app/page.tsx` - Metadata description, OpenGraph description

### metaKeywords
**Default:** "example, keywords, seo"

**Used in:**
- `app/layout.tsx` - Metadata keywords
- `app/page.tsx` - Metadata keywords

## Dependencies

### Production
- `next` (^15.5.2) - Next.js framework
- `react` (19.1.0) - React library
- `react-dom` (19.1.0) - React DOM

### Development
- `@types/node` (^20) - TypeScript types for Node.js
- `@types/react` (^19) - TypeScript types for React
- `@types/react-dom` (^19) - TypeScript types for React DOM
- `autoprefixer` (^10.4.21) - CSS autoprefixer
- `eslint` (9.32.0) - ESLint
- `eslint-config-next` (15.4.6) - Next.js ESLint config
- `postcss` (^8.5.6) - PostCSS
- `tailwindcss` (^3.4.18) - Tailwind CSS
- `typescript` (^5) - TypeScript

## Notes

1. **Color Customization**: While placeholders exist for colors, the template currently uses hardcoded Tailwind classes (teal-600, teal-700, etc.). To fully customize colors, you'll need to:
   - Update Tailwind config with your brand colors
   - Replace color classes in components with your custom color classes

2. **Image Paths**: All image paths use placeholders. Ensure you have:
   - Logo image at the specified `logoPath`
   - Hero image at the specified `heroImage` path

3. **Navigation**: The header includes a simple navigation menu. Customize the links in `app/components/header.tsx` to match your site structure.

4. **Footer Links**: The footer includes placeholder social media links. Update these with your actual social media URLs.

5. **Metadata**: All SEO metadata uses placeholders. Replace these with your actual site information for proper SEO.

