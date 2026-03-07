/* 
 * CONFIGURACION DE TAILWIND CSS
 * 
 * Este archivo ahora usa CSS variables para permitir cambios de tema dinamicos.
 * 
 * IMPORTANTE: Los colores ahora se gestionan a traves del ThemeContext.
 * Para cambiar el tema visualmente, ve a la URL /estilos en tu navegador.
 * 
 * COMO FUNCIONA:
 * - Los colores se definen como variables CSS (--color-primary, etc.)
 * - El ThemeContext aplica los valores de cada tema a estas variables
 * - Tailwind lee estas variables y las aplica a las clases CSS
 * - Los cambios son instantaneos y se guardan en localStorage
 * 
 * Si quieres ajustar sombras u otras propiedades de diseno, puedes hacerlo
 * en la seccion "extend" mas abajo, pero ten cuidado de no romper el diseno.
 */

const { activeTheme } = require('./src/styles/themes/index.js');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      /* 
       * COLORES DEL TEMA (DINAMICOS)
       * 
       * Estos colores usan CSS variables que se actualizan en tiempo real.
       * El ThemeContext (src/context/ThemeContext.jsx) gestiona estos valores.
       * 
       * Para cambiar el tema, usa el panel en /estilos o el hook useTheme()
       * 
       * COMO AGREGAR NUEVOS ELEMENTOS TEMATICOS:
       * 1. Agrega el color en cada archivo de tema (src/styles/themes/*.js)
       * 2. Aplica la variable CSS en ThemeContext.jsx
       * 3. Agrega la variable aqui en tailwind.config.js
       * 4. Usa la clase en tus componentes (ej: bg-header-bg, text-header-text)
       */
      colors: {
        // Colores base
        primary: 'var(--color-primary, ' + activeTheme.primary + ')',
        'primary-dark': 'var(--color-primary-dark, ' + activeTheme['primary-dark'] + ')',
        accent: 'var(--color-accent, ' + activeTheme.accent + ')',
        'accent-dark': 'var(--color-accent-dark, ' + activeTheme['accent-dark'] + ')',
        'accent-light': 'var(--color-accent-light, ' + activeTheme['accent-light'] + ')',
        muted: 'var(--color-muted, ' + activeTheme.muted + ')',
        foreground: 'var(--color-foreground, ' + activeTheme.foreground + ')',
        'foreground-light': 'var(--color-foreground-light, ' + activeTheme['foreground-light'] + ')',
        
        // Header/Navbar colors (fondo, texto, bordes)
        'header-bg': 'var(--color-header-bg, ' + activeTheme['header-bg'] + ')',
        'header-text': 'var(--color-header-text, ' + activeTheme['header-text'] + ')',
        'header-border': 'var(--color-header-border, ' + activeTheme['header-border'] + ')',
        
        // Hero "portfolio" text layers (5 capas de profundidad)
        'hero-layer-1': 'var(--color-hero-layer-1, ' + activeTheme['hero-layer-1'] + ')',
        'hero-layer-2': 'var(--color-hero-layer-2, ' + activeTheme['hero-layer-2'] + ')',
        'hero-layer-3': 'var(--color-hero-layer-3, ' + activeTheme['hero-layer-3'] + ')',
        'hero-layer-4': 'var(--color-hero-layer-4, ' + activeTheme['hero-layer-4'] + ')',
        'hero-layer-5': 'var(--color-hero-layer-5, ' + activeTheme['hero-layer-5'] + ')',
        'hero-year': 'var(--color-hero-year, ' + activeTheme['hero-year'] + ')',
      },
      /* 
       * SOMBRAS
       * 
       * Estas sombras funcionan bien con cualquier tema.
       * Puedes ajustar la opacidad si lo necesitas.
       */
      boxShadow: {
        clean: '0 2px 8px rgba(0, 0, 0, 0.08)',
        'clean-lg': '0 4px 16px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
