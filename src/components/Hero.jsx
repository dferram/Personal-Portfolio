import { useRef, useState, useCallback } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

export default function Hero() {
  const { t } = useI18n();
  const sectionRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const badge = t('common.portfolioBadge');
  const title = t('hero.title');
  const subtitle = t('hero.subtitle');
  const description = t('hero.description');
  const cta = t('hero.cta');

  const handleMouseMove = useCallback((e) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    // Normalize to [-1, 1]
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  // Each layer gets different intensity for parallax depth (subtle values only)
  const layerStyle = (baseStyle, intensity) => ({
    ...baseStyle,
    transform: `${baseStyle.transform || ''} translate(${tilt.x * intensity}px, ${tilt.y * intensity}px)`,
    transition: 'transform 0.3s ease-out',
  });

  // Per-character offset for title
  const titleChars = title ? title.split('') : [];

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary pt-20 pb-12"
      style={{ perspective: '1200px' }}
    >
      <div className="relative z-10 mx-auto flex max-w-6xl w-full flex-col items-center gap-6 px-6 text-center">
        
        {/* Grand Watermark "portfolio" - Poster Design Style with 3D Tilt */}
        <div 
          className="relative w-full flex items-center justify-center mb-12 h-[180px] sm:h-[260px] md:h-[340px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          
          {/* Layer 1 - TOP BACK - Massive, very faded, positioned high */}
          <div 
            className="absolute font-black select-none leading-none"
            style={layerStyle({
              fontSize: 'clamp(5rem, 24vw, 26rem)',
              color: 'var(--color-hero-layer-1)',
              opacity: 0.12,
              transform: 'translateY(-35%)',
              letterSpacing: '-0.05em',
              zIndex: 1,
            }, 20)}
          >
            "portfolio"
          </div>
          
          {/* Layer 2 - MIDDLE BACK - Large, semi-transparent */}
          <div 
            className="absolute font-black select-none leading-none"
            style={layerStyle({
              fontSize: 'clamp(4.5rem, 22vw, 24rem)',
              color: 'var(--color-hero-layer-2)',
              opacity: 0.25,
              transform: 'translateY(-15%)',
              letterSpacing: '-0.05em',
              zIndex: 2,
            }, 14)}
          >
            "portfolio"
          </div>
          
          {/* Layer 3 - Near front - Medium opacity */}
          <div 
            className="absolute font-black select-none leading-none"
            style={layerStyle({
              fontSize: 'clamp(4rem, 20vw, 22rem)',
              color: 'var(--color-hero-layer-3)',
              opacity: 0.45,
              transform: 'translateY(-5%)',
              letterSpacing: '-0.05em',
              zIndex: 3,
            }, 9)}
          >
            "portfolio"
          </div>
          
          {/* Layer 4 - Close to front */}
          <div 
            className="absolute font-black select-none leading-none"
            style={layerStyle({
              fontSize: 'clamp(3.5rem, 18vw, 20rem)',
              color: 'var(--color-hero-layer-4)',
              opacity: 0.65,
              transform: 'translateY(0%)',
              letterSpacing: '-0.05em',
              zIndex: 4,
            }, 1.5)}
          >
            "portfolio"
          </div>
          
          {/* FOREGROUND LAYER - Main sharp text (theme color) */}
          <div 
            className="absolute font-black select-none leading-none"
            style={layerStyle({
              fontSize: 'clamp(3rem, 16vw, 18rem)',
              color: 'var(--color-hero-layer-5)',
              opacity: 1,
              transform: 'translateY(2%)',
              letterSpacing: '-0.03em',
              zIndex: 10,
            }, 0.5)}
          >
            "portfolio"
          </div>
          
          {/* Year '2026' - Theme color with subtle drop shadow */}
          <div 
            className="absolute font-bold select-none"
            style={layerStyle({ 
              fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
              color: 'var(--color-hero-year)',
              opacity: 0.9,
              transform: 'translateY(15px) sm:translateY(20px)',
              letterSpacing: '0.05em',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              zIndex: 20,
            }, 0.3)}
          >
            2026
          </div>
        </div>
        
        {/* Title with per-character subtle mouse tracking */}
        <h1 className="text-5xl font-black text-foreground md:text-7xl leading-tight mt-4">
          {titleChars.map((char, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                transform: `translateY(${tilt.y * (Math.sin(i * 0.7) * 0.8)}px)`,
                transition: `transform 0.2s ease-out ${i * 0.01}s`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <h2 className="text-xl font-semibold text-foreground-light md:text-3xl">
          {subtitle?.split('|')?.[0] ?? subtitle}
          {subtitle?.includes('|') && (
            <>
              <span className="text-accent"> | </span>
              {subtitle.split('|')[1]}
            </>
          )}
        </h2>
        
        {description && (
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
        )}
        
        {cta && (
          <a
            href="#proyectos"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-clean-lg transition duration-300 ease-out hover:-translate-y-1 hover:bg-accent-light hover:shadow-xl mt-4"
          >
            {cta}
            <span className="text-lg">→</span>
          </a>
        )}
      </div>
    </section>
  );
}
