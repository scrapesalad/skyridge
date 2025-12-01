import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../lib/EmailService';
import fs from 'fs';
import path from 'path';

interface BulkEmailRequest {
  emailType: 'newsletter' | 'promotion' | 'follow_up' | 'seasonal' | 'review-request' | 'post-call-review' | 'custom';
  subject: string;
  content: string;
  filters?: {
    clientType?: 'all' | 'residential' | 'commercial';
    county?: string;
    tags?: string[];
    createdAfter?: string;
    createdBefore?: string;
  };
  schedule?: {
    sendImmediately: boolean;
    scheduledTime?: string;
  };
  customTemplate?: boolean;
}

// Email templates for different outreach types
const emailTemplates = {
  newsletter: {
    subject: "Icon Dumpsters Monthly Newsletter - {month} {year}",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Icon Dumpsters Newsletter</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; margin: 0; padding: 0; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; background: #ffffff; }
          .header { text-align: center; margin-bottom: 32px; }
          .logo { width: 120px; height: 120px; border-radius: 12px; }
          h1 { color: #0d9488; margin-bottom: 16px; font-size: 28px; }
          .content { margin-bottom: 24px; }
          .cta-button { 
            display: inline-block; 
            background: #0d9488; 
            color: white; 
            padding: 14px 28px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 600; 
            margin: 16px 8px;
            font-size: 16px;
          }
          .cta-button:hover { background: #3d2d7a; }
          .footer { 
            border-top: 1px solid #e5e7eb; 
            padding-top: 24px; 
            margin-top: 32px; 
            text-align: center; 
            color: #6b7280; 
            font-size: 14px;
          }
          .highlight-box {
            background: #f3f4f6;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #0d9488;
          }
          .service-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin: 20px 0;
          }
          .service-item {
            background: #f9fafb;
            padding: 16px;
            border-radius: 8px;
            text-align: center;
          }
          .contact-info {
            background: #f0f9ff;
            padding: 16px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>Icon Dumpsters Newsletter</h1>
            <p style="color: #6b7280; font-size: 18px;">Your trusted waste management partner in Utah</p>
          </div>
          
          <div class="content">
            <h2>What's New This Month</h2>
            <p>Hi {firstName},</p>
            <p>Thank you for being a valued Icon Dumpsters customer! Here's what's happening this month:</p>
            
            <div class="highlight-box">
              <h3>🎯 Special Newsletter Offer</h3>
              <p>Get <strong>10% off</strong> your next dumpster rental when you book before the end of the month. Use code <strong>NEWSLETTER10</strong> when you call or book online!</p>
              <div style="text-align: center; margin-top: 16px;">
                <a href="https://icondumpsters.com/book" class="cta-button">Book Now & Save 10%</a>
              </div>
            </div>
            
            <h3>🚛 Service Updates</h3>
            <div class="service-grid">
              <div class="service-item">
                <strong>Same-Day Delivery</strong><br>
                Available in all Utah service areas
              </div>
              <div class="service-item">
                <strong>Extended Hours</strong><br>
                Weekend pickup now available
              </div>
              <div class="service-item">
                <strong>New Sizes</strong><br>
                20-yard dumpsters for larger projects
              </div>
              <div class="service-item">
                <strong>24/7 Support</strong><br>
                Always here when you need us
              </div>
            </div>
            
            <h3>🌟 Customer Spotlight</h3>
            <p>This month we're featuring {county} County projects. We've helped over 500 customers in your area with their waste management needs!</p>
            
            <div class="contact-info">
              <h3>📞 Need a Dumpster? We're Here to Help!</h3>
              <p><strong>Call us at (801) 918-6000</strong> for immediate assistance or get a free quote online.</p>
              <div style="margin-top: 16px;">
                <a href="https://icondumpsters.com/book" class="cta-button">Book Online</a>
                <a href="https://icondumpsters.com/quote" class="cta-button">Get Free Quote</a>
              </div>
            </div>
            
            <h3>🗑️ Available Dumpster Sizes</h3>
            <ul>
              <li><strong>10-yard:</strong> Perfect for small cleanouts and home projects</li>
              <li><strong>15-yard:</strong> Ideal for kitchen/bathroom renovations</li>
              <li><strong>20-yard:</strong> Great for whole house cleanouts</li>
              <li><strong>30-yard:</strong> Perfect for large construction projects</li>
              <li><strong>40-yard:</strong> Maximum capacity for major projects</li>
            </ul>
          </div>
          
          <div class="footer">
            <p><strong>Best regards,</strong><br/>
            <strong>Manager | Icon Dumpsters</strong><br/><br/>
            📞 (801) 918-6000<br/>
            📧 icondumpsters@gmail.com<br/>
            🌐 icondumpsters.com<br/><br/>
            <a href="https://icondumpsters.com/rating" style="color: #0d9488;">Leave us a review</a><br/>
            <a href="https://icondumpsters.com/rating" style="color: #0d9488;">Icondumpsters.com/rating</a><br/><br/>
            <a href="https://www.facebook.com/p/Icon-Dumpsters-61557014799828/" style="color: #0d9488;">Follow us on Facebook</a><br/>
            <a href="https://www.facebook.com/p/Icon-Dumpsters-61557014799828/" style="color: #0d9488;">Facebook.com/IconDumpsters</a><br/><br/>
            <div style="margin-top: 16px; color: #0d9488; font-weight: 600;">♻ Affordable | Fast | Local</div></p>
            <p style="margin-top: 16px; font-size: 12px;">
              You're receiving this because you're a valued Icon Dumpsters customer.<br/>
              <a href="https://icondumpsters.com/unsubscribe" style="color: #6b7280;">Unsubscribe</a> | 
              <a href="https://icondumpsters.com/preferences" style="color: #6b7280;">Update Preferences</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  
  promotion: {
    subject: "Limited Time Offer - {promotionTitle}",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Special Offer from Icon Dumpsters</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; }
          .header { text-align: center; margin-bottom: 32px; background: linear-gradient(135deg, #0d9488, #14b8a6); color: white; padding: 32px; border-radius: 12px; }
          .logo { width: 80px; height: 80px; border-radius: 12px; margin-bottom: 16px; }
          h1 { margin: 0; font-size: 28px; }
          .offer-box { 
            background: #fef3c7; 
            border: 2px solid #f59e0b; 
            padding: 24px; 
            border-radius: 12px; 
            text-align: center; 
            margin: 24px 0;
          }
          .offer-code { 
            background: #1f2937; 
            color: white; 
            padding: 8px 16px; 
            border-radius: 6px; 
            font-family: monospace; 
            font-size: 18px; 
            font-weight: bold;
            display: inline-block;
            margin: 8px 0;
          }
          .cta-button { 
            display: inline-block; 
            background: #dc2626; 
            color: white; 
            padding: 16px 32px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 600; 
            font-size: 18px;
            margin: 16px 0;
          }
          .urgency { color: #dc2626; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>🎉 Special Offer Just for You!</h1>
            <p style="margin: 0; opacity: 0.9;">Limited time promotion</p>
          </div>
          
          <div style="text-align: center;">
            <h2>Hi {firstName}!</h2>
            <p>As one of our valued customers, we're offering you an exclusive deal:</p>
            
            <div class="offer-box">
              <h3 style="margin: 0 0 16px 0; color: #92400e;">{promotionTitle}</h3>
              <p style="font-size: 18px; margin: 0 0 16px 0;">Save {discountAmount} on your next dumpster rental!</p>
              <div class="offer-code">{promoCode}</div>
              <p class="urgency">⏰ Offer expires {expirationDate}</p>
            </div>
            
            <p>This offer is valid for:</p>
            <ul style="text-align: left; max-width: 400px; margin: 0 auto;">
              <li>All dumpster sizes (10, 15, 20, 30, 40 yards)</li>
              <li>Same-day delivery available</li>
              <li>All Utah service areas</li>
              <li>New and existing customers</li>
            </ul>
            
            <div style="margin: 32px 0;">
              <a href="https://icondumpsters.com/book?promo={promoCode}" class="cta-button">Claim Your Discount Now</a>
            </div>
            
            <p style="color: #6b7280; font-size: 14px;">
              Questions? Call us at (801) 918-6000 or reply to this email.
            </p>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; margin-top: 32px; text-align: center; color: #6b7280; font-size: 14px;">
            <p><strong>Icon Dumpsters</strong><br/>
            📞 (801) 918-6000 | 📧 icondumpsters@gmail.com<br/>
            🌐 <a href="https://icondumpsters.com" style="color: #0d9488;">icondumpsters.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  
  follow_up: {
    subject: "We'd love to serve you again - Icon Dumpsters",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>We'd love to serve you again</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; }
          .header { text-align: center; margin-bottom: 32px; }
          .logo { width: 96px; height: 96px; border-radius: 12px; }
          h1 { color: #0d9488; margin-bottom: 16px; }
          .content { margin-bottom: 24px; }
          .cta-button { 
            display: inline-block; 
            background: #0d9488; 
            color: white; 
            padding: 12px 24px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 600; 
            margin: 16px 0;
          }
          .testimonial {
            background: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #0d9488;
            margin: 20px 0;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>We'd Love to Serve You Again!</h1>
          </div>
          
          <div class="content">
            <p>Hi {firstName},</p>
            <p>We hope you had a great experience with Icon Dumpsters for your {lastServiceType} project in {city}!</p>
            
            <p>As a valued customer, we wanted to reach out and see if you have any upcoming projects that might need our dumpster rental services.</p>
            
            <div class="testimonial">
              "Icon Dumpsters made our renovation project so much easier. Professional, reliable, and great pricing!"<br/>
              <strong>- Sarah M., Salt Lake City</strong>
            </div>
            
            <h3>Why Choose Icon Dumpsters Again?</h3>
            <ul>
              <li>✅ Same-day delivery in most areas</li>
              <li>✅ Competitive pricing with no hidden fees</li>
              <li>✅ Professional, friendly service</li>
              <li>✅ Flexible rental periods</li>
              <li>✅ Local Utah company you can trust</li>
            </ul>
            
            <h3>Upcoming Project?</h3>
            <p>Whether you're planning a home renovation, construction project, or just need to clean out your garage, we're here to help!</p>
            
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://icondumpsters.com/book" class="cta-button">Get Your Next Quote</a>
            </div>
            
            <p>Or give us a call at <strong>(801) 918-6000</strong> to discuss your project needs.</p>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; margin-top: 32px; text-align: center; color: #6b7280; font-size: 14px;">
            <p><strong>Icon Dumpsters</strong><br/>
            📞 (801) 918-6000 | 📧 icondumpsters@gmail.com<br/>
            🌐 <a href="https://icondumpsters.com" style="color: #0d9488;">icondumpsters.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  
  seasonal: {
    subject: "Winter's Coming - Let's Tackle Your Dumpster Needs Again!",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Winter's Coming - Icon Dumpsters</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; margin: 0; padding: 0; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; background: #ffffff; }
          .header { text-align: center; margin-bottom: 32px; }
          .logo { width: 120px; height: 120px; border-radius: 12px; }
          h1 { color: #0d9488; margin-bottom: 16px; font-size: 28px; }
          .content { margin-bottom: 24px; }
          .cta-button { 
            display: inline-block; 
            background: #0d9488 !important; 
            color: #ffffff !important; 
            padding: 16px 32px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 700; 
            margin: 16px 8px;
            font-size: 16px;
            border: 2px solid #0d9488;
            box-shadow: 0 4px 8px rgba(78, 55, 168, 0.3);
            transition: all 0.3s ease;
          }
          .cta-button:hover { 
            background: #3d2d7a !important; 
            color: #ffffff !important;
            border-color: #3d2d7a;
            box-shadow: 0 6px 12px rgba(78, 55, 168, 0.4);
            transform: translateY(-2px);
          }
          .cta-button:visited {
            color: #ffffff !important;
          }
          .cta-button:link {
            color: #ffffff !important;
          }
          .footer { 
            border-top: 1px solid #e5e7eb; 
            padding-top: 24px; 
            margin-top: 32px; 
            text-align: center; 
            color: #6b7280; 
            font-size: 14px;
          }
          .highlight-box {
            background: #f0f9ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #0d9488;
          }
          .service-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin: 20px 0;
          }
          .service-item {
            background: #f9fafb;
            padding: 16px;
            border-radius: 8px;
            text-align: center;
          }
          .contact-info {
            background: #f0f9ff;
            padding: 16px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>❄️ Winter's Coming - Let's Tackle Your Dumpster Needs Again!</h1>
            <p style="color: #6b7280; font-size: 18px;">Your trusted waste management partner in Utah</p>
          </div>
          
          <div class="content">
            <h2>Hi {firstName},</h2>
            <p>Thank you for your business last winter and for helping us keep your projects running smoothly. We're gearing up for another busy winter season and would love to help you with your rolloff dumpster rentals for construction, property cleanup, site work, and more.</p>
            
            <div class="highlight-box">
              <h3>🎯 Winter Preparation Special</h3>
              <p>Book early to ensure availability of sizes and pickup schedules. Get <strong>10% off</strong> your winter project when you book before December 15th. Simply mention this email when you call us at <strong>(801) 918-6000</strong>!</p>
              <div style="text-align: center; margin-top: 16px;">
                <a href="tel:8019186000" class="cta-button">Call Now & Save 10%</a>
              </div>
            </div>
            
            <h3>🚛 Perfect for Winter Projects</h3>
            <div class="service-grid">
              <div class="service-item">
                <strong>Construction Projects</strong><br>
                Indoor renovations during winter
              </div>
              <div class="service-item">
                <strong>Property Cleanup</strong><br>
                Clear out before winter storms
              </div>
              <div class="service-item">
                <strong>Site Work</strong><br>
                Commercial and residential projects
              </div>
              <div class="service-item">
                <strong>Emergency Cleanup</strong><br>
                Storm damage and debris removal
              </div>
            </div>
            
            <h3>🏠 Why Winter is Great for Projects</h3>
            <p>Winter weather in Utah can be unpredictable, but it's actually an excellent time for indoor projects and property preparation. With shorter daylight hours, having a dumpster on-site makes cleanup efficient and keeps your project moving forward.</p>
            
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #0d9488;">
              <h3 style="color: #0d9488; margin-top: 0;">📝 Winter Project Planning Tips</h3>
              <p style="margin-bottom: 16px; font-style: italic; color: #6b7280;">Make the most of your winter projects with these helpful strategies.</p>
              
              <h4 style="color: #0d9488;">🗑️ What Projects Work Best in Winter</h4>
              <ul style="margin: 12px 0;">
                <li>Indoor renovations and remodeling</li>
                <li>Basement and garage cleanouts</li>
                <li>Property preparation for spring</li>
                <li>Construction debris removal</li>
                <li>Holiday cleanup and organization</li>
              </ul>
              
              <h4 style="color: #0d9488;">🚛 Make Your Winter Projects EZ with Icon Dumpsters</h4>
              <p>Don't let winter weather slow down your projects! A dumpster rental makes it easy to manage waste and debris, keeping your {county} County project clean and organized throughout the winter months.</p>
              
              <p><strong>With Icon Dumpsters, you can focus on your project while we handle the waste management.</strong> We deliver, you fill, and we haul it away—even in winter weather!</p>
              
              <div style="text-align: center; margin-top: 20px;">
                <a href="tel:8019186000" class="cta-button">Call to Plan Your Winter Project</a>
              </div>
            </div>
            
            <div class="contact-info">
              <h3>📞 Ready for Winter Projects? We're Here to Help!</h3>
              <p><strong>Call us at (801) 918-6000</strong> for immediate assistance and to get your free quote.</p>
              <div style="margin-top: 16px;">
                <a href="tel:8019186000" class="cta-button">Call Now</a>
                <a href="tel:8019186000" class="cta-button">Get Free Quote</a>
              </div>
            </div>
            
            <h3>🗑️ Available Dumpster Sizes</h3>
            <ul>
              <li><strong>10-yard:</strong> Perfect for small cleanouts and home projects</li>
              <li><strong>15-yard:</strong> Ideal for kitchen/bathroom renovations</li>
              <li><strong>20-yard:</strong> Great for whole house cleanouts</li>
              <li><strong>30-yard:</strong> Perfect for large construction projects</li>
            </ul>
          </div>
          
          <div class="footer">
            <p><strong>Best regards,</strong><br/>
            <strong>Manager | Icon Dumpsters</strong><br/><br/>
            📞 (801) 918-6000<br/>
            📧 icondumpsters@gmail.com<br/>
            🌐 icondumpsters.com<br/><br/>
            <a href="https://icondumpsters.com/rating" style="color: #0d9488;">Leave us a review</a><br/>
            <a href="https://icondumpsters.com/rating" style="color: #0d9488;">Icondumpsters.com/rating</a><br/><br/>
            <a href="https://www.facebook.com/p/Icon-Dumpsters-61557014799828/" style="color: #0d9488;">Follow us on Facebook</a><br/>
            <a href="https://www.facebook.com/p/Icon-Dumpsters-61557014799828/" style="color: #0d9488;">Facebook.com/IconDumpsters</a><br/><br/>
            <div style="margin-top: 16px; color: #0d9488; font-weight: 600;">♻ Affordable | Fast | Local</div></p>
            <p style="margin-top: 16px; font-size: 12px;">
              You're receiving this because you're a valued Icon Dumpsters customer.<br/>
              <a href="https://icondumpsters.com/unsubscribe" style="color: #6b7280;">Unsubscribe</a> | 
              <a href="https://icondumpsters.com/preferences" style="color: #6b7280;">Update Preferences</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  'review-request': {
    subject: 'Thank you for choosing Icon Dumpsters!',
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank you for choosing Icon Dumpsters!</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; }
          .header { text-align: center; margin-bottom: 32px; }
          .logo { width: 96px; height: 96px; border-radius: 12px; }
          h1 { color: #0d9488; margin-bottom: 16px; }
          .content { margin-bottom: 24px; }
          .cta-button { 
            display: inline-block; 
            background: #0d9488; 
            color: white; 
            padding: 12px 24px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 600; 
            margin: 16px 0;
          }
          .footer { 
            border-top: 1px solid #e5e7eb; 
            padding-top: 24px; 
            margin-top: 32px; 
            text-align: center; 
            color: #6b7280; 
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>Thank You!</h1>
          </div>
          
          <div class="content">
            <p>Hi {firstName},</p>
            
            <p>Thank you for choosing Icon Dumpsters for your recent dumpster rental! We truly appreciate your business and the opportunity to serve you.</p>
            
            <p>Your feedback means the world to us and helps other customers feel confident in choosing our services. If you have a moment, would you mind sharing your experience?</p>
            
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://icondumpsters.com/rating" class="cta-button">👉 Leave Us a Review</a>
            </div>
            
            <p>It only takes a minute, and we'd be so grateful for your support.</p>
            
            <p>Thanks again for trusting us with your project—we look forward to serving you again in the future!</p>
          </div>
          
          <div class="footer">
            <p><strong>Best regards,</strong><br>
            The Icon Dumpsters Team<br>
            <a href="https://icondumpsters.com">icondumpsters.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  
  'post-call-review': {
    subject: 'How did we do? - Icon Dumpsters',
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>How did we do? - Icon Dumpsters</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; margin: 0; padding: 0; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; background: #ffffff; }
          .header { text-align: center; margin-bottom: 32px; }
          .logo { width: 96px; height: 96px; border-radius: 12px; }
          h1 { color: #0d9488; margin-bottom: 16px; font-size: 28px; }
          .content { margin-bottom: 24px; }
          .cta-button { 
            display: inline-block; 
            background: #0d9488 !important; 
            color: #ffffff !important; 
            padding: 16px 32px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 700; 
            margin: 16px 8px;
            font-size: 18px;
            border: 2px solid #0d9488;
            box-shadow: 0 4px 8px rgba(13, 148, 136, 0.3);
            transition: all 0.3s ease;
          }
          .cta-button:hover { 
            background: #0f766e !important; 
            color: #ffffff !important;
            border-color: #0f766e;
            box-shadow: 0 6px 12px rgba(13, 148, 136, 0.4);
            transform: translateY(-2px);
          }
          .cta-button:visited {
            color: #ffffff !important;
          }
          .cta-button:link {
            color: #ffffff !important;
          }
          .highlight-box {
            background: #f0f9ff;
            padding: 24px;
            border-radius: 12px;
            margin: 24px 0;
            border-left: 4px solid #0d9488;
            text-align: center;
          }
          .footer { 
            border-top: 1px solid #e5e7eb; 
            padding-top: 24px; 
            margin-top: 32px; 
            text-align: center; 
            color: #6b7280; 
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>How did we do? 📞</h1>
          </div>
          
          <div class="content">
            <p>Hi {firstName},</p>
            
            <p>Thank you for taking the time to speak with us today! We hope we were able to answer all your questions and help you with your dumpster rental needs.</p>
            
            <div class="highlight-box">
              <h2 style="color: #0d9488; margin-top: 0; font-size: 24px;">Your feedback matters to us!</h2>
              <p style="font-size: 16px; margin-bottom: 20px;">We're always working to improve our service, and hearing from customers like you helps us do that. If you have a moment, we'd love to know how we did on our call today.</p>
              
              <p style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Would you mind leaving us a quick review?</p>
              
              <a href="https://icondumpsters.com/rating" class="cta-button">⭐ Leave Us a Review</a>
              
              <p style="margin-top: 20px; font-size: 14px; color: #6b7280;">It only takes a minute, and your review helps other customers feel confident in choosing Icon Dumpsters!</p>
            </div>
            
            <p>Your experience and feedback are incredibly valuable to us. Whether you had a great experience or have suggestions for how we can improve, we'd love to hear from you.</p>
            
            <p>If you have any additional questions or need anything else, please don't hesitate to reach out to us at <strong>(801) 918-6000</strong> or reply to this email.</p>
            
            <p>Thanks again for considering Icon Dumpsters for your project—we look forward to serving you!</p>
          </div>
          
          <div class="footer">
            <p><strong>Best regards,</strong><br>
            <strong>The Icon Dumpsters Team</strong><br/><br/>
            📞 (801) 918-6000<br/>
            📧 icondumpsters@gmail.com<br/>
            🌐 <a href="https://icondumpsters.com" style="color: #0d9488;">icondumpsters.com</a><br/><br/>
            <a href="https://icondumpsters.com/rating" style="color: #0d9488; font-weight: 600;">Leave us a review → icondumpsters.com/rating</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  
  custom: {
    subject: "Custom Email - Icon Dumpsters",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Custom Email - Icon Dumpsters</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; margin: 0; padding: 0; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; background: #ffffff; }
          .header { text-align: center; margin-bottom: 32px; }
          .logo { width: 120px; height: 120px; border-radius: 12px; }
          h1 { color: #0d9488; margin-bottom: 16px; font-size: 28px; }
          .content { margin-bottom: 24px; }
          .cta-button { 
            display: inline-block; 
            background: #0d9488 !important; 
            color: #ffffff !important; 
            padding: 16px 32px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 700; 
            margin: 16px 8px;
            font-size: 16px;
            border: 2px solid #0d9488;
            box-shadow: 0 4px 8px rgba(78, 55, 168, 0.3);
            transition: all 0.3s ease;
          }
          .cta-button:hover { 
            background: #3d2d7a !important; 
            color: #ffffff !important;
            border-color: #3d2d7a;
            box-shadow: 0 6px 12px rgba(78, 55, 168, 0.4);
            transform: translateY(-2px);
          }
          .cta-button:visited {
            color: #ffffff !important;
          }
          .cta-button:link {
            color: #ffffff !important;
          }
          .footer { 
            border-top: 1px solid #e5e7eb; 
            padding-top: 24px; 
            margin-top: 32px; 
            text-align: center; 
            color: #6b7280; 
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>Icon Dumpsters</h1>
            <p style="color: #6b7280; font-size: 18px;">Your trusted waste management partner in Utah</p>
          </div>
          
          <div class="content">
            <h2>Hi {firstName},</h2>
            <p>{customContent}</p>
            
            <div style="text-align: center; margin: 24px 0;">
              <a href="tel:8019186000" class="cta-button">Call Us Now</a>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Best regards,</strong><br/>
            <strong>Manager | Icon Dumpsters</strong><br/><br/>
            📞 (801) 918-6000<br/>
            📧 icondumpsters@gmail.com<br/>
            🌐 icondumpsters.com<br/><br/>
            <a href="https://icondumpsters.com/rating" style="color: #0d9488;">Leave us a review</a><br/>
            <a href="https://icondumpsters.com/rating" style="color: #0d9488;">Icondumpsters.com/rating</a><br/><br/>
            <a href="https://www.facebook.com/p/Icon-Dumpsters-61557014799828/" style="color: #0d9488;">Follow us on Facebook</a><br/>
            <a href="https://www.facebook.com/p/Icon-Dumpsters-61557014799828/" style="color: #0d9488;">Facebook.com/IconDumpsters</a><br/><br/>
            <div style="margin-top: 16px; color: #0d9488; font-weight: 600;">♻ Affordable | Fast | Local</div></p>
            <p style="margin-top: 16px; font-size: 12px;">
              You're receiving this because you're a valued Icon Dumpsters customer.<br/>
              <a href="https://icondumpsters.com/unsubscribe" style="color: #6b7280;">Unsubscribe</a> | 
              <a href="https://icondumpsters.com/preferences" style="color: #6b7280;">Update Preferences</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  }
};

// Function to personalize email content
function personalizeEmail(template: string, client: any, customData: any = {}) {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();
  
  return template
    .replace(/{firstName}/g, client.firstName || 'Valued Customer')
    .replace(/{lastName}/g, client.lastName || '')
    .replace(/{companyName}/g, client.companyName || '')
    .replace(/{city}/g, client.city || 'your area')
    .replace(/{county}/g, client.county || 'your county')
    .replace(/{month}/g, month)
    .replace(/{year}/g, year.toString())
    .replace(/{promotionTitle}/g, customData.promotionTitle || 'Special Offer')
    .replace(/{discountAmount}/g, customData.discountAmount || '10%')
    .replace(/{promoCode}/g, customData.promoCode || 'SAVE10')
    .replace(/{expirationDate}/g, customData.expirationDate || 'end of month')
    .replace(/{lastServiceType}/g, customData.lastServiceType || 'recent')
    .replace(/{customContent}/g, customData.content || '');
}

// Function to filter clients based on criteria
function filterClients(clients: any[], filters: any) {
  console.log('Filtering clients with criteria:', filters);
  console.log('Total clients before filtering:', clients.length);
  
  const filtered = clients.filter(client => {
    // Only include clients with email addresses first
    if (!client.email || client.email.trim() === '') {
      console.log('Filtering out client without email:', client.firstName, client.lastName);
      return false;
    }
    
    // Filter by client type
    if (filters.clientType && filters.clientType !== 'all') {
      const hasResidential = client.tags?.includes('Residential');
      const hasCommercial = client.tags?.includes('Commercial');
      
      if (filters.clientType === 'residential' && !hasResidential) {
        console.log('Filtering out non-residential client:', client.firstName, client.lastName);
        return false;
      }
      if (filters.clientType === 'commercial' && !hasCommercial) {
        console.log('Filtering out non-commercial client:', client.firstName, client.lastName);
        return false;
      }
    }
    
    // Filter by county
    if (filters.county && filters.county !== 'all' && client.county !== filters.county) {
      console.log('Filtering out client from different county:', client.firstName, client.lastName, client.county);
      return false;
    }
    
    // Filter by tags
    if (filters.tags && filters.tags.length > 0) {
      const clientTags = client.tags?.split(',').map((tag: string) => tag.trim()) || [];
      const hasMatchingTag = filters.tags.some((tag: string) => clientTags.includes(tag));
      if (!hasMatchingTag) {
        console.log('Filtering out client without matching tags:', client.firstName, client.lastName);
        return false;
      }
    }
    
    // Filter by creation date
    if (filters.createdAfter) {
      const createdDate = new Date(client.createdOn);
      const afterDate = new Date(filters.createdAfter);
      if (createdDate < afterDate) {
        console.log('Filtering out client created before date:', client.firstName, client.lastName);
        return false;
      }
    }
    
    if (filters.createdBefore) {
      const createdDate = new Date(client.createdOn);
      const beforeDate = new Date(filters.createdBefore);
      if (createdDate > beforeDate) {
        console.log('Filtering out client created after date:', client.firstName, client.lastName);
        return false;
      }
    }
    
    return true;
  });
  
  console.log('Clients after filtering:', filtered.length);
  return filtered;
}

export async function POST(request: NextRequest) {
  try {
    const body: BulkEmailRequest = await request.json();
    
    // Validate required fields
    if (!body.emailType || !body.subject) {
      return NextResponse.json(
        { error: 'Email type and subject are required' },
        { status: 400 }
      );
    }
    
    // Get client data directly from file
    const CLIENT_DATA_FILE = path.join(process.cwd(), 'data', 'clients.json');
    let allClients: any[] = [];
    try {
      const ensureDataDirectory = () => {
        const dataDir = path.dirname(CLIENT_DATA_FILE);
        if (!fs.existsSync(dataDir)) {
          fs.mkdirSync(dataDir, { recursive: true });
        }
      };
      ensureDataDirectory();
      if (fs.existsSync(CLIENT_DATA_FILE)) {
        const data = fs.readFileSync(CLIENT_DATA_FILE, 'utf8');
        allClients = JSON.parse(data);
      }
    } catch (error) {
      console.error('Error loading clients from file:', error);
    }
    
    // Filter clients based on criteria
    const filteredClients = filterClients(allClients, body.filters || {});
    
    if (filteredClients.length === 0) {
      return NextResponse.json(
        { error: 'No clients match the specified criteria' },
        { status: 400 }
      );
    }
    
    // Get email template
    let emailTemplate = emailTemplates[body.emailType as keyof typeof emailTemplates];
    let subject = body.subject;
    let content = body.content;
    
    // If template exists and not using custom template, use template's subject and content
    if (emailTemplate && !body.customTemplate) {
      subject = emailTemplate.subject || body.subject;
      // Always use template's HTML content for non-custom templates
      content = emailTemplate.template;
    } else if (body.customTemplate && body.content) {
      // Use custom template
      emailTemplate = {
        subject: body.subject,
        template: body.content
      };
      content = body.content;
    } else if (!emailTemplate) {
      // Template not found
      return NextResponse.json(
        { error: `Email template '${body.emailType}' not found. Available templates: ${Object.keys(emailTemplates).join(', ')}` },
        { status: 400 }
      );
    }
    
    // Ensure emailTemplate has template property
    if (!emailTemplate || !emailTemplate.template) {
      return NextResponse.json(
        { error: 'Invalid email template configuration' },
        { status: 400 }
      );
    }
    
    // Send emails in smaller batches to avoid Gmail rate limits
    const batchSize = 5; // Reduced from 10 to 5
    const batches = [];
    
    for (let i = 0; i < filteredClients.length; i += batchSize) {
      batches.push(filteredClients.slice(i, i + batchSize));
    }
    
    const results = {
      totalClients: filteredClients.length,
      emailsSent: 0,
      emailsFailed: 0,
      failedEmails: [] as any[],
      batchResults: [] as any[]
    };
    
    // Process each batch
    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      const batch = batches[batchIndex];
      const batchResult = {
        batchNumber: batchIndex + 1,
        emailsSent: 0,
        emailsFailed: 0,
        failedEmails: [] as any[]
      };
      
      // Send emails in this batch
      for (const client of batch) {
        try {
          const personalizedSubject = personalizeEmail(subject, client);
          const personalizedContent = personalizeEmail(content, client, {
            content: body.content,
            promotionTitle: body.content.includes('promotion') ? 'Special Offer' : '',
            discountAmount: '10%',
            promoCode: 'SAVE10',
            expirationDate: 'end of month',
            lastServiceType: 'recent'
          });
          
          await emailService.sendEmail(
            client.email,
            personalizedSubject,
            '', // text version
            personalizedContent
          );
          
          results.emailsSent++;
          batchResult.emailsSent++;
          
          // Rate limiting is now handled in EmailService
          
        } catch (error) {
          console.error(`Failed to send email to ${client.email}:`, error);
          results.emailsFailed++;
          batchResult.emailsFailed++;
          results.failedEmails.push({
            email: client.email,
            name: `${client.firstName} ${client.lastName}`,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
          batchResult.failedEmails.push({
            email: client.email,
            name: `${client.firstName} ${client.lastName}`,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }
      }
      
      results.batchResults.push(batchResult);
      
      // Add delay between batches to respect Gmail limits
      // Reduced from 10s to 5s to reduce total processing time
      if (batchIndex < batches.length - 1) {
        console.log(`Batch ${batchIndex + 1} completed. Waiting 5 seconds before next batch...`);
        await new Promise(resolve => setTimeout(resolve, 5000)); // 5 seconds between batches
      }
    }
    
    return NextResponse.json({
      success: true,
      message: `Bulk email campaign completed. ${results.emailsSent} emails sent successfully.`,
      results
    });
    
  } catch (error) {
    console.error('Bulk email error:', error);
    return NextResponse.json(
      { error: 'Failed to send bulk emails', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Use the existing loadClientsFromFile function to avoid external HTTP calls
    const CLIENT_DATA_FILE = path.join(process.cwd(), 'data', 'clients.json');
    
    // Ensure data directory exists
    const ensureDataDirectory = () => {
      const dataDir = path.dirname(CLIENT_DATA_FILE);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
    };
    
    // Load clients from file
    let allClients: any[] = [];
    try {
      ensureDataDirectory();
      if (fs.existsSync(CLIENT_DATA_FILE)) {
        const data = fs.readFileSync(CLIENT_DATA_FILE, 'utf8');
        allClients = JSON.parse(data);
      }
    } catch (error) {
      console.error('Error loading clients from file:', error);
    }
    
    // If no clients found, use empty array (stats will show zeros)
    if (allClients.length === 0) {
      console.log('No clients found in file, returning empty stats');
    }
    
    // Get client statistics
    const stats = {
      totalClients: allClients.length,
      clientsWithEmail: allClients.filter((c: any) => c.email && c.email.trim() !== '').length,
      residentialClients: allClients.filter((c: any) => c.tags?.includes('Residential') || (typeof c.tags === 'string' && c.tags.includes('Residential'))).length,
      commercialClients: allClients.filter((c: any) => c.tags?.includes('Commercial') || (typeof c.tags === 'string' && c.tags.includes('Commercial'))).length,
      counties: [...new Set(allClients.map((c: any) => c.county).filter(Boolean))],
      tags: [...new Set(allClients.flatMap((c: any) => {
        if (!c.tags) return [];
        const tagString = typeof c.tags === 'string' ? c.tags : String(c.tags);
        return tagString.split(',').map((tag: string) => tag.trim()).filter(Boolean);
      }))]
    };
    
    return NextResponse.json({
      success: true,
      stats,
      availableTemplates: Object.keys(emailTemplates)
    });
    
  } catch (error) {
    console.error('Error getting bulk email stats:', error);
    return NextResponse.json(
      { error: 'Failed to get bulk email statistics', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
