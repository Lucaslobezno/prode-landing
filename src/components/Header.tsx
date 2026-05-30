export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-[#2C2C2E]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1D9E75] flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-white font-semibold text-lg">Prode</span>
        </a>
        <nav className="hidden sm:flex items-center gap-8">
          <a
            href="#features"
            className="text-[#8E8E93] hover:text-white transition-colors text-sm"
          >
            Funciones
          </a>
          <a
            href="#download"
            className="text-[#8E8E93] hover:text-white transition-colors text-sm"
          >
            Lista de espera
          </a>
        </nav>
        <a
          href="#download"
          className="bg-[#1D9E75] hover:bg-[#17805F] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
        >
          Unirme
        </a>
      </div>
    </header>
  );
}
