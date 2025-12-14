# 🔍 ¿Por qué falla el deploy desde el dashboard de Vercel?

## 📋 Causas Más Probables

Basado en la investigación y el comportamiento observado, estas son las razones más comunes por las que Vercel no detecta automáticamente los commits o falla el redeploy desde el dashboard:

### 1. 🔗 Problemas con Webhooks de GitHub (MÁS PROBABLE)

**Causa**: Vercel depende de webhooks de GitHub para detectar nuevos commits. Si el webhook no existe, está mal configurado, o fue eliminado, Vercel no sabrá cuándo hay nuevos commits.

**Síntomas**:
- Los commits en GitHub no disparan deploys automáticos
- El redeploy manual desde el dashboard no funciona correctamente
- Vercel CLI funciona porque no depende de webhooks

**Cómo verificar**:
1. Ve a GitHub: https://github.com/randradegh/devsitio/settings/hooks
2. Busca un webhook de Vercel
3. Verifica que esté activo y configurado correctamente

**Solución**:
1. Vercel Dashboard → Tu Proyecto → Settings → Git
2. Haz clic en "Disconnect"
3. Espera 10-15 segundos
4. Haz clic en "Connect Git Repository"
5. Selecciona `randradegh/devsitio` y la rama `main`
6. Esto recreará el webhook automáticamente

---

### 2. 🔐 Permisos Insuficientes de la GitHub App de Vercel

**Causa**: La aplicación de Vercel en GitHub no tiene los permisos necesarios para leer/escribir en el repositorio.

**Síntomas**:
- Vercel no puede acceder al repositorio
- Los deploys fallan silenciosamente
- No aparecen errores claros

**Cómo verificar**:
1. Ve a GitHub: https://github.com/settings/installations
2. Busca "Vercel" en las aplicaciones instaladas
3. Verifica que tenga acceso a `randradegh/devsitio`
4. Verifica que tenga permisos de "Read and write"

**Solución**:
1. GitHub → Settings → Applications → Installed GitHub Apps
2. Busca "Vercel"
3. Haz clic en "Configure"
4. Asegúrate de que el repositorio `devsitio` esté seleccionado
5. Verifica que tenga permisos de "Read and write"

---

### 3. 📧 Email del Commit No Coincide con Vercel

**Causa**: El email asociado con tus commits de Git no coincide con el email principal de tu cuenta de Vercel.

**Síntomas**:
- Vercel no asocia los commits con tu cuenta
- Los deploys automáticos no se disparan
- Puede funcionar con Vercel CLI porque usa autenticación directa

**Cómo verificar**:
```bash
# Ver el email configurado en Git
git config --global user.email

# Ver el email de los últimos commits
git log --format='%ae' -5
```

**Solución**:
1. Verifica el email en tu cuenta de Vercel
2. Si no coincide, actualiza el email en Git:
   ```bash
   git config --global user.email "tu-email@ejemplo.com"
   ```
3. O actualiza el email en Vercel para que coincida

---

### 4. ⚙️ Configuración de `vercel.json` con `git.deploymentEnabled`

**Causa**: Aunque en tu `vercel.json` tienes `"deploymentEnabled": { "main": true }`, si esta configuración está mal o hay conflictos, puede causar problemas.

**Estado actual en tu proyecto**:
```json
"git": {
  "deploymentEnabled": {
    "main": true
  }
}
```

Esto está correcto, pero si en algún momento fue `false` o hubo un error, podría causar problemas.

**Solución**:
- La configuración actual es correcta
- Si el problema persiste, puedes intentar remover temporalmente esta sección del `vercel.json` y dejar que Vercel use la configuración por defecto

---

### 5. 🚫 "Ignored Build Step" Configurado

**Causa**: Si hay una configuración de "Ignored Build Step" en Vercel que está ignorando todos los commits.

**Cómo verificar**:
1. Vercel Dashboard → Tu Proyecto → Settings → Git
2. Busca "Ignored Build Step"
3. Verifica que esté vacío o que la condición sea correcta

**Solución**:
- Si hay una condición, elimínala o ajústala
- Debe estar vacío para que todos los commits disparen deploys

