/**
 * Configuration Loader
 * Loads and validates site.config.json
 * Used by other scripts to access site configuration
 */

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, '..', 'site.config.json');

/**
 * Load site configuration
 */
function loadConfig() {
  if (!fs.existsSync(CONFIG_PATH)) {
    console.warn('⚠️  site.config.json not found. Using defaults.');
    return getDefaultConfig();
  }

  try {
    const configText = fs.readFileSync(CONFIG_PATH, 'utf8');
    const config = JSON.parse(configText);
    
    // Merge with defaults to ensure all fields exist
    return mergeConfig(getDefaultConfig(), config);
  } catch (error) {
    console.error('❌ Error loading site.config.json:', error.message);
    console.warn('⚠️  Using default configuration.');
    return getDefaultConfig();
  }
}

/**
 * Get default configuration
 */
function getDefaultConfig() {
  return {
    site: {
      name: 'Your Site Name',
      domain: 'yoursite.com',
      url: 'https://yoursite.com',
      description: 'A website',
      keywords: [],
      language: 'en',
      author: ''
    },
    branding: {
      logo: {
        path: 'images/logo/logo.png',
        alt: 'Site Logo'
      }
    },
    analytics: {
      googleAnalytics: {
        enabled: false,
        trackingId: ''
      }
    },
    seo: {
      defaultTitle: 'Your Site Name',
      defaultDescription: 'Your site description',
      sitemap: {
        enabled: true,
        path: 'sitemap.xml'
      }
    },
    features: {
      cityPages: {
        enabled: true,
        path: 'pages/cities'
      }
    },
    validation: {
      cityPages: {
        minWords: 600,
        minCityUniqueWords: 250,
        minImages: 3
      }
    }
  };
}

/**
 * Merge two config objects (deep merge)
 */
function mergeConfig(defaults, custom) {
  const merged = { ...defaults };
  
  for (const key in custom) {
    if (typeof custom[key] === 'object' && !Array.isArray(custom[key]) && custom[key] !== null) {
      merged[key] = mergeConfig(defaults[key] || {}, custom[key]);
    } else {
      merged[key] = custom[key];
    }
  }
  
  return merged;
}

/**
 * Validate configuration
 */
function validateConfig(config) {
  const errors = [];
  
  if (!config.site || !config.site.name) {
    errors.push('site.name is required');
  }
  
  if (!config.site || !config.site.domain) {
    errors.push('site.domain is required');
  }
  
  if (!config.site || !config.site.url) {
    errors.push('site.url is required');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

module.exports = {
  loadConfig,
  validateConfig,
  CONFIG_PATH
};

