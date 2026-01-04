import { useI18n } from '@/i18n/I18nProvider';

export default function Hero() {
  const { t } = useI18n();

  const badge = t('common.portfolioBadge');
  const title = t('hero.title');
  const subtitle = t('hero.subtitle');
  const description = t('hero.description');
  const cta = t('hero.cta');

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary pt-20 pb-12"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl w-full flex-col items-center gap-6 px-6 text-center">
        
        {/* Grand Watermark "portfolio" - Poster Design Style */}
        <div className="relative w-full flex items-center justify-center mb-8 h-[160px] sm:h-[220px] md:h-[280px]">
          
          {/* Layer 1 - TOP BACK - Massive, very faded, positioned high */}
          <div 
            className="absolute font-black select-none leading-none"
            style={{
              fontSize: 'clamp(3rem, 15vw, 20rem)',
              color: '#E5F0FF',
              opacity: 0.12,
              transform: 'translateY(-35%)',
              letterSpacing: '-0.05em',
              zIndex: 1,
            }}
          >
            portfolio
          </div>
          
          {/* Layer 2 - MIDDLE BACK - Large, semi-transparent */}
          <div 
            className="absolute font-black select-none leading-none"
            style={{
              fontSize: 'clamp(2.8rem, 14vw, 18rem)',
              color: '#B3D4FF',
              opacity: 0.25,
              transform: 'translateY(-15%)',
              letterSpacing: '-0.05em',
              zIndex: 2,
            }}
          >
            portfolio
          </div>
          
          {/* Layer 3 - Near front - Medium opacity */}
          <div 
            className="absolute font-black select-none leading-none"
            style={{
              fontSize: 'clamp(2.6rem, 13vw, 16rem)',
              color: '#6BA3FF',
              opacity: 0.45,
              transform: 'translateY(-5%)',
              letterSpacing: '-0.05em',
              zIndex: 3,
            }}
          >
            portfolio
          </div>
          
          {/* Layer 4 - Close to front */}
          <div 
            className="absolute font-black select-none leading-none"
            style={{
              fontSize: 'clamp(2.4rem, 12vw, 15rem)',
              color: '#3D7FFF',
              opacity: 0.65,
              transform: 'translateY(0%)',
              letterSpacing: '-0.05em',
              zIndex: 4,
            }}
          >
            portfolio
          </div>
          
          {/* FOREGROUND LAYER - Main sharp Electric Blue text */}
          <div 
            className="absolute font-black select-none leading-none"
            style={{
              fontSize: 'clamp(2.2rem, 11vw, 14rem)',
              color: '#0022FF',
              opacity: 1,
              transform: 'translateY(2%)',
              letterSpacing: '-0.03em',
              zIndex: 10,
            }}
          >
            portfolio
          </div>
          
          {/* Year '2026' - White with subtle drop shadow, aligned with baseline */}
          <div 
            className="absolute font-bold select-none"
            style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
              color: '#FFFFFF',
              opacity: 0.9,
              transform: 'translateY(15px) sm:translateY(20px)',
              letterSpacing: '0.05em',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              zIndex: 11,
            }}
          >
            2026
          </div>
        </div>
        
        {/* Title (name) below the portfolio effect */}
        <h1 className="text-5xl font-black text-foreground md:text-7xl leading-tight mt-4">
          {title}
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
