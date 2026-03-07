/**
 * SERVIDOR EXPRESS CON MEDIDAS DE SEGURIDAD
 * 
 * Este servidor maneja el formulario de contacto del portafolio con múltiples
 * capas de seguridad para proteger contra ataques comunes.
 * 
 * Medidas implementadas:
 * - Rate Limiting: Limita solicitudes por IP para evitar spam y ataques DoS
 * - CORS: Controla qué dominios pueden hacer peticiones a la API
 * - Helmet: Configura headers HTTP seguros
 * - Validación y sanitización: Limpia datos de entrada para prevenir XSS
 * - CSRF Protection: Protege contra ataques de falsificación de peticiones
 */

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// ============================================================================
// 1. HELMET - SEGURIDAD EN HEADERS HTTP
// ============================================================================
/**
 * Helmet configura automáticamente varios headers de seguridad HTTP:
 * - X-DNS-Prefetch-Control: Controla el prefetch de DNS del navegador
 * - X-Frame-Options: Previene clickjacking (evita que tu sitio se cargue en iframes)
 * - X-Content-Type-Options: Previene MIME type sniffing
 * - Strict-Transport-Security: Fuerza HTTPS (solo en producción)
 * - X-Download-Options: Previene descargas automáticas en IE
 * - X-Permitted-Cross-Domain-Policies: Controla políticas de Adobe Flash/PDF
 */
app.use(
  helmet({
    // Content Security Policy - Define qué recursos puede cargar tu sitio
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"], // Solo permite recursos del mismo origen por defecto
        scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.emailjs.com"], // Scripts permitidos
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"], // Estilos permitidos
        fontSrc: ["'self'", "https://fonts.gstatic.com"], // Fuentes permitidas
        imgSrc: ["'self'", "data:", "https:"], // Imágenes permitidas
        connectSrc: ["'self'", "https://api.emailjs.com"], // APIs permitidas
        frameSrc: ["'none'"], // No permite iframes
        objectSrc: ["'none'"], // No permite plugins (Flash, etc.)
      },
    },
    // HSTS - Fuerza HTTPS por 1 año (solo en producción)
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
  })
);

// ============================================================================
// 2. CORS - CONTROL DE ACCESO ENTRE ORÍGENES
// ============================================================================
/**
 * CORS (Cross-Origin Resource Sharing) controla qué dominios externos
 * pueden hacer peticiones a tu API. Esto previene que sitios maliciosos
 * hagan peticiones no autorizadas desde el navegador del usuario.
 * 
 * IMPORTANTE: Ajusta 'origin' según tu entorno:
 * - Desarrollo local: 'http://localhost:5173' (puerto de Vite)
 * - Producción: 'https://tu-dominio.com' (tu dominio real)
 */
const corsOptions = {
  // Lista de orígenes permitidos (dominios que pueden hacer peticiones)
  origin: function (origin, callback) {
    // Dominios permitidos - PERSONALIZA ESTO según tu despliegue
    const allowedOrigins = [
      'http://localhost:5173', // Vite dev server
      'http://localhost:3000', // Alternativa común
      'http://127.0.0.1:5173',
      // Agrega aquí tu dominio de producción cuando lo tengas:
      // 'https://tu-portafolio.com',
      // 'https://www.tu-portafolio.com',
    ];

    // Permite peticiones sin origin (como Postman, curl, o apps móviles)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); // Origen permitido
    } else {
      callback(new Error('No permitido por CORS - dominio no autorizado'));
    }
  },
  credentials: true, // Permite cookies y headers de autenticación
  optionsSuccessStatus: 200, // Para navegadores antiguos
  methods: ['GET', 'POST'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'], // Headers permitidos
};

app.use(cors(corsOptions));

// ============================================================================
// 3. PARSEO DE DATOS
// ============================================================================
// Parsea JSON en el body de las peticiones (límite de 10kb para evitar payloads enormes)
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser()); // Necesario para CSRF tokens

// ============================================================================
// 4. SANITIZACIÓN DE DATOS - PREVENCIÓN DE INYECCIONES
// ============================================================================
/**
 * Estas librerías limpian automáticamente los datos de entrada para prevenir:
 * - NoSQL Injection: Elimina operadores de MongoDB ($gt, $ne, etc.)
 * - XSS (Cross-Site Scripting): Elimina código HTML/JavaScript malicioso
 * - HPP (HTTP Parameter Pollution): Previene parámetros duplicados
 */
app.use(mongoSanitize()); // Previene inyecciones NoSQL
app.use(xss()); // Previene XSS limpiando HTML/JS malicioso
app.use(hpp()); // Previene contaminación de parámetros HTTP

