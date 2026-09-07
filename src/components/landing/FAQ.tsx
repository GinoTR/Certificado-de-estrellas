"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué recibo exactamente?",
    answer:
      "Recibes un certificado en formato PDF de alta calidad con un diseño elegante. Incluye el nombre simbólico que elijas, el cuerpo celeste seleccionado con sus datos astronómicos reales, un código único de verificación y la fecha de emisión.",
  },
  {
    question: "¿Esto es una propiedad real de una estrella?",
    answer:
      "No. Este es un producto simbólico y conmemorativo. No otorga, vende ni transfiere propiedad, titularidad ni derechos sobre ningún cuerpo celeste. Los organismos astronómicos oficiales como la IAU no reconocen la venta de estrellas. Nuestro certificado es un obsequio decorativo y emotivo.",
  },
  {
    question: "¿Los datos astronómicos son reales?",
    answer:
      "Sí. La información de cada cuerpo celeste proviene de fuentes científicas públicas como el catálogo SIMBAD del Centro de Datos Astronómicos de Estrasburgo. Los datos incluyen coordenadas, magnitud, tipo espectral y otra información verificable.",
  },
  {
    question: "¿Cómo verifico un certificado?",
    answer:
      "Cada certificado tiene un código único que comienza con 'SC-'. Puedes verificarlo en cualquier momento desde nuestra página de verificación pública, sin necesidad de iniciar sesión.",
  },
  {
    question: "¿Puedo regalarlo?",
    answer:
      "¡Por supuesto! Es ideal como regalo para cumpleaños, aniversarios, graduaciones, bodas o cualquier ocasión especial. Puedes personalizar el nombre del destinatario y agregar un mensaje personal.",
  },
  {
    question: "¿Puedo descargar el PDF después de comprarlo?",
    answer:
      "Sí. Tu certificado PDF queda guardado en tu cuenta y puedes descargarlo las veces que quieras desde tu panel de usuario.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express) a través de Culqi, un procesador de pagos peruano seguro y certificado.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            Preguntas frecuentes
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            FAQ
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i} className="py-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-2 text-left"
              >
                <span className="font-serif text-base font-medium text-text-primary">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-text-secondary transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <p className="pb-4 pr-8 text-sm leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
