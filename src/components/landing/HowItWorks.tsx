const steps = [
  {
    number: "01",
    title: "Explora",
    description: "Navega por nuestro catálogo de cuerpos celestes con datos reales de la base de datos astronómica SIMBAD.",
    color: "text-accent",
  },
  {
    number: "02",
    title: "Personaliza",
    description: "Elige un nombre simbólico, escribe un mensaje y personaliza los datos de tu certificado.",
    color: "text-gold",
  },
  {
    number: "03",
    title: "Confirma",
    description: "Visualiza una vista previa de cómo quedará tu certificado antes de confirmar la compra.",
    color: "text-accent",
  },
  {
    number: "04",
    title: "Recibe",
    description: "Descarga tu certificado en PDF de alta calidad con código único de verificación.",
    color: "text-gold",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            Cómo funciona
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Cuatro pasos para tu certificado
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Un proceso simple y elegante para crear un certificado único y personalizado.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute top-0 hidden h-full w-px bg-gradient-to-b from-accent/20 via-border to-gold/20 sm:left-1/2 sm:block" />

          <div className="space-y-12 sm:space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative sm:grid sm:grid-cols-2 sm:items-center sm:gap-16 ${i % 2 === 1 ? "sm:text-right" : ""}`}
              >
                <div className={`hidden sm:block ${i % 2 === 1 ? "order-2" : ""}`}>
                  <div className={`${step.color} text-6xl font-bold font-serif opacity-20`}>
                    {step.number}
                  </div>
                </div>

                <div className={`${i % 2 === 1 ? "sm:order-2" : ""}`}>
                  <div className="mb-3 flex items-center gap-3 sm:hidden">
                    <span className={`text-2xl font-bold font-serif ${step.color} opacity-40`}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
