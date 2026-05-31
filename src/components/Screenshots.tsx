import Image from "next/image";

const screens = [
  { src: "/screen1.png", alt: "Prode — Tareas y Pomodoro", rotate: "-6deg", translate: "0, 12px", delay: "0s" },
  { src: "/screen2.png", alt: "Prode — Hábitos", rotate: "0deg", translate: "0, -8px", delay: "0.15s" },
  { src: "/screen3.png", alt: "Prode — Objetivos", rotate: "6deg", translate: "0, 16px", delay: "0.3s" },
];

export default function Screenshots() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle radial glow behind cards */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-[#1D9E75]/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-center gap-4 sm:gap-8 md:gap-12">
          {screens.map((screen, i) => (
            <div
              key={i}
              className="relative group"
              style={{
                perspective: "1200px",
                animationDelay: screen.delay,
              }}
            >
              <div
                className="relative transition-all duration-700 ease-out"
                style={{
                  transform: `rotateY(${screen.rotate}) translate(${screen.translate})`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Phone frame */}
                <div className="relative w-[140px] sm:w-[180px] md:w-[220px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2C2C2E]/60 shadow-2xl shadow-black/40">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={440}
                    height={956}
                    className="w-full h-auto opacity-60"
                    priority={i === 1}
                  />
                  {/* Top fade overlay */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0a0a0a]/50 to-transparent pointer-events-none" />
                  {/* Bottom fade overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
