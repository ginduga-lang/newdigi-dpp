import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustedSection from "@/components/home/TrustedSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustedSection />

      <Footer />
    </>
  );
}