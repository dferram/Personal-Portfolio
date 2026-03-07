# Cheat Sheet: Comandos Git Esenciales

Esta es una guía rápida de referencia con los comandos de Git más importantes que usarás durante el taller. Guárdala como favorito para consultarla cuando lo necesites.

---

## Configuración Inicial (Solo una vez)

```bash
# Configurar tu nombre (aparecerá en tus commits)
git config --global user.name "Tu Nombre"

# Configurar tu email (debe ser el mismo de GitHub)
git config --global user.email "tu@email.com"

# Verificar tu configuración
git config --list
```

---

## Clonar un Repositorio

```bash
# Clonar tu fork desde GitHub
git clone https://github.com/TU-USUARIO/Personal-Portfolio-.git

# Entrar a la carpeta del proyecto
cd Personal-Portfolio-
```

---

## Ver el Estado de tus Archivos

```bash
# Ver qué archivos has modificado
git status

# Ver diferencias específicas de lo que cambiaste
git diff

# Ver diferencias de un archivo específico
git diff src/data/projects.js
```

---

## Guardar Cambios (Commits)

```bash
# 1. Agregar TODOS los archivos modificados
git add .

# O agregar archivos específicos
git add src/data/projects.js
git add src/i18n/translations.js

# 2. Hacer commit con un mensaje descriptivo
git commit -m "Agregar mi información personal"

# Atajo: agregar y hacer commit en un solo comando
git commit -am "Actualizar proyectos"
# NOTA: Solo funciona con archivos que ya existían (no archivos nuevos)
```

---

## Subir y Descargar Cambios

```bash
# Subir tus commits a GitHub
git push origin main

# Descargar cambios de GitHub (si trabajas desde otra computadora)
git pull origin main
```

---

## Trabajar con Ramas

```bash
# Ver todas las ramas
git branch

# Crear una nueva rama
git branch nueva-funcionalidad

# Cambiar a una rama
git checkout nueva-funcionalidad

# Crear y cambiar a una rama en un solo comando
git checkout -b nueva-funcionalidad

# Volver a la rama principal
git checkout main

# Fusionar una rama con la actual
git merge nueva-funcionalidad

# Eliminar una rama (después de fusionarla)
git branch -d nueva-funcionalidad
```

---

## Ver Historial

```bash
# Ver historial de commits
git log

# Ver historial resumido (más fácil de leer)
git log --oneline

# Ver últimos 5 commits
git log -n 5

# Ver quién modificó cada línea de un archivo
git blame src/data/projects.js
```

---

## Deshacer Cambios

```bash
# Descartar cambios en un archivo (antes de hacer add)
git checkout -- src/data/projects.js

# Descartar TODOS los cambios no guardados
git checkout .

# Quitar un archivo del staging area (después de git add)
git reset HEAD src/data/projects.js

# Volver al commit anterior (CUIDADO: pierdes cambios)
git reset --hard HEAD~1

# Ver un commit anterior sin perder cambios
git checkout HASH-DEL-COMMIT
```

---

## Sincronizar con el Repositorio Original

```bash
# Agregar el repositorio original como "upstream"
git remote add upstream https://github.com/ferramdr/Personal-Portfolio-.git

# Ver tus repositorios remotos
git remote -v

# Descargar cambios del repositorio original
git fetch upstream

# Fusionar cambios del original con tu rama
git merge upstream/main

# Subir los cambios sincronizados a tu fork
git push origin main
```

---

## Comandos de Emergencia

```bash
# ¿Rompiste algo? Vuelve al último commit que funcionaba
git reset --hard HEAD

# ¿Hiciste commit de algo que no querías? Deshaz el último commit
git reset --soft HEAD~1
# Tus cambios quedan en staging, puedes modificarlos y hacer commit de nuevo

# ¿Necesitas guardar cambios temporalmente sin hacer commit?
git stash
# Recuperar los cambios guardados
git stash pop

# Ver qué guardaste en el stash
git stash list
```

---

## Información Útil

```bash
# Ver la URL de tu repositorio remoto
git remote -v

# Ver en qué rama estás
git branch

# Ver diferencias entre ramas
git diff main nueva-funcionalidad

# Ver archivos que Git está ignorando
git status --ignored
```

---

## Flujo de Trabajo Típico

Este es el flujo que seguirás la mayoría del tiempo:

