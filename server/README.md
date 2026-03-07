# 🔐 Servidor Express Seguro

Este servidor proporciona un backend seguro para el portafolio personal, implementando múltiples capas de protección contra ataques comunes.

## 🚀 Inicio rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita .env con tus credenciales
```

Variables requeridas:
- `PORT`: Puerto del servidor (por defecto 3001)
- `NODE_ENV`: Entorno (development/production)
- `SESSION_SECRET`: Secret para cookies (genera uno aleatorio)
- `ALLOWED_ORIGINS`: Dominios permitidos para CORS

### 3. Generar SESSION_SECRET seguro

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copia el resultado y pégalo en `.env`:
```env
SESSION_SECRET=el-string-generado-aqui
```

### 4. Iniciar el servidor

**Desarrollo (con auto-reload):**
```bash
npm run dev
```

**Producción:**
```bash
npm start
```

El servidor estará disponible en `http://localhost:3001`

## 📡 Endpoints disponibles

### GET `/api/health`
Health check del servidor.

**Respuesta:**
```json
{
  "status": "ok",
  "message": "Servidor funcionando correctamente"
}
```

### GET `/api/csrf-token`
Obtiene el token CSRF necesario para hacer peticiones POST.

**Respuesta:**
```json
{
  "csrfToken": "token-generado-aqui"
}
```

### POST `/api/contact`
Envía un mensaje de contacto.

**Headers requeridos:**
- `Content-Type: application/json`
- `X-CSRF-Token: [token obtenido del endpoint anterior]`

**Body:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "message": "Hola, me gustaría contactarte..."
}
```

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente. Te responderé pronto!"
}
```

**Errores posibles:**
- `400`: Datos inválidos (campos faltantes, email inválido, etc.)
- `403`: Token CSRF inválido o dominio no permitido (CORS)
- `429`: Rate limit excedido (demasiadas peticiones)
- `500`: Error interno del servidor

## 🔒 Medidas de seguridad implementadas

### 1. Rate Limiting
Limita las solicitudes por IP para prevenir spam y ataques DoS.

**Configuración actual:**
- API general: 100 solicitudes por 15 minutos
- Formulario de contacto: 5 mensajes por hora

**Personalizar:**
```javascript
// En server.js, busca la sección RATE LIMITING
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // Cambia la ventana de tiempo
  max: 5,                    // Cambia el máximo de solicitudes
});
```

### 2. CORS
Controla qué dominios pueden hacer peticiones al servidor.

**Configuración:**
```javascript
// En server.js, busca la sección CORS
const allowedOrigins = [
  'http://localhost:5173',
  // Agrega aquí tu dominio de producción
];
```

### 3. Helmet
Configura headers HTTP seguros automáticamente:
- Content Security Policy (CSP)
- X-Frame-Options (previene clickjacking)
- X-Content-Type-Options (previene MIME sniffing)
- Strict-Transport-Security (fuerza HTTPS)

### 4. CSRF Protection
Previene ataques de falsificación de peticiones entre sitios.

**Cómo funciona:**
1. El cliente obtiene un token del endpoint `/api/csrf-token`
2. Incluye ese token en el header `X-CSRF-Token` de cada petición POST
3. El servidor valida que el token sea correcto

### 5. Data Sanitization
Limpia automáticamente los datos de entrada para prevenir:
- XSS (Cross-Site Scripting)
- NoSQL Injection
- HTTP Parameter Pollution

### 6. Input Validation
Valida todos los datos recibidos:
- Campos requeridos
- Formato de email
- Longitud de campos
- Tipos de datos

## 🛠️ Configuración de email

### Opción 1: Nodemailer (recomendado para producción)

1. **Instala Nodemailer** (ya incluido en package.json):
```bash
npm install nodemailer
```

2. **Configura variables de entorno:**
```env
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-app-password
EMAIL_TO=destino@gmail.com
```

