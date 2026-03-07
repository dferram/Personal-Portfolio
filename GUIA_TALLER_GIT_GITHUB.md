# Guía del Taller: Fork y Personalización de Portafolio

¡Bienvenido al taller de Git y GitHub! En esta guía aprenderás a hacer fork de un repositorio, clonarlo a tu máquina, personalizarlo con tu información y, si lo deseas, desplegarlo en internet para que todo el mundo pueda verlo.

No te preocupes si es tu primera vez usando Git o GitHub. Esta guía está diseñada para que puedas seguirla paso a paso, incluso si nunca has programado antes. La práctica hace al maestro, así que ¡manos a la obra!

---

## Tabla de Contenidos

1. [¿Qué es un Fork y por qué lo usamos?](#1-qué-es-un-fork-y-por-qué-lo-usamos)
2. [Preparación: Herramientas necesarias](#2-preparación-herramientas-necesarias)
3. [Paso 1: Hacer Fork del Repositorio](#3-paso-1-hacer-fork-del-repositorio)
4. [Paso 2: Clonar tu Fork a tu Computadora](#4-paso-2-clonar-tu-fork-a-tu-computadora)
5. [Paso 3: Instalar Dependencias y Correr el Proyecto](#5-paso-3-instalar-dependencias-y-correr-el-proyecto)
6. [Paso 4: Personalizar tu Portafolio](#6-paso-4-personalizar-tu-portafolio)
7. [Paso 5: Guardar tus Cambios (Commits)](#7-paso-5-guardar-tus-cambios-commits)
8. [Paso 6: Subir tus Cambios a GitHub](#8-paso-6-subir-tus-cambios-a-github)
9. [Paso 7 (Opcional): Desplegar tu Portafolio](#9-paso-7-opcional-desplegar-tu-portafolio)
10. [Buenas Prácticas y Consejos](#10-buenas-prácticas-y-consejos)
11. [Preguntas Frecuentes (FAQ)](#11-preguntas-frecuentes-faq)
12. [Solución de Problemas Comunes](#12-solución-de-problemas-comunes)

---

## 1. ¿Qué es un Fork y por qué lo usamos?

### ¿Qué es un Fork?

Un **fork** es como hacer una **copia personal** de un proyecto que alguien más creó en GitHub. Imagina que encuentras una receta de cocina que te gusta en internet: hacer un fork sería como copiar esa receta a tu propio cuaderno para poder modificarla a tu gusto sin cambiar la receta original.

### ¿Para qué sirve?

- **Experimentar libremente**: Puedes hacer todos los cambios que quieras sin miedo a "romper" el proyecto original.
- **Aprender**: Es una excelente forma de estudiar código de otras personas y adaptarlo a tus necesidades.
- **Contribuir**: Si mejoras algo, puedes proponer tus cambios al autor original mediante un "Pull Request" (esto lo veremos más adelante si hay tiempo).

### ¿Por qué lo hacemos en este ejercicio?

En este taller, vas a hacer fork del repositorio de mi portafolio personal (`dferram/Personal-Portfolio`) para que:

1. **Tengas tu propia copia** donde puedas trabajar sin restricciones.
2. **Aprendas Git y GitHub** de forma práctica, haciendo cambios reales.
3. **Crees tu propio portafolio** personalizado con tu información, proyectos y estilo.

**Ejemplo práctico**: Al hacer un fork, tienes tu propia copia del proyecto donde puedes trabajar libremente sin afectar el original. Es como tener tu propio lienzo en blanco basado en una plantilla profesional.

---

## 2. Preparación: Herramientas necesarias

Antes de empezar, asegúrate de tener instaladas las siguientes herramientas en tu computadora:

### Requisitos básicos:

1. **Git** (para control de versiones)
   - **Windows**: Descarga desde [git-scm.com](https://git-scm.com/)
   - **Mac**: Viene preinstalado o usa `brew install git`
   - **Linux**: `sudo apt-get install git` (Ubuntu/Debian) o `sudo yum install git` (Fedora)
   - **Verificar instalación**: Abre tu terminal y escribe `git --version`

2. **Node.js** (versión 20.19.0 o superior)
   - Descarga desde [nodejs.org](https://nodejs.org/)
   - **Recomendación**: Instala la versión LTS (Long Term Support)
   - **Verificar instalación**: En la terminal escribe `node --version` y `npm --version`

3. **Un editor de código** (IDE)
   - **Recomendado**: [Visual Studio Code](https://code.visualstudio.com/) (gratis y muy popular)
   - **Alternativas**: WebStorm, Sublime Text, Atom

4. **Una cuenta en GitHub**
   - Si no tienes una, créala gratis en [github.com](https://github.com/)
   - **Tip**: Usa un nombre de usuario profesional, ya que lo usarás en tu carrera

### Organización recomendada:

Antes de clonar el proyecto, crea una carpeta donde guardarás todos tus proyectos de programación. Por ejemplo:

- **Windows**: `C:\Users\TuNombre\Proyectos\`
- **Mac/Linux**: `~/Proyectos/` o `~/Documents/Proyectos/`

Esto te ayudará a mantener todo organizado y fácil de encontrar.

---

## 3. Paso 1: Hacer Fork del Repositorio

Ahora sí, ¡vamos a hacer tu primer fork!

### Instrucciones paso a paso:

1. **Abre tu navegador** y ve a la página del repositorio original:
   ```
   https://github.com/ferramdr/Personal-Portfolio-
   ```

2. **Busca el botón "Fork"** en la esquina superior derecha de la página (al lado de "Star" y "Watch").

3. **Haz clic en "Fork"**. GitHub te mostrará una pantalla preguntándote dónde quieres crear el fork.

4. **Selecciona tu cuenta** como destino del fork (debería estar seleccionada por defecto).

5. **Opcional**: Puedes cambiar el nombre del repositorio si quieres. Por ejemplo:
   - `mi-portafolio-personal`
   - `portfolio-[tu-nombre]`
   - O dejarlo como está: `Personal-Portfolio-`

6. **Haz clic en "Create fork"** y espera unos segundos.

### ✅ ¿Cómo saber si funcionó?

Después de hacer el fork, deberías ver:
- La URL cambió a: `https://github.com/TU-USUARIO/Personal-Portfolio-`
- Debajo del nombre del repositorio dice: "forked from ferramdr/Personal-Portfolio-"

**¡Felicidades!** Ya tienes tu propia copia del proyecto en GitHub.

---

## 4. Paso 2: Clonar tu Fork a tu Computadora

Ahora que tienes el fork en GitHub, necesitas **descargarlo a tu computadora** para poder trabajar en él. A esto le llamamos "clonar".

### Instrucciones paso a paso:

1. **En la página de tu fork** (en GitHub), busca el botón verde que dice **"Code"**.

2. **Haz clic en "Code"** y verás varias opciones. Asegúrate de estar en la pestaña **"HTTPS"**.

3. **Copia la URL** que aparece. Debería verse algo así:
   ```
   https://github.com/TU-USUARIO/Personal-Portfolio-.git
   ```

4. **Abre tu terminal o línea de comandos**:
   - **Windows**: Busca "CMD" o "PowerShell" en el menú inicio
   - **Mac**: Busca "Terminal" en Spotlight (Cmd + Espacio)
   - **Linux**: Ctrl + Alt + T

5. **Navega a la carpeta** donde quieres guardar el proyecto:
   ```bash
   cd C:\Users\TuNombre\Proyectos
   # O en Mac/Linux:
   cd ~/Proyectos
   ```

6. **Clona el repositorio** con el siguiente comando:
   ```bash
   git clone https://github.com/TU-USUARIO/Personal-Portfolio-.git
   ```
   ⚠️ **Importante**: Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

7. **Espera a que termine** la descarga. Verás mensajes en la terminal indicando el progreso.

8. **Entra a la carpeta del proyecto**:
   ```bash
   cd Personal-Portfolio-
   ```

### ✅ ¿Cómo saber si funcionó?

Escribe en la terminal:
```bash
ls
# O en Windows:
dir
```

Deberías ver archivos como: `package.json`, `README.md`, `vite.config.js`, carpetas como `src`, `public`, etc.

---

## 5. Paso 3: Instalar Dependencias y Correr el Proyecto

Antes de poder ver el portafolio en tu navegador, necesitas instalar las **dependencias** (librerías y herramientas que el proyecto necesita para funcionar).

### ¿Qué son las dependencias?

Son como los ingredientes de una receta. El proyecto necesita ciertas librerías de JavaScript (React, Vite, etc.) para funcionar correctamente. Estas se listan en el archivo `package.json`.

### Instrucciones paso a paso:

1. **Asegúrate de estar en la carpeta del proyecto**:
   ```bash
   pwd
   # Deberías ver algo como: /Users/TuNombre/Proyectos/Personal-Portfolio-
   ```

2. **Instala las dependencias** con npm:
   ```bash
   npm install
   ```
   
   **Esto puede tardar unos minutos** la primera vez. Verás muchos mensajes en la terminal mientras se descargan las librerías.

   ⚠️ **Si ves advertencias (warnings)**, no te preocupes, es normal. Solo preocúpate si ves errores (errors) en rojo.

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** y ve a la dirección que aparece en la terminal. Normalmente es:
   ```
   http://localhost:5000
   ```

### ✅ ¿Cómo saber si funcionó?

Deberías ver el portafolio funcionando en tu navegador, con el nombre "Fernando Ramírez" y toda la información del portafolio original.

**¡Excelente!** Ya tienes el proyecto corriendo localmente. Ahora viene la parte divertida: personalizarlo.

### Para detener el servidor:

Cuando quieras dejar de trabajar, presiona `Ctrl + C` en la terminal donde está corriendo el servidor.

---

## 6. Paso 4: Personalizar tu Portafolio

Ahora que tienes el proyecto funcionando, es momento de hacerlo tuyo. Vamos a modificar diferentes archivos para que el portafolio muestre **tu información** en lugar de la mía.

### Estructura del Proyecto (lo que necesitas saber)

```
Personal-Portfolio-/
├── src/                          # Código fuente (aquí harás la mayoría de cambios)
│   ├── components/               # Componentes reutilizables
│   │   ├── Hero.jsx             # Sección de inicio/presentación
│   │   ├── About.jsx            # Sección "Sobre mí"
│   │   ├── Skills.jsx           # Sección de habilidades
│   │   ├── Projects.jsx         # Sección de proyectos
│   │   └── Contact.jsx          # Sección de contacto
│   ├── data/                     # ⭐ ARCHIVOS DE DATOS (aquí personalizarás)
│   │   ├── projects.js          # Tus proyectos
│   │   ├── skillsData.js        # Tus habilidades técnicas
│   │   ├── experiencesData.js   # Tus experiencias
│   │   └── certificatesData.js  # Tus certificados
│   ├── i18n/                     # Sistema de traducción (español/inglés)
│   │   └── translations.js      # ⭐ Textos del portafolio
│   └── pages/                    # Páginas del sitio
├── public/                       # Archivos públicos
│   └── images/                   # ⭐ Tus imágenes
├── package.json                  # Configuración del proyecto
└── vite.config.js               # Configuración de Vite
```

### Archivos que SÍ debes modificar:

#### A. **Información personal y textos** → `src/i18n/translations.js`

Este archivo contiene todos los textos que aparecen en el portafolio. Está organizado en español (es) e inglés (en).

**Qué modificar:**
- Tu nombre
- Tu título profesional
- Tu descripción personal
- Enlaces a tus redes sociales

**Ejemplo de cambios:**
```javascript
// Busca la sección 'hero' y modifica:
hero: {
  title: 'Tu Nombre Completo',  // Cambia "Fernando Ramírez" por tu nombre
  subtitle: 'Tu Título | Tu Especialidad',  // Ej: "Desarrollador Web | Estudiante"
  description: 'Tu descripción personal aquí...',
  cta: 'Ver Proyectos',
},
```

#### B. **Tus proyectos** → `src/data/projects.js`

Aquí agregarás tus propios proyectos. El archivo ya tiene ejemplos completos que puedes usar como plantilla.

**Qué modificar:**
- Elimina o modifica los proyectos de ejemplo
- Agrega tus propios proyectos siguiendo la misma estructura

**Ejemplo básico:**
```javascript
{
  id: "mi-proyecto-1",  // Identificador único (usa kebab-case)
  title: {
    es: "Mi Primer Proyecto",
    en: "My First Project",
  },
  subtitle: {
    es: "Aplicación Web",
    en: "Web Application",
  },
  overview: {
    es: "Descripción de qué hace tu proyecto...",
    en: "Description of what your project does...",
  },
  technologies: ["React", "Node.js", "CSS"],  // Tecnologías que usaste
  links: {
    github: "https://github.com/tu-usuario/tu-proyecto",
  },
  images: {
    hero: "/images/mi-proyecto.png",  // Imagen principal
  },
}
```

**💡 Tip**: Si no tienes proyectos aún, puedes agregar proyectos escolares, ejercicios de práctica o incluso ideas de proyectos futuros.

#### C. **Tus habilidades** → `src/data/skillsData.js`

Aquí defines las tecnologías y herramientas que conoces.

**Qué modificar:**
```javascript
export const SKILLS_DATA = [
  {
    id: 'web',
    title: 'Desarrollo Web',
    items: [
      { name: 'HTML', icon: '/images/html.png' },
      { name: 'CSS', icon: '/images/css.png' },
      { name: 'JavaScript', icon: '/images/JavaScript.png' },
      // Agrega o quita según tus habilidades
    ],
  },
  // Puedes agregar más categorías si quieres
];
```

**💡 Tip sobre los iconos**: Si no tienes iconos para todas las tecnologías, puedes:
- Descargarlos gratis de [Icons8](https://icons8.com/) o [Flaticon](https://www.flaticon.com/)
- Usar el mismo ícono genérico para todas
- Dejar solo las tecnologías para las que tienes iconos

#### D. **Tus experiencias** → `src/data/experiencesData.js`

Este archivo tiene comentarios muy detallados que te guían paso a paso. Aquí agregas conferencias, talleres, viajes, hackathons, etc.

**El archivo ya tiene instrucciones completas**, solo sigue los comentarios y copia el ejemplo al final.

#### E. **Tus certificados** → `src/data/certificatesData.js`

Agrega los certificados o diplomas que hayas obtenido.

**Estructura básica:**
```javascript
{
  id: 'mi-certificado',
  title: {
    es: 'Nombre del Certificado',
    en: 'Certificate Name',
  },
  issuer: {
    es: 'Institución que lo otorgó',
    en: 'Issuing Institution',
  },
  date: {
    es: 'Mes Año',
    en: 'Month Year',
  },
  imageUrl: '/images/mi-certificado.png',  // Imagen del certificado
}
```

#### F. **Tus imágenes** → Carpeta `public/images/`

Aquí colocas todas las imágenes que usarás en tu portafolio:
- Foto de perfil
- Capturas de tus proyectos
- Imágenes de certificados
- Fotos de experiencias

**Recomendaciones:**
- **Formato**: JPG o PNG (WebP si sabes optimizar)
- **Tamaño**: No más de 2MB por imagen
- **Dimensiones**: Para proyectos, mínimo 1200px de ancho
- **Nombres**: Usa nombres descriptivos sin espacios (ej: `proyecto-web-1.jpg`)

**💡 Tip**: Usa herramientas como [TinyPNG](https://tinypng.com/) para comprimir tus imágenes antes de agregarlas.

### ⚠️ Archivos que NO debes modificar (si eres principiante):

- `package.json` - Configuración de dependencias
- `vite.config.js` - Configuración del build
- `tailwind.config.js` - Configuración de estilos
- Archivos en `src/components/` - Lógica de los componentes
- Archivos en `src/pages/` - Estructura de las páginas

**¿Por qué?** Estos archivos contienen la configuración y lógica del proyecto. Modificarlos sin experiencia puede hacer que el sitio deje de funcionar.

**Si tienes experiencia** y quieres cambiar colores, animaciones o estructura, adelante. Pero si es tu primera vez, mejor enfócate en personalizar el contenido primero.

### Ver tus cambios en tiempo real:

Mientras el servidor de desarrollo esté corriendo (`npm run dev`), cada vez que guardes un archivo, **el navegador se actualizará automáticamente** mostrando tus cambios.

Si algo se rompe, no te preocupes. Revisa la consola del navegador (F12) y la terminal para ver los errores. La mayoría de las veces es un error de sintaxis (una coma faltante, una llave sin cerrar, etc.).

---

## 7. Paso 5: Guardar tus Cambios (Commits)

Una vez que hayas personalizado tu portafolio, es momento de **guardar tus cambios** usando Git. Esto se llama hacer un "commit".

### ¿Qué es un commit?

Un commit es como tomar una **fotografía** del estado actual de tu proyecto. Es un punto de guardado al que puedes volver si algo sale mal.

### Instrucciones paso a paso:

1. **Verifica qué archivos modificaste**:
   ```bash
   git status
   ```
   
   Verás una lista de archivos en rojo (modificados pero no guardados).

2. **Agrega los archivos al "staging area"** (área de preparación):
   ```bash
   git add .
   ```
   
   El punto (`.`) significa "todos los archivos modificados". Si solo quieres agregar archivos específicos:
   ```bash
   git add src/i18n/translations.js
   git add src/data/projects.js
   ```

3. **Verifica nuevamente**:
   ```bash
   git status
   ```
   
   Ahora los archivos deberían aparecer en verde (listos para el commit).

4. **Haz el commit con un mensaje descriptivo**:
   ```bash
   git commit -m "Personalizar portafolio con mi información"
   ```

### Consejos para buenos mensajes de commit:

- **Sé descriptivo**: "Actualizar información personal" es mejor que "cambios"
- **Usa verbos en infinitivo**: "Agregar proyectos", "Modificar habilidades"
- **Sé específico**: "Agregar proyecto de aplicación web" vs "Agregar cosas"

**Ejemplos de buenos commits:**
```bash
git commit -m "Agregar información personal y redes sociales"
git commit -m "Actualizar lista de proyectos con mis trabajos"
git commit -m "Modificar habilidades técnicas"
git commit -m "Agregar imágenes de proyectos"
```

### ✅ ¿Cómo saber si funcionó?

Después del commit, si escribes `git status` deberías ver:
```
nothing to commit, working tree clean
```

Esto significa que todos tus cambios están guardados.

---

## 8. Paso 6: Subir tus Cambios a GitHub

Ahora que guardaste tus cambios localmente, es momento de **subirlos a GitHub** para que estén en la nube y puedas acceder a ellos desde cualquier lugar.

### Instrucciones paso a paso:

1. **Sube tus cambios al repositorio remoto**:
   ```bash
   git push origin main
   ```
   
   **Nota**: Si tu rama principal se llama `master` en lugar de `main`, usa:
   ```bash
   git push origin master
   ```

2. **Ingresa tus credenciales** si te las pide:
   - Usuario de GitHub
   - Contraseña o Personal Access Token

3. **Espera a que termine** la subida. Verás mensajes indicando el progreso.

### ✅ ¿Cómo saber si funcionó?

1. Ve a tu repositorio en GitHub: `https://github.com/TU-USUARIO/Personal-Portfolio-`
2. Deberías ver tus cambios reflejados
3. El mensaje de tu último commit debería aparecer en la página principal

**¡Felicidades!** Tus cambios ya están en GitHub.

---

## 9. Paso 7 (Opcional): Desplegar tu Portafolio

Si quieres que tu portafolio esté disponible en internet para que cualquiera pueda verlo, necesitas **desplegarlo** (deploy). Aquí te muestro las opciones más populares y fáciles.

### Opción 1: Vercel (Recomendado para principiantes)

**¿Por qué Vercel?**
- Gratis para proyectos personales
- Configuración automática
- Actualizaciones automáticas cuando haces push a GitHub
- Dominio gratis (tu-proyecto.vercel.app)

**Pasos:**

1. Ve a [vercel.com](https://vercel.com/) y crea una cuenta (puedes usar tu cuenta de GitHub).

2. Haz clic en **"Add New Project"** o **"Import Project"**.

3. Conecta tu cuenta de GitHub si aún no lo has hecho.

4. Selecciona tu repositorio `Personal-Portfolio-` de la lista.

5. Vercel detectará automáticamente que es un proyecto Vite y configurará todo por ti.

6. Haz clic en **"Deploy"** y espera unos minutos.

7. ¡Listo! Vercel te dará una URL como: `https://tu-portfolio.vercel.app`

**Actualizaciones automáticas**: Cada vez que hagas `git push` a GitHub, Vercel automáticamente desplegará la nueva versión. ¡Es increíble!

### Opción 2: Netlify

Muy similar a Vercel, también gratis y fácil de usar.

**Pasos:**

1. Ve a [netlify.com](https://www.netlify.com/) y crea una cuenta.

2. Haz clic en **"Add new site"** → **"Import an existing project"**.

3. Conecta con GitHub y selecciona tu repositorio.

4. Configuración:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

5. Haz clic en **"Deploy"** y espera.

6. Tu sitio estará en: `https://tu-portfolio.netlify.app`

### Opción 3: GitHub Pages

Gratis y directo desde GitHub, pero requiere un poco más de configuración.

**Pasos:**

1. En tu proyecto local, instala el paquete `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Abre `package.json` y agrega estos scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Abre `vite.config.js` y agrega la base:
   ```javascript
   export default defineConfig({
     base: '/Personal-Portfolio-/',  // Nombre de tu repositorio
     // ... resto de la configuración
   })
   ```

4. Despliega:
   ```bash
   npm run deploy
   ```

5. Ve a la configuración de tu repositorio en GitHub → **Settings** → **Pages**

6. En **Source**, selecciona la rama `gh-pages` y guarda.

7. Tu sitio estará en: `https://tu-usuario.github.io/Personal-Portfolio-/`

### Opción 4: Azure Static Web Apps

Si quieres usar Azure (útil si planeas trabajar con tecnologías Microsoft):

**Nota**: Este proyecto ya tiene un workflow de GitHub Actions configurado para Azure. Solo necesitas:

1. Crear una cuenta en [Azure](https://azure.microsoft.com/)
2. Crear un recurso "Static Web App"
3. Conectar con tu repositorio de GitHub
4. Azure configurará todo automáticamente

### Dominio personalizado (Opcional)

Si quieres un dominio como `www.tunombre.com` en lugar de `tunombre.vercel.app`:

1. Compra un dominio en [Namecheap](https://www.namecheap.com/), [GoDaddy](https://www.godaddy.com/), o [Google Domains](https://domains.google/)
2. En Vercel/Netlify, ve a la configuración de tu proyecto
3. Busca la sección "Domains" y sigue las instrucciones para conectar tu dominio

**Costo**: Los dominios .com cuestan alrededor de $10-15 USD al año.

---

## 10. Buenas Prácticas y Consejos

Ahora que sabes cómo personalizar y desplegar tu portafolio, aquí van algunos consejos para trabajar como un profesional:

### Usa ramas para experimentar

Las ramas en Git son como universos paralelos donde puedes experimentar sin afectar tu código principal.

**Ejemplo:**
```bash
# Crear una nueva rama para agregar una nueva sección
git checkout -b nueva-seccion-blog

# Hacer cambios, commits, etc.
git add .
git commit -m "Agregar sección de blog"

# Si te gusta el resultado, fusiona con main
git checkout main
git merge nueva-seccion-blog

# Si no te gustó, simplemente borra la rama
git branch -d nueva-seccion-blog
```

**¿Cuándo usar ramas?**
- Cuando quieras probar algo nuevo sin romper lo que ya funciona
- Para trabajar en múltiples características al mismo tiempo
- Para colaborar con otros sin interferir en su trabajo

### Escribe buenos mensajes de commit

Tus commits son como un diario de tu proyecto. En el futuro, te agradecerás a ti mismo por escribir mensajes claros.

**Buenos ejemplos:**
```bash
git commit -m "Agregar sección de testimonios"
git commit -m "Corregir error en formulario de contacto"
git commit -m "Optimizar imágenes para mejorar velocidad de carga"
git commit -m "Actualizar información de contacto"
```

**Malos ejemplos:**
```bash
git commit -m "cambios"
git commit -m "fix"
git commit -m "asdf"
git commit -m "probando"
```

### Colabora y comparte

El desarrollo de software es una actividad social. No tengas miedo de:

- **Pedir ayuda**: Si te atoras, pregunta a tus compañeros o al instructor.
- **Compartir tu trabajo**: Muestra tu portafolio a otros y pide feedback.
- **Aprender de otros**: Si ves algo interesante en el portafolio de un compañero, pregunta cómo lo hizo.
- **Documentar**: Agrega comentarios en tu código explicando por qué hiciste algo de cierta manera.

**Ejemplo de colaboración:**
```bash
# Ver el repositorio de un compañero
git clone https://github.com/compañero/su-portfolio.git

# Explorar su código
cd su-portfolio
code .  # Abre en VS Code
```

### Mantén un README actualizado

El archivo `README.md` es la primera impresión de tu proyecto. Actualízalo con:

- Descripción de tu portafolio
- Tecnologías que usaste
- Instrucciones para correrlo localmente
- Link a la versión desplegada
- Tus datos de contacto

### Haz commits frecuentes

No esperes a terminar todo para hacer un commit. Es mejor hacer commits pequeños y frecuentes:

```bash
# Después de agregar tu información personal
git commit -m "Actualizar información personal"

# Después de agregar un proyecto
git commit -m "Agregar proyecto de aplicación web"

# Después de cambiar colores
git commit -m "Personalizar paleta de colores"
```

**Ventaja**: Si algo sale mal, puedes volver a un commit anterior sin perder todo tu trabajo.

### Prueba en diferentes navegadores

Antes de compartir tu portafolio, pruébalo en:
- Chrome
- Firefox
- Safari (si tienes Mac)
- Edge
- Versión móvil (usa las herramientas de desarrollador: F12 → Toggle device toolbar)

### Optimiza el rendimiento

- **Comprime tus imágenes**: Usa [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
- **Usa formatos modernos**: WebP en lugar de PNG/JPG cuando sea posible
- **Elimina código no usado**: Si quitaste una sección, elimina también sus archivos
- **Prueba la velocidad**: Usa [PageSpeed Insights](https://pagespeed.web.dev/) de Google

---

## 11. Preguntas Frecuentes (FAQ)

### ¿Qué pasa si borro algo y ya no carga la página?

**No te preocupes**, esto es muy común cuando estás aprendiendo. Aquí está cómo solucionarlo:

1. **Revisa la consola del navegador**:
   - Presiona F12 para abrir las herramientas de desarrollador
   - Ve a la pestaña "Console"
   - Busca mensajes de error en rojo
   - El error te dirá qué archivo y qué línea tiene el problema

2. **Revisa la terminal** donde corre `npm run dev`:
   - Los errores de sintaxis aparecen aquí
   - Te dirá exactamente qué está mal

3. **Errores comunes**:
   - **Falta una coma**: `{ name: 'React' icon: '/images/react.png' }` (incorrecto)
     - Correcto: `{ name: 'React', icon: '/images/react.png' }`
   - **Falta cerrar una llave**: `{ name: 'React'` (incorrecto)
     - Correcto: `{ name: 'React' }`
   - **Ruta de imagen incorrecta**: `imageUrl: '/imagenes/foto.jpg'` (si la carpeta se llama `images`)

4. **Si nada funciona**, vuelve al último commit que funcionaba:
   ```bash
   git log  # Ver historial de commits
   git checkout HASH-DEL-COMMIT  # Volver a ese commit
   ```

### ¿Cómo vuelvo a empezar si me equivoco mucho?

Si sientes que rompiste todo y quieres empezar de cero:

**Opción 1: Descartar todos los cambios no guardados**
```bash
git checkout .
```
Esto elimina todos los cambios que no hayas hecho commit.

**Opción 2: Volver a un commit anterior**
```bash
git log  # Ver historial
git reset --hard HASH-DEL-COMMIT  # Volver a ese punto
```

**Opción 3: Clonar de nuevo**
```bash
cd ..
rm -rf Personal-Portfolio-  # Elimina la carpeta
git clone https://github.com/TU-USUARIO/Personal-Portfolio-.git  # Clona de nuevo
```

### ¿Puedo usar mis propios colores o logos?

**¡Por supuesto!** Aquí te digo cómo:

**Para cambiar colores**, abre `src/index.css` y busca las variables CSS:
```css
:root {
  --color-primary: #1a1a1a;     /* Color de fondo principal */
  --color-accent: #0022FF;      /* Color de acento (botones, links) */
  --color-text: #ffffff;        /* Color del texto */
  /* ... más colores */
}
```

Cambia los valores hexadecimales por tus colores favoritos. Usa herramientas como [Coolors](https://coolors.co/) para crear paletas.

**Para agregar tu logo**, simplemente:
1. Guarda tu logo en `public/images/mi-logo.png`
2. Modifica el componente de navegación para usarlo

### ¿Necesito saber inglés para usar este portafolio?

**No necesariamente**. El portafolio tiene soporte para español e inglés, pero puedes:

1. **Usar solo español**: Elimina las traducciones en inglés de `translations.js`
2. **Agregar más idiomas**: Sigue el mismo patrón y agrega francés, alemán, etc.
3. **Usar solo inglés**: Si prefieres tener tu portafolio solo en inglés

**Recomendación**: Mantén ambos idiomas si planeas buscar trabajo internacional. Muchas empresas valoran el bilingüismo.

### ¿Puedo agregar más secciones al portafolio?

**Sí**, pero esto requiere conocimientos intermedios de React. Si eres principiante, te recomiendo:

1. **Primero personaliza** lo que ya existe
2. **Aprende React** con tutoriales y cursos
3. **Luego agrega** nuevas secciones

Si ya sabes React, simplemente:
1. Crea un nuevo componente en `src/components/`
2. Impórtalo en `src/pages/HomePortfolio.jsx`
3. Agrega las traducciones en `src/i18n/translations.js`

### ¿Qué hago si no tengo proyectos para mostrar?

**No te preocupes**, todos empezamos sin proyectos. Aquí algunas ideas:

1. **Proyectos escolares**: Ese trabajo de programación que hiciste en clase
2. **Ejercicios de práctica**: Clones de sitios web, calculadoras, to-do lists
3. **Proyectos personales**: Una página para tu mascota, un blog, una galería de fotos
4. **Contribuciones**: Participa en proyectos open source
5. **Proyectos futuros**: Describe ideas de proyectos que planeas hacer

**Tip**: Es mejor tener 2-3 proyectos bien documentados que 10 proyectos sin descripción.

### ¿Cuánto tiempo toma personalizar el portafolio?

Depende de cuánto quieras personalizar:

- **Básico** (nombre, proyectos, habilidades): 1-2 horas
- **Intermedio** (+ imágenes, experiencias, certificados): 3-4 horas
- **Avanzado** (+ colores, secciones nuevas, animaciones): 1-2 días

**No te apresures**. Es mejor tomarte tu tiempo y hacer un buen trabajo que apurarte y tener errores.

### ¿Puedo usar este portafolio para buscar trabajo?

**¡Absolutamente!** De hecho, ese es uno de los objetivos principales. Un portafolio bien hecho puede:

- Mostrar tus habilidades técnicas
- Demostrar que sabes usar Git y GitHub
- Ser tu carta de presentación en entrevistas
- Diferenciarte de otros candidatos

**Consejos para un portafolio profesional:**
1. Usa una foto profesional (no selfies)
2. Revisa la ortografía y gramática
3. Agrega links a tus redes profesionales (LinkedIn, GitHub)
4. Mantén el diseño limpio y profesional
5. Actualízalo regularmente con nuevos proyectos

### ¿Necesito pagar por hosting?

**No**. Todas las opciones que mencioné en la sección de despliegue son **gratuitas** para proyectos personales:

- Vercel: Gratis
- Netlify: Gratis
- GitHub Pages: Gratis
- Azure Static Web Apps: Gratis (con límites generosos)

Solo pagarías si:
- Quieres un dominio personalizado (.com, .dev, etc.): ~$10-15 USD/año
- Tu sitio tiene millones de visitas (muy poco probable para un portafolio personal)

### ¿Qué pasa si actualizo mi fork y el original cambia?

Si yo (el dueño del repositorio original) hago cambios, puedes sincronizar tu fork:

```bash
# Agregar el repositorio original como "upstream"
git remote add upstream https://github.com/ferramdr/Personal-Portfolio-.git

# Descargar los cambios
git fetch upstream

# Fusionar los cambios con tu rama principal
git merge upstream/main

# Resolver conflictos si los hay (tu editor te ayudará)

# Subir los cambios a tu fork
git push origin main
```

**Recomendación**: Solo haz esto si realmente necesitas las nuevas características. Tu fork es independiente y no necesitas actualizarlo.

---

## 12. Solución de Problemas Comunes

### Problema: "npm: command not found"

**Causa**: Node.js no está instalado o no está en el PATH.

**Solución**:
1. Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/)
2. Reinicia tu terminal
3. Verifica: `node --version` y `npm --version`

### Problema: "git: command not found"

**Causa**: Git no está instalado.

**Solución**:
1. Descarga e instala Git desde [git-scm.com](https://git-scm.com/)
2. Reinicia tu terminal
3. Verifica: `git --version`

### Problema: El servidor no inicia (puerto ocupado)

**Error**: `Port 5000 is already in use`

**Solución**:
1. Cierra otros servidores que estén corriendo
2. O cambia el puerto en `vite.config.js`:
   ```javascript
   server: {
     port: 3000,  // Cambia a otro puerto
   }
   ```

### Problema: Las imágenes no se cargan

**Causa**: Ruta incorrecta o imagen no existe.

**Solución**:
1. Verifica que la imagen esté en `public/images/`
2. Verifica que la ruta sea correcta: `/images/nombre.jpg` (empieza con `/`)
3. Verifica que el nombre del archivo coincida exactamente (mayúsculas/minúsculas)

**Ejemplo correcto**:
```javascript
imageUrl: '/images/mi-proyecto.png'  // Correcto
```

**Ejemplos incorrectos**:
```javascript
imageUrl: 'images/mi-proyecto.png'   // Incorrecto: Falta el /
imageUrl: '/imagenes/mi-proyecto.png' // Incorrecto: Carpeta incorrecta
imageUrl: '/images/Mi-Proyecto.png'  // Incorrecto: Mayúsculas incorrectas
```

### Problema: Error de sintaxis en archivos .js

**Error**: `Unexpected token` o `SyntaxError`

**Causas comunes**:
1. Falta una coma entre objetos
2. Falta cerrar una llave `}` o corchete `]`
3. Comillas sin cerrar

**Solución**:
1. Lee el mensaje de error - te dice la línea exacta
2. Usa un editor con resaltado de sintaxis (VS Code)
3. Usa una extensión de linting (ESLint)

**Tip**: VS Code te muestra errores de sintaxis con una línea roja ondulada.

### Problema: Los cambios no se reflejan en el navegador

**Solución**:
1. Guarda el archivo (Ctrl+S o Cmd+S)
2. Espera unos segundos (el hot reload tarda un poco)
3. Refresca manualmente el navegador (F5)
4. Limpia el caché (Ctrl+Shift+R o Cmd+Shift+R)
5. Reinicia el servidor:
   ```bash
   # Detén el servidor (Ctrl+C)
   npm run dev  # Inícialo de nuevo
   ```

### Problema: "Permission denied" al hacer git push

**Causa**: No tienes permisos o tus credenciales son incorrectas.

**Solución**:
1. Verifica que estés pusheando a TU fork, no al repositorio original
2. Configura tus credenciales de Git:
   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu@email.com"
   ```
3. Si GitHub pide contraseña, usa un Personal Access Token en lugar de tu contraseña:
   - Ve a GitHub → Settings → Developer settings → Personal access tokens
   - Genera un nuevo token con permisos de "repo"
   - Usa ese token como contraseña

### Problema: El sitio se ve roto después de desplegarlo

**Causa**: Rutas incorrectas en producción.

**Solución para GitHub Pages**:
Asegúrate de tener la base correcta en `vite.config.js`:
```javascript
export default defineConfig({
  base: '/nombre-de-tu-repositorio/',
})
```

**Solución para Vercel/Netlify**:
No necesitas configurar nada especial, debería funcionar automáticamente.

### Problema: Errores al instalar dependencias

**Error**: `npm ERR!` durante `npm install`

**Soluciones**:
1. Elimina `node_modules` y `package-lock.json`:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Limpia el caché de npm:
   ```bash
   npm cache clean --force
   npm install
   ```

3. Verifica tu versión de Node.js:
   ```bash
   node --version  # Debe ser >= 20.19.0
   ```

### Problema: No sé qué hacer después

**¡Felicidades!** Si llegaste hasta aquí, ya tienes un portafolio funcional. Ahora puedes:

1. **Compartirlo**: Envía el link a amigos, familia, reclutadores
2. **Mejorarlo**: Agrega más proyectos, mejora el diseño, optimiza el rendimiento
3. **Aprender más**: Toma cursos de React, Git, diseño web
4. **Contribuir**: Ayuda a tus compañeros que están aprendiendo
5. **Crear más proyectos**: Usa lo que aprendiste para crear nuevos proyectos

---

## Recursos Adicionales

### Aprende más sobre Git y GitHub:
- [Git - La guía sencilla](https://rogerdudler.github.io/git-guide/index.es.html)
- [GitHub Learning Lab](https://lab.github.com/)
- [Oh My Git!](https://ohmygit.org/) - Juego para aprender Git

### Aprende React:
- [Documentación oficial de React](https://es.react.dev/)
- [FreeCodeCamp - React Course](https://www.freecodecamp.org/learn/front-end-development-libraries/)
- [Scrimba - Learn React](https://scrimba.com/learn/learnreact)

### Diseño y UX:
- [Coolors](https://coolors.co/) - Generador de paletas de colores
- [Dribbble](https://dribbble.com/) - Inspiración de diseño
- [Awwwards](https://www.awwwards.com/) - Los mejores diseños web

### Íconos e imágenes:
- [Icons8](https://icons8.com/) - Íconos gratis
- [Unsplash](https://unsplash.com/) - Fotos gratis de alta calidad
- [Flaticon](https://www.flaticon.com/) - Íconos vectoriales

---

## ¡Felicidades!

Si llegaste hasta aquí y completaste todos los pasos, **¡ya tienes tu propio portafolio personalizado!** 

Esto es solo el comienzo de tu viaje en el desarrollo web. Sigue aprendiendo, sigue construyendo, y sobre todo, ¡sigue compartiendo tu trabajo con el mundo!

Recuerda:
- **La práctica hace al maestro**: No te desanimes si algo no sale a la primera.
- **Pregunta sin miedo**: La comunidad de desarrolladores es muy solidaria.
- **Comparte tu progreso**: Muestra tu portafolio, pide feedback, mejora.
- **Nunca dejes de aprender**: La tecnología cambia rápido, mantente actualizado.

---

## Contacto y Soporte

Si tienes dudas durante el taller:
1. **Levanta la mano** y pregunta al instructor
2. **Pide ayuda a tus compañeros** - enseñar es la mejor forma de aprender
3. **Revisa esta guía** - probablemente la respuesta esté aquí
4. **Busca en Google** - aprende a buscar errores, es una habilidad crucial

**Después del taller**:
- Repositorio original: [github.com/ferramdr/Personal-Portfolio-](https://github.com/ferramdr/Personal-Portfolio-)
- Email del instructor: dferramm@gmail.com
- Comunidad: Únete a comunidades de desarrolladores en Discord, Reddit, o tu ciudad

---

## Licencia

Este portafolio es de código abierto. Siéntete libre de usarlo, modificarlo y compartirlo. Si lo usas como base para tu portafolio, sería genial que mencionaras el proyecto original, pero no es obligatorio.

---

**¡Mucha suerte en tu viaje como desarrollador!**

*Última actualización: Marzo 2026*
