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
