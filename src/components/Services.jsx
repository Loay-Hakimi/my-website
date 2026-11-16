import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const [billing, setBilling] = useState('monthly');

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">Services</span>
          <h2 className="section-title mt-3">Three Pillars, One Partner</h2>
          <p className="mt-4 text-slate-400">
            Voiceover talent, full-stack engineering, and social media growth &mdash;
            tailored packages for every stage of your project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span
            className={`text-sm font-medium transition-colors ${
              billing === 'monthly' ? 'text-white' : 'text-slate-500'
            }`}
          >
            Per Project / Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={billing === 'yearly'}
            onClick={() => setBilling((b) => (b === 'monthly' ? 'yearly' : 'monthly'))}
            className="relative h-7 w-14 shrink-0 rounded-full bg-slate-700 transition-colors"
          >
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 left-1 h-5 w-5 rounded-full bg-electric-400"
              style={{ x: billing === 'yearly' ? 24 : 0 }}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              billing === 'yearly' ? 'text-white' : 'text-slate-500'
            }`}
          >
            Bulk / Annual
            <span className="ml-2 rounded-full bg-electric-500/10 px-2 py-0.5 text-xs text-electric-400">
              Save more
            </span>
          </span>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const price = service.pricing[billing];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card flex flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:border-electric-500/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{service.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${price.price}</span>
                  <span className="text-sm text-slate-500">{price.label}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="btn-secondary mt-8 w-full">
                  Get Started
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
