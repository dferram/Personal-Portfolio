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
// 6. (OPCIONAL) Agrega el enlace de Instagram si publicaste sobre esta experiencia
// 7. Guarda el archivo - los cambios se reflejarán automáticamente
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
//
// INTEGRACIÓN CON INSTAGRAM (OPCIONAL):
// --------------------------------------
// Puedes vincular cada experiencia con una publicación de Instagram agregando
// el campo 'instagramUrl' con el enlace del post.
//
// CÓMO OBTENER EL ENLACE DE INSTAGRAM:
// 1. Abre la publicación en Instagram (web o app)
// 2. Toca los tres puntos (...) en la esquina superior derecha
// 3. Selecciona "Copiar enlace" o "Copy link"
// 4. Pega el enlace en el campo 'instagramUrl'
//
// FORMATOS VÁLIDOS DE URL:
// - https://www.instagram.com/p/ABC123xyz/
// - https://instagram.com/p/ABC123xyz/
// - https://www.instagram.com/reel/ABC123xyz/
//
// Si NO agregas 'instagramUrl', la experiencia se mostrará normalmente sin Instagram.
//
// PÁGINA DE DETALLE (OPCIONAL):
// ------------------------------
// Cada experiencia puede tener una página de detalle con contenido extendido.
// Para habilitar esto, agrega los siguientes campos:
//
// - story: Anécdota o historia extendida de la experiencia (multiidioma)
// - learnings: Lista de aprendizajes obtenidos (multiidioma, array)
// - images: Objeto con 'hero' (imagen principal) y 'gallery' (array de imágenes)
//
// Si estos campos NO están presentes, la experiencia solo se mostrará en la lista.
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
    
    // URL de Instagram (OPCIONAL)
    // Si publicaste sobre esta experiencia en Instagram, agrega el enlace aquí
    // Ejemplo: 'https://www.instagram.com/p/ABC123xyz/'
    // Si no tienes publicación, simplemente omite este campo o déjalo como undefined
    instagramUrl: 'https://www.instagram.com/p/ABC123xyz/', // Ejemplo - reemplaza con tu URL real
    
    // CONTENIDO EXTENDIDO PARA PÁGINA DE DETALLE (OPCIONAL)
    // Si agregas estos campos, la experiencia tendrá una página de detalle completa
    
    // Historia/Anécdota extendida (multiidioma)
    story: {
      es: 'Durante mi viaje a Japón, tuve la oportunidad de sumergirme en la cultura tecnológica del país. Visité empresas como Sony y Nintendo, donde pude ver de primera mano cómo la innovación y la tradición se fusionan. Una de las experiencias más memorables fue asistir a una conferencia sobre inteligencia artificial en Tokio, donde conocí a desarrolladores de todo el mundo.',
      en: 'During my trip to Japan, I had the opportunity to immerse myself in the country\'s tech culture. I visited companies like Sony and Nintendo, where I could see firsthand how innovation and tradition merge. One of the most memorable experiences was attending an AI conference in Tokyo, where I met developers from around the world.',
    },
    
    // Aprendizajes obtenidos (multiidioma, array)
    learnings: {
      es: [
        'La importancia de la atención al detalle en el desarrollo de productos.',
        'Cómo la cultura influye en el diseño de interfaces y experiencias de usuario.',
        'Nuevas perspectivas sobre la integración de tecnología en la vida cotidiana.',
      ],
      en: [
        'The importance of attention to detail in product development.',
        'How culture influences interface design and user experiences.',
        'New perspectives on integrating technology into daily life.',
      ],
    },
    
    // Imágenes para la galería (mismo formato que projects)
    images: {
      hero: 'https://via.placeholder.com/800x500/1a1a1a/E50914?text=Tokio+Tech+District',
      gallery: [
        'https://via.placeholder.com/800x500/1a1a1a/E50914?text=Sony+HQ',
        'https://via.placeholder.com/800x500/1a1a1a/E50914?text=AI+Conference',
        'https://via.placeholder.com/800x500/1a1a1a/E50914?text=Shibuya+Crossing',
      ],
    },
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
    
    // Esta experiencia NO tiene Instagram vinculado (el campo se omite)
    // instagramUrl: undefined,
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
    
    // Esta experiencia tampoco tiene Instagram (campo omitido)
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
  
  // OPCIONAL: Enlace a publicación de Instagram
  // Si publicaste sobre esta experiencia en Instagram, agrega el enlace aquí
  // Ejemplo: instagramUrl: 'https://www.instagram.com/p/ABC123xyz/',
  // Si no tienes publicación, simplemente omite esta línea
  instagramUrl: 'https://www.instagram.com/p/TU_POST_AQUI/',
  
  // OPCIONAL: Contenido extendido para página de detalle
  // Si agregas estos campos, al hacer clic en la experiencia se abrirá una página completa
  story: {
    es: 'Aquí va la historia o anécdota completa de tu experiencia...',
    en: 'Here goes the full story or anecdote of your experience...',
  },
  
  learnings: {
    es: ['Aprendizaje 1', 'Aprendizaje 2', 'Aprendizaje 3'],
    en: ['Learning 1', 'Learning 2', 'Learning 3'],
  },
  
  images: {
    hero: '/images/tu-imagen-principal.jpg',
    gallery: [
      '/images/galeria-1.jpg',
      '/images/galeria-2.jpg',
      '/images/galeria-3.jpg',
    ],
  },
},
*/
