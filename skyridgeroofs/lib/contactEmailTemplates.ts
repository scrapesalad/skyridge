import { absoluteUrl } from '@/lib/seo';
import { BUSINESS } from '@/lib/site';

export type ContactSubmission = {
  firstName?: string;
  lastName?: string;
  email: string;
  telephone: string;
  address?: string;
  city?: string;
  zipCode?: string;
  service?: string;
  message?: string;
  formType?: string;
};

type ServiceTemplate = {
  label: string;
  serviceUrl?: string;
  businessSubject: (displayName: string) => string;
  customerSubject: string;
  customerHeadline: string;
  customerNextSteps: string[];
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function displayName(firstName?: string, lastName?: string): string {
  const name = `${firstName ?? ''} ${lastName ?? ''}`.trim();
  return name || 'Website Lead';
}

function serviceTemplate(service?: string): ServiceTemplate {
  switch (service) {
    case 'roof-replacement':
      return {
        label: 'Roof Replacement',
        serviceUrl: '/services/roof-replacement',
        businessSubject: (name) => `[Roof Replacement] New lead: ${name}`,
        customerSubject: 'We received your roof replacement request',
        customerHeadline: 'Thanks — we’ll help you plan your roof replacement.',
        customerNextSteps: [
          'We’ll review your details and follow up within 24 hours.',
          'If possible, have a few photos ready (overall roof + any problem areas).',
          'If you know your roof age and material type, that helps us estimate options.',
        ],
      };
    case 'roof-installation':
      return {
        label: 'Roof Installation',
        serviceUrl: '/services/roof-installation',
        businessSubject: (name) => `[Roof Installation] New lead: ${name}`,
        customerSubject: 'We received your roof installation request',
        customerHeadline: 'Thanks — we’ll help you plan your roof installation.',
        customerNextSteps: [
          'We’ll review your details and follow up within 24 hours.',
          'If this is new construction or a remodel, tell us your timeline and whether materials are already selected.',
          'If you have plans, measurements, or photos, reply with them so we can prepare accurately.',
        ],
      };
    case 'solar':
      return {
        label: 'Solar Installation',
        serviceUrl: '/services/solar',
        businessSubject: (name) => `[Solar] New lead: ${name}`,
        customerSubject: 'We received your solar request',
        customerHeadline: 'Thanks — we’ll help you plan solar with a roof-first approach.',
        customerNextSteps: [
          'We’ll follow up within 24 hours to confirm goals (bill reduction, backup power, new roof, etc.).',
          'If you know your roof age/material and average power bill, include that when you reply.',
          'If your roof is older or storm-damaged, we may recommend inspection/roof work before solar.',
        ],
      };
    case 'roof-repairs':
      return {
        label: 'Roof Repairs',
        serviceUrl: '/services/roof-repairs',
        businessSubject: (name) => `[Roof Repair] New lead: ${name}`,
        customerSubject: 'We received your roof repair request',
        customerHeadline: 'Thanks — we’ll help get your roof repaired quickly.',
        customerNextSteps: [
          'We’ll follow up to confirm symptoms and schedule an inspection.',
          'If there’s an active leak, place a bucket and move valuables away from the area.',
          'Share any photos of the leak/damage so we can prep the right materials.',
        ],
      };
    case 'insurance-claims':
      return {
        label: 'Insurance Claims',
        serviceUrl: '/services/insurance-claims',
        businessSubject: (name) => `[Insurance Claim] New lead: ${name}`,
        customerSubject: 'We received your insurance claim request',
        customerHeadline: 'Thanks — we can help you navigate the insurance process.',
        customerNextSteps: [
          'We’ll coordinate an inspection and document storm-related damage.',
          'If you already filed a claim, reply with the claim number and carrier name.',
          'Avoid repairs that could remove evidence until we’ve documented the damage.',
        ],
      };
    case 'additional-services':
      return {
        label: 'Additional Services',
        serviceUrl: '/services/additional-services',
        businessSubject: (name) => `[Additional Services] New lead: ${name}`,
        customerSubject: 'We received your request',
        customerHeadline: 'Thanks — we’ll follow up about the service you requested.',
        customerNextSteps: [
          'We’ll follow up within 24 hours to confirm scope and schedule.',
          'If you have photos or measurements, include them when you reply.',
        ],
      };
    case 'inspection':
      return {
        label: 'Roof Inspection',
        serviceUrl: '/services',
        businessSubject: (name) => `[Roof Inspection] New lead: ${name}`,
        customerSubject: 'We received your roof inspection request',
        customerHeadline: 'Thanks — we’ll schedule your roof inspection.',
        customerNextSteps: [
          'We’ll follow up to confirm the address and a good time for the visit.',
          'If access is gated or there are pets, let us know so we can plan accordingly.',
        ],
      };
    case 'other':
    default:
      return {
        label: service ? service : 'General Inquiry',
        serviceUrl: '/services',
        businessSubject: (name) => `[Website Lead] New inquiry: ${name}`,
        customerSubject: 'We received your message',
        customerHeadline: 'Thanks — we’ll be in touch shortly.',
        customerNextSteps: [
          'We’ll follow up within 24 hours.',
          'For urgent issues, call us at 801-252-6936.',
        ],
      };
  }
}

function formatTextSummary(submission: ContactSubmission, serviceLabel: string): string {
  const lines: string[] = [];
  lines.push(`New ${submission.formType || 'Contact'} Form Submission`);
  lines.push('');
  lines.push('Contact Information:');
  lines.push(`- Name: ${submission.firstName || ''} ${submission.lastName || ''}`.trim());
  lines.push(`- Email: ${submission.email}`);
  lines.push(`- Phone: ${submission.telephone}`);
  if (submission.address) lines.push(`- Address: ${submission.address}`);
  if (submission.city) lines.push(`- City: ${submission.city}`);
  if (submission.zipCode) lines.push(`- ZIP Code: ${submission.zipCode}`);
  if (submission.service) lines.push(`- Service Needed: ${serviceLabel}`);
  if (submission.message) {
    lines.push('');
    lines.push('Message:');
    lines.push(submission.message);
  }
  return lines.join('\n');
}

export function buildContactEmailContent(submission: ContactSubmission) {
  const template = serviceTemplate(submission.service);
  const name = displayName(submission.firstName, submission.lastName);
  const summaryText = formatTextSummary(submission, template.label);

  const safe = {
    firstName: escapeHtml(submission.firstName ?? ''),
    lastName: escapeHtml(submission.lastName ?? ''),
    email: escapeHtml(submission.email),
    telephone: escapeHtml(submission.telephone),
    address: submission.address ? escapeHtml(submission.address) : '',
    city: submission.city ? escapeHtml(submission.city) : '',
    zipCode: submission.zipCode ? escapeHtml(submission.zipCode) : '',
    message: submission.message ? escapeHtml(submission.message).replace(/\n/g, '<br>') : '',
    serviceLabel: escapeHtml(template.label),
    formType: escapeHtml(submission.formType || 'Contact'),
  };

  const serviceLink = template.serviceUrl ? absoluteUrl(template.serviceUrl) : absoluteUrl('/services');

  const businessHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <h2 style="color: #1e40af; margin: 0 0 12px 0;">New ${safe.formType} Submission</h2>
      <p style="margin: 0 0 18px 0; color: #374151;">
        <strong>Service:</strong> ${safe.serviceLabel}
        &nbsp;·&nbsp;
        <a href="${serviceLink}" style="color: #1e40af; text-decoration: none; font-weight: bold;">View service page</a>
      </p>
      <div style="background-color: #f3f4f6; padding: 18px; border-radius: 8px;">
        <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${safe.firstName} ${safe.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${safe.telephone}">${safe.telephone}</a></p>
        ${safe.address ? `<p><strong>Address:</strong> ${safe.address}</p>` : ''}
        ${safe.city ? `<p><strong>City:</strong> ${safe.city}</p>` : ''}
        ${safe.zipCode ? `<p><strong>ZIP Code:</strong> ${safe.zipCode}</p>` : ''}
        ${submission.service ? `<p><strong>Service Needed:</strong> ${safe.serviceLabel}</p>` : ''}
        ${safe.message ? `<div style="margin-top: 14px;"><strong>Message:</strong><p style="background-color: white; padding: 12px; border-radius: 6px; margin-top: 8px;">${safe.message}</p></div>` : ''}
      </div>
      <p style="color: #6b7280; font-size: 12px; margin-top: 18px;">
        Sent from ${BUSINESS.name} website form.
      </p>
    </div>
  `.trim();

  const customerHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <h2 style="color: #1e40af; margin: 0 0 12px 0;">${template.customerHeadline}</h2>
      <p style="color: #374151; margin: 0 0 16px 0;">
        We’ve received your request for <strong>${safe.serviceLabel}</strong>. A team member will reach out within 24 hours.
      </p>

      <div style="background-color: #f3f4f6; padding: 18px; border-radius: 8px; margin: 18px 0;">
        <h3 style="color: #374151; margin-top: 0;">Next steps</h3>
        <ul style="color: #374151; margin: 0; padding-left: 18px; line-height: 1.7;">
          ${template.customerNextSteps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
        </ul>
      </div>

      <div style="background-color: #dbeafe; padding: 14px; border-radius: 8px; margin: 18px 0;">
        <p style="margin: 0 0 6px 0;"><strong>Need immediate help?</strong></p>
        <p style="margin: 0;">Call us at <a href="tel:8012526936" style="color: #1e40af; font-weight: bold;">801-252-6936</a></p>
      </div>

      <p style="color: #374151; margin: 0 0 10px 0;">
        Want to learn more about this service? <a href="${serviceLink}" style="color: #1e40af; font-weight: bold; text-decoration: none;">View details here</a>.
      </p>

      <p style="color: #6b7280; font-size: 12px; margin-top: 22px;">
        ${BUSINESS.name} · Serving all of Utah
      </p>
    </div>
  `.trim();

  return {
    template,
    name,
    summaryText,
    businessHtml,
    customerHtml,
    businessSubject: template.businessSubject(name),
    customerSubject: template.customerSubject,
  };
}
