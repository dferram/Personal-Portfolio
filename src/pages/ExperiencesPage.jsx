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
// ============================================================================

import { EXPERIENCES_DATA } from '@/data/experiencesData';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedValue } from '@/i18n/utils';

export default function ExperiencesPage() {
  const { t, language } = useI18n();

  // Obtener textos traducidos desde el sistema i18n
  const title = t('experiences.title') ?? 'Mis Experiencias';
  const subtitle = t('experiences.subtitle');

  // Mapeo de categorías a etiquetas traducidas
  const getCategoryLabel = (category) => {
    const label = t(`experiences.categories.${category}`);
    return label || category;
  };

  return (
    <section className="relative min-h-screen bg-primary-dark py-24 px-6 text-foreground md:px-10">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header de la página */}
        <header className="text-center">
          <h1 className="inline-block text-4xl font-black text-foreground md:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>}
        </header>

        {/* Grid de experiencias - Mismo diseño que CertificatesPage */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES_DATA.map((experience) => {
            // Obtener valores localizados según el idioma actual
            const localizedTitle = getLocalizedValue(experience.title, language) ?? experience.title;
            const localizedDate = getLocalizedValue(experience.date, language) ?? experience.date;
            const localizedLocation = getLocalizedValue(experience.location, language) ?? experience.location;
            const localizedDescription = getLocalizedValue(experience.description, language) ?? experience.description;
            const categoryLabel = getCategoryLabel(experience.category);

            return (
              <article
                key={experience.id}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-clean transition duration-300 hover:-translate-y-2 hover:shadow-clean-lg"
              >
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
                  
                  {/* Descripción */}
                  <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                    {localizedDescription}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

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
