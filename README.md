# Personal Portfolio

> **Proyecto Educativo para Curso de Git & GitHub**
> Portafolio profesional construido con React y Vite. Diseñado para que los alumnos practiquen Git/GitHub personalizándolo con su propia información.

---

## Tabla de contenidos

- [Requisitos previos](#requisitos-previos)
- [Paso 1: Fork y clone](#paso-1-fork-y-clone)
- [Paso 2: Instalar y correr localmente](#paso-2-instalar-y-correr-localmente)
- [Paso 3: Personalizar tu portafolio](#paso-3-personalizar-tu-portafolio)
  - [Información personal y textos](#información-personal-y-textos)
  - [Imágenes y fotos](#imágenes-y-fotos)
  - [Proyectos](#proyectos)
  - [Habilidades](#habilidades)
  - [Certificados](#certificados)
  - [Experiencias](#experiencias)
  - [Tema de colores](#tema-de-colores)
- [Paso 4: Guardar cambios con Git](#paso-4-guardar-cambios-con-git)
- [Paso 5: Publicar en GitHub Pages](#paso-5-publicar-en-github-pages)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Solución de problemas](#solución-de-problemas)

---

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- Un editor de código (se recomienda [VS Code](https://code.visualstudio.com/))

---

## Paso 1: Fork y clone

1. Haz clic en **Fork** en la esquina superior derecha de este repositorio
2. Clona **tu fork** en tu computadora:

```bash
git clone https://github.com/TU-USUARIO/Personal-Portfolio.git
cd Personal-Portfolio
```

---

## Paso 2: Instalar y correr localmente

```bash
npm install
npm run dev
```

Abre tu navegador en `http://localhost:5000` para ver el portafolio.

---

## Paso 3: Personalizar tu portafolio

Solo necesitas editar **2 archivos** para personalizar todo:

| Archivo | Que contiene |
|---|---|
| `src/i18n/translations.js` | Nombre, descripción, contacto, redes sociales, textos |
| `src/data/config.js` | Nombres de archivos de todas las imágenes |

Para agregar proyectos, certificados y experiencias, edita también sus archivos de datos respectivos (ver secciones abajo).

---

### Información personal y textos

**Archivo:** `src/i18n/translations.js`

Aquí cambias todo el texto del portafolio. El archivo tiene dos secciones: `es` (español) y `en` (inglés). Busca y edita los campos con tu información:

```js
name: "Tu Nombre Completo",
role: "Tu Título Profesional",
email: "tu@email.com",
github: "https://github.com/tu-usuario",
linkedin: "https://linkedin.com/in/tu-perfil",
```

---

### Imágenes y fotos

**Archivo:** `src/data/config.js`

Coloca tus imágenes en la carpeta `public/images/` y actualiza los nombres en este archivo.

**Foto de perfil:**
```js
export const PROFILE_PHOTO = 'tu-foto.png'; // nombre de tu imagen en public/images/
```

**Iconos de habilidades:**
```js
export const SKILLS_ICONS = {
  react: 'react.png',       // cambia por el nombre de tu icono
  nodejs: 'nodeJS.png',
  // ...
};
```

**Descarga iconos gratis en:** [icons8.com](https://icons8.com) o [flaticon.com](https://www.flaticon.com)

---

### Proyectos

**Archivo:** `src/data/projects.js`

Cada proyecto sigue esta estructura. Copia el bloque de ejemplo al final del archivo y edita los valores:

```js
{
  id: "nombre-proyecto",          // identificador unico (sin espacios)
  title: {
    es: "Nombre del Proyecto",
    en: "Project Name",
  },
  subtitle: {
    es: "Descripcion breve",
    en: "Short description",
  },
  overview: {
    es: "Descripcion completa del proyecto...",
    en: "Full project description...",
  },
  technologies: ["React", "Node.js", "PostgreSQL"],
  links: {
    github: "https://github.com/tu-usuario/tu-repo",
  },
  // Las imagenes se configuran en src/data/config.js -> PROJECT_IMAGES
}
```

Agrega las imagenes del proyecto en `src/data/config.js`:

```js
export const PROJECT_IMAGES = {
  'mi-proyecto': {
    hero:    'mi-proyecto-principal.png',
    gallery: ['mi-proyecto-1.png', 'mi-proyecto-2.png'],
  },
};
```

---

### Habilidades

**Archivo:** `src/data/skillsData.js`

Modifica las listas de tecnologías. Cada item tiene un nombre y un icono:

```js
{ name: 'React', icon: `/images/${SKILLS_ICONS.react}` },
```

Para agregar una nueva tecnología:
1. Agrega el icono en `public/images/`
2. Registra el nombre del archivo en `src/data/config.js` dentro de `SKILLS_ICONS`
3. Agrega el item en `src/data/skillsData.js`

---

### Certificados

**Archivo:** `src/data/certificatesData.js`

```js
{
  id: 'mi-certificado',
  title: {
    es: 'Nombre del Certificado',
    en: 'Certificate Name',
  },
  issuer: {
    es: 'Institución',
    en: 'Institution',
  },
  date: {
    es: 'Enero 2025',
    en: 'January 2025',
  },
  // La imagen se configura en src/data/config.js -> CERTIFICATE_IMAGES
}
```

Registra la imagen en `src/data/config.js`:

```js
export const CERTIFICATE_IMAGES = {
  miCertificado: 'mi-certificado.png',
};
```

---

### Experiencias

**Archivo:** `src/data/experiencesData.js`

Agrega eventos, conferencias, hackathones, viajes, etc. Estructura básica:

```js
{
  id: 'mi-experiencia-2025',
  title: { es: 'Nombre del Evento', en: 'Event Name' },
  date:  { es: 'Enero 2025',       en: 'January 2025' },
  location: { es: 'Ciudad, País',  en: 'City, Country' },
  description: {
    es: 'Descripción breve del evento...',
    en: 'Brief event description...',
  },
  category: 'conference', // travel | hackathon | conference | workshop | award
  // Las imagenes se configuran en src/data/config.js -> EXPERIENCE_IMAGES
}
```

Registra las imágenes en `src/data/config.js`:

```js
export const EXPERIENCE_IMAGES = {
  'mi-experiencia-2025': {
    imageUrl: 'experiences/mi-experiencia/portada.jpeg',
    hero:     'experiences/mi-experiencia/principal.jpeg',
    gallery: [
      'experiences/mi-experiencia/1.jpeg',
      'experiences/mi-experiencia/2.jpeg',
    ],
  },
};
```

Coloca las fotos en `public/images/experiences/mi-experiencia/`.

---

### Tema de colores

**Archivo:** `src/styles/themes/index.js`

El portafolio incluye 8 temas de colores prediseñados. Para cambiar el tema:

```js
// Cambia esta línea por el tema que prefieras:
export const activeTheme = classicTheme;        // Clasico Profesional (default)
// export const activeTheme = darkElegantTheme; // Oscuro Elegante
// export const activeTheme = retroSolarTheme;  // Retro Solar
// export const activeTheme = techPastelTheme;  // Tech Pastel
// export const activeTheme = marinaBreezeTheme;// Brisa Marina
// export const activeTheme = greenForestTheme; // Bosque Verde
// export const activeTheme = warmSunsetTheme;  // Atardecer Calido
// export const activeTheme = midnightPurpleTheme; // Medianoche Purpura
```

---

## Paso 4: Guardar cambios con Git

Cada vez que hagas cambios, guárdalos con:

```bash
git add .
git commit -m "descripcion de lo que cambiaste"
git push origin main
```

---

## Paso 5: Publicar en GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings → Pages**
2. En **Source**, selecciona **GitHub Actions**
3. El sitio se publicará automáticamente en cada push a `main`
4. Tu portafolio estará disponible en: `https://TU-USUARIO.github.io/Personal-Portfolio/`

---

## Estructura del proyecto

```
Personal-Portfolio/
├── public/
│   └── images/              <- Todas tus imágenes van aqui
│       ├── foto.png         <- Foto de perfil
│       ├── react.png        <- Iconos de habilidades
│       ├── experiences/     <- Fotos de experiencias
│       └── ...
├── src/
│   ├── data/
│   │   ├── config.js        <- Nombres de archivos de imagenes
│   │   ├── projects.js      <- Datos de proyectos
│   │   ├── certificatesData.js  <- Datos de certificados
│   │   ├── skillsData.js    <- Habilidades tecnicas
│   │   └── experiencesData.js   <- Experiencias
│   ├── i18n/
│   │   └── translations.js  <- Textos e informacion personal
│   └── styles/
│       └── themes/
│           └── index.js     <- Tema de colores activo
└── README.md
```

---

## Solución de problemas

**El sitio se ve en blanco en GitHub Pages:**
- Ve a Settings → Pages y asegúrate de que Source sea "GitHub Actions"
- Espera 2-3 minutos después de hacer push para que se complete el deploy

**Las imágenes no se ven:**
- Verifica que el nombre del archivo en `config.js` coincida exactamente con el archivo en `public/images/` (incluyendo mayúsculas y extensión)

**Error al correr `npm install`:**
- Verifica que tienes Node.js 18 o superior: `node --version`
- Intenta: `npm cache clean --force` y luego `npm install`

**Los cambios no se ven en el sitio publicado:**
- Verifica que hiciste `git push origin main`
- Revisa la pestaña **Actions** en GitHub para ver si el deploy terminó correctamente

---

## Contacto del instructor

- GitHub: [dferram](https://github.com/dferram)
- Email: dferramm@gmail.com
