import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-gray-100 text-lg font-bold mb-4">Exponential Grow. Tic & Gen AI</h3>
            <p className="text-sm mb-4">
              Transformando ideas en soluciones tecnológicas. Desarrollo web, agentes de IA, 
              datos y Gen AI para educación y marketing.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/casos" className="hover:text-white transition-colors">
                  Casos de éxito
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="hover:text-white transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link to="/sobre-mi" className="hover:text-white transition-colors">
                  Sobre mí
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/aviso-privacidad" className="hover:text-white transition-colors">
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos-condiciones" className="hover:text-white transition-colors">
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Exponential Grow. Tic & Gen AI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

