import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { casos } from '../data/casos'

export default function Casos() {
  return (
    <div className="pt-24">
      {/* Hero */}
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-blue-700">Casos de Éxito</span>
            </h1>
            <p className="text-lg text-gray-300">
              Proyectos reales que han transformado negocios y procesos.
              Cada caso es único y refleja soluciones personalizadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Listado de casos */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casos.map((caso, index) => (
              <motion.div
                key={caso.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden bg-dark-900/70 border-dark-800 border rounded-2xl shadow-xl backdrop-blur-xl p-8 hover:bg-dark-900/80 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full">
                    {caso.sector}
                  </span>
                  <span className="text-xs text-gray-400">{caso.servicio}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-100">{caso.title}</h2>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{caso.descripcion}</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm text-gray-400 mb-1">Cliente:</div>
                  <div className="font-semibold text-gray-100 mb-3">{caso.cliente}</div>
                  <div className="text-sm text-gray-400 mb-1">Resultado:</div>
                  <div className="text-lg font-bold text-accent-400">{caso.resultado}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100 tracking-tight">
            ¿Quieres ser el próximo caso de éxito?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.
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

