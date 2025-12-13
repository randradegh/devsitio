import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import IconCircle from '../components/IconCircle'
import { servicios } from '../data/servicios'
import { casos } from '../data/casos'
import { recursos } from '../data/recursos'

const segmentos = [
  {
    title: 'Pymes',
    description: 'Negocios pequeños que necesitan presencia digital profesional y soluciones tecnológicas accesibles.',
    icon: 'building' as const,
    color: 'blue' as const,
  },
  {
    title: 'Equipos de Marketing',
    description: 'Profesionales que buscan integrar Gen AI para automatizar contenido y optimizar campañas.',
    icon: 'megaphone' as const,
    color: 'purple' as const,
  },
  {
    title: 'Educación',
    description: 'Instituciones y docentes que quieren personalizar el aprendizaje con IA generativa.',
    icon: 'book' as const,
    color: 'green' as const,
  },
  {
    title: 'Equipos Técnicos',
    description: 'Desarrolladores y equipos que requieren apoyo en bases de datos, arquitectura y agentes de IA.',
    icon: 'code' as const,
    color: 'blue' as const,
  },
]

const proceso = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Analizamos tus necesidades y objetivos para entender el problema a resolver.',
  },
  {
    step: 2,
    title: 'Propuesta',
    description: 'Diseñamos una solución personalizada con alcance, tiempos y presupuesto claros.',
  },
  {
    step: 3,
    title: 'Implementación',
    description: 'Desarrollamos la solución siguiendo mejores prácticas y estándares de calidad.',
  },
  {
    step: 4,
    title: 'Acompañamiento',
    description: 'Te apoyamos en el lanzamiento y optimización continua para asegurar el éxito.',
  },
]

const servicioIconMap: Record<string, { icon: 'globe' | 'robot' | 'database' | 'book' | 'megaphone', color: 'blue' | 'green' | 'purple' }> = {
  'sitios-web-pymes': { icon: 'globe', color: 'blue' },
  'agentes-ia-python': { icon: 'robot', color: 'purple' },
  'datos-postgresql': { icon: 'database', color: 'green' },
  'genai-ensenanza': { icon: 'book', color: 'green' },
  'genai-marketing': { icon: 'megaphone', color: 'purple' },
}

