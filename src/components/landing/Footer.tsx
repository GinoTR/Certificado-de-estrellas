import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6z" />
              </svg>
              <span className="font-serif text-base font-semibold text-text-primary">
                Star Certificate
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
              Certificados simbólicos y conmemorativos de estrellas y cuerpos celestes.
              Un regalo único para quienes aman las estrellas.
            </p>
            <p className="mt-3 text-xs text-text-secondary/50">
              Producto simbólico. No constituye propiedad de cuerpos celestes.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium tracking-widest text-text-secondary uppercase">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  Crear certificado
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium tracking-widest text-text-secondary uppercase">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/verify" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  Verificar certificado
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-text-secondary/50">
          <p>© {new Date().getFullYear()} Star Certificate. Todos los derechos reservados.</p>
          <p className="mt-1">Hecho con ❤️ y fascinación por el espacio.</p>
        </div>
      </div>
    </footer>
  );
}
