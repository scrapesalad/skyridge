function splitEmails(value: string): string[] {
  return value
    .split(/[,\s;]+/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

function uniqueEmails(emails: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const email of emails) {
    const normalized = email.trim().toLowerCase();
    if (!normalized) continue;
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    result.push(email.trim());
  }
  return result;
}

export const DEFAULT_CC_RECIPIENTS = [
  'chris@skyridgeco.com',
  'garrett@skyridgeco.com',
  'jordan@skyridgeco.com',
  'jeremyuwg@gmail.com',
] as const;

export function parseEmailList(value: string | undefined | null): string[] {
  if (!value) return [];
  return uniqueEmails(splitEmails(value));
}

export function buildCcRecipients(extraCc?: string | null): string[] {
  return uniqueEmails([...DEFAULT_CC_RECIPIENTS, ...parseEmailList(extraCc)]);
}

