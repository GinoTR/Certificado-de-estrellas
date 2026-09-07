import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Concept from "@/components/landing/Concept";
import HowItWorks from "@/components/landing/HowItWorks";
import CertificatePreview from "@/components/landing/CertificatePreview";
import Explorer from "@/components/landing/Explorer";
import FAQ from "@/components/landing/FAQ";
import LegalNotice from "@/components/landing/LegalNotice";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import ParallaxStars from "@/components/landing/ParallaxStars";

export default function Home() {
  return (
    <>
      <ParallaxStars />

      <Navbar />

      <main>
        <Hero />
        <Concept />
        <HowItWorks />
        <CertificatePreview />
        <Explorer />
        <FAQ />
        <LegalNotice />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
