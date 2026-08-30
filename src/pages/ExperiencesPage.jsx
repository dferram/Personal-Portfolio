// ============================================================================
// COMPONENTE: ExperiencesPage
// ============================================================================
// Página que muestra las experiencias con un scroll horizontal (estilo carrusel)
// Cada experiencia tiene su propio collage de fotos ("pila") que animan al entrar.
// ============================================================================

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EXPERIENCES_DATA } from '@/data/experiencesData';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedValue } from '@/i18n/utils';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// Definimos posiciones fijas para la pila de fotos para que parezca un collage
// Permitiremos hasta 8 fotos por evento para no saturar demasiado la pila
const PILE_POSITIONS = [
  { top: '5%', left: '5%', rotate: -12, w: '40%', z: 10 },
  { top: '15%', left: '45%', rotate: 8, w: '45%', z: 15 },
  { top: '40%', left: '2%', rotate: -5, w: '38%', z: 20 },
  { top: '55%', left: '50%', rotate: 15, w: '42%', z: 25 },
  { top: '65%', left: '15%', rotate: -8, w: '46%', z: 30 },
  { top: '10%', left: '30%', rotate: -2, w: '35%', z: 35 },
  { top: '25%', left: '25%', rotate: 5, w: '55%', z: 40 }, // Hero image
  { top: '75%', left: '40%', rotate: -6, w: '35%', z: 12 },
];

const EventCollage = ({ experience }) => {
  const { t, language } = useI18n();
  const navigate = useNavigate();
  
  // Extraemos las fotos de este evento específico
  const photos = React.useMemo(() => {
    let p = [];
    if (experience.images?.hero) p.push(experience.images.hero);
    if (experience.images?.gallery) p.push(...experience.images.gallery);
    if (p.length === 0 && experience.imageUrl) p.push(experience.imageUrl);
    
    // Eliminar duplicados (hero suele estar también en la galería)
    p = [...new Set(p)];
    
    // Mezclar las fotos aleatoriamente para que el collage cambie
    p = p.sort(() => Math.random() - 0.5);

    // Limitamos a las posiciones disponibles (máximo 8) para mantener el look de pila desordenada
    return p.slice(0, PILE_POSITIONS.length);
  }, [experience]);

  const localizedTitle = getLocalizedValue(experience.title, language) || experience.title;
  const localizedDesc = getLocalizedValue(experience.description, language) || experience.description;

  return (
    <div className="w-screen h-full flex-shrink-0 snap-center relative flex flex-col md:flex-row items-center justify-center p-6 md:p-16 lg:p-24 pt-24 overflow-hidden">
      
      {/* Información del Evento (Lado Izquierdo) */}
      <div className="w-full md:w-5/12 flex flex-col justify-center z-50 mb-8 md:mb-0 md:pr-12 lg:pr-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-md">
            {t(`experiences.categories.${experience.category}`) || experience.category}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 drop-shadow-sm leading-tight">
            {localizedTitle}
          </h2>
          <p className="text-muted text-sm md:text-base font-medium mb-8 leading-relaxed max-w-lg">
            {localizedDesc}
          </p>
          <button 
            onClick={() => navigate(`/experiencia/${experience.id}`)}
            className="btn-glass px-8 py-4 text-sm tracking-widest uppercase w-max"
          >
            {language === 'es' ? 'Ver más...' : 'See more...'}
          </button>
        </motion.div>
      </div>

      {/* Pila de Fotos (Lado Derecho) */}
      <div className="w-full md:w-7/12 h-[50vh] md:h-[80vh] relative max-w-3xl mx-auto md:ml-auto">
        {photos.map((photoUrl, i) => {
          const pos = PILE_POSITIONS[i % PILE_POSITIONS.length];
          return (
            <div
              key={i}
              className="absolute hover:!z-50 transition-all duration-300"
              style={{
                top: pos.top,
                left: pos.left,
                width: pos.w,
                zIndex: pos.z,
              }}
            >
              <div className="w-full h-full" style={{ transform: `rotate(${pos.rotate}deg)` }}>
                <motion.div
                  initial={{ opacity: 0, y: 200, scale: 0.5, rotate: -30 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: i * 0.15, // Staggered drop effect: fotos "saliendo" una por una
                    type: "spring",
                    stiffness: 70,
                    damping: 12
                  }}
                  className={`relative w-full overflow-hidden rounded-sm md:rounded-lg border-[6px] md:border-[12px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.3)] bg-white group transition-transform duration-300 hover:scale-[1.1] cursor-pointer`}
                  onClick={() => navigate(`/experiencia/${experience.id}`)}
                >
                  <img
                    src={photoUrl}
                    alt={`Foto ${i + 1} de ${localizedTitle}`}
                    className="w-full h-auto object-cover aspect-[4/3] pointer-events-none"
                    loading="lazy"
                  />
                  
                  {/* Overlay sutil en Hover opcional para indicar clic */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest text-xs uppercase bg-accent/80 px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
                      {language === 'es' ? 'Ver Detalles' : 'View Details'}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default function ExperiencesPage() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = window.innerWidth;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (direction === 'right') {
        // Si estamos al final (con un pequeño margen para subpíxeles), volvemos al inicio
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        // Si estamos al inicio, vamos al final
        if (container.scrollLeft <= 10) {
          container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="relative w-full h-screen bg-primary-dark overflow-hidden flex flex-col">
      {/* Background ambient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Flechas de Navegación Lateral */}
      <div className="absolute top-1/2 left-2 md:left-6 -translate-y-1/2 z-50">
        <button 
          onClick={() => scroll('left')}
          className="btn-glass w-12 h-12 md:w-16 md:h-16 flex items-center justify-center !p-0 shadow-2xl shadow-black/20"
          aria-label="Anterior"
        >
          <FaChevronLeft size={20} className="text-muted" />
        </button>
      </div>
      <div className="absolute top-1/2 right-2 md:right-6 -translate-y-1/2 z-50">
        <button 
          onClick={() => scroll('right')}
          className="btn-glass w-12 h-12 md:w-16 md:h-16 flex items-center justify-center !p-0 shadow-2xl shadow-black/20"
          aria-label="Siguiente"
        >
          <FaChevronRight size={20} className="text-muted" />
        </button>
      </div>

      {/* Contenedor de Scroll Horizontal */}
      <div 
        ref={scrollContainerRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {EXPERIENCES_DATA.length > 0 ? (
          EXPERIENCES_DATA.map((exp) => (
            <EventCollage key={exp.id} experience={exp} />
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-muted font-bold">No hay experiencias registradas aún.</p>
          </div>
        )}
      </div>
      
    </section>
  );
}
