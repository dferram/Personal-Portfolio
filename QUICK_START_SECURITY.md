# 🚀 Guía Rápida de Seguridad

**¿Tienes 5 minutos? Esta guía te ayudará a poner en marcha la seguridad de tu portafolio.**

---

## ⚡ Setup en 5 pasos

### 1️⃣ Instala las dependencias del servidor (2 min)

```bash
cd server
npm install
```

Esto instalará todas las librerías de seguridad necesarias.

### 2️⃣ Configura las variables de entorno (2 min)

```bash
# Copia el archivo de ejemplo
cp .env.example .env
```

Edita el archivo `.env` y rellena estos valores mínimos:

```env
PORT=3001
NODE_ENV=development
SESSION_SECRET=GENERA_UNO_ALEATORIO_AQUI
ALLOWED_ORIGINS=http://localhost:5173
```

**Para generar SESSION_SECRET seguro:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3️⃣ Inicia el servidor (30 seg)

```bash
npm run dev
```

Deberías ver:
```
🚀 Servidor Express iniciado correctamente
📡 Puerto: 3001
🔒 Seguridad: ACTIVADA
```

### 4️⃣ Configura el frontend (30 seg)

En la raíz del proyecto (no en `/server`):

```bash
# Crea .env para el frontend
cp .env.example .env
```

Edita `.env`:
```env
VITE_API_URL=http://localhost:3001
```

### 5️⃣ Prueba que funciona (30 seg)

```bash
# En otra terminal, inicia el frontend
npm run dev

# Abre http://localhost:5173 en tu navegador
# Prueba enviar un mensaje de contacto
```

---

## 🎯 ¿Qué acabas de implementar?

✅ **Rate Limiting:** Máximo 5 mensajes por hora por IP  
✅ **CORS:** Solo tu dominio puede hacer peticiones  
✅ **Helmet:** Headers HTTP seguros automáticos  
✅ **CSRF Protection:** Tokens de seguridad en cada petición  
✅ **XSS Protection:** Limpieza automática de código malicioso  
✅ **Data Validation:** Validación de emails, longitudes, etc.

---

## 🧪 Prueba rápida de seguridad

### Prueba 1: Rate Limiting

Intenta enviar 6 mensajes seguidos. El sexto debería ser bloqueado con:
```
❌ Has enviado demasiados mensajes. Espera 1 hora.
```

### Prueba 2: Validación de email

Intenta enviar con email inválido (ej: "no-es-email"):
```
❌ El formato del email no es válido
```

### Prueba 3: CSRF Protection

Abre la consola del navegador y ejecuta:
```javascript
// Esto debería fallar porque no tiene token CSRF
fetch('http://localhost:3001/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test',
    email: 'test@test.com',
    message: 'Test'
  })
});
```

Deberías ver un error 403 (Forbidden).

---

## 📱 Usar el componente seguro

### Opción 1: Reemplazar el componente actual

```jsx
// En tu archivo de rutas o App.jsx
import ContactFormSecure from '@/components/ContactFormSecure';

// Reemplaza tu componente Contact actual con:
<ContactFormSecure />
```

### Opción 2: Integrar en tu componente existente

Copia el código de `ContactFormSecure.jsx` y adáptalo a tu diseño actual.

**Lo esencial que necesitas:**

```jsx
// 1. Obtener token CSRF
useEffect(() => {
  fetch('http://localhost:3001/api/csrf-token', {
    credentials: 'include'
  })
    .then(res => res.json())
    .then(data => setCsrfToken(data.csrfToken));
}, []);

// 2. Incluir token en peticiones POST
const response = await fetch('http://localhost:3001/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken // ← Importante
  },
  credentials: 'include',
  body: JSON.stringify(formData)
});
```

---

## 🌍 Desplegar a producción

### Antes de desplegar

1. **Actualiza CORS con tu dominio real:**

