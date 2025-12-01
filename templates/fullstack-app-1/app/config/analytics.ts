// Analytics Configuration
export const ANALYTICS_CONFIG = {
  // Google Analytics 4 ID
  GA_ID: process.env.NEXT_PUBLIC_GA_ID || 'G-EVJPJ60B1D',
  
  // Google Ads ID
  GOOGLE_ADS_ID: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-17497114208',
  
  // Google Tag Manager ID
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WFJHM33W',
} as const;

export default ANALYTICS_CONFIG;
