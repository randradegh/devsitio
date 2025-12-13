# PRD – Sitio Personal TIC & Gen AI

## 1. Resumen

Sitio web personal para posicionarme como consultor en TIC y Gen AI, captar leads calificados y mostrar mis servicios (desarrollo web, agentes de IA en Python, datos/PostgreSQL, Gen AI para educación y marketing), portafolio y contenido educativo.

Objetivo principal: generar reuniones agendadas y solicitudes de contacto de pymes, equipos de marketing y actores de educación interesados en servicios de Gen AI y TIC.

Stack preferido: **React + Tailwind CSS**, SPA con routing por cliente, lista para deploy en Vercel/Netlify.

---

## 2. Objetivos y métricas

- Transmitir propuesta de valor en menos de 5 segundos al entrar en la home.
- Facilitar que el usuario agende una llamada en 1–2 clics desde cualquier página.
- Estructurar claramente los servicios en páginas separadas.
- Permitir añadir futuros artículos de blog sin tocar el core del layout.

KPIs iniciales:
- % de visitas que llegan a la página de Contacto o agendan llamada.
- Tiempo medio en página en “Servicios” y “Casos de éxito”.
- Nº de leads/mes vía formulario.

---

## 3. Público objetivo

- Dueños de pymes / negocios pequeños sin equipo técnico sólido.
- Equipos de marketing que quieren integrar Gen AI (contenidos, flujos, campañas).
- Docentes, coordinadores académicos y edtechs interesados en Gen AI aplicada a enseñanza.
- Desarrolladores / equipos técnicos que requieren apoyo en PostgreSQL, modelado ER o agentes de IA.

---

## 4. Arquitectura de información (Site map)

- `/` – Inicio  
- `/servicios` – Listado de servicios
  - `/servicios/sitios-web-pymes`
  - `/servicios/agentes-ia-python`
  - `/servicios/datos-postgresql`
  - `/servicios/genai-ensenanza`
  - `/servicios/genai-marketing`
- `/casos` – Casos de éxito / portafolio
- `/recursos` – Blog / recursos
  - Listado de posts (categorías: educación, marketing, datos, agentes)
  - `/recursos/:slug` – Detalle de post
- `/sobre-mi`
- `/contacto`
- Páginas legales (en footer, pueden ser static):
  - `/aviso-privacidad`
  - `/terminos-condiciones`

---

## 5. Requisitos funcionales

### 5.1. Navegación

- Navbar fijo con enlaces: Inicio, Servicios, Casos, Recursos, Sobre mí, Contacto.
- Botón destacado “Agenda una llamada” que lleve a `/contacto` o a un enlace externo (ej. Calendly).
- Scroll suave a secciones internas cuando aplique.

### 5.2. Página Inicio (`/`)

Secciones en orden:

1. **Hero**
   - H1 con propuesta de valor clara (texto se parametriza).
   - Subtítulo corto.
   - Dos CTAs:
     - Primario: “Agenda una llamada”.
     - Secundario: “Ver servicios”.
   - Área visual: ilustración, mockup o imagen (puede ser placeholder).

2. **Para quién trabajo**
   - Tarjetas con segmentos: Pymes, Equipos de marketing, Educación, Equipos técnicos.
   - Cada tarjeta: título + 1–2 líneas de descripción.

3. **Resumen de servicios**
   - Grid de tarjetas (mín. 4, máx. 6).
   - Cada tarjeta: icono, título de servicio, breve descripción, enlace a página de servicio.

4. **Cómo trabajo**
   - Timeline de 3–4 pasos (Discovery → Propuesta → Implementación → Acompañamiento).
   - Breve texto por paso.

5. **Casos destacados**
   - 2–3 tarjetas con: título del caso, tipo de cliente, resultado clave.
   - Botón “Ver todos los casos”.

6. **Prueba social**
   - Bloque de testimonios (inicialmente placeholders).
   - Espacio para logos de clientes.

7. **Recursos recientes**
   - Listado de 3 posts recientes del blog (título, categoría, fecha, CTA “Leer más”).

