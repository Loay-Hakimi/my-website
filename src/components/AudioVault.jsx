import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { audioCategories, audioTracks } from '../data/audioData';
import AudioPlayer from './AudioPlayer';

export default function AudioVault() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTrackId, setActiveTrackId] = useState(null);

  const filteredTracks =
    activeCategory === 'All'
      ? audioTracks
      : audioTracks.filter((track) => track.category === activeCategory);

  return (
    <section id="audio-vault" className="relative py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">Audio Vault</span>
          <h2 className="section-title mt-3">Listen to the Demo Reel</h2>
          <p className="mt-4 text-slate-400">
            A curated selection of voiceover work across commercials, corporate
            narration, IVR systems, and explainer videos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {audioCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'border-electric-500 bg-electric-500/10 text-electric-400'
                  : 'border-slate-700 text-slate-400 hover:border-electric-500/50 hover:text-electric-400'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredTracks.map((track, index) => (
              <motion.div
                key={track.id}
                layout
                className="min-w-0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AudioPlayer
                  track={track}
                  isActive={activeTrackId === track.id}
                  onPlay={() => setActiveTrackId(track.id)}
                  onEnded={() => setActiveTrackId(null)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
