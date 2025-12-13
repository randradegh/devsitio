export default function AvisoPrivacidad() {
  return (
    <div className="pt-24 min-h-screen bg-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold mb-8 text-gray-100 tracking-tight">Aviso de Privacidad</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de sus datos personales es [Tu Nombre/Empresa],
              con domicilio en [Dirección].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Datos que recopilamos</h2>
            <p>
              Recopilamos los siguientes datos personales cuando utiliza nuestro sitio web:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Nombre</li>
              <li>Dirección de correo electrónico</li>
              <li>Información proporcionada en formularios de contacto</li>
              <li>Datos de navegación (cookies, dirección IP)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">3. Finalidad del tratamiento</h2>
            <p>
              Utilizamos sus datos personales para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Responder a sus consultas y solicitudes</li>
              <li>Proporcionar los servicios solicitados</li>
              <li>Mejorar nuestro sitio web y servicios</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios (con su consentimiento)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">4. Base legal</h2>
            <p>
              El tratamiento de sus datos se basa en su consentimiento, la ejecución de un contrato
              o nuestro interés legítimo de responder a sus consultas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">5. Conservación de datos</h2>
            <p>
              Conservaremos sus datos personales durante el tiempo necesario para cumplir con las
              finalidades descritas y cumplir con nuestras obligaciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">6. Sus derechos</h2>
            <p>
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Oponerse al tratamiento</li>
              <li>Limitar el tratamiento</li>
              <li>Portabilidad de datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">7. Contacto</h2>
            <p>
              Para ejercer sus derechos o realizar consultas sobre el tratamiento de sus datos,
              puede contactarnos en: [email de contacto]
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

