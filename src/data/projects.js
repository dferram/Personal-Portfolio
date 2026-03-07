// ============================================================================
// ARCHIVO DE DATOS: PROYECTOS
// ============================================================================
// Aquí defines todos los proyectos que aparecerán en tu portafolio.
// Cada proyecto es un objeto con información en español (es) e inglés (en).
//
// CÓMO PERSONALIZAR:
// 1. Puedes ELIMINAR los proyectos de ejemplo (borra todo el objeto { ... })
// 2. Puedes MODIFICAR los proyectos existentes con tu información
// 3. Puedes AGREGAR nuevos proyectos copiando la estructura
//
// CAMPOS IMPORTANTES:
// - id: Identificador único (usa-guiones-sin-espacios)
// - title: Nombre de tu proyecto
// - overview: Descripción breve de qué hace el proyecto
// - technologies: Array con las tecnologías que usaste ["React", "Node.js", etc.]
// - links.github: URL de tu repositorio en GitHub
// - images.hero: Ruta a la imagen principal (/images/nombre-imagen.png)
//
// IMPORTANTE:
// - Las imágenes deben estar en la carpeta: public/images/
// - Usa comillas dobles " " para los textos
// - No olvides las comas entre objetos
// - Mantén la estructura { es: "texto", en: "text" } para textos multiidioma
//
// EJEMPLO AL FINAL: Copia el ejemplo y personalízalo con tu proyecto
// ============================================================================

