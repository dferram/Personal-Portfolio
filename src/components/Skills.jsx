import { useI18n } from '@/i18n/I18nProvider';
import { SKILLS_DATA } from '@/data/skillsData';

export default function Skills() {
  const { t } = useI18n();

  const tag = t('skills.tag') ?? 'Skillset';
  const title = t('skills.title') ?? 'Habilidades Técnicas';
  const description = t('skills.description') ?? 'Mi Stack Tecnológico y Herramientas';

  return (
    <section id="habilidades" className="relative py-24 bg-primary">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center mb-16">
          {tag && (
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
              {tag}
            </span>
          )}
          <h2 className="text-4xl font-black text-foreground md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-base text-muted md:text-lg">{description}</p>
          )}
        </header>

        {/* Skills Categories */}
        <div className="space-y-16">
          {SKILLS_DATA.map((category) => {
            const translatedTitle = t(`skills.categories.${category.id}.title`);
            const categoryTitle =
              (typeof translatedTitle === 'string' && translatedTitle.length > 0 && translatedTitle) ||
              category.title ||
              '';

            return (
              <div key={category.id} className="space-y-6">
                {/* Category Title */}
                <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                  {categoryTitle}
                </h3>

                {/* Skills Grid - Pill Badges */}
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="pill-badge-lg hover:bg-accent-dark transition-colors duration-200 cursor-default"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
