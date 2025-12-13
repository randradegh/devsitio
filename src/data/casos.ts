export interface Caso {
  id: string
  title: string
  cliente: string
  sector: string
  servicio: string
  resultado: string
  descripcion: string
}

export const casos: Caso[] = [
  {
    id: '1',
    title: 'E-commerce Moderno para Retail',
    cliente: 'Retail Local',
    sector: 'Comercio',
    servicio: 'Sitios Web para Pymes',
    resultado: 'Aumento del 150% en ventas online en 3 meses',
    descripcion: 'Desarrollo de plataforma e-commerce completa con integración de pagos y gestión de inventario.',
  },
  {
    id: '2',
    title: 'Agente de IA para Atención al Cliente',
    cliente: 'Startup Tech',
    sector: 'Tecnología',
    servicio: 'Agentes de IA en Python',
    resultado: 'Reducción del 70% en tiempo de respuesta y 24/7 disponible',
    descripcion: 'Implementación de agente conversacional que maneja consultas frecuentes y deriva casos complejos.',
  },
  {
    id: '3',
    title: 'Optimización de Base de Datos',
    cliente: 'SaaS B2B',
    sector: 'Software',
    servicio: 'Datos y PostgreSQL',
    resultado: 'Mejora del 300% en velocidad de consultas',
    descripcion: 'Rediseño del modelo de datos y optimización de consultas para aplicación SaaS con alto tráfico.',
  },
  {
    id: '4',
    title: 'Plataforma Educativa con IA',
    cliente: 'Institución Educativa',
    sector: 'Educación',
    servicio: 'Gen AI para Educación',
    resultado: 'Mejora del 40% en engagement estudiantil',
    descripcion: 'Integración de Gen AI para generar contenido personalizado y tutorías virtuales.',
  },
  {
    id: '5',
    title: 'Automatización de Marketing',
    cliente: 'Agencia de Marketing',
    sector: 'Marketing',
    servicio: 'Gen AI para Marketing',
    resultado: 'Aumento del 200% en producción de contenido',
    descripcion: 'Sistema automatizado para generar contenido de redes sociales, emails y campañas personalizadas.',
  },
]