export const PROJECTS_DATA = [
  {
    id: "analisis-spark-sql",
    title: {
      es: "Análisis de Datos con Spark y SQL",
      en: "Data Analysis with Spark and SQL",
    },
    subtitle: {
      es: "Proyecto de Big Data (Curso ANIEI)",
      en: "Big Data Project (ANIEI Conference)",
    },
    status: {
      es: "Terminado",
      en: "Completed",
    },
    isOngoing: false,
    year: "2024",
    duration: {
      es: "1 semana",
      en: "1 week",
    },
    team: {
      es: "1 desarrollador",
      en: "1 developer",
    },
    role: {
      es: "Ingeniero de Datos y Analista",
      en: "Data Engineer & Analyst",
    },
    overview: {
      es: "Proyecto final del Congreso ANIEI enfocado en construir un pipeline de datos con Apache Spark y SQL para encontrar patrones de comportamiento en grandes volúmenes de información.",
      en: "Final project for the ANIEI Congress focused on building a data pipeline with Apache Spark and SQL to discover behavioral patterns in large datasets.",
    },
    objectives: {
      es: [
        "Diseñar un flujo ETL escalable capaz de procesar +30GB de datos en paralelo.",
        "Identificar indicadores clave para optimizar la toma de decisiones dentro del dominio del dataset.",
      ],
      en: [
        "Design a scalable ETL pipeline capable of processing 30GB+ of data in parallel.",
        "Identify key indicators to improve decision-making within the dataset domain.",
      ],
    },
    responsibilities: {
      es: [
        "Modelado de la arquitectura de datos distribuida sobre Spark y ajuste de particiones.",
        "Optimización de consultas SQL utilizando técnicas de window functions y caching.",
        "Generación de reportes exploratorios y dashboards para presentar hallazgos al comité académico.",
      ],
      en: [
        "Modeled the distributed data architecture on Spark and tuned partitioning.",
        "Optimized SQL queries using window functions and caching strategies.",
        "Produced exploratory reports and dashboards to present findings to the academic committee.",
      ],
    },
    technologies: ["Spark", "SQL", "Data Analysis", "Big Data"],
    links: {
      github: "https://github.com/ferramdr/ANIEI-Data-Analysis-SPARK-SQL-",
    },
    images: {
      hero: "/images/ANIEI_1.png",
      gallery: [
        "/images/ANIEI_2.png",
        "/images/ANIEI_3.png",
        "/images/ANIEI_4.png",
      ],
    },
  },
  {
    id: "razo-connect",
    title: {
      es: "RazoConnect",
      en: "RazoConnect",
    },
    subtitle: {
      es: "Ecosistema ERP y E-commerce para Centro Mayorista",
      en: "ERP Ecosystem and E-commerce for Wholesale Center",
    },
    status: {
      es: "En desarrollo",
      en: "In progress",
    },
    isOngoing: true,
    year: "2025",
    duration: {
      es: "En desarrollo",
      en: "In progress",
    },
    team: {
      es: "1 desarrollador",
      en: "1 developer",
    },
    role: {
      es: "Desarrollador Full-Stack & Arquitecto de Datos",
      en: "Full-Stack Developer & Data Architect",
    },
    overview: {
      es: "Plataforma integral Full-Stack desarrollada para centralizar y optimizar la operación de una empresa mayorista. El sistema unifica la gestión comercial (B2B/B2C) con la administración interna, eliminando la dependencia de hojas de cálculo dispersas y proporcionando inteligencia de negocios en tiempo real.",
      en: "Comprehensive Full-Stack platform developed to centralize and optimize wholesale business operations. The system unifies commercial management (B2B/B2C) with internal administration, eliminating scattered spreadsheet dependencies and providing real-time business intelligence.",
    },
    objectives: {
      es: [
        "Implementar gestión de inventarios ciegos con módulos de auditoría que garanticen la integridad del stock y reduzcan pérdidas.",
        "Desarrollar tableros de inteligencia financiera con cálculo de márgenes de ganancia por unidad y proyecciones basadas en datos.",
        "Crear experiencia de usuario dinámica (Seasonal UX) que adapte la identidad visual automáticamente según la temporada comercial.",
        "Establecer sistema robusto de trazabilidad con bitácora de movimientos para auditoría forense completa.",
      ],
      en: [
        "Implement blind inventory management with audit modules to ensure stock integrity and reduce losses.",
        "Develop financial intelligence dashboards with unit profit margin calculations and data-based projections.",
        "Create dynamic user experience (Seasonal UX) that automatically adapts visual identity according to commercial season.",
        "Establish robust traceability system with movement logs for complete forensic auditing.",
      ],
    },
    responsibilities: {
      es: [
        "Diseño de arquitectura modular React + Node.js desplegada en Azure, escalable con las operaciones del cliente.",
        'Implementación de algoritmos backend para cálculo automático de "Unit Economics" (Costo vs. Precio vs. Margen) con alertas en tiempo real.',
        "Desarrollo de sistema de generación de reportes automatizados exportables a Excel para contabilidad y gerencia.",
        "Construcción de arquitectura de autenticación JWT con separación estricta de roles y registro inmutable de actividades.",
        "Creación de módulo de proyección de stock que calcula capacidades de empaquetado y ventas potenciales basándose en materia prima disponible.",
      ],
      en: [
        "Designed modular React + Node.js architecture deployed on Azure, scalable with client operations.",
        'Implemented backend algorithms for automatic "Unit Economics" calculation (Cost vs. Price vs. Margin) with real-time alerts.',
        "Developed automated report generation system exportable to Excel for accounting and management.",
        "Built JWT authentication architecture with strict role separation and immutable activity logging.",
        "Created stock projection module that calculates packaging capacities and potential sales based on available raw materials.",
      ],
    },
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Azure",
      "Full-Stack",
      "ERP",
      "E-commerce",
    ],
    links: {
      visit_store: "https://razo.com.mx/",
      instagram: "https://www.instagram.com/razoconnect/",
    },
    images: {
      hero: "/images/RazoConnect.png",
      gallery: [
        "/images/RC_admin.png",
        "/images/RC_Inicio.png",
        "/images/RC_Productos.png",
        "/images/RC_Carrito.png",
        "/images/RC_Pedidos.png",
      ],
    },
  },
  {
    id: "task-key",
    title: {
      es: "Task Key",
      en: "Task Key",
    },
    subtitle: {
      es: "Aplicación de Control Parental",
      en: "Parental Control Application",
    },
    status: {
      es: "En desarrollo",
      en: "In development",
    },
    isOngoing: true,
    year: "2025",
    duration: {
      es: "En desarrollo",
      en: "In development",
    },
    team: {
      es: "7 desarrolladores",
      en: "7 developers",
    },
    role: {
      es: "Desarrollador Backend",
      en: "Backend Developer",
    },
    overview: {
      es: "Aplicación móvil orientada a tutores para gestionar permisos y hábitos digitales de niños mediante un backend seguro y escalable.",
      en: "Mobile application for guardians to manage children’s digital habits through a secure and scalable backend.",
    },
    objectives: {
      es: [
        "Crear endpoints REST seguros para registrar dispositivos, roles y actividades monitoreadas.",
        "Ofrecer herramientas de administración para configurar horarios y restricciones personalizadas.",
      ],
      en: [
        "Create secure REST endpoints to register devices, roles, and monitored activities.",
        "Provide administration tools to configure schedules and personalized restrictions.",
      ],
    },
    responsibilities: {
      es: [
        "Implementación de lógica de negocio en Python con FastAPI y pruebas automatizadas.",
        "Gestión de autenticación basada en tokens y orquestación de notificaciones push.",
        "Monitoreo de métricas de rendimiento y ajuste de consultas para mantener SLAs.",
      ],
      en: [
        "Implemented business logic in Python with FastAPI and automated tests.",
        "Managed token-based authentication and orchestrated push notifications.",
        "Monitored performance metrics and tuned queries to meet SLAs.",
      ],
    },
    technologies: ["Python", "Backend", "API"],
    links: {
      github: "#",
    },
    images: {
      hero: "/images/TaskKey.png",
      gallery: [
        "/images/TK_AsignarTarea.png",
        "/images/TK_capibara.png",
        "/images/TK_Logros.png",
        "/images/TK_Niño.png",
        "/images/TK_Notificaciones.png",
        "/images/TK_PerfilesNiños.png",
        "/images/TK_PerfilNiño.png",
        "/images/TK_PerfilPadre.png",
        "/images/TK_tareaCompletada.png",
        "/images/TK_tareas.png",
        "/images/TK_TareasPendientes.png",
      ],
    },
  },
];

