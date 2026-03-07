# 🔐 Guía de Seguridad del Portafolio

Esta guía explica todas las medidas de seguridad implementadas en el proyecto, cómo funcionan, y cómo personalizarlas según tus necesidades.

---

## 📋 Tabla de Contenidos

- [¿Por qué es importante la seguridad?](#por-qué-es-importante-la-seguridad)
- [Medidas de seguridad implementadas](#medidas-de-seguridad-implementadas)
  - [1. Rate Limiting](#1-rate-limiting)
  - [2. CORS (Cross-Origin Resource Sharing)](#2-cors-cross-origin-resource-sharing)
  - [3. Helmet - Headers HTTP seguros](#3-helmet---headers-http-seguros)
  - [4. Protección XSS](#4-protección-xss-cross-site-scripting)
  - [5. Protección CSRF](#5-protección-csrf-cross-site-request-forgery)
  - [6. Sanitización de datos](#6-sanitización-de-datos)
  - [7. HTTPS](#7-https)
- [Configuración paso a paso](#configuración-paso-a-paso)
- [Personalización de seguridad](#personalización-de-seguridad)
- [Mejores prácticas generales](#mejores-prácticas-generales)
- [Preguntas frecuentes](#preguntas-frecuentes)

---

## ¿Por qué es importante la seguridad?

Aunque tu portafolio sea principalmente estático, **cualquier funcionalidad que reciba información del usuario** (como formularios de contacto) puede ser vulnerable a ataques si no se protege adecuadamente.

Los ataques más comunes incluyen:
- **Spam masivo** en formularios
- **Ataques de denegación de servicio (DoS)** que saturan tu servidor
- **Robo de datos** mediante inyecciones de código
- **Suplantación de identidad** con peticiones falsificadas

Las medidas de seguridad implementadas protegen contra estos y otros ataques comunes.

---

## Medidas de seguridad implementadas

### 1. Rate Limiting

**¿Qué es?**  
El rate limiting limita la cantidad de solicitudes que una IP puede hacer en un período de tiempo determinado.

**¿Por qué es importante?**  
Imagina que alguien intenta enviar 1000 mensajes por minuto a través de tu formulario de contacto, o hacer un ataque automatizado. El rate limiting evita esto limitando, por ejemplo, a 5 mensajes por hora por IP.

**¿Cómo funciona?**
```javascript
// Ejemplo: Máximo 5 mensajes por hora
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora en milisegundos
  max: 5, // Máximo 5 solicitudes
  message: 'Has enviado demasiados mensajes. Espera 1 hora.'
});
```

**Casos de uso:**
- **Formulario de contacto:** 3-10 mensajes por hora
- **Login/autenticación:** 5-10 intentos por 15 minutos
- **API pública:** 100-1000 solicitudes por 15 minutos

**Personalización:**
```javascript
// Para cambiar los límites, edita estos valores en server.js:

// Ventana de tiempo (ejemplos):
windowMs: 1 * 60 * 1000,      // 1 minuto
windowMs: 15 * 60 * 1000,     // 15 minutos
windowMs: 60 * 60 * 1000,     // 1 hora
windowMs: 24 * 60 * 60 * 1000 // 1 día

// Número máximo de solicitudes:
max: 3,    // Muy restrictivo (login)
max: 10,   // Moderado (contacto)
max: 100,  // Permisivo (API general)
```

**Ejemplo real:**  
Si un usuario intenta enviar 6 mensajes en una hora (cuando el límite es 5), recibirá un error 429 (Too Many Requests) con el mensaje: *"Has enviado demasiados mensajes. Por favor espera 1 hora."*

---

### 2. CORS (Cross-Origin Resource Sharing)

**¿Qué es?**  
CORS controla qué sitios web externos pueden hacer peticiones a tu API desde el navegador.

**¿Por qué es importante?**  
Sin CORS, cualquier sitio web malicioso podría hacer peticiones a tu servidor usando el navegador de tus visitantes. Por ejemplo, `sitio-malicioso.com` podría intentar enviar spam a través de tu formulario de contacto.

**¿Cómo funciona?**  
Tu servidor solo acepta peticiones de dominios que tú explícitamente permites:

```javascript
const allowedOrigins = [
  'http://localhost:5173',        // Tu desarrollo local
  'https://tu-portafolio.com',    // Tu dominio de producción
  'https://www.tu-portafolio.com' // Variante con www
];
```

**Configuración por entorno:**

| Entorno | Dominios permitidos |
|---------|---------------------|
| **Desarrollo local** | `http://localhost:5173`, `http://127.0.0.1:5173` |
| **Staging/Pruebas** | `https://staging.tu-dominio.com` |
| **Producción** | `https://tu-dominio.com`, `https://www.tu-dominio.com` |

**Personalización:**
```javascript
// En server.js, busca la sección CORS y modifica:
const allowedOrigins = [
  'http://localhost:5173',
  // Agrega aquí tu dominio de producción:
  'https://tu-dominio-real.com',
];
```

**Ejemplo real:**  
Si `https://sitio-malicioso.com` intenta hacer una petición a tu API, el navegador la bloqueará automáticamente porque ese dominio no está en tu lista de permitidos.

---

### 3. Helmet - Headers HTTP seguros

**¿Qué es?**  
Helmet configura automáticamente headers HTTP que protegen contra varios tipos de ataques.

**¿Por qué es importante?**  
Los headers HTTP le dicen al navegador cómo debe comportarse con tu sitio. Headers mal configurados pueden permitir ataques de clickjacking, inyección de código, o robo de datos.

**Headers configurados:**

| Header | Qué hace | Protege contra |
|--------|----------|----------------|
| **X-Frame-Options** | Previene que tu sitio se cargue en iframes | Clickjacking |
| **X-Content-Type-Options** | Evita que el navegador "adivine" tipos de archivo | MIME sniffing attacks |
| **Strict-Transport-Security (HSTS)** | Fuerza el uso de HTTPS | Man-in-the-middle attacks |
| **Content-Security-Policy (CSP)** | Define qué recursos puede cargar tu sitio | XSS, inyección de código |
| **X-XSS-Protection** | Activa el filtro XSS del navegador | Cross-Site Scripting |

**Content Security Policy (CSP):**  
El CSP es especialmente importante. Define exactamente qué recursos puede cargar tu sitio:

```javascript
contentSecurityPolicy: {
  directives: {
    defaultSrc: ["'self'"],           // Solo recursos de tu dominio
    scriptSrc: ["'self'", "https://cdn.emailjs.com"], // Scripts permitidos
    styleSrc: ["'self'", "'unsafe-inline'"],          // Estilos permitidos
    imgSrc: ["'self'", "data:", "https:"],            // Imágenes permitidas
    connectSrc: ["'self'", "https://api.emailjs.com"], // APIs permitidas
    frameSrc: ["'none'"],             // No permite iframes
  }
}
```

**Personalización:**  
Si necesitas agregar un nuevo servicio externo (por ejemplo, Google Analytics):

```javascript
scriptSrc: [
  "'self'", 
  "https://cdn.emailjs.com",
  "https://www.googletagmanager.com" // Nuevo servicio
],
```

---

### 4. Protección XSS (Cross-Site Scripting)

**¿Qué es?**  
XSS es cuando un atacante inyecta código JavaScript malicioso en tu sitio a través de formularios u otros inputs.

**¿Por qué es importante?**  
Imagina que alguien envía esto en tu formulario de contacto:
```html
<script>alert('Hackeado!');</script>
```

Sin protección XSS, ese código se ejecutaría en el navegador de quien vea el mensaje.

**¿Cómo lo prevenimos?**
1. **Librería `xss-clean`:** Limpia automáticamente todo HTML/JavaScript de los datos recibidos
2. **Sanitización manual:** Eliminamos caracteres peligrosos
3. **CSP:** El navegador bloquea scripts no autorizados

**Ejemplo:**
```javascript
// Entrada maliciosa:
const input = "<script>alert('XSS')</script>";

// Después de xss-clean:
const cleaned = "&lt;script&gt;alert('XSS')&lt;/script&gt;";
// Ahora es texto inofensivo, no código ejecutable
```

**En el código:**
```javascript
app.use(xss()); // Limpia automáticamente todos los inputs
```

---

### 5. Protección CSRF (Cross-Site Request Forgery)

**¿Qué es?**  
CSRF es cuando un sitio malicioso hace peticiones a tu servidor usando la sesión del usuario sin que este lo sepa.

**¿Por qué es importante?**  
Imagina que estás logueado en tu sitio. Visitas `sitio-malicioso.com` que tiene este código oculto:
```html
<form action="https://tu-sitio.com/api/delete-account" method="POST">
  <input type="submit" value="¡Gana un iPhone!">
</form>
```

Si haces clic, borrarías tu cuenta sin querer. CSRF previene esto.

**¿Cómo funciona?**
1. El servidor genera un token único y secreto
2. El frontend debe incluir ese token en cada petición POST/PUT/DELETE
3. El servidor valida que el token sea correcto

**Implementación:**

**Backend:**
```javascript
// Genera y valida tokens automáticamente
app.use(csrf({ cookie: true }));

// Endpoint para obtener el token
app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});
```

**Frontend (React):**
```javascript
// 1. Obtén el token al cargar la página
const [csrfToken, setCsrfToken] = useState('');

useEffect(() => {
  fetch('http://localhost:3001/api/csrf-token', {
    credentials: 'include'
  })
    .then(res => res.json())
    .then(data => setCsrfToken(data.csrfToken));
}, []);

// 2. Incluye el token en tus peticiones POST
const handleSubmit = async (formData) => {
  await fetch('http://localhost:3001/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken // ← Token incluido
    },
    credentials: 'include',
    body: JSON.stringify(formData)
  });
};
```

**Alternativa para sitios estáticos:**  
Si no usas sesiones, puedes usar cookies `SameSite=strict` como alternativa más simple:
```javascript
cookie: {
  sameSite: 'strict', // Solo permite cookies del mismo sitio
  secure: true,       // Solo HTTPS
  httpOnly: true      // No accesible desde JavaScript
}
```

---

### 6. Sanitización de datos

**¿Qué es?**  
Limpiar y validar todos los datos que recibe el servidor antes de procesarlos.

**¿Por qué es importante?**  
Los usuarios pueden enviar cualquier cosa. Debemos asegurarnos de que sea seguro y válido.

**Tipos de sanitización implementados:**

**a) NoSQL Injection:**
```javascript
// Entrada maliciosa:
{ "email": { "$gt": "" } } // Intenta obtener todos los emails

// Después de mongo-sanitize:
{ "email": "" } // Operadores $ eliminados
```

**b) Validación de formato:**
```javascript
// Email válido
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return res.status(400).json({ error: 'Email inválido' });
}
```

**c) Validación de longitud:**
```javascript
if (name.length > 100) {
  return res.status(400).json({ 
    error: 'El nombre no puede exceder 100 caracteres' 
  });
}
```

**d) Limpieza de espacios:**
```javascript
const sanitized = {
  name: name.trim(),              // Elimina espacios al inicio/final
  email: email.trim().toLowerCase(), // Normaliza a minúsculas
  message: message.trim()
};
```

**Implementación completa:**
```javascript
app.use(mongoSanitize()); // Previene inyecciones NoSQL
app.use(xss());           // Previene XSS
app.use(hpp());           // Previene contaminación de parámetros

// Validación manual adicional
const { name, email, message } = req.body;

if (!name || !email || !message) {
  return res.status(400).json({ error: 'Campos requeridos faltantes' });
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  return res.status(400).json({ error: 'Email inválido' });
}
```

---

### 7. HTTPS

**¿Qué es?**  
HTTPS encripta toda la comunicación entre el navegador y el servidor.

**¿Por qué es importante?**  
Sin HTTPS, cualquiera en la misma red WiFi puede ver y modificar los datos que envías (contraseñas, mensajes, etc.).

**Cómo implementarlo:**

**Desarrollo local:**  
No es necesario HTTPS en localhost, pero puedes usar `mkcert` si lo necesitas.

**Producción:**  
La mayoría de plataformas de hosting lo configuran automáticamente:

| Plataforma | HTTPS automático |
|------------|------------------|
| **Vercel** | ✅ Sí (gratis) |
| **Netlify** | ✅ Sí (gratis) |
| **GitHub Pages** | ✅ Sí (gratis) |
| **Heroku** | ✅ Sí (gratis) |

**Servidor propio:**  
Usa [Let's Encrypt](https://letsencrypt.org/) (certificados SSL gratuitos):

```bash
# Con Certbot (Ubuntu/Debian)
sudo apt-get install certbot
sudo certbot --nginx -d tu-dominio.com
```

**Forzar HTTPS:**
```javascript
// En producción, redirige HTTP a HTTPS
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}
```

---

## Configuración paso a paso

### 1. Instalar dependencias del servidor

```bash
cd server
npm install
```

Esto instalará:
- `express` - Framework web
- `helmet` - Headers de seguridad
- `cors` - Control de acceso entre orígenes
- `express-rate-limit` - Limitación de solicitudes
- `xss-clean` - Protección XSS
- `express-mongo-sanitize` - Protección contra inyecciones
- `hpp` - Protección contra contaminación de parámetros
- `csurf` - Protección CSRF
- `cookie-parser` - Manejo de cookies
- `dotenv` - Variables de entorno
- `nodemailer` - Envío de emails (opcional)

### 2. Configurar variables de entorno

```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita .env con tus valores reales
nano .env
```

Variables importantes:
```env
PORT=3001
NODE_ENV=development
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-app-password
SESSION_SECRET=genera-un-string-aleatorio-seguro
ALLOWED_ORIGINS=http://localhost:5173,https://tu-dominio.com
```

**Generar SESSION_SECRET seguro:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3. Iniciar el servidor

**Desarrollo:**
```bash
npm run dev  # Con nodemon (reinicia automáticamente)
```

**Producción:**
```bash
npm start
```

### 4. Integrar con el frontend

**Actualizar el componente de contacto:**

```javascript
// src/components/Contact.jsx
import { useState, useEffect } from 'react';

export default function Contact() {
  const [csrfToken, setCsrfToken] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Obtener token CSRF al cargar
  useEffect(() => {
    fetch('http://localhost:3001/api/csrf-token', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => setCsrfToken(data.csrfToken))
      .catch(err => console.error('Error obteniendo CSRF token:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert('Error al enviar el mensaje. Intenta más tarde.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      <textarea
        placeholder="Mensaje"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

---

## Personalización de seguridad

### Ajustar rate limiting según tus necesidades

```javascript
// Para un blog con comentarios (más permisivo)
const commentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 20,                   // 20 comentarios por 15 min
});

// Para login (muy restrictivo)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5,                    // Solo 5 intentos
  skipSuccessfulRequests: true, // No cuenta logins exitosos
});

// Para descargas (moderado)
const downloadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 10,                   // 10 descargas por hora
});
```

### Configurar CORS para múltiples entornos

```javascript
const allowedOrigins = 
  process.env.NODE_ENV === 'production'
    ? [
        'https://tu-dominio.com',
        'https://www.tu-dominio.com'
      ]
    : [
        'http://localhost:5173',
        'http://localhost:3000',
        'http://127.0.0.1:5173'
      ];
```

### Personalizar Content Security Policy

```javascript
// Si usas Google Fonts y Google Analytics
contentSecurityPolicy: {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com"
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      "https://fonts.googleapis.com"
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    imgSrc: [
      "'self'",
      "data:",
      "https:",
      "https://www.google-analytics.com"
    ],
    connectSrc: [
      "'self'",
      "https://www.google-analytics.com"
    ]
  }
}
```

---

## Mejores prácticas generales

### 1. Mantén las dependencias actualizadas

```bash
# Revisa vulnerabilidades
npm audit

# Corrige automáticamente (si es posible)
npm audit fix

# Actualiza dependencias
npm update
```

**Automatización:**  
Configura [Dependabot](https://github.com/dependabot) en GitHub para recibir PRs automáticos con actualizaciones de seguridad.

### 2. No expongas secretos en el frontend

❌ **MAL:**
```javascript
// ¡NUNCA hagas esto!
const API_KEY = 'sk_live_123456789';
fetch(`https://api.service.com?key=${API_KEY}`);
```

✅ **BIEN:**
```javascript
// El frontend hace peticiones a tu backend
fetch('http://localhost:3001/api/send-email', {
  method: 'POST',
  body: JSON.stringify(data)
});

// El backend usa la API key de forma segura
// (desde variables de entorno)
```

### 3. Usa variables de entorno

**Archivo `.env` (nunca lo subas a Git):**
```env
EMAIL_API_KEY=tu-clave-secreta
DATABASE_URL=postgresql://user:pass@host/db
JWT_SECRET=otro-secreto-muy-largo
```

**En el código:**
```javascript
const apiKey = process.env.EMAIL_API_KEY;
```

**En producción (Vercel/Netlify):**  
Configura las variables en el panel de tu plataforma, no uses archivo `.env`.

### 4. Implementa logging y monitoreo

```javascript
// Loguea accesos sospechosos
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - IP: ${req.ip}`);
  next();
});

// Usa Winston para logs profesionales
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

**Servicios recomendados:**
- [Sentry](https://sentry.io/) - Tracking de errores
- [LogRocket](https://logrocket.com/) - Sesiones de usuario
- [Datadog](https://www.datadoghq.com/) - Monitoreo completo

### 5. Implementa backups

Si guardas datos importantes:
```bash
# Backup automático diario (cron job)
0 2 * * * /usr/bin/backup-script.sh
```

### 6. Revisa logs regularmente

Busca patrones sospechosos:
- Muchas peticiones 429 (rate limit) de la misma IP
- Intentos de acceso a rutas que no existen
- Errores 400/403 repetidos
- Peticiones con payloads muy grandes

### 7. Principio de mínimo privilegio

Solo da los permisos mínimos necesarios:
```javascript
// ❌ MAL: Usuario con acceso total a la base de datos
const dbUser = 'admin';

// ✅ BIEN: Usuario con permisos limitados
const dbUser = 'app_readonly'; // Solo lectura para la app
```

### 8. Validación en frontend Y backend

```javascript
// Frontend: Mejora UX (feedback inmediato)
if (!email.includes('@')) {
  alert('Email inválido');
  return;
}

// Backend: Seguridad real (nunca confíes en el frontend)
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  return res.status(400).json({ error: 'Email inválido' });
}
```

### 9. Usa HTTPS siempre en producción

```javascript
// Redirige HTTP a HTTPS
if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
  return res.redirect('https://' + req.headers.host + req.url);
}
```

### 10. Implementa autenticación segura (si la necesitas)

```javascript
// Usa bcrypt para hashear contraseñas
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);

