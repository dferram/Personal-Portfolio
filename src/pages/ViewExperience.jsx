// ============================================================================
// COMPONENTE: ViewExperience
// ============================================================================
// Página de detalle para mostrar una experiencia específica con contenido extendido.
// Sigue el mismo patrón de diseño que ViewProject.jsx para mantener consistencia.
//
// CARACTERÍSTICAS:
// - Galería de imágenes con navegación y lightbox
// - Historia/anécdota extendida de la experiencia
// - Lista de aprendizajes obtenidos
// - Integración con Instagram (si está disponible)
// - Diseño responsive y accesible
// ============================================================================

import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaImage, FaTimes, FaInstagram } from 'react-icons/fa';
import { EXPERIENCES_DATA } from '@/data/experiencesData';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedList, getLocalizedValue } from '@/i18n/utils';

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

export default function ViewExperience() {
  const { t, language } = useI18n();
  const { id } = useParams();
  const navigate = useNavigate();
  const experience = EXPERIENCES_DATA.find((item) => item.id === id);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
    setIsLightboxOpen(false);
  }, [experience]);

  // Si la experiencia no existe, mostrar error
  if (!experience) {
    return (
      <main className="min-h-screen bg-primary px-6 py-20 text-center text-foreground">
        <div className="mx-auto max-w-3xl space-y-6">
          <Link
            to="/experiencias"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-accent transition duration-300 hover:text-accent-light"
          >
            {t('viewExperience.backToExperiences') ?? '← Volver a Experiencias'}
          </Link>
          <h1 className="text-3xl font-semibold">
            {t('viewExperience.notFoundTitle') ?? 'Experiencia no encontrada'}
          </h1>
          <p className="text-muted">
            {t('viewExperience.notFoundDescription') ?? 
              'No pudimos encontrar una experiencia con el identificador proporcionado.'}
          </p>
        </div>
      </main>
    );
  }

  // Si la experiencia no tiene contenido extendido, redirigir a la lista
  if (!experience.story && !experience.learnings && !experience.images) {
    navigate('/experiencias');
    return null;
  }

  const localized = useMemo(() => {
    const get = (value) => getLocalizedValue(value, language);
    const getList = (value) => getLocalizedList(value, language);

    const heroImage = experience.images?.hero ?? null;
    const galleryImages = Array.isArray(experience.images?.gallery) ? experience.images.gallery : [];
    const gallery = heroImage ? [heroImage, ...galleryImages] : galleryImages;

    return {
      title: get(experience.title) ?? experience.title,
      date: get(experience.date) ?? experience.date,
      location: get(experience.location) ?? experience.location,
      description: get(experience.description) ?? experience.description,
      story: get(experience.story) ?? experience.story,
      learnings: getList(experience.learnings),
      gallery,
      category: experience.category,
      instagramUrl: experience.instagramUrl,
    };
  }, [language, experience]);

  const {
    title,
    date,
    location,
    story,
    learnings,
    gallery,
    category,
    instagramUrl,
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

  const getCategoryLabel = (cat) => {
    const label = t(`experiences.categories.${cat}`);
    return label || cat;
  };

  const categoryLabel = getCategoryLabel(category);

  return (
    <main className="relative min-h-screen bg-primary-dark px-4 pt-24 pb-12 md:px-6 md:py-20 text-foreground">
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Botón de regreso */}
        <div className="flex items-center justify-between">
          <Link
            to="/experiencias"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent transition duration-300 hover:text-accent-dark"
          >
            {t('viewExperience.backToExperiences') ?? '← Volver a Experiencias'}
          </Link>
        </div>

        {/* Header */}
        <header className="mt-8 md:mt-10 flex flex-col gap-4">
          <h1 className="text-3xl font-black text-foreground md:text-5xl">{title}</h1>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-base md:text-lg text-muted">{date}</p>
            <span className="text-muted">•</span>
            <p className="text-base md:text-lg text-muted">{location}</p>
            <div className="flex flex-wrap">
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-md">
                {categoryLabel}
              </span>
            </div>
          </div>
        </header>

        {/* Contenido principal */}
        <section className="mt-8 md:mt-12 w-full overflow-hidden grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
          <div className="order-1 flex flex-col gap-12 min-w-0">
            <article className="space-y-10 min-w-0">
              {/* Galería de imágenes */}
              {hasGallery && (
                <div>
                  <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-accent">
                    {t('viewExperience.gallery') ?? 'Galería'}
                  </h2>
                  <div className="mt-4 w-full">
                    <div className="group relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-clean">
                      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden">
                        <img
                          src={activeImage}
                          alt={`${title} - ${t('viewExperience.gallery') ?? 'Galería'} ${activeIndex + 1}`}
                          className="max-h-full max-w-full object-contain p-1 transition duration-300 md:p-0 cursor-pointer"
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
                    </div>
                    {/* Miniaturas */}
                    {gallery.length > 1 && (
                      <div className="mt-4 flex gap-3 overflow-x-auto pb-4 snap-x">
                        {gallery.map((image, index) => (
                          <button
                            key={`${id}-thumb-${index}`}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className={`relative h-16 w-24 md:h-20 md:w-28 flex-shrink-0 snap-center overflow-hidden rounded-lg border transition duration-300 ${
                              activeIndex === index 
                                ? 'border-accent shadow-clean-lg ring-2 ring-accent ring-offset-2' 
                                : 'border-gray-200 opacity-70 hover:opacity-100'
                            }`}
                          >
                            <span className="sr-only">{`${t('viewExperience.gallery') ?? 'Galería'} ${index + 1}`}</span>
                            <img src={image} alt={`${title} miniatura ${index + 1}`} className="h-full w-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Historia/Anécdota */}
              <div className="space-y-8">
                {story && (
                  <div>
                    <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-accent">
                      {t('viewExperience.story') ?? 'Historia'}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-muted whitespace-pre-line">{story}</p>
                  </div>
                )}

                {/* Aprendizajes */}
                <ListSection 
                  title={t('viewExperience.learnings') ?? 'Aprendizajes'} 
                  items={learnings} 
                />
              </div>
            </article>
          </div>

          {/* Sidebar con Instagram */}
          <aside className="order-2 flex flex-col gap-8 rounded-lg border border-gray-200 bg-white p-6 md:p-8 shadow-clean lg:sticky lg:top-28 h-fit">
            {instagramUrl && (
              <div>
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-foreground">
                  {t('viewExperience.socialMedia') ?? 'Redes Sociales'}
                </h3>
                <div className="mt-4">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <FaInstagram size={18} />
                    {t('experiences.instagram.viewButton') ?? 'Ver en Instagram'}
                  </a>
                  <p className="mt-3 text-xs text-muted italic text-center">
                    {t('experiences.instagram.relatedPost') ?? 'Publicación relacionada con esta experiencia'}
                  </p>
                </div>
              </div>
            )}

            {/* Información adicional */}
            <div>
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-foreground">
                {t('viewExperience.details') ?? 'Detalles'}
              </h3>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-gray-200 bg-white px-4 py-4 text-left shadow-clean">
                  <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted">
                    {t('viewExperience.category') ?? 'Categoría'}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{categoryLabel}</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white px-4 py-4 text-left shadow-clean">
                  <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted">
                    {t('viewExperience.date') ?? 'Fecha'}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{date}</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white px-4 py-4 text-left shadow-clean">
                  <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted">
                    {t('viewExperience.location') ?? 'Ubicación'}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground break-words">{location}</p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>

      {/* Lightbox para imágenes */}
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
