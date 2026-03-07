/* 
 * TEMA: Clasico Profesional
 * 
 * Un estilo limpio y profesional con tonos azules y grises.
 * Perfecto para portafolios corporativos y presentaciones formales.
 * 
 * Consejo: Este tema tiene alto contraste, ideal para legibilidad.
 */

export const classicTheme = {
  // Fondos principales
  primary: '#FFFFFF',              // Fondo principal de la pagina
  'primary-dark': '#F5F5F5',       // Fondo alternativo para secciones
  
  // Colores de acento (botones, enlaces, elementos destacados)
  accent: '#1a2aeb',               // Color principal de acento (azul vibrante)
  'accent-dark': '#0f1da8',        // Version mas oscura del acento (hover, estados activos)
  'accent-light': '#3d4ef0',       // Version mas clara del acento (fondos suaves)
  
  // Colores de texto
  foreground: '#0a0a0a',           // Texto principal (casi negro)
  'foreground-light': '#333333',   // Texto secundario (gris oscuro)
  muted: '#666666',                // Texto deshabilitado o menos importante
  
  // Header/Navbar (fondo, texto, bordes)
  'header-bg': '#FFFFFF',          // Fondo del header
  'header-text': '#0a0a0a',        // Texto del header
  'header-border': '#E5E7EB',      // Borde inferior del header
  
  // Hero "portfolio" text layers (5 capas de profundidad)
  'hero-layer-1': '#E5F0FF',       // Capa mas atras (muy desvanecida)
  'hero-layer-2': '#B3D4FF',       // Capa trasera media
  'hero-layer-3': '#6BA3FF',       // Capa media
  'hero-layer-4': '#3D7FFF',       // Capa cercana al frente
  'hero-layer-5': '#0022FF',       // Capa frontal principal (mas nitida)
  'hero-year': '#FFFFFF',          // Color del año "2026"
  
  // Nombre del tema (para referencia)
  name: 'Clasico Profesional'
};

export default classicTheme;
