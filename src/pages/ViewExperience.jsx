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

// Función para procesar texto con negritas usando markdown (**texto**)
function parseTextWithBold(text) {
  if (!text) return null;
  
  // Dividir el texto por el patrón **texto**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, index) => {
    // Si la parte está entre **, renderizar en negrita
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return <strong key={index} className="font-bold text-foreground">{boldText}</strong>;
    }
    // Si no, renderizar como texto normal
    return <span key={index}>{part}</span>;
  });
}

function ListSection({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-accent">{title}</h3>
      <ul className="mt-6 space-y-5 text-lg md:text-xl leading-relaxed text-muted">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="flex gap-4">
            <span className="mt-2.5 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent" />
            <span>{parseTextWithBold(item)}</span>
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

    // IMPORTANTE: Separar imagen Hero de la galería para evitar duplicación
    const heroImage = experience.images?.hero ?? null;
    const galleryImages = Array.isArray(experience.images?.gallery) ? experience.images.gallery : [];
    
    // Filtrar la imagen hero de la galería para que no se repita
    const gallery = heroImage 
      ? galleryImages.filter(img => img !== heroImage)
      : galleryImages;

    return {
      title: get(experience.title) ?? experience.title,
      date: get(experience.date) ?? experience.date,
      location: get(experience.location) ?? experience.location,
      description: get(experience.description) ?? experience.description,
      story: get(experience.story) ?? experience.story,
      learnings: getList(experience.learnings),
      heroImage,
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
    heroImage,
    gallery,
    category,
    instagramUrl,
  } = localized;

  const hasGallery = gallery.length > 0;
  
  // ============================================================================
  // SISTEMA DE ROTACIÓN AUTOMÁTICA DE IMÁGENES
  // ============================================================================
  // Configuración del intervalo de rotación (en milisegundos)
  // Cambia este valor para ajustar la velocidad de rotación:
  // - 10000 = 10 segundos (valor actual)
  // - 5000 = 5 segundos (más rápido)
  // - 15000 = 15 segundos (más lento)
  const ROTATION_INTERVAL = 10000;
  
  // Estado para controlar el índice de rotación actual
  const [rotationIndex, setRotationIndex] = useState(0);
  
  // Mezclar imágenes usando algoritmo Fisher-Yates (shuffle perfecto)
  // Esto asegura que todas las imágenes se muestren antes de repetir
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Estado para las imágenes mezcladas (se inicializa una sola vez)
  const [shuffledImages, setShuffledImages] = useState([]);
  
  // Inicializar imágenes mezcladas cuando cambia la galería
  useEffect(() => {
    if (gallery.length > 0) {
      const shuffled = shuffleArray(gallery);
      setShuffledImages(shuffled);
      setRotationIndex(0);
    }
  }, [gallery]);
  
  // Efecto para rotación automática de imágenes
  useEffect(() => {
    if (shuffledImages.length === 0) return;
    
    const interval = setInterval(() => {
      setRotationIndex((prevIndex) => {
        // Cuando llegamos al final, volver a mezclar y empezar de nuevo
        if (prevIndex >= shuffledImages.length - 5) {
          setShuffledImages(shuffleArray(gallery));
          return 0;
        }
        return prevIndex + 1;
      });
    }, ROTATION_INTERVAL);
    
    return () => clearInterval(interval);
  }, [shuffledImages, gallery]);
  
  // Calcular cuántas imágenes necesitamos para las cartas del scrapbook
  // Dividir la historia en párrafos para saber cuántas cartas habrá
  const storyParagraphs = story ? story.split('\n\n').filter(p => p.trim()) : [];
  const numCards = storyParagraphs.length;
  
  // Obtener las imágenes actuales para las cartas (sin repeticiones)
  // Usamos rotationIndex para rotar el conjunto de imágenes
  const getStoryImages = () => {
    if (shuffledImages.length === 0) return [];
    
    // Si no hay suficientes imágenes para todas las cartas, mostrar advertencia
    if (shuffledImages.length < numCards) {
      console.warn(`⚠️ Advertencia: Solo hay ${shuffledImages.length} imágenes pero se necesitan ${numCards} para las cartas. Algunas cartas no tendrán imagen.`);
    }
    
    // Crear un array circular para evitar errores si hay menos imágenes que cartas
    const images = [];
    for (let i = 0; i < numCards; i++) {
      const imageIndex = (rotationIndex + i) % shuffledImages.length;
      images.push(shuffledImages[imageIndex]);
    }
    return images;
  };
  
  const storyImages = getStoryImages();
  
  // Imágenes restantes para el carrusel (las que no se usan en las cartas)
  const carouselImages = shuffledImages.filter((img, idx) => {
    const usedIndices = [];
    for (let i = 0; i < numCards; i++) {
      usedIndices.push((rotationIndex + i) % shuffledImages.length);
    }
    return !usedIndices.includes(idx);
  });
  
  const hasCarousel = carouselImages.length > 0;
  
  
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
              <div className="flex flex-wrap gap-8 pb-10 border-b border-gray-200">
                <div className="flex flex-col">
                  <p className="text-base uppercase tracking-[0.15em] text-muted font-medium">
                    {t('viewExperience.category') ?? 'Categoría'}
                  </p>
                  <p className="mt-2 text-xl font-bold text-foreground">{categoryLabel}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-base uppercase tracking-[0.15em] text-muted font-medium">
                    {t('viewExperience.date') ?? 'Fecha'}
                  </p>
                  <p className="mt-2 text-xl font-bold text-foreground">{date}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-base uppercase tracking-[0.15em] text-muted font-medium">
                    {t('viewExperience.location') ?? 'Ubicación'}
                  </p>
                  <p className="mt-2 text-xl font-bold text-foreground">{location}</p>
                </div>
                {instagramUrl && (
                  <div className="flex items-end">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-6 py-3 text-base font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <FaInstagram size={20} />
                      {t('experiences.instagram.viewButton') ?? 'Ver en Instagram'}
                    </a>
                  </div>
                )}
              </div>

              {/* Historia con imágenes integradas estilo scrapbook */}
              {story && (
                <div>
                  <h2 className="text-lg md:text-2xl font-bold uppercase tracking-[0.2em] text-accent mb-10">
                    {t('viewExperience.story') ?? 'Historia'}
                  </h2>
                  
                  {/* Contenedor tipo álbum de recuerdos con rotación automática */}
                  <div className="space-y-12">
                    {storyParagraphs.map((paragraph, pIndex) => {
                      // Asignar imagen según el índice del párrafo
                      const hasImage = storyImages[pIndex];
                      const imagePosition = pIndex % 2 === 0 ? 'right' : 'left';
                      
                      return (
                        <div key={pIndex} className="relative">
                          {hasImage && imagePosition === 'right' ? (
                            // Imagen a la derecha con animación de entrada y efecto tape
                            // PERSONALIZACIÓN: Cambia colores de tape en 'bg-blue-200/40' o rotación en 'rotate-[]'
                            <div className="md:grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
                              <div>
                                <p className="text-lg md:text-xl leading-relaxed text-muted">{parseTextWithBold(paragraph)}</p>
                              </div>
                              <div 
                                key={`img-right-${pIndex}-${rotationIndex}`}
                                className="mt-6 md:mt-0 flex justify-center md:justify-start"
                              >
                                <div
                                  className="group cursor-pointer relative transform transition-all duration-300 hover:scale-105 hover:rotate-1 animate-fadeInScale"
                                  onClick={() => openLightbox(storyImages[pIndex])}
                                >
                                  {/* CONTENEDOR ADAPTATIVO: Se ajusta al tamaño natural de cada imagen */}
                                  {/* PERSONALIZACIÓN: Cambia max-w-md para ancho máximo, max-h-96 para alto máximo */}
                                  {/* MARCO: Cambia p-2 para grosor del marco blanco, shadow-clean-lg para sombra */}
                                  <div className="relative inline-block rounded-lg shadow-clean-lg bg-white p-2 transform rotate-2">
                                    {/* Tape effect decorations - cinta adhesiva translúcida tipo scotch */}
                                    {/* POSICIONAMIENTO RELATIVO AL MARCO: El tape está dentro del contenedor del marco */}
                                    {/* para que rote y escale junto con él. Usa porcentajes para adaptarse al tamaño. */}
                                    {/* PERSONALIZACIÓN: Ajusta left-[10%] right-[10%] para posición horizontal relativa */}
                                    {/* Ajusta -top-4 -bottom-4 para separación vertical del borde del marco */}
                                    <div 
                                      className="absolute -top-4 left-[10%] w-20 h-8 bg-yellow-100/60 rotate-[-8deg] z-10 shadow-sm"
                                      style={{ 
                                        backdropFilter: 'blur(0.5px)',
                                        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.15)'
                                      }}
                                    />
                                    <div 
                                      className="absolute -bottom-4 right-[10%] w-20 h-8 bg-yellow-100/60 rotate-[12deg] z-10 shadow-sm"
                                      style={{ 
                                        backdropFilter: 'blur(0.5px)',
                                        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.15)'
                                      }}
                                    />
                                    <img 
                                      src={storyImages[pIndex]} 
                                      alt={`${title} - Momento ${pIndex + 1}`}
                                      className="max-w-full max-h-80 md:max-h-96 w-auto h-auto object-contain rounded"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : hasImage && imagePosition === 'left' ? (
                            // Imagen a la izquierda con animación de entrada y efecto tape
                            // PERSONALIZACIÓN: Cambia colores de tape en 'bg-blue-200/40' o rotación en 'rotate-[]'
                            <div className="md:grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
                              <div 
                                key={`img-left-${pIndex}-${rotationIndex}`}
                                className="mb-6 md:mb-0 flex justify-center md:justify-end"
                              >
                                <div
                                  className="group cursor-pointer relative transform transition-all duration-300 hover:scale-105 hover:-rotate-1 animate-fadeInScale"
                                  onClick={() => openLightbox(storyImages[pIndex])}
                                >
                                  {/* CONTENEDOR ADAPTATIVO: Se ajusta al tamaño natural de cada imagen */}
                                  {/* PERSONALIZACIÓN: Cambia max-w-md para ancho máximo, max-h-96 para alto máximo */}
                                  {/* MARCO: Cambia p-2 para grosor del marco blanco, shadow-clean-lg para sombra */}
                                  <div className="relative inline-block rounded-lg shadow-clean-lg bg-white p-2 transform -rotate-2">
                                    {/* Tape effect decorations - cinta adhesiva translúcida tipo scotch */}
                                    {/* POSICIONAMIENTO RELATIVO AL MARCO: El tape está dentro del contenedor del marco */}
                                    {/* para que rote y escale junto con él. Usa porcentajes para adaptarse al tamaño. */}
                                    {/* PERSONALIZACIÓN: Ajusta left-[10%] right-[10%] para posición horizontal relativa */}
                                    {/* Ajusta -top-4 -bottom-4 para separación vertical del borde del marco */}
                                    <div 
                                      className="absolute -top-4 right-[10%] w-20 h-8 bg-yellow-100/60 rotate-[8deg] z-10 shadow-sm"
                                      style={{ 
                                        backdropFilter: 'blur(0.5px)',
                                        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.15)'
                                      }}
                                    />
                                    <div 
                                      className="absolute -bottom-4 left-[10%] w-20 h-8 bg-yellow-100/60 rotate-[-12deg] z-10 shadow-sm"
                                      style={{ 
                                        backdropFilter: 'blur(0.5px)',
                                        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.15)'
                                      }}
                                    />
                                    <img 
                                      src={storyImages[pIndex]} 
                                      alt={`${title} - Momento ${pIndex + 1}`}
                                      className="max-w-full max-h-80 md:max-h-96 w-auto h-auto object-contain rounded"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <p className="text-lg md:text-xl leading-relaxed text-muted">{parseTextWithBold(paragraph)}</p>
                              </div>
                            </div>
                          ) : (
                            // Solo texto
                            <div>
                              <p className="text-lg md:text-xl leading-relaxed text-muted">{parseTextWithBold(paragraph)}</p>
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
                <div className="mt-16">
                  <h2 className="text-lg md:text-2xl font-bold uppercase tracking-[0.2em] text-accent mb-10">
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
                    
                    {/* Carrusel con imágenes responsive (sin espacios blancos excesivos) */}
                    {/* PERSONALIZACIÓN DE BORDE: Cambia 'border-2' a border-3 para grosor */}
                    {/* Cambia 'border-gray-300' por otro color (ej: border-white, border-gray-400) */}
                    <div 
                      ref={carouselRef}
                      className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-6"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {carouselImages.map((image, index) => (
                        <div
                          key={`carousel-${index}-${image}`}
                          className="flex-shrink-0 snap-center group/item cursor-pointer transform transition-all duration-300 hover:scale-105"
                          onClick={() => openLightbox(image)}
                        >
                          {/* CONTENEDOR ADAPTATIVO: Cada imagen se muestra en su tamaño y proporción natural */}
                          {/* LÍMITES DE TAMAÑO: Cambia max-w-md md:max-w-2xl para ancho máximo */}
                          {/* Cambia max-h-80 md:max-h-[500px] para alto máximo */}
                          {/* MARCO: Cambia p-2 para grosor, bg-white para color, shadow-clean-lg para sombra */}
                          <div className="relative inline-block rounded-lg shadow-clean-lg bg-white p-2">
                            <img
                              src={image}
                              alt={`${title} - Galería ${index + 1}`}
                              className="max-w-xs md:max-w-2xl max-h-80 md:max-h-[500px] w-auto h-auto object-contain rounded"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity rounded-lg" />
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
