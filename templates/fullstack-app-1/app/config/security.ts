// Security Configuration
export const securityConfig = {
  // reCAPTCHA Configuration
  recaptcha: {
    siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'your_recaptcha_site_key_here',
    secretKey: process.env.RECAPTCHA_SECRET_KEY || 'your_recaptcha_secret_key_here',
  },

  // Rate Limiting
  rateLimit: {
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000'),
    maxFormSubmissions: parseInt(process.env.RATE_LIMIT_MAX_FORM_SUBMISSIONS || '5'),
  },

  // Security Headers
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-XSS-Protection': '1; mode=block',
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live; script-src-elem 'self' 'unsafe-inline' blob: data: https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://www.google.com https://vercel.live; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';",
    'Permissions-Policy': 'camera=(self), microphone=(), geolocation=(), payment=(self)',
  },

  // Bot Detection Patterns
  botPatterns: [
    /bot/i,
    /crawler/i,
    /spider/i,
    /curl/i,
    /wget/i,
    /python/i,
    /php/i,
    /java/i,
    /perl/i,
    /ruby/i,
    /go-http-client/i,
    /httpclient/i,
    /okhttp/i,
    /apache-httpclient/i,
    /libwww-perl/i,
    /lwp-request/i,
    /lwp-simple/i,
    /mechanize/i,
    /scrapy/i,
    /selenium/i,
    /phantomjs/i,
    /headless/i,
    /chrome-lighthouse/i,
    /lighthouse/i,
    /pagespeed/i,
    /gtmetrix/i,
    /webpagetest/i,
    /pingdom/i,
    /uptimerobot/i,
    /monitor/i,
    /uptime/i,
    /availability/i,
    /status/i,
    /health/i,
    /check/i,
    /test/i,
    /debug/i,
    /development/i,
    /staging/i,
    /preview/i,
    /beta/i,
    /alpha/i,
    /dev/i,
    /stage/i,
    /prod/i,
    /production/i,
    /live/i,
    /demo/i,
    /example/i,
    /sample/i,
    /fake/i,
    /dummy/i,
  ],

  // Spam Patterns
  spamPatterns: [
    /viagra/i,
    /cialis/i,
    /casino/i,
    /poker/i,
    /loan/i,
    /mortgage/i,
    /debt/i,
    /credit/i,
    /insurance/i,
    /pharmacy/i,
    /medication/i,
    /prescription/i,
    /weight-loss/i,
    /diet/i,
    /supplement/i,
    /vitamin/i,
    /herbal/i,
    /natural/i,
    /organic/i,
    /green/i,
    /eco/i,
    /environmental/i,
    /renewable/i,
    /solar/i,
    /wind/i,
    /energy/i,
    /power/i,
    /electric/i,
    /gas/i,
    /oil/i,
    /fuel/i,
    /petroleum/i,
    /chemical/i,
    /industrial/i,
    /manufacturing/i,
    /factory/i,
    /plant/i,
    /facility/i,
    /warehouse/i,
    /storage/i,
    /logistics/i,
    /shipping/i,
    /delivery/i,
    /transport/i,
    /freight/i,
    /cargo/i,
    /container/i,
    /trucking/i,
    /hauling/i,
    /moving/i,
    /relocation/i,
  ],

  // Suspicious IPs (add known spam IPs here)
  suspiciousIPs: [
    // Add known spam IPs here
    // '192.168.1.1',
    // '10.0.0.1',
  ],

  // Email Configuration
  email: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },

  // Monitoring
  monitoring: {
    webhookUrl: process.env.SECURITY_WEBHOOK_URL || '',
    analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID || '',
    gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || '',
  },
};

// Security utility functions
export const securityUtils = {
  // Validate email format
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate phone number format
  isValidPhone: (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  },

  // Sanitize input
  sanitizeInput: (input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  },

  // Generate CSRF token
  generateCSRFToken: (): string => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  },

  // Validate reCAPTCHA token
  validateRecaptcha: async (token: string): Promise<boolean> => {
    try {
      const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${securityConfig.recaptcha.secretKey}&response=${token}`,
      });

      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('reCAPTCHA validation error:', error);
      return false;
    }
  },
};
