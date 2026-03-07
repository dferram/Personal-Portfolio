# Instrucciones para el Profesor - Taller Git & GitHub

Este documento contiene información importante para ti como instructor del taller.

---

## Materiales Creados

Se han generado los siguientes archivos para el taller:

### 1. **GUIA_TALLER_GIT_GITHUB.md** (Documento Principal)
- Guía completa paso a paso para los estudiantes
- Cubre desde fork hasta despliegue
- Incluye explicaciones conceptuales y prácticas
- Sección de FAQ y troubleshooting
- Tono amigable y educativo

### 2. **CHEATSHEET_GIT.md** (Referencia Rápida)
- Comandos Git esenciales
- Flujos de trabajo comunes
- Soluciones a errores frecuentes
- Ideal para imprimir o tener abierto durante el taller

### 3. **Comentarios en Archivos de Datos**
Los siguientes archivos tienen comentarios detallados para guiar la personalización:
- `src/data/projects.js` - Cómo agregar/modificar proyectos
- `src/data/skillsData.js` - Cómo personalizar habilidades
- `src/data/certificatesData.js` - Cómo agregar certificados
- `src/data/experiencesData.js` - Ya tenía comentarios extensos
- `src/i18n/translations.js` - Cómo modificar textos del portafolio

---

## Objetivos de Aprendizaje del Taller

Al finalizar, los estudiantes deberán ser capaces de:

1. **Conceptos de Git y GitHub**
   - Entender qué es un fork y para qué sirve
   - Diferenciar entre repositorio local y remoto
   - Comprender el flujo: modificar → add → commit → push

2. **Habilidades Técnicas**
   - Hacer fork de un repositorio
   - Clonar un repositorio a su máquina
   - Hacer commits con mensajes descriptivos
   - Subir cambios a GitHub (push)
   - Trabajar con ramas (básico)

3. **Personalización del Portafolio**
   - Modificar archivos de datos (JSON/JS)
   - Agregar sus propios proyectos, habilidades y experiencias
   - Subir y referenciar imágenes
   - Entender la estructura básica de un proyecto React

4. **Despliegue (Opcional)**
   - Desplegar su portafolio en Vercel, Netlify o GitHub Pages
   - Obtener una URL pública para compartir

---

## Estructura Sugerida del Taller

### Sesión 1: Introducción y Setup (1-1.5 horas)

**Bloque 1: Teoría (20 min)**
- ¿Qué es Git y GitHub?
- ¿Qué es un fork y por qué lo usamos?
- Flujo básico de trabajo con Git
- Demo en vivo del portafolio funcionando

**Bloque 2: Preparación (20 min)**
- Verificar instalaciones (Git, Node.js, editor)
- Crear cuenta de GitHub (si no tienen)
- Hacer fork del repositorio (todos juntos)

**Bloque 3: Clonar y Correr (30 min)**
- Clonar el fork a sus máquinas
- Instalar dependencias (`npm install`)
- Correr el servidor de desarrollo (`npm run dev`)
- Verificar que funciona en el navegador

**Checkpoint**: Todos deben tener el portafolio corriendo localmente

---

### Sesión 2: Personalización (2-3 horas)

**Bloque 1: Información Personal (30 min)**
- Modificar `src/i18n/translations.js`
- Cambiar nombre, título, descripción
- Guardar y ver cambios en vivo

**Bloque 2: Proyectos y Habilidades (60 min)**
- Agregar/modificar proyectos en `src/data/projects.js`
- Actualizar habilidades en `src/data/skillsData.js`
- Subir imágenes a `public/images/`
- Referenciar imágenes correctamente

**Bloque 3: Git Básico (30 min)**
- `git status` - ver cambios
- `git add .` - agregar archivos
- `git commit -m "mensaje"` - guardar cambios
- `git push origin main` - subir a GitHub

**Bloque 4: Personalización Avanzada (30 min)**
- Agregar experiencias (opcional)
- Agregar certificados (opcional)
- Experimentar con cambios

**Checkpoint**: Todos deben tener commits subidos a GitHub

---

### Sesión 3: Despliegue y Cierre (1 hora)

**Bloque 1: Despliegue (30 min)**
- Crear cuenta en Vercel/Netlify
- Conectar repositorio de GitHub
- Desplegar el portafolio
- Obtener URL pública

**Bloque 2: Buenas Prácticas (15 min)**
- Mensajes de commit descriptivos
- Trabajo con ramas
- Colaboración y código abierto

**Bloque 3: Q&A y Cierre (15 min)**
- Resolver dudas finales
- Compartir portafolios entre compañeros
- Próximos pasos y recursos

---

## Consejos para Impartir el Taller

### Antes del Taller

1. **Prueba todo el flujo tú mismo** antes del taller
2. **Prepara un fork de ejemplo** con personalizaciones para mostrar
3. **Ten una lista de verificación** de software necesario
4. **Prepara slides** con los conceptos clave (opcional)
5. **Ten URLs importantes** a la mano (GitHub, Vercel, recursos)

### Durante el Taller

1. **Ve despacio con los principiantes** - Es su primer contacto con Git
2. **Haz checkpoints frecuentes** - "¿Todos tienen esto funcionando?"
3. **Usa la pantalla compartida** - Muestra cada paso en vivo
4. **Fomenta la ayuda entre pares** - Los que van adelante ayudan a los demás
5. **Ten paciencia con los errores** - Son oportunidades de aprendizaje
6. **Celebra los logros** - Primer commit, primer push, primer deploy

### Errores Comunes que Verás

