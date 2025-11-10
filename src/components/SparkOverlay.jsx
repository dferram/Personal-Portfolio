const PARTICLES = [
  { top: '8%', left: '12%', size: 80, delay: 0, duration: 12, drift: 18 },
  { top: '18%', left: '68%', size: 60, delay: 2, duration: 10, drift: -12 },
  { top: '30%', left: '22%', size: 42, delay: 1.4, duration: 9, drift: 10 },
  { top: '42%', left: '78%', size: 55, delay: 3, duration: 14, drift: -16 },
  { top: '58%', left: '10%', size: 48, delay: 1.2, duration: 11, drift: 12 },
  { top: '65%', left: '55%', size: 40, delay: 2.6, duration: 9, drift: -8 },
  { top: '72%', left: '32%', size: 52, delay: 0.8, duration: 13, drift: 16 },
  { top: '15%', left: '42%', size: 36, delay: 3.2, duration: 8, drift: -6 },
  { top: '50%', left: '88%', size: 34, delay: 4, duration: 12, drift: -18 },
  { top: '84%', left: '18%', size: 46, delay: 5.2, duration: 15, drift: 12 },
  { top: '76%', left: '70%', size: 62, delay: 4.6, duration: 13, drift: -14 },
  { top: '38%', left: '5%', size: 58, delay: 2.2, duration: 14, drift: 10 },
];

export default function SparkOverlay({ className = '' }) {
  return (
    <div className={`spark-overlay ${className}`} aria-hidden="true">
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          style={{
            top: particle.top,
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            '--spark-duration': `${particle.duration}s`,
            '--spark-x': `${particle.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
