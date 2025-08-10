import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const rateLimitWindowMs = 60 * 1000;
const maxRequests = 5;
const ipRequests = new Map<string, { count: number; firstRequest: number }>();

const log = (level: 'info' | 'error', message: string, meta: Record<string, unknown> = {}) => {
  console.log(JSON.stringify({ level, message, ...meta }));
};

function rateLimited(ip: string): boolean {
  const current = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry) {
    ipRequests.set(ip, { count: 1, firstRequest: current });
    return false;
  }
  if (current - entry.firstRequest > rateLimitWindowMs) {
    ipRequests.set(ip, { count: 1, firstRequest: current });
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

  const ip =
    (req.headers?.['x-forwarded-for'] as string) || req.socket?.remoteAddress || '';
  if (rateLimited(ip)) {
    return res.status(429).json({ success: false, error: 'Too many requests' });
  }

  const { name, email, phone, message, token } = req.body;
  if (!name || !email || !message || !token) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email' });
  }

  try {
    const secret = process.env.RECAPTCHA_SECRET;
    if (!secret) {
      throw new Error('reCAPTCHA secret not configured');
    }

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(400).json({ success: false, error: 'reCAPTCHA failed' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    });

    log('info', 'contact_form_submission', { name, email, ip });
    return res.status(200).json({ success: true });
  } catch (error) {
    log('error', 'contact_form_error', { error });
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