// ============================================================================
// 5. RATE LIMITING - LÍMITE DE SOLICITUDES
// ============================================================================
/**
 * El rate limiting previene:
 * - Ataques de fuerza bruta (intentos masivos de login/contacto)
 * - Ataques DoS/DDoS (saturación del servidor)
 * - Spam en formularios de contacto
 * - Scraping abusivo
 * 
 * Funciona contando las solicitudes por IP en una ventana de tiempo.
 * Si se excede el límite, se bloquea temporalmente esa IP.
 */

// Rate limiter general para toda la API
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Ventana de 15 minutos
  max: 100, // Máximo 100 solicitudes por IP en esa ventana
  message: {
    error: 'Demasiadas solicitudes desde esta IP, por favor intenta de nuevo en 15 minutos.',
  },
  standardHeaders: true, // Retorna info del rate limit en headers `RateLimit-*`
  legacyHeaders: false, // Deshabilita headers `X-RateLimit-*` antiguos
  // Puedes personalizar la función que identifica al cliente:
  // keyGenerator: (req) => req.ip, // Por defecto usa la IP
});

// Rate limiter estricto para el formulario de contacto
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // Ventana de 1 hora
  max: 5, // Máximo 5 mensajes por IP por hora
  message: {
    error: 'Has enviado demasiados mensajes. Por favor espera 1 hora antes de intentar nuevamente.',
  },
  skipSuccessfulRequests: false, // Cuenta todas las peticiones, incluso exitosas
  skipFailedRequests: false, // También cuenta las fallidas
});

/**
 * CÓMO PERSONALIZAR EL RATE LIMITING:
 * 
 * Para ajustar los límites según tus necesidades:
 * 
 * 1. windowMs: Ventana de tiempo en milisegundos
 *    - 1 minuto: 60 * 1000
 *    - 15 minutos: 15 * 60 * 1000
 *    - 1 hora: 60 * 60 * 1000
 *    - 1 día: 24 * 60 * 60 * 1000
 * 
 * 2. max: Número máximo de solicitudes permitidas
 *    - Para APIs públicas: 100-1000 por 15 min
 *    - Para formularios de contacto: 3-10 por hora
 *    - Para login: 5-10 por 15 min
 * 
 * 3. Puedes crear diferentes limiters para diferentes rutas:
 *    const strictLimiter = rateLimit({ windowMs: 60000, max: 3 });
 *    app.use('/api/auth/login', strictLimiter);
 */

// Aplica el rate limiter general a todas las rutas
app.use('/api/', generalLimiter);

// ============================================================================
// 6. PROTECCIÓN CSRF (Cross-Site Request Forgery)
// ============================================================================
/**
 * CSRF previene que sitios maliciosos hagan peticiones en nombre del usuario.
 * 
 * Funciona así:
 * 1. El servidor genera un token único por sesión
 * 2. El frontend debe incluir este token en cada petición POST/PUT/DELETE
 * 3. El servidor valida que el token sea correcto
 * 
 * NOTA: Para sitios estáticos sin sesiones, puedes usar SameSite cookies
 * o validación de origen (origin header) como alternativa.
 */
const csrfProtection = csrf({
  cookie: {
    httpOnly: true, // No accesible desde JavaScript (previene XSS)
    secure: process.env.NODE_ENV === 'production', // Solo HTTPS en producción
    sameSite: 'strict', // Solo permite cookies del mismo sitio
  },
});

// Endpoint para obtener el token CSRF
app.get('/api/csrf-token', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// ============================================================================
// 7. RUTAS DE LA API
// ============================================================================

// Ruta de health check (sin rate limiting estricto)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando correctamente' });
});

/**
 * RUTA DE CONTACTO CON VALIDACIÓN Y SANITIZACIÓN
 * 
 * Esta ruta maneja el formulario de contacto con múltiples validaciones:
 * - Rate limiting (máximo 5 mensajes por hora)
 * - CSRF protection (token válido requerido)
 * - Validación de campos (nombre, email, mensaje)
 * - Sanitización automática (XSS, NoSQL injection)
 */
