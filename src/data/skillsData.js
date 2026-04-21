// ============================================================================
// ARCHIVO DE DATOS: HABILIDADES TÉCNICAS
// ============================================================================
import { processImagePaths } from '@/utils/paths';
// Aquí defines las tecnologías, lenguajes y herramientas que conoces.
// Se organizan en categorías (por ejemplo: Desarrollo Web, Análisis de Datos, etc.)
//
// CÓMO PERSONALIZAR:
// 1. Modifica las categorías existentes con tus habilidades
// 2. Agrega nuevas categorías si trabajas en diferentes áreas
// 3. Elimina tecnologías que no conoces
// 4. Agrega las tecnologías que SÍ conoces
//
// ESTRUCTURA:
// - Cada categoría tiene un 'id', 'title' y lista de 'items'
// - Cada item tiene 'name' (nombre de la tecnología) e 'icon' (ruta al ícono)
//
// SOBRE LOS ÍCONOS:
// - Coloca los íconos en: public/images/
// - Descarga íconos gratis de: https://icons8.com/ o https://www.flaticon.com/
// - Formato recomendado: PNG con fondo transparente
// - Tamaño recomendado: 48x48 píxeles o 64x64 píxeles
//
// IMPORTANTE:
// - Solo agrega tecnologías que REALMENTE conoces
// - Es mejor ser honesto que exagerar tus habilidades
// - Puedes indicar tu nivel en el título (ej: "En aprendizaje", "Avanzado")
// ============================================================================

const skillsDataRaw = [
  {
    id: 'web',
    title: 'Desarrollo Web (Full-Stack)',
    items: [
      { name: 'React', icon: '/images/react.png' },
      { name: 'Node.js', icon: '/images/nodeJS.png' },
      { name: 'JavaScript', icon: '/images/JavaScript.png' },
      { name: 'HTML5', icon: '/images/html.png' },
      { name: 'CSS3', icon: '/images/css.png' },
      { name: 'Tailwind CSS', icon: '/images/tailwind.png' },
      { name: 'PostgreSQL', icon: '/images/pgSQL.png' },
      { name: 'MongoDB', icon: '/images/icons8-mongodb-48.png' },
    ],
  },
  {
    id: 'data',
    title: 'Analítica de Datos',
    items: [
      { name: 'Python', icon: '/images/python.png' },
      { name: 'Pandas', icon: '/images/pandas.png' },
      { name: 'Apache Spark', icon: '/images/apacheSpark.png' },
      { name: 'Matplotlib', icon: '/images/Matplotlib.png' },
      { name: 'Oracle SQL', icon: '/images/oracle.png' },
      { name: 'SQL', icon: '/images/sql.png' }
    ],
  },
];

export const SKILLS_DATA = processImagePaths(skillsDataRaw);

// ============================================================================
// PLANTILLA PARA AGREGAR UNA NUEVA CATEGORÍA DE HABILIDADES
// ============================================================================
// Copia este bloque y pégalo dentro del array SKILLS_DATA para agregar
// una nueva categoría (por ejemplo: Diseño, DevOps, Móvil, etc.)
// ============================================================================
/*
{
  // Identificador único para esta categoría
  id: 'nombre-categoria',  // Ejemplo: 'mobile', 'design', 'devops'
  
  // Título de la categoría (aparece como encabezado)
  title: 'Nombre de la Categoría',  // Ejemplo: 'Desarrollo Móvil', 'Diseño UX/UI'
  
  // Lista de tecnologías en esta categoría
  items: [
    { 
      name: 'Nombre de la Tecnología',  // Ejemplo: 'Flutter', 'Figma', 'Docker'
      icon: '/images/nombre-icono.png'   // Ruta al ícono en public/images/
    },
    { 
      name: 'Otra Tecnología', 
      icon: '/images/otro-icono.png' 
    },
    // Agrega todas las que quieras...
  ],
},
*/

// ============================================================================
// CONSEJOS PARA UNA BUENA SECCIÓN DE HABILIDADES:
// ============================================================================
// 1. Sé honesto: Solo incluye tecnologías que realmente sabes usar.
//    Es mejor tener 5 habilidades sólidas que 20 que apenas conoces.
//
// 2. Organiza por nivel: Puedes crear categorías como:
//    - "Tecnologías que domino"
//    - "Tecnologías en aprendizaje"
//    - "Herramientas que uso"
//
// 3. Mantén actualizado: Conforme aprendas nuevas tecnologías, agrégalas.
//    Conforme dejes de usar otras, considera quitarlas.
//
// 4. Prioriza lo relevante: Pon primero las tecnologías más importantes
//    para el tipo de trabajo que buscas.
//
// 5. Incluye herramientas: No solo lenguajes de programación, también
//    herramientas como Git, VS Code, Figma, etc.
//
// 6. Dónde conseguir íconos gratis:
//    - Icons8: https://icons8.com/ (busca "[nombre tecnología] icon")
//    - Flaticon: https://www.flaticon.com/
//    - DevIcon: https://devicon.dev/ (específico para tecnologías)
//    - Simple Icons: https://simpleicons.org/
//
// 7. Si no tienes un ícono: Puedes usar un ícono genérico o simplemente
//    el nombre de la tecnología sin ícono (modifica el componente Skills.jsx)
// ============================================================================

// ============================================================================
// EJEMPLOS DE CATEGORÍAS QUE PODRÍAS AGREGAR:
// ============================================================================
// - Desarrollo Móvil: Flutter, React Native, Swift, Kotlin
// - DevOps: Docker, Kubernetes, AWS, Azure, CI/CD
// - Diseño: Figma, Adobe XD, Photoshop, Illustrator
// - Testing: Jest, Cypress, Selenium, Postman
// - Bases de Datos: MySQL, MongoDB, Redis, Firebase
// - Herramientas: Git, VS Code, Jira, Slack
// - Soft Skills: Trabajo en equipo, Comunicación, Liderazgo (si quieres)
// ============================================================================
