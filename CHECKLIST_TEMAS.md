# Checklist de Personalizacion de Temas

Usa esta lista para asegurarte de que tu tema personalizado funciona correctamente.

## Antes de Empezar

- [ ] He leido la guia rapida (INICIO_RAPIDO_TEMAS.md)
- [ ] Tengo instalado Node.js y npm
- [ ] He clonado el repositorio correctamente
- [ ] Puedo ejecutar `npm install` sin errores
- [ ] Puedo ejecutar `npm run dev` y ver el portafolio

## Cambiar a un Tema Existente

- [ ] Abri el archivo `src/styles/themes/index.js`
- [ ] Encontre la linea `export const activeTheme = classicTheme;`
- [ ] Cambie `classicTheme` por el tema que quiero
- [ ] Guarde el archivo (Ctrl+S o Cmd+S)
- [ ] Recargue el navegador (F5 o Ctrl+R)
- [ ] Verifique que los colores cambiaron correctamente
- [ ] Revise que todo el texto sea legible
- [ ] Probé en diferentes paginas del portafolio

## Crear Mi Propio Tema

### Preparacion
- [ ] Copie el archivo `src/styles/themes/template.js`
- [ ] Lo renombre a algo descriptivo (ej: `mi-tema-azul.js`)
- [ ] Cambie el nombre de la constante dentro del archivo
- [ ] Elegi una paleta de colores (use coolors.co u otra herramienta)

### Configuracion de Colores
- [ ] Defini el color `primary` (fondo principal)
- [ ] Defini el color `primary-dark` (fondo alternativo)
- [ ] Defini el color `accent` (color de acento principal)
- [ ] Defini el color `accent-dark` (version oscura del acento)
- [ ] Defini el color `accent-light` (version clara del acento)
- [ ] Defini el color `foreground` (texto principal)
- [ ] Defini el color `foreground-light` (texto secundario)
- [ ] Defini el color `muted` (texto deshabilitado)
- [ ] Actualice el nombre del tema

### Verificacion de Contraste
- [ ] Verifique contraste entre `primary` y `foreground` (minimo 4.5:1)
- [ ] Verifique contraste entre `primary-dark` y `foreground` (minimo 4.5:1)
- [ ] Verifique contraste entre `accent` y texto blanco (minimo 4.5:1)
- [ ] Use WebAIM Contrast Checker para verificar

### Registro del Tema
- [ ] Abri `src/styles/themes/index.js`
- [ ] Agregue el import de mi tema al inicio del archivo
- [ ] Agregue mi tema al objeto `allThemes`
- [ ] Agregue mi tema a las exportaciones individuales
- [ ] Cambie `activeTheme` a mi nuevo tema

### Pruebas
- [ ] Guarde todos los archivos
- [ ] Ejecute `npm run build` para verificar que no hay errores
- [ ] Recargue el navegador
- [ ] Verifique la pagina principal
- [ ] Verifique la pagina de proyectos
- [ ] Verifique la pagina de certificados
- [ ] Verifique la pagina de experiencias
- [ ] Verifique la pagina de contacto
- [ ] Probé en modo responsive (telefono, tablet)
- [ ] Verifique que los botones se vean bien
- [ ] Verifique que los enlaces sean visibles
- [ ] Verifique que las tarjetas tengan buen contraste

## Control de Version con Git

### Crear Rama
- [ ] Ejecute `git checkout -b mi-tema-personalizado`
- [ ] Verifique que estoy en la rama correcta con `git branch`

### Hacer Commit
- [ ] Agregue los archivos modificados: `git add src/styles/themes/`
- [ ] Hice commit con mensaje descriptivo: `git commit -m "Agregar tema personalizado azul oceano"`
- [ ] Verifique el commit con `git log`

### Subir Cambios
- [ ] Subi mi rama: `git push origin mi-tema-personalizado`
- [ ] Cree un Pull Request en GitHub
- [ ] Agregue descripcion y capturas de pantalla al PR

## Solucion de Problemas

### El tema no cambia
- [ ] Verifique que guarde el archivo `index.js`
- [ ] Recargue con Ctrl+Shift+R (recarga completa)
- [ ] Verifique la consola del navegador (F12) por errores
- [ ] Verifique que el nombre del tema este escrito correctamente

### Errores al hacer build
- [ ] Verifique que todos los colores esten en formato valido
- [ ] Verifique que no falte ninguna propiedad en el tema
- [ ] Verifique que el import este correcto en `index.js`
- [ ] Verifique que el export este al final del archivo del tema

### Los colores se ven raros
- [ ] Verifique que use formato hexadecimal (#RRGGBB)
- [ ] Verifique que todos los valores tengan 6 caracteres (mas el #)
- [ ] Verifique que no haya espacios en los valores de color
- [ ] Compare con un tema que funcione correctamente

### Problemas con Git
- [ ] Verifique que este en la rama correcta: `git branch`
- [ ] Verifique el estado: `git status`
- [ ] Si hay conflictos, pida ayuda al profesor
- [ ] Si necesita volver atras: `git checkout -- archivo`

## Mejores Practicas

- [ ] Use nombres descriptivos para mis temas
- [ ] Documente por que elegi cada color
- [ ] Mantenga consistencia en los valores de color
- [ ] Pruebe en diferentes dispositivos
- [ ] Pida feedback a companeros
- [ ] Mantenga el codigo limpio y comentado
- [ ] Haga commits pequenos y frecuentes
- [ ] Escriba mensajes de commit claros

## Recursos Utiles

- [ ] Guarde el link de coolors.co en favoritos
- [ ] Guarde el link de WebAIM Contrast Checker
- [ ] Revise la documentacion de Tailwind CSS
- [ ] Consulte GUIA_TEMAS.md cuando tenga dudas
- [ ] Revise EJEMPLOS_TEMAS.md para inspiracion

## Compartir Mi Trabajo

- [ ] Tome capturas de pantalla de mi tema
- [ ] Documente las decisiones de diseno
- [ ] Prepare una presentacion breve
- [ ] Comparta el link del Pull Request
- [ ] Explique por que elegi estos colores
- [ ] Muestre como se ve en diferentes dispositivos

---

Fecha de completacion: _______________

Tema creado: _______________

Notas adicionales:
