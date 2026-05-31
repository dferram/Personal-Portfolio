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
  react: 'react.png',
  nodejs: 'nodeJS.png',
  javascript: 'JavaScript.png',
  html: 'html.png',
  css: 'css.png',
  tailwind: 'tailwind.png',
  postgresql: 'pgSQL.png',
  mongodb: 'icons8-mongodb-48.png',
  python: 'python.png',
  sql: 'sql.png',
  colab: 'colab.png',
  gcp: 'GCP.png',
  azure: 'azure.png',
  docker: 'docker.png',
  apacheSpark: 'apacheSpark.png',
};

// ----------------------------------------------------------------------------
// IMÁGENES DE PROYECTOS
// ----------------------------------------------------------------------------
// Coloca las imágenes en public/images/ y cambia los nombres aquí
export const PROJECT_IMAGES = {
  // Proyecto 1
  aniei: {
    hero: 'ANIEI_1.png',
    gallery: ['ANIEI_2.png', 'ANIEI_3.png', 'ANIEI_4.png'],
  },

  // Proyecto 2 
  razoconnect: {
    hero: 'RazoConnect.png',
    gallery: ['RC_admin.png', 'RC_Inicio.png', 'RC_Productos.png', 'RC_Carrito.png', 'RC_Pedidos.png'],
  },

  // Proyecto 3
  taskkey: {
    hero: 'TaskKey.png',
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
  awsCloudFoundations: 'aws-academy-graduate-cloud-foundations-training-bad.png',
  googleBuildWithAI: 'buildwithAI-APRIL.png',
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
    imageUrl: 'experiences/cdmx-tech-week/3.jpeg',
    hero: 'experiences/cdmx-tech-week/5.jpeg',
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
    hero: 'experiences/gdg-queretaro/1.jpeg',
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

  'google-build-with-ai': {
    imageUrl: 'experiences/google-build-with-ai/DSC02550.JPG',
    hero: 'experiences/google-build-with-ai/DSC02540.JPG',
    gallery: [
      'experiences/google-build-with-ai/DSC02536.JPG',
      'experiences/google-build-with-ai/DSC02538.JPG',
      'experiences/google-build-with-ai/DSC02539.JPG',
      'experiences/google-build-with-ai/DSC02544.JPG',
      'experiences/google-build-with-ai/DSC02545.JPG',
      'experiences/google-build-with-ai/DSC02546.JPG',
      'experiences/google-build-with-ai/DSC02547.JPG',
      'experiences/google-build-with-ai/DSC02548.JPG',
      'experiences/google-build-with-ai/DSC02550.JPG',
      'experiences/google-build-with-ai/DSC02551.JPG',
      'experiences/google-build-with-ai/DSC02552.JPG',
      'experiences/google-build-with-ai/DSC02553.JPG',
      'experiences/google-build-with-ai/DSC02554.JPG',
      'experiences/google-build-with-ai/DSC02556.JPG',
      'experiences/google-build-with-ai/DSC02557.JPG',
      'experiences/google-build-with-ai/DSC02558.JPG',
      'experiences/google-build-with-ai/DSC02559.JPG',
      'experiences/google-build-with-ai/DSC02560.JPG',
      'experiences/google-build-with-ai/DSC02566.JPG',
      'experiences/google-build-with-ai/DSC02567.JPG',
      'experiences/google-build-with-ai/DSC02568.JPG',
      'experiences/google-build-with-ai/DSC02569.JPG',
      'experiences/google-build-with-ai/DSC02570.JPG',
      'experiences/google-build-with-ai/DSC02572.JPG',
      'experiences/google-build-with-ai/DSC02573.JPG',
      'experiences/google-build-with-ai/DSC02574.JPG',
      'experiences/google-build-with-ai/DSC02575.JPG',
      'experiences/google-build-with-ai/DSC02576.JPG',
      'experiences/google-build-with-ai/DSC02577.JPG',
      'experiences/google-build-with-ai/DSC02578.JPG',
      'experiences/google-build-with-ai/DSC02579.JPG',
      'experiences/google-build-with-ai/DSC02580.JPG',
      'experiences/google-build-with-ai/DSC02581.JPG',
      'experiences/google-build-with-ai/DSC02583.JPG',
      'experiences/google-build-with-ai/DSC02584.JPG',
      'experiences/google-build-with-ai/DSC02585.JPG',
      'experiences/google-build-with-ai/DSC02586.JPG',
      'experiences/google-build-with-ai/DSC02587.JPG',
      'experiences/google-build-with-ai/DSC02588.JPG',
      'experiences/google-build-with-ai/DSC02589.JPG',
      'experiences/google-build-with-ai/DSC02590.JPG',
      'experiences/google-build-with-ai/DSC02591.JPG',
      'experiences/google-build-with-ai/DSC02593.JPG',
      'experiences/google-build-with-ai/DSC02595.JPG',
      'experiences/google-build-with-ai/DSC02596.JPG',
      'experiences/google-build-with-ai/DSC02598.JPG',
      'experiences/google-build-with-ai/DSC02599.JPG',
      'experiences/google-build-with-ai/DSC02601.JPG',
      'experiences/google-build-with-ai/buildwitai-work.png',
    ],
  },

  'github-course': {
    imageUrl: 'experiences/github-course/DSC02322.JPG',
    hero: 'experiences/github-course/DSC_0326.jpg.jpeg',
    gallery: [
      'experiences/github-course/680636682_1428662599278490_7941633465729974484_n.jpg',
      'experiences/github-course/683850540_1428661305945286_3411795602126256729_n.jpg',
      'experiences/github-course/DSC02278.JPG',
      'experiences/github-course/DSC02322.JPG',
      'experiences/github-course/DSC02323.JPG',
      'experiences/github-course/DSC02325.JPG',
      'experiences/github-course/DSC02327.JPG',
      'experiences/github-course/DSC02328.JPG',
      'experiences/github-course/DSC02332.JPG',
      'experiences/github-course/DSC02333.JPG',
      'experiences/github-course/DSC02335.JPG',
      'experiences/github-course/DSC02336.JPG',
      'experiences/github-course/DSC02337.JPG',
      'experiences/github-course/DSC02338.JPG',
      'experiences/github-course/DSC02339.JPG',
      'experiences/github-course/DSC02340.JPG',
      'experiences/github-course/DSC02341.JPG',
      'experiences/github-course/DSC02344.JPG',
      'experiences/github-course/DSC02349.JPG',
      'experiences/github-course/DSC02362.JPG',
      'experiences/github-course/DSC_0321.jpg.jpeg',
      'experiences/github-course/DSC_0328.jpg.jpeg',
      'experiences/github-course/DSC_0329.jpg.jpeg',
      'experiences/github-course/DSC_0357.jpg.jpeg',
      'experiences/github-course/DSC_0361.jpg.jpeg',
      'experiences/github-course/DSC_0362.jpg.jpeg',
      'experiences/github-course/DSC_0384.jpg.jpeg',
      'experiences/github-course/DSC_0387.jpg.jpeg',
      'experiences/github-course/DSC_0401.jpg.jpeg',
      'experiences/github-course/DSC_0406.jpg.jpeg',
      'experiences/github-course/DSC_0408.jpg.jpeg',
    ],
  },
};
