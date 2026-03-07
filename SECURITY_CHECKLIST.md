# ✅ Checklist de Seguridad

Usa esta lista para verificar que tu portafolio está correctamente protegido antes de desplegarlo a producción.

## 🔐 Antes de desplegar

### Configuración del servidor

- [ ] Variables de entorno configuradas (`.env` creado y rellenado)
- [ ] `SESSION_SECRET` generado de forma segura (mínimo 32 caracteres aleatorios)
- [ ] Archivo `.env` agregado a `.gitignore` (verificar que NO esté en Git)
- [ ] CORS configurado con tus dominios reales de producción
- [ ] Rate limiting ajustado según tus necesidades
- [ ] Email configurado (Nodemailer o EmailJS)
- [ ] Servidor probado localmente sin errores

### Seguridad básica

- [ ] HTTPS configurado en producción (certificado SSL/TLS válido)
- [ ] Headers de seguridad verificados (usar [securityheaders.com](https://securityheaders.com))
- [ ] Content Security Policy (CSP) configurado correctamente
- [ ] Cookies configuradas con `httpOnly`, `secure`, y `sameSite`
- [ ] Validación de datos implementada en frontend Y backend
- [ ] Sanitización de inputs activada (xss-clean, mongo-sanitize)

### Dependencias

- [ ] Todas las dependencias actualizadas (`npm update`)
- [ ] Sin vulnerabilidades críticas (`npm audit` sin errores graves)
- [ ] Dependabot o Snyk configurado para alertas automáticas
- [ ] Versiones de Node.js compatibles (>= 20.19.0)

### Credenciales y secretos

- [ ] Sin API keys hardcodeadas en el código
- [ ] Sin contraseñas en el código fuente
- [ ] Variables sensibles solo en `.env` (nunca en Git)
- [ ] App Passwords de Gmail configurados (no contraseñas normales)
- [ ] Tokens y secretos rotados regularmente

## 🧪 Testing de seguridad

### Pruebas manuales

- [ ] Formulario de contacto funciona correctamente
- [ ] Rate limiting se activa después del límite configurado
- [ ] CORS bloquea peticiones de dominios no autorizados
- [ ] CSRF protection rechaza peticiones sin token válido
- [ ] Validación de email rechaza formatos inválidos
- [ ] Límites de caracteres se respetan
- [ ] Mensajes de error no exponen información sensible

### Herramientas de testing

```bash
# Escanear vulnerabilidades en dependencias
npm audit

# Corregir automáticamente (si es posible)
npm audit fix

# Probar headers de seguridad
curl -I https://tu-dominio.com

# Probar rate limiting
for i in {1..10}; do curl http://localhost:3001/api/contact -X POST; done
```

### Servicios online

- [ ] [SSL Labs](https://www.ssllabs.com/ssltest/) - Calificación A o superior
- [ ] [Security Headers](https://securityheaders.com) - Calificación A o superior
- [ ] [Mozilla Observatory](https://observatory.mozilla.org) - Calificación 80+ puntos
- [ ] [OWASP ZAP](https://www.zaproxy.org/) - Sin vulnerabilidades críticas

## 🌍 Configuración de producción

### Variables de entorno en hosting

**Vercel:**
- [ ] Variables configuradas en Settings → Environment Variables
- [ ] `NODE_ENV=production` configurado
- [ ] Dominios de producción en `ALLOWED_ORIGINS`

**Netlify:**
- [ ] Variables configuradas en Site settings → Environment variables
- [ ] Build command correcto: `npm run build`
- [ ] Publish directory correcto: `dist` o `build`

**Heroku:**
- [ ] Variables configuradas con `heroku config:set`
- [ ] Procfile creado correctamente
- [ ] Dyno type apropiado seleccionado

### DNS y dominios

- [ ] Dominio apuntando correctamente al hosting
- [ ] SSL/TLS configurado y activo
- [ ] Redirección HTTP → HTTPS activa
- [ ] WWW y non-WWW configurados (elegir uno como principal)

### Monitoreo

- [ ] Logs configurados y accesibles
- [ ] Alertas de errores configuradas (Sentry, LogRocket, etc.)
- [ ] Uptime monitoring activo (UptimeRobot, Pingdom, etc.)
- [ ] Analytics configurado (Google Analytics, Plausible, etc.)

## 🔄 Mantenimiento continuo

### Semanal

- [ ] Revisar logs en busca de patrones sospechosos
- [ ] Verificar que el sitio esté funcionando correctamente
- [ ] Revisar alertas de uptime monitoring

### Mensual

- [ ] Actualizar dependencias (`npm update`)
- [ ] Ejecutar `npm audit` y corregir vulnerabilidades
- [ ] Revisar y ajustar rate limits si es necesario
- [ ] Verificar que los certificados SSL no estén por expirar

### Trimestral

- [ ] Rotar `SESSION_SECRET` y otros secretos
- [ ] Revisar y actualizar políticas de seguridad (CSP, CORS)
- [ ] Hacer backup de configuraciones importantes
- [ ] Revisar logs completos en busca de intentos de ataque

### Anual

- [ ] Auditoría de seguridad completa
- [ ] Actualizar versión de Node.js si es necesario
- [ ] Revisar y actualizar toda la documentación
- [ ] Evaluar nuevas medidas de seguridad disponibles

## 🚨 En caso de incidente

### Detección de ataque

Si detectas actividad sospechosa:

1. **Identifica el patrón:**
   - ¿Muchas peticiones 429 (rate limit)?
   - ¿Intentos de acceso a rutas inexistentes?
   - ¿Payloads con código malicioso?
   - ¿Tráfico inusual desde una IP específica?

2. **Bloquea la amenaza:**
   ```javascript
   // Agrega IPs maliciosas a una blacklist temporal
   const blacklistedIPs = ['IP.MALICIOSA.AQUI'];
   
   app.use((req, res, next) => {
     if (blacklistedIPs.includes(req.ip)) {
       return res.status(403).json({ error: 'Acceso denegado' });
     }
     next();
   });
   ```

3. **Documenta el incidente:**
   - Guarda logs relevantes
   - Anota la IP, hora, y tipo de ataque
   - Toma screenshots si es necesario

4. **Reporta si es grave:**
   - A tu proveedor de hosting
   - A CloudFlare (si lo usas)
   - A las autoridades si es un ataque serio

### Recuperación

1. **Evalúa el daño:**
   - ¿Se comprometieron datos?
   - ¿Se modificó código?
   - ¿Se cayó el servicio?

2. **Restaura desde backup:**
   - Código: `git reset --hard` al último commit bueno
   - Base de datos: restaurar desde backup
   - Configuración: verificar que no haya cambios no autorizados

3. **Fortalece la seguridad:**
   - Ajusta rate limits más estrictos
   - Agrega validaciones adicionales
   - Implementa WAF si es necesario (CloudFlare, AWS WAF)

4. **Notifica a usuarios si es necesario:**
   - Si hubo compromiso de datos, notifica transparentemente
   - Explica qué pasó y qué medidas tomaste

## 📊 Métricas de seguridad

### Indicadores clave

Monitorea estos números regularmente:

- **Tasa de peticiones bloqueadas:** < 1% es normal, > 5% indica posible ataque
- **Errores 429 (rate limit):** Algunos son normales, muchos indican problema
- **Errores 403 (CORS/CSRF):** Deberían ser muy raros en uso legítimo
- **Tiempo de respuesta:** Aumentos súbitos pueden indicar ataque DoS
- **Uptime:** Debe ser > 99.9%

### Logs importantes

Busca estos patrones en los logs:

```bash
# Muchas peticiones de la misma IP
grep "429" logs.txt | awk '{print $1}' | sort | uniq -c | sort -rn

# Intentos de acceso a rutas sospechosas
grep -E "(admin|wp-admin|phpmyadmin|.env|config)" logs.txt

# Errores de validación repetidos
grep "400" logs.txt | grep "invalid"

# Intentos de inyección
grep -E "(<script|SELECT|DROP|INSERT)" logs.txt
```

## 🎓 Recursos de aprendizaje

### Cursos recomendados

- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Los 10 riesgos más críticos
- [Web Security Academy](https://portswigger.net/web-security) - Gratis y completo
- [Node.js Security](https://nodejs.org/en/docs/guides/security/) - Guía oficial

### Herramientas útiles

- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) - Escaneo de vulnerabilidades
- [Snyk](https://snyk.io/) - Monitoreo continuo
- [OWASP ZAP](https://www.zaproxy.org/) - Escáner de vulnerabilidades
- [Burp Suite](https://portswigger.net/burp) - Testing de penetración

### Comunidades

- [r/netsec](https://reddit.com/r/netsec) - Noticias de seguridad
- [OWASP Slack](https://owasp.org/slack/invite) - Comunidad de seguridad
- [Node.js Security WG](https://github.com/nodejs/security-wg) - Grupo de trabajo

## ✨ Buenas prácticas finales

### Principios fundamentales

1. **Defensa en profundidad:** Múltiples capas de seguridad
2. **Mínimo privilegio:** Solo los permisos necesarios
3. **Fail securely:** Si algo falla, que falle de forma segura
4. **No confíes en el cliente:** Siempre valida en el servidor
5. **Mantén simplicidad:** Código complejo = más bugs = más vulnerabilidades

### Cultura de seguridad

- **Aprende continuamente:** La seguridad evoluciona constantemente
- **Sé paranoico (sanamente):** Asume que todo puede ser atacado
- **Documenta todo:** Facilita auditorías y mantenimiento
- **Comparte conocimiento:** Ayuda a otros a mejorar su seguridad
- **No te avergüences de preguntar:** Mejor preguntar que tener una brecha

### Recuerda

> "La seguridad no es un producto, es un proceso." - Bruce Schneier

La seguridad perfecta no existe, pero cada medida que implementas hace tu sitio más difícil de atacar. Los atacantes buscan objetivos fáciles; si tu sitio está bien protegido, probablemente buscarán otro objetivo.

---

## 📝 Registro de cambios

Documenta aquí los cambios importantes de seguridad:

| Fecha | Cambio | Razón |
|-------|--------|-------|
| 2024-XX-XX | Implementación inicial | Setup de seguridad completo |
| | | |
| | | |

---

**¿Completaste todos los items? ¡Excelente! Tu portafolio está listo para producción de forma segura. 🔐✨**

**¿Falta algo? No te preocupes, implementa las medidas poco a poco. Lo importante es ir mejorando continuamente.**
