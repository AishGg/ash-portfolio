import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!process.env.RESEND_API_KEY || !contactEmail) {
    console.error('Missing env vars: RESEND_API_KEY or CONTACT_EMAIL');
    return NextResponse.json(
      { error: 'Server misconfiguration. Please try again later.' },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof email !== 'string' || !EMAIL_REGEX.test(email) ||
    typeof message !== 'string' || !message.trim()
  ) {
    return NextResponse.json({ error: 'Invalid or missing fields.' }, { status: 400 });
  }

  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return NextResponse.json({ error: 'Input exceeds maximum length.' }, { status: 400 });
  }

  const safeName = name.trim();
  const safeMessage = message.trim();

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: [contactEmail],
    subject: `New message from ${escapeHtml(safeName)}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(safeMessage).replace(/\n/g, '<br>')}</p>
    `,
    replyTo: [email],
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}