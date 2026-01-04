import { useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS_DATA } from '../data/projects';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedValue } from '@/i18n/utils';

const LINK_LABELS = {
  github: 'Código',
  demo: 'Demo',
  certificate: 'Certificado',
  visit_store: 'Visitar tienda',
};

export default function Projects() {
  const navigate = useNavigate();
  const { language, t } = useI18n();
  const sectionTag = t('projects.tag');
  const sectionTitle = t('projects.title');
  const sectionDescription = t('projects.description');
  const viewDetailLabel = t('projects.viewDetail') ?? 'Ver Detalle';
  const localizedLinkLabels = t('common.linkLabels') ?? {};

  return (
    <section id="proyectos" className="relative py-24 bg-primary-dark">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto flex flex-col items-center gap-4 text-center md:max-w-2xl">
          {sectionTag && (
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent">{sectionTag}</span>
          )}
          <h2 className="text-4xl font-black text-foreground md:text-5xl">
            {sectionTitle}
          </h2>
          {sectionDescription && (
            <p className="text-base text-muted md:text-lg">{sectionDescription}</p>
          )}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {PROJECTS_DATA.map((project) => {
            const heroImage = project.images?.hero ?? null;
            const galleryImages = Array.isArray(project.images?.gallery) ? project.images.gallery : [];
            const coverImage = heroImage ?? galleryImages[0] ?? 'https://placehold.co/600x400/111111/E50914?text=Proyecto';
            const linkEntries = Object.entries(project.links ?? {});
            const technologies = project.technologies ?? project.tags ?? [];
            const goToDetail = () => navigate(`/proyecto/${project.id}`);
            const handleKeyDown = (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                goToDetail();
              }
            };

            const title = getLocalizedValue(project.title, language) ?? project.title;
            const subtitle = getLocalizedValue(project.subtitle, language) ?? project.subtitle;
            const overview = getLocalizedValue(project.overview, language) ?? project.overview;
            const status = getLocalizedValue(project.status, language) ?? project.status;
            const year = project.year;

            return (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-clean transition duration-300 hover:-translate-y-2 hover:shadow-clean-lg cursor-pointer"
                role="link"
                tabIndex={0}
                aria-label={`${viewDetailLabel} ${title}`}
                onClick={goToDetail}
                onKeyDown={handleKeyDown}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={coverImage}
                    alt={title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="flex h-full flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                    {subtitle && (
                      <p className="mt-1 truncate text-xs font-medium uppercase tracking-[0.2em] text-muted">{subtitle}</p>
                    )}
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.3em] text-muted/80">
                      {year ?? (project.isOngoing ? (language === 'en' ? 'Ongoing' : 'En curso') : '—')}
                    </p>
                    {overview && <p className="mt-3 text-sm leading-relaxed text-muted">{overview}</p>}
                    <p className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          project.isOngoing ? 'bg-accent-light animate-pulse' : 'bg-muted'
                        }`}
                      />
                      {status}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="pill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-4">
                    {linkEntries.map(([key, value]) => (
                      <a
                        key={`${project.id}-${key}`}
                        href={value}
                        target={value?.startsWith('http') ? '_blank' : undefined}
                        rel={value?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent transition.duration-300 hover:text-white"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {key === 'github' ? <FaGithub size={18} /> : <FaExternalLinkAlt size={16} />}
                        {localizedLinkLabels?.[key] ?? LINK_LABELS[key] ?? key}
                      </a>
                    ))}
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        goToDetail();
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-accent-dark"
                    >
                      {viewDetailLabel}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
