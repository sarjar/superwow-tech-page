// EmailJS Configuration
// You need to set these environment variables in your .env.local file
// Get these values from your EmailJS account at https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_ME || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};

// Email template parameters
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  to_email: string;
}

// Default recipient email
export const RECIPIENT_EMAIL = 'sarunas.jaraminas@gmail.com';
