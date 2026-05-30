import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad — Prode",
};

export default function Privacidad() {
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
          Política de Privacidad
        </h1>
        <p className="text-[#636366] text-sm mb-12">
          Última actualización: 1 de junio de 2026
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Datos que recogemos
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Únicamente recogemos tu dirección de correo electrónico cuando te
              registras en nuestra lista de espera. No recopilamos datos de
              navegación, ubicación, ni ninguna otra información personal
              adicional a través de la web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Cómo usamos tus datos
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Tu email se utiliza exclusivamente para notificarte sobre el
              lanzamiento de Prode y enviarte actualizaciones relevantes sobre la
              app. No enviaremos spam ni correos no relacionados con el producto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Compartición con terceros
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              No vendemos, alquilamos ni compartimos tu información personal con
              terceros bajo ninguna circunstancia. Tus datos se almacenan de
              forma segura y solo son accesibles por el equipo de Prode.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Almacenamiento y seguridad
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Tus datos se almacenan en servidores seguros proporcionados por
              Supabase, con cifrado en tránsito y en reposo. Tomamos medidas
              razonables para proteger tu información contra accesos no
              autorizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Tus derechos
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Puedes solicitar la eliminación de tus datos en cualquier momento
              contactándonos por email. Atenderemos tu solicitud en un plazo
              máximo de 30 días.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Contacto
            </h2>
            <p className="text-[#8E8E93] leading-relaxed">
              Si tienes preguntas sobre esta política de privacidad, puedes
              escribirnos a{" "}
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
