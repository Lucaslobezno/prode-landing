export default function Download() {
  return (
    <section id="download" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative bg-[#141414] border border-[#2C2C2E] rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#1D9E75]/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#1D9E75] flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            {/* Quote */}
            <p className="text-[#8E8E93] text-lg italic mb-6 max-w-lg mx-auto">
              &ldquo;La disciplina es el puente entre tus metas y tus
              logros.&rdquo;
            </p>

            {/* CTA */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Empieza hoy, gratis
            </h2>
            <p className="text-[#8E8E93] mb-10 max-w-md mx-auto">
              Descarga Prode y transforma tu productividad. Sin anuncios, sin
              suscripciones ocultas.
            </p>

            {/* Store buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-3 bg-white hover:bg-gray-100 text-black rounded-xl px-6 py-3.5 transition-all hover:scale-105"
              >
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] leading-none opacity-60">
                    Descargar en
                  </p>
                  <p className="text-base font-semibold leading-tight">
                    App Store
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-white hover:bg-gray-100 text-black rounded-xl px-6 py-3.5 transition-all hover:scale-105"
              >
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] leading-none opacity-60">
                    Disponible en
                  </p>
                  <p className="text-base font-semibold leading-tight">
                    Google Play
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