app.post('/api/contact', contactLimiter, csrfProtection, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validación básica de campos requeridos
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Todos los campos son requeridos (nombre, email, mensaje)',
      });
    }

    // Validación de longitud para prevenir payloads enormes
    if (name.length > 100) {
      return res.status(400).json({
        error: 'El nombre no puede exceder 100 caracteres',
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        error: 'El mensaje no puede exceder 1000 caracteres',
      });
    }

    // Validación de formato de email con regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'El formato del email no es válido',
      });
    }

    // Sanitización adicional manual (aunque xss-clean ya lo hace)
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    };

    /**
     * AQUÍ INTEGRARÍAS TU SERVICIO DE EMAIL
     * 
     * Opciones:
     * 1. EmailJS (cliente - ya lo tienes configurado)
     * 2. Nodemailer (servidor - más seguro)
     * 3. SendGrid, Mailgun, etc.
     * 
     * Ejemplo con Nodemailer:
     * 
     * const transporter = nodemailer.createTransport({
     *   service: 'gmail',
     *   auth: {
     *     user: process.env.EMAIL_USER,
     *     pass: process.env.EMAIL_PASS, // Usa App Password, no tu contraseña real
     *   },
     * });
     * 
     * await transporter.sendMail({
     *   from: process.env.EMAIL_USER,
     *   to: 'tu-email@gmail.com',
     *   subject: `Contacto de ${sanitizedData.name}`,
     *   text: sanitizedData.message,
     *   replyTo: sanitizedData.email,
     * });
     */

    // Por ahora solo logueamos (reemplaza con tu lógica de envío)
    console.log('📧 Mensaje de contacto recibido:', sanitizedData);

    // Respuesta exitosa
    res.status(200).json({
      success: true,
      message: 'Mensaje enviado correctamente. Te responderé pronto!',
    });
  } catch (error) {
    console.error('❌ Error en /api/contact:', error);

    // No expongas detalles del error al cliente (seguridad)
    res.status(500).json({
      error: 'Hubo un error al enviar el mensaje. Por favor intenta más tarde.',
    });
  }
});

// ============================================================================
// 8. MANEJO DE ERRORES
// ============================================================================

// Manejo de errores CSRF
app.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json({
      error: 'Token de seguridad inválido. Por favor recarga la página.',
    });
  }
  next(err);
});

// Manejo de errores CORS
app.use((err, req, res, next) => {
  if (err.message.includes('CORS')) {
    return res.status(403).json({
      error: 'Acceso no permitido desde este origen',
    });
  }
  next(err);
});

// Manejo general de errores
app.use((err, req, res, next) => {
  console.error('❌ Error no manejado:', err);
  res.status(500).json({
    error: 'Error interno del servidor',
  });
});

// Ruta 404 para rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
  });
});

// ============================================================================
// 9. INICIO DEL SERVIDOR
// ============================================================================
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║  🚀 Servidor Express iniciado correctamente                ║
║                                                            ║
║  📡 Puerto: ${PORT}                                       ║
║  🌍 Entorno: ${process.env.NODE_ENV || 'development'}     ║
║  🔒 Seguridad: ACTIVADA                                    ║
║     ✓ Rate Limiting                                        ║
║     ✓ CORS                                                 ║
║     ✓ Helmet (Headers seguros)                            ║
║     ✓ XSS Protection                                       ║
║     ✓ CSRF Protection                                      ║
║     ✓ Data Sanitization                                    ║
║                                                            ║
║  📝 Endpoints disponibles:                                 ║
║     GET  /api/health       - Health check                  ║
║     GET  /api/csrf-token   - Obtener token CSRF            ║
║     POST /api/contact      - Formulario de contacto        ║
╚════════════════════════════════════════════════════════════╝
  `);
});

/**
 * NOTAS IMPORTANTES DE SEGURIDAD:
 * 
 * 1. VARIABLES DE ENTORNO (.env):
 *    - Nunca subas el archivo .env a Git
 *    - Usa variables para datos sensibles (API keys, passwords, etc.)
 *    - Ejemplo: EMAIL_USER, EMAIL_PASS, JWT_SECRET
 * 
 * 2. HTTPS EN PRODUCCIÓN:
 *    - Siempre usa HTTPS en producción (Let's Encrypt es gratis)
 *    - Configura redirección automática de HTTP a HTTPS
 *    - Vercel, Netlify y otros servicios lo hacen automáticamente
 * 
 * 3. ACTUALIZACIONES:
 *    - Mantén las dependencias actualizadas: npm audit fix
 *    - Revisa vulnerabilidades: npm audit
 *    - Usa Dependabot o Snyk para alertas automáticas
 * 
 * 4. LOGS Y MONITOREO:
 *    - Implementa logging profesional (Winston, Pino)
 *    - Monitorea accesos sospechosos (muchas peticiones fallidas)
 *    - Usa servicios como Sentry para tracking de errores
 * 
 * 5. BACKUP Y RECUPERACIÓN:
 *    - Haz backups regulares si guardas datos
 *    - Ten un plan de recuperación ante desastres
 * 
 * Si tienes dudas sobre algún concepto, investiga poco a poco.
 * La seguridad es un proceso continuo de aprendizaje! 🔐
 */
