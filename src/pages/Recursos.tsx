import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { recursos } from '../data/recursos'
import { useState } from 'react'

const categorias = ['todos', 'educación', 'marketing', 'datos', 'agentes'] as const

export default function Recursos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('todos')

  const recursosFiltrados =
    categoriaSeleccionada === 'todos'
      ? recursos
      : recursos.filter((r) => r.category === categoriaSeleccionada)

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
              <span className="text-blue-700">Recursos y Blog</span>
            </h1>
            <p className="text-lg text-gray-300">
              Artículos, guías y recursos sobre TIC, IA generativa, desarrollo y tecnología.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-dark-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaSeleccionada(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  categoriaSeleccionada === cat
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-800/50 text-gray-300 hover:bg-dark-800 border border-white/10'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Listado de recursos */}
      <section className="py-32 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {recursosFiltrados.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No hay recursos en esta categoría.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recursosFiltrados.map((recurso, index) => (
                <motion.div
                  key={recurso.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-hidden bg-dark-900/70 border-dark-800 border rounded-2xl shadow-xl backdrop-blur-xl p-8 hover:bg-dark-900/80 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full capitalize">
                      {recurso.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(recurso.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-gray-100">{recurso.title}</h2>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{recurso.excerpt}</p>
                  <Link
                    to={`/recursos/${recurso.slug}`}
                    className="text-primary-400 font-medium hover:text-primary-300 inline-flex items-center"
                  >
                    Leer más →
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

