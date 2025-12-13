import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import IconCircle from '../components/IconCircle'
import { servicios } from '../data/servicios'
import { casos } from '../data/casos'

const servicioIconMap: Record<string, { icon: 'globe' | 'robot' | 'database' | 'book' | 'megaphone', color: 'blue' | 'green' | 'purple' }> = {
  'sitios-web-pymes': { icon: 'globe', color: 'blue' },
  'agentes-ia-python': { icon: 'robot', color: 'purple' },
  'datos-postgresql': { icon: 'database', color: 'green' },
  'genai-ensenanza': { icon: 'book', color: 'green' },
  'genai-marketing': { icon: 'megaphone', color: 'purple' },
}

export default function ServicioDetail() {
  const { slug } = useParams<{ slug: string }>()
  const servicio = servicios.find((s) => s.slug === slug)

  if (!servicio) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-dark-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-100">Servicio no encontrado</h1>
          <Link to="/servicios" className="text-primary-400 hover:text-primary-300 hover:underline">
            Volver a servicios
          </Link>
        </div>
      </div>
    )
  }

  const casoRelacionado = casos.find((c) => c.servicio === servicio.title)

  return (
    <div className="pt-24">
      {/* Hero de servicio */}
      <section className="relative overflow-hidden pt-24 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="mb-8 flex justify-center">
              <IconCircle 
                icon={servicioIconMap[servicio.slug]?.icon || 'globe'} 
                color={servicioIconMap[servicio.slug]?.color || 'blue'} 
                size="lg" 
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              {servicio.heroTitle}
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              {servicio.heroSubtitle}
            </p>
            <Link
              to="/contacto"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-900 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-primary-500/50 transition-all transform hover:scale-105 inline-block"
            >
              Agenda una llamada
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problema típico */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-100 tracking-tight">El problema que resuelvo</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{servicio.problema}</p>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-32 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-100 tracking-tight">Cómo te ayudo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicio.beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden bg-dark-900/70 border-dark-800 border rounded-xl shadow-xl backdrop-blur-xl p-6"
              >
                <div className="flex items-start">
                  <div className="text-primary-400 mr-3 mt-1 text-lg">✓</div>
                  <p className="text-gray-300">{beneficio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados esperados */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-100 tracking-tight">Resultados esperados</h2>
          <ul className="space-y-4">
            {servicio.resultados.map((resultado, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="text-accent-400 mr-3 mt-1 text-xl">→</div>
                <span className="text-lg text-gray-300">{resultado}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-32 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100 tracking-tight">Mi proceso de trabajo</h2>
          <div className="space-y-8">
            {servicio.proceso.map((paso, index) => (
              <motion.div
                key={paso.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg shadow-primary-500/50">
                    {paso.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-100">{paso.title}</h3>
                  <p className="text-gray-300 text-lg">{paso.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini caso relacionado */}
      {casoRelacionado && (
        <section className="py-32 bg-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-100 tracking-tight">Caso relacionado</h2>
            <div className="relative overflow-hidden bg-dark-900/70 border-dark-800 border rounded-xl shadow-xl backdrop-blur-xl p-8">
              <div className="text-sm text-primary-400 font-medium mb-2">
                {casoRelacionado.sector} • {casoRelacionado.cliente}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">{casoRelacionado.title}</h3>
              <p className="text-gray-300 mb-4">{casoRelacionado.descripcion}</p>
              <div className="pt-4 border-t border-white/10">
                <div className="text-lg font-semibold text-accent-400">
                  {casoRelacionado.resultado}
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                to="/casos"
                className="text-primary-400 font-medium hover:text-primary-300"
              >
                Ver todos los casos →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-32 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100 tracking-tight">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {servicio.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden bg-dark-900/70 border-dark-800 border rounded-xl shadow-xl backdrop-blur-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-100">
                  {item.question}
                </h3>
                <p className="text-gray-300">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-32 bg-gradient-to-r from-primary-500 via-accent-500 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Agenda una llamada gratuita para discutir tu proyecto.
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
  )
}

