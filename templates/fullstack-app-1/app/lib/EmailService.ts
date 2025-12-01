import nodemailer from 'nodemailer';

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private lastEmailTime: number = 0;
  private emailQueue: Array<() => Promise<any>> = [];
  private isProcessingQueue: boolean = false;

  constructor() {
    // Only initialize transporter on client-side or when explicitly needed
    if (typeof window === 'undefined') {
      // Server-side: initialize during first use
      this.transporter = null;
    }
  }

  private async initializeTransporter() {
    if (this.transporter) return this.transporter;
    
    try {
      const smtpConfig = {
        host: process.env.SMTP_HOST || 'mail.icondumpsters.com',
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: true, // true for 465 (SSL/TLS), false for other ports
        auth: {
          user: process.env.SMTP_USER || 'admin@icondumpsters.com',
          pass: process.env.SMTP_PASS || 'your-app-password'
        },
        // SSL/TLS settings for secure connection
        tls: {
          rejectUnauthorized: false
        },
        connectionTimeout: 60000, // 60 seconds
        greetingTimeout: 30000,   // 30 seconds
        socketTimeout: 60000,     // 60 seconds
        // Pool connections to avoid repeated authentication
        pool: true,
        maxConnections: 1, // Limit to 1 connection to avoid rate limits
        maxMessages: 1,    // Send 1 message per connection
        rateDelta: 2000,   // 2 seconds between emails
        rateLimit: 1       // 1 email per rateDelta
      };
      
      console.log('EmailService: Configuring SMTP with:', {
        host: smtpConfig.host,
        port: smtpConfig.port,
        user: smtpConfig.auth.user,
        pass: smtpConfig.auth.pass ? '***SET***' : 'NOT SET'
      });
      
      this.transporter = nodemailer.createTransport(smtpConfig);
      console.log('EmailService: Email service configured successfully');
      return this.transporter;
    } catch (error) {
      console.error('EmailService: Failed to initialize transporter:', error);
      throw error;
    }
  }

  // Rate limiting: Gmail allows ~100 emails per day for free accounts
  // and has strict rate limits. We'll send max 1 email per 2 seconds
  private async waitForRateLimit() {
    const now = Date.now();
    const timeSinceLastEmail = now - this.lastEmailTime;
    const minInterval = 2000; // 2 seconds between emails
    
    if (timeSinceLastEmail < minInterval) {
      const waitTime = minInterval - timeSinceLastEmail;
      console.log(`EmailService: Rate limiting - waiting ${waitTime}ms`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    this.lastEmailTime = Date.now();
  }

  async sendEmail(to: string, subject: string, text: string, html?: string, retryCount: number = 0): Promise<any> {
    const maxRetries = 3;
    
    try {
      // Apply rate limiting
      await this.waitForRateLimit();
      
      const transporter = await this.initializeTransporter();
      
      const mailOptions = {
        from: process.env.SMTP_USER || 'admin@icondumpsters.com',
        to,
        cc: 'icondumpsters@gmail.com', // Always CC icondumpsters@gmail.com
        subject,
        text,
        html
      };

      const result = await transporter.sendMail(mailOptions);
      console.log('EmailService: Email sent successfully to', to);
      return result;
    } catch (error: any) {
      console.error('EmailService: Failed to send email to', to, ':', error);
      
      // Check if it's a rate limiting error
      const isRateLimitError = error.message?.includes('Too many login attempts') || 
                              error.message?.includes('rate limit') ||
                              error.message?.includes('quota') ||
                              error.code === 'EAUTH' ||
                              error.responseCode === 454;
      
      if (isRateLimitError && retryCount < maxRetries) {
        // Exponential backoff for rate limit errors
        const backoffTime = Math.pow(2, retryCount) * 5000; // 5s, 10s, 20s
        console.log(`EmailService: Rate limit hit, retrying in ${backoffTime}ms (attempt ${retryCount + 1}/${maxRetries})`);
        
        await new Promise(resolve => setTimeout(resolve, backoffTime));
        return this.sendEmail(to, subject, text, html, retryCount + 1);
      }
      
      throw error;
    }
  }
}

export default EmailService;

// Export a singleton instance
export const emailService = new EmailService();
