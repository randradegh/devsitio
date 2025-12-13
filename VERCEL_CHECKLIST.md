# ✅ Checklist de Preparación para Vercel

## Antes de Desplegar

- [x] ✅ Build funciona correctamente (`npm run build`)
- [x] ✅ Archivo `vercel.json` configurado para React Router
- [x] ✅ `.gitignore` incluye archivos innecesarios
- [ ] ⚠️ Código subido a repositorio Git (GitHub/GitLab)
- [ ] ⚠️ Variables de entorno identificadas

## Variables de Entorno Necesarias

Configura estas variables en Vercel (Settings → Environment Variables):

- `VITE_CALENDLY_URL` - URL de tu Calendly (ej: `https://calendly.com/tu-usuario/consulta`)
- `VITE_CONTACT_EMAIL` - Email de contacto (opcional)

**Nota:** Estas variables son opcionales. Si no las configuras, la aplicación usará valores por defecto.

## Pasos para Desplegar en Vercel

1. **Ve a [vercel.com](https://vercel.com)** y crea una cuenta (o inicia sesión)

2. **Haz clic en "Add New Project"**

3. **Conecta tu repositorio:**
   - Si usas GitHub/GitLab, conéctalo desde ahí
   - Selecciona el repositorio `devsite_raf`

4. **Verifica la configuración:**
   - **Framework Preset:** Vite (debería detectarse automáticamente)
   - **Build Command:** `npm run build` ✓
   - **Output Directory:** `dist` ✓
   - **Install Command:** `npm install` ✓

5. **Configura Variables de Entorno:**
   - Agrega `VITE_CALENDLY_URL` si tienes Calendly configurado
   - Agrega `VITE_CONTACT_EMAIL` si lo necesitas

6. **Haz clic en "Deploy"**

7. **Espera el deploy** (1-2 minutos)

8. **¡Listo!** Tu sitio estará disponible en `https://devsite-raf.vercel.app` (o el nombre que elijas)

## Después del Deploy

- [ ] Verifica que el sitio carga correctamente
- [ ] Prueba todas las rutas (Inicio, Servicios, Casos, Recursos, etc.)
- [ ] Verifica que el formulario de contacto funciona
- [ ] Configura tu dominio personalizado (ver `GUIA_DESPLIEGUE.md`)

## Estructura del Proyecto

```
devsite_raf/
├── vercel.json          ✅ Configuración de Vercel (rewrites + headers)
├── package.json         ✅ Scripts de build configurados
├── vite.config.ts       ✅ Configuración de Vite
├── .gitignore          ✅ Archivos ignorados correctamente
└── dist/               ✅ Carpeta de build (se genera con npm run build)
```

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build para producción (verificar que funciona)
npm run build

# Preview de la build local
npm run preview

# Linter
npm run lint
```

---

**El proyecto está listo para desplegar en Vercel! 🚀**

Sigue los pasos anteriores y tu sitio estará en línea en minutos.
