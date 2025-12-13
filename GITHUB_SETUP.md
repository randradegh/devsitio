# Instrucciones para subir el proyecto a GitHub

## ✅ Preparación completada

El proyecto ya está preparado con:
- ✅ Repositorio Git inicializado
- ✅ `.gitignore` configurado correctamente
- ✅ `.env.example` creado
- ✅ Rama principal renombrada a `main`

## 📋 Pasos para subir a GitHub

### 1. Crear el repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** o **"+"** → **"New repository"**
3. Configura el repositorio:
   - **Name**: `devsite-raf` (o el nombre que prefieras)
   - **Description**: "Sitio web personal TIC & Gen AI"
   - **Visibility**: Público o Privado (según prefieras)
   - **NO** marques "Initialize this repository with a README" (ya tenemos uno)
4. Haz clic en **"Create repository"**

### 2. Conectar el repositorio local con GitHub

Ejecuta los siguientes comandos en la terminal (desde la raíz del proyecto):

```bash
# Agregar todos los archivos al staging
git add .

# Hacer el primer commit
git commit -m "Initial commit: Sitio web personal TIC & Gen AI"

# Agregar el remoto de GitHub (reemplaza USERNAME con tu usuario de GitHub)
git remote add origin https://github.com/USERNAME/devsite-raf.git

# O si prefieres usar SSH:
# git remote add origin git@github.com:USERNAME/devsite-raf.git

# Subir el código a GitHub
git push -u origin main
```

### 3. Verificar la subida

1. Ve a tu repositorio en GitHub
2. Verifica que todos los archivos estén presentes
3. El README.md debería mostrarse automáticamente en la página principal

## 🔐 Variables de entorno en GitHub

Si vas a usar GitHub Actions o necesitas variables de entorno en producción:

1. Ve a tu repositorio en GitHub
2. **Settings** → **Secrets and variables** → **Actions** (o **Secrets** para variables)
3. Agrega las siguientes variables:
   - `VITE_CALENDLY_URL`: Tu URL de Calendly
   - `VITE_CONTACT_EMAIL`: Tu email de contacto

## 🚀 Deploy automático (Opcional)

### Con Vercel

1. Ve a [Vercel](https://vercel.com)
2. Importa tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Vite
4. Agrega las variables de entorno en la configuración
5. Deploy automático en cada push a `main`

### Con Netlify

1. Ve a [Netlify](https://netlify.com)
2. **Add new site** → **Import an existing project**
3. Conecta con GitHub y selecciona el repositorio
4. Configuración:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Agrega las variables de entorno en **Site settings** → **Environment variables**
6. Deploy automático en cada push a `main`

## 📝 Notas importantes

- ✅ El archivo `.env` está en `.gitignore` y NO se subirá a GitHub
- ✅ El archivo `.env.example` SÍ se subirá para que otros sepan qué variables necesitan
- ✅ `node_modules` y `dist` están ignorados (no se subirán)
- ✅ Todos los archivos de configuración están incluidos

## 🔄 Comandos Git útiles

```bash
# Ver el estado del repositorio
git status

# Ver qué archivos están siendo rastreados
git ls-files

# Ver los cambios pendientes
git diff

# Hacer commit de cambios
git add .
git commit -m "Descripción del cambio"
git push

# Crear una nueva rama
git checkout -b nombre-rama
git push -u origin nombre-rama
```

## ✨ Listo para trabajar

Una vez subido a GitHub, puedes:
- Clonar el repositorio en otras máquinas
- Colaborar con otros desarrolladores
- Configurar CI/CD
- Hacer deploy automático

---

**¡El proyecto está listo para ser compartido en GitHub!** 🎉




