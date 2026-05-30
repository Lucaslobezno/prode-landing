export default function Footer() {
  return (
    <footer className="border-t border-[#2C2C2E] py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#1D9E75] flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <span className="text-[#636366] text-sm">
            &copy; 2026 Prode. Todos los derechos reservados.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-[#636366] hover:text-[#8E8E93] text-sm transition-colors"
          >
            Privacidad
          </a>
          <a
            href="#"
            className="text-[#636366] hover:text-[#8E8E93] text-sm transition-colors"
          >
            Términos
          </a>
        </div>
      </div>
    </footer>
  );
}
