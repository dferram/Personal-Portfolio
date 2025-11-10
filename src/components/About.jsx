import { useI18n } from '@/i18n/I18nProvider';

export default function About() {
  const { t } = useI18n();
  const title = t('about.title') ?? 'Sobre Mí';
  const paragraphs = t('about.paragraphs') ?? [];

  return (
    <section id="sobre-mí" className="relative py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(229,9,20,0.08),_transparent_55%)]" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-6 md:flex-row md:items-start">
        <div className="h-1.5 w-16 rounded-full bg-accent md:mt-3" />
        <div className="flex-1">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] text-foreground md:text-4xl">
            {title}
          </h2>
          <div className="mt-6 max-w-3xl border-l-2 border-accent/50 pl-6">
            {(Array.isArray(paragraphs) ? paragraphs : [paragraphs]).map((paragraph, index) => (
              <p
                key={`about-paragraph-${index}`}
                className={`text-base leading-7 text-muted md:text-lg ${index > 0 ? 'mt-4' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