export default function Home() {
  const serviciosDestacados = servicios.slice(0, 6)
  const casosDestacados = casos.slice(0, 3)
  const recursosRecientes = recursos.slice(0, 3)

  return (
    <>
      <SEO
        title="Consultoría TIC & Gen AI - Desarrollo Web, Agentes IA, Datos"
        description="Desarrollo web, agentes de IA, bases de datos y Gen AI para educación y marketing. Soluciones personalizadas que impulsan tu negocio."
        path="/"
      />
      <div className="pt-24">
        {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 min-h-[90vh] flex items-center">
        {/* Background similar to image - dark blue gradient with subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-primary-400/15 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl lg:px-8 mx-auto px-6 relative z-10">
          <div className="sm:pt-16 text-center max-w-3xl mr-auto ml-auto pt-12 pb-48">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-medium text-white/90 bg-dark-800/50 mix-blend-screen border-dark-700 border rounded-full mr-auto mb-4 ml-auto pt-1 pr-3 pb-1 pl-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
              </svg>
              Consultoría Especializada
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="sm:text-5xl md:text-6xl lg:text-7xl text-3xl font-bold text-white tracking-tight leading-tight"
            >
              Transforma ideas en
              <br />
              <span className="font-bold text-blue-500 tracking-tight">soluciones</span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:text-base text-sm font-normal text-gray-300 mt-6 max-w-2xl mx-auto"
            >
              Desarrollo web, agentes de IA, bases de datos y Gen AI para educación y marketing.
              Soluciones personalizadas que impulsan tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center"
            >
              <Link
                to="/contacto"
                className="relative inline-block group rounded-full"
              >
                <button className="relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-dark-900/60 mix-blend-screen border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] font-medium text-sm">
                  <span className="relative z-10 inline-flex items-center gap-2 rounded-full">
                    Agenda una llamada
                    <svg className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 rounded-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" className="rounded-full"></path>
                    </svg>
                  </span>
                  <span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 rounded-full"></span>
                </button>
              </Link>
              
              <Link
                to="/servicios"
                className="group relative overflow-hidden leading-none transition-all duration-300 text-white bg-dark-800/50 mix-blend-screen border-dark-700 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm backdrop-blur text-sm font-medium"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-white/5"></span>
                <span className="relative z-10 inline-flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                  </svg>
                  Ver servicios
                </span>
              </Link>
            </motion.div>
            
            {/* Social proof section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
            >
              <div className="flex -space-x-2">
                <div className="h-9 w-9 rounded-full ring-2 ring-dark-800 bg-gradient-to-br from-primary-400 to-primary-600"></div>
                <div className="h-9 w-9 rounded-full ring-2 ring-dark-800 bg-gradient-to-br from-accent-400 to-accent-600"></div>
                <div className="h-9 w-9 rounded-full ring-2 ring-dark-800 bg-gradient-to-br from-primary-500 to-accent-500"></div>
              </div>
              <div className="flex gap-2 text-sm font-medium text-gray-400 mix-blend-screen items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                Confiado por equipos de desarrollo
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Para quién trabajo */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-100 tracking-tight">
            Para quién trabajo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segmentos.map((segmento, index) => (
              <motion.div
                key={segmento.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden bg-dark-900/70 border-dark-800 border rounded-2xl shadow-xl backdrop-blur-xl p-8 hover:bg-dark-900/80 transition-all group"
              >
                <div className="mb-6">
                  <IconCircle icon={segmento.icon} color={segmento.color} size="md" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-100">{segmento.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{segmento.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resumen de servicios */}
      <section className="py-32 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-100 tracking-tight">
            Mis servicios
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-base">
            Soluciones tecnológicas personalizadas para impulsar tu negocio
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviciosDestacados.map((servicio, index) => (
              <motion.div
                key={servicio.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden bg-dark-900/70 border-dark-800 border rounded-2xl shadow-xl backdrop-blur-xl p-8 hover:bg-dark-900/80 transition-all group"
              >
                <div className="mb-6">
                  <IconCircle 
                    icon={servicioIconMap[servicio.slug]?.icon || 'globe'} 
                    color={servicioIconMap[servicio.slug]?.color || 'blue'} 
                    size="md" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-100">{servicio.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{servicio.shortDescription}</p>
                <Link
                  to={`/servicios/${servicio.slug}`}
                  className="text-primary-400 font-medium hover:text-primary-300 inline-flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Saber más →
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/servicios"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-900 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-primary-500/50 transition-all inline-block"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Cómo trabajo */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-100 tracking-tight">
            Cómo trabajo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {proceso.map((paso, index) => (
              <motion.div
                key={paso.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-primary-500/50">
                  {paso.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-100">{paso.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{paso.description}</p>
                {index < proceso.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent" style={{ width: 'calc(100% - 4rem)' }}></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos destacados */}
      <section className="py-32 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-100 tracking-tight">
            Casos de éxito
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-base">
            Proyectos que han transformado negocios y procesos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {casosDestacados.map((caso, index) => (
              <motion.div
                key={caso.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="text-sm text-primary-400 font-medium mb-3">{caso.sector}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-100">{caso.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{caso.descripcion}</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm font-semibold text-accent-400">{caso.resultado}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/casos"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-900 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-primary-500/50 transition-all inline-block"
            >
              Ver todos los casos
            </Link>
          </div>
        </div>
      </section>

      {/* Prueba social */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-100 tracking-tight">
            Lo que dicen mis clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="flex mb-6 text-yellow-400">
                  {'⭐'.repeat(5)}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "Profesionalismo excepcional y soluciones que realmente funcionan. 
                  El proyecto superó nuestras expectativas."
                </p>
                <div className="text-sm font-semibold text-gray-100">Cliente Satisfecho</div>
                <div className="text-sm text-gray-400">CEO, Empresa</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos recientes */}
      <section className="py-32 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-100 tracking-tight">
            Recursos recientes
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-base">
            Artículos y guías sobre TIC, IA y tecnología
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recursosRecientes.map((recurso, index) => (
              <motion.div
                key={recurso.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="text-sm text-primary-400 font-medium mb-3 capitalize">
                  {recurso.category}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-100">{recurso.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{recurso.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm text-gray-500">
                    {new Date(recurso.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <Link
                    to={`/recursos/${recurso.slug}`}
                    className="text-primary-400 font-medium hover:text-primary-300"
                  >
                    Leer más →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-32 bg-gradient-to-r from-primary-700 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Agenda una llamada gratuita para discutir tu proyecto y cómo puedo ayudarte.
          </p>
          <Link
            to="/contacto"
            className="px-10 py-5 bg-white text-dark-900 rounded-lg font-semibold hover:shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105 inline-block"
          >
            Agenda una llamada
          </Link>
        </div>
      </section>
      </div>
    </>
  )
}

