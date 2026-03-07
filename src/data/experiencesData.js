// ============================================================================
// ARCHIVO DE DATOS: EXPERIENCIAS
// ============================================================================
// Este archivo contiene todas las experiencias (viajes, hackathones, conferencias, 
// voluntariados, etc.) que se mostrarán en la sección "Experiencias" del portafolio.
//
// CÓMO AGREGAR UNA NUEVA EXPERIENCIA:
// ------------------------------------
// 1. Copia el objeto de ejemplo al final del array EXPERIENCES_DATA
// 2. Asigna un ID único (usa kebab-case, ej: "hackathon-nasa-2025")
// 3. Completa los campos en español (es) e inglés (en)
// 4. Agrega la URL de la imagen (puede ser local en /images/ o placeholder)
// 5. Selecciona una categoría existente o crea una nueva
// 6. Guarda el archivo - los cambios se reflejarán automáticamente
//
// CATEGORÍAS DISPONIBLES:
// - travel: Viajes
// - hackathon: Hackathones
// - conference: Conferencias
// - volunteer: Voluntariados
// - workshop: Talleres/Workshops
// - award: Premios/Reconocimientos
// - other: Otros
//
// FORMATO DE FECHAS:
// Usa formato "MM/YYYY" o "Mes YYYY" según prefieras
// ============================================================================

export const EXPERIENCES_DATA = [
  {
    // ID único para identificar la experiencia (obligatorio, debe ser único)
    id: 'viaje-japon-2023',
    
    // Título de la experiencia (obligatorio, multiidioma)
    title: {
      es: 'Viaje a Japón',
      en: 'Trip to Japan',
    },
    
    // Fecha de la experiencia (obligatorio, multiidioma)
    date: {
      es: 'Marzo 2023',
      en: 'March 2023',
    },
    
    // Ubicación donde ocurrió la experiencia (obligatorio, multiidioma)
    location: {
      es: 'Tokio, Japón',
      en: 'Tokyo, Japan',
    },
    
    // Descripción breve (máximo 3 líneas recomendadas, multiidioma)
    description: {
      es: 'Recorrido cultural enfocado en tecnología e innovación. Visité empresas tecnológicas líderes y exploré la intersección entre tradición y modernidad en el ecosistema tech japonés.',
      en: 'Cultural journey focused on technology and innovation. Visited leading tech companies and explored the intersection between tradition and modernity in the Japanese tech ecosystem.',
    },
    
    // URL de la imagen (puede ser ruta local /images/nombre.jpg o placeholder)
    // Para imágenes locales, coloca el archivo en la carpeta public/images/
    imageUrl: 'https://via.placeholder.com/400x250/1a1a1a/E50914?text=Viaje+a+Japón',
    
    // Categoría de la experiencia (obligatorio)
    // Opciones: 'travel', 'hackathon', 'conference', 'volunteer', 'workshop', 'award', 'other'
    category: 'travel',
  },
  
  {
    id: 'hackathon-xyz-2022',
    
    title: {
      es: 'Hackathon XYZ',
      en: 'XYZ Hackathon',
    },
    
    date: {
      es: 'Noviembre 2022',
      en: 'November 2022',
    },
    
    location: {
      es: 'Ciudad de México, México',
      en: 'Mexico City, Mexico',
    },
    
    description: {
      es: 'Desarrollé en equipo una aplicación web en menos de 48 horas. Implementamos un sistema de gestión de recursos comunitarios que obtuvo el segundo lugar en la categoría de impacto social.',
      en: 'Developed a web application as a team in under 48 hours. We implemented a community resource management system that won second place in the social impact category.',
    },
    
    imageUrl: 'https://via.placeholder.com/400x250/1a1a1a/E50914?text=Hackathon+XYZ',
    
    category: 'hackathon',
  },
  
  {
    id: 'jsconf-2024',
    
    title: {
      es: 'JSConf 2024',
      en: 'JSConf 2024',
    },
    
    date: {
      es: 'Junio 2024',
      en: 'June 2024',
    },
    
    location: {
      es: 'Montevideo, Uruguay',
      en: 'Montevideo, Uruguay',
    },
    
    description: {
      es: 'Participación como ponente sobre desarrollo frontend moderno. Presenté una charla sobre optimización de rendimiento en aplicaciones React y mejores prácticas de accesibilidad web.',
      en: 'Participated as a speaker on modern frontend development. Presented a talk on performance optimization in React applications and web accessibility best practices.',
    },
    
    imageUrl: 'https://via.placeholder.com/400x250/1a1a1a/E50914?text=JSConf+2024',
    
    category: 'conference',
  },
];

// ============================================================================
// EJEMPLO DE NUEVA EXPERIENCIA (COPIA ESTE BLOQUE PARA AGREGAR MÁS)
// ============================================================================
/*
{
  id: 'mi-nueva-experiencia-2025',
  
  title: {
    es: 'Título en Español',
    en: 'Title in English',
  },
  
  date: {
    es: 'Mes YYYY',
    en: 'Month YYYY',
  },
  
  location: {
    es: 'Ciudad, País',
    en: 'City, Country',
  },
  
  description: {
    es: 'Descripción breve de la experiencia en español (máximo 3 líneas).',
    en: 'Brief description of the experience in English (max 3 lines).',
  },
  
  imageUrl: 'https://via.placeholder.com/400x250/1a1a1a/E50914?text=Mi+Experiencia',
  
  category: 'travel', // Cambia según corresponda
},
*/
