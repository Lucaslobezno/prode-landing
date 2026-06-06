import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#2C2C2E] py-6 sm:py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Prode"
            width={24}
            height={24}
            className="rounded-md"
            loading="lazy"
          />
          <span className="text-[#636366] text-sm">
            &copy; 2026 Prode. Todos los derechos reservados.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/privacidad"
            className="text-[#636366] hover:text-[#8E8E93] text-sm transition-colors"
          >
            Privacidad
          </Link>
          <Link
            href="/terminos"
            className="text-[#636366] hover:text-[#8E8E93] text-sm transition-colors"
          >
            Términos
          </Link>
        </div>
      </div>
    </footer>
  );
}
