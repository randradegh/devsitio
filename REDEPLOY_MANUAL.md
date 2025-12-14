# 🔄 Guía para Redeploy Manual en Vercel

## 📍 Situación Actual
- **Último commit en GitHub**: `f8deba1` - "Agregar instrucciones urgentes para forzar rebuild en Vercel"
- **Commit anterior importante**: `850ff8b` - "FORCE REBUILD: Deshabilitar caché completo..."
- **Vercel no está detectando automáticamente** los nuevos commits

## 🎯 Solución: Redeploy Manual desde el Último Commit

### Método 1: Redeploy desde el Dashboard (RECOMENDADO)

1. **Ve a Vercel Dashboard**: https://vercel.com/dashboard
2. **Selecciona tu proyecto**
3. **Ve a la pestaña "Deployments"**
4. **Haz clic en los tres puntos (⋯)** del deployment más reciente (el de hace 13 minutos)
5. **Selecciona "Redeploy"**
6. **IMPORTANTE - Configuración del Redeploy**:
   - Si aparece un checkbox "Use existing Build Cache" → **DESMÁRCALO**
   - Si aparece una opción "Redeploy without cache" → **SELECCIONA ESA**
   - Si no aparece ninguna opción, simplemente confirma el redeploy
7. **Confirma el redeploy**

### Método 2: Crear Deployment desde un Commit Específico

Si el método 1 no funciona:

1. **En Vercel Dashboard → Tu Proyecto → "Deployments"**
2. **Haz clic en "Create Deployment"** (botón en la parte superior)
3. **Selecciona**:
   - **Git Repository**: `randradegh/devsitio`
   - **Branch**: `main`
   - **Commit**: Selecciona el commit `f8deba1` o el más reciente disponible
4. **Haz clic en "Deploy"**
5. **NO marques "Use existing Build Cache"** si aparece la opción

### Método 3: Usar Vercel CLI (Si tienes acceso)

```bash
# Instalar Vercel CLI si no lo tienes
npm i -g vercel

# Login (si no estás logueado)
vercel login

# Ir al directorio del proyecto
cd /run/media/randrade/baul/respaldos/proyectos/empresa/devsite_raf

# Forzar deploy desde el commit actual
vercel --prod --force
```

### Método 4: Desconectar y Reconectar el Repositorio (Último recurso)

Si nada de lo anterior funciona:

1. **Vercel Dashboard → Tu Proyecto → Settings → Git**
2. **Haz clic en "Disconnect"** del repositorio
3. **Espera 10-15 segundos**
4. **Haz clic en "Connect Git Repository"**
5. **Selecciona**:
   - Repositorio: `randradegh/devsitio`
   - Branch: `main`
6. **Verifica la configuración**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: (déjalo vacío, se usará del vercel.json)
7. **Haz clic en "Deploy"**

## ✅ Verificación Después del Redeploy

### 1. Verificar que el Deployment Usa el Commit Correcto

En Vercel Dashboard → Deployments → El deployment más reciente:
- Debe mostrar el commit `f8deba1` o `850ff8b`
- NO debe mostrar el commit del deployment de hace 13 minutos

### 2. Verificar el Código Desplegado

1. **Visita tu sitio en Vercel**
2. **Abre las herramientas de desarrollador** (F12)
3. **Ve a la pestaña "Network"**
4. **Recarga la página con caché limpia**: 
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
5. **Busca `index.html`** en la lista de requests
6. **Haz clic derecho → "Open in New Tab"**
7. **Busca texto específico** de tu `Home.tsx` actual:
   - Busca: "Acelera tu negocio con"
   - Busca: "tecnología que genera resultados"
8. **Compara con GitHub**: https://github.com/randradegh/devsitio/blob/main/src/pages/Home.tsx

### 3. Verificar los Logs del Build

En Vercel → Tu Deployment → "View Build Logs":
- Debe mostrar que usó `npm install --force`
- No debe mostrar mensajes de "using cache" excesivos
- El build debe completarse sin errores

## 🔍 Verificar la Conexión de Vercel con GitHub

Si Vercel no detecta automáticamente los commits, puede ser un problema de webhooks:

1. **Ve a GitHub**: https://github.com/randradegh/devsitio/settings/hooks
2. **Verifica que hay un webhook de Vercel** configurado
3. **Si no hay webhook o está deshabilitado**:
   - Ve a Vercel → Settings → Git
   - Desconecta y reconecta el repositorio (esto recreará el webhook)

## 📝 Información de los Últimos Commits

```
f8deba1 - Agregar instrucciones urgentes para forzar rebuild en Vercel
850ff8b - FORCE REBUILD: Deshabilitar caché completo en Vercel y forzar rebuild sin caché
5869b93 - Agregar guía de solución para problemas de deploy en Vercel
e51ee2d - Forzar rebuild en Vercel: actualizar vercel.json y agregar build-version
d4cfc64 - Sincronizar cambios con GitHub para deploy en Vercel
```

**El commit `850ff8b` es el más importante** porque contiene los cambios que fuerzan el rebuild sin caché.

---

**Sigue el Método 1 primero**. Si no funciona, prueba el Método 2, luego el 3, y finalmente el 4.
