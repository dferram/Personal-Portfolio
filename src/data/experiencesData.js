// ============================================================================
// ARCHIVO DE DATOS: EXPERIENCIAS
// ============================================================================
import { processImagePaths } from '@/utils/paths';
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
//
// SISTEMA DE IMÁGENES CON ROTACIÓN AUTOMÁTICA:
// ---------------------------------------------
// Las imágenes se organizan en dos secciones:
//
// 1. HERO IMAGE (Imagen Principal):
//    - Se muestra al inicio de la página de detalle
//    - Es EXCLUSIVA, no se repite en otras partes
//    - Debe ser una imagen representativa de alta calidad
//    - Ejemplo: images: { hero: '/images/mi-experiencia/principal.jpg', ... }
//
// 2. GALLERY (Galería):
//    - Array de imágenes que se distribuyen automáticamente
//    - Las imágenes ROTAN AUTOMÁTICAMENTE cada 10 segundos
//    - NO se repiten entre cartas visibles al mismo tiempo
//    - Usa algoritmo shuffle para mostrar todas antes de repetir
//    - Se distribuyen entre:
//      a) Cartas del scrapbook (integradas con el texto de la historia)
//      b) Carrusel inferior (imágenes restantes)
//
// CÓMO AGREGAR MÁS IMÁGENES:
// ---------------------------
// 1. Coloca tus imágenes en la carpeta: public/images/experiences/[nombre-experiencia]/
// 2. Agrega las rutas al array 'gallery' en el formato:
//    '/images/experiences/[nombre-experiencia]/imagen.jpg'
// 3. Puedes agregar tantas imágenes como quieras
// 4. El sistema automáticamente:
//    - Las mezclará aleatoriamente
//    - Las rotará cada 10 segundos
//    - Evitará repeticiones entre cartas
//    - Las mostrará completas en el carrusel (sin recortes)
//
// CONFIGURACIÓN DE VELOCIDAD DE ROTACIÓN:
// ----------------------------------------
// Para cambiar la velocidad de rotación, edita la constante ROTATION_INTERVAL
// en el archivo: src/pages/ViewExperience.jsx (línea ~136)
// - Valor actual: 10000 (10 segundos)
// - Para más rápido: 5000 (5 segundos)
// - Para más lento: 15000 (15 segundos)
//
// RECOMENDACIONES:
// ----------------
// - Usa imágenes de buena calidad (mínimo 1200px de ancho)
// - Formatos recomendados: JPG, PNG, WebP
// - Optimiza las imágenes antes de subirlas (usa herramientas como TinyPNG)
// - Mantén nombres de archivo descriptivos (ej: conferencia-1.jpg, grupo-2.jpg)
// - Asegúrate de tener al menos 5-10 imágenes para una buena experiencia
// ============================================================================

