// ============================================================================
// COMPONENTE: ExperienceDetail
// ============================================================================
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EXPERIENCES_DATA } from '@/data/experiencesData';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedValue } from '@/i18n/utils';
import { FaArrowLeft } from 'react-icons/fa';

export default function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useI18n();

  const experience = EXPERIENCES_DATA.find((e) => e.id === id);

  if (!experience) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary">
        <h1 className="text-2xl font-bold text-foreground">Experiencia no encontrada</h1>
        <button onClick={() => navigate('/experiencias')} className="btn-glass ml-4 px-6 py-2">Volver</button>
      </div>
    );
  }

  // Juntar todas las fotos disponibles del evento y limitarlas
  const allPhotos = useMemo(() => {
    const photos = [];
    if (experience.images?.hero) photos.push(experience.images.hero);
    if (experience.images?.gallery) photos.push(...experience.images.gallery);
    if (photos.length === 0 && experience.imageUrl) photos.push(experience.imageUrl);
    
    // Si hay demasiadas fotos (ej. > 15), limitamos a 12 o 15 para no saturar el scrapbook
    // Puedes ajustar este número según te parezca mejor
    return photos.slice(0, 15);
  }, [experience]);

  // Generar posiciones aleatorias pero uniformes para abarcar toda la pantalla
  const [positions, setPositions] = useState([]);
  
  useEffect(() => {
    const count = allPhotos.length;
    if (count === 0) return;

    const newPositions = [];
    // Determinar cuadrícula para distribuir las fotos a lo ancho
    const cols = Math.max(2, Math.ceil(Math.sqrt(count * 1.5)));
    const rows = Math.ceil(count / cols);
    
    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (i >= count) break;
        
        // Base de distribución (0% a 70% para no salir de la pantalla)
        const topBase = rows > 1 ? (r / (rows - 1)) * 65 : 30;
        const leftBase = cols > 1 ? (c / (cols - 1)) * 75 : 40;
        
        // Añadir jitter/desorden aleatorio
        const top = topBase + (Math.random() * 15 - 5);
        const left = leftBase + (Math.random() * 10 - 5);
        
        // Tamaño responsivo
        const widthMobile = Math.max(40, 80 / cols);
        const widthDesktop = Math.max(20, 60 / cols);
        
        // Rotación desordenada
        const rotate = (Math.random() - 0.5) * 40; // -20 a +20 grados
        
        newPositions.push({
          top: `${Math.max(5, Math.min(80, top))}%`,
          left: `${Math.max(2, Math.min(75, left))}%`,
          wMobile: `${widthMobile}%`,
          wDesktop: `${widthDesktop}%`,
          rotate,
          z: 10 + i
        });
        i++;
      }
    }
    
    // Mezclar las posiciones para que no se vean ordenadas
    setPositions(newPositions.sort(() => Math.random() - 0.5));
  }, [allPhotos]);

  const localizedTitle = getLocalizedValue(experience.title, language) || experience.title;
  const hoverText = getLocalizedValue(experience.learnings, language) || getLocalizedValue(experience.story, language) || getLocalizedValue(experience.description, language);

  return (
    <section className="relative w-full h-screen bg-primary-dark overflow-hidden flex flex-col">
      
      {/* Fondos ambientales */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Botón Volver */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-[100]">
        <button 
          onClick={() => navigate('/experiencias')}
          className="btn-glass px-6 py-3 text-xs md:text-sm font-bold tracking-widest flex items-center gap-3 shadow-lg"
        >
          <FaArrowLeft /> {language === 'es' ? 'VOLVER A EXPERIENCIAS' : 'BACK TO EXPERIENCES'}
        </button>
      </div>

      {/* Contenedor del Collage Full Width */}
      <div className="relative w-full h-full max-w-[1800px] mx-auto overflow-hidden">
        {positions.length > 0 && allPhotos.map((photoUrl, i) => {
          const pos = positions[i];
          if (!pos) return null;
          
          return (
            <div
              key={i}
              className="absolute group transition-transform duration-500 hover:!z-[200] hover:scale-[1.15]"
              style={{
                top: pos.top,
                left: pos.left,
                width: window.innerWidth < 768 ? pos.wMobile : pos.wDesktop,
                zIndex: pos.z,
              }}
            >
              <div className="w-full h-full" style={{ transform: `rotate(${pos.rotate}deg)` }}>
                <motion.div
                  initial={{ opacity: 0, y: 150, scale: 0.8, rotate: pos.rotate - 10 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 70
                  }}
                  className="relative w-full overflow-hidden rounded-md md:rounded-xl border-[4px] md:border-[12px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.25)] bg-white cursor-pointer"
                >
                  <img
                    src={photoUrl}
                    alt={`${localizedTitle} photo ${i}`}
                    className="w-full h-auto object-cover aspect-[4/3] pointer-events-none"
                    loading="lazy"
                  />
                  
                  {/* Text on Hover */}
                  <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 md:p-8 text-center backdrop-blur-sm">
                    <span className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-[10px] md:text-sm font-bold uppercase tracking-widest text-white shadow-md">
                      {localizedTitle}
                    </span>
                    {hoverText && (
                      <div className="overflow-y-auto max-h-[80%] custom-scrollbar mt-2 px-2">
                        <p className="text-white/90 text-xs md:text-sm lg:text-base leading-relaxed drop-shadow-md">
                          {hoverText}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
        
        {/* Placeholder if no photos */}
        {allPhotos.length === 0 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-foreground">{localizedTitle}</h2>
            <p className="text-muted mt-4">No hay fotos disponibles para este evento.</p>
          </div>
        )}
      </div>
    </section>
  );
}
