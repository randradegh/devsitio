export interface Servicio {
  slug: string
  title: string
  shortDescription: string
  icon: string
  heroTitle: string
  heroSubtitle: string
  problema: string
  beneficios: string[]
  resultados: string[]
  proceso: { step: number; title: string; description: string }[]
  faq: { question: string; answer: string }[]
}

export const servicios: Servicio[] = [
  {
    slug: 'sitios-web-pymes',
    title: 'Sitios Web para Pymes',
    shortDescription: 'Desarrollo de sitios web modernos y responsivos que convierten visitantes en clientes.',
    icon: '🌐',
    heroTitle: 'Sitios Web que Convierten',
    heroSubtitle: 'Diseño y desarrollo de sitios web modernos, rápidos y optimizados para tu negocio.',
    problema: 'Muchas pymes tienen sitios web obsoletos, lentos o que no reflejan la calidad de su negocio. Esto genera pérdida de oportunidades y una imagen poco profesional.',
    beneficios: [
      'Diseño moderno y profesional que refleja tu marca',
      'Optimizado para móviles y tablets',
      'Carga rápida y optimización SEO básica',
      'Fácil de actualizar y mantener',
      'Integración con herramientas de marketing',
    ],
    resultados: [
      'Mayor visibilidad online',
      'Mejor conversión de visitantes a clientes',
      'Imagen profesional y confiable',
      'Base sólida para estrategias de marketing digital',
    ],
    proceso: [
      {
        step: 1,
        title: 'Discovery',
        description: 'Analizamos tus necesidades, objetivos y público objetivo para definir la estrategia del sitio.',
      },
      {
        step: 2,
        title: 'Diseño',
        description: 'Creamos wireframes y diseños que reflejan tu marca y optimizan la experiencia del usuario.',
      },
      {
        step: 3,
        title: 'Desarrollo',
        description: 'Construimos el sitio con tecnologías modernas, optimizado para velocidad y SEO.',
      },
      {
        step: 4,
        title: 'Lanzamiento y Acompañamiento',
        description: 'Lanzamos el sitio y te acompañamos en las primeras semanas para ajustes y optimizaciones.',
      },
    ],
    faq: [
      {
        question: '¿Cuánto tiempo toma desarrollar un sitio web?',
        answer: 'Depende de la complejidad, pero típicamente entre 4-8 semanas desde el inicio hasta el lanzamiento.',
      },
      {
        question: '¿Incluye hosting y dominio?',
        answer: 'El desarrollo incluye la configuración inicial. El hosting y dominio son servicios separados que podemos gestionar.',
      },
      {
        question: '¿Puedo actualizar el contenido yo mismo?',
        answer: 'Sí, podemos configurar un CMS fácil de usar o te enseñamos a hacer actualizaciones básicas.',
      },
    ],
  },
  {
    slug: 'agentes-ia-python',
    title: 'Agentes de IA en Python',
    shortDescription: 'Desarrollo de agentes inteligentes automatizados que optimizan procesos de negocio.',
    icon: '🤖',
    heroTitle: 'Agentes de IA Personalizados',
    heroSubtitle: 'Automatiza tareas repetitivas y procesos complejos con agentes de IA desarrollados en Python.',
    problema: 'Muchas empresas pierden tiempo y recursos en tareas repetitivas que podrían automatizarse. Los agentes de IA pueden procesar información, tomar decisiones y ejecutar acciones de forma autónoma.',
    beneficios: [
      'Automatización de procesos repetitivos',
      'Análisis inteligente de datos',
      'Integración con APIs y sistemas existentes',
      'Escalable y mantenible',
      'Reducción de errores humanos',
    ],
    resultados: [
      'Ahorro significativo de tiempo',
      'Mayor eficiencia operativa',
      'Procesos más consistentes y confiables',
      'Liberación de recursos para tareas estratégicas',
    ],
    proceso: [
      {
        step: 1,
        title: 'Análisis del Proceso',
        description: 'Identificamos las tareas a automatizar y definimos los requisitos del agente.',
      },
      {
        step: 2,
        title: 'Diseño de la Arquitectura',
        description: 'Diseñamos la estructura del agente, sus capacidades y flujos de trabajo.',
      },
      {
        step: 3,
        title: 'Desarrollo e Integración',
        description: 'Desarrollamos el agente en Python e integramos con tus sistemas existentes.',
      },
      {
        step: 4,
        title: 'Pruebas y Optimización',
        description: 'Probamos exhaustivamente y optimizamos el rendimiento antes del despliegue.',
      },
    ],
    faq: [
      {
        question: '¿Qué tipo de tareas pueden automatizar los agentes?',
        answer: 'Desde procesamiento de documentos, análisis de datos, respuestas automáticas, hasta flujos complejos de decisión.',
      },
      {
        question: '¿Necesito conocimientos técnicos para usarlos?',
        answer: 'No necesariamente. Los agentes se diseñan para ser fáciles de usar, aunque puede requerir configuración inicial.',
      },
      {
        question: '¿Qué tecnologías usan?',
        answer: 'Principalmente Python, con librerías como LangChain, OpenAI, y frameworks modernos de IA.',
      },
    ],
  },
  {
    slug: 'datos-postgresql',
    title: 'Datos y PostgreSQL',
    shortDescription: 'Diseño de bases de datos, modelado ER y optimización de consultas para aplicaciones escalables.',
    icon: '🗄️',
    heroTitle: 'Bases de Datos Robustas',
    heroSubtitle: 'Diseño, implementación y optimización de bases de datos PostgreSQL para aplicaciones escalables.',
    problema: 'Una base de datos mal diseñada puede convertirse en un cuello de botella, afectando el rendimiento y la escalabilidad de tu aplicación. El modelado correcto es fundamental.',
    beneficios: [
      'Modelado ER optimizado para tu caso de uso',
      'Consultas eficientes y bien indexadas',
      'Escalabilidad y rendimiento',
      'Mantenimiento y documentación clara',
      'Mejores prácticas de seguridad',
    ],
    resultados: [
      'Aplicaciones más rápidas y responsivas',
      'Base sólida para el crecimiento',
      'Reducción de costos de infraestructura',
      'Datos organizados y accesibles',
    ],
    proceso: [
      {
        step: 1,
        title: 'Análisis de Requisitos',
        description: 'Entendemos tus necesidades de datos, relaciones y casos de uso.',
      },
      {
        step: 2,
        title: 'Diseño del Modelo',
        description: 'Creamos el modelo ER, definimos tablas, relaciones y constraints.',
      },
      {
        step: 3,
        title: 'Implementación',
        description: 'Implementamos la base de datos, creamos índices y optimizamos consultas.',
      },
      {
        step: 4,
        title: 'Documentación y Capacitación',
        description: 'Documentamos el modelo y te capacitamos en su uso y mantenimiento.',
      },
    ],
    faq: [
      {
        question: '¿Puedo migrar desde otra base de datos?',
        answer: 'Sí, podemos ayudarte a migrar datos desde MySQL, SQL Server u otras bases de datos a PostgreSQL.',
      },
      {
        question: '¿Incluye optimización de consultas existentes?',
        answer: 'Sí, podemos analizar y optimizar consultas lentas, crear índices apropiados y mejorar el rendimiento.',
      },
      {
        question: '¿Qué nivel de experiencia necesito?',
        answer: 'Te proporcionamos documentación clara y capacitación. Puedo trabajar con tu equipo técnico o solo.',
      },
    ],
  },
  {
    slug: 'genai-ensenanza',
    title: 'Gen AI para Educación',
    shortDescription: 'Soluciones de IA generativa para personalizar el aprendizaje y mejorar la experiencia educativa.',
    icon: '📚',
    heroTitle: 'IA Generativa para Educación',
    heroSubtitle: 'Integra Gen AI en tu institución educativa para personalizar el aprendizaje y mejorar resultados.',
    problema: 'Los docentes enfrentan el desafío de personalizar el aprendizaje para cada estudiante. La Gen AI puede crear contenido adaptativo, generar ejercicios personalizados y proporcionar retroalimentación instantánea.',
    beneficios: [
      'Contenido educativo personalizado',
      'Generación automática de ejercicios y evaluaciones',
      'Tutores virtuales y asistencia 24/7',
      'Análisis de progreso estudiantil',
      'Reducción de carga administrativa',
    ],
    resultados: [
      'Mejor engagement de estudiantes',
      'Aprendizaje más personalizado',
      'Ahorro de tiempo para docentes',
      'Mejores resultados académicos',
    ],
    proceso: [
      {
        step: 1,
        title: 'Análisis de Necesidades',
        description: 'Identificamos áreas donde la Gen AI puede tener mayor impacto en tu institución.',
      },
      {
        step: 2,
        title: 'Diseño de Solución',
        description: 'Diseñamos la solución personalizada, integrando con tus sistemas existentes.',
      },
      {
        step: 3,
        title: 'Desarrollo y Pruebas',
        description: 'Desarrollamos la solución y la probamos con usuarios reales.',
      },
      {
        step: 4,
        title: 'Implementación y Capacitación',
        description: 'Implementamos la solución y capacitamos a docentes y personal.',
      },
    ],
    faq: [
      {
        question: '¿Es seguro usar IA en educación?',
        answer: 'Sí, implementamos medidas de privacidad y seguridad, cumpliendo con normativas de protección de datos.',
      },
      {
        question: '¿Qué plataformas educativas puedo integrar?',
        answer: 'Podemos integrar con Moodle, Canvas, Google Classroom y otras plataformas LMS populares.',
      },
      {
        question: '¿Los docentes necesitan capacitación técnica?',
        answer: 'No necesariamente. Diseñamos interfaces intuitivas, aunque ofrecemos capacitación para aprovechar al máximo las herramientas.',
      },
    ],
  },
  {
    slug: 'genai-marketing',
    title: 'Gen AI para Marketing',
    shortDescription: 'Automatiza la creación de contenido, campañas y estrategias de marketing con IA generativa.',
    icon: '📢',
    heroTitle: 'Marketing Potenciado por IA',
    heroSubtitle: 'Automatiza la creación de contenido, personaliza campañas y optimiza estrategias con Gen AI.',
    problema: 'Los equipos de marketing necesitan crear grandes volúmenes de contenido de calidad, personalizar mensajes y optimizar campañas constantemente. La Gen AI puede multiplicar la productividad y efectividad.',
    beneficios: [
      'Generación automática de contenido (posts, emails, copy)',
      'Personalización de mensajes a escala',
      'Optimización de campañas con IA',
      'Análisis de sentimiento y tendencias',
      'Automatización de flujos de marketing',
    ],
    resultados: [
      'Mayor volumen de contenido de calidad',
      'Mejor engagement y conversión',
      'Ahorro significativo de tiempo',
      'ROI mejorado en campañas',
    ],
    proceso: [
      {
        step: 1,
        title: 'Auditoría y Estrategia',
        description: 'Analizamos tus procesos actuales y definimos dónde la Gen AI puede tener mayor impacto.',
      },
      {
        step: 2,
        title: 'Diseño de Flujos',
        description: 'Diseñamos flujos automatizados y templates para contenido y campañas.',
      },
      {
        step: 3,
        title: 'Implementación',
        description: 'Desarrollamos e integramos las herramientas de Gen AI con tus plataformas de marketing.',
      },
      {
        step: 4,
        title: 'Optimización Continua',
        description: 'Monitoreamos resultados y ajustamos estrategias basadas en datos.',
      },
    ],
    faq: [
      {
        question: '¿El contenido generado por IA es único?',
        answer: 'Sí, configuramos los modelos para generar contenido original y alineado con tu marca y voz.',
      },
      {
        question: '¿Puedo integrar con mis herramientas actuales?',
        answer: 'Sí, integramos con plataformas como HubSpot, Mailchimp, Google Ads, Meta Ads y otras.',
      },
      {
        question: '¿Necesito conocimientos técnicos?',
        answer: 'No, diseñamos interfaces intuitivas. Tu equipo de marketing puede usar las herramientas sin conocimientos técnicos.',
      },
    ],
  },
]

