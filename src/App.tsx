import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import ServicioDetail from './pages/ServicioDetail'
import Casos from './pages/Casos'
import Recursos from './pages/Recursos'
import RecursosDetail from './pages/RecursosDetail'
import SobreMi from './pages/SobreMi'
import Contacto from './pages/Contacto'
import AvisoPrivacidad from './pages/AvisoPrivacidad'
import TerminosCondiciones from './pages/TerminosCondiciones'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:slug" element={<ServicioDetail />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/recursos/:slug" element={<RecursosDetail />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
        <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
      </Routes>
    </Layout>
  )
}

export default App

