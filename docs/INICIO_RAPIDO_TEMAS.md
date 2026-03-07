# Inicio Rapido - Cambiar Temas en 2 Minutos

Esta es la guia mas rapida para cambiar el tema de tu portafolio. Perfecta para empezar.

## Paso 1: Abre el archivo de configuracion

Navega a: **`src/styles/themes/index.js`**

## Paso 2: Cambia esta linea

Busca la linea 43 (aproximadamente) que dice:

```javascript
export const activeTheme = classicTheme;
```

Cambiala por cualquiera de estas opciones:

```javascript
// Opcion 1: Tema oscuro con dorado
export const activeTheme = darkElegantTheme;

// Opcion 2: Tema vintage naranja
export const activeTheme = retroSolarTheme;

// Opcion 3: Tema suave lila
export const activeTheme = techPastelTheme;

// Opcion 4: Tema azul marino
export const activeTheme = oceanBreezeTheme;

// Opcion 5: Tema verde natural
export const activeTheme = forestGreenTheme;

// Opcion 6: Tema rosa energetico
export const activeTheme = sunsetWarmTheme;

// Opcion 7: Tema purpura tech
export const activeTheme = midnightPurpleTheme;
```

## Paso 3: Guarda y recarga

1. Guarda el archivo (Ctrl+S o Cmd+S)
2. Recarga tu navegador (F5 o Ctrl+R)
3. Listo

## Vista Previa de Temas

### Clasico Profesional (Default)
- Blanco y azul
- Formal y profesional
- Alta legibilidad

### Oscuro Elegante
- Negro con dorado
- Moderno y sofisticado
- Ideal para tech

### Retro Solar
- Crema y naranja
- Vintage y calido
- Perfecto para creativos

### Tech Pastel
- Azul claro y lila
- Suave y moderno
- Ideal para UX/UI

### Brisa Marina
- Azul aqua
- Fresco y profesional
- Transmite confianza

### Bosque Verde
- Verdes naturales
- Equilibrado y sostenible
- Ideal para proyectos ambientales

### Atardecer Calido
- Rosas y naranjas
- Energetico y llamativo
- Perfecto para marketing

### Medianoche Purpura
- Purpura oscuro
- Misterioso y tech
- Ideal para gaming/desarrollo

## Quieres crear tu propio tema?

1. Ve a `src/styles/themes/`
2. Copia el archivo `template.js`
3. Renombralo (ejemplo: `mi-tema.js`)
4. Edita los colores
5. Sigue las instrucciones en el archivo

## Necesitas mas ayuda?

- **Guia completa**: Lee `GUIA_TEMAS.md`
- **Ejemplos visuales**: Lee `EJEMPLOS_TEMAS.md`
- **Referencia rapida**: Lee `src/styles/themes/README.md`

## Practica con Git

```bash
# Crea una rama para tu cambio
git checkout -b cambiar-tema

# Edita el archivo index.js
# Guarda tus cambios
git add src/styles/themes/index.js
git commit -m "Cambiar tema a oscuro elegante"

# Sube tu rama
git push origin cambiar-tema
```

Ahora puedes crear un Pull Request y mostrar tu nuevo tema al profesor.
