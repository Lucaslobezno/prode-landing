"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Download() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
    <section id="download" className="py-16 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative bg-[#141414] border border-[#2C2C2E] rounded-2xl sm:rounded-3xl p-7 sm:p-10 md:p-16 text-center overflow-hidden">
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
            <p className="text-[#8E8E93] text-base sm:text-lg italic mb-5 sm:mb-6 max-w-lg mx-auto">
              &ldquo;La disciplina es el puente entre tus metas y tus
              logros.&rdquo;
            </p>

            {/* CTA */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Sé el primero en probarlo
            </h2>
            <p className="text-[#8E8E93] text-sm sm:text-base mb-7 sm:mb-10 max-w-md mx-auto">
              Únete a la lista de espera y te avisaremos en cuanto Prode esté
              disponible. Sin spam, lo prometemos.
            </p>

            {/* Waitlist form */}
            {status === "success" ? (
              <div className="bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-2xl p-6 max-w-md mx-auto">
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
                  className="w-full bg-[#0a0a0a] border border-[#2C2C2E] rounded-xl px-5 py-3.5 text-white placeholder-[#636366] text-sm focus:outline-none focus:border-[#1D9E75] transition-colors min-h-[44px]"
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
          </div>
        </div>
      </div>
    </section>
  );
}
