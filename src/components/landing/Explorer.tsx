import Link from "next/link";

const bodies = [
  {
    name: "Sirius",
    designation: "α Canis Majoris",
    type: "Estrella",
    constellation: "Can Mayor",
    magnitude: "-1.46",
    color: "from-blue-400 to-white",
  },
  {
    name: "Betelgeuse",
    designation: "α Orionis",
    type: "Estrella",
    constellation: "Orión",
    magnitude: "0.42",
    color: "from-red-500 to-orange-400",
  },
  {
    name: "Polaris",
    designation: "α Ursae Minoris",
    type: "Estrella",
    constellation: "Osa Menor",
    magnitude: "1.98",
    color: "from-yellow-300 to-white",
  },
  {
    name: "Nebulosa de Orión",
    designation: "M42",
    type: "Nebulosa",
    constellation: "Orión",
    magnitude: "4.0",
    color: "from-purple-500 to-pink-400",
  },
  {
    name: "Aldebarán",
    designation: "α Tauri",
    type: "Estrella",
    constellation: "Tauro",
    magnitude: "0.86",
    color: "from-orange-500 to-red-400",
  },
  {
    name: "Vega",
    designation: "α Lyrae",
    type: "Estrella",
    constellation: "Lira",
    magnitude: "0.03",
    color: "from-blue-300 to-white",
  },
];

export default function Explorer() {
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
          {bodies.map((body, i) => (
            <div
              key={i}
              className="card-glow group cursor-pointer rounded-xl border border-border bg-bg-card p-5 transition-all hover:bg-bg-card-hover"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${body.color} opacity-80 shadow-lg`} />
                <div>
                  <h3 className="font-serif text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {body.name}
                  </h3>
                  <p className="text-xs text-text-secondary italic">
                    {body.designation}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-text-secondary/60">Tipo: </span>
                  <span className="text-text-secondary">{body.type}</span>
                </div>
                <div>
                  <span className="text-text-secondary/60">Constelación: </span>
                  <span className="text-text-secondary">{body.constellation}</span>
                </div>
                <div>
                  <span className="text-text-secondary/60">Magnitud: </span>
                  <span className="text-text-secondary">{body.magnitude}</span>
                </div>
              </div>
            </div>
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
