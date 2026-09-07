const concepts = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "Certificado personalizado",
    description:
      "Diseña un certificado elegante con el nombre que elijas, datos astronómicos reales y un diseño profesional.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    title: "Datos reales",
    description:
      "Cada certificado incluye información astronómica verificada de fuentes científicas públicas como SIMBAD.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Código único de verificación",
    description:
      "Cada certificado tiene un código único que permite verificar su autenticidad en cualquier momento.",
  },
];

export default function Concept() {
  return (
    <section className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            El concepto
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Un regalo con significado real
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Cada certificado asocia un nombre simbólico a un cuerpo celeste real,
            con datos astronómicos verificables. Un obsequio elegante y personalizado
            que trasciende lo convencional.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {concepts.map((item, i) => (
            <div
              key={i}
              className="card-glow rounded-2xl border border-border bg-bg-card p-8 transition-all hover:bg-bg-card-hover"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {item.icon}
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