1. **No están en la carpeta correcta** al ejecutar comandos Git
2. **Olvidan hacer `npm install`** antes de `npm run dev`
3. **Rutas de imágenes incorrectas** (olvidan el `/` inicial)
4. **Errores de sintaxis** en archivos JS (comas faltantes, llaves sin cerrar)
5. **Confunden su fork con el repositorio original**
6. **Problemas con credenciales de GitHub** (usar token en vez de password)

### Soluciones Rápidas

```bash
# Si el servidor no inicia
npm install
npm run dev

# Si Git no reconoce cambios
git status
cd ruta/correcta/del/proyecto

# Si hay errores de sintaxis
# Revisar la consola del navegador (F12)
# Revisar la terminal donde corre npm run dev

# Si no pueden hacer push
# Verificar que estén en SU fork, no en el original
git remote -v
```

---

## Evaluación (Opcional)

Si quieres evaluar el taller, considera estos criterios:

### Básico (Aprobado)
- ✅ Fork del repositorio creado
- ✅ Proyecto clonado y corriendo localmente
- ✅ Al menos 1 commit con cambios personales
- ✅ Cambios subidos a GitHub

### Intermedio (Bien)
- ✅ Todo lo básico
- ✅ Información personal actualizada
- ✅ Al menos 1 proyecto agregado/modificado
- ✅ Habilidades personalizadas
- ✅ Múltiples commits con mensajes descriptivos

### Avanzado (Excelente)
- ✅ Todo lo intermedio
- ✅ Portafolio desplegado en internet
- ✅ Imágenes propias agregadas
- ✅ Experiencias y/o certificados agregados
- ✅ Uso de ramas para experimentar
- ✅ Portafolio completamente personalizado

---

## Troubleshooting para el Instructor

### Problema: Estudiantes con diferentes sistemas operativos

**Solución**: Los comandos Git son iguales en todos los OS. Las diferencias principales:
- Windows: Usa PowerShell o CMD
- Mac/Linux: Usa Terminal
- Rutas de archivos diferentes (C:\ vs ~/)

### Problema: Versiones antiguas de Node.js

**Solución**: 
```bash
# Verificar versión
node --version

# Si es menor a 20.19.0, pedir que actualicen
# Descargar desde nodejs.org
```

### Problema: Firewall o proxy corporativo

**Solución**: 
- Usar hotspot del celular temporalmente
- O configurar proxy en npm (avanzado)

### Problema: Estudiantes muy adelantados

**Solución**:
- Pídeles que ayuden a sus compañeros
- Dales retos adicionales:
  - Cambiar colores del tema
  - Agregar una nueva sección
  - Configurar dominio personalizado
  - Contribuir mejoras al repositorio original

### Problema: Estudiantes muy atrasados

**Solución**:
- Asigna un compañero que los ayude
- Haz pair programming con ellos
- Enfócalos en lo básico primero
- Ofrece sesión de recuperación después

---

## Recursos Adicionales para Compartir

### Tutoriales de Git
- [Git - La guía sencilla](https://rogerdudler.github.io/git-guide/index.es.html)
- [Learn Git Branching](https://learngitbranching.js.org/?locale=es_ES) (interactivo)
- [Oh My Git!](https://ohmygit.org/) (juego)

### Tutoriales de React
- [Documentación oficial de React](https://es.react.dev/)
- [freeCodeCamp React](https://www.freecodecamp.org/learn/front-end-development-libraries/)

### Diseño y Assets
- [Coolors](https://coolors.co/) - Paletas de colores
- [Icons8](https://icons8.com/) - Íconos gratis
- [Unsplash](https://unsplash.com/) - Fotos gratis

### Despliegue
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

---

## Variaciones del Taller

### Versión Corta (2 horas)
- Solo fork, clone, personalización básica y commit/push
- Sin despliegue
- Enfoque en Git básico

### Versión Extendida (2 días)
- Día 1: Git, fork, personalización
- Día 2: Ramas, colaboración, pull requests, despliegue avanzado

### Versión Avanzada
- Incluir trabajo con ramas
- Pull requests entre estudiantes
- Code review
- Configuración de CI/CD
- Dominio personalizado

---

## Checklist Pre-Taller

- [ ] Repositorio original actualizado y funcionando
- [ ] Guías y documentación revisadas
- [ ] Software necesario listado y verificado
- [ ] Ejemplos de portafolios personalizados preparados
- [ ] URLs importantes guardadas (GitHub, Vercel, recursos)
- [ ] Slides o material de apoyo preparado (opcional)
- [ ] Espacio físico/virtual configurado
- [ ] Proyector/pantalla compartida funcionando
- [ ] Internet estable verificado
- [ ] Tiempo asignado comunicado a estudiantes

---

## Después del Taller

### Seguimiento
- Comparte el link a la guía completa
- Crea un grupo/canal para dudas post-taller
- Comparte portafolios destacados (con permiso)
- Pide feedback para mejorar futuras ediciones

### Métricas de Éxito
- % de estudiantes que completaron el fork
- % de estudiantes con commits en GitHub
- % de estudiantes con portafolio desplegado
- Feedback de satisfacción

---

## Ideas para Extender el Taller

1. **Hackathon de Portafolios**: Competencia de mejor portafolio personalizado
2. **Peer Review**: Estudiantes revisan portafolios de compañeros
3. **Contribuciones Open Source**: Mejoras al repositorio original vía PR
4. **Showcase**: Presentación de portafolios al final del semestre
5. **Portfolio Challenge**: Retos semanales de mejora

---

## Contacto

Si tienes dudas sobre el material o sugerencias de mejora:
- Email: dferramm@gmail.com
- GitHub: [@ferramdr](https://github.com/ferramdr)

---

**¡Mucho éxito con tu taller! Los estudiantes aprenderán habilidades valiosas que usarán toda su carrera.**

*Última actualización: Marzo 2026*
