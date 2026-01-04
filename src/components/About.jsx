import { useI18n } from '@/i18n/I18nProvider';

export default function About() {
  const { t } = useI18n();
  const title = t('about.title') ?? 'Sobre Mí';
  const paragraphs = t('about.paragraphs') ?? [];

  return (
    <section id="sobre-mí" className="relative py-24 bg-primary-dark">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start">
        <div className="h-2 w-20 rounded-full bg-accent md:mt-3" />
        <div className="flex-1">
          <h2 className="text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
          <div className="mt-8 max-w-3xl border-l-4 border-accent pl-8">
            {(Array.isArray(paragraphs) ? paragraphs : [paragraphs]).map((paragraph, index) => (
              <p
                key={`about-paragraph-${index}`}
                className={`text-lg leading-relaxed text-muted md:text-xl ${index > 0 ? 'mt-5' : ''}`}
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
