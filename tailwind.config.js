/* 
 * CONFIGURACION DE TAILWIND CSS
 * 
 * Este archivo importa el tema activo desde src/styles/themes/index.js
 * 
 * IMPORTANTE: No modifiques este archivo directamente para cambiar colores.
 * En su lugar, ve a src/styles/themes/index.js y cambia el tema activo ahi.
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
       * COLORES DEL TEMA
       * 
       * Estos colores se cargan automaticamente del tema activo.
       * Para cambiar los colores, modifica src/styles/themes/index.js
       */
      colors: {
        primary: activeTheme.primary,
        'primary-dark': activeTheme['primary-dark'],
        accent: activeTheme.accent,
        'accent-dark': activeTheme['accent-dark'],
        'accent-light': activeTheme['accent-light'],
        muted: activeTheme.muted,
        foreground: activeTheme.foreground,
        'foreground-light': activeTheme['foreground-light'],
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
