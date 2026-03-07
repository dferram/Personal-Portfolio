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
    
    imageUrl: '/images/experiences/cdmx-tech-week/10.jpeg',
    
    category: 'conference',
    
    story: {
      es: 'El viaje comenzó temprano en la mañana. Recuerdo perfectamente la emoción mientras esperábamos en la terminal, con nuestras mochilas llenas de expectativas y una agenda repleta de conferencias por delante. La Ciudad de México nos recibió con su energía característica, y desde el primer momento supimos que esta semana sería diferente.\n\nEl primer día nos adentramos en el mundo de Oracle Cloud y sus soluciones empresariales. Ver cómo las grandes compañías están transformando sus infraestructuras con tecnologías en la nube me hizo replantear muchas de las arquitecturas que había diseñado antes. Los ponentes no solo hablaban de teoría; compartían casos reales, problemas que enfrentaron y cómo los resolvieron. Eso es lo que más valoro: aprender de experiencias reales, no solo de presentaciones pulidas.\n\nPero lo que realmente marcó la diferencia fue la diversidad de temas. Un día estábamos profundizando en modelos de inteligencia artificial y machine learning, entendiendo cómo entrenar modelos que realmente aporten valor, y al día siguiente nos sumergíamos en análisis de datos con herramientas que ni siquiera sabía que existían. Cada sesión era una puerta nueva que se abría, mostrándome tecnologías y enfoques que podía aplicar en mis propios proyectos.\n\nLo más valioso, sin embargo, fueron las conversaciones entre sesiones. Conocí a desarrolladores de startups que están construyendo soluciones increíbles con recursos limitados, a ingenieros de datos que manejan petabytes de información diariamente, y a diseñadores de UX que me hicieron ver la importancia de pensar primero en el usuario antes que en el código. Compartimos experiencias, intercambiamos contactos, y hasta planeamos colaboraciones futuras.\n\nTambién hubo tiempo para explorar la ciudad. Entre conferencias, caminamos por sus calles, probamos la comida local, y nos empapamos de la cultura que hace de CDMX un lugar tan especial. Esas caminatas nocturnas, con el grupo reflexionando sobre todo lo aprendido durante el día, fueron tan valiosas como las conferencias mismas.\n\nAl final de la semana, no solo regresé con una mochila llena de stickers y swag de diferentes empresas tech, sino con una perspectiva completamente renovada sobre hacia dónde se dirige la industria. Entendí que la tecnología no se trata solo de código y algoritmos, sino de resolver problemas reales, de conectar con personas, y de nunca dejar de aprender.',
      en: 'The trip started early in the morning. I perfectly remember the excitement as we waited at the terminal, our backpacks full of expectations and an agenda packed with conferences ahead. Mexico City welcomed us with its characteristic energy, and from the first moment we knew this week would be different.\n\nThe first day we delved into the world of Oracle Cloud and its enterprise solutions. Seeing how large companies are transforming their infrastructures with cloud technologies made me rethink many of the architectures I had designed before. The speakers didn\'t just talk about theory; they shared real cases, problems they faced, and how they solved them. That\'s what I value most: learning from real experiences, not just polished presentations.\n\nBut what really made the difference was the diversity of topics. One day we were diving deep into artificial intelligence and machine learning models, understanding how to train models that truly add value, and the next day we were immersing ourselves in data analysis with tools I didn\'t even know existed. Each session was a new door opening, showing me technologies and approaches I could apply to my own projects.\n\nThe most valuable part, however, were the conversations between sessions. I met developers from startups building incredible solutions with limited resources, data engineers handling petabytes of information daily, and UX designers who made me see the importance of thinking about the user first before the code. We shared experiences, exchanged contacts, and even planned future collaborations.\n\nThere was also time to explore the city. Between conferences, we walked its streets, tried local food, and soaked in the culture that makes CDMX such a special place. Those night walks, with the group reflecting on everything learned during the day, were as valuable as the conferences themselves.\n\nAt the end of the week, I didn\'t just return with a backpack full of stickers and swag from different tech companies, but with a completely renewed perspective on where the industry is heading. I understood that technology isn\'t just about code and algorithms, but about solving real problems, connecting with people, and never stopping learning.',
    },
    
    learnings: {
      es: [
        'Arquitecturas de cloud computing modernas y cómo implementarlas en proyectos reales usando Oracle Cloud Infrastructure.',
        'Técnicas avanzadas de machine learning y cómo entrenar modelos de IA que realmente aporten valor al negocio.',
        'Herramientas de análisis de datos que permiten extraer insights significativos de grandes volúmenes de información.',
        'Mejores prácticas en desarrollo de aplicaciones móviles y web con enfoque en experiencia de usuario.',
        'La importancia del networking y cómo las conexiones humanas son tan valiosas como el conocimiento técnico.',
        'Metodologías ágiles aplicadas en equipos distribuidos y cómo mantener la productividad en entornos remotos.',
        'Tendencias emergentes en ciberseguridad y cómo proteger aplicaciones en la era de la nube.',
      ],
      en: [
        'Modern cloud computing architectures and how to implement them in real projects using Oracle Cloud Infrastructure.',
        'Advanced machine learning techniques and how to train AI models that truly add business value.',
        'Data analysis tools that allow extracting meaningful insights from large volumes of information.',
        'Best practices in mobile and web application development with a focus on user experience.',
        'The importance of networking and how human connections are as valuable as technical knowledge.',
        'Agile methodologies applied in distributed teams and how to maintain productivity in remote environments.',
        'Emerging trends in cybersecurity and how to protect applications in the cloud era.',
      ],
    },
    
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
        '/images/experiences/cdmx-tech-week/20.jpeg',
        '/images/experiences/cdmx-tech-week/21.jpeg',
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
    
    imageUrl: '/images/experiences/gdg-queretaro/7.jpeg',
    
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
