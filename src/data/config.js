// ============================================================================
// ARCHIVO DE CONFIGURACIÓN CENTRAL
// ============================================================================
// Edita este archivo para personalizar las imágenes de tu portafolio.
// Para el resto de tu información personal (nombre, descripción, etc.)
// edita el archivo: src/i18n/translations.js
//
// INSTRUCCIONES:
// 1. Coloca tus imágenes en la carpeta: public/images/
// 2. Cambia los nombres de archivo abajo por los de tus imágenes
// 3. Guarda el archivo
// ============================================================================

// ----------------------------------------------------------------------------
// FOTO DE PERFIL
// ----------------------------------------------------------------------------
// Coloca tu foto en public/images/ y cambia el nombre aquí
export const PROFILE_PHOTO = 'foto.png';

// ----------------------------------------------------------------------------
// IMÁGENES DE HABILIDADES (íconos de tecnologías)
// ----------------------------------------------------------------------------
// Coloca los íconos en public/images/ y cambia los nombres aquí
export const SKILLS_ICONS = {
  // Desarrollo Web
  react:      'react.png',
  nodejs:     'nodeJS.png',
  javascript: 'JavaScript.png',
  html:       'html.png',
  css:        'css.png',
  tailwind:   'tailwind.png',
  postgresql: 'pgSQL.png',
  mongodb:    'icons8-mongodb-48.png',

  // Analítica de Datos
  python:      'python.png',
  pandas:      'pandas.png',
  spark:       'apacheSpark.png',
  matplotlib:  'Matplotlib.png',
  oracle:      'oracle.png',
  sql:         'sql.png',
};

// ----------------------------------------------------------------------------
// IMÁGENES DE PROYECTOS
// ----------------------------------------------------------------------------
// Coloca las imágenes en public/images/ y cambia los nombres aquí
export const PROJECT_IMAGES = {
  // Proyecto 1: Análisis Spark SQL
  aniei: {
    hero:    'ANIEI_1.png',
    gallery: ['ANIEI_2.png', 'ANIEI_3.png', 'ANIEI_4.png'],
  },

  // Proyecto 2: RazoConnect
  razoconnect: {
    hero:    'RazoConnect.png',
    gallery: ['RC_admin.png', 'RC_Inicio.png', 'RC_Productos.png', 'RC_Carrito.png', 'RC_Pedidos.png'],
  },

  // Proyecto 3: TaskKey
  taskkey: {
    hero:    'TaskKey.png',
    gallery: [
      'TK_AsignarTarea.png', 'TK_capibara.png', 'TK_Logros.png',
      'TK_Niño.png', 'TK_Notificaciones.png', 'TK_PerfilesNiños.png',
      'TK_PerfilNiño.png', 'TK_PerfilPadre.png', 'TK_tareaCompletada.png',
      'TK_tareas.png', 'TK_TareasPendientes.png',
    ],
  },
};

// ----------------------------------------------------------------------------
// IMÁGENES DE CERTIFICADOS
// ----------------------------------------------------------------------------
// Coloca las imágenes en public/images/ y cambia los nombres aquí
export const CERTIFICATE_IMAGES = {
  santanderDataScience: 'Ctf_SAO_DS.png',
};

// ----------------------------------------------------------------------------
// IMÁGENES DE EXPERIENCIAS
// ----------------------------------------------------------------------------
// Para cada experiencia:
// - Crea una carpeta en public/images/experiences/nombre-experiencia/
// - Agrega tus fotos dentro de esa carpeta (1.jpeg, 2.jpeg, etc.)
// - Cambia los nombres de carpeta y archivos aquí
//
// imageUrl    → imagen que aparece en la tarjeta de la lista
// hero        → imagen principal en la página de detalle
// gallery     → lista de fotos para la galería (agrega/quita las que quieras)
export const EXPERIENCE_IMAGES = {
  'cdmx-tech-week': {
    imageUrl: 'experiences/cdmx-tech-week/20.jpeg',
    hero:     'experiences/cdmx-tech-week/5.jpeg',
    gallery: [
      'experiences/cdmx-tech-week/1.jpeg',
      'experiences/cdmx-tech-week/2.jpeg',
      'experiences/cdmx-tech-week/3.jpeg',
      'experiences/cdmx-tech-week/4.jpeg',
      'experiences/cdmx-tech-week/6.jpeg',
      'experiences/cdmx-tech-week/7.jpeg',
      'experiences/cdmx-tech-week/8.jpeg',
      'experiences/cdmx-tech-week/9.jpeg',
      'experiences/cdmx-tech-week/10.jpeg',
      'experiences/cdmx-tech-week/11.jpeg',
      'experiences/cdmx-tech-week/12.jpeg',
      'experiences/cdmx-tech-week/13.jpeg',
      'experiences/cdmx-tech-week/14.jpeg',
      'experiences/cdmx-tech-week/15.jpeg',
      'experiences/cdmx-tech-week/16.jpeg',
      'experiences/cdmx-tech-week/17.jpeg',
      'experiences/cdmx-tech-week/18.jpeg',
      'experiences/cdmx-tech-week/19.jpeg',
      'experiences/cdmx-tech-week/21.jpeg',
      'experiences/cdmx-tech-week/22.jpeg',
      'experiences/cdmx-tech-week/23.jpeg',
      'experiences/cdmx-tech-week/24.jpeg',
      'experiences/cdmx-tech-week/25.jpeg',
      'experiences/cdmx-tech-week/26.jpeg',
      'experiences/cdmx-tech-week/27.jpeg',
      'experiences/cdmx-tech-week/28.jpeg',
      'experiences/cdmx-tech-week/29.jpeg',
      'experiences/cdmx-tech-week/30.jpeg',
      'experiences/cdmx-tech-week/31.jpeg',
      'experiences/cdmx-tech-week/32.jpeg',
    ],
  },

  'gdg-queretaro': {
    imageUrl: 'experiences/gdg-queretaro/1.jpeg',
    hero:     'experiences/gdg-queretaro/1.jpeg',
    gallery: [
      'experiences/gdg-queretaro/2.jpeg',
      'experiences/gdg-queretaro/3.jpeg',
      'experiences/gdg-queretaro/4.jpeg',
      'experiences/gdg-queretaro/5.jpeg',
      'experiences/gdg-queretaro/6.jpeg',
      'experiences/gdg-queretaro/7.jpeg',
      'experiences/gdg-queretaro/8.jpeg',
      'experiences/gdg-queretaro/9.jpeg',
      'experiences/gdg-queretaro/10.jpeg',
      'experiences/gdg-queretaro/11.jpeg',
    ],
  },
};
