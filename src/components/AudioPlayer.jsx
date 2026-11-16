import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import WaveformBars from './WaveformBars';

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Custom audio player. `isActive` is controlled by the parent so only one
 * track plays at a time across the Audio Vault.
 */
export default function AudioPlayer({ track, isActive, onPlay, onEnded }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!isActive && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      onPlay();
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const value = Number(e.target.value);
    audio.currentTime = (value / 100) * audio.duration;
    setProgress(value);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    onEnded?.();
  };

  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-colors hover:border-electric-500/40">
      <audio
        ref={audioRef}
        src={track.src}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={handleEnded}
      />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-electric-500 text-slate-950 shadow-md shadow-electric-500/30 transition-transform hover:scale-105 active:scale-95"
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="truncate text-sm font-semibold text-white">{track.title}</h4>
          <span className="shrink-0 text-xs text-slate-500">
            {isPlaying ? formatTime(audioRef.current?.currentTime) : track.duration}
            {duration ? ` / ${formatTime(duration)}` : ''}
          </span>
        </div>
        <p className="mt-0.5 truncate text-xs text-slate-500">{track.description}</p>

        <div className="mt-3 flex items-center gap-3">
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={handleSeek}
            aria-label="Seek"
            className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-slate-700 accent-electric-400"
            style={{
              background: `linear-gradient(to right, var(--color-electric-500) ${progress}%, var(--color-slate-700) ${progress}%)`,
            }}
          />
          <WaveformBars
            active={isPlaying}
            className="hidden h-5 shrink-0 sm:flex"
            barClassName="w-0.5"
          />
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute' : 'Mute'}
            className="shrink-0 text-slate-400 transition-colors hover:text-electric-400"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
