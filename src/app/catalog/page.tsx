import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { listCelestialBodies } from "@/lib/celestial-bodies";
import CelestialBodyCard from "@/components/catalog/CelestialBodyCard";
import CatalogPagination from "@/components/catalog/CatalogPagination";
import { TYPE_LABELS } from "@/components/catalog/constants";
import ParallaxStars from "@/components/landing/ParallaxStars";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 20;

type CatalogPageProps = {
  searchParams: Promise<{ q?: string; type?: string; page?: string }>;
};

function catalogHref(q: string, type: string): string {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (type) params.set("type", type);
  const qs = params.toString();
  return qs ? `/catalog?${qs}` : "/catalog";
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const sp = await searchParams;
  const q = sp.q ?? "";
  const type = sp.type ?? "";
  const page = Math.max(1, Number(sp.page) || 1);

  const result = await listCelestialBodies({ q, type, page, pageSize: PAGE_SIZE });

  const typeCounts = await prisma.celestialBody.groupBy({
    by: ["type"],
    where: { isAvailable: true },
    _count: { _all: true },
  });
  const activeTypes = typeCounts
    .filter((t) => t._count._all > 0)
    .sort((a, b) => b._count._all - a._count._all);

  return (
    <>
      <ParallaxStars />
      <Navbar />

      <main className="relative z-10 mx-auto min-h-screen max-w-6xl px-4 pt-28 pb-24 sm:px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            Catálogo
          </p>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Cuerpos celestes reales
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            {result.total} cuerpos celestes con datos astronómicos verificados de
            SIMBAD (CDS Strasbourg). Elige el que más te inspire.
          </p>
        </div>

        <form
          action="/catalog"
          method="GET"
          className="mx-auto mt-10 flex max-w-xl gap-2"
        >
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Buscar por nombre…"
            className="w-full rounded-full border border-border bg-bg-card px-5 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent/60 focus:outline-none"
          />
          {type && <input type="hidden" name="type" value={type} />}
          <button
            type="submit"
            className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Buscar
          </button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Link
            href={catalogHref(q, "")}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
              !type
                ? "border-accent/60 bg-accent/10 text-text-primary"
                : "border-border text-text-secondary hover:border-accent/40 hover:text-text-primary"
            }`}
          >
            Todos
          </Link>
          {activeTypes.map((t) => (
            <Link
              key={t.type}
              href={catalogHref(q, t.type)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                type === t.type
                  ? "border-accent/60 bg-accent/10 text-text-primary"
                  : "border-border text-text-secondary hover:border-accent/40 hover:text-text-primary"
              }`}
            >
              {TYPE_LABELS[t.type]}
              <span className="ml-1.5 text-text-secondary/60">{t._count._all}</span>
            </Link>
          ))}
        </div>

        {result.bodies.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-text-secondary">
              No encontramos cuerpos celestes con esos criterios.
            </p>
            <Link
              href="/catalog"
              className="mt-4 inline-block rounded-full border border-border px-6 py-2.5 text-sm text-text-secondary transition-all hover:border-accent/40 hover:text-text-primary"
            >
              Limpiar filtros
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {result.bodies.map((body) => (
                <CelestialBodyCard key={body.id} body={body} />
              ))}
            </div>
            <CatalogPagination
              totalPages={result.totalPages}
              page={result.page}
              q={q}
              type={type}
            />
          </>
        )}

        <p className="mt-16 text-center text-xs text-text-secondary/60">
          Certificado simbólico y conmemorativo. No otorga propiedad ni derechos
          sobre cuerpo celeste alguno.
        </p>
      </main>

      <Footer />
    </>
  );
}