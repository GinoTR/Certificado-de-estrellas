import Link from "next/link";
import { prisma } from "@/lib/prisma";
import CelestialBodyCard from "@/components/catalog/CelestialBodyCard";

export default async function Explorer() {
  const bodies = await prisma.celestialBody.findMany({
    where: { isAvailable: true, magnitude: { not: null } },
    orderBy: { magnitude: "asc" },
    take: 6,
  });

  return (
    <section id="catalogo" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            Catálogo
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Explora cuerpos celestes reales
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Datos astronómicos verificados de fuentes científicas públicas.
            Elige el que más te inspire.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bodies.map((body) => (
            <CelestialBodyCard key={body.id} body={body} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-secondary transition-all hover:border-accent/40 hover:text-text-primary"
          >
            Ver catálogo completo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}