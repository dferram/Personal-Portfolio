// ============================================================================
// COMPONENTE: ViewExperience
// ============================================================================
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES_DATA } from '@/data/experiencesData';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedValue } from '@/i18n/utils';
import { FaArrowLeft, FaUndo } from 'react-icons/fa';

export default function ViewExperience() {
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

  const allPhotos = useMemo(() => {
    const photos = [];
    if (experience.images?.hero) photos.push(experience.images.hero);
    if (experience.images?.gallery) photos.push(...experience.images.gallery);
    if (photos.length === 0 && experience.imageUrl) photos.push(experience.imageUrl);
    return photos;
  }, [experience]);

  const [positions, setPositions] = useState([]);
  const [swipedPhotos, setSwipedPhotos] = useState(new Set());
  
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const count = allPhotos.length;
    if (count === 0) return;

    const newPositions = [];

    // Para un estilo "Moodboard" denso que llene toda la pantalla
    const colsDesktop = Math.ceil(Math.sqrt(count * 1.5)); 
    const colsMobile = Math.ceil(Math.sqrt(count * 0.8));
    
    const actualCols = isDesktop ? Math.max(3, colsDesktop) : Math.max(2, colsMobile);
    const rows = Math.ceil(count / actualCols);
    
    const cellWidth = 100 / actualCols; 
    const cellHeight = 100 / rows;
    
    // El factor de solapamiento asegura que las fotos sean más grandes que su celda
    // para cubrir todos los huecos
    const overlapFactor = 1.4; 
    
    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < actualCols; c++) {
        if (i >= count) break;
        
        // Tamaño base más grande que la celda para forzar el solapamiento
        const wMob = Math.max(35, cellWidth * overlapFactor);
        const wDes = Math.max(20, cellWidth * overlapFactor);
        
        // Calculamos un estimado de la altura. 
        // Usamos 1.33 (formato retrato) para evitar que fotos verticales se salgan del borde inferior
        const hMob = wMob * 1.33;
        const hDes = wDes * 1.33;
        
        // Centro exacto de la celda
        const cellCenterX = (c * cellWidth) + (cellWidth / 2);
        const cellCenterY = (r * cellHeight) + (cellHeight / 2);
        
        // Posicionarlo en el centro y darle una variación aleatoria leve
        // para que no parezca una cuadrícula perfecta
        let topRawM = cellCenterY - (hMob / 2) + (Math.random() - 0.5) * (cellHeight * 0.7);
        let leftRawM = cellCenterX - (wMob / 2) + (Math.random() - 0.5) * (cellWidth * 0.7);
        
        let topRawD = cellCenterY - (hDes / 2) + (Math.random() - 0.5) * (cellHeight * 0.7);
        let leftRawD = cellCenterX - (wDes / 2) + (Math.random() - 0.5) * (cellWidth * 0.7);
        
        // Restringir a los bordes para que no se recorten (margen del 2%)
        const maxTopM = 98 - hMob;
        const maxTopD = 98 - hDes;
        const maxLeftM = 98 - wMob;
        const maxLeftD = 98 - wDes;

        topRawM = Math.max(2, Math.min(maxTopM, topRawM));
        topRawD = Math.max(2, Math.min(maxTopD, topRawD));
        leftRawM = Math.max(2, Math.min(maxLeftM, leftRawM));
        leftRawD = Math.max(2, Math.min(maxLeftD, leftRawD));
        
        // Rotación muy sutil para dar estilo moodboard
        const rotate = (Math.random() - 0.5) * 18; 
        const swipeDirection = Math.random() > 0.5 ? 1 : -1;
        
        newPositions.push({
          topMobile: `${topRawM}%`,
          topDesktop: `${topRawD}%`,
          leftMobile: `${leftRawM}%`,
          leftDesktop: `${leftRawD}%`,
          wMobile: `${wMob}%`,
          wDesktop: `${wDes}%`,
          rotate,
          swipeDirection
        });
        i++;
      }
    }
    
    // Barajar las posiciones para que las capas z-index no sigan el patrón de la cuadrícula
    const shuffledPositions = [...newPositions].sort(() => Math.random() - 0.5);
    setPositions(shuffledPositions);
  }, [allPhotos, isDesktop]);

  const handlePhotoClick = (index) => {
    setSwipedPhotos(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  const handleResetPhotos = () => {
    setSwipedPhotos(new Set());
  };

  const localizedTitle = getLocalizedValue(experience.title, language);

  return (
    <section className="relative w-full min-h-[100vh] bg-[#f2efe9] overflow-x-hidden overflow-y-auto flex flex-col pt-20">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Botón Volver */}
      <div className="fixed top-28 left-6 md:top-32 md:left-10 z-[300]">
        <button 
          onClick={() => navigate('/experiencias')}
          className="btn-glass px-5 py-2 md:px-6 md:py-3 text-[10px] md:text-sm font-bold tracking-widest flex items-center gap-2 shadow-lg"
        >
          {t('viewExperience.backToExperiences') ?? 'BACK TO EXPERIENCES'}
        </button>
      </div>

      {/* Botón Restaurar Fotos */}
      <AnimatePresence>
        {swipedPhotos.size > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-28 right-6 md:top-32 md:right-10 z-[300]"
          >
            <button 
              onClick={handleResetPhotos}
              className="btn-glass px-5 py-2 md:px-6 md:py-3 text-[10px] md:text-sm font-bold tracking-widest flex items-center gap-2 shadow-lg"
            >
              <FaUndo /> RESTAURAR FOTOS
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Título Global */}
      <div className="relative mt-24 md:mt-32 w-full px-8 text-center z-[10] flex flex-col items-center justify-center min-h-[150px] md:min-h-[200px]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-visible w-full px-4">
          <span
            className="absolute font-black leading-none text-accent max-w-[95vw] break-words text-center"
            style={{
              fontSize: 'clamp(4rem, 12vw, 12rem)',
              opacity: 0.1,
              letterSpacing: '-0.02em',
              transform: 'translateY(-15%) scale(1.15)',
            }}
          >
            {localizedTitle}
          </span>
          <span
            className="absolute font-black leading-none text-accent max-w-[95vw] break-words text-center"
            style={{
              fontSize: 'clamp(4rem, 12vw, 12rem)',
              opacity: 0.3,
              letterSpacing: '-0.02em',
              transform: 'translateY(-5%) scale(1.05)',
            }}
          >
            {localizedTitle}
          </span>
          <span
            className="absolute font-black leading-none text-accent max-w-[95vw] break-words text-center"
            style={{
              fontSize: 'clamp(4rem, 12vw, 12rem)',
              opacity: 1,
              letterSpacing: '-0.02em',
              transform: 'translateY(5%) scale(0.95)',
            }}
          >
            {localizedTitle}
          </span>
        </div>
      </div>

      {/* Contenedor del Collage */}
      <div className="relative w-full h-[90vh] md:h-[95vh] max-w-[1800px] mx-auto mt-8 md:mt-12">
        {positions.length > 0 && allPhotos.map((photoUrl, i) => {
          const pos = positions[i];
          if (!pos) return null;
          
          const isSwiped = swipedPhotos.has(i);
          
          return (
            <motion.div
              key={i}
              className="absolute group"
              style={{
                top: isDesktop ? pos.topDesktop : pos.topMobile,
                left: isDesktop ? pos.leftDesktop : pos.leftMobile,
                width: isDesktop ? pos.wDesktop : pos.wMobile,
                zIndex: isSwiped ? 999 + i : 100 + i,
              }}
              whileHover={!isSwiped ? { zIndex: 500, scale: 1.15, transition: { duration: 0.4, ease: "easeOut" } } : {}}
            >
              <div className="w-full h-full">
                <motion.div
                  initial={{ opacity: 0, y: 150, scale: 0.8, rotate: pos.rotate - 10 }}
                  animate={
                    isSwiped 
                    ? { opacity: 0, x: pos.swipeDirection * (window.innerWidth * 0.9), y: window.innerHeight * 0.5, rotate: pos.rotate + (pos.swipeDirection * 120), scale: 0.7 }
                    : { opacity: 1, x: 0, y: 0, scale: 1, rotate: pos.rotate }
                  }
                  transition={{ 
                    duration: isSwiped ? 1.2 : 0.8, 
                    ease: isSwiped ? [0.32, 0, 0.1, 1] : "backOut",
                    delay: isSwiped ? 0 : i * 0.05, 
                  }}
                  style={{ willChange: "transform, opacity" }}
                  className={`relative w-full overflow-hidden rounded-md md:rounded-xl border-[2px] md:border-[4px] border-white shadow-xl bg-white ${isSwiped ? 'pointer-events-none' : 'cursor-pointer'}`}
                  onClick={() => !isSwiped && handlePhotoClick(i)}
                  title={language === 'en' ? "Click to swipe photo aside" : "Clic para hacer a un lado la foto"}
                >
                  <img
                    src={photoUrl}
                    alt={`${localizedTitle} photo ${i}`}
                    className="w-full h-auto pointer-events-none drop-shadow-md"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
        
        {allPhotos.length === 0 && (
          <div className="w-full h-full flex flex-col items-center justify-center z-10 relative">
            <p className="text-muted mt-4">No hay fotos disponibles para este evento.</p>
          </div>
        )}
      </div>
    </section>
  );
}
