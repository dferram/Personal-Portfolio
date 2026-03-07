/* 
 * PLANTILLA PARA CREAR TU PROPIO TEMA
 * 
 * INSTRUCCIONES:
 * 1. Copia este archivo y renombralo (ejemplo: mi-tema-azul.js)
 * 2. Cambia el nombre de la constante (ejemplo: miTemaAzul)
 * 3. Modifica los valores de color con tus colores preferidos
 * 4. Actualiza el nombre descriptivo del tema
 * 5. Importa y registra tu tema en index.js
 * 
 * IMPORTANTE: No cambies los nombres de las propiedades (primary, accent, etc.)
 * Solo cambia los valores de color.
 */

export const miTemaPersonalizado = {
  /* 
   * FONDOS PRINCIPALES
   * 
   * Estos colores se usan para el fondo de la pagina y secciones.
   * Consejo: Elige colores claros para temas claros, oscuros para temas oscuros.
   */
  primary: '#FFFFFF',              // Fondo principal de toda la pagina
  'primary-dark': '#F5F5F5',       // Fondo alternativo para crear contraste entre secciones
  
  /* 
   * COLORES DE ACENTO
   * 
   * Estos colores se usan para elementos que quieres destacar:
   * botones, enlaces, iconos importantes, badges, etc.
   * 
   * Consejo: Elige un color vibrante que contraste bien con tus fondos.
   */
  accent: '#1a2aeb',               // Color principal para botones y elementos destacados
  'accent-dark': '#0f1da8',        // Version mas oscura, se usa en hover (cuando pasas el mouse)
  'accent-light': '#3d4ef0',       // Version mas clara, se usa para fondos suaves de elementos
  
  /* 
   * COLORES DE TEXTO
   * 
   * Estos colores se usan para todo el texto del sitio.
   * 
   * Consejo: Asegura que haya buen contraste con los fondos.
   * Texto oscuro sobre fondo claro, o texto claro sobre fondo oscuro.
   */
  foreground: '#0a0a0a',           // Texto principal (titulos, parrafos importantes)
  'foreground-light': '#333333',   // Texto secundario (subtitulos, descripciones)
  muted: '#666666',                // Texto deshabilitado o menos importante (notas al pie, etc.)
  
  /* 
   * NOMBRE DEL TEMA
   * 
   * Dale un nombre descriptivo a tu tema.
   * Este nombre aparecera en la documentacion y podria usarse en el futuro
   * para un selector de temas.
   */
  name: 'Mi Tema Personalizado'
};

/* 
 * EXPORTACION
 * 
 * No modifiques esta linea. Es necesaria para que el tema funcione.
 */
export default miTemaPersonalizado;

/* 
 * EJEMPLOS DE PALETAS POPULARES
 * 
 * Aqui hay algunas combinaciones de colores que funcionan bien.
 * Puedes copiar estos valores y ajustarlos a tu gusto.
 * 
 * PALETA AZUL CIELO:
 *   primary: '#f0f9ff'
 *   primary-dark: '#e0f2fe'
 *   accent: '#0284c7'
 *   accent-dark: '#0369a1'
 *   accent-light: '#38bdf8'
 *   foreground: '#0c4a6e'
 *   foreground-light: '#075985'
 *   muted: '#64748b'
 * 
 * PALETA VERDE MENTA:
 *   primary: '#f0fdf4'
 *   primary-dark: '#dcfce7'
 *   accent: '#16a34a'
 *   accent-dark: '#15803d'
 *   accent-light: '#4ade80'
 *   foreground: '#14532d'
 *   foreground-light: '#166534'
 *   muted: '#6b7280'
 * 
 * PALETA NARANJA ENERGIA:
 *   primary: '#fff7ed'
 *   primary-dark: '#ffedd5'
 *   accent: '#ea580c'
 *   accent-dark: '#c2410c'
 *   accent-light: '#fb923c'
 *   foreground: '#431407'
 *   foreground-light: '#7c2d12'
 *   muted: '#78716c'
 * 
 * PALETA GRIS MINIMALISTA:
 *   primary: '#ffffff'
 *   primary-dark: '#f9fafb'
 *   accent: '#374151'
 *   accent-dark: '#1f2937'
 *   accent-light: '#6b7280'
 *   foreground: '#111827'
 *   foreground-light: '#374151'
 *   muted: '#9ca3af'
 * 
 * PALETA MORADO TECH:
 *   primary: '#faf5ff'
 *   primary-dark: '#f3e8ff'
 *   accent: '#9333ea'
 *   accent-dark: '#7e22ce'
 *   accent-light: '#a855f7'
 *   foreground: '#3b0764'
 *   foreground-light: '#581c87'
 *   muted: '#71717a'
 */
