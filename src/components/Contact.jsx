import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { socialLinks } from '../data/socialData';

const initialForm = { name: '', email: '', message: '' };

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!form.message.trim()) {
    errors.message = 'Please add a short message.';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // TODO: Wire this up to your email service / API endpoint.
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title mt-3">Let&apos;s Build Something Great</h2>
          <p className="mt-4 text-slate-400">
            Have a project in mind? Send a message and I&apos;ll get back to you within
            24 hours.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card space-y-5 p-8"
            noValidate
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full rounded-lg border bg-slate-950/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? 'border-rose-500/60 focus:ring-rose-500/30'
                    : 'border-slate-700 focus:border-electric-500 focus:ring-electric-500/30'
                }`}
              />
              {errors.name && <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-lg border bg-slate-950/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-rose-500/60 focus:ring-rose-500/30'
                    : 'border-slate-700 focus:border-electric-500 focus:ring-electric-500/30'
                }`}
              />
              {errors.email && <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={`w-full resize-none rounded-lg border bg-slate-950/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? 'border-rose-500/60 focus:ring-rose-500/30'
                    : 'border-slate-700 focus:border-electric-500 focus:ring-electric-500/30'
                }`}
              />
              {errors.message && <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-primary w-full">
              <Send className="h-4 w-4" />
              Send Message
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-electric-400"
              >
                <CheckCircle2 className="h-4 w-4" />
                Thanks! Your message has been sent.
              </motion.p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card flex flex-col justify-between p-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">Prefer to connect directly?</h3>
              <p className="mt-2 text-sm text-slate-400">
                Reach out on any of these platforms &mdash; I&apos;m usually quick to
                respond.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-electric-500/50 hover:text-electric-400"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
