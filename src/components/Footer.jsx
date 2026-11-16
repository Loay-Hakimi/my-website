import { AudioWaveform } from 'lucide-react';
import { socialLinks } from '../data/socialData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#hero" className="flex items-center gap-2 text-base font-bold text-white">
          <AudioWaveform className="h-5 w-5 text-electric-400" />
          <span>
            Loay<span className="text-electric-400">.</span>
          </span>
        </a>

        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Loay. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-slate-400 transition-colors hover:text-electric-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