3. **Obtén App Password de Gmail:**
   - Ve a tu cuenta de Google → Seguridad
   - Activa verificación en 2 pasos
   - Busca "Contraseñas de aplicaciones"
   - Genera una nueva para "Correo"
   - Usa esa contraseña en `EMAIL_PASS`

4. **Descomenta el código de Nodemailer en server.js:**
```javascript
// Busca la sección "AQUÍ INTEGRARÍAS TU SERVICIO DE EMAIL"
// y descomenta el código de ejemplo
```

### Opción 2: EmailJS (más simple, pero menos seguro)

Si prefieres seguir usando EmailJS desde el frontend, puedes hacerlo, pero ten en cuenta que es menos seguro porque las claves están expuestas en el código del cliente.

## 🌍 Despliegue en producción

### Vercel

1. **Instala Vercel CLI:**
```bash
npm i -g vercel
```

2. **Despliega:**
```bash
vercel
```

3. **Configura variables de entorno en Vercel:**
   - Ve a tu proyecto en vercel.com
   - Settings → Environment Variables
   - Agrega todas las variables de `.env`

### Heroku

1. **Crea un Procfile:**
```
web: node server.js
```

2. **Despliega:**
```bash
heroku create tu-app-name
git push heroku main
```

3. **Configura variables de entorno:**
```bash
heroku config:set SESSION_SECRET=tu-secret
heroku config:set ALLOWED_ORIGINS=https://tu-dominio.com
```

### Railway

1. **Conecta tu repositorio en railway.app**

2. **Configura variables de entorno en el dashboard**

3. **Railway detectará automáticamente el servidor Express**

## 🧪 Testing

### Prueba el servidor localmente

```bash
# Health check
curl http://localhost:3001/api/health

# Obtener token CSRF
curl http://localhost:3001/api/csrf-token

# Enviar mensaje de contacto (necesitas el token CSRF)
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -H "X-CSRF-Token: tu-token-aqui" \
  -d '{"name":"Test","email":"test@test.com","message":"Mensaje de prueba"}'
```

### Prueba rate limiting

```bash
# Envía múltiples peticiones rápidamente
for i in {1..10}; do
  curl http://localhost:3001/api/contact -X POST
  echo ""
done

# Deberías ver errores 429 después de 5 intentos
```

### Prueba CORS

```bash
# Petición desde origen no permitido
curl -H "Origin: http://sitio-malicioso.com" \
  http://localhost:3001/api/contact

# Debería ser bloqueada
```

## 📊 Logs y monitoreo

### Ver logs en desarrollo

Los logs se muestran automáticamente en la consola.

### Logs en producción

Implementa un servicio de logging profesional:

**Winston (recomendado):**
```bash
npm install winston
```

**Sentry (tracking de errores):**
```bash
npm install @sentry/node
```

## 🔧 Troubleshooting

### Error: "EBADCSRFTOKEN"
**Causa:** Token CSRF inválido o expirado.  
**Solución:** Recarga la página para obtener un nuevo token.

### Error: "No permitido por CORS"
**Causa:** Tu dominio no está en la lista de orígenes permitidos.  
**Solución:** Agrega tu dominio a `allowedOrigins` en server.js.

### Error: "Too many requests"
**Causa:** Rate limit excedido.  
**Solución:** Espera el tiempo indicado o ajusta los límites en server.js.

### El servidor no inicia
**Causa:** Puerto ya en uso.  
**Solución:** Cambia el puerto en `.env` o mata el proceso:
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID [PID] /F

# Linux/Mac
lsof -ti:3001 | xargs kill
```

## 📚 Recursos adicionales

- [Documentación completa de seguridad](../SEGURIDAD.md)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa los logs del servidor
2. Consulta la sección de Troubleshooting
3. Lee la documentación completa en SEGURIDAD.md
4. Busca el error específico en Google/Stack Overflow

---

**¡Tu servidor está listo para proteger tu portafolio! 🔐✨**
