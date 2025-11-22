import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaCheckCircle, FaImage, FaTimes } from 'react-icons/fa';
import { PROJECTS_DATA } from '../data/projects';
import SparkOverlay from '@/components/SparkOverlay';
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
};

function StatusBadge({ status, isOngoing }) {
  if (!status) return null;
  const isComplete = !isOngoing;

  return (
    <span className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-foreground">
      {isComplete ? (
        <FaCheckCircle className="text-accent" aria-hidden="true" />
      ) : (
        <span className="relative flex h-3 w-3 items-center justify-center" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-light" />
        </span>
      )}
      <span>{status}</span>
    </span>
  );
}

function MetricGrid({ metrics, heading }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground">{heading ?? 'Ficha técnica'}</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {metrics.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-2xl border border-white/5 bg-black/50 px-4 py-4 text-left transition duration-300 hover:border-accent/60"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted">{label}</p>
            <p className="mt-2 text-sm font-semibold leading-snug text-foreground break-words whitespace-normal">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ListSection({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="flex gap-3">
            <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 translate-y-1 rounded-full bg-accent" />
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
      links: project.links ?? {},
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
    <main className="relative min-h-screen bg-primary px-6 py-20 text-foreground">
      <SparkOverlay className="opacity-55" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-accent transition duration-300 hover:text-accent-light"
          >
            {t('common.backToProjects')}
          </Link>
        </div>

        <header className="mt-10 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">{title}</h1>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-lg text-muted">{subtitle}</p>
            <StatusBadge status={status} isOngoing={isOngoing} />
          </div>
        </header>

        <section className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)]">
          <div className="order-1 flex flex-col gap-12">
            <article className="space-y-10">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{t('viewProject.gallery')}</h2>
                <div className="mt-4">
                  <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-black/30">
                    {hasGallery ? (
                      <>
                        <img
                          src={activeImage}
                          alt={`${title} - ${t('viewProject.gallery')} ${activeIndex + 1}`}
                          className="w-full cursor-zoom-in object-cover transition duration-300 hover:opacity-90"
                          onClick={() => setIsLightboxOpen(true)}
                        />
                        {gallery.length > 1 && (
                          <>
                            <button
                              type="button"
                              aria-label="Imagen anterior"
                              onClick={handlePrev}
                              className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/60 p-2 text-white backdrop-blur transition duration-300 hover:bg-black/80"
                            >
                              <FaChevronLeft aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              aria-label="Imagen siguiente"
                              onClick={handleNext}
                              className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/60 p-2 text-white backdrop-blur transition duration-300 hover:bg-black/80"
                            >
                              <FaChevronRight aria-hidden="true" />
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
                    <div className="mt-4 flex gap-3 overflow-x-auto">
                      {gallery.map((image, index) => (
                        <button
                          key={`${id}-thumb-${index}`}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-2xl border transition duration-300 ${
                            activeIndex === index ? 'border-accent shadow-[0_0_25px_rgba(229,9,20,0.3)]' : 'border-white/10'
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

              <div className="space-y-8">
                {overview && (
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{t('viewProject.overview')}</h2>
                    <p className="mt-4 text-sm leading-7 text-muted">{overview}</p>
                  </div>
                )}

                <ListSection title={t('viewProject.objectives')} items={objectives} />
                <ListSection title={t('viewProject.responsibilities')} items={responsibilities} />
                {!overview && description && (
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{t('viewProject.description')}</h2>
                    <div
                      className="prose prose-invert prose-p:text-muted mt-4 max-w-none space-y-4 text-sm leading-7"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                )}
              </div>
            </article>
          </div>

          <aside className="order-2 flex flex-col gap-8 rounded-3xl border border-white/5 bg-[#111]/90 p-8 shadow-[0_35px_60px_-15px_rgba(229,9,20,0.18)] lg:sticky lg:top-28">
            <MetricGrid metrics={metrics} heading={t('common.metrics.heading')} />

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground">{t('viewProject.technologies')}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/50 bg-black/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80 transition duration-300 hover:border-accent hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {links && Object.keys(links).length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground">{t('viewProject.links')}</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {Object.entries(links).map(([key, value]) => (
                    <a
                      key={key}
                      href={value}
                      target={value?.startsWith('http') ? '_blank' : undefined}
                      rel={value?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={`${t(`common.linkLabels.${key}`) ?? FALLBACK_LINK_LABELS[key]?.[language] ?? key} - ${title}`}
                      className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition.duration-300 hover:-translate-y-1 hover:bg-accent-light"
                    >
                      <span aria-hidden="true">{t(`common.linkLabels.${key}`) ?? FALLBACK_LINK_LABELS[key]?.[language] ?? key}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
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