// Usa JWT para tokens de sesión
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
  expiresIn: '1h'
});
```

---

## Preguntas frecuentes

### ¿Necesito todas estas medidas si mi sitio es estático?

Si tu sitio es 100% estático (solo HTML/CSS/JS sin formularios ni backend), no necesitas el servidor Express. Pero si tienes:
- Formulario de contacto
- Sistema de comentarios
- Login/registro
- Cualquier funcionalidad que envíe datos

Entonces **SÍ necesitas estas medidas de seguridad**.

### ¿Qué pasa si no implemento rate limiting?

Alguien podría:
- Enviar miles de mensajes de spam a tu email
- Saturar tu servidor con peticiones (ataque DoS)
- Hacer scraping masivo de tu contenido
- Intentar adivinar contraseñas con fuerza bruta

### ¿CORS es necesario si solo tengo un dominio?

Sí. CORS previene que otros sitios maliciosos hagan peticiones a tu API usando el navegador de tus visitantes. Aunque solo tengas un dominio, debes configurar CORS para permitir solo ese dominio.

### ¿Cómo sé si estoy siendo atacado?

Señales de alerta:
- Muchas peticiones 429 (rate limit exceeded)
- Tráfico inusualmente alto desde una IP
- Errores 400/403 en masa
- Intentos de acceso a rutas inexistentes (`/admin`, `/wp-admin`, etc.)
- Payloads con código sospechoso en los logs

### ¿Qué hago si detecto un ataque?

1. **Bloquea la IP** temporalmente
2. **Revisa los logs** para entender el patrón
3. **Ajusta el rate limiting** si es necesario
4. **Reporta** si es un ataque serio (a tu hosting, CloudFlare, etc.)

### ¿Debo usar CloudFlare u otro CDN?

CloudFlare ofrece protección adicional gratuita:
- DDoS protection
- Web Application Firewall (WAF)
- Rate limiting a nivel de red
- SSL/TLS automático

Es altamente recomendado para sitios en producción.

### ¿Cómo pruebo que la seguridad funciona?

```bash
# Prueba rate limiting (envía muchas peticiones)
for i in {1..10}; do curl http://localhost:3001/api/contact -X POST; done

