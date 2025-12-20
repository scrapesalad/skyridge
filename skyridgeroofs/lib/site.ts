// Ensure we always use skyridgeroofs.com (no www)
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') || 'https://skyridgeroofs.com';
export const SITE_URL = rawUrl.replace(/^https?:\/\/(www\.)?/, 'https://');

export const BUSINESS = {
  name: 'Sky Ridge Roofing',
  legalName: 'Sky Ridge Roofing LLC',
  phone: '801-252-6936',
  state: 'UT',
  license: '14235218-5501',
};

