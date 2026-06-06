"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const LAUNCH_DATE = new Date("2026-07-01T00:00:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, LAUNCH_DATE - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#141414] border border-[#2C2C2E] rounded-xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-1.5">
        <span className="text-[#1D9E75] text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#636366] text-[10px] sm:text-xs uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const { error } = await supabase.from("waitlist").insert({ email: trimmed });

      if (error) {
        if (error.code === "23505") {
          setStatus("success");
          return;
        }
        throw error;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Algo salió mal. Inténtalo de nuevo.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1D9E75]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating screenshots — hidden on mobile */}
      {/* Left screenshot — shifted up */}
      <div className="hidden lg:block absolute left-[-40px] xl:left-[1%] top-[42%] -translate-y-1/2 pointer-events-none">
        <div
          className="relative w-[240px] xl:w-[280px] rounded-3xl overflow-hidden border border-[#2C2C2E]/40 shadow-2xl shadow-black/40"
          style={{ transform: "rotate(-6deg)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screen1.png"
            alt=""
            className="w-full h-auto opacity-55"
          />
          {/* Radial depth glow — brighter center, fades outward */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 40%, transparent 20%, rgba(10,10,10,0.55) 70%, rgba(10,10,10,0.9) 100%)",
            }}
          />
          {/* Edge fades */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0a0a0a]/60 to-transparent" />
        </div>
      </div>

      {/* Right screenshot — shifted down */}
      <div className="hidden lg:block absolute right-[-40px] xl:right-[1%] top-[58%] -translate-y-1/2 pointer-events-none">
        <div
          className="relative w-[240px] xl:w-[280px] rounded-3xl overflow-hidden border border-[#2C2C2E]/40 shadow-2xl shadow-black/40"
          style={{ transform: "rotate(6deg)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screen3.png"
            alt=""
            className="w-full h-auto opacity-55"
          />
          {/* Radial depth glow — brighter center, fades outward */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 60%, transparent 20%, rgba(10,10,10,0.55) 70%, rgba(10,10,10,0.9) 100%)",
            }}
          />
          {/* Edge fades */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />
        </div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#141414] border border-[#2C2C2E] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse" />
          <span className="text-[#8E8E93] text-xs sm:text-sm">
            Próximamente — Julio 2026
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-4 sm:mb-6">
          La app que te ayuda a{" "}
          <span className="text-[#1D9E75]">ser más productivo cada día</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#8E8E93] max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          Organiza tus tareas, mantén el enfoque con Pomodoro, construye hábitos
          y alcanza tus objetivos. Todo en una sola app.
        </p>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-2 sm:gap-5 mb-8 sm:mb-12">
          <CountdownUnit value={timeLeft.days} label="Días" />
          <span className="text-[#636366] text-xl font-light mt-[-24px]">:</span>
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <span className="text-[#636366] text-xl font-light mt-[-24px]">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Min" />
          <span className="text-[#636366] text-xl font-light mt-[-24px]">:</span>
          <CountdownUnit value={timeLeft.seconds} label="Seg" />
        </div>

        {/* Waitlist form */}
        {status === "success" ? (
          <div className="bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-2xl p-5 sm:p-6 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#1D9E75]/20 flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-[#1D9E75]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-white font-semibold text-lg mb-1">
              ¡Estás en la lista!
            </p>
            <p className="text-[#8E8E93] text-sm">
              Te avisaremos cuando Prode esté disponible.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 max-w-md mx-auto w-full"
          >
            <input
              type="email"
              required
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#141414] border border-[#2C2C2E] rounded-xl px-5 py-3.5 text-white placeholder-[#636366] text-sm focus:outline-none focus:border-[#1D9E75] transition-colors min-h-[44px]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#1D9E75] hover:bg-[#17805F] disabled:opacity-50 text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all hover:scale-105 disabled:hover:scale-100 min-h-[44px]"
            >
              {status === "loading" ? "Enviando..." : "Avisarme"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-[#FF453A] text-sm mt-3">{errorMsg}</p>
        )}

        {/* Scroll indicator */}
        <div className="mt-10 sm:mt-16 animate-bounce">
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
