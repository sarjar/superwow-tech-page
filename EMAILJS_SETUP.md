# EmailJS Setup Instructions

This project uses EmailJS to handle contact form submissions. Follow these steps to set up EmailJS:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
To: {{to_email}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Note down the **Template ID**

## 4. Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** in the API Keys section

## 5. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email (sarunas.jaraminas@gmail.com) for the message

## Troubleshooting

- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify that your EmailJS service is active
- Ensure the template variables match the ones used in the code

## Security Notes

- Never commit your `.env.local` file to version control
- The public key is safe to use in client-side code
- EmailJS handles the email sending securely
