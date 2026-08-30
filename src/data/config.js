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
const cdmxImages = import.meta.glob('/public/images/experiences/cdmx-tech-week/*.{jpeg,jpg,png,JPG}', { eager: true });
const cdmxFiles = Object.keys(cdmxImages).map(p => p.replace('/public/images/', ''));

const collegeImages = import.meta.glob('/public/images/experiences/college/*.{jpeg,jpg,png,JPG}', { eager: true });
const collegeFiles = Object.keys(collegeImages).map(p => p.replace('/public/images/', ''));

const figmaImages = import.meta.glob('/public/images/experiences/friends-of-figma/*.{jpeg,jpg,png,JPG}', { eager: true });
const figmaFiles = Object.keys(figmaImages).map(p => p.replace('/public/images/', ''));

const gdgImages = import.meta.glob('/public/images/experiences/gdg-queretaro/*.{jpeg,jpg,png,JPG}', { eager: true });
const gdgFiles = Object.keys(gdgImages).map(p => p.replace('/public/images/', ''));

const awsImages = import.meta.glob('/public/images/experiences/aws summit 26/*.{jpeg,jpg,png,JPG}', { eager: true });
const awsFiles = Object.keys(awsImages).map(p => p.replace('/public/images/', ''));

const googleAiImages = import.meta.glob('/public/images/experiences/google-build-with-ai/*.{jpeg,jpg,png,JPG}', { eager: true });
const googleAiFiles = Object.keys(googleAiImages).map(p => p.replace('/public/images/', ''));

const githubImages = import.meta.glob('/public/images/experiences/github-course/*.{jpeg,jpg,png,JPG}', { eager: true });
const githubFiles = Object.keys(githubImages).map(p => p.replace('/public/images/', ''));

export const EXPERIENCE_IMAGES = {
  'cdmx-tech-week': {
    imageUrl: cdmxFiles[0] || '',
    hero: cdmxFiles[1] || cdmxFiles[0] || '',
    gallery: cdmxFiles,
  },
  
  'college': {
    imageUrl: collegeFiles[0] || '',
    hero: collegeFiles[1] || collegeFiles[0] || '',
    gallery: collegeFiles,
  },
  
  'friends-of-figma': {
    imageUrl: figmaFiles[0] || '',
    hero: figmaFiles[1] || figmaFiles[0] || '',
    gallery: figmaFiles,
  },


  'gdg-queretaro': {
    imageUrl: gdgFiles[0] || '',
    hero: gdgFiles[1] || gdgFiles[0] || '',
    gallery: gdgFiles,
  },

  'aws-summit-2026': {
    imageUrl: awsFiles[0] || '',
    hero: awsFiles[1] || awsFiles[0] || '',
    gallery: awsFiles,
  },

  'google-build-with-ai': {
    imageUrl: googleAiFiles[0] || '',
    hero: googleAiFiles[1] || googleAiFiles[0] || '',
    gallery: googleAiFiles,
  },

  'github-course': {
    imageUrl: githubFiles[0] || '',
    hero: githubFiles[1] || githubFiles[0] || '',
    gallery: githubFiles,
  },
};
