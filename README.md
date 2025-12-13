# Sitio Personal TIC & Gen AI

Sitio web personal para posicionarse como consultor en TIC y Gen AI, captar leads calificados y mostrar servicios, portafolio y contenido educativo.

## 🚀 Características

- **React + TypeScript**: Framework moderno y tipado
- **Vite**: Build tool rápido y eficiente
- **Tailwind CSS 3+**: Estilos modernos y responsivos con diseño oscuro
- **React Router**: Navegación SPA
- **Framer Motion**: Animaciones suaves y transiciones
- **SEO básico**: Meta tags y Open Graph
- **Responsive**: Diseño mobile-first
- **Glassmorphism**: Efectos de vidrio esmerilado y transparencias
- **Tipografías**: Plus Jakarta Sans (principal) + JetBrains Mono (código)
- **Iconos SVG estilizados**: Componente IconCircle con efectos glow

## 🎨 Diseño

El sitio utiliza un diseño oscuro moderno con:

- **Paleta de colores**: Fondos oscuros (`dark-950`, `dark-900`, `dark-800`) con acentos en azul (`primary`) y púrpura (`accent`)
- **Glassmorphism**: Cards y elementos con efecto de vidrio esmerilado (`backdrop-blur-xl`)
- **Iconos circulares**: Iconos SVG estilizados con fondo oscuro, borde brillante y efecto glow
- **Gradientes**: Efectos de gradiente en botones y elementos destacados
- **Tipografía**: Plus Jakarta Sans para texto general y JetBrains Mono para código

## 📋 Requisitos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Copia el archivo de ejemplo de variables de entorno (si existe):
```bash
cp .env.example .env
```

3. Edita `.env` y configura tus variables:
- `VITE_CALENDLY_URL`: URL de tu calendario de Calendly
- `VITE_CONTACT_EMAIL`: Email de contacto (opcional)

## 🏃 Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 📦 Build para Producción

Genera la build optimizada:

```bash
npm run build
```

Los archivos estarán en la carpeta `dist/`, listos para deploy en Vercel, Netlify u otro hosting.

Para previsualizar la build de producción:

```bash
npm run preview
```

## 🚢 Deploy

### Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Vite
3. Configura las variables de entorno en el dashboard de Vercel
4. Deploy automático en cada push

### Netlify

1. Conecta tu repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Configura las variables de entorno en Netlify

### Otros servicios

Cualquier servicio que soporte sitios estáticos puede alojar este proyecto. Solo necesitas:
- Build command: `npm run build`
- Publish directory: `dist`

## 📁 Estructura del Proyecto

```
src/
  ├── components/          # Componentes reutilizables
  │   ├── Layout.tsx       # Layout principal con Navbar y Footer
  │   ├── Navbar.tsx       # Barra de navegación con menú responsive
  │   ├── Footer.tsx       # Pie de página
  │   ├── SEO.tsx          # Componente para meta tags SEO
  │   └── IconCircle.tsx   # Componente de iconos SVG estilizados
  ├── pages/               # Páginas de la aplicación
  │   ├── Home.tsx         # Página principal con todas las secciones
  │   ├── Servicios.tsx    # Listado de servicios
  │   ├── ServicioDetail.tsx  # Detalle de un servicio
  │   ├── Casos.tsx        # Portafolio de casos de éxito
  │   ├── Recursos.tsx     # Listado de recursos/blog
  │   ├── RecursosDetail.tsx   # Detalle de un recurso
  │   ├── SobreMi.tsx      # Página sobre mí
  │   ├── Contacto.tsx     # Formulario de contacto
  │   ├── AvisoPrivacidad.tsx
  │   └── TerminosCondiciones.tsx
  ├── data/                # Datos estáticos
  │   ├── servicios.ts     # Información de servicios
  │   ├── casos.ts         # Casos de éxito
  │   └── recursos.ts      # Artículos y recursos
  ├── App.tsx              # Componente principal con rutas
  ├── main.tsx             # Punto de entrada
  └── index.css            # Estilos globales y utilidades Tailwind
```

## 🎨 Personalización

### Colores

Edita `tailwind.config.js` para cambiar la paleta de colores:

```js
colors: {
  primary: {
    // Colores azules
    50: '#f0f9ff',
    // ...
    700: '#0369a1',
  },
  accent: {
    // Colores púrpura
    50: '#faf5ff',
    // ...
    700: '#7e22ce',
  },
  dark: {
    // Escala de grises oscuros
    50: '#f9fafb',
    // ...
    950: '#030712',
  }
}
```

### Tipografías

Las tipografías están configuradas en:
- `index.html`: Enlaces a Google Fonts
- `tailwind.config.js`: Configuración de `fontFamily`
- `src/index.css`: Aplicación global

Para cambiar las tipografías, actualiza los enlaces en `index.html` y la configuración en `tailwind.config.js`.

### Iconos

Los iconos SVG estilizados se gestionan mediante el componente `IconCircle`:

```tsx
<IconCircle icon="globe" color="blue" size="md" />
```

Iconos disponibles: `globe`, `robot`, `database`, `book`, `megaphone`, `code`, `building`
Colores disponibles: `blue`, `green`, `purple`
Tamaños: `sm`, `md`, `lg`

### Contenido

- **Servicios**: Edita `src/data/servicios.ts`
- **Casos de éxito**: Edita `src/data/casos.ts`
- **Recursos/Blog**: Edita `src/data/recursos.ts`

Cada servicio incluye:
- Información básica (título, descripción corta, icono)
- Problema que resuelve
- Beneficios
- Resultados esperados
- Proceso de trabajo
- FAQ

## 📝 Formulario de Contacto

El formulario actualmente simula el envío. Para integrarlo con un servicio real:

### Opciones recomendadas:

1. **Formspree**: https://formspree.io
   - Fácil de integrar
   - Plan gratuito disponible
   - Solo necesitas agregar el endpoint en el `handleSubmit`

2. **Resend**: https://resend.com
   - Para emails transaccionales
   - Requiere un endpoint serverless

3. **EmailJS**: https://www.emailjs.com
   - Integración directa desde el frontend
   - No requiere backend

4. **Serverless Functions**:
   - Vercel Functions
   - Netlify Functions
   - AWS Lambda

Ejemplo de integración con Formspree:

```tsx
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  // Manejar respuesta
}
```

## 🔧 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Genera la build de producción
- `npm run preview`: Previsualiza la build de producción
- `npm run lint`: Ejecuta el linter ESLint

## 📱 Responsive Design

El sitio está diseñado con un enfoque mobile-first:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Todos los componentes y páginas son completamente responsivos.

## 🎯 SEO

El sitio incluye:

- Meta tags básicos (title, description)
- Open Graph tags para redes sociales
- Estructura semántica HTML
- URLs amigables con React Router

Para mejorar el SEO:

1. Agrega más contenido único en cada página
2. Configura las meta tags en `src/components/SEO.tsx`
3. Considera agregar un sitemap.xml
4. Implementa structured data (JSON-LD)

## 📄 Licencia

Este proyecto es de uso personal.

## 🤝 Contribuciones

Este es un proyecto personal, pero siéntete libre de usarlo como base para tus propios proyectos.

## 📞 Soporte

Para preguntas o sugerencias, puedes contactar a través del formulario de contacto en el sitio.

---

**Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS**
