import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Star Certificate | Certificados Simbólicos de Estrellas",
  description:
    "Certificados simbólicos y conmemorativos de estrellas y cuerpos celestes. Un regalo único y personalizado con datos astronómicos reales.",
  keywords: [
    "certificado de estrella",
    "regalo original",
    "certificado simbólico",
    "estrella personalizada",
    "regalo astronomía",
    "cuerpo celeste",
  ],
  openGraph: {
    title: "Star Certificate | Certificados Simbólicos de Estrellas",
    description:
      "Certificados simbólicos y conmemorativos de estrellas y cuerpos celestes.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
