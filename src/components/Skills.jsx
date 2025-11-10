import { useI18n } from '@/i18n/I18nProvider';

const DEFAULT_WEB_SKILLS = ['React', 'Node.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'];
const DEFAULT_DATA_SKILLS = ['Python', 'Pandas', 'NumPy', 'SQL', 'Scikit-learn', 'Matplotlib'];

export default function Skills() {
  const { t } = useI18n();

  const tag = t('skills.tag') ?? 'Skillset';
  const title = t('skills.title') ?? 'Habilidades Técnicas';
  const description = t('skills.description');

  const webTitle = t('skills.categories.web.title') ?? 'Desarrollo Web (Full-Stack)';
  const webDescription = t('skills.categories.web.description');
  const webItemsRaw = t('skills.categories.web.items');
  const webSkills = Array.isArray(webItemsRaw) && webItemsRaw.length > 0 ? webItemsRaw : DEFAULT_WEB_SKILLS;

  const dataTitle = t('skills.categories.data.title') ?? 'Análisis de Datos (En aprendizaje)';
  const dataDescription = t('skills.categories.data.description');
  const dataItemsRaw = t('skills.categories.data.items');
  const dataSkills = Array.isArray(dataItemsRaw) && dataItemsRaw.length > 0 ? dataItemsRaw : DEFAULT_DATA_SKILLS;

  const renderBadges = (skills) =>
    skills.map((skill) => (
      <span
        key={skill}
        className="rounded-full border border-accent/50 bg-[#111111] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-foreground/80 transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_0_25px_rgba(229,9,20,0.4)]"
      >
        {skill}
      </span>
    ));

  return (
    <section id="habilidades" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.12),_transparent_65%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto flex flex-col items-center gap-4 text-center md:max-w-2xl">
          {tag && <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{tag}</span>}
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            {title}
            <span className="ml-3 text-accent">//</span>
          </h2>
          {description && <p className="text-sm text-muted md:text-base">{description}</p>}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="group rounded-2xl border border-white/5 bg-[#111111]/95 p-8 shadow-[0_25px_50px_-12px_rgba(229,9,20,0.15)] transition duration-300 hover:-translate-y-2 hover:border-accent/70">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-foreground/90">{webTitle}</h3>
            {webDescription && <p className="mt-4 text-sm text-muted">{webDescription}</p>}
            <div className="mt-6 flex flex-wrap gap-3">{renderBadges(webSkills)}</div>
          </div>

          <div className="group rounded-2xl border border-white/5 bg-[#111111]/95 p-8 shadow-[0_25px_50px_-12px_rgba(229,9,20,0.15)] transition duration-300 hover:-translate-y-2 hover:border-accent/70">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-foreground/90">{dataTitle}</h3>
            {dataDescription && <p className="mt-4 text-sm text-muted">{dataDescription}</p>}
            <div className="mt-6 flex flex-wrap gap-3">{renderBadges(dataSkills)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
