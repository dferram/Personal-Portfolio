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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary pt-20"
    >
      {/* Large background text effect - similar to reference image */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10 pointer-events-none">
        <h1 className="text-[20rem] font-black text-accent select-none">
          portfolio
        </h1>
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
        {badge && (
          <span className="inline-block rounded-full border-2 border-accent px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">
            {badge}
          </span>
        )}
        
        <h1 className="text-6xl font-black text-foreground md:text-8xl leading-tight">
          {title}
        </h1>
        
        <h2 className="text-2xl font-semibold text-foreground-light md:text-4xl">
          {subtitle?.split('|')?.[0] ?? subtitle}
          {subtitle?.includes('|') && (
            <>
              <span className="text-accent"> | </span>
              {subtitle.split('|')[1]}
            </>
          )}
        </h2>
        
        {description && (
          <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{description}</p>
        )}
        
        {cta && (
          <a
            href="#proyectos"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-clean-lg transition duration-300 ease-out hover:-translate-y-1 hover:bg-accent-light hover:shadow-xl"
          >
            {cta}
            <span className="text-lg">→</span>
          </a>
        )}
      </div>
    </section>
  );
}
