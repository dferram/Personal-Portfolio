// ============================================================================
// ARCHIVO DE TRADUCCIONES: TEXTOS DEL PORTAFOLIO
// ============================================================================
// Este archivo contiene TODOS los textos que aparecen en tu portafolio,
// tanto en español (es) como en inglés (en).
//
// CÓMO PERSONALIZAR:
// 1. Busca la sección que quieres modificar (hero, about, contact, etc.)
// 2. Cambia el texto en español (es) con tu información
// 3. Cambia el texto en inglés (en) con la traducción
// 4. Guarda el archivo y los cambios se verán automáticamente
//
// SECCIONES PRINCIPALES:
// - common: Textos generales (nombre, etiquetas, etc.)
// - navbar: Enlaces del menú de navegación
// - hero: Sección de inicio/presentación
// - about: Sección "Sobre mí"
// - skills: Sección de habilidades técnicas
// - projects: Sección de proyectos
// - contact: Sección de contacto
//
// IMPORTANTE:
// - Mantén la estructura { es: "texto", en: "text" }
// - No elimines las llaves { } ni los dos puntos :
// - Usa comillas dobles " " para los textos
// - Si no sabes inglés, puedes usar Google Translate o DeepL
//
// PERSONALIZACIÓN BÁSICA:
// - Cambia 'Fernando Ramírez' por TU nombre
// - Cambia la descripción por la TUYA
// - Actualiza los enlaces de redes sociales
// ============================================================================

