import { motion } from 'framer-motion';
import { Headphones, Briefcase, ArrowDown } from 'lucide-react';
import WaveformBars from './WaveformBars';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.08)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="section-container flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow mb-6"
        >
          Voice Over &bull; Full-Stack Development &bull; Digital Growth
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Where{' '}
          <span className="bg-gradient-to-r from-electric-400 to-electric-glow bg-clip-text text-transparent">
            Sonic Artistry
          </span>{' '}
          Meets{' '}
          <span className="bg-gradient-to-r from-electric-400 to-electric-glow bg-clip-text text-transparent">
            Elite Code &amp; Digital Growth
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg"
        >
          I craft premium voiceovers, build secure full-stack products, and grow
          brands across social media &mdash; all under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href="#audio-vault" className="btn-primary w-full sm:w-auto">
            <Headphones className="h-5 w-5" />
            Listen to Demos
          </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto">
            <Briefcase className="h-5 w-5" />
            Hire Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-col items-center gap-3"
        >
          <WaveformBars className="h-10" />
          <a
            href="#audio-vault"
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-electric-400"
          >
            Scroll to explore
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
