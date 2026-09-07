import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-bg-card to-accent/5 px-8 py-16 sm:px-16 sm:py-20">
          <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-[80px]" />
          <div className="absolute bottom-0 left-0 h-48 w-48 translate-y-1/2 -translate-x-1/2 rounded-full bg-gold/10 blur-[60px]" />

          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Crea tu certificado hoy
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              Un regalo único y personalizado que tu ser querido atesorará para siempre.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="group rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover hover:shadow-accent/30"
              >
                Empezar ahora
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/catalog"
                className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-text-secondary transition-all hover:border-accent/40 hover:text-text-primary"
              >
                Ver catálogo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