// ============================================================================
// PLANTILLA PARA AGREGAR UN NUEVO PROYECTO
// ============================================================================
// Copia este bloque, pégalo dentro del array PROJECTS_DATA (antes del corchete final ]),
// y personalízalo con la información de tu proyecto.
//
// RECUERDA:
// - Agrega una coma después del último proyecto existente
// - Cambia TODOS los valores de ejemplo por los tuyos
// - Las rutas de imágenes deben empezar con /images/
// ============================================================================
/*
{
  // Identificador único - usa solo letras minúsculas, números y guiones
  // Ejemplo: "mi-app-web", "calculadora-react", "blog-personal"
  id: "nombre-de-tu-proyecto",
  
  // Título del proyecto (aparece como encabezado)
  title: {
    es: "Nombre de Tu Proyecto en Español",
    en: "Your Project Name in English",
  },
  
  // Subtítulo (tipo de proyecto)
  subtitle: {
    es: "Aplicación Web / Sitio Web / API / etc.",
    en: "Web Application / Website / API / etc.",
  },
  
  // Estado del proyecto
  status: {
    es: "Terminado",  // O "En desarrollo"
    en: "Completed",  // O "In progress"
  },
  
  // ¿Está en desarrollo actualmente?
  isOngoing: false,  // true si aún trabajas en él, false si está terminado
  
  // Año en que lo hiciste
  year: "2025",
  
  // Cuánto tiempo te tomó
  duration: {
    es: "2 semanas",  // Ejemplo: "1 mes", "3 días", "En desarrollo"
    en: "2 weeks",
  },
  
  // Tamaño del equipo
  team: {
    es: "1 desarrollador",  // O "2 desarrolladores", "Equipo de 5", etc.
    en: "1 developer",
  },
  
  // Tu rol en el proyecto
  role: {
    es: "Desarrollador Full-Stack",  // O "Frontend", "Backend", "Diseñador", etc.
    en: "Full-Stack Developer",
  },
  
  // Descripción general del proyecto (2-3 líneas)
  // Explica QUÉ hace el proyecto y POR QUÉ es útil
  overview: {
    es: "Aquí describe tu proyecto. ¿Qué problema resuelve? ¿Para quién es? ¿Qué lo hace especial? Sé específico pero conciso.",
    en: "Here describe your project. What problem does it solve? Who is it for? What makes it special? Be specific but concise.",
  },
  
  // Objetivos principales del proyecto (opcional pero recomendado)
  objectives: {
    es: [
      "Primer objetivo que querías lograr con este proyecto",
      "Segundo objetivo o funcionalidad importante",
      "Tercer objetivo o meta técnica",
    ],
    en: [
      "First objective you wanted to achieve with this project",
      "Second objective or important functionality",
      "Third objective or technical goal",
    ],
  },
  
  // Tus responsabilidades específicas (opcional)
  responsibilities: {
    es: [
      "Qué hiciste específicamente en el proyecto",
      "Tecnologías que implementaste",
      "Problemas que resolviste",
    ],
    en: [
      "What you specifically did in the project",
      "Technologies you implemented",
      "Problems you solved",
    ],
  },
  
  // Lista de tecnologías que usaste
  // Estas aparecerán como etiquetas/badges en el proyecto
  technologies: [
    "React",        // Frameworks y librerías
    "Node.js",      // Backend
    "CSS",          // Estilos
    "PostgreSQL",   // Base de datos
    // Agrega todas las que usaste
  ],
  
  // Enlaces relacionados con el proyecto
  links: {
    github: "https://github.com/tu-usuario/tu-proyecto",  // Repositorio en GitHub
    // demo: "https://tu-proyecto.vercel.app",  // Descomenta si tienes demo en vivo
    // certificate: "URL del certificado",  // Si ganaste un premio o certificado
  },
  
  // Imágenes del proyecto
  images: {
    // Imagen principal (la más importante, aparece primero)
    // Coloca la imagen en: public/images/nombre-proyecto.png
    hero: "/images/tu-proyecto-principal.png",
    
    // Galería de imágenes adicionales (opcional)
    // Muestra diferentes vistas o funcionalidades de tu proyecto
    gallery: [
      "/images/tu-proyecto-vista1.png",
      "/images/tu-proyecto-vista2.png",
      "/images/tu-proyecto-vista3.png",
      // Agrega todas las capturas que quieras mostrar
    ],
  },
},
*/

// ============================================================================
// CONSEJOS PARA BUENOS PROYECTOS:
// ============================================================================
// 1. Calidad sobre cantidad: Es mejor tener 2-3 proyectos bien documentados
//    que 10 proyectos sin descripción.
//
// 2. Cuenta una historia: No solo digas "hice una app", explica QUÉ problema
//    resuelve y CÓMO lo resolviste.
//
// 3. Muestra tu proceso: Si enfrentaste desafíos técnicos interesantes,
//    menciónalo en objectives o responsibilities.
//
// 4. Usa buenas imágenes: Las capturas de pantalla deben ser claras y mostrar
//    las funcionalidades principales. Usa herramientas como Screely.com para
//    hacer que se vean profesionales.
//
// 5. Mantén los links actualizados: Asegúrate de que los repositorios sean
//    públicos y que los demos funcionen.
//
// 6. Sé honesto: Si es un proyecto escolar o de práctica, está bien decirlo.
//    Lo importante es mostrar lo que aprendiste.
// ============================================================================
