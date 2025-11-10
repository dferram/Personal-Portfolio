import SparkOverlay from '@/components/SparkOverlay';
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.18),_transparent_60%)]" />
      <SparkOverlay className="opacity-80" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        {badge && (
          <span className="rounded-full border border-accent/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            {badge}
          </span>
        )}
        <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_35px_rgba(229,9,20,0.35)] md:text-7xl">
          {title}
        </h1>
        <h2 className="text-xl font-medium text-foreground/80 md:text-3xl">
          {subtitle?.split('|')?.[0] ?? subtitle}
          {subtitle?.includes('|') && (
            <>
              <span className="text-accent-light"> | </span>
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
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition duration-300 ease-out hover:-translate-y-1 hover:bg-accent-light hover:shadow-[0_0_45px_rgba(229,9,20,0.45)]"
          >
            {cta}
            <span className="text-lg">→</span>
          </a>
        )}
      </div>
    </section>
  );
}