8. **CTA final**
   - Título + texto corto y botón “Agenda una llamada”.

### 5.3. Página Servicios (`/servicios`)

- Introducción corta + listado de servicios en tarjetas.
- Cada tarjeta enlaza a su página de detalle.

### 5.4. Plantilla página de servicio (`/servicios/:slug`)

Secciones:

1. Hero de servicio
2. Problema típico del cliente
3. Cómo ayuda este servicio (beneficios)
4. Resultados esperados (bullets)
5. Proceso en pasos
6. Mini caso relacionado (si existe)
7. FAQ (3–5 preguntas)
8. CTA final a contacto / agenda

### 5.5. Casos de éxito (`/casos`)

- Lista de casos por tarjetas.
- Cada caso: tipo de cliente, sector, servicio principal, resultado clave.
- Posibilidad de filtrar por categoría/servicio (puede ser fase 2).

### 5.6. Recursos / Blog (`/recursos` y `/recursos/:slug`)

- Listado simple con paginación básica o “ver más”.
- Filtros por categoría (educación, marketing, datos, agentes).
- Página de detalle con título, fecha, categoría y contenido en markdown.

### 5.7. Sobre mí (`/sobre-mi`)

- Hero con foto + texto.
- Trayectoria (timeline simple o bloques).
- Stack / tecnologías.
- Valores / enfoque de trabajo.
- CTA suave hacia Servicios o Contacto.

### 5.8. Contacto (`/contacto`)

- Formulario con campos:
  - Nombre
  - Email
  - Tipo de proyecto (select: web, agentes, datos, gen ai educación, gen ai marketing, otro)
  - Mensaje/libre descripción
- Opción de insertar iframe/URL de agenda (ej. Calendly) debajo o al lado del formulario.
- Mensaje de confirmación tras enviar.

---

## 6. Requisitos no funcionales

- **Performance**: buenas prácticas básicas (lazy load de imágenes, bundle razonable).
- **Responsive**: diseño mobile-first funcional en móvil, tablet y desktop.
- **Accesibilidad**: contraste adecuado, uso correcto de headings, labels en formularios.
- **SEO básico**:
  - Meta title/description por página.
  - URLs limpias basadas en slug.
  - Open Graph tags para compartir.

---

## 7. Stack técnico y lineamientos

### 7.1. Frontend

- **Framework**: React (última versión estable).
- **Styling**: Tailwind CSS 3+.
- **Routing**: React Router o router equivalente.
- **Build**: Vite (preferido) u opción similar.

### 7.2. Contenido

- Textos y posts deberían poder cargarse desde:
  - Archivos JSON/TS locales, o
  - Markdown estático dentro del repo.
- No se requiere CMS en la primera versión.

### 7.3. Integraciones

- Enlace configurable para agenda (ej. Calendly).
- Formulario puede:
  - Enviar a servicio de email (Formspree, Resend, etc.) o
  - Usar endpoint serverless básico (definido después).
- Configurar fácilmente variables de entorno para URLs externas (agenda, email, etc.).

---

## 8. Diseño y UX (wireframe high-level)

- Layout limpio, predominio de tipografía clara, mucho espacio en blanco.
- Paleta orientada a tecnología/educación (ej. azul/verde + acentos).
- Botón primario consistente en todo el sitio.
- Animaciones suaves y discretas (framer-motion opcional).

---

## 9. Roadmap y alcance de la V1

**V1 – Alcance obligatorio**
- Todas las páginas definidas arriba.
- Formularios funcionando.
- SEO básico.
- Responsive completo.

**V2 – Nice to have**
- Filtros en casos y blog.
- Dark mode.
- Microanimaciones avanzadas.

---

## 10. Criterios de aceptación

- Navegación entre todas las rutas del sitemap sin errores.
- El usuario puede:
  - Entender qué hago desde el hero en < 5 segundos.
  - Encontrar y leer la descripción de cada servicio en 2 clics máximo.
  - Enviar el formulario de contacto sin errores.
  - Leer el sitio correctamente en móvil.


