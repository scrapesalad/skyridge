# Full-Stack Template Copy Instructions

This document provides instructions for copying all necessary files from the source project into this template.

## Required Files to Copy

### 1. API Routes (`app/api/**`)
Copy all API route files from `app/api/` to `king-tut-templates/fullstack-app-1/app/api/`:

- `app/api/admin/**` - Admin authentication routes
- `app/api/lead/route.ts` - Lead capture
- `app/api/create-payment-intent/route.ts` - Stripe payment processing
- `app/api/webhooks/stripe/route.ts` - Stripe webhooks
- `app/api/verify-recaptcha/route.ts` - reCAPTCHA verification
- `app/api/schedule-quote/route.ts` - Quote scheduling
- `app/api/schedule-followup/route.ts` - Follow-up scheduling
- `app/api/process-followups/route.ts` - Email follow-up processing
- `app/api/sms/route.ts` - SMS integration
- `app/api/health/route.ts` - Health check
- `app/api/indexnow/route.ts` - IndexNow API
- `app/api/indexnow-ping/route.ts` - IndexNow ping
- `app/api/revalidate-sitemaps/route.ts` - Sitemap revalidation
- `app/api/security/monitor/route.ts` - Security monitoring
- All other API routes as needed

**Important:** Replace hardcoded email addresses and URLs with placeholders or env vars.

### 2. Library Files (`app/lib/**`)
Copy all library utilities:

- `app/lib/EmailService.ts` - Email service (already uses env vars)
- `app/lib/security.ts` - Security utilities
- All other lib files

### 3. Configuration Files (`app/config/**`)
Copy all configuration files:

- `app/config/security.ts` - Security configuration
- `app/config/analytics.ts` - Analytics configuration
- All other config files

### 4. Components (`app/components/**`)
Copy all components, especially:

- `app/components/AdminAuthGuard.tsx` - Admin authentication guard
- `app/components/AdminLogout.tsx` - Admin logout
- `app/components/PaymentForm.tsx` - Stripe payment form
- `app/components/QuoteForm.tsx` - Quote form
- `app/components/PricingCalculator.tsx` - Pricing calculator
- `app/components/ConcreteCalculator.tsx` - Concrete calculator
- All calculator components
- All other reusable components

**Important:** Replace hardcoded brand names, phone numbers, and URLs with placeholders.

### 5. Calculator Pages (`app/(resources)/calculators/**`)
Copy all calculator pages:

- `app/(resources)/calculators/**` - All calculator pages
- Include all calculator client components

### 6. Admin Dashboard (`app/admin-dashboard/**` or similar)
Copy admin dashboard pages if they exist.

### 7. Styles (`app/globals.css`)
Copy `app/globals.css` to `app/styles/globals.css` and update imports.

### 8. Other Essential Files
- `app/ai.txt/route.ts` - AI citation file (replace hardcoded URLs)
- `app/robots.ts` - Robots.txt (replace hardcoded domain)
- `app/sitemap.ts` - Sitemap generation (if needed)

## Placeholder Replacement

After copying files, replace hardcoded content with placeholders:

### Branding
- Company name → `{{siteTitle}}`
- Tagline → `{{tagline}}`
- Phone number → `{{phoneNumber}}`
- Phone link → `{{phoneLink}}`
- Email → `{{email}}`
- Site URL → `{{siteUrl}}`

### Content
- Hero heading → `{{heroHeading}}`
- Hero subheading → `{{heroSubheading}}`
- CTA labels → `{{ctaLabel}}`
- Footer text → `{{footerText}}`

### Images
- Logo path → `{{logoPath}}`
- Hero image → `{{heroImage}}`

### Colors
- Primary color → `{{primaryColor}}`
- Secondary color → `{{secondaryColor}}`
- Accent color → `{{accentColor}}`

## Environment Variables

All environment variables should remain as `process.env.VARIABLE_NAME`. Do NOT replace them with placeholders. They are documented in `.env.example` and `template.json`.

## Notes

1. **Email Service**: The EmailService uses `process.env.SMTP_*` variables. The hardcoded CC email in `EmailService.ts` should be replaced with an env var or placeholder.

2. **API Routes**: Many API routes reference hardcoded URLs like `icondumpsters@gmail.com`. These should be replaced with env vars or placeholders.

3. **Security**: The security middleware and config files are already using env vars correctly.

4. **Calculators**: Calculator components should work as-is, but replace any hardcoded branding.

5. **Admin Auth**: Admin authentication uses `process.env.ADMIN_PASSWORD` correctly.

