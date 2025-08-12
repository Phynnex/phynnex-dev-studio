import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const rateLimitWindowMs = 60 * 1000;
const maxRequests = 5;
const ipRequests = new Map<string, { count: number; firstRequest: number }>();

const log = (level: 'info' | 'error', message: string, meta: Record<string, unknown> = {}) => {
  const safe: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(meta)) {
    if (v instanceof Error) {
      safe[k] = { message: v.message, stack: v.stack };
    } else {
      safe[k] = v;
    }
  }
  console.log(JSON.stringify({ level, message, ...safe }));
};

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry) {
    ipRequests.set(ip, { count: 1, firstRequest: now });
    return false;
  }
  if (now - entry.firstRequest > rateLimitWindowMs) {
    ipRequests.set(ip, { count: 1, firstRequest: now });
    return false;
  }
  entry.count += 1;
  return entry.count > maxRequests;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const ipHeader = (req.headers['x-forwarded-for'] as string) || '';
  const ip = ipHeader.split(',')[0]?.trim() || req.socket?.remoteAddress || '';
  if (rateLimited(ip)) {
    return res.status(429).json({ success: false, error: 'Too many requests' });
  }

  const { name, email, phone, message, token } = req.body || {};
  if (!name || !email || !message || !token) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email' });
  }

  try {
    // 1) Verify reCAPTCHA (skip only if you explicitly want to in dev)
    const secret = process.env.RECAPTCHA_SECRET;
    if (!secret) throw new Error('reCAPTCHA secret not configured');

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    });
    const verifyData = await verifyRes.json();
    log('info', 'recaptcha_verify', { verifyData }); // helpful in dev

    // With v3, also check action and score if provided
    if (
      !verifyData.success ||
      (verifyData.action && verifyData.action !== 'submit') ||
      (typeof verifyData.score === 'number' && verifyData.score < 0.5)
    ) {
      return res.status(400).json({ success: false, error: 'reCAPTCHA failed' });
    }

    // 2) Mail transport: use Ethereal automatically in dev if EMAIL_HOST unset
    let transporter;
    if (process.env.NODE_ENV !== 'production' && !process.env.EMAIL_HOST) {
      const test = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: { user: test.user, pass: test.pass },
      });
      log('info', 'using_ethereal', { user: test.user });
    } else {
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT || 587),
        secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for 587
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        requireTLS: true,
      });
    }

    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || ''}\n\n${message}`,
    });

    log('info', 'contact_form_submission', { ip, messageId: info.messageId });

    // If Ethereal, give preview URL in server logs
    // @ts-ignore
    if (nodemailer.getTestMessageUrl) {
      // @ts-ignore
      const url = nodemailer.getTestMessageUrl(info);
      if (url) log('info', 'ethereal_preview', { url });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    log('error', 'contact_form_error', { error });
    const msg =
      process.env.NODE_ENV === 'development' ? (error as Error).message : 'Failed to send email';
    return res.status(500).json({ success: false, error: msg });
  }
}
