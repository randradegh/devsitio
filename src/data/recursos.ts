export interface Recurso {
  slug: string
  title: string
  category: 'educación' | 'marketing' | 'datos' | 'agentes'
  date: string
  excerpt: string
  content: string
}

export const recursos: Recurso[] = [
  {
    slug: 'introduccion-agentes-ia',
    title: 'Introducción a los Agentes de IA: ¿Qué son y cómo pueden ayudar a tu negocio?',
    category: 'agentes',
    date: '2024-01-15',
    excerpt: 'Descubre qué son los agentes de IA y cómo pueden automatizar procesos en tu empresa.',
    content: `# Introducción a los Agentes de IA

Los agentes de IA son sistemas autónomos que pueden percibir su entorno, tomar decisiones y ejecutar acciones para alcanzar objetivos específicos. A diferencia de los chatbots simples, los agentes pueden realizar tareas complejas que requieren razonamiento y múltiples pasos.

## ¿Qué hace único a un agente de IA?

1. **Autonomía**: Puede trabajar sin supervisión constante
2. **Razonamiento**: Analiza información y toma decisiones
3. **Acción**: Ejecuta tareas reales, no solo responde preguntas
4. **Aprendizaje**: Mejora con el tiempo basándose en resultados

## Casos de uso comunes

- Automatización de procesos de negocio
- Análisis y procesamiento de documentos
- Gestión de tareas repetitivas
- Integración entre sistemas

## Conclusión

Los agentes de IA representan el siguiente nivel en automatización inteligente, permitiendo a las empresas escalar operaciones sin aumentar proporcionalmente los recursos humanos.`,
  },
  {
    slug: 'gen-ai-educacion',
    title: 'Gen AI en Educación: Personalizando el Aprendizaje',
    category: 'educación',
    date: '2024-01-10',
    excerpt: 'Cómo la IA generativa está transformando la educación personalizada.',
    content: `# Gen AI en Educación: Personalizando el Aprendizaje

La inteligencia artificial generativa está revolucionando la forma en que enseñamos y aprendemos, permitiendo experiencias educativas verdaderamente personalizadas.

## Beneficios clave

### Para estudiantes
- Contenido adaptado a su ritmo de aprendizaje
- Retroalimentación instantánea y personalizada
- Acceso 24/7 a tutores virtuales

### Para docentes
- Reducción de carga administrativa
- Herramientas para crear contenido educativo
- Análisis de progreso estudiantil

## Implementación práctica

Las instituciones educativas pueden empezar con proyectos piloto en áreas específicas, como generación de ejercicios o asistencia virtual, y escalar gradualmente.`,
  },
  {
    slug: 'marketing-ia-contenido',
    title: 'Cómo la IA Generativa Transforma la Creación de Contenido',
    category: 'marketing',
    date: '2024-01-05',
    excerpt: 'Estrategias para usar Gen AI en marketing y aumentar la productividad de tu equipo.',
    content: `# Cómo la IA Generativa Transforma la Creación de Contenido

Los equipos de marketing están descubriendo que la IA generativa puede multiplicar su productividad sin sacrificar calidad.

## Aplicaciones prácticas

1. **Generación de copy**: Posts para redes sociales, emails, landing pages
2. **Personalización**: Mensajes adaptados a diferentes audiencias
3. **Optimización**: A/B testing automatizado de variaciones de contenido
4. **Análisis**: Identificación de tendencias y sentimientos

## Mejores prácticas

- Siempre revisa y edita el contenido generado
- Mantén la voz y tono de tu marca
- Usa la IA como asistente, no como reemplazo
- Combina creatividad humana con eficiencia de IA`,
  },
  {
    slug: 'postgresql-optimizacion',
    title: 'Optimización de PostgreSQL: Mejores Prácticas',
    category: 'datos',
    date: '2023-12-20',
    excerpt: 'Guía práctica para mejorar el rendimiento de tus bases de datos PostgreSQL.',
    content: `# Optimización de PostgreSQL: Mejores Prácticas

PostgreSQL es una base de datos poderosa, pero requiere configuración adecuada para obtener el mejor rendimiento.

## Áreas clave de optimización

### Índices
- Crea índices en columnas usadas frecuentemente en WHERE y JOIN
- Usa índices compuestos para consultas complejas
- Monitorea índices no utilizados

### Consultas
- Analiza EXPLAIN para entender el plan de ejecución
- Evita SELECT * cuando no sea necesario
- Usa LIMIT para consultas grandes

### Configuración
- Ajusta shared_buffers según tu RAM
- Configura work_mem apropiadamente
- Monitorea conexiones activas

## Herramientas útiles

- pg_stat_statements para análisis de consultas
- pgAdmin para administración visual
- EXPLAIN ANALYZE para debugging`,
  },
]




