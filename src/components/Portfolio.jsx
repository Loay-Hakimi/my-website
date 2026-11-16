import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';

const tagColors = {
  React: 'border-sky-500/40 bg-sky-500/10 text-sky-300',
  Go: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
  Python: 'border-yellow-500/40 bg-yellow-500/10 text-yellow-300',
  Security: 'border-rose-500/40 bg-rose-500/10 text-rose-300',
};

const defaultTag = 'border-slate-600/50 bg-slate-700/20 text-slate-300';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title mt-3">Selected Engineering Work</h2>
          <p className="mt-4 text-slate-400">
            A mix of full-stack applications, security tooling, and automation
            projects &mdash; built with React, Go, and Python.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group glass-card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-electric-500/50"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        tagColors[tag] || defaultTag
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-electric-400"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-electric-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