---

### 6. 🌐 Problemas Temporales de Vercel/GitHub

**Causa**: Ocasionalmente hay interrupciones en el servicio de webhooks entre GitHub y Vercel.

**Síntomas**:
- Funciona intermitentemente
- Algunos commits se detectan, otros no
- No hay un patrón claro

**Solución**:
- Esperar y reintentar
- Verificar el estado de Vercel: https://www.vercel-status.com/
- Verificar el estado de GitHub: https://www.githubstatus.com/

---

### 7. 🔄 Caché de Vercel Dashboard

**Causa**: El dashboard de Vercel puede estar mostrando información en caché, haciendo que parezca que no hay nuevos commits disponibles.

**Síntomas**:
- El dashboard muestra commits antiguos
- El redeploy no usa el commit más reciente
- Vercel CLI funciona porque accede directamente a la API

**Solución**:
- Refrescar el dashboard (Ctrl+Shift+R o Cmd+Shift+R)
- Cerrar y abrir sesión en Vercel
- Usar Vercel CLI como alternativa confiable

---

## 🎯 Por Qué Vercel CLI Funciona

Vercel CLI funciona porque:

1. **No depende de webhooks**: Se conecta directamente a la API de Vercel
2. **Autenticación directa**: Usa tu token de autenticación, no depende de permisos de GitHub
3. **Lee directamente del repositorio**: Puede leer el estado actual del código local/Git
4. **Bypassa el dashboard**: No pasa por la interfaz web que puede tener caché o problemas

## ✅ Solución Recomendada (Orden de Prioridad)

### Paso 1: Verificar y Recrear Webhook (MÁS IMPORTANTE)

1. **GitHub**: https://github.com/randradegh/devsitio/settings/hooks
   - Verifica que exista un webhook de Vercel
   - Si no existe o está deshabilitado, continúa con el paso 2

2. **Vercel Dashboard → Tu Proyecto → Settings → Git**
   - Haz clic en "Disconnect"
   - Espera 10-15 segundos
   - Haz clic en "Connect Git Repository"
   - Selecciona `randradegh/devsitio` y rama `main`
   - Esto recreará el webhook automáticamente

### Paso 2: Verificar Permisos de GitHub App

1. **GitHub**: https://github.com/settings/installations
2. Busca "Vercel"
3. Verifica que tenga acceso a `devsitio` con permisos de "Read and write"

### Paso 3: Verificar Email de Commits

```bash
# Verificar email actual
git config --global user.email

# Si no coincide con Vercel, actualizar:
git config --global user.email "tu-email@ejemplo.com"
```

### Paso 4: Verificar Configuración en Vercel

1. **Settings → Git**:
   - Production Branch: `main` ✓
   - Auto-deploy: Activado ✓
   - Ignored Build Step: Vacío ✓

2. **Settings → General**:
   - Framework Preset: `Vite` ✓
   - Build Command: `npm run build` ✓
   - Output Directory: `dist` ✓

## 🔄 Workaround: Usar Vercel CLI

Mientras se resuelve el problema de webhooks, puedes usar Vercel CLI como solución temporal:

```bash
# Después de cada push a GitHub
git push origin main

# Forzar deploy con Vercel CLI
vercel --prod --force
```

Esto asegura que siempre se despliegue la versión más reciente.

## 📊 Diagnóstico Rápido

Ejecuta estos comandos para diagnosticar:

```bash
# 1. Verificar email de Git
git config --global user.email

# 2. Verificar remoto de GitHub
git remote -v

# 3. Verificar última rama
git branch -a

# 4. Verificar últimos commits
git log --oneline -5

# 5. Verificar que todo esté en GitHub
git fetch origin
git log origin/main --oneline -5
```

## 🎯 Conclusión

La causa más probable es un **problema con los webhooks de GitHub**. Vercel CLI funciona porque no depende de webhooks, sino que se conecta directamente a la API de Vercel.

**Solución inmediata**: Usar Vercel CLI (`vercel --prod --force`)

**Solución permanente**: Recrear la conexión del repositorio en Vercel para restaurar los webhooks.

---

**Última actualización**: Después de investigar las causas del problema
