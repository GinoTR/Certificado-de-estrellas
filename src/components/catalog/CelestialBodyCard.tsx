import Link from "next/link";
import { CelestialType } from "@prisma/client";
import { TYPE_GRADIENTS, TYPE_LABELS, formatMagnitude } from "./constants";

type CelestialBodyCardProps = {
  body: {
    id: string;
    commonName: string | null;
    designation: string | null;
    type: CelestialType;
    constellation: string | null;
    magnitude: number | null;
  };
};

export default function CelestialBodyCard({ body }: CelestialBodyCardProps) {
  const name = body.commonName ?? body.designation ?? "Sin nombre";
  return (
    <Link
      href={`/catalog/${body.id}`}
      className="card-glow group rounded-xl border border-border bg-bg-card p-5 transition-all hover:bg-bg-card-hover"
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`h-10 w-10 shrink-0 rounded-full bg-gradient-to-br ${TYPE_GRADIENTS[body.type]} opacity-80 shadow-lg`}
        />
        <div className="min-w-0">
          <h3 className="truncate font-serif text-base font-semibold text-text-primary transition-colors group-hover:text-accent">
            {name}
          </h3>
          {body.designation && (
            <p className="truncate text-xs text-text-secondary italic">
              {body.designation}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <span className="text-text-secondary/60">Tipo: </span>
          <span className="text-text-secondary">{TYPE_LABELS[body.type]}</span>
        </div>
        <div>
          <span className="text-text-secondary/60">Constelación: </span>
          <span className="text-text-secondary">{body.constellation ?? "—"}</span>
        </div>
        <div>
          <span className="text-text-secondary/60">Magnitud: </span>
          <span className="text-text-secondary">{formatMagnitude(body.magnitude)}</span>
        </div>
      </div>
    </Link>
  );
}