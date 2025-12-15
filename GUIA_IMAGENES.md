# 📸 Guía de Uso de Imágenes

## 📁 Estructura de Directorios

El proyecto tiene dos ubicaciones para imágenes, cada una con un propósito específico:

### 1. `public/images/` - Imágenes Estáticas

**Uso:** Para imágenes que se referencian directamente con rutas absolutas.

**Cómo usar:**
```tsx
// En un componente
<img src="/images/hero/banner.jpg" alt="Banner" />

// O en CSS
background-image: url('/images/hero/banner.jpg');
```

**Ventajas:**
- Fácil de referenciar
- No requiere importación
- Ideal para imágenes grandes o que no cambian frecuentemente

**Subdirectorios:**
- `public/images/hero/` - Imágenes de hero/banner
- `public/images/logos/` - Logos y marcas
- `public/images/avatars/` - Fotos de perfil/avatar
- `public/images/casos/` - Imágenes de casos de éxito
- `public/images/servicios/` - Imágenes relacionadas con servicios
- `public/images/recursos/` - Imágenes para recursos/blog
- `public/images/general/` - Otras imágenes generales

### 2. `src/assets/images/` - Imágenes Importadas

**Uso:** Para imágenes que se importan en los componentes (recomendado para optimización).

**Cómo usar:**
```tsx
// Importar la imagen
import miImagen from '../assets/images/hero/banner.jpg'

// Usar en el componente
<img src={miImagen} alt="Banner" />
```

**Ventajas:**
- Vite optimiza automáticamente las imágenes
- Mejor para tree-shaking
- Detecta errores si la imagen no existe
- Soporte para diferentes formatos (WebP, etc.)

**Subdirectorios:**
- `src/assets/images/hero/` - Imágenes de hero/banner
- `src/assets/images/logos/` - Logos y marcas
- `src/assets/images/avatars/` - Fotos de perfil/avatar
- `src/assets/images/casos/` - Imágenes de casos de éxito
- `src/assets/images/servicios/` - Imágenes relacionadas con servicios
- `src/assets/images/recursos/` - Imágenes para recursos/blog
- `src/assets/images/general/` - Otras imágenes generales

## 🎯 Recomendaciones

### ¿Cuándo usar `public/images/`?
- Imágenes muy grandes que no necesitan optimización
- Imágenes que se referencian en CSS
- Favicons y archivos estáticos
- Imágenes que se cargan dinámicamente por nombre

### ¿Cuándo usar `src/assets/images/`?
- Imágenes que se usan en componentes React
- Imágenes que quieres que Vite optimice
- Imágenes pequeñas a medianas
- **Recomendado para la mayoría de casos**

## 📝 Ejemplos de Uso

### Ejemplo 1: Imagen en componente (recomendado)
```tsx
import heroImage from '../assets/images/hero/banner.jpg'

export default function Home() {
  return (
    <div>
      <img src={heroImage} alt="Hero banner" />
    </div>
  )
}
```

### Ejemplo 2: Imagen estática
```tsx
export default function Home() {
  return (
    <div>
      <img src="/images/hero/banner.jpg" alt="Hero banner" />
    </div>
  )
}
```

### Ejemplo 3: Imagen con background en CSS
```css
.hero-section {
  background-image: url('/images/hero/banner.jpg');
  background-size: cover;
}
```

### Ejemplo 4: Imagen dinámica desde datos
```tsx
// En src/data/casos.ts
export const casos = [
  {
    id: 1,
    title: 'Caso 1',
    image: '/images/casos/caso-1.jpg' // Ruta desde public
  }
]

// En el componente
<img src={caso.image} alt={caso.title} />
```

## 🖼️ Formatos Recomendados

- **JPG/JPEG:** Para fotografías e imágenes con muchos colores
- **PNG:** Para imágenes con transparencia o logos
- **WebP:** Formato moderno, mejor compresión (Vite lo soporta)
- **SVG:** Para iconos y gráficos vectoriales

## 📏 Tamaños Recomendados

- **Hero/Banner:** 1920x1080px o 1440x900px
- **Avatares:** 400x400px o 800x800px
- **Logos:** Según necesidad, mantener proporción
- **Casos/Servicios:** 1200x800px o 1600x900px
- **Recursos/Blog:** 1200x630px (formato social media)

## ⚡ Optimización

Vite optimiza automáticamente las imágenes importadas desde `src/assets/images/`. Para imágenes en `public/images/`, considera:

1. Comprimir imágenes antes de subirlas
2. Usar herramientas como:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

## 📦 Estructura Final

```
devsite_raf/
├── public/
│   └── images/
│       ├── hero/
│       ├── logos/
│       ├── avatars/
│       ├── casos/
│       ├── servicios/
│       ├── recursos/
│       └── general/
└── src/
    └── assets/
        └── images/
            ├── hero/
            ├── logos/
            ├── avatars/
            ├── casos/
            ├── servicios/
            ├── recursos/
            └── general/
```

---

**¡Coloca tus imágenes en los directorios correspondientes según su uso!** 🎨
