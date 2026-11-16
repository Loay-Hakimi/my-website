const BAR_HEIGHTS = [40, 70, 100, 60, 90, 45, 75, 100, 55, 85, 65, 95, 50, 80, 70, 100, 60, 90, 45, 75];

/**
 * Decorative animated waveform. `active` controls whether bars pulse.
 */
export default function WaveformBars({ active = true, className = '', barClassName = '' }) {
  return (
    <div className={`flex items-end gap-1 ${className}`} aria-hidden="true">
      {BAR_HEIGHTS.map((height, index) => (
        <span
          key={index}
          className={`w-1 rounded-full bg-electric-400 ${active ? 'animate-wave' : ''} ${barClassName}`}
          style={{
            height: `${height}%`,
            animationDelay: `${index * 0.07}s`,
            animationPlayState: active ? 'running' : 'paused',
            opacity: active ? 1 : 0.35,
          }}
        />
      ))}
    </div>
  );
}
