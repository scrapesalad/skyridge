import nodemailer from 'nodemailer';

const DEFAULT_CC = [
  'chris@skyridgeco.com',
  'garrett@skyridgeco.com',
  'jordan@skyridgeco.com',
  'jeremyuwg@gmail.com',
];

function parseList(value) {
  if (!value) return [];
  return value
    .split(/[,\s;]+/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

function unique(list) {
  const seen = new Set();
  const out = [];
  for (const item of list) {
    const key = String(item).trim().toLowerCase();
    if (!key) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(String(item).trim());
  }
  return out;
}

function readArg(name) {
  const prefix = `--${name}=`;
  const hit = process.argv.find((a) => a.startsWith(prefix));
  return hit ? hit.slice(prefix.length) : null;
}

const service = readArg('service') || 'roof-replacement';
const dryRun = process.argv.includes('--dry-run');

const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_APP_PASSWORD = process.env.SMTP_APP_PASSWORD || '';
const EMAIL_TO = process.env.EMAIL_TO || '';
const EMAIL_CC = process.env.EMAIL_CC || '';

if (!SMTP_USER || !SMTP_APP_PASSWORD || !EMAIL_TO) {
  console.error('Missing env vars: SMTP_USER, SMTP_APP_PASSWORD, EMAIL_TO (and optionally EMAIL_CC)');
  process.exit(1);
}

const to = unique(parseList(EMAIL_TO));
const cc = unique([...DEFAULT_CC, ...parseList(EMAIL_CC)]);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: SMTP_USER, pass: SMTP_APP_PASSWORD },
});

const subject = `[TEST] Contact form CC verification (${service})`;
const text = [
  'This is a test email to verify CC recipients for Sky Ridge Roofing contact form.',
  '',
  `Selected service: ${service}`,
  `To: ${to.join(', ')}`,
  `CC: ${cc.join(', ')}`,
  '',
  `Sent at: ${new Date().toISOString()}`,
].join('\n');

if (dryRun) {
  console.log('DRY RUN: would send email with:');
  console.log({ to, cc, subject });
  process.exit(0);
}

const info = await transporter.sendMail({
  from: SMTP_USER,
  to,
  cc,
  subject,
  text,
});

console.log('Sent test email.');
console.log({
  messageId: info.messageId,
  accepted: info.accepted,
  rejected: info.rejected,
  to,
  cc,
});

