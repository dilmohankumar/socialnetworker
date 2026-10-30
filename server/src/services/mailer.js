import nodemailer from 'nodemailer';

const DEFAULT_RECIPIENT = 'kdilmohan101@gmail.com';

let transporter;
function getTransporter() {
  if (transporter !== undefined) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST) {
    transporter = null;
    return transporter;
  }
  const port = Number(SMTP_PORT) || 587;
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });
  return transporter;
}

const esc = (v = '') =>
  String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const oneLine = (v = '') => String(v).replace(/[\r\n]+/g, ' ').trim();

const FIELDS = [
  ['Name', 'name'],
  ['Email', 'email'],
  ['Phone / WhatsApp', 'phone'],
  ['Company', 'company'],
  ['Website', 'website'],
  ['Service', 'service'],
  ['Budget', 'budget'],
  ['Message', 'message'],
];

/**
 * Emails a copy of a submitted lead to LEAD_NOTIFY_EMAIL.
 * Never throws: the lead is already saved in MongoDB, so a mail failure
 * (or missing SMTP config) is only logged and must not fail the visitor's form.
 */
export async function sendLeadNotification(lead) {
  const tx = getTransporter();
  if (!tx) {
    console.warn('[mail] SMTP_HOST not set — lead saved but no notification email sent.');
    return false;
  }
  const to = process.env.LEAD_NOTIFY_EMAIL || DEFAULT_RECIPIENT;
  const kind = lead.source === 'audit' ? 'Free audit request' : 'Contact enquiry';
  const rows = FIELDS.filter(([, k]) => lead[k]);

  try {
    await tx.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      replyTo: lead.email,
      subject: `New ${kind.toLowerCase()} from ${oneLine(lead.name)}`,
      text: [`${kind}`, '', ...rows.map(([label, k]) => `${label}: ${lead[k]}`)].join('\n'),
      html: `<h2>${kind}</h2><table cellpadding="6" style="border-collapse:collapse">${rows
        .map(([label, k]) => `<tr><td><b>${label}</b></td><td>${esc(lead[k]).replace(/\n/g, '<br>')}</td></tr>`)
        .join('')}</table>`,
    });
    return true;
  } catch (err) {
    console.error('[mail] Failed to send lead notification:', err.message);
    return false;
  }
}
