import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import IconCircle from '../components/IconCircle'
import { servicios } from '../data/servicios'

const servicioIconMap: Record<string, { icon: 'globe' | 'robot' | 'database' | 'book' | 'megaphone', color: 'blue' | 'green' | 'purple' }> = {
  'sitios-web-pymes': { icon: 'globe', color: 'blue' },
  'agentes-ia-python': { icon: 'robot', color: 'purple' },
  'datos-postgresql': { icon: 'database', color: 'green' },
  'genai-ensenanza': { icon: 'book', color: 'green' },
  'genai-marketing': { icon: 'megaphone', color: 'purple' },
}

export default function Servicios() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-primary-400">Mis Servicios</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Soluciones tecnológicas personalizadas para impulsar tu negocio.
              Desde desarrollo web hasta agentes de IA, encuentro la solución adecuada para ti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Listado de servicios */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
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
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">{servicio.title}</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">{servicio.shortDescription}</p>
                <Link
                  to={`/servicios/${servicio.slug}`}
                  className="text-primary-400 font-semibold hover:text-primary-300 inline-flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Ver detalles →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100 tracking-tight">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Cada proyecto es único. Hablemos sobre tus necesidades específicas.
          </p>
          <Link
            to="/contacto"
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-900 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-primary-500/50 transition-all transform hover:scale-105 inline-block"
          >
            Contacta conmigo
          </Link>
        </div>
      </section>
    </div>
  )
}