const experiencesDataRaw = [
  {
    id: 'cdmx-tech-week-2025',
    
    title: {
      es: 'CDMX Tech Week 2025',
      en: 'CDMX Tech Week 2025',
    },
    
    date: {
      es: 'Octubre 2025',
      en: 'October 2025',
    },
    
    location: {
      es: 'Ciudad de México, México',
      en: 'Mexico City, Mexico',
    },
    
    description: {
      es: 'Una semana completa de inmersión tecnológica en la capital. Asistí a conferencias sobre IA, análisis de datos y desarrollo de aplicaciones, conectando con profesionales de toda Latinoamérica.',
      en: 'A full week of technological immersion in the capital. Attended conferences on AI, data analysis, and app development, connecting with professionals from across Latin America.',
    },
    
    imageUrl: '/images/experiences/cdmx-tech-week/20.jpeg',
    
    category: 'conference',
    
    story: {
      es: 'El viaje comenzó en la madrugada, a pesar de ir desvelados, todo el equipo estaba feliz y lleno de expectativas, estábamos llenos de curiosidad y de ganas de aprovechar esta oportunidad al máximo, después de un viaje largo, llegamos a **CDMX** a nuestra primer conferencia. El **ProductLatam Summit** con empresas como **CapitalOne**, desarrolladores de todos los países y lo más interesante para mí, desarrolladoras mujeres contando sus historias de crecimiento en el área de tecnología, no solo nos hablaban de teoría y de las nuevas posibilidades con la IA si no que nos mostraban cómo aplicarlas en proyectos reales y concretos. Después de esto fuimos a explorar y a conocer la ciudad antes de hacer nuestro check-in en el hotel, compartimos experiencias y fotografías en toda la ciudad.\n\nLuego fuimos a la **EBC de la CDMX** al **AI-Fest** en donde escuchamos la historia de una emprendedora que nos contó sus dificultades al crecer en el área del emprendimiento, cómo afrontar la frustración y los retos que conlleva llevar tu idea a la realidad, nos enseñó su libro y nos motivó a emprender dentro de nuestra área, encontrando ideas para ayudar a los demás más que el hacerlo por el dinero, "Tu persigues dinero o persigues resultados" **-Jorge Vergara**. Luego de esto hicimos nuestro check-in en el hotel y disfrutamos del lugar, era un departamento en **Polanco**, estar ahí me motivó mucho a buscar ese estilo de vida para mi vida en unos años.\n\nNos preparamos y de ahí salimos hacia **Cru-Cru**, una cervecería tradicional de **Ciudad de México** en donde **Orbitware x Windsurf** nos recibieron con regalos y nos brindaron una experiencia inolvidable, nos enseñaron a usar su nuevo IDE **Windsurf**, que integra modelos de IA como **Claude**, **Codex** entre otros y en una hora nos enseñaron a hacer una aplicación réplica de **RBnB**, comimos y de regreso al hotel se sentía la felicidad de un día completamente aprovechado, yo estaba feliz de compartir algo así con personas tan importantes para mi vida, los recuerdos y las fotos no valen nada si ellos no estuvieran ahí.\n\nUn taller en donde **Momentum Universitario** nos preparaba para nuestra primer entrevista de trabajo, con técnicas para mostrar seguridad y consejos sobre cómo prepararte para el primer paso de tu futuro laboral, después fuimos a conocer museos y lugares emblemáticos de la ciudad, pero el mejor evento aún nos esperaba.\n\nAl día siguiente nos preparamos para ir a la conferencia más importante de todas, **Oracle x RedBull Racing "Innovation at Top Speed"** una conferencia donde **Oracle** nos habló de la importancia de el análisis de datos y de la inteligencia artificial hoy en día en las **Startups** y empresas consolidadas, vivimos una experiencia **VR** de un pit-stop de **RedBull** y regresamos llenos de energía, la **F1** es un tema que algunos del equipo nos apasiona y vivir eso fue algo inolvidable, al regresar, más que la ropa y stickers de las empresas, lo más valioso para mí fue haber podido compartir una experiencia así con personas tan importantes para mi vida, los recuerdos y las fotos no valen nada si ellos no estuvieran ahí.',
      en: 'The trip started in the early morning, despite being sleep-deprived, the whole team was happy and full of expectations, we were full of curiosity and eager to make the most of this opportunity, after a long journey, we arrived in **CDMX** to our first conference. The **ProductLatam Summit** with companies like **CapitalOne**, developers from all countries and the most interesting thing for me, women developers telling their growth stories in the technology area, they didn\'t just talk about theory and the new possibilities with AI but showed us how to apply them in real and concrete projects. After this we went to explore and get to know the city before checking in at the hotel, we shared experiences and photographs throughout the city.\n\nThen we went to the **CDMX EBC** to **AI-Fest** where we heard the story of an entrepreneur who told us about her difficulties growing in the entrepreneurship area, how to face frustration and the challenges that come with bringing your idea to reality, she showed us her book and motivated us to undertake within our area, finding ideas to help others rather than doing it for money, "Do you chase money or do you chase results" **-Jorge Vergara**. After this we checked in at the hotel and enjoyed the place, it was an apartment in **Polanco**, being there motivated me a lot to seek that lifestyle for my life in a few years.\n\nWe got ready and from there we headed to **Cru-Cru**, a traditional brewery in **Mexico City** where **Orbitware x Windsurf** welcomed us with gifts and gave us an unforgettable experience, they taught us how to use their new IDE **Windsurf**, which integrates AI models like **Claude**, **Codex** among others and in one hour they taught us how to make a replica application of **RBnB**, we ate and on the way back to the hotel you could feel the happiness of a day fully taken advantage of, I was happy to share something like this with people so important to my life, the memories and photos are worth nothing if they weren\'t there.\n\nA workshop where **Momentum Universitario** prepared us for our first job interview, with techniques to show confidence and advice on how to prepare for the first step of your work future, then we went to visit museums and emblematic places of the city, but the best event was still waiting for us.\n\nThe next day we got ready to go to the most important conference of all, **Oracle x RedBull Racing "Innovation at Top Speed"** a conference where **Oracle** talked to us about the importance of data analysis and artificial intelligence today in **Startups** and established companies, we experienced a **VR** experience of a **RedBull** pit-stop and we came back full of energy, **F1** is a topic that some of the team are passionate about and living that was something unforgettable, when we returned, more than the clothes and stickers from the companies, the most valuable thing for me was being able to share an experience like this with people so important to my life, the memories and photos are worth nothing if they weren\'t there.',
    },
    
    learnings: {
      es: [
        'La importancia de aplicar la IA en proyectos reales y concretos, no solo quedarse en la teoría, como vimos en **ProductLatam Summit**.',
        'El emprendimiento requiere perseverancia y enfoque en ayudar a los demás antes que perseguir dinero, "persigue resultados, no dinero".',
        'Herramientas modernas de desarrollo como **Windsurf IDE** que integran IA (**Claude**, **Codex**) pueden acelerar significativamente el desarrollo de aplicaciones.',
        'El análisis de datos y la inteligencia artificial son fundamentales en empresas consolidadas y **Startups**, como demostró **Oracle** en su conferencia con **RedBull Racing**.',
        'La preparación para entrevistas de trabajo requiere técnicas específicas para mostrar seguridad y confianza en tus habilidades.',
        'El networking y compartir experiencias con personas importantes en tu vida hace que los recuerdos sean realmente valiosos.',
        'Vivir experiencias inmersivas (como la experiencia **VR** de pit-stop de **F1**) puede inspirarte y motivarte en tu carrera profesional.',
      ],
      en: [
        'The importance of applying AI in real and concrete projects, not just staying in theory, as we saw at **ProductLatam Summit**.',
        'Entrepreneurship requires perseverance and focus on helping others before chasing money, "chase results, not money".',
        'Modern development tools like **Windsurf IDE** that integrate AI (**Claude**, **Codex**) can significantly accelerate application development.',
        'Data analysis and artificial intelligence are fundamental in established companies and **Startups**, as **Oracle** demonstrated in their conference with **RedBull Racing**.',
        'Preparing for job interviews requires specific techniques to show confidence and trust in your skills.',
        'Networking and sharing experiences with important people in your life makes memories truly valuable.',
        'Living immersive experiences (like the **VR** pit-stop experience of **F1**) can inspire and motivate you in your professional career.',
      ],
    },
    
    instagramUrl: 'https://www.instagram.com/p/DQPVWIeDm1NK5g4zzYzmWZFc0NORYpCv5VEaNU0/',
    
    images: {
      hero: '/images/experiences/cdmx-tech-week/5.jpeg',
      gallery: [
        '/images/experiences/cdmx-tech-week/1.jpeg',
        '/images/experiences/cdmx-tech-week/10.jpeg',
        '/images/experiences/cdmx-tech-week/15.jpeg',
        '/images/experiences/cdmx-tech-week/2.jpeg',
        '/images/experiences/cdmx-tech-week/3.jpeg',
        '/images/experiences/cdmx-tech-week/4.jpeg',
        '/images/experiences/cdmx-tech-week/6.jpeg',
        '/images/experiences/cdmx-tech-week/7.jpeg',
        '/images/experiences/cdmx-tech-week/8.jpeg',
        '/images/experiences/cdmx-tech-week/9.jpeg',
        '/images/experiences/cdmx-tech-week/11.jpeg',
        '/images/experiences/cdmx-tech-week/12.jpeg',
        '/images/experiences/cdmx-tech-week/13.jpeg',
        '/images/experiences/cdmx-tech-week/14.jpeg',
        '/images/experiences/cdmx-tech-week/16.jpeg',
        '/images/experiences/cdmx-tech-week/17.jpeg',
        '/images/experiences/cdmx-tech-week/18.jpeg',
        '/images/experiences/cdmx-tech-week/19.jpeg',
        '/images/experiences/cdmx-tech-week/21.jpeg',
        '/images/experiences/cdmx-tech-week/22.jpeg',
        '/images/experiences/cdmx-tech-week/23.jpeg',
        '/images/experiences/cdmx-tech-week/24.jpeg',
        '/images/experiences/cdmx-tech-week/25.jpeg',
        '/images/experiences/cdmx-tech-week/26.jpeg',
        '/images/experiences/cdmx-tech-week/27.jpeg',
        '/images/experiences/cdmx-tech-week/28.jpeg',
        '/images/experiences/cdmx-tech-week/29.jpeg',
        '/images/experiences/cdmx-tech-week/30.jpeg',
        '/images/experiences/cdmx-tech-week/31.jpeg',
        '/images/experiences/cdmx-tech-week/32.jpeg',
        '/images/experiences/cdmx-tech-week/33.jpeg',
        '/images/experiences/cdmx-tech-week/34.jpeg',
        '/images/experiences/cdmx-tech-week/35.jpeg',
        '/images/experiences/cdmx-tech-week/36.jpeg',
        '/images/experiences/cdmx-tech-week/37.jpeg',
        '/images/experiences/cdmx-tech-week/38.jpeg',
        '/images/experiences/cdmx-tech-week/39.jpeg',
        '/images/experiences/cdmx-tech-week/40.jpeg',
        '/images/experiences/cdmx-tech-week/41.jpeg',
        '/images/experiences/cdmx-tech-week/42.jpeg',
        '/images/experiences/cdmx-tech-week/43.jpeg',
        '/images/experiences/cdmx-tech-week/44.jpeg',
        '/images/experiences/cdmx-tech-week/45.jpeg',
        '/images/experiences/cdmx-tech-week/46.jpeg',
        '/images/experiences/cdmx-tech-week/47.jpeg',
        '/images/experiences/cdmx-tech-week/48.jpeg',
        '/images/experiences/cdmx-tech-week/49.jpeg',
        '/images/experiences/cdmx-tech-week/50.jpeg',
      ],
    },
  },
  
  {
    id: 'gdg-queretaro-devfest-2025',
    
    title: {
      es: 'Google Developer Group Querétaro - DevFest 2025',
      en: 'Google Developer Group Querétaro - DevFest 2025',
    },
    
    date: {
      es: 'Diciembre 2025',
      en: 'December 2025',
    },
    
    location: {
      es: 'Querétaro, México',
      en: 'Querétaro, Mexico',
    },
    
    description: {
      es: 'Meetup navideño del Google Developer Group local. Charlas sobre el ecosistema de Google Cloud, desarrollo móvil con Flutter, y las últimas novedades en tecnologías web.',
      en: 'Christmas meetup of the local Google Developer Group. Talks about the Google Cloud ecosystem, mobile development with Flutter, and the latest in web technologies.',
    },
    
    imageUrl: '/images/experiences/gdg-queretaro/1.jpeg',
    
    category: 'conference',
    
    story: {
      es: 'Cuando vi el anuncio del DevFest 2025 del Google Developer Group Querétaro, supe que no podía perdérmelo. Era diciembre, la temporada navideña estaba en pleno apogeo, y la comunidad tech local se preparaba para cerrar el año con un evento especial. El ambiente festivo se mezclaba perfectamente con la emoción de aprender sobre las últimas tecnologías de Google.\n\nLlegar al venue y ver la decoración navideña junto con los banners de Google Developer Group fue una experiencia única. Había algo especial en esa combinación: la calidez de las fiestas decembrinas con la energía de una comunidad de desarrolladores apasionados por la tecnología. Desde el primer momento, el ambiente era acogedor y lleno de entusiasmo.\n\nLas charlas comenzaron con una visión general del roadmap de Google para 2025. Ver hacia dónde se dirige el gigante tecnológico y cómo sus herramientas están evolucionando me dio una perspectiva clara de qué tecnologías debería estar aprendiendo. Pero lo que realmente capturó mi atención fue la sesión sobre Flutter. Siempre había querido explorar el desarrollo móvil multiplataforma, y ver demos en vivo de aplicaciones construidas con Flutter me convenció de que era el momento de sumergirme en esa tecnología.\n\nLo que más disfruté fue el formato del evento. No eran solo presentaciones unidireccionales; había espacios para hacer preguntas, para discutir casos de uso reales, y para conectar con otros desarrolladores que estaban enfrentando desafíos similares a los míos. Conocí a gente que trabaja en startups locales, a freelancers que están construyendo sus propios productos, y a estudiantes que apenas están comenzando su camino en el desarrollo de software.\n\nEntre sesiones, aprovechamos para explorar un poco la ciudad. Querétaro tiene un encanto especial en diciembre, con sus calles iluminadas y el ambiente festivo. Caminamos por el centro histórico, compartimos experiencias sobre proyectos en los que estábamos trabajando, y hasta planeamos formar un grupo de estudio para profundizar en algunas de las tecnologías que vimos en el evento.\n\nEl cierre del evento fue memorable. Hubo un intercambio de regalos al estilo tech (stickers, libros de programación, gadgets), y la organización del GDG compartió sus planes para el próximo año. Saber que hay una comunidad activa y comprometida en mi ciudad me llenó de motivación. No estamos solos en este camino del desarrollo de software; hay una red de apoyo, de aprendizaje mutuo, y de colaboración que hace que todo valga la pena.\n\nRegresé a casa no solo con nuevos conocimientos técnicos, sino con un sentido renovado de pertenencia a la comunidad tech local. El DevFest 2025 me recordó que la tecnología se trata tanto de las herramientas que usamos como de las personas con las que las compartimos.',
      en: 'When I saw the announcement for the DevFest 2025 by Google Developer Group Querétaro, I knew I couldn\'t miss it. It was December, the holiday season was in full swing, and the local tech community was preparing to close the year with a special event. The festive atmosphere mixed perfectly with the excitement of learning about the latest Google technologies.\n\nArriving at the venue and seeing the Christmas decorations alongside the Google Developer Group banners was a unique experience. There was something special about that combination: the warmth of the December holidays with the energy of a community of developers passionate about technology. From the first moment, the atmosphere was welcoming and full of enthusiasm.\n\nThe talks began with an overview of Google\'s roadmap for 2025. Seeing where the tech giant is heading and how its tools are evolving gave me a clear perspective on what technologies I should be learning. But what really captured my attention was the session on Flutter. I had always wanted to explore cross-platform mobile development, and seeing live demos of applications built with Flutter convinced me it was time to dive into that technology.\n\nWhat I enjoyed most was the event format. They weren\'t just one-way presentations; there were spaces to ask questions, to discuss real use cases, and to connect with other developers facing similar challenges to mine. I met people working at local startups, freelancers building their own products, and students just beginning their journey in software development.\n\nBetween sessions, we took the opportunity to explore the city a bit. Querétaro has a special charm in December, with its illuminated streets and festive atmosphere. We walked through the historic center, shared experiences about projects we were working on, and even planned to form a study group to delve deeper into some of the technologies we saw at the event.\n\nThe event closing was memorable. There was a tech-style gift exchange (stickers, programming books, gadgets), and the GDG organization shared their plans for the next year. Knowing there\'s an active and committed community in my city filled me with motivation. We\'re not alone on this software development path; there\'s a support network, mutual learning, and collaboration that makes it all worthwhile.\n\nI returned home not only with new technical knowledge but with a renewed sense of belonging to the local tech community. DevFest 2025 reminded me that technology is as much about the tools we use as it is about the people we share them with.',
    },
    
    learnings: {
      es: [
        'Fundamentos de Figma y cómo diseñar interfaces de usuario modernas y responsivas.',
        'Introducción a Antigravity y como usarlo para crear prototipos rápidos.',
        'Usar Model Armor para proteger modelos de IA generativos.',
        'Arquitectura de Google Cloud Platform y sus servicios más utilizados en aplicaciones modernas.',
        'Mejores prácticas en desarrollo web con las últimas tecnologías de Google',
        'La importancia de participar en comunidades locales de desarrolladores para crecimiento profesional.',
        'Tendencias en desarrollo móvil y cómo prepararse para el futuro de las aplicaciones multiplataforma.',
      ],
      en: [
        'Flutter fundamentals and how to build cross-platform mobile applications with a single codebase.',
        'Antigravity for creating rapid prototypes.',
        'Model Armor for protecting generative AI models.',
        'Google Cloud Platform architecture and its most used services in modern applications.',
        'Best practices in web development with the latest Google technologies like Web Components and PWAs.',
        'The importance of participating in local developer communities for professional growth.',
        'Trends in mobile development and how to prepare for the future of cross-platform applications.',
      ],
    },
    
    images: {
      hero: '/images/experiences/gdg-queretaro/1.jpeg',
      gallery: [
        '/images/experiences/gdg-queretaro/10.jpeg',
        '/images/experiences/gdg-queretaro/5.jpeg',
        '/images/experiences/gdg-queretaro/2.jpeg',
        '/images/experiences/gdg-queretaro/3.jpeg',
        '/images/experiences/gdg-queretaro/4.jpeg',
        '/images/experiences/gdg-queretaro/6.jpeg',
        '/images/experiences/gdg-queretaro/7.jpeg',
        '/images/experiences/gdg-queretaro/8.jpeg',
        '/images/experiences/gdg-queretaro/9.jpeg',
        '/images/experiences/gdg-queretaro/11.jpeg',
      ],
    },
  },  
];

export const EXPERIENCES_DATA = processImagePaths(experiencesDataRaw);

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
