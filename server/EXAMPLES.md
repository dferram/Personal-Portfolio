# 📝 Ejemplos de Uso del Servidor Seguro

Esta guía contiene ejemplos prácticos de cómo usar el servidor y sus endpoints.

---

## 🔌 Ejemplos de peticiones

### 1. Health Check

Verifica que el servidor esté funcionando.

**cURL:**
```bash
curl http://localhost:3001/api/health
```

**JavaScript (fetch):**
```javascript
fetch('http://localhost:3001/api/health')
  .then(res => res.json())
  .then(data => console.log(data));
```

**Respuesta esperada:**
```json
{
  "status": "ok",
  "message": "Servidor funcionando correctamente"
}
```

---

### 2. Obtener token CSRF

Necesario antes de hacer peticiones POST.

**cURL:**
```bash
curl -c cookies.txt http://localhost:3001/api/csrf-token
```

**JavaScript (fetch):**
```javascript
fetch('http://localhost:3001/api/csrf-token', {
  credentials: 'include'
})
  .then(res => res.json())
  .then(data => console.log('Token CSRF:', data.csrfToken));
```

**Respuesta esperada:**
```json
{
  "csrfToken": "abc123-token-aqui"
}
```

---

### 3. Enviar mensaje de contacto

**cURL:**
```bash
# Primero obtén el token CSRF
TOKEN=$(curl -s -c cookies.txt http://localhost:3001/api/csrf-token | jq -r '.csrfToken')

# Luego envía el mensaje
curl -X POST http://localhost:3001/api/contact \
  -b cookies.txt \
  -H "Content-Type: application/json" \
  -H "X-CSRF-Token: $TOKEN" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "message": "Hola, me gustaría contactarte sobre un proyecto."
  }'
```

**JavaScript (fetch):**
```javascript
// Paso 1: Obtener token CSRF
let csrfToken = '';

fetch('http://localhost:3001/api/csrf-token', {
  credentials: 'include'
})
  .then(res => res.json())
  .then(data => {
    csrfToken = data.csrfToken;
    
    // Paso 2: Enviar mensaje
    return fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'include',
      body: JSON.stringify({
        name: 'Juan Pérez',
        email: 'juan@example.com',
        message: 'Hola, me gustaría contactarte sobre un proyecto.'
      })
    });
  })
  .then(res => res.json())
  .then(data => console.log(data));
```

**Respuesta exitosa:**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente. Te responderé pronto!"
}
```

---

## 🧪 Ejemplos de testing

### Probar rate limiting

Envía múltiples peticiones para activar el límite:

```bash
# Envía 10 peticiones seguidas
for i in {1..10}; do
  echo "Petición $i:"
  curl -X POST http://localhost:3001/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@test.com","message":"Test"}'
  echo -e "\n---"
done
```

**Resultado esperado:**
- Primeras 5 peticiones: Error (sin token CSRF)
- Después de 5 intentos: Error 429 (rate limit)

---

### Probar validación de email

```bash
# Email inválido
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -H "X-CSRF-Token: tu-token" \
  -d '{
    "name": "Test",
    "email": "no-es-un-email",
    "message": "Test"
  }'
```

**Respuesta esperada:**
```json
{
  "error": "El formato del email no es válido"
}
```

---

### Probar validación de longitud

```bash
# Nombre muy largo (>100 caracteres)
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -H "X-CSRF-Token: tu-token" \
  -d '{
    "name": "Este es un nombre extremadamente largo que excede el límite de 100 caracteres permitidos por el sistema de validación...",
    "email": "test@test.com",
    "message": "Test"
  }'
```

**Respuesta esperada:**
```json
{
  "error": "El nombre no puede exceder 100 caracteres"
}
```

---

### Probar protección XSS

```bash
# Intento de inyección de script
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -H "X-CSRF-Token: tu-token" \
  -d '{
    "name": "<script>alert(\"XSS\")</script>",
    "email": "test@test.com",
    "message": "<img src=x onerror=alert(1)>"
  }'
```

**Resultado esperado:**
El código malicioso será sanitizado automáticamente por `xss-clean`.

---

### Probar CORS

```bash
# Petición desde origen no permitido
curl -H "Origin: http://sitio-malicioso.com" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -X OPTIONS \
  http://localhost:3001/api/contact
```

**Resultado esperado:**
No habrá headers CORS en la respuesta, bloqueando la petición.

---

## 🎨 Ejemplos de integración en React

### Componente básico con hooks

```jsx
import { useState, useEffect } from 'react';

