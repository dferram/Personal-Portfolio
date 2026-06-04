// ============================================================================
// COMPONENTE: ExperiencesPage
// ============================================================================
// Página dedicada a mostrar las experiencias (viajes, hackathones, conferencias, etc.)
// Sigue el mismo patrón de diseño que CertificatesPage para mantener consistencia visual.
//
// PERSONALIZACIÓN:
// - Para cambiar el diseño de las cards, modifica las clases de Tailwind en el <article>
// - Para agregar filtros por categoría, implementa un estado local y filtra EXPERIENCES_DATA
// - Los textos se gestionan desde src/i18n/translations.js (sección 'experiences')
//
// INTEGRACIÓN CON INSTAGRAM:
// - Si una experiencia tiene 'instagramUrl', se mostrará un botón "Ver en Instagram"
// - El botón usa el diseño y colores del portafolio para mantener consistencia
// - Si NO tiene 'instagramUrl', la experiencia se muestra normalmente sin cambios
// ============================================================================

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EXPERIENCES_DATA } from '@/data/experiencesData';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedValue } from '@/i18n/utils';
import { FaInstagram } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
};

export default function ExperiencesPage() {
  const { t, language } = useI18n();
  const navigate = useNavigate();

  // Obtener textos traducidos desde el sistema i18n
  const title = t('experiences.title') ?? 'Mis Experiencias';
  const subtitle = t('experiences.subtitle');

  // Mapeo de categorías a etiquetas traducidas
  const getCategoryLabel = (category) => {
    const label = t(`experiences.categories.${category}`);
    return label || category;
  };

  // Cargar el script de Instagram Embeds (solo una vez al montar el componente)
  // Este script permite que Instagram procese automáticamente los embeds en la página
  useEffect(() => {
    // Verificar si el script ya existe para evitar duplicados
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      // Si el script ya existe, procesar los embeds nuevamente
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-primary-dark py-24 px-6 text-foreground md:px-10 overflow-hidden">
      {/* Ambient background blobs matching CertificatesPage */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header de la página */}
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="inline-block text-4xl font-black text-foreground md:text-5xl">
              {title}
            </h1>
            {subtitle && <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>}
          </motion.div>
        </header>

        {/* Grid de experiencias - Mismo diseño que CertificatesPage */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {EXPERIENCES_DATA.map((experience) => {
            // Obtener valores localizados según el idioma actual
            const localizedTitle = getLocalizedValue(experience.title, language) ?? experience.title;
            const localizedDate = getLocalizedValue(experience.date, language) ?? experience.date;
            const localizedLocation = getLocalizedValue(experience.location, language) ?? experience.location;
            const categoryLabel = getCategoryLabel(experience.category);
            
            // Verificar si la experiencia tiene contenido extendido para mostrar página de detalle
            const hasExtendedContent = experience.story || experience.learnings || experience.images;
            
            const goToDetail = () => {
              if (hasExtendedContent) {
                navigate(`/experiencia/${experience.id}`);
              }
            };
            
            const handleKeyDown = (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                goToDetail();
              }
            };

            return (
              <motion.article
                key={experience.id}
                variants={cardVariants}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl shadow-clean transition duration-300 hover:-translate-y-2 hover:shadow-clean-lg hover:border-accent/40 ${
                  hasExtendedContent ? 'cursor-pointer' : ''
                }`}
                style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-muted)', borderWidth: '1px' }}
                role={hasExtendedContent ? 'link' : undefined}
                tabIndex={hasExtendedContent ? 0 : undefined}
                aria-label={hasExtendedContent ? `Ver detalles de ${localizedTitle}` : undefined}
                onClick={hasExtendedContent ? goToDetail : undefined}
                onKeyDown={hasExtendedContent ? handleKeyDown : undefined}
              >
                {/* Hover accent top border matching CertificatesPage */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-light via-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                {/* Imagen de la experiencia con overlay gradient (mismo estilo que CertificatesPage) */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={experience.imageUrl}
                    alt={`${localizedTitle} - ${localizedLocation}`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  {/* Gradient overlay para mejorar legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Badge de categoría en la esquina superior derecha */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-md">
                      {categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Contenido de la card */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Título de la experiencia */}
                  <h3 className="text-xl font-bold text-foreground">{localizedTitle}</h3>
                  
                  {/* Fecha - Estilo similar a CertificatesPage */}
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {localizedDate}
                  </p>
                  
                  {/* Ubicación */}
                  <p className="mt-1 text-sm text-muted">{localizedLocation}</p>

                  {/* SECCIÓN DE INSTAGRAM (solo se muestra si existe instagramUrl) */}
                  {experience.instagramUrl && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      {/* Botón para ver en Instagram */}
                      <a
                        href={experience.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:shadow-lg hover:scale-105"
                      >
                        <FaInstagram size={16} />
                        {t('experiences.instagram.viewButton') ?? (language === 'es' ? 'Ver en Instagram' : 'View on Instagram')}
                      </a>
                      
                      {/* Texto informativo */}
                      <p className="mt-2 text-xs text-muted italic">
                        {t('experiences.instagram.relatedPost') ?? (language === 'es' 
                          ? 'Publicación relacionada con esta experiencia' 
                          : 'Related post about this experience')}
                      </p>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Mensaje cuando no hay experiencias (opcional) */}
        {EXPERIENCES_DATA.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-muted">
              {language === 'es' 
                ? 'No hay experiencias registradas aún.' 
                : 'No experiences registered yet.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
