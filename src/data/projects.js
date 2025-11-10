export const PROJECTS_DATA = [
  {
    id: 'analisis-spark-sql',
    title: {
      es: 'Análisis de Datos con Spark y SQL',
      en: 'Data Analysis with Spark and SQL',
    },
    subtitle: {
      es: 'Proyecto de Big Data (Curso ANIEI)',
      en: 'Big Data Project (ANIEI Conference)',
    },
    status: {
      es: 'Terminado',
      en: 'Completed',
    },
    isOngoing: false,
    year: '2024',
    duration: {
      es: '6 semanas',
      en: '6 weeks',
    },
    team: {
      es: '3 personas',
      en: '3 people',
    },
    role: {
      es: 'Ingeniero de Datos y Analista',
      en: 'Data Engineer & Analyst',
    },
    overview: {
      es: 'Proyecto final del Congreso ANIEI enfocado en construir un pipeline de datos con Apache Spark y SQL para encontrar patrones de comportamiento en grandes volúmenes de información.',
      en: 'Final project for the ANIEI Congress focused on building a data pipeline with Apache Spark and SQL to discover behavioral patterns in large datasets.',
    },
    objectives: {
      es: [
        'Diseñar un flujo ETL escalable capaz de procesar +30GB de datos en paralelo.',
        'Identificar indicadores clave para optimizar la toma de decisiones dentro del dominio del dataset.',
      ],
      en: [
        'Design a scalable ETL pipeline capable of processing 30GB+ of data in parallel.',
        'Identify key indicators to improve decision-making within the dataset domain.',
      ],
    },
    responsibilities: {
      es: [
        'Modelado de la arquitectura de datos distribuida sobre Spark y ajuste de particiones.',
        'Optimización de consultas SQL utilizando técnicas de window functions y caching.',
        'Generación de reportes exploratorios y dashboards para presentar hallazgos al comité académico.',
      ],
      en: [
        'Modeled the distributed data architecture on Spark and tuned partitioning.',
        'Optimized SQL queries using window functions and caching strategies.',
        'Produced exploratory reports and dashboards to present findings to the academic committee.',
      ],
    },
    technologies: ['Spark', 'SQL', 'Data Analysis', 'Big Data'],
    links: {
      github: 'https://github.com/ferramdr/ANIEI-Data-Analysis-SPARK-SQL-',
    },
    images: {
      hero: '/images/ANIEI_1.png',
      gallery: ['/images/ANIEI_2.png', '/images/ANIEI_3.png', '/images/ANIEI_4.png'],
    },
  },
  {
    id: 'razo-connect',
    title: {
      es: 'Razo Connect',
      en: 'Razo Connect',
    },
    subtitle: {
      es: 'E-commerce y Sistema de Gestión Empresarial',
      en: 'E-commerce and Business Management System',
    },
    status: {
      es: 'En desarrollo',
      en: 'In progress',
    },
    isOngoing: true,
    year: '2025',
    duration: {
      es: 'Proyecto continuo',
      en: 'Ongoing project',
    },
    team: {
      es: '4 personas',
      en: '4 people',
    },
    role: {
      es: 'Ingeniero Full-Stack',
      en: 'Full-Stack Engineer',
    },
    overview: {
      es: 'Solución integral que combina una tienda en línea para clientes con un panel administrativo que centraliza inventario, órdenes y reportes financieros.',
      en: 'End-to-end solution combining an online store for customers with an admin panel that centralizes inventory, orders, and financial reports.',
    },
    objectives: {
      es: [
        'Unificar operaciones comerciales en una única plataforma accesible desde web.',
        'Automatizar reportes de ventas y stock exportables a Excel para gerencia y contabilidad.',
      ],
      en: [
        'Unify business operations within a single web platform.',
        'Automate sales and stock reports exportable to Excel for management and accounting.',
      ],
    },
    responsibilities: {
      es: [
        'Diseño de arquitectura modular React + Node.js con separación de capas y autenticación JWT.',
        'Construcción de flujos CRUD para catálogos, órdenes y proveedores con validaciones en tiempo real.',
        'Implementación de exportaciones a Excel y gráficos de desempeño utilizando APIs internas.',
      ],
      en: [
        'Designed a modular React + Node.js architecture with layered separation and JWT authentication.',
        'Built CRUD workflows for catalogs, orders, and suppliers with real-time validations.',
        'Implemented Excel exports and performance dashboards using internal APIs.',
      ],
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Full-Stack', 'E-commerce', 'Reportes Excel'],
    links: {
      github: '#',
      demo: '#',
    },
    images: {
      hero: '/images/razo/main.png',
      gallery: ['/images/razo/thumb1.png', '/images/razo/thumb2.png'],
    },
  },
  {
    id: 'task-key',
    title: {
      es: 'Task Key',
      en: 'Task Key',
    },
    subtitle: {
      es: 'Aplicación de Control Parental',
      en: 'Parental Control Application',
    },
    status: {
      es: 'En desarrollo',
      en: 'In development',
    },
    isOngoing: true,
    year: '2025',
    duration: {
      es: 'En desarrollo',
      en: 'In development',
    },
    team: {
      es: 'Equipo de 7 desarrolladores',
      en: 'Team of 7 developers',
    },
    role: {
      es: 'Desarrollador Backend',
      en: 'Backend Developer',
    },
    overview: {
      es: 'Aplicación móvil orientada a tutores para gestionar permisos y hábitos digitales de niños mediante un backend seguro y escalable.',
      en: 'Mobile application for guardians to manage children’s digital habits through a secure and scalable backend.',
    },
    objectives: {
      es: [
        'Crear endpoints REST seguros para registrar dispositivos, roles y actividades monitoreadas.',
        'Ofrecer herramientas de administración para configurar horarios y restricciones personalizadas.',
      ],
      en: [
        'Create secure REST endpoints to register devices, roles, and monitored activities.',
        'Provide administration tools to configure schedules and personalized restrictions.',
      ],
    },
    responsibilities: {
      es: [
        'Implementación de lógica de negocio en Python con FastAPI y pruebas automatizadas.',
        'Gestión de autenticación basada en tokens y orquestación de notificaciones push.',
        'Monitoreo de métricas de rendimiento y ajuste de consultas para mantener SLAs.',
      ],
      en: [
        'Implemented business logic in Python with FastAPI and automated tests.',
        'Managed token-based authentication and orchestrated push notifications.',
        'Monitored performance metrics and tuned queries to meet SLAs.',
      ],
    },
    technologies: ['Python', 'Backend', 'API'],
    links: {
      github: '#',
    },
    images: {
      hero: '/images/TaskKey.png',
      gallery: [
        '/images/TK_AsignarTarea.png',
        '/images/TK_capibara.png',
        '/images/TK_Logros.png',
        '/images/TK_Niño.png',
        '/images/TK_Notificaciones.png',
        '/images/TK_PerfilesNiños.png',
        '/images/TK_PerfilNiño.png',
        '/images/TK_PerfilPadre.png',
        '/images/TK_tareaCompletada.png',
        '/images/TK_tareas.png',
        '/images/TK_TareasPendientes.png',
      ],
    },
  },
];
