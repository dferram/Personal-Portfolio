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
        {badge && (
          <span className="inline-block rounded-full border-2 border-accent px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">
            {badge}
          </span>
        )}
        
        {/* Layered "portfolio" effect - more compact and visible like reference image 2 */}
        <div className="relative w-full flex items-center justify-center mb-8" style={{ height: '200px' }}>
          {/* Layer 1 - Lightest blue, furthest back */}
          <h1 
            className="absolute text-[10rem] md:text-[14rem] font-black select-none leading-none"
            style={{
              color: '#e5ecff',
              transform: 'translate(8px, 8px)',
            }}
          >
            portfolio
          </h1>
          
          {/* Layer 2 - Light blue */}
          <h1 
            className="absolute text-[10rem] md:text-[14rem] font-black select-none leading-none"
            style={{
              color: '#b8c9ff',
              transform: 'translate(5px, 5px)',
            }}
          >
            portfolio
          </h1>
          
          {/* Layer 3 - Medium blue */}
          <h1 
            className="absolute text-[10rem] md:text-[14rem] font-black select-none leading-none"
            style={{
              color: '#7a9aff',
              transform: 'translate(2px, 2px)',
            }}
          >
            portfolio
          </h1>
          
          {/* Layer 4 - Strong blue (primary accent) - front layer */}
          <h1 
            className="absolute text-[10rem] md:text-[14rem] font-black text-accent select-none leading-none"
            style={{
              transform: 'translate(0px, 0px)',
            }}
          >
            portfolio
          </h1>
          
          {/* Year overlay like in reference image */}
          <span className="absolute text-2xl md:text-3xl font-bold text-white opacity-90" style={{ transform: 'translateY(20px)' }}>
            2025
          </span>
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
