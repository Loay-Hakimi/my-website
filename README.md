<div align="center">

# 🎙️ Loay — Portfolio Site

### Voice Over · Full-Stack Development · Digital Growth

[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)

> *Sonic artistry meets elite code & digital growth* — a single-page personal
> portfolio for voice-over work, full-stack development, and social media
> management.

</div>

---

## ✨ Overview

A fast, animated single-page portfolio built with **Vite + React 19** and
**Tailwind CSS 4**, featuring:

- 🎧 **Audio Vault** — an in-browser player with animated waveform bars for
  showcasing voice-over demos
- 💼 **Portfolio** — a filterable grid of development and security projects
- 🛠️ **Services** — voice over, full-stack development, and social media management
- ✉️ **Contact** — a direct way to get in touch
- 🎬 Smooth motion throughout via **Framer Motion**, with icons from **Lucide**

## 🧰 Tech Stack

| Area | Choice |
|------|--------|
| Build tool | Vite 8 |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Linting | ESLint |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Production build -> ./dist
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

## 🚢 Deployment

This repo ships ready-to-deploy configs for both hosts (SPA fallback included):

- **Vercel** — [`vercel.json`](vercel.json): import the repo at [vercel.com/new](https://vercel.com/new); framework **Vite**, build `npm run build`, output `dist` are auto-detected.
- **Netlify** — [`netlify.toml`](netlify.toml): "Add new site → Import an existing project" at [app.netlify.com](https://app.netlify.com); build `npm run build`, publish `dist` are read from the file.

No build secrets are required — it's a static front end.

## 📁 Structure

```
src/
├── components/     # Navbar, Hero, Services, Portfolio, AudioVault,
│                   # AudioPlayer, WaveformBars, Contact, Footer
├── data/           # servicesData, portfolioData, audioData
├── App.jsx         # Page composition
├── main.jsx        # App entry
└── index.css       # Tailwind layers + global styles
public/
├── audio/          # Voice-over demo audio
├── images/         # Project imagery
└── favicon.svg
```

> Voice-over demo audio lives in `public/audio/`. Add your `.mp3`/`.wav` files
> there and reference them from `src/data/audioData.js`.

## 📄 License

MIT — see [LICENSE](LICENSE).
