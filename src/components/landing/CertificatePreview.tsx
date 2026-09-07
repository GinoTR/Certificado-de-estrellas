export default function CertificatePreview() {
  return (
    <section id="certificado" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-gold uppercase">
            El certificado
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Así luce tu certificado
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Un diseño elegante con tipografía premium, datos reales y un toque dorado
            que lo hace único.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="glow-gold w-full max-w-3xl overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-[#1a1a24] via-[#14141e] to-[#1a1a24] p-1">
            <div className="rounded-xl border border-border-light bg-bg-card p-8 sm:p-12">
              <div className="text-center">
                <div className="mb-2 text-xs font-medium tracking-[0.3em] text-gold/70 uppercase">
                  Certificado Simbólico
                </div>
                <div className="mx-auto my-4 h-px w-32 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

                <h3 className="font-serif text-2xl font-semibold tracking-wide text-text-primary sm:text-3xl">
                  Estrella de María
                </h3>

                <div className="mx-auto my-4 h-px w-16 bg-border" />

                <p className="text-sm text-text-secondary">
                  Otorgado a
                </p>
                <p className="mt-1 font-serif text-xl font-medium text-text-primary">
                  María García López
                </p>

                <div className="mx-auto my-6 h-px w-full max-w-xs bg-border" />

                <div className="grid grid-cols-2 gap-4 text-sm sm:gap-8">
                  <div>
                    <p className="text-xs text-text-secondary/60 uppercase">Cuerpo Celeste</p>
                    <p className="mt-1 font-medium text-text-primary">Sirius (α Canis Majoris)</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary/60 uppercase">Constelación</p>
                    <p className="mt-1 font-medium text-text-primary">Can Mayor</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary/60 uppercase">Magnitud</p>
                    <p className="mt-1 font-medium text-text-primary">-1.46</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary/60 uppercase">Tipo Espectral</p>
                    <p className="mt-1 font-medium text-text-primary">A1V</p>
                  </div>
                </div>

                <div className="mx-auto my-6 h-px w-full max-w-xs bg-border" />

                <div className="inline-block rounded-lg border border-border bg-bg-secondary px-4 py-2">
                  <p className="text-xs text-text-secondary/60 uppercase">Código de Verificación</p>
                  <p className="mt-0.5 font-mono text-sm font-medium tracking-wider text-gold">
                    SC-A7F3-B291
                  </p>
                </div>

                <div className="mx-auto my-6 h-px w-full max-w-xs bg-border" />

                <p className="text-xs text-text-secondary/50 italic">
                  Fecha de emisión: 7 de septiembre de 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-text-secondary/40">
          Este es un ejemplo ilustrativo. El certificado final incluye un diseño premium con tipografía y detalles adicionales.
        </p>
      </div>
    </section>
  );
}
