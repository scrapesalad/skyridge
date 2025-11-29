# City Page QA Checklist - Pond Cleanup

This checklist ensures all city pages meet quality standards for SEO, user experience, and content quality.

## Pre-Publication Checklist

### Content Quality

- [ ] **Word Count**: Minimum 600 total words
- [ ] **City-Unique Content**: Minimum 250 words that are city-specific (not generic)
- [ ] **City Name Usage**: City name appears naturally throughout (not keyword stuffing)
- [ ] **Service Information**: Clear description of pond services available in the city
- [ ] **Local References**: Mentions neighborhoods, ZIP codes, or local areas served
- [ ] **Unique Value**: Content is unique to this city (not duplicated from other city pages)

### Images

- [ ] **Image Count**: Minimum 3 images
- [ ] **Alt Text**: All images have descriptive alt text
- [ ] **City-Specific Alt**: Alt text includes city name (e.g., "Pond cleaning in Salt Lake City")
- [ ] **Image Quality**: Images are clear, relevant, and properly sized
- [ ] **Image Attribution**: If using stock/licensed images, attribution is included

### SEO Elements

- [ ] **Title Tag**: Unique, descriptive title (60-65 characters)
  - Format: "Pond Services in [City], [State] | [Key Service] | Pond Cleanup"
- [ ] **Meta Description**: Unique description (145-160 characters)
  - Includes city name and key services
  - Compelling call-to-action
- [ ] **Canonical URL**: Present and points to correct URL
  - Format: `https://pondcleanup.com/pages/cities/[city-slug]`
- [ ] **Meta Keywords**: Relevant keywords (optional but helpful)
- [ ] **Meta Robots**: Set to "index, follow"

### Structured Data (JSON-LD)

- [ ] **LocalBusiness Schema**: Present with:
  - Business name
  - Address (city, state)
  - Area served
  - Service description
- [ ] **Service Schema**: If applicable, includes:
  - Service type
  - Service area
  - Provider information
- [ ] **FAQPage Schema**: If page has FAQ section
- [ ] **Schema Validation**: All JSON-LD validates (use Google Rich Results Test)

### Internal Linking

- [ ] **Cities Index Link**: Links to `/pages/cities/index.html` or `/pages/cities/`
- [ ] **Service Pages**: Links to relevant service pages
- [ ] **Homepage Link**: Clear navigation back to homepage
- [ ] **Related Cities**: If applicable, links to nearby/adjacent cities
- [ ] **No Broken Links**: All internal links work correctly

### User Experience

- [ ] **Clear Headings**: H1, H2, H3 structure is logical
- [ ] **Readable Content**: Paragraphs are short (2-3 sentences)
- [ ] **Call-to-Action**: Clear CTA (e.g., "Get a Quote", "Find a Contractor")
- [ ] **Contact Information**: Easy to find contact/booking information
- [ ] **Mobile Responsive**: Page displays correctly on mobile devices

### Technical

- [ ] **HTML Valid**: Page validates (use W3C Validator)
- [ ] **Fast Load Time**: Page loads quickly (< 3 seconds)
- [ ] **No Console Errors**: Browser console shows no JavaScript errors
- [ ] **Proper Encoding**: UTF-8 encoding specified
- [ ] **Language Tag**: `<html lang="en">` present

## Post-Publication Checks

### Search Engine Optimization

- [ ] **Google Search Console**: Page is submitted and indexed
- [ ] **Rich Results**: Structured data appears in search results
- [ ] **Mobile-Friendly**: Google Mobile-Friendly Test passes
- [ ] **Page Speed**: Google PageSpeed Insights score > 70

### Analytics

- [ ] **Google Analytics**: Tracking code is present
- [ ] **Event Tracking**: CTAs are tracked (if applicable)

## Validation Commands

Run automated validation:

```bash
# Validate all city pages
npm run validate:cities

# Generate/update sitemap
npm run generate:sitemap

# Check sitemap structure
npm run check:sitemap
```

## Common Issues and Fixes

### Issue: Low Word Count
**Fix**: Add more city-specific content:
- Local neighborhoods served
- Seasonal considerations
- Local regulations or permits
- City-specific service examples

### Issue: Missing City Name in Alt Text
**Fix**: Update image alt attributes:
- Before: "Pond cleaning service"
- After: "Pond cleaning service in Salt Lake City"

### Issue: Missing JSON-LD
**Fix**: Add LocalBusiness schema:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pond Services in [City]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "addressCountry": "US"
  }
}
```

### Issue: Duplicate Content
**Fix**: Ensure each city page has unique:
- Introduction paragraph
- Local references
- Service descriptions
- Testimonials (if any)

## Quality Standards

### Minimum Requirements (Must Pass)
- ✅ 600+ total words
- ✅ 250+ city-unique words
- ✅ 3+ images with city-specific alt text
- ✅ LocalBusiness JSON-LD
- ✅ Canonical URL
- ✅ Title and meta description

### Best Practices (Should Have)
- ⭐ FAQPage schema
- ⭐ Service schema
- ⭐ Internal links to related pages
- ⭐ Local testimonials or examples
- ⭐ Clear call-to-action
- ⭐ Fast page load (< 2 seconds)

## Review Process

1. **Content Review**: Check content quality and uniqueness
2. **Technical Review**: Run validation scripts
3. **SEO Review**: Verify all SEO elements
4. **User Testing**: Test on mobile and desktop
5. **Final Check**: Run all validation commands

---

**Last Updated**: 2024-12-19  
**Project**: Pond Cleanup (pondcleanup.com)