function ContactForm() {
  const [csrfToken, setCsrfToken] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  // Obtener token CSRF
  useEffect(() => {
    fetch('http://localhost:3001/api/csrf-token', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => setCsrfToken(data.csrfToken))
      .catch(err => console.error('Error:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Enviando...' });

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
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error de conexión' });
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
      
      {status.message && (
        <div className={status.type}>{status.message}</div>
      )}
      
      <button type="submit" disabled={!csrfToken}>
        Enviar
      </button>
    </form>
  );
}
```

---

### Hook personalizado para CSRF

```jsx
// hooks/useCsrfToken.js
import { useState, useEffect } from 'react';

export function useCsrfToken(apiUrl) {
  const [csrfToken, setCsrfToken] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/api/csrf-token`, {
      credentials: 'include'
    })
      .then(res => {
        if (!res.ok) throw new Error('Error obteniendo token');
        return res.json();
      })
      .then(data => setCsrfToken(data.csrfToken))
      .catch(err => setError(err.message));
  }, [apiUrl]);

  return { csrfToken, error };
}

// Uso:
function MyComponent() {
  const { csrfToken, error } = useCsrfToken('http://localhost:3001');
  
  if (error) return <div>Error: {error}</div>;
  if (!csrfToken) return <div>Cargando...</div>;
  
  // Usar csrfToken en peticiones...
}
```

---

### Servicio de API centralizado

```javascript
// services/api.js
class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.csrfToken = null;
  }

  async init() {
    const response = await fetch(`${this.baseUrl}/api/csrf-token`, {
      credentials: 'include'
    });
    const data = await response.json();
    this.csrfToken = data.csrfToken;
  }

  async sendContactMessage(formData) {
    if (!this.csrfToken) {
      await this.init();
    }

    const response = await fetch(`${this.baseUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': this.csrfToken
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Error al enviar mensaje');
    }

    return response.json();
  }
}

// Exportar instancia singleton
export const api = new ApiService('http://localhost:3001');

// Uso:
import { api } from './services/api';

async function handleSubmit(formData) {
  try {
    const result = await api.sendContactMessage(formData);
    console.log('Éxito:', result.message);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
```

---

## 🔍 Debugging

### Ver headers de la respuesta

```bash
curl -v http://localhost:3001/api/health
```

Busca headers de seguridad como:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Strict-Transport-Security`
- `Content-Security-Policy`

---

### Ver cookies

```bash
curl -c cookies.txt -v http://localhost:3001/api/csrf-token
cat cookies.txt
```

Deberías ver la cookie CSRF.

---

### Logs del servidor

Los logs muestran cada petición:
```
📧 Mensaje de contacto recibido: {
  name: 'Juan Pérez',
  email: 'juan@example.com',
  message: 'Hola...'
}
```

---

## 🌐 Ejemplos de producción

### Configurar para producción

```javascript
// server.js
const allowedOrigins = 
  process.env.NODE_ENV === 'production'
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  credentials: true
};
```

### Variables de entorno en Vercel

```bash
# Configurar en Vercel dashboard o CLI
vercel env add SESSION_SECRET
vercel env add ALLOWED_ORIGINS
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
```

---

## 💡 Tips y trucos

### Reintentar petición si falla CSRF

```javascript
async function fetchWithCsrfRetry(url, options, maxRetries = 1) {
  try {
    const response = await fetch(url, options);
    
    if (response.status === 403) {
      // Token CSRF inválido, obtener uno nuevo
      if (maxRetries > 0) {
        const tokenRes = await fetch('/api/csrf-token', {
          credentials: 'include'
        });
        const { csrfToken } = await tokenRes.json();
        
        // Reintentar con nuevo token
        options.headers['X-CSRF-Token'] = csrfToken;
        return fetchWithCsrfRetry(url, options, maxRetries - 1);
      }
    }
    
    return response;
  } catch (error) {
    throw error;
  }
}
```

---

### Manejar rate limiting con feedback al usuario

```javascript
async function handleSubmit(formData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    });

    if (response.status === 429) {
      // Rate limit excedido
      const retryAfter = response.headers.get('Retry-After');
      const minutes = Math.ceil(retryAfter / 60);
      
      alert(`Has enviado demasiados mensajes. Espera ${minutes} minutos.`);
      return;
    }

    const data = await response.json();
    // Manejar respuesta...
  } catch (error) {
    console.error(error);
  }
}
```

---

### Validación en tiempo real

```jsx
function EmailInput({ value, onChange }) {
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError('Email inválido');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <input
        type="email"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          validateEmail(e.target.value);
        }}
        onBlur={() => validateEmail(value)}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
```

---

## 📚 Recursos adicionales

- [Fetch API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSRF Tokens Explained](https://owasp.org/www-community/attacks/csrf)
- [CORS Tutorial](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [React Hooks](https://react.dev/reference/react)

---

**¿Tienes más ejemplos que agregar? Contribuye al proyecto! 🚀**
