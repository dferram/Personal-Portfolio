// ============================================================================
// COMPONENTE: ViewExperience
// ============================================================================
// Página de detalle con diseño de álbum de recuerdos/scrapbook.
//
// CARACTERÍSTICAS:
// - Diseño tipo álbum de recuerdos con imágenes integradas en el texto
// - Primeras 5 imágenes distribuidas junto con la historia
// - Carrusel moderno al final para imágenes restantes (si hay más de 5)
// - Historia/anécdota extendida de la experiencia
// - Lista de aprendizajes obtenidos
// - Integración con Instagram (si está disponible)
// - Diseño responsive y accesible
// ============================================================================

import { useEffect, useMemo, useState, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaTimes, FaInstagram } from 'react-icons/fa';
import { EXPERIENCES_DATA } from '@/data/experiencesData';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedList, getLocalizedValue } from '@/i18n/utils';

function ListSection({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h3 className="text-base md:text-lg font-semibold uppercase tracking-[0.25em] text-accent">{title}</h3>
      <ul className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-muted">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="flex gap-4">
            <span className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
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

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setIsLightboxOpen(false);
    setLightboxImage(null);
    setCarouselIndex(0);
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
  
  // Dividir imágenes: primeras 5 para integrar con texto, resto para carrusel
  const storyImages = gallery.slice(0, 5);
  const carouselImages = gallery.slice(5);
  const hasCarousel = carouselImages.length > 0;
  
  // Dividir la historia en párrafos
  const storyParagraphs = story ? story.split('\n\n').filter(p => p.trim()) : [];
  
  const openLightbox = (image) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
  };
  
  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = 300;
    carouselRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
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

        {/* Contenido principal - Diseño de álbum de recuerdos */}
        <section className="mt-8 md:mt-12 w-full overflow-hidden">
          <div className="flex flex-col gap-12 min-w-0">
            <article className="space-y-10 min-w-0">
              {/* Información básica inline */}
              <div className="flex flex-wrap gap-6 pb-8 border-b border-gray-200">
                <div className="flex flex-col">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted font-medium">
                    {t('viewExperience.category') ?? 'Categoría'}
                  </p>
                  <p className="mt-1 text-lg font-bold text-foreground">{categoryLabel}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted font-medium">
                    {t('viewExperience.date') ?? 'Fecha'}
                  </p>
                  <p className="mt-1 text-lg font-bold text-foreground">{date}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted font-medium">
                    {t('viewExperience.location') ?? 'Ubicación'}
                  </p>
                  <p className="mt-1 text-lg font-bold text-foreground">{location}</p>
                </div>
                {instagramUrl && (
                  <div className="flex items-end">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <FaInstagram size={18} />
                      {t('experiences.instagram.viewButton') ?? 'Ver en Instagram'}
                    </a>
                  </div>
                )}
              </div>

              {/* Historia con imágenes integradas estilo scrapbook */}
              {story && (
                <div>
                  <h2 className="text-base md:text-lg font-bold uppercase tracking-[0.25em] text-accent mb-8">
                    {t('viewExperience.story') ?? 'Historia'}
                  </h2>
                  
                  {/* Contenedor tipo álbum de recuerdos */}
                  <div className="space-y-10">
                    {storyParagraphs.map((paragraph, pIndex) => {
                      const imageIndex = Math.floor((pIndex / storyParagraphs.length) * storyImages.length);
                      const hasImage = storyImages[imageIndex];
                      const imagePosition = pIndex % 2 === 0 ? 'right' : 'left';
                      
                      return (
                        <div key={pIndex} className="relative">
                          {hasImage && imagePosition === 'right' ? (
                            // Imagen a la derecha
                            <div className="md:grid md:grid-cols-[1.5fr_1fr] gap-8 items-start">
                              <div>
                                <p className="text-base md:text-lg leading-relaxed text-muted">{paragraph}</p>
                              </div>
                              <div 
                                className="mt-6 md:mt-0 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:rotate-1"
                                onClick={() => openLightbox(storyImages[imageIndex])}
                              >
                                <div className="relative overflow-hidden rounded-xl border-4 border-white shadow-xl bg-white p-3 transform rotate-2">
                                  <img 
                                    src={storyImages[imageIndex]} 
                                    alt={`${title} - Momento ${imageIndex + 1}`}
                                    className="w-full h-64 md:h-80 object-cover rounded"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </div>
                            </div>
                          ) : hasImage && imagePosition === 'left' ? (
                            // Imagen a la izquierda
                            <div className="md:grid md:grid-cols-[1fr_1.5fr] gap-8 items-start">
                              <div 
                                className="mb-6 md:mb-0 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-rotate-1"
                                onClick={() => openLightbox(storyImages[imageIndex])}
                              >
                                <div className="relative overflow-hidden rounded-xl border-4 border-white shadow-xl bg-white p-3 transform -rotate-2">
                                  <img 
                                    src={storyImages[imageIndex]} 
                                    alt={`${title} - Momento ${imageIndex + 1}`}
                                    className="w-full h-64 md:h-80 object-cover rounded"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </div>
                              <div>
                                <p className="text-base md:text-lg leading-relaxed text-muted">{paragraph}</p>
                              </div>
                            </div>
                          ) : (
                            // Solo texto
                            <div>
                              <p className="text-base md:text-lg leading-relaxed text-muted">{paragraph}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Aprendizajes */}
              <ListSection 
                title={t('viewExperience.learnings') ?? 'Aprendizajes'} 
                items={learnings} 
              />
              
              {/* Carrusel de imágenes restantes */}
              {hasCarousel && (
                <div className="mt-12">
                  <h2 className="text-base md:text-lg font-bold uppercase tracking-[0.25em] text-accent mb-8">
                    Más Recuerdos
                  </h2>
                  
                  <div className="relative group">
                    {/* Botón anterior */}
                    <button
                      onClick={() => scrollCarousel('prev')}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-accent/90 hover:bg-accent text-white p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1/2"
                      aria-label="Anterior"
                    >
                      <FaChevronLeft size={24} />
                    </button>
                    
                    {/* Carrusel */}
                    <div 
                      ref={carouselRef}
                      className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-6"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {carouselImages.map((image, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 snap-center group/item cursor-pointer transform transition-all duration-300 hover:scale-105"
                          onClick={() => openLightbox(image)}
                        >
                          <div className="relative w-80 md:w-[500px] h-64 md:h-[400px] overflow-hidden rounded-xl border-4 border-white shadow-xl bg-white p-3">
                            <img
                              src={image}
                              alt={`${title} - Galería ${index + 6}`}
                              className="w-full h-full object-cover rounded"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-full text-sm font-bold text-foreground opacity-0 group-hover/item:opacity-100 transition-opacity">
                              Click para ampliar
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Botón siguiente */}
                    <button
                      onClick={() => scrollCarousel('next')}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-accent/90 hover:bg-accent text-white p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1/2"
                      aria-label="Siguiente"
                    >
                      <FaChevronRight size={24} />
                    </button>
                  </div>
                  
                  {/* Indicador de scroll */}
                  <div className="mt-6 flex justify-center gap-2">
                    {carouselImages.map((_, index) => (
                      <div
                        key={index}
                        className="h-2 w-2 rounded-full bg-muted/30"
                      />
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </section>
      </div>

      {/* Lightbox para imágenes */}
      {isLightboxOpen && lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${title}`}
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-6 top-6 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white transition duration-300 hover:bg-white/20"
            aria-label="Cerrar galería"
          >
            <FaTimes aria-hidden="true" size={24} />
          </button>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white p-4 rounded-lg shadow-2xl">
              <img 
                src={lightboxImage} 
                alt={`${title} imagen ampliada`} 
                className="w-full max-h-[80vh] object-contain rounded" 
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
