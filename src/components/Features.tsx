const features = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Tareas del día",
    description:
      "Organiza tus tareas diarias con un diseño limpio. Marca lo completado, ve tu progreso y mantén el foco en lo importante.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Pomodoro",
    description:
      "Timer integrado de 25 minutos para maximizar tu concentración. Trabaja en bloques, descansa y repite.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Hábitos",
    description:
      "Construye rutinas que transforman. Registra tus hábitos diarios, mantén rachas y celebra cada día perfecto.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Todo lo que necesitas para{" "}
            <span className="text-[#1D9E75]">ser productivo</span>
          </h2>
          <p className="text-[#8E8E93] text-base sm:text-lg max-w-xl mx-auto">
            Herramientas simples pero poderosas, diseñadas para cualquiera
            que quiera rendir más cada día.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#141414] border border-[#2C2C2E] rounded-2xl p-6 sm:p-8 hover:border-[#1D9E75]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1D9E75]/10 flex items-center justify-center text-[#1D9E75] mb-4 sm:mb-6 group-hover:bg-[#1D9E75]/20 transition-colors">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-[#8E8E93] text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
