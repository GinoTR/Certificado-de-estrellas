export default function LegalNotice() {
  return (
    <section className="relative z-10 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-bg-card p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-text-primary">
                Naturaleza simbólica del producto
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Los certificados ofrecidos por Star Certificate son de naturaleza{" "}
                <strong className="text-text-primary">simbólica, decorativa y conmemorativa</strong>.
                No constituyen ni pretenden constituir prueba de propiedad, titularidad o derecho
                alguno sobre estrellas, planetas, nebulosas u otros cuerpos celestes.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                La Unión Astronómica Internacional (IAU) es la única entidad autorizada para
                naming oficial de cuerpos celestes. Este producto no está afiliado, respaldado
                ni aprobado por la IAU ni por ningún organismo astronómico oficial.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Los datos astronómicos incluidos en los certificados provienen de fuentes
                científicas públicas (SIMBAD, CDS Strasbourg) y se utilizan con fines
                informativos y decorativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
