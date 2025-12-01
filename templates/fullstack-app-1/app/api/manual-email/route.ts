import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../lib/EmailService';

interface ManualEmailRequest {
  emailType: string;
  subject: string;
  content: string;
  manualEmails: string;
  customTemplate?: boolean;
}

// Email templates (same as bulk-email API)
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
          body { font-family: Arial, sans-serif; color: #111827; line-height: 1.6; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; }
          .header { text-align: center; margin-bottom: 32px; }
          .logo { width: 96px; height: 96px; border-radius: 12px; }
          h1 { color: #0d9488; margin-bottom: 16px; }
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
            <h1>Icon Dumpsters Newsletter</h1>
          </div>
          
          <div class="content">
            <h2>What's New This Month</h2>
            <p>Hi {firstName},</p>
            <p>Thank you for being a valued Icon Dumpsters customer! Here's what's happening this month:</p>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0d9488;">
              <h3>🎯 Special Newsletter Offer</h3>
              <p>Get <strong>10% off</strong> your next dumpster rental when you book before the end of the month. Simply mention this email when you call us at <strong>(801) 918-6000</strong>!</p>
              <div style="text-align: center; margin-top: 16px;">
                <a href="tel:8019186000" class="cta-button">Call Now & Save 10%</a>
              </div>
            </div>
            
            <h3>🚛 Service Updates</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0;">
              <div style="background: #f9fafb; padding: 16px; border-radius: 8px; text-align: center;">
                <strong>Utah Service Areas</strong><br>
                Available in all Utah service areas
              </div>
              <div style="background: #f9fafb; padding: 16px; border-radius: 8px; text-align: center;">
                <strong>Same-Day Delivery</strong><br>
                From 6am-2pm
              </div>
              <div style="background: #f9fafb; padding: 16px; border-radius: 8px; text-align: center;">
                <strong>Specialized Dirt/Concrete</strong><br>
                Dumpsters for construction projects
              </div>
              <div style="background: #f9fafb; padding: 16px; border-radius: 8px; text-align: center;">
                <strong>24/7 Support</strong><br>
                Always here when you need us
              </div>
            </div>
            
            <h3>🌟 Customer Spotlight</h3>
            <p>This month we're featuring {county} County projects. We've helped over 500 customers in your area with their waste management needs!</p>
            
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #0d9488;">
              <h3 style="color: #0d9488; margin-top: 0;">📝 Featured Blog: Decluttering Before Your Utah Move</h3>
              <p style="margin-bottom: 16px; font-style: italic; color: #6b7280;">Moving to or within Utah? Here's how to make your transition smooth and stress-free.</p>
              
              <p><strong>Moving is the perfect time to declutter and get organized.</strong> It's often only when you start packing that you realize how much stuff you own and how much you no longer need. Downsizing beforehand makes packing, unpacking, and setting up in your new Utah home faster and less overwhelming.</p>
              
              <h4 style="color: #0d9488;">🗑️ What Shouldn't Make the Move?</h4>
              <p>As you go through your belongings, you'll likely find plenty of things that have started collecting dust:</p>
              <ul style="margin: 12px 0;">
                <li>Outdated or damaged clothing</li>
                <li>Expired pantry items and unused kitchen gadgets</li>
                <li>Unused or broken furniture</li>
                <li>Paper clutter, including old documents and magazines</li>
                <li>Outdated or broken electronics</li>
              </ul>
              
              <h4 style="color: #0d9488;">🚛 Make Your Utah Move EZ with Icon Dumpsters</h4>
              <p>Decluttering before a move is one of the best ways to minimize stress and reduce packing time and moving costs. Start fresh in your new Utah home with only the things you need!</p>
              
              <p>Junk piles up fast, and dealing with years of accumulated stuff can become overwhelming. If you're facing a large home cleanout before your move, a dumpster rental is the fastest, most efficient way to handle bulk disposal in one go.</p>
              
              <p><strong>With Icon Dumpsters, you don't have to make endless trips to the landfill or stress about what to do with large, unwanted items.</strong> We deliver the dumpster, you fill it, and we haul it away—it's that simple!</p>
              
              <div style="text-align: center; margin-top: 20px;">
                <a href="tel:8019186000" class="cta-button">Call to Get Your Moving Dumpster</a>
              </div>
            </div>
            
            <div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3>📞 Need a Dumpster? We're Here to Help!</h3>
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
            <h1>Thank You!</h1>
          </div>
          
          <div class="content">
            <p>Hi there,</p>
            
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
            <p>Hi there,</p>
            
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
  
  'follow_up': {
    subject: "We'd love to serve you again - Icon Dumpsters",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>We'd Love to Serve You Again - Icon Dumpsters</title>
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
            <h1>We'd Love to Serve You Again!</h1>
            <p style="color: #6b7280; font-size: 18px;">Your trusted waste management partner in Utah</p>
          </div>
          
          <div class="content">
            <h2>Hi {firstName},</h2>
            <p>We hope you're doing well! It's been a while since we last had the pleasure of serving you in {city}, and we wanted to reach out to see how you're doing.</p>
            
            <p>At Icon Dumpsters, we're committed to providing exceptional service to all our Utah customers, and we'd love the opportunity to help you with your next project.</p>
            
            <div class="highlight-box">
              <h3>🎉 Welcome Back Special</h3>
              <p>As a valued returning customer, we're offering you <strong>10% off</strong> your next dumpster rental! Simply mention this email when you call us at <strong>(801) 918-6000</strong> to claim your discount.</p>
              <div style="text-align: center; margin-top: 16px;">
                <a href="tel:8019186000" class="cta-button">Call Now & Save 10%</a>
              </div>
            </div>
            
            <h3>🚛 What's New Since We Last Saw You</h3>
            <div class="service-grid">
              <div class="service-item">
                <strong>Same-Day Delivery</strong><br>
                From 6am-2pm in all Utah areas
              </div>
              <div class="service-item">
                <strong>Specialized Dirt/Concrete</strong><br>
                Dumpsters for construction projects
              </div>
              <div class="service-item">
                <strong>Extended Service Areas</strong><br>
                Now serving more Utah communities
              </div>
              <div class="service-item">
                <strong>24/7 Support</strong><br>
                Always here when you need us
              </div>
            </div>
            
            <h3>🏠 Popular Projects We're Helping With</h3>
            <p>Whether you're planning a home renovation, yard cleanup, or construction project, we've got the perfect dumpster size for your needs. Here's what our {county} County customers are working on:</p>
            
            <ul style="margin: 16px 0;">
              <li><strong>Home Renovations:</strong> Kitchen and bathroom remodels</li>
              <li><strong>Yard Cleanup:</strong> Seasonal debris and landscaping projects</li>
              <li><strong>Construction:</strong> New builds and major renovations</li>
              <li><strong>Moving Prep:</strong> Decluttering before relocating</li>
              <li><strong>Business Cleanup:</strong> Office and commercial projects</li>
            </ul>
            
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #0d9488;">
              <h3 style="color: #0d9488; margin-top: 0;">💡 Why Choose Icon Dumpsters Again?</h3>
              <p style="margin-bottom: 16px; font-style: italic; color: #6b7280;">We're committed to making your experience even better than before.</p>
              
              <h4 style="color: #0d9488;">🌟 What Sets Us Apart</h4>
              <ul style="margin: 12px 0;">
                <li>Reliable same-day delivery and pickup</li>
                <li>Competitive pricing with no hidden fees</li>
                <li>Friendly, professional customer service</li>
                <li>Flexible rental periods to fit your schedule</li>
                <li>Clean, well-maintained dumpsters</li>
              </ul>
              
              <p><strong>We'd love to earn your business again and show you why Icon Dumpsters is Utah's trusted choice for waste management.</strong></p>
              
              <div style="text-align: center; margin-top: 20px;">
                <a href="tel:8019186000" class="cta-button">Call to Book Your Next Project</a>
              </div>
            </div>
            
            <div class="contact-info">
              <h3>📞 Ready for Your Next Project? We're Here to Help!</h3>
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
  
  promotion: {
    subject: "Limited Time Offer - Icon Dumpsters",
    template: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Limited Time Offer - Icon Dumpsters</title>
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
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            padding: 24px;
            border-radius: 12px;
            margin: 20px 0;
            border: 2px solid #f59e0b;
            text-align: center;
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
          .urgency-box {
            background: #fee2e2;
            padding: 16px;
            border-radius: 8px;
            margin: 16px 0;
            border-left: 4px solid #ef4444;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters" class="logo" />
            <h1>🎉 Limited Time Offer!</h1>
            <p style="color: #6b7280; font-size: 18px;">Don't miss out on this exclusive deal</p>
          </div>
          
          <div class="content">
            <h2>Hi {firstName},</h2>
            <p>We have an exciting offer just for you! As one of our valued customers in {city}, we want to make sure you don't miss out on this limited-time promotion.</p>
            
            <div class="highlight-box">
              <h2 style="color: #92400e; margin-top: 0; font-size: 32px;">🔥 20% OFF</h2>
              <h3 style="color: #92400e; margin: 16px 0;">Your Next Dumpster Rental</h3>
              <p style="font-size: 18px; margin: 16px 0;"><strong>Mention this email when you call!</strong></p>
              <p style="margin-bottom: 20px;">Valid for any dumpster size • No minimum rental period • Available in all Utah service areas</p>
              <div style="text-align: center; margin-top: 20px;">
                <a href="tel:8019186000" class="cta-button" style="background: #f59e0b !important; border-color: #f59e0b; font-size: 18px; padding: 20px 40px;">Call Now & Save 20%</a>
              </div>
            </div>
            
            <div class="urgency-box">
              <h3 style="color: #dc2626; margin: 0;">⏰ Offer Expires Soon!</h3>
              <p style="margin: 8px 0; font-weight: 600;">This promotion is only available for a limited time. Book now to secure your discount!</p>
            </div>
            
            <h3>🚛 Why This Offer is Perfect for You</h3>
            <div class="service-grid">
              <div class="service-item">
                <strong>Same-Day Delivery</strong><br>
                From 6am-2pm in {county} County
              </div>
              <div class="service-item">
                <strong>Flexible Rental</strong><br>
                Keep it as long as you need
              </div>
              <div class="service-item">
                <strong>All Sizes Available</strong><br>
                10, 15, 20, and 30-yard dumpsters
              </div>
              <div class="service-item">
                <strong>No Hidden Fees</strong><br>
                Transparent pricing guaranteed
              </div>
            </div>
            
            <h3>💡 Perfect for These Projects</h3>
            <p>This offer is ideal for any project you've been planning:</p>
            
            <ul style="margin: 16px 0;">
              <li><strong>Home Renovations:</strong> Kitchen, bathroom, or whole-house remodels</li>
              <li><strong>Yard Cleanup:</strong> Seasonal debris, landscaping, or tree removal</li>
              <li><strong>Construction:</strong> New builds, additions, or major repairs</li>
              <li><strong>Moving Prep:</strong> Decluttering before relocating</li>
              <li><strong>Business Projects:</strong> Office cleanouts or commercial renovations</li>
            </ul>
            
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #0d9488;">
              <h3 style="color: #0d9488; margin-top: 0;">🎯 How to Claim Your Discount</h3>
              <p style="margin-bottom: 16px; font-style: italic; color: #6b7280;">It's easy to take advantage of this limited-time offer.</p>
              
              <h4 style="color: #0d9488;">📞 Call Us Today</h4>
              <p>Call <strong>(801) 918-6000</strong> and mention this email to get your 20% discount on any dumpster rental.</p>
              
              <h4 style="color: #0d9488;">💬 What to Say</h4>
              <p>Simply tell us: "I received an email about the 20% off promotion" and we'll apply your discount immediately.</p>
              
              <h4 style="color: #0d9488;">⏰ Don't Wait</h4>
              <p>This offer is only available for a limited time, so call now to secure your discount!</p>
              
              <div style="text-align: center; margin-top: 20px;">
                <a href="tel:8019186000" class="cta-button">Call Now & Save 20%</a>
                <a href="tel:8019186000" class="cta-button">Get Free Quote</a>
              </div>
            </div>
            
            <div class="contact-info">
              <h3>📞 Questions? We're Here to Help!</h3>
              <p><strong>Call us at (801) 918-6000</strong> for immediate assistance and to book your discounted dumpster rental.</p>
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
  }
};

// Function to parse manual emails
function parseManualEmails(emailString: string): string[] {
  if (!emailString.trim()) return [];
  
  return emailString
    .split(/[,;\n]/)
    .map(email => email.trim())
    .filter(email => email && email.includes('@'));
}

export async function POST(request: NextRequest) {
  try {
    const body: ManualEmailRequest = await request.json();
    
    // Validate required fields
    if (!body.emailType || !body.subject || !body.manualEmails) {
      return NextResponse.json(
        { error: 'Email type, subject, and manual emails are required' },
        { status: 400 }
      );
    }
    
    // Parse email addresses
    const emailAddresses = parseManualEmails(body.manualEmails);
    
    if (emailAddresses.length === 0) {
      return NextResponse.json(
        { error: 'No valid email addresses found' },
        { status: 400 }
      );
    }
    
    // Get email template
    let emailTemplate = emailTemplates[body.emailType as keyof typeof emailTemplates];
    let subject = body.subject;
    let content = body.content;
    
    if (body.customTemplate && body.content) {
      // Use custom template
      emailTemplate = {
        subject: body.subject,
        template: body.content
      };
    }
    
    if (!emailTemplate) {
      return NextResponse.json(
        { error: 'Invalid email template type' },
        { status: 400 }
      );
    }
    
    // Send emails
    const results = {
      totalEmails: emailAddresses.length,
      emailsSent: 0,
      emailsFailed: 0,
      failedEmails: [] as any[]
    };
    
    // Personalization function (same as bulk-email API)
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

    for (const email of emailAddresses) {
      try {
        // Create a mock client object for personalization
        const mockClient = {
          firstName: email.split('@')[0], // Use email prefix as first name
          lastName: '',
          city: 'Utah',
          county: 'Salt Lake County'
        };
        
        // Personalize subject and content
        const personalizedSubject = personalizeEmail(subject, mockClient);
        const personalizedContent = personalizeEmail(emailTemplate.template, mockClient);
        
        await emailService.sendEmail(
          email,
          personalizedSubject,
          '', // text version
          personalizedContent
        );
        
        results.emailsSent++;
        
        // Rate limiting is now handled in EmailService
        
      } catch (error) {
        console.error(`Failed to send email to ${email}:`, error);
        results.emailsFailed++;
        results.failedEmails.push({
          email: email,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }
    
    return NextResponse.json({
      success: true,
      message: `Manual email campaign completed. ${results.emailsSent} emails sent successfully.`,
      results
    });
    
  } catch (error) {
    console.error('Manual email error:', error);
    return NextResponse.json(
      { error: 'Failed to send manual emails', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