```javascript
// En server/server.js
const allowedOrigins = [
  'https://tu-dominio.com',
  'https://www.tu-dominio.com'
];
```

2. **Configura variables de entorno en tu hosting:**

**Vercel:**
- Settings → Environment Variables
- Agrega: `SESSION_SECRET`, `ALLOWED_ORIGINS`, etc.

**Netlify:**
- Site settings → Environment variables
- Agrega las mismas variables

3. **Asegúrate de que HTTPS esté activo:**

La mayoría de plataformas lo hacen automáticamente, pero verifica que tu sitio use `https://` y no `http://`.

### Desplegar el servidor

**Vercel (recomendado):**
```bash
cd server
vercel
```

**Heroku:**
```bash
cd server
heroku create tu-app-name
git push heroku main
```

**Railway:**
- Conecta tu repo en railway.app
- Configura variables de entorno
- Deploy automático

### Actualizar frontend con la URL del servidor

```env
# .env (producción)
VITE_API_URL=https://tu-servidor.vercel.app
```

---

## 🔧 Personalización rápida

### Cambiar límite de mensajes

```javascript
// server/server.js - busca "contactLimiter"
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 5, // ← Cambia este número (3-10 recomendado)
});
```

### Agregar más campos al formulario

```javascript
// 1. En el frontend (ContactFormSecure.jsx)
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '', // ← Nuevo campo
  message: ''
});

// 2. En el backend (server/server.js)
const { name, email, phone, message } = req.body;

// Validar el nuevo campo
if (phone && phone.length > 20) {
  return res.status(400).json({ 
    error: 'El teléfono no puede exceder 20 caracteres' 
  });
}
```

### Cambiar dominios permitidos (CORS)

```javascript
// server/server.js - busca "allowedOrigins"
const allowedOrigins = [
  'http://localhost:5173',
  'https://tu-dominio.com',
  'https://otro-dominio.com' // ← Agrega más si necesitas
];
```

---

## ❓ Problemas comunes

### "Cannot connect to server"

**Causa:** El servidor no está corriendo.  
**Solución:** `cd server && npm run dev`

### "CORS error"

**Causa:** Tu dominio no está en `allowedOrigins`.  
**Solución:** Agrégalo en `server/server.js`

### "CSRF token invalid"

**Causa:** Token expirado o no obtenido.  
**Solución:** Recarga la página para obtener un nuevo token.

### "Too many requests"

**Causa:** Excediste el rate limit.  
**Solución:** Espera 1 hora o ajusta el límite en desarrollo.

---

## 📚 Siguiente paso

**¿Quieres entender mejor cómo funciona todo?**

Lee la documentación completa: **[SEGURIDAD.md](./SEGURIDAD.md)**

Ahí encontrarás:
- Explicaciones detalladas de cada medida de seguridad
- Ejemplos de ataques reales y cómo prevenirlos
- Guías de personalización avanzada
- Mejores prácticas de seguridad
- FAQ con respuestas a dudas comunes

**¿Listo para producción?**

Revisa el checklist: **[SECURITY_CHECKLIST.md](./SECURITY_CHECKLIST.md)**

---

## 💡 Tips finales

1. **No te agobies:** Si no entiendes todo ahora, está bien. Aprenderás con el tiempo.

2. **Empieza simple:** Usa la configuración por defecto primero, personaliza después.

3. **Prueba localmente:** Siempre prueba todo en local antes de desplegar.

4. **Mantén actualizado:** Ejecuta `npm audit` regularmente para detectar vulnerabilidades.

5. **Pregunta si tienes dudas:** La seguridad es compleja, es normal tener preguntas.

---

**¡Listo! Tu portafolio ahora está protegido contra los ataques más comunes. 🔐✨**

**Tiempo total de setup: ~5 minutos**  
**Nivel de protección: Alto**  
**Dificultad: Baja (solo copiar y pegar)**

Si tienes problemas, revisa la documentación completa o los logs del servidor para más detalles.
