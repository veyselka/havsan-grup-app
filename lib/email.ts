import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: EmailOptions): Promise<void> {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
      replyTo,
    });

    console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email');
  }
}

// Verify SMTP connection on startup (optional)
export async function verifyEmailConnection(): Promise<boolean> {
  try {
    await transporter.verify();
    console.log('SMTP server is ready to send emails');
    return true;
  } catch (error) {
    console.error('SMTP connection failed:', error);
    return false;
  }
}