# Prueba CORS (desde un origen no permitido)
curl -H "Origin: http://sitio-malicioso.com" http://localhost:3001/api/contact

# Prueba XSS (intenta inyectar código)
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"<script>alert(1)</script>","email":"test@test.com","message":"test"}'
```

### ¿Necesito conocimientos avanzados para implementar esto?

No. El código ya está listo para usar. Solo necesitas:
1. Copiar los archivos
2. Instalar dependencias (`npm install`)
3. Configurar variables de entorno (`.env`)
4. Iniciar el servidor (`npm start`)

Si no entiendes todos los conceptos aún, **no te preocupes**. Lo importante es ir practicando e investigando poco a poco. La seguridad es un proceso continuo de aprendizaje.

### ¿Dónde puedo aprender más?

**Recursos recomendados:**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Los 10 riesgos de seguridad más críticos
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security) - Guías de seguridad web
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)

**Herramientas útiles:**
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) - Escanea vulnerabilidades
- [Snyk](https://snyk.io/) - Monitoreo continuo de seguridad
- [OWASP ZAP](https://www.zaproxy.org/) - Escáner de vulnerabilidades
- [SSL Labs](https://www.ssllabs.com/ssltest/) - Prueba tu configuración SSL

---

## Resumen rápido

✅ **Implementado:**
- ✓ Rate Limiting (previene spam y DoS)
- ✓ CORS (controla acceso entre dominios)
- ✓ Helmet (headers HTTP seguros)
- ✓ XSS Protection (previene inyección de código)
- ✓ CSRF Protection (previene peticiones falsificadas)
- ✓ Data Sanitization (limpia inputs maliciosos)
- ✓ HTTPS ready (configuración para SSL/TLS)

🔧 **Próximos pasos:**
1. Instala dependencias: `cd server && npm install`
2. Configura `.env` con tus credenciales
3. Inicia el servidor: `npm run dev`
4. Integra con tu frontend React
5. Prueba en local antes de desplegar
6. Configura HTTPS en producción
7. Monitorea logs regularmente

🎯 **Recuerda:**
- La seguridad es un proceso continuo, no un estado final
- Mantén dependencias actualizadas
- Revisa logs regularmente
- Aprende poco a poco, no necesitas saberlo todo de inmediato
- Cuando tengas dudas, investiga y pregunta

---

**¿Necesitas ayuda?**  
Si encuentras problemas o tienes preguntas, revisa los logs del servidor, busca el error específico en Google, o consulta la documentación de las librerías utilizadas.

¡Buena suerte con tu portafolio seguro! 🔐✨
