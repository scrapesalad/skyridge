import { emailService } from './EmailService';

interface QuoteData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  wasteType: string;
  dumpsterSize: string;
  deliveryDate: string;
  pickupDate: string;
  additionalInfo?: string;
  source?: string;
}

class AutomatedQuoteService {
  // Calculate pricing based on dumpster size
  private calculatePricing(dumpsterSize: string) {
    const size = parseInt(dumpsterSize) || 15;
    
    // Base pricing structure
    const pricing = {
      10: { oneDay: 200, sevenDay: 250, perTon: 55 },
      15: { oneDay: 250, sevenDay: 300, perTon: 55 },
      20: { oneDay: 300, sevenDay: 350, perTon: 55 },
      30: { oneDay: 400, sevenDay: 450, perTon: 55 },
      40: { oneDay: 500, sevenDay: 550, perTon: 55 }
    };

    // Use closest size if exact size not found
    const availableSizes = Object.keys(pricing).map(Number);
    const closestSize = availableSizes.reduce((prev, curr) => 
      Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev
    );

    return pricing[closestSize as keyof typeof pricing] || pricing[15];
  }

  // Generate personalized quote response email
  async sendQuoteResponse(data: QuoteData): Promise<boolean> {
    try {
      const pricing = this.calculatePricing(data.dumpsterSize);
      const dumpsterSizeText = `${data.dumpsterSize} yard`;
      
      const subject = `Your ${dumpsterSizeText} Dumpster Quote - Icon Dumpsters`;

        const signature = `
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:12px">
            <tr>
              <td style="vertical-align:top;padding-right:10px">
                <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters - Utah dumpster rental" width="48" height="48" style="display:block;border:0;outline:none;text-decoration:none;border-radius:8px" />
              </td>
              <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.4;color:#111827">
                <div style="font-weight:600">Best regards,</div>
                Manager | Icon Dumpsters<br/><br/>
                📞 (801) 918-6000<br/>
                📧 icondumpsters@gmail.com<br/>
                🌐 icondumpsters.com<br/><br/>
                <a href="https://icondumpsters.com/rating" style="color:#0d9488;text-decoration:underline">Leave us a review</a><br/>
                <a href="https://icondumpsters.com/rating" style="color:#0d9488;text-decoration:underline">Icondumpsters.com/rating</a><br/><br/>
                <a href="https://www.facebook.com/p/Icon-Dumpsters-61557014799828/" style="color:#0d9488;text-decoration:underline">Follow us on Facebook</a><br/>
                <a href="https://www.facebook.com/p/Icon-Dumpsters-61557014799828/" style="color:#0d9488;text-decoration:underline">Facebook.com/IconDumpsters</a><br/><br/>
                <div style="margin-top:6px;color:#0d9488;font-weight:600">♻ Affordable | Fast | Local</div>
              </td>
            </tr>
          </table>`;

      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${subject}</title>
          <style>
            body { font-family: Arial, sans-serif; color: #111827; }
            .container { max-width: 640px; margin: 0 auto; padding: 24px; }
            h1 { color: #0d9488; }
            p { line-height: 1.6; }
            .pricing-box { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0d9488; }
            .pricing-item { margin: 10px 0; font-size: 16px; }
            .highlight { color: #0d9488; font-weight: bold; }
            .cta-button { display: inline-block; background-color: #0d9488; color: #ffffff !important; padding: 12px 18px; border-radius: 8px; text-decoration: none; font-weight: 700; margin-top: 16px; }
            .details-section { background-color: #f8f9fa; padding: 16px; border-radius: 8px; margin: 16px 0; }
            .details-section h3 { margin-top: 0; color: #0d9488; }
            .details-section ul { margin: 8px 0; padding-left: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div style="text-align:center;margin-bottom:12px">
              <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" width="96" height="96" alt="Icon Dumpsters - Utah dumpster rental" style="display:inline-block;border:0;outline:none;text-decoration:none;border-radius:12px" />
            </div>
            
            <h1>Thank you for filling out our online form</h1>
            
            <p>Hi ${data.firstName},</p>
            
            <p>We can definitely provide you with the <span class="highlight">${dumpsterSizeText}</span> dumpster rental you requested. Here is an estimate for 1 day and 7 days to give you an idea of our pricing:</p>
            
            <div class="pricing-box">
              <h3 style="margin-top: 0; color: #0d9488;">${dumpsterSizeText} Dumpster Pricing:</h3>
              <div class="pricing-item">
                <strong>1 day:</strong> $${pricing.oneDay} + $${pricing.perTon}/ton
              </div>
              <div class="pricing-item">
                <strong>7 days:</strong> $${pricing.sevenDay} + $${pricing.perTon}/ton
              </div>
              <p style="margin: 16px 0 0 0; font-size: 14px; color: #6b7280;">
                *Final pricing may vary based on location, waste type, and current market rates
              </p>
            </div>
            
            <p>If you provide me with these additional details, then I can get this added to our schedule for you:</p>
            
            <div class="details-section">
              <h3>Booking Details Needed:</h3>
              <ul>
                <li><strong># of days:</strong> [Please specify rental duration]</li>
                <li><strong>Full Name:</strong> [Your full name]</li>
                <li><strong>Email:</strong> [Your email address]</li>
                <li><strong>Phone Number:</strong> [Your phone number]</li>
                <li><strong>Service Address:</strong> [Complete delivery address]</li>
                <li><strong>AM or PM pickup and dropoff time:</strong> [Preferred delivery/pickup time]</li>
              </ul>
            </div>
            
            <p>Once you provide these details, we'll get your ${dumpsterSizeText} dumpster scheduled and delivered to your location in ${data.zipCode || 'your area'}.</p>
            
            <p>You can reply to this email with your booking details, or call us directly at <a href="tel:+18019186000" style="color:#0d9488;text-decoration:underline">(801) 918-6000</a>.</p>
            
            <a href="tel:+18019186000" class="cta-button">Call (801) 918-6000</a>
            
            <div class="details-section">
              <h3>Your Request Details:</h3>
              <ul>
                <li><strong>Delivery Date:</strong> ${data.deliveryDate || 'Not specified'}</li>
                <li><strong>Pickup Date:</strong> ${data.pickupDate || 'Not specified'}</li>
                <li><strong>Waste Type:</strong> ${data.wasteType || 'Not specified'}</li>
                <li><strong>Zip Code:</strong> ${data.zipCode || 'Not specified'}</li>
                ${data.additionalInfo ? `<li><strong>Additional Info:</strong> ${data.additionalInfo}</li>` : ''}
              </ul>
            </div>
            
            <p style="margin-top:16px;">${signature}</p>
          </div>
        </body>
        </html>
      `;

      const result = await emailService.sendEmail(
        data.email,
        subject,
        '',
        html
      );

      console.log(`AutomatedQuoteService: Quote response sent to ${data.email} for ${dumpsterSizeText} dumpster`);
      return !!result;
    } catch (error) {
      console.error('AutomatedQuoteService: Failed to send quote response:', error);
      return false;
    }
  }
}

export default AutomatedQuoteService;
export const automatedQuoteService = new AutomatedQuoteService();
