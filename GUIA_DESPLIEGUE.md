# 🚀 Guía de Despliegue - Conectar Dominio de GoDaddy

Esta guía te ayudará a desplegar tu sitio web y conectar tu dominio de GoDaddy.

## Opción 1: Vercel (Recomendado) ⭐

Vercel es la opción más sencilla y rápida para proyectos React/Vite. Ofrece:
- Deploy gratuito
- SSL automático
- Deploy automático con cada push a Git
- CDN global para carga rápida
- Dominios personalizados incluidos

### Paso 1: Preparar el proyecto en Git

1. Asegúrate de tener todos los cambios guardados:
```bash
git status
git add .
git commit -m "Preparando para deploy"
```

2. Si no tienes un repositorio remoto, créalo en GitHub/GitLab:
```bash
# Si ya tienes repositorio remoto configurado, solo haz push:
git push origin main
```

### Paso 2: Desplegar en Vercel

1. **Crea una cuenta en Vercel:**
   - Ve a https://vercel.com
   - Regístrate con tu cuenta de GitHub/GitLab (recomendado) o email

2. **Importa tu proyecto:**
   - Haz clic en "Add New Project"
   - Selecciona tu repositorio de GitHub/GitLab
   - Vercel detectará automáticamente que es un proyecto Vite
   - Verifica que la configuración sea:
     - **Framework Preset:** Vite
     - **Build Command:** `npm run build` (ya configurado automáticamente)
     - **Output Directory:** `dist` (ya configurado automáticamente)
     - **Install Command:** `npm install` (ya configurado automáticamente)

3. **Configura variables de entorno (si las necesitas):**
   - Si usas variables como `VITE_CALENDLY_URL` o `VITE_CONTACT_EMAIL`
   - Agrega las variables en la sección "Environment Variables"
   - Formato: `VITE_CALENDLY_URL` = `tu_url_aquí`

4. **Haz clic en "Deploy"**
   - El deploy tomará 1-2 minutos
   - Cuando termine, tendrás una URL temporal: `tu-proyecto.vercel.app`

### Paso 3: Conectar tu dominio de GoDaddy a Vercel

1. **En el dashboard de Vercel:**
   - Ve a tu proyecto desplegado
   - Haz clic en la pestaña "Settings"
   - Ve a "Domains"
   - Ingresa tu dominio (ejemplo: `tudominio.com` o `www.tudominio.com`)
   - Haz clic en "Add"

2. **Configuración en GoDaddy:**

   **Opción A: Usar los nameservers de Vercel (Recomendado)**
   
   Vercel te mostrará nameservers como:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
   
   En GoDaddy:
   1. Ve a tu panel de GoDaddy
   2. Selecciona tu dominio
   3. Ve a "DNS" o "Zona DNS"
   4. Busca la sección "Nameservers"
   5. Selecciona "Usar nameservers personalizados"
   6. Ingresa los nameservers que Vercel te proporcionó
   7. Guarda los cambios
   
   **Tiempo de propagación:** 24-48 horas (aunque generalmente es más rápido)

   **Opción B: Configurar registros DNS manualmente (Más rápido)**
   
   Si prefieres mantener los nameservers de GoDaddy:
   
   1. En Vercel, después de agregar el dominio, verás los registros DNS necesarios
   2. En GoDaddy, ve a "DNS" o "Zona DNS"
   3. Agrega los siguientes registros:

   **Para el dominio raíz (tudominio.com):**
   - Tipo: `A`
   - Nombre: `@` o `tudominio.com`
   - Valor: IP que Vercel te proporcionará (ejemplo: `76.76.21.21`)
   - TTL: `3600` o `Automático`

   **Para el subdominio www (www.tudominio.com):**
   - Tipo: `CNAME`
   - Nombre: `www`
   - Valor: `cname.vercel-dns.com.` (nota el punto al final)
   - TTL: `3600` o `Automático`

3. **Espera la propagación DNS:**
   - Puede tomar desde minutos hasta 48 horas
   - Verifica el estado en Vercel (debería cambiar a "Valid Configuration")

4. **Verifica el SSL:**
   - Vercel configura SSL automáticamente
   - Una vez que el DNS esté propagado, tu sitio estará disponible en `https://tudominio.com`

---

## Opción 2: Netlify

Netlify es otra excelente opción con características similares a Vercel.

### Paso 1: Preparar el proyecto

Igual que en Vercel, asegúrate de tener tu código en Git.

### Paso 2: Desplegar en Netlify

1. **Crea una cuenta en Netlify:**
   - Ve a https://netlify.com
   - Regístrate con GitHub/GitLab o email

2. **Importa tu proyecto:**
   - Haz clic en "Add new site" → "Import an existing project"
   - Selecciona tu repositorio
   - Configura:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Haz clic en "Deploy site"

### Paso 3: Conectar dominio de GoDaddy

1. En Netlify, ve a: Site settings → Domain management → Add custom domain
2. Ingresa tu dominio
3. Netlify te dará los registros DNS o nameservers
4. Configura en GoDaddy siguiendo las mismas instrucciones que para Vercel

---

## Opción 3: Despliegue Manual (No recomendado)

Si prefieres un hosting tradicional, necesitarás:

1. **Generar la build:**
```bash
npm run build
```

2. **Subir la carpeta `dist/` a tu servidor** vía FTP/SFTP

3. **Configurar el servidor** para servir archivos estáticos y redireccionar todas las rutas a `index.html` (necesario para React Router)

---

## ✅ Checklist Post-Deploy

- [ ] Sitio desplegado y accesible
- [ ] Dominio conectado correctamente
- [ ] SSL/HTTPS funcionando
- [ ] Todas las rutas funcionan correctamente
- [ ] Formulario de contacto configurado (si aplica)
- [ ] Variables de entorno configuradas
- [ ] SEO configurado (meta tags, etc.)

---

## 🔧 Configuración Adicional Recomendada

### Configurar redirecciones en Vercel

Crea un archivo `vercel.json` en la raíz del proyecto:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Esto asegura que React Router funcione correctamente con todas las rutas.

### Variables de Entorno

Si usas variables de entorno, asegúrate de configurarlas en el dashboard de Vercel/Netlify:
- `VITE_CALENDLY_URL`
- `VITE_CONTACT_EMAIL`
- Cualquier otra variable que necesites

---

## 🆘 Solución de Problemas

### El dominio no funciona después de 48 horas
- Verifica que los nameservers/registros DNS estén correctos
- Usa herramientas como https://whatsmydns.net para verificar propagación
- Contacta al soporte de Vercel/Netlify si el problema persiste

### Error 404 en rutas que no son la raíz
- Esto es normal en SPAs con React Router
- Asegúrate de tener el archivo `vercel.json` configurado (ver arriba)
- En Netlify, crea `_redirects` en la carpeta `public/` con: `/* /index.html 200`

### Build falla
- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs de build en el dashboard
- Prueba hacer build localmente: `npm run build`

---

## 📞 Recursos Útiles

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **GoDaddy DNS Help:** https://www.godaddy.com/help/manage-dns-records-680

---

**¡Tu sitio estará en línea en pocos minutos! 🎉**
