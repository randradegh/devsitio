import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { recursos } from '../data/recursos'

export default function RecursosDetail() {
  const { slug } = useParams<{ slug: string }>()
  const recurso = recursos.find((r) => r.slug === slug)

  if (!recurso) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-dark-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-100">Recurso no encontrado</h1>
          <Link to="/recursos" className="text-primary-400 hover:text-primary-300 hover:underline">
            Volver a recursos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <article className="relative overflow-hidden pt-24 min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-sm font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full capitalize">
                {recurso.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">{recurso.title}</h1>
            <div className="text-gray-400 mb-8">
              {new Date(recurso.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </motion.div>
        </div>
      </article>

      {/* Contenido */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-300 leading-relaxed">
              {recurso.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mb-4 mt-8 text-gray-100">
                      {line.substring(2)}
                    </h1>
                  )
                }
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold mb-3 mt-6 text-gray-100">
                      {line.substring(3)}
                    </h2>
                  )
                }
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mb-2 mt-4 text-gray-100">
                      {line.substring(4)}
                    </h3>
                  )
                }
                if (line.startsWith('- ') || line.startsWith('1. ')) {
                  return (
                    <li key={index} className="ml-6 mb-2 text-gray-300">
                      {line.substring(2)}
                    </li>
                  )
                }
                if (line.trim() === '') {
                  return <br key={index} />
                }
                return (
                  <p key={index} className="mb-4 text-gray-300">
                    {line}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Navegación */}
      <section className="py-12 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              to="/recursos"
              className="text-primary-400 font-medium hover:text-primary-300"
            >
              ← Volver a recursos
            </Link>
            <Link
              to="/contacto"
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-900 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-primary-500/50 transition-all"
            >
              ¿Tienes preguntas? Contacta
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

