// ============================================================================
// ARCHIVO DE DATOS: EXPERIENCIAS
// ============================================================================
import { processImagePaths } from '@/utils/paths';
import { EXPERIENCE_IMAGES } from '@/data/config';
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
    
    imageUrl: `/images/${EXPERIENCE_IMAGES['cdmx-tech-week'].imageUrl}`,
    
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
      hero:    `/images/${EXPERIENCE_IMAGES['cdmx-tech-week'].hero}`,
      gallery: EXPERIENCE_IMAGES['cdmx-tech-week'].gallery.map(img => `/images/${img}`),
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
    
    imageUrl: `/images/${EXPERIENCE_IMAGES['gdg-queretaro'].imageUrl}`,
    
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
      hero:    `/images/${EXPERIENCE_IMAGES['gdg-queretaro'].hero}`,
      gallery: EXPERIENCE_IMAGES['gdg-queretaro'].gallery.map(img => `/images/${img}`),
    },
  },  

  {
    id: 'google-build-with-ai-2026',
    
    title: {
      es: 'Google Build with AI',
      en: 'Google Build with AI',
    },
    
    date: {
      es: 'Mayo 2026',
      en: 'May 2026',
    },
    
    location: {
      es: 'Oficinas de Google, Ciudad de México, México',
      en: 'Google Offices, Mexico City, Mexico',
    },
    
    description: {
      es: 'Evento presencial en las oficinas de Google México donde aprendimos a construir un sistema multi-agente de IA utilizando el protocolo Agent2Agent (A2A), patrones de orquestación y seguridad con Model Armor.',
      en: 'In-person event at Google Mexico offices where we learned to build a multi-agent AI system using the Agent2Agent (A2A) protocol, orchestration patterns, and security with Model Armor.',
    },
    
    imageUrl: `/images/${EXPERIENCE_IMAGES['google-build-with-ai'].imageUrl}`,
    
    category: 'workshop',
    
    story: {
      es: 'Entrar a las oficinas de **Google México** fue una de las mejores experiencias que la ingeniería de software me ha permitido vivir. Desde el momento en que cruzas la puerta, te das cuenta de que estás en un lugar especial: el ambiente, la energía de las personas, el diseño de los espacios... todo te inspira a soñar en grande y a creer que con esfuerzo y dedicación puedes llegar a trabajar en un lugar así.\n\nEl evento **Build with AI** fue un taller práctico donde construimos un proyecto real utilizando **3 agentes de inteligencia artificial** que colaboran entre sí. La idea central era clara: un solo agente puede abrumarse si le pides investigar, evaluar y crear contenido al mismo tiempo. La solución es crear **agentes especializados**, cada uno con un rol definido, que trabajen como un equipo coordinado.\n\nAprendimos que el verdadero obstáculo no es el modelo de IA en sí, sino los problemas de integración, la calidad de los datos y la gobernanza. Nos enseñaron los diferentes patrones de arquitectura multi-agente: **Router/Dispatcher**, **Parallel**, **Sequential**, **Loop** y **Swarm**, y cómo elegir el patrón correcto según el problema que estés resolviendo.\n\nEl corazón del proyecto fue el protocolo **Agent2Agent (A2A)**, que permite a los agentes comunicarse entre sí de forma segura, sin importar en qué framework estén escritos. Cada agente tiene una **AgentCard** que define su nombre, habilidades y autenticación, como una credencial digital que le permite interactuar con otros agentes del sistema.\n\nConstruimos tres agentes especializados: un **Researcher Agent** con acceso a herramientas de búsqueda web para encontrar información relevante, un **Judge Agent** que evalúa y critica los resultados del investigador, y un **Content Builder Agent** que formatea y prepara el contenido final. Todo orquestado por un **LoopAgent** que crea un ciclo de "investigar → juzgar → iterar" hasta que la calidad sea suficiente, y un **SequentialAgent** que encadena el proceso completo.\n\nUna de las partes más valiosas fue aprender sobre seguridad con **Google Cloud Model Armor**, que agrega diferentes capas de protección contra inyecciones de prompts, tanto directas como indirectas. Nos enseñaron sobre la "trampa del vibe check": evaluar agentes de IA por intuición en lugar de usar métricas objetivas es un error que lleva a no-determinismo, sesgo humano y regresiones invisibles.\n\nDesplegamos nuestro proyecto en **Cloud Run**, convirtiendo los agentes en microservicios independientes para evitar el "burnout" de un solo agente y asignar tareas específicas a cada uno. El resultado fue una aplicación funcional que toma cualquier tema y genera un curso completo, pasando por fases de investigación, verificación de hechos y escritura.\n\nEsta experiencia me motivó profundamente. Tener la oportunidad de estar en las oficinas de Google, aprender directamente de ingenieros que trabajan con estas tecnologías todos los días, y ver de primera mano cómo se construyen sistemas de IA a escala empresarial fue transformador. Me inspiró a empezar a prepararme para obtener certificaciones de **Google Cloud** como **Cloud Developer**, **Cloud Architect**, **Cloud Data Analyst**, **Cloud DevOps** y **Cloud Database Manager**. Ya estoy estudiando para la primera, y esta experiencia fue el empujón que necesitaba para trazar ese camino profesional.',
      en: 'Walking into the **Google Mexico** offices was one of the best experiences that software engineering has allowed me to live. From the moment you walk through the door, you realize you are in a special place: the atmosphere, the energy of the people, the design of the spaces... everything inspires you to dream big and believe that with effort and dedication you can work at a place like this.\n\nThe **Build with AI** event was a hands-on workshop where we built a real project using **3 artificial intelligence agents** that collaborate with each other. The core idea was clear: a single agent can become overwhelmed if you ask it to research, evaluate, and create content at the same time. The solution is to create **specialized agents**, each with a defined role, working as a coordinated team.\n\nWe learned that the real obstacle is not the AI model itself, but integration problems, data quality, and governance. They taught us the different multi-agent architecture patterns: **Router/Dispatcher**, **Parallel**, **Sequential**, **Loop**, and **Swarm**, and how to choose the right pattern based on the problem you are solving.\n\nThe heart of the project was the **Agent2Agent (A2A)** protocol, which allows agents to communicate with each other securely, regardless of which framework they are written in. Each agent has an **AgentCard** that defines its name, skills, and authentication, like a digital credential that allows it to interact with other agents in the system.\n\nWe built three specialized agents: a **Researcher Agent** with access to web search tools to find relevant information, a **Judge Agent** that evaluates and critiques the researcher\'s results, and a **Content Builder Agent** that formats and prepares the final content. All orchestrated by a **LoopAgent** that creates a cycle of "research → judge → iterate" until the quality is sufficient, and a **SequentialAgent** that chains the complete process.\n\nOne of the most valuable parts was learning about security with **Google Cloud Model Armor**, which adds different layers of protection against prompt injections, both direct and indirect. They taught us about the "vibe check trap": evaluating AI agents by intuition instead of using objective metrics is a mistake that leads to non-determinism, human bias, and invisible regressions.\n\nWe deployed our project on **Cloud Run**, turning the agents into independent microservices to avoid the "burnout" of a single agent and assign specific tasks to each one. The result was a functional application that takes any topic and generates a complete course, going through research, fact-checking, and writing phases.\n\nThis experience deeply motivated me. Having the opportunity to be at the Google offices, learning directly from engineers who work with these technologies every day, and seeing firsthand how AI systems are built at enterprise scale was transformative. It inspired me to start preparing for **Google Cloud** certifications such as **Cloud Developer**, **Cloud Architect**, **Cloud Data Analyst**, **Cloud DevOps**, and **Cloud Database Manager**. I am already studying for the first one, and this experience was the push I needed to chart that professional path.',
    },
    
    learnings: {
      es: [
        'El verdadero obstáculo en IA no es el modelo, sino la integración, la calidad de los datos y la gobernanza.',
        'Patrones de arquitectura multi-agente: **Router/Dispatcher**, **Parallel**, **Sequential**, **Loop** y **Swarm** para diferentes escenarios.',
        'El protocolo **Agent2Agent (A2A)** permite la comunicación segura entre agentes independientemente del framework utilizado.',
        'La importancia de crear agentes especializados en lugar de sobrecargar un solo agente con múltiples responsabilidades.',
        'Uso de **LoopAgent** para ciclos de retroalimentación (investigar → juzgar → iterar) y **SequentialAgent** para pipelines ordenados.',
        'Seguridad en IA con **Google Cloud Model Armor**: protección contra inyecciones de prompts directas e indirectas.',
        'La "trampa del vibe check": evaluar agentes por intuición genera no-determinismo, sesgo humano y regresiones invisibles.',
        'Convertir agentes de IA en microservicios con **Cloud Run** para escalabilidad y resiliencia.',
        'Evaluación rigurosa de agentes: dataset creation, tool unit tests, tool selection, final response y métricas operacionales.',
      ],
      en: [
        'The real obstacle in AI is not the model, but integration, data quality, and governance.',
        'Multi-agent architecture patterns: **Router/Dispatcher**, **Parallel**, **Sequential**, **Loop**, and **Swarm** for different scenarios.',
        'The **Agent2Agent (A2A)** protocol enables secure communication between agents regardless of the framework used.',
        'The importance of creating specialized agents instead of overloading a single agent with multiple responsibilities.',
        'Using **LoopAgent** for feedback loops (research → judge → iterate) and **SequentialAgent** for ordered pipelines.',
        'AI security with **Google Cloud Model Armor**: protection against direct and indirect prompt injections.',
        'The "vibe check trap": evaluating agents by intuition leads to non-determinism, human bias, and invisible regressions.',
        'Turning AI agents into microservices with **Cloud Run** for scalability and resilience.',
        'Rigorous agent evaluation: dataset creation, tool unit tests, tool selection, final response, and operational metrics.',
      ],
    },
    
    projectUrl: 'https://course-creator-prod-ready-3-88610970946.us-central1.run.app/',
    
    images: {
      hero:    `/images/${EXPERIENCE_IMAGES['google-build-with-ai'].hero}`,
      gallery: EXPERIENCE_IMAGES['google-build-with-ai'].gallery.map(img => `/images/${img}`),
    },
  },

  {
    id: 'sac-git-github-course-2026',
    
    title: {
      es: 'Curso de Git y GitHub - SAC Facultad de Informatica',
      en: 'Git and GitHub Course - SAC Faculty of Computer Science',
    },
    
    date: {
      es: 'Mayo 2026',
      en: 'May 2026',
    },
    
    location: {
      es: 'Facultad de Informatica, Queretaro, Mexico',
      en: 'Faculty of Computer Science, Queretaro, Mexico',
    },
    
    description: {
      es: 'Taller impartido durante la Semana Academica y Cultural de la Facultad de Informatica, donde ense\u00f1e Git y GitHub a estudiantes de todos los semestres, desde primer semestre hasta septimo.',
      en: 'Workshop given during the Academic and Cultural Week of the Faculty of Computer Science, where I taught Git and GitHub to students from all semesters, from first to seventh.',
    },
    
    imageUrl: `/images/${EXPERIENCE_IMAGES['github-course'].imageUrl}`,
    
    category: 'workshop',
    
    story: {
      es: 'La Semana Academica y Cultural de la Facultad de Informatica es uno de esos eventos que le dan vida a la facultad. Cuando me invitaron a dar un taller, no lo dude ni un segundo. Sabia exactamente de que queria hablar: **Git y GitHub**, herramientas que considero fundamentales para cualquier desarrollador y que muchos estudiantes no conocen hasta que ya estan avanzados en la carrera.\n\nLo que mas me gusto fue la diversidad del grupo. Habia estudiantes de primer semestre que apenas estaban empezando su camino en la programacion, y tambien companeros de sexto y septimo semestre que ya tenian experiencia pero querian reforzar sus conocimientos en control de versiones y trabajo colaborativo. Esa mezcla hizo que el taller fuera muy enriquecedor, porque las preguntas venian desde perspectivas completamente diferentes.\n\nPreparar el material fue un ejercicio de humildad. Me di cuenta de que ensenar no se trata de demostrar cuanto sabes, sino de encontrar la forma mas clara de explicar algo para que la otra persona lo entienda. No soy un experto, y nunca pretendi serlo frente al grupo. Lo que si tenia era la conviccion de que lo poco que se podia ayudarle a alguien, y eso fue suficiente para pararme frente a todos con seguridad.\n\nEmpezamos desde lo basico: que es un repositorio, como funciona el staging area, la diferencia entre commit y push. Luego fuimos subiendo la complejidad: ramas, merges, pull requests, y como resolver conflictos. Todo con ejercicios practicos donde los estudiantes trabajaban en equipos, simulando un flujo de trabajo real como el que encontrarian en cualquier empresa o proyecto colaborativo.\n\nEl momento mas gratificante fue cuando vi a estudiantes de primer semestre haciendo su primer pull request exitoso. Sus caras de satisfaccion al ver su codigo integrado en un repositorio compartido me recordaron por que me gusta tanto esta area. No es solo codigo, es la sensacion de construir algo con otros, de contribuir a algo mas grande que tu.\n\nTambien construimos un proyecto colaborativo en vivo que quedo desplegado como evidencia del trabajo en equipo. Cada participante aporto su parte, y el resultado final fue una pagina donde se puede ver la contribucion de cada persona. Ese proyecto sigue en linea como testimonio de lo que logramos juntos en unas horas.\n\nEsta experiencia me enseno que compartir conocimiento es una de las formas mas valiosas de crecer. No necesitas ser el mejor para ensenar, necesitas tener la disposicion de ayudar y la honestidad de decir "esto no lo se, pero vamos a aprenderlo juntos". La humildad de reconocer tus limites y la seguridad de compartir lo que si sabes es una combinacion que genera confianza, tanto en ti como en quienes te escuchan.',
      en: 'The Academic and Cultural Week of the Faculty of Computer Science is one of those events that brings life to the faculty. When I was invited to give a workshop, I did not hesitate for a second. I knew exactly what I wanted to talk about: **Git and GitHub**, tools that I consider fundamental for any developer and that many students do not learn until they are already well into their degree.\n\nWhat I liked most was the diversity of the group. There were first-semester students who were just starting their path in programming, and also classmates from sixth and seventh semester who already had experience but wanted to strengthen their knowledge in version control and collaborative work. That mix made the workshop very enriching, because the questions came from completely different perspectives.\n\nPreparing the material was an exercise in humility. I realized that teaching is not about demonstrating how much you know, but about finding the clearest way to explain something so that the other person understands it. I am not an expert, and I never pretended to be one in front of the group. What I did have was the conviction that the little I know could help someone, and that was enough to stand in front of everyone with confidence.\n\nWe started from the basics: what a repository is, how the staging area works, the difference between commit and push. Then we increased the complexity: branches, merges, pull requests, and how to resolve conflicts. Everything with practical exercises where students worked in teams, simulating a real workflow like the one they would find in any company or collaborative project.\n\nThe most gratifying moment was when I saw first-semester students making their first successful pull request. Their faces of satisfaction when they saw their code integrated into a shared repository reminded me why I love this field so much. It is not just code, it is the feeling of building something with others, of contributing to something bigger than yourself.\n\nWe also built a live collaborative project that was deployed as evidence of teamwork. Each participant contributed their part, and the final result was a page where you can see each person\'s contribution. That project is still online as a testament to what we achieved together in just a few hours.\n\nThis experience taught me that sharing knowledge is one of the most valuable ways to grow. You do not need to be the best to teach, you need the willingness to help and the honesty to say "I do not know this, but let us learn it together." The humility of recognizing your limits and the confidence of sharing what you do know is a combination that generates trust, both in yourself and in those who listen to you.',
    },
    
    learnings: {
      es: [
        'Ensenar no se trata de demostrar cuanto sabes, sino de encontrar la forma mas clara de comunicar una idea.',
        'La humildad de reconocer lo que no sabes y la seguridad de compartir lo que si sabes generan confianza genuina.',
        'Fundamentos de **Git**: repositorios, staging area, commits, branches, merges y resolucion de conflictos.',
        'Flujos de trabajo colaborativo con **GitHub**: pull requests, code reviews y trabajo en equipo.',
        'La diversidad de niveles en un grupo enriquece el aprendizaje: las preguntas desde diferentes perspectivas benefician a todos.',
        'Compartir conocimiento es una de las formas mas valiosas de crecer profesional y personalmente.',
        'Preparar material didactico requiere empatia: ponerse en el lugar de quien esta aprendiendo por primera vez.',
      ],
      en: [
        'Teaching is not about demonstrating how much you know, but about finding the clearest way to communicate an idea.',
        'The humility of recognizing what you do not know and the confidence of sharing what you do know generate genuine trust.',
        '**Git** fundamentals: repositories, staging area, commits, branches, merges, and conflict resolution.',
        'Collaborative workflows with **GitHub**: pull requests, code reviews, and teamwork.',
        'Diversity of levels in a group enriches learning: questions from different perspectives benefit everyone.',
        'Sharing knowledge is one of the most valuable ways to grow professionally and personally.',
        'Preparing educational material requires empathy: putting yourself in the shoes of someone learning for the first time.',
      ],
    },
    
    projectUrl: 'https://dferram.github.io/github-course-teamwork/',
    
    images: {
      hero:    `/images/${EXPERIENCE_IMAGES['github-course'].hero}`,
      gallery: EXPERIENCE_IMAGES['github-course'].gallery.map(img => `/images/${img}`),
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
