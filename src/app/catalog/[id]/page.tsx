import Link from "next/link";
import { notFound } from "next/navigation";
import { getCelestialBodyById } from "@/lib/celestial-bodies";
import {
  TYPE_GRADIENTS,
  TYPE_LABELS,
  formatDistance,
  formatMagnitude,
} from "@/components/catalog/constants";
import ParallaxStars from "@/components/landing/ParallaxStars";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const dynamic = "force-dynamic";

type BodyDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: BodyDetailPageProps) {
  const { id } = await params;
  const body = await getCelestialBodyById(id);
  if (!body || !body.isAvailable) {
    return { title: "Cuerpo celeste no encontrado | Star Certificate" };
  }
  return {
    title: `${body.commonName ?? body.designation ?? "Cuerpo celeste"} | Star Certificate`,
    description: body.description?.slice(0, 160),
  };
}

export default async function BodyDetailPage({ params }: BodyDetailPageProps) {
  const { id } = await params;
  const body = await getCelestialBodyById(id);

  if (!body || !body.isAvailable) notFound();

  const name = body.commonName ?? body.designation ?? "Cuerpo celeste sin nombre";

  const stats: { label: string; value: string }[] = [
    { label: "Designación", value: body.designation ?? "—" },
    { label: "Nombre oficial", value: body.officialName ?? "—" },
    { label: "Ascensión recta", value: body.rightAscension ?? "—" },
    { label: "Declinación", value: body.declination ?? "—" },
    { label: "Magnitud aparente", value: formatMagnitude(body.magnitude) },
    { label: "Tipo espectral", value: body.spectralType ?? "—" },
    { label: "Distancia", value: formatDistance(body.distanceLightYears) },
    { label: "Constelación", value: body.constellation ?? "—" },
    { label: "Código interno", value: body.internalCode },
    { label: "Fuente de datos", value: body.source ?? "SIMBAD (CDS Strasbourg)" },
  ];

  return (
    <>
      <ParallaxStars />
      <Navbar />

      <main className="relative z-10 mx-auto min-h-screen max-w-4xl px-4 pt-28 pb-24 sm:px-6">
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <span aria-hidden>←</span> Volver al catálogo
        </Link>

        <div className="mt-8 rounded-2xl border border-border bg-bg-card/70 p-6 sm:p-10">
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
            <div
              className={`h-20 w-20 shrink-0 rounded-full bg-gradient-to-br ${TYPE_GRADIENTS[body.type]} opacity-80 shadow-lg`}
            />
            <div className="mt-4 sm:mt-0">
              <h1 className="font-serif text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                {name}
              </h1>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-hover">
                  {TYPE_LABELS[body.type]}
                </span>
                {body.isAvailable && (
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                    Disponible
                  </span>
                )}
              </div>
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs tracking-wide text-text-secondary/60 uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-sm text-text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>

          {body.description && (
            <div className="mt-10 border-t border-border pt-8">
              <h2 className="font-serif text-lg font-semibold text-text-primary">
                Acerca de este cuerpo celeste
              </h2>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {body.description}
              </p>
            </div>
          )}

          <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-5">
            <p className="text-sm leading-relaxed text-text-secondary">
              Este certificado es un regalo <strong>simbólico y conmemorativo</strong>.
              No otorga propiedad, ni derechos de nombre u otros sobre ningún
              cuerpo celeste real.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-medium text-text-primary">
                ¿Te inspira este cuerpo celeste?
              </p>
              <p className="mt-1 text-xs text-text-secondary">
                El registro de certificados estará disponible próximamente.
              </p>
            </div>
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full bg-accent/60 px-7 py-3 text-sm font-medium text-white opacity-70"
            >
              Seleccionar este cuerpo
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}