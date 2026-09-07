import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />

      <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="mb-4 text-sm font-medium tracking-widest text-gold uppercase">
          Certificados Simbólicos de Estrellas
        </p>

        <h1 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Regala una{" "}
          <span className="text-gold-gradient">estrella</span>
          <br />
          a alguien especial
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
          Certificados simbólicos y conmemorativos personalizados con datos
          astronómicos reales. Un regalo único, elegante y lleno de significado
          para quienes aman las estrellas.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/catalog"
            className="group rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover hover:shadow-accent/30"
          >
            Explorar catálogo
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/register"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-text-secondary transition-all hover:border-accent/40 hover:text-text-primary"
          >
            Crear mi certificado
          </Link>
        </div>

        <p className="mt-8 text-xs text-text-secondary/60">
          Producto simbólico y conmemorativo. No constituye propiedad de cuerpos celestes.
        </p>
      </div>
    </section>
  );
}
