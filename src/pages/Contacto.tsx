import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

const tiposProyecto = [
  'Sitios Web para Pymes',
  'Agentes de IA en Python',
  'Datos y PostgreSQL',
  'Gen AI para Educación',
  'Gen AI para Marketing',
  'Otro',
]

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoProyecto: '',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setEnviando(true)

    // Aquí puedes integrar con un servicio de email como Formspree, Resend, etc.
    // Por ahora simulamos el envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setEnviado(true)
    setEnviando(false)
    setFormData({ nombre: '', email: '', tipoProyecto: '', mensaje: '' })
  }

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com'

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
              <span className="text-blue-700">Contacto</span>
            </h1>
            <p className="text-lg text-gray-300">
              ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulario y Calendly */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-100 tracking-tight">Envíame un mensaje</h2>
              {enviado ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative overflow-hidden bg-dark-900/70 border-dark-800 border rounded-xl shadow-xl backdrop-blur-xl p-6"
                >
                  <div className="text-accent-400 font-semibold mb-2">✓ Mensaje enviado</div>
                  <p className="text-gray-300">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-100 placeholder-gray-500"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-100 placeholder-gray-500"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tipoProyecto"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Tipo de proyecto
                    </label>
                    <select
                      id="tipoProyecto"
                      value={formData.tipoProyecto}
                      onChange={(e) => setFormData({ ...formData, tipoProyecto: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-100"
                    >
                      <option value="">Selecciona una opción</option>
                      {tiposProyecto.map((tipo) => (
                        <option key={tipo} value={tipo}>
                          {tipo}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={6}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-100 placeholder-gray-500"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-blue-900 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {enviando ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>

            {/* Calendly o información adicional */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-100 tracking-tight">Agenda una llamada</h2>
              <p className="text-gray-300 mb-6">
                Prefieres hablar directamente? Agenda una llamada gratuita de 30 minutos
                para discutir tu proyecto.
              </p>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 bg-gradient-to-r from-accent-500 to-blue-900 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-accent-500/50 transition-all text-center mb-8"
              >
                Abrir calendario →
              </a>

              <div className="relative overflow-hidden bg-dark-900/70 border-dark-800 border rounded-xl shadow-xl backdrop-blur-xl p-6">
                <h3 className="font-semibold mb-4 text-gray-100">Información de contacto</h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <strong className="text-gray-200">Email:</strong> contacto@ejemplo.com
                  </p>
                  <p>
                    <strong className="text-gray-200">Respuesta:</strong> Generalmente respondo en menos de 24 horas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

