import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaCheckCircle, FaImage, FaTimes } from 'react-icons/fa';
import { PROJECTS_DATA } from '../data/projects';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedList, getLocalizedValue } from '@/i18n/utils';

const FALLBACK_LINK_LABELS = {
  github: {
    es: 'Código',
    en: 'Code',
  },
  demo: {
    es: 'Demo',
    en: 'Demo',
  },
  certificate: {
    es: 'Certificado',
    en: 'Certificate',
  },
  visit_store: {
    es: 'Visitar tienda',
    en: 'Visit Store',
  },
  instagram: {
    es: 'Ver en Instagram',
    en: 'View on Instagram',
  },
};

function StatusBadge({ status, isOngoing }) {
  if (!status) return null;
  const isComplete = !isOngoing;

  return (
    <span className="inline-flex flex-row items-center gap-3 pill-badge-lg max-w-full">
      <span>{status}</span>
      {isComplete ? (
        <FaCheckCircle aria-hidden="true" />
      ) : (
        <span className="relative flex h-3 w-3 items-center justify-center shrink-0" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
      )}
    </span>
  );
}

function MetricGrid({ metrics, heading }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-6">
      {metrics.map(({ label, value }) => (
        <div key={label} className="flex flex-col">
          <p className="text-sm uppercase tracking-[0.2em] text-muted font-medium">{label}</p>
          <p className="mt-1 text-lg font-bold text-foreground">{value}</p>
        </div>
      ))}
    </div>
  );
}

