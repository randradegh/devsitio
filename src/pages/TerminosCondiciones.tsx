export default function TerminosCondiciones() {
  return (
    <div className="pt-24 min-h-screen bg-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold mb-8 text-gray-100 tracking-tight">Términos y Condiciones</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos
              y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos,
              no debe utilizar este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">2. Uso del sitio</h2>
            <p>
              Este sitio web está destinado a proporcionar información sobre servicios de
              consultoría en TIC y Gen AI. Usted se compromete a utilizar el sitio de manera
              legal y de acuerdo con estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">3. Servicios</h2>
            <p>
              Los servicios descritos en este sitio web están sujetos a disponibilidad y
              pueden ser modificados sin previo aviso. Los precios y condiciones específicas
              se acordarán mediante contrato por separado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">4. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, gráficos, logos e imágenes,
              es propiedad de [Tu Nombre/Empresa] y está protegido por las leyes de propiedad
              intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">5. Limitación de responsabilidad</h2>
            <p>
              Este sitio web se proporciona "tal cual" sin garantías de ningún tipo. No nos
              hacemos responsables de daños directos o indirectos derivados del uso de este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">6. Enlaces externos</h2>
            <p>
              Este sitio puede contener enlaces a sitios web de terceros. No somos responsables
              del contenido o las prácticas de privacidad de estos sitios externos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">7. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier
              momento. Las modificaciones entrarán en vigor al publicarse en este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">8. Contacto</h2>
            <p>
              Para consultas sobre estos términos y condiciones, puede contactarnos en:
              [email de contacto]
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

