import { useState, useEffect } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * FORMULARIO DE CONTACTO SEGURO
 * 
 * Este componente implementa un formulario de contacto con todas las
 * medidas de seguridad necesarias para proteger contra ataques comunes.
 * 
 * Características de seguridad:
 * - Obtiene y usa token CSRF para prevenir ataques CSRF
 * - Valida datos en el frontend (UX) y backend (seguridad)
 * - Maneja rate limiting (muestra mensajes claros al usuario)
 * - Sanitiza datos antes de enviar
 * - Usa HTTPS en producción
 */

export default function ContactFormSecure() {
  const { t } = useI18n();
  
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Estado de la UI
  const [csrfToken, setCsrfToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // URL del servidor (cambia según el entorno)
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  /**
   * PASO 1: Obtener token CSRF al cargar el componente
   * 
   * El token CSRF es necesario para que el servidor valide que la
   * petición viene realmente de tu sitio y no de un sitio malicioso.
   */
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch(`${API_URL}/api/csrf-token`, {
          method: 'GET',
          credentials: 'include', // Importante: incluye cookies
        });

        if (response.ok) {
          const data = await response.json();
          setCsrfToken(data.csrfToken);
        } else {
          console.error('Error obteniendo token CSRF');
        }
      } catch (err) {
        console.error('Error de red al obtener token CSRF:', err);
      }
    };

    fetchCsrfToken();
  }, [API_URL]);

  /**
   * VALIDACIÓN EN EL FRONTEND
   * 
   * Esto mejora la experiencia del usuario dando feedback inmediato,
   * pero NO es suficiente para seguridad (siempre valida en el backend también).
   */
  const validateForm = () => {
    // Validar nombre
    if (!formData.name.trim()) {
      setError('El nombre es requerido');
      return false;
    }

    if (formData.name.length > 100) {
      setError('El nombre no puede exceder 100 caracteres');
      return false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      setError('El email es requerido');
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      setError('El formato del email no es válido');
      return false;
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      setError('El mensaje es requerido');
      return false;
    }

    if (formData.message.length > 1000) {
      setError('El mensaje no puede exceder 1000 caracteres');
      return false;
    }

    return true;
  };

  /**
   * MANEJO DEL ENVÍO DEL FORMULARIO
   * 
   * Pasos:
   * 1. Validar datos en el frontend
   * 2. Enviar petición con token CSRF
   * 3. Manejar respuesta (éxito o error)
   * 4. Mostrar feedback al usuario
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Limpiar mensajes previos
    setError('');
    setSuccess('');

    // Validar formulario
    if (!validateForm()) {
      return;
    }

    // Verificar que tenemos el token CSRF
    if (!csrfToken) {
      setError('Error de seguridad. Por favor recarga la página.');
      return;
    }

    setLoading(true);

    try {
      /**
       * PETICIÓN AL SERVIDOR
       * 
       * Headers importantes:
       * - Content-Type: Le dice al servidor que enviamos JSON
       * - X-CSRF-Token: Token de seguridad para validar la petición
       * 
       * credentials: 'include' es necesario para enviar cookies
       */
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken, // Token CSRF requerido
        },
        credentials: 'include', // Incluye cookies (necesario para CSRF)
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      /**
       * MANEJO DE RESPUESTAS
       */
      if (response.ok) {
        // Éxito
        setSuccess(data.message || '¡Mensaje enviado correctamente!');
        setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
      } else if (response.status === 429) {
        // Rate limit excedido
        setError(
          data.error || 
          'Has enviado demasiados mensajes. Por favor espera un momento antes de intentar nuevamente.'
        );
      } else if (response.status === 403) {
        // Error CSRF
        setError('Error de seguridad. Por favor recarga la página e intenta nuevamente.');
      } else {
        // Otro error
        setError(data.error || 'Hubo un error al enviar el mensaje. Por favor intenta más tarde.');
      }
    } catch (err) {
      // Error de red
      console.error('Error de red:', err);
      setError('Error de conexión. Verifica tu internet e intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * MANEJO DE CAMBIOS EN LOS INPUTS
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar errores cuando el usuario empieza a escribir
    if (error) setError('');
  };

  return (
    <section id="contacto" className="relative py-24 bg-primary">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent">
            {t('contact.tag') || 'Contacto'}
          </span>
          <h2 className="mt-4 text-4xl font-black text-foreground md:text-5xl">
            {t('contact.title') || 'Envíame un mensaje'}
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            {t('contact.subtitle') || 'Responderé lo antes posible'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo: Nombre */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-bold text-foreground mb-2"
            >
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              maxLength={100}
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border-2 border-accent/20 bg-white text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Tu nombre completo"
            />
            <p className="mt-1 text-xs text-foreground/50">
              {formData.name.length}/100 caracteres
            </p>
          </div>

          {/* Campo: Email */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-bold text-foreground mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border-2 border-accent/20 bg-white text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="tu@email.com"
            />
          </div>

          {/* Campo: Mensaje */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-bold text-foreground mb-2"
            >
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={1000}
              rows={6}
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border-2 border-accent/20 bg-white text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Escribe tu mensaje aquí..."
            />
            <p className="mt-1 text-xs text-foreground/50">
              {formData.message.length}/1000 caracteres
            </p>
          </div>

          {/* Mensajes de error/éxito */}
          {error && (
            <div className="p-4 rounded-lg bg-red-50 border-2 border-red-200">
              <p className="text-sm font-medium text-red-800">❌ {error}</p>
            </div>
          )}

          {success && (
            <div className="p-4 rounded-lg bg-green-50 border-2 border-green-200">
              <p className="text-sm font-medium text-green-800">✅ {success}</p>
            </div>
          )}

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={loading || !csrfToken}
            className="w-full px-8 py-4 rounded-full bg-accent text-white font-bold uppercase tracking-[0.2em] shadow-clean transition-all duration-300 hover:-translate-y-1 hover:shadow-clean-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {loading ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {/* Nota de seguridad */}
          <p className="text-xs text-center text-foreground/50">
            🔒 Este formulario está protegido contra spam y ataques mediante rate limiting, 
            CSRF protection y validación de datos.
          </p>
        </form>
      </div>
    </section>
  );
}

/**
 * NOTAS IMPORTANTES:
 * 
 * 1. VARIABLES DE ENTORNO:
 *    Crea un archivo .env en la raíz del proyecto con:
 *    VITE_API_URL=http://localhost:3001
 * 
 *    En producción:
 *    VITE_API_URL=https://tu-api.com
 * 
 * 2. CORS:
 *    Asegúrate de que el servidor tenga configurado CORS para permitir
 *    peticiones desde tu dominio frontend.
 * 
 * 3. HTTPS:
 *    En producción, SIEMPRE usa HTTPS. La mayoría de plataformas
 *    (Vercel, Netlify) lo configuran automáticamente.
 * 
 * 4. RATE LIMITING:
 *    El servidor limita a 5 mensajes por hora por IP. Si el usuario
 *    excede este límite, recibirá un error 429.
 * 
 * 5. TESTING:
 *    Prueba el formulario localmente antes de desplegar:
 *    - Inicia el servidor: cd server && npm run dev
 *    - Inicia el frontend: npm run dev
 *    - Prueba enviar mensajes válidos e inválidos
 * 
 * 6. PERSONALIZACIÓN:
 *    - Ajusta los estilos según tu diseño
 *    - Modifica los mensajes de error/éxito
 *    - Cambia los límites de caracteres si es necesario
 *    - Agrega más campos si lo requieres (teléfono, asunto, etc.)
 */
