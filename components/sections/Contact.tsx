"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";
import emailjs from "@emailjs/browser";
import { COMPANY } from "../../lib/constants/company";
import { EMAILJS_CONFIG, RECIPIENT_EMAIL, type EmailTemplateParams } from "../../lib/config/emailjs";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Check if EmailJS is properly configured
      if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Prepare template parameters
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: RECIPIENT_EMAIL,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams as Record<string, unknown>,
        EMAILJS_CONFIG.publicKey
      );

      setSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
      
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm text-xs uppercase tracking-[2px] font-medium text-gray-300">
              Let's Build Something Amazing
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Let's build your next release
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Tell us about your goals and constraints. We'll reply with a realistic plan, timeline, and cost estimate.
          </p>
          
          {/* Website link */}
          <motion.a
            href={COMPANY.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-br from-magenta-500/10 to-purple-500/10 border border-magenta-500/30 hover:border-magenta-500/60 backdrop-blur-sm transition-all group"
          >
            <Globe className="w-5 h-5 text-magenta-400 group-hover:rotate-12 transition-transform" />
            <span className="text-white font-medium">{COMPANY.url}</span>
            <ExternalLink className="w-4 h-4 text-magenta-400 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Contact Form - Centered */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="relative rounded-2xl p-8 md:p-10 bg-gradient-to-br from-black/60 to-black/30 border border-purple-500/30 backdrop-blur-xl max-w-2xl mx-auto"
          style={{
            boxShadow: "0 0 60px rgba(138, 43, 226, 0.15)",
          }}
        >
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-purple-500/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-purple-500/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Project brief</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                required
                className="w-full rounded-xl border border-purple-500/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
                placeholder="Tell us about your project, timeline, and budget..."
              />
            </div>
            
            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading || sent}
              whileHover={!isLoading && !sent ? { scale: 1.02 } : {}}
              whileTap={!isLoading && !sent ? { scale: 0.98 } : {}}
              className={`w-full rounded-xl text-white font-semibold py-4 shadow-lg transition-all ${
                sent
                  ? 'bg-green-600 shadow-green-500/30'
                  : isLoading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-cyan-500 shadow-purple-500/30 hover:shadow-purple-500/50'
              }`}
            >
              {isLoading ? 'Sending...' : sent ? "Thanks — we'll reply soon ✓" : 'Send message'}
            </motion.button>
            
            <p className="text-xs text-gray-500 text-center">
              By sending, you agree to be contacted about your inquiry.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
