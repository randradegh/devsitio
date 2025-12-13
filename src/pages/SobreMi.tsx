import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import IconCircle from '../components/IconCircle'

const tecnologias = [
  'React', 'TypeScript', 'Python', 'PostgreSQL', 'LangChain',
  'OpenAI', 'Tailwind CSS', 'Node.js', 'Vite', 'Git'
]

const valores = [
  {
    title: 'Calidad',
    description: 'Código limpio, bien documentado y siguiendo mejores prácticas.',
  },
  {
    title: 'Comunicación',
    description: 'Transparencia en cada etapa del proyecto, con actualizaciones regulares.',
  },
  {
    title: 'Resultados',
    description: 'Enfoque en soluciones que generen valor real para tu negocio.',
  },
  {
    title: 'Aprendizaje continuo',
    description: 'Mantenerme al día con las últimas tecnologías y tendencias.',
  },
]

export default function SobreMi() {
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
            <div className="mb-8 flex justify-center">
              <IconCircle icon="code" color="blue" size="lg" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-blue-700">Sobre Mí</span>
            </h1>
            <p className="text-lg text-gray-300">
              Consultor en TIC y Gen AI especializado en transformar ideas en soluciones tecnológicas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trayectoria */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100 tracking-tight">Mi Trayectoria</h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="border-l-4 border-primary-500 pl-6"
            >
              <div className="text-sm text-primary-400 font-medium mb-2">Presente</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Consultor Independiente TIC & Gen AI</h3>
              <p className="text-gray-300">
                Ayudo a empresas y organizaciones a implementar soluciones tecnológicas modernas,
                desde desarrollo web hasta agentes de IA y bases de datos. Especializado en
                hacer que la tecnología compleja sea accesible y útil.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-l-4 border-primary-500 pl-6"
            >
              <div className="text-sm text-primary-400 font-medium mb-2">Anteriormente</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Desarrollador Full Stack</h3>
              <p className="text-gray-300">
                Experiencia desarrollando aplicaciones web modernas, trabajando con equipos
                multidisciplinarios y liderando proyectos técnicos desde la concepción hasta
                el despliegue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stack / Tecnologías */}
      <section className="py-32 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100 tracking-tight">Tecnologías y Herramientas</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {tecnologias.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-dark-900/70 border border-white/10 rounded-lg font-medium text-gray-300 hover:border-primary-500 hover:text-primary-400 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Valores / Enfoque */}
      <section className="py-32 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100 tracking-tight">Mi Enfoque de Trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden bg-dark-900/70 border-dark-800 border rounded-xl shadow-xl backdrop-blur-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-100">{valor.title}</h3>
                <p className="text-gray-300">{valor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-r from-primary-700 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Si tienes un proyecto en mente o quieres saber más sobre mis servicios,
            estaré encantado de conversar contigo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="px-8 py-4 bg-white text-dark-900 rounded-lg font-semibold hover:shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105 inline-block"
            >
              Contacta conmigo
            </Link>
            <Link
              to="/servicios"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

