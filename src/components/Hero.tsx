export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1D9E75]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#141414] border border-[#2C2C2E] rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse" />
          <span className="text-[#8E8E93] text-sm">
            Disponible para iOS y Android
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          La app de productividad para{" "}
          <span className="text-[#1D9E75]">emprendedores jóvenes</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#8E8E93] max-w-2xl mx-auto mb-10 leading-relaxed">
          Organiza tus tareas, mantén el enfoque con Pomodoro, construye hábitos
          y alcanza tus objetivos. Todo en una sola app.
        </p>

        {/* Store buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group flex items-center gap-3 bg-white hover:bg-gray-100 text-black rounded-xl px-6 py-3.5 transition-all hover:scale-105"
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
              <p className="text-base font-semibold leading-tight">App Store</p>
            </div>
          </a>

          <a
            href="#"
            className="group flex items-center gap-3 bg-white hover:bg-gray-100 text-black rounded-xl px-6 py-3.5 transition-all hover:scale-105"
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

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-[#636366]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
