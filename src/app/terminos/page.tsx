import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones — Prode",
};

export default function Terminos() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#2C2C2E]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1D9E75] flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-white font-semibold text-lg">Prode</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Términos y Condiciones
        </h1>
        <p className="text-[#636366] text-sm mb-12">
          Última actualización: 1 de junio de 2026
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Uso de la aplicación
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Prode es una aplicación de productividad personal diseñada para
              ayudarte a gestionar tareas, hábitos y objetivos. Al usar la app,
              te comprometes a utilizarla de forma responsable y conforme a estos
              términos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Gratuidad del servicio
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Prode es completamente gratuita. No existen suscripciones ocultas,
              compras dentro de la app ni publicidad. Nos reservamos el derecho
              de introducir funciones premium en el futuro, pero las
              funcionalidades actuales seguirán siendo gratuitas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Cuenta de usuario
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Para usar Prode necesitas crear una cuenta con tu email y
              contraseña. Eres responsable de mantener la seguridad de tus
              credenciales de acceso. No compartas tu contraseña con terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Datos del usuario
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Tus tareas, hábitos, objetivos y recordatorios se almacenan
              localmente en tu dispositivo. No accedemos ni monitorizamos el
              contenido que creas dentro de la app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Limitación de responsabilidad
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Prode se proporciona &ldquo;tal cual&rdquo; sin garantías de
              ningún tipo. No nos hacemos responsables de pérdidas de datos,
              interrupciones del servicio o daños derivados del uso de la
              aplicación. Recomendamos no depender exclusivamente de la app para
              gestionar información crítica.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Modificaciones
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier
              momento. Los cambios se publicarán en esta página y, si son
              significativos, notificaremos a los usuarios registrados por email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Contacto
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Para cualquier consulta sobre estos términos, puedes escribirnos
              a{" "}
              <a
                href="mailto:prode.app@gmail.com"
                className="text-[#1D9E75] hover:underline"
              >
                prode.app@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-[#2C2C2E]">
          <Link
            href="/"
            className="text-[#1D9E75] hover:underline text-sm"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
