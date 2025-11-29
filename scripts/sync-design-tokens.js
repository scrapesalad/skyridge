/**
 * Sync Design Tokens from site.config.json to CSS
 * 
 * This script reads design tokens from site.config.json and generates
 * CSS custom properties that override the default values.
 * 
 * Usage: node scripts/sync-design-tokens.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CONFIG_FILE = path.join(ROOT, 'site.config.json');
const CSS_FILE = path.join(ROOT, 'css', 'styles.css');
const OUTPUT_FILE = path.join(ROOT, 'css', 'design-tokens-override.css');

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Generate CSS variables from config
 */
function generateCSSVariables(config) {
  const vars = [];
  vars.push('/* ============================================');
  vars.push('   DESIGN TOKENS OVERRIDE');
  vars.push('   ============================================');
  vars.push('   Auto-generated from site.config.json');
  vars.push('   DO NOT EDIT MANUALLY - Run: npm run sync:design-tokens');
  vars.push('   ============================================ */');
  vars.push('');
  vars.push(':root {');
  
  const branding = config.branding || {};
  const colors = branding.colors || {};
  
  // Primary Colors
  if (colors.primary) {
    if (typeof colors.primary === 'string') {
      vars.push(`  --color-primary: ${colors.primary};`);
    } else if (colors.primary.base) {
      vars.push(`  --color-primary: ${colors.primary.base};`);
      if (colors.primary.dark) vars.push(`  --color-primary-dark: ${colors.primary.dark};`);
      if (colors.primary.light) vars.push(`  --color-primary-light: ${colors.primary.light};`);
      
      // Generate shade variables if provided
      for (let i = 50; i <= 900; i += 50) {
        if (colors.primary[i]) {
          vars.push(`  --color-primary-${i}: ${colors.primary[i]};`);
        }
      }
    }
  }
  
  // Secondary Colors
  if (colors.secondary) {
    if (typeof colors.secondary === 'string') {
      vars.push(`  --color-secondary: ${colors.secondary};`);
    } else if (colors.secondary.base) {
      vars.push(`  --color-secondary: ${colors.secondary.base};`);
      if (colors.secondary.dark) vars.push(`  --color-secondary-dark: ${colors.secondary.dark};`);
      if (colors.secondary.light) vars.push(`  --color-secondary-light: ${colors.secondary.light};`);
      
      for (let i = 50; i <= 900; i += 50) {
        if (colors.secondary[i]) {
          vars.push(`  --color-secondary-${i}: ${colors.secondary[i]};`);
        }
      }
    }
  }
  
  // Accent Colors
  if (colors.accent) {
    if (typeof colors.accent === 'string') {
      vars.push(`  --color-accent: ${colors.accent};`);
    } else if (colors.accent.base) {
      vars.push(`  --color-accent: ${colors.accent.base};`);
      if (colors.accent.dark) vars.push(`  --color-accent-dark: ${colors.accent.dark};`);
      if (colors.accent.light) vars.push(`  --color-accent-light: ${colors.accent.light};`);
      
      for (let i = 50; i <= 900; i += 50) {
        if (colors.accent[i]) {
          vars.push(`  --color-accent-${i}: ${colors.accent[i]};`);
        }
      }
    }
  }
  
  // Semantic Colors
  if (colors.semantic) {
    if (colors.semantic.success) vars.push(`  --color-success: ${colors.semantic.success};`);
    if (colors.semantic.warning) vars.push(`  --color-warning: ${colors.semantic.warning};`);
    if (colors.semantic.error) vars.push(`  --color-error: ${colors.semantic.error};`);
    if (colors.semantic.info) vars.push(`  --color-info: ${colors.semantic.info};`);
  }
  
  // Text Colors
  if (colors.text) {
    if (colors.text.primary) vars.push(`  --color-text-primary: ${colors.text.primary};`);
    if (colors.text.secondary) vars.push(`  --color-text-secondary: ${colors.text.secondary};`);
    if (colors.text.tertiary) vars.push(`  --color-text-tertiary: ${colors.text.tertiary};`);
    if (colors.text.muted) vars.push(`  --color-text-muted: ${colors.text.muted};`);
    if (colors.text.inverse) vars.push(`  --color-text-inverse: ${colors.text.inverse};`);
  }
  
  // Background Colors
  if (colors.background) {
    if (colors.background.primary) vars.push(`  --color-bg-primary: ${colors.background.primary};`);
    if (colors.background.secondary) vars.push(`  --color-bg-secondary: ${colors.background.secondary};`);
    if (colors.background.tertiary) vars.push(`  --color-bg-tertiary: ${colors.background.tertiary};`);
    if (colors.background.section) vars.push(`  --color-bg-section: ${colors.background.section};`);
    if (colors.background.dark) vars.push(`  --color-bg-dark: ${colors.background.dark};`);
  }
  
  // Typography
  const typography = branding.typography || {};
  if (typography.fonts) {
    if (typography.fonts.primary) vars.push(`  --font-primary: ${typography.fonts.primary};`);
    if (typography.fonts.headings) vars.push(`  --font-headings: ${typography.fonts.headings};`);
    if (typography.fonts.mono) vars.push(`  --font-mono: ${typography.fonts.mono};`);
  }
  
  if (typography.headings) {
    if (typography.headings.h1) vars.push(`  --font-size-h1: ${typography.headings.h1};`);
    if (typography.headings.h2) vars.push(`  --font-size-h2: ${typography.headings.h2};`);
    if (typography.headings.h3) vars.push(`  --font-size-h3: ${typography.headings.h3};`);
    if (typography.headings.h4) vars.push(`  --font-size-h4: ${typography.headings.h4};`);
  }
  
  // Layout
  const layout = branding.layout || {};
  if (layout.containerMaxWidth) vars.push(`  --container-max-width: ${layout.containerMaxWidth};`);
  
  vars.push('}');
  vars.push('');
  
  return vars.join('\n');
}

/**
 * Main function
 */
function main() {
  try {
    console.log('🔄 Syncing design tokens from site.config.json...\n');
    
    // Read config file
    if (!fs.existsSync(CONFIG_FILE)) {
      console.error('❌ Error: site.config.json not found');
      process.exit(1);
    }
    
    const configContent = fs.readFileSync(CONFIG_FILE, 'utf8');
    const config = JSON.parse(configContent);
    
    // Generate CSS variables
    const cssVariables = generateCSSVariables(config);
    
    // Write to output file
    fs.writeFileSync(OUTPUT_FILE, cssVariables, 'utf8');
    
    console.log('✅ Design tokens synced successfully!');
    console.log(`📄 Output: ${path.relative(ROOT, OUTPUT_FILE)}`);
    console.log('\n💡 Tip: Include this file in your HTML after styles.css:');
    console.log('   <link rel="stylesheet" href="css/design-tokens-override.css" />');
    console.log('\n   Or add it to styles.css with @import:');
    console.log('   @import "design-tokens-override.css";');
    
  } catch (error) {
    console.error('❌ Error syncing design tokens:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { generateCSSVariables };