```bash
# 1. Verificar en qué rama estás y el estado
git status

# 2. Hacer tus cambios en los archivos...

# 3. Ver qué modificaste
git status
git diff

# 4. Agregar los archivos al staging
git add .

# 5. Hacer commit
git commit -m "Descripción clara de los cambios"

# 6. Subir a GitHub
git push origin main

# 7. ¡Listo! Verifica en GitHub que tus cambios estén ahí
```

---

## Consejos y Buenas Prácticas

### Mensajes de Commit

**Buenos ejemplos:**
```bash
git commit -m "Agregar sección de proyectos personales"
git commit -m "Corregir error en formulario de contacto"
git commit -m "Actualizar información de habilidades técnicas"
git commit -m "Optimizar imágenes para mejorar rendimiento"
```

**Malos ejemplos:**
```bash
git commit -m "cambios"
git commit -m "fix"
git commit -m "asdf"
git commit -m "probando"
```

### Frecuencia de Commits

- **Haz commits frecuentes**: Es mejor hacer muchos commits pequeños que uno grande
- **Cada commit debe tener un propósito**: Un cambio lógico por commit
- **Commit después de cada funcionalidad**: No esperes a terminar todo

### Antes de hacer Push

```bash
# Siempre verifica qué vas a subir
git status
git log --oneline -5

# Asegúrate de estar en la rama correcta
git branch
```

---

## Errores Comunes y Soluciones

### Error: "fatal: not a git repository"

**Causa**: No estás en la carpeta del proyecto.

**Solución**:
```bash
cd ruta/a/tu/proyecto
```

### Error: "Your branch is ahead of 'origin/main' by X commits"

**Causa**: Tienes commits locales que no has subido a GitHub.

**Solución**:
```bash
git push origin main
```

### Error: "Your branch is behind 'origin/main'"

**Causa**: Hay cambios en GitHub que no tienes localmente.

**Solución**:
```bash
git pull origin main
```

### Error: "CONFLICT (content): Merge conflict"

**Causa**: Dos personas modificaron la misma línea de código.

**Solución**:
1. Abre el archivo con conflicto en tu editor
2. Busca las marcas `<<<<<<<`, `=======`, `>>>>>>>`
3. Decide qué cambios mantener
4. Elimina las marcas de conflicto
5. Guarda el archivo
6. Haz commit:
```bash
git add .
git commit -m "Resolver conflicto en [nombre del archivo]"
```

### Error: "Permission denied (publickey)"

**Causa**: GitHub no reconoce tu identidad.

**Solución**:
1. Usa HTTPS en lugar de SSH para clonar
2. O configura una SSH key (más avanzado)

---

## Recursos para Aprender Más

- **Git - La guía sencilla**: https://rogerdudler.github.io/git-guide/index.es.html
- **Learn Git Branching** (interactivo): https://learngitbranching.js.org/?locale=es_ES
- **Oh My Git!** (juego): https://ohmygit.org/
- **GitHub Learning Lab**: https://lab.github.com/
- **Documentación oficial de Git**: https://git-scm.com/doc

---

## Atajos de Teclado en la Terminal

### Windows (PowerShell/CMD)
- `Ctrl + C` - Cancelar comando actual
- `Ctrl + L` - Limpiar pantalla
- `Tab` - Autocompletar nombres de archivos/carpetas
- `↑` / `↓` - Navegar por comandos anteriores

### Mac/Linux (Terminal)
- `Ctrl + C` - Cancelar comando actual
- `Ctrl + L` o `clear` - Limpiar pantalla
- `Tab` - Autocompletar nombres de archivos/carpetas
- `↑` / `↓` - Navegar por comandos anteriores
- `Ctrl + R` - Buscar en historial de comandos

---

## Comandos Específicos para este Taller

```bash
# Instalar dependencias del proyecto
npm install

# Iniciar servidor de desarrollo
npm run dev

# Detener el servidor
Ctrl + C

# Construir para producción
npm run build

# Ver la versión de Node.js
node --version

# Ver la versión de npm
npm --version

# Ver la versión de Git
git --version
```

---

## ¿Necesitas Ayuda?

Si te atoras con Git:

1. **Lee el mensaje de error** - Git suele decirte qué está mal
2. **Usa `git status`** - Te dice en qué estado está tu repositorio
3. **Busca en Google** - Copia el error y busca, alguien ya lo resolvió
4. **Pregunta a tus compañeros** - Probablemente ya pasaron por lo mismo
5. **Consulta esta guía** - Está aquí para ayudarte

---

**¡Guarda este archivo! Lo consultarás muchas veces durante tu carrera como desarrollador.**

*Última actualización: Marzo 2026*