function ListSection({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h3 className="text-base font-semibold uppercase tracking-[0.25em] text-accent">{title}</h3>
      <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="flex gap-3">
            <span className="mt-1.5 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ViewProject() {
  const { t, language } = useI18n();
  const { id } = useParams();
  const project = PROJECTS_DATA.find((item) => item.id === id);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
    setIsLightboxOpen(false);
  }, [project]);

  if (!project) {
    return (
      <main className="min-h-screen bg-primary px-6 py-20 text-center text-foreground">
        <div className="mx-auto max-w-3xl space-y-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-accent transition duration-300 hover:text-accent-light"
          >
            {t('common.backToProjects')}
          </Link>
          <h1 className="text-3xl font-semibold">{t('common.notFoundTitle')}</h1>
          <p className="text-muted">{t('common.notFoundDescription')}</p>
        </div>
      </main>
    );
  }

  const localized = useMemo(() => {
    const get = (value) => getLocalizedValue(value, language);
    const getList = (value) => getLocalizedList(value, language);

    const heroImage = project.images?.hero ?? null;
    const galleryImages = Array.isArray(project.images?.gallery) ? project.images.gallery : [];
    const gallery = heroImage ? [heroImage, ...galleryImages] : galleryImages;

    const filteredLinks = project.links ? { ...project.links } : {};
    delete filteredLinks.instagram;

    return {
      title: get(project.title) ?? project.title,
      subtitle: get(project.subtitle) ?? project.subtitle,
      status: get(project.status) ?? project.status,
      overview: get(project.overview) ?? project.overview,
      objectives: getList(project.objectives),
      responsibilities: getList(project.responsibilities),
      role: get(project.role) ?? project.role,
      duration: get(project.duration) ?? project.duration,
      team: get(project.team) ?? project.team,
      year: project.year,
      description: get(project.description) ?? project.description,
      technologies: project.technologies ?? [],
      gallery,
      links: filteredLinks,
      isOngoing: Boolean(project.isOngoing),
    };
  }, [language, project]);

  const {
    title,
    subtitle,
    status,
    overview,
    objectives,
    responsibilities,
    links,
    technologies,
    gallery,
    role,
    duration,
    team,
    year,
    description,
    isOngoing,
  } = localized;

  const hasGallery = gallery.length > 0;
  const activeImage = hasGallery ? gallery[Math.min(activeIndex, gallery.length - 1)] : null;

  const handlePrev = () => {
    if (!hasGallery) return;
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNext = () => {
    if (!hasGallery) return;
    setActiveIndex((prev) => (prev + 1) % gallery.length);
  };

  const metrics = [
    { label: t('common.metrics.role'), value: role },
    { label: t('common.metrics.duration'), value: duration },
    { label: t('common.metrics.team'), value: team },
    { label: t('common.metrics.year'), value: year },
  ].filter((metric) => Boolean(metric.value));

  return (
    <main className="relative min-h-screen bg-primary-dark px-4 pt-24 pb-12 md:px-6 md:py-20 text-foreground">
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent transition duration-300 hover:text-accent-dark"
          >
            {t('common.backToProjects')}
          </Link>
        </div>

        <header className="mt-8 md:mt-10 flex flex-col gap-4">
          <h1 className="text-3xl font-black text-foreground md:text-5xl">{title}</h1>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-base md:text-lg text-muted">{subtitle}</p>
            <div className="flex flex-wrap"> 
               <StatusBadge status={status} isOngoing={isOngoing} />
            </div>
          </div>
        </header>

        <section className="mt-8 md:mt-12 w-full overflow-hidden">
          <div className="flex flex-col gap-12 min-w-0">
            <article className="space-y-10 min-w-0">
              <div>
                <h2 className="text-base md:text-lg font-bold uppercase tracking-[0.25em] text-accent">{t('viewProject.gallery')}</h2>
                <div className="mt-6 w-full">
                  <div className="group relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-clean cursor-pointer">
                    {hasGallery ? (
                      <>
                        <div className="relative flex w-full items-center justify-center overflow-hidden bg-gray-100" style={{maxHeight: '600px', minHeight: '400px'}}>
                          <img
                            src={activeImage}
                            alt={`${title} - ${t('viewProject.gallery')} ${activeIndex + 1}`}
                            className="max-h-[600px] w-auto max-w-full object-contain transition duration-300"
                            onClick={() => setIsLightboxOpen(true)}
                          />
                        </div>
                        {gallery.length > 1 && (
                          <>
                            <button
                              type="button"
                              aria-label="Imagen anterior"
                              onClick={handlePrev}
                              className="absolute z-10 left-1 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/60 p-2 text-white backdrop-blur transition duration-300 hover:bg-black/80 md:left-4"
                            >
                              <FaChevronLeft aria-hidden="true" size={16} className="md:w-5 md:h-5" />
                            </button>
                            <button
                              type="button"
                              aria-label="Imagen siguiente"
                              onClick={handleNext}
                              className="absolute z-10 right-1 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/60 p-2 text-white backdrop-blur transition duration-300 hover:bg-black/80 md:right-4"
                            >
                              <FaChevronRight aria-hidden="true" size={16} className="md:w-5 md:h-5" />
                            </button>
                          </>
                        )}
                      </>
                    ) : (
                      <div className="flex h-64 flex-col items-center justify-center gap-3 text-muted">
                        <FaImage className="text-3xl text-accent/70" aria-hidden="true" />
                        <p className="text-sm">{t('viewProject.gallery')} — {t('common.notFoundTitle')}</p>
                      </div>
                    )}
                  </div>
                  {gallery.length > 1 && (
                    <div className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x">
                      {gallery.map((image, index) => (
                        <button
                          key={`${id}-thumb-${index}`}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`relative h-24 w-36 md:h-32 md:w-48 flex-shrink-0 snap-center overflow-hidden rounded-lg border transition duration-300 ${
                            activeIndex === index ? 'border-accent shadow-clean-lg ring-2 ring-accent ring-offset-2' : 'border-gray-200 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <span className="sr-only">{`${t('viewProject.gallery')} ${index + 1}`}</span>
                          <img src={image} alt={`${title} miniatura ${index + 1}`} className="h-full w-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-10">
                {metrics.length > 0 && (
                  <div>
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-[0.25em] text-accent mb-6">{t('common.metrics.heading')}</h3>
                    <MetricGrid metrics={metrics} />
                  </div>
                )}

                {overview && (
                  <div>
                    <h2 className="text-base md:text-lg font-bold uppercase tracking-[0.25em] text-accent">{t('viewProject.overview')}</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted">{overview}</p>
                  </div>
                )}

                <ListSection title={t('viewProject.objectives')} items={objectives} />
                <ListSection title={t('viewProject.responsibilities')} items={responsibilities} />
                {!overview && description && (
                  <div>
                    <h2 className="text-base md:text-lg font-semibold uppercase tracking-[0.25em] text-accent">{t('viewProject.description')}</h2>
                    <div
                      className="prose prose-invert prose-p:text-muted mt-4 max-w-none space-y-4 text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                )}

                {technologies.length > 0 && (
                  <div>
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-[0.25em] text-accent">{t('viewProject.technologies')}</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {technologies.map((tech) => (
                        <span key={tech} className="pill-badge text-sm px-5 py-2.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {links && Object.keys(links).length > 0 && (
                  <div>
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-[0.25em] text-accent">{t('viewProject.links')}</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {Object.entries(links).map(([key, value]) => (
                        <a
                          key={key}
                          href={value}
                          target={value?.startsWith('http') ? '_blank' : undefined}
                          rel={value?.startsWith('http') ? 'noopener noreferrer' : undefined}
                          aria-label={`${t(`common.linkLabels.${key}`) ?? FALLBACK_LINK_LABELS[key]?.[language] ?? key} - ${title}`}
                          className="inline-flex items-center justify-center pill-badge-lg hover:bg-accent-dark transition-colors text-base px-6 py-3"
                        >
                          <span aria-hidden="true">{t(`common.linkLabels.${key}`) ?? FALLBACK_LINK_LABELS[key]?.[language] ?? key}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </div>
        </section>
      </div>

      {isLightboxOpen && hasGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${title}`}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-6 top-6 rounded-full bg-black/70 p-2 text-white transition duration-300 hover:bg-black/90"
            aria-label="Cerrar galería"
          >
            <FaTimes aria-hidden="true" />
          </button>
          <div className="relative w-full max-w-4xl">
            <img src={activeImage} alt={`${title} imagen ampliada`} className="w-full rounded-3xl object-contain" />
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white transition duration-300 hover:bg-black/90"
                  onClick={handlePrev}
                  aria-label="Imagen anterior"
                >
                  <FaChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white transition duration-300 hover:bg-black/90"
                  onClick={handleNext}
                  aria-label="Imagen siguiente"
                >
                  <FaChevronRight aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
