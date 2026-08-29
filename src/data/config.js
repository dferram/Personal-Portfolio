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
      'experiences/cdmx-tech-week/5.jpeg',
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
      'experiences/cdmx-tech-week/20.jpeg',
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
      'experiences/cdmx-tech-week/33.jpeg',
      'experiences/cdmx-tech-week/34.jpeg',
      'experiences/cdmx-tech-week/35.jpeg',
      'experiences/cdmx-tech-week/36.jpeg',
      'experiences/cdmx-tech-week/37.jpeg',
      'experiences/cdmx-tech-week/38.jpeg',
      'experiences/cdmx-tech-week/39.jpeg',
      'experiences/cdmx-tech-week/40.jpeg',
      'experiences/cdmx-tech-week/41.jpeg',
      'experiences/cdmx-tech-week/42.jpeg',
      'experiences/cdmx-tech-week/43.jpeg',
      'experiences/cdmx-tech-week/44.jpeg',
      'experiences/cdmx-tech-week/45.jpeg',
      'experiences/cdmx-tech-week/46.jpeg',
      'experiences/cdmx-tech-week/47.jpeg',
      'experiences/cdmx-tech-week/48.jpeg',
      'experiences/cdmx-tech-week/49.jpeg',
      'experiences/cdmx-tech-week/50.jpeg',
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

  'aws-summit-2026': {
    imageUrl: 'experiences/aws summit 26/DSC03486.JPG',
    hero: 'experiences/aws summit 26/DSC03484.JPG',
    gallery: [
      'experiences/aws summit 26/DSC03487.JPG',
      'experiences/aws summit 26/DSC03489.JPG',
      'experiences/aws summit 26/DSC03490.JPG',
      'experiences/aws summit 26/DSC03491.JPG',
      'experiences/aws summit 26/DSC03498.JPG',
      'experiences/aws summit 26/DSC03499.JPG',
      'experiences/aws summit 26/DSC03500.JPG',
      'experiences/aws summit 26/DSC03501.JPG',
      'experiences/aws summit 26/DSC03502.JPG',
      'experiences/aws summit 26/DSC03503.JPG',
      'experiences/aws summit 26/DSC03504.JPG',
      'experiences/aws summit 26/DSC03505.JPG',
      'experiences/aws summit 26/DSC03506.JPG',
      'experiences/aws summit 26/DSC03507.JPG',
      'experiences/aws summit 26/DSC03508.JPG',
      'experiences/aws summit 26/DSC03510.JPG',
      'experiences/aws summit 26/DSC03511.JPG',
      'experiences/aws summit 26/DSC03513.JPG',
      'experiences/aws summit 26/DSC03514.JPG',
      'experiences/aws summit 26/DSC03515.JPG',
      'experiences/aws summit 26/DSC03521.JPG',
      'experiences/aws summit 26/DSC03522.JPG',
      'experiences/aws summit 26/DSC03523.JPG',
      'experiences/aws summit 26/DSC03524.JPG',
      'experiences/aws summit 26/DSC03526.JPG',
      'experiences/aws summit 26/DSC03527.JPG',
      'experiences/aws summit 26/DSC03529.JPG',
      'experiences/aws summit 26/DSC03530.JPG',
      'experiences/aws summit 26/DSC03531.JPG',
      'experiences/aws summit 26/DSC03532.JPG',
      'experiences/aws summit 26/DSC03533.JPG',
      'experiences/aws summit 26/DSC03534.JPG',
      'experiences/aws summit 26/DSC03535.JPG',
      'experiences/aws summit 26/DSC03536.JPG',
      'experiences/aws summit 26/DSC03537.JPG',
      'experiences/aws summit 26/DSC03538.JPG',
      'experiences/aws summit 26/DSC03539.JPG',
      'experiences/aws summit 26/DSC03540.JPG',
      'experiences/aws summit 26/DSC03541.JPG',
      'experiences/aws summit 26/DSC03542.JPG',
      'experiences/aws summit 26/DSC03543.JPG',
      'experiences/aws summit 26/DSC03544.JPG',
      'experiences/aws summit 26/DSC03545.JPG',
      'experiences/aws summit 26/DSC03546.JPG',
      'experiences/aws summit 26/DSC03548.JPG',
      'experiences/aws summit 26/DSC03549.JPG',
      'experiences/aws summit 26/DSC03550.JPG',
      'experiences/aws summit 26/DSC03551.JPG',
      'experiences/aws summit 26/DSC03552.JPG',
      'experiences/aws summit 26/DSC03554.JPG',
      'experiences/aws summit 26/DSC03555.JPG',
      'experiences/aws summit 26/DSC03556.JPG',
      'experiences/aws summit 26/DSC03557.JPG',
      'experiences/aws summit 26/DSC03558.JPG',
      'experiences/aws summit 26/DSC03559.JPG',
      'experiences/aws summit 26/DSC03560.JPG',
      'experiences/aws summit 26/DSC03561.JPG',
      'experiences/aws summit 26/DSC03562.JPG',
      'experiences/aws summit 26/DSC03563.JPG',
      'experiences/aws summit 26/DSC03564.JPG',
      'experiences/aws summit 26/DSC03565.JPG',
      'experiences/aws summit 26/DSC03566.JPG',
      'experiences/aws summit 26/DSC03567.JPG',
      'experiences/aws summit 26/DSC03568.JPG',
      'experiences/aws summit 26/DSC03570.JPG',
      'experiences/aws summit 26/DSC03572.JPG',
      'experiences/aws summit 26/DSC03573.JPG',
      'experiences/aws summit 26/DSC03575.JPG',
      'experiences/aws summit 26/DSC03576.JPG',
      'experiences/aws summit 26/DSC03579.JPG',
      'experiences/aws summit 26/DSC03580.JPG',
      'experiences/aws summit 26/DSC03581.JPG',
      'experiences/aws summit 26/DSC03582.JPG',
      'experiences/aws summit 26/DSC03583.JPG',
      'experiences/aws summit 26/DSC03585.JPG',
      'experiences/aws summit 26/DSC03589.JPG',
      'experiences/aws summit 26/DSC03591.JPG',
      'experiences/aws summit 26/DSC03592.JPG',
      'experiences/aws summit 26/DSC03593.JPG',
      'experiences/aws summit 26/DSC03594.JPG',
      'experiences/aws summit 26/DSC03595.JPG',
      'experiences/aws summit 26/DSC03596.JPG',
      'experiences/aws summit 26/DSC03597.JPG',
      'experiences/aws summit 26/DSC03601.JPG',
      'experiences/aws summit 26/DSC03603.JPG',
      'experiences/aws summit 26/DSC03607.JPG',
      'experiences/aws summit 26/DSC03609.JPG',
      'experiences/aws summit 26/DSC03614.JPG',
      'experiences/aws summit 26/DSC03617.JPG',
      'experiences/aws summit 26/DSC03618.JPG',
      'experiences/aws summit 26/DSC03620.JPG',
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