export const translations = {
  es: {
    common: {
      brand: 'Fernando Ramírez',
      languageLabel: 'Idioma',
      languageOptions: {
        es: 'ES',
        en: 'EN',
      },
      portfolioBadge: 'Portafolio 2025',
      viewProjects: 'Ver Proyectos',
      backToProjects: '← Volver a Proyectos',
      notFoundTitle: 'Proyecto no encontrado',
      notFoundDescription:
        'No pudimos encontrar un proyecto con el identificador proporcionado. Revisa el enlace o regresa a la página principal.',
      metrics: {
        heading: 'Ficha técnica',
        role: 'Rol',
        duration: 'Duración',
        team: 'Equipo',
        year: 'Año',
      },
      linkLabels: {
        github: 'Código',
        demo: 'Demo',
        certificate: 'Certificado',
      },
    },
    navbar: {
      links: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Perfil', href: '#sobre-mí' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Contacto', href: '#contacto' },
        { label: 'Certificados', href: '/certificados' },
        { label: 'Experiencias', href: '/experiencias' },
      ],
    },
    hero: {
      title: 'Fernando Ramírez',
      subtitle: 'Ingeniero de Software | Aspirante a Científico de Datos',
      description:
        'Estudiante de 6º semestre de Ingeniería de Software enfocado en construir experiencias digitales robustas y explorar cómo la ciencia de datos potencia decisiones estratégicas basadas en evidencia.',
      cta: 'Ver Proyectos',
    },
    about: {
      title: 'Sobre Mí',
      paragraphs: [
        'Soy estudiante de sexto semestre de Ingeniería de Software apasionado por construir soluciones digitales end-to-end. Mi experiencia abarca el desarrollo full-stack con un enfoque en experiencias modernas y accesibles que generen impacto.',
        'Actualmente estoy interesado en el análisis de datos y la ciencia de datos, combinando mi conocimiento técnico con la curiosidad por entender cómo la información guía decisiones estratégicas. Busco proyectos que me permitan unir ambas disciplinas.',
      ],
    },
    skills: {
      tag: 'Skillset',
      title: 'Habilidades Técnicas',
      description:
        'Tecnologías que domino para crear productos digitales end-to-end y herramientas que estoy adoptando para impulsar el análisis basado en datos.',
      categories: {
        web: {
          title: 'Desarrollo Web (Full-Stack)',
          description:
            'Construcción de experiencias completas: desde interfaces accesibles hasta APIs escalables y bases de datos robustas.',
          items: ['React', 'Node.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'],
        },
        data: {
          title: 'Análisis de Datos (En aprendizaje)',
          description:
            'Herramientas y librerías que utilizo para limpiar, analizar y visualizar información que apoya la toma de decisiones.',
          items: ['Python', 'Pandas', 'NumPy', 'SQL', 'Scikit-learn', 'Matplotlib'],
        },
      },
    },
    projects: {
      tag: 'Work',
      title: 'Proyectos Destacados',
      description:
        'Selección de trabajos recientes que combinan ingeniería de software y el potencial de los datos para generar valor.',
      viewDetail: 'Ver Detalle',
    },
    contact: {
      tag: 'Contacto',
      title: 'Construyamos algo increíble',
      description:
        'Estoy abierto a oportunidades, colaboraciones y proyectos que unan desarrollo de software con el poder del análisis de datos. Escríbeme y exploremos ideas juntos.',
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email',
      },
    },
    viewProject: {
      gallery: 'Galería',
      overview: 'Visión general',
      objectives: 'Objetivos clave',
      responsibilities: 'Responsabilidades',
      description: 'Descripción del Proyecto',
      technologies: 'Tecnologías',
      links: 'Enlaces',
      lightboxClose: 'Cerrar galería',
      previousImage: 'Imagen anterior',
      nextImage: 'Imagen siguiente',
      expandedLabel: 'Vista ampliada de',
    },
    certificates: {
      title: 'Mis Certificaciones',
      subtitle:
        'Aquí puedes encontrar las credenciales y certificados de los cursos y tecnologías que he completado.',
      button: 'Ver Credencial',
    },
    experiences: {
      title: 'Mis Experiencias',
      subtitle:
        'Viajes, hackathones, conferencias y otras experiencias que han enriquecido mi desarrollo profesional y personal.',
      categories: {
        travel: 'Viaje',
        hackathon: 'Hackathon',
        conference: 'Conferencia',
        volunteer: 'Voluntariado',
        workshop: 'Taller',
        award: 'Premio',
        other: 'Otro',
      },
      instagram: {
        viewButton: 'Ver en Instagram',
        relatedPost: 'Publicación relacionada con esta experiencia',
      },
    },
    viewExperience: {
      backToExperiences: '← Volver a Experiencias',
      notFoundTitle: 'Experiencia no encontrada',
      notFoundDescription: 'No pudimos encontrar una experiencia con el identificador proporcionado.',
      gallery: 'Galería',
      story: 'Historia',
      learnings: 'Aprendizajes',
      socialMedia: 'Redes Sociales',
      details: 'Detalles',
      category: 'Categoría',
      date: 'Fecha',
      location: 'Ubicación',
    },
  },
  en: {
    common: {
      brand: 'Fernando Ramírez',
      languageLabel: 'Language',
      languageOptions: {
        es: 'ES',
        en: 'EN',
      },
      portfolioBadge: 'Portfolio 2025',
      viewProjects: 'See Projects',
      backToProjects: '← Back to Projects',
      notFoundTitle: 'Project not found',
      notFoundDescription:
        'We could not find a project with the provided identifier. Please verify the link or go back to the main page.',
      metrics: {
        heading: 'Tech brief',
        role: 'Role',
        duration: 'Duration',
        team: 'Team',
        year: 'Year',
      },
      linkLabels: {
        github: 'Code',
        demo: 'Demo',
        certificate: 'Certificate',
      },
    },
    navbar: {
      links: [
        { label: 'Home', href: '#inicio' },
        { label: 'Profile', href: '#sobre-mí' },
        { label: 'Projects', href: '#proyectos' },
        { label: 'Contact', href: '#contacto' },
        { label: 'Certificates', href: '/certificados' },
        { label: 'Experiences', href: '/experiencias' },
      ],
    },
    hero: {
      title: 'Fernando Ramírez',
      subtitle: 'Software Engineer | Aspiring Data Scientist',
      description:
        'Sixth-semester Software Engineering student focused on building robust digital experiences while exploring how data science powers evidence-based strategic decisions.',
      cta: 'See Projects',
    },
    about: {
      title: 'About Me',
      paragraphs: [
        'I am a sixth-semester Software Engineering student passionate about building end-to-end digital solutions. My experience spans full-stack development with a focus on modern, accessible experiences that drive impact.',
        'I am currently interested in data and analytics, combining my technical background with curiosity about how information informs strategic decisions. I seek projects where both disciplines converge.',
      ],
    },
    skills: {
      tag: 'Skillset',
      title: 'Technical Skills',
      description:
        'Technologies I master to deliver end-to-end digital products and the tools I am adopting to power data-driven analysis.',
      categories: {
        web: {
          title: 'Web Development (Full-Stack)',
          description:
            'Building complete experiences: from accessible interfaces to scalable APIs and robust databases.',
          items: ['React', 'Node.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'],
        },
        data: {
          title: 'Data Analysis (In progress)',
          description:
            'Tools and libraries I rely on to clean, analyze, and visualize information that supports decision-making.',
          items: ['Python', 'Pandas', 'NumPy', 'SQL', 'Scikit-learn', 'Matplotlib'],
        },
      },
    },
    projects: {
      tag: 'Work',
      title: 'Featured Projects',
      description:
        'A selection of recent work that blends software engineering with the power of data to create value.',
      viewDetail: 'View Detail',
    },
    contact: {
      tag: 'Contact',
      title: 'Let’s build something great',
      description:
        'I am open to opportunities, collaborations, and projects that bring software development together with the power of data analysis. Reach out and let’s explore ideas together.',
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email',
      },
    },
    viewProject: {
      gallery: 'Gallery',
      overview: 'Overview',
      objectives: 'Key objectives',
      responsibilities: 'Responsibilities',
      description: 'Project Description',
      technologies: 'Technologies',
      links: 'Links',
      lightboxClose: 'Close gallery',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      expandedLabel: 'Expanded view of',
    },
    certificates: {
      title: 'My Certifications',
      subtitle: 'Here you can find the credentials and certificates for the courses and technologies I have completed.',
      button: 'View Credential',
    },
    experiences: {
      title: 'My Experiences',
      subtitle:
        'Trips, hackathons, conferences, and other experiences that have enriched my professional and personal development.',
      categories: {
        travel: 'Travel',
        hackathon: 'Hackathon',
        conference: 'Conference',
        volunteer: 'Volunteer',
        workshop: 'Workshop',
        award: 'Award',
        other: 'Other',
      },
      instagram: {
        viewButton: 'View on Instagram',
        relatedPost: 'Related post about this experience',
      },
    },
    viewExperience: {
      backToExperiences: '← Back to Experiences',
      notFoundTitle: 'Experience not found',
      notFoundDescription: 'We could not find an experience with the provided identifier.',
      gallery: 'Gallery',
      story: 'Story',
      learnings: 'Learnings',
      socialMedia: 'Social Media',
      details: 'Details',
      category: 'Category',
      date: 'Date',
      location: 'Location',
    },
  },
};
