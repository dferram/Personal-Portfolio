# Temas del Portafolio - Referencia Rapida

## Cambiar Tema (3 pasos)

1. Abre: `src/styles/themes/index.js`
2. Encuentra: `export const activeTheme = classicTheme;`
3. Cambia a: `export const activeTheme = [nombreDelTema];`

## Temas Disponibles

| Nombre del Tema | Codigo | Estilo |
|----------------|--------|--------|
| Clasico Profesional | `classicTheme` | Blanco y azul, formal |
| Oscuro Elegante | `darkElegantTheme` | Negro con dorado, moderno |
| Retro Solar | `retroSolarTheme` | Crema y naranja, vintage |
| Tech Pastel | `techPastelTheme` | Azul claro y lila, suave |
| Brisa Marina | `oceanBreezeTheme` | Azul aqua, fresco |
| Bosque Verde | `forestGreenTheme` | Verdes naturales |
| Atardecer Calido | `sunsetWarmTheme` | Rosas y naranjas, energetico |
| Medianoche Purpura | `midnightPurpleTheme` | Purpura oscuro, tech |

## Crear Tu Propio Tema

1. Copia cualquier archivo `.js` de esta carpeta
2. Renombralo (ejemplo: `mi-tema.js`)
3. Edita los colores dentro del archivo
4. Importalo en `index.js`
5. Agregalo a `allThemes` y exportalo
6. Activalo cambiando `activeTheme`

## Estructura de un Tema

Cada tema debe tener exactamente estas propiedades:

```javascript
export const miTema = {
  primary: '#FFFFFF',           // Fondo principal
  'primary-dark': '#F5F5F5',    // Fondo alternativo
  accent: '#1a2aeb',            // Color de acento
  'accent-dark': '#0f1da8',     // Acento oscuro
  'accent-light': '#3d4ef0',    // Acento claro
  foreground: '#0a0a0a',        // Texto principal
  'foreground-light': '#333333',// Texto secundario
  muted: '#666666',             // Texto deshabilitado
  name: 'Mi Tema'               // Nombre descriptivo
};
```

## Consejos Rapidos

- Usa [coolors.co](https://coolors.co) para generar paletas
- Verifica contraste en [WebAIM](https://webaim.org/resources/contrastchecker/)
- Mantener los nombres de las variables es crucial
- Guarda y recarga el navegador para ver cambios

## Ayuda

Para mas detalles, lee la guia completa en: `GUIA_TEMAS.md` (en la raiz del proyecto)
